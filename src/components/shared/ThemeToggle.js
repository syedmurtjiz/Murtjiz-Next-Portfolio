'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
        );
    }

    const toggleTheme = (e) => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';

        // Fallback for browsers that don't support View Transitions API
        if (!document.startViewTransition) {
            setTheme(newTheme);
            return;
        }

        const x = e.clientX;
        const y = e.clientY;

        const transition = document.startViewTransition(() => {
            setTheme(newTheme);
        });

        transition.ready.then(() => {
            document.documentElement.animate(
                [
                    {
                        clipPath: `circle(0px at ${x}px ${y}px)`,
                    },
                    {
                        clipPath: `circle(${Math.hypot(
                            Math.max(x, window.innerWidth - x),
                            Math.max(y, window.innerHeight - y)
                        )}px at ${x}px ${y}px)`,
                    },
                ],
                {
                    duration: 700,
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    pseudoElement: '::view-transition-new(root)',
                }
            );
        });
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="relative w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#d4a373] z-50"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? (
                <FaSun size={20} />
            ) : (
                <FaMoon size={20} className="text-gray-600" />
            )}
        </motion.button>
    );
};

export default ThemeToggle;
