import { supabase } from '@/lib/supabase/client';
import { Candidate } from '@/lib/types/candidate';

export const ELLIS_COUNTY_2026_CANDIDATES: Candidate[] = [
    {
        id: 'live-gc-bailey-2026',
        name: 'Garrett Bailey',
        party: 'Republican',
        bio: 'Candidate for Ellis County Commissioner, Precinct 2.',
        incumbent: false,
        office: 'Ellis County Commissioner',
        officeLevel: 'county',
        district: 'Precinct 2',
        socialMedia: {},
        topIssues: ['Infrastructure', 'Public Safety', 'County Growth'],
        policyPositions: [],
        election: { type: 'primary', date: '2026-03-03', opponents: ['Roger Cole', 'John Paul Dineen III'] },
        raceStatus: 'active',
    },
    {
        id: 'live-gc-cole-2026',
        name: 'Roger Cole',
        party: 'Republican',
        bio: 'Candidate for Ellis County Commissioner, Precinct 2.',
        incumbent: false,
        office: 'Ellis County Commissioner',
        officeLevel: 'county',
        district: 'Precinct 2',
        socialMedia: {},
        topIssues: ['Fiscal Responsibility', 'Roads', 'Agricultural Interests'],
        policyPositions: [],
        election: { type: 'primary', date: '2026-03-03', opponents: ['Garrett Bailey', 'John Paul Dineen III'] },
        raceStatus: 'active',
    },
    {
        id: 'live-gc-dineen-2026',
        name: 'John Paul Dineen III',
        party: 'Republican',
        bio: 'Candidate for Ellis County Commissioner, Precinct 2.',
        incumbent: false,
        office: 'Ellis County Commissioner',
        officeLevel: 'county',
        district: 'Precinct 2',
        socialMedia: {},
        topIssues: ['Community Development', 'Infrastructure', 'Local Business'],
        policyPositions: [],
        election: { type: 'primary', date: '2026-03-03', opponents: ['Garrett Bailey', 'Roger Cole'] },
        raceStatus: 'active',
    },
    {
        id: 'live-gc-jinadu-2026',
        name: 'Oyinkansola Jinadu',
        party: 'Democrat',
        bio: 'Candidate for Ellis County Commissioner, Precinct 4.',
        incumbent: false,
        office: 'Ellis County Commissioner',
        officeLevel: 'county',
        district: 'Precinct 4',
        socialMedia: {},
        topIssues: ['Equity', 'Community Resources', 'Public Safety'],
        policyPositions: [],
        election: { type: 'primary', date: '2026-03-03', opponents: ['Kyle Butler'] },
        raceStatus: 'active',
    },
    {
        id: 'live-gc-butler-2026',
        name: 'Kyle Butler',
        party: 'Republican',
        bio: 'Candidate for Ellis County Commissioner, Precinct 4.',
        incumbent: false,
        office: 'Ellis County Commissioner',
        officeLevel: 'county',
        district: 'Precinct 4',
        socialMedia: {},
        topIssues: ['Tax Relief', 'Infrastructure', 'Small Business'],
        policyPositions: [],
        election: { type: 'primary', date: '2026-03-03', opponents: ['Oyinkansola Jinadu'] },
        raceStatus: 'active',
    },
    {
        id: 'live-gc-adams-2026',
        name: 'Brandon Adams',
        party: 'Republican',
        bio: 'Candidate for Justice of the Peace, Ellis County.',
        incumbent: false,
        office: 'Justice of the Peace',
        officeLevel: 'county',
        district: 'Precinct 3 & 4',
        socialMedia: {},
        topIssues: ['Law & Order', 'Community Justice', 'Local Courts'],
        policyPositions: [],
        election: { type: 'primary', date: '2026-03-03', opponents: ['Pam Hampton'] },
        raceStatus: 'active',
    },
    {
        id: 'live-gc-hampton-2026',
        name: 'Pam Hampton',
        party: 'Democrat',
        bio: 'Candidate for Justice of the Peace, Ellis County.',
        incumbent: false,
        office: 'Justice of the Peace',
        officeLevel: 'county',
        district: 'Precinct 3 & 4',
        socialMedia: {},
        topIssues: ['Access to Justice', 'Community Safety', 'Fair Courts'],
        policyPositions: [],
        election: { type: 'primary', date: '2026-03-03', opponents: ['Brandon Adams'] },
        raceStatus: 'active',
    },
];

export async function getLiveCandidates(): Promise<{ candidates: Candidate[]; source: 'supabase' | 'fallback'; error?: string }> {
    try {
        const { data, error } = await supabase
            .from('candidates')
            .select('*');

        if (error) {
            console.error('[Civic] Supabase Error fetching candidates:', error);
            return { candidates: ELLIS_COUNTY_2026_CANDIDATES, source: 'fallback', error: error.message };
        }

        if (!data || data.length === 0) {
            // DB is empty, use fallback array until they run the seeder script
            return { candidates: ELLIS_COUNTY_2026_CANDIDATES, source: 'fallback' };
        }

        const candidates: Candidate[] = data.map((c: any) => ({
            id: c.id,
            name: c.name,
            party: c.party,
            photo: c.photo,
            bio: c.bio,
            incumbent: c.incumbent,
            yearsInOffice: c.years_in_office,
            office: c.office,
            officeLevel: c.office_level,
            district: c.district,
            precinct: c.precinct,
            campaignWebsite: c.campaign_website,
            donationUrl: c.donation_url,
            email: c.email,
            phone: c.phone,
            socialMedia: {
                twitter: c.twitter,
                facebook: c.facebook,
                instagram: c.instagram,
                youtube: c.youtube,
            },
            topIssues: c.top_issues || [],
            policyPositions: c.policy_positions || [],
            election: {
                type: c.election_type || 'primary',
                date: c.election_date,
                opponents: c.opponents || [],
            },
            raceStatus: c.race_status || 'active',
            endorsements: c.endorsements || [],
            eventIds: c.event_ids || [],
        }));

        return { candidates, source: 'supabase' };
    } catch (err: any) {
        console.error('[Civic] Unexpected error fetching candidates:', err);
        return { candidates: ELLIS_COUNTY_2026_CANDIDATES, source: 'fallback', error: err?.message ?? 'Unknown error' };
    }
}
