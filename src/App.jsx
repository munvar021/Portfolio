import React, { useEffect, useState, startTransition } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/layout";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Projects from "./pages/Projects/projects";
import Resume from "./pages/Resume/resume";
import EnhancedResume from "./pages/EnhancedResume/enhancedResume";
import Contact from "./pages/Contact/contact";
import NotFound from "./pages/NotFound/notFound";
import LoadingSpinner from "./components/Spinner/spinner";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";

// WebSocket Setup (if needed)
const socketEnabled = false; // Set to true if WebSockets are required
if (socketEnabled) {
  const socket = new WebSocket("ws://localhost:3000/ws");
  socket.onopen = () => console.log("WebSocket Connected");
  socket.onerror = (error) => console.error("WebSocket Error:", error);
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "projects", element: <Projects /> },
        { path: "resume", element: <Resume /> },
        { path: "resume/enhanced", element: <EnhancedResume /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    },
  }
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading resources or fetching initial data
    const timer = setTimeout(() => {
      startTransition(() => {
        setIsLoading(false);
      });
    }, 1500); // Show spinner for at least 1.5 seconds for better UX

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {isLoading ? <LoadingSpinner /> : <RouterProvider router={router} />}
    </ThemeProvider>
  );
};

export default App;
