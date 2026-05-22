"use client";

import { motion } from "framer-motion";
import type { ElementType } from "react";

interface ScrollRevealProps {
  as?: ElementType;
  children?: React.ReactNode;
  delay?: number;
  duration?: number;
  threshold?: number;
  yOffset?: number;
  [key: string]: unknown;
}

const ScrollReveal = ({
  as: Tag,
  children,
  delay = 0,
  duration = 0.6,
  threshold = 0.12,
  yOffset = 35,
  ...rest
}: ScrollRevealProps) => {
  const variants = {
    hidden: { opacity: 0, y: yOffset },
    visible: { opacity: 1, y: 0 },
  };

  if (Tag) {
    const Comp = Tag;
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: threshold }}
        variants={variants}
        transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
      >
        <Comp {...rest}>{children}</Comp>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: threshold }}
      variants={variants}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
