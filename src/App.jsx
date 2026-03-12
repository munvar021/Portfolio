import React, { lazy, Suspense, useContext, useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/Layout/layout";
import Spinner from "./components/Spinner/spinner";
import ThemeContext, { ThemeProvider } from "./contexts/ThemeContext";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import darkTheme from "./styles/darkTheme";
import lightTheme from "./styles/lightTheme";

const Home = lazy(() => import("./pages/Home/home"));
const About = lazy(() => import("./pages/About/about"));
const Projects = lazy(() => import("./pages/Projects/projects"));
const Resume = lazy(() => import("./pages/Resume/resume"));
const EnhancedResume = lazy(
  () => import("./pages/EnhancedResume/enhancedResume"),
);
const Contact = lazy(() => import("./pages/Contact/contact"));
const NotFound = lazy(() => import("./pages/NotFound/notFound"));

const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<Spinner />}>{children}</Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <SuspenseWrapper>
            <Home />
          </SuspenseWrapper>
        ),
      },
      {
        path: "about",
        element: (
          <SuspenseWrapper>
            <About />
          </SuspenseWrapper>
        ),
      },
      {
        path: "projects",
        element: (
          <SuspenseWrapper>
            <Projects />
          </SuspenseWrapper>
        ),
      },
      {
        path: "resume",
        element: (
          <SuspenseWrapper>
            <Resume />
          </SuspenseWrapper>
        ),
      },
      {
        path: "enhanced-resume",
        element: (
          <SuspenseWrapper>
            <EnhancedResume />
          </SuspenseWrapper>
        ),
      },
      {
        path: "contact",
        element: (
          <SuspenseWrapper>
            <Contact />
          </SuspenseWrapper>
        ),
      },
      {
        path: "*",
        element: (
          <SuspenseWrapper>
            <NotFound />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]);

const AppWithTheme = () => {
  const { theme } = useContext(ThemeContext);
  const currentTheme = useMemo(
    () => (theme === "dark" ? darkTheme : lightTheme),
    [theme],
  );

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </StyledThemeProvider>
  );
};

const App = () => (
  <ThemeProvider>
    <AppWithTheme />
  </ThemeProvider>
);

export default App;
