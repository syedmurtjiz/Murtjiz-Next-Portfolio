import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const TypewriterText = ({
  text,
  className = '',
  id,
  as: Tag = 'h2',
  once = true,
  delay = 0,
  stagger = 0.05
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  const characters = text.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
        when: "beforeChildren",
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      }
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      id={id}
    >
      <Tag className="sr-only">{text}</Tag>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        aria-hidden="true"
        className="flex flex-wrap justify-center sm:justify-start"
      >
        {characters.map((char, index) => (
          <motion.span
            key={index}
            variants={charVariants}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
        <motion.span
          className="inline-block w-[3px] h-[0.9em] bg-[var(--primary)] ml-1 align-middle"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default TypewriterText;
