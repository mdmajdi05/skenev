import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import AboutHero from "@/components/about/AboutHero";
import AboutCTA from "@/components/about/AboutCTA";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import styles from "@/styles/site.module.css";

export const metadata: Metadata = buildMetadata({
  title:
    "AI Skin Analysis in India — SKENEV Multi-Condition Skin Scanner",
  description:
    "SKENEV AI skin analysis scans 11+ conditions — moisture, oil, pigment, lesions and tone — for dermatologists and clinics across India.",
  path: "/solutions/ai-skin-analysis",
  keywords: [
    "AI skin analysis India",
    "skin scanner for dermatologists",
    "skin condition detection",
    "skin analysis device",
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
      name: "AI Skin Analysis",
      item: `${SITE_URL}/solutions/ai-skin-analysis`,
    },
  ],
};

const FEATURES = [
  {
    title: "Multi-Condition Detection",
    copy: "One scan reads moisture, oil, tone, pigmentation and early signs — a full picture of your skin in under a minute.",
  },
  {
    title: "Full-Face Mapping",
    copy: "Each face becomes a precise map, section by section, so every insight is grounded in exactly where it lives.",
  },
  {
    title: "Lesion Tracking",
    copy: "Moles, spots and marks are measured and monitored over time, helping professionals notice meaningful change.",
  },
  {
    title: "Texture & Tone Metrics",
    copy: "Deep metrics on elasticity, smoothness and evenness turn subjective feelings into objective, shareable numbers.",
  },
  {
    title: "Report Builder",
    copy: "Professional, branded reports in one click — ready to inform a consult, a routine or a treatment plan.",
  },
  {
    title: "Progress Tracking",
    copy: "Comparisons across visits reveal what is working, keeping clients engaged and treatments accountable.",
  },
];

export default function AISkinAnalysisPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <SiteNav />
      <main>
        <AboutHero
          eyebrow="Solutions / AI Skin Analysis"
          title={[{ text: "See skin," }, { text: "deeply.", accent: true }]}
          copy="Analyze multiple skin conditions and transform visual information into clear, personalized insights — faster than a mirror ever could."
          showScroll
          signature={
            <>
              Every insight, <em>grounded in precision.</em>
            </>
          }
        />
        <section className={styles.technology}>
          <div className={styles.technologyInner}>
            <div className={styles.sectionHeading}>
              <h2>
                Skin intelligence, <em>pixel by pixel.</em>
              </h2>
              <p>
                Our analysis engine turns a single scan into a detailed portrait of your skin.
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
      <SiteFooter />
    </>
  );
}