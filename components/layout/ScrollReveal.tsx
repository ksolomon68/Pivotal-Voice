'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    distance?: number;
    duration?: number;
    once?: boolean;
}

export default function ScrollReveal({
    children,
    className = '',
    delay = 0,
    direction = 'up',
    distance = 30,
    duration = 0.6,
    once = true,
}: ScrollRevealProps) {
    const prefersReducedMotion = useReducedMotion();

    const directionMap = {
        up: { x: 0, y: distance },
        down: { x: 0, y: -distance },
        left: { x: distance, y: 0 },
        right: { x: -distance, y: 0 },
    };

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0, ...directionMap[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once, margin: '-50px' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* Stagger container for children */
interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
}

export function StaggerContainer({
    children,
    className = '',
    staggerDelay = 0.08,
}: StaggerContainerProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({
    children,
    className = '',
}: {
    children: ReactNode;
    className?: string;
}) {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
