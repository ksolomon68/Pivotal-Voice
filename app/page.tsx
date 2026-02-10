'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Calendar, Podcast, Users, MessageSquare, BookOpen, TrendingUp, Mic, Handshake, Gavel, Scale, Book } from 'lucide-react';
import { motion } from 'framer-motion';
import NewsletterSignup from '@/components/crm/NewsletterSignup';

const features = [
    {
        icon: Calendar,
        title: 'Political Events Calendar',
        description: 'Never miss a debate, town hall, or candidate event in Ellis County',
        href: '/calendar',
        color: 'gold',
    },
    {
        icon: Podcast,
        title: 'The Pivotal Voice Podcast',
        description: 'Honest conversations with local leaders and change-makers',
        href: '/podcast',
        color: 'blue',
    },
    {
        icon: Users,
        title: 'Candidate Tracker',
        description: 'Compare candidates, explore positions, and track every race in Ellis County',
        href: '/candidates',
        color: 'green',
    },
    {
        icon: MessageSquare,
        title: 'Community Forum',
        description: 'Engage in civil discussions on local issues that matter',
        href: '/forum',
        color: 'purple',
    },
];

const missionPillars = [
    {
        icon: Handshake,
        title: 'Honest Conversations',
        description: 'Foster authentic dialogue between leaders and communities',
    },
    {
        icon: Gavel,
        title: 'Accountability',
        description: 'Hold leaders accountable through transparency and engagement',
    },
    {
        icon: Scale,
        title: 'Civil Discussion',
        description: 'Create space for respectful debate on critical issues',
    },
    {
        icon: Book,
        title: 'Government Transparency',
        description: 'Make government data accessible and understandable',
    },
];

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative overflow-hidden grain-overlay py-20 md:py-32">
                    <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-navy-dark opacity-50"></div>

                    <div className="container-custom relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-8">
                                <Mic className="w-4 h-4 text-gold" />
                                <span className="text-gold text-sm font-semibold">
                                    Amplifying Leaders, Informing Communities
                                </span>
                            </div>

                            <h1 className="text-hero font-bold text-white mb-6">
                                Transform Your Leadership Voice
                            </h1>

                            <p className="text-xl md:text-2xl text-cream/90 mb-8 max-w-3xl mx-auto">
                                Strategic PR services and authentic dialogue platforms for Ellis County leaders.
                                Build trust, command headlines, and engage your community with purpose.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/services" className="btn-primary text-lg">
                                    Explore Services
                                </Link>
                                <Link href="/podcast" className="btn-secondary text-lg">
                                    Watch Podcast
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-20 left-10 w-32 h-32 bg-gold/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl"></div>
                </section>

                {/* Calendar Preview Section */}
                <section className="section bg-navy">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <Calendar className="w-12 h-12 text-gold mx-auto mb-4" />
                            <h2 className="text-section font-bold text-white mb-4">
                                Never Miss a Political Event
                            </h2>
                            <p className="text-lg text-cream/80 max-w-2xl mx-auto">
                                Stay informed with our comprehensive calendar of debates, town halls, and candidate events
                                across Ellis County. Filter by topic, party, or event type to find what matters to you.
                            </p>
                        </div>

                        <div className="text-center">
                            <Link href="/calendar" className="btn-primary">
                                View Full Calendar
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="section">
                    <div className="container-custom">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Link href={feature.href} className="card block h-full">
                                            <Icon className="w-10 h-10 text-gold mb-4" />
                                            <h3 className="text-card font-semibold text-white mb-3">
                                                {feature.title}
                                            </h3>
                                            <p className="text-cream/80">
                                                {feature.description}
                                            </p>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Mission Statement */}
                <section className="section bg-navy">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-section font-bold text-white mb-6">
                                Our Mission
                            </h2>
                            <p className="text-xl text-cream/90 max-w-3xl mx-auto leading-relaxed">
                                A non-partisan platform dedicated to amplifying leaders, informing communities,
                                and creating space for meaningful dialogue on the issues that shape Ellis County's future.
                            </p>
                        </div>

                        {/* Mission Pillars */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {missionPillars.map((pillar, index) => {
                                const Icon = pillar.icon;
                                return (
                                    <motion.div
                                        key={pillar.title}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="text-center"
                                    >
                                        <div className="w-16 h-16 bg-gold/10 border-2 border-gold/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Icon className="w-8 h-8 text-gold" />
                                        </div>
                                        <h3 className="font-display text-lg font-semibold text-white mb-2">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-cream/70 text-sm">
                                            {pillar.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="section grain-overlay">
                    <div className="container-custom">
                        <div className="max-w-2xl mx-auto text-center mb-8">
                            <h2 className="text-section font-bold text-white mb-3">
                                Stay Informed, Stay Engaged
                            </h2>
                            <p className="text-cream/60">
                                Get the latest Ellis County civic updates, meeting agendas, and community events delivered to your inbox.
                            </p>
                        </div>
                        <div className="max-w-xl mx-auto">
                            <NewsletterSignup variant="homepage" optInMethod="homepage" />
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section grain-overlay">
                    <div className="container-custom">
                        <div className="bg-gradient-to-br from-navy to-navy-dark border border-gold/30 rounded-2xl p-12 text-center">
                            <h2 className="text-section font-bold text-white mb-4">
                                Ready to Transform Your Leadership Voice?
                            </h2>
                            <p className="text-lg text-cream/80 mb-8 max-w-2xl mx-auto">
                                Book a consultation with our strategic communication experts and learn how
                                to command attention, build trust, and lead with confidence.
                            </p>
                            <Link href="/services#book" className="btn-primary text-lg">
                                Book Your Consultation
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
