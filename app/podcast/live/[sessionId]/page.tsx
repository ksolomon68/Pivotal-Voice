'use client';

import { useEffect, useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getSession } from '@/lib/broadcast/broadcast-service';
import StudioRoom from '@/components/podcast/broadcast/StudioRoom';
import { BroadcastSession } from '@/lib/types/broadcast';
import { Clock, Radio, AlertCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase/client';

type PageState = 'loading' | 'not-live' | 'connecting' | 'facebook-live' | 'live' | 'ended' | 'error';

export default function LiveViewerPage() {
    const { sessionId } = useParams<{ sessionId: string }>();
    const [pageState, setPageState] = useState<PageState>('loading');
    const [session, setSession] = useState<BroadcastSession | null>(null);
    const [livekitToken, setLivekitToken] = useState('');
    const [livekitUrl, setLivekitUrl] = useState('');
    const [error, setError] = useState('');
    const incrementedRef = useRef(false);

    useEffect(() => {
        if (!sessionId) return;

        async function init() {
            try {
                const s = await getSession(sessionId as string);
                if (!s) throw new Error(`Broadcast not found (id: ${sessionId})`);
                setSession(s);

                if (s.status === 'ended') {
                    setPageState('ended');
                    return;
                }
                if (s.status !== 'live') {
                    setPageState('not-live');
                    return;
                }

                if (s.facebookVideoUrl) {
                    setPageState('facebook-live');
                    return;
                }

                await connectAsViewer(s.id);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load broadcast');
                setPageState('error');
            }
        }

        init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sessionId]);

    // Realtime subscription for status changes (not-live → live, live → ended)
    useEffect(() => {
        if (!sessionId) return;

        const channel = supabase
            .channel(`live-status-${sessionId}`)
            .on(
                'postgres_changes',
                {
                    event: 'UPDATE',
                    schema: 'public',
                    table: 'broadcast_sessions',
                    filter: `id=eq.${sessionId}`,
                },
                async (payload) => {
                    const updated = payload.new as { status: string; facebook_video_url?: string };
                    if (updated.status === 'ended') {
                        setPageState('ended');
                    } else if (updated.status === 'live' && pageState === 'not-live') {
                        const s = await getSession(sessionId as string);
                        if (s) {
                            setSession(s);
                            if (s.facebookVideoUrl) {
                                setPageState('facebook-live');
                            } else {
                                await connectAsViewer(s.id);
                            }
                        }
                    } else if (updated.facebook_video_url && pageState === 'live') {
                        // Facebook URL added after LiveKit viewer was already connected — switch to embed
                        const s = await getSession(sessionId as string);
                        if (s) {
                            setSession(s);
                            setPageState('facebook-live');
                        }
                    }
                }
            )
            .subscribe();

        return () => { supabase.removeChannel(channel); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sessionId, pageState]);

    // Decrement viewer count on unmount
    useEffect(() => {
        return () => {
            if (incrementedRef.current && sessionId) {
                navigator.sendBeacon(`/api/broadcast/sessions/${sessionId}/viewer-decrement`);
            }
        };
    }, [sessionId]);

    async function connectAsViewer(id: string) {
        setPageState('connecting');
        try {
            const res = await fetch('/api/broadcast/token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sessionId: id, role: 'viewer' }),
            });
            if (!res.ok) throw new Error('Failed to get viewer token');
            const { token, livekitUrl: url } = await res.json();
            setLivekitToken(token);
            setLivekitUrl(url);

            // Increment viewer count
            if (!incrementedRef.current) {
                incrementedRef.current = true;
                await fetch(`/api/broadcast/sessions/${id}/viewer-increment`, { method: 'POST' });
            }

            setPageState('live');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Connection failed');
            setPageState('error');
        }
    }

    return (
        <>
            <Header />
            <main className="min-h-screen bg-navy">
                {pageState === 'loading' && (
                    <div className="flex items-center justify-center h-64">
                        <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
                    </div>
                )}

                {pageState === 'not-live' && session && (
                    <div className="flex items-center justify-center min-h-[60vh]">
                        <div className="text-center max-w-md mx-auto p-8">
                            <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                <Clock className="w-8 h-8 text-gold/60" />
                            </div>
                            <h2 className="text-xl font-display font-bold text-white mb-2">Broadcast Not Yet Started</h2>
                            <p className="text-cream/60 mb-1 text-sm">{session.title}</p>
                            <p className="text-cream/40 text-xs mb-6">Hosted by {session.hostName} · This page will update automatically when the broadcast begins.</p>
                            <div className="flex items-center justify-center gap-2 text-xs text-cream/40">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-50" />
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold/60" />
                                </span>
                                Waiting for host...
                            </div>
                        </div>
                    </div>
                )}

                {pageState === 'connecting' && (
                    <div className="flex flex-col items-center justify-center h-64 gap-3">
                        <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
                        <p className="text-cream/50 text-sm">Joining broadcast...</p>
                    </div>
                )}

                {pageState === 'ended' && session && (
                    <div className="flex items-center justify-center min-h-[60vh]">
                        <div className="text-center max-w-md mx-auto p-8">
                            <div className="w-16 h-16 bg-navy-dark border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                <Radio className="w-8 h-8 text-cream/30" />
                            </div>
                            <h2 className="text-xl font-display font-bold text-white mb-2">Broadcast Ended</h2>
                            <p className="text-cream/60 text-sm mb-6">
                                <span className="font-semibold">{session.title}</span> has ended.
                            </p>
                            <Link href="/podcast" className="btn-secondary text-sm">Back to Podcast</Link>
                        </div>
                    </div>
                )}

                {pageState === 'error' && (
                    <div className="flex items-center justify-center min-h-[60vh]">
                        <div className="text-center max-w-md mx-auto p-8">
                            <div className="w-16 h-16 bg-red-500/10 border border-red-400/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                <AlertCircle className="w-8 h-8 text-red-400" />
                            </div>
                            <h2 className="text-xl font-display font-bold text-white mb-2">Error</h2>
                            <p className="text-cream/60 text-sm mb-6">{error}</p>
                            <Link href="/podcast" className="btn-secondary text-sm">Back to Podcast</Link>
                        </div>
                    </div>
                )}

                {pageState === 'facebook-live' && session?.facebookVideoUrl && (
                    <div className="p-4 lg:p-6 max-w-5xl mx-auto w-full">
                        <div className="aspect-video w-full mb-4 rounded-xl overflow-hidden bg-black">
                            <iframe
                                src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(session.facebookVideoUrl)}&show_text=false&autoplay=1&mute=0`}
                                className="w-full h-full"
                                style={{ border: 'none' }}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                        <div className="flex items-start justify-between gap-4">
                            <div className="bg-navy-dark/60 border border-white/10 rounded-xl p-4 flex-1">
                                <h3 className="text-base font-display font-bold text-white mb-1">{session.title}</h3>
                                {session.description && (
                                    <p className="text-sm text-cream/50">{session.description}</p>
                                )}
                                <p className="text-xs text-cream/40 mt-2">Hosted by {session.hostName}</p>
                            </div>
                            <a
                                href={session.facebookVideoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary text-xs shrink-0 inline-flex items-center gap-1.5"
                            >
                                <ExternalLink className="w-3 h-3" />
                                Open on Facebook
                            </a>
                        </div>
                    </div>
                )}

                {pageState === 'live' && session && (
                    <div className="p-4 lg:p-6">
                        <StudioRoom
                            token={livekitToken}
                            livekitUrl={livekitUrl}
                            role="viewer"
                            session={session}
                            onGoLive={() => {}}
                            onEnd={() => {}}
                            isUpdating={false}
                        />
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}
