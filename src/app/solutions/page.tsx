import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutTechnology from "@/components/about/AboutTechnology";
import SolutionCards from "@/components/about/SolutionCards";
import AboutCTA from "@/components/about/AboutCTA";
import SeoFaqSection from "@/components/SeoFaqSection";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import styles from "@/styles/site.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Beauty Solutions — SKENEV AI Skin, Scalp & Scanner Technology",
  description:
    "SKENEV intelligent beauty technology for dermatologists, clinics, salons and beauty brands across India — AI skin analysis, scalp analysis and beauty intelligence.",
  path: "/solutions",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_URL}/solutions` },
  ],
};

const SOLUTIONS_FAQ = [
  {
    question: "What can SKENEV analyze?",
    answer:
      "SKENEV analyzes the skin and scalp in depth — moisture, oil, tone, pigmentation, lesions, follicles, density and more — and turns the findings into personalized beauty intelligence.",
  },
  {
    question: "Who is SKENEV for?",
    answer:
      "Dermatologists, hair clinics, salons, medispas and beauty brands across India who want objective, personal beauty intelligence in their work every day.",
  },
  {
    question: "How do the solutions work together?",
    answer:
      "One scanner powers all three: AI skin analysis, AI scalp analysis and beauty intelligence. Data flows into a single platform linked to personalized recommendations.",
  },
  {
    question: "Do I need multiple devices?",
    answer:
      "No. A single SKENEV device covers skin, scalp and beauty intelligence — one product, one subscription, three modes.",
  },
  {
    question: "Can you help us get started?",
    answer:
      "Yes. Our New Delhi team offers demos, onboarding and ongoing support for clinics, salons and beauty brands anywhere in India.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <main>
        <AboutHero
          eyebrow="Solutions"
          title={[
            { text: "Built for" },
            { text: "every journey.", accent: true },
          ]}
          copy="One intelligent platform, tailored to the way you work — whether you diagnose, treat, sell or formulate."
          showScroll
          signature={
            <>
              The right tool, <em>for the right touch.</em>
            </>
          }
        />
        <section className={styles.technology}>
          <div className={styles.technologyInner}>
            <div className={styles.sectionHeading}>
              <h2>
                Made for <em>your practice.</em>
              </h2>
              <p>
                Three ways to bring SKENEV into your work — each designed around a
                different kind of beauty expert.
              </p>
            </div>
            <SolutionCards />
          </div>
        </section>
        <AboutTechnology />
        <SeoFaqSection
          items={SOLUTIONS_FAQ}
          heading="Solutions,"
          accent="questions answered."
          intro="How clinics, salons and brands bring SKENEV into their work."
        />
        <AboutCTA />
      </main>
    </>
  );
}