const theme = {
  colors: {
    bg: {
      primary: "#050505",
      secondary: "#0A0A0A",
      tertiary: "#111111",
      card: "#141414",
      elevated: "#1A1A1A",
      glass: "rgba(255,255,255,0.03)",
    },

    accent: {
      primary: "#A11212",
      secondary: "#C11717",
      soft: "#7A0D0D",
      wine: "#5C0B0B",
      crimson: "#B91C1C",
      matte: "#8F1111",
      glow: "rgba(161,18,18,0.25)",
    },

    text: {
      primary: "#F5F5F5",
      secondary: "#B3B3B3",
      muted: "#8A8A8A",
      subtle: "#666666",
    },

    border: {
      default: "rgba(255,255,255,0.06)",
      hover: "rgba(255,255,255,0.12)",
      accent: "rgba(161,18,18,0.22)",
      strong: "rgba(255,255,255,0.18)",
    },

    gradient: {
      hero: `
        radial-gradient(
          ellipse at top,
          rgba(161,18,18,0.16) 0%,
          transparent 65%
        )
      `,

      primary: `
        linear-gradient(
          135deg,
          #A11212 0%,
          #5C0B0B 100%
        )
      `,

      card: `
        linear-gradient(
          135deg,
          rgba(255,255,255,0.04) 0%,
          rgba(255,255,255,0.015) 100%
        )
      `,

      surface: `
        linear-gradient(
          180deg,
          rgba(255,255,255,0.03) 0%,
          rgba(255,255,255,0.01) 100%
        )
      `,
    },
  },

  typography: {
    fontHeading: `
      'Sora',
      'Space Grotesk',
      sans-serif
    `,

    fontBody: `
      'Manrope',
      'Inter',
      sans-serif
    `,

    fontMono: `
      'IBM Plex Mono',
      'JetBrains Mono',
      monospace
    `,

    size: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      h6: "1.4rem",
      h5: "1.8rem",
      h4: "2.2rem",
      h3: "3rem",
      h2: "4.5rem",
      h1: "clamp(5rem, 10vw, 10rem)",
    },

    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },

    lineHeight: {
      tight: 0.92,
      heading: 0.98,
      body: 1.75,
      relaxed: 1.95,
    },

    letterSpacing: {
      tighter: "-0.04em",
      tight: "-0.03em",
      normal: "-0.015em",
      wide: "0.08em",
      wider: "0.18em",
    },
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
    sm: "10px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    full: "9999px",
  },

  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "4rem",
    "2xl": "6rem",
    "3xl": "9rem",
  },

  transitions: {
    fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    base: "300ms cubic-bezier(0.22, 1, 0.36, 1)",
    slow: "500ms cubic-bezier(0.22, 1, 0.36, 1)",
    smooth: "800ms cubic-bezier(0.22, 1, 0.36, 1)",
    cinematic: `
      1200ms cubic-bezier(
        0.19,
        1,
        0.22,
        1
      )
    `,
  },

  shadows: {
    sm: `
      0 2px 8px rgba(0,0,0,0.35)
    `,

    md: `
      0 8px 24px rgba(0,0,0,0.45)
    `,

    lg: `
      0 16px 48px rgba(0,0,0,0.6)
    `,

    xl: `
      0 24px 80px rgba(0,0,0,0.75)
    `,

    card: `
      0 10px 40px rgba(0,0,0,0.4),
      inset 0 1px 0 rgba(255,255,255,0.04)
    `,

    glow: `
      0 0 60px rgba(161,18,18,0.16)
    `,

    glowStrong: `
      0 0 100px rgba(161,18,18,0.22)
    `,
  },

  blur: {
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "40px",
  },

  zIndex: {
    base: 0,
    above: 10,
    header: 100,
    dropdown: 150,
    modal: 200,
    overlay: 300,
    cursor: 1000,
  },
};

export default theme;
export type Theme = typeof theme;
