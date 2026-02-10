'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import EpisodeCard from '@/components/podcast/EpisodeCard';
import MissionPillars from '@/components/podcast/MissionPillars';
import samplePodcasts from '@/data/sample-podcasts.json';
import { Podcast, Play, Rss, Apple, Music } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PodcastPage() {
    const episodes = samplePodcasts.episodes;
    const featuredEpisode = episodes.find(ep => ep.featured) || episodes[0];
    const regularEpisodes = episodes.filter(ep => !ep.featured);

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

                {/* Featured Episode */}
                <section className="section">
                    <div className="container-custom">
                        <h2 className="text-section font-bold text-white mb-8 text-center">
                            Latest Episode
                        </h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="card max-w-4xl mx-auto"
                        >
                            <EpisodeCard episode={featuredEpisode} featured={true} />

                            {/* Optional: Add audio player here */}
                            <div className="mt-6 p-4 bg-navy-dark/50 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <button className="w-12 h-12 bg-gold rounded-full flex items-center justify-center hover:bg-gold-dark transition-colors">
                                        <Play className="w-6 h-6 text-navy ml-1" fill="currentColor" />
                                    </button>
                                    <div className="flex-1">
                                        <div className="h-2 bg-navy-dark rounded-full overflow-hidden">
                                            <div className="h-full w-1/3 bg-gold rounded-full"></div>
                                        </div>
                                    </div>
                                    <span className="text-cream/70 text-sm">
                                        15:30 / {featuredEpisode.duration}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Episodes Grid */}
                <section className="section bg-navy-dark/50">
                    <div className="container-custom">
                        <h2 className="text-section font-bold text-white mb-8 text-center">
                            All Episodes
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {regularEpisodes.map((episode, index) => (
                                <motion.div
                                    key={episode.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <EpisodeCard episode={episode} />
                                </motion.div>
                            ))}
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
