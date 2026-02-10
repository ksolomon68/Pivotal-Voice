'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BookOpen, Download, FileText, Video, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const resourceCategories = [
    'Civic Engagement Guides',
    'Media Relations Tips',
    'Public Speaking Resources',
    'Government Transparency Documents',
    'Voter Information',
    'Meeting Minutes & Public Records',
];

const featuredResources = [
    {
        id: 1,
        title: 'Ellis County Voter Guide 2026',
        description: 'Comprehensive guide to all races and propositions on the ballot',
        type: 'PDF',
        category: 'Voter Information',
        downloads: 342,
    },
    {
        id: 2,
        title: 'How to Attend a County Commissioners Meeting',
        description: 'Step-by-step guide to participating in local government',
        type: 'PDF',
        category: 'Civic Engagement Guides',
        downloads: 156,
    },
    {
        id: 3,
        title: 'Public Speaking Masterclass',
        description: 'Video series on effective public speaking for local leaders',
        type: 'Video',
        category: 'Public Speaking Resources',
        downloads: 89,
    },
];

export default function ResourcesPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Page Header */}
                <section className="bg-navy border-b border-gold/20 py-12">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto">
                            <BookOpen className="w-16 h-16 text-gold mx-auto mb-4" />
                            <h1 className="text-hero font-bold text-white mb-4">
                                Resource Library
                            </h1>
                            <p className="text-lg text-cream/80">
                                Access guides, documents, and tools to help you engage with local government,
                                improve your communication skills, and stay informed about Ellis County.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Categories */}
                <section className="section bg-navy-dark/50">
                    <div className="container-custom">
                        <h2 className="text-section font-bold text-white mb-8 text-center">
                            Browse by Category
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {resourceCategories.map((category, index) => (
                                <motion.button
                                    key={category}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className="card text-left group"
                                >
                                    <h3 className="text-white font-semibold group-hover:text-gold transition-colors">
                                        {category}
                                    </h3>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Resources */}
                <section className="section">
                    <div className="container-custom">
                        <h2 className="text-section font-bold text-white mb-8 text-center">
                            Featured Resources
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuredResources.map((resource, index) => (
                                <motion.div
                                    key={resource.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="card group cursor-pointer"
                                >
                                    {/* Icon/Type */}
                                    <div className="w-16 h-16 bg-gold/10 border-2 border-gold/30 rounded-lg flex items-center justify-center mb-4">
                                        {resource.type === 'PDF' ? (
                                            <FileText className="w-8 h-8 text-gold" />
                                        ) : (
                                            <Video className="w-8 h-8 text-gold" />
                                        )}
                                    </div>

                                    {/* Category Badge */}
                                    <span className="badge-gold text-xs mb-3 inline-block">
                                        {resource.category}
                                    </span>

                                    {/* Title */}
                                    <h3 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-gold transition-colors">
                                        {resource.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-cream/70 text-sm mb-4">
                                        {resource.description}
                                    </p>

                                    {/* Download Stats */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gold/20">
                                        <span className="text-cream/50 text-xs">
                                            {resource.downloads} downloads
                                        </span>
                                        <button className="btn-secondary text-sm flex items-center gap-2">
                                            <Download className="w-4 h-4" />
                                            Download
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
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
                            <p className="text-cream/80 mb-6">
                                Have a valuable resource for the Ellis County community? Submit it for review and inclusion in our library.
                            </p>
                            <button className="btn-primary">
                                Submit Resource
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
