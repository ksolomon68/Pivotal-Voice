'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Mic, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
    { name: 'Calendar', href: '/calendar' },
    { name: 'Debates', href: '/debates' },
    { name: 'Podcast', href: '/podcast' },
    { name: 'Services', href: '/services' },
    { name: 'Candidates', href: '/candidates' },
    { name: 'Forum', href: '/forum' },
    { name: 'Resources', href: '/resources' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-navy-dark/95 backdrop-blur-sm border-b border-gold/20">
            <nav className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <Mic className="w-6 h-6 text-navy" />
                        </div>
                        <span className="font-display text-xl font-bold text-white hidden sm:block">
                            Pivotal Voice
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-cream hover:text-gold transition-colors duration-200 font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right side actions */}
                    <div className="flex items-center gap-4">
                        <button
                            aria-label="Search"
                            className="p-2 text-cream hover:text-gold transition-colors duration-200"
                        >
                            <Search className="w-5 h-5" />
                        </button>

                        <Link
                            href="/services#book"
                            className="hidden md:block btn-primary text-sm"
                        >
                            Book Consultation
                        </Link>

                        <button
                            aria-label="User account"
                            className="hidden md:flex p-2 text-cream hover:text-gold transition-colors duration-200"
                        >
                            <User className="w-5 h-5" />
                        </button>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 text-cream hover:text-gold transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden border-t border-gold/20 bg-navy"
                    >
                        <div className="container-custom py-4 space-y-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block py-3 px-4 text-cream hover:text-gold hover:bg-gold/10 rounded-lg transition-all duration-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/services#book"
                                className="block w-full text-center btn-primary mt-4"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Book Consultation
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
