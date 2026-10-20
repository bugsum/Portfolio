"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@phosphor-icons/react/ssr";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-surface text-foreground-muted transition-colors hover:border-border-strong hover:bg-surface-hover hover:text-foreground"
    >
      <SunIcon weight="duotone" className="size-[1.125rem] dark:hidden" />
      <MoonIcon weight="duotone" className="hidden size-[1.125rem] dark:block" />
    </button>
  );
}
