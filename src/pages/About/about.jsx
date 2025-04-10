import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faDownload,
  faEnvelope,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  ContentWrapper,
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
  SkillsGrid,
  SkillCard,
  SkillIcon,
  SkillName,
  SkillLevel,
  SkillLevelBar,
  SkillLevelFill,
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
import resumePdf from "../../assets/resume.pdf";

const About = () => {
  const toolsRef = useRef(null);

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Munvar Khajavali Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleAnimation = () => {
      if (!toolsRef.current) return;

      const marqueeElements = toolsRef.current.children;
      const totalWidth = [...marqueeElements].reduce(
        (acc, el) => acc + el.offsetWidth,
        0
      );

      if (totalWidth > 0) {
        const duration = totalWidth / 50;
        [...marqueeElements].forEach((el) => {
          el.style.animationDuration = `${duration}s`;
        });
      }
    };

    handleAnimation();
    window.addEventListener("resize", handleAnimation);

    return () => {
      window.removeEventListener("resize", handleAnimation);
    };
  }, []);

  return (
    <AboutContainer>
      <ContentWrapper>
        <AboutIntro>
          <AboutImageWrapper>
            <AboutImage
              src="https://res.cloudinary.com/dnkjgw2ti/image/upload/v1742743378/Portfolio/yya04udakci88ryejr4o.jpg"
              alt="Professional profile"
            />
          </AboutImageWrapper>

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
        </AboutIntro>
      </ContentWrapper>

      <ContentWrapper>
        <SectionTitle>My Skills</SectionTitle>

        <SkillsContainer>
          <SkillsGrid>
            {skillsData.map((skill, index) => (
              <SkillCard
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <SkillIcon>
                  <FontAwesomeIcon icon={skill.icon} />
                </SkillIcon>
                <SkillName>{skill.name}</SkillName>
                <SkillLevel>
                  <SkillLevelBar>
                    <SkillLevelFill
                      style={{ width: 0 }}
                      ref={(el) => {
                        if (el) {
                          setTimeout(() => {
                            el.style.width = `${skill.level}%`;
                          }, 300 + index * 100);
                        }
                      }}
                    />
                  </SkillLevelBar>
                  <span>{skill.level}%</span>
                </SkillLevel>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsContainer>
      </ContentWrapper>

      <ContentWrapper>
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
      </ContentWrapper>

      <ContentWrapper>
        <SectionTitle>Education</SectionTitle>

        <TimelineContainer>
          {educationData.map((item, index) => (
            <TimelineItem
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <TimelineDot>
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
      </ContentWrapper>

      <ContentWrapper>
        <SectionTitle>Experience</SectionTitle>

        <TimelineContainer>
          {experienceData.map((item, index) => (
            <TimelineItem
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <TimelineDot>
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
          ))}
        </TimelineContainer>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;
