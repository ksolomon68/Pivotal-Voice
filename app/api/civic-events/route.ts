import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { CivicEvent } from '@/lib/types/civic-events';
import { SEED_CIVIC_EVENTS } from '@/lib/events/civic-events-data';

export const dynamic = 'force-dynamic'; // always fetch live from Supabase

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

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
        rsvpCount: row.rsvp_count || 0,
        rsvpUsers: (row.event_rsvps || []).map((r: any) => r.user_id),
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

export async function GET() {
    try {
        const { data, error } = await supabase
            .from('civic_events')
            .select('*, event_rsvps(user_id)')
            .eq('approval_status', 'approved')
            .order('date', { ascending: true })
            .order('start_time', { ascending: true });

        if (error) throw error;

        const dbEvents = (data || []).map(mapDbRow);

        // Merge with seed data, deduplicate by title+date
        const dbKeys = new Set(dbEvents.map((e) => `${e.title}|${e.date}`));
        const seedOnly = SEED_CIVIC_EVENTS.filter(
            (e) => !dbKeys.has(`${e.title}|${e.date}`)
        );

        const merged = [...dbEvents, ...seedOnly].sort((a, b) => {
            const da = new Date(`${a.date}T${a.startTime}`).getTime();
            const db2 = new Date(`${b.date}T${b.startTime}`).getTime();
            return da - db2;
        });

        return NextResponse.json({ events: merged, count: merged.length });
    } catch (err: any) {
        console.error('[/api/civic-events] Supabase error, using static data:', err?.message || err);
        const sorted = [...SEED_CIVIC_EVENTS].sort((a, b) => {
            const da = new Date(`${a.date}T${a.startTime}`).getTime();
            const db2 = new Date(`${b.date}T${b.startTime}`).getTime();
            return da - db2;
        });
        return NextResponse.json(
            { events: sorted, count: sorted.length, fallback: true },
            { headers: { 'Cache-Control': 'no-store' } }
        );
    }
}
