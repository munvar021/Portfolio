import styled from "styled-components";
import { motion } from "framer-motion";
import AppLink from "@/components/ui/app-link";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: var(--bg-primary);
  padding-top: var(--nav-height);
`;

export const Hero = styled.div`
  padding: 5rem 0 3rem;
  border-bottom: 1px solid var(--border-default);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(161, 18, 18, 0.4),
      transparent
    );
  }

  @media (max-width: 768px) {
    padding: 3.5rem 0 2.5rem;
  }
`;

export const BackLink = styled(AppLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  transition: color var(--transition-fast);

  i {
    font-size: 0.75rem;
    transition: transform var(--transition-fast);
  }

  &:hover {
    color: var(--text-primary);

    i {
      transform: translateX(-3px);
    }
  }
`;

export const HeroInner = styled(motion.div)``;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent-cyan);
  background: rgba(161, 18, 18, 0.08);
  border: 1px solid rgba(161, 18, 18, 0.2);
  border-radius: var(--radius-full);
  padding: 0.375rem 0.875rem;
  margin-bottom: 1.5rem;
`;

export const PageTitle = styled.h1`
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.035em;
  line-height: 1;
  margin-bottom: 1rem;
`;

export const Meta = styled.p`
  font-size: 0.875rem;
  color: var(--text-muted);

  span {
    color: var(--text-secondary);
  }
`;

export const Body = styled.div`
  padding: 4rem 0 6rem;

  @media (max-width: 768px) {
    padding: 3rem 0 4rem;
  }
`;

export const BodyInner = styled.div`
  max-width: 800px;
`;

export const Intro = styled(motion.p)`
  font-size: 1.0625rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--border-default);
`;

export const Section = styled(motion.section)`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionHeading = styled.h2`
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.018em;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &::before {
    content: "";
    display: block;
    width: 3px;
    height: 1.25rem;
    background: var(--gradient-primary);
    border-radius: var(--radius-full);
    flex-shrink: 0;
  }
`;

export const Paragraph = styled.p`
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 0.875rem;

  &:last-child {
    margin-bottom: 0;
  }

  a {
    color: var(--accent-cyan);
    transition: opacity var(--transition-fast);

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin-top: 0.75rem;
`;

export const ListItem = styled.li`
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.7;
  padding-left: 1.25rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.6em;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--accent-cyan);
    opacity: 0.6;
    flex-shrink: 0;
  }
`;

export const ContactBox = styled.div`
  margin-top: 3rem;
  padding: 1.75rem 2rem;
  background: rgba(161, 18, 18, 0.04);
  border: 1px solid rgba(161, 18, 18, 0.15);
  border-radius: var(--radius-lg);

  p {
    font-size: 0.9375rem;
    color: var(--text-secondary);
    line-height: 1.7;
  }

  a {
    color: var(--accent-cyan);
    transition: opacity var(--transition-fast);

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 768px) {
    padding: 1.25rem 1.25rem;
  }
`;
