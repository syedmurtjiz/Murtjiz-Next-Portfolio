'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollAnimation({ children, className }) {
  const elementRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["0 1", "1 0"]
  });

  const opacity = useTransform(scrollYProgress, 
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );
  
  const y = useTransform(scrollYProgress,
    [0, 0.1, 0.9, 1],
    [50, 0, 0, -50]
  );

  const smoothY = useSpring(y, {
    stiffness: 200,
    damping: 30,
    mass: 0.8
  });

  return (
    <motion.div
      ref={elementRef}
      style={{
        opacity,
        y: smoothY
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
