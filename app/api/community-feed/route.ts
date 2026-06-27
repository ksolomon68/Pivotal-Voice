/**
 * Community Feed API Route
 * Returns civic community updates for all Ellis County cities.
 * Scrapes Italy ISD and City of Italy live; other cities use structured fallback data.
 * Cached for 6 hours to avoid hammering small city/ISD servers.
 */

import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export const revalidate = 21600; // 6 hours

export interface CommunityNewsItem {
    id: string;
    title: string;
    date?: string;
    source: string;
    sourceUrl: string;
    category: 'meeting' | 'announcement' | 'alert' | 'general';
    city: string;
}

export const ELLIS_COUNTY_CITIES = [
    'Waxahachie',
    'Midlothian',
    'Red Oak',
    'Ennis',
    'Ferris',
    'Palmer',
    'Italy',
    'Ovilla',
] as const;

export type EllisCountyCity = typeof ELLIS_COUNTY_CITIES[number];

const KEYWORDS = ['meeting', 'board', 'school closed', 'election', 'vote', 'council', 'workshop', 'public hearing', 'agenda'];

function detectCategory(text: string): CommunityNewsItem['category'] {
    const lower = text.toLowerCase();
    if (lower.includes('meeting') || lower.includes('board') || lower.includes('council') || lower.includes('hearing')) return 'meeting';
    if (lower.includes('closed') || lower.includes('alert') || lower.includes('emergency')) return 'alert';
    if (lower.includes('election') || lower.includes('vote')) return 'meeting';
    return 'announcement';
}

function matchesKeywords(text: string): boolean {
    const lower = text.toLowerCase();
    return KEYWORDS.some(kw => lower.includes(kw));
}

async function scrapeItalyISD(): Promise<CommunityNewsItem[]> {
    const SOURCE_URL = 'https://www.italyisd.org/events';
    try {
        const res = await fetch(SOURCE_URL, {
            headers: { 'User-Agent': 'PivotalVoice-CivicBot/1.0 (+https://pivotalvoice.com)' },
            signal: AbortSignal.timeout(8000),
        });
        if (!res.ok) return [];

        const html = await res.text();
        const $ = cheerio.load(html);
        const items: CommunityNewsItem[] = [];

        $('[class*="event"], [class*="calendar"] li, .view-content .views-row, article').each((i, el) => {
            const titleEl = $(el).find('h2, h3, .field-title, .title, a').first();
            const title = titleEl.text().trim();
            const dateEl = $(el).find('.date-display-single, time, .field-date, [class*="date"]').first();
            const date = dateEl.attr('datetime') || dateEl.text().trim();

            if (title.length > 5 && matchesKeywords(title)) {
                items.push({
                    id: `isd-${i}-${Date.now()}`,
                    title,
                    date: date || undefined,
                    source: 'Italy ISD',
                    sourceUrl: SOURCE_URL,
                    category: detectCategory(title),
                    city: 'Italy',
                });
            }
        });

        return items.slice(0, 5);
    } catch {
        return [];
    }
}

async function scrapeCityOfItaly(): Promise<CommunityNewsItem[]> {
    const SOURCE_URL = 'http://ci.italy.tx.us/community/calendar';
    try {
        const res = await fetch(SOURCE_URL, {
            headers: { 'User-Agent': 'PivotalVoice-CivicBot/1.0 (+https://pivotalvoice.com)' },
            signal: AbortSignal.timeout(8000),
        });
        if (!res.ok) return [];

        const html = await res.text();
        const $ = cheerio.load(html);
        const items: CommunityNewsItem[] = [];

        $('table tr, li, [class*="event"], [class*="cal"]').each((i, el) => {
            const text = $(el).text().trim();
            const title = text.split('\n')[0].trim();
            const dateMatch = text.match(/\b(\w+ \d{1,2},? \d{4}|\d{1,2}\/\d{1,2}\/\d{2,4})\b/);

            if (title.length > 5 && matchesKeywords(title)) {
                items.push({
                    id: `city-${i}-${Date.now()}`,
                    title,
                    date: dateMatch?.[0],
                    source: 'City of Italy',
                    sourceUrl: SOURCE_URL,
                    category: detectCategory(title),
                    city: 'Italy',
                });
            }
        });

        return items.slice(0, 5);
    } catch {
        return [];
    }
}

