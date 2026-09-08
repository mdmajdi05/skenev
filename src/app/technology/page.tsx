import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import AboutHero from "@/components/about/AboutHero";
import AboutTechnology from "@/components/about/AboutTechnology";
import AboutCTA from "@/components/about/AboutCTA";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Technology — SKENEV AI Beauty Scanner Tech Stack",
  description:
    "Hyperspectral imaging, deep learning and a personalization engine — the stack behind SKENEV intelligent beauty technology for India.",
  path: "/technology",
});

const techSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "SKENEV Technology",
  description: "Hyperspectral imaging, deep learning and personalization engine behind the SKENEV AI scanner.",
  url: `${SITE_URL}/technology`,
};

export default function TechnologyPage() {
  return (
    <>
      <JsonLd data={techSchema} />
      <SiteNav />
      <main>
        <AboutHero
          eyebrow="Technology"
          title={[
            { text: "Intelligence," },
            { text: "behind every scan.", accent: true },
          ]}
          copy="From hyperspectral sensors to deep learning models, our stack is built to do remarkable work — and make it feel effortless."
          showScroll
          signature={
            <>
              Precision that <em>starts with people.</em>
            </>
          }
        />
        <AboutTechnology />
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}