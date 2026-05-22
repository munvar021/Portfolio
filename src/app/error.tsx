"use client";

import { useEffect } from "react";
import {
  Wrap,
  Content,
  IconBox,
  Code,
  Title,
  Desc,
  Buttons,
  PrimaryBtn,
  SecondaryBtn,
  BackgroundGlow,
} from "./error.styles";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Wrap
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
    >
      <BackgroundGlow />
      <Content>
        <IconBox>
          <i className="fa-solid fa-triangle-exclamation" />
        </IconBox>
        <Code>&gt; error.status = 500</Code>
        <Title>Something Went Wrong</Title>
        <Desc>
          An unexpected error occurred while processing your request. Please try
          again or return to the home page.
        </Desc>
        <Buttons>
          <PrimaryBtn onClick={reset}>
            <i className="fa-solid fa-rotate-right" /> Try Again
          </PrimaryBtn>
          <SecondaryBtn to="/">
            <i className="fa-solid fa-house" /> Go Home
          </SecondaryBtn>
        </Buttons>
      </Content>
    </Wrap>
  );
}
