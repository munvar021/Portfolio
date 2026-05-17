import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import {
  commandLabel,
  sectionDotGrid,
  sectionElevatedPurple,
  sectionScanLines,
  sectionGlowDual,
} from "@/styles/mixins";
import AppLink from "@/components/ui/app-link";

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const orbit = keyframes`
  to { transform: rotate(360deg); }
`;

const drift = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0); opacity: 0.12; }
  50% { transform: translate3d(10px, -14px, 0); opacity: 0.24; }
`;

export const HeroSection = styled.section`
  position: relative;
  min-height: calc(100svh - var(--nav-height));
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0 0 clamp(1.5rem, 3vw, 2.5rem);
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.022) 1px, transparent 1px),
    linear-gradient(180deg, rgba(255, 255, 255, 0.018) 1px, transparent 1px),
    radial-gradient(
      ellipse at 20% 45%,
      rgba(161, 18, 18, 0.09) 0%,
      transparent 34%
    ),
    radial-gradient(
      ellipse at 72% 40%,
      rgba(255, 255, 255, 0.035) 0%,
      transparent 36%
    ),
    #020202;
  background-size:
    96px 96px,
    96px 96px,
    auto,
    auto,
    auto;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(0, 0, 0, 0.12), #050505 96%),
      radial-gradient(
        ellipse at center,
        transparent 0%,
        rgba(0, 0, 0, 0.68) 76%
      );
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    padding: clamp(1.5rem, 5vw, 2.25rem) 0 4rem;
  }
`;

export const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.018) 0,
    rgba(255, 255, 255, 0.018) 1px,
    transparent 1px,
    transparent 12px
  );
  opacity: 0.35;
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 20%,
    black 78%,
    transparent 100%
  );
  pointer-events: none;
`;

export const HeroCodeField = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;

  @media (max-width: 768px) {
    opacity: 0.55;
  }
`;

export const CodeToken = styled.span<{
  $top: string;
  $left: string;
  $size?: string;
  $delay?: string;
}>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  font-family: var(--font-mono);
  font-size: ${({ $size }) => $size || "clamp(0.78rem, 1.25vw, 1.35rem)"};
  color: rgba(255, 255, 255, 0.16);
  letter-spacing: 0;
  animation: ${drift} 8s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay || "0s"};
  user-select: none;
`;

export const HeroInner = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, 0.88fr) minmax(0, 1.12fr);
  gap: clamp(3rem, 7vw, 7rem);
  align-items: center;
  position: relative;
  z-index: 2;
  transform: translateY(-1.5vh);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    transform: none;
  }
`;

export const HeroLeft = styled.div`
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    max-width: 520px;
    margin: 0 auto;
  }
`;

export const HeroBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.38rem 0.85rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(161, 18, 18, 0.34);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 600;
  color: #f04444;
  letter-spacing: 0;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
  box-shadow: 0 0 32px rgba(161, 18, 18, 0.08);

  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-cyan);
    animation: ${blink} 1.5s ease-in-out infinite;
  }
`;

export const HeroGreeting = styled(motion.p)`
  font-family: var(--font-mono);
  font-size: clamp(0.76rem, 1vw, 0.9rem);
  color: rgba(240, 68, 68, 0.9);
  margin-bottom: 0.9rem;
  letter-spacing: 0;
`;

export const HeroName = styled(motion.h1)`
  font-family: var(--font-heading);
  font-size: clamp(3.1rem, 6.7vw, 5.9rem);
  font-weight: 800;
  letter-spacing: 0;
  line-height: 0.86;
  color: var(--text-primary);
  margin-bottom: 1.05rem;
  text-transform: none;

  span {
    display: block;
    color: #e12a2a;
  }
`;

export const HeroBio = styled(motion.p)`
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  color: rgba(179, 179, 179, 0.88);
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 1.65rem;
`;

export const HeroCta = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

export const PrimaryBtn = styled(AppLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 48px;
  padding: 0.72rem 1.55rem;
  background: #df2727;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.82rem;
  border-radius: 3px;
  letter-spacing: 0;
  transition:
    opacity 0.2s,
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.3s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(161, 18, 18, 0.3);
  }
`;

export const SecondaryBtn = styled(AppLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 48px;
  padding: 0.72rem 1.55rem;
  background: transparent;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.82rem;
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  letter-spacing: 0;
  transition:
    border-color 0.3s,
    background 0.3s,
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    border-color: rgba(161, 18, 18, 0.3);
    background: rgba(161, 18, 18, 0.05);
    transform: translateY(-2px);
  }
`;

