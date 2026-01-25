import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  font-family: ${({ theme }) => theme.fonts.body};
  overflow: hidden;
  padding-top: 80px;

  @media (max-width: 768px) {
    padding-top: 70px;
  }
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  width: 100%;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

export const PageTransition = styled.div`
  opacity: ${(props) => (props.isTransitioning ? 0 : 1)};
  transform: translateY(${(props) => (props.isTransitioning ? "30px" : "0")});
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`;

export const ScrollToTop = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.glassBg} 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 0.5px solid ${({ theme }) => theme.colors.glassBorder};
  color: ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 100;
  will-change: transform, opacity;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);

  &:hover {
    transform: translateY(-8px) scale(1.15);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    background: ${({ theme }) => theme.colors.accent};
    color: white;
  }

  &:active {
    transform: translateY(-4px) scale(1.05);
    transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }
`;
