'use client';

import React from 'react';
import PageHero from '@/components/shared/PageHero';
import Education from '@/components/Home/Education';
import Skills from '@/components/Home/Skills';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <PageHero title="About Me" currentPage="about">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="fixed inset-0 z-0"
        initial={{ y: 0 }}
        animate={{ y: 50 }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 10, ease: 'linear' }}
      >
        <Image
          src="/images/gradient-bg.png"
          alt="Background"
          fill
          className="object-cover opacity-20 dark:opacity-10"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 space-y-24 py-12 container mx-auto px-4">
        <Education />
        <Skills />
      </div>
    </PageHero>
  );
}