export const SocialRow = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const SocialBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-secondary);
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    color: var(--accent-cyan);
    border-color: rgba(161, 18, 18, 0.3);
    background: rgba(161, 18, 18, 0.06);
    transform: translateY(-3px);
  }
`;

export const HeroRight = styled(motion.div)`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: clamp(320px, 44vw, 560px);

  @media (max-width: 1024px) {
    order: -1;
    min-height: clamp(280px, 54vw, 440px);
  }
`;

export const AvatarWrap = styled.div`
  position: relative;
  width: clamp(260px, 34vw, 430px);
  aspect-ratio: 1;
  display: grid;
  place-items: center;
`;

export const AvatarGlow = styled.div`
  position: absolute;
  inset: -12%;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(161, 18, 18, 0.18) 0%,
    rgba(92, 11, 11, 0.06) 48%,
    transparent 72%
  );
  animation: ${float} 5s ease-in-out infinite;
`;

export const AvatarRing = styled.div`
  position: relative;
  width: 76%;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid rgba(225, 42, 42, 0.72);
  padding: 9px;
  box-shadow:
    0 0 0 32px rgba(161, 18, 18, 0.035),
    0 0 0 58px rgba(255, 255, 255, 0.018),
    0 26px 90px rgba(0, 0, 0, 0.6);

  &::before {
    content: "";
    position: absolute;
    inset: -34px;
    border-radius: 50%;
    border: 1px dashed rgba(255, 255, 255, 0.12);
    animation: ${orbit} 28s linear infinite;
  }
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 1;
`;

export const AvatarOrbit = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid rgba(161, 18, 18, 0.32);
  animation: ${orbit} 40s linear infinite reverse;

  span {
    position: absolute;
    font-family: var(--font-mono);
    font-size: 0.82rem;
    color: rgba(255, 255, 255, 0.2);
    letter-spacing: 0;
    animation: ${orbit} 40s linear infinite;

    &:nth-child(1) {
      top: 7%;
      left: 50%;
    }

    &:nth-child(2) {
      right: -2%;
      top: 52%;
    }

    &:nth-child(3) {
      left: 4%;
      bottom: 14%;
    }
  }
`;

export const StatusBadge = styled.div`
  position: absolute;
  bottom: 9%;
  right: -5%;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(161, 18, 18, 0.2);
  border-radius: 4px;
  padding: 0.4rem 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  font-weight: 600;
  color: #f04444;
  white-space: nowrap;
  z-index: 2;

  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #f04444;
    animation: ${blink} 1.5s ease-in-out infinite;
  }
`;

export const HeroTerminal = styled.div`
  position: absolute;
  left: 50%;
  bottom: -4%;
  transform: translateX(-50%);
  width: min(340px, 82vw);
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(5, 5, 5, 0.72);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 0.9rem 1rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.68);
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.45);

  span {
    color: #f04444;
  }

  @media (max-width: 560px) {
    display: none;
  }
`;

export const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: clamp(1.5rem, 3vw, 2.5rem);
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  .scroll-text {
    color: var(--text-muted);
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  @media (max-width: 640px) {
    opacity: 0.7;
  }
`;

export const ScrollLine = styled.div`
  width: 1px;
  height: clamp(28px, 3vw, 40px);
  background: linear-gradient(to bottom, var(--accent-cyan), transparent);
  animation: scrollDown 2s ease infinite;

  @keyframes scrollDown {
    0% {
      transform: scaleY(0);
      transform-origin: top;
    }

    50% {
      transform: scaleY(1);
      transform-origin: top;
    }

    51% {
      transform: scaleY(1);
      transform-origin: bottom;
    }

    100% {
      transform: scaleY(0);
      transform-origin: bottom;
    }
  }
`;

export const SkillsBand = styled.section`
  padding: clamp(5rem, 10vw, 8rem) 0;
  ${sectionDotGrid}
`;

export const ProjectsBand = styled.section`
  padding: clamp(5rem, 10vw, 8rem) 0;
  ${sectionScanLines}
`;

export const SectionLabel = styled(motion.div)`
  ${commandLabel}
`;

export const SectionTitle = styled(motion.h2)`
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.032em;
  line-height: 1;
  color: var(--text-primary);
  margin-bottom: 0.875rem;
`;

export const SectionAccent = styled.span`
  background: linear-gradient(135deg, #a11212, #5c0b0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const SectionSubtitle = styled(motion.p)`
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 520px;
`;

export const SectionHeader = styled.div`
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-md);
  padding: 1.25rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.875rem;
  transition:
    border-color 0.3s,
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    border-color: rgba(161, 18, 18, 0.2);
    transform: translateY(-2px);
  }
