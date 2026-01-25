import React from "react";
import {
  SpinnerOverlay,
  SpinnerContainer,
  LoaderRing,
  LoaderDot,
  LoadingText,
  BackgroundGlow,
} from "./spinnerStyles";

const LoadingSpinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer>
        <BackgroundGlow />
        <LoaderRing>
          <LoaderDot delay="0s" />
          <LoaderDot delay="0.15s" />
          <LoaderDot delay="0.3s" />
          <LoaderDot delay="0.45s" />
        </LoaderRing>
        <LoadingText>Loading</LoadingText>
      </SpinnerContainer>
    </SpinnerOverlay>
  );
};

export default LoadingSpinner;
