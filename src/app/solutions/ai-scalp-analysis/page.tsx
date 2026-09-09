import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutCTA from "@/components/about/AboutCTA";
import AudienceSection from "@/components/AudienceSection";
import SeoFaqSection from "@/components/SeoFaqSection";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import styles from "@/styles/site.module.css";

export const metadata: Metadata = buildMetadata({
  title: "AI Scalp Analysis — SKENEV Hair & Scalp Scanner India",
  description:
    "SKENEV AI scalp analysis understands scalp condition, hair density, moisture, sebum and follicle health — for hair clinics across India.",
  path: "/solutions/ai-scalp-analysis",
  keywords: [
    "AI scalp analysis India",
    "scalp scanner for hair clinics",
    "hair density mapping",
    "scalp health analysis",
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
      name: "AI Scalp Analysis",
      item: `${SITE_URL}/solutions/ai-scalp-analysis`,
    },
  ],
};

const FEATURES = [
  {
    title: "Scalp Condition Scoring",
    copy: "A clear health score for the scalp — balancing oil, dryness, redness and sensitivity in one glance.",
  },
  {
    title: "Hair Density Mapping",
    copy: "Precise mapping of hair density across regions reveals thinning patterns before they become visible.",
  },
  {
    title: "Moisture & Sebum",
    copy: "Laboratory-grade readings of hydration and sebum keep oily and oily-prone scalp care effective.",
  },
  {
    title: "Follicle Tracking",
    copy: "Follow follicle activity over time to validate treatments with hard, comparable numbers.",
  },
  {
    title: "Flake & Irritation",
    copy: "Dandruff, flaking and irritation are quantified, so the right therapy wins the argument.",
  },
  {
    title: "Routine Pairing",
    copy: "Scalp findings link directly to product and treatment recommendations that make sense for each client.",
  },
];

const FAQS = [
  {
    question: "What does AI scalp analysis measure?",
    answer:
      "SKENEV measures scalp condition, hair density, moisture, sebum, follicle activity, flaking and irritation — delivering a complete scalp health profile in under 60 seconds.",
  },
  {
    question: "Can hair clinics use SKENEV for diagnosis?",
    answer:
      "Many hair clinics and trichology practices use SKENEV for objective documentation, thinning detection and treatment validation, with branded reports for each client.",
  },
  {
    question: "Does it work for all hair types?",
    answer:
      "Yes. The scalp engine is calibrated across straight, wavy, curly and coily hair textures and Indian hair profiles.",
  },
  {
    question: "How does follicle tracking help treatments?",
    answer:
      "Follicle activity is re-measured at follow-up visits, giving clinics comparable numbers that show whether a protocol is working — or should change.",
  },
  {
    question: "Is scalp analysis linked to product recommendations?",
    answer:
      "Yes. Scalp findings feed the routine builder, pairing each client with shampoos, serums and treatments matched to their measured condition.",
  },
];

const AUDIENCE = [
  {
    title: "Hair Clinics",
    copy: "Objective density and follicle data that make every consultation and follow-up more credible.",
  },
  {
    title: "Trichologists",
    copy: "Quantified scalp scoring and progress tracking that supports diagnosis and treatment planning.",
  },
  {
    title: "Salons & Barber Studios",
    copy: "A premium scalp check-up that drives retail sales and long-term client loyalty.",
  },
  {
    title: "Hair Care Brands",
    copy: "Scalp-level efficacy data for claims, product development and personalized routines.",
  },
];

export default function AIScalpAnalysisPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <main>
        <AboutHero
          eyebrow="Solutions / AI Scalp Analysis"
          title={[{ text: "Healthy hair starts" }, { text: "at the scalp.", accent: true }]}
          copy="Understand scalp condition, hair characteristics, moisture, sebum and other key indicators — for hair care with real evidence."
          showScroll
          signature={
            <>
              Root-level insight, <em>lasting results.</em>
            </>
          }
        />
        <section className={styles.technology}>
          <div className={styles.technologyInner}>
            <div className={styles.sectionHeading}>
              <h2>
                Hair intelligence, <em>from the root up.</em>
              </h2>
              <p>
                A professional scalp assessment in seconds — objective, measurable and personal.
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
        <AudienceSection
          heading="Scalp insight,"
          accent="for hair health professionals."
          intro="Built for the clinics, studios and brands trusted with the hair people care about most."
          items={AUDIENCE}
        />
        <SeoFaqSection
          items={FAQS}
          heading="Scalp analysis,"
          accent="questions answered."
          intro="What hair clinics and salons ask before bringing SKENEV on board."
        />
        <AboutCTA />
      </main>
    </>
  );
}