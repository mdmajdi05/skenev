import type { Metadata } from "next";
import { SITE_URL, site } from "./site";

type PartialSeo = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogType?: "website" | "article";
};

export function abs(path = "/") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean === "/" ? "" : clean}`;
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  ogType = "website",
}: PartialSeo): Metadata {
  const url = abs(path ?? "/");
  return {
    title,
    description,
    keywords: [...(keywords ?? site.keywords)],
    alternates: { canonical: url },
    openGraph: {
      type: ogType,
      url,
      siteName: site.name,
      title,
      description,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export { SITE_URL, site };