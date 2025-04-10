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

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
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

export const ResumeContainer = styled.div`
  width: 100%;
  animation: ${fadeIn} 0.6s ease-out;
`;

export const ResumeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const ResumeTitle = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.primary};
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 70px;
    height: 4px;
    background-color: ${theme.colors.highlight};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.75rem;
  }
`;

export const ResumeActions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: ${theme.colors.accent};
  color: white;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(47, 128, 237, 0.2);

  &:hover {
    background-color: ${theme.colors.highlight};
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(111, 207, 151, 0.3);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(111, 207, 151, 0.2);
  }

  svg {
    font-size: 1rem;
  }

  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
  }
`;

export const PdfContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  position: relative;
  min-height: 700px;

  .react-pdf__Document {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .react-pdf__Page {
    margin: 1rem 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
  }

  .react-pdf__Page__canvas {
    border-radius: 8px;
    max-width: 100%;
    height: auto !important;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    min-height: 500px;
  }

  @media (max-width: 576px) {
    padding: 1rem 0.5rem;
  }
`;

export const PageControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

export const PageNavButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.disabled ? "rgba(58, 63, 68, 0.1)" : theme.colors.accent};
  color: ${(props) => (props.disabled ? "rgba(58, 63, 68, 0.4)" : "white")};
  border: none;
  border-radius: 50%;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background-color: ${theme.colors.highlight};
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(111, 207, 151, 0.2);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

export const PageNumber = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: ${theme.colors.primary};
  min-width: 60px;
  text-align: center;
`;

export const PageLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 2rem;
    color: ${theme.colors.accent};
    animation: ${spin} 1.5s linear infinite;
  }

  p {
    font-size: 1rem;
    color: ${theme.colors.secondary};
  }
`;

export const ErrorMessage = styled.div`
  padding: 2rem;
  text-align: center;
  color: #e74c3c;
  background-color: rgba(231, 76, 60, 0.1);
  border-radius: 8px;
  margin: 2rem 0;
  font-weight: 500;
`;
