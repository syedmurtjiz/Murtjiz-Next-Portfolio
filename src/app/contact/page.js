'use client';

import React from 'react';
import PageHero from '@/components/shared/PageHero';
import ContactForm from '@/components/Home/Contact';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { FaWhatsapp, FaEnvelope, FaLocationArrow } from 'react-icons/fa';

export default function ContactPage() {
   return (
      <PageHero title="Strategic Inquiry" currentPage="contact">
         <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
               {/* Left: Direct Connection */}
               <div>
                  <ScrollReveal>
                     <span className="text-[var(--primary)] font-black tracking-wide-label text-xs mb-6 block">Direct Connection</span>
                     <h2 className="text-5xl md:text-7xl font-black text-[#111827] dark:text-white tracking-tighter-heading line-height-tight mb-12">
                        Start a <span className="text-gray-300 dark:text-white/20">Partnership</span> <br /> Conversation.
                     </h2>
                     <p className="text-xl text-gray-500 dark:text-gray-400 line-height-relaxed font-medium mb-16 max-w-md">
                        Whether you&apos;re scaling a startup or re-architecting an enterprise platform, the first step is a strategic audit of your goals.
                     </p>

                     <div className="space-y-10">
                        <div className="flex items-center gap-6 group">
                           <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-[var(--primary)] text-xl group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500">
                              <FaEnvelope />
                           </div>
                           <div>
                              <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase block mb-1">Email Inquiry</span>
                              <a href="mailto:syedmurtjizhussain@gmail.com" className="text-xl font-black dark:text-white hover:text-[var(--primary)] transition-colors">syedmurtjiz@gmail.com</a>
                           </div>
                        </div>
                        <div className="flex items-center gap-6 group">
                           <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-[var(--primary)] text-xl group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500">
                              <FaWhatsapp />
                           </div>
                           <div>
                              <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase block mb-1">Direct Chat</span>
                              <a href="https://wa.me/923447470874" target="_blank" className="text-xl font-black dark:text-white hover:text-[var(--primary)] transition-colors">+92 344 7470874</a>
                           </div>
                        </div>
                        <div className="flex items-center gap-6 group">
                           <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-[var(--primary)] text-xl group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500">
                              <FaLocationArrow />
                           </div>
                           <div>
                              <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase block mb-1">Base of Operations</span>
                              <p className="text-xl font-black dark:text-white">Islamabad, PK (Global Timezones)</p>
                           </div>
                        </div>
                     </div>
                  </ScrollReveal>
               </div>

               {/* Right: The Form Context */}
               <div className="glass-card premium-shadow rounded-[3rem] p-8 md:p-12 border border-gray-100 dark:border-white/5">
                  <ContactForm />
               </div>
            </div>
         </div>
      </PageHero>
   );
}
