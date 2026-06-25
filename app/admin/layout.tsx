'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/lib/forum/AuthContext';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const { user, isLoading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const isLoginPage = pathname === '/admin/login';

    useEffect(() => {
        if (isLoading) return;
        if (!user && !isLoginPage) {
            router.replace('/admin/login');
        }
    }, [user, isLoading, isLoginPage, router]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-navy-dark">
                <div className="w-10 h-10 border-2 border-gold border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (!isLoginPage && !user) return null;

    if (!isLoginPage && user && !user.isAdmin) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-navy-dark px-4">
                <div className="text-center">
                    <h2 className="text-xl font-bold text-white mb-2">Access Restricted</h2>
                    <p className="text-cream/60 mb-6">This area requires administrator access.</p>
                    <button onClick={() => router.push('/')} className="btn-secondary">
                        Return to Site
                    </button>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}
