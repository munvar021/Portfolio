import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { liquidGlassEffect } from "../../styles/mixins";

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

const slideIn = keyframes`
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const zoomIn = keyframes`
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const ResumeContainer = styled.div`
  ${liquidGlassEffect}
  width: 100%;
  padding: 2rem;
  animation: ${fadeIn} 0.6s ease-out;
  position: relative;
`;

export const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
  animation: ${slideIn} 0.5s ease-out;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.highlight};

    svg {
      transform: translateX(-3px);
    }
  }
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
  color: ${({ theme }) => theme.colors.textPrimary};
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 70px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.highlight};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.75rem;
  }
`;

export const ResumeInfo = styled.div`
  ${liquidGlassEffect}
  display: flex;
  margin-bottom: 2rem;
  padding: 1.5rem;
  animation: ${zoomIn} 0.5s ease-out;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const ResumeDescription = styled.div`
  flex: 2;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  padding-right: 2rem;

  @media (max-width: 992px) {
    padding-right: 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(58, 63, 68, 0.1);
  }
`;

export const ResumeMeta = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ResumeDetails = styled.div`
  font-size: 0.9rem;

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;

export const ResumeActions = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: ${(props) => (props.small ? "0.5rem 0.75rem" : "0.75rem 1.5rem")};
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  border: none;
  border-radius: ${(props) => (props.small ? "8px" : "30px")};
  font-weight: 600;
  font-size: ${(props) => (props.small ? "0.85rem" : "1rem")};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(47, 128, 237, 0.2);

  &:hover {
    background-color: ${({ theme }) => theme.colors.highlight};
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(111, 207, 151, 0.3);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(111, 207, 151, 0.2);
  }

  svg {
    font-size: ${(props) => (props.small ? "0.85rem" : "1rem")};
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const PdfContainer = styled.div`
  ${liquidGlassEffect}
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;
  position: relative;
  min-height: 700px;
  transition: all 0.3s ease;

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

export const ViewerControls = styled.div`
  ${liquidGlassEffect}
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 30px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ZoomControls = styled.div`
  ${liquidGlassEffect}
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  border-radius: 30px;

  span {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    min-width: 60px;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const PageControls = styled.div`
  ${liquidGlassEffect}
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
`;

export const PageNavButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.disabled ? "rgba(58, 63, 68, 0.1)" : props.theme.colors.accent};
  color: ${(props) => (props.disabled ? "rgba(58, 63, 68, 0.4)" : "white")};
  border: none;
  border-radius: 50%;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.highlight};
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
  color: ${({ theme }) => theme.colors.primary};
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
    color: ${({ theme }) => theme.colors.accent};
    animation: ${spin} 1.5s linear infinite;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
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
