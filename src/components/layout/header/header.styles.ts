import styled from "styled-components";
import { motion } from "framer-motion";
import AppLink from "@/components/ui/app-link";
import NavLink from "@/components/ui/nav-link";

export const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-header);
  padding: 0 clamp(1rem, 5vw, 3rem);
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition:
    background var(--transition-base),
    border-color var(--transition-base);

  &.scrolled {
    background: rgba(0, 0, 0, 0.88);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border-default);
  }
`;

export const Logo = styled(AppLink)`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
`;

export const BrandImage = styled.img`
  display: block;
  width: auto;
  height: 48px;
  object-fit: contain;
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled(NavLink)`
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 0.5rem 0.875rem;
  border-radius: var(--radius-md);
  position: relative;
  letter-spacing: 0.02em;
  transition: color var(--transition-fast);

  &::after {
    content: "";
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--accent-cyan);
    transition: width var(--transition-base);
  }

  &:hover,
  &.active {
    color: var(--text-primary);

    &::after {
      width: 100%;
    }
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

export const CtaButton = styled(AppLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  background: var(--gradient-primary);
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  letter-spacing: 0.02em;
  transition:
    opacity var(--transition-fast),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
  position: relative;
  overflow: hidden;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: var(--shadow-glow);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button<{ $open: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  gap: 5px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    display: block;
    width: 24px;
    height: 1.5px;
    background: var(--text-primary);
    border-radius: var(--radius-full);
    transition:
      transform var(--transition-base),
      opacity var(--transition-base),
      width var(--transition-base);
    transform-origin: center;

    &:nth-child(1) {
      transform: ${({ $open }) =>
        $open ? "translateY(6.5px) rotate(45deg)" : "none"};
    }

    &:nth-child(2) {
      opacity: ${({ $open }) => ($open ? "0" : "1")};
      width: ${({ $open }) => ($open ? "0" : "24px")};
    }

    &:nth-child(3) {
      transform: ${({ $open }) =>
        $open ? "translateY(-6.5px) rotate(-45deg)" : "none"};
    }
  }
`;

export const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: calc(var(--z-header) + 1);

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Drawer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(320px, 84vw);
  background: #0a0a0a;
  border-left: 1px solid var(--border-default);
  z-index: calc(var(--z-header) + 2);
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  overflow-y: auto;

  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 480px) {
    width: min(300px, 82vw);
    padding: 1.15rem;
  }
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.15rem;
`;

export const DrawerLogo = styled(AppLink)`
  display: inline-flex;
  align-items: center;

  img {
    height: 34px;
  }
`;

export const DrawerClose = styled.button`
  width: 34px;
  height: 34px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-default);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 0.875rem;
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast),
    background var(--transition-fast);

  &:hover {
    color: var(--text-primary);
    border-color: var(--border-hover);
    background: rgba(255, 255, 255, 0.05);
  }
`;

export const DrawerDivider = styled.hr`
  border: none;
  border-top: 1px solid var(--border-default);
  margin-bottom: 1.2rem;
`;

export const DrawerNavLabel = styled.span`
  font-family: var(--font-mono);
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
  display: block;
`;

export const DrawerNavItems = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  flex: 1;
`;

export const DrawerNavItemIcon = styled.span`
  width: 34px;
  height: 34px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  color: var(--text-secondary);
  flex-shrink: 0;
  transition:
    background var(--transition-fast),
    color var(--transition-fast);
`;

export const DrawerNavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.55rem 0.4rem;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-secondary);
  font-family: var(--font-heading);
  letter-spacing: -0.01em;
  transition:
    color var(--transition-fast),
    background var(--transition-fast);

  &:hover,
  &.active {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.04);

    ${DrawerNavItemIcon} {
      background: rgba(255, 255, 255, 0.12);
      color: var(--text-primary);
    }
  }

  &.active ${DrawerNavItemIcon} {
    background: var(--gradient-primary);
    color: #ffffff;
  }
`;

export const DrawerCta = styled(AppLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 46px;
  padding: 0.72rem 1rem;
  background: var(--gradient-primary);
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: var(--radius-lg);
  margin-top: 1.4rem;
  letter-spacing: 0.01em;
  transition:
    opacity var(--transition-fast),
    transform var(--transition-fast);

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
