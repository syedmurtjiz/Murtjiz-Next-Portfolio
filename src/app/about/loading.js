'use client';

import { motion } from 'framer-motion';
import PageHero from '@/components/shared/PageHero';

export default function AboutLoading() {
  return (
    <PageHero title="About Me" currentPage="about">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Profile Section */}
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-48 h-48 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
            <div className="flex-1 space-y-4">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
              <div className="space-y-2">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 animate-pulse mb-6"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageHero>
  );
}
