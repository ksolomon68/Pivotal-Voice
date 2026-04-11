'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MissionPillars from '@/components/podcast/MissionPillars';
import { Podcast, Rss, Apple, Music } from 'lucide-react';

export default function PodcastPage() {

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
                                <Podcast className="w-8 h-8 text-gold" />
                            </div>
                            <h1 className="text-hero font-bold text-white mb-4">
                                The Pivotal Voice Podcast
                            </h1>
                            <p className="text-lg text-cream/60">
                                Honest conversations with Ellis County leaders and change-makers.
                                Real conversations. Local leadership. Informed voters.
                            </p>

                            {/* Subscribe Buttons */}
                            <div className="flex flex-wrap justify-center gap-3 mt-8">
                                <button className="btn-primary text-sm flex items-center gap-2">
                                    <Apple className="w-4 h-4" />
                                    Apple Podcasts
                                </button>
                                <button className="btn-primary text-sm flex items-center gap-2">
                                    <Music className="w-4 h-4" />
                                    Spotify
                                </button>
                                <button className="btn-secondary text-sm flex items-center gap-2">
                                    <Rss className="w-4 h-4" />
                                    RSS Feed
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* No Episodes Yet */}
                <section className="section">
                    <div className="container-custom">
                        <div className="max-w-2xl mx-auto text-center py-16">
                            <div className="w-20 h-20 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Podcast className="w-10 h-10 text-gold/50" />
                            </div>
                            <h2 className="text-2xl font-display font-bold text-white mb-3">
                                Episodes Coming Soon
                            </h2>
                            <p className="text-cream/60">
                                The Pivotal Voice Podcast is launching soon. Subscribe below to be notified when the first episode drops.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mission Pillars */}
                <section className="section">
                    <div className="container-custom">
                        <MissionPillars />
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-navy py-16">          <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-section font-bold text-white mb-4">
                            Never Miss an Episode
                        </h2>
                        <p className="text-cream/80 mb-6">
                            Subscribe to The Pivotal Voice Podcast and get notified when new episodes are released.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="input flex-1"
                            />
                            <button type="submit" className="btn-primary">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
