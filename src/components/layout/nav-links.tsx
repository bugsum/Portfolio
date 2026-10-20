"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const linkBase =
  "relative inline-flex h-9 items-center rounded-full px-4 text-sm font-medium transition-colors";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="hidden items-center gap-1 md:flex">
      {site.nav.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                linkBase,
                active
                  ? "bg-surface-muted text-foreground"
                  : "text-foreground-muted hover:bg-surface-muted hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function NavLinksStatic() {
  return (
    <ul className="hidden items-center gap-1 md:flex">
      {site.nav.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={cn(linkBase, "text-foreground-muted")}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
