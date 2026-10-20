import type { Profile } from "@/types/content";

export const profile = {
  firstName: "Aria",
  lastName: "Venkatesh",
  headline: "I build the tooling other engineers rely on.",
  role: "Senior Platform Engineer",
  email: "hello@example.com",
  resumeUrl: "/resume.pdf",
  location: { city: "Bengaluru", country: "India", timezone: "IST (UTC+5:30)" },
  availability: {
    status: "limited",
    label: "Taking one contract for Q1",
  },
  bio: {
    short:
      "Platform engineer with eight years spent on build systems, observability and the unglamorous infrastructure that makes product teams fast.",
    long: [
      "I work at the layer most people never see. For eight years I have built the systems that other engineers depend on every day: CI pipelines that finish before you lose focus, observability that answers questions instead of raising them, and internal tooling that people actually choose to use.",
      "My route in was unusual. I started as a sysadmin keeping a university research cluster alive, learned to write software because the alternative was doing the same recovery by hand every week, and never really left the operations mindset behind. It still shapes how I build: assume failure, measure everything, make the recovery path boring.",
      "These days I spend most of my time on developer experience. A ninety-second build is not a minor inconvenience, it is a tax on every decision a team makes. I care a great deal about removing that tax, and about the documentation and ergonomics that decide whether a platform gets adopted or quietly worked around.",
      "Outside of work I maintain a couple of open-source CLIs, mentor engineers moving from operations into platform roles, and take photographs of brutalist buildings that nobody else seems to like.",
    ],
  },
  stats: [
    { label: "Years building", value: "8" },
    { label: "Engineers supported", value: "120+" },
    { label: "Median CI time cut", value: "71%" },
    { label: "OSS downloads / mo", value: "40k" },
  ],
  avatar: {
    src: "/images/avatar.svg",
    alt: "Portrait of Aria Venkatesh",
    width: 480,
    height: 480,
  },
} satisfies Profile;
