import { css } from "styled-components";

// Apple-inspired glass effect with premium finish
export const glassEffect = css`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.glassBg} 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: 16px;
  border: 0.5px solid rgba(255, 255, 255, 0.18);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.12),
    0 2px 8px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

// Premium liquid glass effect - Apple macOS Big Sur style
export const liquidGlassEffect = css`
  position: relative;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.glassBg} 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
  backdrop-filter: blur(60px) saturate(200%) brightness(110%);
  -webkit-backdrop-filter: blur(60px) saturate(200%) brightness(110%);
  border-radius: 24px;
  border: none;
  box-shadow: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  /* Subtle inner glow for depth */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 24px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 50%,
      rgba(0, 0, 0, 0.05) 100%
    );
    pointer-events: none;
    opacity: 0.6;
  }

  /* Outer glow for premium feel */
  &::after {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 24px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.05)
    );
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
  }

  &:hover::after {
    opacity: 1;
  }
`;
