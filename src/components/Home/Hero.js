'use client';

import Image from 'next/image';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import TypewriterText from '@/components/TypewriterText';
import Magnetic from '@/components/shared/Magnetic';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, 50]);
  const rotate = useTransform(scrollY, [0, 500], [0, 5]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
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
    <div className="w-full relative overflow-hidden mt-24 md:mt-32 py-16 md:py-24 text-gray-900 bg-white dark:bg-[#120a08]">
      <div className="max-w-6xl mx-auto px-12 md:px-16 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ y: y1, rotate }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative h-80 w-64 md:h-[450px] md:w-[350px] group z-20"
        >
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1500}
            gyroscope={true}
            className="h-full w-full"
          >
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl dark:shadow-white/5 premium-shadow glass-card">
              <Image
                src="/syed.jpeg"
                alt="Profile of Web Designer and Developer"
                fill
                className="object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:saturate-150"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-[var(--primary)] opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-700 -z-10" />
          </Tilt>
        </motion.div>

        {/* Text and Buttons */}
        <motion.div
          style={{ y: y2 }}
          className="flex-1 text-center md:text-left"
        >
          {/* Typewriter Heading */}
          <TypewriterText
            text="Architecting the next generation of digital excellence."
            as="h1"
            className="text-5xl md:text-7xl font-black text-[#111827] dark:text-white tracking-tighter-heading line-height-tight mb-8 text-shimmer"
            stagger={0.06}
          />

          {/* Other Text and Buttons */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl font-medium leading-relaxed max-w-xl mx-auto md:mx-0 text-gray-500 dark:text-gray-400 mb-12"
            >
              Syed Murtjiz Naqvi — Senior Full-Stack Engineer specializing in high-performance architectures and immersive human-centric interfaces.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row items-center md:space-x-10 space-y-8 md:space-y-0"
            >
              <Magnetic strength={0.1}>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-[var(--primary)] text-white font-black tracking-wide-label py-5 px-10 rounded-2xl transition-all duration-300 shadow-2xl shadow-[var(--primary)]/30 focus:outline-none shimmer-effect overflow-hidden min-w-[240px]"
                  aria-label="Connect with Me"
                >
                  START A PROJECT
                </motion.button>
              </Magnetic>
              <div className="flex space-x-6">
                {[
                  { href: "https://x.com/Murtjiz_Naqvi", icon: <FaXTwitter size={28} />, label: "X" },
                  { href: "https://github.com/syedmurtjiz", icon: <FaGithub size={28} />, label: "GitHub" },
                  { href: "/portfolio", icon: <FaGlobe size={28} />, label: "Globe" }
                ].map((social, i) => (
                  <Magnetic key={i} strength={0.3}>
                    <motion.div
                      variants={iconVariants}
                      whileHover="hover"
                      transition={{ duration: 0.3 }}
                      className="transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#d4a373] rounded-full p-1 text-gray-700 dark:text-[#f5e6d3]/80 hover:text-[#d4a373]"
                    >
                      <Link
                        href={social.href}
                        target={social.href.startsWith('http') ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="block"
                      >
                        {social.icon}
                      </Link>
                    </motion.div>
                  </Magnetic>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}