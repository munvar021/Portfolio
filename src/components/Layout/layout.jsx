import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import {
  LayoutContainer,
  MainContent,
  ScrollToTop,
  PageTransition,
} from "./layoutStyles";

const Layout = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsPageTransitioning(true);

    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
      setIsPageTransitioning(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        <PageTransition
          isTransitioning={isPageTransitioning}
          key={location.pathname}
        >
          <Outlet />
        </PageTransition>
      </MainContent>
      <Footer />

      {showScrollButton && (
        <ScrollToTop onClick={scrollToTop} aria-label="Scroll to top">
          <FontAwesomeIcon icon={faArrowUp} />
        </ScrollToTop>
      )}
    </LayoutContainer>
  );
};

export default Layout;
