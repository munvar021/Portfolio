import React, { useRef, useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";
import { useTheme } from "styled-components";
import Animate from "../../components/Animate/animate";
import {
  fadeIn,
  slideInLeft,
  slideInRight,
  slideInUp,
} from "../../styles/animations";
import {
  faGraduationCap,
  faBriefcase,
  faDownload,
  faEnvelope,
  faCheckCircle,
  faDatabase,
  faServer,
  faCode,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faNodeJs,
  faJs,
  faHtml5,
  faCss3Alt,
  faWindows,
  faGitAlt,
  faFigma,
  faBootstrap,
  faNpm,
  faGithub,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import {
  AboutContainer,
  AboutIntro,
  AboutHeading,
  AboutSubHeading,
  AboutText,
  AboutCTAs,
  CTAButton,
  SectionTitle,
  AboutImageWrapper,
  AboutImage,
  AboutDetails,
  SkillsContainer,
  SkillSelectContainer,
  SkillsGrid,
  SkillCard,
  SkillIcon,
  SkillName,
  ToolsContainer,
  ToolsMarquee,
  ToolCard,
  ToolIcon,
  ToolName,
  TimelineContainer,
  TimelineItem,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineDate,
  TimelineTitle,
  TimelineSubtitle,
  TimelineDescription,
  PointsList,
  PointItem,
} from "./aboutStyles";
import {
  skillsData,
  toolsData,
  educationData,
  experienceData,
} from "../../data/aboutData";
import programmer from "../../assets/programmer.jpeg";
import resumePdf from "../../assets/resume.pdf";

// Map icon strings to FontAwesome icon objects
const iconMap = {
  faReact,
  faNodeJs,
  faJs,
  faHtml5,
  faCss3Alt,
  faWindows,
  faGitAlt,
  faFigma,
  faBootstrap,
  faNpm,
  faGithub,
  faPython,
  faDatabase,
  faServer,
  faCode,
  faMobile,
  faGraduationCap,
  faBriefcase,
  faDownload,
  faEnvelope,
  faCheckCircle,
};

const About = () => {
  const toolsRef = useRef(null);
  const theme = useTheme();
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [visibleSkills, setVisibleSkills] = useState(new Set());
  const timelineRefs = useRef([]);
  const skillRefs = useRef([]);

  const categoryOptions = useMemo(() => {
    const categories = [...new Set(skillsData.map((skill) => skill.category))];
    return [
      { value: "All", label: "All" },
      ...categories.map((cat) => ({ value: cat, label: cat })),
    ];
  }, []);

  const [activeCategory, setActiveCategory] = useState(categoryOptions[0]);

  const filteredSkills = useMemo(() => {
    if (activeCategory.value === "All") {
      return skillsData;
    }
    return skillsData.filter(
      (skill) => skill.category === activeCategory.value
    );
  }, [activeCategory]);

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Munvar Khajavali Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const skillObservers = skillRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleSkills(prev => new Set([...prev, index]));
            }, index * 100);
          }
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      skillObservers.forEach(observer => observer?.disconnect());
    };
  }, [filteredSkills]);

  useEffect(() => {
    const observers = timelineRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, index]));
          }
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  useEffect(() => {
    const handleAnimation = () => {
      if (!toolsRef.current) return;
      const marquee = toolsRef.current;
      const contentWidth = marquee.scrollWidth / 2;
      const duration = contentWidth / 50;
      marquee.style.animationDuration = `${duration}s`;
    };

    handleAnimation();
    window.addEventListener("resize", handleAnimation);

    return () => {
      window.removeEventListener("resize", handleAnimation);
    };
  }, []);

  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "transparent",
      border: `2px solid ${theme.colors.accent}`,
      borderRadius: "30px",
      boxShadow: state.isFocused
        ? `0 0 0 1px ${theme.colors.highlight}`
        : "none",
      "&:hover": {
        borderColor: theme.colors.highlight,
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: theme.colors.textPrimary,
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: theme.colors.background,
      borderRadius: "12px",
      border: `1px solid ${theme.colors.accent}`,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? theme.colors.accent
        : state.isFocused
        ? "rgba(47, 128, 237, 0.2)"
        : "transparent",
      color: state.isSelected ? "white" : theme.colors.textPrimary,
      "&:active": {
        backgroundColor: theme.colors.accent,
      },
    }),
    input: (provided) => ({
      ...provided,
      color: theme.colors.text,
    }),
    placeholder: (provided) => ({
      ...provided,
      color: theme.colors.textSecondary,
    }),
  };

  return (
    <AboutContainer>
      <AboutIntro>
        <Animate animation={slideInLeft}>
          <AboutImageWrapper>
            <AboutImage src={programmer} alt="Professional profile" />
          </AboutImageWrapper>
        </Animate>
        <Animate animation={slideInRight}>
          <AboutDetails>
            <AboutHeading>About Me</AboutHeading>
            <AboutSubHeading>
              Full Stack Web Developer | Problem Solver | Innovator
            </AboutSubHeading>
            <AboutText>
              I'm a passionate Full Stack Developer with expertise in ReactJS,
              Node.js, and SQL, dedicated to crafting scalable, functional, and
              user-centered digital experiences. My approach combines technical
              proficiency with creative problem-solving to build
              high-performance web applications that enhance user engagement and
              efficiency.
            </AboutText>
            <AboutText>
              I thrive on solving real-world problems through innovative web
              solutions. Whether it's optimizing performance, enhancing user
              experience, or integrating cutting-edge technologies, I am always
              eager to push boundaries and create impact.
            </AboutText>
            <AboutCTAs>
              <Link to="/contact">
                <CTAButton primary>
                  <FontAwesomeIcon icon={faEnvelope} /> Contact Me
                </CTAButton>
              </Link>
              <CTAButton onClick={downloadPdf}>
                <FontAwesomeIcon icon={faDownload} /> Download CV
              </CTAButton>
            </AboutCTAs>
          </AboutDetails>
        </Animate>
      </AboutIntro>

      <Animate animation={slideInUp}>
        <SectionTitle>My Skills</SectionTitle>

        <SkillSelectContainer>
          <Select
            value={activeCategory}
            onChange={setActiveCategory}
            options={categoryOptions}
            isSearchable
            styles={customSelectStyles}
          />
        </SkillSelectContainer>

        <SkillsContainer>
          <SkillsGrid>
            {filteredSkills.map((skill, index) => (
              <SkillCard 
                key={index}
                isVisible={visibleSkills.has(index)}
                delay={0}
                ref={el => skillRefs.current[index] = el}
              >
                <SkillIcon>
                  <FontAwesomeIcon icon={iconMap[skill.icon]} />
                </SkillIcon>
                <SkillName>{skill.name}</SkillName>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsContainer>
      </Animate>

      <Animate animation={fadeIn}>
        <SectionTitle>Tools I Use</SectionTitle>

        <ToolsContainer>
          <ToolsMarquee ref={toolsRef}>
            {toolsData.map((tool, index) => (
              <ToolCard key={index}>
                <ToolIcon>
                  <FontAwesomeIcon icon={tool.icon} />
                </ToolIcon>
                <ToolName>{tool.name}</ToolName>
              </ToolCard>
            ))}
            {toolsData.map((tool, index) => (
              <ToolCard key={`dup-${index}`}>
                <ToolIcon>
                  <FontAwesomeIcon icon={tool.icon} />
                </ToolIcon>
                <ToolName>{tool.name}</ToolName>
              </ToolCard>
            ))}
          </ToolsMarquee>
        </ToolsContainer>
      </Animate>

      <Animate animation={slideInUp}>
        <SectionTitle>Education</SectionTitle>

        <TimelineContainer>
          {educationData.map((item, index) => (
            <TimelineItem 
              key={index} 
              index={index}
              isVisible={visibleItems.has(index)}
              delay={0}
              ref={el => timelineRefs.current[index] = el}
            >
              <TimelineDot index={index}>
                <FontAwesomeIcon icon={faGraduationCap} />
              </TimelineDot>
              {index !== educationData.length - 1 && <TimelineConnector />}

              <TimelineContent>
                <TimelineDate>{item.period}</TimelineDate>
                <TimelineTitle>{item.degree}</TimelineTitle>
                <TimelineSubtitle>{item.institution}</TimelineSubtitle>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </Animate>

      <Animate animation={slideInRight}>
        <SectionTitle>Experience</SectionTitle>

        <TimelineContainer>
          {experienceData.map((item, index) => {
            const refIndex = educationData.length + index;
            return (
              <TimelineItem 
                key={index} 
                index={index}
                isVisible={visibleItems.has(refIndex)}
                delay={0}
                ref={el => timelineRefs.current[refIndex] = el}
              >
                <TimelineDot index={index}>
                  <FontAwesomeIcon icon={faBriefcase} />
                </TimelineDot>
                {index !== experienceData.length - 1 && <TimelineConnector />}

                <TimelineContent>
                  <TimelineDate>{item.period}</TimelineDate>
                  <TimelineTitle>{item.position}</TimelineTitle>
                  <TimelineSubtitle>{item.company}</TimelineSubtitle>
                  <TimelineDescription>{item.description}</TimelineDescription>

                  {item.points && (
                    <PointsList>
                      {item.points.map((point, pointIndex) => (
                        <PointItem key={pointIndex}>
                          <FontAwesomeIcon icon={faCheckCircle} />
                          <span>{point}</span>
                        </PointItem>
                      ))}
                    </PointsList>
                  )}
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </TimelineContainer>
      </Animate>
    </AboutContainer>
  );
};

export default About;
