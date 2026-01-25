import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Animate from '../../components/Animate/animate';
import { slideInDown, fadeIn } from '../../styles/animations';
import {
  faGithub,
  faReact,
  faNodeJs,
  faJs,
  faHtml5,
  faCss3Alt,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faServer,
  faUserLock,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import {
  ProjectsContainer,
  ProjectHeader,
  ProjectTitle,
  ProjectGrid,
  ProjectCard,
  ProjectImage,
  ProjectOverlay,
  HiddenContent,
  ProjectName,
  ProjectDescription,
  ProjectTech,
  TechTag,
  ProjectLinks,
  ProjectLink,
  Credentials,
} from "./projectsStyles";
import { projects } from "../../data/projectsData";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const projectRefs = useRef([]);
  useEffect(() => {
    const observers = projectRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleProjects(prev => new Set([...prev, index]));
            }, index * 150);
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const getTechIcon = (tech) => {
    switch (tech.toLowerCase()) {
      case "react":
        return <FontAwesomeIcon icon={faReact} />;
      case "html":
        return <FontAwesomeIcon icon={faHtml5} />;
      case "node.js":
        return <FontAwesomeIcon icon={faNodeJs} />;
      case "node js":
        return <FontAwesomeIcon icon={faNodeJs} />;
      case "javascript":
        return <FontAwesomeIcon icon={faJs} />;
      case "css":
        return <FontAwesomeIcon icon={faCss3Alt} />;
      case "bootstrap":
        return <FontAwesomeIcon icon={faBootstrap} />;
      case "api":
        return <FontAwesomeIcon icon={faCogs} />;
      case "rest api calls":
        return <FontAwesomeIcon icon={faServer} />;
      case "mongodb":
        return <FontAwesomeIcon icon={faServer} />;
      default:
        return null;
    }
  };

  const filteredProjects = projects;

  return (
    <ProjectsContainer>
      <Animate animation={slideInDown}>
        <ProjectHeader>
          <ProjectTitle>My Projects</ProjectTitle>
        </ProjectHeader>
      </Animate>

      <Animate animation={fadeIn}>
        <ProjectGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              isVisible={visibleProjects.has(index)}
              delay={index * 0.15}
              ref={el => projectRefs.current[index] = el}
            >
              <ProjectImage src={project.image} alt={project.name} />
              <ProjectOverlay>
                <div>
                  <ProjectName>{project.name}</ProjectName>
                  <ProjectTech>
                    {project.technologies.map((tech) => (
                      <TechTag key={tech}>
                        {getTechIcon(tech)}
                        {tech}
                      </TechTag>
                    ))}
                  </ProjectTech>
                </div>
                <HiddenContent>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  {project.credentials && (
                    <Credentials>
                      <h4>
                        <FontAwesomeIcon icon={faUserLock} /> Demo Credentials
                      </h4>
                      <p>Username: {project.credentials.username}</p>
                      <p>Password: {project.credentials.password}</p>
                    </Credentials>
                  )}
                  <ProjectLinks>
                    <ProjectLink
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-link-type="code"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      Code
                    </ProjectLink>
                    <ProjectLink
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-link-type="demo"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      Demo
                    </ProjectLink>
                  </ProjectLinks>
                </HiddenContent>
              </ProjectOverlay>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Animate>
    </ProjectsContainer>
  );
};

export default Projects;
