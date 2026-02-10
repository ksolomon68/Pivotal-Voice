'use client';

import { useState, useEffect } from 'react';
import { Calendar, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { getUpcomingEvents, getTodayEvents } from '@/lib/events/civic-events-service';
import { CivicEvent, EVENT_TYPE_LABELS } from '@/lib/types/civic-events';
import CivicEventCard from './CivicEventCard';

interface UpcomingMeetingsProps {
    limit?: number;
    userId?: string;
}

export default function UpcomingMeetings({ limit = 5, userId }: UpcomingMeetingsProps) {
    const [events, setEvents] = useState<CivicEvent[]>([]);
    const [todayEvents, setTodayEvents] = useState<CivicEvent[]>([]);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const fetchEvents = async () => {
            const up = await getUpcomingEvents(limit);
            const today = await getTodayEvents();
            setEvents(up);
            setTodayEvents(today);
            setReady(true);
        };
        fetchEvents();
    }, [limit]);

    if (!ready) return null;

    return (
        <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-blue-400" />
                    </div>
                    <h4 className="text-sm font-semibold text-white">Upcoming Meetings</h4>
                </div>
                <Link href="/calendar" className="text-xs text-gold hover:text-gold/80 transition-colors">
                    View All →
                </Link>
            </div>

            {/* Today highlight */}
            {todayEvents.length > 0 && (
                <div className="mb-3 p-2 rounded-lg bg-red-500/10 border border-red-500/20">
                    <div className="flex items-center gap-1 mb-1">
                        <AlertCircle className="w-3 h-3 text-red-400" />
                        <span className="text-xs font-semibold text-red-400">Happening Today</span>
                    </div>
                    {todayEvents.map(e => (
                        <p key={e.id} className="text-xs text-white/70 pl-4">
                            {e.title} — {e.startTime.split(':').map(Number).map((n, i) => i === 0 ? `${n % 12 || 12}` : `:${n.toString().padStart(2, '0')}`).join('')} {Number(e.startTime.split(':')[0]) >= 12 ? 'PM' : 'AM'}
                        </p>
                    ))}
                </div>
            )}

            {/* Event list */}
            <div className="space-y-2">
                {events.map(event => (
                    <CivicEventCard
                        key={event.id}
                        event={event}
                        userId={userId}
                        compact
                    />
                ))}
            </div>

            {events.length === 0 && (
                <p className="text-xs text-white/40 text-center py-4">No upcoming meetings scheduled.</p>
            )}
        </div>
    );
}
