'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import PageHero from '@/components/shared/PageHero';

export default function PortfolioError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageHero title="My Portfolio" currentPage="portfolio">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="max-w-md mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full mb-6"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <svg
              className="w-8 h-8 text-red-600 dark:text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Failed to Load Portfolio
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            {error.message || 'An error occurred while loading the portfolio items'}
          </p>
          <motion.button
            onClick={reset}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try Again
          </motion.button>
        </motion.div>
      </div>
    </PageHero>
  );
}
