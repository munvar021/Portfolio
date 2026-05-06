import { css } from "styled-components";

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const absoluteFill = css`
  position: absolute;
  inset: 0;
`;

export const glassmorphism = css`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

export const gradientText = (
  gradient = "linear-gradient(135deg, #00D4FF, #7C3AED)",
) => css`
  background: ${gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const container = css`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 3rem);
`;

export const sectionPadding = css`
  padding: clamp(5rem, 10vw, 8rem) 0;
`;

export const solidCard = css`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  transition:
    border-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: rgba(255, 255, 255, 0.12);
  }
`;

export const accentGradientText = css`
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const sectionDotGrid = css`
  background-color: #000000;
  background-image: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.032) 1px,
    transparent 1px
  );
  background-size: 28px 28px;
`;

export const sectionElevatedCyan = css`
  background-color: #050508;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 212, 255, 0.22),
      transparent
    );
    pointer-events: none;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    max-width: 640px;
    height: 300px;
    background: radial-gradient(
      ellipse at 50% 0%,
      rgba(0, 212, 255, 0.045) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const sectionElevatedPurple = css`
  background-color: #050508;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(124, 58, 237, 0.22),
      transparent
    );
    pointer-events: none;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    max-width: 640px;
    height: 300px;
    background: radial-gradient(
      ellipse at 50% 0%,
      rgba(124, 58, 237, 0.045) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const sectionScanLines = css`
  background-color: #030305;
  background-image: repeating-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.012) 0,
    rgba(255, 255, 255, 0.012) 1px,
    transparent 1px,
    transparent 64px
  );
  border-top: 1px solid rgba(255, 255, 255, 0.04);
`;

export const sectionGlowDual = css`
  background-color: #040408;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse at 15% 60%,
        rgba(0, 212, 255, 0.04) 0%,
        transparent 55%
      ),
      radial-gradient(
        ellipse at 85% 40%,
        rgba(124, 58, 237, 0.04) 0%,
        transparent 55%
      );
    pointer-events: none;
  }
`;

export const mediaQuery = {
  xs: (styles) => css`
    @media (max-width: 375px) {
      ${styles}
    }
  `,
  sm: (styles) => css`
    @media (max-width: 640px) {
      ${styles}
    }
  `,
  md: (styles) => css`
    @media (max-width: 768px) {
      ${styles}
    }
  `,
  lg: (styles) => css`
    @media (max-width: 1024px) {
      ${styles}
    }
  `,
  xl: (styles) => css`
    @media (max-width: 1280px) {
      ${styles}
    }
  `,
  minSm: (styles) => css`
    @media (min-width: 641px) {
      ${styles}
    }
  `,
  minMd: (styles) => css`
    @media (min-width: 769px) {
      ${styles}
    }
  `,
  minLg: (styles) => css`
    @media (min-width: 1025px) {
      ${styles}
    }
  `,
};
