import styled from "styled-components";
import { motion } from "framer-motion";
import { sectionElevatedCyan, sectionScanLines } from "../../styles/mixins";

export const PageHero = styled.section`
  padding: clamp(5rem, 10vw, 7rem) 0 clamp(3rem, 6vw, 4rem);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(124, 58, 237, 0.07) 0%,
      transparent 65%
    );
    pointer-events: none;
  }
`;

export const IntroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }
`;

export const IntroLeft = styled.div``;

export const PageLabel = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--accent-cyan);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 1rem;

  &::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 1px;
    background: var(--accent-cyan);
  }
`;

export const PageTitle = styled(motion.h1)`
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: var(--text-primary);
  margin-bottom: 1.25rem;
`;

export const Accent = styled.span`
  background: linear-gradient(135deg, #00d4ff, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const PageBio = styled(motion.p)`
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 2rem;
`;

export const IntroCtas = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const DownloadBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.625rem;
  background: linear-gradient(135deg, #00d4ff, #7c3aed);
  color: #000;
  font-weight: 700;
  font-size: 0.875rem;
  border-radius: var(--radius-full);
  transition:
    opacity 0.2s,
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(0, 212, 255, 0.28);
  }
`;

export const ContactBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.625rem;
  background: transparent;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: var(--radius-full);
  border: 1px solid rgba(255, 255, 255, 0.12);
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

export const IntroRight = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: 1024px) {
    order: -1;
  }
`;

export const PhotoFrame = styled.div`
  position: relative;
  width: clamp(220px, 28vw, 320px);
  height: clamp(280px, 36vw, 400px);
`;

export const PhotoBorder = styled.div`
  position: absolute;
  inset: -3px;
  border-radius: var(--radius-xl);
  background: linear-gradient(135deg, #00d4ff, #7c3aed);

  &::before {
    content: "";
    position: absolute;
    inset: 3px;
    border-radius: calc(var(--radius-xl) - 1px);
    background: var(--bg-primary);
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-xl);
  position: relative;
  z-index: 1;
`;

export const InfoChip = styled.div`
  position: absolute;
  ${({ $pos }) => $pos || ""}
  background: rgba(0,0,0,0.88);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-full);
  padding: 0.45rem 0.875rem;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;
  z-index: 2;

  i {
    color: var(--accent-cyan);
  }
`;

/* ── Skills ── */
export const SkillsSection = styled.section`
  padding: clamp(4rem, 8vw, 6rem) 0;
  ${sectionElevatedCyan}
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
  font-size: clamp(1.8rem, 4vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--text-primary);
  margin-bottom: 2rem;
`;

export const FilterRow = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

export const FilterBtn = styled.button`
  padding: 0.45rem 1.125rem;
  border-radius: var(--radius-full);
  font-size: 0.825rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid
    ${({ $active }) =>
      $active ? "rgba(0,212,255,0.5)" : "rgba(255,255,255,0.08)"};
  background: ${({ $active }) =>
    $active ? "rgba(0,212,255,0.1)" : "transparent"};
  color: ${({ $active }) =>
    $active ? "var(--accent-cyan)" : "var(--text-secondary)"};
  transition: all 0.25s;

  &:hover {
    border-color: rgba(0, 212, 255, 0.4);
    color: var(--text-primary);
  }
`;

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
    transform 0.3s;

  &:hover {
    border-color: rgba(0, 212, 255, 0.2);
    transform: translateY(-2px);
  }
`;

export const SkillIconBox = styled.div`
  width: 38px;
  height: 38px;
  border-radius: var(--radius-sm);
  background: rgba(0, 212, 255, 0.07);
  border: 1px solid rgba(0, 212, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1rem;
  color: var(--accent-cyan);
`;

export const SkillInfo = styled.div``;
export const SkillName = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
`;
export const SkillCat = styled.p`
  font-size: 0.7rem;
  color: var(--text-muted);
  margin-top: 0.1rem;
`;

/* ── Tools ── */
export const ToolsSection = styled.section`
  padding: 2.5rem 0;
  overflow: hidden;
  border-top: 1px solid var(--border-default);
  border-bottom: 1px solid var(--border-default);
`;

export const ToolsTrack = styled.div`
  display: flex;
  width: max-content;
  animation: marquee 25s linear infinite;

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;

export const ToolChip = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.375rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-full);
  margin-right: 0.75rem;
  white-space: nowrap;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-secondary);

  i {
    color: var(--accent-cyan);
  }
`;

/* ── Timeline ── */
export const TimelineSection = styled.section`
  padding: clamp(4rem, 8vw, 6rem) 0;
  ${sectionScanLines}
`;

export const TimelineCols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const TimelineCol = styled.div``;

export const TimelineColTitle = styled(motion.h3)`
  font-family: var(--font-heading);
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.625rem;

  i {
    color: var(--accent-cyan);
  }
`;

export const TimelineList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 23px;
    bottom: 0;
    left: 22px;
    width: 1px;
    background: linear-gradient(
      to bottom,
      rgba(0, 212, 255, 0.35),
      transparent
    );
  }
`;

export const TimelineItem = styled(motion.div)`
  display: flex;
  gap: 1.25rem;
  padding-bottom: 2rem;

  &:last-child {
    padding-bottom: 0;
  }
`;

export const TimelineDot = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(0, 212, 255, 0.07);
  border: 1px solid rgba(0, 212, 255, 0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  z-index: 1;

  i {
    color: var(--accent-cyan);
    font-size: 0.95rem;
  }
`;

export const TimelineContent = styled.div`
  flex: 1;
  padding-top: 0.375rem;
`;

export const TimelinePeriod = styled.span`
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--accent-cyan);
  letter-spacing: 0.05em;
  margin-bottom: 0.3rem;
`;

export const TimelineTitle = styled.h4`
  font-family: var(--font-heading);
  font-size: 0.975rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.2rem;
`;

export const TimelineSubtitle = styled.p`
  font-size: 0.825rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
`;

export const TimelinePoints = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-top: 0.5rem;
`;

export const TimelinePoint = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.6;

  &::before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--accent-cyan);
    flex-shrink: 0;
    margin-top: 0.45rem;
  }
`;
