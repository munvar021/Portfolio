import styled from "styled-components";
import theme from "../../styles/theme";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${theme.colors.background};
  background-image: linear-gradient(
    to bottom,
    rgba(243, 246, 249, 0.8),
    rgba(243, 246, 249, 1)
  );
  position: relative;
  font-family: ${theme.fonts.body};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 400px;
    background: linear-gradient(
      135deg,
      ${theme.colors.primary} 0%,
      ${theme.colors.accent} 100%
    );
    opacity: 0.03;
    z-index: -1;
  }
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

export const PageTransition = styled.div`
  opacity: ${(props) => (props.isTransitioning ? 0 : 1)};
  transform: translateY(${(props) => (props.isTransitioning ? "20px" : "0")});
  transition: all 0.3s ease-in-out;
`;

export const ScrollToTop = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: rgba(47, 128, 237, 0.8);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  opacity: ${(props) => (props.visible === "true" ? 1 : 0)};
  visibility: ${(props) => (props.visible === "true" ? "visible" : "hidden")};
  transform: ${(props) =>
    props.visible === "true"
      ? "translateY(0) scale(1)"
      : "translateY(20px) scale(0.8)"};
  z-index: 100;

  &:hover {
    background-color: ${theme.colors.highlight};
    transform: ${(props) =>
      props.visible === "true"
        ? "translateY(-5px) scale(1.1)"
        : "translateY(20px) scale(0.8)"};
    box-shadow: 0 5px 15px rgba(111, 207, 151, 0.3);
  }

  &:active {
    transform: ${(props) =>
      props.visible === "true"
        ? "translateY(-2px) scale(1.05)"
        : "translateY(20px) scale(0.8)"};
  }

  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const ContentWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;
