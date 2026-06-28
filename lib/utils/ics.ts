import { Event } from '@/lib/types/event';

/**
 * Format a time string from 24hr (HH:MM) to 12hr AM/PM (h:mm A CT).
 */
export function formatTime12h(time24: string): string {
    const [hourStr, minute] = time24.split(':');
    let hour = parseInt(hourStr, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    if (hour === 0) hour = 12;
    else if (hour > 12) hour -= 12;
    return `${hour}:${minute} ${ampm}`;
}

/**
 * Generate an ICS-formatted string for a single event.
 */
export function generateICSEvent(event: Event): string {
    const dtStart = `${event.date.replace(/-/g, '')}T${event.startTime.replace(':', '')}00`;
    const dtEnd = `${event.date.replace(/-/g, '')}T${event.endTime.replace(':', '')}00`;
    const location = `${event.venue.name}, ${event.venue.address}, ${event.venue.city}, ${event.venue.state} ${event.venue.zip}`;
    const description = event.description.replace(/\n/g, '\\n');

    return [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Pivotal Voice//Ellis County Events//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'BEGIN:VEVENT',
        `DTSTART;TZID=America/Chicago:${dtStart}`,
        `DTEND;TZID=America/Chicago:${dtEnd}`,
        `SUMMARY:${event.title}`,
        `DESCRIPTION:${description}`,
        `LOCATION:${location}`,
        `URL:${event.sourceUrl}`,
        `UID:${event.id}@pivotalvoice.com`,
        `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}`,
        event.registrationUrl ? `X-REGISTRATION-URL:${event.registrationUrl}` : '',
        'STATUS:CONFIRMED',
        'END:VEVENT',
        'END:VCALENDAR',
    ]
        .filter(Boolean)
        .join('\r\n');
}

/**
 * Generate a full ICS calendar feed containing multiple events.
 */
export function generateICSFeed(events: Event[]): string {
    const vEvents = events.map((event) => {
        const dtStart = `${event.date.replace(/-/g, '')}T${event.startTime.replace(':', '')}00`;
        const dtEnd = `${event.date.replace(/-/g, '')}T${event.endTime.replace(':', '')}00`;
        const location = `${event.venue.name}, ${event.venue.address}, ${event.venue.city}, ${event.venue.state} ${event.venue.zip}`;
        const description = event.description.replace(/\n/g, '\\n');

        return [
            'BEGIN:VEVENT',
            `DTSTART;TZID=America/Chicago:${dtStart}`,
            `DTEND;TZID=America/Chicago:${dtEnd}`,
            `SUMMARY:${event.title}`,
            `DESCRIPTION:${description}`,
            `LOCATION:${location}`,
            `URL:${event.sourceUrl}`,
            `UID:${event.id}@pivotalvoice.com`,
            `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}`,
            'STATUS:CONFIRMED',
            'END:VEVENT',
        ].join('\r\n');
    });

    return [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Pivotal Voice//Ellis County Events//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'X-WR-CALNAME:Pivotal Voice – Ellis County Political Events',
        ...vEvents,
        'END:VCALENDAR',
    ].join('\r\n');
}

/**
 * Trigger a browser download of an ICS file.
 */
export function downloadICS(icsContent: string, filename: string): void {
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
