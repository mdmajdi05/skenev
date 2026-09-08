import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import AboutHero from "@/components/about/AboutHero";
import AboutTechnology from "@/components/about/AboutTechnology";
import SolutionCards from "@/components/about/SolutionCards";
import AboutCTA from "@/components/about/AboutCTA";
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

export default function SolutionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <SiteNav />
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
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}