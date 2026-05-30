import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import {
  commandLabel,
  sectionElevatedCyan,
  sectionScanLines,
} from "@/styles/mixins";

const stackScrollLeft = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const stackScrollRight = keyframes`
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
`;

const flowDash = keyframes`
  to { stroke-dashoffset: -34; }
`;

const nodePulse = keyframes`
  0%, 100% { opacity: 0.72; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.28); }
`;

const lineScan = keyframes`
  0%, 100% { stroke-dashoffset: 42; opacity: 0.45; }
  50% { stroke-dashoffset: 0; opacity: 1; }
`;

const glowBreathe = keyframes`
  0%, 100% { opacity: 0.72; transform: scale(0.98); }
  50% { opacity: 1; transform: scale(1.04); }
`;

const cursorBlink = keyframes`
  0%, 45% { opacity: 1; }
  46%, 100% { opacity: 0; }
`;

const signalDash = keyframes`
  to { stroke-dashoffset: -28; }
`;

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
      rgba(92, 11, 11, 0.07) 0%,
      transparent 65%
    );
    pointer-events: none;
  }
`;

export const IntroGrid = styled.div<{ $reverse?: boolean }>`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: clamp(2.5rem, 5vw, 4rem);
  align-items: center;

  ${({ $reverse }) =>
    $reverse &&
    `
      > :first-child { order: 2; }
      > :last-child { order: 1; }
    `}

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: left;

    ${({ $reverse }) =>
      $reverse &&
      `
        > :first-child { order: 1; }
        > :last-child { order: 2; }
      `}
  }
`;

export const IntroLeft = styled.div`
  min-width: 0;
`;

export const PageLabel = styled(motion.div)`
  ${commandLabel}
`;

export const PageTitle = styled(motion.h1)`
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1;
  color: var(--text-primary);
  margin-bottom: 1.25rem;
`;

export const Accent = styled.span`
  background: linear-gradient(135deg, #a11212, #5c0b0b);
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
    justify-content: flex-start;
  }
`;

export const DownloadBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.625rem;
  background: linear-gradient(135deg, #a11212, #5c0b0b);
  color: #ffffff;
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
    box-shadow: 0 10px 28px rgba(161, 18, 18, 0.28);
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
    border-color: rgba(161, 18, 18, 0.3);
    background: rgba(161, 18, 18, 0.05);
    transform: translateY(-2px);
  }
`;

