import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { sectionScanLines, sectionElevatedCyan } from "../../styles/mixins";

/* ── Hero ── */
export const DetailHero = styled.section`
  padding: clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 7vw, 6rem);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse at 60% 0%,
        rgba(0, 212, 255, 0.07) 0%,
        transparent 55%
      ),
      radial-gradient(
        ellipse at 10% 80%,
        rgba(124, 58, 237, 0.05) 0%,
        transparent 50%
      );
    pointer-events: none;
  }
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2.5rem, 5vw, 5rem);
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const HeroContent = styled.div``;

export const HeroImageWrap = styled(motion.div)`
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 32px 72px rgba(0, 0, 0, 0.7),
    inset 0 1px 0 rgba(255, 255, 255, 0.07);

  img {
    width: 100%;
    height: 380px;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 900px) {
    order: -1;

    img {
      height: 240px;
    }
  }

  @media (max-width: 640px) {
    img {
      height: 200px;
    }
  }
`;

export const BackLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: 0.04em;
  text-decoration: none;
  margin-bottom: 2rem;
  transition:
    color var(--transition-base),
    gap var(--transition-base);

  &:hover {
    color: var(--accent-cyan);
    gap: 0.75rem;
  }
`;

export const HeroMeta = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.625rem;
  margin-bottom: 1.25rem;
`;

export const CategoryBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.75rem;
  background: rgba(0, 212, 255, 0.08);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: var(--radius-full);
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--accent-cyan);
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const YearBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.75rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-full);
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: 0.06em;
`;

export const FeaturedPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.75rem;
  background: linear-gradient(
    135deg,
    rgba(0, 212, 255, 0.12),
    rgba(124, 58, 237, 0.12)
  );
  border: 1px solid rgba(124, 58, 237, 0.25);
  border-radius: var(--radius-full);
  font-size: 0.72rem;
  font-weight: 700;
  color: #a78bfa;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const ProjectTitle = styled(motion.h1)`
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

export const ProjectDesc = styled(motion.p)`
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 680px;
  margin-bottom: 2rem;
`;

export const TechRow = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
`;

export const TechTag = styled.span`
  padding: 0.35rem 0.8rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-sm);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-secondary);
  font-family: var(--font-mono);
  transition:
    border-color var(--transition-base),
    color var(--transition-base);

  &:hover {
    border-color: rgba(0, 212, 255, 0.25);
    color: var(--text-primary);
  }
`;

export const CtaRow = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const DemoBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  background: linear-gradient(135deg, #00d4ff, #7c3aed);
  border-radius: var(--radius-md);
  font-size: 0.88rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  transition:
    opacity var(--transition-base),
    transform var(--transition-base);

  &:hover {
    opacity: 0.88;
    transform: translateY(-2px);
  }
`;

export const GithubBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
  transition:
    background var(--transition-base),
    border-color var(--transition-base),
    transform var(--transition-base);

  &:hover {
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(255, 255, 255, 0.18);
    transform: translateY(-2px);
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 60%,
    rgba(0, 0, 0, 0.4) 100%
  );
  pointer-events: none;
`;

/* ── Content ── */
export const ContentSection = styled.section`
  padding: clamp(4rem, 8vw, 6rem) 0;
  ${sectionScanLines}
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const MainContent = styled.div``;

export const ContentTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: clamp(1.4rem, 2.5vw, 1.75rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;

  span {
    background: linear-gradient(135deg, #00d4ff, #7c3aed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const FeaturesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;

export const FeatureItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-md);
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.6;
  transition:
    border-color var(--transition-base),
    background var(--transition-base);

  &:hover {
    border-color: rgba(0, 212, 255, 0.15);
    background: rgba(0, 212, 255, 0.03);
    color: var(--text-primary);
  }

  i {
    color: var(--accent-cyan);
    font-size: 0.8rem;
    margin-top: 0.25rem;
    flex-shrink: 0;
  }
`;

/* ── Sidebar ── */
export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const InfoCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
`;

export const InfoCardTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  &:last-child {
    border-bottom: none;
  }
`;

export const InfoIcon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 212, 255, 0.08);
  border: 1px solid rgba(0, 212, 255, 0.15);
  border-radius: var(--radius-sm);
  flex-shrink: 0;
  color: var(--accent-cyan);
  font-size: 0.75rem;
`;

export const InfoText = styled.div``;

export const InfoLabel = styled.p`
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 0.2rem;
`;

export const InfoValue = styled.p`
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-primary);
`;

export const CredentialsCard = styled(motion.div)`
  background: rgba(255, 184, 48, 0.05);
  border: 1px solid rgba(255, 184, 48, 0.15);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
`;

export const CredTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--accent-gold);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CredRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 184, 48, 0.08);

  &:last-child {
    border-bottom: none;
  }
`;

export const CredLabel = styled.span`
  font-size: 0.78rem;
  color: var(--text-muted);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

export const CredValue = styled.span`
  font-size: 0.88rem;
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-weight: 500;
`;

/* ── Prev / Next navigation ── */
export const NavSection = styled.section`
  padding: clamp(4rem, 8vw, 6rem) 0;
  ${sectionElevatedCyan}
`;

export const NavSectionTitle = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1.75rem;
`;

export const NavGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const NavCard = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: var(--radius-lg);
  text-decoration: none;
  transition:
    background var(--transition-base),
    border-color var(--transition-base),
    transform var(--transition-base);

  ${({ $align }) =>
    $align === "right" && "flex-direction: row-reverse; text-align: right;"}

  &:hover {
    background: rgba(0, 212, 255, 0.04);
    border-color: rgba(0, 212, 255, 0.18);
    transform: translateY(-3px);
  }
`;

export const NavArrow = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 212, 255, 0.08);
  border: 1px solid rgba(0, 212, 255, 0.15);
  border-radius: var(--radius-sm);
  color: var(--accent-cyan);
  font-size: 0.85rem;
  flex-shrink: 0;
`;

export const NavCardContent = styled.div`
  min-width: 0;
`;

export const NavCardLabel = styled.p`
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
`;

export const NavCardTitle = styled.p`
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
