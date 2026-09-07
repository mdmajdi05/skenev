import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import AboutHero from "@/components/about/AboutHero";
import AboutCTA from "@/components/about/AboutCTA";
import Reveal from "@/components/Reveal";
import styles from "@/styles/site.module.css";

export const metadata: Metadata = {
  title: "AI Scalp Analysis — SKENEV",
  description:
    "SKENEV AI Scalp Analysis — understand scalp condition, hair characteristics, moisture, sebum and other key indicators.",
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

export default function AIScalpAnalysisPage() {
  return (
    <>
      <SiteNav />
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
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}