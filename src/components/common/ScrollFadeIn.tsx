'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollFadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  once?: boolean;
}

export const ScrollFadeIn: React.FC<ScrollFadeInProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  direction = 'up',
  once = true,
}) => {
  const getInitialVariant = () => {
    switch (direction) {
      case 'up':
        return { y: 20, opacity: 0 };
      case 'down':
        return { y: -20, opacity: 0 };
      case 'left':
        return { x: -20, opacity: 0 };
      case 'right':
        return { x: 20, opacity: 0 };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialVariant()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      viewport={{ once, margin: '-100px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
