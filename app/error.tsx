'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const isChunkError =
        (error as { name?: string })?.name === 'ChunkLoadError' ||
        error?.message?.includes('Loading chunk') ||
        error?.message?.includes('Failed to load chunk');

    useEffect(() => {
        console.error('[PageError]', error);

        if (isChunkError) {
            const RELOAD_KEY = 'pv_chunk_reload';
            const lastReload = sessionStorage.getItem(RELOAD_KEY);
            const now = Date.now();
            if (!lastReload || now - parseInt(lastReload) > 30000) {
                sessionStorage.setItem(RELOAD_KEY, String(now));
                window.location.reload();
            }
        }
    }, [error, isChunkError]);

    return (
        <div style={{ background: '#0d1625', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <div style={{ textAlign: 'center', maxWidth: 520 }}>
                <h2 style={{ color: '#d4af37', fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'sans-serif' }}>
                    Page Error
                </h2>
                <p style={{ color: 'rgba(245,240,232,0.6)', marginBottom: '1rem', fontSize: '0.9rem', fontFamily: 'sans-serif' }}>
                    {isChunkError
                        ? 'A page resource failed to load. Refreshing automatically…'
                        : 'This page encountered an error. You can try again or return home.'}
                </p>
                {!isChunkError && (error?.message || error?.digest) && (
                    <p style={{ color: 'rgba(245,240,232,0.35)', marginBottom: '1.5rem', fontSize: '0.75rem', fontFamily: 'monospace', background: 'rgba(255,255,255,0.05)', padding: '0.5rem 0.75rem', borderRadius: '0.375rem', wordBreak: 'break-all' }}>
                        {error.digest ? `[${error.digest}] ` : ''}{error.message}
                    </p>
                )}
                {!isChunkError && (
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
                )}
            </div>
        </div>
    );
}
