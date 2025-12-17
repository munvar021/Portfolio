import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faArrowLeft,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import {
  NotFoundContainer,
  NotFoundContent,
  ErrorCode,
  ErrorTitle,
  ErrorDescription,
  ButtonGroup,
  BackButton,
  HomeButton,
  ErrorIcon,
} from "./notFoundStyles";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | Portfolio";

    return () => {
      document.title = "Portfolio";
    };
  }, []);

  return (
    <NotFoundContainer>
      <NotFoundContent>
        <ErrorIcon>
          <FontAwesomeIcon icon={faExclamationTriangle} />
        </ErrorIcon>
        <ErrorCode>404</ErrorCode>
        <ErrorTitle>Page Not Found</ErrorTitle>
        <ErrorDescription>
          The page you are looking for doesn't exist or has been moved. Please
          check the URL or navigate back to the homepage.
        </ErrorDescription>

        <ButtonGroup>
          <BackButton onClick={() => window.history.back()}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Go Back
          </BackButton>

          <HomeButton as={Link} to="/">
            <FontAwesomeIcon icon={faHome} />
            Back to Home
          </HomeButton>
        </ButtonGroup>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

export default NotFound;
