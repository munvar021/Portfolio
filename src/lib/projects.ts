import type { Project } from "@/data/projects";

export type ProjectCardVariant = "feature" | "wide" | "tall" | "compact";

export const PROJECT_FILTERS = [
  "All",
  "React",
  "Node JS",
  "MongoDB",
  "JavaScript",
  "API",
] as const;

const PROJECT_CARD_VARIANTS: ProjectCardVariant[] = [
  "feature",
  "wide",
  "compact",
  "compact",
  "wide",
  "tall",
];

export type ProjectFilter = (typeof PROJECT_FILTERS)[number];

export const getProjectCardVariant = (index: number): ProjectCardVariant =>
  PROJECT_CARD_VARIANTS[index % PROJECT_CARD_VARIANTS.length];

export const filterProjectsByTag = (projects: Project[], activeTag: string) =>
  activeTag === "All"
    ? projects
    : projects.filter((project) => project.technologies.includes(activeTag));
