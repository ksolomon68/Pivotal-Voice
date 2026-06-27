'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
    BookOpen, Download, FileText, Video, ExternalLink,
    Users, Mic2, Shield, Vote, Newspaper, Star,
    ChevronRight, Megaphone, BarChart2, CheckCircle, X, Send, Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

type Audience = 'All' | 'Voters' | 'Candidates';

interface Resource {
    id: number;
    title: string;
    description: string;
    type: 'PDF' | 'Video' | 'Guide' | 'Template' | 'Checklist';
    category: string;
    audience: Audience[];
    featured?: boolean;
    downloads: number;
    tags: string[];
}

const categoryConfig = [
    {
        label: 'Voter Information',
        icon: Vote,
        description: 'Registration deadlines, polling locations, ballot breakdowns, and rights.',
        audience: 'Voters' as Audience,
    },
    {
        label: 'Candidate Toolkit',
        icon: Megaphone,
        description: 'Campaign planning, filing requirements, FEC compliance, and messaging guides.',
        audience: 'Candidates' as Audience,
    },
    {
        label: 'Media Relations',
        icon: Newspaper,
        description: 'Press release templates, interview prep, and newsroom contact strategies.',
        audience: 'All' as Audience,
    },
    {
        label: 'Public Speaking',
        icon: Mic2,
        description: 'Debate coaching, town hall facilitation, and speech structure frameworks.',
        audience: 'All' as Audience,
    },
    {
        label: 'Civic Engagement',
        icon: Users,
        description: 'Guides to attending public meetings, submitting comments, and organizing.',
        audience: 'Voters' as Audience,
    },
    {
        label: 'Government Transparency',
        icon: Shield,
        description: 'Open records requests, FOIA templates, and public accountability tools.',
        audience: 'Voters' as Audience,
    },
    {
        label: 'Campaign Strategy',
        icon: BarChart2,
        description: 'Polling interpretation, opposition research basics, and digital outreach.',
        audience: 'Candidates' as Audience,
    },
    {
        label: 'Crisis & Reputation',
        icon: CheckCircle,
        description: 'Rapid response playbooks, crisis messaging, and reputation management.',
        audience: 'Candidates' as Audience,
    },
];

