import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { projects } from "../../data/projectsData";
import {
  PageHero,
  PageLabel,
  PageTitle,
  Accent,
  PageSubtitle,
  FilterSection,
  FilterBar,
  FilterBtn,
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
  CredentialsBadge,
  ProjectLinks,
  ProjectLink,
} from "./projectsStyles";

const allTags = ["All", "React", "Node JS", "MongoDB", "JavaScript", "API"];

const Projects = () => {
  const [active, setActive] = useState("All");
  const navigate = useNavigate();

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.technologies.includes(active));

  return (
    <>
      <PageHero>
        <div className="container">
          <PageLabel
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Portfolio
          </PageLabel>
          <PageTitle
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Things I've <Accent>Built</Accent>
          </PageTitle>
          <PageSubtitle
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            A collection of projects I've built — exploring ideas, solving real
            problems, and growing as a developer.
          </PageSubtitle>
        </div>
      </PageHero>

      <FilterSection>
        <div className="container">
          <FilterBar>
            {allTags.map((tag) => (
              <FilterBtn
                key={tag}
                $active={active === tag}
                onClick={() => setActive(tag)}
              >
                {tag}
              </FilterBtn>
            ))}
          </FilterBar>
        </div>
      </FilterSection>

      <ProjectsSection>
        <div className="container">
          <AnimatePresence mode="wait">
            <ProjectsGrid
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  layout
                  onClick={() => navigate(`/projects/${project.id}`)}
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
    </>
  );
};

export default Projects;
