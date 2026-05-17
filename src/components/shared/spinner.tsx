"use client";

import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const SpinnerWrap = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  z-index: 9999;
`;

const Ring = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid rgba(161, 18, 18, 0.2);
  border-top-color: #a11212;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

const LoadingSpinner = () => (
  <SpinnerWrap>
    <Ring />
  </SpinnerWrap>
);

export default LoadingSpinner;
