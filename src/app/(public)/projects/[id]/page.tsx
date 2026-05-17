"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { projects } from "@/data/projects";
import ScrollReveal from "@/components/ui/scroll-reveal";
import {
  DetailHero,
  HeroGrid,
  HeroContent,
  HeroImageWrap,
  HeroMeta,
  CategoryBadge,
  YearBadge,
  FeaturedPill,
  ProjectTitle,
  ProjectDesc,
  TechRow,
  TechTag,
  CtaRow,
  DemoBtn,
  GithubBtn,
  ImageOverlay,
  ContentSection,
  ContentGrid,
  MainContent,
  ContentTitle,
  FeaturesList,
  FeatureItem,
  Sidebar,
  InfoCard,
  InfoCardTitle,
  InfoRow,
  InfoIcon,
  InfoText,
  InfoLabel,
  InfoValue,
  CredentialsCard,
  CredTitle,
  CredRow,
  CredLabel,
  CredValue,
  NavSection,
  NavSectionTitle,
  NavGrid,
  NavCard,
  NavArrow,
  NavCardContent,
  NavCardLabel,
  NavCardTitle,
} from "./project-detail.styles";

const categoryColors: Record<
  string,
  { bg: string; border: string; color: string }
> = {
  "Full Stack": {
    bg: "rgba(161, 18, 18, 0.08)",
    border: "rgba(161, 18, 18, 0.2)",
    color: "var(--accent-cyan)",
  },
  Frontend: {
    bg: "rgba(92, 11, 11, 0.08)",
    border: "rgba(92, 11, 11, 0.2)",
    color: "var(--accent-cyan)",
  },
  Game: {
    bg: "rgba(161, 18, 18, 0.08)",
    border: "rgba(161, 18, 18, 0.2)",
    color: "var(--accent-green)",
  },
};

