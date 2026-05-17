export const stackRows = [
  {
    label: "Frontend & Backend",
    direction: "left",
    items: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "TypeScript", slug: "typescript" },
      { name: "JavaScript", slug: "javascript" },
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css3", iconClass: "fa-brands fa-css3-alt" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express", slug: "express" },
      { name: "Python", slug: "python" },
    ],
  },
  {
    label: "Database & Tools",
    direction: "right",
    items: [
      { name: "MySQL", slug: "mysql" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "Figma", slug: "figma" },
      { name: "Bootstrap", slug: "bootstrap" },
      { name: "NPM", slug: "npm" },
      {
        name: "VS Code",
        slug: "visualstudiocode",
        iconClass: "fa-solid fa-code",
      },
    ],
  },
] as const;
