'use client';

import Link from 'next/link';
import { Mic, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

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
        <footer className="bg-navy border-t border-gold/20 mt-20">
            <div className="container-custom py-16">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-3 group mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center">
                                <Mic className="w-6 h-6 text-navy" />
                            </div>
                            <span className="font-display text-xl font-bold text-white">
                                Pivotal Voice
                            </span>
                        </Link>
                        <p className="text-cream/80 text-sm mb-4">
                            Amplifying Leaders, Informing Communities
                        </p>
                        <p className="text-cream/60 text-sm">
                            A non-partisan platform dedicated to creating meaningful dialogue on the issues that shape Ellis County's future.
                        </p>
                    </div>

                    {/* Platform */}
                    <div>
                        <h3 className="font-display text-lg font-semibold text-white mb-4">
                            Platform
                        </h3>
                        <ul className="space-y-2">
                            {platformLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-cream/80 hover:text-gold transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-display text-lg font-semibold text-white mb-4">
                            Services
                        </h3>
                        <ul className="space-y-2">
                            {serviceLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-cream/80 hover:text-gold transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="font-display text-lg font-semibold text-white mb-4">
                            Connect
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <Link
                                    href="/contact"
                                    className="text-cream/80 hover:text-gold transition-colors duration-200 text-sm block mb-2"
                                >
                                    Contact Us
                                </Link>
                            </div>

                            {/* Newsletter */}
                            <div>
                                <p className="text-cream/80 text-sm mb-2">
                                    Subscribe to our newsletter
                                </p>
                                <form className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="input text-sm flex-1 min-w-0 py-2 px-3"
                                    />
                                    <button
                                        type="submit"
                                        className="btn-primary text-sm px-4 py-2"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>

                            {/* Social media */}
                            <div className="flex gap-3 pt-2">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            aria-label={social.name}
                                            className="w-9 h-9 rounded-full bg-navy-dark border border-gold/30 flex items-center justify-center text-cream hover:text-gold hover:border-gold transition-all duration-200"
                                        >
                                            <Icon className="w-4 h-4" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="pt-8 border-t border-gold/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-cream/60 text-sm">
                            © {new Date().getFullYear()} Pivotal Voice. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <Link
                                href="/privacy"
                                className="text-cream/60 hover:text-gold transition-colors duration-200"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-cream/60 hover:text-gold transition-colors duration-200"
                            >
                                Terms of Service
                            </Link>
                            <span className="text-cream/60">
                                Non-Partisan Platform
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
