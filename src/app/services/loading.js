'use client';

import { motion } from 'framer-motion';
import PageHero from '@/components/shared/PageHero';

export default function ServicesLoading() {
  return (
    <PageHero title="My Services" currentPage="services">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse mb-4"></div>
              <div className="space-y-4">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
                <div className="space-y-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageHero>
  );
}
