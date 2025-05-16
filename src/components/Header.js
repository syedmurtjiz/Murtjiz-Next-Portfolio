'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const iconVariants = {
    hover: { scale: 1.1, rotate: 5 },
    tap: { scale: 0.95 }
  };

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent z-10"
          >
            MN
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 ml-auto">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-gray-600 hover:text-purple-400 transition-colors duration-300 font-medium ${pathname === item.href ? 'text-purple-500' : ''}`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-400"
                    layoutId="underline"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}

            {/* Social Links */}
            <div className="flex items-center space-x-4 border-l pl-4 border-gray-200">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={`desktop-${index}`}
                  whileHover="hover"
                  whileTap="tap"
                  variants={iconVariants}
                  className="text-[#0077B5] hover:text-[#0077B5]/80 transition-colors duration-300"
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="block"
                  >
                    {link.icon}
                  </Link>
                </motion.div>
              ))}
            </div>

            <Link
              href="/resume.pdf"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity duration-300"
            >
              Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-purple-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden px-4 py-6 absolute top-full left-0 w-full bg-white shadow-md`}
        >
          <ul className="flex flex-col space-y-4 text-center">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={toggleMenu}
                  className={`text-gray-600 hover:text-purple-400 transition-colors duration-300 font-medium text-lg ${pathname === item.href ? 'text-purple-500' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/resume.pdf"
                onClick={toggleMenu}
                className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity duration-300"
              >
                Resume
              </Link>
            </li>
            <li className="flex justify-center space-x-4 pt-4 border-t border-gray-200">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-400 transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;