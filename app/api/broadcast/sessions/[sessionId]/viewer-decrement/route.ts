import { NextRequest, NextResponse } from 'next/server';
import { decrementViewerCount } from '@/lib/broadcast/broadcast-service';

export async function POST(
    _req: NextRequest,
    { params }: { params: Promise<{ sessionId: string }> }
) {
    const { sessionId } = await params;
    await decrementViewerCount(sessionId);
    return NextResponse.json({ ok: true });
}
