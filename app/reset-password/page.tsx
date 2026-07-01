'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, CheckCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase/client';

export default function ResetPasswordPage() {
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');
    const [sessionReady, setSessionReady] = useState(false);

    // Supabase embeds the recovery token in the URL hash; exchanging it establishes
    // a temporary session so updateUser() is authenticated.
    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
            if (event === 'PASSWORD_RECOVERY') {
                setSessionReady(true);
            }
        });
        return () => subscription.unsubscribe();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg('');

        if (password !== confirm) {
            setErrorMsg('Passwords do not match.');
            return;
        }
        if (password.length < 6) {
            setErrorMsg('Password must be at least 6 characters.');
            return;
        }

        setStatus('submitting');
        const { error } = await supabase.auth.updateUser({ password });

        if (error) {
            setErrorMsg(error.message);
            setStatus('error');
            return;
        }

        setStatus('done');
        setTimeout(() => router.push('/'), 2500);
    };

    return (
        <div className="min-h-screen bg-navy flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-navy-dark border border-gold/30 rounded-2xl overflow-hidden shadow-2xl p-8">
                <h1 className="font-display text-2xl font-bold text-white mb-2">Set New Password</h1>
                <p className="text-cream/50 text-sm mb-6">Choose a new password for your account.</p>

                {status === 'done' ? (
                    <div className="text-center py-6">
                        <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                        <p className="text-green-400 font-semibold">Password updated!</p>
                        <p className="text-cream/50 text-sm mt-1">Redirecting you home…</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {!sessionReady && (
                            <p className="text-gold/70 text-xs text-center">
                                Waiting for reset link to activate… If this persists, request a new reset email.
                            </p>
                        )}

                        <div>
                            <label className="text-xs font-semibold text-cream/60 uppercase tracking-wider mb-1 block">
                                New Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="input pl-10 w-full"
                                    placeholder="Min 6 characters"
                                    required
                                    minLength={6}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-xs font-semibold text-cream/60 uppercase tracking-wider mb-1 block">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                                <input
                                    type="password"
                                    value={confirm}
                                    onChange={(e) => setConfirm(e.target.value)}
                                    className="input pl-10 w-full"
                                    placeholder="Re-enter password"
                                    required
                                />
                            </div>
                        </div>

                        {errorMsg && (
                            <p className="text-red-400 text-sm">{errorMsg}</p>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'submitting' || !sessionReady}
                            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            {status === 'submitting' ? (
                                <><Loader2 className="w-4 h-4 animate-spin" /> Updating…</>
                            ) : (
                                'Update Password'
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