export const IntroRight = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: relative;
  min-width: 0;

  @media (max-width: 1024px) {
    order: -1;
  }

  @media (max-width: 768px) {
    &.hide-on-mobile {
      display: none;
    }
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
  background: linear-gradient(135deg, #a11212, #5c0b0b);

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

export const InfoChip = styled.div<{ $pos?: string }>`
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

export const AboutLabel = styled(motion.div)`
  ${commandLabel}
`;

export const EditorialTitle = styled(motion.h2)`
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 4.45vw, 4rem);
  font-weight: 800;
  line-height: 1.04;
  letter-spacing: 0;
  color: var(--text-primary);
  max-width: 760px;
  margin-bottom: clamp(1.75rem, 3.5vw, 2.5rem);

  > span {
    display: block;
  }

  @media (max-width: 1024px) {
    margin-left: 0;
    margin-right: 0;
  }

  @media (max-width: 640px) {
    font-size: clamp(2rem, 10vw, 3rem);
  }
`;

export const EditorialMuted = styled.span`
  color: rgba(255, 255, 255, 0.2);
`;

export const EditorialAccent = styled.span`
  display: inline;
  color: #e12a2a;
`;

export const AboutSvgStage = styled.div`
  position: relative;
  width: min(100%, 520px);
  min-height: clamp(260px, 30vw, 390px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  isolation: isolate;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 25% 4% 2%;
    background: radial-gradient(
      ellipse at center,
      rgba(161, 18, 18, 0.18),
      transparent 68%
    );
    filter: blur(22px);
    z-index: -1;
  }

  @media (max-width: 1024px) {
    margin: 0 auto;
  }
`;

export const AboutSystemSvg = styled.svg`
  width: min(100%, 500px);
  height: auto;
  overflow: hidden;
  filter: drop-shadow(0 28px 70px rgba(0, 0, 0, 0.45));

  .panel {
    fill: rgba(8, 8, 8, 0.92);
    stroke: rgba(255, 255, 255, 0.12);
    stroke-width: 1;
  }

  .panel-red {
    stroke: rgba(225, 42, 42, 0.54);
  }

  .muted-line {
    stroke: rgba(255, 255, 255, 0.16);
    stroke-width: 2;
    stroke-linecap: round;
  }

  .red-line {
    stroke: #e12a2a;
    stroke-width: 2.5;
    stroke-linecap: round;
  }

  .flow {
    fill: none;
    stroke: rgba(225, 42, 42, 0.5);
    stroke-width: 2;
    stroke-dasharray: 8 9;
    animation: ${flowDash} 3.8s linear infinite;
  }

  .orbit {
    fill: none;
    stroke: rgba(225, 42, 42, 0.22);
    stroke-width: 1.4;
    stroke-dasharray: 5 10;
  }

  .orbit-soft {
    stroke: rgba(255, 255, 255, 0.08);
  }

  .editor-window {
    fill: url(#editorSurface);
    stroke: rgba(255, 255, 255, 0.14);
    stroke-width: 1.2;
  }

  .editor-topbar {
    fill: rgba(255, 255, 255, 0.045);
  }

  .window-dot {
    fill: #e12a2a;
  }

  .muted-dot {
    fill: rgba(255, 255, 255, 0.18);
  }

  .console {
    fill: rgba(0, 0, 0, 0.42);
    stroke: rgba(225, 42, 42, 0.24);
  }

  .command {
    fill: rgba(255, 255, 255, 0.62);
  }

  .cursor {
    fill: #e12a2a;
    animation: ${cursorBlink} 1.05s steps(1) infinite;
  }

  .mini-screen {
    fill: rgba(225, 42, 42, 0.12);
    stroke: rgba(225, 42, 42, 0.36);
  }

  .db-top,
  .db-ring {
    fill: rgba(225, 42, 42, 0.1);
    stroke: rgba(225, 42, 42, 0.48);
  }

  .db-body {
    fill: rgba(8, 8, 8, 0.92);
    stroke: rgba(255, 255, 255, 0.12);
  }

  .check {
    fill: none;
    stroke: #e12a2a;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 38;
    animation: ${lineScan} 2.8s ease-in-out infinite;
  }

  .signal {
    fill: none;
    stroke: rgba(225, 42, 42, 0.4);
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-dasharray: 7 7;
    animation: ${signalDash} 2.8s linear infinite;
  }

  .node {
    fill: #e12a2a;
    filter: drop-shadow(0 0 12px rgba(225, 42, 42, 0.55));
    transform-box: fill-box;
    transform-origin: center;
    animation: ${nodePulse} 2.4s ease-in-out infinite;
  }

  .label {
    fill: rgba(255, 255, 255, 0.48);
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0;
    text-transform: none;
  }

  .editor-name {
    fill: rgba(255, 255, 255, 0.42);
    font-size: 10px;
  }

  .command {
    fill: rgba(255, 255, 255, 0.62);
    font-size: 11px;
  }

  .module-label {
    font-size: 10.5px;
  }

  .db-label {
    fill: rgba(255, 255, 255, 0.56);
    font-size: 10px;
  }

  .title {
    fill: rgba(255, 255, 255, 0.86);
    font-family: var(--font-heading);
    font-size: 18px;
    font-weight: 700;
  }

  .glow-core {
    transform-box: fill-box;
    transform-origin: center;
    animation: ${glowBreathe} 5s ease-in-out infinite;
  }

  .scan-line {
    stroke-dasharray: 42;
    animation: ${lineScan} 2.6s ease-in-out infinite;
  }

  .scan-line:nth-of-type(2) {
    animation-delay: -0.8s;
  }

  .scan-line:nth-of-type(3) {
    animation-delay: -1.4s;
  }

  .packet {
    fill: #f04444;
    filter: drop-shadow(0 0 14px rgba(225, 42, 42, 0.65));
  }

  .packet-soft {
    fill: rgba(255, 255, 255, 0.48);
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.2));
  }

  @media (prefers-reduced-motion: reduce) {
    .flow,
    .node,
    .glow-core,
    .scan-line {
      animation: none;
    }

    .cursor,
    .signal,
    .check {
      animation: none;
    }
  }
