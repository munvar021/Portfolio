import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  skillsData,
  educationData,
  experienceData,
} from "../../data/aboutData";
import programmer from "../../assets/programmer.jpeg";
import resume from "../../assets/resume.pdf";
import ScrollReveal from "../../components/ScrollReveal/scrollReveal";
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
} from "./aboutStyles";

const iconMap = {
  faReact: "fa-brands fa-react",
  faJs: "fa-brands fa-js",
  faHtml5: "fa-brands fa-html5",
  faCss3Alt: "fa-brands fa-css3-alt",
  faNodeJs: "fa-brands fa-node-js",
  faPython: "fa-brands fa-python",
  faDatabase: "fa-solid fa-database",
  faMobile: "fa-solid fa-mobile-screen",
};

const tools = [
  { name: "Git", icon: "fa-brands fa-git-alt" },
  { name: "GitHub", icon: "fa-brands fa-github" },
  { name: "Figma", icon: "fa-brands fa-figma" },
  { name: "VS Code", icon: "fa-solid fa-code" },
  { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
  { name: "NPM", icon: "fa-brands fa-npm" },
  { name: "REST APIs", icon: "fa-solid fa-plug" },
  { name: "MS Office", icon: "fa-brands fa-windows" },
];

const categories = ["All", "Frontend", "Backend", "Database"];

const filterFadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
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
                About Me
              </PageLabel>
              <PageTitle
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                Passionate <Accent>Developer</Accent>
                <br />& Problem Solver
              </PageTitle>
              <PageBio
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                I'm Munvar Khajavali, a Full Stack Web Developer with expertise
                in React.js, Node.js, and SQL. I bring a problem-solving mindset
                to every project — crafting seamless frontend experiences and
                optimizing backend systems to build scalable, dynamic, and
                intuitive applications.
              </PageBio>
              <IntroCtas
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <DownloadBtn href={resume} download="Munvar_Resume.pdf">
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
                  <Photo src={programmer} alt="Munvar Khajavali" />
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
          <ScrollReveal as={SectionLabel}>Technical Skills</ScrollReveal>
          <ScrollReveal as={SectionTitle} delay={0.06}>
            My <Accent>Skill Set</Accent>
          </ScrollReveal>

          <FilterRow>
            {categories.map((cat) => (
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
                    <i className={iconMap[skill.icon] || "fa-solid fa-code"} />
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
              <i className={tool.icon} /> {tool.name}
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
                          <TimelinePoint key={j}>{pt}</TimelinePoint>
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
