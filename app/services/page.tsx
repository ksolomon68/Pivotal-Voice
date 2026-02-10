'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Shield, Heart, FileText, Megaphone, Check, Calendar as CalendarIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: Shield,
        title: 'Reputation Management',
        description: 'Protecting public trust and integrity through proactive and strategic communication',
        included: [
            'Media monitoring and crisis prevention',
            'Brand positioning and messaging',
            'Online reputation management',
            'Stakeholder relationship building',
        ],
        idealFor: 'Elected officials, candidates, public figures',
    },
    {
        icon: Heart,
        title: 'Crisis Communications',
        description: 'Navigate high-stakes moments with confidence and clarity',
        included: [
            '24/7 rapid response team',
            'Crisis communication planning',
            'Media training and spokesperson prep',
            'Message development and delivery',
        ],
        idealFor: 'Organizations facing public scrutiny or emergencies',
    },
    {
        icon: FileText,
        title: 'Speechwriting',
        description: 'Craft compelling narratives that move minds, inspire action, and win support',
        included: [
            'Custom speech writing for any occasion',
            'Talking points and key messages',
            'Presentation coaching',
            'Debate preparation',
        ],
        idealFor: 'Political candidates, civic leaders, executives',
    },
    {
        icon: Megaphone,
        title: 'Digital/Social Media Strategy',
        description: 'Command attention and own the conversation across all platforms',
        included: [
            'Social media strategy and management',
            'Content creation and calendaring',
            'Community engagement',
            'Analytics and performance tracking',
        ],
        idealFor: 'Campaigns, organizations, public officials',
    },
];

const testimonials = [
    {
        quote: 'Pivotal Voice helped us navigate a difficult situation with professionalism and expertise. Their crisis communication strategy was exactly what we needed.',
        name: 'Sarah Johnson',
        title: 'School Board President',
        rating: 5,
    },
    {
        quote: 'The speechwriting service exceeded my expectations. They captured my voice perfectly and helped me connect with voters in a meaningful way.',
        name: 'Michael Rodriguez',
        title: 'County Commissioner',
        rating: 5,
    },
];

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="bg-navy border-b border-gold/20 py-16">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 className="text-hero font-bold text-white mb-6">
                                    Transform Your Leadership Voice
                                </h1>
                                <p className="text-xl text-cream/80 mb-8">
                                    Strategic PR services for Ellis County leaders. Reputation management, crisis communications,
                                    speechwriting, and digital strategy that builds trust and commands attention.
                                </p>
                                <p className="text-gold font-display text-2xl italic mb-8">
                                    "Transforming Leaders into Iconic Communicators"
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="section">
                    <div className="container-custom">
                        <h2 className="text-section font-bold text-white text-center mb-12">
                            Our Services
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {services.map((service, index) => {
                                const Icon = service.icon;
                                return (
                                    <motion.div
                                        key={service.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="card"
                                    >
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-14 h-14 bg-gold/10 border-2 border-gold/30 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-7 h-7 text-gold" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-display text-2xl font-semibold text-white mb-2">
                                                    {service.title}
                                                </h3>
                                                <p className="text-cream/80">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* What's Included */}
                                        <div className="mb-4">
                                            <h4 className="font-display font-semibold text-white mb-3">
                                                What's Included:
                                            </h4>
                                            <ul className="space-y-2">
                                                {service.included.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-cream/70 text-sm">
                                                        <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Ideal For */}
                                        <div className="pt-4 border-t border-gold/20">
                                            <p className="text-xs text-cream/60">
                                                <span className="font-semibold text-gold">Ideal for:</span> {service.idealFor}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Booking Section */}
                <section id="book" className="section bg-navy">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center mb-12">
                                <CalendarIcon className="w-12 h-12 text-gold mx-auto mb-4" />
                                <h2 className="text-section font-bold text-white mb-4">
                                    Book Your Consultation
                                </h2>
                                <p className="text-cream/80">
                                    Ready to elevate your communication strategy? Schedule a free 30-minute consultation
                                    with our team to discuss your needs.
                                </p>
                            </div>

                            <div className="card">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-white font-medium mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                className="input"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-white font-medium mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                className="input"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-white font-medium mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                className="input"
                                                placeholder="(555) 123-4567"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-white font-medium mb-2">
                                                Organization/Title
                                            </label>
                                            <input
                                                type="text"
                                                className="input"
                                                placeholder="City Council Member"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-white font-medium mb-2">
                                            Service Interested In *
                                        </label>
                                        <select required className="select">
                                            <option value="">Select a service...</option>
                                            <option value="reputation">Reputation Management</option>
                                            <option value="crisis">Crisis Communications</option>
                                            <option value="speechwriting">Speechwriting</option>
                                            <option value="digital">Digital/Social Media Strategy</option>
                                            <option value="not-sure">Not Sure</option>
                                        </select>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-white font-medium mb-2">
                                                Preferred Date *
                                            </label>
                                            <input
                                                type="date"
                                                required
                                                className="input"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-white font-medium mb-2">
                                                Preferred Time *
                                            </label>
                                            <select required className="select">
                                                <option value="">Select time...</option>
                                                <option value="morning">Morning (8am - 12pm)</option>
                                                <option value="afternoon">Afternoon (12pm - 5pm)</option>
                                                <option value="evening">Evening (5pm - 8pm)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-white font-medium mb-2">
                                            Brief Description of Needs *
                                        </label>
                                        <textarea
                                            required
                                            className="textarea"
                                            rows={4}
                                            placeholder="Tell us about your communication goals and challenges..."
                                            maxLength={500}
                                        ></textarea>
                                        <p className="text-xs text-cream/50 mt-1">Maximum 500 characters</p>
                                    </div>

                                    <div>
                                        <label className="block text-white font-medium mb-2">
                                            How did you hear about us?
                                        </label>
                                        <select className="select">
                                            <option value="">Select...</option>
                                            <option value="website">Website</option>
                                            <option value="social">Social Media</option>
                                            <option value="referral">Referral</option>
                                            <option value="podcast">Podcast</option>
                                            <option value="event">Event/Debate</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="pt-6">
                                        <button type="submit" className="btn-primary w-full text-lg">
                                            Submit Consultation Request
                                        </button>
                                        <p className="text-xs text-cream/60 text-center mt-3">
                                            We'll contact you within 24 hours to confirm your appointment
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="section">
                    <div className="container-custom">
                        <h2 className="text-section font-bold text-white text-center mb-12">
                            What Our Clients Say
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="card"
                                >
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <span key={i} className="text-gold text-xl">★</span>
                                        ))}
                                    </div>
                                    <p className="text-cream/80 italic mb-4">
                                        "{testimonial.quote}"
                                    </p>
                                    <div className="border-t border-gold/20 pt-4">
                                        <p className="text-white font-semibold">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-cream/60 text-sm">
                                            {testimonial.title}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
