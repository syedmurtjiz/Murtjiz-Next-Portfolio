import { motion } from 'framer-motion';
import Image from 'next/image';
import TypewriterText from '../TypewriterText';
import ScrollReveal from '../shared/ScrollReveal';

export default function Achievements() {
  const stats = [
    {
      name: 'Products Shipped',
      value: '20+',
      description: 'Hand-crafted digital ecosystems'
    },
    {
      name: 'Years Experience',
      value: '04+',
      description: 'Navigating technical complexity'
    },
    {
      name: 'Client Success',
      value: '100%',
      description: 'Uncompromising quality standards'
    },
    {
      name: 'Technologies',
      value: '15+',
      description: 'Mastery of the modern stack'
    },
  ];

  return (
    <section className="w-full relative py-32 bg-[var(--background)] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
          <div className="max-w-3xl">
            <span className="text-[var(--primary)] font-black tracking-wide-label text-xs mb-6 block uppercase">Proven Authority</span>
            <TypewriterText
              text="The Impact of Strategy"
              id="achievements-heading"
              className="text-5xl md:text-8xl font-black text-[#111827] dark:text-white tracking-tighter-heading line-height-tight"
              as="h2"
            />
          </div>
          <p className="max-w-md text-xl text-gray-500 dark:text-gray-400 line-height-relaxed font-medium mb-4">
            Beyond lines of code, I deliver measurable business value through architectural excellence and visual precision.
          </p>
        </div>

        {/* Typographic Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-40">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group">
                <span className="block text-6xl md:text-7xl font-black text-[#111827] dark:text-white tracking-tighter mb-4 group-hover:text-[var(--primary)] transition-colors duration-500">
                  {stat.value}
                </span>
                <div className="h-px w-12 bg-[var(--primary)] mb-6" />
                <h4 className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-2">{stat.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <ScrollReveal x={-40}>
            <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden premium-shadow group">
              <Image
                src="/about-1.webp"
                alt="Professional Web Development"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
            </div>
          </ScrollReveal>

          <ScrollReveal x={40}>
            <div className="space-y-10">
              <h3 className="text-4xl md:text-6xl font-black text-[#111827] dark:text-white tracking-tighter-heading line-height-tight">
                A relentless focus on <span className="text-gray-300 dark:text-white/20">Scalability.</span>
              </h3>
              <p className="text-xl text-gray-500 dark:text-gray-400 line-height-relaxed leading-relaxed font-medium">
                My evolution as an engineer is driven by a singular obsession: creating systems that are as resilient as they are beautiful. I specialize in bridging the gap between legacy constraints and futuristic possibilities.
              </p>
              <div className="flex items-center gap-6">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-xs font-black tracking-wide-label uppercase pb-2 border-b-2 border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                >
                  Explore Partnerships
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}