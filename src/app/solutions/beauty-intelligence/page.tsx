import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutCTA from "@/components/about/AboutCTA";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import styles from "@/styles/site.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Beauty Intelligence — SKENEV AI Beauty Analytics for Brands",
  description:
    "SKENEV beauty intelligence builds personalized beauty experiences with AI-powered recommendations and visual intelligence for Indian beauty brands.",
  path: "/solutions/beauty-intelligence",
  keywords: [
    "beauty intelligence platform",
    "AI beauty analytics brands",
    "consumer-scale beauty studies",
    "beauty trend analysis India",
  ],
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Solutions",
      item: `${SITE_URL}/solutions`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Beauty Intelligence",
      item: `${SITE_URL}/solutions/beauty-intelligence`,
    },
  ],
};

const FEATURES = [
  {
    title: "Consumer-Scale Studies",
    copy: "Run studies across thousands of real faces to understand how products truly perform in the wild.",
  },
  {
    title: "Ingredient Insights",
    copy: "Connect ingredient chemistry to measured skin outcomes, revealing what actually works.",
  },
  {
    title: "Trend Signals",
    copy: "Spot rising behaviors and preferences early, so your brand leads instead of follows.",
  },
  {
    title: "Visual Intelligence",
    copy: "Computer vision reads beauty signals in everyday imagery — turning content into data.",
  },
  {
    title: "Brand Analytics",
    copy: "Dashboards that turn raw scans into decisions: formulation, claims and marketing strategy.",
  },
  {
    title: "Forecast Models",
    copy: "Predictive models anticipate demand and preferences, keeping your product pipeline ahead.",
  },
];

export default function BeautyIntelligencePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <main>
        <AboutHero
          eyebrow="Solutions / Beauty Intelligence"
          title={[{ text: "Beauty that learns" }, { text: "from real people.", accent: true }]}
          copy="Build personalized beauty experiences using AI-powered recommendations and visual intelligence — at a scale no human panel can match."
          showScroll
          signature={
            <>
              Every signal, <em>a smarter brand.</em>
            </>
          }
        />
        <section className={styles.technology}>
          <div className={styles.technologyInner}>
            <div className={styles.sectionHeading}>
              <h2>
                Beauty intelligence, <em>at scale.</em>
              </h2>
              <p>
                Turn collective experience into competitive insight for the brands who understand it.
              </p>
            </div>
            <div className={styles.techGrid}>
              {FEATURES.map((card, i) => (
                <Reveal key={card.title} className={styles.techCard}>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                  <span className={styles.techNumber}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <AboutCTA />
      </main>
    </>
  );
}