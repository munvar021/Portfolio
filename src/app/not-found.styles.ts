import styled from "styled-components";
import AppLink from "@/components/ui/app-link";

export const Wrap = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

export const Code = styled.div`
  font-family: var(--font-heading);
  font-size: clamp(6rem, 20vw, 12rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1;
  background: linear-gradient(135deg, #a11212, #5c0b0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
`;

export const Desc = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  max-width: 420px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const PrimaryBtn = styled(AppLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: linear-gradient(135deg, #a11212, #5c0b0b);
  color: #ffffff;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: var(--radius-full);
  transition:
    opacity 0.2s,
    transform 0.3s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

export const SecondaryBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: transparent;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: var(--radius-full);
  border: 1px solid rgba(255, 255, 255, 0.12);
  cursor: pointer;
  transition:
    border-color 0.3s,
    background 0.3s,
    transform 0.3s;

  &:hover {
    border-color: rgba(255, 255, 255, 0.25);
    background: rgba(255, 255, 255, 0.04);
    transform: translateY(-2px);
  }
`;
