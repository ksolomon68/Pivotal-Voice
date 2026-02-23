'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/layout/ScrollReveal';
import AnimatedCounter from '@/components/layout/AnimatedCounter';
import ParticleBackground from '@/components/layout/ParticleBackground';
import { Calendar, Podcast, Users, MessageSquare, Handshake, Gavel, Scale, Book, ChevronDown, ArrowRight, Mic, Vote, Landmark, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';
import NewsletterSignup from '@/components/crm/NewsletterSignup';

const features = [
    {
        icon: Calendar,
        title: 'Political Events Calendar',
        description: 'Never miss a debate, town hall, or candidate event across Ellis County. Filter by topic, party, or city.',
        href: '/calendar',
    },
    {
        icon: Podcast,
        title: 'The Pivotal Voice Podcast',
        description: 'Honest conversations with local leaders and change-makers shaping our community.',
        href: '/podcast',
    },
    {
        icon: Users,
        title: 'Candidate Tracker',
        description: 'Compare candidates, explore positions, and track every race in Ellis County elections.',
        href: '/candidates',
    },
    {
        icon: MessageSquare,
        title: 'Community Forum',
        description: 'Engage in civil discussions on the local issues that matter most to your neighborhood.',
        href: '/forum',
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

const stats = [
    { icon: MessageSquare, label: 'Active Discussions', value: 142 },
    { icon: Landmark, label: 'Upcoming Meetings', value: 28 },
    { icon: Vote, label: 'Days to Next Election', value: 67 },
    { icon: Users, label: 'Community Members', value: 3200 },
];

export default function HomePage() {
    return (
        <>
            <Header />
            <main id="main-content">
                {/* ════════════════════════════════════════
                    HERO SECTION — Full viewport height
                   ════════════════════════════════════════ */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 animated-gradient" />

                    {/* Subtle radial spotlight */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(45,74,124,0.3)_0%,_transparent_70%)]" />

                    {/* Floating particles */}
                    <ParticleBackground particleCount={35} speed={0.25} />

                    {/* Grain texture */}
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`
                    }} />

                    {/* Hero Content */}
                    <div className="container-custom relative z-10 text-center py-20">
                        {/* Floating Logo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                            className="mb-8"
                        >
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="relative w-36 h-36 md:w-48 md:h-48 mx-auto"
                            >
                                {/* Rotating glow halo */}
                                <div className="absolute inset-[-12px] rounded-full animate-spin-slow opacity-40"
                                    style={{
                                        background: 'conic-gradient(from 0deg, transparent, rgba(212,175,55,0.3), transparent, rgba(212,175,55,0.15), transparent)',
                                    }}
                                />
                                <Image
                                    src="/images/logo.png"
                                    alt="Pivotal Voice Logo"
                                    fill
                                    className="object-contain drop-shadow-2xl rounded-full"
                                    priority
                                />
                            </motion.div>
                        </motion.div>

                        {/* Tagline badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="inline-flex items-center gap-2 px-5 py-2 bg-gold/10 border border-gold/25 rounded-pill mb-8 backdrop-blur-sm"
                        >
                            <Mic className="w-4 h-4 text-gold" />
                            <span className="text-gold text-sm font-display font-medium tracking-wide">
                                Amplifying Leaders, Informing Communities
                            </span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-hero font-bold text-white mb-6 max-w-4xl mx-auto leading-[1.05]"
                        >
                            Your Voice. Your County.{' '}
                            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                                Your Future.
                            </span>
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.7 }}
                            className="text-base sm:text-xl md:text-2xl text-cream/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
                        >
                            The comprehensive civic engagement platform connecting Ellis County residents with democracy.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
                        >
                            <Link href="/candidates" className="btn-primary text-lg !px-10 !py-4 animate-glow-pulse">
                                GET STARTED
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                            className="grid grid-cols-1 sm:flex sm:flex-wrap gap-3 justify-center"
                        >
                            <Link href="/candidates" className="btn-ghost text-sm !w-auto">
                                <Users className="w-4 h-4" /> View Candidates
                            </Link>
                            <Link href="/calendar" className="btn-ghost text-sm !w-auto">
                                <Calendar className="w-4 h-4" /> Upcoming Events
                            </Link>
                            <Link href="/forum" className="btn-ghost text-sm !w-auto">
                                <MessageSquare className="w-4 h-4" /> Join Discussion
                            </Link>
                        </motion.div>

                        {/* Scroll indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="absolute bottom-8 left-1/2 -translate-x-1/2"
                        >
                            <ChevronDown className="w-6 h-6 text-gold/50 animate-bounce-arrow" />
                        </motion.div>
                    </div>
                </section>

                {/* ════════════════════════════════════════
                    STATS BAR — Glass-morphism counters
                   ════════════════════════════════════════ */}
                <section className="relative -mt-16 z-20 pb-8">
                    <div className="container-custom">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <ScrollReveal key={stat.label} delay={index * 0.1}>
                                        <div className="glass-card text-center !p-4 sm:!p-6 group">
                                            <Icon className="w-6 h-6 text-gold/60 mx-auto mb-2 group-hover:text-gold transition-colors duration-300" />
                                            <div className="text-2xl md:text-4xl font-display font-bold text-white mb-1">
                                                <AnimatedCounter end={stat.value} />
                                            </div>
                                            <p className="text-cream/50 text-sm font-medium">{stat.label}</p>
                                        </div>
                                    </ScrollReveal>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ════════════════════════════════════════
                    FEATURES GRID — Premium card hover
                   ════════════════════════════════════════ */}
                <section className="section">
                    <div className="container-custom">
                        <ScrollReveal>
                            <div className="section-header">
                                <h2 className="text-section font-bold text-white mb-4">
                                    Everything You Need to Stay Engaged
                                </h2>
                                <p className="text-cream/60 max-w-2xl mx-auto text-lg">
                                    One platform. Every tool. Complete civic engagement for Ellis County.
                                </p>
                            </div>
                        </ScrollReveal>

                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature) => {
                                const Icon = feature.icon;
                                return (
                                    <StaggerItem key={feature.title}>
                                        <Link href={feature.href} className="card block h-full group">
                                            <div className="flex items-start gap-5">
                                                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300">
                                                    <Icon className="w-7 h-7 text-gold" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-display font-semibold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                                                        {feature.title}
                                                    </h3>
                                                    <p className="text-cream/60 text-base leading-relaxed mb-4">
                                                        {feature.description}
                                                    </p>
                                                    <span className="inline-flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all duration-300">
                                                        Explore <ArrowRight className="w-4 h-4" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </StaggerItem>
                                );
                            })}
                        </StaggerContainer>
                    </div>
                </section>

                {/* ════════════════════════════════════════
                    CALENDAR PREVIEW — Alternating section
                   ════════════════════════════════════════ */}
                <section className="section bg-navy relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/50 to-transparent" />
                    <div className="container-custom relative z-10">
                        <ScrollReveal>
                            <div className="section-header">
                                <Calendar className="w-10 h-10 text-gold mx-auto mb-4" />
                                <h2 className="text-section font-bold text-white mb-4">
                                    Never Miss a Political Event
                                </h2>
                                <p className="text-lg text-cream/60 max-w-2xl mx-auto">
                                    Stay informed with our comprehensive calendar of debates, town halls, and candidate events
                                    across Ellis County. Filter by topic, party, or event type.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="text-center">
                                <Link href="/calendar" className="btn-primary">
                                    View Full Calendar <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ════════════════════════════════════════
                    MISSION — Cream/white alternating bg
                   ════════════════════════════════════════ */}
                <section className="section relative overflow-hidden">
                    <div className="container-custom">
                        <ScrollReveal>
                            <div className="section-header">
                                <h2 className="text-section font-bold text-white mb-6">
                                    Our Mission
                                </h2>
                                <p className="text-xl text-cream/70 max-w-3xl mx-auto leading-relaxed">
                                    A non-partisan platform dedicated to amplifying leaders, informing communities,
                                    and creating space for meaningful dialogue on the issues that shape Ellis County&apos;s future.
                                </p>
                            </div>
                        </ScrollReveal>

                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                            {missionPillars.map((pillar) => {
                                const Icon = pillar.icon;
                                return (
                                    <StaggerItem key={pillar.title}>
                                        <div className="text-center group">
                                            <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 group-hover:border-gold/40 group-hover:-translate-y-2 transition-all duration-300">
                                                <Icon className="w-8 h-8 text-gold" />
                                            </div>
                                            <h3 className="font-display text-lg font-semibold text-white mb-2">
                                                {pillar.title}
                                            </h3>
                                            <p className="text-cream/50 text-sm leading-relaxed">
                                                {pillar.description}
                                            </p>
                                        </div>
                                    </StaggerItem>
                                );
                            })}
                        </StaggerContainer>
                    </div>
                </section>

                {/* ════════════════════════════════════════
                    NEWSLETTER — Navy background
                   ════════════════════════════════════════ */}
                <section className="section bg-navy relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy" />
                    <div className="container-custom relative z-10">
                        <ScrollReveal>
                            <div className="section-header">
                                <Megaphone className="w-10 h-10 text-gold mx-auto mb-4" />
                                <h2 className="text-section font-bold text-white mb-3">
                                    Stay Informed, Stay Engaged
                                </h2>
                                <p className="text-cream/50 max-w-xl mx-auto">
                                    Get the latest Ellis County civic updates, meeting agendas, and community events delivered to your inbox.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.15}>
                            <div className="max-w-xl mx-auto">
                                <NewsletterSignup variant="homepage" optInMethod="homepage" />
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ════════════════════════════════════════
                    CTA SECTION — Premium card
                   ════════════════════════════════════════ */}
                <section className="section">
                    <div className="container-custom">
                        <ScrollReveal>
                            <div className="relative bg-navy border border-gold/15 rounded-card p-6 sm:p-10 md:p-16 text-center overflow-hidden">
                                {/* Decorative gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-navy-light/10" />
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-navy-light/10 rounded-full blur-3xl" />

                                <div className="relative z-10">
                                    <h2 className="text-section font-bold text-white mb-4">
                                        Ready to Transform Your Leadership Voice?
                                    </h2>
                                    <p className="text-lg text-cream/60 mb-8 max-w-2xl mx-auto">
                                        Book a consultation with our strategic communication experts and learn how
                                        to command attention, build trust, and lead with confidence.
                                    </p>
                                    <Link href="/services#book" className="btn-primary text-lg !px-10 !py-4">
                                        Book Your Consultation <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
