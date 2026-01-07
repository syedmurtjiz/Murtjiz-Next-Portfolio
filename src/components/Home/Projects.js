'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import TypewriterText from '../TypewriterText';
import ScrollReveal from '../shared/ScrollReveal';

// Project data (Centralized)
const projects = [
  {
    slug: 'kelvinweather',
    title: 'KelvinWeather',
    category: 'System Architecture',
    description: 'A sophisticated weather application delivering real-time updates through redundant API integration.',
    image: '/weather.png',
    year: '2024'
  },
  {
    slug: 'spotifyclone',
    title: 'SpotifyClone',
    category: 'Full-Stack Service',
    description: 'A comprehensive music streaming ecosystem engineered with Next.js and high-availability databases.',
    image: '/spotify.png',
    year: '2024'
  },
  {
    slug: 'bookingreplica',
    title: 'Precision Booking',
    category: 'Interaction Design',
    description: 'A rigorous reconstruction of a global commerce interface, focusing on complex state management.',
    image: '/booking.png',
    year: '2023'
  }
];

export default function Projects() {
  return (
    <section className="w-full relative py-32 bg-[var(--background-contrast)] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[var(--primary)] font-black tracking-wide-label text-xs mb-4 block uppercase">Featured Case Studies</span>
            <TypewriterText
              text="Pioneering Digital Solutions"
              id="projects-heading"
              className="text-5xl md:text-7xl font-black text-[#111827] dark:text-white tracking-tighter-heading line-height-tight"
              as="h2"
            />
          </div>
          <Link href="/portfolio" className="group flex items-center gap-4 text-sm font-black tracking-wide-label transition-all hover:text-[var(--primary)] mb-4">
            VIEW ALL WORK
            <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)] group-hover:text-white transition-all duration-500">
              <FaArrowRight size={14} />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Link href={`/projects/${project.slug}`} className="group block h-full">
                <div className="relative h-[450px] w-full overflow-hidden rounded-[2.5rem] premium-shadow border border-black/5 dark:border-white/5 mb-8">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="text-white/60 font-black tracking-wide-label text-[10px] uppercase mb-2">{project.category}</span>
                    <h3 className="text-2xl font-black text-white tracking-tighter-heading mb-4 group-hover:text-[var(--primary)] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="px-4">
                  <p className="text-gray-500 dark:text-gray-400 font-medium line-height-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
