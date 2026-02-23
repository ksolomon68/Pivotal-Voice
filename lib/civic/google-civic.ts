/**
 * Google Civic Information API — Ellis County Candidate Helper
 *
 * Requires GOOGLE_CIVIC_API_KEY in your environment (server-side only).
 * Falls back to known Ellis County 2026 candidates if the key is missing or the API fails.
 */

import { Candidate, PartyAffiliation } from '@/lib/types/candidate';

const CIVIC_API_BASE = 'https://www.googleapis.com/civicinfo/v2';
const DEFAULT_ADDRESS = '200 S College St, Italy, TX 76651';

// ─── Ellis County 2026 Primary — Known Candidates (Fallback / Seed Data) ────────

export const ELLIS_COUNTY_2026_CANDIDATES: Candidate[] = [
    // Commissioner Precinct 2
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
    // Commissioner Precinct 4
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
    // Justice of the Peace
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

// ─── Party name normalizer ───────────────────────────────────────────────────

function normalizeParty(raw: string): PartyAffiliation {
    const lower = (raw || '').toLowerCase();
    if (lower.includes('republican')) return 'Republican';
    if (lower.includes('democrat')) return 'Democrat';
    if (lower.includes('libertarian')) return 'Libertarian';
    return 'Independent';
}

// ─── Map Google Civic candidate to our Candidate interface ───────────────────

function mapCivicCandidate(
    civicCandidate: any,
    office: string,
    district: string,
    index: number
): Candidate {
    const channels = civicCandidate.channels || [];
    const social: Candidate['socialMedia'] = {};
    channels.forEach((ch: any) => {
        const type = (ch.type || '').toLowerCase();
        if (type === 'twitter' || type === 'x') social.twitter = ch.id;
        if (type === 'facebook') social.facebook = ch.id;
        if (type === 'youtube') social.youtube = ch.id;
    });

    return {
        id: `civic-${office.replace(/\s+/g, '-').toLowerCase()}-${index}-2026`,
        name: civicCandidate.name,
        party: normalizeParty(civicCandidate.party || ''),
        photo: civicCandidate.photoUrl,
        bio: `2026 candidate for ${office}${district ? ', ' + district : ''}.`,
        incumbent: false,
        office,
        officeLevel: 'county',
        district,
        campaignWebsite: civicCandidate.candidateUrl,
        socialMedia: social,
        topIssues: [],
        policyPositions: [],
        election: { type: 'primary', date: '2026-03-03', opponents: [] },
        raceStatus: 'active',
    };
}

// ─── Determine if a contest is relevant to Ellis County / Italy TX ───────────

function isEllisCountyContest(contest: any): boolean {
    const officeText = (contest.office || '').toLowerCase();
    const divisionId = (contest.district?.id || '').toLowerCase();

    return (
        divisionId.includes('ellis') ||
        officeText.includes('ellis') ||
        officeText.includes('italy city council') ||
        officeText.includes('italy isd') ||
        officeText.includes('commissioner') ||
        officeText.includes('justice of the peace')
    );
}

// ─── Main export: getLiveCandidates ─────────────────────────────────────────

export async function getLiveCandidates(
    address: string = DEFAULT_ADDRESS
): Promise<{ candidates: Candidate[]; source: 'google-civic' | 'fallback'; error?: string }> {
    const apiKey = process.env.GOOGLE_CIVIC_API_KEY;

    if (!apiKey) {
        console.warn('[Civic] GOOGLE_CIVIC_API_KEY not set — using fallback candidates');
        return { candidates: ELLIS_COUNTY_2026_CANDIDATES, source: 'fallback', error: 'API key not configured' };
    }

    try {
        const url = new URL(`${CIVIC_API_BASE}/voterinfo`);
        url.searchParams.set('key', apiKey);
        url.searchParams.set('address', address);
        url.searchParams.set('electionId', 'ocd-election/country:us/state:tx/2026-03-03_primary');

        const res = await fetch(url.toString(), { next: { revalidate: 3600 } });

        if (!res.ok) {
            const msg = `Civic API ${res.status}: ${res.statusText}`;
            console.error('[Civic]', msg);
            return { candidates: ELLIS_COUNTY_2026_CANDIDATES, source: 'fallback', error: msg };
        }

        const data = await res.json();
        const contests: any[] = data.contests || [];

        const candidates: Candidate[] = [];

        for (const contest of contests) {
            if (!isEllisCountyContest(contest)) continue;

            const officeName: string = contest.office || 'Unknown Office';
            const districtName: string = contest.district?.name || '';
            const civicCandidates: any[] = contest.candidates || [];

            civicCandidates.forEach((c, i) => {
                candidates.push(mapCivicCandidate(c, officeName, districtName, i));
            });
        }

        if (candidates.length === 0) {
            // API returned data but no Ellis County contests — use fallback
            return { candidates: ELLIS_COUNTY_2026_CANDIDATES, source: 'fallback', error: 'No Ellis County contests found in API response' };
        }

        return { candidates, source: 'google-civic' };
    } catch (err: any) {
        console.error('[Civic] Error fetching live candidates:', err?.message ?? err);
        return { candidates: ELLIS_COUNTY_2026_CANDIDATES, source: 'fallback', error: err?.message ?? 'Unknown error' };
    }
}
