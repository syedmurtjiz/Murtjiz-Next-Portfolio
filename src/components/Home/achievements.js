'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FaTrophy, FaSuitcase, FaEquals, FaCrown, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import TypewriterText from '../TypewriterText';

export default function Achievements() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const achievements = [
    { 
      icon: FaTrophy, 
      badgeIcon: FaCheckCircle, 
      title: 'KelvinWeather Project', 
      description: 'Developed a comprehensive weather application with real-time data and advanced forecasting', 
      progress: 100, 
      color: resolvedTheme === 'dark' ? '#FFD700' : '#FFA500' 
    },
    { 
      icon: FaSuitcase, 
      badgeIcon: FaCrown, 
      title: 'Freelance Excellence', 
      description: 'Delivered cutting-edge web solutions for diverse clients, ensuring high-quality, scalable applications', 
      progress: 90, 
      color: resolvedTheme === 'dark' ? '#4A90E2' : '#2196F3' 
    },
    { 
      icon: FaEquals, 
      badgeIcon: FaCheckCircle, 
      title: 'Open Source Impact', 
      description: 'Active contributor to community-driven projects, enhancing collaborative software development', 
      progress: 80, 
      color: resolvedTheme === 'dark' ? '#2ECC71' : '#4CAF50' 
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  if (!mounted) return null;

  return (
    <div className={`
      p-10 rounded-2xl w-full max-w-6xl mx-auto relative overflow-hidden 
      transform transition-all duration-500 hover:scale-[1.02] 
      ${resolvedTheme === 'dark' 
        ? 'text-gray-100 border border-gray-800' 
        : 'text-gray-900 border border-gray-200'}
    `}>
      {/* Subtle Glow Effect */}
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-pink-500/10 opacity-50 blur-3xl rotate-45 -z-10"></div>
      
      {/* Typewriter Heading */}
      <div className="flex justify-center items-center w-full mb-8">
        <TypewriterText text="Professional Achievements" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className={`
              p-6 rounded-xl shadow-lg transition-all duration-500 group relative overflow-hidden 
              border hover:border-purple-400 
              ${resolvedTheme === 'dark' 
                ? 'border-gray-800 hover:border-purple-700' 
                : 'border-gray-200 hover:border-purple-500'}
            `}
          >
            <div className="flex items-center mb-4">
              <achievement.icon 
                className={`text-4xl mr-4 ${resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`} 
                style={{ color: achievement.color }} 
              />
              <h3 className={`text-xl font-bold ${resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                {achievement.title}
              </h3>
            </div>
            <p className={`mb-4 ${resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {achievement.description}
            </p>
            <div className={`w-full rounded-full h-2.5 ${resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div 
                className="h-2.5 rounded-full transition-all duration-500"
                style={{ 
                  backgroundColor: achievement.color,
                  width: `${achievement.progress}%`
                }}
              ></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}