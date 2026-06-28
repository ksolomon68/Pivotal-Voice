'use client';

import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

interface Props {
    videoId: string;
    title?: string;
}

export default function YouTubeLiveEmbed({ videoId, title }: Props) {
    const [showChat, setShowChat] = useState(true);

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-3">
                {title && (
                    <h3 className="text-sm font-semibold text-cream/70 truncate">{title}</h3>
                )}
                <button
                    onClick={() => setShowChat((v) => !v)}
                    className="ml-auto flex items-center gap-1.5 text-xs text-cream/50 hover:text-cream/80 transition-colors"
                >
                    {showChat ? <X className="w-3.5 h-3.5" /> : <MessageSquare className="w-3.5 h-3.5" />}
                    {showChat ? 'Hide chat' : 'Show chat'}
                </button>
            </div>

            <div className={`flex gap-3 ${showChat ? 'flex-col lg:flex-row' : ''}`}>
                {/* Video player */}
                <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                        title="YouTube Live"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                    />
                </div>

                {/* Live chat */}
                {showChat && (
                    <div className="w-full lg:w-80 lg:flex-shrink-0 h-72 lg:h-auto rounded-xl overflow-hidden border border-white/10">
                        <iframe
                            src={`https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${typeof window !== 'undefined' ? window.location.hostname : 'localhost'}`}
                            title="YouTube Live Chat"
                            className="w-full h-full"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
