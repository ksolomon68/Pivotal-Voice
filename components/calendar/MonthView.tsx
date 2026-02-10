'use client';

import { Event, EventType } from '@/lib/types/event';
import { format, parseISO, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, addMonths, subMonths, isSameMonth, isSameDay, isToday } from 'date-fns';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import clsx from 'clsx';

interface MonthViewProps {
    events: Event[];
    onEventClick: (event: Event) => void;
}

const eventTypeColors: Record<EventType, string> = {
    debate: 'bg-gold',
    town_hall: 'bg-blue-400',
    rally: 'bg-red-400',
    meet_greet: 'bg-purple-400',
    forum: 'bg-emerald-400',
    listening_session: 'bg-amber-400',
    candidate_appearance: 'bg-cyan-400',
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

export default function MonthView({ events, onEventClick }: MonthViewProps) {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState<Date | null>(null);

    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const calStart = startOfWeek(monthStart);
    const calEnd = endOfWeek(monthEnd);

    // Build array of days to render
    const days = useMemo(() => {
        const dayArray: Date[] = [];
        let day = calStart;
        while (day <= calEnd) {
            dayArray.push(day);
            day = addDays(day, 1);
        }
        return dayArray;
    }, [calStart, calEnd]);

    // Group events by date string
    const eventsByDate = useMemo(() => {
        const map: Record<string, Event[]> = {};
        events.forEach((event) => {
            if (!map[event.date]) map[event.date] = [];
            map[event.date].push(event);
        });
        return map;
    }, [events]);

    const goToPrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
    const goToNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    const goToToday = () => {
        setCurrentMonth(new Date());
        setSelectedDay(new Date());
    };

    const selectedDayEvents = useMemo(() => {
        if (!selectedDay) return [];
        const dateStr = format(selectedDay, 'yyyy-MM-dd');
        return eventsByDate[dateStr] || [];
    }, [selectedDay, eventsByDate]);

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className="space-y-4">
            {/* Month Navigation */}
            <div className="flex items-center justify-between">
                <button
                    onClick={goToPrevMonth}
                    className="btn-secondary !px-3 !py-2"
                    aria-label="Previous month"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-display font-bold text-white">
                        {format(currentMonth, 'MMMM yyyy')}
                    </h2>
                    <button
                        onClick={goToToday}
                        className="text-sm text-gold hover:text-gold-dark transition-colors"
                    >
                        Today
                    </button>
                </div>
                <button
                    onClick={goToNextMonth}
                    className="btn-secondary !px-3 !py-2"
                    aria-label="Next month"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Calendar Grid */}
            <div className="bg-navy border border-gold/30 rounded-xl overflow-hidden">
                {/* Weekday Headers */}
                <div className="grid grid-cols-7 bg-navy-dark/50">
                    {weekDays.map((day) => (
                        <div
                            key={day}
                            className="py-3 text-center text-sm font-semibold text-gold border-b border-gold/20"
                        >
                            {day}
                        </div>
                    ))}
                </div>

                {/* Day Cells */}
                <div className="grid grid-cols-7">
                    {days.map((day, i) => {
                        const dateStr = format(day, 'yyyy-MM-dd');
                        const dayEvents = eventsByDate[dateStr] || [];
                        const inMonth = isSameMonth(day, currentMonth);
                        const today = isToday(day);
                        const selected = selectedDay ? isSameDay(day, selectedDay) : false;

                        return (
                            <button
                                key={i}
                                onClick={() => setSelectedDay(day)}
                                className={clsx(
                                    'relative min-h-[80px] md:min-h-[100px] p-1.5 md:p-2 border-b border-r border-gold/10 text-left transition-all duration-200',
                                    'hover:bg-navy-dark/50 focus:outline-none focus:ring-1 focus:ring-gold/50 focus:ring-inset',
                                    !inMonth && 'opacity-30',
                                    selected && 'bg-gold/10 ring-1 ring-gold/40 ring-inset',
                                    today && !selected && 'bg-gold/5'
                                )}
                                aria-label={`${format(day, 'MMMM d, yyyy')}${dayEvents.length > 0 ? `, ${dayEvents.length} events` : ''}`}
                            >
                                <span
                                    className={clsx(
                                        'inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-medium',
                                        today && 'bg-gold text-navy font-bold',
                                        !today && inMonth && 'text-cream',
                                        !today && !inMonth && 'text-cream/40'
                                    )}
                                >
                                    {format(day, 'd')}
                                </span>

                                {/* Event Indicators */}
                                <div className="mt-1 space-y-0.5">
                                    {dayEvents.slice(0, 3).map((event) => (
                                        <div
                                            key={event.id}
                                            className={clsx(
                                                'text-[10px] md:text-xs text-white rounded px-1 py-0.5 truncate cursor-pointer',
                                                eventTypeColors[event.eventType]
                                            )}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onEventClick(event);
                                            }}
                                            title={event.title}
                                        >
                                            <span className="hidden md:inline">{event.title}</span>
                                            <span className="md:hidden">●</span>
                                        </div>
                                    ))}
                                    {dayEvents.length > 3 && (
                                        <div className="text-[10px] text-gold font-medium px-1">
                                            +{dayEvents.length - 3} more
                                        </div>
                                    )}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Selected Day Drawer */}
            <AnimatePresence>
                {selectedDay && selectedDayEvents.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-navy border border-gold/30 rounded-xl overflow-hidden"
                    >
                        <div className="p-4 border-b border-gold/20 flex items-center justify-between">
                            <h3 className="font-display text-lg font-semibold text-white">
                                <Calendar className="inline w-5 h-5 mr-2 text-gold" />
                                {format(selectedDay, 'EEEE, MMMM d, yyyy')}
                            </h3>
                            <span className="text-sm text-cream/70">
                                {selectedDayEvents.length} event{selectedDayEvents.length !== 1 ? 's' : ''}
                            </span>
                        </div>
                        <div className="divide-y divide-gold/10">
                            {selectedDayEvents.map((event) => (
                                <button
                                    key={event.id}
                                    onClick={() => onEventClick(event)}
                                    className="w-full text-left p-4 hover:bg-navy-dark/50 transition-colors flex items-center gap-4"
                                >
                                    <div
                                        className={clsx(
                                            'w-3 h-3 rounded-full flex-shrink-0',
                                            eventTypeColors[event.eventType]
                                        )}
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-white font-medium truncate">{event.title}</p>
                                        <p className="text-cream/60 text-sm">
                                            {event.startTime} – {event.endTime} CT · {event.venue.name}
                                        </p>
                                    </div>
                                    <span className="text-xs text-cream/50 hidden sm:block">
                                        {eventTypeLabels[event.eventType]}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Legend */}
            <div className="flex flex-wrap gap-3 text-xs text-cream/60">
                {Object.entries(eventTypeLabels).map(([key, label]) => (
                    <div key={key} className="flex items-center gap-1.5">
                        <div className={clsx('w-2.5 h-2.5 rounded-full', eventTypeColors[key as EventType])} />
                        {label}
                    </div>
                ))}
            </div>
        </div>
    );
}
