'use client';

import { LiveKitRoom, RoomAudioRenderer } from '@livekit/components-react';
import '@livekit/components-styles';
import { BroadcastRole, BroadcastSession } from '@/lib/types/broadcast';
import ParticipantGrid from './ParticipantGrid';
import BroadcastControlBar from './BroadcastControlBar';
import ViewerCountBadge from './ViewerCountBadge';
import InviteLinkPanel from './InviteLinkPanel';

interface Props {
    token: string;
    livekitUrl: string;
    role: BroadcastRole;
    session: BroadcastSession;
    onGoLive: () => void;
    onEnd: () => void;
    isUpdating: boolean;
}

export default function StudioRoom({
    token,
    livekitUrl,
    role,
    session,
    onGoLive,
    onEnd,
    isUpdating,
}: Props) {
    const isPublisher = role === 'host' || role === 'guest';

    return (
        <LiveKitRoom
            token={token}
            serverUrl={livekitUrl}
            connect={true}
            video={false}
            audio={false}
            data-lk-theme="default"
            style={{ '--lk-bg': 'transparent' } as React.CSSProperties}
        >
            <RoomAudioRenderer />
            <div className="flex flex-col lg:flex-row gap-4 h-full">
                {/* Main video area */}
                <div className="flex-1 min-w-0">
                    <ParticipantGrid role={role} />
                </div>

                {/* Sidebar — controls & info */}
                {isPublisher && (
                    <div className="lg:w-72 xl:w-80 flex flex-col gap-4 shrink-0">
                        {/* Session info */}
                        <div className="bg-navy-dark/60 border border-white/10 rounded-xl p-4">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-sm font-display font-bold text-white line-clamp-1">
                                    {session.title}
                                </h3>
                                <ViewerCountBadge
                                    sessionId={session.id}
                                    initialCount={session.viewerCount}
                                />
                            </div>
                            {session.description && (
                                <p className="text-xs text-cream/50 line-clamp-2">{session.description}</p>
                            )}
                        </div>

                        {/* Controls */}
                        <div className="bg-navy-dark/60 border border-white/10 rounded-xl p-4">
                            <p className="text-xs font-semibold text-cream/50 uppercase tracking-wide mb-3">Controls</p>
                            <BroadcastControlBar
                                role={role}
                                sessionStatus={session.status}
                                onGoLive={onGoLive}
                                onEnd={onEnd}
                                isUpdating={isUpdating}
                            />
                        </div>

                        {/* Guest invite link (host only) */}
                        {role === 'host' && session.guestInviteToken && (
                            <InviteLinkPanel
                                sessionId={session.id}
                                inviteToken={session.guestInviteToken}
                            />
                        )}
                    </div>
                )}

                {/* Viewer sidebar — session info only */}
                {role === 'viewer' && (
                    <div className="lg:w-72 xl:w-80 shrink-0">
                        <div className="bg-navy-dark/60 border border-white/10 rounded-xl p-4">
                            <ViewerCountBadge
                                sessionId={session.id}
                                initialCount={session.viewerCount}
                            />
                            <h3 className="text-base font-display font-bold text-white mt-3 mb-1">
                                {session.title}
                            </h3>
                            {session.description && (
                                <p className="text-sm text-cream/50">{session.description}</p>
                            )}
                            <p className="text-xs text-cream/40 mt-2">
                                Hosted by {session.hostName}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </LiveKitRoom>
    );
}
