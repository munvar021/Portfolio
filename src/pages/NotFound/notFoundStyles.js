import styled, { keyframes } from "styled-components";
import theme from "../../styles/theme";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const glitch = keyframes`
  0% {
    text-shadow: 0.05em 0 0 ${theme.colors.highlight}, -0.05em -0.025em 0 ${theme.colors.accent};
    transform: translate(0px, 0px);
  }
  25% {
    text-shadow: -0.05em -0.025em 0 ${theme.colors.highlight}, 0.025em 0.025em 0 ${theme.colors.accent};
    transform: translate(-2px, 2px);
  }
  50% {
    text-shadow: 0.025em 0.05em 0 ${theme.colors.highlight}, 0 -0.05em 0 ${theme.colors.accent};
    transform: translate(2px, -2px);
  }
  75% {
    text-shadow: -0.025em -0.025em 0 ${theme.colors.highlight}, -0.025em -0.025em 0 ${theme.colors.accent};
    transform: translate(-2px, -2px);
  }
  100% {
    text-shadow: -0.025em 0 0 ${theme.colors.highlight}, 0.025em 0.025em 0 ${theme.colors.accent};
    transform: translate(0px, 0px);
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

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 300px);
  padding: 2rem;
  text-align: center;
`;

export const NotFoundContent = styled.div`
  max-width: 600px;
  animation: ${fadeIn} 0.8s ease-out;
`;

export const ErrorIcon = styled.div`
  font-size: 4rem;
  color: ${theme.colors.accent};
  margin-bottom: 1.5rem;
  animation: ${pulse} 2s infinite ease-in-out;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: 800;
  line-height: 1;
  margin: 0;
  background: linear-gradient(
    135deg,
    ${theme.colors.primary},
    ${theme.colors.accent}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-shadow: 0 0 5px rgba(47, 128, 237, 0.2);
  animation: ${glitch} 3s infinite;

  @media (max-width: 768px) {
    font-size: 6rem;
  }

  @media (max-width: 576px) {
    font-size: 5rem;
  }
`;

export const ErrorTitle = styled.h2`
  font-size: 2.5rem;
  margin: 1rem 0 1.5rem;
  color: ${theme.colors.primary};
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 3px;
    background-color: ${theme.colors.highlight};
    margin: 0.5rem auto 0;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.75rem;
  }
`;

export const ErrorDescription = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.textSecondary};
  margin-bottom: 2.5rem;
  line-height: 1.6;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 250px;
    margin: 0 auto;
  }
`;

const ButtonBase = styled.button`
  padding: 0.85rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    font-size: 1.1rem;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const BackButton = styled(ButtonBase)`
  color: ${theme.colors.accent};
  background-color: transparent;
  border: 2px solid ${theme.colors.accent};
  box-shadow: 0 2px 10px rgba(47, 128, 237, 0.1);

  &:hover {
    background-color: ${theme.colors.accent};
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(47, 128, 237, 0.2);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const HomeButton = styled(ButtonBase)`
  background: linear-gradient(
    135deg,
    ${theme.colors.accent},
    ${theme.colors.highlight}
  );
  color: white;
  border: none;
  box-shadow: 0 5px 15px rgba(47, 128, 237, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(47, 128, 237, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }
`;
