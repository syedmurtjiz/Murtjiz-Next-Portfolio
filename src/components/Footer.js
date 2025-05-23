'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';
import Link from 'next/link';

const Footer = () => {
  // Component logic here

  return (
    <footer className="w-full max-w-6xl mx-auto border-0 sm:border border-gray-200 rounded-2xl py-12 pl-10 sm:pl-6 lg:py-16 lg:px-8 relative mt-20">
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-purple-500/5 via-indigo-500/5 to-pink-500/5 rounded-2xl"></div>
      
      <div className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
          style={{ position: 'relative' }}
        >
          <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500">
            Contact
          </h3>
          <ul className="space-y-4 text-white/60">
            <li className="flex items-center justify-center md:justify-start">
              <span className="mr-2">Email:</span>
              <a href="mailto:syedmurtjiz@gmail.com" className="hover:text-purple-400 transition-colors duration-300">syedmurtjiz@gmail.com</a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Link href="https://wa.me/923447470874" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors duration-300 flex items-center">
                <FaWhatsapp className="mr-2" size={16} />
                +92 344 7470874
              </Link>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <span className="mr-2">Location:</span>
              <span className="hover:text-purple-400 transition-colors duration-300">Pakistan</span>
            </li>
          </ul>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500">
            Quick Links
          </h3>
          <ul className="space-y-4 text-white/60 text-center">
            <li><Link href="/" className="block hover:text-purple-400 transition-colors duration-300">Home</Link></li>
            <li><Link href="/about" className="block hover:text-purple-400 transition-colors duration-300">About</Link></li>
            <li><Link href="/portfolio" className="block hover:text-purple-400 transition-colors duration-300">Portfolio</Link></li>
            <li><Link href="/contact" className="block hover:text-purple-400 transition-colors duration-300">Contact</Link></li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500">
            Connect
          </h3>
          <ul className="flex justify-center space-x-4 sm:space-x-6 mt-4 sm:mt-6 text-white/80 w-full">
            <li>
              <Link href="https://wa.me/923447470874" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors duration-300">
                <FaWhatsapp size={24} />
              </Link>
            </li>
            <li>
              <Link href="https://x.com/Murtjiz_Naqvi" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors duration-300">
                <FaXTwitter size={24} />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/syedmurtjiz" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors duration-300">
                <FaGithub size={24} />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/syedmurtjiz/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors duration-300">
                <FaLinkedin size={24} />
              </Link>
            </li>
          </ul>
        </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 pt-6 border-t border-gray-200/50"
        >
          <p className="text-sm sm:text-base text-white/80">
            &copy; {new Date().getFullYear()} Murtjiz Naqvi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;