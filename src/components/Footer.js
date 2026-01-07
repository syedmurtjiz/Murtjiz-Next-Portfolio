import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaXTwitter, FaWhatsapp, FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';
import ScrollReveal from './shared/ScrollReveal';
import Magnetic from './shared/Magnetic';

const Footer = () => {
  const socialLinks = [
    { href: 'https://wa.me/923447470874', icon: <FaWhatsapp size={20} />, label: 'WhatsApp' },
    { href: 'https://x.com/Murtjiz_Naqvi', icon: <FaXTwitter size={20} />, label: 'X (Twitter)' },
    { href: 'https://github.com/syedmurtjiz', icon: <FaGithub size={20} />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/syedmurtjiz/', icon: <FaLinkedin size={20} />, label: 'LinkedIn' },
  ];

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="w-full relative bg-[#0d0907] transition-colors duration-300 overflow-hidden pt-32">
      {/* Background Hero Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.03] pt-12">
        <h2 className="text-[20vw] font-black tracking-tighter leading-none text-white whitespace-nowrap">
          LET&apos;S COLLABORATE
        </h2>
      </div>

      {/* High-Impact Footer CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center pb-32">
        <ScrollReveal>
          <span className="text-[var(--primary)] font-black tracking-wide-label text-xs mb-8 block uppercase">Next Steps</span>
          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter-heading line-height-tight mb-16">
            Ready to build <br />
            <span className="text-white/20">something great?</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <Magnetic strength={0.2}>
              <Link
                href="/contact"
                className="group px-12 py-6 bg-[var(--primary)] text-white font-black tracking-wide-label text-sm rounded-2xl shadow-2xl shadow-[var(--primary)]/30 transition-all duration-300 shimmer-effect flex items-center gap-4 overflow-hidden"
              >
                START A PROJECT
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </Magnetic>

            <Magnetic strength={0.3}>
              <a
                href="mailto:syedmurtjizhussain@gmail.com"
                className="text-white/60 hover:text-white transition-colors font-black tracking-wide-label text-xs uppercase"
              >
                syedmurtjiz@gmail.com
              </a>
            </Magnetic>
          </div>
        </ScrollReveal>
      </div>

      <div className="border-t border-white/5 bg-black/40 backdrop-blur-xl relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
            {/* Branding */}
            <div className="md:col-span-4">
              <Link href="/" className="text-3xl font-black text-[var(--primary)] tracking-tighter mb-8 block">
                MN<span className="text-white">.</span>
              </Link>
              <p className="text-gray-400 font-medium line-height-relaxed max-w-xs">
                Senior Full-Stack Engineer specializing in high-performance digital architectures and human-centric design.
              </p>
            </div>

            {/* Navigation */}
            <div className="md:col-span-4">
              <h4 className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-8">Navigation</h4>
              <ul className="grid grid-cols-2 gap-y-4">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Magnetic strength={0.2}>
                      <Link
                        href={link.href}
                        className="text-sm font-black text-gray-300 hover:text-[var(--primary)] transition-colors inline-block"
                      >
                        {link.label}
                      </Link>
                    </Magnetic>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="md:col-span-4">
              <h4 className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-8">Connect</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <Magnetic key={index} strength={0.4}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-[var(--primary)] hover:bg-white/10 transition-all duration-500 group"
                      aria-label={link.label}
                    >
                      <span className="group-hover:scale-110 transition-transform">
                        {link.icon}
                      </span>
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-gray-500 font-black tracking-widest uppercase">
            <p>© {new Date().getFullYear()} Murtjiz Naqvi — Islamabad, PK</p>
            <div className="flex gap-10">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-white">Available for Hire</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;