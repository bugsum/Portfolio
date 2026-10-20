import type { Social } from "@/types/content";

export const socials = [
  {
    platform: "github",
    label: "GitHub",
    handle: "@ariavenkatesh",
    url: "https://github.com",
    icon: "github",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    handle: "in/ariavenkatesh",
    url: "https://linkedin.com",
    icon: "linkedin",
  },
  {
    platform: "x",
    label: "X",
    handle: "@ariabuilds",
    url: "https://x.com",
    icon: "xLogo",
  },
  {
    platform: "email",
    label: "Email",
    handle: "hello@example.com",
    url: "mailto:hello@example.com",
    icon: "envelope",
  },
] satisfies readonly Social[];