// Structured fallback data for all Ellis County cities
const FALLBACK_ITEMS: CommunityNewsItem[] = [
    // Waxahachie
    {
        id: 'wax-1',
        title: 'Waxahachie City Council Regular Meeting',
        date: '2026-07-06',
        source: 'City of Waxahachie',
        sourceUrl: 'https://www.waxahachie.com/government/city_council',
        category: 'meeting',
        city: 'Waxahachie',
    },
    {
        id: 'wax-2',
        title: 'Waxahachie ISD Board of Trustees Meeting',
        date: '2026-07-20',
        source: 'Waxahachie ISD',
        sourceUrl: 'https://www.wisd.org',
        category: 'meeting',
        city: 'Waxahachie',
    },
    {
        id: 'wax-3',
        title: 'Ellis County Commissioners Court Meeting',
        date: '2026-07-13',
        source: 'Ellis County',
        sourceUrl: 'https://www.elliscountyonline.com',
        category: 'meeting',
        city: 'Waxahachie',
    },
    // Midlothian
    {
        id: 'mid-1',
        title: 'Midlothian City Council Regular Meeting',
        date: '2026-07-07',
        source: 'City of Midlothian',
        sourceUrl: 'https://www.midlothian.tx.us/government/city_council',
        category: 'meeting',
        city: 'Midlothian',
    },
    {
        id: 'mid-2',
        title: 'Midlothian ISD Board of Trustees Meeting',
        date: '2026-07-21',
        source: 'Midlothian ISD',
        sourceUrl: 'https://www.midlothianisd.net',
        category: 'meeting',
        city: 'Midlothian',
    },
    {
        id: 'mid-3',
        title: 'Midlothian Planning & Zoning Commission Meeting',
        date: '2026-07-14',
        source: 'City of Midlothian',
        sourceUrl: 'https://www.midlothian.tx.us',
        category: 'meeting',
        city: 'Midlothian',
    },
    // Red Oak
    {
        id: 'rdo-1',
        title: 'Red Oak City Council Regular Meeting',
        date: '2026-07-14',
        source: 'City of Red Oak',
        sourceUrl: 'https://www.redoaktexas.gov',
        category: 'meeting',
        city: 'Red Oak',
    },
    {
        id: 'rdo-2',
        title: 'Red Oak ISD Board of Trustees Meeting',
        date: '2026-07-20',
        source: 'Red Oak ISD',
        sourceUrl: 'https://www.redoakisd.org',
        category: 'meeting',
        city: 'Red Oak',
    },
    // Ennis
    {
        id: 'enn-1',
        title: 'Ennis City Council Regular Meeting',
        date: '2026-07-06',
        source: 'City of Ennis',
        sourceUrl: 'https://www.ennistx.gov',
        category: 'meeting',
        city: 'Ennis',
    },
    {
        id: 'enn-2',
        title: 'Ennis ISD Board of Trustees Meeting',
        date: '2026-07-20',
        source: 'Ennis ISD',
        sourceUrl: 'https://www.ennisisd.org',
        category: 'meeting',
        city: 'Ennis',
    },
    {
        id: 'enn-3',
        title: 'Ennis Economic Development Corporation Meeting',
        date: '2026-07-13',
        source: 'City of Ennis',
        sourceUrl: 'https://www.ennistx.gov',
        category: 'meeting',
        city: 'Ennis',
    },
    // Ferris
    {
        id: 'fer-1',
        title: 'Ferris City Council Regular Meeting',
        date: '2026-07-13',
        source: 'City of Ferris',
        sourceUrl: 'https://www.ferriscitytexas.com',
        category: 'meeting',
        city: 'Ferris',
    },
    {
        id: 'fer-2',
        title: 'Ferris ISD Board of Trustees Meeting',
        date: '2026-07-20',
        source: 'Ferris ISD',
        sourceUrl: 'https://www.ferrisisd.org',
        category: 'meeting',
        city: 'Ferris',
    },
    // Palmer
    {
        id: 'pal-1',
        title: 'Palmer City Council Regular Meeting',
        date: '2026-07-14',
        source: 'City of Palmer',
        sourceUrl: 'https://cityofpalmertexas.com',
        category: 'meeting',
        city: 'Palmer',
    },
    {
        id: 'pal-2',
        title: 'Palmer ISD Board of Trustees Meeting',
        date: '2026-07-21',
        source: 'Palmer ISD',
        sourceUrl: 'https://www.palmerisd.net',
        category: 'meeting',
        city: 'Palmer',
    },
    // Italy
    {
        id: 'ita-1',
        title: 'Italy City Council Regular Meeting',
        date: '2026-07-20',
        source: 'City of Italy',
        sourceUrl: 'http://ci.italy.tx.us',
        category: 'meeting',
        city: 'Italy',
    },
    {
        id: 'ita-2',
        title: 'Italy ISD Board of Trustees Meeting',
        date: '2026-07-16',
        source: 'Italy ISD',
        sourceUrl: 'https://www.italyisd.org',
        category: 'meeting',
        city: 'Italy',
    },
    {
        id: 'ita-3',
        title: 'March 3 Primary Election — Polls Open 7AM–7PM',
        date: '2026-03-03',
        source: 'City of Italy',
        sourceUrl: 'http://ci.italy.tx.us',
        category: 'meeting',
        city: 'Italy',
    },
    // Ovilla
    {
        id: 'ovi-1',
        title: 'Ovilla City Council Regular Meeting',
        date: '2026-07-02',
        source: 'City of Ovilla',
        sourceUrl: 'https://www.ovillatx.gov',
        category: 'meeting',
        city: 'Ovilla',
    },
    {
        id: 'ovi-2',
        title: 'Ovilla Planning & Zoning Commission Meeting',
        date: '2026-07-16',
        source: 'City of Ovilla',
        sourceUrl: 'https://www.ovillatx.gov',
        category: 'meeting',
        city: 'Ovilla',
    },
];

export async function GET() {
    const [isdItems, cityItems] = await Promise.all([
        scrapeItalyISD(),
        scrapeCityOfItaly(),
    ]);

    const liveItalyItems = [...isdItems, ...cityItems];

    // Merge live Italy items with fallback data for other cities
    const italyFallbacks = FALLBACK_ITEMS.filter(i => i.city === 'Italy');
    const otherCityFallbacks = FALLBACK_ITEMS.filter(i => i.city !== 'Italy');

    const italyItems = liveItalyItems.length > 0 ? liveItalyItems : italyFallbacks;
    const allItems = [...italyItems, ...otherCityFallbacks];

    return NextResponse.json(
        {
            items: allItems,
            source: liveItalyItems.length > 0 ? 'live' : 'fallback',
            fetchedAt: new Date().toISOString(),
        },
        { headers: { 'Cache-Control': 'public, s-maxage=21600, stale-while-revalidate=86400' } }
    );
}
