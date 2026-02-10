'use client';

import { Event, EventType, OfficeLevel } from '@/lib/types/event';
import { format, parseISO, isAfter } from 'date-fns';
import { Calendar as CalendarIcon, MapPin, Clock, Users, ExternalLink, Share2, Bell, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { formatTime12h, generateICSEvent, downloadICS } from '@/lib/utils/ics';

interface EventModalProps {
    event: Event | null;
    isOpen: boolean;
    onClose: () => void;
}

const eventTypeLabels: Record<EventType, string> = {
    debate: 'Multi-Candidate Debate',
    town_hall: 'Town Hall',
    rally: 'Campaign Rally',
    meet_greet: 'Meet & Greet',
    forum: 'Public Forum',
    listening_session: 'Listening Session',
    candidate_appearance: 'Candidate Appearance',
};

const officeLevelLabels: Record<OfficeLevel, string> = {
    local: 'Local',
    county: 'County',
    state: 'State',
    federal: 'Federal',
};

const partyColors: Record<string, string> = {
    Republican: 'text-red-400',
    Democrat: 'text-blue-400',
    Independent: 'text-purple-400',
    'Non-Partisan': 'text-cream',
};

export default function EventModal({ event, isOpen, onClose }: EventModalProps) {
    if (!event) return null;

    const eventDate = parseISO(event.date);
    const isUpcoming = isAfter(eventDate, new Date());
    const daysUntil = Math.ceil((eventDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

    const handleAddToCalendar = (type: 'google' | 'apple' | 'outlook') => {
        const startDateTime = `${event.date}T${event.startTime}:00`;
        const endDateTime = `${event.date}T${event.endTime}:00`;

        if (type === 'google') {
            const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDateTime.replace(/[-:]/g, '')}/${endDateTime.replace(/[-:]/g, '')}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(`${event.venue.name}, ${event.venue.address}, ${event.venue.city}, ${event.venue.state} ${event.venue.zip}`)}`;
            window.open(url, '_blank');
        } else {
            // Apple & Outlook — download .ics file
            const icsContent = generateICSEvent(event);
            const filename = `${event.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}.ics`;
            downloadICS(icsContent, filename);
        }
    };

    const handleShare = (platform: 'twitter' | 'facebook' | 'email') => {
        const url = window.location.href;
        const text = `${event.title} — ${format(eventDate, 'MMMM d, yyyy')} at ${formatTime12h(event.startTime)} CT`;

        if (platform === 'twitter') {
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        } else if (platform === 'facebook') {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        } else if (platform === 'email') {
            window.location.href = `mailto:?subject=${encodeURIComponent(event.title)}&body=${encodeURIComponent(text + '\n\n' + url)}`;
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-3xl md:max-h-[90vh] bg-navy border-2 border-gold/30 rounded-2xl shadow-2xl z-50 overflow-auto"
                    >
                        <div className="p-6 md:p-8">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex-1">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {isUpcoming && daysUntil <= 7 && (
                                            <span className="badge-red">
                                                {daysUntil === 0 ? 'Today' : daysUntil === 1 ? 'Tomorrow' : `In ${daysUntil} days`}
                                            </span>
                                        )}
                                        <span className={clsx(
                                            'badge',
                                            event.eventType === 'debate' && 'badge-gold',
                                            event.eventType === 'town_hall' && 'badge-blue',
                                            event.eventType === 'forum' && 'badge-green',
                                            event.eventType === 'rally' && 'badge-red',
                                        )}>
                                            {eventTypeLabels[event.eventType]}
                                        </span>
                                        <span className="badge bg-navy-dark/50 text-cream/70 border border-gold/20">
                                            {officeLevelLabels[event.officeLevel]}
                                        </span>
                                        {event.verified && (
                                            <span className="badge-green">✓ Verified</span>
                                        )}
                                        {event.liveStreamUrl && (
                                            <span className="badge-purple">Live Stream Available</span>
                                        )}
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                                        {event.title}
                                    </h2>
                                    <p className="text-gold text-sm">{event.office}</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="text-cream hover:text-white text-2xl ml-4 w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
                                    aria-label="Close modal"
                                >
                                    ×
                                </button>
                            </div>

                            {/* Date, Time, Location */}
                            <div className="space-y-3 mb-6 bg-navy-dark/50 rounded-lg p-4">
                                <div className="flex items-start gap-3">
                                    <CalendarIcon className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-white font-medium">
                                            {format(eventDate, 'EEEE, MMMM d, yyyy')}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-white">
                                            {formatTime12h(event.startTime)} – {formatTime12h(event.endTime)} Central Time
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-white font-medium">{event.venue.name}</p>
                                        <p className="text-cream/70 text-sm">
                                            {event.venue.address}<br />
                                            {event.venue.city}, {event.venue.state} {event.venue.zip}
                                        </p>
                                        {event.venue.accessible && (
                                            <p className="text-alert-green text-sm mt-1">♿ Wheelchair Accessible</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-6">
                                <h3 className="font-display text-lg font-semibold text-white mb-2">
                                    About This Event
                                </h3>
                                <p className="text-cream/80 leading-relaxed">
                                    {event.description}
                                </p>
                            </div>

                            {/* Candidates */}
                            {event.candidates.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="font-display text-lg font-semibold text-white mb-3">
                                        <Users className="inline w-5 h-5 mr-2 text-gold" />
                                        Participating Candidates
                                    </h3>
                                    <div className="space-y-2">
                                        {event.candidates.map((candidate, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between bg-navy-dark/50 rounded-lg p-3"
                                            >
                                                <div>
                                                    <p className="text-white font-medium">
                                                        {candidate.name}
                                                        {candidate.incumbent && (
                                                            <span className="ml-2 text-xs text-gold">(Incumbent)</span>
                                                        )}
                                                    </p>
                                                </div>
                                                <span className={clsx('text-sm font-medium', partyColors[candidate.party])}>
                                                    {candidate.party}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="space-y-4 pt-6 border-t border-gold/20">
                                {/* Add to Calendar */}
                                <div>
                                    <p className="text-sm text-cream/70 mb-2">Add to Calendar:</p>
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            onClick={() => handleAddToCalendar('google')}
                                            className="btn-secondary text-sm"
                                        >
                                            <CalendarIcon className="w-4 h-4 inline mr-1" />
                                            Google Calendar
                                        </button>
                                        <button
                                            onClick={() => handleAddToCalendar('apple')}
                                            className="btn-secondary text-sm"
                                        >
                                            <Download className="w-4 h-4 inline mr-1" />
                                            Apple Calendar (.ics)
                                        </button>
                                        <button
                                            onClick={() => handleAddToCalendar('outlook')}
                                            className="btn-secondary text-sm"
                                        >
                                            <Download className="w-4 h-4 inline mr-1" />
                                            Outlook (.ics)
                                        </button>
                                    </div>
                                </div>

                                {/* Quick Actions */}
                                <div className="flex flex-wrap gap-2">
                                    {event.venue.coordinates && (
                                        <a
                                            href={`https://www.google.com/maps?q=${event.venue.coordinates.lat},${event.venue.coordinates.lng}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary text-sm"
                                        >
                                            <MapPin className="w-4 h-4 inline mr-1" />
                                            Get Directions
                                        </a>
                                    )}
                                    {event.registrationUrl && (
                                        <a
                                            href={event.registrationUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary text-sm"
                                        >
                                            <ExternalLink className="w-4 h-4 inline mr-1" />
                                            Register/RSVP
                                        </a>
                                    )}
                                    {event.liveStreamUrl && (
                                        <a
                                            href={event.liveStreamUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary text-sm"
                                        >
                                            <ExternalLink className="w-4 h-4 inline mr-1" />
                                            Watch Live
                                        </a>
                                    )}
                                    <button className="btn-secondary text-sm">
                                        <Bell className="w-4 h-4 inline mr-1" />
                                        Notify Me
                                    </button>
                                </div>

                                {/* Share */}
                                <div>
                                    <p className="text-sm text-cream/70 mb-2">Share This Event:</p>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleShare('twitter')}
                                            className="btn-secondary text-sm"
                                        >
                                            Twitter
                                        </button>
                                        <button
                                            onClick={() => handleShare('facebook')}
                                            className="btn-secondary text-sm"
                                        >
                                            Facebook
                                        </button>
                                        <button
                                            onClick={() => handleShare('email')}
                                            className="btn-secondary text-sm"
                                        >
                                            Email
                                        </button>
                                    </div>
                                </div>

                                {/* Source */}
                                {event.sourceUrl && (
                                    <div className="text-sm">
                                        <a
                                            href={event.sourceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link text-xs"
                                        >
                                            View Official Source →
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
