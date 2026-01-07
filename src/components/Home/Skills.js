import { motion } from 'framer-motion';
import { FaHtml5, FaJsSquare, FaReact, FaCss3Alt, FaDraftingCompass, FaLaptopCode, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import TypewriterText from '../TypewriterText';
import ScrollReveal from '../shared/ScrollReveal';

export default function Skills() {
  const skills = [
    { name: 'Architecture', percentage: 95, icon: SiNextdotjs, color: '#000000' },
    { name: 'Core Interface', percentage: 98, icon: FaReact, color: '#61DAFB' },
    { name: 'Logic Layer', percentage: 92, icon: FaJsSquare, color: '#F7DF1E' },
    { name: 'Styling Engine', percentage: 100, icon: SiTailwindcss, color: '#38BDF8' },
    { name: 'Cloud Native', percentage: 88, icon: FaLaptopCode, color: '#4CAF50' },
    { name: 'Visual Design', percentage: 85, icon: FaDraftingCompass, color: '#FF7F50' },
  ];

  return (
    <section className="w-full relative py-32 bg-[var(--background-contrast)] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <span className="text-[var(--primary)] font-black tracking-wide-label text-xs mb-6 block uppercase">Technical DNA</span>
            <TypewriterText
              text="The Modern Stack"
              id="skills-heading"
              className="text-5xl md:text-8xl font-black text-[#111827] dark:text-white tracking-tighter-heading line-height-tight"
              as="h2"
            />
          </div>
          <p className="max-w-md text-xl text-gray-500 dark:text-gray-400 line-height-relaxed font-medium mb-4">
            A highly-specialized toolkit optimized for performance, scalability, and uncompromising user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group relative p-10 rounded-[2.5rem] bg-white dark:bg-[#1c1210] border border-black/5 dark:border-white/5 transition-all duration-500 hover:border-[var(--primary)]/30 premium-shadow h-full overflow-hidden">
                {/* Abstract Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)] opacity-0 group-hover:opacity-5 blur-[60px] transition-opacity duration-500" />

                <div className="flex items-center justify-between mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500">
                    <skill.icon style={{ color: skill.color }} />
                  </div>
                  <span className="text-4xl font-black text-gray-100 dark:text-white/5 tracking-tighter">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#111827] dark:text-white mb-4 tracking-tighter-heading">
                  {skill.name}
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Proficiency</span>
                    <span className="text-lg font-black text-[var(--primary)]">{skill.percentage}%</span>
                  </div>
                  <div className="h-1 w-full bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className="h-full bg-[var(--primary)]"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}