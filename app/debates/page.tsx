'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Video, Calendar } from 'lucide-react';


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

                {/* No Debates Scheduled */}
                <section className="section">
                    <div className="container-custom">
                        <div className="max-w-2xl mx-auto text-center py-16">
                            <div className="w-20 h-20 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Video className="w-10 h-10 text-gold/50" />
                            </div>
                            <h2 className="text-2xl font-display font-bold text-white mb-3">
                                No Debates Scheduled
                            </h2>
                            <p className="text-cream/60 mb-6">
                                No live debates or forums are currently scheduled. Check back closer to election season for upcoming debate announcements.
                            </p>
                            <a href="/calendar" className="btn-primary inline-flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                View Events Calendar
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