`;

export const SkillsSection = styled.section`
  padding: clamp(4rem, 8vw, 6rem) 0;
  ${sectionElevatedCyan}
`;

export const SectionLabel = styled(motion.div)`
  ${commandLabel}
`;

export const SectionTitle = styled(motion.h2)`
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 4vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.032em;
  line-height: 1;
  color: var(--text-primary);
  margin-bottom: 2rem;
`;

export const FilterRow = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

export const FilterBtn = styled.button<{ $active: boolean }>`
  padding: 0.45rem 1.125rem;
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: 0.825rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid
    ${({ $active }) =>
      $active ? "rgba(161, 18, 18, 0.5)" : "rgba(255,255,255,0.08)"};
  background: ${({ $active }) =>
    $active ? "rgba(161, 18, 18, 0.1)" : "transparent"};
  color: ${({ $active }) =>
    $active ? "var(--accent-cyan)" : "var(--text-secondary)"};
  transition: all 0.25s;

  &:hover {
    border-color: rgba(161, 18, 18, 0.4);
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
    border-color: rgba(161, 18, 18, 0.2);
    transform: translateY(-2px);
  }
`;

export const SkillIconBox = styled.div`
  width: 38px;
  height: 38px;
  border-radius: var(--radius-sm);
  background: rgba(161, 18, 18, 0.07);
  border: 1px solid rgba(161, 18, 18, 0.15);
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

export const StackSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: clamp(5rem, 9vw, 7rem) 0;
  position: relative;
  overflow: hidden;
  ${sectionElevatedCyan}
`;

export const StackHeader = styled.div`
  margin-bottom: clamp(2.5rem, 5vw, 3rem);
`;

export const StackEyebrow = styled(motion.div)`
  ${commandLabel}
`;

export const StackTitle = styled(motion.h2)`
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4.5vw, 3.25rem);
  font-weight: 800;
  letter-spacing: -0.018em;
  line-height: 1.08;
  color: var(--text-primary);
  margin-bottom: 0.375rem;
  text-shadow: 0 0 40px rgba(0, 0, 0, 0.9);
`;

export const StackSubtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 300;
  color: rgba(255, 255, 255, 0.24);
`;

export const StackRowLabel = styled.p`
  font-family: var(--font-mono);
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.28);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
`;

export const StackRowMask = styled.div`
  overflow: hidden;
  margin-bottom: 2rem;
  -webkit-mask: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  mask: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
`;

export const StackTrack = styled.div<{
  $direction: "left" | "right";
  $duration: string;
}>`
  display: flex;
  width: max-content;
  animation: ${({ $direction }) =>
      $direction === "left" ? stackScrollLeft : stackScrollRight}
    ${({ $duration }) => $duration} linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

export const StackLogoGroup = styled.div`
  display: flex;
  flex-shrink: 0;
`;

export const StackLogoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 168px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.02);
  transition:
    transform 0.2s,
    border-color 0.2s,
    background 0.2s;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(161, 18, 18, 0.3);
    background: rgba(161, 18, 18, 0.05);
  }

  img,
  i {
    width: 32px;
    height: 32px;
    opacity: 0.72;
  }

  img {
    object-fit: contain;
  }

  i {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.78);
    font-size: 1.85rem;
    line-height: 1;
  }

  span {
    font-size: 0.68rem;
    color: rgba(255, 255, 255, 0.46);
    letter-spacing: 0.05em;
    white-space: nowrap;
  }

  @media (max-width: 640px) {
    width: 152px;
    padding: 0.875rem 0.75rem;
  }
`;

export const StackSummary = styled.p`
  text-align: center;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.24);
  letter-spacing: 0.05em;
  line-height: 1.8;
  max-width: 980px;
  margin: 0 auto;

  span {
    white-space: nowrap;
  }
`;

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

  i,
  img {
    width: 1em;
    height: 1em;
    flex-shrink: 0;
  }

  i {
    color: var(--accent-cyan);
  }

  img {
    object-fit: contain;
    opacity: 0.82;
  }
`;

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
      rgba(161, 18, 18, 0.35),
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
  background: rgba(161, 18, 18, 0.07);
  border: 1px solid rgba(161, 18, 18, 0.22);
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
