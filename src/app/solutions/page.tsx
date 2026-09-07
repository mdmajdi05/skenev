import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import AboutHero from "@/components/about/AboutHero";
import AboutTechnology from "@/components/about/AboutTechnology";
import SolutionCards from "@/components/about/SolutionCards";
import AboutCTA from "@/components/about/AboutCTA";
import styles from "@/styles/site.module.css";

export const metadata: Metadata = {
  title: "Solutions — SKENEV",
  description:
    "SKENEV intelligent beauty technology for dermatologists, clinics, salons and beauty brands.",
};

export default function SolutionsPage() {
  return (
    <>
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