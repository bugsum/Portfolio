import type { Project } from "@/types/content";

export const projects = [
  {
    slug: "forge-build-cache",
    title: "Forge",
    tagline:
      "A remote build cache that made a 24-minute CI run finish in seven.",
    year: "2025",
    status: "live",
    featured: true,
    order: 1,
    role: "Lead engineer",
    tags: ["Developer Tooling", "Infrastructure", "Go"],
    stack: ["Go", "gRPC", "S3", "Kubernetes", "OpenTelemetry"],
    summary:
      "A content-addressed remote build cache and task runner for monorepos, now backing every CI run across nine product teams.",
    overview: [
      "Forge started as a complaint. Our monorepo CI took 24 minutes on a good day, and because every team shared the same pipeline, a flaky test in one service blocked releases everywhere else. People had started batching their merges to avoid the wait, which made every integration failure harder to diagnose.",
      "The core insight was that most of those 24 minutes was work we had already done. Forge builds a content-addressed graph of every task in the repo, keyed on the hashes of its inputs, and skips anything whose inputs have not changed. Results are stored in S3 and shared across CI runners and developer machines, so a cold local build can pull artifacts that CI produced an hour earlier.",
      "The interesting problems were not in the caching. They were in correctness: proving that the declared inputs of a task actually match what it reads. Forge runs tasks inside a sandbox that denies undeclared filesystem reads, which surfaced about forty under-declared dependencies in the first week and turned a theoretically-correct cache into a practically-correct one.",
      "It has been in production for eleven months. The cache hit rate sits around 82%, and the median CI run is seven minutes.",
    ],
    highlights: [
      {
        title: "Sandboxed input verification",
        description:
          "Tasks run with undeclared filesystem reads denied, so a cache hit is provably equivalent to a fresh build rather than merely likely to be.",
        icon: "shieldCheck",
      },
      {
        title: "Shared across CI and local",
        description:
          "Developer machines read the same artifact store as CI runners, so a fresh clone can skip straight to the parts that actually changed.",
        icon: "cloud",
      },
      {
        title: "Per-task observability",
        description:
          "Every task emits an OpenTelemetry span with its cache decision and input hash, which made the rollout debuggable instead of mysterious.",
        icon: "gauge",
      },
    ],
    metrics: [
      { label: "Median CI time", value: "24m to 7m" },
      { label: "Cache hit rate", value: "82%" },
      { label: "Teams onboarded", value: "9" },
      { label: "CI spend saved", value: "$14k/mo" },
    ],
    links: [
      { kind: "repo", label: "Source", url: "https://github.com" },
      {
        kind: "case-study",
        label: "Engineering write-up",
        url: "https://example.com",
      },
    ],
    cover: {
      src: "/images/projects/forge.svg",
      alt: "Forge build graph visualisation",
      width: 1200,
      height: 750,
    },
    gallery: [
      {
        src: "/images/projects/forge-graph.svg",
        alt: "Task dependency graph with cached nodes dimmed",
        width: 1200,
        height: 750,
      },
      {
        src: "/images/projects/forge-timeline.svg",
        alt: "CI timeline before and after remote caching",
        width: 1200,
        height: 750,
      },
    ],
  },
  {
    slug: "atlas-service-catalog",
    title: "Atlas",
    tagline: "The service catalog people actually keep up to date.",
    year: "2024",
    status: "live",
    featured: true,
    order: 2,
    role: "Lead engineer",
    tags: ["Developer Tooling", "Full Stack", "TypeScript"],
    stack: ["TypeScript", "Next.js", "PostgreSQL", "Kubernetes"],
    summary:
      "An internal service catalog that derives ownership, dependencies and health from the systems themselves instead of asking engineers to maintain a wiki.",
    overview: [
      "Every service catalog I had used before Atlas died the same death: it required humans to update it, humans did not, and within three months it was actively misleading. The failure was not discipline, it was design. A catalog that depends on manual upkeep is a catalog that is wrong.",
      "Atlas inverts that. It reads from the sources that are already true: Kubernetes manifests for what is deployed, the Git host for who owns the repository, the tracing backend for what actually calls what, and the incident tool for what has recently broken. Engineers declare almost nothing, and what they do declare is a single short file that CI validates.",
      "The dependency graph turned out to be the feature people cared about most. Derived from real trace data rather than declared intent, it repeatedly showed calls nobody knew existed, including two services that had been assumed decommissioned for a year.",
      "It is now the first place people look during an incident, which was the only adoption metric I actually cared about.",
    ],
    highlights: [
      {
        title: "Derived, not declared",
        description:
          "Ownership, deploys and dependencies come from Kubernetes, Git and trace data, so the catalog cannot drift out of date.",
        icon: "database",
      },
      {
        title: "Trace-backed dependency graph",
        description:
          "The graph shows calls that actually happen rather than calls someone documented, which surfaced several surprises.",
        icon: "lightning",
      },
      {
        title: "Incident-first surface",
        description:
          "Ownership, runbook, recent deploys and current alerts sit on one page, because that is what you need at 3am.",
        icon: "rocket",
      },
    ],
    metrics: [
      { label: "Services tracked", value: "212" },
      { label: "Manual fields", value: "4" },
      { label: "Weekly active users", value: "90+" },
      { label: "MTTR change", value: "-34%" },
    ],
    links: [
      { kind: "case-study", label: "Design notes", url: "https://example.com" },
    ],
    cover: {
      src: "/images/projects/atlas.svg",
      alt: "Atlas service catalog dependency view",
      width: 1200,
      height: 750,
    },
    gallery: [
      {
        src: "/images/projects/atlas-graph.svg",
        alt: "Service dependency graph derived from trace data",
        width: 1200,
        height: 750,
      },
    ],
  },
  {
    slug: "pulse-slo-toolkit",
    title: "Pulse",
    tagline: "SLOs as code, with an error budget that actually blocks releases.",
    year: "2024",
    status: "live",
    featured: true,
    order: 3,
    role: "Creator and maintainer",
    tags: ["Observability", "Open Source", "Go"],
    stack: ["Go", "Prometheus", "Grafana", "GitHub Actions"],
    summary:
      "An open-source toolkit that compiles SLO definitions into Prometheus rules, Grafana dashboards and a release gate, from one YAML file.",
    overview: [
      "Most teams I have worked with agree SLOs are a good idea and then never quite finish adopting them. The reason is mechanical: defining one properly means writing recording rules, burn-rate alerts at several windows, and a dashboard, then keeping all three consistent as the objective changes. It is a day of work per service, and it rots.",
      "Pulse takes a twelve-line YAML definition and generates all of it. One objective produces the recording rules, multi-window burn-rate alerts, a Grafana dashboard and a CI check that fails a release when the error budget is exhausted. Change the objective and everything regenerates together.",
      "The release gate is the part that made SLOs real rather than decorative. An error budget nobody enforces is a dashboard; one that blocks a deploy is a policy. Making that gate overridable with a recorded reason, rather than impossible to bypass, is what made teams willing to turn it on.",
      "It is open source and sees roughly 40,000 downloads a month, which is many more teams than I expected to care about burn-rate windows.",
    ],
    highlights: [
      {
        title: "One definition, four artefacts",
        description:
          "Recording rules, burn-rate alerts, a dashboard and a release gate all generate from the same twelve lines of YAML.",
        icon: "sparkle",
      },
      {
        title: "Multi-window burn rates",
        description:
          "Fast and slow windows are generated per objective following the Google SRE workbook, so pages correlate with real user harm.",
        icon: "gauge",
      },
      {
        title: "Overridable release gate",
        description:
          "Exhausted budgets block deploys but can be overridden with a recorded reason, which is why teams actually enable it.",
        icon: "shieldCheck",
      },
    ],
    metrics: [
      { label: "Downloads / month", value: "40k" },
      { label: "GitHub stars", value: "2.1k" },
      { label: "Contributors", value: "34" },
      { label: "Setup time per SLO", value: "1 day to 10 min" },
    ],
    links: [
      { kind: "repo", label: "Source", url: "https://github.com" },
      { kind: "package", label: "Releases", url: "https://github.com" },
      {
        kind: "case-study",
        label: "Documentation",
        url: "https://example.com",
      },
    ],
    cover: {
      src: "/images/projects/pulse.svg",
      alt: "Pulse error budget dashboard",
      width: 1200,
      height: 750,
    },
    gallery: [
      {
        src: "/images/projects/pulse-budget.svg",
        alt: "Error budget burn-down over a 30-day window",
        width: 1200,
        height: 750,
      },
    ],
  },
  {
    slug: "driftwatch",
    title: "Driftwatch",
    tagline: "Catching infrastructure drift before the next apply does.",
    year: "2023",
    status: "live",
    featured: false,
    order: 4,
    role: "Creator and maintainer",
    tags: ["Infrastructure", "Open Source", "Python"],
    stack: ["Python", "Terraform", "AWS", "Slack"],
    summary:
      "A scheduled drift detector that diffs live cloud state against Terraform state and reports the delta as a reviewable summary.",
    overview: [
      "Terraform tells you about drift at the worst possible moment: during an apply, when you are already trying to ship something else. Someone clicked through the console three weeks ago, and now your unrelated change comes bundled with a surprise.",
      "Driftwatch moves that discovery earlier. It runs on a schedule, diffs live cloud state against recorded Terraform state, and posts a human-readable summary of what changed, when, and which identity changed it, by correlating against CloudTrail.",
      "The attribution is what made it useful rather than annoying. A diff saying a security group has an extra rule generates a shrug. One saying that rule was added by a named person on Tuesday during incident 412 generates a decision.",
    ],
    highlights: [
      {
        title: "CloudTrail attribution",
        description:
          "Each drift item is correlated with the API call that caused it, so the report names who changed what and when.",
        icon: "users",
      },
      {
        title: "Noise suppression",
        description:
          "Fields that legitimately change outside Terraform are declared once and filtered, which kept the signal worth reading.",
        icon: "wrench",
      },
    ],
    metrics: [
      { label: "Accounts monitored", value: "23" },
      { label: "Drift caught pre-apply", value: "180+" },
      { label: "GitHub stars", value: "640" },
    ],
    links: [{ kind: "repo", label: "Source", url: "https://github.com" }],
    cover: {
      src: "/images/projects/driftwatch.svg",
      alt: "Driftwatch drift report summary",
      width: 1200,
      height: 750,
    },
    gallery: [],
  },
  {
    slug: "relay-feature-flags",
    title: "Relay",
    tagline: "Feature flags with a 200-microsecond read path.",
    year: "2023",
    status: "wip",
    featured: false,
    order: 5,
    role: "Engineer",
    tags: ["Infrastructure", "Full Stack", "Rust"],
    stack: ["Rust", "TypeScript", "Redis", "PostgreSQL"],
    summary:
      "A feature flag service with an in-process evaluation path, built after a vendor outage took down flag reads across production.",
    overview: [
      "We lost twenty minutes of production availability to a feature flag vendor outage. Not because the flags were wrong, but because evaluating them required a network call, and when that call failed our services failed with it. A dependency on a flag service during the request path is a dependency you cannot afford.",
      "Relay pushes evaluation in-process. Services hold the full ruleset in memory, updated by a streaming change feed, so an evaluation is a local lookup rather than a network call. If the control plane disappears, every service keeps serving the last known ruleset indefinitely.",
      "It is still a work in progress. The evaluation core and the Rust and TypeScript SDKs are solid; the admin interface is functional but plain, and percentage rollouts need better targeting before I would call it finished.",
    ],
    highlights: [
      {
        title: "In-process evaluation",
        description:
          "The full ruleset lives in memory behind a streaming change feed, so a flag read is a local lookup at around 200 microseconds.",
        icon: "lightning",
      },
      {
        title: "Fails static, not closed",
        description:
          "If the control plane is unreachable, services keep serving the last known ruleset instead of falling back to defaults.",
        icon: "shieldCheck",
      },
    ],
    metrics: [
      { label: "p99 evaluation", value: "0.2ms" },
      { label: "Read-path dependency", value: "None" },
      { label: "SDKs", value: "2" },
    ],
    links: [{ kind: "repo", label: "Source", url: "https://github.com" }],
    cover: {
      src: "/images/projects/relay.svg",
      alt: "Relay flag evaluation architecture",
      width: 1200,
      height: 750,
    },
    gallery: [],
  },
  {
    slug: "coldstart",
    title: "Coldstart",
    tagline: "Eleven minutes from nothing to a working dev environment.",
    year: "2022",
    status: "archived",
    featured: false,
    order: 6,
    role: "Creator",
    tags: ["Developer Tooling", "Infrastructure", "Bash"],
    stack: ["Bash", "Docker", "Ansible", "Make"],
    summary:
      "An environment bootstrapper that took new-developer setup from two days of following a wiki to a single command.",
    overview: [
      "Onboarding took two days, most of it spent discovering that the setup wiki was written against last year of toolchain. Every new hire rediscovered the same gaps, fixed them locally, and did not update the document, because by then they had real work to do.",
      "Coldstart replaced the wiki with a script. One command provisioned the toolchain, cloned and configured the repositories, seeded a local database and verified the result with a health check that named exactly what was broken when something failed.",
      "It is archived now, and that is the right outcome. The organisation moved to containerised dev environments, which solves the same problem more thoroughly than a bootstrapper can. I am keeping it listed because the health-check-as-documentation idea is the part worth stealing.",
    ],
    highlights: [
      {
        title: "Health check as documentation",
        description:
          "A failing check named the exact missing piece and how to fix it, which made the script self-explaining when it broke.",
        icon: "testTube",
      },
      {
        title: "Idempotent by construction",
        description:
          "Running it twice was always safe, so it doubled as the repair tool for an environment that had drifted.",
        icon: "wrench",
      },
    ],
    metrics: [
      { label: "Setup time", value: "2 days to 11 min" },
      { label: "Engineers onboarded", value: "60+" },
    ],
    links: [
      { kind: "repo", label: "Archived source", url: "https://github.com" },
    ],
    cover: {
      src: "/images/projects/coldstart.svg",
      alt: "Coldstart bootstrap terminal output",
      width: 1200,
      height: 750,
    },
    gallery: [],
  },
] satisfies readonly Project[];
