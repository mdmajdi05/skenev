import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import AboutHero from "@/components/about/AboutHero";
import AboutCTA from "@/components/about/AboutCTA";
import ProductCards from "@/components/about/ProductCards";
import styles from "@/styles/site.module.css";

export const metadata: Metadata = {
  title: "Products — SKENEV",
  description:
    "SkenVision, HairAi and DermaAi — SKENEV intelligent beauty tools for dermatologists, clinics, salons and beauty brands.",
};

export default function ProductsPage() {
  return (
    <>
      <SiteNav />
      <main>
        <AboutHero
          eyebrow="Products"
          title={[
            { text: "Tools that" },
            { text: "beauty trusts.", accent: true },
          ]}
          copy="Three purpose-built products, one intelligent platform — made for the way beauty professionals actually work."
          showScroll
          signature={
            <>
              Made to measure, <em>made to last.</em>
            </>
          }
        />
        <section className={styles.technology}>
          <div className={styles.technologyInner}>
            <div className={styles.sectionHeading}>
              <h2>
                Built for <em>every practice.</em>
              </h2>
              <p>
                Each product is designed around a different kind of beauty expert —
                choose the one that fits your work.
              </p>
            </div>
            <ProductCards />
          </div>
        </section>
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}