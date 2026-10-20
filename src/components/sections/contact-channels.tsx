import { contact } from "@/content/contact";
import { profile } from "@/content/profile";
import { Card, CardBody, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Badge, Dot } from "@/components/ui/badge";
import { Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export function ContactChannels() {
  return (
    <section className="pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40">
      <Container width="wide">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal y={10}>
              <Eyebrow>Contact</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-display-md text-balance text-foreground">
                {contact.heading}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-prose text-lg text-pretty text-foreground-muted">
                {contact.description}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col gap-4">
                <Badge tone="brand">
                  <Dot />
                  {profile.availability.label}
                </Badge>
                <p className="flex items-center gap-2 text-sm text-foreground-muted">
                  <Icon name="chatCircle" className="size-4" />
                  {contact.responseTime}
                </p>
                <p className="flex items-center gap-2 text-sm text-foreground-muted">
                  <Icon name="mapPin" className="size-4" />
                  {profile.location.city}, {profile.location.country} ·{" "}
                  {profile.location.timezone}
                </p>
              </div>
            </Reveal>
          </div>

          <Stagger as="ul" delay={0.2} className="flex flex-col gap-5 lg:col-span-7">
            {contact.channels.map((channel) => (
              <StaggerItem as="li" key={channel.id} className="flex">
                <Card interactive className="group w-full">
                  <CardBody className="gap-3">
                    <div className="flex items-center gap-4">
                      <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-brand-subtle text-brand">
                        <Icon name={channel.icon} className="size-6" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <CardTitle className="text-lg">
                          <a
                            href={channel.href}
                            target={
                              channel.href.startsWith("mailto:")
                                ? undefined
                                : "_blank"
                            }
                            rel="noreferrer noopener"
                            className="after:absolute after:inset-0 after:content-['']"
                          >
                            {channel.label}
                          </a>
                        </CardTitle>
                        <p className="truncate text-foreground-muted">
                          {channel.value}
                        </p>
                      </div>
                      <Icon
                        name="arrowUpRight"
                        weight="bold"
                        className="size-5 text-foreground-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                    {channel.primary ? (
                      <Badge tone="brand" className="self-start">
                        Fastest route
                      </Badge>
                    ) : null}
                  </CardBody>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
