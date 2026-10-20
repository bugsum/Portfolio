import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/project-card";
import { Section, SectionHeader } from "@/components/ui/section";
import { HoverLift } from "@/components/motion/hover-lift";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { featuredProjects } from "@/lib/projects";

export function FeaturedProjects() {
  return (
    <Section width="wide">
      <SectionHeader
        eyebrow="Selected work"
        title="Three things I am most proud of"
        description="Each of these started as a problem that was slowing a team down. The write-ups cover what I tried, what did not work, and what the numbers looked like afterwards."
        action={
          <Button href="/projects" variant="secondary" icon="arrowRight">
            All projects
          </Button>
        }
      />
      <Stagger as="ul" className="grid gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        {featuredProjects.map((project) => (
          <StaggerItem as="li" key={project.slug} className="flex">
            <HoverLift className="flex w-full">
              <ProjectCard project={project} className="w-full" />
            </HoverLift>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
