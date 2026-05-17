"use client";

import { motion } from "framer-motion";
import {
  Wrap,
  Code,
  Title,
  Desc,
  Buttons,
  PrimaryBtn,
  SecondaryBtn,
} from "./not-found.styles";

const NotFound = () => (
  <Wrap>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
    >
      <Code>404</Code>
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
    </motion.div>
  </Wrap>
);

export default NotFound;
