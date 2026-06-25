import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { updateSessionStatus } from '@/lib/broadcast/broadcast-service';
import { BroadcastStatus } from '@/lib/types/broadcast';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ sessionId: string }> }
) {
    const { sessionId } = await params;

    const isMockMode = !process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!isMockMode) {
        const authHeader = req.headers.get('Authorization');
        if (!authHeader?.startsWith('Bearer ')) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const supabase = createClient(supabaseUrl, supabaseAnonKey);
        const jwt = authHeader.slice(7);
        const { data: { user }, error: authError } = await supabase.auth.getUser(jwt);
        if (authError || !user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { data: session } = await supabase
            .from('broadcast_sessions')
            .select('host_id')
            .eq('id', sessionId)
            .single();

        if (!session || session.host_id !== user.id) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }
    }

    const body = await req.json();
    const { status } = body as { status: BroadcastStatus };

    if (!['live', 'ended'].includes(status)) {
        return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    try {
        await updateSessionStatus(sessionId, status);
        return NextResponse.json({ success: true });
    } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to update session';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
