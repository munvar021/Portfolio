export const stackRows = [
  {
    label: "Frontend & Backend",
    direction: "left",
    items: [
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css3", iconClass: "fa-brands fa-css3-alt" },
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
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
      {
        name: "VS Code",
        slug: "vscode",
        iconSrc: "/images/icons/vscode.svg",
      },
      { name: "NPM", slug: "npm" },
      { name: "Bootstrap", slug: "bootstrap" },
      { name: "Figma", slug: "figma" },
      {
        name: "Microsoft Excel",
        slug: "microsoft-excel",
        iconClass: "fa-solid fa-file-excel",
      },
      {
        name: "Microsoft Word",
        slug: "microsoft-word",
        iconClass: "fa-solid fa-file-word",
      },
      {
        name: "Microsoft PowerPoint",
        slug: "microsoft-powerpoint",
        iconClass: "fa-solid fa-file-powerpoint",
      },
      {
        name: "Microsoft Outlook",
        slug: "microsoft-outlook",
        iconClass: "fa-solid fa-envelope-open-text",
      },
    ],
  },
] as const;
