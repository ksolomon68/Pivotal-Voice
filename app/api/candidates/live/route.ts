import { NextResponse } from 'next/server';
import { getLiveCandidates } from '@/lib/civic/google-civic';

export const revalidate = 3600; // 1 hour ISR

export async function GET() {
    const result = await getLiveCandidates();
    return NextResponse.json(result, {
        headers: {
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
    });
}
