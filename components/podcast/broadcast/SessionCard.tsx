'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Radio, Users, Calendar, Clock } from 'lucide-react';
import { BroadcastSession } from '@/lib/types/broadcast';
import { format } from 'date-fns';

interface Props {
    session: BroadcastSession;
}

export default function SessionCard({ session }: Props) {
    const isLive = session.status === 'live';
    const scheduledDate = session.scheduledAt ? new Date(session.scheduledAt) : null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="group bg-navy-dark/40 border border-white/8 rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-300"
        >
            <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                        {isLive ? (
                            <span className="flex items-center gap-1.5 px-2 py-0.5 bg-red-500/15 border border-red-400/30 rounded-full text-xs font-semibold text-red-400">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                                </span>
                                LIVE
                            </span>
                        ) : (
                            <span className="flex items-center gap-1.5 px-2 py-0.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-medium text-gold">
                                <Clock className="w-3 h-3" />
                                Upcoming
                            </span>
                        )}
                    </div>
                    {isLive && (
                        <div className="flex items-center gap-1 text-xs text-cream/50">
                            <Users className="w-3 h-3" />
                            <span>{session.viewerCount.toLocaleString()}</span>
                        </div>
                    )}
                </div>

                <h3 className="text-base font-display font-bold text-white mb-1 group-hover:text-gold transition-colors line-clamp-2">
                    {session.title}
                </h3>
                {session.description && (
                    <p className="text-sm text-cream/50 mb-3 line-clamp-2">{session.description}</p>
                )}

                <div className="flex items-center gap-1 text-xs text-cream/40 mb-4">
                    <Radio className="w-3 h-3" />
                    <span>Hosted by {session.hostName}</span>
                    {scheduledDate && !isLive && (
                        <>
                            <span className="mx-1">·</span>
                            <Calendar className="w-3 h-3" />
                            <span>{format(scheduledDate, 'MMM d, h:mm a')}</span>
                        </>
                    )}
                </div>

                <Link
                    href={isLive ? `/podcast/live/${session.id}` : `/podcast/live/${session.id}`}
                    className="block w-full text-center py-2 px-4 rounded-lg bg-gold/10 border border-gold/30 text-gold text-sm font-semibold hover:bg-gold/20 transition-colors"
                >
                    {isLive ? 'Watch Live' : 'View Details'}
                </Link>
            </div>
        </motion.div>
    );
}
