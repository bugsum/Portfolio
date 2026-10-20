import type { SkillGroup } from "@/types/content";

export const skillGroups = [
  {
    id: "languages",
    title: "Languages",
    description: "What I reach for, and how often.",
    icon: "code",
    items: [
      { name: "TypeScript", level: "strong" },
      { name: "Go", level: "strong" },
      { name: "Python", level: "strong" },
      { name: "Rust", level: "working" },
      { name: "Bash", level: "strong" },
      { name: "SQL", level: "working" },
    ],
  },
  {
    id: "platform",
    title: "Platform & Infra",
    description: "Where most of my working hours go.",
    icon: "cloud",
    items: [
      { name: "Kubernetes", level: "strong" },
      { name: "Terraform", level: "strong" },
      { name: "AWS", level: "strong" },
      { name: "Docker", level: "strong" },
      { name: "Pulumi", level: "working" },
      { name: "Nix", level: "learning" },
    ],
  },
  {
    id: "observability",
    title: "Observability",
    description: "Making systems explain themselves.",
    icon: "gauge",
    items: [
      { name: "OpenTelemetry", level: "strong" },
      { name: "Prometheus", level: "strong" },
      { name: "Grafana", level: "strong" },
      { name: "Loki", level: "working" },
      { name: "Sentry", level: "working" },
    ],
  },
  {
    id: "product",
    title: "Product Engineering",
    description: "The interfaces on top of the platform.",
    icon: "palette",
    items: [
      { name: "Next.js", level: "strong" },
      { name: "React", level: "strong" },
      { name: "Tailwind CSS", level: "strong" },
      { name: "PostgreSQL", level: "working" },
      { name: "tRPC", level: "working" },
    ],
  },
] satisfies readonly SkillGroup[];
