import { projects } from "@/content/projects";
import type { Project } from "@/types/content";

export const allProjects: readonly Project[] = [...projects].sort(
  (a, b) => a.order - b.order,
);

export const projectSlugs: readonly string[] = allProjects.map((p) => p.slug);

export const featuredProjects: readonly Project[] = allProjects
  .filter((p) => p.featured)
  .slice(0, 3);

export const projectTags: readonly string[] = [
  ...new Set(allProjects.flatMap((p) => p.tags)),
].sort();

export function getProject(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = allProjects.findIndex((p) => p.slug === slug);
  return {
    previous: index > 0 ? allProjects[index - 1] : undefined,
    next:
      index >= 0 && index < allProjects.length - 1
        ? allProjects[index + 1]
        : undefined,
  };
}
