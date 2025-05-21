'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import TypewriterText from '../TypewriterText';

// Project data
const projects = [
  {
    slug: 'kelvinweather',
    title: 'KelvinWeather',
    description: 'A sophisticated weather application delivering real-time updates, built with React and Tailwind CSS.',
    image: '/weather.png',
    liveLink: 'https://climatepredictions.netlify.app/',
    sourceLink: 'https://github.com/syedmurtjiz/my-weather-app',
    technologies: ['React', 'Tailwind CSS', 'OpenWeather API'],
    features: [
      'Real-time weather updates',
      '5-day forecast',
      'Temperature conversion',
      'Location-based weather',
      'Responsive design',
    ]
  },
  {
    slug: 'spotifyclone',
    title: 'SpotifyClone',
    description: 'A full-stack music streaming platform replicating Spotify, developed using Next.js and Node.js.',
    image: '/spotify.png',
    liveLink: 'https://spotifyclient.netlify.app/',
    sourceLink: 'https://github.com/syedmurtjiz/spotifyclone',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Spotify API'],
    features: [
      'Music streaming',
      'Playlist management',
      'Search functionality',
      'User authentication',
      'Responsive design',
    ]
  },
  {
    slug: 'bookingreplica',
    title: 'Booking.com Replica',
    description: 'A feature-rich replica of Booking.com with search and booking capabilities, powered by React and Firebase.',
    image: '/booking.png',
    liveLink: 'https://booking-replica.netlify.app/',
    sourceLink: 'https://github.com/syedmurtjiz/booking.com?tab=readme-ov-file',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    features: [
      'Hotel search',
      'Booking system',
      'Payment integration',
      'User authentication',
      'Responsive design',
    ]
  },
  {
    slug: 'portfolio',
    title: 'Portfolio Website',
    description: 'A professional portfolio showcasing my expertise and projects, crafted with Next.js and Tailwind CSS.',
    image: '/portfolio.png',
    liveLink: 'https://syedmurtjizhussain.netlify.app/',
    sourceLink: 'https://github.com/syedmurtjiz/portfolio',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Project showcase',
      'Contact form',
      'Responsive design',
      'Smooth animations',
      'SEO optimized',
    ]
  },
  {
    slug: 'elevateunlimited',
    title: 'Elevate Unlimited',
    description: 'A professional portfolio showcasing my expertise and projects, crafted with Next.js and Tailwind CSS.',
    image: '/elevate.png',
    liveLink: 'https://elevatesunlimited.netlify.app/',
    sourceLink: 'https://github.com/syedmurtjiz/Elevate-Unlimited',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Project showcase',
      'Contact form',
      'Responsive design',
      'Smooth animations',
      'SEO optimized',
    ]
  },
    {
    slug: 'cozycritters',
    title: 'Cozy Critters',
    description: 'Each pet profile provides detailed information about the animal’s personality, care needs, and lifespan.',
    image: '/cozy.jpg',
    liveLink: 'https://cozy-critters.netlify.app/',
    sourceLink: 'https://github.com/syedmurtjiz/Cozy-Critters',
    technologies: ['React.js', 'CSS'],
    features: [
      'Project showcase',
      'Contact form',
      'Responsive design',
      'Smooth animations',
    ]
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export default function Projects() {
  // Component logic here

  return (
    <div
      className="p-10 rounded-2xl w-full max-w-6xl mx-auto relative overflow-hidden transform transition-all duration-500 hover:scale-[1.02] border border-gray-200 text-gray-900"
    >
      <div className=" rounded-xl p-8 md:p-12 ">
        {/* Subtle Glow Effect */}
        <div className="rotate-45 -z-10 blur-3xl max-w-3xl mx-auto"></div>

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-12"
          >
            <TypewriterText text="Portfolio Highlights" id="projects-heading" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <motion.article
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
                className="relative p-5 rounded-xl transition-all duration-300 group border text-white cursor-pointer hover:shadow-xl hover:scale-[1.02]"
                aria-labelledby={`project-title-${index}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm" />
                <div className="relative z-10">
                  <div className="relative h-48 w-full mb-5 overflow-hidden rounded-lg group/image">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover transition-transform duration-400 group-hover/image:scale-103"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-gray-900/60 rounded-lg">
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={iconVariants}
                        whileHover={{ scale: 1.2 }}
                        className="text-indigo-300 hover:text-indigo-200"
                        aria-label={`Visit live demo of ${project.title}`}
                      >
                        <FaExternalLinkAlt size={24} />
                      </motion.a>
                      <motion.a
                        href={project.sourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={iconVariants}
                        whileHover={{ scale: 1.2 }}
                        className="text-gray-200 hover:text-gray-100"
                        aria-label={`View source code of ${project.title}`}
                      >
                        <FaGithub size={24} />
                      </motion.a>
                    </div>
                  </div>
                  <h3
                    id={`project-title-${index}`}
                    className="text-xl font-semibold mb-2 text-white"
                  >
                    {project.title}
                  </h3>
                  <p className="mb-4 text-white/30">
                    {project.description}
                  </p>
                  <div className="flex justify-center gap-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-xs sm:text-sm font-medium transition-colors hover:text-indigo-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        
      </div>
    </div>
  );
}
