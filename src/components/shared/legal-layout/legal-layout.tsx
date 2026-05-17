"use client";

import { motion } from "framer-motion";
import {
  PageWrapper,
  Hero,
  BackLink,
  HeroInner,
  Tag,
  PageTitle,
  Meta,
  Body,
  BodyInner,
  Intro,
  Section,
  SectionHeading,
  Paragraph,
  List,
  ListItem,
  ContactBox,
} from "./legal-layout.styles";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: EASE },
  }),
};

interface LegalSection {
  title: string;
  paragraphs?: string[];
  list?: string[];
}

interface LegalLayoutProps {
  tag: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  contact?: string;
}

const LegalLayout = ({
  tag,
  title,
  updated,
  intro,
  sections,
  contact,
}: LegalLayoutProps) => (
  <PageWrapper>
    <Hero>
      <div className="container">
        <BackLink to="/">
          <i className="fa-solid fa-arrow-left" /> Back to Home
        </BackLink>
        <HeroInner
          as={motion.div}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <Tag>
            <i className="fa-solid fa-shield-halved" /> {tag}
          </Tag>
          <PageTitle>{title}</PageTitle>
          <Meta>
            Last updated: <span>{updated}</span>
          </Meta>
        </HeroInner>
      </div>
    </Hero>

    <Body>
      <div className="container">
        <BodyInner>
          <Intro
            as={motion.p}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
          >
            {intro}
          </Intro>

          {sections.map((section, i) => (
            <Section
              key={section.title}
              as={motion.section}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
            >
              <SectionHeading>{section.title}</SectionHeading>
              {section.paragraphs?.map((text, pi) => (
                <Paragraph
                  key={pi}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
              {section.list && (
                <List>
                  {section.list.map((item) => (
                    <ListItem key={item}>{item}</ListItem>
                  ))}
                </List>
              )}
            </Section>
          ))}

          {contact && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
            >
              <ContactBox>
                <p dangerouslySetInnerHTML={{ __html: contact }} />
              </ContactBox>
            </motion.div>
          )}
        </BodyInner>
      </div>
    </Body>
  </PageWrapper>
);

export default LegalLayout;
