import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import ScannerStory from "@/components/about/ScannerStory";
import AboutTechnology from "@/components/about/AboutTechnology";
import FeatureImage from "@/components/about/FeatureImage";
import AboutBelief from "@/components/about/AboutBelief";
import AboutCTA from "@/components/about/AboutCTA";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About SKENEV — Intelligent Beauty Technology from India",
  description:
    "The story behind SKENEV — intelligent beauty technology made in India to make every consultation deeper, faster and more personal.",
  path: "/about",
});

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${site.name}`,
  description: site.description,
  url: `${SITE_URL}/about`,
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <main>
        <AboutHero
          eyebrow="About SKENEV"
          title={[{ text: "Beauty," }, { text: "understood.", accent: true }]}
          copy="We build intelligent beauty technology that reads skin, scalp and beauty at a depth no human eye can match — then translates it into understanding."
          showScroll
          signature={
            <>
              Our mission <em>is the human side of intelligence.</em>
            </>
          }
        />
        <AboutIntro />
        <ScannerStory />
        <AboutTechnology />
        <FeatureImage />
        <AboutBelief />
        <AboutCTA />
      </main>
    </>
  );
}