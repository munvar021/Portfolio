import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { commandLabel } from "@/styles/mixins";

export const PageHero = styled.section`
  padding: clamp(4rem, 8vw, 6rem) 0 2rem;
  text-align: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 280px;
    background: radial-gradient(
      ellipse,
      rgba(161, 18, 18, 0.07) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const PageLabel = styled(motion.div)`
  ${commandLabel}
`;

export const PageTitle = styled(motion.h1)`
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1;
  color: var(--text-primary);
  margin-bottom: 1rem;

  span {
    background: linear-gradient(135deg, #a11212, #5c0b0b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const Controls = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1.5rem 0 3rem;
`;

export const ToggleGroup = styled.div`
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-full);
  padding: 4px;
  gap: 2px;
`;

export const ToggleBtn = styled.button<{ $active: boolean }>`
  padding: 0.45rem 1.125rem;
  border-radius: var(--radius-full);
  font-size: 0.825rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background: ${({ $active }) =>
    $active ? "linear-gradient(135deg, #A11212, #5C0B0B)" : "transparent"};
  color: ${({ $active }) => ($active ? "#000" : "var(--text-secondary)")};
  transition: all 0.25s;

  &:hover {
    color: ${({ $active }) => ($active ? "#000" : "var(--text-primary)")};
  }
`;

export const ActionBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 1.25rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  color: var(--text-primary);
  font-size: 0.825rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    border-color: rgba(161, 18, 18, 0.3);
    background: rgba(161, 18, 18, 0.07);
    color: var(--accent-cyan);
  }

  i {
    font-size: 0.8rem;
  }
`;

export const ZoomRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ZoomLabel = styled.span`
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-secondary);
  min-width: 42px;
  text-align: center;
`;

export const ViewerSection = styled.section`
  padding: 0 0 clamp(5rem, 10vw, 7rem);
`;

export const ViewerWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const PdfBox = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-xl);
  padding: 2rem;
  display: inline-block;
  max-width: 100%;
  overflow-x: auto;

  .react-pdf__Document {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .react-pdf__Page {
    border-radius: var(--radius-md);
    overflow: hidden;
  }

  @media (max-width: 640px) {
    padding: 1rem;
    border-radius: var(--radius-lg);
  }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const LoaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 4rem 2rem;
  color: var(--text-secondary);
  font-size: 0.875rem;

  i {
    font-size: 2rem;
    color: var(--accent-cyan);
    animation: ${spin} 1s linear infinite;
  }
`;

export const ErrorBox = styled.div`
  padding: 2rem;
  text-align: center;
  color: #ef4444;
  font-size: 0.875rem;
`;

export const PageNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const NavBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.25s;

  &:hover:not(:disabled) {
    border-color: rgba(161, 18, 18, 0.3);
    color: var(--accent-cyan);
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;

export const PageNum = styled.span`
  font-family: var(--font-mono);
  font-size: 0.825rem;
  color: var(--text-secondary);
`;
