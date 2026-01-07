"use client";

import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/shared/Preloader";
import SuppressHydrationWarning from '@/components/SuppressHydrationWarning';

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const ParticlesContainer = dynamic(() => import("@/components/ParticlesContainer"), { ssr: false });
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const PageTransition = dynamic(() => import("@/components/PageTransition"), { ssr: false });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

import ThemeProvider from '@/components/ThemeProvider';

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-white dark:bg-[#120a08] text-gray-900 dark:text-white transition-colors duration-300 relative noise" suppressHydrationWarning>
        <AnimatePresence mode="wait">
          {isLoading && (
            <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        <ThemeProvider>
          <SmoothScroll>
            <CustomCursor />
            <div className="fixed inset-0 z-0 pointer-events-none">
              <ParticlesContainer />
            </div>
            <div className="relative flex flex-col min-h-screen">
              <SuppressHydrationWarning>
                <Header />
                <main className="flex-grow relative z-10">
                  <PageTransition>
                    {children}
                  </PageTransition>
                </main>
                <Footer />
              </SuppressHydrationWarning>
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
