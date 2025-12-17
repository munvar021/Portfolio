import styled, { keyframes } from "styled-components";
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

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const slideLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

export const AboutContainer = styled.div`
  ${liquidGlassEffect}
  width: 100%;
  padding: 2rem;
`;

export const AboutIntro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const AboutImageWrapper = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  animation: ${float} 6s ease-in-out infinite;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 0px solid ${({ theme }) => theme.colors.accent};
    border-radius: 24px;
    z-index: -1;
    opacity: 0.5;
    animation: ${float} 6s ease-in-out infinite reverse;
  }

  &::after {
    content: "";
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.highlight} 0%,
      ${({ theme }) => theme.colors.accent} 100%
    );
    border-radius: 20px;
    z-index: -2;
    opacity: 0.3;
  }

  @media (max-width: 992px) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 15px;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

export const AboutDetails = styled.div`
  animation: ${fadeIn} 1s ease-out;
`;

export const AboutHeading = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.textPrimary},
    ${({ theme }) => theme.colors.accent}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.highlight};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const AboutSubHeading = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const AboutText = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
`;

export const AboutCTAs = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const CTAButton = styled.button`
  padding: 0.75rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  border: 0px solid ${({ theme }) => theme.colors.accent};
  color: ${(props) => (props.primary ? "white" : props.theme.colors.accent)};
  background: ${(props) =>
    props.primary
      ? `linear-gradient(135deg, ${props.theme.colors.accent}, ${props.theme.colors.highlight})`
      : "transparent"};
  box-shadow: ${(props) =>
    props.primary ? "0 5px 15px rgba(47, 128, 237, 0.3)" : "none"};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${(props) =>
      props.primary
        ? "0 10px 25px rgba(47, 128, 237, 0.4)"
        : "0 10px 25px rgba(47, 128, 237, 0.2)"};
    background: ${(props) =>
      props.primary
        ? `linear-gradient(135deg, ${props.theme.colors.accent}, ${props.theme.colors.highlight})`
        : props.theme.colors.accent};
    color: ${(props) => (props.primary ? "white" : "white")};
  }

  &:active {
    transform: translateY(-2px);
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.2rem;
  margin-top: 4rem;
  margin-bottom: 2.5rem;
  font-weight: 700;
  position: relative;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;

  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.accent},
      ${({ theme }) => theme.colors.highlight}
    );
    margin: 0.5rem auto 0;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export const SkillsContainer = styled.div`
  margin-bottom: 2rem;
`;

export const SkillSelectContainer = styled.div`
  max-width: 400px;
  margin: 0 auto 2rem auto; // Center on mobile by default
  animation: ${fadeIn} 0.8s ease-out;

  @media (min-width: 768px) {
    margin: 0 0 2rem auto; // Align right on larger devices
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillCard = styled.div`
  ${liquidGlassEffect}
  padding: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

export const SkillIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.accent};

  svg {
    filter: drop-shadow(0 2px 5px rgba(47, 128, 237, 0.3));
    transition: transform 0.3s ease, color 0.3s ease;
  }

  ${SkillCard}:hover & svg {
    transform: scale(1.2) rotate(5deg);
    color: ${({ theme }) => theme.colors.highlight};
  }
`;

export const SkillName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ToolsContainer = styled.div`
  margin: 2rem 0;
  overflow: hidden;
  padding: 1rem 0;
`;

export const ToolsMarquee = styled.div`
  display: flex;
  width: fit-content;
  animation: ${slideLeft} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

export const ToolCard = styled.div`
  ${liquidGlassEffect}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 0 1rem;
  min-width: 120px;
  height: 120px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
`;

export const ToolIcon = styled.div`
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.accent};
  transition: all 0.3s ease;

  ${ToolCard}:hover & {
    color: ${({ theme }) => theme.colors.highlight};
    transform: scale(1.2);
  }
`;

export const ToolName = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
`;

export const TimelineContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
`;

export const TimelineItem = styled.div`
  position: relative;
  padding-left: 3rem;
  padding-bottom: 3rem;

  &:last-child {
    padding-bottom: 0;
  }

  @media (max-width: 576px) {
    padding-left: 2.5rem;
  }
`;

export const TimelineDot = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  z-index: 2;
  box-shadow: 0 0 0 4px rgba(47, 128, 237, 0.2);
  transition: all 0.3s ease;

  ${TimelineItem}:hover & {
    background-color: ${({ theme }) => theme.colors.highlight};
    transform: scale(1.1);
    box-shadow: 0 0 0 6px rgba(111, 207, 151, 0.2);
  }

  @media (max-width: 576px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
`;

export const TimelineConnector = styled.div`
  position: absolute;
  left: 20px;
  top: 40px;
  bottom: 0;
  width: 2px;
  background-color: rgba(47, 128, 237, 0.2);
  z-index: 1;

  @media (max-width: 576px) {
    left: 17px;
    top: 35px;
  }
`;

export const TimelineContent = styled.div`
  ${liquidGlassEffect}
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const TimelineDate = styled.div`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background-color: rgba(47, 128, 237, 0.1);
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;

  ${TimelineContent}:hover & {
    background-color: ${({ theme }) => theme.colors.accent};
    color: white;
  }
`;

export const TimelineTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.4rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 600;
`;

export const TimelineSubtitle = styled.h4`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const TimelineDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.2rem;
`;

export const PointsList = styled.ul`
  list-style: none;
  margin-top: 0.8rem;
  padding: 0;
`;

export const PointItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  margin-bottom: 0.7rem;
  padding-left: 0.2rem;
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.3s ease;

  svg {
    color: ${({ theme }) => theme.colors.highlight};
    margin-top: 0.2rem;
    font-size: 0.8rem;
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    transform: translateX(5px);

    svg {
      color: ${({ theme }) => theme.colors.accent};
      transform: scale(1.2);
    }
  }
`;
