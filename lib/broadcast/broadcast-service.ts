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
        youtubeVideoId: row.youtube_video_id as string | undefined,
        streamyardBroadcastId: row.streamyard_broadcast_id as string | undefined,
        createdAt: row.created_at as string,
    };
}

export async function createSession(
    hostId: string,
    hostName: string,
    title: string,
    description?: string,
    scheduledAt?: string,
    youtubeVideoId?: string,
    streamyardBroadcastId?: string
): Promise<BroadcastSession> {
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
            youtube_video_id: youtubeVideoId || null,
            streamyard_broadcast_id: streamyardBroadcastId || null,
        })
        .select()
        .single();

    if (error) throw new Error(error.message);
    return mapRow(data);
}

export async function getSession(id: string): Promise<BroadcastSession | null> {
    const { data, error } = await supabase
        .from('broadcast_sessions')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error('[broadcast] getSession error:', error.code, error.message, error.details, 'id:', id);
        return null;
    }
    if (!data) return null;
    return mapRow(data);
}

export async function getSessionByInviteToken(token: string): Promise<BroadcastSession | null> {
    const { data, error } = await supabase
        .from('broadcast_sessions')
        .select('*')
        .eq('guest_invite_token', token)
        .single();

    if (error || !data) return null;
    return mapRow(data);
}

export async function getLiveSessions(): Promise<BroadcastSession[]> {
    const { data, error } = await supabase
        .from('broadcast_sessions')
        .select('*')
        .eq('status', 'live')
        .order('started_at', { ascending: false });

    if (error || !data) return [];
    return data.map(mapRow);
}

export async function getScheduledSessions(): Promise<BroadcastSession[]> {
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
    await supabase.rpc('increment_viewer_count', { session_id: id });
}

export async function decrementViewerCount(id: string): Promise<void> {
    await supabase.rpc('decrement_viewer_count', { session_id: id });
}
