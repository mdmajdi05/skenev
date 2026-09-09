import type { Metadata } from "next";
import Link from "next/link";
import AboutHero from "@/components/about/AboutHero";
import AboutCTA from "@/components/about/AboutCTA";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import styles from "@/styles/site.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Careers at SKENEV — Build the Future of Beauty Technology in India",
  description:
    "Join SKENEV in India — build intelligent beauty technology for skin, scalp and beauty analysis. Open roles in AI, engineering, design, sales and growth.",
  path: "/careers",
  keywords: [
    "SKENEV careers",
    "beauty tech jobs India",
    "AI beauty scanner startup",
    "computer vision jobs Delhi",
    "beauty technology startup",
  ],
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Careers", item: `${SITE_URL}/careers` },
  ],
};

const ROLES = [
  {
    title: "Computer Vision Engineer",
    type: "Full-time · New Delhi",
    copy: "Build the imaging pipeline behind our AI scanner — hyperspectral capture, calibration and real-time skin & scalp segmentation.",
  },
  {
    title: "AI/ML Engineer — Skin & Scalp Intelligence",
    type: "Full-time · New Delhi / Remote",
    copy: "Train and ship deep-learning models for 11+ beauty parameters across Indian skin tones, with a focus on robustness and speed.",
  },
  {
    title: "Beauty & Wellness Strategist",
    type: "Full-time · New Delhi",
    copy: "Be the human bridge between AI and dermatology — define clinical workflows, validation studies and consultation playbooks.",
  },
  {
    title: "Sales & Partnerships Lead — Clinics & Salons",
    type: "Full-time · PAN India",
    copy: "Take SKENEV into dermatology clinics and salon chains across India — demos, pilots, onboarding and long-term partnerships.",
  },
  {
    title: "Product Designer",
    type: "Full-time · New Delhi",
    copy: "Design the scanner experience and client-facing reports — making complex analysis feel simple, personal and beautiful.",
  },
  {
    title: "Growth & Marketing Executive",
    type: "Full-time · Remote",
    copy: "Tell the SKENEV story — content, campaigns and community for beauty professionals building their businesses on smarter intelligence.",
  },
];

const PERKS = [
  { title: "Ownership", copy: "Small team, big problems. Every hire owns their work end to end — from first sketch to production." },
  { title: "Real hardware", copy: "You are not building for a dashboard — your code runs in the scanner on a clinic floor in Mumbai or Jaipur." },
  { title: "Care for people", copy: "Flexible hours, health cover and a team that treats your growth as seriously as the product's." },
];

export default function CareersPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <main>
        <AboutHero
          eyebrow="Careers at SKENEV"
          title={[{ text: "Beauty," }, { text: "built by people.", accent: true }]}
          copy="We are a small, ambitious team in New Delhi building the intelligent beauty technology of India. If you care about craft, people and real science — there is a place for you here."
          showScroll
          signature={
            <>
              Do the best work of your life, <em>on something that matters.</em>
            </>
          }
        />

        <section className={styles.technology}>
          <div className={styles.technologyInner}>
            <div className={styles.sectionHeading}>
              <h2>
                Open roles, <em>real impact.</em>
              </h2>
              <p>
                Currently hiring across engineering, science, design, sales and
                growth. Don&rsquo;t see your role? Still write to us.
              </p>
            </div>
            <div className={styles.techGrid}>
              {ROLES.map((role, i) => (
                <Reveal key={role.title} className={styles.techCard}>
                  <h3>{role.title}</h3>
                  <p className={styles.careerRoleType}>{role.type}</p>
                  <p>{role.copy}</p>
                  <Link href="/contact" className={styles.careerApply}>
                    Apply for this role {"\u2192"}
                  </Link>
                  <span className={styles.techNumber}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.careerPerks}>
          <div className={styles.technologyInner}>
            <div className={styles.sectionHeading}>
              <h2>
                Working here <em>feels different.</em>
              </h2>
              <p>
                Because the mission is human — every scan, every report, every
                insight touches a real person.
              </p>
            </div>
            <div className={styles.careerPerksGrid}>
              {PERKS.map((perk) => (
                <Reveal key={perk.title} className={styles.careerPerk}>
                  <h3>{perk.title}</h3>
                  <p>{perk.copy}</p>
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