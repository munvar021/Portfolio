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
  right: 2rem;
  bottom: 2rem;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-xl);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(13, 13, 13, 0.92);
  color: var(--primary-hover);
  border: 1px solid rgba(161, 18, 18, 0.28);
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.42),
    0 0 30px rgba(161, 18, 18, 0.1);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  font-size: 0.875rem;
  cursor: pointer;
  z-index: var(--z-overlay);
  transition:
    background var(--transition-fast),
    border-color var(--transition-fast),
    box-shadow var(--transition-fast),
    color var(--transition-fast),
    transform var(--transition-base);

  &:hover {
    background: rgba(161, 18, 18, 0.18);
    color: var(--text-primary);
    border-color: rgba(193, 23, 23, 0.5);
    box-shadow:
      0 14px 34px rgba(0, 0, 0, 0.48),
      0 0 26px rgba(161, 18, 18, 0.22);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0) scale(0.96);
  }

  &:focus-visible {
    outline: 2px solid var(--text-primary);
    outline-offset: 3px;
  }

  i {
    font-size: 0.875rem;
  }

  @media (max-width: 768px) {
    right: 1.5rem;
    bottom: 1.5rem;
    width: 40px;
    height: 40px;
  }
`;
