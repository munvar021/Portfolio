import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import theme from "../../styles/theme";

const spinWithColors = keyframes`
  0% { 
    transform: rotate(0deg); 
    color: ${theme.colors.primary}; 
  }
  12.5% { 
    transform: rotate(45deg);
    color: ${theme.colors.secondary}; 
  }
  25% { 
    transform: rotate(90deg);
    color: ${theme.colors.accent}; 
  }
  37.5% { 
    transform: rotate(135deg);
    color: ${theme.colors.highlight}; 
  }
  50% { 
    transform: rotate(180deg);
    color: ${theme.colors.textPrimary}; 
  }
  62.5% { 
    transform: rotate(225deg);
    color: ${theme.colors.textSecondary}; 
  }
  75% { 
    transform: rotate(270deg);
    color: ${theme.colors.footer}; 
  }
  87.5% { 
    transform: rotate(315deg);
    color: ${theme.colors.accent}; 
  }
  100% { 
    transform: rotate(360deg);
    color: ${theme.colors.primary}; 
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export const SpinnerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background};
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const SpinnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SpinnerIcon = styled(FontAwesomeIcon)`
  font-size: 4.5rem;
  animation: ${spinWithColors} 2s linear infinite;
  filter: drop-shadow(0 0 10px rgba(47, 128, 237, 0.4));

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const BackgroundGlow = styled.div`
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(111, 207, 151, 0.2) 0%,
    rgba(47, 128, 237, 0.1) 50%,
    rgba(0, 0, 0, 0) 70%
  );
  animation: ${pulseAnimation} 3s ease-in-out infinite;
  z-index: -1;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;
