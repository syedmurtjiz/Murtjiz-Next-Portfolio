'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { notFound } from 'next/navigation';
import { use } from 'react';
import TypewriterText from '../../../components/TypewriterText';

// Project data (same as in Projects.js)
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
    technologies: ['React.js', 'Tailwind CSS', 'Spotify API'],
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
    description: 'The Booking.com Replica is a front-end web application inspired by the popular travel booking platform, Booking.com. The project aims to recreate the user interface and user experience of the original site, focusing on responsive design, layout structure, and interactive components using HTML, CSS, and JavaScript',
    image: '/booking.png',
    liveLink: 'https://booking-replica.netlify.app/',
    sourceLink: 'https://github.com/syedmurtjiz/booking.com?tab=readme-ov-file',
    technologies: ['Html', 'CSS', 'JavaScript'],
    features: [
      'Hotel search',
      'Booking system'
    ]
  },
  {
    slug: 'elevateunlimited',
    title: 'Elevate Unlimited',
    description: 'Elevate Unlimited is the premium version of the Elevate brain training app, designed to improve cognitive skills such as focus, memory, math, reading, and writing through personalized daily exercises and games.',
    image: '/elevate.png',
    liveLink: 'https://elevatesunlimited.netlify.app/',
    sourceLink: 'https://github.com/syedmurtjiz/Elevate-Unlimited',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Unlimited access to daily workouts',
      'Advanced difficulty levels',
      'Guided Walking Meditations',
      'Mind-Body Integration'
    ]
  },
  {
    slug: 'portfolio',
    title: 'Portfolio Website',
    description: 'A professional portfolio showcasing my expertise and projects, crafted with Next.js and Tailwind CSS.',
    image: '/portfolio.png',
    liveLink: 'https://murtjiznaqvi.com',
    sourceLink: 'https://github.com/murtjiznaqvi/portfolio',
    technologies: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Project showcase',
      'Contact form',
      'Responsive design',
      'Smooth animations',
    ]
  },
  {
    slug: 'cozycritters',
    title: 'Cozy Critters',
    description: 'Each pet profile provides detailed information about the animal’s personality, care needs, and lifespan. Designed to help potential adopters understand the pet’s character and suitability for their home',
    image: '/cozy.jpg',
    liveLink: 'https://cozy-critters.netlify.app/',
    sourceLink: 'https://github.com/syedmurtjiz/Cozy-Critters',
    technologies: ['React.js', 'CSS'],
    features: [
      'Detailed cards for each cat and dog breed',
      'Short, informative descriptions about behavior and care',
      'Filter animals by species (cats/dogs), breed',
      'Responsive design',
    ]
  }
];

// Reusable Components
const TechBadge = ({ tech }) => (
  <span className="px-3 py-1 bg-gray-800/50 text-white/80 rounded-full text-sm transition-colors hover:bg-gray-700/70">
    {tech}
  </span>
);

const FeatureItem = ({ feature }) => (
  <li className="flex items-start text-white/80">
    <span className="mr-2 text-green-400">•</span>
    {feature}
  </li>
);

const ProjectLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/70 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
    aria-label={label}
  >
    {icon}
    {label}
  </a>
);

export default function ProjectPage({ params }) {
  const { slug } = use(params);
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="max-w-6xl mx-auto mt-[100px] border border-gray-200 rounded-3xl py-8 sm:px-4 lg:px-6 p-2">
      <div className="">
                  <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center"
                  >
                    <TypewriterText text={project.title} id="projects-heading" />
                  </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              loading="eager"
            />
          </motion.div>

          {/* Project Details */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-white/80 mb-4">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.technologies.map((tech, index) => (
                  <TechBadge key={index} tech={tech} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white/80 mb-4">
                Key Features
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {project.features.map((feature, index) => (
                  <FeatureItem key={index} feature={feature} />
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 text-white/70 sm:gap-4">
              <ProjectLink
                href={project.liveLink}
                icon={<FaExternalLinkAlt />}
                label="Live Demo"
              />
              <ProjectLink
                href={project.sourceLink}
                icon={<FaGithub />}
                label="Source Code"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
