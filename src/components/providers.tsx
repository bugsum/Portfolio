"use client";

import { MotionConfig } from "motion/react";
import { ThemeProvider } from "next-themes";
import { EASE_OUT_SOFT } from "@/lib/motion";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="portfolio-theme"
    >
      <MotionConfig reducedMotion="user" transition={{ ease: EASE_OUT_SOFT }}>
        {children}
      </MotionConfig>
    </ThemeProvider>
  );
}