const ProjectDetail = () => {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const project = projects.find((p) => p.id === Number(id));

  useEffect(() => {
    if (!project) {
      router.replace("/projects");
    }
  }, [project, router]);

  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const catStyle = categoryColors[project.category] || categoryColors.Frontend;

  return (
    <>
      <DetailHero>
        <div className="container">
          <HeroGrid>
            <HeroContent>
              <HeroMeta>
                <CategoryBadge
                  style={{
                    background: catStyle.bg,
                    borderColor: catStyle.border,
                    color: catStyle.color,
                  }}
                >
                  <i className="fa-solid fa-layer-group" />
                  {project.category}
                </CategoryBadge>
                <YearBadge>
                  <i className="fa-regular fa-calendar" />
                  {project.year}
                </YearBadge>
                {project.featured && (
                  <FeaturedPill>
                    <i className="fa-solid fa-star" /> Featured
                  </FeaturedPill>
                )}
              </HeroMeta>

              <ProjectTitle
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {project.name}
              </ProjectTitle>

              <ProjectDesc
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                {project.description}
              </ProjectDesc>

              <TechRow
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {(project.technologies || []).map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechRow>

              <CtaRow
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <DemoBtn
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square" /> Live
                  Demo
                </DemoBtn>
                <GithubBtn
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github" /> View Code
                </GithubBtn>
              </CtaRow>
            </HeroContent>

            <HeroImageWrap
              initial={{ opacity: 0, scale: 0.96, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                delay: 0.25,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img src={project.image} alt={project.name} loading="eager" />
              <ImageOverlay />
            </HeroImageWrap>
          </HeroGrid>
        </div>
      </DetailHero>

      <ContentSection>
        <div className="container">
          <ContentGrid>
            <MainContent>
              <ContentTitle>
                Key <span>Features</span>
              </ContentTitle>
              <FeaturesList>
                {(project.features || []).map((feat, i) => (
                  <ScrollReveal key={i} as={FeatureItem} delay={i * 0.07}>
                    <i className="fa-solid fa-circle-check" />
                    {feat}
                  </ScrollReveal>
                ))}
              </FeaturesList>
            </MainContent>

            <Sidebar>
              <ScrollReveal as={InfoCard} delay={0.1}>
                <InfoCardTitle>Project Info</InfoCardTitle>

                <InfoRow>
                  <InfoIcon>
                    <i className="fa-solid fa-user-tie" />
                  </InfoIcon>
                  <InfoText>
                    <InfoLabel>Role</InfoLabel>
                    <InfoValue>{project.role}</InfoValue>
                  </InfoText>
                </InfoRow>

                <InfoRow>
                  <InfoIcon>
                    <i className="fa-regular fa-calendar" />
                  </InfoIcon>
                  <InfoText>
                    <InfoLabel>Year</InfoLabel>
                    <InfoValue>{project.year}</InfoValue>
                  </InfoText>
                </InfoRow>

                <InfoRow>
                  <InfoIcon>
                    <i className="fa-solid fa-tag" />
                  </InfoIcon>
                  <InfoText>
                    <InfoLabel>Category</InfoLabel>
                    <InfoValue>{project.category}</InfoValue>
                  </InfoText>
                </InfoRow>

                <InfoRow>
                  <InfoIcon>
                    <i className="fa-solid fa-code-branch" />
                  </InfoIcon>
                  <InfoText>
                    <InfoLabel>Stack</InfoLabel>
                    <InfoValue>
                      {(project.technologies || []).join(", ")}
                    </InfoValue>
                  </InfoText>
                </InfoRow>

                <InfoRow>
                  <InfoIcon>
                    <i className="fa-solid fa-globe" />
                  </InfoIcon>
                  <InfoText>
                    <InfoLabel>Live</InfoLabel>
                    <InfoValue>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--accent-cyan)" }}
                      >
                        View Demo
                      </a>
                    </InfoValue>
                  </InfoText>
                </InfoRow>

                <InfoRow>
                  <InfoIcon>
                    <i className="fa-brands fa-github" />
                  </InfoIcon>
                  <InfoText>
                    <InfoLabel>Source</InfoLabel>
                    <InfoValue>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--accent-cyan)" }}
                      >
                        GitHub Repo
                      </a>
                    </InfoValue>
                  </InfoText>
                </InfoRow>
              </ScrollReveal>

              {project.credentials && (
                <ScrollReveal as={CredentialsCard} delay={0.2}>
                  <CredTitle>
                    <i className="fa-solid fa-key" /> Demo Credentials
                  </CredTitle>
                  <CredRow>
                    <CredLabel>Username</CredLabel>
                    <CredValue>{project.credentials.username}</CredValue>
                  </CredRow>
                  <CredRow>
                    <CredLabel>Password</CredLabel>
                    <CredValue>{project.credentials.password}</CredValue>
                  </CredRow>
                </ScrollReveal>
              )}
            </Sidebar>
          </ContentGrid>
        </div>
      </ContentSection>

      <NavSection>
        <div className="container">
          <NavSectionTitle>More Projects</NavSectionTitle>
          <NavGrid>
            {prevProject ? (
              <NavCard to={`/projects/${prevProject.id}`}>
                <NavArrow>
                  <i className="fa-solid fa-arrow-left" />
                </NavArrow>
                <NavCardContent>
                  <NavCardLabel>Previous</NavCardLabel>
                  <NavCardTitle>{prevProject.name}</NavCardTitle>
                </NavCardContent>
              </NavCard>
            ) : (
              <div />
            )}

            {nextProject ? (
              <NavCard to={`/projects/${nextProject.id}`} $align="right">
                <NavArrow>
                  <i className="fa-solid fa-arrow-right" />
                </NavArrow>
                <NavCardContent>
                  <NavCardLabel>Next</NavCardLabel>
                  <NavCardTitle>{nextProject.name}</NavCardTitle>
                </NavCardContent>
              </NavCard>
            ) : (
              <div />
            )}
          </NavGrid>
        </div>
      </NavSection>
    </>
  );
};

export default ProjectDetail;
