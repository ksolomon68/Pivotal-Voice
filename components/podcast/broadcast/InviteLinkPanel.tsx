'use client';

import { useState } from 'react';
import { Copy, Check, Link } from 'lucide-react';

interface Props {
    sessionId: string;
    inviteToken: string;
}

export default function InviteLinkPanel({ sessionId, inviteToken }: Props) {
    const [copied, setCopied] = useState(false);
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    const inviteUrl = `${baseUrl}/podcast/studio/${sessionId}?invite=${inviteToken}`;

    const handleCopy = async () => {
        await navigator.clipboard.writeText(inviteUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-navy-dark/60 border border-gold/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
                <Link className="w-4 h-4 text-gold" />
                <span className="text-sm font-semibold text-cream/80">Guest Invite Link</span>
            </div>
            <p className="text-xs text-cream/50 mb-3">
                Share this link with your guest. They don't need an account — just a display name.
            </p>
            <div className="flex items-center gap-2">
                <div className="flex-1 bg-navy border border-white/10 rounded-lg px-3 py-2 text-xs text-cream/60 truncate font-mono">
                    {inviteUrl}
                </div>
                <button
                    onClick={handleCopy}
                    className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gold/10 border border-gold/30 text-gold text-xs font-medium hover:bg-gold/20 transition-colors"
                >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
        </div>
    );
}
