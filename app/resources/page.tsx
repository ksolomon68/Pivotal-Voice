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
import Link from 'next/link';
import { resources, type Resource, type Audience } from '@/lib/resources';

const categoryConfig = [
    { label: 'Voter Information', icon: Vote, description: 'Registration deadlines, polling locations, ballot breakdowns, and rights.', audience: 'Voters' as Audience },
    { label: 'Candidate Toolkit', icon: Megaphone, description: 'Campaign planning, filing requirements, FEC compliance, and messaging guides.', audience: 'Candidates' as Audience },
    { label: 'Media Relations', icon: Newspaper, description: 'Press release templates, interview prep, and newsroom contact strategies.', audience: 'All' as Audience },
    { label: 'Public Speaking', icon: Mic2, description: 'Debate coaching, town hall facilitation, and speech structure frameworks.', audience: 'All' as Audience },
    { label: 'Civic Engagement', icon: Users, description: 'Guides to attending public meetings, submitting comments, and organizing.', audience: 'Voters' as Audience },
    { label: 'Government Transparency', icon: Shield, description: 'Open records requests, FOIA templates, and public accountability tools.', audience: 'Voters' as Audience },
    { label: 'Campaign Strategy', icon: BarChart2, description: 'Polling interpretation, opposition research basics, and digital outreach.', audience: 'Candidates' as Audience },
    { label: 'Crisis & Reputation', icon: CheckCircle, description: 'Rapid response playbooks, crisis messaging, and reputation management.', audience: 'Candidates' as Audience },
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
                    resourceSlug: resource.slug,
                }),
            });
            if (!res.ok) {
                const body = await res.json().catch(() => ({}));
                console.error('send-resource error status:', res.status, 'body:', body);
                throw new Error(body.error || body.detail?.message || 'Send failed');
            }
            setSubmitted(true);
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : 'Unknown error';
            alert(`Something went wrong: ${msg}`);
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
                            {resource.type === 'Video' ? <Play className="w-6 h-6 text-gold" /> : <Download className="w-6 h-6 text-gold" />}
                        </div>
                        <h3 className="font-display text-lg font-semibold text-white mb-1">
                            {resource.type === 'Video' ? 'Watch This Resource' : 'Get This Resource'}
                        </h3>
                        <p className="text-gold/70 text-xs font-medium uppercase tracking-wide mb-2">{resource.category}</p>
                        <p className="text-cream/60 text-sm mb-6">
                            {resource.title} — enter your email and we'll send a direct link straight to your inbox.
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
                            <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2">
                                {loading ? <span className="animate-pulse">Sending…</span> : <><Send className="w-4 h-4" /> Send to My Inbox</>}
                            </button>
                        </form>
                        <p className="text-cream/30 text-xs text-center mt-4">No spam. Unsubscribe anytime.</p>
                    </>
                ) : (
                    <div className="text-center py-4">
                        <div className="w-14 h-14 bg-green-500/15 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-7 h-7 text-green-400" />
                        </div>
                        <h3 className="font-display text-lg font-semibold text-white mb-2">Check your inbox!</h3>
                        <p className="text-cream/60 text-sm mb-4">
                            We sent a direct link to <span className="text-white">{email}</span>.
                        </p>
                        <Link
                            href={`/resources/${resource.slug}`}
                            className="btn-primary text-sm inline-block mb-3"
                            onClick={onClose}
                        >
                            Read It Now →
                        </Link>
                        <br />
                        <button onClick={onClose} className="btn-secondary text-sm">Back to Resources</button>
                    </div>
                )}
            </motion.div>
        </div>
    );
}

