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
    <section className="w-full max-w-6xl mx-auto border-0 sm:border border-gray-200 rounded-2xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8 relative">
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-purple-500/5 via-indigo-500/5 to-pink-500/5 rounded-2xl"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-12">
                                <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.5 }}
                                  className="text-3xl font-extrabold text-white sm:text-4xl"
                                >
                                  <TypewriterText text="Areas of Expertise" id="specializations-heading" />
                                  <p className="mt-3 max-w-2xl mx-auto text-gray-300 sm:mt-4 text-sm sm:text-base">
                                  Specialized skills delivering innovative, high-quality solutions for modern web development challenges.
                                  </p>
                                </motion.div>
                              </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {specializations.map((spec, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
              className="relative  p-6 rounded-xl shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 group focus-within:ring-2 focus-within:ring-blue-500"
              aria-labelledby={`specialization-title-${index}`}
              tabIndex={0}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(59,130,246,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <div className="relative z-10">
                <motion.div
                  variants={iconVariants}
                  className="flex justify-center mb-5"
                >
                  <spec.icon
                    className="w-10 h-10"
                    style={{ color: spec.color }}
                    aria-hidden="true"
                  />
                </motion.div>
                <h3
                  id={`specialization-title-${index}`}
                  className="text-xl font-semibold text-white/70 text-center mb-3"
                >
                  {spec.title}
                </h3>
                <p className="text-white text-sm leading-relaxed text-center mb-4">
                  {spec.description}
                </p>
                <p className="text-white/70 font-medium text-center text-sm">
                  {spec.projects} {spec.projects === 1 ? 'Project' : 'Projects'} Completed
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}