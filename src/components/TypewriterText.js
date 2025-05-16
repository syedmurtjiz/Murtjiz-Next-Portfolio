import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export const TypewriterText = ({ text, className = '', id }) => {
  const elementRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const characters = text.split('');

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["0 1", "1 0"]
  });

  const opacity = useTransform(scrollYProgress, 
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.1 && !shouldAnimate) {
        setShouldAnimate(true);
      } else if (latest < 0.1) {
        setShouldAnimate(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, shouldAnimate]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        when: "beforeChildren",
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <motion.h2
      id={id}
      ref={elementRef}
      style={{ opacity }}
      variants={containerVariants}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      className={`text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 mb-12 text-center drop-shadow-lg relative inline-block ${className}`}
    >
      {characters.map((char, index) => (
        <motion.span key={index} variants={charVariants}>
          {char}
        </motion.span>
      ))}
      {shouldAnimate && (
        <motion.span
          className="inline-block w-1 h-8 md:h-10 bg-purple-400 ml-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        />
      )}
    </motion.h2>
  );
};

export default TypewriterText;
