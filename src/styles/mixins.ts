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
  gradient = "linear-gradient(135deg, #A11212, #5C0B0B)",
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
  border-radius: 24px;
  transition:
    border-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: rgba(255, 255, 255, 0.12);
  }
`;

export const accentGradientText = css`
  background: linear-gradient(135deg, #a11212 0%, #5c0b0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const commandLabel = css`
  display: inline-flex;
  align-items: center;
  gap: clamp(0.75rem, 1.6vw, 1.25rem);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  color: #c63731;
  letter-spacing: 0.22em;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 1rem;

  &::before {
    content: "";
    display: inline-block;
    width: clamp(28px, 4vw, 54px);
    height: 1px;
    background: #c63731;
    box-shadow: 0 0 16px rgba(198, 55, 49, 0.22);
  }

  @media (max-width: 520px) {
    gap: 0.7rem;
    font-size: 0.68rem;
    letter-spacing: 0.14em;
  }
`;

export const sectionDotGrid = css`
  background-color: #050505;
  background-image: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.032) 1px,
    transparent 1px
  );
  background-size: 28px 28px;
`;

export const sectionElevatedCyan = css`
  background-color: #0a0a0a;
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
      rgba(161, 18, 18, 0.22),
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
      rgba(161, 18, 18, 0.06) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const sectionElevatedPurple = css`
  background-color: #0a0a0a;
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
      rgba(92, 11, 11, 0.24),
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
      rgba(92, 11, 11, 0.07) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const sectionScanLines = css`
  background-color: #050505;
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
  background-color: #050505;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse at 15% 60%,
        rgba(161, 18, 18, 0.06) 0%,
        transparent 55%
      ),
      radial-gradient(
        ellipse at 85% 40%,
        rgba(92, 11, 11, 0.06) 0%,
        transparent 55%
      );
    pointer-events: none;
  }
`;

export const mediaQuery = {
  xs: (styles: ReturnType<typeof css>) => css`
    @media (max-width: 375px) {
      ${styles}
    }
  `,
  sm: (styles: ReturnType<typeof css>) => css`
    @media (max-width: 640px) {
      ${styles}
    }
  `,
  md: (styles: ReturnType<typeof css>) => css`
    @media (max-width: 768px) {
      ${styles}
    }
  `,
  lg: (styles: ReturnType<typeof css>) => css`
    @media (max-width: 1024px) {
      ${styles}
    }
  `,
  xl: (styles: ReturnType<typeof css>) => css`
    @media (max-width: 1280px) {
      ${styles}
    }
  `,
  minSm: (styles: ReturnType<typeof css>) => css`
    @media (min-width: 641px) {
      ${styles}
    }
  `,
  minMd: (styles: ReturnType<typeof css>) => css`
    @media (min-width: 769px) {
      ${styles}
    }
  `,
  minLg: (styles: ReturnType<typeof css>) => css`
    @media (min-width: 1025px) {
      ${styles}
    }
  `,
};
