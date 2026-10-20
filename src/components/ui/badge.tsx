import { cn } from "@/lib/cn";
import type { BadgeTone } from "@/types/ui";

const tones: Record<BadgeTone, string> = {
  neutral: "border-border bg-surface-muted text-foreground-muted",
  brand: "border-transparent bg-brand-subtle text-brand",
  accent: "border-transparent bg-accent-subtle text-foreground",
  success: "border-transparent bg-accent-subtle text-foreground",
  warning: "border-border-strong bg-surface-hover text-foreground",
};

type BadgeProps = {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
};

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-2xs uppercase",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Dot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("size-1.5 rounded-full bg-current", className)}
    />
  );
}
