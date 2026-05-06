import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import {
  sectionDotGrid,
  sectionElevatedCyan,
  sectionScanLines,
  sectionGlowDual,
} from "../../styles/mixins";
import { NavLink } from "react-router-dom";

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const marqueeAnim = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

/* ── Hero ── */
export const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse at 70% 50%,
        rgba(0, 212, 255, 0.06) 0%,
        transparent 60%
      ),
      radial-gradient(
        ellipse at 30% 80%,
        rgba(124, 58, 237, 0.06) 0%,
        transparent 50%
      );
    pointer-events: none;
  }
`;

export const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse at center, transparent 15%, black 75%);
  pointer-events: none;
`;

export const HeroInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

export const HeroLeft = styled.div`
  position: relative;
  z-index: 2;
`;

export const HeroBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1rem;
  background: rgba(0, 212, 255, 0.07);
  border: 1px solid rgba(0, 212, 255, 0.18);
  border-radius: var(--radius-full);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--accent-cyan);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;

  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-cyan);
    animation: ${blink} 1.5s ease-in-out infinite;
  }
`;

export const HeroGreeting = styled(motion.p)`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
`;

export const HeroName = styled(motion.h1)`
  font-family: var(--font-heading);
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: var(--text-primary);
  margin-bottom: 0.75rem;

  span {
    background: linear-gradient(135deg, #00d4ff, #7c3aed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const HeroRole = styled(motion.h2)`
  font-family: var(--font-heading);
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  letter-spacing: -0.01em;
`;

export const TypedSpan = styled.span`
  color: var(--accent-cyan);
  font-weight: 700;
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1.1em;
  background: var(--accent-cyan);
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: ${blink} 0.9s step-end infinite;
`;

export const HeroBio = styled(motion.p)`
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  color: var(--text-secondary);
  line-height: 1.75;
  max-width: 520px;
  margin-bottom: 2.25rem;

  @media (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const HeroCta = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const PrimaryBtn = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.875rem;
  background: linear-gradient(135deg, #00d4ff, #7c3aed);
  color: #000;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: var(--radius-full);
  transition:
    opacity 0.2s,
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.3s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(0, 212, 255, 0.3);
  }
`;

export const SecondaryBtn = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.875rem;
  background: transparent;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: var(--radius-full);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition:
    border-color 0.3s,
    background 0.3s,
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    border-color: rgba(0, 212, 255, 0.3);
    background: rgba(0, 212, 255, 0.05);
    transform: translateY(-2px);
  }
`;

export const SocialRow = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }
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
    border-color: rgba(0, 212, 255, 0.3);
    background: rgba(0, 212, 255, 0.06);
    transform: translateY(-3px);
  }
`;

export const HeroRight = styled(motion.div)`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    order: -1;
  }
`;

export const AvatarWrap = styled.div`
  position: relative;
  width: clamp(260px, 35vw, 400px);
  height: clamp(260px, 35vw, 400px);
`;

export const AvatarGlow = styled.div`
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(0, 212, 255, 0.12) 0%,
    rgba(124, 58, 237, 0.08) 50%,
    transparent 75%
  );
  animation: ${float} 5s ease-in-out infinite;
`;

export const AvatarRing = styled.div`
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00d4ff, #7c3aed, #00d4ff);
  padding: 3px;

  &::before {
    content: "";
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background: var(--bg-primary);
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

export const AvatarFallback = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(0, 212, 255, 0.1),
    rgba(124, 58, 237, 0.1)
  );
  border: 1px solid rgba(0, 212, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  background: linear-gradient(135deg, #00d4ff, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const StatusBadge = styled.div`
  position: absolute;
  bottom: 16px;
  right: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: var(--radius-full);
  padding: 0.4rem 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--accent-green);
  white-space: nowrap;
  z-index: 2;

  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent-green);
    animation: ${blink} 1.5s ease-in-out infinite;
  }
`;

export const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  z-index: 2;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const ScrollLine = styled.div`
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--accent-cyan), transparent);
  animation: ${float} 2s ease-in-out infinite;
`;

/* ── Marquee ── */
export const MarqueeSection = styled.section`
  padding: 2.5rem 0;
  overflow: hidden;
  border-top: 1px solid var(--border-default);
  border-bottom: 1px solid var(--border-default);
  background: var(--bg-secondary);
`;

export const MarqueeTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${marqueeAnim} 30s linear infinite;
`;

export const MarqueeItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0 2rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;

  i {
    color: var(--accent-cyan);
    font-size: 0.95rem;
  }
`;

export const MarqueeDot = styled.span`
  display: inline-block;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
`;

/* ── Shared section structure ── */
export const Section = styled.section`
  padding: clamp(5rem, 10vw, 8rem) 0;
`;

export const StatsBand = styled.section`
  padding: clamp(5rem, 10vw, 8rem) 0;
  ${sectionElevatedCyan}
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
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--accent-cyan);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 0.875rem;

  &::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 1px;
    background: var(--accent-cyan);
  }
`;

export const SectionTitle = styled(motion.h2)`
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--text-primary);
  margin-bottom: 0.875rem;
`;

export const SectionAccent = styled.span`
  background: linear-gradient(135deg, #00d4ff, #7c3aed);
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

  &.centered {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${SectionSubtitle} {
      margin: 0 auto;
    }
  }
`;

/* ── Stats ── */
export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-lg);
  padding: 1.75rem 1.25rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(135deg, #00d4ff, #7c3aed);
    opacity: 0;
    transition: opacity 0.3s;
  }
  &:hover {
    border-color: rgba(0, 212, 255, 0.2);
    &::before {
      opacity: 1;
    }
  }
`;

export const StatValue = styled.div`
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
  background: linear-gradient(135deg, #00d4ff, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.375rem;
`;

export const StatLabel = styled.p`
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-weight: 500;
`;

/* ── Skills preview ── */
export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
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
    border-color: rgba(0, 212, 255, 0.2);
    transform: translateY(-2px);
  }
`;

export const SkillIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: var(--radius-sm);
  background: rgba(0, 212, 255, 0.08);
  border: 1px solid rgba(0, 212, 255, 0.15);
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

/* ── Projects preview ── */
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
    border-color: rgba(0, 212, 255, 0.2);
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
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--accent-cyan);
  background: rgba(0, 212, 255, 0.08);
  border: 1px solid rgba(0, 212, 255, 0.15);
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

export const ProjectDetailsLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--accent-cyan);
  text-decoration: none;
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

export const ViewAllBtn = styled(NavLink)`
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
    border-color: rgba(0, 212, 255, 0.3);
    background: rgba(0, 212, 255, 0.05);
    transform: translateY(-2px);
  }
`;

/* ── CTA ── */
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
      rgba(0, 212, 255, 0.07),
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const CtaTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.03em;
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
