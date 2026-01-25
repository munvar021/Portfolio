import styled, { keyframes } from "styled-components";

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

export const HomeContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 200px);
  width: 100%;
  padding: 2rem;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
    gap: 3rem;
    text-align: center;
    padding-top: 3rem;
  }
`;
export const IntroContent = styled.div`
  flex: 1;
  animation: ${fadeIn} 1s ease-out;
  position: relative;
  z-index: 1;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Greeting = styled.div`
  display: inline-block;
  background-color: rgba(111, 207, 151, 0.15);
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  margin-bottom: 1.5rem;
  transform-origin: left;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.highlight};
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};

    &::before {
      transform: scaleX(1);
    }
  }
`;

export const Name = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  line-height: 1.2;
  background: none;
  -webkit-background-clip: initial;
  -webkit-text-fill-color: initial;
  background-clip: initial;
  color: ${({ theme }) => theme.colors.textPrimary};

  span {
    color: ${({ theme }) => theme.colors.accent};
    position: relative;
    display: inline-block;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.accent};

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background-color: ${({ theme }) => theme.colors.highlight};
      border-radius: 5px;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s ease;
    }
  }

  &:hover span::after {
    transform: scaleX(1);
  }

  @media (max-width: 1200px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

export const Profession = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  font-weight: 500;
  background: none;
  -webkit-background-clip: initial;
  -webkit-text-fill-color: initial;
  background-clip: initial;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 600px;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
`;

export const PrimaryButton = styled.button`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 30px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent},
    ${({ theme }) => theme.colors.highlight}
  );
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(47, 128, 237, 0.3);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(47, 128, 237, 0.4);
  }

  &:active {
    transform: translateY(-2px);
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const SecondaryButton = styled.button`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 30px;
  background: transparent;
  color: ${({ theme }) => theme.colors.accent};
  border: 0px solid ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: #fff;
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(47, 128, 237, 0.2);
  }

  &:active {
    transform: translateY(-2px);
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  animation: ${float} 4s ease-in-out infinite;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      rgba(111, 207, 151, 0.1),
      rgba(47, 128, 237, 0.1)
    );
    z-index: -1;
  }

  @media (max-width: 1200px) {
    &::before {
      width: 300px;
      height: 300px;
    }
  }

  @media (max-width: 992px) {
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    &::before {
      width: 250px;
      height: 250px;
    }
  }
`;

export const ProfileImage = styled.img`
  width: 400px;
  height: auto;
  border-radius: 20px;
  box-shadow: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1200px) {
    width: 350px;
  }

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 576px) {
    width: 250px;
  }
`;

export const TypedText = styled.span`
  display: inline-block;
  padding-right: 5px;
  color: ${({ theme }) => theme.colors.accent};
  -webkit-text-fill-color: ${({ theme }) => theme.colors.accent};
  animation: blink 1s step-end infinite;
  font-weight: 600;

  @keyframes blink {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: ${({ theme }) => theme.colors.highlight};
    }
  }
`;

export const SocialLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: rgba(47, 128, 237, 0.1);
  color: ${({ theme }) => theme.colors.accent};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background-color: ${({ theme }) => theme.colors.accent};
    color: white;
    box-shadow: 0 5px 15px rgba(47, 128, 237, 0.3);
  }
`;
