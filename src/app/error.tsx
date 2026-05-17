"use client";

import { useEffect } from "react";
import styled from "styled-components";
import AppLink from "@/components/ui/app-link";

const Wrap = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  gap: 1.5rem;
`;

const Title = styled.h2`
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--text-primary);
`;

const Desc = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  max-width: 380px;
  line-height: 1.7;
`;

const RetryBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  background: linear-gradient(135deg, #a11212, #5c0b0b);
  color: #ffffff;
  font-weight: 700;
  font-size: 0.875rem;
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  transition:
    opacity 0.2s,
    transform 0.3s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const HomeLink = styled(AppLink)`
  font-size: 0.875rem;
  color: var(--text-secondary);
  transition: color var(--transition-fast);

  &:hover {
    color: var(--accent-cyan);
  }
`;

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Wrap>
      <Title>Something went wrong</Title>
      <Desc>
        An unexpected error occurred. Try refreshing the page or go back home.
      </Desc>
      <RetryBtn onClick={reset}>
        <i className="fa-solid fa-rotate-right" /> Try Again
      </RetryBtn>
      <HomeLink to="/">
        <i className="fa-solid fa-house" /> Go Home
      </HomeLink>
    </Wrap>
  );
}
