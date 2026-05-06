import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterWrapper = styled.footer`
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-default);
  padding: 5rem 0 2rem;

  @media (max-width: 768px) {
    padding: 4rem 0 1.5rem;
  }
`;

export const FooterCta = styled.div`
  background: linear-gradient(
    135deg,
    rgba(0, 212, 255, 0.06) 0%,
    rgba(124, 58, 237, 0.06) 100%
  );
  border: 1px solid var(--border-default);
  border-radius: var(--radius-xl);
  padding: 2.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem 1.25rem;
    gap: 1.25rem;
    border-radius: var(--radius-lg);
  }
`;

export const CtaContent = styled.div`
  h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  p {
    font-size: 0.875rem;
    color: var(--text-secondary);
  }
`;

export const CtaButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  background: var(--gradient-primary);
  color: #000000;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  white-space: nowrap;
  transition:
    opacity var(--transition-fast),
    transform var(--transition-fast);

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1.5fr repeat(2, 1fr);
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--border-default);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 1024px) {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--border-default);
  }
`;

export const FooterLogo = styled.span`
  display: inline-flex;
  align-items: center;
`;

export const FooterBrandImage = styled.img`
  display: block;
  width: auto;
  height: 56px;
  object-fit: contain;
`;

export const FooterTagline = styled.p`
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 280px;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;

  @media (max-width: 1024px) {
    gap: 1rem;
    margin-top: 1rem;
  }
`;

export const SocialLink = styled.a`
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-default);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 0.875rem;
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast),
    background var(--transition-fast);

  &:hover {
    color: var(--accent-cyan);
    border-color: var(--border-accent);
    background: rgba(0, 212, 255, 0.06);
  }

  @media (max-width: 1024px) {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    font-size: 1rem;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 1024px) {
    gap: 0;
    border-bottom: 1px solid var(--border-default);
    padding: 1rem 0;
  }
`;

export const ColumnTitle = styled.button`
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: none;
  border: none;
  padding: 0;
  text-align: left;
  width: 100%;
  pointer-events: none;

  &:focus-visible {
    outline: none;
  }

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    user-select: none;
    pointer-events: auto;

    &:focus-visible {
      outline: 2px solid var(--accent-cyan);
      outline-offset: 3px;
      border-radius: var(--radius-sm);
    }
  }
`;

export const ChevronIcon = styled.span`
  display: none;

  @media (max-width: 1024px) {
    display: inline-flex;
    align-items: center;
    font-size: 0.75rem;
    color: var(--text-muted);
    transform: rotate(${({ $isOpen }) => ($isOpen ? "180deg" : "0deg")});
    transition: transform 0.3s ease;
  }
`;

export const ColumnLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  list-style: none;

  @media (max-width: 1024px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    padding-top: 0.75rem;
  }
`;

export const ColumnLink = styled.a`
  font-size: 0.875rem;
  color: var(--text-secondary);
  transition: color var(--transition-fast);

  &:hover {
    color: var(--text-primary);
  }
`;

export const PolicySection = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 0;
    border-bottom: 1px solid var(--border-default);
    padding: 1rem 0;
    margin-bottom: 0.5rem;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  gap: 1rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 1.5rem;
  }
`;

export const Copyright = styled.p`
  font-size: 0.75rem;
  color: var(--text-muted);
`;

export const FooterBottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const BottomLink = styled(Link)`
  font-size: 0.75rem;
  color: var(--text-muted);
  transition: color var(--transition-fast);

  &:hover {
    color: var(--text-secondary);
  }
`;
