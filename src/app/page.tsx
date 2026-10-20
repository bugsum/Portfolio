import { Badge, Dot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { ProjectCard } from "@/components/ui/project-card";
import { Prose } from "@/components/ui/prose";
import { Section, SectionHeader } from "@/components/ui/section";
import { SocialLinks } from "@/components/ui/social-links";
import { featuredProjects } from "@/lib/projects";
import { profile } from "@/content/profile";

export default function HomePage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Primitives"
        title="UI primitives smoke test"
        description={profile.bio.short}
        action={<Button href="/projects" icon="arrowRight">All projects</Button>}
      />
      <div className="flex flex-wrap items-center gap-3">
        <Badge tone="brand">
          <Dot />
          Badge
        </Badge>
        <Icon name="terminal" className="size-6 text-brand" />
        <Button variant="secondary" icon="github" iconPosition="start">
          Secondary
        </Button>
        <Button variant="ghost">Ghost</Button>
        <SocialLinks />
      </div>
      <Prose paragraphs={profile.bio.long.slice(0, 2)} lead className="mt-12" />
      <div className="mt-12 grid gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
