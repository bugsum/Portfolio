import { Suspense } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { NavLinks, NavLinksStatic } from "@/components/layout/nav-links";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-canvas/80 backdrop-blur-xl">
      <Container width="wide">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link
            href="/"
            className="font-display text-lg tracking-tight text-foreground"
          >
            {site.shortName}
          </Link>

          <Suspense fallback={<NavLinksStatic />}>
            <NavLinks />
          </Suspense>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
