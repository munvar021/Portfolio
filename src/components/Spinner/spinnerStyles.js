import styled, { keyframes } from "styled-components";
import { liquidGlassEffect } from "../../styles/mixins";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const pulseAnimation = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.3); opacity: 1; }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const dotPulse = keyframes`
  0%, 100% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1); opacity: 1; }
`;

const textPulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
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
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const SpinnerContainer = styled.div`
  ${liquidGlassEffect}
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  gap: 2rem;
`;

export const LoaderRing = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  animation: ${rotate} 2s linear infinite;
`;

export const LoaderDot = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.highlight});
  animation: ${dotPulse} 1.5s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay};
  box-shadow: 0 0 20px ${({ theme }) => theme.colors.accent};

  &:nth-child(1) { top: 0; left: 50%; transform: translateX(-50%); }
  &:nth-child(2) { top: 50%; right: 0; transform: translateY(-50%); }
  &:nth-child(3) { bottom: 0; left: 50%; transform: translateX(-50%); }
  &:nth-child(4) { top: 50%; left: 0; transform: translateY(-50%); }
`;

export const LoadingText = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  animation: ${textPulse} 2s ease-in-out infinite;
  letter-spacing: 2px;
`;

export const BackgroundGlow = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(111, 207, 151, 0.15) 0%,
    rgba(47, 128, 237, 0.1) 50%,
    rgba(0, 0, 0, 0) 70%
  );
  animation: ${pulseAnimation} 3s ease-in-out infinite;
  z-index: -1;
`;
