'use client';

import { Candidate } from '@/lib/types/candidate';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Shield, Star, Flame } from 'lucide-react';

const partyColors: Record<string, string> = {
    Republican: 'bg-red-500/20 text-red-400 border-red-500/30',
    Democrat: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    Independent: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    Libertarian: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    'Non-Partisan': 'bg-gray-500/20 text-gray-300 border-gray-500/30',
};

const partyAccents: Record<string, string> = {
    Republican: 'border-red-500/40',
    Democrat: 'border-blue-500/40',
    Independent: 'border-purple-500/40',
    Libertarian: 'border-yellow-500/40',
    'Non-Partisan': 'border-gray-500/40',
};

const officeLevelBadge: Record<string, string> = {
    federal: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    state: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    county: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    local: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
};

interface CandidateCardProps {
    candidate: Candidate;
    onClick: (candidate: Candidate) => void;
    index: number;
}

export default function CandidateCard({ candidate, onClick, index }: CandidateCardProps) {
    const electionDate = new Date(candidate.election.date);
    const today = new Date();
    const daysUntil = Math.ceil((electionDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            onClick={() => onClick(candidate)}
            className={`bg-navy border ${partyAccents[candidate.party] || 'border-gold/30'} rounded-xl p-5 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 hover:scale-[1.02] group`}
        >
            {/* Top row: Avatar + Name + Party */}
            <div className="flex items-start gap-4 mb-4">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/30 to-navy-dark border-2 border-gold/40 flex items-center justify-center flex-shrink-0 group-hover:border-gold transition-colors">
                    <span className="text-xl font-bold text-gold">
                        {candidate.name.split(' ').map(n => n[0]).join('')}
                    </span>
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-semibold text-white truncate group-hover:text-gold transition-colors">
                        {candidate.name}
                    </h3>
                    <p className="text-gold text-sm truncate">{candidate.office}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${partyColors[candidate.party]}`}>
                            {candidate.party}
                        </span>
                        {candidate.incumbent && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gold/15 text-gold border border-gold/30 rounded-full text-xs font-medium">
                                <Shield className="w-3 h-3" />
                                Incumbent
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Office level + district */}
            <div className="flex items-center gap-2 mb-3">
                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${officeLevelBadge[candidate.officeLevel]}`}>
                    {candidate.officeLevel.charAt(0).toUpperCase() + candidate.officeLevel.slice(1)}
                </span>
                {candidate.district && (
                    <span className="inline-flex items-center gap-1 text-xs text-cream/60">
                        <MapPin className="w-3 h-3" />
                        {candidate.district}
                    </span>
                )}
            </div>

            {/* Top issues */}
            <div className="mb-4">
                <div className="flex flex-wrap gap-1.5">
                    {candidate.topIssues.slice(0, 3).map((issue) => (
                        <span
                            key={issue}
                            className="px-2 py-0.5 bg-navy-dark/80 text-cream/70 rounded text-xs border border-gold/10"
                        >
                            {issue}
                        </span>
                    ))}
                    {candidate.topIssues.length > 3 && (
                        <span className="px-2 py-0.5 text-cream/40 text-xs">
                            +{candidate.topIssues.length - 3} more
                        </span>
                    )}
                </div>
            </div>

            {/* Election info + CTA */}
            <div className="flex items-center justify-between pt-3 border-t border-gold/15">
                <div className="text-xs text-cream/50">
                    <span className="capitalize">{candidate.election.type}</span>
                    {' • '}
                    {daysUntil > 0 ? (
                        <span className={daysUntil <= 30 ? 'text-amber-400 font-semibold' : ''}>
                            {daysUntil <= 30 && <Flame className="inline w-3 h-3 mr-0.5" />}
                            {daysUntil}d away
                        </span>
                    ) : (
                        <span className="text-cream/40">Election passed</span>
                    )}
                </div>

                <button className="inline-flex items-center gap-1 text-xs text-gold hover:text-white transition-colors font-medium">
                    View Profile
                    <ExternalLink className="w-3 h-3" />
                </button>
            </div>

            {/* Opponents */}
            {candidate.election.opponents.length > 0 && (
                <div className="mt-2 text-xs text-cream/40">
                    vs. {candidate.election.opponents.join(', ')}
                </div>
            )}
        </motion.div>
    );
}
