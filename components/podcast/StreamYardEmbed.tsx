'use client';

interface Props {
    broadcastId: string;
    title?: string;
}

export default function StreamYardEmbed({ broadcastId, title }: Props) {
    return (
        <div className="w-full">
            {title && (
                <h3 className="text-sm font-semibold text-cream/70 truncate mb-3">{title}</h3>
            )}
            <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden">
                <iframe
                    src={`https://streamyard.com/watch/${broadcastId}`}
                    title="StreamYard Live"
                    allow="autoplay; camera; microphone; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                />
            </div>
        </div>
    );
}
