'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CivicEventCard from '@/components/events/CivicEventCard';
import EventSubmitForm from '@/components/events/EventSubmitForm';
import { CivicEvent, CivicEventType, EVENT_TYPE_LABELS, EVENT_TYPE_COLORS } from '@/lib/types/civic-events';
import {
    Calendar, List, Search, X, Filter, Star, Clock, Zap, Plus, Vote,
    Landmark, Users, ChevronDown, AlertCircle, RefreshCw, MapPin
} from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { formatTime12h } from '@/lib/utils/ics';
import { format, parseISO, isAfter, isBefore, startOfDay, endOfDay, addDays } from 'date-fns';

// ─── Category order & icons ────────────────────────────────────────────────────
const CATEGORY_ORDER: { type: CivicEventType | '__all__'; label: string; emoji: string }[] = [
    { type: '__all__', label: 'All Events', emoji: '📋' },
    { type: 'election_date', label: 'Elections', emoji: '🗳️' },
    { type: 'debate', label: 'Debates', emoji: '⚖️' },
    { type: 'candidate_forum', label: 'Candidate Forums', emoji: '🎤' },
    { type: 'town_hall', label: 'Town Halls', emoji: '🏛️' },
    { type: 'city_council', label: 'City Council', emoji: '🏙️' },
    { type: 'commissioners_court', label: 'Commissioners Court', emoji: '⚖️' },
    { type: 'school_board', label: 'School Board', emoji: '🎓' },
    { type: 'planning_zoning', label: 'Planning & Zoning', emoji: '🏗️' },
    { type: 'economic_dev', label: 'Economic Dev', emoji: '💼' },
    { type: 'voter_registration', label: 'Voter Registration', emoji: '📝' },
    { type: 'party_meeting', label: 'Party Meetings', emoji: '🐘🐴' },
    { type: 'meet_greet', label: 'Meet & Greets', emoji: '🤝' },
    { type: 'community_event', label: 'Community', emoji: '🎉' },
];

