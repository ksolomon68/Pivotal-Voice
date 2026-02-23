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
                    DEFAULT: '#1a2742',
                    dark: '#0f1729',
                    light: '#2d4a7c',
                },
                gold: {
                    DEFAULT: '#d4af37',
                    dark: '#b8962e',
                    light: '#f0c649',
                    muted: '#d4af3733',
                },
                cream: {
                    DEFAULT: '#f5f3ed',
                    dark: '#e8e6e0',
                },
                brand: {
                    red: '#c94c4c',
                    green: '#4a9d5f',
                    warning: '#e6b800',
                },
            },
            fontFamily: {
                display: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
                sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
            },
            fontSize: {
                'hero': ['clamp(32px, 8vw, 64px)', { lineHeight: '1.1', letterSpacing: '-0.5px', fontWeight: '700' }],
                'section': ['clamp(22px, 5vw, 42px)', { lineHeight: '1.2', letterSpacing: '-0.3px', fontWeight: '600' }],
                'card': ['clamp(18px, 3.5vw, 28px)', { lineHeight: '1.3', fontWeight: '600' }],
                'body-lg': ['16px', { lineHeight: '1.7' }],
            },
            maxWidth: {
                'content': '1400px',
                'readable': '70ch',
            },
            spacing: {
                'section': 'clamp(36px, 8vw, 120px)',
                'section-sm': 'clamp(24px, 5vw, 80px)',
            },
            borderRadius: {
                'card': '16px',
                'pill': '50px',
            },
            boxShadow: {
                'card': '0 4px 6px rgba(0,0,0,0.07)',
                'card-hover': '0 20px 40px rgba(0,0,0,0.12)',
                'gold-glow': '0 0 20px rgba(212,175,55,0.3)',
                'gold-glow-strong': '0 0 40px rgba(212,175,55,0.5)',
                'navbar': '0 4px 30px rgba(0,0,0,0.3)',
                'glass': '0 8px 32px rgba(0,0,0,0.12)',
            },
            backdropBlur: {
                'glass': '20px',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'slide-in-left': 'slideInLeft 0.4s ease-out forwards',
                'scale-in': 'scaleIn 0.3s ease-out forwards',
                'float': 'float 4s ease-in-out infinite',
                'float-slow': 'float 6s ease-in-out infinite',
                'glow-pulse': 'glowPulse 2s ease-in-out infinite',
                'gradient-shift': 'gradientShift 8s ease-in-out infinite',
                'bounce-arrow': 'bounceArrow 2s ease-in-out infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'spin-slow': 'spin 20s linear infinite',
                'counter-up': 'counterUp 1.5s ease-out forwards',
                'pulse-live': 'pulseLive 1.5s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideInLeft: {
                    '0%': { transform: 'translateX(-100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
                glowPulse: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(212,175,55,0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(212,175,55,0.6)' },
                },
                gradientShift: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                bounceArrow: {
                    '0%, 100%': { transform: 'translateY(0)', opacity: '0.6' },
                    '50%': { transform: 'translateY(12px)', opacity: '1' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                counterUp: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                pulseLive: {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.5', transform: 'scale(1.5)' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
