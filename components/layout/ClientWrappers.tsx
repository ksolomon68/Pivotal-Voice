"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

const NewsletterPopup = dynamic(() => import("@/components/crm/NewsletterPopup"), { ssr: false });

export function ClientWrappers() {
    useEffect(() => {
        const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
            const reason = event.reason;
            if (reason && (
                reason.name === 'AbortError' || 
                reason.message?.includes('signal is aborted') || 
                reason.message?.includes('aborted without reason')
            )) {
                // Prevent the Next.js dev server overlay from intercepting the abort error
                event.preventDefault();
                console.warn('Suppressed unhandled AbortError:', reason);
            }
        };

        window.addEventListener('unhandledrejection', handleUnhandledRejection);
        return () => window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    }, []);

    return <NewsletterPopup />;
}
