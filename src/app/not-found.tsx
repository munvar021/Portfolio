"use client";

import {
  Wrap,
  Content,
  CodeWrapper,
  Code,
  Label,
  Title,
  Desc,
  Buttons,
  PrimaryBtn,
  SecondaryBtn,
  BackgroundGlow,
} from "./not-found.styles";

const NotFound = () => (
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
      <CodeWrapper>
        <Code>404</Code>
      </CodeWrapper>
      <Label>&gt; error.status = 404</Label>
      <Title>Page Not Found</Title>
      <Desc>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </Desc>
      <Buttons>
        <PrimaryBtn to="/">
          <i className="fa-solid fa-house" /> Go Home
        </PrimaryBtn>
        <SecondaryBtn onClick={() => window.history.back()}>
          <i className="fa-solid fa-arrow-left" /> Go Back
        </SecondaryBtn>
      </Buttons>
    </Content>
  </Wrap>
);

export default NotFound;
