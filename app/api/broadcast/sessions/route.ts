import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { createSession, getLiveSessions, getScheduledSessions } from '@/lib/broadcast/broadcast-service';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function GET() {
    const [live, scheduled] = await Promise.all([getLiveSessions(), getScheduledSessions()]);
    return NextResponse.json({ live, scheduled });
}

export async function POST(req: NextRequest) {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader?.startsWith('Bearer ')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const jwt = authHeader.slice(7);
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
        global: {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        },
    });
    const { data: { user }, error: authError } = await supabase.auth.getUser(jwt);
    if (authError || !user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { data: profile } = await supabase
        .from('profiles')
        .select('is_admin, display_name')
        .eq('id', user.id)
        .single();

    if (!profile?.is_admin) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await req.json();
    const { title, description, scheduledAt, youtubeVideoId, streamyardBroadcastId } = body;

    if (!title?.trim()) {
        return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    try {
        // Use service-role client for the insert so RLS is bypassed server-side.
        // Auth + admin check already happened above, so this is safe.
        const writeClient = supabaseServiceKey
            ? createClient(supabaseUrl, supabaseServiceKey)
            : supabase;

        const session = await createSession(
            user.id,
            profile.display_name,
            title.trim(),
            description?.trim() || undefined,
            scheduledAt || undefined,
            youtubeVideoId?.trim() || undefined,
            streamyardBroadcastId?.trim() || undefined,
            writeClient
        );
        return NextResponse.json(session, { status: 201 });
    } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to create session';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
