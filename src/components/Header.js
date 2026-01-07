'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "@/components/shared/ThemeToggle";
import Magnetic from "@/components/shared/Magnetic";

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://www.linkedin.com/in/syedmurtjiz/', icon: <FaLinkedin size={20} />, label: 'LinkedIn' },
  { href: 'https://github.com/syedmurtjiz', icon: <FaGithub size={20} />, label: 'GitHub' },
  { href: 'https://x.com/Murtjiz_Naqvi', icon: <FaXTwitter size={20} />, label: 'X (Twitter)' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const menuVariants = {
    closed: { opacity: 0, y: "-100%" },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full bg-white/80 dark:bg-[#0d0907]/80 backdrop-blur-md border-b border-gray-100 dark:border-white/5 transition-all duration-300">
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--primary)] origin-left z-[110]"
        style={{ scaleX }}
      />

      <nav className="max-w-7xl mx-auto px-6 md:px-12 relative h-20 flex items-center justify-between">
        {/* Logo */}
        <Magnetic strength={0.2}>
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter-heading text-[#111827] dark:text-white group relative z-[110]"
          >
            MN<span className="text-[var(--primary)] transition-transform group-hover:inline-block group-hover:rotate-12 group-hover:translate-x-1">.</span>
          </Link>
        </Magnetic>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          {menuItems.map((item) => (
            <Magnetic key={item.href} strength={0.3}>
              <Link
                href={item.href}
                className={`group relative py-2 text-sm font-bold tracking-wide-label transition-colors duration-300 ${pathname === item.href
                  ? 'text-[var(--primary)]'
                  : 'text-gray-500 dark:text-gray-400 hover:text-[var(--primary)]'
                  }`}
              >
                {item.label}
                {/* Premium Hover Underline */}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[var(--primary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${pathname === item.href ? 'scale-x-100' : ''}`} />
              </Link>
            </Magnetic>
          ))}
          <div className="h-4 w-px bg-gray-200 dark:bg-white/10 mx-2" />
          <ThemeToggle />
          <Magnetic strength={0.1}>
            <Link
              href="/resume.pdf"
              className="px-6 py-2.5 rounded-xl bg-[#111827] dark:bg-white text-white dark:text-[#111827] text-xs font-black tracking-wide-label hover:scale-105 transition-transform duration-300 shimmer-effect overflow-hidden"
            >
              RESUME
            </Link>
          </Magnetic>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative z-[110] w-10 h-10 flex items-center justify-center text-gray-600 dark:text-white"
          aria-label="Toggle Navigation"
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <FaTimes size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <FaBars size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile Menu Overlay - Moved outside nav for better stacking context */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-white dark:bg-[#0d0907] z-[120] md:hidden flex flex-col"
            style={{ height: '100dvh' }}
          >
            {/* Background Layer with solid opacity */}
            <div className="absolute inset-0 bg-white dark:bg-[#0d0907] -z-20" />

            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-40 -z-10">
              <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[var(--primary)] blur-[120px] rounded-full" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[var(--primary-hover)] blur-[120px] rounded-full" />
            </div>

            <div className="flex flex-col items-center justify-start min-h-screen overflow-y-auto px-8 pt-32 pb-12 w-full relative z-10">
              <div className="flex flex-col items-center space-y-6 w-full mb-12">
                {menuItems.map((item) => (
                  <motion.div key={item.href} variants={itemVariants} className="w-full text-center">
                    <Link
                      href={item.href}
                      onClick={toggleMenu}
                      className={`block w-full py-3 text-4xl font-black tracking-tighter-heading transition-all duration-300 ${pathname === item.href
                        ? 'text-[var(--primary)] scale-105'
                        : 'text-[#111827] dark:text-white hover:text-[var(--primary)]'
                        }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={itemVariants}
                className="mt-auto pb-4 pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col items-center gap-8 w-full max-w-xs"
              >
                <div className="flex gap-10">
                  {socialLinks.map((link, i) => (
                    <motion.a
                      key={i}
                      href={link.href}
                      whileHover={{ y: -5, color: 'var(--primary)' }}
                      className="text-gray-400 dark:text-gray-500 transition-colors"
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
                <div className="scale-125">
                  <ThemeToggle />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;