'use client';

import { motion } from 'framer-motion';
import PageHero from '@/components/shared/PageHero';

export default function ContactLoading() {
  return (
    <PageHero title="Contact Me" currentPage="contact">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
              <div className="space-y-4">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {[...Array(4)].map((_, index) => (
                <div key={index} className="space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 animate-pulse"></div>
                  <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              ))}
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-1/3 animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageHero>
  );
}
