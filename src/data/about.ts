import {
  faWindows,
  faGitAlt,
  faFigma,
  faBootstrap,
  faNpm,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faServer, faCode } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: string;
}

export interface ToolData {
  name: string;
  icon: IconDefinition;
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
}

export interface Experience {
  period: string;
  position: string;
  company: string;
  description: string;
  points: string[];
}

export const skillsData: Skill[] = [
  { name: "React.js", icon: "faReact", level: 95, category: "Frontend" },
  { name: "JavaScript", icon: "faJs", level: 92, category: "Frontend" },
  { name: "HTML5", icon: "faHtml5", level: 98, category: "Frontend" },
  { name: "CSS3", icon: "faCss3Alt", level: 90, category: "Frontend" },
  { name: "Node.js", icon: "faNodeJs", level: 85, category: "Backend" },
  { name: "MySQL", icon: "faDatabase", level: 80, category: "Database" },
  { name: "MongoDB", icon: "faDatabase", level: 80, category: "Database" },
  { name: "Python", icon: "faPython", level: 75, category: "Backend" },
  {
    name: "Responsive Design",
    icon: "faMobile",
    level: 95,
    category: "Frontend",
  },
];

export const toolsData: ToolData[] = [
  { name: "Git", icon: faGitAlt },
  { name: "Figma", icon: faFigma },
  { name: "VS Code", icon: faCode },
  { name: "Bootstrap", icon: faBootstrap },
  { name: "MS Office", icon: faWindows },
  { name: "NPM", icon: faNpm },
  { name: "GitHub", icon: faGithub },
  { name: "RESTful APIs", icon: faServer },
];

export const educationData: Education[] = [
  {
    period: "2021 - 2025",
    degree: "B.Tech, Electronics and Communication Engineering",
    institution: "Bharath Institute of Higher Education and Research, Chennai",
  },
  {
    period: "2019 - 2021",
    degree: "Intermediate (MPC)",
    institution: "Sri Pratibha Junior College, Pernamitta",
  },
  {
    period: "2018 - 2019",
    degree: "Secondary School",
    institution: "Z P High School, Neredupalli",
  },
];

export const experienceData: Experience[] = [
  {
    period: "Dec 05, 2024 - Apr 05, 2025",
    position: "Full Stack Web Developer Intern",
    company: "Aptitude Guru Hem",
    description:
      "As a Full Stack Web Developer Intern at Aptitude Guru Hem, I contribute to the design and development of dynamic, user-friendly web applications. My role involves both frontend and backend development, ensuring high-performance and scalable solutions.",
    points: [
      "CollegeGuru: Developed an intuitive UI for a college recommendation platform, improving accessibility and user experience while optimizing backend workflows for seamless data management.",
      "Quizzy: Built an interactive quiz-based application, enhancing engagement and usability.",
      "Recruitment Management System: Designed and optimized backend workflows to streamline recruitment processes and improve scalability.",
    ],
  },
];
