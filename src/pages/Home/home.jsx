import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { projects } from "../../data/projectsData";
import coder from "../../assets/coder.jpeg";
import ScrollReveal from "../../components/ScrollReveal/scrollReveal";
import {
  HeroSection,
  GridOverlay,
  HeroInner,
  HeroLeft,
  HeroBadge,
  HeroGreeting,
  HeroName,
  HeroRole,
  TypedSpan,
  Cursor as CursorChar,
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
  StatusBadge,
  ScrollIndicator,
  ScrollLine,
  MarqueeSection,
  MarqueeTrack,
  MarqueeItem,
  MarqueeDot,
  StatsBand,
  SkillsBand,
  ProjectsBand,
  SectionLabel,
  SectionTitle,
  SectionAccent,
  SectionSubtitle,
  SectionHeader,
  StatsGrid,
  StatCard,
  StatValue,
  StatLabel,
  SkillsGrid,
  SkillCard,
  SkillIcon,
  SkillName,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectBody,
  ProjectTags,
  ProjectTag,
  ProjectTitle,
  ProjectDesc,
  ProjectLinks,
  ProjectLink,
  ProjectDetailsLink,
  ViewAllBtn,
  CtaSection,
  CtaInner,
  CtaTitle,
  CtaSubtitle,
  CtaButtons,
} from "./homeStyles";

const roles = [
  "Full Stack Developer",
  "React Developer",
  "Node.js Developer",
  "Problem Solver",
];

const marqueeItems = [
  { label: "React.js", icon: "fa-brands fa-react" },
  { label: "JavaScript", icon: "fa-brands fa-js" },
  { label: "Node.js", icon: "fa-brands fa-node-js" },
  { label: "MongoDB", icon: "fa-solid fa-database" },
  { label: "Python", icon: "fa-brands fa-python" },
  { label: "HTML5", icon: "fa-brands fa-html5" },
  { label: "CSS3", icon: "fa-brands fa-css3-alt" },
  { label: "Git", icon: "fa-brands fa-git-alt" },
  { label: "MySQL", icon: "fa-solid fa-database" },
  { label: "Redux", icon: "fa-solid fa-layer-group" },
];

const skills = [
  { name: "React.js", icon: "fa-brands fa-react" },
  { name: "Node.js", icon: "fa-brands fa-node-js" },
  { name: "JavaScript", icon: "fa-brands fa-js" },
  { name: "MongoDB", icon: "fa-solid fa-database" },
  { name: "Python", icon: "fa-brands fa-python" },
  { name: "HTML / CSS", icon: "fa-brands fa-html5" },
];

const statsData = [
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 4, suffix: "y", label: "Years Learning" },
  { value: 1, suffix: "", label: "Internship" },
  { value: 100, suffix: "%", label: "Dedication" },
];

const AnimatedStat = ({ value, suffix, label, delay = 0 }) => {
  const triggerRef = useRef(null);
  const inView = useInView(triggerRef, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame;
    const start = Date.now();
    const dur = 1500;
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / dur, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setCount(value);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <ScrollReveal as={StatCard} delay={delay}>
      <StatValue ref={triggerRef}>
        {count}
        {suffix}
      </StatValue>
      <StatLabel>{label}</StatLabel>
    </ScrollReveal>
  );
};

const TypingEffect = () => {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[roleIdx];
    const speed = deleting ? 60 : 120;
    const pause = !deleting && text === full ? 1800 : 0;
    const timer = setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
        return;
      }
      setText(
        deleting
          ? full.slice(0, text.length - 1)
          : full.slice(0, text.length + 1),
      );
    }, pause || speed);
    return () => clearTimeout(timer);
  }, [text, deleting, roleIdx]);

  return (
    <>
      <TypedSpan>{text}</TypedSpan>
      <CursorChar />
    </>
  );
};