function SubmitResourceModal({ onClose }: { onClose: () => void }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !title || !description) return;
        setLoading(true);
        try {
            const res = await fetch('/api/submit-resource', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, title, description, link }),
            });
            if (!res.ok) {
                const body = await res.json().catch(() => ({}));
                console.error('submit-resource error status:', res.status, 'body:', body);
                throw new Error(body.error || 'Submission failed');
            }
            setSubmitted(true);
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : 'Unknown error';
            alert(`Something went wrong: ${msg}`);
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
                className="relative bg-navy border border-gold/30 rounded-2xl p-8 w-full max-w-lg shadow-2xl overflow-y-auto max-h-[90vh]"
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-cream/40 hover:text-cream transition-colors">
                    <X className="w-5 h-5" />
                </button>

                {!submitted ? (
                    <>
                        <div className="w-12 h-12 bg-gold/10 border border-gold/30 rounded-xl flex items-center justify-center mb-4">
                            <Send className="w-6 h-6 text-gold" />
                        </div>
                        <h3 className="font-display text-lg font-semibold text-white mb-1">
                            Submit a Resource
                        </h3>
                        <p className="text-cream/60 text-sm mb-6">
                            Share a guide, template, or tool with the Pivotal Voice community.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-cream/80 text-xs font-semibold uppercase tracking-wider mb-1.5">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Jane Doe"
                                    className="w-full bg-navy-dark/60 border border-gold/20 rounded-lg px-4 py-2.5 text-white placeholder:text-cream/30 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-cream/80 text-xs font-semibold uppercase tracking-wider mb-1.5">
                                    Your Email *
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    className="w-full bg-navy-dark/60 border border-gold/20 rounded-lg px-4 py-2.5 text-white placeholder:text-cream/30 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-cream/80 text-xs font-semibold uppercase tracking-wider mb-1.5">
                                    Resource Title *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="e.g. Ellis County Campaign Checklist"
                                    className="w-full bg-navy-dark/60 border border-gold/20 rounded-lg px-4 py-2.5 text-white placeholder:text-cream/30 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-cream/80 text-xs font-semibold uppercase tracking-wider mb-1.5">
                                    Link / Source URL (Optional)
                                </label>
                                <input
                                    type="url"
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                    placeholder="https://example.com/resource"
                                    className="w-full bg-navy-dark/60 border border-gold/20 rounded-lg px-4 py-2.5 text-white placeholder:text-cream/30 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-cream/80 text-xs font-semibold uppercase tracking-wider mb-1.5">
                                    Description / Content *
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Describe the resource or paste its text here..."
                                    className="w-full bg-navy-dark/60 border border-gold/20 rounded-lg px-4 py-2.5 text-white placeholder:text-cream/30 text-sm focus:outline-none focus:border-gold/50 transition-colors resize-none"
                                />
                            </div>
                            <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2 mt-2">
                                {loading ? <span className="animate-pulse">Submitting…</span> : <><Send className="w-4 h-4" /> Submit for Review</>}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="text-center py-6">
                        <div className="w-14 h-14 bg-green-500/15 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-7 h-7 text-green-400" />
                        </div>
                        <h3 className="font-display text-lg font-semibold text-white mb-2">Thank you!</h3>
                        <p className="text-cream/60 text-sm mb-6">
                            Your resource suggestion has been submitted to the Pivotal Voice team. We will review it shortly.
                        </p>
                        <button onClick={onClose} className="btn-primary text-sm">Close</button>
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
    const [showSubmitModal, setShowSubmitModal] = useState(false);

    const audienceFilters: Audience[] = ['All', 'Voters', 'Candidates'];

    const filteredResources = resources.filter((r) => {
        const audienceMatch = activeAudience === 'All' || r.audience.includes(activeAudience) || r.audience.includes('All');
        const categoryMatch = activeCategory === 'All' || r.category === activeCategory;
        return audienceMatch && categoryMatch;
    });

    const featuredResources = resources.filter((r) => r.featured);

    const filteredCategories = activeAudience === 'All'
        ? categoryConfig
        : categoryConfig.filter((c) => c.audience === activeAudience || c.audience === 'All');

    const ResourceCard = ({ resource, index }: { resource: Resource; index: number }) => {
        const Icon = typeIcon(resource.type);
        return (
            <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
                className="card group hover:border-gold/40 flex flex-col"
            >
                <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-gold/10 border border-gold/20 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div className="flex gap-1 flex-wrap justify-end">
                        {resource.audience.filter(a => a !== 'All').map((a) => (
                            <span key={a} className={`text-xs px-2 py-0.5 rounded-full font-medium ${audienceBadge[a]}`}>{a}</span>
                        ))}
                    </div>
                </div>

                <span className="text-gold/60 text-xs font-medium uppercase tracking-wide">{resource.category}</span>

                <Link href={`/resources/${resource.slug}`} className="mt-1 mb-2 flex-1">
                    <h3 className="font-display text-base font-semibold text-white group-hover:text-gold transition-colors leading-snug">
                        {resource.title}
                    </h3>
                </Link>

                <p className="text-cream/60 text-sm mb-4 line-clamp-3">{resource.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs bg-navy-dark/80 text-cream/40 px-2 py-0.5 rounded">{tag}</span>
                    ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gold/10 mt-auto">
                    <span className="text-cream/40 text-xs">{resource.downloads.toLocaleString()} downloads</span>
                    <button
                        onClick={() => setSelectedResource(resource)}
                        className="btn-secondary text-xs flex items-center gap-1.5 py-1.5 px-3"
                    >
                        <Download className="w-3.5 h-3.5" />
                        {resource.type === 'Video' ? 'Watch' : 'Get'}
                    </button>
                </div>
            </motion.div>
        );
    };

    return (
        <>
            <AnimatePresence>
                {selectedResource && (
                    <DownloadModal resource={selectedResource} onClose={() => setSelectedResource(null)} />
                )}
                {showSubmitModal && (
                    <SubmitResourceModal onClose={() => setShowSubmitModal(false)} />
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
                            <h1 className="text-hero font-bold text-white mb-4">Resource Library</h1>
                            <p className="text-lg text-cream/60 mb-8">
                                Guides, templates, and tools built by political communications professionals —
                                for voters who want to engage and candidates who want to win.
                            </p>
                            <div className="inline-flex bg-navy-dark/60 border border-gold/20 rounded-xl p-1 gap-1">
                                {audienceFilters.map((f) => (
                                    <button
                                        key={f}
                                        onClick={() => { setActiveAudience(f); setActiveCategory('All'); }}
                                        className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${activeAudience === f ? 'bg-gold text-navy' : 'text-cream/60 hover:text-white'}`}
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
                                <div className="text-2xl font-bold text-gold">{resources.reduce((s, r) => s + r.downloads, 0).toLocaleString()}+</div>
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
                                {featuredResources.map((resource, index) => (
                                    <ResourceCard key={resource.id} resource={resource} index={index} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Browse by Category */}
                <section className="section bg-navy-dark/50">
                    <div className="container-custom">
                        <h2 className="text-section font-bold text-white mb-8">Browse by Category</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                            <motion.button
                                onClick={() => setActiveCategory('All')}
                                className={`card text-left group transition-all ${activeCategory === 'All' ? 'border-gold/60 bg-gold/5' : ''}`}
                            >
                                <h3 className={`font-semibold transition-colors ${activeCategory === 'All' ? 'text-gold' : 'text-white group-hover:text-gold'}`}>All Categories</h3>
                                <p className="text-cream/40 text-xs mt-1">{filteredResources.length} resources</p>
                            </motion.button>

                            {filteredCategories.map((cat, index) => {
                                const CatIcon = cat.icon;
                                const count = resources.filter((r) =>
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
                                        className={`card text-left group transition-all ${activeCategory === cat.label ? 'border-gold/60 bg-gold/5' : ''}`}
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
                                        <p className="text-cream/50 text-xs mt-3 leading-relaxed">{cat.description}</p>
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
                            <div className="text-center py-16 text-cream/40">No resources found for this filter combination.</div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredResources.map((resource, index) => (
                                    <ResourceCard key={resource.id} resource={resource} index={index} />
                                ))}
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
                                <h2 className="text-section font-bold text-white mb-4">Need More Than a Template?</h2>
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
                                    <Link href="/services#book" className="btn-primary inline-flex items-center justify-center">
                                        Schedule a Consultation
                                    </Link>
                                    <Link href="/services" className="btn-secondary inline-flex items-center gap-2">
                                        <ExternalLink className="w-4 h-4" />
                                        View Services
                                    </Link>
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
                            <h2 className="text-section font-bold text-white mb-4">Share a Resource</h2>
                            <p className="text-cream/70 mb-6">
                                Have a guide, template, or tool that would help Ellis County voters or candidates?
                                Submit it for review and we'll add it to the library.
                            </p>
                            <button onClick={() => setShowSubmitModal(true)} className="btn-primary">Submit a Resource</button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
