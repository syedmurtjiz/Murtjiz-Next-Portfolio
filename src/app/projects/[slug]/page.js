'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { ScrollReveal, RevealItem } from '@/components/shared/ScrollReveal';

// Project data (Centralized)
const projects = [
  {
    slug: 'kelvinweather',
    title: 'KelvinWeather',
    category: 'System Architecture',
    description: 'A sophisticated weather application delivering real-time updates through redundant API integration and a high-fidelity visual interface.',
    image: '/weather.png',
    liveLink: 'https://climatepredictions.netlify.app/',
    sourceLink: 'https://github.com/syedmurtjiz/my-weather-app',
    technologies: ['React', 'Tailwind CSS', 'OpenWeather API'],
    year: '2024',
    features: [
      'Real-time data synchronization',
      'Geospatial weather mapping',
      'Advanced temperature telemetry',
      'Dynamic asset loading based on conditions',
    ]
  },
  {
    slug: 'spotifyclone',
    title: 'SpotifyClone',
    category: 'Full-Stack Service',
    description: 'A comprehensive music streaming ecosystem engineered with Next.js and high-availability database architectures.',
    image: '/spotify.png',
    liveLink: 'https://spotifyclient.netlify.app/',
    sourceLink: 'https://github.com/syedmurtjiz/spotifyclone',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Spotify API'],
    year: '2024',
    features: [
      'Sub-second music stream latency',
      'Relational playlist management',
      'High-performance search algorithms',
      'JWT-based secure authentication',
    ]
  },
  {
    slug: 'bookingreplica',
    title: 'Precision Booking',
    category: 'Interaction Design',
    description: 'A rigorous reconstruction of a global commerce interface, focusing on complex state management and responsive reliability.',
    image: '/booking.png',
    liveLink: 'https://booking-replica.netlify.app/',
    sourceLink: 'https://github.com/syedmurtjiz/booking.com?tab=readme-ov-file',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    year: '2023',
    features: [
      'Enterprise-grade search filtering',
      'Real-time database triggers',
      'Optimized booking workflow',
      'Mobile-first grid systems',
    ]
  },
  {
    slug: 'portfolio',
    title: 'Elite Portfolio',
    category: 'Brand Experience',
    description: 'A flagship digital presence engineered with editorial typography and advanced micro-interaction ecosystems.',
    image: '/portfolio.png',
    liveLink: 'https://syedmurtjizhussain.netlify.app/',
    sourceLink: 'https://github.com/syedmurtjiz/portfolio',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    year: '2025',
    features: [
      'Editorial-grade typography audit',
      'Magnetic navigation logic',
      'Dynamic theme reveal systems',
      'Precision SEO indexing',
    ]
  },
  {
    slug: 'elevateunlimited',
    title: 'Elevate Pro',
    category: 'Digital Product',
    description: 'A premium cognitive training platform with personalized exercises and a focus on high-performance human interaction.',
    image: '/elevate.png',
    liveLink: 'https://elevatesunlimited.netlify.app/',
    sourceLink: 'https://github.com/syedmurtjiz/Elevate-Unlimited',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    year: '2024',
    features: [
      'Cognitive difficulty algorithms',
      'Mind-Body state management',
      'Advanced data visualization',
      'Interactive meditation flows',
    ]
  },
  {
    slug: 'cozycritters',
    title: 'Cozy Critters',
    category: 'Web Experience',
    description: 'An immersive digital catalog focused on detailed typography and soft-interaction UI patterns.',
    image: '/cozy.jpg',
    liveLink: 'https://cozy-critters.netlify.app/',
    sourceLink: 'https://github.com/syedmurtjiz/Cozy-Critters',
    technologies: ['React.js', 'Tailwind', 'CSS'],
    year: '2023',
    features: [
      'Curated breed taxonomies',
      'Accessibility-first layouts',
      'Visual storytelling nodes',
      'Lightweight performance budget',
    ]
  }
];

export default function ProjectPage({ params }) {
  const { slug } = use(params);
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const project = projects[currentIndex];

  if (!project) notFound();

  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="w-full bg-[var(--background)] transition-colors duration-300">
      {/* Flagship Project Hero */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y: '20%' }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-1000 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-[#0d0907]/80 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0907]/50 to-[#0d0907]" />
        </motion.div>

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-end pb-24">
          <ScrollReveal>
            <span className="text-[var(--primary)] font-black tracking-wide-label text-xs mb-6 block">Case Study // {project.year}</span>
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter-heading line-height-tight mb-8">
              {project.title.split(' ')[0]} <br />
              <span className="text-white/20">{project.title.split(' ')[1] || 'Project'}</span>
            </h1>
            <div className="flex flex-wrap gap-4">
              <a href={project.liveLink} target="_blank" className="px-8 py-4 bg-[var(--primary)] text-white font-black tracking-wide-label text-xs rounded-2xl shadow-2xl shadow-[var(--primary)]/30 shimmer-effect overflow-hidden">
                VISIT EXPERIENCE
              </a>
              <a href={project.sourceLink} target="_blank" className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-black tracking-wide-label text-xs rounded-2xl hover:bg-white/10 transition-all">
                VIEW ARCHIVE
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Strategic Breakdown */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left: Narrative */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <h2 className="text-xs font-black tracking-wide-label text-gray-400 mb-8 uppercase">The Objective</h2>
              <p className="text-3xl md:text-4xl font-black text-[#111827] dark:text-white tracking-tighter-heading line-height-tight mb-12">
                {project.description}
              </p>

              <div className="space-y-12">
                <div>
                  <h3 className="text-xs font-black tracking-wide-label text-[var(--primary)] mb-6 uppercase">Key Features</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                        <span className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Technical Specs */}
          <div className="lg:col-span-5 bg-gray-50 dark:bg-white/[0.02] rounded-[2.5rem] p-12 border border-gray-100 dark:border-white/5 self-start sticky top-32">
            <ScrollReveal delay={0.2}>
              <h2 className="text-xs font-black tracking-wide-label text-gray-400 mb-12 uppercase">Specifications</h2>

              <div className="space-y-10">
                <div>
                  <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase block mb-3">Service</span>
                  <p className="text-xl font-black dark:text-white">{project.category}</p>
                </div>
                <div>
                  <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase block mb-3">Stack Integration</span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-[10px] font-bold tracking-widest uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase block mb-3">Timeline</span>
                  <p className="text-xl font-black dark:text-white">{project.year} — Pakistan</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Next Project Bridge */}
      <Link href={`/projects/${nextProject.slug}`} className="group relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-black">
        <Image
          src={nextProject.image}
          alt="Next Project"
          fill
          className="object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-1000"
        />
        <div className="relative z-10 text-center">
          <span className="text-white/60 font-black tracking-wide-label text-xs mb-4 block group-hover:text-[var(--primary)] transition-colors">NEXT STUDY</span>
          <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter-heading line-height-tight group-hover:tracking-normal transition-all duration-700">
            {nextProject.title}
          </h3>
        </div>
        <div className="absolute bottom-12 right-12 text-white/20 group-hover:text-white transition-colors">
          <FaArrowRight size={40} />
        </div>
      </Link>
    </div>
  );
}
