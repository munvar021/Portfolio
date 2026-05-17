"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import Header from "../header/header";
import Footer from "../footer/footer";
import Cursor from "@/components/shared/cursor";
import { LayoutWrapper, Main, ScrollTopBtn } from "./app-layout.styles";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [showTop, setShowTop] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);
  const currentPathnameRef = useRef(pathname);
  const scrollPositionsRef = useRef<Record<string, number>>({});
  const isPopNavigationRef = useRef(false);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      setShowTop(scroll > 480);
      scrollPositionsRef.current[currentPathnameRef.current] = scroll;
    });

    const handlePopState = () => {
      isPopNavigationRef.current = true;
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
      window.removeEventListener("popstate", handlePopState);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useLayoutEffect(() => {
    const targetScroll = isPopNavigationRef.current
      ? (scrollPositionsRef.current[pathname] ?? 0)
      : 0;
    currentPathnameRef.current = pathname;

    const restoreScroll = () => {
      const root = document.documentElement;
      const previousScrollBehavior = root.style.scrollBehavior;

      root.style.scrollBehavior = "auto";
      window.scrollTo({ top: targetScroll, left: 0, behavior: "auto" });
      if (lenisRef.current) {
        lenisRef.current.scrollTo(targetScroll, { immediate: true });
      }

      requestAnimationFrame(() => {
        root.style.scrollBehavior = previousScrollBehavior;
      });
    };

    restoreScroll();
    requestAnimationFrame(restoreScroll);

    isPopNavigationRef.current = false;
  }, [pathname]);

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <LayoutWrapper>
      <Cursor />
      <Header />
      <Main>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </Main>
      <Footer />

      <AnimatePresence>
        {showTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <ScrollTopBtn
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <i className="fa-solid fa-arrow-up" />
            </ScrollTopBtn>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutWrapper>
  );
};

export default AppLayout;
