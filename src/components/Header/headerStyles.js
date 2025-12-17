import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ scrolled }) => (scrolled ? "0.6rem 2rem" : "1rem 2rem")};
  background: ${({ theme }) => theme.colors.glassBg};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  box-shadow: ${({ scrolled }) =>
    scrolled
      ? "0 4px 20px rgba(0, 0, 0, 0.15)"
      : "0 2px 10px rgba(0, 0, 0, 0.05)"};
  border: 0px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: 0 0 10px 10px;
  margin: 0 10px;
  width: calc(100% - 20px);

  @media (max-width: 768px) {
    padding: ${({ scrolled }) => (scrolled ? "0.5rem 1rem" : "0.8rem 1rem")};
    margin: 0 5px;
    width: calc(100% - 10px);
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
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
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
  transition: all 0.3s ease;
  outline: none; // Remove default focus outline

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ active }) => (active === "true" ? "100%" : "0")};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);

    &:after {
      width: ${({ active }) => (active === "true" ? "100%" : "50%")};
    }
  }

  ${({ active, theme }) =>
    active === "true" &&
    `
    color: ${theme.colors.accent};
    font-weight: 600;
  `}

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.8rem 0;
    width: 100%;
    text-align: center;
    border-radius: 8px;

    &:hover {
      transform: translateX(0);
      background-color: ${({ active, theme }) =>
        active === "true" ? "transparent" : "rgba(47, 128, 237, 0.1)"};
    }

    ${({ active, theme }) =>
      active === "true" &&
      `
      background-color: rgba(47, 128, 237, 0.15);
    `}

    &:after {
      display: none;
    }
  }
`;

export const MobileMenuButton = styled.button`
  background: rgba(47, 128, 237, 0.1);
  border: none;
  color: inherit;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 1001;

  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.accent};
    background: rgba(47, 128, 237, 0.15);
  }

  &:active {
    transform: scale(0.95);
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
  top: 100%;
  left: 10px;
  right: 10px;
  background: ${({ theme }) => theme.colors.glassBg};
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-10px)")};
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.textPrimary};
  z-index: 999;
  border-radius: 10px;
  border: 0px solid ${({ theme }) => theme.colors.glassBorder};
  max-height: ${({ open }) => (open ? "80vh" : "0")};
  overflow: hidden;

  @media (max-width: 480px) {
    left: 5px;
    right: 5px;
  }
`;

export const ThemeToggleButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: 768px) {
    font-size: 1rem;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
