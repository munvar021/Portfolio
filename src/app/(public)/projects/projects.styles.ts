import styled from "styled-components";
import { motion } from "framer-motion";
import { commandLabel } from "@/styles/mixins";
import type { ProjectCardVariant } from "@/lib/projects";

export const PageHero = styled.section`
  padding: clamp(5rem, 10vw, 7rem) 0 clamp(3rem, 5vw, 4rem);
  text-align: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 320px;
    background: radial-gradient(
      ellipse,
      rgba(92, 11, 11, 0.08) 0%,
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
  font-size: clamp(2.5rem, 6vw, 4.5rem);
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

export const PageSubtitle = styled(motion.p)`
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  color: var(--text-secondary);
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.7;
`;

export const FilterSection = styled.div`
  padding: 2rem 0 0;
  border-bottom: 1px solid var(--border-default);
  background: var(--bg-secondary);
`;

export const FilterBar = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  padding-bottom: 1.5rem;
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
  white-space: nowrap;

  &:hover {
    border-color: rgba(161, 18, 18, 0.4);
    color: var(--text-primary);
  }
`;

export const ProjectsSection = styled.section`
  padding: clamp(4rem, 8vw, 6rem) 0;
  background: var(--bg-secondary);
`;

export const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-flow: dense;
  gap: clamp(0.9rem, 1.6vw, 1.35rem);
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const ProjectCard = styled(motion.div)<{
  $variant?: ProjectCardVariant;
}>`
  --card-direction: column;
  --card-column: span 4;
  --card-row: span 1;
  --card-min-height: 360px;
  --image-width: 100%;
  --image-height: 180px;
  --body-padding: clamp(1.1rem, 1.5vw, 1.45rem);
  --title-size: clamp(1.02rem, 1.4vw, 1.18rem);
  --desc-lines: 3;
  --highlight-display: none;
  --body-justify: flex-start;
  --body-min-height: auto;
  --body-overlay: transparent;
  --links-margin-top: 0.95rem;
  --image-position: relative;
  --image-inset: auto;
  --image-opacity: 1;
  --image-filter: none;

  grid-column: ${({ $variant }) => {
    if ($variant === "feature" || $variant === "wide") return "span 6";
    if ($variant === "tall") return "span 3";
    return "span 3";
  }};
  grid-row: ${({ $variant }) =>
    $variant === "feature" || $variant === "tall" ? "span 2" : "span 1"};
  min-height: ${({ $variant }) => {
    if ($variant === "feature") return "460px";
    if ($variant === "wide") return "260px";
    if ($variant === "tall") return "440px";
    return "350px";
  }};
  border-radius: 8px;
  overflow: hidden;
  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.055),
      rgba(255, 255, 255, 0.012)
    ),
    radial-gradient(circle at 20% 0%, rgba(161, 18, 18, 0.12), transparent 32%),
    #101010;
  border: 1px solid rgba(255, 255, 255, 0.075);
  display: flex;
  flex-direction: var(--card-direction);
  cursor: pointer;
  position: relative;
  isolation: isolate;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.035);
  transition:
    border-color 0.3s,
    box-shadow 0.3s,
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);

  ${({ $variant }) =>
    $variant === "feature" &&
    `
      --image-height: 235px;
      --body-padding: clamp(1.2rem, 1.75vw, 1.55rem);
      --title-size: clamp(1.3rem, 2vw, 1.7rem);
      --desc-lines: 3;
      --highlight-display: grid;
      --body-justify: flex-end;
      --body-min-height: 100%;
      --body-overlay:
        linear-gradient(180deg, rgba(8, 8, 8, 0.04) 0%, rgba(8, 8, 8, 0.72) 42%, rgba(8, 8, 8, 0.96) 100%);
      --image-position: absolute;
      --image-inset: 0;
      --image-width: 100%;
      --image-height: 100%;
      --image-opacity: 0.48;
      --image-filter: saturate(0.9) contrast(1.08);
    `}

  ${({ $variant }) =>
    $variant === "wide" &&
    `
      --card-direction: row;
      --image-width: 42%;
      --image-height: auto;
      --title-size: clamp(1.12rem, 1.55vw, 1.32rem);
      --desc-lines: 3;
      --highlight-display: grid;
    `}

  ${({ $variant }) =>
    $variant === "tall" &&
    `
      --image-height: 220px;
      --desc-lines: 3;
      --highlight-display: grid;
      --body-justify: flex-end;
      --body-min-height: 100%;
      --body-overlay:
        linear-gradient(180deg, rgba(8, 8, 8, 0.08) 0%, rgba(8, 8, 8, 0.68) 46%, rgba(8, 8, 8, 0.96) 100%);
      --image-position: absolute;
      --image-inset: 0;
      --image-width: 100%;
      --image-height: 100%;
      --image-opacity: 0.42;
      --image-filter: saturate(0.9) contrast(1.08);
    `}

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(
        120deg,
        transparent 0%,
        rgba(255, 255, 255, 0.05) 38%,
        transparent 66%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 44%);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
    z-index: 1;
  }

  &:hover {
    border-color: rgba(225, 42, 42, 0.26);
    box-shadow:
      0 24px 60px rgba(0, 0, 0, 0.48),
      0 0 0 1px rgba(161, 18, 18, 0.08);
    transform: translateY(-4px);
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 1024px) {
    grid-column: ${({ $variant }) =>
      $variant === "compact" || $variant === "tall" ? "span 3" : "span 6"};
    min-height: ${({ $variant }) =>
      $variant === "compact" ? "350px" : "auto"};
  }

  @media (max-width: 760px) {
    --card-direction: column;
    --image-width: 100%;
    --image-height: 190px;
    --image-position: relative;
    --image-inset: auto;
    --image-opacity: 1;
    --image-filter: none;
    --body-min-height: auto;
    --body-overlay: transparent;
    --body-justify: flex-start;
  }

  @media (max-width: 640px) {
    grid-column: 1 / -1;
    grid-row: auto;
    min-height: auto;
    --image-height: 180px;
    --title-size: 1.1rem;
    --desc-lines: 3;
  }
`;

