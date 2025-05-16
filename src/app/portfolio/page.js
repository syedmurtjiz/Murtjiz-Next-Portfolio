'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Projects from '@/components/Home/Projects';
import PageHero from '@/components/shared/PageHero';
import Image from 'next/image';

export default function RecentWorks() {
  // State to track the active filter button
  const [activeFilter, setActiveFilter] = useState('ALL');

  // Animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Animation variants for the buttons
  const buttonVariants = {
    initial: { scale: 1, opacity: 0.8 },
    hover: {
      scale: 1.05,
      opacity: 1,
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      background: [
        'linear-gradient(90deg, rgba(139, 92, 246, 0.9), rgba(79, 70, 229, 0.9))',
        'linear-gradient(90deg, rgba(236, 72, 153, 0.9), rgba(139, 92, 246, 0.9))',
        'linear-gradient(90deg, rgba(79, 70, 229, 0.9), rgba(236, 72, 153, 0.9))',
      ],
      transition: {
        background: { repeat: Infinity, duration: 3, ease: 'linear' },
        scale: { duration: 0.3 },
        opacity: { duration: 0.3 },
        boxShadow: { duration: 0.3 },
      },
    },
    active: {
      scale: 1.1,
      opacity: 1,
      background: 'linear-gradient(90deg, rgba(139, 92, 246, 1), rgba(236, 72, 153, 1))',
      boxShadow: '0 0 15px rgba(139, 92, 246, 0.5)',
      transition: { duration: 0.3 },
    },
  };

  // Animation for the Projects component
  const projectsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.6, ease: 'easeOut' },
    },
  };

  const filters = ['ALL', 'UX/UI', 'Branding', 'App'];

  return (
    <PageHero title="My Portfolio" currentPage="portfolio">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/gradient-bg.png"
          alt="Background"
          fill
          className="object-cover opacity-20 dark:opacity-10"
          priority
        />
      </div>

      {/* Subtle Animated Gradient Overlay */}
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10"
          animate={{
            background: [
              'linear-gradient(90deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1), rgba(79, 70, 229, 0.1))',
              'linear-gradient(90deg, rgba(236, 72, 153, 0.1), rgba(79, 70, 229, 0.1), rgba(139, 92, 246, 0.1))',
              'linear-gradient(90deg, rgba(79, 70, 229, 0.1), rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
            ],
          }}
          transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
        />
      </div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="relative z-10 py-16 px-6 md:px-12 text-center max-w-7xl mx-auto"
      >
        {/* Heading with Decorative Underline */}
        <div className="relative inline-block">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
          >
            My Recent Works
          </motion.h2>
          {/* Decorative Gradient Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '50%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
          />
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
        </motion.p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter, index) => (
            <motion.button
              key={index}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              animate={activeFilter === filter ? 'active' : 'initial'}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold text-white backdrop-blur-sm border border-gray-100/20 dark:border-gray-700/20 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                  : 'bg-purple-700/80'
              }`}
              aria-label={`Filter projects by ${filter}`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Projects Component */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={projectsVariants}
        >
          <Projects activeFilter={activeFilter} />
        </motion.div>
      </motion.section>
    </PageHero>
  );
}