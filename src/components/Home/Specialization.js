'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCode, FaDesktop, FaReact, FaServer } from 'react-icons/fa';
import TypewriterText from '../TypewriterText';

const specializations = [
  {
    title: 'Website Design',
    description: 'Crafting visually stunning, user-centric websites using HTML, CSS, and JavaScript to deliver exceptional digital experiences.',
    projects: 5,
    icon: FaCode,
    color: '#EF4444',
  },
  {
    title: 'Front-End Development',
    description: 'Building responsive, high-performance web applications with React.js, ensuring seamless user interactions and accessibility.',
    projects: 22,
    icon: FaDesktop,
    color: '#3B82F6',
  },
  {
    title: 'React Development',
    description: 'Delivering complex, scalable React-based solutions with a focus on performance, modularity, and maintainability.',
    projects: 10,
    icon: FaReact,
    color: '#06B6D4',
  },
  {
    title: 'API Development',
    description: 'Designing secure, efficient, and scalable APIs to enable robust application integration and functionality.',
    projects: 3,
    icon: FaServer,
    color: '#22C55E',
  },
];

// Animation variants for container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 15,
    },
  },
};

// Animation variants for icons
const iconVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};


export default function Specialization() {
  return (
    <section className="w-full relative bg-white dark:bg-[#120a08] overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[var(--primary)]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <span className="text-[var(--primary)] font-bold tracking-wide-label text-xs mb-2 block">Our Expertise</span>
            <TypewriterText
              text="Strategic Solutions"
              id="specializations-heading"
              className="text-4xl md:text-5xl font-black text-[#111827] dark:text-[#f5e6d3] tracking-tighter-heading line-height-tight mb-4"
              as="h2"
            />
            <p className="max-w-xl text-gray-600 dark:text-gray-400 text-lg line-height-relaxed">
              Merging technical precision with creative vision to build digital products that resonate and scale.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 auto-rows-[240px]">
          {/* Featured Card */}
          <motion.article
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 relative p-8 rounded-3xl overflow-hidden glass-card premium-shadow flex flex-col justify-end group border border-gray-100 dark:border-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-[var(--primary)] flex items-center justify-center mb-6 shadow-xl shadow-[var(--primary)]/20">
                <FaDesktop className="text-white w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black text-[#111827] dark:text-white tracking-tighter-heading mb-4">
                Full-Stack Architecture
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 line-height-relaxed">
                Architecting robust, end-to-end digital experiences using modern frameworks like React and Next.js.
              </p>
              <div className="flex gap-4">
                <span className="text-xs font-bold tracking-wide-label text-[var(--primary)]">25+ Projects</span>
                <span className="text-xs font-bold tracking-wide-label text-gray-400">Award Winning</span>
              </div>
            </div>
          </motion.article>

          {/* Secondary Cards */}
          {specializations.slice(0, 3).map((spec, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`relative p-6 rounded-3xl glass-card premium-shadow group border border-gray-100 dark:border-white/5 transition-all duration-500 ${index === 0 ? 'md:col-span-2' : 'md:col-span-1'
                }`}
            >
              <div className="absolute top-4 right-4 text-[var(--primary)]/20 group-hover:text-[var(--primary)] transition-colors duration-500">
                <spec.icon className="w-12 h-12" />
              </div>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#111827] dark:text-white tracking-tighter-heading mb-2">
                    {spec.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm line-height-relaxed line-clamp-2">
                    {spec.description}
                  </p>
                </div>
                <div className="pt-4 mt-auto border-t border-gray-100 dark:border-white/5 flex justify-between items-center">
                  <span className="text-[10px] font-bold tracking-wide-label text-gray-400">
                    {spec.projects} Modules
                  </span>
                  <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors">
                    <svg className="w-3 h-3 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 12h14m-7-7l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}