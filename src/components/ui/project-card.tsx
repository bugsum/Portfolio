import Link from "next/link";
import { Badge, Dot } from "@/components/ui/badge";
import { Card, CardBody, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";
import type { Project, ProjectStatus } from "@/types/content";

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

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <Card interactive className={cn("group", className)}>
      <CardBody className="gap-5">
        <div className="flex items-center justify-between gap-4">
          <Badge tone={statusTone[project.status]}>
            <Dot />
            {statusLabel[project.status]}
          </Badge>
          <span className="font-mono text-2xs uppercase text-foreground-faint">
            {project.year}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <CardTitle>
            <Link
              href={`/projects/${project.slug}`}
              className="after:absolute after:inset-0 after:content-['']"
            >
              {project.title}
            </Link>
          </CardTitle>
          <p className="text-pretty text-foreground-muted">
            {project.tagline}
          </p>
        </div>

        <ul className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.stack.slice(0, 4).map((item) => (
            <li
              key={item}
              className="rounded-full bg-surface-muted px-2.5 py-1 font-mono text-2xs text-foreground-muted"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 text-sm font-medium text-brand">
          Read the case
          <Icon
            name="arrowRight"
            weight="bold"
            className="size-4 transition-transform group-hover:translate-x-1"
          />
        </div>
      </CardBody>
    </Card>
  );
}
