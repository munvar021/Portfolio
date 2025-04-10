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

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .load-more {
    display: flex;
    justify-content: center;
    margin: 2rem 0;

    button {
      background: transparent;
      color: ${theme.colors.accent};
      border: 2px solid ${theme.colors.accent};
      padding: 0.75rem 2rem;
      border-radius: 30px;
      font-weight: 500;
      transition: all 0.3s ease;

      &:hover {
        background: ${theme.colors.accent};
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
  animation: ${fadeIn} 0.8s ease-out;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 1.5rem;
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
    background-color: ${theme.colors.highlight};
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

export const ProjectCard = styled.div`
  background-color: transparent;
  width: 100%;
  height: 470px;
  perspective: 1000px;
  animation: ${fadeIn} 0.8s ease-out;

  &:hover .card-inner {
    transform: rotateY(180deg);
  }
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const CardFront = styled(CardFace)`
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    border-color: ${theme.colors.highlight};
  }
`;

export const CardBack = styled(CardFace)`
  background-color: rgba(255, 255, 255, 0.9);
  transform: rotateY(180deg);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${theme.colors.accent};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(30, 42, 56, 0.02) 0%,
      rgba(47, 128, 237, 0.05) 100%
    );
    z-index: -1;
  }
`;

export const ProjectImage = styled.div`
  position: relative;
  overflow: hidden;
  height: 380px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.5s ease;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

export const ProjectContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ProjectName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0rem;
  color: ${theme.colors.primary};
  position: relative;
  display: inline-block;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.accent};
  }
`;

export const ProjectDescription = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 0.95rem;
  margin-bottom: 1.2rem;
  text-align: left;
`;

export const BackContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;

export const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
  justify-content: center;
`;

export const TechTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background-color: rgba(47, 128, 237, 0.1);
  color: ${theme.colors.accent};
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;

  svg {
    font-size: 0.85rem;
  }

  &:hover {
    background-color: ${theme.colors.accent};
    color: white;
    transform: translateY(-2px);
  }
`;

export const Credentials = styled.div`
  background-color: rgba(30, 42, 56, 0.05);
  padding: 0.8rem;
  border-radius: 8px;
  margin-bottom: 1.2rem;
  width: 100%;

  h4 {
    color: ${theme.colors.accent};
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0;
    font-size: 0.85rem;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;

  @media (max-width: 400px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:first-child {
    background-color: ${theme.colors.primary};
    color: white;

    &:hover {
      background-color: ${theme.colors.secondary};
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(30, 42, 56, 0.2);
    }
  }

  &:last-child {
    background-color: ${theme.colors.accent};
    color: white;

    &:hover {
      background-color: ${theme.colors.highlight};
      color: ${theme.colors.primary};
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(111, 207, 151, 0.3);
    }
  }
`;
