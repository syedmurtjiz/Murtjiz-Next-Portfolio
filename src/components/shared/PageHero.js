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
      <section className="relative h-[80vh] w-screen left-1/2 -translate-x-1/2">
        {/* Background Image with Parallax Animation */}
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
          style={{
            backgroundImage: `url('/bg.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100vw',
            height: '100%',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {/* Gradient Overlay for Better Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-white sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Heading with Typewriter Effect */}
            <div className="mb-4">
              <TypewriterText text={title} className="text-5xl font-bold" />
            </div>

            {/* Breadcrumb */}
            <motion.p
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="text-lg text-white/80 md:text-xl"
            >
              Home <MdKeyboardArrowRight className="inline-block mx-2 text-gray-400" size={20} /> {currentPage}
            </motion.p>
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
