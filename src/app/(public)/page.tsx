"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { educationData, experienceData } from "@/data/about";
import { contactInfo, socialLinks } from "@/config/contact";
import { stackRows } from "@/config/home";
import {
  PROJECT_FILTERS,
  filterProjectsByTag,
  getProjectCardVariant,
} from "@/lib/projects";
import { useContactForm } from "@/hooks/use-contact-form";
import ScrollReveal from "@/components/ui/scroll-reveal";

import {
  HeroSection,
  GridOverlay,
  HeroCodeField,
  CodeToken,
  HeroInner,
  HeroLeft,
  HeroBadge,
  HeroGreeting,
  HeroName,
  HeroBio,
  HeroCta,
  PrimaryBtn,
  SecondaryBtn,
  SocialRow,
  SocialBtn,
  HeroRight,
  AvatarWrap,
  AvatarGlow,
  AvatarRing,
  AvatarImg,
  AvatarOrbit,
  StatusBadge,
  HeroTerminal,
  ScrollIndicator,
  ScrollLine,
  SectionLabel,
  SectionTitle,
  SectionAccent,
  SectionSubtitle,
  SectionHeader,
  AboutBand,
  ResumeBand,
  ResumeCard,
  ResumeCardDesc,
  ResumeActions,
  ContactBand,
} from "./home.styles";

import {
  IntroGrid,
  IntroLeft,
  IntroRight,
  PageLabel as AboutLabel,
  PageBio,
  DownloadBtn,
  ContactBtn,
  EditorialTitle,
  EditorialMuted,
  EditorialAccent,
  AboutSvgStage,
  AboutSystemSvg,
  StackSection,
  StackHeader,
  StackEyebrow,
  StackTitle,
  StackSubtitle,
  StackRowLabel,
  StackRowMask,
  StackTrack,
  StackLogoGroup,
  StackLogoItem,
  StackSummary,
  TimelineSection,
  TimelineCols,
  TimelineCol,
  TimelineColTitle,
  TimelineList,
  TimelineItem,
  TimelineDot,
  TimelineContent,
  TimelinePeriod,
  TimelineTitle,
  TimelineSubtitle,
  TimelinePoints,
  TimelinePoint,
} from "./about/about.styles";

import {
  FilterSection,
  FilterBar,
  FilterBtn as ProjectsFilterBtn,
  ProjectsSection,
  ProjectsGrid,
  ProjectCard,
  ProjectImageWrap,
  FeaturedBadge,
  ProjectBody,
  ProjectTags,
  ProjectTag,
  ProjectTitle,
  ProjectDesc,
  ProjectHighlights,
  ProjectHighlight,
  CredentialsBadge,
  ProjectLinks,
  ProjectLink,
} from "./projects/projects.styles";

import {
  ContactGrid,
  FormWrap,
  FormTitle,
  FormSubtitle,
  Form,
  FormRow,
  FormGroup,
  Label,
  Input,
  Textarea,
  ErrorMsg,
  SubmitBtn,
  AlertSuccess,
  AlertError,
  InfoCol,
  InfoCard,
  InfoCardTitle,
  InfoItem,
  InfoIcon,
  InfoText,
  InfoLabel,
  InfoValue,
  SocialCard,
  SocialTitle,
  SocialLinks,
  SocialLink as ContactSocialLink,
} from "./contact/contact.styles";

