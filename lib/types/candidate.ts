export type PartyAffiliation = 'Republican' | 'Democrat' | 'Independent' | 'Libertarian' | 'Non-Partisan';
export type OfficeLevel = 'local' | 'county' | 'state' | 'federal';
export type ElectionType = 'primary' | 'general' | 'special' | 'runoff';
export type RaceStatus = 'active' | 'won' | 'lost' | 'withdrew' | 'pending';

export interface Candidate {
    id: string;
    name: string;
    party: PartyAffiliation;
    photo?: string;
    bio: string;
    incumbent: boolean;
    yearsInOffice?: number;

    // Office info
    office: string;
    officeLevel: OfficeLevel;
    district?: string;
    precinct?: string;

    // Contact & links
    campaignWebsite?: string;
    donationUrl?: string;
    email?: string;
    phone?: string;
    socialMedia: {
        twitter?: string;
        facebook?: string;
        instagram?: string;
        youtube?: string;
    };

    // Platform
    topIssues: string[];
    policyPositions: {
        topic: string;
        stance: string;
    }[];

    // Election
    election: {
        type: ElectionType;
        date: string;
        opponents: string[];
    };

    raceStatus: RaceStatus;
    endorsements?: string[];
    eventIds?: string[]; // links to calendar events
}

export interface VotingInfo {
    registrationDeadline: string;
    earlyVoting: {
        startDate: string;
        endDate: string;
        locations: {
            name: string;
            address: string;
            city: string;
            hours: string;
        }[];
    };
    electionDay: {
        date: string;
        pollingLocations: string;
    };
    absenteeBallot: {
        requestDeadline: string;
        returnDeadline: string;
        eligibility: string;
    };
}

export interface CandidateFilters {
    searchQuery?: string;
    party?: PartyAffiliation[];
    officeLevel?: OfficeLevel[];
    electionType?: ElectionType[];
    district?: string;
    incumbentOnly?: boolean;
}
