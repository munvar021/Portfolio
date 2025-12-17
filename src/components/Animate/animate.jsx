import React from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { AnimateContainer } from "./animateStyles";

const Animate = ({ children, animation }) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <AnimateContainer
      ref={ref}
      isIntersecting={isIntersecting}
      animation={animation}
    >
      {children}
    </AnimateContainer>
  );
};

export default Animate;
