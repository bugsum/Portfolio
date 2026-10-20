import { site } from "@/content/site";
import { profile } from "@/content/profile";
import { socials } from "@/content/socials";
import type { Project } from "@/types/content";

function Script({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PersonJsonLd() {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: `${profile.firstName} ${profile.lastName}`,
        jobTitle: profile.role,
        description: profile.bio.short,
        email: `mailto:${profile.email}`,
        url: site.url,
        address: {
          "@type": "PostalAddress",
          addressLocality: profile.location.city,
          addressCountry: profile.location.country,
        },
        sameAs: socials
          .filter((social) => !social.url.startsWith("mailto:"))
          .map((social) => social.url),
      }}
    />
  );
}

export function ProjectJsonLd({ project }: { project: Project }) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.title,
        headline: project.tagline,
        description: project.summary,
        url: `${site.url}/projects/${project.slug}`,
        dateCreated: project.year,
        keywords: project.tags.join(", "),
        author: {
          "@type": "Person",
          name: `${profile.firstName} ${profile.lastName}`,
        },
      }}
    />
  );
}
