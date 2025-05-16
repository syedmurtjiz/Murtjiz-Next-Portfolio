'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        <motion.p 
          className="text-lg text-gray-700 dark:text-gray-300 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
}
