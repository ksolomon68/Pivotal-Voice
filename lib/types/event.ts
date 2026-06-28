// Event data types for Pivotal Voice platform

export interface Candidate {
    name: string;
    party: 'Republican' | 'Democrat' | 'Independent' | 'Non-Partisan';
    incumbent: boolean;
}

export interface Venue {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    coordinates?: {
        lat: number;
        lng: number;
    };
    accessible: boolean;
}

export type EventType =
    | 'debate'
    | 'town_hall'
    | 'rally'
    | 'meet_greet'
    | 'forum'
    | 'listening_session'
    | 'candidate_appearance';

export type OfficeLevel = 'local' | 'county' | 'state' | 'federal';

export interface Event {
    id: string;
    title: string;
    date: string; // ISO date string (YYYY-MM-DD)
    startTime: string; // 24-hour format (HH:MM)
    endTime: string; // 24-hour format (HH:MM)
    timezone: string;
    venue: Venue;
    eventType: EventType;
    office: string;
    officeLevel: OfficeLevel;
    candidates: Candidate[];
    description: string;
    sourceUrl: string;
    registrationUrl?: string;
    liveStreamUrl?: string;
    featured: boolean;
    verified: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface EventFilters {
    eventType?: EventType[];
    officeLevel?: OfficeLevel[];
    party?: string[];
    dateRange?: {
        start: string;
        end: string;
    };
    city?: string[];
    searchQuery?: string;
    hidePastEvents?: boolean;
}
