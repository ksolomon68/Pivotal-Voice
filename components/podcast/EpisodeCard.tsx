'use client';

import Link from 'next/link';
import { Play, Clock, Calendar } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { motion } from 'framer-motion';

interface PodcastEpisode {
    id: string;
    episodeNumber: number;
    title: string;
    description: string;
    guest: {
        name: string;
        title: string;
        photo: string;
    };
    duration: string;
    publishDate: string;
    thumbnail: string;
    topics: string[];
}

interface EpisodeCardProps {
    episode: PodcastEpisode;
    featured?: boolean;
}

export default function EpisodeCard({ episode, featured = false }: EpisodeCardProps) {
    const publishDate = parseISO(episode.publishDate);

    return (
        <motion.div
            whileHover={{ scale: featured ? 1.02 : 1.05 }}
            transition={{ duration: 0.2 }}
            className={featured ? '' : 'card cursor-pointer group'}
        >
            <Link href={`/podcast/${episode.id}`} className="block">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-navy-dark rounded-lg overflow-hidden mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-navy/40 flex items-center justify-center">
                        <div className="w-16 h-16 bg-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-gold/50 group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-8 h-8 text-gold ml-1" fill="currentColor" />
                        </div>
                    </div>

                    {/* Episode Number */}
                    <div className="absolute top-3 left-3">
                        <span className="badge-gold text-xs px-3 py-1">
                            Episode {episode.episodeNumber}
                        </span>
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs text-white flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {episode.duration}
                    </div>
                </div>

                {/* Episode Info */}
                <div>
                    <h3 className={`font-display font-semibold text-white mb-2 line-clamp-2 ${featured ? 'text-2xl' : 'text-lg'}`}>
                        {episode.title}
                    </h3>

                    {/* Guest */}
                    <p className="text-gold text-sm mb-2">
                        with {episode.guest.name}, {episode.guest.title}
                    </p>

                    {/* Description */}
                    <p className="text-cream/70 text-sm mb-3 line-clamp-2">
                        {episode.description}
                    </p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-2 mb-3">
                        {episode.topics.map((topic, index) => (
                            <span
                                key={index}
                                className="badge bg-navy-dark/50 text-cream/60 text-xs"
                            >
                                {topic}
                            </span>
                        ))}
                    </div>

                    {/* Publish Date */}
                    <div className="flex items-center gap-2 text-cream/50 text-xs">
                        <Calendar className="w-3 h-3" />
                        {format(publishDate, 'MMMM d, yyyy')}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
