'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Calendar, Clock, MapPin, FileText, Users, ExternalLink,
    Video, ChevronDown, ChevronUp, Plus, CalendarPlus, MessageSquare
} from 'lucide-react';
import { CivicEvent, EVENT_TYPE_LABELS, EVENT_TYPE_COLORS } from '@/lib/types/civic-events';
import { toggleRSVP, downloadICS, getGoogleCalendarUrl, getOutlookCalendarUrl } from '@/lib/events/civic-events-service';

interface CivicEventCardProps {
    event: CivicEvent;
    userId?: string;
    onRSVPChange?: () => void;
    compact?: boolean;
}

export default function CivicEventCard({ event, userId, onRSVPChange, compact = false }: CivicEventCardProps) {
    const [expanded, setExpanded] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [isRSVPed, setIsRSVPed] = useState(userId ? event.rsvpUsers.includes(userId) : false);

    const eventDate = new Date(event.date + 'T' + event.startTime);
    const isToday = event.date === new Date().toISOString().split('T')[0];
    const now = new Date();
    const endOfWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    const isThisWeek = eventDate >= now && eventDate <= endOfWeek;

    const handleRSVP = async () => {
        if (!userId) return;
        const result = await toggleRSVP(event.id, userId);
        setIsRSVPed(result);
        onRSVPChange?.();
    };

    const formatTime = (time: string) => {
        const [h, m] = time.split(':').map(Number);
        const ampm = h >= 12 ? 'PM' : 'AM';
        return `${h % 12 || 12}:${m.toString().padStart(2, '0')} ${ampm}`;
    };

    const formatDate = (dateStr: string) => {
        return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    };

    if (compact) {
        return (
            <div className="flex gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <div className="text-center min-w-[48px]">
                    <div className="text-xs text-gold font-semibold uppercase">
                        {new Date(event.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                    <div className="text-lg font-bold text-white">
                        {new Date(event.date + 'T12:00:00').getDate()}
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm text-white font-medium truncate">{event.title}</p>
                    <p className="text-xs text-white/50 flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3" /> {formatTime(event.startTime)}
                        <span className="mx-1">•</span>
                        <MapPin className="w-3 h-3" /> {event.location.city}
                    </p>
                </div>
                {isToday && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-red-500/20 text-red-400 font-semibold h-fit">TODAY</span>}
                {!isToday && isThisWeek && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-semibold h-fit">THIS WEEK</span>}
            </div>
        );
    }

    return (
        <motion.div
            layout
            className={`rounded-xl border transition-colors ${isToday ? 'border-red-500/40 bg-red-500/5' : 'border-white/10 bg-white/5 hover:border-white/20'
                }`}
        >
            <div className="p-4">
                {/* Header */}
                <div className="flex items-start gap-3">
                    {/* Date badge */}
                    <div className="text-center min-w-[56px] p-2 rounded-lg bg-white/5 border border-white/10">
                        <div className="text-xs text-gold font-semibold uppercase">
                            {new Date(event.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                        <div className="text-xl font-bold text-white">
                            {new Date(event.date + 'T12:00:00').getDate()}
                        </div>
                        <div className="text-[10px] text-white/40">
                            {new Date(event.date + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'short' })}
                        </div>
                    </div>

                    <div className="flex-1 min-w-0">
                        {/* Badges */}
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                            <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${EVENT_TYPE_COLORS[event.eventType]}`}>
                                {EVENT_TYPE_LABELS[event.eventType]}
                            </span>
                            {isToday && <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 font-semibold border border-red-500/30">🔴 TODAY</span>}
                            {!isToday && isThisWeek && <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-semibold border border-amber-500/30">THIS WEEK</span>}
                            {event.isFeatured && <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold/20 text-gold font-semibold border border-gold/30">⭐ FEATURED</span>}
                        </div>

                        <h3 className="text-sm font-semibold text-white leading-tight">{event.title}</h3>

                        {event.governingBody && (
                            <p className="text-xs text-white/40 mt-0.5">{event.governingBody}</p>
                        )}

                        {/* Time + Location */}
                        <div className="flex items-center gap-3 mt-2 text-xs text-white/60">
                            <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {formatTime(event.startTime)}
                                {event.endTime && ` – ${formatTime(event.endTime)}`}
                            </span>
                            <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {event.location.name}, {event.location.city}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Action bar */}
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/5">
                    {userId && (
                        <button
                            onClick={handleRSVP}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${isRSVPed
                                ? 'bg-gold/20 text-gold border border-gold/30'
                                : 'bg-white/5 text-white/60 border border-white/10 hover:border-white/20'
                                }`}
                        >
                            <Users className="w-3 h-3" />
                            {isRSVPed ? 'Attending' : "I'm Attending"}
                            <span className="text-white/40 ml-1">({event.rsvpCount})</span>
                        </button>
                    )}

                    <button
                        onClick={() => setShowCalendar(!showCalendar)}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs text-white/60 bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                    >
                        <CalendarPlus className="w-3 h-3" />
                        Add to Calendar
                    </button>

                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs text-white/60 bg-white/5 border border-white/10 hover:border-white/20 transition-colors ml-auto"
                    >
                        {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        {expanded ? 'Less' : 'Details'}
                    </button>
                </div>

                {/* Calendar dropdown */}
                {showCalendar && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-2 flex gap-2"
                    >
                        <a
                            href={getGoogleCalendarUrl(event)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs text-white/70 bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                        >
                            Google Calendar
                        </a>
                        <a
                            href={getOutlookCalendarUrl(event)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs text-white/70 bg-blue-600/10 border border-blue-600/20 hover:bg-blue-600/20 transition-colors"
                        >
                            Outlook
                        </a>
                        <button
                            onClick={() => downloadICS(event)}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs text-white/70 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            Download .ics
                        </button>
                    </motion.div>
                )}

                {/* Expanded details */}
                {expanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-3 pt-3 border-t border-white/5 space-y-3"
                    >
                        <p className="text-xs text-white/60 leading-relaxed">{event.description}</p>

                        {event.participationInstructions && (
                            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                                <p className="text-xs font-semibold text-green-400 mb-1">How to Participate</p>
                                <p className="text-xs text-white/60">{event.participationInstructions}</p>
                            </div>
                        )}

                        {event.publicCommentDeadline && (
                            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                                <p className="text-xs text-amber-400">
                                    ⏰ Public comment deadline: {new Date(event.publicCommentDeadline).toLocaleString()}
                                </p>
                            </div>
                        )}

                        <div className="flex flex-wrap gap-2">
                            {event.location.mapUrl && (
                                <a href={event.location.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-2 py-1 rounded text-[10px] text-white/50 bg-white/5 hover:bg-white/10 transition-colors">
                                    <MapPin className="w-3 h-3" /> View Map
                                </a>
                            )}
                            {event.agendaUrl && (
                                <a href={event.agendaUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-2 py-1 rounded text-[10px] text-white/50 bg-white/5 hover:bg-white/10 transition-colors">
                                    <FileText className="w-3 h-3" /> Agenda
                                </a>
                            )}
                            {event.minutesUrl && (
                                <a href={event.minutesUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-2 py-1 rounded text-[10px] text-white/50 bg-white/5 hover:bg-white/10 transition-colors">
                                    <FileText className="w-3 h-3" /> Past Minutes
                                </a>
                            )}
                            {event.zoomUrl && (
                                <a href={event.zoomUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-2 py-1 rounded text-[10px] text-white/50 bg-white/5 hover:bg-white/10 transition-colors">
                                    <Video className="w-3 h-3" /> Join Zoom
                                </a>
                            )}
                            {event.forumTopicId && (
                                <a href={`/forum/topic/${event.forumTopicId}`} className="flex items-center gap-1 px-2 py-1 rounded text-[10px] text-gold/70 bg-gold/10 hover:bg-gold/20 transition-colors">
                                    <MessageSquare className="w-3 h-3" /> Discussion
                                </a>
                            )}
                        </div>

                        {event.isRecurring && (
                            <p className="text-[10px] text-white/30">
                                🔄 Recurring: {event.recurringSchedule}
                            </p>
                        )}

                        {event.sourceUrl && (
                            <p className="text-[10px] text-white/30 flex items-center gap-1">
                                Source: <a href={event.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white/60 underline">{event.sourceName || event.sourceUrl}</a>
                                <span className="mx-1">•</span>
                                Last verified: {new Date(event.lastVerified).toLocaleDateString()}
                            </p>
                        )}
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}
