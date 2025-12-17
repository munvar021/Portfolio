import { css } from "styled-components";

export const glassEffect = css`
  background-color: ${({ theme }) => theme.colors.glassBg};
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 12px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
`;

export const liquidGlassEffect = css`
  background: ${({ theme }) => theme.colors.glassBg};
  backdrop-filter: blur(40px) saturate(150%);
  -webkit-backdrop-filter: blur(40px) saturate(150%);
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1),
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.2);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colors.glassBorder};
    box-shadow: 0 0 80px rgba(255, 255, 255, 0.1);
    pointer-events: none;
    z-index: 1;
  }
`;
