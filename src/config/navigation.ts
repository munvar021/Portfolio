import {
  faUser,
  faBriefcase,
  faFileLines,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface NavItem {
  to: string;
  label: string;
  icon: IconDefinition;
}

export const navItems: NavItem[] = [
  { to: "#about", label: "About", icon: faUser },
  { to: "#projects", label: "Projects", icon: faBriefcase },
  { to: "#resume", label: "Resume", icon: faFileLines },
  { to: "#contact", label: "Contact", icon: faEnvelope },
];

export const footerNavLinks = [
  { label: "Home", to: "#hero" },
  { label: "About", to: "#about" },
  { label: "Projects", to: "#projects" },
  { label: "Resume", to: "#resume" },
  { label: "Contact", to: "#contact" },
];

export const policyLinks = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
];
