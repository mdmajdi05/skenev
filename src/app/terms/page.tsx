import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutCTA from "@/components/about/AboutCTA";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, site } from "@/lib/site";
import styles from "@/styles/site.module.css";

type Section = { heading: string; body: string[]; bullets?: string[] };

const SECTIONS: Section[] = [
  {
    heading: "1. Acceptance of Terms",
    body: [
      "By accessing the SKENEV website, pre-booking a device or subscribing to our services, you agree to be bound by these Terms & Conditions. If you use SKENEV on behalf of a clinic, salon or business, you confirm that you are authorised to accept these terms on its behalf.",
    ],
  },
  {
    heading: "2. Pre-Booking",
    body: [
      "A pre-booking expresses interest in a SKENEV AI scanner and its subscription plans. It does not constitute a binding purchase until you confirm an order.",
    ],
    bullets: [
      "Pre-booking does not guarantee device allocation; priority follows the order in which bookings are received.",
      "We may contact you by WhatsApp, phone or email to confirm your pre-booking and schedule a demo or delivery.",
      "Pre-booking deposits, if any, are clearly stated at the time of booking and refundable as described in our refund policy.",
    ],
  },
  {
    heading: "3. Products & Services",
    body: [
      "SKENEV scanners, analysis reports and beauty intelligence services are provided for professional use in dermatology, hair and beauty settings. Analysis results are informational and should not replace professional medical diagnosis or treatment.",
    ],
    bullets: [
      "Product specifications, availability and pricing may change from time to time; you will be informed of material changes before purchase.",
      "We make reasonable efforts to keep service availability high, but occasional maintenance or interruptions may occur.",
    ],
  },
  {
    heading: "4. Subscriptions, Pricing & Payment",
    body: [
      "Subscription plans, billing cycles and renewal terms are communicated at the time of purchase. Fees are exclusive of applicable taxes unless stated otherwise.",
    ],
    bullets: [
      "Non-payment may result in suspension of access to cloud analysis features.",
      "Refunds are subject to the refund policy communicated at checkout.",
      "We may revise pricing for future billing cycles with reasonable notice.",
    ],
  },
  {
    heading: "5. Acceptable Use",
    body: [
      "You agree to use SKENEV lawfully and responsibly.",
    ],
    bullets: [
      "Do not misuse the platform, attempt unauthorised access, or use analysis reports for unlawful or misleading purposes.",
      "You are responsible for the accuracy of the information you provide and for keeping your account credentials secure.",
      "Do not share analysis data that you are not authorised to share.",
    ],
  },
  {
    heading: "6. Intellectual Property",
    body: [
      "All content on this website and in SKENEV products — including logos, designs, software, imagery and analysis methodology — is the property of SKENEV and its licensors. You may not copy, reproduce or repurpose it without prior written consent.",
    ],
    bullets: [
      "Your own data remains yours, as described in our Privacy Policy.",
      "Licensed access to our platform does not transfer ownership of any SKENEV intellectual property to you.",
    ],
  },
  {
    heading: "7. Privacy & Data",
    body: [
      "Your use of SKENEV is also governed by our Privacy Policy, which explains how we collect, use and protect personal data. By using SKENEV, you consent to the practices described there.",
    ],
  },
  {
    heading: "8. Warranty & Liability",
    body: [
      "SKENEV products and services are provided \"as available\". While we work hard to keep them reliable and accurate, we make no warranties beyond those required by law.",
    ],
    bullets: [
      "To the maximum extent permitted by applicable law, SKENEV is not liable for indirect, incidental, special or consequential damages arising from the use of the website, products or services.",
      "Nothing in these terms limits liability that cannot be limited under applicable Indian law.",
    ],
  },
  {
    heading: "9. Termination",
    body: [
      "You may stop using SKENEV at any time. We may suspend or terminate access where terms are breached, where required by law, or where continued service is not reasonably possible — with notice where practicable.",
    ],
  },
  {
    heading: "10. Governing Law & Disputes",
    body: [
      "These Terms & Conditions are governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of the courts of New Delhi, India.",
    ],
  },
  {
    heading: "11. Changes to These Terms",
    body: [
      "We may update these terms from time to time. The latest version will always be available on this page with an updated effective date, and material changes will be communicated where appropriate.",
    ],
  },
  {
    heading: "12. Contact Us",
    body: [
      `Questions about these Terms or your agreement with SKENEV? Message us on WhatsApp or write to ${site.email} — we are happy to clarify anything before you proceed.`,
    ],
  },
];

const EFFECTIVE_DATE = "September 1, 2026";

const termsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms & Conditions",
  description: "The terms governing use of the SKENEV website, pre-booking and services.",
  url: `${SITE_URL}/terms`,
};

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions — SKENEV Beauty Technology",
  description:
    "The terms and conditions for using SKENEV products, pre-booking, subscriptions and the SKENEV website.",
  path: "/terms",
  keywords: ["SKENEV terms", "SKENEV conditions", "beauty technology terms"],
});

export default function TermsPage() {
  return (
    <>
      <JsonLd data={termsSchema} />
      <main>
        <AboutHero
          eyebrow="Legal / Terms & Conditions"
          title={[{ text: "Clear terms," }, { text: "fair deals.", accent: true }]}
          copy="Simple, honest terms that protect you and keep SKENEV products reliable for everyone. Last updated September 2026."
          signature={
            <>
              Fairness is <em>good business.</em>
            </>
          }
        />
        <section className={styles.technology}>
          <div className={styles.technologyInner}>
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>Terms &amp; Conditions</span>
              <h2>
                Effective date: <em>{EFFECTIVE_DATE}</em>
              </h2>
              <p>
                These Terms &amp; Conditions apply to the use of the SKENEV
                website, pre-booking of devices, subscriptions and the services
                we provide across India.
              </p>
            </div>
            <div className={styles.legalDoc}>
              {SECTIONS.map((section, i) => (
                <article key={i} className={styles.legalSection}>
                  <h3>{section.heading}</h3>
                  {section.body.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                  {section.bullets && (
                    <ul className={styles.legalList}>
                      {section.bullets.map((item, k) => (
                        <li key={k}>{item}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
        <AboutCTA />
      </main>
    </>
  );
}