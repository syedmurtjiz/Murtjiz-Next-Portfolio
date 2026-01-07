'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import PageHero from '@/components/shared/PageHero';
import PortfolioGrid from '@/components/PortfolioGrid';

export default function RecentWorks() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = ['ALL', 'UX/UI', 'Branding', 'App'];

  return (
    <PageHero title="Strategic Works" currentPage="portfolio">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 relative z-10">
        {/* Header Section */}
        <div className="mb-20">
          <span className="text-[var(--primary)] font-black tracking-wide-label text-xs mb-4 block">Selected Works</span>
          <h2 className="text-5xl md:text-7xl font-black text-[#111827] dark:text-white tracking-tighter-heading line-height-tight mb-8">
            Visualizing <span className="text-gray-300 dark:text-white/20">Complex</span> <br /> Architecture.
          </h2>
          <p className="max-w-2xl text-xl text-gray-500 dark:text-gray-400 line-height-relaxed font-medium">
            A curated intersection of software engineering and immersive experience design.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-4 mb-20">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 rounded-2xl font-black tracking-wide-label text-xs transition-all duration-500 border-2 ${activeFilter === filter
                  ? 'bg-[var(--primary)] border-[var(--primary)] text-white shadow-2xl shadow-[var(--primary)]/30 scale-105'
                  : 'bg-transparent border-gray-100 dark:border-white/5 text-gray-400 hover:border-[var(--primary)] hover:text-[var(--primary)]'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid component */}
        <PortfolioGrid activeFilter={activeFilter} />
      </div>
    </PageHero>
  );
}