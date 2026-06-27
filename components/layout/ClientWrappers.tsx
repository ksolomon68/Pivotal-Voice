"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

const NewsletterPopup = dynamic(() => import("@/components/crm/NewsletterPopup"), { ssr: false });

function isChunkLoadError(reason: unknown): boolean {
    if (!reason || typeof reason !== 'object') return false;
    const err = reason as { name?: string; message?: string };
    return (
        err.name === 'ChunkLoadError' ||
        err.message?.includes('Loading chunk') === true ||
        err.message?.includes('Failed to load chunk') === true ||
        err.message?.includes('ChunkLoadError') === true
    );
}

export function ClientWrappers() {
    useEffect(() => {
        const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
            const reason = event.reason;

            if (reason && (
                reason.name === 'AbortError' ||
                reason.message?.includes('signal is aborted') ||
                reason.message?.includes('aborted without reason')
            )) {
                event.preventDefault();
                console.warn('Suppressed unhandled AbortError:', reason);
                return;
            }

            // Auto-reload once on ChunkLoadError to recover from stale cached chunk references
            if (isChunkLoadError(reason)) {
                event.preventDefault();
                const RELOAD_KEY = 'pv_chunk_reload';
                const lastReload = sessionStorage.getItem(RELOAD_KEY);
                const now = Date.now();
                // Only reload if we haven't tried in the last 30 seconds
                if (!lastReload || now - parseInt(lastReload) > 30000) {
                    console.warn('ChunkLoadError detected — reloading to recover stale chunks:', reason);
                    sessionStorage.setItem(RELOAD_KEY, String(now));
                    window.location.reload();
                } else {
                    console.error('ChunkLoadError persists after reload — not retrying:', reason);
                }
            }
        };

        window.addEventListener('unhandledrejection', handleUnhandledRejection);
        return () => window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    }, []);

    return <NewsletterPopup />;
}
