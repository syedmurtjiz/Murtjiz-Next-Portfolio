'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { ScrollReveal, RevealItem } from './shared/ScrollReveal';

const projects = [
    {
        slug: 'kelvinweather',
        title: 'KelvinWeather',
        category: 'App',
        description: 'A sophisticated weather application delivering real-time updates, built with React and Tailwind CSS.',
        image: '/weather.png',
        liveLink: 'https://climatepredictions.netlify.app/',
        sourceLink: 'https://github.com/syedmurtjiz/my-weather-app',
        technologies: ['React', 'Tailwind', 'API'],
    },
    {
        slug: 'spotifyclone',
        title: 'SpotifyClone',
        category: 'App',
        description: 'A full-stack music streaming platform replicating Spotify, developed using Next.js and Node.js.',
        image: '/spotify.png',
        liveLink: 'https://spotifyclient.netlify.app/',
        sourceLink: 'https://github.com/syedmurtjiz/spotifyclone',
        technologies: ['Next.js', 'MongoDB', 'Node'],
    },
    {
        slug: 'bookingreplica',
        title: 'Booking.com Replica',
        category: 'Branding',
        description: 'A feature-rich replica of Booking.com with search and booking capabilities, powered by React and Firebase.',
        image: '/booking.png',
        liveLink: 'https://booking-replica.netlify.app/',
        sourceLink: 'https://github.com/syedmurtjiz/booking.com?tab=readme-ov-file',
        technologies: ['React', 'Firebase', 'Tailwind'],
    },
    {
        slug: 'portfolio',
        title: 'Portfolio Website',
        category: 'UX/UI',
        description: 'A professional portfolio showcasing my expertise and projects, crafted with Next.js and Tailwind CSS.',
        image: '/portfolio.png',
        liveLink: 'https://syedmurtjizhussain.netlify.app/',
        sourceLink: 'https://github.com/syedmurtjiz/portfolio',
        technologies: ['Next.js', 'Framer', 'Tailwind'],
    },
    {
        slug: 'elevateunlimited',
        title: 'Elevate Unlimited',
        category: 'Branding',
        description: 'A professional portfolio showcasing my expertise and projects, crafted with Next.js and Tailwind CSS.',
        image: '/elevate.png',
        liveLink: 'https://elevatesunlimited.netlify.app/',
        sourceLink: 'https://github.com/syedmurtjiz/Elevate-Unlimited',
        technologies: ['Next.js', 'Tailwind', 'Framer'],
    },
    {
        slug: 'cozycritters',
        title: 'Cozy Critters',
        category: 'App',
        description: 'Detailed information about animal personalities, care needs, and lifespan.',
        image: '/cozy.jpg',
        liveLink: 'https://cozy-critters.netlify.app/',
        sourceLink: 'https://github.com/syedmurtjiz/Cozy-Critters',
        technologies: ['React', 'CSS'],
    }
];

export default function PortfolioGrid({ activeFilter }) {
    const filteredProjects = activeFilter === 'ALL'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <div className="w-full">
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.slug}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className="group relative"
                        >
                            <article className="relative h-[480px] rounded-[2.5rem] overflow-hidden glass-card premium-shadow border border-gray-100 dark:border-white/5 flex flex-col transition-all duration-500 hover:-translate-y-2">
                                {/* Image Section */}
                                <div className="relative h-2/3 w-full overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                                        <a href={project.liveLink} target="_blank" className="p-4 rounded-full bg-white text-black hover:bg-[var(--primary)] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
                                            <FaExternalLinkAlt size={18} />
                                        </a>
                                        <a href={project.sourceLink} target="_blank" className="p-4 rounded-full bg-black text-white hover:bg-[var(--primary)] transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 delay-75">
                                            <FaGithub size={20} />
                                        </a>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 flex flex-col justify-between flex-grow">
                                    <div>
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-2xl font-black text-[#111827] dark:text-white tracking-tighter-heading">
                                                {project.title}
                                            </h3>
                                            <span className="px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-[10px] font-bold tracking-wide-label uppercase">
                                                {project.category}
                                            </span>
                                        </div>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm line-height-relaxed line-clamp-2 mb-6 font-medium">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-2">
                                            {project.technologies.slice(0, 2).map((tech, i) => (
                                                <span key={i} className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest leading-none">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <Link href={`/projects/${project.slug}`} className="w-10 h-10 rounded-full border border-gray-100 dark:border-white/10 flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-all">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
