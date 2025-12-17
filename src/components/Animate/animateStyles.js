import styled, { css } from "styled-components";

export const AnimateContainer = styled.div`
  opacity: 0;
  ${({ isIntersecting, animation }) =>
    isIntersecting &&
    css`
      animation: ${animation} 0.8s ease-in-out forwards;
      opacity: 1;
    `}
`;
