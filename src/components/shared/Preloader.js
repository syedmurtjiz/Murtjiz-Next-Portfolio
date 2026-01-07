'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
    "Initializing Architecture",
    "Optimizing Performance",
    "Refining Interactions",
    "Elevating Aesthetics",
    "Digital Authority Ready"
];

const eliteEasing = [0.76, 0, 0.24, 1];

export default function Preloader({ onComplete }) {
    const [percent, setPercent] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                const diff = Math.floor(Math.random() * 8) + 3;
                return Math.min(prev + diff, 100);
            });
        }, 50);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (percent >= 100) {
            setTimeout(() => {
                setIsExiting(true);
                setTimeout(onComplete, 1500);
            }, 800);
            return;
        }

        const step = 100 / messages.length;
        const currentStep = Math.floor(percent / step);
        if (currentStep !== messageIndex && currentStep < messages.length) {
            setMessageIndex(currentStep);
        }
    }, [percent, messageIndex, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-transparent overflow-hidden"
        >
            {/* 3-Layered Staggered Curtain Reveal */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ y: 0 }}
                    animate={isExiting ? { y: "-100%" } : { y: 0 }}
                    transition={{
                        duration: 1.2,
                        ease: eliteEasing,
                        delay: i * 0.15
                    }}
                    className={`absolute inset-0 z-[${30 - i * 10}]`}
                    style={{
                        backgroundColor: i === 0 ? '#0d0907' : i === 1 ? 'var(--primary)' : '#1a1412',
                        opacity: i === 1 ? 0.05 : 1
                    }}
                />
            ))}

            {/* Grain Overlay */}
            <div className="absolute inset-0 z-40 pointer-events-none opacity-[0.03] mix-blend-overlay">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <filter id="noiseFilter">
                        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
            </div>

            {/* Main Content Area */}
            <div className="relative z-50 flex flex-col items-center">
                {/* Typographic Logo Reveal */}
                <div className="mb-24 overflow-hidden">
                    <motion.h2
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.8, ease: eliteEasing }}
                        className="text-[10px] font-black tracking-[0.4em] uppercase text-white/30"
                    >
                        Syed Murtjiz.dev
                    </motion.h2>
                </div>

                {/* Counter with High-Depth Effect */}
                <div className="overflow-hidden relative group">
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: eliteEasing }}
                        className="flex items-baseline gap-4"
                    >
                        <span className="text-9xl md:text-[12rem] font-black tracking-tighter-heading text-white leading-none">
                            {percent.toString().padStart(2, '0')}
                        </span>
                    </motion.div>
                    {/* Subtle Glow Tracking */}
                    <motion.div
                        animate={{
                            opacity: [0.1, 0.2, 0.1],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -inset-8 bg-[var(--primary)] blur-[120px] rounded-full -z-10"
                    />
                </div>

                {/* Status Messages with Staggered Character reveal (via simple string) */}
                <div className="mt-12 h-8 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={messageIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="flex items-center gap-3"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                            <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/60">
                                {messages[messageIndex]}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Modern Aesthetic Sidebars */}
            <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            {/* Footer Branding */}
            <div className="absolute bottom-12 inset-x-0 flex justify-center overflow-hidden">
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-[10px] font-bold tracking-widest text-white/20 uppercase"
                >
                    Digital Authority &copy; 2026
                </motion.div>
            </div>
        </motion.div>
    );
}
