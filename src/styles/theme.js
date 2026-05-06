const theme = {
  colors: {
    bg: {
      primary: "#000000",
      secondary: "#050507",
      tertiary: "#0a0a0f",
      card: "#0d0d14",
      elevated: "#111119",
      glass: "rgba(255, 255, 255, 0.03)",
    },
    accent: {
      cyan: "#00D4FF",
      purple: "#7C3AED",
      gold: "#FFB830",
      pink: "#EC4899",
      green: "#00FF88",
      orange: "#FF6B35",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#9CA3AF",
      muted: "#4B5563",
    },
    border: {
      default: "rgba(255, 255, 255, 0.06)",
      hover: "rgba(255, 255, 255, 0.12)",
      accent: "rgba(0, 212, 255, 0.3)",
      purple: "rgba(124, 58, 237, 0.3)",
    },
    gradient: {
      primary: "linear-gradient(135deg, #00D4FF 0%, #7C3AED 100%)",
      secondary: "linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)",
      gold: "linear-gradient(135deg, #FFB830 0%, #FF6B35 100%)",
      green: "linear-gradient(135deg, #00FF88 0%, #00D4FF 100%)",
      hero: "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.12) 0%, transparent 60%)",
      card: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
    },
  },
  typography: {
    fontHeading: "'Space Grotesk', 'Inter', sans-serif",
    fontBody: "'Inter', sans-serif",
    fontMono: "'JetBrains Mono', monospace",
  },
  breakpoints: {
    xs: "375px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  radius: {
    sm: "6px",
    md: "12px",
    lg: "20px",
    xl: "32px",
    full: "9999px",
  },
  transitions: {
    fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    base: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "500ms cubic-bezier(0.4, 0, 0.2, 1)",
    spring: "600ms cubic-bezier(0.34, 1.56, 0.64, 1)",
    smooth: "800ms cubic-bezier(0.22, 1, 0.36, 1)",
  },
  shadows: {
    sm: "0 1px 3px rgba(0,0,0,0.5)",
    md: "0 4px 16px rgba(0,0,0,0.6)",
    lg: "0 8px 32px rgba(0,0,0,0.7)",
    xl: "0 16px 64px rgba(0,0,0,0.8)",
    card: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
    glow: "0 0 40px rgba(0,212,255,0.2)",
    glowPurple: "0 0 40px rgba(124,58,237,0.2)",
  },
  zIndex: {
    base: 0,
    above: 10,
    header: 100,
    modal: 200,
    cursor: 1000,
  },
};

export default theme;
