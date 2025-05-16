'use client';

import React from 'react';
import PageHero from '@/components/shared/PageHero';
import Contact from '@/components/Home/Contact';

export default function ContactPage() {
   return (
    <PageHero title="Contact Me" currentPage="contact">
    <Contact />
    </PageHero>
   );
}
