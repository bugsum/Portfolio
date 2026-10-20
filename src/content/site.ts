import type { SiteConfig } from "@/types/content";

export const site = {
  name: "Aria Venkatesh",
  shortName: "Aria V.",
  title: "Aria Venkatesh — Platform Engineer",
  description:
    "Platform engineer building developer tooling, resilient infrastructure and interfaces that stay fast under load.",
  url: "https://example.com",
  locale: "en-US",
  copyrightStartYear: 2021,
  ogImageAlt: "Aria Venkatesh — Platform Engineer",
  nav: [
    { label: "Home", href: "/", icon: "sparkle" },
    { label: "About", href: "/about", icon: "users" },
    { label: "Projects", href: "/projects", icon: "cube" },
    { label: "Contact", href: "/contact", icon: "chatCircle" },
  ],
} satisfies SiteConfig;
