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
import { useScroll, useSpring, useTransform } from 'framer-motion';

export default function EducationExperience() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="w-full relative bg-[var(--background-contrast)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-[var(--primary)] font-bold tracking-wide-label text-xs mb-4 block">Chronicle</span>
            <TypewriterText
              text="Evolution & Heritage"
              id="education-experience-heading"
              className="text-4xl md:text-5xl font-black text-[#111827] dark:text-[#f5e6d3] tracking-tighter-heading line-height-tight mb-4"
              as="h2"
            />
            <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-400 text-lg line-height-relaxed">
              A timeline of academic milestones and professional milestones that define my creative trajectory.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          {/* Vertical Timeline Divider for LG screens */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10 -translate-x-1/2 overflow-hidden">
            <motion.div
              style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
              className="w-full bg-[var(--primary)] shadow-[0_0_15px_var(--primary)]"
            />
          </div>

          {/* Education Column */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#1a100e] shadow-xl flex items-center justify-center text-[var(--primary)] border border-gray-100 dark:border-white/5">
                <FaGraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-black text-[#111827] dark:text-white tracking-tighter-heading">Foundations</h3>
            </div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 group"
              >
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-white dark:bg-[#120a08] border-2 border-[var(--primary)] group-hover:scale-150 transition-transform duration-300 z-10" />
                <span className="text-[10px] font-black tracking-wide-label text-[var(--primary)] mb-1 block">
                  {edu.date}
                </span>
                <h4 className="text-xl font-bold text-[#111827] dark:text-white tracking-tighter-heading mb-1">
                  {edu.title}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 font-medium mb-1">{edu.institution}</p>
                <p className="text-xs text-gray-400">{edu.location}</p>
              </motion.div>
            ))}
          </div>

          {/* Experience Column */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#1a100e] shadow-xl flex items-center justify-center text-[var(--primary)] border border-gray-100 dark:border-white/5">
                <FaCode size={24} />
              </div>
              <h3 className="text-2xl font-black text-[#111827] dark:text-white tracking-tighter-heading">Impact</h3>
            </div>

            {experience.slice(0, 3).map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 group"
              >
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-white dark:bg-[#120a08] border-2 border-[var(--primary)] group-hover:scale-150 transition-transform duration-300 z-10" />
                <div className="absolute left-1.5 top-5 bottom-0 w-px bg-gray-100 dark:bg-white/5 last:hidden" />
                <span className="text-[10px] font-black tracking-wide-label text-[var(--primary)] mb-1 block">
                  {exp.date} • {exp.company}
                </span>
                <h4 className="text-xl font-bold text-[#111827] dark:text-white tracking-tighter-heading mb-1">
                  {exp.title}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm line-height-relaxed">
                  {exp.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}