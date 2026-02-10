'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

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
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const pathname = usePathname();

    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY;
        setScrolled(scrollTop > 20);

        // Scroll progress
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight > 0) {
            setScrollProgress((scrollTop / docHeight) * 100);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <>
            {/* Scroll Progress Bar */}
            <div
                className="scroll-progress"
                style={{ width: `${scrollProgress}%` }}
                aria-hidden="true"
            />

            <header
                className={`sticky top-0 z-50 navbar-glass transition-all duration-500 ${scrolled ? 'scrolled' : ''
                    }`}
            >
                {/* Gold accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                <nav className="container-custom">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <motion.div
                                animate={{ y: [0, -4, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="relative w-12 h-12"
                            >
                                <Image
                                    src="/images/logo.png"
                                    alt="Pivotal Voice"
                                    fill
                                    className="object-contain rounded-full"
                                    priority
                                />
                            </motion.div>
                            <div className="hidden sm:flex flex-col">
                                <span className="font-display text-lg font-bold text-white leading-tight tracking-tight">
                                    Pivotal Voice
                                </span>
                                <span className="text-[10px] text-gold/70 font-medium tracking-wider uppercase">
                                    Ellis County
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`nav-link px-3 py-2 text-sm ${pathname === item.href ? 'active' : ''
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Right side actions */}
                        <div className="flex items-center gap-3">
                            <button
                                aria-label="Search"
                                className="p-2.5 text-cream/60 hover:text-gold rounded-full hover:bg-gold/10 transition-all duration-300"
                            >
                                <Search className="w-5 h-5" />
                            </button>

                            <Link
                                href="/services#book"
                                className="hidden md:inline-flex btn-primary text-sm !px-5 !py-2.5"
                            >
                                Book Consultation
                            </Link>

                            <button
                                aria-label="User account"
                                className="hidden md:flex p-2.5 text-cream/60 hover:text-gold rounded-full hover:bg-gold/10 transition-all duration-300"
                            >
                                <User className="w-5 h-5" />
                            </button>

                            {/* Mobile menu button */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="lg:hidden p-2.5 text-cream/60 hover:text-gold rounded-full hover:bg-gold/10 transition-all duration-300"
                                aria-label="Toggle menu"
                                aria-expanded={mobileMenuOpen}
                            >
                                <AnimatePresence mode="wait">
                                    {mobileMenuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X className="w-6 h-6" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Menu className="w-6 h-6" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Mobile menu — Full screen overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden fixed inset-0 top-20 bg-navy-dark/98 backdrop-blur-xl z-40"
                        >
                            <div className="container-custom py-8 flex flex-col h-full">
                                {/* Logo in mobile menu */}
                                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gold/10">
                                    <div className="relative w-10 h-10">
                                        <Image
                                            src="/images/logo.png"
                                            alt="Pivotal Voice"
                                            fill
                                            className="object-contain rounded-full"
                                        />
                                    </div>
                                    <span className="font-display text-lg font-bold text-white">
                                        Pivotal Voice
                                    </span>
                                </div>

                                {/* Navigation Links — stagger animation */}
                                <nav className="space-y-1 flex-1">
                                    {navigation.map((item, index) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: index * 0.06,
                                            }}
                                        >
                                            <Link
                                                href={item.href}
                                                className={`block py-4 px-5 text-lg font-display font-medium rounded-xl transition-all duration-300 ${pathname === item.href
                                                        ? 'text-gold bg-gold/10'
                                                        : 'text-cream hover:text-gold hover:bg-gold/5'
                                                    }`}
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                {/* Bottom CTA */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.5 }}
                                    className="pt-6 border-t border-gold/10"
                                >
                                    <Link
                                        href="/services#book"
                                        className="block w-full text-center btn-primary"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Book Consultation
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
}
