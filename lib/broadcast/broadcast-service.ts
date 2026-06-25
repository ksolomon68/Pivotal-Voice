import { supabase } from '@/lib/supabase/client';
import { BroadcastSession, BroadcastStatus } from '@/lib/types/broadcast';

function mapRow(row: Record<string, unknown>): BroadcastSession {
    return {
        id: row.id as string,
        title: row.title as string,
        description: row.description as string | undefined,
        hostId: row.host_id as string,
        hostName: row.host_name as string,
        status: row.status as BroadcastStatus,
        livekitRoomName: row.livekit_room_name as string,
        guestInviteToken: row.guest_invite_token as string | undefined,
        scheduledAt: row.scheduled_at as string | undefined,
        startedAt: row.started_at as string | undefined,
        endedAt: row.ended_at as string | undefined,
        viewerCount: row.viewer_count as number,
        thumbnailUrl: row.thumbnail_url as string | undefined,
        createdAt: row.created_at as string,
    };
}

// Memory storage for mock sessions when Supabase is not configured
let mockSessions: BroadcastSession[] = [
    {
        id: 'mock-session-1',
        title: 'Ellis County Growth and Infrastructure Discussion',
        description: 'Join Commissioner Smith to discuss the new road construction and zoning updates.',
        hostId: 'mock-host-1',
        hostName: 'Commissioner Smith',
        status: 'live',
        livekitRoomName: 'room_mock-session-1',
        startedAt: new Date().toISOString(),
        viewerCount: 24,
        createdAt: new Date().toISOString()
    },
    {
        id: 'mock-session-2',
        title: 'Upcoming School Board Election Forum',
        description: 'Q&A session with the candidates running for the Ellis County School Board.',
        hostId: 'mock-host-2',
        hostName: 'Moderator Sarah',
        status: 'scheduled',
        livekitRoomName: 'room_mock-session-2',
        scheduledAt: new Date(Date.now() + 24 * 60 * 60 * 1000 * 2).toISOString(), // 2 days from now
        viewerCount: 0,
        createdAt: new Date().toISOString()
    }
];

const isMockMode = !process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function createSession(
    hostId: string,
    hostName: string,
    title: string,
    description?: string,
    scheduledAt?: string
): Promise<BroadcastSession> {
    if (isMockMode) {
        const tempId = Math.random().toString(36).substring(2, 15);
        const newSession: BroadcastSession = {
            id: tempId,
            hostId,
            hostName,
            title,
            description,
            scheduledAt,
            status: scheduledAt ? 'scheduled' : 'live',
            livekitRoomName: `room_${tempId}`,
            guestInviteToken: Math.random().toString(36).substring(2, 15),
            viewerCount: 0,
            createdAt: new Date().toISOString(),
        };
        mockSessions.push(newSession);
        return newSession;
    }

    const tempId = crypto.randomUUID();
    const { data, error } = await supabase
        .from('broadcast_sessions')
        .insert({
            host_id: hostId,
            host_name: hostName,
            title,
            description,
            scheduled_at: scheduledAt || null,
            livekit_room_name: `room_${tempId}`,
            guest_invite_token: crypto.randomUUID(),
        })
        .select()
        .single();

    if (error) throw new Error(error.message);
    return mapRow(data);
}

export async function getSession(id: string): Promise<BroadcastSession | null> {
    if (isMockMode) {
        return mockSessions.find(s => s.id === id) || null;
    }

    const { data, error } = await supabase
        .from('broadcast_sessions')
        .select('*')
        .eq('id', id)
        .single();

    if (error || !data) return null;
    return mapRow(data);
}

export async function getSessionByInviteToken(token: string): Promise<BroadcastSession | null> {
    if (isMockMode) {
        return mockSessions.find(s => s.guestInviteToken === token) || null;
    }

    const { data, error } = await supabase
        .from('broadcast_sessions')
        .select('*')
        .eq('guest_invite_token', token)
        .single();

    if (error || !data) return null;
    return mapRow(data);
}

export async function getLiveSessions(): Promise<BroadcastSession[]> {
    if (isMockMode) {
        return mockSessions.filter(s => s.status === 'live');
    }

    const { data, error } = await supabase
        .from('broadcast_sessions')
        .select('*')
        .eq('status', 'live')
        .order('started_at', { ascending: false });

    if (error || !data) return [];
    return data.map(mapRow);
}

export async function getScheduledSessions(): Promise<BroadcastSession[]> {
    if (isMockMode) {
        return mockSessions.filter(s => s.status === 'scheduled');
    }

    const { data, error } = await supabase
        .from('broadcast_sessions')
        .select('*')
        .eq('status', 'scheduled')
        .order('scheduled_at', { ascending: true });

    if (error || !data) return [];
    return data.map(mapRow);
}

export async function updateSessionStatus(
    id: string,
    status: BroadcastStatus
): Promise<void> {
    if (isMockMode) {
        const session = mockSessions.find(s => s.id === id);
        if (session) {
            session.status = status;
            if (status === 'live') session.startedAt = new Date().toISOString();
            if (status === 'ended') session.endedAt = new Date().toISOString();
        }
        return;
    }

    const updates: Record<string, unknown> = { status };
    if (status === 'live') updates.started_at = new Date().toISOString();
    if (status === 'ended') updates.ended_at = new Date().toISOString();

    const { error } = await supabase
        .from('broadcast_sessions')
        .update(updates)
        .eq('id', id);

    if (error) throw new Error(error.message);
}

export async function incrementViewerCount(id: string): Promise<void> {
    if (isMockMode) {
        const session = mockSessions.find(s => s.id === id);
        if (session) {
            session.viewerCount += 1;
        }
        return;
    }
    await supabase.rpc('increment_viewer_count', { session_id: id });
}

export async function decrementViewerCount(id: string): Promise<void> {
    if (isMockMode) {
        const session = mockSessions.find(s => s.id === id);
        if (session) {
            session.viewerCount = Math.max(session.viewerCount - 1, 0);
        }
        return;
    }
    await supabase.rpc('decrement_viewer_count', { session_id: id });
}

