/**
 * Election Status Utility
 * Compares current date against election-dates-2026.json.
 * Returns a "Priority Alert" if within 14 days of an election.
 */

export interface ElectionDate {
    id: string;
    name: string;
    date: string;
    location: string;
    address: string;
    zip: string;
    pollingHours: string;
    status: 'live' | 'upcoming' | 'planned';
    description: string;
    italyPollingPlace: {
        name: string;
        address: string;
        hours: string;
    };
}

export interface ElectionAlertResult {
    hasAlert: boolean;
    alertLevel: 'today' | 'priority' | 'upcoming' | 'none';
    daysUntil: number;
    election: ElectionDate | null;
    message: string;
}

const PRIORITY_WINDOW_DAYS = 14;

export function getElectionStatus(elections: ElectionDate[]): ElectionAlertResult {
    const now = new Date();
    // Use noon to avoid timezone-edge issues
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0);

    // Filter to future elections + today, sorted ascending
    const upcoming = elections
        .map(e => ({ election: e, date: new Date(e.date + 'T12:00:00') }))
        .filter(({ date }) => date >= today)
        .sort((a, b) => a.date.getTime() - b.date.getTime());

    if (upcoming.length === 0) {
        return { hasAlert: false, alertLevel: 'none', daysUntil: -1, election: null, message: 'No upcoming elections.' };
    }

    const { election, date: nextDate } = upcoming[0];
    const msPerDay = 1000 * 60 * 60 * 24;
    const daysUntil = Math.round((nextDate.getTime() - today.getTime()) / msPerDay);

    if (daysUntil === 0) {
        return {
            hasAlert: true,
            alertLevel: 'today',
            daysUntil: 0,
            election,
            message: `🗳️ TODAY is ${election.name}! Polls are open ${election.italyPollingPlace.hours}.`,
        };
    }

    if (daysUntil <= PRIORITY_WINDOW_DAYS) {
        return {
            hasAlert: true,
            alertLevel: 'priority',
            daysUntil,
            election,
            message: `⚠️ ${election.name} is in ${daysUntil} day${daysUntil === 1 ? '' : 's'} — ${election.date}`,
        };
    }

    // More than 14 days away — no banner, but return info
    return {
        hasAlert: false,
        alertLevel: 'upcoming',
        daysUntil,
        election,
        message: `Next election: ${election.name} on ${election.date}`,
    };
}

export function getNearestPollingPlace(zip: string, election: ElectionDate) {
    // For Italy TX (76651) always return the Italy polling place
    if (zip === '76651') return election.italyPollingPlace;
    return {
        name: election.location,
        address: election.address,
        hours: election.pollingHours,
    };
}
