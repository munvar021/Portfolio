import styled from "styled-components";
import { motion } from "framer-motion";
import { commandLabel } from "@/styles/mixins";
import AppLink from "@/components/ui/app-link";

export const Wrap = styled(motion.div)`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
`;

export const CodeWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

export const Code = styled.div`
  font-family: var(--font-heading);
  font-size: clamp(7rem, 22vw, 14rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1;
  background: linear-gradient(135deg, #a11212, #5c0b0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;

  &::after {
    content: "404";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      135deg,
      rgba(161, 18, 18, 0.1),
      rgba(92, 11, 11, 0.05)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: blur(20px);
    z-index: -1;
  }
`;

export const Label = styled.div`
  ${commandLabel}
`;

export const Title = styled.h1`
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.2;
`;

export const Desc = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  max-width: 480px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const PrimaryBtn = styled(AppLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: linear-gradient(135deg, #a11212, #5c0b0b);
  color: #ffffff;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: var(--radius-full);
  transition:
    opacity 0.2s,
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(161, 18, 18, 0.3);
  }
`;

export const SecondaryBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: transparent;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: var(--radius-full);
  border: 1px solid rgba(255, 255, 255, 0.12);
  cursor: pointer;
  transition:
    border-color 0.3s,
    background 0.3s,
    transform 0.3s;

  &:hover {
    border-color: rgba(255, 255, 255, 0.25);
    background: rgba(255, 255, 255, 0.04);
    transform: translateY(-2px);
  }
`;

export const BackgroundGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(
    circle,
    rgba(161, 18, 18, 0.06) 0%,
    transparent 70%
  );
  pointer-events: none;
  z-index: 1;
`;
