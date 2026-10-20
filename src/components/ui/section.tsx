import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";
import type { SectionSpacing } from "@/types/ui";

const spacings: Record<SectionSpacing, string> = {
  default: "py-24 sm:py-32 lg:py-40",
  tight: "py-16 sm:py-20 lg:py-24",
  none: "",
};

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  spacing?: SectionSpacing;
  width?: "prose" | "content" | "wide";
  className?: string;
  innerClassName?: string;
};

export function Section({
  children,
  id,
  spacing = "default",
  width = "content",
  className,
  innerClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn(spacings[spacing], className)}>
      <Container width={width} className={innerClassName}>
        {children}
      </Container>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  className?: string;
  action?: React.ReactNode;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "start",
  className,
  action,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-6 sm:mb-16",
        action && "sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-4",
          align === "center" && "mx-auto max-w-prose text-center",
        )}
      >
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h2 className="font-display text-display-sm text-balance text-foreground">
          {title}
        </h2>
        {description ? (
          <p className="max-w-prose text-lg text-pretty text-foreground-muted">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-2xs uppercase text-foreground-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}
