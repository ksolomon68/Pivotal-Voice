'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users } from 'lucide-react';
import { supabase } from '@/lib/supabase/client';

interface Props {
    sessionId: string;
    initialCount: number;
}

export default function ViewerCountBadge({ sessionId, initialCount }: Props) {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        const channel = supabase
            .channel(`viewers-${sessionId}`)
            .on(
                'postgres_changes',
                {
                    event: 'UPDATE',
                    schema: 'public',
                    table: 'broadcast_sessions',
                    filter: `id=eq.${sessionId}`,
                },
                (payload) => {
                    const newCount = (payload.new as { viewer_count: number }).viewer_count;
                    setCount(newCount);
                }
            )
            .subscribe();

        return () => { supabase.removeChannel(channel); };
    }, [sessionId]);

    return (
        <div className="flex items-center gap-2 px-3 py-1.5 bg-navy-dark/80 border border-gold/20 rounded-full">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <span className="text-xs font-semibold text-white uppercase tracking-wide">LIVE</span>
            <span className="w-px h-3 bg-cream/20" />
            <Users className="w-3 h-3 text-cream/60" />
            <AnimatePresence mode="popLayout">
                <motion.span
                    key={count}
                    initial={{ y: -8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 8, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs font-medium text-cream/80 tabular-nums"
                >
                    {count.toLocaleString()}
                </motion.span>
            </AnimatePresence>
        </div>
    );
}
