import type { IconName } from "./ui";

export interface ImageRef {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Stat {
  label: string;
  value: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: IconName;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  title: string;
  description: string;
  url: string;
  locale: string;
  copyrightStartYear: number;
  nav: readonly NavItem[];
  ogImageAlt: string;
}

export type Availability = "open" | "limited" | "closed";

export interface Profile {
  firstName: string;
  lastName: string;
  headline: string;
  role: string;
  email: string;
  resumeUrl: string | null;
  location: { city: string; country: string; timezone: string };
  availability: { status: Availability; label: string };
  bio: { short: string; long: readonly string[] };
  stats: readonly Stat[];
  avatar: ImageRef;
}

export type SocialPlatform =
  | "github"
  | "linkedin"
  | "x"
  | "dribbble"
  | "email"
  | "rss";

export interface Social {
  platform: SocialPlatform;
  label: string;
  handle: string;
  url: string;
  icon: IconName;
}

export type SkillLevel = "learning" | "working" | "strong";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  items: readonly Skill[];
}

export type Employment = "full-time" | "contract" | "internship" | "freelance";

export interface Experience {
  id: string;
  company: string;
  companyUrl: string | null;
  role: string;
  employment: Employment;
  start: string;
  end: string | null;
  location: string;
  summary: string;
  highlights: readonly string[];
  stack: readonly string[];
}

export interface Education {
  id: string;
  institution: string;
  credential: string;
  field: string;
  start: string;
  end: string | null;
  location: string;
  notes: readonly string[];
}

export type ProjectStatus = "live" | "wip" | "archived";
export type ProjectLinkKind = "live" | "repo" | "case-study" | "package";

export interface ProjectLink {
  kind: ProjectLinkKind;
  label: string;
  url: string;
}

export interface ProjectHighlight {
  title: string;
  description: string;
  icon: IconName;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  status: ProjectStatus;
  featured: boolean;
  order: number;
  role: string;
  tags: readonly string[];
  stack: readonly string[];
  summary: string;
  overview: readonly string[];
  highlights: readonly ProjectHighlight[];
  metrics: readonly Stat[];
  links: readonly ProjectLink[];
  cover: ImageRef;
  gallery: readonly ImageRef[];
}

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: IconName;
  primary: boolean;
}

export interface ContactContent {
  heading: string;
  description: string;
  responseTime: string;
  channels: readonly ContactChannel[];
}
