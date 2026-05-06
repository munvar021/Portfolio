import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ScrollReveal = ({
  as: Tag,
  children,
  delay = 0,
  duration = 0.6,
  threshold = 0.12,
  yOffset = 35,
  ...rest
}) => {
  const ref = useRef(null);
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

  const Comp = Tag || motion.div;

  return (
    <Comp
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={anim.visible ? { opacity: 1, y: 0 } : { opacity: 0, y: anim.y }}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Comp>
  );
};

export default ScrollReveal;
