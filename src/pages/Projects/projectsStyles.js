import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

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

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;

  .load-more {
    display: flex;
    justify-content: center;
    margin: 2rem 0;

    button {
      background: transparent;
      color: ${({ theme }) => theme.colors.accent};
      border: 0px solid ${({ theme }) => theme.colors.accent};
      padding: 0.75rem 2rem;
      border-radius: 30px;
      font-weight: 500;
      transition: all 0.3s ease;

      &:hover {
        background: ${({ theme }) => theme.colors.accent};
        color: white;
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(47, 128, 237, 0.2);
      }

      &:active {
        transform: translateY(-1px);
      }
    }
  }
`;

export const ProjectHeader = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.highlight};
    border-radius: 3px;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 1rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  display: block;
`;

export const HiddenContent = styled.div`
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition:
    max-height 0.4s ease,
    opacity 0.3s ease;
`;

export const ProjectOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  color: white;

  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.98) 50%,
    rgba(0, 0, 0, 0) 100%
  );

  transform: translateY(calc(100% - 100px));
  transition: transform 0.4s ease-out;
`;

export const ProjectCard = styled.div`
  position: relative;
  height: 470px;
  border-radius: 12px;
  overflow: hidden;
  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? slideUp : "none")} 0.6s ease-out
    forwards;
  animation-delay: ${({ delay }) => delay || 0}s;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.colors.background};
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }

  &:hover ${ProjectOverlay} {
    transform: translateY(0);
  }

  &:hover ${HiddenContent} {
    opacity: 1;
    max-height: 350px;
  }

  &:hover ${ProjectImage} {
    transform: scale(1.1);
  }
`;

export const ProjectName = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
`;

export const ProjectDescription = styled.p`
  color: white;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;

export const TechTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  backdrop-filter: blur(2px);

  svg {
    font-size: 0.8rem;
  }
`;

export const Credentials = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0.8rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  width: 100%;

  h4 {
    color: ${({ theme }) => theme.colors.accent};
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0;
    font-size: 0.85rem;
    color: white;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: white;
  will-change: transform;

  &[data-link-type="code"] {
    background-color: #333;
    &:hover {
      background-color: #444;
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
    }
  }

  &[data-link-type="demo"] {
    background-color: ${({ theme }) => theme.colors.accent};
    &:hover {
      background-color: ${({ theme }) => theme.colors.highlight};
      color: white;
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 6px 15px rgba(47, 128, 237, 0.4);
    }
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
  }
`;
