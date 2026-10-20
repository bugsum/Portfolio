import { profile } from "@/content/profile";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";

export function CtaBanner() {
  return (
    <Section width="wide">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-8 py-16 shadow-soft sm:px-14 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full bg-brand-subtle blur-3xl"
          />
          <div className="relative flex max-w-2xl flex-col gap-6">
            <Eyebrow>{profile.availability.label}</Eyebrow>
            <h2 className="font-display text-display-sm text-balance text-foreground">
              Got a build that takes too long, or a platform nobody enjoys
              using?
            </h2>
            <p className="text-lg text-pretty text-foreground-muted">
              That is most of what I do. Tell me what is slowing your team down
              and I will tell you honestly whether I can help.
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <Button href="/contact" size="lg" icon="arrowRight">
                Start a conversation
              </Button>
              <Button href="/about" size="lg" variant="secondary">
                More about me
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
