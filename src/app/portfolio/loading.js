'use client';

import { motion } from 'framer-motion';
import PageHero from '@/components/shared/PageHero';

export default function PortfolioLoading() {
  return (
    <PageHero title="My Portfolio" currentPage="portfolio">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
              <div className="p-6 space-y-4">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
                <div className="flex flex-wrap gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"
                    ></div>
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