const CITIES = ['All Cities', 'Waxahachie', 'Midlothian', 'Red Oak', 'Ennis', 'Ferris', 'Palmer', 'Italy', 'Ovilla'];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CalendarPage() {
    const [events, setEvents] = useState<CivicEvent[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isFallback, setIsFallback] = useState(false);

    // filters
    const [activeCategory, setActiveCategory] = useState<CivicEventType | '__all__'>('__all__');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCity, setSelectedCity] = useState('All Cities');
    const [hideUpcoming, setHideUpcoming] = useState(false); // show upcoming by default
    const [showSubmitForm, setShowSubmitForm] = useState(false);

    const disclaimer =
        'Pivotal Voice does not endorse any candidate or party. Event information is sourced from publicly available records.';

    // ─── Fetch ──────────────────────────────────────────────────────────────────
    const fetchEvents = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch('/api/civic-events');
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const json = await res.json();
            setEvents(json.events || []);
            setIsFallback(json.fallback || false);
        } catch (err) {
            setError('Unable to load live events. Showing cached data.');
            // last-resort: import static fallback
            const { SEED_CIVIC_EVENTS } = await import('@/lib/events/civic-events-data');
            setEvents(SEED_CIVIC_EVENTS);
            setIsFallback(true);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => { fetchEvents(); }, [fetchEvents]);

    // ─── Derived data ─────────────────────────────────────────────────────────
    const today = startOfDay(new Date());

    const filteredEvents = useMemo(() => {
        return events.filter((e) => {
            const eventDate = parseISO(e.date);

            // upcoming only (default)
            if (!hideUpcoming && isBefore(eventDate, today)) return false;

            // category
            if (activeCategory !== '__all__' && e.eventType !== activeCategory) return false;

            // city
            if (selectedCity !== 'All Cities' && e.location.city !== selectedCity) return false;

            // search
            if (searchQuery.trim()) {
                const q = searchQuery.toLowerCase();
                const haystack = [
                    e.title, e.description, e.governingBody || '',
                    e.location.name, e.location.city,
                    ...(e.tags || []),
                ].join(' ').toLowerCase();
                if (!haystack.includes(q)) return false;
            }

            return true;
        });
    }, [events, activeCategory, searchQuery, selectedCity, hideUpcoming, today]);

    const featuredEvents = useMemo(
        () => filteredEvents.filter((e) => e.isFeatured && isAfter(parseISO(e.date), today)),
        [filteredEvents, today]
    );

    const thisWeekEvents = useMemo(() => {
        const weekEnd = addDays(today, 7);
        return events.filter((e) => {
            const d = parseISO(e.date);
            return isAfter(d, today) && isBefore(d, weekEnd);
        });
    }, [events, today]);

    // per-category counts for filter pills
    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = { __all__: 0 };
        const upcoming = events.filter((e) => isAfter(parseISO(e.date), today));
        counts.__all__ = upcoming.length;
        for (const e of upcoming) {
            counts[e.eventType] = (counts[e.eventType] || 0) + 1;
        }
        return counts;
    }, [events, today]);

    // stats
    const electionCount = events.filter((e) => e.eventType === 'election_date' && isAfter(parseISO(e.date), today)).length;
    const debateCount = events.filter((e) => (e.eventType === 'debate' || e.eventType === 'candidate_forum') && isAfter(parseISO(e.date), today)).length;
    const councilCount = events.filter((e) => e.eventType === 'city_council' && isAfter(parseISO(e.date), today)).length;
    const upcomingCount = events.filter((e) => isAfter(parseISO(e.date), today)).length;

    // ─── Render ───────────────────────────────────────────────────────────────
    return (
        <>
            <Header />
            <main className="min-h-screen">

                {/* ── Hero ── */}
                <section className="relative bg-gradient-to-b from-navy via-navy to-navy-dark border-b border-gold/15 py-16 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.08)_0%,_transparent_65%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.04)_0%,_transparent_60%)]" />
                    <div className="container-custom relative z-10">
                        <div className="text-center max-w-3xl mx-auto">
                            <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                <Calendar className="w-8 h-8 text-gold" />
                            </div>
                            <h1 className="text-hero font-bold text-white mb-4">
                                Civic Events Calendar
                            </h1>
                            <p className="text-lg text-cream/60 max-w-2xl mx-auto">
                                Every town hall, election date, debate, city council meeting, school board session, and community event in Ellis County — all in one place.
                            </p>
                        </div>

                        {/* Live stats */}
                        {!loading && (
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 max-w-2xl mx-auto">
                                {[
                                    { icon: <Vote className="w-4 h-4" />, value: electionCount, label: 'Upcoming Elections' },
                                    { icon: <AlertCircle className="w-4 h-4" />, value: debateCount, label: 'Debates & Forums' },
                                    { icon: <Landmark className="w-4 h-4" />, value: councilCount, label: 'Council Meetings' },
                                    { icon: <Calendar className="w-4 h-4" />, value: upcomingCount, label: 'Total Upcoming' },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                                        <div className="text-gold mb-1 flex justify-center">{stat.icon}</div>
                                        <div className="text-2xl font-bold text-white font-display">{stat.value}</div>
                                        <div className="text-xs text-cream/50 mt-0.5">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* ── Coming This Week banner ── */}
                {thisWeekEvents.length > 0 && (
                    <section className="bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border-b border-gold/20">
                        <div className="container-custom py-4">
                            <div className="flex items-center gap-3 mb-3">
                                <Zap className="w-5 h-5 text-gold flex-shrink-0" />
                                <h2 className="font-display text-base font-bold text-white">This Week</h2>
                                <span className="bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-red-500/30">
                                    {thisWeekEvents.length} EVENT{thisWeekEvents.length !== 1 ? 'S' : ''}
                                </span>
                            </div>
                            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                                {thisWeekEvents.slice(0, 8).map((event) => (
                                    <div
                                        key={event.id}
                                        className="flex-shrink-0 bg-navy/60 border border-gold/20 rounded-lg p-3 min-w-[220px]"
                                    >
                                        <div className="flex items-center gap-1.5 mb-1">
                                            <Clock className="w-3 h-3 text-gold" />
                                            <span className="text-cream/60 text-xs">
                                                {format(parseISO(event.date), 'EEE, MMM d')} · {formatTime12h(event.startTime)} CT
                                            </span>
                                        </div>
                                        <p className="text-white text-xs font-semibold truncate">{event.title}</p>
                                        <p className="text-cream/40 text-[10px] flex items-center gap-1 mt-0.5 truncate">
                                            <MapPin className="w-2.5 h-2.5" /> {event.location.city}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ── Featured Events ── */}
                {featuredEvents.length > 0 && (
                    <section className="bg-navy-dark/40 border-b border-gold/10 py-8">
                        <div className="container-custom">
                            <div className="flex items-center gap-2 mb-5">
                                <Star className="w-5 h-5 text-gold" />
                                <h2 className="text-white font-display font-bold text-lg">Featured Events</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {featuredEvents.slice(0, 3).map((event, index) => (
                                    <motion.div
                                        key={event.id}
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.35, delay: index * 0.05 }}
                                    >
                                        <CivicEventCard event={event} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ── Filters + Events feed ── */}
                <section className="section">
                    <div className="container-custom">

                        {/* Search + city + toggle row */}
                        <div className="flex flex-col sm:flex-row gap-3 mb-5">
                            {/* Search */}
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
                                <input
                                    type="text"
                                    placeholder="Search events, locations, topics…"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-navy border border-white/10 rounded-lg pl-9 pr-8 py-2.5 text-sm text-white placeholder-cream/40 focus:outline-none focus:border-gold/40 transition-colors"
                                />
                                {searchQuery && (
                                    <button onClick={() => setSearchQuery('')} className="absolute right-2.5 top-1/2 -translate-y-1/2">
                                        <X className="w-3.5 h-3.5 text-cream/40 hover:text-cream/70 transition-colors" />
                                    </button>
                                )}
                            </div>

                            {/* City filter */}
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40 pointer-events-none" />
                                <select
                                    value={selectedCity}
                                    onChange={(e) => setSelectedCity(e.target.value)}
                                    className="bg-navy border border-white/10 rounded-lg pl-9 pr-8 py-2.5 text-sm text-white focus:outline-none focus:border-gold/40 transition-colors appearance-none cursor-pointer"
                                >
                                    {CITIES.map((c) => <option key={c}>{c}</option>)}
                                </select>
                                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-cream/40 pointer-events-none" />
                            </div>

                            {/* Upcoming toggle */}
                            <button
                                onClick={() => setHideUpcoming(!hideUpcoming)}
                                className={clsx(
                                    'flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border transition-all whitespace-nowrap',
                                    hideUpcoming
                                        ? 'bg-white/5 border-white/10 text-cream/60 hover:border-white/20'
                                        : 'bg-gold/10 border-gold/30 text-gold'
                                )}
                            >
                                <Clock className="w-4 h-4" />
                                {hideUpcoming ? 'Show All Dates' : 'Upcoming Only'}
                            </button>

                            {/* Refresh */}
                            <button
                                onClick={fetchEvents}
                                disabled={loading}
                                className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-sm text-cream/50 border border-white/10 hover:border-white/20 transition-colors"
                                title="Refresh events"
                            >
                                <RefreshCw className={clsx('w-4 h-4', loading && 'animate-spin')} />
                            </button>
                        </div>

                        {/* Category filter pills — horizontally scrollable */}
                        <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-hide">
                            {CATEGORY_ORDER.map((cat) => {
                                const count = categoryCounts[cat.type] || 0;
                                if (cat.type !== '__all__' && count === 0) return null;
                                const isActive = activeCategory === cat.type;
                                return (
                                    <button
                                        key={cat.type}
                                        onClick={() => setActiveCategory(cat.type)}
                                        className={clsx(
                                            'flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200',
                                            isActive
                                                ? 'bg-gold text-navy border-gold shadow-[0_0_12px_rgba(212,175,55,0.3)]'
                                                : 'bg-white/5 text-cream/70 border-white/10 hover:border-white/25 hover:text-white'
                                        )}
                                    >
                                        <span>{cat.emoji}</span>
                                        <span>{cat.label}</span>
                                        <span className={clsx(
                                            'text-[10px] px-1.5 py-0.5 rounded-full font-bold',
                                            isActive ? 'bg-navy/30 text-navy' : 'bg-white/10 text-cream/50'
                                        )}>
                                            {count}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Results bar */}
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-cream/50 text-sm">
                                Showing <span className="text-gold font-semibold">{filteredEvents.length}</span> event{filteredEvents.length !== 1 ? 's' : ''}
                                {activeCategory !== '__all__' && (
                                    <span className="ml-1">in <span className="text-white">{CATEGORY_ORDER.find(c => c.type === activeCategory)?.label}</span></span>
                                )}
                                {selectedCity !== 'All Cities' && (
                                    <span className="ml-1">· <span className="text-white">{selectedCity}</span></span>
                                )}
                            </p>
                            {(activeCategory !== '__all__' || searchQuery || selectedCity !== 'All Cities') && (
                                <button
                                    onClick={() => { setActiveCategory('__all__'); setSearchQuery(''); setSelectedCity('All Cities'); }}
                                    className="text-xs text-cream/40 hover:text-cream/70 flex items-center gap-1 transition-colors"
                                >
                                    <X className="w-3 h-3" /> Clear filters
                                </button>
                            )}
                        </div>

                        {/* Fallback notice */}
                        {isFallback && (
                            <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-2.5 mb-5 text-sm text-amber-400">
                                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                <span>Showing locally-cached event data. Live sync will resume shortly.</span>
                            </div>
                        )}

                        {/* Loading skeleton */}
                        {loading && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {Array.from({ length: 9 }).map((_, i) => (
                                    <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4 animate-pulse">
                                        <div className="flex gap-3">
                                            <div className="w-14 h-14 rounded-lg bg-white/10" />
                                            <div className="flex-1 space-y-2">
                                                <div className="h-2.5 bg-white/10 rounded w-1/3" />
                                                <div className="h-3.5 bg-white/10 rounded w-3/4" />
                                                <div className="h-2.5 bg-white/10 rounded w-1/2" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Events grid — grouped by category if showing all */}
                        {!loading && filteredEvents.length > 0 && (
                            <div className="space-y-10">
                                {activeCategory === '__all__' ? (
                                    // Group by eventType
                                    CATEGORY_ORDER.slice(1).map((cat) => {
                                        const catEvents = filteredEvents.filter((e) => e.eventType === cat.type);
                                        if (catEvents.length === 0) return null;
                                        return (
                                            <div key={cat.type}>
                                                <div className="flex items-center gap-2 mb-4">
                                                    <span className="text-xl">{cat.emoji}</span>
                                                    <h2 className="text-white font-display font-bold text-base">{cat.label}</h2>
                                                    <span className="text-xs text-cream/40 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                                                        {catEvents.length}
                                                    </span>
                                                    <div className="flex-1 h-px bg-white/10" />
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                    {catEvents.map((event, idx) => (
                                                        <motion.div
                                                            key={event.id}
                                                            initial={{ opacity: 0, y: 12 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.3, delay: idx * 0.03 }}
                                                        >
                                                            <CivicEventCard event={event} />
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    // Single flat grid for a specific category
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {filteredEvents.map((event, idx) => (
                                            <motion.div
                                                key={event.id}
                                                initial={{ opacity: 0, y: 12 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: idx * 0.03 }}
                                            >
                                                <CivicEventCard event={event} />
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Empty state */}
                        {!loading && filteredEvents.length === 0 && (
                            <div className="text-center py-20">
                                <Calendar className="w-14 h-14 text-gold/30 mx-auto mb-4" />
                                <h3 className="text-xl font-display font-semibold text-white mb-2">No events found</h3>
                                <p className="text-cream/50 mb-6 max-w-sm mx-auto">
                                    Try adjusting your filters, search query, or toggle "Show All Dates" to include past events.
                                </p>
                                <button
                                    onClick={() => { setActiveCategory('__all__'); setSearchQuery(''); setSelectedCity('All Cities'); setHideUpcoming(false); }}
                                    className="btn-primary"
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* ── Submit CTA ── */}
                <section className="bg-navy-dark/50 border-t border-gold/10 py-14">
                    <div className="container-custom max-w-3xl mx-auto text-center">
                        <h2 className="text-section font-bold text-white mb-3">Know of an event we missed?</h2>
                        <p className="text-cream/60 mb-6">
                            Help keep Ellis County informed — submit a civic event for review and we'll add it to the calendar.
                        </p>
                        <button onClick={() => setShowSubmitForm(true)} className="btn-primary flex items-center gap-2 mx-auto">
                            <Plus className="w-4 h-4" /> Submit an Event
                        </button>
                    </div>
                </section>

                {/* ── Disclaimer ── */}
                <section className="border-t border-gold/10 bg-navy-dark/80 py-5">
                    <div className="container-custom">
                        <div className="flex items-start gap-3 max-w-3xl mx-auto">
                            <AlertCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                            <p className="text-xs text-cream/50 leading-relaxed">
                                <strong className="text-cream/80">Non-Partisan Notice:</strong> {disclaimer}{' '}
                                Event data is aggregated from publicly available sources and verified where possible.
                                Election dates are sourced from the Texas Secretary of State. If you believe any information is inaccurate, please contact us.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

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
                                    setShowSubmitForm(false);
                                    await fetchEvents();
                                }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
