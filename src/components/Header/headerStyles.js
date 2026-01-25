import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ scrolled }) => (scrolled ? "0.6rem 2rem" : "1rem 2rem")};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.glassBg} 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  backdrop-filter: blur(30px) saturate(180%);
  -webkit-backdrop-filter: blur(30px) saturate(180%);
  position: fixed;
  top: 12px;
  left: 12px;
  right: 12px;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({ scrolled }) =>
    scrolled
      ? "0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)"
      : "0 4px 16px rgba(0, 0, 0, 0.06)"};
  border: 0.5px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: 32px;

  /* Subtle inner highlight */
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
      rgba(255, 255, 255, 0.2) 50%,
      transparent
    );
    border-radius: 32px 32px 0 0;
    opacity: ${({ scrolled }) => (scrolled ? 0.8 : 0.4)};
    transition: opacity 0.4s ease;
  }

  @media (max-width: 768px) {
    padding: ${({ scrolled }) => (scrolled ? "0.5rem 1rem" : "0.8rem 1rem")};
    left: 8px;
    right: 8px;
    top: 8px;
    border-radius: 28px;
    
    &::before {
      border-radius: 28px 28px 0 0;
    }
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 700;
  font-size: 1.5rem;
  color: inherit;
  transition: transform 0.3s ease;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  outline: none;

  img {
    height: 2rem;
    margin-right: 0.5rem;
    border-radius: 5px;
  }

  span {
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    background: transparent;
  }

  &:focus {
    outline: none;
    background: transparent;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
  }
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 500;
  color: inherit;
  padding: 0.5rem 0;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ active }) => (active === "true" ? "100%" : "0")};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);

    &:after {
      width: 100%;
    }
  }

  &:active {
    background: transparent;
  }

  &:focus {
    outline: none;
    background: transparent;
  }

  ${({ active, theme }) =>
    active === "true" &&
    `
    color: ${theme.colors.accent};
    font-weight: 600;
  `}

  @media (max-width: 768px) {
    font-size: 1.1rem;
    font-weight: 600;
    padding: 1rem 1.5rem;
    width: 100%;
    text-align: center;
    border-radius: 16px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: ${({ theme }) => theme.colors.textPrimary};
    background: ${({ active, theme }) =>
      active === "true" 
        ? "linear-gradient(135deg, rgba(47, 128, 237, 0.15), rgba(111, 207, 151, 0.1))" 
        : "transparent"};
    border: 0.5px solid ${({ active }) =>
      active === "true" ? "rgba(47, 128, 237, 0.2)" : "transparent"};

    &:hover {
      transform: translateX(0) scale(1.02);
      background: ${({ active, theme }) =>
        active === "true" 
          ? "linear-gradient(135deg, rgba(47, 128, 237, 0.15), rgba(111, 207, 151, 0.1))" 
          : "rgba(47, 128, 237, 0.08)"};
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    &:after {
      display: none;
    }
  }
`;

export const MobileMenuButton = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  z-index: 1001;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  outline: none;
  padding: 0;

  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.accent};
  }

  &:active {
    transform: scale(0.95);
    background: transparent;
  }

  &:focus {
    outline: none;
    background: transparent;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    width: 35px;
    height: 35px;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const MobileActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 8px;
  right: 8px;
  background: ${({ theme }) => theme.colors.background === "#000000" 
    ? "linear-gradient(135deg, rgba(5, 5, 5, 0.98) 0%, rgba(15, 15, 15, 0.96) 100%)"
    : "linear-gradient(135deg, rgba(243, 246, 249, 0.98) 0%, rgba(255, 255, 255, 0.96) 100%)"};
  backdrop-filter: blur(80px) saturate(220%) brightness(115%) contrast(105%);
  -webkit-backdrop-filter: blur(80px) saturate(220%) brightness(115%) contrast(105%);
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: ${({ open }) => (open ? "translateY(0) scale(1)" : "translateY(-10px) scale(0.95)")};
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 30px 80px rgba(0, 0, 0, 0.35),
    0 12px 32px rgba(0, 0, 0, 0.25),
    0 4px 12px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.textPrimary};
  z-index: 999;
  border-radius: 24px;
  border: 0.5px solid ${({ theme }) => theme.colors.glassBorder};
  max-height: ${({ open }) => (open ? "80vh" : "0")};
  overflow: hidden;

  /* Outer glow */
  &::after {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: 24px;
    padding: 1px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.05)
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0.6;
  }

  /* Inner highlight */
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
      ${({ theme }) => theme.colors.glassBorder} 50%,
      transparent
    );
    border-radius: 24px 24px 0 0;
    opacity: 1;
    z-index: 1;
  }

  @media (max-width: 480px) {
    left: 8px;
    right: 8px;
    border-radius: 20px;
    
    &::before {
      border-radius: 20px 20px 0 0;
    }
    
    &::after {
      border-radius: 20px;
    }
  }
`;

export const ThemeToggleButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  outline: none;
  padding: 0;
  border-radius: 0;

  &:hover {
    transform: scale(1.2);
    color: ${({ theme }) => theme.colors.accent};
    background: transparent;
    box-shadow: none;
  }

  &:active {
    background: transparent;
    transform: scale(1.1);
    box-shadow: none;
  }

  &:focus {
    outline: none;
    background: transparent;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    font-size: 1rem;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
