import { NextResponse } from 'next/server';
import { getLiveCandidates } from '@/lib/civic/candidates';

export const revalidate = 0; // Disable caching to fetch live from DB immediately

export async function GET() {
    const result = await getLiveCandidates();
    return NextResponse.json(result, {
        headers: {
            'Cache-Control': 'no-store', // Force no cache for now
        },
    });
}

