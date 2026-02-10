'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/forum/AuthContext';
import { Send, Eye, EyeOff } from 'lucide-react';

interface ReplyComposerProps {
    topicId: string;
    parentReplyId?: string;
    onSubmit: (body: string, isAnonymous: boolean, parentReplyId?: string) => void;
    onCancel?: () => void;
    placeholder?: string;
}

export default function ReplyComposer({ topicId, parentReplyId, onSubmit, onCancel, placeholder }: ReplyComposerProps) {
    const { user } = useAuth();
    const [body, setBody] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);

    if (!user) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!body.trim()) return;
        onSubmit(body.trim(), isAnonymous, parentReplyId);
        setBody('');
        setIsAnonymous(false);
    };

    return (
        <form onSubmit={handleSubmit} className={`bg-navy border border-gold/20 rounded-xl p-4 ${parentReplyId ? 'ml-4 sm:ml-8' : ''}`}>
            <div className="flex items-center gap-2 mb-3 text-sm">
                <div className="w-6 h-6 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center">
                    <span className="text-xs font-bold text-gold">{user.displayName[0]}</span>
                </div>
                <span className="text-cream/60">
                    Replying as <span className="text-gold font-semibold">{isAnonymous ? 'Anonymous' : user.displayName}</span>
                </span>
            </div>

            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder={placeholder || 'Share your thoughts...'}
                className="input w-full min-h-[100px] text-sm mb-3"
                required
            />

            <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer text-sm text-cream/50 hover:text-cream/70 transition-colors">
                    {isAnonymous ? <EyeOff className="w-4 h-4 text-amber-400" /> : <Eye className="w-4 h-4" />}
                    <input
                        type="checkbox"
                        checked={isAnonymous}
                        onChange={(e) => setIsAnonymous(e.target.checked)}
                        className="sr-only"
                    />
                    Post anonymously
                </label>

                <div className="flex gap-2">
                    {onCancel && (
                        <button type="button" onClick={onCancel} className="btn-secondary text-sm">
                            Cancel
                        </button>
                    )}
                    <button type="submit" disabled={!body.trim()} className="btn-primary text-sm flex items-center gap-2">
                        <Send className="w-4 h-4" /> Post Reply
                    </button>
                </div>
            </div>
        </form>
    );
}
