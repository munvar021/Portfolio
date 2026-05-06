import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo.png";
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
  PolicySection,
  FooterBottom,
  Copyright,
  FooterBottomLinks,
  BottomLink,
  FooterCta,
  CtaContent,
  CtaButton,
} from "./footerStyles";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
];

const contactLinks = [
  { label: "Kanigiri, Andhra Pradesh" },
  { label: "munvar021@gmail.com", href: "mailto:munvar021@gmail.com" },
  { label: "+91 9948525819", href: "tel:+919948525819" },
];

const socialLinks = [
  { icon: faGithub, href: "https://github.com/munvar021", label: "GitHub" },
  {
    icon: faLinkedinIn,
    href: "https://www.linkedin.com/in/munvar-khajavali-shaik",
    label: "LinkedIn",
  },
  {
    icon: faInstagram,
    href: "https://www.instagram.com/munvar_khajavali",
    label: "Instagram",
  },
];

const linkGroups = [
  { title: "Navigation", links: navLinks, internal: true },
  { title: "Contact", links: contactLinks, internal: false },
];

const policyLinks = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const [openGroup, setOpenGroup] = useState(null);
  const [policyOpen, setPolicyOpen] = useState(false);
  const ctaRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const ctaInView = useInView(ctaRef, { margin: "-60px", once: false });
  const topInView = useInView(topRef, { margin: "-60px", once: false });
  const bottomInView = useInView(bottomRef, { margin: "-40px", once: false });

  const toggleGroup = (title) =>
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
                Let's create a modern, high-performance web experience together.
              </p>
            </CtaContent>
            <CtaButton to="/contact">
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
                <FooterBrandImage src={logo} alt="Munvar.dev logo" />
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
                        {group.internal ? (
                          <ColumnLink as={Link} to={link.to}>
                            {link.label}
                          </ColumnLink>
                        ) : (
                          <ColumnLink
                            as={link.href ? "a" : "span"}
                            href={link.href || undefined}
                            target={
                              link.href?.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              link.href?.startsWith("http")
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
                <ColumnLink as={Link} to={link.to}>
                  {link.label}
                </ColumnLink>
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
