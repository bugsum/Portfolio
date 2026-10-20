import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getProject, projectSlugs } from "@/lib/projects";
import { buildMetadata } from "@/lib/metadata";
import { Section, SectionHeader } from "@/components/ui/section";
import { ProjectDetailSkeleton } from "@/components/ui/skeletons";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return buildMetadata({ title: "Project not found" });
  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  return (
    <Suspense fallback={<ProjectDetailSkeleton />}>
      <ProjectBody params={params} />
    </Suspense>
  );
}

async function ProjectBody({
  params,
}: Pick<PageProps<"/projects/[slug]">, "params">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <Section>
      <SectionHeader eyebrow="Stub" title={project.title} />
    </Section>
  );
}
