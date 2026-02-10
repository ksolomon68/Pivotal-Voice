// Civic Events Service — localStorage-backed
import { CivicEvent, EventFilters, CivicEventType } from '@/lib/types/civic-events';
import { SEED_CIVIC_EVENTS, EVENT_SOURCES } from '@/lib/events/civic-events-data';

const STORAGE_KEY = 'pv_civic_events';
const RSVP_KEY = 'pv_civic_rsvps';

function generateId(): string {
    return 'ce-' + Date.now().toString(36) + Math.random().toString(36).substr(2, 6);
}

// ─── Init ────────────────────────────────────────────────────

export function initializeCivicEvents(): void {
    if (typeof window === 'undefined') return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_CIVIC_EVENTS));
}

// ─── CRUD ────────────────────────────────────────────────────

export function getCivicEvents(): CivicEvent[] {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

function saveEvents(events: CivicEvent[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
}

export function getCivicEventById(id: string): CivicEvent | undefined {
    return getCivicEvents().find(e => e.id === id);
}

export function getApprovedEvents(): CivicEvent[] {
    return getCivicEvents().filter(e => e.approvalStatus === 'approved');
}

export function getPendingEvents(): CivicEvent[] {
    return getCivicEvents().filter(e => e.approvalStatus === 'pending');
}

export function approveEvent(id: string, reviewerId: string): void {
    const events = getCivicEvents();
    const event = events.find(e => e.id === id);
    if (event) {
        event.approvalStatus = 'approved';
        saveEvents(events);
    }
}

export function rejectEvent(id: string, reviewerId: string): void {
    const events = getCivicEvents();
    const event = events.find(e => e.id === id);
    if (event) {
        event.approvalStatus = 'rejected';
        saveEvents(events);
    }
}

// ─── Filters ─────────────────────────────────────────────────

export function filterCivicEvents(filters: EventFilters): CivicEvent[] {
    let events = getApprovedEvents();

    if (filters.dateRange) {
        const start = new Date(filters.dateRange.start).getTime();
        const end = new Date(filters.dateRange.end).getTime();
        events = events.filter(e => {
            const d = new Date(e.date).getTime();
            return d >= start && d <= end;
        });
    }

    if (filters.eventType && filters.eventType.length > 0) {
        events = events.filter(e => filters.eventType!.includes(e.eventType));
    }

    if (filters.city) {
        events = events.filter(e => e.location.city.toLowerCase() === filters.city!.toLowerCase());
    }

    if (filters.governingBody) {
        events = events.filter(e => e.governingBody?.toLowerCase().includes(filters.governingBody!.toLowerCase()));
    }

    if (filters.search) {
        const q = filters.search.toLowerCase();
        events = events.filter(e =>
            e.title.toLowerCase().includes(q) ||
            e.description.toLowerCase().includes(q) ||
            e.tags.some(t => t.toLowerCase().includes(q)) ||
            e.governingBody?.toLowerCase().includes(q) ||
            e.location.city.toLowerCase().includes(q)
        );
    }

    return events.sort((a, b) => new Date(a.date + 'T' + a.startTime).getTime() - new Date(b.date + 'T' + b.startTime).getTime());
}

// ─── Upcoming / Today / This Week ────────────────────────────

export function getUpcomingEvents(limit: number = 5): CivicEvent[] {
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    return getApprovedEvents()
        .filter(e => e.date >= today)
        .sort((a, b) => new Date(a.date + 'T' + a.startTime).getTime() - new Date(b.date + 'T' + b.startTime).getTime())
        .slice(0, limit);
}

export function getTodayEvents(): CivicEvent[] {
    const today = new Date().toISOString().split('T')[0];
    return getApprovedEvents().filter(e => e.date === today);
}

export function getThisWeekEvents(): CivicEvent[] {
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    const endOfWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    return getApprovedEvents().filter(e => e.date >= today && e.date <= endOfWeek);
}

// ─── RSVP ────────────────────────────────────────────────────

export function toggleRSVP(eventId: string, userId: string): boolean {
    const events = getCivicEvents();
    const event = events.find(e => e.id === eventId);
    if (!event) return false;

    const idx = event.rsvpUsers.indexOf(userId);
    if (idx >= 0) {
        event.rsvpUsers.splice(idx, 1);
        event.rsvpCount = Math.max(0, event.rsvpCount - 1);
        saveEvents(events);
        return false; // no longer RSVPed
    } else {
        event.rsvpUsers.push(userId);
        event.rsvpCount += 1;
        saveEvents(events);
        return true; // now RSVPed
    }
}

export function isUserRSVPed(eventId: string, userId: string): boolean {
    const event = getCivicEventById(eventId);
    return event ? event.rsvpUsers.includes(userId) : false;
}

// ─── User Submitted Events ───────────────────────────────────

export function submitEvent(data: {
    title: string;
    description: string;
    date: string;
    startTime: string;
    endTime?: string;
    location: string;
    city: string;
    eventType: CivicEventType;
    submittedBy: string;
}): CivicEvent {
    const events = getCivicEvents();
    const now = new Date().toISOString();

    const event: CivicEvent = {
        id: generateId(),
        title: data.title,
        description: data.description,
        date: data.date,
        startTime: data.startTime,
        endTime: data.endTime,
        timezone: 'America/Chicago',
        location: {
            name: data.location,
            address: data.location,
            city: data.city,
            state: 'TX',
            zip: '',
        },
        eventType: data.eventType,
        rsvpCount: 0,
        rsvpUsers: [],
        isFeatured: false,
        isRecurring: false,
        tags: [],
        lastVerified: now,
        createdAt: now,
        updatedAt: now,
        isUserSubmitted: true,
        submittedBy: data.submittedBy,
        approvalStatus: 'pending',
    };

    events.push(event);
    saveEvents(events);
    return event;
}

// ─── Calendar Export ─────────────────────────────────────────

export function generateICSEvent(event: CivicEvent): string {
    const startDate = event.date.replace(/-/g, '') + 'T' + event.startTime.replace(/:/g, '') + '00';
    const endTime = event.endTime || (() => {
        const [h, m] = event.startTime.split(':').map(Number);
        const endH = String(h + 2).padStart(2, '0');
        return `${endH}:${m.toString().padStart(2, '0')}`;
    })();
    const endDate = event.date.replace(/-/g, '') + 'T' + endTime.replace(/:/g, '') + '00';

    return [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Pivotal Voice//EN',
        'BEGIN:VEVENT',
        `DTSTART;TZID=${event.timezone}:${startDate}`,
        `DTEND;TZID=${event.timezone}:${endDate}`,
        `SUMMARY:${event.title}`,
        `DESCRIPTION:${event.description.replace(/\n/g, '\\n')}`,
        `LOCATION:${event.location.name}, ${event.location.address}, ${event.location.city}`,
        `URL:${event.sourceUrl || ''}`,
        'END:VEVENT',
        'END:VCALENDAR',
    ].join('\r\n');
}

export function downloadICS(event: CivicEvent): void {
    const ics = generateICSEvent(event);
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${event.title.replace(/[^a-z0-9]/gi, '_')}.ics`;
    a.click();
    URL.revokeObjectURL(url);
}

export function getGoogleCalendarUrl(event: CivicEvent): string {
    const startDate = event.date.replace(/-/g, '') + 'T' + event.startTime.replace(/:/g, '') + '00';
    const endTime = event.endTime || (() => {
        const [h, m] = event.startTime.split(':').map(Number);
        return `${String(h + 2).padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
    })();
    const endDate = event.date.replace(/-/g, '') + 'T' + endTime.replace(/:/g, '') + '00';
    const location = encodeURIComponent(`${event.location.name}, ${event.location.address}, ${event.location.city}, TX`);
    const details = encodeURIComponent(event.description);
    return `https://calendar.google.com/calendar/event?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
}

export function getOutlookCalendarUrl(event: CivicEvent): string {
    const start = `${event.date}T${event.startTime}:00`;
    const endTime = event.endTime || (() => {
        const [h, m] = event.startTime.split(':').map(Number);
        return `${String(h + 2).padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
    })();
    const end = `${event.date}T${endTime}:00`;
    const location = encodeURIComponent(`${event.location.name}, ${event.location.address}, ${event.location.city}, TX`);
    return `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(event.title)}&startdt=${start}&enddt=${end}&body=${encodeURIComponent(event.description)}&location=${location}`;
}

// ─── Data Sources ────────────────────────────────────────────

export function getEventSources() {
    return EVENT_SOURCES;
}

// ─── Distinct values for filters ─────────────────────────────

export function getDistinctCities(): string[] {
    const cities = new Set(getApprovedEvents().map(e => e.location.city));
    return Array.from(cities).sort();
}

export function getDistinctGoverningBodies(): string[] {
    const bodies = new Set(getApprovedEvents().filter(e => e.governingBody).map(e => e.governingBody!));
    return Array.from(bodies).sort();
}
