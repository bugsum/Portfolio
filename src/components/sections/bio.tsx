import Image from "next/image";
import { profile } from "@/content/profile";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { Prose } from "@/components/ui/prose";
import { Reveal } from "@/components/motion/reveal";

export function Bio() {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-28">
      <Container width="wide">
        <Reveal y={10}>
          <Eyebrow>About</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-3xl font-display text-display-lg text-balance text-foreground">
            {profile.firstName} {profile.lastName}, {profile.role.toLowerCase()}
          </h1>
        </Reveal>
        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal delay={0.2} className="lg:col-span-7">
            <Prose paragraphs={profile.bio.long} lead />
            {profile.resumeUrl ? (
              <Button
                href={profile.resumeUrl}
                variant="secondary"
                icon="arrowUpRight"
                className="mt-10"
                external
              >
                Download résumé
              </Button>
            ) : null}
          </Reveal>
          <Reveal delay={0.3} className="flex flex-col gap-8 lg:col-span-5">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-surface-muted shadow-lift">
              <Image
                src={profile.avatar.src}
                alt={profile.avatar.alt}
                fill
                priority
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="object-cover"
              />
            </div>
            <dl className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-baseline justify-between gap-4 p-6"
                >
                  <dt className="font-mono text-2xs uppercase text-foreground-muted">
                    {stat.label}
                  </dt>
                  <dd className="font-display text-2xl tabular-nums text-foreground">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
