'use client';

import { motion } from 'framer-motion';

const Marquee = ({ text, direction = 'left', speed = 20 }) => {
    const marqueeVariants = {
        animate: {
            x: direction === 'left' ? [-1000, 0] : [0, -1000],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: speed,
                    ease: 'linear',
                },
            },
        },
    };

    return (
        <div className="relative w-full overflow-hidden bg-black/5 dark:bg-white/5 py-12 border-y border-black/5 dark:border-white/5">
            <motion.div
                className="flex whitespace-nowrap"
                variants={marqueeVariants}
                animate="animate"
            >
                <span className="text-6xl md:text-8xl font-black uppercase text-transparent stroke-text tracking-tighter mx-4">
                    {text} —
                </span>
                <span className="text-6xl md:text-8xl font-black uppercase text-[#111827] dark:text-white tracking-tighter mx-4">
                    {text} —
                </span>
                <span className="text-6xl md:text-8xl font-black uppercase text-transparent stroke-text tracking-tighter mx-4">
                    {text} —
                </span>
                <span className="text-6xl md:text-8xl font-black uppercase text-[#111827] dark:text-white tracking-tighter mx-4">
                    {text} —
                </span>
            </motion.div>

            <style jsx>{`
                .stroke-text {
                    -webkit-text-stroke: 1px rgba(0,0,0,0.1);
                }
                :global(.dark) .stroke-text {
                    -webkit-text-stroke: 1px rgba(255,255,255,0.1);
                }
            `}</style>
        </div>
    );
};

export default Marquee;
