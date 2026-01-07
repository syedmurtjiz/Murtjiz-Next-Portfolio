'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const AboutIntro = () => {
    return (
        <section className="w-full relative overflow-hidden py-0 !pb-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-center">
                {/* Typographic Column */}
                <div className="w-full lg:w-1/2 space-y-8">
                    <ScrollReveal delay={0.2}>
                        <span className="text-[var(--primary)] font-black tracking-wide-label text-xs">Our Narrative — 01</span>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter-heading line-height-tight text-[#111827] dark:text-white mt-4">
                            Pioneering <br />
                            <span className="text-gray-300 dark:text-white/20">Digital</span> Craft.
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 dark:text-gray-400">
                            <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-[var(--primary)] first-letter:mr-3 first-letter:float-left">
                                Based in Islamabad, I bridge the gap between complex engineering and intuitive human-centric design, crafting systems that don&apos;t just work—they inspire.
                            </p>
                            <p className="text-lg leading-relaxed">
                                With a focus on performance and visual poetry, I build scalable architectures that empower brands to dominate their digital landscape with precision.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.6}>
                        <div className="flex items-center gap-12 pt-8 border-t border-gray-100 dark:border-white/5">
                            <div>
                                <span className="block text-4xl font-black text-[#111827] dark:text-white">04+</span>
                                <span className="text-[10px] font-bold tracking-wide-label text-gray-400">Years Mastery</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-black text-[#111827] dark:text-white">40+</span>
                                <span className="text-[10px] font-bold tracking-wide-label text-gray-400">Products Shipped</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Visual Column */}
                <div className="w-full lg:w-1/2 relative">
                    <ScrollReveal delay={0.4} x={40}>
                        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden glass-card premium-shadow">
                            <Image
                                src="/murtjiz.png"
                                alt="Portrait"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                                <span className="text-white font-black tracking-tighter-heading text-4xl">Creative Authority.</span>
                                <span className="text-white/60 text-sm font-medium">Syed Murtjiz Naqvi</span>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Floating Aesthetic Element */}
                    <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[var(--primary)] rounded-full blur-[80px] opacity-20 -z-10" />
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;
