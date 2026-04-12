'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('[PageError]', error);
    }, [error]);

    return (
        <div style={{ background: '#0d1625', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <div style={{ textAlign: 'center', maxWidth: 480 }}>
                <h2 style={{ color: '#d4af37', fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'sans-serif' }}>
                    Page Error
                </h2>
                <p style={{ color: 'rgba(245,240,232,0.6)', marginBottom: '1.5rem', fontSize: '0.9rem', fontFamily: 'sans-serif' }}>
                    This page encountered an error. You can try again or return home.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <button
                        onClick={reset}
                        style={{ background: '#d4af37', color: '#0d1625', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 600, cursor: 'pointer' }}
                    >
                        Try Again
                    </button>
                    <a
                        href="/"
                        style={{ background: 'transparent', color: '#d4af37', border: '1px solid #d4af37', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'none' }}
                    >
                        Go Home
                    </a>
                </div>
            </div>
        </div>
    );
}
