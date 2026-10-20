import { ProjectBrowser } from "@/components/sections/project-browser";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { allProjects, projectTags } from "@/lib/projects";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Projects",
  description:
    "Build systems, service catalogs, SLO tooling and the infrastructure projects behind them, with the numbers that came out.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <Section width="wide" className="pt-32 pb-12 sm:pt-40 lg:pt-48">
        <SectionHeader
          eyebrow="Projects"
          as="h1"
          title="Things I have built, and what came of them"
          description="Six projects, mostly platform and developer tooling. Each one lists what the problem was, the approach I took and the measured result, including the one I have since archived."
        />
        <ProjectBrowser projects={allProjects} tags={projectTags} />
      </Section>
      <CtaBanner />
    </>
  );
}
