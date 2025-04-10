import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  ContentWrapper,
  ProjectsContainer,
  ProjectHeader,
  ProjectTitle,
  ProjectGrid,
  ProjectCard,
  CardInner,
  CardFront,
  CardBack,
  ProjectImage,
  ProjectContent,
  BackContent,
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
  const [visibleProjects, setVisibleProjects] = useState(15);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  const getTechIcon = (tech) => {
    switch (tech.toLowerCase()) {
      case "react":
        return <FontAwesomeIcon icon={faReact} />;
      case "html":
        return <FontAwesomeIcon icon={faHtml5} />;
      case "node.js":
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
      default:
        return null;
    }
  };

  return (
    <ContentWrapper>
      <ProjectsContainer>
        <ProjectHeader>
          <ProjectTitle>My Projects</ProjectTitle>
        </ProjectHeader>

        <ProjectGrid>
          {projects.slice(0, visibleProjects).map((project) => (
            <ProjectCard key={project.id}>
              <CardInner className="card-inner">
                <CardFront>
                  <ProjectImage>
                    <img src={project.image} alt={project.name} />
                  </ProjectImage>
                  <ProjectContent>
                    <ProjectName>{project.name}</ProjectName>
                  </ProjectContent>
                </CardFront>
                <CardBack>
                  <BackContent>
                    <ProjectName>{project.name}</ProjectName>

                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>

                    <ProjectTech>
                      {project.technologies.map((tech) => (
                        <TechTag key={tech}>
                          {getTechIcon(tech)}
                          {tech}
                        </TechTag>
                      ))}
                    </ProjectTech>

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
                      >
                        <FontAwesomeIcon icon={faGithub} />
                        Code
                      </ProjectLink>
                      <ProjectLink
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        Demo
                      </ProjectLink>
                    </ProjectLinks>
                  </BackContent>
                </CardBack>
              </CardInner>
            </ProjectCard>
          ))}
        </ProjectGrid>

        {visibleProjects < projects.length && (
          <div className="load-more">
            <button onClick={loadMoreProjects}>Load More Projects</button>
          </div>
        )}
      </ProjectsContainer>
    </ContentWrapper>
  );
};

export default Projects;
