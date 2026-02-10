'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
    MessageSquare, Search, Plus, Filter, ChevronDown,
    Truck, Building, DollarSign, BookOpen, Shield,
    Briefcase, Leaf, Heart, Sun, Droplets,
    TrendingUp, Clock, Flame, ThumbsUp, X, LogIn, LogOut, User, Bell
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TopicCard from '@/components/forum/TopicCard';
import ForumSidebar from '@/components/forum/ForumSidebar';
import AuthModal from '@/components/forum/AuthModal';
import NewTopicForm from '@/components/forum/NewTopicForm';
import { useAuth } from '@/lib/forum/AuthContext';
import { getCategories, getTopics, sortTopics, searchTopics, getTopicsByCategory } from '@/lib/forum/forum-service';
import { ForumCategory, Topic, SortOption } from '@/lib/types/forum';

const categoryIcons: Record<string, React.ReactNode> = {
    infrastructure: <Truck className="w-4 h-4" />,
    growth: <Building className="w-4 h-4" />,
    taxes: <DollarSign className="w-4 h-4" />,
    education: <BookOpen className="w-4 h-4" />,
    safety: <Shield className="w-4 h-4" />,
    economic: <Briefcase className="w-4 h-4" />,
    agriculture: <Leaf className="w-4 h-4" />,
    healthcare: <Heart className="w-4 h-4" />,
    quality: <Sun className="w-4 h-4" />,
    environment: <Droplets className="w-4 h-4" />,
};

const categoryBorderColors: Record<string, string> = {
    blue: 'border-blue-500/40 hover:border-blue-400',
    green: 'border-green-500/40 hover:border-green-400',
    gold: 'border-gold/40 hover:border-gold',
    purple: 'border-purple-500/40 hover:border-purple-400',
    red: 'border-red-500/40 hover:border-red-400',
    teal: 'border-teal-500/40 hover:border-teal-400',
    emerald: 'border-emerald-500/40 hover:border-emerald-400',
    pink: 'border-pink-500/40 hover:border-pink-400',
    orange: 'border-orange-500/40 hover:border-orange-400',
    cyan: 'border-cyan-500/40 hover:border-cyan-400',
};

const categoryTextColors: Record<string, string> = {
    blue: 'text-blue-400',
    green: 'text-green-400',
    gold: 'text-gold',
    purple: 'text-purple-400',
    red: 'text-red-400',
    teal: 'text-teal-400',
    emerald: 'text-emerald-400',
    pink: 'text-pink-400',
    orange: 'text-orange-400',
    cyan: 'text-cyan-400',
};

const sortIcons: Record<SortOption, React.ReactNode> = {
    newest: <Clock className="w-4 h-4" />,
    active: <MessageSquare className="w-4 h-4" />,
    popular: <ThumbsUp className="w-4 h-4" />,
    trending: <Flame className="w-4 h-4" />,
};

