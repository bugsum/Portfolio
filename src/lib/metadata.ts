import type { Metadata } from "next";
import { site } from "@/content/site";

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
};

export function buildMetadata({
  title,
  description = site.description,
  path = "/",
}: BuildMetadataInput = {}): Metadata {
  const resolvedTitle = title ? `${title} — ${site.name}` : site.title;

  return {
    metadataBase: new URL(site.url),
    title: resolvedTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: site.locale.replace("-", "_"),
      url: path,
      title: resolvedTitle,
      description,
    },
    icons: { icon: "/icon.svg" },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
    },
  };
}
