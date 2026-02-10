// Civic Events TypeScript interfaces

export type CivicEventType =
    | 'commissioners_court'
    | 'city_council'
    | 'school_board'
    | 'planning_zoning'
    | 'economic_dev'
    | 'party_meeting'
    | 'candidate_forum'
    | 'town_hall'
    | 'voter_registration'
    | 'debate'
    | 'meet_greet'
    | 'community_event';

export interface CivicEvent {
    id: string;
    title: string;
    description: string;
    date: string;
    startTime: string;
    endTime?: string;
    timezone: string;
    location: {
        name: string;
        address: string;
        city: string;
        state: string;
        zip: string;
        mapUrl?: string;
    };
    eventType: CivicEventType;
    governingBody?: string; // e.g. "Waxahachie City Council", "Midlothian ISD Board"
    agendaUrl?: string;
    minutesUrl?: string;
    zoomUrl?: string;
    participationInstructions?: string;
    publicCommentDeadline?: string;
    rsvpCount: number;
    rsvpUsers: string[];
    isFeatured: boolean;
    isRecurring: boolean;
    recurringSchedule?: string; // e.g. "1st and 3rd Tuesday"
    tags: string[];
    forumTopicId?: string; // auto-linked discussion thread
    sourceUrl?: string;
    sourceName?: string;
    lastVerified: string;
    createdAt: string;
    updatedAt: string;
    isUserSubmitted: boolean;
    submittedBy?: string;
    approvalStatus: 'approved' | 'pending' | 'rejected';
}

export interface EventSource {
    id: string;
    name: string;
    url: string;
    type: 'government' | 'education' | 'party' | 'community' | 'state';
    lastChecked: string;
    status: 'active' | 'stale' | 'unavailable';
    eventsCount: number;
}

export interface EventFilters {
    dateRange?: { start: string; end: string };
    eventType?: CivicEventType[];
    city?: string;
    governingBody?: string;
    search?: string;
}

export const EVENT_TYPE_LABELS: Record<CivicEventType, string> = {
    commissioners_court: 'Commissioners Court',
    city_council: 'City Council',
    school_board: 'School Board',
    planning_zoning: 'Planning & Zoning',
    economic_dev: 'Economic Development',
    party_meeting: 'Party Meeting',
    candidate_forum: 'Candidate Forum',
    town_hall: 'Town Hall',
    voter_registration: 'Voter Registration',
    debate: 'Debate',
    meet_greet: 'Meet & Greet',
    community_event: 'Community Event',
};

export const EVENT_TYPE_COLORS: Record<CivicEventType, string> = {
    commissioners_court: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    city_council: 'bg-green-500/15 text-green-400 border-green-500/30',
    school_board: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    planning_zoning: 'bg-teal-500/15 text-teal-400 border-teal-500/30',
    economic_dev: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    party_meeting: 'bg-red-500/15 text-red-400 border-red-500/30',
    candidate_forum: 'bg-gold/15 text-gold border-gold/30',
    town_hall: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    voter_registration: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
    debate: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
    meet_greet: 'bg-pink-500/15 text-pink-400 border-pink-500/30',
    community_event: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30',
};
