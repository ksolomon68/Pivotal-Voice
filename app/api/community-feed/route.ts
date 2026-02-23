/**
 * Community Feed API Route
 * Scrapes Italy ISD and City of Italy websites for recent community events.
 * Cached for 6 hours to avoid hammering small city/ISD servers.
 */

import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export const revalidate = 21600; // 6 hours

export interface CommunityNewsItem {
    id: string;
    title: string;
    date?: string;
    source: 'Italy ISD' | 'City of Italy';
    sourceUrl: string;
    category: 'meeting' | 'announcement' | 'alert' | 'general';
}

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

        // Italy ISD uses a standard school site — try common event list selectors
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
                });
            }
        });

        return items.slice(0, 5);
    } catch {
        return [];
    }
}

// Fallback hardcoded items in case both sites are unreachable
const FALLBACK_ITEMS: CommunityNewsItem[] = [
    {
        id: 'fallback-1',
        title: 'Italy City Council Regular Meeting',
        date: '2026-03-10',
        source: 'City of Italy',
        sourceUrl: 'http://ci.italy.tx.us',
        category: 'meeting',
    },
    {
        id: 'fallback-2',
        title: 'Italy ISD Board of Trustees Meeting',
        date: '2026-03-17',
        source: 'Italy ISD',
        sourceUrl: 'https://www.italyisd.org',
        category: 'meeting',
    },
    {
        id: 'fallback-3',
        title: 'March 3 Primary Election — Polls Open 7AM–7PM',
        date: '2026-03-03',
        source: 'City of Italy',
        sourceUrl: 'http://ci.italy.tx.us',
        category: 'meeting',
    },
];

export async function GET() {
    const [isdItems, cityItems] = await Promise.all([
        scrapeItalyISD(),
        scrapeCityOfItaly(),
    ]);

    const combined = [...isdItems, ...cityItems];
    const items = combined.length > 0 ? combined.slice(0, 5) : FALLBACK_ITEMS;

    return NextResponse.json(
        { items, source: combined.length > 0 ? 'live' : 'fallback', fetchedAt: new Date().toISOString() },
        { headers: { 'Cache-Control': 'public, s-maxage=21600, stale-while-revalidate=86400' } }
    );
}
