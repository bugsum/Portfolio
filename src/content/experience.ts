import type { Experience } from "@/types/content";

export const experiences = [
  {
    id: "northwind",
    company: "Northwind Systems",
    companyUrl: "https://example.com",
    role: "Senior Platform Engineer",
    employment: "full-time",
    start: "2023-02",
    end: null,
    location: "Bengaluru, India · Hybrid",
    summary:
      "Lead the developer platform for 120 engineers across nine product teams, covering build, deploy and observability.",
    highlights: [
      "Rebuilt the monorepo build graph with remote caching, cutting median CI from 24 minutes to 7.",
      "Designed the internal deployment CLI now used for every production release, replacing four bespoke scripts per team.",
      "Introduced OpenTelemetry tracing across 40 services and retired three overlapping monitoring vendors.",
      "Run a fortnightly platform office hour that turned into the main channel for roadmap input.",
    ],
    stack: ["Go", "TypeScript", "Kubernetes", "Terraform", "OpenTelemetry"],
  },
  {
    id: "harbor",
    company: "Harbor Analytics",
    companyUrl: "https://example.com",
    role: "Infrastructure Engineer",
    employment: "full-time",
    start: "2020-06",
    end: "2023-01",
    location: "Remote",
    summary:
      "Owned the ingestion and query infrastructure behind a time-series analytics product serving 300M events per day.",
    highlights: [
      "Migrated ingestion from a single Postgres primary to a sharded ClickHouse cluster with no customer-visible downtime.",
      "Cut p99 query latency from 4.2s to 480ms by restructuring the partitioning scheme.",
      "Built the autoscaling model that reduced monthly compute spend by 38% while absorbing 3x traffic growth.",
    ],
    stack: ["Python", "ClickHouse", "AWS", "Docker", "Prometheus"],
  },
  {
    id: "meridian",
    company: "Meridian Labs",
    companyUrl: null,
    role: "Site Reliability Engineer",
    employment: "full-time",
    start: "2018-08",
    end: "2020-05",
    location: "Pune, India",
    summary:
      "First SRE hire. Built the on-call practice, incident process and monitoring stack from nothing.",
    highlights: [
      "Established SLOs for the twelve highest-traffic services and the error-budget policy that governed releases.",
      "Reduced mean time to recovery from 96 minutes to 21 through runbooks and better alert routing.",
      "Automated environment provisioning, taking new-environment setup from two days to eleven minutes.",
    ],
    stack: ["Bash", "Python", "Ansible", "Grafana", "PagerDuty"],
  },
  {
    id: "university",
    company: "Ashcroft University, HPC Group",
    companyUrl: null,
    role: "Systems Administrator",
    employment: "full-time",
    start: "2017-01",
    end: "2018-07",
    location: "Pune, India",
    summary:
      "Kept a 200-node research compute cluster running for physics and bioinformatics groups.",
    highlights: [
      "Wrote the job-scheduling wrapper that ended months of manual queue arbitration between research groups.",
      "Recovered the cluster from a storage controller failure with no data loss, then rebuilt the backup strategy that made it survivable.",
    ],
    stack: ["Bash", "Slurm", "Linux", "NFS"],
  },
] satisfies readonly Experience[];
