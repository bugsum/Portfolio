import { Button } from "@/components/ui/button";
import { Eyebrow, Section } from "@/components/ui/section";

export default function NotFound() {
  return (
    <Section className="flex flex-1 items-center">
      <div className="flex max-w-prose flex-col gap-6">
        <Eyebrow>Error 404</Eyebrow>
        <h1 className="font-display text-display-md text-balance text-foreground">
          This page does not exist.
        </h1>
        <p className="text-lg text-foreground-muted">
          The link may be out of date, or the page may have moved. Everything
          else is still where you left it.
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <Button href="/" icon="arrowRight">
            Back to home
          </Button>
          <Button href="/projects" variant="secondary">
            Browse projects
          </Button>
        </div>
      </div>
    </Section>
  );
}
