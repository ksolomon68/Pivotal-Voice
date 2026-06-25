'use client';

import { useState } from 'react';
import { useLocalParticipant, useConnectionState } from '@livekit/components-react';
import { Mic, MicOff, Video, VideoOff, Radio, Square } from 'lucide-react';
import { BroadcastRole, BroadcastStatus } from '@/lib/types/broadcast';

interface Props {
    role: BroadcastRole;
    sessionStatus: BroadcastStatus;
    onGoLive: () => void;
    onEnd: () => void;
    isUpdating: boolean;
}

export default function BroadcastControlBar({ role, sessionStatus, onGoLive, onEnd, isUpdating }: Props) {
    const { localParticipant, isMicrophoneEnabled, isCameraEnabled } = useLocalParticipant();
    const connectionState = useConnectionState();
    const isConnected = connectionState === 'connected';
    const [error, setError] = useState<string | null>(null);

    const toggleMic = async () => {
        if (!isConnected) return;
        try {
            setError(null);
            await localParticipant.setMicrophoneEnabled(!isMicrophoneEnabled);
        } catch (err: any) {
            console.error('Failed to toggle microphone:', err);
            setError(err.message || 'Microphone activation failed. Ensure no other application is using it.');
        }
    };

    const toggleCamera = async () => {
        if (!isConnected) return;
        try {
            setError(null);
            await localParticipant.setCameraEnabled(!isCameraEnabled);
        } catch (err: any) {
            console.error('Failed to toggle camera:', err);
            setError(err.message || 'Camera activation failed. Ensure no other application is using it.');
        }
    };

    return (
        <div className="flex flex-col gap-3">
            {error && (
                <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 p-2.5 rounded-lg flex items-start gap-2">
                    <span className="shrink-0 mt-0.5">⚠️</span>
                    <span>{error}</span>
                </div>
            )}
            <div className="flex items-center gap-2">
                <button
                    onClick={toggleMic}
                    disabled={!isConnected}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                        !isConnected
                            ? 'opacity-50 cursor-not-allowed bg-white/5 border-white/10 text-cream/40'
                            : !isMicrophoneEnabled
                            ? 'bg-red-500/15 border-red-400/30 text-red-400 hover:bg-red-500/25'
                            : 'bg-white/5 border-white/15 text-cream/80 hover:bg-white/10'
                    }`}
                    title={!isConnected ? 'Connecting to studio...' : !isMicrophoneEnabled ? 'Unmute microphone' : 'Mute microphone'}
                >
                    {!isConnected ? (
                        <div className="w-4 h-4 border-2 border-cream/30 border-t-cream rounded-full animate-spin shrink-0" />
                    ) : !isMicrophoneEnabled ? (
                        <MicOff className="w-4 h-4" />
                    ) : (
                        <Mic className="w-4 h-4" />
                    )}
                    <span className="hidden sm:inline">
                        {!isConnected ? 'Connecting...' : !isMicrophoneEnabled ? 'Unmute' : 'Mute'}
                    </span>
                </button>

                <button
                    onClick={toggleCamera}
                    disabled={!isConnected}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                        !isConnected
                            ? 'opacity-50 cursor-not-allowed bg-white/5 border-white/10 text-cream/40'
                            : !isCameraEnabled
                            ? 'bg-red-500/15 border-red-400/30 text-red-400 hover:bg-red-500/25'
                            : 'bg-white/5 border-white/15 text-cream/80 hover:bg-white/10'
                    }`}
                    title={!isConnected ? 'Connecting to studio...' : !isCameraEnabled ? 'Enable camera' : 'Disable camera'}
                >
                    {!isConnected ? (
                        <div className="w-4 h-4 border-2 border-cream/30 border-t-cream rounded-full animate-spin shrink-0" />
                    ) : !isCameraEnabled ? (
                        <VideoOff className="w-4 h-4" />
                    ) : (
                        <Video className="w-4 h-4" />
                    )}
                    <span className="hidden sm:inline">
                        {!isConnected ? 'Connecting...' : !isCameraEnabled ? 'Camera On' : 'Camera Off'}
                    </span>
                </button>
            </div>

            {role === 'host' && (
                <div className="pt-2 border-t border-white/10">
                    {sessionStatus === 'scheduled' && (
                        <button
                            onClick={onGoLive}
                            disabled={isUpdating || !isConnected}
                            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-red-500 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors"
                        >
                            <Radio className="w-4 h-4" />
                            {isUpdating ? 'Starting...' : !isConnected ? 'Connecting to Studio...' : 'Go Live'}
                        </button>
                    )}
                    {sessionStatus === 'live' && (
                        <button
                            onClick={onEnd}
                            disabled={isUpdating}
                            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-navy-dark border border-red-400/40 hover:bg-red-500/10 disabled:opacity-50 disabled:cursor-not-allowed text-red-400 font-bold text-sm transition-colors"
                        >
                            <Square className="w-4 h-4 fill-current" />
                            {isUpdating ? 'Ending...' : 'End Broadcast'}
                        </button>
                    )}
                    {sessionStatus === 'ended' && (
                        <div className="text-center py-2 text-sm text-cream/40">Broadcast ended</div>
                    )}
                </div>
            )}
        </div>
    );
}
