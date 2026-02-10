'use client';

import { Event, EventType, OfficeLevel } from '@/lib/types/event';
import { format, parseISO, isBefore, startOfDay } from 'date-fns';
import { Calendar, MapPin, Clock, Users, Zap } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { formatTime12h } from '@/lib/utils/ics';

interface EventCardProps {
    event: Event;
    onClick: () => void;
}

const eventTypeLabels: Record<EventType, string> = {
    debate: 'Debate',
    town_hall: 'Town Hall',
    rally: 'Rally',
    meet_greet: 'Meet & Greet',
    forum: 'Forum',
    listening_session: 'Listening Session',
    candidate_appearance: 'Appearance',
};

const officeLevelLabels: Record<OfficeLevel, string> = {
    local: 'Local',
    county: 'County',
    state: 'State',
    federal: 'Federal',
};

const officeLevelColors: Record<OfficeLevel, string> = {
    local: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    county: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    state: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    federal: 'bg-red-500/20 text-red-400 border-red-500/30',
};

export default function EventCard({ event, onClick }: EventCardProps) {
    const eventDate = parseISO(event.date);
    const daysUntil = Math.ceil((eventDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    const isUpcoming = daysUntil >= 0;
    const isPast = isBefore(eventDate, startOfDay(new Date()));
    const isMultiCandidate = event.candidates.length > 1;
    const isDebate = event.eventType === 'debate';

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            onClick={onClick}
            className={clsx(
                'card cursor-pointer relative overflow-hidden',
                isPast && 'opacity-50',
                (isDebate || isMultiCandidate) && 'border-gold/60 glow-gold'
            )}
        >
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-3">
                {isUpcoming && daysUntil <= 7 && (
                    <span className="badge-red text-xs">
                        {daysUntil === 0 ? 'Today' : daysUntil === 1 ? 'Tomorrow' : `${daysUntil} days`}
                    </span>
                )}
                <span className={clsx(
                    'badge text-xs',
                    event.eventType === 'debate' && 'badge-gold',
                    event.eventType === 'town_hall' && 'badge-blue',
                    event.eventType === 'forum' && 'badge-green',
                    event.eventType === 'rally' && 'badge-red',
                    event.eventType === 'meet_greet' && 'badge-purple',
                    event.eventType === 'listening_session' && 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
                    event.eventType === 'candidate_appearance' && 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30',
                )}>
                    {eventTypeLabels[event.eventType]}
                </span>
                <span className={clsx('badge text-xs border', officeLevelColors[event.officeLevel])}>
                    {officeLevelLabels[event.officeLevel]}
                </span>
                {event.liveStreamUrl && (
                    <span className="badge-purple text-xs">
                        <Zap className="w-3 h-3 inline mr-1" />Live
                    </span>
                )}
            </div>

            {/* Event Title */}
            <h3 className="font-display text-xl font-semibold text-white mb-1 line-clamp-2">
                {event.title}
            </h3>

            <p className="text-gold text-sm mb-4">{event.office}</p>

            {/* Event Details */}
            <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-cream/80">
                    <Calendar className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>{format(eventDate, 'EEE, MMM d, yyyy')}</span>
                </div>
                <div className="flex items-center gap-2 text-cream/80">
                    <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>{formatTime12h(event.startTime)} – {formatTime12h(event.endTime)} CT</span>
                </div>
                <div className="flex items-center gap-2 text-cream/80">
                    <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="line-clamp-1">{event.venue.name}, {event.venue.city}</span>
                </div>
                {event.candidates.length > 0 && (
                    <div className="flex items-center gap-2 text-cream/80">
                        <Users className="w-4 h-4 text-gold flex-shrink-0" />
                        <span className="line-clamp-1">
                            {event.candidates.length} candidate{event.candidates.length !== 1 ? 's' : ''}
                            {isMultiCandidate && ' · Multi-candidate'}
                        </span>
                    </div>
                )}
            </div>

            {/* Verified Badge */}
            {event.verified && (
                <div className="absolute top-4 right-4">
                    <span className="badge-green text-xs">✓</span>
                </div>
            )}

            {/* Past overlay */}
            {isPast && (
                <div className="absolute top-4 left-4">
                    <span className="text-xs text-cream/40 bg-navy-dark/80 rounded px-2 py-0.5">Past Event</span>
                </div>
            )}
        </motion.div>
    );
}
