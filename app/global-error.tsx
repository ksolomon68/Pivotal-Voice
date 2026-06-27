'use client';

import { useEffect } from 'react';

export default function GlobalError({
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
        console.error('[GlobalError]', error);

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
        <html>
            <body style={{ background: '#0d1625', color: '#f5f0e8', fontFamily: 'sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', margin: 0 }}>
                <div style={{ textAlign: 'center', maxWidth: 480, padding: '2rem' }}>
                    <h2 style={{ color: '#d4af37', fontSize: '1.5rem', marginBottom: '1rem' }}>
                        Something went wrong
                    </h2>
                    <p style={{ color: 'rgba(245,240,232,0.6)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                        {isChunkError
                            ? 'A page resource failed to load. Refreshing automatically…'
                            : 'An unexpected error occurred. Please try refreshing the page.'}
                    </p>
                    {!isChunkError && (
                        <button
                            onClick={reset}
                            style={{ background: '#d4af37', color: '#0d1625', border: 'none', padding: '0.75rem 2rem', borderRadius: '0.5rem', fontWeight: 600, cursor: 'pointer', fontSize: '1rem' }}
                        >
                            Try Again
                        </button>
                    )}
                </div>
            </body>
        </html>
    );
}
