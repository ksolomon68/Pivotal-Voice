import { NextResponse } from 'next/server';
import sampleEvents from '@/data/sample-events.json';
import { generateICSFeed } from '@/lib/utils/ics';
import type { Event } from '@/lib/types/event';

/**
 * GET /api/events/ics
 * Downloadable ICS calendar file with all upcoming events.
 */
export async function GET() {
    const today = new Date().toISOString().split('T')[0];
    const upcomingEvents = (sampleEvents.events as Event[]).filter(
        (e) => e.date >= today
    );

    const icsContent = generateICSFeed(upcomingEvents);

    return new NextResponse(icsContent, {
        status: 200,
        headers: {
            'Content-Type': 'text/calendar; charset=utf-8',
            'Content-Disposition':
                'attachment; filename="pivotal-voice-ellis-county-events.ics"',
        },
    });
}
