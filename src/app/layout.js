"use client";

import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';
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
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-white dark:bg-[#120a08] text-gray-900 dark:text-white transition-colors duration-300 relative noise" suppressHydrationWarning>
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
