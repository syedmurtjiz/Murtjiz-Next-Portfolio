'use client';

import { motion } from 'framer-motion';
import { FaHtml5, FaJsSquare, FaReact, FaCss3Alt, FaDraftingCompass, FaLaptopCode } from 'react-icons/fa';
import TypewriterText from '../TypewriterText';

export default function Skills() {
  const skills = [
    { name: 'HTML', percentage: 92, icon: FaHtml5, color: '#E34F26' },
    { name: 'JavaScript', percentage: 50, icon: FaJsSquare, color: '#F7DF1E' },
    { name: 'React', percentage: 50, icon: FaReact, color: '#61DAFB' },
    { name: 'CSS', percentage: 92, icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Website Design', percentage: 39, icon: FaDraftingCompass, color: '#FF7F50' },
    { name: 'Computer Science', percentage: 30, icon: FaLaptopCode, color: '#4CAF50' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <div className="p-10 rounded-2xl w-full max-w-6xl mx-auto relative overflow-hidden transform transition-all duration-500 hover:scale-[1.02] border border-gray-200 text-gray-900">
      {/* Subtle Glow Effect */}
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%]"></div>

      <div className="text-center mb-12">
        <TypewriterText text="My Skills" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-700"
        >
          I bring your ideas to life through unique, cutting-edge web projects that captivate and inspire both you and your audience.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="relative rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 bg-black/10"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex justify-center mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <skill.icon 
                  className="w-20 h-20 text-gray-800" 
                  style={{ color: skill.color }} 
                />
              </motion.div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 text-white">
              {skill.name}
            </h3>
            <div className="w-full rounded-full h-4 overflow-hidden bg-gray-200/50">
              <motion.div
                className="h-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
                initial={{ width: 0 }}
                animate={{ width: `${skill.percentage}%` }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
              ></motion.div>
            </div>
            <p className="text-center mt-2 text-gray-600">
              {skill.percentage}%
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}