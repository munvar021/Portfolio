import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import AppLayout from "./components/Layout/layout";

const Home = lazy(() => import("./pages/Home/home"));
const About = lazy(() => import("./pages/About/about"));
const Projects = lazy(() => import("./pages/Projects/projects"));
const ProjectDetail = lazy(() => import("./pages/Projects/projectDetail"));
const Resume = lazy(() => import("./pages/Resume/resume"));
const Contact = lazy(() => import("./pages/Contact/contact"));
const NotFound = lazy(() => import("./pages/NotFound/notFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/privacyPolicy"));
const TermsOfService = lazy(
  () => import("./pages/TermsOfService/termsOfService"),
);

const Loader = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "#000000",
    }}
  >
    <div
      style={{
        width: 40,
        height: 40,
        border: "2px solid rgba(0,212,255,0.2)",
        borderTop: "2px solid #00D4FF",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }}
    />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
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
        path: "projects/:id",
        element: (
          <SuspenseWrapper>
            <ProjectDetail />
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
        path: "contact",
        element: (
          <SuspenseWrapper>
            <Contact />
          </SuspenseWrapper>
        ),
      },
      {
        path: "privacy",
        element: (
          <SuspenseWrapper>
            <PrivacyPolicy />
          </SuspenseWrapper>
        ),
      },
      {
        path: "terms",
        element: (
          <SuspenseWrapper>
            <TermsOfService />
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

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;
