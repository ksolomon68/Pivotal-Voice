/**
 * Podcast Episodes API Route
 * Returns the Loser's Club YouTube playlist as a list of episodes, newest first,
 * via YouTube's public playlist RSS feed (no API key required).
 * Cached for 1 hour.
 */

import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export const revalidate = 3600; // 1 hour

const PLAYLIST_ID = 'PLGupSNfc6dfE';
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?playlist_id=${PLAYLIST_ID}`;

export interface PodcastEpisode {
    id: string;
    videoId: string;
    title: string;
    thumbnail: string;
    publishedAt: string;
    url: string;
}

async function fetchPlaylistFeed(): Promise<PodcastEpisode[]> {
    try {
        const res = await fetch(FEED_URL, {
            headers: { 'User-Agent': 'PivotalVoice-PodcastBot/1.0 (+https://pivotalvoice.com)' },
            signal: AbortSignal.timeout(8000),
        });
        if (!res.ok) return [];

        const xml = await res.text();
        const $ = cheerio.load(xml, { xmlMode: true });
        const episodes: PodcastEpisode[] = [];

        $('entry').each((_, el) => {
            const videoId = $(el).find('yt\\:videoId, videoId').first().text().trim();
            const title = $(el).find('title').first().text().trim();
            const published = $(el).find('published').first().text().trim();
            const thumbnail = $(el).find('media\\:thumbnail, thumbnail').first().attr('url');

            if (videoId && title) {
                episodes.push({
                    id: videoId,
                    videoId,
                    title,
                    thumbnail: thumbnail || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
                    publishedAt: published || '',
                    url: `https://www.youtube.com/watch?v=${videoId}`,
                });
            }
        });

        // Feed order isn't guaranteed newest-first; sort explicitly.
        episodes.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

        return episodes;
    } catch {
        return [];
    }
}

export async function GET() {
    const episodes = await fetchPlaylistFeed();

    return NextResponse.json(
        {
            episodes,
            playlistUrl: `https://www.youtube.com/playlist?list=${PLAYLIST_ID}`,
            source: episodes.length > 0 ? 'live' : 'unavailable',
        },
        { headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=21600' } }
    );
}
