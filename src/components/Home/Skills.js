'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaJsSquare, FaReact, FaCss3Alt, FaDraftingCompass, FaLaptopCode, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TypewriterText from '../TypewriterText';

export default function Skills() {
  const skills = [
    { name: 'HTML', percentage: 100, icon: FaHtml5, color: '#E34F26' },
    { name: 'JavaScript', percentage: 85, icon: FaJsSquare, color: '#F7DF1E' },
    { name: 'React', percentage: 80, icon: FaReact, color: '#61DAFB' },
    { name: 'CSS', percentage: 90, icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Tailwind CSS', percentage: 100, icon: SiTailwindcss, color: '#38BDF8' },
    { name: 'Bootstrap', percentage: 100, icon: FaBootstrap, color: '#7952B3' },
    { name: 'Website Design', percentage: 75, icon: FaDraftingCompass, color: '#FF7F50' },
    { name: 'Computer Science', percentage: 70, icon: FaLaptopCode, color: '#4CAF50' },
    { name: 'Next.js', percentage: 80, icon: SiNextdotjs, color: '#000000' },
  ];

 

  return (
    <div className="p-6 md:p-10 rounded-2xl w-full max-w-6xl mx-auto relative overflow-hidden transform transition-all duration-500 border border-gray-200 text-gray-900">
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-purple-500/5 via-indigo-500/5 to-pink-500/5"></div>

      <div className="text-center mb-10">
        <TypewriterText text="My Skills" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-300"
        >
          I bring your ideas to life through unique, cutting-edge web projects that captivate and inspire both you and your audience.
        </motion.p>
      </div>

      <div className="relative px-2 py-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full py-8 px-2"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="relative rounded-2xl p-6 shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 h-full flex flex-col items-center"
              >
                <div className="relative flex justify-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    className="p-4 rounded-full bg-gray-800/50 border border-gray-700"
                  >
                    <skill.icon 
                      className="w-16 h-16 md:w-20 md:h-20" 
                      style={{ color: skill.color }} 
                    />
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4 text-white">
                  {skill.name}
                </h3>
                <div className="w-full h-2.5 rounded-full bg-gray-700/50 mb-2 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
                    style={{ background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}80 100%)` }}
                  />
                </div>
                <p className="text-lg font-medium mt-2 text-gray-300">
                  {skill.percentage}%
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}