import { socials } from "@/content/socials";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/icon";

export function SocialLinks({
  className,
  showLabels = false,
}: {
  className?: string;
  showLabels?: boolean;
}) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {socials.map((social) => (
        <li key={social.platform}>
          <a
            href={social.url}
            target={social.url.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer noopener"
            aria-label={showLabels ? undefined : social.label}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-border bg-surface text-foreground-muted transition-colors hover:border-border-strong hover:bg-surface-hover hover:text-foreground",
              showLabels ? "h-10 px-4 text-sm" : "size-10 justify-center",
            )}
          >
            <Icon name={social.icon} className="size-[1.125rem]" />
            {showLabels ? social.label : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
