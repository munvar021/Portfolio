import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faArrowRight,
  faUser,
  faBriefcase,
  faFileLines,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import {
  Nav,
  Logo,
  BrandImage,
  NavLinks,
  NavItem,
  NavActions,
  CtaButton,
  MobileMenuButton,
  Backdrop,
  Drawer,
  DrawerHeader,
  DrawerLogo,
  DrawerClose,
  DrawerDivider,
  DrawerNavLabel,
  DrawerNavItems,
  DrawerNavItem,
  DrawerNavItemIcon,
  DrawerCta,
} from "./headerStyles";

const navItems = [
  { to: "/about", label: "About", icon: faUser },
  { to: "/projects", label: "Projects", icon: faBriefcase },
  { to: "/resume", label: "Resume", icon: faFileLines },
  { to: "/contact", label: "Contact", icon: faEnvelope },
];

const FOCUSABLE_SELECTORS =
  'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])';

const drawerVariants = {
  closed: { x: "100%" },
  open: { x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { x: "100%", transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

const backdropVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuBtnRef = useRef(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const drawer = drawerRef.current;
    if (!drawer) return;

    const focusableEls = drawer.querySelectorAll(FOCUSABLE_SELECTORS);
    const first = focusableEls[0];
    const last = focusableEls[focusableEls.length - 1];
    first?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuBtnRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    menuBtnRef.current?.focus();
  };

  return (
    <>
      <Nav
        className={scrolled ? "scrolled" : ""}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Logo to="/" aria-label="Munvar.dev">
          <BrandImage src={logo} alt="" />
        </Logo>

        <NavLinks>
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavItem to={to} end={to === "/"}>
                {label}
              </NavItem>
            </li>
          ))}
        </NavLinks>

        <NavActions>
          <CtaButton to="/contact">Hire Me</CtaButton>
          <MobileMenuButton
            ref={menuBtnRef}
            $open={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-drawer"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </MobileMenuButton>
        </NavActions>
      </Nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <Backdrop
              key="backdrop"
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="exit"
              onClick={closeMenu}
            />

            <Drawer
              key="drawer"
              ref={drawerRef}
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="exit"
            >
              <DrawerHeader>
                <DrawerLogo to="/" aria-label="Munvar.dev" onClick={closeMenu}>
                  <BrandImage src={logo} alt="" />
                </DrawerLogo>
                <DrawerClose aria-label="Close menu" onClick={closeMenu}>
                  <FontAwesomeIcon icon={faXmark} />
                </DrawerClose>
              </DrawerHeader>

              <DrawerDivider />

              <DrawerNavLabel>Navigation</DrawerNavLabel>

              <DrawerNavItems>
                {navItems.map(({ to, label, icon }) => (
                  <DrawerNavItem
                    key={to}
                    to={to}
                    end={to === "/"}
                    onClick={closeMenu}
                  >
                    <DrawerNavItemIcon>
                      <FontAwesomeIcon icon={icon} />
                    </DrawerNavItemIcon>
                    {label}
                  </DrawerNavItem>
                ))}
              </DrawerNavItems>

              <DrawerCta to="/contact" onClick={closeMenu}>
                Hire Me
                <FontAwesomeIcon icon={faArrowRight} />
              </DrawerCta>
            </Drawer>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
