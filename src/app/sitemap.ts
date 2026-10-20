import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { projectSlugs } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = site.nav.map((item) => ({
    url: `${site.url}${item.href === "/" ? "" : item.href}`,
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.8,
  }));

  const projects = projectSlugs.map((slug) => ({
    url: `${site.url}/projects/${slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...pages, ...projects];
}
