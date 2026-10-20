import { experiences } from "@/content/experience";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { formatRange } from "@/lib/format";
import type { Employment } from "@/types/content";

const employmentLabel: Record<Employment, string> = {
  "full-time": "Full-time",
  contract: "Contract",
  internship: "Internship",
  freelance: "Freelance",
};

export function ExperienceTimeline() {
  return (
    <Section width="wide" className="bg-surface-muted/40">
      <SectionHeader
        eyebrow="Experience"
        title="Where I have worked"
        description="Eight years, four roles, one consistent theme: making the systems underneath other people's work less painful."
      />
      <ol className="relative flex flex-col gap-12 border-l border-border pl-8 sm:gap-16 sm:pl-12">
        {experiences.map((role, index) => (
          <Reveal as="li" key={role.id} delay={index * 0.05} className="relative">
            <span
              aria-hidden
              className="absolute -left-[2.3125rem] top-1.5 grid size-5 place-items-center rounded-full border border-border bg-canvas sm:-left-[3.3125rem]"
            >
              <span className="size-2 rounded-full bg-brand" />
            </span>

            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-2xs uppercase text-foreground-muted">
                {formatRange(role.start, role.end)}
              </p>
              <Badge>{employmentLabel[role.employment]}</Badge>
            </div>

            <h3 className="mt-4 font-display text-2xl text-balance text-foreground">
              {role.role}
            </h3>

            <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-foreground-muted">
              {role.companyUrl ? (
                <a
                  href={role.companyUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-brand"
                >
                  {role.company}
                  <Icon name="arrowUpRight" weight="bold" className="size-3.5" />
                </a>
              ) : (
                <span className="font-medium text-foreground">
                  {role.company}
                </span>
              )}
              <span className="text-foreground-faint">{role.location}</span>
            </p>

            <p className="mt-4 max-w-prose text-pretty text-foreground-muted">
              {role.summary}
            </p>

            <ul className="mt-6 flex max-w-prose flex-col gap-3">
              {role.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-foreground-muted">
                  <Icon
                    name="check"
                    weight="bold"
                    className="mt-1 size-4 text-brand"
                  />
                  <span className="text-pretty">{highlight}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2">
              {role.stack.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-2xs text-foreground-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