const resources: Resource[] = [
    // --- VOTERS ---
    {
        id: 1,
        title: 'Ellis County Voter Guide 2026',
        description: 'Full breakdown of every race and proposition on the Ellis County ballot — candidates, positions, and what each measure means for your community.',
        type: 'PDF',
        category: 'Voter Information',
        audience: ['Voters'],
        featured: true,
        downloads: 342,
        tags: ['Ellis County', '2026 Election', 'Ballot Guide'],
    },
    {
        id: 2,
        title: 'Texas Voter Registration: Step-by-Step',
        description: 'Deadlines, ID requirements, address changes, and how to check your registration status online — everything a first-time voter needs.',
        type: 'Checklist',
        category: 'Voter Information',
        audience: ['Voters'],
        featured: true,
        downloads: 289,
        tags: ['Registration', 'Texas', 'First-Time Voters'],
    },
    {
        id: 3,
        title: 'Know Your Voter Rights in Texas',
        description: 'A plain-language summary of your legal rights at the polls: assistance provisions, ID rules, provisional ballots, and how to report problems.',
        type: 'PDF',
        category: 'Voter Information',
        audience: ['Voters'],
        downloads: 198,
        tags: ['Voter Rights', 'Texas Law', 'Election Day'],
    },
    {
        id: 4,
        title: 'How to Attend a County Commissioners Meeting',
        description: 'Step-by-step guide to participating in local government — agenda access, public comment sign-up, decorum rules, and follow-up strategies.',
        type: 'PDF',
        category: 'Civic Engagement',
        audience: ['Voters'],
        featured: true,
        downloads: 156,
        tags: ['Local Government', 'Public Comment', 'Ellis County'],
    },
    {
        id: 5,
        title: 'Open Records Request Template (Texas PIA)',
        description: 'A ready-to-send FOIA/PIA letter you can customize to request government documents from any Texas agency or county office.',
        type: 'Template',
        category: 'Government Transparency',
        audience: ['Voters'],
        downloads: 134,
        tags: ['FOIA', 'PIA', 'Open Records', 'Transparency'],
    },
    {
        id: 6,
        title: 'Evaluating Candidates: 10 Questions to Ask',
        description: 'A nonpartisan framework for researching candidates — voting records, endorsements, funding sources, and consistency of public statements.',
        type: 'Guide',
        category: 'Voter Information',
        audience: ['Voters'],
        downloads: 211,
        tags: ['Candidate Research', 'Nonpartisan', 'Due Diligence'],
    },
    {
        id: 7,
        title: 'Decoding a Local Government Budget',
        description: 'Learn how to read a county or city budget, identify spending priorities, and ask the right questions at budget hearings.',
        type: 'Guide',
        category: 'Government Transparency',
        audience: ['Voters'],
        downloads: 88,
        tags: ['Budget', 'Local Government', 'Accountability'],
    },
    {
        id: 8,
        title: 'Community Organizing 101',
        description: 'Practical tactics for building coalitions, running effective meetings, amplifying constituent voices, and sustaining momentum between elections.',
        type: 'Guide',
        category: 'Civic Engagement',
        audience: ['Voters'],
        downloads: 103,
        tags: ['Organizing', 'Coalition Building', 'Grassroots'],
    },

    // --- CANDIDATES ---
    {
        id: 9,
        title: 'Texas Candidate Filing Checklist',
        description: 'Every form, fee, deadline, and disclosure requirement for filing as a candidate in Texas — from county offices to state races.',
        type: 'Checklist',
        category: 'Candidate Toolkit',
        audience: ['Candidates'],
        featured: true,
        downloads: 267,
        tags: ['Filing', 'Texas SOS', 'Compliance', 'Deadlines'],
    },
    {
        id: 10,
        title: 'Campaign Messaging Framework',
        description: 'The Pivotal Voice blueprint for crafting a compelling campaign narrative: core message, contrast messaging, proof points, and audience segmentation.',
        type: 'Guide',
        category: 'Candidate Toolkit',
        audience: ['Candidates'],
        featured: true,
        downloads: 312,
        tags: ['Messaging', 'Narrative', 'Brand', 'PR Strategy'],
    },
    {
        id: 11,
        title: '90-Day Campaign Launch Plan',
        description: 'A week-by-week roadmap covering announcement strategy, coalition outreach, earned media, fundraising milestones, and digital presence.',
        type: 'PDF',
        category: 'Campaign Strategy',
        audience: ['Candidates'],
        featured: true,
        downloads: 241,
        tags: ['Launch', 'Campaign Plan', 'Timeline'],
    },
    {
        id: 12,
        title: 'Press Release Template Pack',
        description: 'Five plug-and-play templates: campaign announcement, endorsement, policy position, event, and rapid response. Includes headline formulas and AP style guide.',
        type: 'Template',
        category: 'Media Relations',
        audience: ['Candidates', 'All'],
        downloads: 445,
        tags: ['Press Release', 'Templates', 'Media', 'AP Style'],
    },
    {
        id: 13,
        title: 'Debate Preparation Workbook',
        description: 'A structured workbook for organizing policy positions, anticipating attacks, preparing rebuttals, and mastering the two-minute format.',
        type: 'Guide',
        category: 'Public Speaking',
        audience: ['Candidates'],
        downloads: 178,
        tags: ['Debate', 'Prep', 'Policy', 'Rebuttal'],
    },
    {
        id: 14,
        title: 'Texas Campaign Finance: TEC Compliance Guide',
        description: 'Plain-language overview of Texas Ethics Commission rules — contribution limits, reporting schedules, and common violations to avoid.',
        type: 'PDF',
        category: 'Candidate Toolkit',
        audience: ['Candidates'],
        downloads: 199,
        tags: ['TEC', 'Finance', 'Compliance', 'Texas Law'],
    },
    {
        id: 15,
        title: 'Digital Campaign Playbook',
        description: 'Strategy for Facebook, Instagram, X, and NextDoor — organic content calendars, paid ad frameworks, and community engagement tactics for local races.',
        type: 'Guide',
        category: 'Campaign Strategy',
        audience: ['Candidates'],
        downloads: 326,
        tags: ['Social Media', 'Digital', 'Advertising', 'Local Race'],
    },
    {
        id: 16,
        title: 'Crisis Communications Rapid Response Playbook',
        description: 'Step-by-step protocol for the first 24 hours of a crisis: who speaks, what you say, when you say it, and how to protect your reputation long-term.',
        type: 'PDF',
        category: 'Crisis & Reputation',
        audience: ['Candidates'],
        featured: true,
        downloads: 183,
        tags: ['Crisis', 'Rapid Response', 'Reputation', 'PR'],
    },
    {
        id: 17,
        title: 'Earned Media Strategy for Local Candidates',
        description: 'How to build relationships with local journalists, pitch stories, land op-eds, and maximize free coverage without a big ad budget.',
        type: 'Guide',
        category: 'Media Relations',
        audience: ['Candidates'],
        downloads: 259,
        tags: ['Earned Media', 'Press', 'Local News', 'Outreach'],
    },
    {
        id: 18,
        title: 'On-Camera Interview Masterclass',
        description: 'Video series covering body language, bridging techniques, staying on message, and handling hostile questions in TV and video interviews.',
        type: 'Video',
        category: 'Public Speaking',
        audience: ['Candidates', 'All'],
        downloads: 89,
        tags: ['Media Training', 'Video', 'On-Camera', 'Interview'],
    },
    {
        id: 19,
        title: 'Voter Contact Script Library',
        description: 'Tested door-knock, phone bank, and text banking scripts for introduction calls, persuasion conversations, and GOTV final pushes.',
        type: 'Template',
        category: 'Campaign Strategy',
        audience: ['Candidates'],
        downloads: 374,
        tags: ['GOTV', 'Door Knock', 'Phone Bank', 'Scripts'],
    },
    {
        id: 20,
        title: 'Public Speaking Masterclass',
        description: 'Video series on effective public speaking for local leaders — from town halls to televised forums.',
        type: 'Video',
        category: 'Public Speaking',
        audience: ['Candidates', 'All'],
        downloads: 142,
        tags: ['Public Speaking', 'Presentation', 'Leadership'],
    },
];

