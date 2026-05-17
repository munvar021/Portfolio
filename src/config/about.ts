export const skillIconMap: Record<string, string> = {
  faReact: "fa-brands fa-react",
  faJs: "fa-brands fa-js",
  faHtml5: "fa-brands fa-html5",
  faCss3Alt: "fa-brands fa-css3-alt",
  faNodeJs: "fa-brands fa-node-js",
  faPython: "fa-brands fa-python",
  faDatabase: "fa-solid fa-database",
  faMobile: "fa-solid fa-mobile-screen",
};

export const tools = [
  { name: "Git", icon: "fa-brands fa-git-alt" },
  { name: "GitHub", icon: "fa-brands fa-github" },
  { name: "Figma", icon: "fa-brands fa-figma" },
  { name: "VS Code", icon: "fa-solid fa-code" },
  { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
  { name: "NPM", icon: "fa-brands fa-npm" },
  { name: "REST APIs", icon: "fa-solid fa-plug" },
  { name: "MS Office", icon: "fa-brands fa-windows" },
] as const;

export const skillCategories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
] as const;