export const ProjectImageWrap = styled.div`
  width: var(--image-width);
  height: var(--image-height);
  overflow: hidden;
  position: var(--image-position);
  inset: var(--image-inset);
  flex-shrink: 0;
  background: #080808;
  opacity: var(--image-opacity);
  filter: var(--image-filter);
  z-index: 0;

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
    background:
      linear-gradient(to top, rgba(0, 0, 0, 0.74) 0%, transparent 58%),
      linear-gradient(135deg, rgba(161, 18, 18, 0.2), transparent 45%);
  }

  @media (max-width: 760px) {
    min-height: 0;
  }
`;

export const FeaturedBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 3;
  padding: 0.25rem 0.625rem;
  background: linear-gradient(135deg, #a11212, #5c0b0b);
  color: #ffffff;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: var(--radius-full);
`;

export const ProjectBody = styled.div`
  padding: var(--body-padding);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: var(--body-justify);
  position: relative;
  z-index: 2;
  min-width: 0;
  min-height: var(--body-min-height);
  background: var(--body-overlay);
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
  background: rgba(161, 18, 18, 0.07);
  border: 1px solid rgba(161, 18, 18, 0.14);
  padding: 0.15rem 0.5rem;
  border-radius: var(--radius-full);
`;

export const ProjectTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: var(--title-size);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.06;
  margin-bottom: 0.55rem;
`;

export const ProjectDesc = styled.p`
  font-size: 0.825rem;
  color: var(--text-secondary);
  line-height: 1.65;
  display: -webkit-box;
  -webkit-line-clamp: var(--desc-lines);
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 0.95rem;
`;

export const ProjectHighlights = styled.ul`
  display: var(--highlight-display);
  gap: 0.5rem;
  margin: 0 0 1rem;
  padding: 0;
  list-style: none;
`;

export const ProjectHighlight = styled.li`
  display: grid;
  grid-template-columns: 16px minmax(0, 1fr);
  align-items: start;
  gap: 0.45rem;
  padding: 0.48rem 0.55rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.026);
  border: 1px solid rgba(255, 255, 255, 0.055);
  color: rgba(245, 245, 245, 0.78);
  font-size: 0.72rem;
  line-height: 1.45;

  i {
    color: #e12a2a;
    font-size: 0.66rem;
    transform: translateY(0.2rem);
  }
`;

export const CredentialsBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.72rem;
  color: var(--accent-gold);
  background: rgba(143, 17, 17, 0.07);
  border: 1px solid rgba(143, 17, 17, 0.15);
  border-radius: var(--radius-sm);
  padding: 0.35rem 0.625rem;
  margin-bottom: 1rem;

  i {
    font-size: 0.7rem;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: var(--links-margin-top);
  flex-wrap: wrap;
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
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
