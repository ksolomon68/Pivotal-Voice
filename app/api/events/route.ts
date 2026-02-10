import { NextResponse } from 'next/server';
import sampleEvents from '@/data/sample-events.json';
import type { Event, EventType, OfficeLevel } from '@/lib/types/event';

/**
 * GET /api/events
 * Structured JSON data feed of all events.
 * Query params: type, office, party, city, from, to, verified
 */
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    let events = sampleEvents.events as Event[];

    // Filter by event type
    const typeParam = searchParams.get('type');
    if (typeParam) {
        const types = typeParam.split(',') as EventType[];
        events = events.filter((e) => types.includes(e.eventType));
    }

    // Filter by office level
    const officeParam = searchParams.get('office');
    if (officeParam) {
        const levels = officeParam.split(',') as OfficeLevel[];
        events = events.filter((e) => levels.includes(e.officeLevel));
    }

    // Filter by party
    const partyParam = searchParams.get('party');
    if (partyParam) {
        const parties = partyParam.split(',');
        events = events.filter((e) =>
            e.candidates.some((c) => parties.includes(c.party))
        );
    }

    // Filter by city
    const cityParam = searchParams.get('city');
    if (cityParam) {
        const cities = cityParam.split(',');
        events = events.filter((e) => cities.includes(e.venue.city));
    }

    // Filter by date range
    const fromParam = searchParams.get('from');
    const toParam = searchParams.get('to');
    if (fromParam) {
        events = events.filter((e) => e.date >= fromParam);
    }
    if (toParam) {
        events = events.filter((e) => e.date <= toParam);
    }

    // Filter verified only
    const verifiedParam = searchParams.get('verified');
    if (verifiedParam === 'true') {
        events = events.filter((e) => e.verified);
    }

    // Sort by date ascending
    events.sort((a, b) => a.date.localeCompare(b.date));

    return NextResponse.json({
        events,
        totalCount: events.length,
        metadata: sampleEvents.metadata,
    });
}
