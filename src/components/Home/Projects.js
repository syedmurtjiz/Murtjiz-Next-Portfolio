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
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    },
  }),
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
    <section className="w-full max-w-6xl mx-auto border border-gray-200 rounded-2xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-white sm:text-4xl"
          >
            <TypewriterText text="Portfolio Highlights" id="projects-heading" />
            <p className="mt-3 max-w-2xl mx-auto text-gray-300 sm:mt-4 text-sm sm:text-base">
              Explore my latest projects and case studies
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              custom={index}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
              whileHover={{ y: -5 }}
              aria-labelledby={`project-title-${index}`}
            >
              <div className="relative h-48 sm:h-52 md:h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={iconVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg"
                        aria-label={`Visit live demo of ${project.title}`}
                      >
                        <FaExternalLinkAlt size={16} />
                      </motion.a>
                      <motion.a
                        href={project.sourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={iconVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 text-white shadow-lg"
                        aria-label={`View source code of ${project.title}`}
                      >
                        <FaGithub size={18} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5 md:p-6">
                <h3
                  id={`project-title-${index}`}
                  className="text-lg md:text-xl font-bold mb-2 text-white line-clamp-2"
                >
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-900/30 text-indigo-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors flex items-center"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
