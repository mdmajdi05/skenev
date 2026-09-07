import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import ScannerStory from "@/components/about/ScannerStory";
import AboutTechnology from "@/components/about/AboutTechnology";
import FeatureImage from "@/components/about/FeatureImage";
import AboutBelief from "@/components/about/AboutBelief";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About — SKENEV",
  description:
    "The story behind SKENEV — intelligent beauty technology designed to make every consultation deeper, faster and more personal.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
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
      <SiteFooter />
    </>
  );
}