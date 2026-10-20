import { cn } from "@/lib/cn";

export function Prose({
  paragraphs,
  className,
  lead = false,
}: {
  paragraphs: readonly string[];
  className?: string;
  lead?: boolean;
}) {
  return (
    <div className={cn("flex max-w-prose flex-col gap-6", className)}>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={cn(
            "text-pretty text-foreground-muted",
            lead && index === 0
              ? "text-lg sm:text-xl"
              : "text-base sm:text-lg",
          )}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
