"use client";

import dynamic from "next/dynamic";

const NewsletterPopup = dynamic(() => import("@/components/crm/NewsletterPopup"), { ssr: false });

export function ClientWrappers() {
    return <NewsletterPopup />;
}
