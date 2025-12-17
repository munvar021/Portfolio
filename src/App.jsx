import React, { lazy, Suspense, useContext } from "react";
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
const EnhancedResume = lazy(() =>
  import("./pages/EnhancedResume/enhancedResume")
);
const Contact = lazy(() => import("./pages/Contact/contact"));
const NotFound = lazy(() => import("./pages/NotFound/notFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Spinner />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "projects",
        element: (
          <Suspense fallback={<Spinner />}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "resume",
        element: (
          <Suspense fallback={<Spinner />}>
            <Resume />
          </Suspense>
        ),
      },
      {
        path: "enhanced-resume",
        element: (
          <Suspense fallback={<Spinner />}>
            <EnhancedResume />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Spinner />}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Spinner />}>
        <NotFound />
      </Suspense>
    ),
  },
]);

const AppWithTheme = () => {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme === "dark" ? darkTheme : lightTheme;

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
