'use client';

import { Event, EventType } from '@/lib/types/event';
import { format, parseISO, startOfWeek, endOfWeek, addDays, addWeeks, subWeeks, isSameDay, isToday } from 'date-fns';
import { ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { formatTime12h } from '@/lib/utils/ics';

interface WeekViewProps {
    events: Event[];
    onEventClick: (event: Event) => void;
}

const eventTypeColors: Record<EventType, string> = {
    debate: 'border-l-gold bg-gold/10',
    town_hall: 'border-l-blue-400 bg-blue-400/10',
    rally: 'border-l-red-400 bg-red-400/10',
    meet_greet: 'border-l-purple-400 bg-purple-400/10',
    forum: 'border-l-emerald-400 bg-emerald-400/10',
    listening_session: 'border-l-amber-400 bg-amber-400/10',
    candidate_appearance: 'border-l-cyan-400 bg-cyan-400/10',
};

const eventTypeBadge: Record<EventType, string> = {
    debate: 'text-gold',
    town_hall: 'text-blue-400',
    rally: 'text-red-400',
    meet_greet: 'text-purple-400',
    forum: 'text-emerald-400',
    listening_session: 'text-amber-400',
    candidate_appearance: 'text-cyan-400',
};

const eventTypeLabels: Record<EventType, string> = {
    debate: 'Debate',
    town_hall: 'Town Hall',
    rally: 'Rally',
    meet_greet: 'Meet & Greet',
    forum: 'Forum',
    listening_session: 'Listening Session',
    candidate_appearance: 'Appearance',
};

export default function WeekView({ events, onEventClick }: WeekViewProps) {
    const [currentWeekStart, setCurrentWeekStart] = useState(
        startOfWeek(new Date())
    );

    const weekEnd = endOfWeek(currentWeekStart);

    const days = useMemo(() => {
        const dayArray: Date[] = [];
        for (let i = 0; i < 7; i++) {
            dayArray.push(addDays(currentWeekStart, i));
        }
        return dayArray;
    }, [currentWeekStart]);

    const eventsByDate = useMemo(() => {
        const map: Record<string, Event[]> = {};
        events.forEach((event) => {
            if (!map[event.date]) map[event.date] = [];
            map[event.date].push(event);
        });
        // Sort events within each day by start time
        Object.keys(map).forEach((date) => {
            map[date].sort((a, b) => a.startTime.localeCompare(b.startTime));
        });
        return map;
    }, [events]);

    const goToPrevWeek = () => setCurrentWeekStart(subWeeks(currentWeekStart, 1));
    const goToNextWeek = () => setCurrentWeekStart(addWeeks(currentWeekStart, 1));
    const goToThisWeek = () => setCurrentWeekStart(startOfWeek(new Date()));

    return (
        <div className="space-y-4">
            {/* Week Navigation */}
            <div className="flex items-center justify-between">
                <button
                    onClick={goToPrevWeek}
                    className="btn-secondary !px-3 !py-2"
                    aria-label="Previous week"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3">
                    <h2 className="text-xl md:text-2xl font-display font-bold text-white text-center">
                        {format(currentWeekStart, 'MMM d')} – {format(weekEnd, 'MMM d, yyyy')}
                    </h2>
                    <button
                        onClick={goToThisWeek}
                        className="text-sm text-gold hover:text-gold-dark transition-colors"
                    >
                        This Week
                    </button>
                </div>
                <button
                    onClick={goToNextWeek}
                    className="btn-secondary !px-3 !py-2"
                    aria-label="Next week"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Week Grid */}
            <div className="space-y-2">
                {days.map((day, index) => {
                    const dateStr = format(day, 'yyyy-MM-dd');
                    const dayEvents = eventsByDate[dateStr] || [];
                    const today = isToday(day);

                    return (
                        <motion.div
                            key={dateStr}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className={clsx(
                                'bg-navy border border-gold/20 rounded-xl overflow-hidden',
                                today && 'ring-1 ring-gold/40'
                            )}
                        >
                            {/* Day Header */}
                            <div
                                className={clsx(
                                    'px-4 py-3 flex items-center justify-between border-b border-gold/10',
                                    today ? 'bg-gold/10' : 'bg-navy-dark/30'
                                )}
                            >
                                <div className="flex items-center gap-3">
                                    <span
                                        className={clsx(
                                            'inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-bold',
                                            today
                                                ? 'bg-gold text-navy'
                                                : 'bg-navy-dark text-cream'
                                        )}
                                    >
                                        {format(day, 'd')}
                                    </span>
                                    <div>
                                        <span className="text-white font-semibold">
                                            {format(day, 'EEEE')}
                                        </span>
                                        <span className="text-cream/50 text-sm ml-2">
                                            {format(day, 'MMMM d')}
                                        </span>
                                    </div>
                                    {today && (
                                        <span className="badge-gold text-xs">Today</span>
                                    )}
                                </div>
                                <span className="text-cream/50 text-sm">
                                    {dayEvents.length > 0
                                        ? `${dayEvents.length} event${dayEvents.length !== 1 ? 's' : ''}`
                                        : ''}
                                </span>
                            </div>

                            {/* Events for the Day */}
                            {dayEvents.length > 0 ? (
                                <div className="divide-y divide-gold/10">
                                    {dayEvents.map((event) => (
                                        <button
                                            key={event.id}
                                            onClick={() => onEventClick(event)}
                                            className={clsx(
                                                'w-full text-left p-4 border-l-4 hover:bg-navy-dark/30 transition-all duration-200',
                                                eventTypeColors[event.eventType]
                                            )}
                                        >
                                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                                {/* Time */}
                                                <div className="flex items-center gap-1.5 text-sm text-cream/70 md:w-40 flex-shrink-0">
                                                    <Clock className="w-3.5 h-3.5 text-gold" />
                                                    {formatTime12h(event.startTime)} – {formatTime12h(event.endTime)} CT
                                                </div>

                                                {/* Title & Type */}
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-white font-medium truncate">
                                                        {event.title}
                                                    </p>
                                                    <div className="flex items-center gap-2 mt-0.5">
                                                        <span className={clsx('text-xs font-medium', eventTypeBadge[event.eventType])}>
                                                            {eventTypeLabels[event.eventType]}
                                                        </span>
                                                        <span className="text-cream/40 text-xs">·</span>
                                                        <span className="text-cream/50 text-xs">{event.office}</span>
                                                    </div>
                                                </div>

                                                {/* Location */}
                                                <div className="flex items-center gap-1.5 text-sm text-cream/60 md:text-right">
                                                    <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                                                    <span className="truncate">{event.venue.name}, {event.venue.city}</span>
                                                </div>
                                            </div>

                                            {/* Candidates */}
                                            {event.candidates.length > 0 && (
                                                <div className="mt-2 flex flex-wrap gap-1.5">
                                                    {event.candidates.map((c, ci) => (
                                                        <span
                                                            key={ci}
                                                            className="text-[11px] bg-navy-dark/60 text-cream/70 rounded-full px-2 py-0.5"
                                                        >
                                                            {c.name}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="px-4 py-3 text-cream/30 text-sm italic">
                                    No events scheduled
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
