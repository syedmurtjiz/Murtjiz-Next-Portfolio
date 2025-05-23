'use client';

import Image from 'next/image';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Typewriter effect component for the heading
const TypewriterText = ({ text }) => {
  const characters = text.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Speed of typing (delay between characters)
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text 
        bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 
        leading-tight mb-4 relative inline-block text-gray-900"
    >
      {characters.map((char, index) => (
        <motion.span key={index} variants={charVariants}>
          {char}
        </motion.span>
      ))}
      {/* Blinking Cursor */}
      <motion.span
        className="inline-block w-1 h-8 md:h-10 bg-purple-400 ml-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      />
    </motion.h1>
  );
};

export default function Hero() {
  // Animation variants for other elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1.5, // Delay to sync with typewriter effect
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const MotionLink = motion(Link);
  MotionLink.displayName = 'MotionLink';

  const iconVariants = {
    hover: { scale: 1.2, rotate: 10 },
  };

  return (
    <div className="rounded-2xl p-12 md:p-16 flex flex-col md:flex-row items-center 
      space-y-8 md:space-y-0 md:space-x-12 w-full max-w-6xl mx-auto 
      transform transition-all duration-500 hover:scale-[1.02] 
      relative overflow-hidden mt-24 md:mt-32 py-16 md:py-24
      border border-gray-200 text-gray-900">
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-pink-500/10 opacity-50 blur-3xl rotate-45 -z-10"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative h-64 w-64 md:h-80 md:w-80 group"
      >
        {/* Multiple Gradient Layers */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 via-pink-500/20 to-indigo-500/30 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-xl blur-2xl z-0 group-hover:scale-110"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/30 via-purple-500/20 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-xl blur-2xl z-0 group-hover:scale-110 delay-75"></div>
        
        {/* Animated Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-xl z-0 animate-gradient-xy"></div>
        
        {/* Image Container */}
        <div className="relative h-full w-full transform transition-all duration-700 group-hover:scale-95 z-10">
          <Image
            src="/syed.jpg"
            alt="Profile of Web Designer and Developer"
            fill
            className="object-cover object-top rounded-xl shadow-lg transition-all duration-700 group-hover:saturate-150"
          />
        </div>
      </motion.div>

      {/* Text and Buttons */}
      <div className="flex-1 text-center md:text-left">
        {/* Typewriter Heading */}
        <TypewriterText text="Hello, I'm a Web Designer & Developer" />

        {/* Other Text and Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-medium leading-relaxed max-w-md mx-auto md:mx-0 text-gray-700"
          >
            Crafting elegant, user-focused web experiences that blend innovative design with cutting-edge technology.
          </motion.p>

          {/* Button and Social Icons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0"
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md focus:outline-none focus:ring-4 focus:ring-purple-500/50"
              aria-label="Connect with Me"
            >
              Connect with Me
            </motion.button>
            <div className="flex space-x-6">
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                transition={{ duration: 0.3 }}
                className="transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full p-1 text-gray-700 hover:text-purple-600"
              >
                <MotionLink
                  href="https://x.com/Murtjiz_Naqvi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter) Profile"
                  className="block"
                >
                  <FaXTwitter size={28} />
                </MotionLink>
              </motion.div>
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                transition={{ duration: 0.3 }}
                className="transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full p-1 text-gray-700 hover:text-purple-600"
              >
                <MotionLink
                  href="https://github.com/syedmurtjiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="block"
                >
                  <FaGithub size={28} />
                </MotionLink>
              </motion.div>
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                transition={{ duration: 0.3 }}
                className="transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full p-1 text-gray-700 hover:text-purple-600"
              >
                <MotionLink
                  href="/portfolio"
                  aria-label="Portfolio"
                  className="block"
                >
                  <FaGlobe size={28} />
                </MotionLink>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}