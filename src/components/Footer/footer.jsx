import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faHeart,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo.png";
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterLogo,
  SocialMediaIcons,
  FooterLinks,
  ContactInfo,
  Copyright,
  FooterGlass,
} from "./footerStyles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterGlass />
      <FooterContent>
        <FooterSection>
          <FooterLogo to="/">
            <img src={logo} alt="Munvar's Portfolio" />
            <span>Munvar's Portfolio</span>
          </FooterLogo>
          <p>
            Creative developer focused on building modern, responsive and
            user-friendly web applications with attention to detail and
            performance.
          </p>
          <SocialMediaIcons>
            <a
              href="https://github.com/munvar021"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/munvar-khajavali-shaik"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://www.instagram.com/munvar_khajavali"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </SocialMediaIcons>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLinks>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>Contact</h3>
          <ContactInfo>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Kanigiri, 523230</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} />
              <span>+91 9948525819</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>munvar021@gmail.com</span>
            </div>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>© {currentYear} Portfolio. All rights reserved.</p>
        <p>
          Made with <FontAwesomeIcon icon={faHeart} /> and{" "}
          <FontAwesomeIcon icon={faCode} />
        </p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
