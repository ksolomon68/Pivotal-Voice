'use client';

import { Candidate } from '@/lib/types/candidate';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X, Globe, Mail, Phone, ExternalLink, Shield, MapPin,
    Twitter, Facebook, Instagram, Youtube,
    DollarSign, Calendar, Award, Users, ChevronRight
} from 'lucide-react';

const partyGradients: Record<string, string> = {
    Republican: 'from-red-600/20 to-red-900/10',
    Democrat: 'from-blue-600/20 to-blue-900/10',
    Independent: 'from-purple-600/20 to-purple-900/10',
    Libertarian: 'from-yellow-600/20 to-yellow-900/10',
    'Non-Partisan': 'from-gray-600/20 to-gray-900/10',
};

const partyColors: Record<string, string> = {
    Republican: 'text-red-400',
    Democrat: 'text-blue-400',
    Independent: 'text-purple-400',
    Libertarian: 'text-yellow-300',
    'Non-Partisan': 'text-gray-300',
};

interface CandidateModalProps {
    candidate: Candidate | null;
    onClose: () => void;
}

export default function CandidateModal({ candidate, onClose }: CandidateModalProps) {
    if (!candidate) return null;

    const electionDate = new Date(candidate.election.date);
    const today = new Date();
    const daysUntil = Math.ceil((electionDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-start justify-center overflow-y-auto py-8 px-4"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()}
                    className="w-full max-w-3xl bg-navy-dark border border-gold/30 rounded-2xl overflow-hidden shadow-2xl"
                >
                    {/* Header with party gradient */}
                    <div className={`bg-gradient-to-r ${partyGradients[candidate.party]} p-6 pb-8 relative`}>
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-cream/70 hover:text-white bg-navy-dark/50 rounded-full transition-colors"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex items-start gap-5">
                            {/* Avatar */}
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold/40 to-navy-dark border-3 border-gold flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl font-bold text-gold">
                                    {candidate.name.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>

                            <div className="flex-1">
                                <h2 className="font-display text-2xl font-bold text-white mb-1">
                                    {candidate.name}
                                </h2>
                                <p className="text-gold text-lg">{candidate.office}</p>
                                <div className="flex flex-wrap items-center gap-2 mt-2">
                                    <span className={`font-semibold ${partyColors[candidate.party]}`}>
                                        {candidate.party}
                                    </span>
                                    {candidate.incumbent && (
                                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gold/15 text-gold border border-gold/30 rounded-full text-sm font-medium">
                                            <Shield className="w-3.5 h-3.5" />
                                            Incumbent{candidate.yearsInOffice ? ` • ${candidate.yearsInOffice} years` : ''}
                                        </span>
                                    )}
                                    {candidate.district && (
                                        <span className="inline-flex items-center gap-1 text-sm text-cream/60">
                                            <MapPin className="w-3.5 h-3.5" />
                                            {candidate.district}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="px-6 -mt-4 relative z-10">
                        <div className="flex flex-wrap gap-3">
                            {candidate.campaignWebsite && (
                                <a
                                    href={candidate.campaignWebsite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary text-sm flex items-center gap-2"
                                >
                                    <Globe className="w-4 h-4" />
                                    Campaign Website
                                </a>
                            )}
                            {candidate.donationUrl && (
                                <a
                                    href={candidate.donationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary text-sm flex items-center gap-2"
                                >
                                    <DollarSign className="w-4 h-4" />
                                    Donate
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Body content */}
                    <div className="p-6 space-y-6">
                        {/* Bio */}
                        <div>
                            <h3 className="font-display text-sm font-semibold text-gold uppercase tracking-wider mb-2">About</h3>
                            <p className="text-cream/80 leading-relaxed">{candidate.bio}</p>
                        </div>

                        {/* Top issues */}
                        <div>
                            <h3 className="font-display text-sm font-semibold text-gold uppercase tracking-wider mb-3">Key Issues</h3>
                            <div className="flex flex-wrap gap-2">
                                {candidate.topIssues.map((issue) => (
                                    <span
                                        key={issue}
                                        className="px-3 py-1.5 bg-gold/10 text-gold border border-gold/25 rounded-lg text-sm font-medium"
                                    >
                                        {issue}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Policy positions */}
                        {candidate.policyPositions.length > 0 && (
                            <div>
                                <h3 className="font-display text-sm font-semibold text-gold uppercase tracking-wider mb-3">Policy Positions</h3>
                                <div className="space-y-3">
                                    {candidate.policyPositions.map((pos) => (
                                        <div
                                            key={pos.topic}
                                            className="bg-navy/50 border border-gold/15 rounded-lg p-4"
                                        >
                                            <div className="flex items-center gap-2 mb-1">
                                                <ChevronRight className="w-4 h-4 text-gold" />
                                                <span className="font-semibold text-white text-sm">{pos.topic}</span>
                                            </div>
                                            <p className="text-cream/70 text-sm ml-6">{pos.stance}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Election details */}
                        <div className="bg-navy/50 border border-gold/20 rounded-xl p-5">
                            <h3 className="font-display text-sm font-semibold text-gold uppercase tracking-wider mb-3 flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Election Details
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <span className="text-cream/50 text-xs uppercase tracking-wide">Type</span>
                                    <p className="text-white font-medium capitalize">{candidate.election.type} Election</p>
                                </div>
                                <div>
                                    <span className="text-cream/50 text-xs uppercase tracking-wide">Date</span>
                                    <p className="text-white font-medium">
                                        {electionDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                    </p>
                                </div>
                                <div>
                                    <span className="text-cream/50 text-xs uppercase tracking-wide">Countdown</span>
                                    <p className={`font-bold ${daysUntil > 0 ? (daysUntil <= 30 ? 'text-amber-400' : 'text-green-400') : 'text-cream/40'}`}>
                                        {daysUntil > 0 ? `${daysUntil} days until election` : 'Election has passed'}
                                    </p>
                                </div>
                                {candidate.election.opponents.length > 0 && (
                                    <div>
                                        <span className="text-cream/50 text-xs uppercase tracking-wide">Opponent(s)</span>
                                        <p className="text-white font-medium">{candidate.election.opponents.join(', ')}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Endorsements */}
                        {candidate.endorsements && candidate.endorsements.length > 0 && (
                            <div>
                                <h3 className="font-display text-sm font-semibold text-gold uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <Award className="w-4 h-4" />
                                    Endorsements
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {candidate.endorsements.map((endorsement) => (
                                        <span
                                            key={endorsement}
                                            className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 rounded-lg text-sm"
                                        >
                                            {endorsement}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Contact & Social */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Contact */}
                            <div>
                                <h3 className="font-display text-sm font-semibold text-gold uppercase tracking-wider mb-3">Contact</h3>
                                <div className="space-y-2">
                                    {candidate.email && (
                                        <a
                                            href={`mailto:${candidate.email}`}
                                            className="flex items-center gap-2 text-cream/70 hover:text-gold transition-colors text-sm"
                                        >
                                            <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                                            {candidate.email}
                                        </a>
                                    )}
                                    {candidate.phone && (
                                        <a
                                            href={`tel:${candidate.phone}`}
                                            className="flex items-center gap-2 text-cream/70 hover:text-gold transition-colors text-sm"
                                        >
                                            <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                                            {candidate.phone}
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Social media */}
                            <div>
                                <h3 className="font-display text-sm font-semibold text-gold uppercase tracking-wider mb-3">Social Media</h3>
                                <div className="flex flex-wrap gap-2">
                                    {candidate.socialMedia.twitter && (
                                        <a
                                            href={candidate.socialMedia.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 bg-navy/50 border border-gold/20 rounded-lg text-cream/60 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/50 transition-all"
                                            aria-label="Twitter"
                                        >
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                    )}
                                    {candidate.socialMedia.facebook && (
                                        <a
                                            href={candidate.socialMedia.facebook}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 bg-navy/50 border border-gold/20 rounded-lg text-cream/60 hover:text-[#1877F2] hover:border-[#1877F2]/50 transition-all"
                                            aria-label="Facebook"
                                        >
                                            <Facebook className="w-5 h-5" />
                                        </a>
                                    )}
                                    {candidate.socialMedia.instagram && (
                                        <a
                                            href={candidate.socialMedia.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 bg-navy/50 border border-gold/20 rounded-lg text-cream/60 hover:text-[#E4405F] hover:border-[#E4405F]/50 transition-all"
                                            aria-label="Instagram"
                                        >
                                            <Instagram className="w-5 h-5" />
                                        </a>
                                    )}
                                    {candidate.socialMedia.youtube && (
                                        <a
                                            href={candidate.socialMedia.youtube}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 bg-navy/50 border border-gold/20 rounded-lg text-cream/60 hover:text-[#FF0000] hover:border-[#FF0000]/50 transition-all"
                                            aria-label="YouTube"
                                        >
                                            <Youtube className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer disclaimer */}
                    <div className="px-6 py-4 bg-navy/30 border-t border-gold/15">
                        <p className="text-cream/40 text-xs text-center">
                            Information sourced from public records and candidate-submitted data.
                            Pivotal Voice does not endorse any candidate.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
