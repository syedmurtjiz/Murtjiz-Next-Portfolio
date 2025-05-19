'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaUserTie } from 'react-icons/fa';
import TypewriterText from '../TypewriterText';

/**
 * Education data
 * @type {Array<{title: string, institution: string, date: string, location: string}>}
 */
const education = [
  {
    title: 'B.S. in Computer Software',
    institution: 'Foundation University',
    date: 'September 2024',
    location: 'Islamabad, PK',
  },
  {
    title: 'Intermediate in Computer Science',
    institution: 'MCQs College',
    date: 'September 2018',
    location: 'Lahore, PK',
  },
];

/**
 * Experience data
 * @type {Array<{title: string, details: string, company: string, date: string}>}
 */
const experience = [
  {
    title: 'Front-End Developer',
    details: 'Developed responsive, high-performance web applications using HTML, CSS, JavaScript, and React.js.',
    company: 'Peham Ltd.',
    date: 'July 2024',
  },
  {
    title: 'UI/UX Designer',
    details: 'Enhanced user experience through intuitive, visually appealing interface designs.',
    company: 'Peham Ltd.',
    date: 'September 2024',
  },
  {
    title: 'Code Review Specialist',
    details: 'Conducted thorough code evaluations and peer reviews to ensure quality and consistency.',
    company: 'Peham Ltd.',
    date: 'September 2024',
  },
  {
    title: 'Web Developer Intern',
    details: 'Contributed to product design and development, focusing on front-end solutions.',
    company: 'Peham Ltd.',
    date: 'October 2024',
  },
];

/**
 * Past roles data
 * @type {Array<{title: string, details: string, company: string, date: string}>}
 */
const pastRoles = [
  {
    title: 'Web Developer Intern',
    details: 'Supported development of HTML, CSS, and JavaScript-based web projects.',
    company: 'Peham Ltd.',
    date: 'June 2024',
  },
  {
    title: 'Web Developer Intern',
    details: 'Assisted in web development and user interface design initiatives.',
    company: 'Peham Ltd.',
    date: 'August 2024',
  },
  {
    title: 'Web Developer Intern',
    details: 'Collaborated on code reviews and problem-solving for web applications.',
    company: 'Peham Ltd.',
    date: 'September 2024',
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

// Animation variants for items
const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
    },
  },
};

// Animation variants for timeline dots
const timelineDotVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

/**
 * EducationExperience component displaying academic and professional background
 * @returns {JSX.Element} The rendered EducationExperience section
 */
export default function EducationExperience() {
  return (
    <div
      className="p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl w-full max-w-7xl mx-auto relative overflow-hidden border border-gray-200 text-gray-900 transition-all duration-500 hover:scale-[1.01] md:hover:scale-[1.02] focus-within:ring-2 focus-within:ring-blue-400"
      id="education-experience"
      aria-labelledby="education-experience-heading"
      role="region"
    >
      {/* Subtle Glow Effect */}
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-pink-500/10 opacity-50 blur-3xl rotate-45 -z-10"></div>
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          <TypewriterText
            text="Academic & Professional Background"
            id="education-experience-heading"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Education Column */}
          <motion.article
            variants={itemVariants}
            className="p-4 sm:p-5 md:p-6 rounded-lg border border-gray-200 hover:border-blue-400/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400"
            aria-labelledby="education-heading"
            tabIndex={0}
          >
            <h3
              id="education-heading"
              className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6 text-white flex items-center gap-2 border-b border-blue-400/30 pb-2 sm:pb-3"
            >
              <FaGraduationCap className="text-purple-400 text-lg sm:text-xl" aria-hidden="true" />
              Education
            </h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative pl-6 sm:pl-8 mb-4 sm:mb-6 last:mb-0"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <motion.div
                  className="absolute left-0 top-1 sm:top-1.5 w-2 sm:w-3 h-2 sm:h-3 bg-blue-400 rounded-full shadow-sm"
                  variants={timelineDotVariants}
                />
                <div className="absolute left-[3.5px] sm:left-[5.5px] top-3 sm:top-5 h-[calc(100%-0.75rem)] sm:h-[calc(100%-1.25rem)] w-[2px] bg-blue-400/50" />
                <p className="text-sm sm:text-base font-medium text-white">{edu.title}</p>
                <p className="text-xs sm:text-sm mt-1 text-white/80">{edu.institution}</p>
                <p className="text-xs mt-1 text-blue-600">
                  {edu.date} • {edu.location}
                </p>
              </motion.div>
            ))}
          </motion.article>

          {/* Experience Column */}
          <motion.article
            variants={itemVariants}
            className="p-4 sm:p-5 md:p-6 rounded-lg border border-white-700/20 hover:border-blue-400/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400"
            aria-labelledby="experience-heading"
            tabIndex={0}
          >
            <h3
              id="experience-heading"
              className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6 text-gray-100 flex items-center gap-2 border-b border-blue-400/30 pb-2 sm:pb-3"
            >
              <FaCode className="text-blue-400 text-lg sm:text-xl" aria-hidden="true" />
              Professional Experience
            </h3>
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-6 sm:pl-8 mb-4 sm:mb-6 last:mb-0"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <motion.div
                  className="absolute left-0 top-1 sm:top-1.5 w-2 sm:w-3 h-2 sm:h-3 bg-blue-400 rounded-full shadow-sm"
                  variants={timelineDotVariants}
                />
                <div className="absolute left-[3.5px] sm:left-[5.5px] top-3 sm:top-5 h-[calc(100%-0.75rem)] sm:h-[calc(100%-1.25rem)] w-[2px] bg-blue-400/50" />
                <p className="text-sm sm:text-base font-medium text-gray-200">{exp.title}</p>
                <p className="text-xs sm:text-sm mt-1 text-gray-400">{exp.details}</p>
                <p className="text-xs mt-1 text-blue-300">
                  {exp.date} | {exp.company}
                </p>
              </motion.div>
            ))}
          </motion.article>

          {/* Past Roles Column */}
          <motion.article
            variants={itemVariants}
            className="p-4 sm:p-5 md:p-6 rounded-lg border border-white-700/20 hover:border-blue-400/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400"
            aria-labelledby="past-roles-heading"
            tabIndex={0}
          >
            <h3
              id="past-roles-heading"
              className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6 text-gray-100 flex items-center gap-2 border-b border-blue-400/30 pb-2 sm:pb-3"
            >
              <FaUserTie className="text-blue-400 text-lg sm:text-xl" aria-hidden="true" />
              Previous Roles
            </h3>
            {pastRoles.map((role, index) => (
              <motion.div
                key={index}
                className="relative pl-6 sm:pl-8 mb-4 sm:mb-6 last:mb-0"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <motion.div
                  className="absolute left-0 top-1 sm:top-1.5 w-2 sm:w-3 h-2 sm:h-3 bg-blue-400 rounded-full shadow-sm"
                  variants={timelineDotVariants}
                />
                <div className="absolute left-[3.5px] sm:left-[5.5px] top-3 sm:top-5 h-[calc(100%-0.75rem)] sm:h-[calc(100%-1.25rem)] w-[2px] bg-blue-400/50" />
                <p className="text-sm sm:text-base font-medium text-gray-200">{role.title}</p>
                <p className="text-xs sm:text-sm mt-1 text-gray-400">{role.details}</p>
                <p className="text-xs mt-1 text-blue-300">
                  {role.date} | {role.company}
                </p>
              </motion.div>
            ))}
          </motion.article>
        </motion.div>
      </div>
    </div>
  );
}