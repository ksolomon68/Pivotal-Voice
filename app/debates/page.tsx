'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Video, Users, MessageSquare, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const liveDebate = {
    title: 'Ellis County Judge Candidate Debate',
    date: 'February 15, 2026',
    time: '7:00 PM CT',
    status: 'upcoming',
    participants: [
        { name: 'Todd Little', party: 'Republican', incumbent: true },
        { name: 'Jane Doe', party: 'Democrat', incumbent: false },
    ],
    viewerCount: 0,
};

const pastDebates = [
    {
        id: 1,
        title: 'Mayoral Debate - Waxahachie',
        date: 'January 28, 2026',
        participants: 3,
        views: 2453,
        duration: '1:45:30',
    },
    {
        id: 2,
        title: 'School Board Candidate Forum',
        date: 'January 15, 2026',
        participants: 5,
        views: 1832,
        duration: '2:10:15',
    },
];

export default function DebatesPage() {
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
                                <Video className="w-8 h-8 text-gold" />
                            </div>
                            <h1 className="text-hero font-bold text-white mb-4">
                                Live Debate Platform
                            </h1>
                            <p className="text-lg text-cream/60">
                                Watch live political debates, submit questions, and engage with candidates in real-time.
                                Access our complete archive of past debates and forums.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Live/Upcoming Debate */}
                <section className="section">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-alert-red rounded-full animate-pulse"></div>
                                    <span className="text-alert-red font-semibold">Upcoming Debate</span>
                                </div>
                            </div>

                            <div className="card">
                                {/* Video Player Placeholder */}
                                <div className="aspect-video bg-navy-dark rounded-lg mb-6 flex items-center justify-center border-2 border-gold/30">
                                    <div className="text-center">
                                        <Video className="w-16 h-16 text-gold/50 mx-auto mb-4" />
                                        <p className="text-white font-semibold mb-2">Debate starts in 6 days</p>
                                        <p className="text-cream/70 text-sm">
                                            The live stream will appear here when the debate begins
                                        </p>
                                    </div>
                                </div>

                                {/* Debate Info */}
                                <div className="grid md:grid-cols-3 gap-6">
                                    {/* Main Info */}
                                    <div className="md:col-span-2">
                                        <h2 className="text-2xl font-display font-bold text-white mb-4">
                                            {liveDebate.title}
                                        </h2>

                                        <div className="flex flex-wrap gap-4 mb-6 text-cream/80">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-gold" />
                                                <span>{liveDebate.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-gold" />
                                                <span>{liveDebate.time}</span>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <h3 className="font-semibold text-white flex items-center gap-2">
                                                <Users className="w-5 h-5 text-gold" />
                                                Participating Candidates
                                            </h3>
                                            {liveDebate.participants.map((participant, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center justify-between bg-navy-dark/50 rounded-lg p-3"
                                                >
                                                    <div>
                                                        <p className="text-white font-medium">
                                                            {participant.name}
                                                            {participant.incumbent && (
                                                                <span className="ml-2 text-xs text-gold">(Incumbent)</span>
                                                            )}
                                                        </p>
                                                        <p className="text-cream/60 text-sm">{participant.party}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Q&A Section */}
                                    <div className="bg-navy-dark/50 rounded-lg p-4">
                                        <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                                            <MessageSquare className="w-5 h-5 text-gold" />
                                            Submit Questions
                                        </h3>
                                        <p className="text-cream/70 text-sm mb-4">
                                            Questions will be moderated and featured during the debate.
                                        </p>
                                        <textarea
                                            className="textarea mb-3"
                                            rows={3}
                                            placeholder="Your question for the candidates..."
                                        ></textarea>
                                        <button className="btn-primary w-full text-sm">
                                            Submit Question
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Debate Archive */}
                <section className="section bg-navy-dark/50">
                    <div className="container-custom">
                        <h2 className="text-section font-bold text-white mb-8 text-center">
                            Debate Archive
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {pastDebates.map((debate, index) => (
                                <motion.div
                                    key={debate.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="card group cursor-pointer"
                                >
                                    {/* Video Thumbnail */}
                                    <div className="aspect-video bg-navy-dark rounded-lg mb-4 flex items-center justify-center border border-gold/30 group-hover:border-gold transition-colors">
                                        <div className="w-12 h-12 bg-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-gold/50">
                                            <Video className="w-6 h-6 text-gold" />
                                        </div>
                                    </div>

                                    {/* Debate Info */}
                                    <h3 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-gold transition-colors">
                                        {debate.title}
                                    </h3>

                                    <div className="flex items-center gap-4 text-cream/70 text-sm mb-4">
                                        <span>{debate.date}</span>
                                        <span>•</span>
                                        <span>{debate.duration}</span>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-gold/20">
                                        <div className="text-xs text-cream/60">
                                            {debate.participants} participants • {debate.views.toLocaleString()} views
                                        </div>
                                        <button className="btn-secondary text-sm">
                                            Watch
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <button className="btn-primary">
                                View All Past Debates
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
