import { profile } from "@/content/profile";
import { Badge, Dot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SocialLinks } from "@/components/ui/social-links";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

const availabilityTone = {
  open: "brand",
  limited: "warning",
  closed: "neutral",
} as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-52 lg:pb-44">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[42rem] -translate-x-1/2 rounded-full bg-brand-subtle blur-3xl"
      />
      <Container width="wide">
        <Reveal y={10}>
          <Badge tone={availabilityTone[profile.availability.status]}>
            <Dot />
            {profile.availability.label}
          </Badge>
        </Reveal>

        <TextReveal
          text={profile.headline}
          as="h1"
          delay={0.1}
          className="mt-8 max-w-4xl font-display text-display-xl text-balance text-foreground"
        />

        <Reveal delay={0.35} className="mt-10">
          <p className="max-w-prose text-lg text-pretty text-foreground-muted sm:text-xl">
            {profile.bio.short}
          </p>
        </Reveal>

        <Reveal delay={0.45} className="mt-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-3">
              <Button href="/projects" size="lg" icon="arrowRight">
                See my work
              </Button>
              <Button href="/contact" size="lg" variant="secondary">
                Get in touch
              </Button>
            </div>
            <SocialLinks className="sm:ml-2" />
          </div>
        </Reveal>

        <Reveal delay={0.55} className="mt-14">
          <p className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground-faint">
            <span className="flex items-center gap-2">
              <Icon name="briefcase" className="size-4" />
              {profile.role}
            </span>
            <span className="flex items-center gap-2">
              <Icon name="mapPin" className="size-4" />
              {profile.location.city}, {profile.location.country}
            </span>
            <span className="flex items-center gap-2">
              <Icon name="calendar" className="size-4" />
              {profile.location.timezone}
            </span>
          </p>
        </Reveal>

        <Stagger
          as="ul"
          delay={0.3}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4"
        >
          {profile.stats.map((stat) => (
            <StaggerItem
              as="li"
              key={stat.label}
              className="bg-surface p-6 sm:p-8"
            >
              <p className="font-display text-display-xs tabular-nums text-foreground">
                {stat.value}
              </p>
              <p className="mt-2 font-mono text-2xs uppercase text-foreground-muted">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
