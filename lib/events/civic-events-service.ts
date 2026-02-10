// Civic Events Service — Supabase-backed
import { supabase } from '@/lib/supabase/client';
import { CivicEvent, EventFilters, CivicEventType } from '@/lib/types/civic-events';

// ─── CRUD ────────────────────────────────────────────────────

export async function getCivicEvents(): Promise<CivicEvent[]> {
    const { data, error } = await supabase
        .from('civic_events')
        .select('*, event_rsvps(user_id)')
        .order('date', { ascending: true })
        .order('start_time', { ascending: true });

    if (error) {
        console.error('Error fetching events:', error);
        return [];
    }

    // Map rsvpUsers from event_rsvps relation
    return (data as any[]).map(event => ({
        ...event,
        rsvpUsers: event.event_rsvps.map((r: any) => r.user_id),
        rsvpCount: event.event_rsvps.length
    })) as CivicEvent[];
}

export async function getCivicEventById(id: string): Promise<CivicEvent | undefined> {
    const { data } = await supabase
        .from('civic_events')
        .select('*, event_rsvps(user_id)')
        .eq('id', id)
        .single();

    if (!data) return undefined;

    return {
        ...data,
        rsvpUsers: (data as any).event_rsvps.map((r: any) => r.user_id),
        rsvpCount: (data as any).event_rsvps.length
    } as CivicEvent;
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
    const { data: newEvent, error } = await supabase
        .from('civic_events')
        .insert([{
            ...data,
            approval_status: 'pending',
            created_at: new Date().toISOString()
        }])
        .select()
        .single();

    if (error) {
        console.error('Error submitting event:', error);
        return null;
    }
    return newEvent as CivicEvent;
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
