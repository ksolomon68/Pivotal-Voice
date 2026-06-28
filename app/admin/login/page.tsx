'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { supabase } from '@/lib/supabase/client';
import { useAuth } from '@/lib/forum/AuthContext';

export default function AdminLoginPage() {
    const { user, isLoading, login } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    // Watch auth state: redirect if admin, show error and sign out if not
    useEffect(() => {
        if (isLoading) return;
        if (user) {
            if (user.isAdmin) {
                router.replace('/admin');
            } else {
                setError('This account does not have admin access.');
                supabase.auth.signOut();
            }
        }
    }, [user, isLoading, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSubmitting(true);

        try {
            const result = await login(email, password);
            if (!result.success) {
                setError(result.error || 'Sign-in failed.');
                setSubmitting(false);
            }
            // If successful, the useEffect hook will handle redirection or access denial
        } catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            console.error('[login] Unexpected error during sign-in:', err);
            setError(`Sign-in error: ${message}`);
            setSubmitting(false);
        }
    };

    // Show a spinner while the initial auth check runs
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-navy-dark">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
                    <p className="text-cream/40 text-sm">Checking session…</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-navy-dark px-4">
            <div className="w-full max-w-sm">
                <div className="text-center mb-8">
                    <div className="relative w-16 h-16 mx-auto mb-4">
                        <Image src="/images/logo.png" alt="Pivotal Voice" fill className="object-contain rounded-full" />
                    </div>
                    <h1 className="text-2xl font-display font-bold text-white">Admin Login</h1>
                    <p className="text-cream/50 text-sm mt-1">Pivotal Voice Dashboard</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
                        <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            className="input w-full pl-10"
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            className="input w-full pl-10 pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(v => !v)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-cream/40 hover:text-cream/70"
                        >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                    </div>

                    {error && (
                        <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                            {error}
                        </p>
                    )}

                    <button type="submit" disabled={submitting} className="btn-primary w-full">
                        {submitting ? 'Signing in…' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    );
}
