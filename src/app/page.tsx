import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { TextReveal } from "@/components/motion/text-reveal";
import { HoverLift } from "@/components/motion/hover-lift";
import { ProjectCard } from "@/components/ui/project-card";
import { Section, Eyebrow } from "@/components/ui/section";
import { featuredProjects } from "@/lib/projects";
import { profile } from "@/content/profile";

export default function HomePage() {
  return (
    <Section>
      <Eyebrow>Motion smoke test</Eyebrow>
      <TextReveal
        text={profile.headline}
        as="h1"
        className="mt-6 font-display text-display-lg text-balance text-foreground"
      />
      <Reveal delay={0.2} className="mt-8">
        <p className="max-w-prose text-lg text-foreground-muted">
          {profile.bio.short}
        </p>
      </Reveal>
      <Stagger
        as="ul"
        className="mt-16 grid gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-8"
      >
        {featuredProjects.map((project) => (
          <StaggerItem as="li" key={project.slug}>
            <HoverLift className="h-full">
              <ProjectCard project={project} className="h-full" />
            </HoverLift>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
