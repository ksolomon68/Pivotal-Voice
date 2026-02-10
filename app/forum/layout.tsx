'use client';

import { AuthProvider } from '@/lib/forum/AuthContext';
import { initializeForumData } from '@/lib/forum/forum-service';
import { useEffect, useState } from 'react';

export default function ForumLayout({ children }: { children: React.ReactNode }) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        initializeForumData();
        setReady(true);
    }, []);

    if (!ready) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-navy-dark">
                <div className="text-center">
                    <div className="w-10 h-10 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-cream/50 text-sm">Loading community forum...</p>
                </div>
            </div>
        );
    }

    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
}
