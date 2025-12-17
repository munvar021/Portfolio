import React, { useState, useEffect, useRef, useContext } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "../../contexts/ThemeContext";
import {
  HeaderContainer,
  Logo,
  Nav,
  NavItem,
  MobileMenuButton,
  MobileActionGroup,
  MobileMenu,
  ThemeToggleButton,
} from "./headerStyles";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const location = useLocation();
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleResize = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (mobileMenuOpen) {
        if (
          (headerRef.current && headerRef.current.contains(event.target)) ||
          (mobileMenuRef.current &&
            mobileMenuRef.current.contains(event.target))
        ) {
          return; // Clicked inside header or mobile menu, do nothing
        }
        setMobileMenuOpen(false); // Clicked outside, close menu
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [scrolled, mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/resume", label: "Resume" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === path ||
      (location.pathname.startsWith(path + "/") && path !== "/")
    );
  };

  return (
    <HeaderContainer scrolled={scrolled} ref={headerRef}>
      <Logo to="/">
        <img src="/favicon.ico" alt="Munvar's Portfolio" />
        <span>Munvar's Portfolio</span>
      </Logo>

      {width > 768 ? (
        <Nav>
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              to={item.path}
              active={isActive(item.path) ? "true" : "false"}
            >
              {item.label}
            </NavItem>
          ))}
          <ThemeToggleButton onClick={toggleTheme}>
            <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
          </ThemeToggleButton>
        </Nav>
      ) : (
        <>
          <MobileActionGroup>
            <ThemeToggleButton onClick={toggleTheme}>
              <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
            </ThemeToggleButton>
            <MobileMenuButton onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
            </MobileMenuButton>
          </MobileActionGroup>

          <MobileMenu open={mobileMenuOpen} ref={mobileMenuRef}>
            <Nav>
              {navItems.map((item) => (
                <NavItem
                  key={item.path}
                  to={item.path}
                  active={isActive(item.path) ? "true" : "false"}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </NavItem>
              ))}
            </Nav>
          </MobileMenu>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