const Home = () => {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <HeroSection>
        <GridOverlay />
        <div className="container">
          <HeroInner>
            <HeroLeft>
              <HeroBadge
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <span /> Available for Work
              </HeroBadge>
              <HeroGreeting
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                Hi there, I'm 👋
              </HeroGreeting>
              <HeroName
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
              >
                <span>Munvar</span> Khajavali
              </HeroName>
              <HeroRole
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                I'm a <TypingEffect />
              </HeroRole>
              <HeroBio
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
              >
                Passionate about building modern, scalable, and user-friendly
                web applications. From crafting seamless frontend experiences to
                optimizing backend systems — I love bringing ideas to life.
              </HeroBio>
              <HeroCta
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
              >
                <PrimaryBtn to="/projects">
                  <i className="fa-solid fa-rocket" /> View My Work
                </PrimaryBtn>
                <SecondaryBtn to="/contact">
                  <i className="fa-solid fa-envelope" /> Hire Me
                </SecondaryBtn>
              </HeroCta>
              <SocialRow
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
              >
                <SocialBtn
                  href="https://github.com/munvar021"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fa-brands fa-github" />
                </SocialBtn>
                <SocialBtn
                  href="https://www.linkedin.com/in/munvar-khajavali-shaik"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </SocialBtn>
                <SocialBtn
                  href="https://www.instagram.com/munvar_khajavali"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram" />
                </SocialBtn>
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
                <AvatarRing>
                  <AvatarImg src={coder} alt="Munvar Khajavali" />
                </AvatarRing>
                <StatusBadge>
                  <span /> Open to Opportunities
                </StatusBadge>
              </AvatarWrap>
            </HeroRight>
          </HeroInner>
        </div>
        <ScrollIndicator
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <ScrollLine />
          Scroll
        </ScrollIndicator>
      </HeroSection>

      <MarqueeSection>
        <MarqueeTrack>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <MarqueeItem key={i}>
              <i className={item.icon} />
              {item.label}
              <MarqueeDot />
            </MarqueeItem>
          ))}
        </MarqueeTrack>
      </MarqueeSection>

      <StatsBand>
        <div className="container">
          <StatsGrid>
            {statsData.map(({ value, suffix, label }, i) => (
              <AnimatedStat
                key={label}
                value={value}
                suffix={suffix}
                label={label}
                delay={i * 0.08}
              />
            ))}
          </StatsGrid>
        </div>
      </StatsBand>

      <SkillsBand>
        <div className="container">
          <SectionHeader>
            <ScrollReveal as={SectionLabel}>Skills</ScrollReveal>
            <ScrollReveal as={SectionTitle} delay={0.06}>
              What I <SectionAccent>Work With</SectionAccent>
            </ScrollReveal>
            <ScrollReveal as={SectionSubtitle} delay={0.12}>
              A focused stack I use to build production-ready applications from
              frontend to backend.
            </ScrollReveal>
          </SectionHeader>

          <SkillsGrid>
            {skills.map(({ name, icon }, i) => (
              <ScrollReveal key={name} as={SkillCard} delay={i * 0.07}>
                <SkillIcon>
                  <i className={icon} />
                </SkillIcon>
                <SkillName>{name}</SkillName>
              </ScrollReveal>
            ))}
          </SkillsGrid>

          <div style={{ marginTop: "2rem" }}>
            <ViewAllBtn to="/about">
              See All Skills <i className="fa-solid fa-arrow-right" />
            </ViewAllBtn>
          </div>
        </div>
      </SkillsBand>

      <ProjectsBand>
        <div className="container">
          <SectionHeader>
            <ScrollReveal as={SectionLabel}>Projects</ScrollReveal>
            <ScrollReveal as={SectionTitle} delay={0.06}>
              Featured <SectionAccent>Work</SectionAccent>
            </ScrollReveal>
            <ScrollReveal as={SectionSubtitle} delay={0.12}>
              A selection of projects I've built — each one a step forward in my
              journey.
            </ScrollReveal>
          </SectionHeader>

          <ProjectsGrid>
            {featured.map((project, i) => (
              <ScrollReveal key={project.id} as={ProjectCard} delay={i * 0.09}>
                <ProjectImage>
                  <img src={project.image} alt={project.name} loading="lazy" />
                </ProjectImage>
                <ProjectBody>
                  <ProjectTags>
                    {project.technologies.slice(0, 3).map((t) => (
                      <ProjectTag key={t}>{t}</ProjectTag>
                    ))}
                  </ProjectTags>
                  <ProjectTitle>{project.name}</ProjectTitle>
                  <ProjectDesc>{project.description}</ProjectDesc>
                  <ProjectLinks>
                    <ProjectLink
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github" /> Code
                    </ProjectLink>
                    <ProjectLink
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />{" "}
                      Live
                    </ProjectLink>
                    <ProjectDetailsLink to={`/projects/${project.id}`}>
                      Details <i className="fa-solid fa-arrow-right" />
                    </ProjectDetailsLink>
                  </ProjectLinks>
                </ProjectBody>
              </ScrollReveal>
            ))}
          </ProjectsGrid>

          <div style={{ textAlign: "center" }}>
            <ViewAllBtn to="/projects">
              View All Projects <i className="fa-solid fa-arrow-right" />
            </ViewAllBtn>
          </div>
        </div>
      </ProjectsBand>

      <CtaSection>
        <div className="container">
          <ScrollReveal as={CtaInner}>
            <CtaTitle>
              Let's Work <SectionAccent>Together</SectionAccent>
            </CtaTitle>
            <CtaSubtitle>
              I'm currently open to freelance projects and full-time
              opportunities. Let's build something great.
            </CtaSubtitle>
            <CtaButtons>
              <PrimaryBtn to="/contact">
                <i className="fa-solid fa-paper-plane" /> Get In Touch
              </PrimaryBtn>
              <SecondaryBtn to="/resume">
                <i className="fa-solid fa-file" /> View Resume
              </SecondaryBtn>
            </CtaButtons>
          </ScrollReveal>
        </div>
      </CtaSection>
    </>
  );
};

export default Home;
