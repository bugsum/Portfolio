import Link from "next/link";
import { site } from "@/content/site";
import { profile } from "@/content/profile";
import { getCurrentYear } from "@/lib/time";
import { Container } from "@/components/ui/container";
import { SocialLinks } from "@/components/ui/social-links";
import { Icon } from "@/components/ui/icon";

export async function SiteFooter() {
  const year = await getCurrentYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface-muted/50">
      <Container width="wide" className="py-16 sm:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex max-w-sm flex-col gap-4">
            <span className="font-display text-xl text-foreground">
              {site.name}
            </span>
            <p className="text-sm text-foreground-muted">{profile.headline}</p>
            <p className="flex items-center gap-2 text-sm text-foreground-faint">
              <Icon name="mapPin" className="size-4" />
              {profile.location.city}, {profile.location.country}
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <nav className="flex flex-col gap-3">
              <p className="font-mono text-2xs uppercase text-foreground-muted">
                Pages
              </p>
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <p className="font-mono text-2xs uppercase text-foreground-muted">
                Elsewhere
              </p>
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-foreground-faint">
            © {site.copyrightStartYear}–{year} {site.name}
          </p>
          <p className="font-mono text-2xs uppercase text-foreground-faint">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}
