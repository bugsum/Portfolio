import { education } from "@/content/education";
import { Card, CardBody, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Section, SectionHeader } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { formatRange } from "@/lib/format";

export function EducationList() {
  return (
    <Section width="wide" spacing="tight">
      <SectionHeader eyebrow="Education" title="Where I studied" />
      <Stagger as="ul" className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        {education.map((entry) => (
          <StaggerItem as="li" key={entry.id} className="flex">
            <Card className="w-full">
              <CardBody>
                <div className="flex items-start gap-3">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-brand-subtle text-brand">
                    <Icon name="graduationCap" className="size-6" />
                  </span>
                  <div>
                    <CardTitle className="text-lg">
                      {entry.credential} {entry.field}
                    </CardTitle>
                    <p className="text-sm text-foreground-muted">
                      {entry.institution}
                    </p>
                  </div>
                </div>

                <p className="font-mono text-2xs uppercase text-foreground-faint">
                  {formatRange(entry.start, entry.end)} · {entry.location}
                </p>

                <ul className="flex flex-col gap-2">
                  {entry.notes.map((note) => (
                    <li
                      key={note}
                      className="flex gap-3 text-sm text-foreground-muted"
                    >
                      <Icon
                        name="check"
                        weight="bold"
                        className="mt-0.5 size-4 text-brand"
                      />
                      <span className="text-pretty">{note}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
