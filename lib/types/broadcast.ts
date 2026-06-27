export type BroadcastStatus = 'scheduled' | 'live' | 'ended';
export type BroadcastRole = 'host' | 'guest' | 'viewer';

export interface BroadcastSession {
    id: string;
    title: string;
    description?: string;
    hostId: string;
    hostName: string;
    status: BroadcastStatus;
    livekitRoomName: string;
    guestInviteToken?: string;
    scheduledAt?: string;
    startedAt?: string;
    endedAt?: string;
    viewerCount: number;
    thumbnailUrl?: string;
    youtubeVideoId?: string;
    createdAt: string;
}
