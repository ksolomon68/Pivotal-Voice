'use client';

import { useState, useEffect } from 'react';
import { AlertTriangle, MapPin, X, ExternalLink } from 'lucide-react';
import { getElectionStatus, ElectionDate, ElectionAlertResult } from '@/lib/elections/election-status';
import electionDates from '@/data/election-dates-2026.json';

const DISMISS_KEY = 'pv_election_alert_dismissed';

export default function ElectionAlertBanner() {
    const [alert, setAlert] = useState<ElectionAlertResult | null>(null);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        // Check localStorage for dismiss state
        try {
            const raw = localStorage.getItem(DISMISS_KEY);
            if (raw) {
                const { date, id } = JSON.parse(raw);
                const status = getElectionStatus(electionDates as ElectionDate[]);
                // Only dismiss if the same election was dismissed today
                if (date === new Date().toISOString().split('T')[0] && id === status.election?.id) {
                    setDismissed(true);
                    return;
                }
            }
        } catch {
            // localStorage blocked — show banner anyway
        }

        const status = getElectionStatus(electionDates as ElectionDate[]);
        if (status.hasAlert) setAlert(status);
    }, []);

    const handleDismiss = () => {
        setDismissed(true);
        try {
            localStorage.setItem(DISMISS_KEY, JSON.stringify({
                date: new Date().toISOString().split('T')[0],
                id: alert?.election?.id,
            }));
        } catch { /* silently ignore */ }
    };

    if (!alert || dismissed) return null;

    const isToday = alert.alertLevel === 'today';
    const pollingPlace = alert.election?.italyPollingPlace;

    return (
        <div
            className={`relative z-50 w-full py-3 px-4 ${isToday
                    ? 'bg-gradient-to-r from-red-600 to-red-700'
                    : 'bg-gradient-to-r from-gold/90 to-amber-500'
                }`}
        >
            <div className="container-custom flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                {/* Left: icon + message */}
                <div className="flex items-start sm:items-center gap-3">
                    <AlertTriangle className={`w-5 h-5 flex-shrink-0 mt-0.5 sm:mt-0 ${isToday ? 'text-white' : 'text-navy-dark'}`} />
                    <div>
                        <span className={`font-semibold text-sm ${isToday ? 'text-white' : 'text-navy-dark'}`}>
                            {isToday ? 'ELECTION DAY — Polls Are Open Now!' : `Priority Alert: ${alert.election?.name}`}
                        </span>
                        <span className={`text-sm ml-2 ${isToday ? 'text-red-100' : 'text-navy/80'}`}>
                            {isToday
                                ? `Polls open ${pollingPlace?.hours ?? '7:00 AM – 7:00 PM'}`
                                : `${alert.daysUntil} day${alert.daysUntil === 1 ? '' : 's'} away — ${alert.election?.date}`
                            }
                        </span>
                    </div>
                </div>

                {/* Right: polling place + dismiss */}
                <div className="flex items-center gap-3 ml-8 sm:ml-0">
                    {pollingPlace && (
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pollingPlace.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-1 text-xs font-medium underline underline-offset-2 ${isToday ? 'text-white hover:text-red-100' : 'text-navy-dark hover:text-navy'
                                }`}
                        >
                            <MapPin className="w-3.5 h-3.5" />
                            {pollingPlace.name}
                            <ExternalLink className="w-3 h-3 opacity-60" />
                        </a>
                    )}
                    <button
                        onClick={handleDismiss}
                        aria-label="Dismiss election alert"
                        className={`p-1 rounded hover:opacity-70 transition-opacity ${isToday ? 'text-white' : 'text-navy-dark'}`}
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