export default function ForumPage() {
    const { user, logout } = useAuth();
    const [categories, setCategories] = useState<ForumCategory[]>([]);
    const [topics, setTopics] = useState<Topic[]>([]);
    const [filteredTopics, setFilteredTopics] = useState<Topic[]>([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState<SortOption>('active');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [showCategories, setShowCategories] = useState(true);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [authTab, setAuthTab] = useState<'login' | 'register'>('login');
    const [showNewTopic, setShowNewTopic] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);

    const refreshData = useCallback(() => {
        setRefreshKey(k => k + 1);
    }, []);

    useEffect(() => {
        setCategories(getCategories());
    }, [refreshKey]);

    useEffect(() => {
        let result: Topic[];
        if (search.trim()) {
            result = searchTopics(search);
        } else if (selectedCategory) {
            result = getTopicsByCategory(selectedCategory);
        } else {
            result = getTopics();
        }
        result = sortTopics(result, sort);
        setTopics(result);
        setFilteredTopics(result);
    }, [search, sort, selectedCategory, refreshKey]);

    const openAuth = (tab: 'login' | 'register') => {
        setAuthTab(tab);
        setShowAuthModal(true);
    };

    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Hero */}
                <section className="bg-navy border-b border-gold/20 py-10 sm:py-14">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto">
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                <MessageSquare className="w-14 h-14 text-gold mx-auto mb-4" />
                                <h1 className="text-hero font-bold text-white mb-3">
                                    Community Forum
                                </h1>
                                <p className="text-lg text-cream/70 mb-6">
                                    The hub for Ellis County residents to discuss local issues, share ideas, and shape our community&apos;s future.
                                </p>
                            </motion.div>

                            {/* Auth bar */}
                            <div className="flex items-center justify-center gap-3">
                                {user ? (
                                    <div className="flex items-center gap-3 bg-navy-dark/50 border border-gold/20 rounded-full px-5 py-2">
                                        <div className="w-8 h-8 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center">
                                            <span className="text-sm font-bold text-gold">{user.displayName[0]}</span>
                                        </div>
                                        <span className="text-cream/80 text-sm font-medium">{user.displayName}</span>
                                        {user.city && <span className="text-cream/40 text-xs">· {user.city}</span>}
                                        <button
                                            onClick={() => setShowNewTopic(true)}
                                            className="btn-primary text-sm flex items-center gap-1"
                                        >
                                            <Plus className="w-4 h-4" /> New Topic
                                        </button>
                                        <button onClick={logout} className="p-2 text-cream/40 hover:text-red-400 transition-colors" title="Sign out">
                                            <LogOut className="w-4 h-4" />
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-3">
                                        <button onClick={() => openAuth('login')} className="btn-secondary text-sm flex items-center gap-2">
                                            <LogIn className="w-4 h-4" /> Sign In
                                        </button>
                                        <button onClick={() => openAuth('register')} className="btn-primary text-sm flex items-center gap-2">
                                            <User className="w-4 h-4" /> Join Community
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Category Chips */}
                <section className="bg-navy-dark border-b border-gold/10 py-4">
                    <div className="container-custom">
                        <div className="flex items-center gap-3 mb-3">
                            <button
                                onClick={() => setShowCategories(!showCategories)}
                                className="text-sm text-cream/50 hover:text-gold transition-colors flex items-center gap-1"
                            >
                                <Filter className="w-4 h-4" />
                                Categories
                                <ChevronDown className={`w-3 h-3 transition-transform ${showCategories ? 'rotate-180' : ''}`} />
                            </button>
                            {selectedCategory && (
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className="text-xs text-cream/40 hover:text-red-400 flex items-center gap-1 transition-colors"
                                >
                                    <X className="w-3 h-3" /> Clear filter
                                </button>
                            )}
                        </div>
                        {showCategories && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2"
                            >
                                {categories.map(cat => {
                                    const isActive = selectedCategory === cat.id;
                                    return (
                                        <button
                                            key={cat.id}
                                            onClick={() => setSelectedCategory(isActive ? null : cat.id)}
                                            className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm transition-all ${isActive
                                                    ? `${categoryBorderColors[cat.color]} bg-white/5 ${categoryTextColors[cat.color]}`
                                                    : 'border-gold/10 text-cream/50 hover:border-gold/30 hover:text-cream/80'
                                                }`}
                                        >
                                            <span className={isActive ? categoryTextColors[cat.color] : 'text-cream/40'}>
                                                {categoryIcons[cat.id]}
                                            </span>
                                            <span className="truncate text-left flex-1">{cat.name}</span>
                                            <span className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/10' : 'bg-gold/10 text-cream/30'}`}>
                                                {cat.topicCount}
                                            </span>
                                        </button>
                                    );
                                })}
                            </motion.div>
                        )}
                    </div>
                </section>

                {/* Main content */}
                <section className="py-8">
                    <div className="container-custom">
                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Topics column */}
                            <div className="flex-1 min-w-0">
                                {/* Search + Sort */}
                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
                                    <div className="relative flex-1">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
                                        <input
                                            type="text"
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            placeholder="Search topics, tags, or users..."
                                            className="input pl-10 w-full"
                                        />
                                    </div>

                                    <div className="flex items-center gap-1 bg-navy border border-gold/15 rounded-lg p-1">
                                        {(['active', 'newest', 'popular', 'trending'] as SortOption[]).map(s => (
                                            <button
                                                key={s}
                                                onClick={() => setSort(s)}
                                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${sort === s
                                                        ? 'bg-gold/15 text-gold border border-gold/30'
                                                        : 'text-cream/50 hover:text-cream border border-transparent'
                                                    }`}
                                            >
                                                {sortIcons[s]}
                                                <span className="capitalize">{s}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Results info */}
                                <div className="flex items-center justify-between mb-4">
                                    <p className="text-sm text-cream/40">
                                        {filteredTopics.length} {filteredTopics.length === 1 ? 'topic' : 'topics'}
                                        {selectedCategory && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
                                        {search && ` matching "${search}"`}
                                    </p>
                                    {user && (
                                        <button onClick={() => setShowNewTopic(true)} className="sm:hidden btn-primary text-xs flex items-center gap-1">
                                            <Plus className="w-3 h-3" /> New Topic
                                        </button>
                                    )}
                                </div>

                                {/* Topic list */}
                                <div className="space-y-3">
                                    {filteredTopics.length === 0 ? (
                                        <div className="text-center py-16 bg-navy border border-gold/15 rounded-xl">
                                            <MessageSquare className="w-12 h-12 text-gold/30 mx-auto mb-4" />
                                            <h3 className="text-white font-display text-lg mb-2">No topics found</h3>
                                            <p className="text-cream/50 text-sm mb-4">
                                                {search ? 'Try a different search term.' : 'Be the first to start a discussion!'}
                                            </p>
                                            {user && (
                                                <button onClick={() => setShowNewTopic(true)} className="btn-primary text-sm">
                                                    Start a Discussion
                                                </button>
                                            )}
                                        </div>
                                    ) : (
                                        filteredTopics.map((topic, idx) => (
                                            <TopicCard key={topic.id} topic={topic} index={idx} />
                                        ))
                                    )}
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="w-full lg:w-80 flex-shrink-0">
                                <ForumSidebar />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA for logged-out */}
                {!user && (
                    <section className="py-12 bg-navy border-t border-gold/20">
                        <div className="container-custom text-center">
                            <h2 className="font-display text-2xl font-bold text-white mb-3">
                                Your Voice Matters
                            </h2>
                            <p className="text-cream/60 max-w-xl mx-auto mb-6">
                                Join {categories.reduce((sum, c) => sum + c.topicCount, 0)}+ discussions about the issues that affect your community.
                                Create an account to post, vote, and engage with your neighbors.
                            </p>
                            <button onClick={() => openAuth('register')} className="btn-primary text-lg px-8 py-3">
                                Join the Community
                            </button>
                        </div>
                    </section>
                )}
            </main>
            <Footer />

            {/* Modals */}
            <AuthModal isOpen={showAuthModal} onClose={() => { setShowAuthModal(false); refreshData(); }} initialTab={authTab} />
            <NewTopicForm
                isOpen={showNewTopic}
                onClose={() => { setShowNewTopic(false); refreshData(); }}
                defaultCategory={selectedCategory || undefined}
            />
        </>
    );
}
