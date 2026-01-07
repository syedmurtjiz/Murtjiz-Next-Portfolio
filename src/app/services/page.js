import { FaBezierCurve, FaCogs, FaRocket, FaShieldAlt } from 'react-icons/fa';
import ScrollReveal, { RevealItem } from '@/components/shared/ScrollReveal';
import PageHero from '@/components/shared/PageHero';
import Specialization from '@/components/Home/Specialization';

const philosophy = [
  {
    title: 'Architectural Intelligence',
    description: 'We don\'t just write code; we architect scalable ecosystems designed for longevity and logarithmic growth.',
    icon: <FaBezierCurve />,
  },
  {
    title: 'Visual Authority',
    description: 'Every pixel is a strategic decision. We create interfaces that command attention and instill brand trust instantly.',
    icon: <FaShieldAlt />,
  },
  {
    title: 'Performance Optimization',
    description: 'Speed is a feature. We deliver sub-second interactions through obsessive latency reduction and asset management.',
    icon: <FaRocket />,
  },
  {
    title: 'Continuous Evolution',
    description: 'Launch is just Day One. Our products are built to adapt, evolve, and stay ahead of the technical horizon.',
    icon: <FaCogs />,
  },
];

export default function ServicesPage() {
  return (
    <PageHero title="Strategic Philosophy" currentPage="services">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
        {/* Intro */}
        <ScrollReveal stagger>
          <div className="mb-24">
            <span className="text-[var(--primary)] font-black tracking-wide-label text-xs mb-4 block">The Approach</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter-heading line-height-tight text-[#111827] dark:text-white mb-8">
              Engineering <span className="text-gray-300 dark:text-white/20">Excellence</span> <br /> Through Philosophy.
            </h2>
            <p className="max-w-2xl text-xl text-gray-500 dark:text-gray-400 line-height-relaxed">
              We bridge the delta between visionary product requirements and technical reality with a methodology rooted in precision.
            </p>
          </div>

          {/* Philosophy Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            {philosophy.map((item, index) => (
              <RevealItem key={index}>
                <div className="group p-10 rounded-[2.5rem] glass-card premium-shadow border border-gray-100 dark:border-white/5 transition-all duration-500 hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-[var(--primary)] text-2xl mb-8 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-black text-[#111827] dark:text-white tracking-tighter-heading mb-4">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium">{item.description}</p>
                </div>
              </RevealItem>
            ))}
          </div>

          {/* Process Section */}
          <div className="py-24 border-t border-gray-100 dark:border-white/5">
            <h3 className="text-xs font-black tracking-wide-label text-gray-400 mb-16 text-center uppercase">The Signature Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {[
                { step: '01', title: 'Intelligence', desc: 'Discovery & Strategic Auditing' },
                { step: '02', title: 'Synthesis', desc: 'Architectural & Design Mapping' },
                { step: '03', title: 'Execution', desc: 'High-Performance Development' },
                { step: '04', title: 'Ascension', desc: 'Optimization & Global Launch' }
              ].map((p, i) => (
                <RevealItem key={i}>
                  <div className="text-center md:text-left">
                    <span className="text-5xl font-black text-[var(--primary)]/10 block mb-4">{p.step}</span>
                    <h4 className="text-lg font-bold text-[#111827] dark:text-white tracking-tighter-heading mb-2">{p.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{p.desc}</p>
                  </div>
                </RevealItem>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <Specialization />
      </div>
    </PageHero>
  );
}