const typeIcon = (type: Resource['type']) => {
    if (type === 'Video') return Video;
    if (type === 'Template') return FileText;
    if (type === 'Checklist') return CheckCircle;
    return FileText;
};

const audienceBadge: Record<Audience, string> = {
    All: 'bg-cream/10 text-cream/80',
    Voters: 'bg-blue-500/20 text-blue-300',
    Candidates: 'bg-gold/20 text-gold',
};

function DownloadModal({ resource, onClose }: { resource: Resource; onClose: () => void }) {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setLoading(true);
        try {
            const res = await fetch('/api/send-resource', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    resourceTitle: resource.title,
                    resourceCategory: resource.category,
                    resourceType: resource.type,
                }),
            });
            if (!res.ok) throw new Error('Send failed');
            setSubmitted(true);
        } catch {
            alert('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2 }}
                className="relative bg-navy border border-gold/30 rounded-2xl p-8 w-full max-w-md shadow-2xl"
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-cream/40 hover:text-cream transition-colors">
                    <X className="w-5 h-5" />
                </button>

                {!submitted ? (
                    <>
                        <div className="w-12 h-12 bg-gold/10 border border-gold/30 rounded-xl flex items-center justify-center mb-4">
                            {resource.type === 'Video' ? (
                                <Play className="w-6 h-6 text-gold" />
                            ) : (
                                <Download className="w-6 h-6 text-gold" />
                            )}
                        </div>
                        <h3 className="font-display text-lg font-semibold text-white mb-1">
                            {resource.type === 'Video' ? 'Watch This Resource' : 'Download This Resource'}
                        </h3>
                        <p className="text-gold/70 text-xs font-medium uppercase tracking-wide mb-2">
                            {resource.category}
                        </p>
                        <p className="text-cream/60 text-sm mb-6">
                            {resource.title} — enter your email and we'll send it straight to your inbox.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                className="w-full bg-navy-dark/60 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder:text-cream/30 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="btn-primary w-full flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <span className="animate-pulse">Sending…</span>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        Send to My Inbox
                                    </>
                                )}
                            </button>
                        </form>
                        <p className="text-cream/30 text-xs text-center mt-4">
                            No spam. Unsubscribe anytime.
                        </p>
                    </>
                ) : (
                    <div className="text-center py-4">
                        <div className="w-14 h-14 bg-green-500/15 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-7 h-7 text-green-400" />
                        </div>
                        <h3 className="font-display text-lg font-semibold text-white mb-2">You're all set!</h3>
                        <p className="text-cream/60 text-sm mb-6">
                            <span className="text-gold font-medium">{resource.title}</span> is on its way to{' '}
                            <span className="text-white">{email}</span>.
                        </p>
                        <button onClick={onClose} className="btn-secondary text-sm">
                            Back to Resources
                        </button>
                    </div>
                )}
            </motion.div>
        </div>
    );
}

