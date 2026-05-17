"use client";

import { ThemeProvider } from "styled-components";
import { config } from "@fortawesome/fontawesome-svg-core";
import theme from "@/styles/theme";
import AppLayout from "@/components/layout/app-layout/app-layout";

config.autoAddCss = false;

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout>{children}</AppLayout>
    </ThemeProvider>
  );
}
