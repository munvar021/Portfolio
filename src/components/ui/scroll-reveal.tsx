"use client";

import { useState, useEffect, useRef } from "react";
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
  const ref = useRef<HTMLDivElement>(null);
  const [anim, setAnim] = useState({ visible: false, y: yOffset });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnim((a) => ({ ...a, visible: true }));
        } else {
          const y = entry.boundingClientRect.top > 0 ? yOffset : -yOffset;
          setAnim({ visible: false, y });
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, yOffset]);

  if (Tag) {
    const Comp = Tag;
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: yOffset }}
        animate={
          anim.visible ? { opacity: 1, y: 0 } : { opacity: 0, y: anim.y }
        }
        transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
      >
        <Comp {...rest}>{children}</Comp>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={anim.visible ? { opacity: 1, y: 0 } : { opacity: 0, y: anim.y }}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
