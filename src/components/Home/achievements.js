import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaTrophy, FaSuitcase, FaCalendar, FaCrown } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    { 
      name: 'KelvinWeather', 
      progress: 100, 
      icon: <FaTrophy className="text-yellow-400 border-yellow-400" />,
      bgColor: 'bg-yellow-500/10'
    },
    { 
      name: 'SpotifyClone', 
      progress: 100, 
      icon: <FaSuitcase className="text-blue-400 border-blue-400" />,
      bgColor: 'bg-blue-500/10'
    },
    { 
      name: 'Booking.com Replica', 
      progress: 90, 
      icon: <FaCalendar className="text-green-400 border-green-400" />,
      bgColor: 'bg-green-500/10'
    },
    { 
      name: 'Portfolio', 
      progress: 100, 
      icon: <FaCrown className="text-purple-400 border-purple-400" />,
      bgColor: 'bg-purple-500/10'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">

      {/* Header Section */}
      <motion.h1
        className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Achievements
      </motion.h1>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="rounded-lg p-6 flex flex-col items-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-white/60"
            variants={itemVariants}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <motion.div
              className="text-4xl mb-4 rounded-full p-2 border-2"
              animate={{ scale: hoveredProject === index ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {project.icon}
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-white/90" style={{ color: project.bgColor.replace('bg-', 'text-').replace('/10', '') }}>{project.name}</h3>
            <div className="relative w-full h-2 bg-gray-600 rounded-full">
              <motion.div
                className="absolute h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full "
                initial={{ width: 0 }}
                animate={{ width: `${project.progress}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <p className="mt-2 text-2xl text-white font-medium" style={{ 
              color: project.bgColor.replace('bg-', 'text-').replace('/10', ''),
              background: project.bgColor.replace('bg-', '').replace('/10', '')
            }}>{project.progress}%</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Achievements Description */}
        <motion.div
          className="rounded-lg p-8 shadow-lg border-2 border-white/60 hover:shadow-xl hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-white/80 text-left">Achievements in My Professional Life</h2>
          <p className="text-gray-300 mb-6">
            I built features with HTML, CSS, JavaScript, and React.js, refining user interfaces and improving code quality through reviews. My role provided key hands-on experience in web development.
          </p>
          <motion.button
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('mailto:your-email@example.com', '_blank')}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Web Designer Section */}
        <motion.div
          className="rounded-lg p-8 shadow-lg flex flex-col border-2 border-white/60"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-white/70 text-left">Web Designer</h2>
          <p className="text-gray-300 mb-6 text-left">
            As a web designer, I focus on understanding user needs and goals to create effective and visually appealing websites.
          </p>
          <motion.div
            className="w-full h-32 sm:h-40 md:h-48 relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/about-1.webp"
              alt="Web Design Example"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </motion.div>
        </motion.div>
      </div>


    </div>
  );
}