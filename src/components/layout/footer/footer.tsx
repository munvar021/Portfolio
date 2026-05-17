"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  FooterWrapper,
  FooterTop,
  BrandColumn,
  FooterLogo,
  FooterBrandImage,
  FooterTagline,
  SocialLinks,
  SocialLink,
  FooterColumn,
  ColumnTitle,
  ChevronIcon,
  ColumnLinks,
  ColumnLink,
  ColumnNavLink,
  PolicySection,
  FooterBottom,
  Copyright,
  FooterBottomLinks,
  BottomLink,
  FooterCta,
  CtaContent,
  CtaButton,
} from "./footer.styles";
import { footerNavLinks, policyLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";

const contactLinks = [
  { label: siteConfig.location },
  { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
  {
    label: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
];

const socialLinks = [
  { icon: faGithub, href: siteConfig.socials.github, label: "GitHub" },
  { icon: faLinkedinIn, href: siteConfig.socials.linkedin, label: "LinkedIn" },
  { icon: faInstagram, href: siteConfig.socials.instagram, label: "Instagram" },
];

const linkGroups = [
  { title: "Navigation", links: footerNavLinks, internal: true },
  { title: "Contact", links: contactLinks, internal: false },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [policyOpen, setPolicyOpen] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { margin: "-60px", once: false });
  const topInView = useInView(topRef, { margin: "-60px", once: false });
  const bottomInView = useInView(bottomRef, { margin: "-40px", once: false });

  const toggleGroup = (title: string) =>
    setOpenGroup(openGroup === title ? null : title);

  return (
    <FooterWrapper>
      <div className="container">
        <motion.div
          ref={ctaRef}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <FooterCta>
            <CtaContent>
              <h3>Ready to Build Something?</h3>
              <p>
                Let&apos;s create a modern, high-performance web experience
                together.
              </p>
            </CtaContent>
            <CtaButton to="#contact">
              Get In Touch <FontAwesomeIcon icon={faArrowRight} />
            </CtaButton>
          </FooterCta>
        </motion.div>

        <FooterTop ref={topRef}>
          <motion.div
            animate={topInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <BrandColumn>
              <FooterLogo>
                <FooterBrandImage
                  src="/images/logo.png"
                  alt="Munvar.dev logo"
                />
              </FooterLogo>
              <FooterTagline>
                Full Stack Web Developer passionate about building modern,
                scalable, and user-friendly web applications with attention to
                detail and performance.
              </FooterTagline>
              <SocialLinks>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    animate={
                      topInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.15 + index * 0.06 }}
                  >
                    <SocialLink
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <FontAwesomeIcon icon={social.icon} />
                    </SocialLink>
                  </motion.div>
                ))}
              </SocialLinks>
            </BrandColumn>
          </motion.div>

          {linkGroups.map((group, groupIndex) => {
            const groupId = `footer-group-${group.title.toLowerCase().replace(/\s+/g, "-")}`;
            const isOpen = openGroup === group.title;

            return (
              <motion.div
                key={group.title}
                animate={
                  topInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                initial={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + groupIndex * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <FooterColumn>
                  <ColumnTitle
                    aria-expanded={isOpen}
                    aria-controls={groupId}
                    onClick={() => toggleGroup(group.title)}
                  >
                    {group.title}
                    <ChevronIcon $isOpen={isOpen}>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </ChevronIcon>
                  </ColumnTitle>
                  <ColumnLinks id={groupId} $isOpen={isOpen}>
                    {group.links.map((link) => (
                      <li key={link.label}>
                        {group.internal && "to" in link ? (
                          <ColumnNavLink to={link.to!}>
                            {link.label}
                          </ColumnNavLink>
                        ) : (
                          <ColumnLink
                            as={"href" in link && link.href ? "a" : "span"}
                            href={"href" in link ? link.href : undefined}
                            target={
                              "href" in link && link.href?.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              "href" in link && link.href?.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {link.label}
                          </ColumnLink>
                        )}
                      </li>
                    ))}
                  </ColumnLinks>
                </FooterColumn>
              </motion.div>
            );
          })}
        </FooterTop>

        <PolicySection>
          <ColumnTitle
            aria-expanded={policyOpen}
            aria-controls="footer-policies"
            onClick={() => setPolicyOpen(!policyOpen)}
          >
            Policies
            <ChevronIcon $isOpen={policyOpen}>
              <FontAwesomeIcon icon={faChevronDown} />
            </ChevronIcon>
          </ColumnTitle>
          <ColumnLinks id="footer-policies" $isOpen={policyOpen}>
            {policyLinks.map((link) => (
              <li key={link.label}>
                <ColumnNavLink to={link.to}>{link.label}</ColumnNavLink>
              </li>
            ))}
          </ColumnLinks>
        </PolicySection>

        <motion.div
          ref={bottomRef}
          animate={bottomInView ? { opacity: 1 } : { opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <FooterBottom>
            <Copyright>
              &copy; {year} Munvar Khajavali. All rights reserved.
            </Copyright>
            <FooterBottomLinks>
              {policyLinks.map((link) => (
                <BottomLink key={link.label} to={link.to}>
                  {link.label}
                </BottomLink>
              ))}
            </FooterBottomLinks>
          </FooterBottom>
        </motion.div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
