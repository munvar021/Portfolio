import styled from "styled-components";
import { motion } from "framer-motion";

export const PageHero = styled.section`
  padding: clamp(5rem, 10vw, 8rem) 0 clamp(3rem, 6vw, 4rem);
  position: relative;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 700px;
    height: 350px;
    background: radial-gradient(
      ellipse,
      rgba(0, 255, 136, 0.06) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const PageLabel = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent-green);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 1rem;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    width: 24px;
    height: 1px;
    background: var(--accent-green);
  }
`;

export const PageTitle = styled(motion.h1)`
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: var(--text-primary);
  margin-bottom: 1.25rem;
`;

export const Accent = styled.span`
  background: linear-gradient(135deg, #00d4ff, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const PageSubtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 520px;
  margin: 0 auto;
`;

export const ContactSection = styled.section`
  padding: clamp(3rem, 6vw, 5rem) 0 clamp(5rem, 10vw, 8rem);
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.85fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const FormWrap = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-xl);
  padding: 2.5rem;

  @media (max-width: 640px) {
    padding: 1.5rem;
  }
`;

export const FormTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.375rem;
`;

export const FormSubtitle = styled.p`
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  display: ${({ $hidden }) => ($hidden ? "none" : "flex")};
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
`;

export const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: 0.04em;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid
    ${({ $error }) =>
      $error ? "rgba(239,68,68,0.6)" : "rgba(255,255,255,0.08)"};
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--text-primary);
  transition:
    border-color var(--transition-base),
    box-shadow var(--transition-base);

  &::placeholder {
    color: var(--text-muted);
  }

  &:focus {
    outline: none;
    border-color: ${({ $error }) =>
      $error ? "rgba(239,68,68,0.8)" : "rgba(0,212,255,0.4)"};
    box-shadow: 0 0 0 3px
      ${({ $error }) =>
        $error ? "rgba(239,68,68,0.08)" : "rgba(0,212,255,0.08)"};
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.875rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid
    ${({ $error }) =>
      $error ? "rgba(239,68,68,0.6)" : "rgba(255,255,255,0.08)"};
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--text-primary);
  resize: vertical;
  min-height: 140px;
  transition:
    border-color var(--transition-base),
    box-shadow var(--transition-base);

  &::placeholder {
    color: var(--text-muted);
  }

  &:focus {
    outline: none;
    border-color: ${({ $error }) =>
      $error ? "rgba(239,68,68,0.8)" : "rgba(0,212,255,0.4)"};
    box-shadow: 0 0 0 3px
      ${({ $error }) =>
        $error ? "rgba(239,68,68,0.08)" : "rgba(0,212,255,0.08)"};
  }
`;

export const ErrorMsg = styled.span`
  font-size: 0.75rem;
  color: #ef4444;
`;

export const SubmitBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: linear-gradient(135deg, #00d4ff, #7c3aed);
  color: #000;
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 700;
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  transition:
    opacity var(--transition-fast),
    transform var(--transition-spring),
    box-shadow var(--transition-base);
  align-self: flex-start;

  &:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(0, 212, 255, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 640px) {
    width: 100%;
    align-self: stretch;
  }
`;

export const AlertSuccess = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 1rem 1.25rem;
  background: rgba(0, 255, 136, 0.06);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: var(--radius-md);
  color: var(--accent-green);
  font-size: 0.875rem;
  font-weight: 500;

  i {
    font-size: 1rem;
  }
`;

export const AlertError = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 1rem 1.25rem;
  background: rgba(239, 68, 68, 0.06);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: var(--radius-md);
  color: #ef4444;
  font-size: 0.875rem;
  font-weight: 500;

  i {
    font-size: 1rem;
  }
`;

export const InfoCol = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  transition: border-color var(--transition-base);

  &:hover {
    border-color: rgba(0, 212, 255, 0.15);
  }
`;

export const InfoCardTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  i {
    color: var(--accent-cyan);
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  padding: 0.875rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  &:first-child {
    padding-top: 0;
  }
`;

export const InfoIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  background: rgba(0, 212, 255, 0.08);
  border: 1px solid rgba(0, 212, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  i {
    color: var(--accent-cyan);
    font-size: 0.875rem;
  }
`;

export const InfoText = styled.div``;

export const InfoLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 0.2rem;
`;

export const InfoValue = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

export const SocialCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
`;

export const SocialTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-full);
  border: 1px solid var(--border-default);
  background: var(--bg-card);
  color: var(--text-secondary);
  font-size: 0.8rem;
  font-weight: 500;
  transition: all var(--transition-base);

  &:hover {
    color: var(--accent-cyan);
    border-color: rgba(0, 212, 255, 0.3);
    background: rgba(0, 212, 255, 0.06);
  }

  i {
    font-size: 0.875rem;
  }
`;
