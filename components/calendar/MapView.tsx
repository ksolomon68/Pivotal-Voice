'use client';

import { Event, EventType } from '@/lib/types/event';
import { format, parseISO } from 'date-fns';
import { MapPin, Users } from 'lucide-react';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { formatTime12h } from '@/lib/utils/ics';

interface MapViewProps {
    events: Event[];
    onEventClick: (event: Event) => void;
}

const eventTypeDotColors: Record<EventType, string> = {
    debate: 'bg-gold shadow-gold/60',
    town_hall: 'bg-blue-400 shadow-blue-400/60',
    rally: 'bg-red-400 shadow-red-400/60',
    meet_greet: 'bg-purple-400 shadow-purple-400/60',
    forum: 'bg-emerald-400 shadow-emerald-400/60',
    listening_session: 'bg-amber-400 shadow-amber-400/60',
    candidate_appearance: 'bg-cyan-400 shadow-cyan-400/60',
};

const eventTypeLabels: Record<EventType, string> = {
    debate: 'Debate',
    town_hall: 'Town Hall',
    rally: 'Rally',
    meet_greet: 'Meet & Greet',
    forum: 'Forum',
    listening_session: 'Listening',
    candidate_appearance: 'Appearance',
};

// Ellis County approximate bounding box
const BOUNDS = {
    minLat: 32.15,
    maxLat: 32.56,
    minLng: -97.05,
    maxLng: -96.55,
};

function latLngToPercent(lat: number, lng: number): { x: number; y: number } {
    const x = ((lng - BOUNDS.minLng) / (BOUNDS.maxLng - BOUNDS.minLng)) * 100;
    // Invert Y because lat increases upward but CSS % increases downward
    const y = ((BOUNDS.maxLat - lat) / (BOUNDS.maxLat - BOUNDS.minLat)) * 100;
    return {
        x: Math.max(5, Math.min(95, x)),
        y: Math.max(5, Math.min(95, y)),
    };
}

