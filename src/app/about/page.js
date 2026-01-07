'use client';

import Specialization from '@/components/Home/Specialization';
import Achievements from '@/components/Home/achievements';
import Education from '@/components/Home/Education';
import Skills from '@/components/Home/Skills';
import PageHero from '@/components/shared/PageHero';
import AboutIntro from '@/components/shared/AboutIntro';
import Marquee from '@/components/shared/Marquee';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function AboutPage() {
  return (
    <PageHero title="The Methodology" currentPage="about">
      <div className="relative z-10 py-12">
        <AboutIntro />

        <div className="py-24">
          <Marquee text="Design Portfolio // Strategic Architecture // Full Stack // 2025" speed={30} />
        </div>

        <div className="space-y-32">
          <ScrollReveal stagger>
            <Education />
          </ScrollReveal>
          <ScrollReveal stagger>
            <Skills />
          </ScrollReveal>
          <ScrollReveal stagger>
            <Specialization />
          </ScrollReveal>
          <ScrollReveal stagger>
            <Achievements />
          </ScrollReveal>
        </div>
      </div>
    </PageHero>
  );
}