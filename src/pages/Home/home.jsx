import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Animate from "../../components/Animate/animate";
import { slideInLeft, slideInRight } from "../../styles/animations";
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import coder from "../../assets/coder.jpeg";
import {
  HomeContainer,
  IntroContent,
  Greeting,
  Name,
  Profession,
  Description,
  CTAButtons,
  PrimaryButton,
  SecondaryButton,
  ImageContainer,
  ProfileImage,
  TypedText,
  SocialLinks,
  SocialIcon,
} from "./homeStyles";

const Home = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = useMemo(
    () => [
      "Full Stack Web Developer",
      "Frontend Developer",
      "Backend Developer",
      "Problem Solver",
    ],
    []
  );
  const deletingSpeed = 100;
  const pauseTime = 1000;

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % roles.length;
      const fullText = roles[currentIndex];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? deletingSpeed : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <HomeContainer>
      <Animate animation={slideInLeft}>
        <IntroContent>
          <Greeting>👋 Hello There</Greeting>
          <Name>
            I'm <span>Munvar</span>
          </Name>
          <Profession>
            I'm a <TypedText>{text}</TypedText>
          </Profession>
          <Description>
            Welcome to my digital space! I'm a passionate Full Stack Web
            Developer with expertise in ReactJS, Node.js, and SQL. I bring a
            problem-solving mindset to the world of web development. From
            crafting seamless frontend experiences to optimizing backend
            systems, I specialize in building scalable, dynamic, and intuitive
            applications. Explore my projects and experience the power of
            innovation in action!
          </Description>

          <CTAButtons>
            <Link to="/projects">
              <PrimaryButton>View Projects</PrimaryButton>
            </Link>
            <Link to="/contact">
              <SecondaryButton>Contact Me</SecondaryButton>
            </Link>
          </CTAButtons>

          <SocialLinks>
            <SocialIcon
              as={Link}
              to="https://www.linkedin.com/in/munvar-khajavali-shaik"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </SocialIcon>
            <SocialIcon
              as={Link}
              to="https://github.com/munvar021"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </SocialIcon>
            <SocialIcon
              as={Link}
              to="https://www.instagram.com/munvar_khajavali"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </SocialIcon>
          </SocialLinks>
        </IntroContent>
      </Animate>

      <Animate animation={slideInRight}>
        <ImageContainer>
          <ProfileImage src={coder} alt="Munvar" />
        </ImageContainer>
      </Animate>
    </HomeContainer>
  );
};

export default Home;
