'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
  // Component logic here

  return (
    <footer className="p-10 rounded-2xl w-full max-w-6xl mx-auto relative overflow-hidden transform transition-all duration-500 hover:scale-[1.02] border border-gray-200 text-gray-900 mt-[100px]" style={{ position: 'relative' }}>
      {/* Subtle Glow Effect */}
      
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10" style={{ position: 'relative' }}>
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
          <ul className="space-y-4 text-gray-700">
            <li>Email: <a href="mailto:murtjiznaqvi@gmail.com" className="hover:text-purple-600 transition-colors duration-300">murtjiznaqvi@gmail.com</a></li>
            <li>Phone: <a href="https://wa.me/923447470874" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-purple-600 transition-colors duration-300">
              <FaWhatsapp className="mr-2" size={16} />
              +92 344 7470874
            </a></li>
            <li>Location: <span className="hover:text-purple-600 transition-colors duration-300">Pakistan</span></li>
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
          <ul className="space-y-4 text-gray-700">
            <li><Link href="/" className="hover:text-purple-600 transition-colors duration-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-purple-600 transition-colors duration-300">About</Link></li>
            <li><Link href="/portfolio" className="hover:text-purple-600 transition-colors duration-300">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-purple-600 transition-colors duration-300">Contact</Link></li>
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
          <ul className="flex justify-center space-x-6 mt-6">
            <li>
              <a 
                href="https://x.com/Murtjiz_Naqvi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaXTwitter size={24} />
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/syedmurtjiz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/syedmurtjiz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
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
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Murtjiz Naqvi. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;