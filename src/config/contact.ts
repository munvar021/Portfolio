import { siteConfig } from "./site";

export const contactInfo = [
  { icon: "fa-envelope", label: "Email", value: siteConfig.email },
  { icon: "fa-phone", label: "Phone", value: siteConfig.phone },
  { icon: "fa-location-dot", label: "Location", value: siteConfig.location },
  { icon: "fa-clock", label: "Response Time", value: "Within 24 hours" },
] as const;

export const socialLinks = [
  {
    icon: "fa-brands fa-github",
    label: "GitHub",
    href: siteConfig.socials.github,
  },
  {
    icon: "fa-brands fa-linkedin-in",
    label: "LinkedIn",
    href: siteConfig.socials.linkedin,
  },
  {
    icon: "fa-brands fa-instagram",
    label: "Instagram",
    href: siteConfig.socials.instagram,
  },
] as const;
