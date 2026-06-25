'use client';

import { Track } from 'livekit-client';
import {
    VideoTrack,
    AudioTrack,
    useIsMuted,
    useIsSpeaking,
    isTrackReference,
    type TrackReferenceOrPlaceholder,
} from '@livekit/components-react';
import { MicOff, User } from 'lucide-react';

interface Props {
    trackRef: TrackReferenceOrPlaceholder;
}

function getRoleBadgeLabel(identity: string): string {
    if (identity.startsWith('host_')) return 'HOST';
    if (identity.startsWith('guest_')) return 'GUEST';
    return '';
}

export default function VideoTile({ trackRef }: Props) {
    const isMuted = useIsMuted(trackRef);
    const isSpeaking = useIsSpeaking(trackRef.participant);
    const badgeLabel = getRoleBadgeLabel(trackRef.participant.identity);
    const hasVideoTrack = isTrackReference(trackRef) && trackRef.source === Track.Source.Camera;

    return (
        <div
            className={`relative bg-navy-dark rounded-xl overflow-hidden aspect-video border-2 transition-all duration-200 ${
                isSpeaking ? 'border-gold/70' : 'border-white/10'
            }`}
        >
            {hasVideoTrack ? (
                <VideoTrack
                    trackRef={trackRef}
                    className="w-full h-full object-cover"
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center bg-navy">
                    <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                        <User className="w-8 h-8 text-gold/50" />
                    </div>
                </div>
            )}

            {/* Render audio for remote participants */}
            {!trackRef.participant.isLocal && isTrackReference(trackRef) && trackRef.source === Track.Source.Microphone && (
                <AudioTrack trackRef={trackRef} />
            )}

            {/* Name + role overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white truncate">
                        {trackRef.participant.name || trackRef.participant.identity}
                    </span>
                    {badgeLabel && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-gold/20 border border-gold/30 text-gold uppercase tracking-wide">
                            {badgeLabel}
                        </span>
                    )}
                </div>
                {isMuted && <MicOff className="w-4 h-4 text-red-400 shrink-0" />}
            </div>

            {isSpeaking && (
                <div className="absolute inset-0 ring-2 ring-gold/50 rounded-xl pointer-events-none" />
            )}
        </div>
    );
}
