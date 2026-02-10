import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    DEFAULT: '#1e3a5f',
                    dark: '#0a1628',
                },
                gold: {
                    DEFAULT: '#c9a961',
                    dark: '#b8860b',
                },
                cream: {
                    DEFAULT: '#e8dcc4',
                    light: '#f5f0e8',
                },
                brown: {
                    dark: '#3d3020',
                },
                alert: {
                    red: '#dc2626',
                    green: '#16a34a',
                },
            },
            fontFamily: {
                display: ['Playfair Display', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            fontSize: {
                'hero': ['clamp(48px, 5vw, 64px)', { lineHeight: '1.1' }],
                'section': ['clamp(36px, 4vw, 42px)', { lineHeight: '1.2' }],
                'card': ['clamp(24px, 2.5vw, 28px)', { lineHeight: '1.3' }],
            },
            maxWidth: {
                'content': '1400px',
            },
            spacing: {
                'section': 'clamp(80px, 10vw, 120px)',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'scale-in': 'scaleIn 0.3s ease-in-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
