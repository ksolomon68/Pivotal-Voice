import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { createSession, getLiveSessions, getScheduledSessions } from '@/lib/broadcast/broadcast-service';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function GET() {
    const [live, scheduled] = await Promise.all([getLiveSessions(), getScheduledSessions()]);
    return NextResponse.json({ live, scheduled });
}

export async function POST(req: NextRequest) {
    const isMockMode = !process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    let userId = 'mock-host-1';
    let displayName = 'Commissioner Smith';

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

        const { data: profile } = await supabase
            .from('profiles')
            .select('is_admin, display_name')
            .eq('id', user.id)
            .single();

        if (!profile?.is_admin) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        userId = user.id;
        displayName = profile.display_name;
    }

    const body = await req.json();
    const { title, description, scheduledAt } = body;

    if (!title?.trim()) {
        return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    try {
        const session = await createSession(
            userId,
            displayName,
            title.trim(),
            description?.trim() || undefined,
            scheduledAt || undefined
        );
        return NextResponse.json(session, { status: 201 });
    } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to create session';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
