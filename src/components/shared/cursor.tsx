"use client";

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const CursorDot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 6px;
  height: 6px;
  background: var(--accent-cyan);
  border-radius: 50%;
  pointer-events: none;
  z-index: var(--z-cursor);
  transform: translate(-50%, -50%);
  transition:
    width 0.2s,
    height 0.2s,
    background 0.2s,
    opacity 0.2s;
  will-change: transform;

  &.hovering {
    width: 10px;
    height: 10px;
    background: var(--accent-purple);
  }

  &.clicking {
    width: 4px;
    height: 4px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CursorRing = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 36px;
  height: 36px;
  border: 1.5px solid rgba(161, 18, 18, 0.5);
  border-radius: 50%;
  pointer-events: none;
  z-index: var(--z-cursor);
  transform: translate(-50%, -50%);
  transition:
    width 0.3s,
    height 0.3s,
    border-color 0.3s,
    opacity 0.3s;
  will-change: transform;

  &.hovering {
    width: 56px;
    height: 56px;
    border-color: rgba(92, 11, 11, 0.6);
    background: rgba(92, 11, 11, 0.06);
  }

  &.clicking {
    width: 28px;
    height: 28px;
    border-color: rgba(161, 18, 18, 0.8);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Cursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
      }
    };

    const animate = () => {
      ringPos.current.x += (posRef.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (posRef.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(calc(${ringPos.current.x}px - 50%), calc(${ringPos.current.y}px - 50%))`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = (e: MouseEvent) => {
      const el = (e.target as Element).closest("a, button, [data-cursor]");
      if (el) setHovering(true);
    };

    const onLeave = (e: MouseEvent) => {
      const el = (e.target as Element).closest("a, button, [data-cursor]");
      if (el) setHovering(false);
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <CursorDot
        ref={dotRef}
        className={`${hovering ? "hovering" : ""} ${clicking ? "clicking" : ""}`}
      />
      <CursorRing
        ref={ringRef}
        className={`${hovering ? "hovering" : ""} ${clicking ? "clicking" : ""}`}
      />
    </>
  );
};

export default Cursor;
