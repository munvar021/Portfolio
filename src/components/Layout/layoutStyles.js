import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
`;

export const Main = styled.main`
  flex: 1;
  padding-top: var(--nav-height);
`;

export const ScrollTopBtn = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00d4ff, #7c3aed);
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  cursor: pointer;
  border: none;
  box-shadow: 0 8px 24px rgba(0, 212, 255, 0.3);
  z-index: 50;
  transition:
    transform var(--transition-spring),
    box-shadow var(--transition-base);

  &:hover {
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 12px 32px rgba(0, 212, 255, 0.4);
  }

  &:active {
    transform: translateY(0) scale(0.95);
  }

  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 40px;
    height: 40px;
  }
`;
