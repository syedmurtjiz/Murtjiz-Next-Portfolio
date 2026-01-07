'use client';

import { motion } from 'framer-motion';

export const ScrollReveal = ({ children, delay = 0, x = 0, y = 20, stagger = false, duration = 0.8 }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: stagger ? 0.15 : 0,
                delayChildren: delay,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x, y },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                ease: [0.25, 1, 0.5, 1] // Custom cubic-bezier for agency feel
            }
        }
    };

    if (stagger) {
        return (
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {children}
        </motion.div>
    );
};

export const RevealItem = ({ children }) => {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1]
            }
        }
    };
    return <motion.div variants={itemVariants}>{children}</motion.div>;
};

export default ScrollReveal;
