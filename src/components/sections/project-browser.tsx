"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ProjectCard } from "@/components/ui/project-card";
import { cn } from "@/lib/cn";
import { DURATION, EASE_OUT_SOFT } from "@/lib/motion";
import type { Project } from "@/types/content";

const ALL = "All";

export function ProjectBrowser({
  projects,
  tags,
}: {
  projects: readonly Project[];
  tags: readonly string[];
}) {
  const [activeTag, setActiveTag] = useState<string>(ALL);

  const visible = useMemo(
    () =>
      activeTag === ALL
        ? projects
        : projects.filter((project) => project.tags.includes(activeTag)),
    [projects, activeTag],
  );

  return (
    <div className="flex flex-col gap-10">
      <div
        role="group"
        aria-label="Filter projects by tag"
        className="flex flex-wrap gap-2"
      >
        {[ALL, ...tags].map((tag) => {
          const active = tag === activeTag;
          return (
            <button
              key={tag}
              type="button"
              aria-pressed={active}
              onClick={() => setActiveTag(tag)}
              className={cn(
                "inline-flex h-9 items-center rounded-full border px-4 text-sm font-medium transition-colors",
                active
                  ? "border-transparent bg-brand text-brand-foreground"
                  : "border-border bg-surface text-foreground-muted hover:border-border-strong hover:bg-surface-hover hover:text-foreground",
              )}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="font-mono text-2xs uppercase text-foreground-muted">
        {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>

      <motion.ul
        layout
        className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.li
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: DURATION.fast, ease: EASE_OUT_SOFT }}
              className="flex"
            >
              <ProjectCard project={project} className="w-full" />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
