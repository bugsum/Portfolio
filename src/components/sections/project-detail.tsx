import Image from "next/image";
import Link from "next/link";
import { Badge, Dot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardBody, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Prose } from "@/components/ui/prose";
import { Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { TextReveal } from "@/components/motion/text-reveal";
import { ProjectJsonLd } from "@/components/seo/json-ld";
import { getAdjacentProjects } from "@/lib/projects";
import type { IconName } from "@/types/ui";
import type { Project, ProjectLinkKind, ProjectStatus } from "@/types/content";

const statusTone: Record<ProjectStatus, "brand" | "neutral" | "warning"> = {
  live: "brand",
  wip: "warning",
  archived: "neutral",
};

const statusLabel: Record<ProjectStatus, string> = {
  live: "Live",
  wip: "In progress",
  archived: "Archived",
};

const linkIcon: Record<ProjectLinkKind, IconName> = {
  live: "arrowUpRight",
  repo: "github",
  "case-study": "arrowUpRight",
  package: "package",
};

export function ProjectDetail({ project }: { project: Project }) {
  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <>
      <ProjectJsonLd project={project} />
      <section className="pt-32 pb-16 sm:pt-40 lg:pt-48">
        <Container width="wide">
          <Reveal y={10}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-2xs uppercase text-foreground-muted transition-colors hover:text-foreground"
            >
              <Icon name="arrowLeft" weight="bold" className="size-3.5" />
              All projects
            </Link>
          </Reveal>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Badge tone={statusTone[project.status]}>
              <Dot />
              {statusLabel[project.status]}
            </Badge>
            <Badge>{project.year}</Badge>
            <Badge>{project.role}</Badge>
          </div>

          <TextReveal
            text={project.title}
            as="h1"
            delay={0.1}
            className="mt-8 font-display text-display-lg text-balance text-foreground"
          />

          <Reveal delay={0.3} className="mt-6">
            <p className="max-w-prose text-lg text-pretty text-foreground-muted sm:text-xl">
              {project.tagline}
            </p>
          </Reveal>

          {project.links.length > 0 ? (
            <Reveal delay={0.4} className="mt-10">
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, index) => (
                  <Button
                    key={link.url + link.kind}
                    href={link.url}
                    external
                    variant={index === 0 ? "primary" : "secondary"}
                    icon={linkIcon[link.kind]}
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </Reveal>
          ) : null}

          {project.metrics.length > 0 ? (
            <Stagger
              as="ul"
              delay={0.2}
              className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4"
            >
              {project.metrics.map((metric) => (
                <StaggerItem
                  as="li"
                  key={metric.label}
                  className="bg-surface p-6 sm:p-8"
                >
                  <p className="font-display text-2xl tabular-nums text-balance text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-2 font-mono text-2xs uppercase text-foreground-muted">
                    {metric.label}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          ) : null}
        </Container>
      </section>

      <Container width="wide">
        <Reveal delay={0.2}>
          <div className="relative aspect-16/10 overflow-hidden rounded-2xl border border-border bg-surface-muted shadow-lift">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              priority
              sizes="(min-width: 1280px) 76rem, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>

      <Section width="wide" spacing="tight">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow as="h2">Overview</Eyebrow>
            <Prose paragraphs={project.overview} lead className="mt-6" />
          </div>

          <aside className="flex flex-col gap-10 lg:col-span-5">
            <div>
              <Eyebrow as="h2">Stack</Eyebrow>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-foreground-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Eyebrow as="h2">Focus areas</Eyebrow>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-brand-subtle px-3 py-1.5 text-xs font-medium text-brand"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      {project.highlights.length > 0 ? (
        <Section width="wide" className="bg-surface-muted/40">
          <Eyebrow as="h2" className="mb-10">What made it work</Eyebrow>
          <Stagger
            as="ul"
            className="grid gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-8"
          >
            {project.highlights.map((highlight) => (
              <StaggerItem as="li" key={highlight.title} className="flex">
                <Card className="w-full">
                  <CardBody>
                    <span className="grid size-11 place-items-center rounded-lg bg-brand-subtle text-brand">
                      <Icon name={highlight.icon} className="size-6" />
                    </span>
                    <CardTitle className="text-lg">{highlight.title}</CardTitle>
                    <p className="text-pretty text-foreground-muted">
                      {highlight.description}
                    </p>
                  </CardBody>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      ) : null}

      {project.gallery.length > 0 ? (
        <Section width="wide" spacing="tight">
          <Eyebrow as="h2" className="mb-10">Gallery</Eyebrow>
          <Stagger as="ul" className="grid gap-5 sm:gap-6 lg:grid-cols-2">
            {project.gallery.map((image) => (
              <StaggerItem as="li" key={image.src}>
                <figure className="flex flex-col gap-3">
                  <div className="relative aspect-16/10 overflow-hidden rounded-xl border border-border bg-surface-muted">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 36rem, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-sm text-foreground-muted">
                    {image.alt}
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      ) : null}

      <Section width="wide" spacing="tight">
        <nav className="grid gap-5 border-t border-border pt-12 sm:grid-cols-2 sm:gap-6">
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="group flex flex-col gap-2 rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-strong hover:bg-surface-hover"
            >
              <span className="flex items-center gap-2 font-mono text-2xs uppercase text-foreground-muted">
                <Icon
                  name="arrowLeft"
                  weight="bold"
                  className="size-3.5 transition-transform group-hover:-translate-x-1"
                />
                Previous
              </span>
              <span className="font-display text-xl text-foreground">
                {previous.title}
              </span>
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-col items-end gap-2 rounded-xl border border-border bg-surface p-6 text-right transition-colors hover:border-border-strong hover:bg-surface-hover sm:col-start-2"
            >
              <span className="flex items-center gap-2 font-mono text-2xs uppercase text-foreground-muted">
                Next
                <Icon
                  name="arrowRight"
                  weight="bold"
                  className="size-3.5 transition-transform group-hover:translate-x-1"
                />
              </span>
              <span className="font-display text-xl text-foreground">
                {next.title}
              </span>
            </Link>
          ) : null}
        </nav>
      </Section>
    </>
  );
}
