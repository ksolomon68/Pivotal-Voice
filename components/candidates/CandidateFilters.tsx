'use client';

import { CandidateFilters as Filters, PartyAffiliation, OfficeLevel, ElectionType } from '@/lib/types/candidate';
import { Search, Filter, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const parties: PartyAffiliation[] = ['Republican', 'Democrat', 'Independent', 'Libertarian', 'Non-Partisan'];
const officeLevels: OfficeLevel[] = ['federal', 'state', 'county', 'local'];
const electionTypes: ElectionType[] = ['primary', 'general', 'special', 'runoff'];

const partyDots: Record<string, string> = {
    Republican: 'bg-red-400',
    Democrat: 'bg-blue-400',
    Independent: 'bg-purple-400',
    Libertarian: 'bg-yellow-300',
    'Non-Partisan': 'bg-gray-400',
};

interface CandidateFiltersProps {
    filters: Filters;
    onFiltersChange: (filters: Filters) => void;
    totalCount: number;
    filteredCount: number;
}

export default function CandidateFilters({ filters, onFiltersChange, totalCount, filteredCount }: CandidateFiltersProps) {
    const [showFilters, setShowFilters] = useState(false);

    const activeCount = [
        filters.party?.length || 0,
        filters.officeLevel?.length || 0,
        filters.electionType?.length || 0,
        filters.incumbentOnly ? 1 : 0,
    ].reduce((a, b) => a + b, 0);

    const toggleParty = (party: PartyAffiliation) => {
        const current = filters.party || [];
        const next = current.includes(party)
            ? current.filter(p => p !== party)
            : [...current, party];
        onFiltersChange({ ...filters, party: next.length ? next : undefined });
    };

    const toggleOfficeLevel = (level: OfficeLevel) => {
        const current = filters.officeLevel || [];
        const next = current.includes(level)
            ? current.filter(l => l !== level)
            : [...current, level];
        onFiltersChange({ ...filters, officeLevel: next.length ? next : undefined });
    };

    const toggleElectionType = (type: ElectionType) => {
        const current = filters.electionType || [];
        const next = current.includes(type)
            ? current.filter(t => t !== type)
            : [...current, type];
        onFiltersChange({ ...filters, electionType: next.length ? next : undefined });
    };

    const clearAll = () => {
        onFiltersChange({ searchQuery: filters.searchQuery });
    };

    return (
        <div className="space-y-4">
            {/* Search + filter toggle row */}
            <div className="flex gap-3">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                    <input
                        type="text"
                        value={filters.searchQuery || ''}
                        onChange={(e) => onFiltersChange({ ...filters, searchQuery: e.target.value || undefined })}
                        placeholder="Search by name, office, or issue..."
                        className="input pl-12 pr-4"
                        aria-label="Search candidates"
                    />
                </div>
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={`btn-secondary flex items-center gap-2 whitespace-nowrap ${showFilters ? 'bg-gold text-navy' : ''}`}
                >
                    <Filter className="w-4 h-4" />
                    Filters
                    {activeCount > 0 && (
                        <span className="w-5 h-5 bg-gold text-navy rounded-full text-xs font-bold flex items-center justify-center">
                            {activeCount}
                        </span>
                    )}
                    <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>
            </div>

            {/* Results count */}
            <div className="text-sm text-cream/50">
                Showing <span className="text-gold font-semibold">{filteredCount}</span> of {totalCount} candidates
            </div>

            {/* Expandable filter panel */}
            {showFilters && (
                <div className="bg-navy border border-gold/20 rounded-xl p-5 space-y-5 animate-scale-in">
                    {/* Party affiliation */}
                    <div>
                        <label className="text-xs font-semibold text-gold uppercase tracking-wider mb-2 block">Party</label>
                        <div className="flex flex-wrap gap-2">
                            {parties.map((party) => {
                                const isActive = filters.party?.includes(party);
                                return (
                                    <button
                                        key={party}
                                        onClick={() => toggleParty(party)}
                                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium border transition-all
                                            ${isActive
                                                ? 'bg-gold/15 text-gold border-gold/40'
                                                : 'bg-navy-dark/50 text-cream/60 border-gold/10 hover:border-gold/30 hover:text-cream'
                                            }`}
                                    >
                                        <span className={`w-2.5 h-2.5 rounded-full ${partyDots[party]}`}></span>
                                        {party}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Office level */}
                    <div>
                        <label className="text-xs font-semibold text-gold uppercase tracking-wider mb-2 block">Office Level</label>
                        <div className="flex flex-wrap gap-2">
                            {officeLevels.map((level) => {
                                const isActive = filters.officeLevel?.includes(level);
                                return (
                                    <button
                                        key={level}
                                        onClick={() => toggleOfficeLevel(level)}
                                        className={`px-3 py-1.5 rounded-lg text-sm font-medium border capitalize transition-all
                                            ${isActive
                                                ? 'bg-gold/15 text-gold border-gold/40'
                                                : 'bg-navy-dark/50 text-cream/60 border-gold/10 hover:border-gold/30 hover:text-cream'
                                            }`}
                                    >
                                        {level}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Election type */}
                    <div>
                        <label className="text-xs font-semibold text-gold uppercase tracking-wider mb-2 block">Election Type</label>
                        <div className="flex flex-wrap gap-2">
                            {electionTypes.map((type) => {
                                const isActive = filters.electionType?.includes(type);
                                return (
                                    <button
                                        key={type}
                                        onClick={() => toggleElectionType(type)}
                                        className={`px-3 py-1.5 rounded-lg text-sm font-medium border capitalize transition-all
                                            ${isActive
                                                ? 'bg-gold/15 text-gold border-gold/40'
                                                : 'bg-navy-dark/50 text-cream/60 border-gold/10 hover:border-gold/30 hover:text-cream'
                                            }`}
                                    >
                                        {type}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Incumbent toggle + clear */}
                    <div className="flex items-center justify-between pt-3 border-t border-gold/15">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    checked={!!filters.incumbentOnly}
                                    onChange={(e) => onFiltersChange({ ...filters, incumbentOnly: e.target.checked || undefined })}
                                    className="sr-only peer"
                                />
                                <div className="w-10 h-5 bg-navy-dark border border-gold/30 rounded-full peer-checked:bg-gold/30 transition-colors"></div>
                                <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-cream/50 rounded-full peer-checked:translate-x-5 peer-checked:bg-gold transition-all"></div>
                            </div>
                            <span className="text-sm text-cream/70 group-hover:text-cream">Incumbents Only</span>
                        </label>

                        {activeCount > 0 && (
                            <button
                                onClick={clearAll}
                                className="flex items-center gap-1 text-sm text-cream/50 hover:text-red-400 transition-colors"
                            >
                                <X className="w-4 h-4" />
                                Clear Filters
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
