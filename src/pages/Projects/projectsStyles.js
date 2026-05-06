import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

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
      rgba(124, 58, 237, 0.08) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const PageLabel = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--accent-purple);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 1rem;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    width: 20px;
    height: 1px;
    background: var(--accent-purple);
  }
`;

export const PageTitle = styled(motion.h1)`
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
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
  white-space: nowrap;

  &:hover {
    border-color: rgba(0, 212, 255, 0.4);
    color: var(--text-primary);
  }
`;

export const ProjectsSection = styled.section`
  padding: clamp(4rem, 8vw, 6rem) 0;
  background: var(--bg-secondary);
`;

export const ProjectsGrid = styled(motion.div)`
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
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;

  &:hover {
    border-color: rgba(0, 212, 255, 0.2);
    box-shadow: 0 20px 44px rgba(0, 0, 0, 0.5);
  }
`;

export const ProjectImageWrap = styled.div`
  width: 100%;
  height: 210px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;

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
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 55%);
  }

  @media (max-width: 640px) {
    height: 190px;
  }
`;

export const FeaturedBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 3;
  padding: 0.25rem 0.625rem;
  background: linear-gradient(135deg, #00d4ff, #7c3aed);
  color: #000;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: var(--radius-full);
`;

export const ProjectBody = styled.div`
  padding: 1.375rem 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
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
  background: rgba(0, 212, 255, 0.07);
  border: 1px solid rgba(0, 212, 255, 0.14);
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
  line-height: 1.65;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
  margin-bottom: 1rem;
`;

export const CredentialsBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.72rem;
  color: var(--accent-gold);
  background: rgba(255, 184, 48, 0.07);
  border: 1px solid rgba(255, 184, 48, 0.15);
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
  margin-top: auto;
  flex-wrap: wrap;
`;

export const ViewDetailsLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
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
