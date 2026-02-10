'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { TrendingUp, BarChart3, PieChart, Calendar, ExternalLink, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const budgetData = [
    { category: 'Public Safety', amount: 45.2, color: 'from-red-500/80 to-red-600/80' },
    { category: 'Infrastructure', amount: 28.5, color: 'from-blue-500/80 to-blue-600/80' },
    { category: 'Education', amount: 15.8, color: 'from-green-500/80 to-green-600/80' },
    { category: 'Administration', amount: 10.5, color: 'from-gold/80 to-gold-dark/80' },
];

const upcomingMeetings = [
    {
        title: 'County Commissioners Court',
        date: 'February 17, 2026',
        time: '9:00 AM',
        location: 'County Courthouse',
    },
    {
        title: 'Planning & Zoning Commission',
        date: 'February 20, 2026',
        time: '6:30 PM',
        location: 'Waxahachie City Hall',
    },
];

export default function TransparencyPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Page Header */}
                <section className="bg-navy border-b border-gold/20 py-12">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto">
                            <TrendingUp className="w-16 h-16 text-gold mx-auto mb-4" />
                            <h1 className="text-hero font-bold text-white mb-4">
                                Transparency Dashboard
                            </h1>
                            <p className="text-lg text-cream/80">
                                Explore Ellis County's budget, spending, meeting schedules, and public records.
                                Government transparency made accessible and understandable.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Budget Breakdown */}
                <section className="section">
                    <div className="container-custom">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-section font-bold text-white">
                                County Budget Breakdown
                            </h2>
                            <button className="btn-secondary text-sm flex items-center gap-2">
                                <Download className="w-4 h-4" />
                                Download Data (CSV)
                            </button>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Pie Chart Visualization */}
                            <div className="card">
                                <h3 className="font-display text-xl font-semibold text-white mb-6 flex items-center gap-2">
                                    <PieChart className="w-6 h-6 text-gold" />
                                    FY 2026 Budget (Millions)
                                </h3>
                                <div className="space-y-4">
                                    {budgetData.map((item) => (
                                        <div key={item.category}>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-white font-medium">{item.category}</span>
                                                <span className="text-gold font-semibold">${item.amount}M</span>
                                            </div>
                                            <div className="h-3 bg-navy-dark rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                                                    style={{ width: `${item.amount}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 pt-6 border-t border-gold/20">
                                    <div className="flex items-center justify-between">
                                        <span className="text-cream/70">Total Budget</span>
                                        <span className="text-white font-display text-2xl font-bold">
                                            $100M
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Cards */}
                            <div className="space-y-4">
                                <div className="card">
                                    <BarChart3 className="w-8 h-8 text-gold mb-3" />
                                    <div className="text-3xl font-display font-bold text-white mb-1">
                                        $850M
                                    </div>
                                    <div className="text-cream/70">Total County Revenue (2025)</div>
                                </div>

                                <div className="card">
                                    <TrendingUp className="w-8 h-8 text-gold mb-3" />
                                    <div className="text-3xl font-display font-bold text-white mb-1">
                                        2.3%
                                    </div>
                                    <div className="text-cream/70">Property Tax Rate Increase</div>
                                </div>

                                <div className="card">
                                    <Calendar className="w-8 h-8 text-gold mb-3" />
                                    <div className="text-3xl font-display font-bold text-white mb-1">
                                        24
                                    </div>
                                    <div className="text-cream/70">Public Meetings This Month</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Upcoming Public Meetings */}
                <section className="section bg-navy-dark/50">
                    <div className="container-custom">
                        <h2 className="text-section font-bold text-white mb-8">
                            Upcoming Public Meetings
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {upcomingMeetings.map((meeting, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="card"
                                >
                                    <h3 className="font-display text-xl font-semibold text-white mb-3">
                                        {meeting.title}
                                    </h3>
                                    <div className="space-y-2 text-cream/80 mb-4">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-gold" />
                                            <span>{meeting.date} at {meeting.time}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <ExternalLink className="w-4 h-4 text-gold" />
                                            <span>{meeting.location}</span>
                                        </div>
                                    </div>
                                    <button className="btn-secondary text-sm">
                                        View Agenda
                                    </button>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <button className="btn-primary">
                                View Full Meeting Calendar
                            </button>
                        </div>
                    </div>
                </section>

                {/* Data Sources */}
                <section className="bg-navy py-12">
                    <div className="container-custom">
                        <div className="text-center max-w-2xl mx-auto">
                            <h3 className="text-xl font-display font-semibold text-white mb-4">
                                Data Sources & Transparency
                            </h3>
                            <p className="text-cream/80 mb-6 text-sm">
                                All data is sourced from official Ellis County government records and is updated regularly.
                                Last updated: February 9, 2026
                            </p>
                            <div className="flex gap-4 justify-center text-sm">
                                <a href="#" className="link">View Data Sources</a>
                                <span className="text-cream/50">•</span>
                                <a href="#" className="link">Submit FOIA Request</a>
                                <span className="text-cream/50">•</span>
                                <a href="#" className="link">Download All Data</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
