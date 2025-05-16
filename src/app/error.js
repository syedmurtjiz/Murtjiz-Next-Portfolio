'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <motion.div
        className="max-w-md w-full mx-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center">
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full mb-4"
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {error.message || 'An unexpected error occurred'}
          </p>
          <motion.button
            onClick={reset}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try Again
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
