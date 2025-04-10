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

export const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
  animation: ${fadeIn} 1s ease-out;
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
    background-color: ${theme.colors.highlight};
    border-radius: 3px;
  }
`;

export const ContactSubtitle = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  color: ${theme.colors.textSecondary};
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
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1.2rem;
  border-radius: 8px;
  border: 1px solid
    ${(props) => (props.isError ? "#FF6B6B" : "rgba(58, 63, 68, 0.2)")};
  background-color: rgba(255, 255, 255, 0.9);
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.isError ? "#FF6B6B" : theme.colors.accent};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.isError ? "rgba(255, 107, 107, 0.2)" : "rgba(47, 128, 237, 0.2)"};
  }

  &::placeholder {
    color: rgba(58, 63, 68, 0.6);
  }

  &:hover {
    border-color: ${(props) =>
      props.isError ? "#FF6B6B" : theme.colors.accent};
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.9rem 1.2rem;
  border-radius: 8px;
  border: 1px solid
    ${(props) => (props.isError ? "#FF6B6B" : "rgba(58, 63, 68, 0.2)")};
  background-color: rgba(255, 255, 255, 0.9);
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.isError ? "#FF6B6B" : theme.colors.accent};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.isError ? "rgba(255, 107, 107, 0.2)" : "rgba(47, 128, 237, 0.2)"};
  }

  &::placeholder {
    color: rgba(58, 63, 68, 0.6);
  }

  &:hover {
    border-color: ${(props) =>
      props.isError ? "#FF6B6B" : theme.colors.accent};
  }
`;

export const SubmitButton = styled.button`
  background: linear-gradient(
    135deg,
    ${theme.colors.accent},
    ${theme.colors.highlight}
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
  border: 1px solid #4caf50;
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
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  svg {
    font-size: 1.5rem;
    color: ${theme.colors.accent};
    margin-right: 1rem;
    background-color: rgba(47, 128, 237, 0.1);
    padding: 0.8rem;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  h4 {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    color: ${theme.colors.primary};
  }

  p {
    color: ${theme.colors.textSecondary};
    margin-bottom: 0;
  }

  &:hover svg {
    background-color: ${theme.colors.accent};
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
  color: ${theme.colors.accent};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background-color: ${theme.colors.accent};
    color: white;
    box-shadow: 0 5px 15px rgba(47, 128, 237, 0.3);
  }
`;
