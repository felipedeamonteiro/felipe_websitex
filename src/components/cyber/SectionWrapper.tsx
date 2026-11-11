import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { staggerContainer } from './motion';

interface SectionWrapperProps {
  id: string;
  labelledBy?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Port of the tutorial's SectionWrapper HOC as a component: staggers the
 * `hidden` -> `show` variants of its children once the section is in view.
 */
export default function SectionWrapper({
  id,
  labelledBy,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      aria-labelledby={labelledBy}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className={`relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 py-20 sm:px-16 sm:py-24 ${className ?? ''}`}
    >
      {children}
    </motion.section>
  );
}
