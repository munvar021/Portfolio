import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../styles/theme";

export const FooterContainer = styled.footer`
  position: relative;
  color: ${theme.colors.textPrimary};
  padding: 3rem 0 1rem;
  margin-top: 4rem;
  overflow: hidden;
  font-family: ${theme.fonts.body};
`;

export const FooterGlass = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.footer};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: -1;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.1);
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterSection = styled.div`
  h3 {
    font-family: ${theme.fonts.heading};
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    position: relative;
    color: ${theme.colors.primary};

    &:after {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 3rem;
      height: 3px;
      background-color: ${theme.colors.accent};
      border-radius: 3px;
    }
  }

  p {
    color: ${theme.colors.textPrimary};
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

export const FooterLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  img {
    height: 2rem;
    margin-right: 0.5rem;
    border-radius: 5px;
  }

  &:hover {
    transform: scale(1.05);
    color: ${theme.colors.highlight};
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(30, 42, 56, 0.1);
    color: ${theme.colors.primary};
    transition: all 0.3s ease;
    border: 1px solid rgba(30, 42, 56, 0.2);

    &:hover {
      background-color: ${theme.colors.highlight};
      color: ${theme.colors.primary};
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(111, 207, 151, 0.4);
    }

    &:active {
      transform: translateY(-1px);
    }
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  a {
    color: ${theme.colors.textSecondary};
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    padding-left: 1rem;

    &:before {
      content: "›";
      position: absolute;
      left: 0;
      transition: transform 0.3s ease;
    }

    &:hover {
      color: ${theme.colors.accent};
      transform: translateX(5px);

      &:before {
        transform: translateX(3px);
      }
    }
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;

    svg {
      margin-top: 4px;
      color: ${theme.colors.accent};
      transition: transform 0.3s ease;
    }

    span {
      color: ${theme.colors.textSecondary};
      line-height: 1.5;
      transition: color 0.3s ease;
    }

    &:hover svg {
      transform: scale(1.2);
      color: ${theme.colors.highlight};
    }

    &:hover span {
      color: ${theme.colors.textPrimary};
    }
  }
`;

export const Copyright = styled.div`
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(30, 42, 56, 0.2);
  text-align: center;
  color: ${theme.colors.textSecondary};
  font-size: 0.9rem;
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 3rem auto 0;
  padding: 1.5rem 2rem 0;

  p {
    margin: 0.5rem 0;
  }

  svg {
    color: #ff6b6b;
    margin: 0 0.3rem;
  }

  svg:first-of-type {
    animation: heartBeat 1.5s infinite;
  }

  svg:last-of-type {
    color: ${theme.colors.highlight};
    animation: spin 5s linear infinite;
  }

  @keyframes heartBeat {
    0% {
      transform: scale(1);
    }
    15% {
      transform: scale(1.3);
    }
    30% {
      transform: scale(1);
    }
    45% {
      transform: scale(1.3);
    }
    60% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
