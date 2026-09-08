import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutCTA from "@/components/about/AboutCTA";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import styles from "@/styles/site.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Personalized Beauty Recommendations — SKENEV AI Routine Builder",
  description:
    "SKENEV personalized recommendations build bespoke beauty routines from AI analysis — matched to one unique beauty signature in India.",
  path: "/solutions/personalized-recommendations",
  keywords: [
    "personalized skincare recommendations",
    "AI beauty routine builder",
    "skincare product pairing",
    "bespoke beauty routine India",
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
      name: "Personalized Recommendations",
      item: `${SITE_URL}/solutions/personalized-recommendations`,
    },
  ],
};

const FEATURES = [
  {
    title: "Bespoke Routine Builder",
    copy: "Every scan produces a routine assembled for one face — steps, order and frequency included.",
  },
  {
    title: "Product Pairing Engine",
    copy: "Ingredients are matched to findings, pairing the right product with the right skin and moment.",
  },
  {
    title: "Adaptive Learning",
    copy: "Recommendations sharpen with every follow-up scan, adapting as your beauty evolves.",
  },
  {
    title: "Progress Reports",
    copy: "Clients see their own measurable progress, which builds trust and long-term loyalty.",
  },
  {
    title: "Retail Integration",
    copy: "Routines connect directly to checkout, turning insight into revenue for your business.",
  },
  {
    title: "Confidence Scoring",
    copy: "Each recommendation carries a confidence score, so clients know exactly how much to trust it.",
  },
];

export default function PersonalizedRecommendationsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <main>
        <AboutHero
          eyebrow="Solutions / Personalized Recommendations"
          title={[{ text: "One routine," }, { text: "matched to you.", accent: true }]}
          copy="Build bespoke beauty routines from AI analysis, matched to one unique beauty signature — and adapt them as you change."
          showScroll
          signature={
            <>
              Your beauty, <em>your blueprint.</em>
            </>
          }
        />
        <section className={styles.technology}>
          <div className={styles.technologyInner}>
            <div className={styles.sectionHeading}>
              <h2>
                Recommendations, <em>built around you.</em>
              </h2>
              <p>
                Personalized to the person, proven by data and updated with every visit.
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