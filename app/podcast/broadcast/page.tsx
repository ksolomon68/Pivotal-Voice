'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useAuth } from '@/lib/forum/AuthContext';
import { supabase } from '@/lib/supabase/client';
import { Radio, Lock, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { BroadcastSession } from '@/lib/types/broadcast';

// Extract the broadcast ID from a StreamYard watch URL or accept a bare ID
function extractStreamyardId(input: string): string {
    const trimmed = input.trim();
    // Handle full URL: https://streamyard.com/watch/ABC123
    const match = trimmed.match(/streamyard\.com\/watch\/([A-Za-z0-9_-]+)/);
    if (match) return match[1];
    // Otherwise treat the input itself as the ID
    return trimmed;
}

export default function BroadcastCreatePage() {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [scheduledAt, setScheduledAt] = useState('');
    const [streamyardBroadcastId, setStreamyardBroadcastId] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [createdSession, setCreatedSession] = useState<BroadcastSession | null>(null);

    if (isLoading) {
        return (
            <>
                <Header />
                <main className="min-h-screen flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
                </main>
                <Footer />
            </>
        );
    }

    if (!user?.isAdmin) {
        return (
            <>
                <Header />
                <main className="min-h-screen flex items-center justify-center">
                    <div className="text-center max-w-md mx-auto p-8">
                        <div className="w-16 h-16 bg-red-500/10 border border-red-400/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                            <Lock className="w-8 h-8 text-red-400" />
                        </div>
                        <h1 className="text-2xl font-display font-bold text-white mb-3">Access Restricted</h1>
                        <p className="text-cream/60 mb-6">Only admins can create broadcast sessions.</p>
                        <Link href="/podcast" className="btn-secondary text-sm">Back to Podcast</Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;
        setIsSubmitting(true);
        setError('');

        try {
            const { data: { session: authSession } } = await supabase.auth.getSession();
            const token = authSession?.access_token;
            if (!token) throw new Error('Not authenticated');

            const res = await fetch('/api/broadcast/sessions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    title: title.trim(),
                    description: description.trim() || undefined,
                    scheduledAt: scheduledAt || undefined,
                    streamyardBroadcastId: extractStreamyardId(streamyardBroadcastId) || undefined,
                }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Failed to create session');
            }

            const newSession: BroadcastSession = await res.json();
            setCreatedSession(newSession);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (createdSession) {
        return (
            <>
                <Header />
                <main className="min-h-screen">
                    <section className="relative bg-gradient-to-b from-navy via-navy to-navy-dark border-b border-gold/15 py-16">
                        <div className="container-custom max-w-2xl">
                            <div className="bg-navy-dark/60 border border-gold/20 rounded-2xl p-8 text-center">
                                <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                    <Radio className="w-8 h-8 text-gold" />
                                </div>
                                <h2 className="text-2xl font-display font-bold text-white mb-2">Session Created!</h2>
                                <p className="text-cream/60 mb-6">
                                    Your broadcast session <span className="text-gold font-semibold">{createdSession.title}</span> is ready.
                                </p>
                                <button
                                    onClick={() => router.push(`/podcast/studio/${createdSession.id}`)}
                                    className="btn-primary w-full mb-4"
                                >
                                    Open Studio
                                </button>
                                <Link href="/podcast" className="text-sm text-cream/50 hover:text-cream/80 transition-colors">
                                    Back to Podcast
                                </Link>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main className="min-h-screen">
                <section className="relative bg-gradient-to-b from-navy via-navy to-navy-dark border-b border-gold/15 py-16 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.06)_0%,_transparent_60%)]" />
                    <div className="container-custom relative z-10 max-w-2xl">
                        <div className="text-center mb-10">
                            <div className="w-14 h-14 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Radio className="w-7 h-7 text-gold" />
                            </div>
                            <h1 className="text-3xl font-display font-bold text-white mb-2">Start a Broadcast</h1>
                            <p className="text-cream/60">Set up your live podcast session.</p>
                        </div>

                        {/* Streamyard workflow guide */}
                        <div className="bg-gold/5 border border-gold/20 rounded-xl p-5 mb-2 space-y-2">
                            <p className="text-sm font-semibold text-gold">How to Go Live with StreamYard</p>
                            <ol className="text-xs text-cream/60 space-y-1.5 list-decimal list-inside">
                                <li>Open <span className="text-cream/80">StreamYard</span> and click <span className="text-cream/80">Create a Broadcast</span></li>
                                <li>Set up your studio — add guests via the guest invite link if needed</li>
                                <li>Click <span className="text-cream/80">Go Live</span> in StreamYard to start your stream</li>
                                <li>Copy the <span className="text-cream/80">StreamYard watch URL</span> from your browser — it looks like:<br /><code className="text-gold/80 bg-black/20 px-1.5 py-0.5 rounded text-[10px] mt-0.5 inline-block">streamyard.com/watch/AbCdEf123</code></li>
                                <li>Paste that URL (or just the ID) in the field below and click <span className="text-cream/80">Create Session</span></li>
                            </ol>
                            <a
                                href="https://streamyard.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-gold/70 hover:text-gold transition-colors mt-1"
                            >
                                Open StreamYard <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>

                        <form onSubmit={handleSubmit} className="bg-navy-dark/60 border border-white/10 rounded-2xl p-8 space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-cream/70 mb-2">
                                    Episode Title <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="e.g. County Judge Q&A — Budget 2026"
                                    className="input w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-cream/70 mb-2">
                                    Description
                                </label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="What will you be discussing?"
                                    rows={3}
                                    className="input w-full resize-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-cream/70 mb-2">
                                    Scheduled Date & Time (optional)
                                </label>
                                <input
                                    type="datetime-local"
                                    value={scheduledAt}
                                    onChange={(e) => setScheduledAt(e.target.value)}
                                    className="input w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-cream/70 mb-2">
                                    StreamYard Watch URL or Broadcast ID <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={streamyardBroadcastId}
                                    onChange={(e) => setStreamyardBroadcastId(e.target.value)}
                                    placeholder="https://streamyard.com/watch/AbCdEf123"
                                    className="input w-full"
                                    required
                                />
                                <p className="text-xs text-cream/40 mt-1">
                                    Paste the full StreamYard watch URL or just the broadcast ID. Viewers on this site will see the embedded StreamYard stream.
                                </p>
                            </div>

                            {error && (
                                <p className="text-sm text-red-400 bg-red-500/10 border border-red-400/20 rounded-lg px-4 py-3">
                                    {error}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting || !title.trim()}
                                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Creating...' : 'Create Session'}
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
