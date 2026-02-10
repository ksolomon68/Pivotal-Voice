'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Loader2, CheckCircle, X } from 'lucide-react';
import { submitEvent } from '@/lib/events/civic-events-service';
import { CivicEventType, EVENT_TYPE_LABELS } from '@/lib/types/civic-events';

const CITIES = [
    'Waxahachie', 'Midlothian', 'Red Oak', 'Ennis', 'Ferris', 'Palmer',
    'Italy', 'Milford', 'Ovilla', 'Oak Leaf', 'Pecan Hill', 'Garrett', 'Bardwell', 'Other',
];

const EVENT_TYPES: { value: CivicEventType; label: string }[] = [
    { value: 'city_council', label: 'City Council Meeting' },
    { value: 'school_board', label: 'School Board Meeting' },
    { value: 'commissioners_court', label: 'Commissioners Court' },
    { value: 'planning_zoning', label: 'Planning & Zoning' },
    { value: 'economic_dev', label: 'Economic Development' },
    { value: 'town_hall', label: 'Town Hall' },
    { value: 'candidate_forum', label: 'Candidate Forum' },
    { value: 'voter_registration', label: 'Voter Registration' },
    { value: 'debate', label: 'Debate' },
    { value: 'meet_greet', label: 'Meet & Greet' },
    { value: 'party_meeting', label: 'Party Meeting' },
    { value: 'community_event', label: 'Community Event' },
];

interface EventSubmitFormProps {
    userId: string;
    onClose: () => void;
    onSubmitted?: () => void;
}

export default function EventSubmitForm({ userId, onClose, onSubmitted }: EventSubmitFormProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [location, setLocation] = useState('');
    const [city, setCity] = useState('');
    const [eventType, setEventType] = useState<CivicEventType>('community_event');
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!title || !description || !date || !startTime || !location || !city) {
            setError('Please fill in all required fields.');
            return;
        }

        setSubmitting(true);
        await new Promise(r => setTimeout(r, 800));

        submitEvent({
            title, description, date, startTime,
            endTime: endTime || undefined,
            location, city, eventType, submittedBy: userId,
        });

        setSubmitting(false);
        setSuccess(true);
        onSubmitted?.();
    };

    if (success) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-6 text-center"
            >
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white">Event Submitted!</h3>
                <p className="text-sm text-white/60 mt-1">Your event will appear on the calendar after admin approval.</p>
                <button onClick={onClose} className="mt-4 px-4 py-2 rounded-lg bg-gold text-black text-sm font-semibold hover:bg-gold/90 transition-colors">
                    Close
                </button>
            </motion.div>
        );
    }

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Submit an Event</h3>
                <button onClick={onClose} className="p-1 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors">
                    <X className="w-5 h-5" />
                </button>
            </div>
            <p className="text-xs text-white/50 mb-4">Submit a civic event for the Ellis County calendar. Events require admin approval before appearing.</p>

            <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                    <label className="text-xs text-white/60 mb-1 block">Event Title *</label>
                    <input
                        type="text" value={title} onChange={e => setTitle(e.target.value)}
                        placeholder="e.g. Waxahachie City Council Special Session"
                        className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/50"
                    />
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="text-xs text-white/60 mb-1 block">Event Type *</label>
                        <select
                            value={eventType} onChange={e => setEventType(e.target.value as CivicEventType)}
                            className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm focus:outline-none focus:border-gold/50"
                        >
                            {EVENT_TYPES.map(t => (
                                <option key={t.value} value={t.value} className="bg-[#1a1a2e]">{t.label}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="text-xs text-white/60 mb-1 block">City *</label>
                        <select
                            value={city} onChange={e => setCity(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm focus:outline-none focus:border-gold/50"
                        >
                            <option value="" className="bg-[#1a1a2e]">Select city</option>
                            {CITIES.map(c => (
                                <option key={c} value={c} className="bg-[#1a1a2e]">{c}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                    <div>
                        <label className="text-xs text-white/60 mb-1 block">Date *</label>
                        <input
                            type="date" value={date} onChange={e => setDate(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm focus:outline-none focus:border-gold/50"
                        />
                    </div>
                    <div>
                        <label className="text-xs text-white/60 mb-1 block">Start Time *</label>
                        <input
                            type="time" value={startTime} onChange={e => setStartTime(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm focus:outline-none focus:border-gold/50"
                        />
                    </div>
                    <div>
                        <label className="text-xs text-white/60 mb-1 block">End Time</label>
                        <input
                            type="time" value={endTime} onChange={e => setEndTime(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm focus:outline-none focus:border-gold/50"
                        />
                    </div>
                </div>

                <div>
                    <label className="text-xs text-white/60 mb-1 block">Location *</label>
                    <input
                        type="text" value={location} onChange={e => setLocation(e.target.value)}
                        placeholder="e.g. Waxahachie City Hall, 401 S Rogers St"
                        className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/50"
                    />
                </div>

                <div>
                    <label className="text-xs text-white/60 mb-1 block">Description *</label>
                    <textarea
                        value={description} onChange={e => setDescription(e.target.value)}
                        placeholder="Describe the event, agenda items, and how the public can participate..."
                        rows={3}
                        className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/50 resize-none"
                    />
                </div>

                {error && <p className="text-xs text-red-400">{error}</p>}

                <button
                    type="submit" disabled={submitting}
                    className="w-full py-2.5 rounded-lg bg-gold text-black font-semibold text-sm hover:bg-gold/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                    {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : <><Plus className="w-4 h-4" /> Submit Event</>}
                </button>
            </form>
        </div>
    );
}
