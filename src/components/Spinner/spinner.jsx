import React from "react";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import {
  SpinnerOverlay,
  SpinnerContainer,
  SpinnerIcon,
  BackgroundGlow,
} from "./spinnerStyles";

const LoadingSpinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer>
        <BackgroundGlow />
        <SpinnerIcon icon={faCircleNotch} />
      </SpinnerContainer>
    </SpinnerOverlay>
  );
};

export default LoadingSpinner;
