import Link from "next/link";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/icon";
import type { ButtonSize, ButtonVariant, IconName } from "@/types/ui";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-brand-foreground shadow-soft hover:bg-brand-hover border-transparent",
  secondary:
    "bg-surface text-foreground border-border hover:border-border-strong hover:bg-surface-hover",
  ghost:
    "bg-transparent text-foreground-muted border-transparent hover:bg-surface-muted hover:text-foreground",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 gap-1.5 px-4 text-sm",
  md: "h-11 gap-2 px-5 text-sm",
  lg: "h-13 gap-2.5 px-7 text-base",
};

const base =
  "inline-flex shrink-0 items-center justify-center rounded-full border font-medium transition-colors";

type CommonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconName;
  iconPosition?: "start" | "end";
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  type?: "button" | "submit";
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    children,
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "end",
    className,
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {icon && iconPosition === "start" ? (
        <Icon name={icon} className="size-4" weight="bold" />
      ) : null}
      {children}
      {icon && iconPosition === "end" ? (
        <Icon name={icon} className="size-4" weight="bold" />
      ) : null}
    </>
  );

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noreferrer noopener"
          className={classes}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={"type" in props && props.type ? props.type : "button"}
      className={classes}
    >
      {content}
    </button>
  );
}
