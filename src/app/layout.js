"use client";

import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';
import SuppressHydrationWarning from '@/components/SuppressHydrationWarning';

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const ParticlesContainer = dynamic(() => import("@/components/ParticlesContainer"), { ssr: false });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-white text-gray-900 overflow-x-hidden" suppressHydrationWarning>
        <div className="fixed inset-0 z-0">
          <ParticlesContainer />
        </div>
        <div className="relative flex flex-col">
          <SuppressHydrationWarning>
            <Header />
            <main className="flex-grow relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </main>
            <Footer />
          </SuppressHydrationWarning>
        </div>
      </body>
    </html>
  );
}
