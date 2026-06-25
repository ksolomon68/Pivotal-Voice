import { NextRequest, NextResponse } from 'next/server';
import { incrementViewerCount } from '@/lib/broadcast/broadcast-service';

export async function POST(
    _req: NextRequest,
    { params }: { params: Promise<{ sessionId: string }> }
) {
    const { sessionId } = await params;
    await incrementViewerCount(sessionId);
    return NextResponse.json({ ok: true });
}
