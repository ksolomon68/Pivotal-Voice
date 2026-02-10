'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Vote, MapPin, Clock, Mail as MailIcon, ChevronDown, ExternalLink,
    CalendarDays, Building, AlertCircle
} from 'lucide-react';
import sampleCandidates from '@/data/sample-candidates.json';

interface VotingLocation {
    name: string;
    address: string;
    city: string;
    hours: string;
}

export default function VotingInfo() {
    const [openSection, setOpenSection] = useState<string | null>('registration');
    const { votingInfo, elections } = sampleCandidates;

    const toggle = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    const sections = [
        {
            id: 'registration',
            icon: Vote,
            title: 'Voter Registration',
            content: (
                <div className="space-y-4">
                    <p className="text-cream/80">
                        You must be registered to vote at least 30 days before the election. Texas does not have same-day registration.
                    </p>
                    <div className="bg-navy-dark/50 rounded-lg p-4 border border-gold/15">
                        <h4 className="text-gold font-semibold text-sm mb-2">Upcoming Deadlines</h4>
                        {elections.map((election) => (
                            <div key={election.id} className="flex justify-between items-center py-2 border-b border-gold/10 last:border-0">
                                <span className="text-cream/70 text-sm">{election.name}</span>
                                <span className="text-white font-medium text-sm">
                                    Register by {new Date(election.registrationDeadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </span>
                            </div>
                        ))}
                    </div>
                    <a
                        href={votingInfo.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2 text-sm"
                    >
                        Register to Vote
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            ),
        },
        {
            id: 'early-voting',
            icon: CalendarDays,
            title: 'Early Voting',
            content: (
                <div className="space-y-4">
                    <div className="bg-navy-dark/50 rounded-lg p-4 border border-gold/15">
                        <h4 className="text-gold font-semibold text-sm mb-2">Early Voting Periods</h4>
                        {elections.map((election) => (
                            <div key={election.id} className="py-2 border-b border-gold/10 last:border-0">
                                <span className="text-white font-medium text-sm block">{election.name}</span>
                                <span className="text-cream/60 text-xs">
                                    {new Date(election.earlyVotingStart).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                    {' – '}
                                    {new Date(election.earlyVotingEnd).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </span>
                            </div>
                        ))}
                    </div>

                    <h4 className="text-gold font-semibold text-sm flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        Early Voting Locations
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {votingInfo.earlyVotingLocations.map((location: VotingLocation) => (
                            <div key={location.name} className="bg-navy-dark/50 rounded-lg p-3 border border-gold/15">
                                <p className="text-white font-medium text-sm">{location.name}</p>
                                <p className="text-cream/60 text-xs flex items-center gap-1 mt-1">
                                    <MapPin className="w-3 h-3 flex-shrink-0" />
                                    {location.address}, {location.city}
                                </p>
                                <p className="text-cream/50 text-xs flex items-center gap-1 mt-1">
                                    <Clock className="w-3 h-3 flex-shrink-0" />
                                    {location.hours}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
        {
            id: 'election-day',
            icon: Building,
            title: 'Election Day',
            content: (
                <div className="space-y-4">
                    <p className="text-cream/80">
                        On Election Day, you must vote at your assigned polling location based on your registered address.
                        Polls are open 7:00 AM – 7:00 PM.
                    </p>
                    <a
                        href={votingInfo.pollingLocationFinder}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2 text-sm"
                    >
                        Find Your Polling Location
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            ),
        },
        {
            id: 'absentee',
            icon: MailIcon,
            title: 'Absentee / Mail-In Voting',
            content: (
                <div className="space-y-4">
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                            <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                            <p className="text-cream/80 text-sm">{votingInfo.absenteeBallotInfo}</p>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="space-y-3">
            {sections.map((section) => {
                const Icon = section.icon;
                const isOpen = openSection === section.id;

                return (
                    <div
                        key={section.id}
                        className="bg-navy border border-gold/20 rounded-xl overflow-hidden"
                    >
                        <button
                            onClick={() => toggle(section.id)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-gold/5 transition-colors"
                            aria-expanded={isOpen}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gold/10 border border-gold/25 rounded-lg flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-gold" />
                                </div>
                                <span className="font-display font-semibold text-white">{section.title}</span>
                            </div>
                            <ChevronDown className={`w-5 h-5 text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-4 pb-5 pt-1 border-t border-gold/15">
                                        {section.content}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
