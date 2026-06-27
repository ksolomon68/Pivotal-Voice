'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MissionPillars from '@/components/podcast/MissionPillars';
import YouTubeLiveEmbed from '@/components/podcast/YouTubeLiveEmbed';
import SessionCard from '@/components/podcast/broadcast/SessionCard';
import { Podcast, Music, Radio, Youtube } from 'lucide-react';
import { useAuth } from '@/lib/forum/AuthContext';
import Link from 'next/link';
import { BroadcastSession } from '@/lib/types/broadcast';

export default function PodcastPage() {
    const { user } = useAuth();
    const [liveSessions, setLiveSessions] = useState<BroadcastSession[]>([]);
    const [scheduledSessions, setScheduledSessions] = useState<BroadcastSession[]>([]);

    useEffect(() => {
        fetch('/api/broadcast/sessions')
            .then((r) => r.json())
            .then(({ live, scheduled }) => {
                setLiveSessions(live || []);
                setScheduledSessions(scheduled || []);
            })
            .catch(() => {/* silently fail */});
    }, []);

    const hasSessions = liveSessions.length > 0 || scheduledSessions.length > 0;

    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Page Header */}
                <section className="relative bg-gradient-to-b from-navy via-navy to-navy-dark border-b border-gold/15 py-16 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.06)_0%,_transparent_60%)]" />
                    <div className="container-custom relative z-10">
                        <div className="text-center max-w-3xl mx-auto">
                            <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                <Podcast className="w-8 h-8 text-gold" />
                            </div>
                            <h1 className="text-hero font-bold text-white mb-4">
                                The Pivotal Voice Podcast
                            </h1>
                            <p className="text-lg text-cream/60">
                                Honest conversations with Ellis County leaders and change-makers.
                                Real conversations. Local leadership. Informed voters.
                            </p>

                            {/* Subscribe Buttons */}
                            <div className="flex flex-wrap justify-center gap-3 mt-8">
                                <a
                                    href="https://open.spotify.com/show/033EDEaRlSogq6mVFGi0xj"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary text-sm flex items-center gap-2"
                                >
                                    <Music className="w-4 h-4" />
                                    Spotify
                                </a>
                                <a
                                    href="https://www.youtube.com/@pivotalvoice"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary text-sm flex items-center gap-2"
                                >
                                    <Youtube className="w-4 h-4" />
                                    YouTube
                                </a>
                                {user?.isAdmin && (
                                    <Link
                                        href="/podcast/broadcast"
                                        className="btn-primary text-sm flex items-center gap-2 bg-red-600 hover:bg-red-700 border-red-500"
                                    >
                                        <Radio className="w-4 h-4" />
                                        Start a Broadcast
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Live Now */}
                {liveSessions.length > 0 && (
                    <section className="section bg-red-950/20 border-b border-red-500/10">
                        <div className="container-custom">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
                                </span>
                                <h2 className="text-lg font-display font-bold text-white uppercase tracking-wide">Live Now</h2>
                            </div>
                            {liveSessions[0]?.youtubeVideoId ? (
                                <YouTubeLiveEmbed
                                    videoId={liveSessions[0].youtubeVideoId}
                                    title={liveSessions[0].title}
                                />
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {liveSessions.map((s) => (
                                        <SessionCard key={s.id} session={s} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* Upcoming */}
                {scheduledSessions.length > 0 && (
                    <section className="section">
                        <div className="container-custom">
                            <h2 className="text-lg font-display font-bold text-white uppercase tracking-wide mb-6">
                                Upcoming Broadcasts
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {scheduledSessions.map((s) => (
                                    <SessionCard key={s.id} session={s} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* No sessions placeholder */}
                {!hasSessions && (
                    <section className="section">
                        <div className="container-custom">
                            <div className="max-w-2xl mx-auto text-center py-16">
                                <div className="w-20 h-20 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <Podcast className="w-10 h-10 text-gold/50" />
                                </div>
                                <h2 className="text-2xl font-display font-bold text-white mb-3">
                                    Episodes Coming Soon
                                </h2>
                                <p className="text-cream/60">
                                    The Pivotal Voice Podcast is launching soon. Subscribe below to be notified when the first episode drops.
                                </p>
                            </div>
                        </div>
                    </section>
                )}

                {/* Mission Pillars */}
                <section className="section">
                    <div className="container-custom">
                        <MissionPillars />
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-navy py-16">
                    <div className="container-custom">
                        <div className="text-center max-w-2xl mx-auto">
                            <h2 className="text-section font-bold text-white mb-4">
                                Never Miss an Episode
                            </h2>
                            <p className="text-cream/80 mb-6">
                                Subscribe to The Pivotal Voice Podcast and get notified when new episodes are released.
                            </p>
                            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="input flex-1"
                                />
                                <button type="submit" className="btn-primary">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
