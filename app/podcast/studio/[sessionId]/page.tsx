'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import { useAuth } from '@/lib/forum/AuthContext';
import { supabase } from '@/lib/supabase/client';
import { getSession } from '@/lib/broadcast/broadcast-service';
import StudioRoom from '@/components/podcast/broadcast/StudioRoom';
import { BroadcastRole, BroadcastSession } from '@/lib/types/broadcast';
import { AlertCircle } from 'lucide-react';

type PageState = 'loading' | 'name-prompt' | 'connecting' | 'live' | 'error';

export default function StudioPage() {
    const { sessionId } = useParams<{ sessionId: string }>();
    const searchParams = useSearchParams();
    const router = useRouter();
    const { user } = useAuth();

    const inviteToken = searchParams.get('invite') || '';

    const [pageState, setPageState] = useState<PageState>('loading');
    const [session, setSession] = useState<BroadcastSession | null>(null);
    const [role, setRole] = useState<BroadcastRole>('viewer');
    const [livekitToken, setLivekitToken] = useState('');
    const [livekitUrl, setLivekitUrl] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [error, setError] = useState('');
    const [isUpdating, setIsUpdating] = useState(false);
    const [sessionStatus, setSessionStatus] = useState<BroadcastSession['status']>('scheduled');

    const isMockMode = !process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const activeUser = user || (isMockMode ? { id: 'mock-host-1', displayName: 'Commissioner Smith', isAdmin: true } : null);

    useEffect(() => {
        if (!activeUser || !sessionId) return;

        async function init() {
            try {
                const s = await getSession(sessionId as string);
                if (!s) throw new Error('Session not found');
                setSession(s);
                setSessionStatus(s.status);

                // Determine role
                if (activeUser.isAdmin && s.hostId === activeUser.id) {
                    setRole('host');
                    await fetchToken('host', s, activeUser.displayName);
                } else if (inviteToken && inviteToken === s.guestInviteToken) {
                    setRole('guest');
                    setPageState('name-prompt');
                } else {
                    router.replace(`/podcast/live/${sessionId}`);
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load session');
                setPageState('error');
            }
        }

        init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, sessionId]);

    async function fetchToken(r: BroadcastRole, s: BroadcastSession, name: string) {
        setPageState('connecting');
        try {
            const { data: { session: authSession } } = await supabase.auth.getSession();
            const authToken = authSession?.access_token;

            const res = await fetch('/api/broadcast/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...(authToken ? { 'Authorization': `Bearer ${authToken}` } : {}),
                },
                body: JSON.stringify({
                    sessionId: s.id,
                    role: r,
                    displayName: name,
                    inviteToken: r === 'guest' ? inviteToken : undefined,
                }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Failed to get token');
            }

            const { token, livekitUrl: url } = await res.json();
            setLivekitToken(token);
            setLivekitUrl(url);
            setDisplayName(name);
            setPageState('live');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Connection failed');
            setPageState('error');
        }
    }

    const handleNameSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!nameInput.trim() || !session) return;
        fetchToken('guest', session, nameInput.trim());
    };

    const handleGoLive = async () => {
        if (!session) return;
        setIsUpdating(true);
        try {
            const { data: { session: authSession } } = await supabase.auth.getSession();
            await fetch(`/api/broadcast/sessions/${session.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authSession?.access_token}`,
                },
                body: JSON.stringify({ status: 'live' }),
            });
            setSessionStatus('live');
            setSession(prev => prev ? { ...prev, status: 'live' } : prev);
        } finally {
            setIsUpdating(false);
        }
    };

    const handleEnd = async () => {
        if (!session) return;
        setIsUpdating(true);
        try {
            const { data: { session: authSession } } = await supabase.auth.getSession();
            await fetch(`/api/broadcast/sessions/${session.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authSession?.access_token}`,
                },
                body: JSON.stringify({ status: 'ended' }),
            });
            setSessionStatus('ended');
            setSession(prev => prev ? { ...prev, status: 'ended' } : prev);
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <div className="min-h-screen bg-navy flex flex-col">
            <Header />

            <main className="flex-1 p-4 lg:p-6">
                {pageState === 'loading' && (
                    <div className="flex items-center justify-center h-64">
                        <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
                    </div>
                )}

                {pageState === 'name-prompt' && (
                    <div className="max-w-md mx-auto mt-20">
                        <div className="bg-navy-dark/60 border border-white/10 rounded-2xl p-8 text-center">
                            <h2 className="text-xl font-display font-bold text-white mb-2">You're invited!</h2>
                            <p className="text-cream/60 text-sm mb-6">Enter your name to join the studio as a guest.</p>
                            <form onSubmit={handleNameSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    value={nameInput}
                                    onChange={(e) => setNameInput(e.target.value)}
                                    placeholder="Your display name"
                                    className="input w-full"
                                    autoFocus
                                    required
                                />
                                <button
                                    type="submit"
                                    disabled={!nameInput.trim()}
                                    className="btn-primary w-full disabled:opacity-50"
                                >
                                    Join Studio
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                {pageState === 'connecting' && (
                    <div className="flex flex-col items-center justify-center h-64 gap-3">
                        <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
                        <p className="text-cream/50 text-sm">Connecting to studio...</p>
                    </div>
                )}

                {pageState === 'error' && (
                    <div className="max-w-md mx-auto mt-20 text-center">
                        <div className="w-14 h-14 bg-red-500/10 border border-red-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <AlertCircle className="w-7 h-7 text-red-400" />
                        </div>
                        <h2 className="text-xl font-display font-bold text-white mb-2">Connection Failed</h2>
                        <p className="text-cream/60 text-sm">{error}</p>
                    </div>
                )}

                {pageState === 'live' && session && (
                    <StudioRoom
                        token={livekitToken}
                        livekitUrl={livekitUrl}
                        role={role}
                        session={{ ...session, status: sessionStatus }}
                        onGoLive={handleGoLive}
                        onEnd={handleEnd}
                        isUpdating={isUpdating}
                    />
                )}
            </main>
        </div>
    );
}
