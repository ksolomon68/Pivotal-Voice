import { NextRequest, NextResponse } from 'next/server';
import { AccessToken } from 'livekit-server-sdk';
import { createClient } from '@supabase/supabase-js';
import { BroadcastRole } from '@/lib/types/broadcast';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const livekitApiKey = process.env.LIVEKIT_API_KEY!;
const livekitApiSecret = process.env.LIVEKIT_API_SECRET!;
const livekitUrl = process.env.NEXT_PUBLIC_LIVEKIT_URL!;

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { sessionId, role, displayName, inviteToken } = body as {
        sessionId: string;
        role: BroadcastRole;
        displayName?: string;
        inviteToken?: string;
    };

    if (!sessionId || !role) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Fetch session row (publicly readable)
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { data: session, error: sessionError } = await supabase
        .from('broadcast_sessions')
        .select('*')
        .eq('id', sessionId)
        .single();

    if (sessionError || !session) {
        return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    let identity = '';
    let participantName = '';
    let canPublish = false;
    let canPublishData = false;

    if (role === 'host') {
        const authHeader = req.headers.get('Authorization');
        if (!authHeader?.startsWith('Bearer ')) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        const jwt = authHeader.slice(7);
        const { data: { user }, error: authError } = await supabase.auth.getUser(jwt);
        if (authError || !user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { data: profile } = await supabase
            .from('profiles')
            .select('is_admin, display_name')
            .eq('id', user.id)
            .single();

        if (!profile?.is_admin || session.host_id !== user.id) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        identity = `host_${user.id}`;
        participantName = profile.display_name;
        canPublish = true;
        canPublishData = true;

    } else if (role === 'guest') {
        if (!inviteToken || inviteToken !== session.guest_invite_token) {
            return NextResponse.json({ error: 'Invalid invite token' }, { status: 403 });
        }
        if (!displayName?.trim()) {
            return NextResponse.json({ error: 'Display name required' }, { status: 400 });
        }

        identity = `guest_${crypto.randomUUID()}`;
        participantName = displayName.trim();
        canPublish = true;
        canPublishData = false;

    } else if (role === 'viewer') {
        identity = `viewer_${crypto.randomUUID()}`;
        participantName = displayName?.trim() || 'Viewer';
        canPublish = false;
        canPublishData = false;

    } else {
        return NextResponse.json({ error: 'Invalid role' }, { status: 400 });
    }

    const token = new AccessToken(livekitApiKey, livekitApiSecret, {
        identity,
        name: participantName,
        ttl: '4h',
    });

    token.addGrant({
        roomJoin: true,
        room: session.livekit_room_name,
        canPublish,
        canSubscribe: true,
        canPublishData,
    });

    return NextResponse.json({
        token: await token.toJwt(),
        roomName: session.livekit_room_name,
        livekitUrl,
    });
}
