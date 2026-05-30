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
  { name: "MySQL", icon: "fa-solid fa-database" },
  { name: "MongoDB", icon: "fa-solid fa-database" },
  { name: "Git", icon: "fa-brands fa-git-alt" },
  { name: "GitHub", icon: "fa-brands fa-github" },
  { name: "VS Code", iconSrc: "/images/icons/vscode.svg" },
  { name: "NPM", icon: "fa-brands fa-npm" },
  { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
  { name: "Figma", icon: "fa-brands fa-figma" },
  { name: "REST APIs", icon: "fa-solid fa-plug" },
  { name: "MS Office", icon: "fa-brands fa-windows" },
  { name: "Microsoft Excel", icon: "fa-solid fa-file-excel" },
  { name: "Microsoft Word", icon: "fa-solid fa-file-word" },
  { name: "Microsoft PowerPoint", icon: "fa-solid fa-file-powerpoint" },
  { name: "Microsoft Outlook", icon: "fa-solid fa-envelope-open-text" },
] as const;

export const skillCategories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
] as const;
