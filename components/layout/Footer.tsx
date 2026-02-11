'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const platformLinks = [
    { name: 'Calendar', href: '/calendar' },
    { name: 'Debates', href: '/debates' },
    { name: 'Podcast', href: '/podcast' },
    { name: 'Forum', href: '/forum' },
    { name: 'Candidates', href: '/candidates' },
];

const serviceLinks = [
    { name: 'Reputation Management', href: '/services#reputation' },
    { name: 'Crisis Communications', href: '/services#crisis' },
    { name: 'Speechwriting', href: '/services#speechwriting' },
    { name: 'Digital Strategy', href: '/services#digital' },
];

const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
];

export default function Footer() {
    return (
        <footer className="relative bg-navy-dark border-t border-gold/10 mt-0">
            {/* Gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            <div className="container-custom py-12 sm:py-20">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 group mb-6">
                            <div className="relative w-12 h-12">
                                <Image
                                    src="/images/logo.png"
                                    alt="Pivotal Voice"
                                    fill
                                    className="object-contain rounded-full"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-display text-lg font-bold text-white leading-tight">
                                    Pivotal Voice
                                </span>
                                <span className="text-[10px] text-gold/70 font-medium tracking-wider uppercase">
                                    Ellis County
                                </span>
                            </div>
                        </Link>
                        <p className="text-cream/50 text-sm leading-relaxed mb-6">
                            A non-partisan platform dedicated to creating meaningful
                            dialogue on the issues that shape Ellis County&apos;s future.
                        </p>

                        {/* Social media */}
                        <div className="flex gap-2">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        aria-label={social.name}
                                        className="w-10 h-10 rounded-full bg-navy border border-gold/20 flex items-center justify-center text-cream/50 hover:text-gold hover:border-gold hover:rotate-[360deg] transition-all duration-700"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Platform */}
                    <div>
                        <h3 className="font-display text-sm font-bold text-gold/80 uppercase tracking-wider mb-5">
                            Platform
                        </h3>
                        <ul className="space-y-3">
                            {platformLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-gold transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-display text-sm font-bold text-gold/80 uppercase tracking-wider mb-5">
                            Services
                        </h3>
                        <ul className="space-y-3">
                            {serviceLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-gold transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="font-display text-sm font-bold text-gold/80 uppercase tracking-wider mb-5">
                            Stay Connected
                        </h3>
                        <div className="space-y-4">
                            <Link
                                href="/contact"
                                className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm block"
                            >
                                Contact Us
                            </Link>

                            {/* Newsletter */}
                            <div>
                                <p className="text-cream/50 text-sm mb-3">
                                    Subscribe to our newsletter
                                </p>
                                <form className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="input text-sm flex-1 min-w-0 !py-2.5 !px-4 !rounded-l-xl !rounded-r-none !border-r-0"
                                    />
                                    <button
                                        type="submit"
                                        className="btn-primary text-sm !px-4 !py-2.5 !rounded-l-none !rounded-r-xl whitespace-nowrap"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-8" />

                {/* Bottom row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-cream/40 text-sm">
                        © {new Date().getFullYear()} Pivotal Voice. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <Link href="/privacy" className="text-cream/40 hover:text-gold transition-colors duration-300">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-cream/40 hover:text-gold transition-colors duration-300">
                            Terms of Service
                        </Link>
                        <span className="text-cream/30">Non-Partisan Platform</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
