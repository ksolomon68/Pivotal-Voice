'use client';

import { useState, useMemo, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import EventCard from '@/components/calendar/EventCard';
import EventModal from '@/components/calendar/EventModal';
import EventFiltersComponent from '@/components/calendar/EventFilters';
import MonthView from '@/components/calendar/MonthView';
import WeekView from '@/components/calendar/WeekView';
import MapView from '@/components/calendar/MapView';
import CivicEventCard from '@/components/events/CivicEventCard';
import EventSubmitForm from '@/components/events/EventSubmitForm';
import { Event, EventFilters as EventFiltersType } from '@/lib/types/event';
import { getCivicEvents } from '@/lib/events/civic-events-service';
import { CivicEvent } from '@/lib/types/civic-events';
import sampleEvents from '@/data/sample-events.json';
import { Calendar, List, Map, LayoutGrid, Download, Code, AlertCircle, Clock, Zap, Plus, Landmark } from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { parseISO, isAfter, isBefore, startOfDay, endOfDay, addDays, format } from 'date-fns';
import { formatTime12h } from '@/lib/utils/ics';

type ViewMode = 'list' | 'month' | 'week' | 'map';

export default function CalendarPage() {
    const [viewMode, setViewMode] = useState<ViewMode>('list');
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [filters, setFilters] = useState<EventFiltersType>({ hidePastEvents: true });
    const [showSubmitForm, setShowSubmitForm] = useState(false);
    const [civicEvents, setCivicEvents] = useState<CivicEvent[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const events = await getCivicEvents();
            setCivicEvents(events.slice(0, 12));
        };
        fetchEvents();
    }, []);

    const events = sampleEvents.events as Event[];
    const metadata = sampleEvents.metadata;

    // Filter events
    const filteredEvents = useMemo(() => {
        return events.filter(event => {
            // Hide past events
            if (filters.hidePastEvents) {
                const eventDate = parseISO(event.date);
                if (isBefore(eventDate, startOfDay(new Date()))) {
                    return false;
                }
            }

            // Event type filter
            if (filters.eventType && filters.eventType.length > 0) {
                if (!filters.eventType.includes(event.eventType)) {
                    return false;
                }
            }

            // Office level filter
            if (filters.officeLevel && filters.officeLevel.length > 0) {
                if (!filters.officeLevel.includes(event.officeLevel)) {
                    return false;
                }
            }

            // Party filter
            if (filters.party && filters.party.length > 0) {
                const hasParty = event.candidates.some(candidate =>
                    filters.party!.includes(candidate.party)
                );
                if (!hasParty) {
                    return false;
                }
            }

            // City filter
            if (filters.city && filters.city.length > 0) {
                if (!filters.city.includes(event.venue.city)) {
                    return false;
                }
            }

            // Search query filter
            if (filters.searchQuery) {
                const query = filters.searchQuery.toLowerCase();
                const searchableText = `
                    ${event.title}
                    ${event.description}
                    ${event.office}
                    ${event.venue.name}
                    ${event.venue.city}
                    ${event.candidates.map(c => c.name).join(' ')}
                `.toLowerCase();

                if (!searchableText.includes(query)) {
                    return false;
                }
            }

            // Date range filter
            if (filters.dateRange) {
                const eventDate = parseISO(event.date);
                if (filters.dateRange.start) {
                    const rangeStart = parseISO(filters.dateRange.start);
                    if (isBefore(eventDate, startOfDay(rangeStart))) {
                        return false;
                    }
                }
                if (filters.dateRange.end) {
                    const rangeEnd = parseISO(filters.dateRange.end);
                    if (isAfter(eventDate, endOfDay(rangeEnd))) {
                        return false;
                    }
                }
            }

            return true;
        });
    }, [events, filters]);

    // Sort events by date
    const sortedEvents = useMemo(() => {
        return [...filteredEvents].sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
    }, [filteredEvents]);

    // Events happening this week (next 7 days)
    const thisWeekEvents = useMemo(() => {
        const today = startOfDay(new Date());
        const weekEnd = addDays(today, 7);
        return events.filter(e => {
            const d = parseISO(e.date);
            return isAfter(d, today) && isBefore(d, weekEnd);
        }).sort((a, b) => a.date.localeCompare(b.date));
    }, [events]);

    // Stats
    const upcomingCount = events.filter(e => isAfter(parseISO(e.date), new Date())).length;
    const debateCount = events.filter(e => e.eventType === 'debate').length;
    const verifiedCount = events.filter(e => e.verified).length;
    const multiCandidateCount = events.filter(e => e.candidates.length > 1).length;

    const viewModes: { value: ViewMode; label: string; icon: React.ReactNode }[] = [
        { value: 'list', label: 'List', icon: <List className="w-4 h-4" /> },
        { value: 'month', label: 'Month', icon: <Calendar className="w-4 h-4" /> },
        { value: 'week', label: 'Week', icon: <LayoutGrid className="w-4 h-4" /> },
        { value: 'map', label: 'Map', icon: <Map className="w-4 h-4" /> },
    ];

    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Page Header */}
                <section className="relative bg-gradient-to-b from-navy via-navy to-navy-dark border-b border-gold/15 py-16 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.06)_0%,_transparent_60%)]" />
                    <div className="container-custom relative z-10">
                        <div className="text-center max-w-3xl mx-auto">
                            <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                <Calendar className="w-8 h-8 text-gold" />
                            </div>
                            <h1 className="text-hero font-bold text-white mb-4">
                                Political Events Calendar
                            </h1>
                            <p className="text-lg text-cream/60">
                                Your comprehensive guide to all political debates and candidate events in Ellis County, Texas.
                                Stay informed, get involved, and never miss an opportunity to engage with local leadership.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Coming This Week Banner */}
                {thisWeekEvents.length > 0 && (
                    <section className="bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border-b border-gold/20">
                        <div className="container-custom py-4">
                            <div className="flex items-center gap-3 mb-3">
                                <Zap className="w-5 h-5 text-gold" />
                                <h2 className="font-display text-lg font-bold text-white">
                                    Coming This Week
                                </h2>
                                <span className="badge-red text-xs">{thisWeekEvents.length} event{thisWeekEvents.length !== 1 ? 's' : ''}</span>
                            </div>
                            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                                {thisWeekEvents.map((event) => (
                                    <button
                                        key={event.id}
                                        onClick={() => setSelectedEvent(event)}
                                        className="flex-shrink-0 bg-navy/50 border border-gold/30 rounded-lg p-3 hover:border-gold/60 transition-all min-w-[260px] text-left"
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <Clock className="w-3.5 h-3.5 text-gold" />
                                            <span className="text-cream/70 text-sm">
                                                {format(parseISO(event.date), 'EEE, MMM d')} · {formatTime12h(event.startTime)} CT
                                            </span>
                                        </div>
                                        <p className="text-white font-medium text-sm truncate">{event.title}</p>
                                        <p className="text-cream/50 text-xs truncate">{event.venue.name}, {event.venue.city}</p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Calendar Controls */}
                <section className="bg-navy-dark/50 border-b border-gold/20 py-8">
                    <div className="container-custom">
                        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-6">
                            {/* View Mode Toggle */}
                            <div className="flex gap-1 bg-navy rounded-lg p-1 border border-gold/20">
                                {viewModes.map((mode) => (
                                    <button
                                        key={mode.value}
                                        onClick={() => setViewMode(mode.value)}
                                        className={clsx(
                                            'flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200',
                                            viewMode === mode.value
                                                ? 'bg-gold text-navy shadow-sm'
                                                : 'text-cream/70 hover:text-white hover:bg-navy-dark/50'
                                        )}
                                        aria-label={`${mode.label} view`}
                                    >
                                        {mode.icon}
                                        <span className="hidden sm:inline">{mode.label}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Results Count + Actions */}
                            <div className="flex items-center gap-4 flex-wrap">
                                <div className="text-cream/70 text-sm">
                                    Showing <span className="text-gold font-semibold">{sortedEvents.length}</span> of {events.length} events
                                </div>
                                <div className="flex items-center gap-2">
                                    <a
                                        href="/api/events/ics"
                                        download
                                        className="text-xs text-cream/50 hover:text-gold flex items-center gap-1 transition-colors"
                                        title="Download all upcoming events as .ics file"
                                    >
                                        <Download className="w-3.5 h-3.5" />
                                        <span className="hidden sm:inline">Download .ics</span>
                                    </a>
                                    <span className="text-cream/20">·</span>
                                    <a
                                        href="/api/events"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-cream/50 hover:text-gold flex items-center gap-1 transition-colors"
                                        title="View JSON feed of events"
                                    >
                                        <Code className="w-3.5 h-3.5" />
                                        <span className="hidden sm:inline">JSON Feed</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Filters */}
                        <EventFiltersComponent filters={filters} onFilterChange={setFilters} />
                    </div>
                </section>

                {/* Calendar Content */}
                <section className="section">
                    <div className="container-custom">
                        {/* List View */}
                        {viewMode === 'list' && (
                            <>
                                {sortedEvents.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {sortedEvents.map((event, index) => (
                                            <motion.div
                                                key={event.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                            >
                                                <EventCard
                                                    event={event}
                                                    onClick={() => setSelectedEvent(event)}
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-16">
                                        <Calendar className="w-16 h-16 text-gold/50 mx-auto mb-4" />
                                        <h3 className="text-xl font-display font-semibold text-white mb-2">
                                            No events found
                                        </h3>
                                        <p className="text-cream/70 mb-6">
                                            Try adjusting your filters or search query to find more events.
                                        </p>
                                        <button
                                            onClick={() => setFilters({})}
                                            className="btn-primary"
                                        >
                                            Clear All Filters
                                        </button>
                                    </div>
                                )}
                            </>
                        )}

                        {/* Month View */}
                        {viewMode === 'month' && (
                            <MonthView
                                events={sortedEvents}
                                onEventClick={(event) => setSelectedEvent(event)}
                            />
                        )}

                        {/* Week View */}
                        {viewMode === 'week' && (
                            <WeekView
                                events={sortedEvents}
                                onEventClick={(event) => setSelectedEvent(event)}
                            />
                        )}

                        {/* Map View */}
                        {viewMode === 'map' && (
                            <MapView
                                events={sortedEvents}
                                onEventClick={(event) => setSelectedEvent(event)}
                            />
                        )}
                    </div>
                </section>

                {/* Civic Meetings Section */}
                {civicEvents.length > 0 && (
                    <section className="section bg-navy-dark/30">
                        <div className="container-custom">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
                                <div className="flex items-center gap-3">
                                    <Landmark className="w-6 h-6 text-gold" />
                                    <h2 className="text-section font-bold text-white">Civic Meetings</h2>
                                </div>
                                <span className="text-xs text-cream/40">City councils, school boards & more</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {civicEvents.map((event, index) => (
                                    <motion.div
                                        key={event.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.04 }}
                                    >
                                        <CivicEventCard event={event} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Info Section */}
                <section className="bg-navy py-16">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-section font-bold text-white mb-4">
                                Have an event to submit?
                            </h2>
                            <p className="text-cream/80 mb-6">
                                Know of an upcoming political event in Ellis County? Help us keep the community informed
                                by submitting event details for verification.
                            </p>
                            <button onClick={() => setShowSubmitForm(true)} className="btn-primary flex items-center gap-2 mx-auto">
                                <Plus className="w-4 h-4" /> Submit Event
                            </button>
                        </div>

                        {/* Key Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                            <div className="text-center">
                                <div className="text-4xl font-display font-bold text-gold mb-2">
                                    {upcomingCount}
                                </div>
                                <div className="text-cream/70 text-sm">Upcoming Events</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-display font-bold text-gold mb-2">
                                    {debateCount}
                                </div>
                                <div className="text-cream/70 text-sm">Scheduled Debates</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-display font-bold text-gold mb-2">
                                    {multiCandidateCount}
                                </div>
                                <div className="text-cream/70 text-sm">Multi-Candidate Events</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-display font-bold text-gold mb-2">
                                    {verifiedCount}
                                </div>
                                <div className="text-cream/70 text-sm">Verified Events</div>
                            </div>
                        </div>

                        {/* Last Updated + Data Sources */}
                        <div className="mt-12 text-center">
                            <p className="text-cream/40 text-xs">
                                Last updated: {metadata.lastUpdated ? format(new Date(metadata.lastUpdated), 'MMMM d, yyyy \'at\' h:mm a') : 'Unknown'} · Data sourced from candidate campaign websites, political party pages, local government announcements, and civic organizations
                            </p>
                        </div>
                    </div>
                </section>

                {/* Non-Partisan Disclaimer */}
                <section className="border-t border-gold/20 bg-navy-dark/80">
                    <div className="container-custom py-6">
                        <div className="flex items-start gap-3 max-w-3xl mx-auto">
                            <AlertCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm text-cream/70 leading-relaxed">
                                    <strong className="text-cream">Non-Partisan Notice:</strong> {metadata.disclaimer}
                                </p>
                                <p className="text-xs text-cream/40 mt-2">
                                    Event data is aggregated from publicly available sources and verified where possible. If you believe any event information is inaccurate, please contact us.
                                    Events are presented in chronological order with no preferential placement.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            {/* Event Detail Modal */}
            <EventModal
                event={selectedEvent}
                isOpen={!!selectedEvent}
                onClose={() => setSelectedEvent(null)}
            />

            {/* Submit Event Modal */}
            <AnimatePresence>
                {showSubmitForm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowSubmitForm(false)}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-lg bg-navy-dark border border-gold/30 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
                        >
                            <EventSubmitForm
                                userId="guest"
                                onClose={() => setShowSubmitForm(false)}
                                onSubmitted={async () => {
                                    const events = await getCivicEvents();
                                    setCivicEvents(events.slice(0, 12));
                                }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
