'use client';

import { motion } from 'framer-motion';
import Specialization from '@/components/Home/Specialization';
import PageHero from '@/components/shared/PageHero';
import Image from 'next/image';

const reasons = [
  {
    title: 'Innovative Solutions',
    description: 'Crafting cutting-edge solutions using the latest technologies and industry best practices.',
    icon: '✨',
    color: 'purple',
  },
  {
    title: 'Client-Focused Approach',
    description: 'Delivering tailored solutions that align seamlessly with your unique business needs.',
    icon: '🎯',
    color: 'pink',
  },
  {
    title: 'Fast & Responsive',
    description: 'Ensuring quick turnaround times and proactive communication throughout your project.',
    icon: '⚡',
    color: 'purple',
  },
  {
    title: 'Quality Commitment',
    description: 'Dedicated to delivering polished, high-quality results that exceed expectations.',
    icon: '💎',
    color: 'pink',
  },
];

export default function WhyChooseMe() {
  // Animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hover: {
      scale: 1.03,
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
      transition: { duration: 0.3 },
    },
  };

  // Color-shifting glow effect for hover
  const glowVariants = {
    initial: { opacity: 0 },
    hover: {
      opacity: 0.3,
      background: [
        'linear-gradient(90deg, rgba(139, 92, 246, 0.5), rgba(79, 70, 229, 0.5))',
        'linear-gradient(90deg, rgba(236, 72, 153, 0.5), rgba(139, 92, 246, 0.5))',
        'linear-gradient(90deg, rgba(79, 70, 229, 0.5), rgba(236, 72, 153, 0.5))',
      ],
      transition: {
        background: { repeat: Infinity, duration: 3, ease: 'linear' },
        opacity: { duration: 0.3 },
      },
    },
  };

  return (
    <PageHero title="Our Services" currentPage="services">
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
      
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="relative z-10 bg-gradient-to-r from-purple-500/5 to-pink-500/5 dark:from-purple-900/10 dark:to-pink-900/10 py-16 px-6 md:px-12 rounded-3xl shadow-xl mx-auto max-w-6xl my-16 gap-8"
      >
      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mt-12 mb-8"
      >
        Why Choose Me?
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative p-6 bg-white/70 dark:bg-gray-800/70 rounded-xl backdrop-blur-sm border border-gray-100/20 dark:border-gray-700/20 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 overflow-hidden"
          >
            {/* Color-Shifting Glow Layer */}
            <motion.div
              variants={glowVariants}
              initial="initial"
              whileHover="hover"
              className="absolute inset-0 rounded-xl z-0 blur-md"
            ></motion.div>
            <div className="relative z-10 flex items-center space-x-4">
              <span className="text-3xl">{reason.icon}</span>
              <div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    reason.color === 'purple'
                      ? 'text-purple-600 dark:text-purple-400'
                      : 'text-pink-600 dark:text-pink-400'
                  }`}
                >
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
            {/* Decorative Line */}
            <div
              className={`absolute bottom-0 left-6 w-16 h-1 ${
                reason.color === 'purple' ? 'bg-purple-600' : 'bg-pink-600'
              } rounded-full`}
            ></div>
          </motion.div>
        ))}
      </div>
      </motion.section>
      <Specialization className="mt-12"/>
    </PageHero>
  );
}