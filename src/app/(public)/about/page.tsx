"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData, educationData, experienceData } from "@/data/about";
import { skillCategories, skillIconMap, tools } from "@/config/about";
import ScrollReveal from "@/components/ui/scroll-reveal";
import {
  PageHero,
  IntroGrid,
  IntroLeft,
  PageLabel,
  PageTitle,
  Accent,
  PageBio,
  IntroCtas,
  DownloadBtn,
  ContactBtn,
  IntroRight,
  PhotoFrame,
  PhotoBorder,
  Photo,
  InfoChip,
  SkillsSection,
  SectionLabel,
  SectionTitle,
  FilterRow,
  FilterBtn,
  SkillsGrid,
  SkillCard,
  SkillIconBox,
  SkillInfo,
  SkillName,
  SkillCat,
  ToolsSection,
  ToolsTrack,
  ToolChip,
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
} from "./about.styles";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const filterFadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: EASE },
  }),
};
const filterStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const About = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <>
      <PageHero>
        <div className="container">
          <IntroGrid>
            <IntroLeft>
              <PageLabel
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {">"} whoami
              </PageLabel>
              <PageTitle
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                Passionate <Accent>Developer</Accent>
                <br />& Problem Solver
              </PageTitle>
              <PageBio>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.12 }}
                  transition={{
                    delay: 0.35,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ display: "inline" }}
                >
                  I&apos;m Munvar Khajavali, a Full Stack Web Developer with
                  expertise in React.js, Node.js, and SQL.{" "}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.12 }}
                  transition={{
                    delay: 0.41,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ display: "inline" }}
                >
                  I bring a problem-solving mindset to every project — crafting
                  seamless frontend experiences and optimizing backend systems
                  to build scalable, dynamic, and intuitive applications.
                </motion.span>
              </PageBio>
              <IntroCtas
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <DownloadBtn href="/resume.pdf" download="Munvar_Resume.pdf">
                  <i className="fa-solid fa-download" /> Download Resume
                </DownloadBtn>
                <ContactBtn href="mailto:munvar021@gmail.com">
                  <i className="fa-solid fa-envelope" /> Contact Me
                </ContactBtn>
              </IntroCtas>
            </IntroLeft>

            <IntroRight
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <PhotoFrame>
                <PhotoBorder>
                  <Photo src="/images/programmer.jpeg" alt="Munvar Khajavali" />
                </PhotoBorder>
                <InfoChip $pos="bottom: -12px; right: -16px;">
                  <i className="fa-solid fa-code" /> Full Stack Dev
                </InfoChip>
                <InfoChip $pos="top: 20px; left: -20px;">
                  <i className="fa-solid fa-location-dot" /> India
                </InfoChip>
              </PhotoFrame>
            </IntroRight>
          </IntroGrid>
        </div>
      </PageHero>

      <SkillsSection>
        <div className="container">
          <ScrollReveal as={SectionLabel}>{">"} tech stack --list</ScrollReveal>
          <ScrollReveal as={SectionTitle} delay={0.06}>
            My <Accent>Skill Set</Accent>
          </ScrollReveal>

          <FilterRow>
            {skillCategories.map((cat) => (
              <FilterBtn
                key={cat}
                $active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </FilterBtn>
            ))}
          </FilterRow>

          <AnimatePresence mode="wait">
            <SkillsGrid
              as={motion.div}
              key={activeCategory}
              variants={filterStagger}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
            >
              {filteredSkills.map((skill, i) => (
                <SkillCard key={skill.name} variants={filterFadeUp} custom={i}>
                  <SkillIconBox>
                    <i
                      className={skillIconMap[skill.icon] || "fa-solid fa-code"}
                    />
                  </SkillIconBox>
                  <SkillInfo>
                    <SkillName>{skill.name}</SkillName>
                    <SkillCat>{skill.category}</SkillCat>
                  </SkillInfo>
                </SkillCard>
              ))}
            </SkillsGrid>
          </AnimatePresence>
        </div>
      </SkillsSection>

      <ToolsSection>
        <ToolsTrack>
          {[...tools, ...tools].map((tool, i) => (
            <ToolChip key={i}>
              {"iconSrc" in tool ? (
                <img
                  src={tool.iconSrc}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
              ) : "simpleIconSlug" in tool ? (
                <img
                  src={`https://cdn.simpleicons.org/${tool.simpleIconSlug}/ffffff`}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
              ) : (
                <i className={tool.icon} />
              )}
              {tool.name}
            </ToolChip>
          ))}
        </ToolsTrack>
      </ToolsSection>

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
    </>
  );
};

export default About;
