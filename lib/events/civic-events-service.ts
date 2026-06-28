// Civic Events Service — Supabase-backed
import { supabase } from '@/lib/supabase/client';
import { CivicEvent, EventFilters, CivicEventType } from '@/lib/types/civic-events';

import { LOCAL_MEETUP_EVENTS } from './civic-events-data';

// ─── Map DB Row to CivicEvent ───────────────────────────────

function mapDbRow(row: any): CivicEvent {
    // The live DB stores location as a JSONB object; handle both flat columns and JSONB
    const loc = row.location && typeof row.location === 'object'
        ? row.location
        : {};

    return {
        id: row.id,
        title: row.title,
        description: row.description || '',
        date: row.date,
        startTime: row.start_time?.slice(0, 5) || '00:00',
        endTime: row.end_time?.slice(0, 5),
        timezone: row.timezone || 'America/Chicago',
        location: {
            name: loc.name || row.location_name || '',
            address: loc.address || row.location_address || '',
            city: loc.city || row.location_city || '',
            state: loc.state || row.location_state || 'TX',
            zip: loc.zip || row.location_zip || '',
            mapUrl: loc.mapUrl || row.location_map_url,
        },
        eventType: row.event_type || 'community_event',
        governingBody: row.governing_body,
        agendaUrl: row.agenda_url,
        minutesUrl: row.minutes_url,
        zoomUrl: row.zoom_url,
        participationInstructions: row.participation_instructions,
        publicCommentDeadline: row.public_comment_deadline,
        rsvpUsers: (row.event_rsvps || []).map((r: any) => r.user_id),
        rsvpCount: row.event_rsvps ? row.event_rsvps.length : (row.rsvp_count || 0),
        isFeatured: row.is_featured || false,
        isRecurring: row.is_recurring || false,
        recurringSchedule: row.recurring_schedule,
        tags: row.tags || [],
        sourceUrl: row.source_url,
        sourceName: row.source_name,
        lastVerified: row.last_verified || row.updated_at || new Date().toISOString(),
        createdAt: row.created_at,
        updatedAt: row.updated_at,
        isUserSubmitted: row.is_user_submitted || false,
        submittedBy: row.submitted_by,
        approvalStatus: row.approval_status || 'approved',
    };
}

// ─── CRUD ────────────────────────────────────────────────────

export async function getCivicEvents(): Promise<CivicEvent[]> {
    try {
        const res = await fetch('/api/civic-events');
        if (!res.ok) throw new Error('Failed to fetch events from API');
        const data = await res.json();
        return data.events || [];
    } catch (error) {
        console.error('Error fetching events from API:', error);
        // Fallback to local events if the API fails
        return LOCAL_MEETUP_EVENTS;
    }
}

export async function getCivicEventById(id: string): Promise<CivicEvent | undefined> {
    // Check local events first
    const localEvent = LOCAL_MEETUP_EVENTS.find(e => e.id === id);
    if (localEvent) {
        return localEvent;
    }

    const { data } = await supabase
        .from('civic_events')
        .select('*, event_rsvps(user_id)')
        .eq('id', id)
        .single();

    if (!data) return undefined;

    return mapDbRow(data);
}

export async function getApprovedEvents(): Promise<CivicEvent[]> {
    const events = await getCivicEvents();
    return events.filter(e => e.approvalStatus === 'approved');
}

// ─── RSVP ────────────────────────────────────────────────────

export async function toggleRSVP(eventId: string, userId: string): Promise<boolean> {
    const { data: existing } = await supabase
        .from('event_rsvps')
        .select('*')
        .eq('event_id', eventId)
        .eq('user_id', userId)
        .single();

    if (existing) {
        await supabase
            .from('event_rsvps')
            .delete()
            .eq('event_id', eventId)
            .eq('user_id', userId);
        return false;
    } else {
        await supabase
            .from('event_rsvps')
            .insert([{ event_id: eventId, user_id: userId }]);
        return true;
    }
}

// ─── User Submitted Events ───────────────────────────────────

export async function submitEvent(data: any): Promise<CivicEvent | null> {
    // Map camelCase fields from frontend to snake_case for the database
    const dbPayload = {
        title: data.title,
        description: data.description,
        date: data.date,
        start_time: data.startTime,
        end_time: data.endTime,
        location_name: data.location,
        location_city: data.city,
        event_type: data.eventType,
        submitted_by: data.submittedBy,
        approval_status: 'pending',
        created_at: new Date().toISOString()
    };

    const { data: newEvent, error } = await supabase
        .from('civic_events')
        .insert([dbPayload])
        .select()
        .single();

    if (error) {
        console.error('Error submitting event:', error);
        return null;
    }
    return mapDbRow(newEvent);
}
// ─── Helpers ──────────────────────────────────────────────────

export async function getUpcomingEvents(limit: number = 10): Promise<CivicEvent[]> {
    const events = await getCivicEvents();
    const today = new Date().toISOString().split('T')[0];
    return events.filter(e => e.date >= today).slice(0, limit);
}

export async function getTodayEvents(): Promise<CivicEvent[]> {
    const events = await getCivicEvents();
    const today = new Date().toISOString().split('T')[0];
    return events.filter(e => e.date === today);
}
// ─── Calendar Helpers ──────────────────────────────────────────

export function getGoogleCalendarUrl(event: CivicEvent): string {
    const start = new Date(event.date + 'T' + event.startTime).toISOString().replace(/-|:|\.\d+/g, '');
    const end = event.endTime
        ? new Date(event.date + 'T' + event.endTime).toISOString().replace(/-|:|\.\d+/g, '')
        : new Date(new Date(event.date + 'T' + event.startTime).getTime() + 60 * 60 * 1000).toISOString().replace(/-|:|\.\d+/g, '');

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${start}/${end}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location.name)}`;
}

export function getOutlookCalendarUrl(event: CivicEvent): string {
    const start = new Date(event.date + 'T' + event.startTime).toISOString();
    const end = event.endTime
        ? new Date(event.date + 'T' + event.endTime).toISOString()
        : new Date(new Date(event.date + 'T' + event.startTime).getTime() + 60 * 60 * 1000).toISOString();

    return `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(event.title)}&startdt=${start}&enddt=${end}&body=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location.name)}`;
}

export function downloadICS(event: CivicEvent): void {
    const start = new Date(event.date + 'T' + event.startTime).toISOString().replace(/-|:|\.\d+/g, '');
    const end = event.endTime
        ? new Date(event.date + 'T' + event.endTime).toISOString().replace(/-|:|\.\d+/g, '')
        : new Date(new Date(event.date + 'T' + event.startTime).getTime() + 60 * 60 * 1000).toISOString().replace(/-|:|\.\d+/g, '');

    const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'BEGIN:VEVENT',
        `DTSTART:${start}`,
        `DTEND:${end}`,
        `SUMMARY:${event.title}`,
        `DESCRIPTION:${event.description}`,
        `LOCATION:${event.location.name}`,
        'END:VEVENT',
        'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.title.replace(/\s+/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
