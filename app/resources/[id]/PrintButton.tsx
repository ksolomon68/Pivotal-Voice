'use client';

export default function PrintButton() {
    return (
        <button onClick={() => window.print()} className="btn-primary w-full text-sm">
            Print / Save as PDF
        </button>
    );
}
