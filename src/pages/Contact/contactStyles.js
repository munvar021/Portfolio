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

export const ContactContainer = styled.div`
  width: 100%;
  padding: 3rem 1rem;
  animation: ${fadeIn} 1s ease-out;
`;

export const ContactTitle = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
    width: 70px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.highlight};
    border-radius: 3px;
  }
`;

export const ContactSubtitle = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const FormGroup = styled.div`
  position: relative;
  ${({ honeypot }) => honeypot && 'display: none;'}
`;

export const Input = styled.input`
  ${liquidGlassEffect}
  width: 100%;
  padding: 0.9rem 1.2rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ isError, isValid, theme }) =>
      isError
        ? "#FF6B6B"
        : isValid
        ? theme.colors.highlight
        : theme.colors.accent};
    box-shadow: 0 0 0 3px
      ${({ isError, isValid, theme }) =>
        isError
          ? "rgba(255, 107, 107, 0.2)"
          : isValid
          ? "rgba(111, 207, 151, 0.2)"
          : "rgba(47, 128, 237, 0.2)"};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:hover {
    border-color: ${({ isError, isValid, theme }) =>
      isError
        ? "#FF6B6B"
        : isValid
        ? theme.colors.highlight
        : theme.colors.accent};
  }
`;

export const Textarea = styled.textarea`
  ${liquidGlassEffect}
  width: 100%;
  padding: 0.9rem 1.2rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ isError, isValid, theme }) =>
      isError
        ? "#FF6B6B"
        : isValid
        ? theme.colors.highlight
        : theme.colors.accent};
    box-shadow: 0 0 0 3px
      ${({ isError, isValid, theme }) =>
        isError
          ? "rgba(255, 107, 107, 0.2)"
          : isValid
          ? "rgba(111, 207, 151, 0.2)"
          : "rgba(47, 128, 237, 0.2)"};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:hover {
    border-color: ${({ isError, isValid, theme }) =>
      isError
        ? "#FF6B6B"
        : isValid
        ? theme.colors.highlight
        : theme.colors.accent};
  }
`;

export const SubmitButton = styled.button`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent},
    ${({ theme }) => theme.colors.highlight}
  );
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(47, 128, 237, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(47, 128, 237, 0.3);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 15px rgba(47, 128, 237, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  svg {
    font-size: 1rem;
  }
`;

export const ErrorMessage = styled.span`
  color: #ff6b6b;
  font-size: 0.8rem;
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const SuccessMessage = styled.div`
  background-color: rgba(111, 207, 151, 0.15);
  color: #2e7d32;
  border: 0px solid #4caf50;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const ContactCard = styled.div`
  ${liquidGlassEffect}
  padding: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.accent};
    margin-right: 1rem;
    background-color: rgba(47, 128, 237, 0.1);
    padding: 0.8rem;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  h4 {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 0;
  }

  &:hover svg {
    background-color: ${({ theme }) => theme.colors.accent};
    color: white;
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(47, 128, 237, 0.3);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
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
