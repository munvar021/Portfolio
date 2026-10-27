import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import AppProviders from "@/providers/app-providers";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Munvar Khajavali | Full Stack Developer",
  description:
    "Full Stack Web Developer passionate about building modern, scalable, and user-friendly web applications.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Node.js",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Munvar Khajavali" }],
  openGraph: {
    title: "Munvar Khajavali | Full Stack Developer",
    description:
      "Full Stack Web Developer passionate about building modern, scalable, and user-friendly web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Manrope:wght@300;400;500;600;700;800&family=Sora:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <AppProviders>{children}</AppProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
