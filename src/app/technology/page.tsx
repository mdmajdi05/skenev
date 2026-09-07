import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import AboutHero from "@/components/about/AboutHero";
import AboutTechnology from "@/components/about/AboutTechnology";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "Technology — SKENEV",
  description:
    "Hyperspectral imaging, deep learning and a personalization engine — the stack behind SKENEV intelligent beauty technology.",
};

export default function TechnologyPage() {
  return (
    <>
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