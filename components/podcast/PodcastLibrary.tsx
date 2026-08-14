'use client';

import { useEffect, useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

interface PodcastEpisode {
    id: string;
    videoId: string;
    title: string;
    thumbnail: string;
    publishedAt: string;
    url: string;
}

const PLAYLIST_URL = 'https://www.youtube.com/playlist?list=PLGupSNfc6dfE';

function formatDate(iso: string): string | null {
    if (!iso) return null;
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return null;
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default function PodcastLibrary() {
    const [episodes, setEpisodes] = useState<PodcastEpisode[]>([]);
    const [loading, setLoading] = useState(true);
    const [playingId, setPlayingId] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        let mounted = true;

        fetch('/api/podcast-episodes', { signal: controller.signal })
            .then((r) => r.json())
            .then((data) => {
                if (!mounted) return;
                setEpisodes(data.episodes || []);
            })
            .catch((err) => {
                if (err.name === 'AbortError') return;
            })
            .finally(() => { if (mounted) setLoading(false); });

        return () => {
            mounted = false;
            controller.abort();
        };
    }, []);

    const [latest, ...rest] = episodes;

    if (loading) {
        return (
            <div className="space-y-6">
                <div className="aspect-video w-full max-w-4xl mx-auto rounded-xl bg-white/5 animate-pulse" />
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="aspect-video rounded-lg bg-white/5 animate-pulse" />
                    ))}
                </div>
            </div>
        );
    }

    if (!latest) {
        return (
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black max-w-4xl mx-auto border border-gold/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <iframe
                    src="https://www.youtube.com/embed/videoseries?list=PLGupSNfc6dfE&rel=0"
                    title="The Loser's Club Playlist"
                    className="w-full h-full"
                    style={{ border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Latest episode — large and highlighted */}
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-2 mb-3">
                    <span className="badge-gold text-xs px-3 py-1">Latest Episode</span>
                </div>
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-gold/30 shadow-[0_20px_60px_rgba(212,175,55,0.15)]">
                    {playingId === latest.videoId ? (
                        <iframe
                            src={`https://www.youtube.com/embed/${latest.videoId}?rel=0&autoplay=1`}
                            title={latest.title}
                            className="absolute inset-0 w-full h-full"
                            style={{ border: 'none' }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    ) : (
                        <button
                            onClick={() => setPlayingId(latest.videoId)}
                            className="absolute inset-0 w-full h-full group"
                        >
                            <img
                                src={latest.thumbnail}
                                alt={latest.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-gold/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <Play className="w-9 h-9 text-charcoal ml-1" fill="currentColor" />
                                </div>
                            </div>
                        </button>
                    )}
                </div>
                <div className="mt-4 text-center">
                    <h3 className="font-display text-xl font-semibold text-white mb-1">{latest.title}</h3>
                    {formatDate(latest.publishedAt) && (
                        <p className="text-sm text-cream/50">{formatDate(latest.publishedAt)}</p>
                    )}
                </div>
            </div>

            {/* Past episodes — smaller library grid */}
            {rest.length > 0 && (
                <div>
                    <h3 className="text-center text-sm font-semibold text-cream/50 uppercase tracking-wide mb-4">
                        More Episodes
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {rest.map((ep) => (
                            <a
                                key={ep.videoId}
                                href={ep.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block"
                            >
                                <div className="relative aspect-video rounded-lg overflow-hidden bg-black border border-white/10 group-hover:border-gold/30 transition-colors">
                                    <img
                                        src={ep.thumbnail}
                                        alt={ep.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                        <div className="w-9 h-9 bg-black/60 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-2 text-xs text-cream/70 line-clamp-2 group-hover:text-gold transition-colors">
                                    {ep.title}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            )}

            <div className="text-center">
                <a
                    href={PLAYLIST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-cream/50 hover:text-gold transition-colors"
                >
                    View full playlist on YouTube <ExternalLink className="w-3.5 h-3.5" />
                </a>
            </div>
        </div>
    );
}
