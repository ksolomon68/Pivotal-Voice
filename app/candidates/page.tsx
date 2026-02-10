'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CandidateCard from '@/components/candidates/CandidateCard';
import CandidateModal from '@/components/candidates/CandidateModal';
import CandidateFilters from '@/components/candidates/CandidateFilters';
import VotingInfo from '@/components/candidates/VotingInfo';
import { Candidate, CandidateFilters as Filters } from '@/lib/types/candidate';
import sampleCandidates from '@/data/sample-candidates.json';
import { motion } from 'framer-motion';
import {
    Users, Vote, Flame, Shield, ExternalLink,
    BarChart3, BookOpen, AlertTriangle, Clock
} from 'lucide-react';

export default function CandidatesPage() {
    const [filters, setFilters] = useState<Filters>({});
    const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

    const candidates = sampleCandidates.candidates as Candidate[];
    const { metadata, elections } = sampleCandidates;

    // Find the next upcoming election
    const nextElection = useMemo(() => {
        const today = new Date();
        return elections
            .filter((e) => new Date(e.date) > today)
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];
    }, [elections]);

    const daysUntilNext = nextElection
        ? Math.ceil((new Date(nextElection.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
        : null;

    // Filter candidates
    const filteredCandidates = useMemo(() => {
        return candidates.filter((c) => {
            // Search
            if (filters.searchQuery) {
                const q = filters.searchQuery.toLowerCase();
                const match =
                    c.name.toLowerCase().includes(q) ||
                    c.office.toLowerCase().includes(q) ||
                    c.topIssues.some(i => i.toLowerCase().includes(q)) ||
                    (c.district?.toLowerCase().includes(q));
                if (!match) return false;
            }

            // Party
            if (filters.party?.length && !filters.party.includes(c.party)) return false;

            // Office level
            if (filters.officeLevel?.length && !filters.officeLevel.includes(c.officeLevel)) return false;

            // Election type
            if (filters.electionType?.length && !filters.electionType.includes(c.election.type)) return false;

            // Incumbent only
            if (filters.incumbentOnly && !c.incumbent) return false;

            return true;
        });
    }, [candidates, filters]);

    // Stats
    const stats = useMemo(() => {
        const uniqueRaces = new Set(candidates.map(c => c.office)).size;
        const incumbents = candidates.filter(c => c.incumbent).length;
        const partyCounts: Record<string, number> = {};
        candidates.forEach(c => {
            partyCounts[c.party] = (partyCounts[c.party] || 0) + 1;
        });
        return { totalCandidates: candidates.length, races: uniqueRaces, incumbents, parties: Object.keys(partyCounts).length };
    }, [candidates]);

    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Page Header */}
                <section className="bg-navy border-b border-gold/20 py-12">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto">
                            <Users className="w-16 h-16 text-gold mx-auto mb-4" />
                            <h1 className="text-hero font-bold text-white mb-4">
                                Ellis County Candidate Tracker
                            </h1>
                            <p className="text-lg text-cream/80">
                                Your comprehensive guide to every candidate running for office in Ellis County.
                                Research positions, compare candidates, and make your voice heard.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Election Countdown Banner */}
                {nextElection && daysUntilNext && (
                    <section className="bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border-b border-gold/20">
                        <div className="container-custom py-4">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gold/20 border-2 border-gold/40 rounded-full flex items-center justify-center">
                                        <Flame className="w-6 h-6 text-gold animate-pulse" />
                                    </div>
                                    <div>
                                        <p className="text-gold font-display font-bold text-lg">
                                            {daysUntilNext} Days Until {nextElection.name}
                                        </p>
                                        <p className="text-cream/60 text-sm">
                                            {new Date(nextElection.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href="https://www.votetexas.gov/register-to-vote/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary text-sm flex items-center gap-2"
                                >
                                    <Vote className="w-4 h-4" />
                                    Register to Vote
                                </a>
                            </div>
                        </div>
                    </section>
                )}

                {/* Stats row */}
                <section className="bg-navy-dark/50 border-b border-gold/20 py-6">
                    <div className="container-custom">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-gold">{stats.totalCandidates}</p>
                                <p className="text-xs text-cream/50 flex items-center justify-center gap-1"><Users className="w-3 h-3" /> Candidates</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-gold">{stats.races}</p>
                                <p className="text-xs text-cream/50 flex items-center justify-center gap-1"><BarChart3 className="w-3 h-3" /> Active Races</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-gold">{stats.incumbents}</p>
                                <p className="text-xs text-cream/50 flex items-center justify-center gap-1"><Shield className="w-3 h-3" /> Incumbents</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-gold">{stats.parties}</p>
                                <p className="text-xs text-cream/50 flex items-center justify-center gap-1"><Vote className="w-3 h-3" /> Parties</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Filters + Candidate Grid */}
                <section className="section">
                    <div className="container-custom">
                        {/* Filters */}
                        <div className="mb-8">
                            <CandidateFilters
                                filters={filters}
                                onFiltersChange={setFilters}
                                totalCount={candidates.length}
                                filteredCount={filteredCandidates.length}
                            />
                        </div>

                        {/* Candidate Grid */}
                        {filteredCandidates.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredCandidates.map((candidate, index) => (
                                    <CandidateCard
                                        key={candidate.id}
                                        candidate={candidate}
                                        onClick={setSelectedCandidate}
                                        index={index}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <Users className="w-16 h-16 text-gold/30 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-white mb-2">No candidates match your filters</h3>
                                <p className="text-cream/60 mb-4">Try adjusting your search or filter criteria</p>
                                <button
                                    onClick={() => setFilters({})}
                                    className="btn-secondary text-sm"
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* Voting Information Section */}
                <section className="bg-navy border-t border-gold/20 py-16">
                    <div className="container-custom">
                        <div className="text-center mb-10">
                            <Vote className="w-12 h-12 text-gold mx-auto mb-4" />
                            <h2 className="text-section font-bold text-white mb-3">
                                Voting Information
                            </h2>
                            <p className="text-cream/70 max-w-2xl mx-auto">
                                Everything you need to know about registering, early voting, and casting your ballot in Ellis County.
                            </p>
                        </div>
                        <div className="max-w-3xl mx-auto">
                            <VotingInfo />
                        </div>
                    </div>
                </section>

                {/* Data Sources */}
                <section className="border-t border-gold/20 py-12">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto">
                            <h3 className="font-display text-lg font-semibold text-white mb-4 flex items-center justify-center gap-2">
                                <BookOpen className="w-5 h-5 text-gold" />
                                Data Sources
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3 mb-6">
                                <a href="https://www.co.ellis.tx.us/149/Elections" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-navy/50 border border-gold/20 rounded-lg text-sm text-cream/60 hover:text-gold hover:border-gold/40 transition-all flex items-center gap-1">
                                    Ellis County Elections <ExternalLink className="w-3 h-3" />
                                </a>
                                <a href="https://www.sos.state.tx.us/elections/" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-navy/50 border border-gold/20 rounded-lg text-sm text-cream/60 hover:text-gold hover:border-gold/40 transition-all flex items-center gap-1">
                                    TX Secretary of State <ExternalLink className="w-3 h-3" />
                                </a>
                                <a href="https://ballotpedia.org/Ellis_County,_Texas" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-navy/50 border border-gold/20 rounded-lg text-sm text-cream/60 hover:text-gold hover:border-gold/40 transition-all flex items-center gap-1">
                                    Ballotpedia <ExternalLink className="w-3 h-3" />
                                </a>
                                <a href="https://www.vote411.org/" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-navy/50 border border-gold/20 rounded-lg text-sm text-cream/60 hover:text-gold hover:border-gold/40 transition-all flex items-center gap-1">
                                    Vote411 / LWV <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>

                            <div className="flex items-center justify-center gap-2 text-cream/40 text-xs mb-4">
                                <Clock className="w-3 h-3" />
                                Last Updated: {new Date(metadata.lastUpdated).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })}
                            </div>

                            <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-4 flex items-start gap-3">
                                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                <p className="text-cream/60 text-sm text-left">
                                    {metadata.disclaimer}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            {/* Modal */}
            {selectedCandidate && (
                <CandidateModal
                    candidate={selectedCandidate}
                    onClose={() => setSelectedCandidate(null)}
                />
            )}
        </>
    );
}
