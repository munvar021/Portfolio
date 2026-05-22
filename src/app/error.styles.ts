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
  max-width: 540px;
`;

export const IconBox = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(161, 18, 18, 0.1),
    rgba(92, 11, 11, 0.05)
  );
  border: 2px solid rgba(161, 18, 18, 0.2);
  border-radius: 50%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(135deg, #a11212, #5c0b0b);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask-composite: exclude;
    opacity: 0.3;
  }

  i {
    font-size: 3rem;
    background: linear-gradient(135deg, #a11212, #5c0b0b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const Code = styled.div`
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
  line-height: 1.7;
  margin-bottom: 2.5rem;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const PrimaryBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: linear-gradient(135deg, #a11212, #5c0b0b);
  color: #ffffff;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
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

export const SecondaryBtn = styled(AppLink)`
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
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(161, 18, 18, 0.08) 0%,
    transparent 70%
  );
  pointer-events: none;
  z-index: 1;
`;
