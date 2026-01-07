'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TypewriterText from '@/components/TypewriterText';
import { MdKeyboardArrowRight } from 'react-icons/md';

// Animation variants for reusability
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function PageHero({ title, currentPage, children }) {
  return (
    <div className="relative w-full">
      {/* Hero Section with Background */}
      <section className="relative h-[65vh] w-full overflow-hidden">
        {/* Background Image with Parallax Animation */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: `url('/bg.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Elite Dark Overlay */}
          <div className="absolute inset-0 bg-[#0d0907]/90 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d0907]" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-white max-w-7xl mx-auto w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Heading with Elite Type */}
            <div className="mb-6">
              <TypewriterText
                text={title}
                className="text-6xl md:text-8xl font-black tracking-tighter-heading line-height-tight"
              />
            </div>

            {/* Breadcrumb */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center gap-2 text-[var(--primary)] text-xs font-black tracking-wide-label"
            >
              <span className="opacity-40">Home</span>
              <MdKeyboardArrowRight size={16} className="opacity-40" />
              <span>{currentPage}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-transparent py-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </section>
    </div>
  );
}
