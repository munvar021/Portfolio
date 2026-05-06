import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

  :root {
    --bg-primary: #000000;
    --bg-secondary: #050507;
    --bg-tertiary: #0a0a0f;
    --bg-card: #0d0d14;
    --bg-elevated: #111119;

    --accent-cyan: #00D4FF;
    --accent-purple: #7C3AED;
    --accent-gold: #FFB830;
    --accent-pink: #EC4899;
    --accent-green: #00FF88;
    --accent-orange: #FF6B35;

    --text-primary: #FFFFFF;
    --text-secondary: #9CA3AF;
    --text-muted: #4B5563;

    --border-default: rgba(255, 255, 255, 0.06);
    --border-hover: rgba(255, 255, 255, 0.12);
    --border-accent: rgba(0, 212, 255, 0.3);

    --gradient-primary: linear-gradient(135deg, #00D4FF 0%, #7C3AED 100%);
    --gradient-secondary: linear-gradient(135deg, #7C3AED 0%, #EC4899 100%);
    --gradient-gold: linear-gradient(135deg, #FFB830 0%, #FF6B35 100%);
    --gradient-hero: radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.12) 0%, transparent 60%);

    --font-heading: 'Space Grotesk', 'Inter', sans-serif;
    --font-body: 'Inter', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;

    --nav-height: 76px;

    --radius-sm: 6px;
    --radius-md: 12px;
    --radius-lg: 20px;
    --radius-xl: 32px;
    --radius-full: 9999px;

    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-spring: 600ms cubic-bezier(0.34, 1.56, 0.64, 1);

    --shadow-sm: 0 1px 3px rgba(0,0,0,0.5);
    --shadow-md: 0 4px 16px rgba(0,0,0,0.6);
    --shadow-lg: 0 8px 32px rgba(0,0,0,0.7);
    --shadow-card: 0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06);
    --shadow-glow: 0 0 40px rgba(0,212,255,0.2);
    --shadow-glow-purple: 0 0 40px rgba(124,58,237,0.2);

    --z-cursor: 9999;
    --z-header: 100;
    --z-modal: 200;
  }

  @media (max-width: 768px) {
    :root {
      --nav-height: 64px;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    font-size: 16px;
    scroll-behavior: auto;
    -webkit-text-size-adjust: 100%;
    overflow-x: hidden;
  }

  body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-family: var(--font-body);
    font-size: clamp(0.875rem, 1.1vw, 1rem);
    font-weight: 400;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    min-height: 100vh;
    cursor: none;
  }

  @media (max-width: 768px) {
    body {
      cursor: auto;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: 700;
    line-height: 1.1;
    color: var(--text-primary);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img, video {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    cursor: none;
    border: none;
    background: none;
    font-family: inherit;
  }

  @media (max-width: 768px) {
    button {
      cursor: pointer;
    }
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  ul, ol {
    list-style: none;
  }

  canvas {
    display: block;
  }

  ::selection {
    background-color: var(--accent-cyan);
    color: #000000;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-primary);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.1);
    border-radius: var(--radius-full);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--accent-cyan);
  }

  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 clamp(1rem, 5vw, 3rem);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;

export default GlobalStyles;
