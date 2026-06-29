'use client';

import { useState, useEffect } from 'react';
import { LiveKitRoom, RoomAudioRenderer, useConnectionState } from '@livekit/components-react';
import '@livekit/components-styles';
import { BroadcastRole, BroadcastSession } from '@/lib/types/broadcast';
import ParticipantGrid from './ParticipantGrid';
import BroadcastControlBar from './BroadcastControlBar';
import ViewerCountBadge from './ViewerCountBadge';
import InviteLinkPanel from './InviteLinkPanel';
import { AlertCircle, Wifi, Facebook, Check } from 'lucide-react';

interface Props {
    token: string;
    livekitUrl: string;
    role: BroadcastRole;
    session: BroadcastSession;
    onGoLive: () => void;
    onEnd: () => void;
    isUpdating: boolean;
    onUpdateFacebookUrl?: (url: string) => Promise<void>;
}

// Inner component that has access to the LiveKit room context
function StudioRoomInner({
    role,
    session,
    onGoLive,
    onEnd,
    isUpdating,
    onUpdateFacebookUrl,
}: Omit<Props, 'token' | 'livekitUrl'>) {
    const connectionState = useConnectionState();
    const isPublisher = role === 'host' || role === 'guest';
    const [fbUrlInput, setFbUrlInput] = useState(session.facebookVideoUrl ?? '');
    const [fbSaving, setFbSaving] = useState(false);
    const [fbSaved, setFbSaved] = useState(false);

    const handleSaveFbUrl = async () => {
        if (!onUpdateFacebookUrl || !fbUrlInput.trim()) return;
        setFbSaving(true);
        try {
            await onUpdateFacebookUrl(fbUrlInput.trim());
            setFbSaved(true);
            setTimeout(() => setFbSaved(false), 3000);
        } finally {
            setFbSaving(false);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row gap-4 h-full relative">
            {/* Connection state overlay */}
            {connectionState !== 'connected' && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-navy/80 backdrop-blur-sm rounded-xl">
                    <div className="text-center">
                        {connectionState === 'reconnecting' ? (
                            <>
                                <div className="w-10 h-10 border-2 border-gold/30 border-t-gold rounded-full animate-spin mx-auto mb-3" />
                                <p className="text-cream/70 text-sm font-medium">Reconnecting to studio...</p>
                            </>
                        ) : connectionState === 'disconnected' ? (
                            <>
                                <Wifi className="w-10 h-10 text-red-400/70 mx-auto mb-3" />
                                <p className="text-cream/70 text-sm font-medium">Disconnected from studio</p>
                                <p className="text-cream/40 text-xs mt-1">Refresh the page to reconnect</p>
                            </>
                        ) : (
                            <>
                                <div className="w-10 h-10 border-2 border-gold/30 border-t-gold rounded-full animate-spin mx-auto mb-3" />
                                <p className="text-cream/70 text-sm font-medium">Connecting to studio...</p>
                            </>
                        )}
                    </div>
                </div>
            )}

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

                    {/* Facebook Live URL (host only) */}
                    {role === 'host' && onUpdateFacebookUrl && (
                        <div className="bg-navy-dark/60 border border-white/10 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <Facebook className="w-4 h-4 text-[#1877F2]" />
                                <p className="text-xs font-semibold text-cream/50 uppercase tracking-wide">Facebook Live URL</p>
                            </div>
                            <p className="text-xs text-cream/40 mb-2">
                                Once live on Facebook, paste the video URL here so viewers can watch the embedded stream.
                            </p>
                            <input
                                type="url"
                                value={fbUrlInput}
                                onChange={(e) => setFbUrlInput(e.target.value)}
                                placeholder="https://www.facebook.com/…/videos/…"
                                className="input w-full text-xs mb-2"
                            />
                            <button
                                onClick={handleSaveFbUrl}
                                disabled={fbSaving || !fbUrlInput.trim()}
                                className="btn-secondary text-xs w-full disabled:opacity-50 flex items-center justify-center gap-1.5"
                            >
                                {fbSaved ? (
                                    <><Check className="w-3 h-3 text-green-400" /> Saved!</>
                                ) : fbSaving ? 'Saving…' : 'Save URL'}
                            </button>
                        </div>
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
    );
}

export default function StudioRoom({
    token,
    livekitUrl,
    role,
    session,
    onGoLive,
    onEnd,
    isUpdating,
    onUpdateFacebookUrl,
}: Props) {
    const [roomError, setRoomError] = useState<string | null>(null);
    const [shouldConnect, setShouldConnect] = useState(false);

    // Prevent double-connection race conditions in React 18 Strict Mode on dev server reload
    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldConnect(true);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    if (roomError) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-center max-w-sm">
                    <div className="w-14 h-14 bg-red-500/10 border border-red-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <AlertCircle className="w-7 h-7 text-red-400" />
                    </div>
                    <h3 className="text-white font-display font-bold mb-2">Studio Connection Error</h3>
                    <p className="text-cream/60 text-sm mb-4">{roomError}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="btn-secondary text-sm"
                    >
                        Refresh Page
                    </button>
                </div>
            </div>
        );
    }

    return (
        <LiveKitRoom
            token={token}
            serverUrl={livekitUrl}
            connect={shouldConnect}
            video={false}
            audio={false}
            data-lk-theme="default"
            style={{ '--lk-bg': 'transparent' } as React.CSSProperties}
            onError={(err) => {
                console.error('[LiveKit] Room error:', err);
                setRoomError(err.message || 'Failed to connect to the studio room');
            }}
        >
            <RoomAudioRenderer />
            <StudioRoomInner
                role={role}
                session={session}
                onGoLive={onGoLive}
                onEnd={onEnd}
                isUpdating={isUpdating}
                onUpdateFacebookUrl={onUpdateFacebookUrl}
            />
        </LiveKitRoom>
    );
}