export default function ResourcesPage() {
    const [activeAudience, setActiveAudience] = useState<Audience>('All');
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

    const audienceFilters: Audience[] = ['All', 'Voters', 'Candidates'];

    const filteredResources = resources.filter((r) => {
        const audienceMatch =
            activeAudience === 'All' || r.audience.includes(activeAudience) || r.audience.includes('All');
        const categoryMatch = activeCategory === 'All' || r.category === activeCategory;
        return audienceMatch && categoryMatch;
    });

    const featuredResources = resources.filter((r) => r.featured);

    const filteredCategories =
        activeAudience === 'All'
            ? categoryConfig
            : categoryConfig.filter(
                  (c) => c.audience === activeAudience || c.audience === 'All'
              );

    return (
        <>
            <AnimatePresence>
                {selectedResource && (
                    <DownloadModal resource={selectedResource} onClose={() => setSelectedResource(null)} />
                )}
            </AnimatePresence>
            <Header />
            <main className="min-h-screen">
                {/* Page Header */}
                <section className="relative bg-gradient-to-b from-navy via-navy to-navy-dark border-b border-gold/15 py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.06)_0%,_transparent_60%)]" />
                    <div className="container-custom relative z-10">
                        <div className="text-center max-w-3xl mx-auto">
                            <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                <BookOpen className="w-8 h-8 text-gold" />
                            </div>
                            <h1 className="text-hero font-bold text-white mb-4">
                                Resource Library
                            </h1>
                            <p className="text-lg text-cream/60 mb-8">
                                Guides, templates, and tools built by political communications professionals —
                                for voters who want to engage and candidates who want to win.
                            </p>

                            {/* Audience Toggle */}
                            <div className="inline-flex bg-navy-dark/60 border border-gold/20 rounded-xl p-1 gap-1">
                                {audienceFilters.map((f) => (
                                    <button
                                        key={f}
                                        onClick={() => { setActiveAudience(f); setActiveCategory('All'); }}
                                        className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                                            activeAudience === f
                                                ? 'bg-gold text-navy'
                                                : 'text-cream/60 hover:text-white'
                                        }`}
                                    >
                                        {f === 'All' ? 'All Resources' : `For ${f}`}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Bar */}
                <section className="bg-navy-dark/80 border-b border-gold/10 py-6">
                    <div className="container-custom">
                        <div className="grid grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-2xl font-bold text-gold">{resources.length}+</div>
                                <div className="text-cream/50 text-sm mt-1">Free Resources</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gold">8</div>
                                <div className="text-cream/50 text-sm mt-1">Categories</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gold">
                                    {resources.reduce((s, r) => s + r.downloads, 0).toLocaleString()}+
                                </div>
                                <div className="text-cream/50 text-sm mt-1">Total Downloads</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Resources */}
                {activeAudience === 'All' && activeCategory === 'All' && (
                    <section className="section bg-navy-dark/30">
                        <div className="container-custom">
                            <div className="flex items-center gap-3 mb-8">
                                <Star className="w-5 h-5 text-gold" />
                                <h2 className="text-section font-bold text-white">Featured Resources</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {featuredResources.map((resource, index) => {
                                    const Icon = typeIcon(resource.type);
                                    return (
                                        <motion.div
                                            key={resource.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.08 }}
                                            className="card group cursor-pointer border-gold/20 hover:border-gold/50"
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="w-12 h-12 bg-gold/10 border border-gold/30 rounded-lg flex items-center justify-center">
                                                    <Icon className="w-6 h-6 text-gold" />
                                                </div>
                                                <div className="flex gap-1 flex-wrap justify-end">
                                                    {resource.audience.map((a) => (
                                                        <span key={a} className={`text-xs px-2 py-0.5 rounded-full font-medium ${audienceBadge[a]}`}>
                                                            {a}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <span className="text-gold/70 text-xs font-medium uppercase tracking-wide">
                                                {resource.category}
                                            </span>

                                            <h3 className="font-display text-base font-semibold text-white mt-1 mb-2 group-hover:text-gold transition-colors leading-snug">
                                                {resource.title}
                                            </h3>

                                            <p className="text-cream/60 text-sm mb-4 line-clamp-2">
                                                {resource.description}
                                            </p>

                                            <div className="flex flex-wrap gap-1 mb-4">
                                                {resource.tags.slice(0, 3).map((tag) => (
                                                    <span key={tag} className="text-xs bg-navy-dark/80 text-cream/50 px-2 py-0.5 rounded">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex items-center justify-between pt-3 border-t border-gold/15">
                                                <span className="text-cream/40 text-xs">
                                                    {resource.downloads.toLocaleString()} downloads
                                                </span>
                                                <button
                                                    onClick={() => setSelectedResource(resource)}
                                                    className="btn-secondary text-xs flex items-center gap-1.5 py-1.5 px-3"
                                                >
                                                    <Download className="w-3.5 h-3.5" />
                                                    {resource.type === 'Video' ? 'Watch' : 'Download'}
                                                </button>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}

                {/* Browse by Category */}
                <section className="section bg-navy-dark/50">
                    <div className="container-custom">
                        <h2 className="text-section font-bold text-white mb-8">
                            Browse by Category
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                            <motion.button
                                key="all"
                                onClick={() => setActiveCategory('All')}
                                className={`card text-left group transition-all ${
                                    activeCategory === 'All' ? 'border-gold/60 bg-gold/5' : ''
                                }`}
                            >
                                <h3 className={`font-semibold transition-colors ${activeCategory === 'All' ? 'text-gold' : 'text-white group-hover:text-gold'}`}>
                                    All Categories
                                </h3>
                                <p className="text-cream/40 text-xs mt-1">{filteredResources.length} resources</p>
                            </motion.button>

                            {filteredCategories.map((cat, index) => {
                                const CatIcon = cat.icon;
                                const count = resources.filter(
                                    (r) =>
                                        r.category === cat.label &&
                                        (activeAudience === 'All' || r.audience.includes(activeAudience) || r.audience.includes('All'))
                                ).length;
                                return (
                                    <motion.button
                                        key={cat.label}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.04 }}
                                        onClick={() => setActiveCategory(cat.label)}
                                        className={`card text-left group transition-all ${
                                            activeCategory === cat.label ? 'border-gold/60 bg-gold/5' : ''
                                        }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                                <CatIcon className="w-4 h-4 text-gold" />
                                            </div>
                                            <div>
                                                <h3 className={`font-semibold text-sm transition-colors ${activeCategory === cat.label ? 'text-gold' : 'text-white group-hover:text-gold'}`}>
                                                    {cat.label}
                                                </h3>
                                                <p className="text-cream/40 text-xs mt-0.5">{count} resources</p>
                                            </div>
                                        </div>
                                        <p className="text-cream/50 text-xs mt-3 leading-relaxed">
                                            {cat.description}
                                        </p>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Resource Grid */}
                <section className="section">
                    <div className="container-custom">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-section font-bold text-white">
                                {activeCategory === 'All' ? 'All Resources' : activeCategory}
                            </h2>
                            <span className="text-cream/40 text-sm">{filteredResources.length} results</span>
                        </div>

                        {filteredResources.length === 0 ? (
                            <div className="text-center py-16 text-cream/40">
                                No resources found for this filter combination.
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredResources.map((resource, index) => {
                                    const Icon = typeIcon(resource.type);
                                    return (
                                        <motion.div
                                            key={resource.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
                                            className="card group cursor-pointer hover:border-gold/40"
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="w-10 h-10 bg-gold/10 border border-gold/20 rounded-lg flex items-center justify-center">
                                                    <Icon className="w-5 h-5 text-gold" />
                                                </div>
                                                <div className="flex gap-1 flex-wrap justify-end">
                                                    {resource.audience.filter(a => a !== 'All').map((a) => (
                                                        <span key={a} className={`text-xs px-2 py-0.5 rounded-full font-medium ${audienceBadge[a]}`}>
                                                            {a}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <span className="text-gold/60 text-xs font-medium uppercase tracking-wide">
                                                {resource.category}
                                            </span>

                                            <h3 className="font-display text-base font-semibold text-white mt-1 mb-2 group-hover:text-gold transition-colors leading-snug">
                                                {resource.title}
                                            </h3>

                                            <p className="text-cream/60 text-sm mb-4 line-clamp-3">
                                                {resource.description}
                                            </p>

                                            <div className="flex flex-wrap gap-1 mb-4">
                                                {resource.tags.slice(0, 3).map((tag) => (
                                                    <span key={tag} className="text-xs bg-navy-dark/80 text-cream/40 px-2 py-0.5 rounded">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex items-center justify-between pt-3 border-t border-gold/10">
                                                <span className="text-cream/40 text-xs">
                                                    {resource.downloads.toLocaleString()} downloads
                                                </span>
                                                <button
                                                    onClick={() => setSelectedResource(resource)}
                                                    className="btn-secondary text-xs flex items-center gap-1.5 py-1.5 px-3"
                                                >
                                                    <Download className="w-3.5 h-3.5" />
                                                    {resource.type === 'Video' ? 'Watch' : 'Download'}
                                                </button>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </section>

                {/* PR Services CTA */}
                <section className="section bg-navy-dark/60 border-y border-gold/10">
                    <div className="container-custom">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="badge-gold text-xs mb-4 inline-block">Pivotal Voice Services</span>
                                <h2 className="text-section font-bold text-white mb-4">
                                    Need More Than a Template?
                                </h2>
                                <p className="text-cream/70 mb-6">
                                    These resources are a starting point. Pivotal Voice's communications professionals
                                    work directly with candidates and civic leaders — building custom messaging strategy,
                                    managing press relations, and guiding you through every stage of your campaign or issue.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        'Custom campaign messaging & brand development',
                                        'Full-service media relations & press outreach',
                                        'Crisis communications & reputation management',
                                        'Debate prep & executive media coaching',
                                        'Digital strategy & content production',
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-cream/80 text-sm">
                                            <ChevronRight className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex gap-4">
                                    <button className="btn-primary">Schedule a Consultation</button>
                                    <button className="btn-secondary flex items-center gap-2">
                                        <ExternalLink className="w-4 h-4" />
                                        View Services
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: 'Campaigns Supported', value: '50+' },
                                    { label: 'Media Placements', value: '300+' },
                                    { label: 'Years in Ellis County', value: '12+' },
                                    { label: 'Candidate Win Rate', value: '74%' },
                                ].map((stat) => (
                                    <div key={stat.label} className="card text-center">
                                        <div className="text-3xl font-bold text-gold mb-1">{stat.value}</div>
                                        <div className="text-cream/50 text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Submit Resource */}
                <section className="bg-navy py-16">
                    <div className="container-custom">
                        <div className="text-center max-w-2xl mx-auto">
                            <h2 className="text-section font-bold text-white mb-4">
                                Share a Resource
                            </h2>
                            <p className="text-cream/70 mb-6">
                                Have a guide, template, or tool that would help Ellis County voters or candidates?
                                Submit it for review and we'll add it to the library.
                            </p>
                            <button className="btn-primary">Submit a Resource</button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