`;

export const SkillIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: var(--radius-sm);
  background: rgba(161, 18, 18, 0.08);
  border: 1px solid rgba(161, 18, 18, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1rem;
  color: var(--accent-cyan);
`;

export const SkillName = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled(motion.div)`
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--bg-card);
  border: 1px solid var(--border-default);
  transition:
    border-color 0.3s,
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.3s;

  &:hover {
    border-color: rgba(161, 18, 18, 0.2);
    transform: translateY(-5px);
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.5);
  }
`;

export const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }
  ${ProjectCard}:hover & img {
    transform: scale(1.06);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.65) 0%,
      transparent 55%
    );
  }

  @media (max-width: 640px) {
    height: 180px;
  }
`;

export const ProjectBody = styled.div`
  padding: 1.375rem 1.5rem;
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
`;

export const ProjectTag = styled.span`
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--accent-cyan);
  background: rgba(161, 18, 18, 0.08);
  border: 1px solid rgba(161, 18, 18, 0.15);
  padding: 0.15rem 0.5rem;
  border-radius: var(--radius-full);
`;

export const ProjectTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.375rem;
`;

export const ProjectDesc = styled.p`
  font-size: 0.825rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

export const ProjectDetailsLink = styled(AppLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--accent-cyan);
  margin-left: auto;
  transition:
    gap var(--transition-base),
    opacity var(--transition-base);

  &:hover {
    gap: 0.55rem;
    opacity: 0.8;
  }
  i {
    font-size: 0.72rem;
  }
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-secondary);
  transition: color 0.2s;

  &:hover {
    color: var(--accent-cyan);
  }
  i {
    font-size: 0.8rem;
  }
`;

export const ViewAllBtn = styled(AppLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  background: transparent;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: var(--radius-full);
  border: 1px solid rgba(255, 255, 255, 0.12);
  margin-top: 2.5rem;
  transition:
    border-color 0.3s,
    background 0.3s,
    transform 0.3s;

  &:hover {
    border-color: rgba(161, 18, 18, 0.3);
    background: rgba(161, 18, 18, 0.05);
    transform: translateY(-2px);
  }
`;

export const AboutBand = styled.section`
  padding: clamp(3.5rem, 7vw, 5.5rem) 0 clamp(5rem, 9vw, 8rem);
  position: relative;
  overflow: hidden;
  scroll-margin-top: var(--nav-height);
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.018) 1px, transparent 1px),
    linear-gradient(180deg, rgba(255, 255, 255, 0.012) 1px, transparent 1px),
    #020202;
  background-size: 96px 96px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse at 72% 54%,
        rgba(161, 18, 18, 0.08),
        transparent 42%
      ),
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.3),
        transparent 28%,
        rgba(0, 0, 0, 0.26)
      );
    pointer-events: none;
  }
`;

export const ResumeBand = styled.section`
  padding: clamp(5rem, 10vw, 8rem) 0;
  text-align: center;
  ${sectionElevatedPurple}
`;

export const ResumeCard = styled.div`
  max-width: 600px;
  margin: 2.5rem auto 0;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-xl);
  padding: clamp(2rem, 4vw, 3rem) clamp(1.5rem, 4vw, 2.5rem);
  transition: border-color 0.3s;

  &:hover {
    border-color: rgba(92, 11, 11, 0.2);
  }
`;

export const ResumeCardDesc = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 2rem;
`;

export const ResumeActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const ContactBand = styled.section`
  padding: clamp(5rem, 10vw, 8rem) 0;
  ${sectionGlowDual}
`;

export const CtaSection = styled.section`
  padding: clamp(5rem, 10vw, 7rem) 0;
  ${sectionGlowDual}
`;

export const CtaInner = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-xl);
  padding: clamp(3rem, 6vw, 5rem);
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 280px;
    background: radial-gradient(
      ellipse,
      rgba(161, 18, 18, 0.07),
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const CtaTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.018em;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

export const CtaSubtitle = styled.p`
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  color: var(--text-secondary);
  max-width: 440px;
  margin: 0 auto 2.25rem;
  line-height: 1.7;
`;

export const CtaButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;
