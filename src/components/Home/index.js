'use client';

import Skills from "@/components/Home/Skills";
import Hero from "@/components/Home/Hero";
import Achievements from "@/components/Home/achievements";
import Projects from "@/components/Home/Projects";
import Specialization from "@/components/Home/Specialization";
import Education from "@/components/Home/Education";
import Contact from "@/components/Home/Contact";
import ScrollAnimation from "@/components/ScrollAnimation";
import Marquee from "@/components/shared/Marquee";

export default function Index() {
  return (
    <div className="space-y-16 md:space-y-24">
      <Hero />
      <ScrollAnimation>
        <Achievements />
      </ScrollAnimation>
      <ScrollAnimation>
        <Skills />
      </ScrollAnimation>

      <Marquee text="High Performance // Immersive UI // Scalable Systems // Syed Murtjiz" direction="right" speed={40} />

      <ScrollAnimation>
        <Projects />
      </ScrollAnimation>
      <ScrollAnimation>
        <Specialization />
      </ScrollAnimation>
      <ScrollAnimation>
        <Education />
      </ScrollAnimation>
      <ScrollAnimation>
        <Contact />
      </ScrollAnimation>
    </div>
  );
}