export default function MapView({ events, onEventClick }: MapViewProps) {
    const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);
    const [selectedPin, setSelectedPin] = useState<string | null>(null);

    // Only show events that have coordinates
    const mappableEvents = useMemo(
        () => events.filter((e) => e.venue.coordinates),
        [events]
    );

    // Group events by location (same coordinates)
    const eventClusters = useMemo(() => {
        const clusters: Record<string, Event[]> = {};
        mappableEvents.forEach((event) => {
            const key = `${event.venue.coordinates!.lat},${event.venue.coordinates!.lng}`;
            if (!clusters[key]) clusters[key] = [];
            clusters[key].push(event);
        });
        return clusters;
    }, [mappableEvents]);

    // Get unique cities for the map labels
    const cityLabels = useMemo(() => {
        const cities: Record<string, { lat: number; lng: number }> = {};
        mappableEvents.forEach((e) => {
            if (!cities[e.venue.city] && e.venue.coordinates) {
                cities[e.venue.city] = {
                    lat: e.venue.coordinates.lat,
                    lng: e.venue.coordinates.lng,
                };
            }
        });
        return cities;
    }, [mappableEvents]);

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-display font-bold text-white">
                <MapPin className="inline w-5 h-5 mr-2 text-gold" />
                Ellis County Event Map
            </h2>

            {/* Map Container */}
            <div className="relative bg-navy border-2 border-gold/30 rounded-2xl overflow-hidden aspect-[16/10] md:aspect-[16/9]">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* County Outline (simplified) */}
                <div className="absolute inset-4 md:inset-8 border border-gold/20 rounded-xl" />
                <div className="absolute top-2 left-4 md:top-4 md:left-8 text-[10px] md:text-xs text-gold/40 font-mono uppercase tracking-widest">
                    Ellis County, TX
                </div>

                {/* City Labels */}
                {Object.entries(cityLabels).map(([city, coords]) => {
                    const pos = latLngToPercent(coords.lat, coords.lng);
                    return (
                        <div
                            key={city}
                            className="absolute text-[10px] md:text-xs text-cream/30 font-medium pointer-events-none"
                            style={{
                                left: `${pos.x}%`,
                                top: `${pos.y + 4}%`,
                                transform: 'translateX(-50%)',
                            }}
                        >
                            {city}
                        </div>
                    );
                })}

                {/* Event Pins */}
                {Object.entries(eventClusters).map(([coordKey, clusterEvents]) => {
                    const [lat, lng] = coordKey.split(',').map(Number);
                    const pos = latLngToPercent(lat, lng);
                    const isHovered = clusterEvents.some((e) => hoveredEvent === e.id);
                    const isSelected = clusterEvents.some((e) => selectedPin === e.id);
                    const mainEvent = clusterEvents[0];
                    const isDebate = clusterEvents.some((e) => e.eventType === 'debate');

                    return (
                        <div key={coordKey}>
                            {/* Pin */}
                            <motion.button
                                className={clsx(
                                    'absolute z-10 rounded-full transition-all duration-300 shadow-lg',
                                    isDebate
                                        ? 'w-5 h-5 md:w-6 md:h-6'
                                        : 'w-3.5 h-3.5 md:w-4 md:h-4',
                                    eventTypeDotColors[mainEvent.eventType],
                                    (isHovered || isSelected) && 'scale-150 z-20'
                                )}
                                style={{
                                    left: `${pos.x}%`,
                                    top: `${pos.y}%`,
                                    transform: 'translate(-50%, -50%)',
                                }}
                                whileHover={{ scale: 1.5 }}
                                onMouseEnter={() => setHoveredEvent(mainEvent.id)}
                                onMouseLeave={() => setHoveredEvent(null)}
                                onClick={() =>
                                    setSelectedPin(
                                        selectedPin === mainEvent.id ? null : mainEvent.id
                                    )
                                }
                                aria-label={`${clusterEvents.length} event(s) at ${mainEvent.venue.name}`}
                            >
                                {clusterEvents.length > 1 && (
                                    <span className="absolute -top-1 -right-1 bg-navy text-gold text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-gold/50">
                                        {clusterEvents.length}
                                    </span>
                                )}
                            </motion.button>

                            {/* Popup */}
                            <AnimatePresence>
                                {(isSelected || isHovered) && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, y: 5 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: 5 }}
                                        className="absolute z-30 w-56 md:w-72 bg-navy-dark border border-gold/40 rounded-lg shadow-2xl p-3 pointer-events-auto"
                                        style={{
                                            left: `${Math.min(pos.x, 70)}%`,
                                            top: `${pos.y + 3}%`,
                                        }}
                                    >
                                        {clusterEvents.map((event) => (
                                            <button
                                                key={event.id}
                                                onClick={() => onEventClick(event)}
                                                className="w-full text-left p-2 rounded hover:bg-gold/10 transition-colors"
                                            >
                                                <p className="text-white text-sm font-medium truncate">
                                                    {event.title}
                                                </p>
                                                <p className="text-cream/50 text-xs mt-0.5">
                                                    {format(parseISO(event.date), 'MMM d')} · {formatTime12h(event.startTime)} CT
                                                </p>
                                                <p className="text-cream/40 text-xs truncate">
                                                    {event.venue.name}
                                                </p>
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}

                {/* Compass */}
                <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 text-gold/30 text-xs font-bold">
                    N ↑
                </div>
            </div>

            {/* Event List Below Map */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {mappableEvents.map((event) => (
                    <button
                        key={event.id}
                        onClick={() => onEventClick(event)}
                        onMouseEnter={() => setHoveredEvent(event.id)}
                        onMouseLeave={() => setHoveredEvent(null)}
                        className={clsx(
                            'text-left p-3 rounded-lg border border-gold/20 bg-navy hover:bg-navy-dark/50 transition-all duration-200',
                            hoveredEvent === event.id && 'border-gold/60 bg-gold/5'
                        )}
                    >
                        <div className="flex items-center gap-2">
                            <div
                                className={clsx(
                                    'w-2.5 h-2.5 rounded-full flex-shrink-0',
                                    eventTypeDotColors[event.eventType].split(' ')[0]
                                )}
                            />
                            <p className="text-white text-sm font-medium truncate">{event.title}</p>
                        </div>
                        <p className="text-cream/50 text-xs mt-1 ml-5">
                            <MapPin className="inline w-3 h-3 mr-1" />
                            {event.venue.name}, {event.venue.city}
                        </p>
                    </button>
                ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-3 text-xs text-cream/60">
                {Object.entries(eventTypeLabels).map(([key, label]) => (
                    <div key={key} className="flex items-center gap-1.5">
                        <div className={clsx('w-2.5 h-2.5 rounded-full', eventTypeDotColors[key as EventType].split(' ')[0])} />
                        {label}
                    </div>
                ))}
            </div>
        </div>
    );
}
