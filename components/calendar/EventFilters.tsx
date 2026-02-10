'use client';

import { EventFilters as EventFiltersType, EventType, OfficeLevel } from '@/lib/types/event';
import { Search, Filter, X, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

interface EventFiltersProps {
    filters: EventFiltersType;
    onFilterChange: (filters: EventFiltersType) => void;
}

const eventTypes: { value: EventType; label: string }[] = [
    { value: 'debate', label: 'Debate' },
    { value: 'town_hall', label: 'Town Hall' },
    { value: 'rally', label: 'Rally' },
    { value: 'meet_greet', label: 'Meet & Greet' },
    { value: 'forum', label: 'Forum' },
    { value: 'listening_session', label: 'Listening Session' },
    { value: 'candidate_appearance', label: 'Candidate Appearance' },
];

const officeLevels: { value: OfficeLevel; label: string }[] = [
    { value: 'local', label: 'Local' },
    { value: 'county', label: 'County' },
    { value: 'state', label: 'State' },
    { value: 'federal', label: 'Federal' },
];

const parties = [
    { value: 'Republican', label: 'Republican' },
    { value: 'Democrat', label: 'Democrat' },
    { value: 'Independent', label: 'Independent' },
    { value: 'Non-Partisan', label: 'Non-Partisan' },
];

const ellisCountyCities = [
    'Waxahachie',
    'Midlothian',
    'Red Oak',
    'Ennis',
    'Italy',
    'Ferris',
    'Palmer',
    'Ovilla',
    'Maypearl',
];

export default function EventFiltersComponent({ filters, onFilterChange }: EventFiltersProps) {
    const [showFilters, setShowFilters] = useState(false);
    const [searchQuery, setSearchQuery] = useState(filters.searchQuery || '');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        onFilterChange({ ...filters, searchQuery: value });
    };

    const handleEventTypeToggle = (type: EventType) => {
        const current = filters.eventType || [];
        const updated = current.includes(type)
            ? current.filter(t => t !== type)
            : [...current, type];
        onFilterChange({ ...filters, eventType: updated.length > 0 ? updated : undefined });
    };

    const handleOfficeLevelToggle = (level: OfficeLevel) => {
        const current = filters.officeLevel || [];
        const updated = current.includes(level)
            ? current.filter(l => l !== level)
            : [...current, level];
        onFilterChange({ ...filters, officeLevel: updated.length > 0 ? updated : undefined });
    };

    const handlePartyToggle = (party: string) => {
        const current = filters.party || [];
        const updated = current.includes(party)
            ? current.filter(p => p !== party)
            : [...current, party];
        onFilterChange({ ...filters, party: updated.length > 0 ? updated : undefined });
    };

    const handleCityToggle = (city: string) => {
        const current = filters.city || [];
        const updated = current.includes(city)
            ? current.filter(c => c !== city)
            : [...current, city];
        onFilterChange({ ...filters, city: updated.length > 0 ? updated : undefined });
    };

    const handleDateRangeChange = (field: 'start' | 'end', value: string) => {
        const currentRange = filters.dateRange || { start: '', end: '' };
        const updated = { ...currentRange, [field]: value };
        if (updated.start || updated.end) {
            onFilterChange({ ...filters, dateRange: updated });
        } else {
            onFilterChange({ ...filters, dateRange: undefined });
        }
    };

    const handleHidePastToggle = () => {
        onFilterChange({ ...filters, hidePastEvents: !filters.hidePastEvents });
    };

    const clearAllFilters = () => {
        setSearchQuery('');
        onFilterChange({});
    };

    const activeFilterCount =
        (filters.eventType?.length || 0) +
        (filters.officeLevel?.length || 0) +
        (filters.party?.length || 0) +
        (filters.city?.length || 0) +
        (filters.dateRange ? 1 : 0) +
        (filters.searchQuery ? 1 : 0) +
        (filters.hidePastEvents ? 1 : 0);

    return (
        <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                <input
                    type="text"
                    placeholder="Search by candidate name, venue, or keyword..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="input pl-12 pr-4"
                    aria-label="Search events"
                />
            </div>

            {/* Filter Toggle + Hide Past Events */}
            <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="btn-secondary flex items-center gap-2 !py-2"
                    >
                        <SlidersHorizontal className="w-4 h-4" />
                        Filters
                        {activeFilterCount > 0 && (
                            <span className="badge-gold text-xs px-2 py-0.5 ml-1">
                                {activeFilterCount}
                            </span>
                        )}
                    </button>

                    {/* Hide Past Events Toggle */}
                    <label className="flex items-center gap-2 cursor-pointer text-sm">
                        <div className="relative">
                            <input
                                type="checkbox"
                                checked={filters.hidePastEvents || false}
                                onChange={handleHidePastToggle}
                                className="sr-only"
                            />
                            <div
                                className={clsx(
                                    'w-10 h-5 rounded-full transition-colors duration-300',
                                    filters.hidePastEvents ? 'bg-gold' : 'bg-navy-dark border border-gold/30'
                                )}
                            >
                                <div
                                    className={clsx(
                                        'w-4 h-4 rounded-full bg-white shadow transform transition-transform duration-300 mt-0.5',
                                        filters.hidePastEvents ? 'translate-x-5' : 'translate-x-0.5'
                                    )}
                                />
                            </div>
                        </div>
                        <span className="text-cream/70">Hide past events</span>
                    </label>
                </div>

                {activeFilterCount > 0 && (
                    <button
                        onClick={clearAllFilters}
                        className="text-cream/70 hover:text-gold text-sm flex items-center gap-1"
                    >
                        <X className="w-4 h-4" />
                        Clear All
                    </button>
                )}
            </div>

            {/* Filter Panel */}
            <AnimatePresence>
                {showFilters && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-navy border border-gold/30 rounded-xl p-6 space-y-6 overflow-hidden"
                    >
                        {/* Event Type */}
                        <div>
                            <h3 className="font-display text-base font-semibold text-white mb-3">
                                Event Type
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {eventTypes.map(type => (
                                    <button
                                        key={type.value}
                                        onClick={() => handleEventTypeToggle(type.value)}
                                        className={clsx(
                                            'badge cursor-pointer transition-all duration-200',
                                            filters.eventType?.includes(type.value)
                                                ? 'badge-gold'
                                                : 'bg-navy-dark/50 text-cream/70 hover:bg-navy-dark'
                                        )}
                                    >
                                        {type.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Office Level */}
                        <div>
                            <h3 className="font-display text-base font-semibold text-white mb-3">
                                Office Level
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {officeLevels.map(level => (
                                    <button
                                        key={level.value}
                                        onClick={() => handleOfficeLevelToggle(level.value)}
                                        className={clsx(
                                            'badge cursor-pointer transition-all duration-200',
                                            filters.officeLevel?.includes(level.value)
                                                ? 'badge-gold'
                                                : 'bg-navy-dark/50 text-cream/70 hover:bg-navy-dark'
                                        )}
                                    >
                                        {level.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Party Affiliation */}
                        <div>
                            <h3 className="font-display text-base font-semibold text-white mb-3">
                                Party Affiliation
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {parties.map(party => (
                                    <button
                                        key={party.value}
                                        onClick={() => handlePartyToggle(party.value)}
                                        className={clsx(
                                            'badge cursor-pointer transition-all duration-200',
                                            filters.party?.includes(party.value)
                                                ? 'badge-gold'
                                                : 'bg-navy-dark/50 text-cream/70 hover:bg-navy-dark'
                                        )}
                                    >
                                        {party.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* City */}
                        <div>
                            <h3 className="font-display text-base font-semibold text-white mb-3">
                                City
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {ellisCountyCities.map(city => (
                                    <button
                                        key={city}
                                        onClick={() => handleCityToggle(city)}
                                        className={clsx(
                                            'badge cursor-pointer transition-all duration-200',
                                            filters.city?.includes(city)
                                                ? 'badge-gold'
                                                : 'bg-navy-dark/50 text-cream/70 hover:bg-navy-dark'
                                        )}
                                    >
                                        {city}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Date Range */}
                        <div>
                            <h3 className="font-display text-base font-semibold text-white mb-3">
                                Date Range
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="flex-1">
                                    <label className="text-cream/50 text-xs mb-1 block">From</label>
                                    <input
                                        type="date"
                                        value={filters.dateRange?.start || ''}
                                        onChange={(e) => handleDateRangeChange('start', e.target.value)}
                                        className="input text-sm !py-2"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="text-cream/50 text-xs mb-1 block">To</label>
                                    <input
                                        type="date"
                                        value={filters.dateRange?.end || ''}
                                        onChange={(e) => handleDateRangeChange('end', e.target.value)}
                                        className="input text-sm !py-2"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
