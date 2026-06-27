'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { supabase } from '@/lib/supabase/client';
import { useAuth } from '@/lib/forum/AuthContext';

export default function AdminLoginPage() {
    const { user, isLoading } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    // Once AuthContext resolves the session after sign-in, handle redirect or access denial
    useEffect(() => {
        if (isLoading || !submitting) return;
        if (user?.isAdmin) {
            router.replace('/admin');
        } else if (user && !user.isAdmin) {
            supabase.auth.signOut();
            setError('This account does not have admin access.');
            setSubmitting(false);
        }
    }, [user, isLoading, submitting, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSubmitting(true);

        const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
        if (authError) {
            setError(authError.message);
            setSubmitting(false);
            return;
        }
        // AuthContext's onAuthStateChange will update `user`; the useEffect above handles the rest
    };

    if (isLoading) return null;

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
