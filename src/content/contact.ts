import type { ContactContent } from "@/types/content";

export const contact = {
  heading: "Let's talk about your platform",
  description:
    "I take on a small number of contracts each year, usually around developer experience, build performance or observability. If that sounds like your problem, tell me about it.",
  responseTime: "I reply within two working days.",
  channels: [
    {
      id: "email",
      label: "Email",
      value: "hello@example.com",
      href: "mailto:hello@example.com",
      icon: "envelope",
      primary: true,
    },
    {
      id: "call",
      label: "Intro call",
      value: "Book 30 minutes",
      href: "https://example.com",
      icon: "calendar",
      primary: false,
    },
    {
      id: "github",
      label: "GitHub",
      value: "@ariavenkatesh",
      href: "https://github.com",
      icon: "github",
      primary: false,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "in/ariavenkatesh",
      href: "https://linkedin.com",
      icon: "linkedin",
      primary: false,
    },
  ],
} satisfies ContactContent;
