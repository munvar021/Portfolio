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
      ? "0 8px 32px rgba(0, 0, 0, 0.12)"
      : "0 4px 16px rgba(0, 0, 0, 0.06)"};
  border: 0.5px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: 24px;

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
    border-radius: 24px 24px 0 0;
    opacity: ${({ scrolled }) => (scrolled ? 0.8 : 0.4)};
    transition: opacity 0.4s ease;
  }

  @media (max-width: 768px) {
    padding: ${({ scrolled }) => (scrolled ? "0.5rem 1rem" : "0.8rem 1rem")};
    left: 8px;
    right: 8px;
    top: 8px;
    border-radius: 20px;

    &::before {
      border-radius: 20px 20px 0 0;
    }
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease;
  user-select: none;

  img {
    height: 2rem;
    margin-right: 0.5rem;
    border-radius: 5px;
  }

  span {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 700;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const Nav = styled.nav`
  display: ${({ $desktop }) => ($desktop ? "flex" : "flex")};
  gap: 2rem;

  @media (max-width: 1024px) {
    display: ${({ $desktop }) => ($desktop ? "none" : "flex")};
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
    width: 100%;
  }
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  background: ${({ active }) =>
    active === "true" ? "rgba(255, 255, 255, 0.1)" : "transparent"};
  border: ${({ active }) =>
    active === "true" ? "0.5px solid rgba(255, 255, 255, 0.2)" : "none"};
  color: ${({ active, theme }) =>
    active === "true" ? theme.colors.textPrimary : theme.colors.textSecondary};
  font-weight: ${({ active }) => (active === "true" ? "600" : "500")};
  padding: 0.5rem 1rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
  }

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: flex-start;
    padding: 1rem 1.25rem;
    font-size: 1rem;
    border-radius: 14px;
    gap: 1rem;

    svg {
      font-size: 1.2rem;
      min-width: 20px;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover {
      transform: translateX(4px);
      background: rgba(255, 255, 255, 0.12);

      svg {
        transform: scale(1.1);
      }
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  padding: 0;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    display: flex;
  }
`;

export const MobileActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ThemeToggleButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;

  &:hover {
    transform: scale(1.2);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: none;
  }

  &:active {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 35px;
    height: 35px;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),
              visibility 0.4s;
  z-index: 1000;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.glassBg} 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  backdrop-filter: blur(80px) saturate(220%);
  -webkit-backdrop-filter: blur(80px) saturate(220%);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),
              visibility 0.4s;
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.3);
  z-index: 1001;
  border-left: 0.5px solid ${({ theme }) => theme.colors.glassBorder};
  overflow-y: auto;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 1px;
    background: linear-gradient(
      180deg,
      transparent,
      rgba(255, 255, 255, 0.2) 50%,
      transparent
    );
  }

  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 480px) {
    width: 280px;
  }
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const MobileMenuTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.textPrimary};
  width: 36px;
  height: 36px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1.2rem;
  padding: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(90deg);
    box-shadow: none;
  }

  &:active {
    transform: rotate(90deg) scale(0.95);
  }
`;


