'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCode, FaDesktop, FaReact, FaServer } from 'react-icons/fa';
import TypewriterText from '../TypewriterText';


const specializations = [
  {
    title: 'Website Design',
    description: 'Designing visually compelling and user-focused websites using HTML, CSS, and JavaScript.',
    projects: 5,
    icon: FaCode,
    color: '#D32F2F',
  },
  {
    title: 'Front-End Development',
    description: 'Developing responsive, high-performance web applications with React.js for superior user engagement.',
    projects: 22,
    icon: FaDesktop,
    color: '#1976D2',
  },
  {
    title: 'React Development',
    description: 'Executing intricate React-based projects with precision, scalability, and optimal performance.',
    projects: 10,
    icon: FaReact,
    color: '#00ACC1',
  },
  {
    title: 'API Development',
    description: 'Architecting secure, scalable APIs to drive seamless application integration and functionality.',
    projects: 3,
    icon: FaServer,
    color: '#388E3C',
  },
];

// Animation variants for container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 20,
    },
  },
};

// Animation variants for icons
const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

/**
 * Specialization component displaying areas of expertise
 * @returns {JSX.Element} The rendered Specialization section
 */
export default function Specialization() {

  return (
    <div className="p-10 rounded-2xl  w-full max-w-6xl mx-auto relative overflow-hidden transform transition-all duration-500 hover:scale-[1.02] border border-gray-200 text-gray-900">
      <div className="rounded-xl ">
        {/* Subtle background overlay */}
        <div className="absolute inset-0 blur-3xl " />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12 relative z-10"
        >
          <TypewriterText text="Core Competencies" id="specializations-heading" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {specializations.map((spec, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)' }}
              className="p-6 rounded-lg border border-gray-700/20 hover:border-blue-400/30 transition-all duration-300 relative group focus-within:ring-2 focus-within:ring-blue-400"
              aria-labelledby={`specialization-title-${index}`}
              tabIndex={0}
            >
              <div className="absolute inset-0  group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <div className="relative z-10">
                <motion.div
                  variants={iconVariants}
                  className="flex justify-center mb-4"
                >
                  <spec.icon className="w-8 h-8" style={{ color: spec.color }} aria-hidden="true" />
                </motion.div>
                <h3
                  id={`specialization-title-${index}`}
                  className="text-lg font-medium mb-2 text-center text-white"
                >
                  {spec.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 text-center text-white/80">{spec.description}</p>
                <p className="text-white/80 font-medium text-center text-sm">
                  {spec.projects} Projects
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 relative z-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
