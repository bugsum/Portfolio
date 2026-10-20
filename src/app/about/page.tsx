import { Bio } from "@/components/sections/bio";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { EducationList } from "@/components/sections/education-list";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { CtaBanner } from "@/components/sections/cta-banner";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Eight years of platform engineering: build systems, observability and the developer tooling other engineers depend on.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Bio />
      <ExperienceTimeline />
      <SkillsGrid />
      <EducationList />
      <CtaBanner />
    </>
  );
}
