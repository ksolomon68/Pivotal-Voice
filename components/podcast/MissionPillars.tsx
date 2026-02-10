'use client';

import { Handshake, Gavel, Scale, Book } from 'lucide-react';
import { motion } from 'framer-motion';

const pillars = [
    {
        icon: Handshake,
        title: 'Foster Honest Conversations',
        description: 'Creating space for authentic dialogue between leaders and the community',
        color: 'from-gold/20 to-gold/5',
    },
    {
        icon: Gavel,
        title: 'Accountability',
        description: 'Holding leaders accountable through transparency and engagement',
        color: 'from-blue-500/20 to-blue-500/5',
    },
    {
        icon: Scale,
        title: 'Civil Discussion',
        description: 'Fostering respectful debate on critical local issues',
        color: 'from-green-500/20 to-green-500/5',
    },
    {
        icon: Book,
        title: 'Government Transparency',
        description: 'Making government data accessible and understandable for all',
        color: 'from-purple-500/20 to-purple-500/5',
    },
];

export default function MissionPillars() {
    return (
        <div className="bg-navy py-16 rounded-2xl">
            <div className="container-custom">
                <h2 className="text-section font-bold text-white text-center mb-12">
                    Our Mission Pillars
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillars.map((pillar, index) => {
                        const Icon = pillar.icon;
                        return (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className={`w-20 h-20 bg-gradient-to-br ${pillar.color} border-2 border-gold/30 rounded-full flex items-center justify-center mx-auto mb-4`}>
                                    <Icon className="w-10 h-10 text-gold" />
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
        </div>
    );
}
