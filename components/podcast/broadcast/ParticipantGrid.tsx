'use client';

import { useTracks } from '@livekit/components-react';
import { Track } from 'livekit-client';
import VideoTile from './VideoTile';
import { BroadcastRole } from '@/lib/types/broadcast';

interface Props {
    role: BroadcastRole;
}

export default function ParticipantGrid({ role: _role }: Props) {
    const tracks = useTracks([
        { source: Track.Source.Camera, withPlaceholder: true },
    ]);

    // Exclude viewer tracks — they never publish
    const publisherTracks = tracks.filter(
        (t) => !t.participant.identity.startsWith('viewer_')
    );

    const gridClass =
        publisherTracks.length === 1
            ? 'grid grid-cols-1'
            : publisherTracks.length === 2
            ? 'grid grid-cols-1 sm:grid-cols-2'
            : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

    if (publisherTracks.length === 0) {
        return (
            <div className="flex items-center justify-center h-64 rounded-xl border border-white/10 bg-navy-dark/40">
                <p className="text-cream/40 text-sm">Waiting for participants to join...</p>
            </div>
        );
    }

    return (
        <div className={`${gridClass} gap-3`}>
            {publisherTracks.map((trackRef) => (
                <VideoTile
                    key={`${trackRef.participant.identity}-${trackRef.source}`}
                    trackRef={trackRef}
                />
            ))}
        </div>
    );
}
