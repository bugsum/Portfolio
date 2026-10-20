import { skillGroups } from "@/content/skills";
import { Card, CardBody, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Section, SectionHeader } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { cn } from "@/lib/cn";
import type { SkillLevel } from "@/types/content";

const levelLabel: Record<SkillLevel, string> = {
  strong: "Daily",
  working: "Comfortable",
  learning: "Learning",
};

const levelStyle: Record<SkillLevel, string> = {
  strong: "bg-brand-subtle text-brand",
  working: "bg-surface-muted text-foreground-muted",
  learning: "bg-surface-muted text-foreground-faint",
};

export function SkillsGrid({ variant = "full" }: { variant?: "full" | "compact" }) {
  const groups = variant === "compact" ? skillGroups.slice(0, 2) : skillGroups;

  return (
    <Section
      width="wide"
      className={variant === "compact" ? "bg-surface-muted/40" : undefined}
    >
      <SectionHeader
        eyebrow="Toolkit"
        title="What I work with"
        description="Grouped by where it actually sits in my week, not by how it would look on a résumé."
      />
      <Stagger as="ul" className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8">
        {groups.map((group) => (
          <StaggerItem as="li" key={group.id} className="flex">
            <Card className="w-full">
              <CardBody>
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-lg bg-brand-subtle text-brand">
                    <Icon name={group.icon} className="size-6" />
                  </span>
                  <div>
                    <CardTitle className="text-lg">{group.title}</CardTitle>
                    <p className="text-sm text-foreground-muted">
                      {group.description}
                    </p>
                  </div>
                </div>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill.name}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm",
                        levelStyle[skill.level],
                      )}
                    >
                      {skill.name}
                      <span className="font-mono text-2xs uppercase opacity-70">
                        {levelLabel[skill.level]}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
