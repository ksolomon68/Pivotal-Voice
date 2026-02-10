'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    life: number;
    maxLife: number;
}

interface ParticleBackgroundProps {
    className?: string;
    particleCount?: number;
    color?: string;
    maxSize?: number;
    speed?: number;
    mouseInfluence?: boolean;
}

export default function ParticleBackground({
    className = '',
    particleCount = 40,
    color = '212, 175, 55',
    maxSize = 3,
    speed = 0.3,
    mouseInfluence = true,
}: ParticleBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animRef = useRef<number>(0);
    const prefersReducedMotion = useReducedMotion();

    const createParticle = useCallback(
        (width: number, height: number): Particle => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * speed,
            vy: -Math.random() * speed * 0.5 - 0.1,
            size: Math.random() * maxSize + 0.5,
            opacity: Math.random() * 0.5 + 0.1,
            life: 0,
            maxLife: Math.random() * 300 + 200,
        }),
        [maxSize, speed]
    );

    useEffect(() => {
        if (prefersReducedMotion) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            const rect = canvas.parentElement?.getBoundingClientRect();
            if (rect) {
                canvas.width = rect.width;
                canvas.height = rect.height;
            }
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Initialize particles
        particlesRef.current = Array.from({ length: particleCount }, () =>
            createParticle(canvas.width, canvas.height)
        );

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
        };

        if (mouseInfluence) {
            canvas.parentElement?.addEventListener('mousemove', handleMouseMove);
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach((p, i) => {
                p.life++;

                // Fade in and out
                const lifeRatio = p.life / p.maxLife;
                let currentOpacity = p.opacity;
                if (lifeRatio < 0.1) currentOpacity *= lifeRatio * 10;
                if (lifeRatio > 0.8) currentOpacity *= (1 - lifeRatio) * 5;

                // Mouse influence
                if (mouseInfluence) {
                    const dx = mouseRef.current.x - p.x;
                    const dy = mouseRef.current.y - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        const force = (150 - dist) / 150 * 0.02;
                        p.vx += dx * force;
                        p.vy += dy * force;
                    }
                }

                // Damping
                p.vx *= 0.99;
                p.vy *= 0.99;

                p.x += p.vx;
                p.y += p.vy;

                // Reset particle if dead or out of bounds
                if (p.life >= p.maxLife || p.y < -10 || p.x < -10 || p.x > canvas.width + 10) {
                    particlesRef.current[i] = createParticle(canvas.width, canvas.height);
                    particlesRef.current[i].y = canvas.height + 10;
                }

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${color}, ${currentOpacity})`;
                ctx.fill();
            });

            animRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('resize', resizeCanvas);
            canvas.parentElement?.removeEventListener('mousemove', handleMouseMove);
        };
    }, [prefersReducedMotion, particleCount, color, maxSize, speed, mouseInfluence, createParticle]);

    if (prefersReducedMotion) return null;

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 pointer-events-none ${className}`}
            aria-hidden="true"
        />
    );
}