const Home = () => {
  const router = useRouter();

  const [activeProjectTag, setActiveProjectTag] = useState("All");
  const filteredProjects = filterProjectsByTag(projects, activeProjectTag);

  const {
    register,
    handleSubmit,
    onSubmit,
    sending,
    status: contactStatus,
    formState: { errors },
  } = useContactForm();

  return (
    <>
      <HeroSection id="hero">
        <GridOverlay />
        <HeroCodeField aria-hidden="true">
          <CodeToken $top="17%" $left="10%" $size="clamp(1.5rem, 3vw, 3.4rem)">
            fn()
          </CodeToken>
          <CodeToken $top="31%" $left="56%" $delay="-2s">
            async
          </CodeToken>
          <CodeToken
            $top="29%"
            $left="82%"
            $size="clamp(1rem, 2.2vw, 2.2rem)"
            $delay="-5s"
          >
            interface
          </CodeToken>
          <CodeToken $top="64%" $left="8%" $delay="-3s">
            type
          </CodeToken>
          <CodeToken $top="69%" $left="48%" $delay="-7s">
            API
          </CodeToken>
          <CodeToken
            $top="83%"
            $left="57%"
            $size="clamp(2rem, 4.5vw, 4rem)"
            $delay="-4s"
          >
            await
          </CodeToken>
          <CodeToken $top="44%" $left="72%" $delay="-6s">
            return
          </CodeToken>
        </HeroCodeField>
        <div className="container">
          <HeroInner>
            <HeroLeft>
              <HeroBadge
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <span /> INIT_PORTFOLIO
              </HeroBadge>
              <HeroGreeting
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                {">"} Building production-ready web experiences
              </HeroGreeting>
              <HeroName
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
              >
                Munvar
                <span>Khajavali</span>
              </HeroName>
              <HeroBio
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
              >
                I translate product ideas into fast, accessible interfaces and
                dependable backend flows with React, Next.js, Node.js, and clean
                API design.
              </HeroBio>
              <HeroCta
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
              >
                <PrimaryBtn to="#projects">
                  See the work <i className="fa-solid fa-arrow-right" />
                </PrimaryBtn>
                <SecondaryBtn to="#contact">Get in touch</SecondaryBtn>
              </HeroCta>
              <SocialRow
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
              >
                {socialLinks.map(({ icon, label, href }) => (
                  <SocialBtn
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <i className={icon} />
                  </SocialBtn>
                ))}
              </SocialRow>
            </HeroLeft>

            <HeroRight
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <AvatarWrap>
                <AvatarGlow />
                <AvatarOrbit aria-hidden="true">
                  <span>npm</span>
                  <span>node</span>
                  <span>git</span>
                </AvatarOrbit>
                <AvatarRing>
                  <AvatarImg src="/images/coder.jpeg" alt="Munvar Khajavali" />
                </AvatarRing>
                <StatusBadge>
                  <span /> Open to Opportunities
                </StatusBadge>
                <HeroTerminal aria-hidden="true">
                  <span>munvar@portfolio</span>:~$ ship --quality
                </HeroTerminal>
              </AvatarWrap>
            </HeroRight>
          </HeroInner>
        </div>
        <ScrollIndicator
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="scroll-text">Scroll</span>
          <ScrollLine className="scroll-line" />
        </ScrollIndicator>
      </HeroSection>

      <AboutBand id="about">
        <div className="container">
          <IntroGrid $reverse>
            <IntroLeft>
              <ScrollReveal as={AboutLabel} delay={0.1}>
                {">"} WHOAMI
              </ScrollReveal>
              <ScrollReveal as={EditorialTitle} delay={0.2}>
                <span>Building the bridge</span>
                <EditorialMuted>
                  between <EditorialAccent>&quot;Logic&quot;</EditorialAccent>
                </EditorialMuted>
                <EditorialMuted>
                  and <EditorialAccent>&quot;Launch.&quot;</EditorialAccent>
                </EditorialMuted>
              </ScrollReveal>
              <PageBio>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.12 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ display: "inline" }}
                >
                  My focus is on building systems that stay useful after the
                  first demo: stable interfaces, clear APIs, and logic that
                  holds up when real users start clicking.{" "}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.12 }}
                  transition={{
                    delay: 0.36,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ display: "inline" }}
                >
                  I like working close to designers, managers, and testers
                  because the best product decisions usually happen in the
                  handoff moments.{" "}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.12 }}
                  transition={{
                    delay: 0.42,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ display: "inline" }}
                >
                  I&apos;m not the loudest person in the room; I&apos;m the one
                  checking edge cases, simplifying flows, and making sure the
                  final ship is something the whole team can trust.{" "}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.12 }}
                  transition={{
                    delay: 0.48,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ display: "inline" }}
                >
                  Right now I&apos;m looking for a role or freelance project
                  where careful engineering can turn a messy problem into a
                  dependable product.
                </motion.span>
              </PageBio>
            </IntroLeft>

            <ScrollReveal
              as={IntroRight}
              className="hide-on-mobile"
              delay={0.35}
            >
              <AboutSvgStage aria-hidden="true">
                <AboutSystemSvg viewBox="0 0 620 420" role="img">
                  <defs>
                    <radialGradient id="aboutGlow" cx="50%" cy="50%" r="50%">
                      <stop
                        offset="0%"
                        stopColor="#e12a2a"
                        stopOpacity="0.26"
                      />
                      <stop
                        offset="58%"
                        stopColor="#5c0b0b"
                        stopOpacity="0.1"
                      />
                      <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient
                      id="editorSurface"
                      x1="0"
                      x2="1"
                      y1="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#ffffff"
                        stopOpacity="0.08"
                      />
                      <stop
                        offset="48%"
                        stopColor="#e12a2a"
                        stopOpacity="0.05"
                      />
                      <stop
                        offset="100%"
                        stopColor="#ffffff"
                        stopOpacity="0.02"
                      />
                    </linearGradient>
                  </defs>

                  <circle
                    className="glow-core"
                    cx="312"
                    cy="210"
                    r="190"
                    fill="url(#aboutGlow)"
                  />

                  <g className="orbit-system" transform="translate(310 206)">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0"
                      to="360"
                      dur="28s"
                      repeatCount="indefinite"
                      additive="sum"
                    />
                    <ellipse
                      className="orbit"
                      cx="0"
                      cy="0"
                      rx="214"
                      ry="126"
                    />
                    <ellipse
                      className="orbit orbit-soft"
                      cx="0"
                      cy="0"
                      rx="160"
                      ry="92"
                    />
                    <circle className="packet" cx="214" cy="0" r="5" />
                    <circle
                      className="packet packet-soft"
                      cx="-160"
                      cy="0"
                      r="4"
                    />
                  </g>

                  <g className="editor-shell" transform="translate(154 96)">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0 0; 0 -6; 0 0"
                      dur="7s"
                      repeatCount="indefinite"
                      additive="sum"
                    />
                    <rect
                      className="editor-window"
                      width="312"
                      height="206"
                      rx="14"
                    />
                    <rect
                      className="editor-topbar"
                      x="0"
                      y="0"
                      width="312"
                      height="38"
                      rx="14"
                    />
                    <circle className="window-dot" cx="24" cy="19" r="5" />
                    <circle
                      className="window-dot muted-dot"
                      cx="42"
                      cy="19"
                      r="5"
                    />
                    <circle
                      className="window-dot muted-dot"
                      cx="60"
                      cy="19"
                      r="5"
                    />
                    <text
                      className="label editor-name"
                      x="186"
                      y="24"
                      textLength="94"
                      lengthAdjust="spacingAndGlyphs"
                    >
                      core.ts
                    </text>

                    <line
                      className="red-line scan-line"
                      x1="30"
                      y1="66"
                      x2="112"
                      y2="66"
                    />
                    <line
                      className="muted-line scan-line"
                      x1="132"
                      y1="66"
                      x2="248"
                      y2="66"
                    />
                    <line
                      className="muted-line scan-line"
                      x1="54"
                      y1="94"
                      x2="216"
                      y2="94"
                    />
                    <line
                      className="red-line scan-line"
                      x1="54"
                      y1="122"
                      x2="156"
                      y2="122"
                    />
                    <line
                      className="muted-line scan-line"
                      x1="176"
                      y1="122"
                      x2="264"
                      y2="122"
                    />

                    <rect
                      className="console"
                      x="28"
                      y="150"
                      width="256"
                      height="32"
                      rx="6"
                    />
                    <text
                      className="label command"
                      x="44"
                      y="171"
                      textLength="74"
                      lengthAdjust="spacingAndGlyphs"
                    >
                      $ ship
                    </text>
                    <rect
                      className="cursor"
                      x="142"
                      y="159"
                      width="8"
                      height="16"
                      rx="2"
                    />
                  </g>

                  <g className="module module-ui" transform="translate(64 94)">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0 0; 0 -10; 0 0"
                      dur="6.4s"
                      repeatCount="indefinite"
                      additive="sum"
                    />
                    <rect
                      className="panel panel-red"
                      width="112"
                      height="76"
                      rx="10"
                    />
                    <text className="label module-label" x="18" y="29">
                      UI
                    </text>
                    <rect
                      className="mini-screen"
                      x="18"
                      y="42"
                      width="76"
                      height="16"
                      rx="3"
                    />
                  </g>

                  <g
                    className="module module-api"
                    transform="translate(460 128)"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0 0; 0 -8; 0 0"
                      dur="5.7s"
                      begin="-1.8s"
                      repeatCount="indefinite"
                      additive="sum"
                    />
                    <rect className="panel" width="104" height="92" rx="10" />
                    <text className="label module-label" x="18" y="30">
                      API
                    </text>
                    <circle className="node" cx="24" cy="55" r="6" />
                    <line
                      className="muted-line"
                      x1="42"
                      y1="55"
                      x2="78"
                      y2="55"
                    />
                    <circle className="node" cx="24" cy="74" r="6" />
                    <line
                      className="muted-line"
                      x1="42"
                      y1="74"
                      x2="68"
                      y2="74"
                    />
                  </g>

                  <g className="module module-db" transform="translate(92 292)">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0 0; 0 -6; 0 0"
                      dur="6.1s"
                      begin="-2.6s"
                      repeatCount="indefinite"
                      additive="sum"
                    />
                    <ellipse
                      className="db-top"
                      cx="54"
                      cy="18"
                      rx="48"
                      ry="14"
                    />
                    <path
                      className="db-body"
                      d="M6 18v48c0 8 21 14 48 14s48-6 48-14V18"
                    />
                    <ellipse
                      className="db-ring"
                      cx="54"
                      cy="66"
                      rx="48"
                      ry="14"
                    />
                    <text className="label module-label db-label" x="32" y="42">
                      DATA
                    </text>
                  </g>

                  <g
                    className="module module-test"
                    transform="translate(420 292)"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0 0; 0 -7; 0 0"
                      dur="6.8s"
                      begin="-3s"
                      repeatCount="indefinite"
                      additive="sum"
                    />
                    <rect
                      className="panel panel-red"
                      width="126"
                      height="72"
                      rx="10"
                    />
                    <text className="label module-label" x="18" y="29">
                      TESTS
                    </text>
                    <path className="check" d="M24 52l8 8 18-21" />
                    <line
                      className="muted-line"
                      x1="68"
                      y1="53"
                      x2="102"
                      y2="53"
                    />
                  </g>

                  <path
                    className="signal"
                    d="M176 132 C198 132 218 142 238 158"
                  />
                  <path
                    className="signal"
                    d="M430 168 C446 156 456 150 470 150"
                  />
                  <path
                    className="signal"
                    d="M182 318 C216 286 230 268 252 244"
                  />
                  <path
                    className="signal"
                    d="M414 300 C390 280 376 266 360 244"
                  />
                </AboutSystemSvg>
              </AboutSvgStage>
            </ScrollReveal>
          </IntroGrid>
        </div>
      </AboutBand>

      <StackSection id="skills">
        <div className="container">
          <StackHeader>
            <ScrollReveal as={StackEyebrow}>{">"} package.json</ScrollReveal>
            <ScrollReveal as={StackTitle} delay={0.06}>
              What I Work With
            </ScrollReveal>
            <ScrollReveal as={StackSubtitle} delay={0.12}>
              (And Don&apos;t Regret)
            </ScrollReveal>
          </StackHeader>

          {stackRows.map((row, idx) => (
            <ScrollReveal key={row.label} delay={idx * 0.08}>
              <StackRowLabel>{row.label}</StackRowLabel>
              <StackRowMask>
                <StackTrack $direction={row.direction}>
                  {[0, 1, 2, 3].map((group) => (
                    <StackLogoGroup key={group}>
                      {row.items.map((item) => (
                        <StackLogoItem key={`${item.slug}-${group}`}>
                          {"iconClass" in item ? (
                            <i className={item.iconClass} aria-hidden="true" />
                          ) : (
                            <img
                              src={`https://cdn.simpleicons.org/${item.slug}/ffffff`}
                              alt=""
                              aria-hidden="true"
                              loading="lazy"
                            />
                          )}
                          <span>{item.name}</span>
                        </StackLogoItem>
                      ))}
                    </StackLogoGroup>
                  ))}
                </StackTrack>
              </StackRowMask>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={0.2}>
            <StackSummary>
              React · Next.js · TypeScript · JavaScript · HTML5 · CSS3 · Node.js
              · Express · Python · MySQL · MongoDB · Git · GitHub · Figma ·
              Bootstrap · NPM · <span>VS Code</span>
            </StackSummary>
          </ScrollReveal>
        </div>
      </StackSection>

      <TimelineSection>
        <div className="container">
          <TimelineCols>
            <TimelineCol>
              <ScrollReveal as={TimelineColTitle}>
                <i className="fa-solid fa-graduation-cap" /> Education
              </ScrollReveal>
              <TimelineList>
                {educationData.map((edu, i) => (
                  <ScrollReveal key={i} as={TimelineItem} delay={i * 0.09}>
                    <TimelineDot>
                      <i className="fa-solid fa-book" />
                    </TimelineDot>
                    <TimelineContent>
                      <TimelinePeriod>{edu.period}</TimelinePeriod>
                      <TimelineTitle>{edu.degree}</TimelineTitle>
                      <TimelineSubtitle>{edu.institution}</TimelineSubtitle>
                    </TimelineContent>
                  </ScrollReveal>
                ))}
              </TimelineList>
            </TimelineCol>

            <TimelineCol>
              <ScrollReveal as={TimelineColTitle}>
                <i className="fa-solid fa-briefcase" /> Experience
              </ScrollReveal>
              <TimelineList>
                {experienceData.map((exp, i) => (
                  <ScrollReveal key={i} as={TimelineItem} delay={i * 0.09}>
                    <TimelineDot>
                      <i className="fa-solid fa-laptop-code" />
                    </TimelineDot>
                    <TimelineContent>
                      <TimelinePeriod>{exp.period}</TimelinePeriod>
                      <TimelineTitle>{exp.position}</TimelineTitle>
                      <TimelineSubtitle>{exp.company}</TimelineSubtitle>
                      <TimelinePoints>
                        {exp.points.map((pt, j) => (
                          <ScrollReveal
                            key={j}
                            as={TimelinePoint}
                            delay={i * 0.09 + (j + 1) * 0.06}
                          >
                            {pt}
                          </ScrollReveal>
                        ))}
                      </TimelinePoints>
                    </TimelineContent>
                  </ScrollReveal>
                ))}
              </TimelineList>
            </TimelineCol>
          </TimelineCols>
        </div>
      </TimelineSection>

      <section id="projects">
        <FilterSection>
          <div className="container">
            <SectionHeader style={{ marginBottom: 0 }}>
              <ScrollReveal as={SectionLabel}>
                {">"} git log --oneline
              </ScrollReveal>
              <ScrollReveal as={SectionTitle} delay={0.06}>
                Things I&apos;ve <SectionAccent>Built</SectionAccent>
              </ScrollReveal>
              <ScrollReveal as={SectionSubtitle} delay={0.12}>
                A collection of projects I&apos;ve built — exploring ideas,
                solving real problems, and growing as a developer.
              </ScrollReveal>
            </SectionHeader>
            <ScrollReveal delay={0.18}>
              <FilterBar style={{ marginTop: "2.5rem" }}>
                {PROJECT_FILTERS.map((tag, idx) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: idx * 0.03, duration: 0.2 }}
                  >
                    <ProjectsFilterBtn
                      $active={activeProjectTag === tag}
                      onClick={() => setActiveProjectTag(tag)}
                    >
                      {tag}
                    </ProjectsFilterBtn>
                  </motion.div>
                ))}
              </FilterBar>
            </ScrollReveal>
          </div>
        </FilterSection>

        <ProjectsSection>
          <div className="container">
            <AnimatePresence mode="wait">
              <ProjectsGrid
                key={activeProjectTag}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {filteredProjects.map((project, i) => (
                  <ProjectCard
                    key={project.id}
                    $variant={getProjectCardVariant(i)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      delay: i * 0.04,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    layout
                    onClick={() => router.push(`/projects/${project.id}`)}
                  >
                    <ProjectImageWrap>
                      {project.featured && (
                        <FeaturedBadge>Featured</FeaturedBadge>
                      )}
                      <img
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                      />
                    </ProjectImageWrap>
                    <ProjectBody>
                      <ProjectTags>
                        {project.technologies.slice(0, 4).map((t) => (
                          <ProjectTag key={t}>{t}</ProjectTag>
                        ))}
                      </ProjectTags>
                      <ProjectTitle>{project.name}</ProjectTitle>
                      <ProjectDesc>{project.description}</ProjectDesc>
                      <ProjectHighlights>
                        {project.features.slice(0, 2).map((feature) => (
                          <ProjectHighlight key={feature}>
                            <i className="fa-solid fa-check" />
                            <span>{feature}</span>
                          </ProjectHighlight>
                        ))}
                      </ProjectHighlights>
                      {project.credentials && (
                        <CredentialsBadge>
                          <i className="fa-solid fa-key" />
                          Demo: {project.credentials.username} /{" "}
                          {project.credentials.password}
                        </CredentialsBadge>
                      )}
                      <ProjectLinks>
                        <ProjectLink
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fa-brands fa-github" /> GitHub
                        </ProjectLink>
                        <ProjectLink
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fa-solid fa-arrow-up-right-from-square" />{" "}
                          Live Demo
                        </ProjectLink>
                      </ProjectLinks>
                    </ProjectBody>
                  </ProjectCard>
                ))}
              </ProjectsGrid>
            </AnimatePresence>
          </div>
        </ProjectsSection>
      </section>

      <ResumeBand id="resume">
        <div className="container">
          <SectionHeader style={{ marginBottom: 0 }}>
            <ScrollReveal as={SectionLabel}>{">"} resume --view</ScrollReveal>
            <ScrollReveal as={SectionTitle} delay={0.06}>
              My <SectionAccent>Professional</SectionAccent> Background
            </ScrollReveal>
            <ScrollReveal
              as={SectionSubtitle}
              delay={0.12}
              style={{ margin: "0 auto" }}
            >
              A snapshot of my education, experience, and skills. Download my
              full resume for more details.
            </ScrollReveal>
          </SectionHeader>
          <ScrollReveal as={ResumeCard} delay={0.18}>
            <ResumeCardDesc>
              Full Stack Web Developer with hands-on experience in React.js,
              Node.js, MySQL, and MongoDB. Completed a 4-month internship
              building production-grade web applications. Actively seeking
              full-time roles or freelance opportunities where I can contribute
              and grow.
            </ResumeCardDesc>
            <ResumeActions>
              <DownloadBtn
                href="/resume.pdf"
                download="Munvar_Khajavali_Resume.pdf"
              >
                <i className="fa-solid fa-download" /> Download PDF
              </DownloadBtn>
              <ContactBtn
                href="/resume"
                style={{ borderRadius: "var(--radius-full)" }}
              >
                <i className="fa-solid fa-eye" /> View Online
              </ContactBtn>
            </ResumeActions>
          </ScrollReveal>
        </div>
      </ResumeBand>

      <ContactBand id="contact">
        <div className="container">
          <SectionHeader>
            <ScrollReveal as={SectionLabel}>{">"} contact --open</ScrollReveal>
            <ScrollReveal as={SectionTitle} delay={0.06}>
              Let&apos;s <SectionAccent>Build</SectionAccent> Together
            </ScrollReveal>
            <ScrollReveal as={SectionSubtitle} delay={0.12}>
              Have a project in mind or want to collaborate? I&apos;d love to
              hear from you.
            </ScrollReveal>
          </SectionHeader>

          <ContactGrid>
            <FormWrap
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              <FormTitle>Send a Message</FormTitle>
              <FormSubtitle>
                Fill out the form and I&apos;ll get back to you within 24 hours.
              </FormSubtitle>

              <Form onSubmit={handleSubmit(onSubmit)} noValidate>
                <FormRow>
                  <FormGroup>
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      $error={!!errors.name}
                      {...register("name", {
                        required: "Name is required",
                        minLength: { value: 2, message: "Min 2 characters" },
                      })}
                    />
                    {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      $error={!!errors.email}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <ErrorMsg>{errors.email.message}</ErrorMsg>
                    )}
                  </FormGroup>
                </FormRow>

                <FormGroup>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Project Inquiry"
                    $error={!!errors.subject}
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                  />
                  {errors.subject && (
                    <ErrorMsg>{errors.subject.message}</ErrorMsg>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    $error={!!errors.message}
                    {...register("message", {
                      required: "Message is required",
                      minLength: { value: 20, message: "Min 20 characters" },
                    })}
                  />
                  {errors.message && (
                    <ErrorMsg>{errors.message.message}</ErrorMsg>
                  )}
                </FormGroup>

                <FormGroup $hidden>
                  <input
                    type="text"
                    {...register("honeypot")}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </FormGroup>

                <AnimatePresence>
                  {contactStatus === "success" && (
                    <AlertSuccess
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <i className="fa-solid fa-circle-check" />
                      Message sent! I&apos;ll be in touch within 24 hours.
                    </AlertSuccess>
                  )}
                  {contactStatus === "error" && (
                    <AlertError
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <i className="fa-solid fa-circle-exclamation" />
                      Something went wrong. Please try again or email directly.
                    </AlertError>
                  )}
                </AnimatePresence>

                <SubmitBtn type="submit" disabled={sending}>
                  {sending ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane" /> Send Message
                    </>
                  )}
                </SubmitBtn>
              </Form>
            </FormWrap>

            <InfoCol
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <InfoCard>
                <InfoCardTitle>
                  <i className="fa-solid fa-address-card" /> Contact Info
                </InfoCardTitle>
                {contactInfo.map(({ icon, label, value }) => (
                  <InfoItem key={label}>
                    <InfoIcon>
                      <i className={`fa-solid ${icon}`} />
                    </InfoIcon>
                    <InfoText>
                      <InfoLabel>{label}</InfoLabel>
                      <InfoValue>{value}</InfoValue>
                    </InfoText>
                  </InfoItem>
                ))}
              </InfoCard>

              <SocialCard>
                <SocialTitle>Find Me Online</SocialTitle>
                <SocialLinks>
                  {socialLinks.map(({ icon, label, href }) => (
                    <ContactSocialLink
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={icon} /> {label}
                    </ContactSocialLink>
                  ))}
                </SocialLinks>
              </SocialCard>
            </InfoCol>
          </ContactGrid>
        </div>
      </ContactBand>
    </>
  );
};

export default Home;
