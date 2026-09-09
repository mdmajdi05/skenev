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
    heading: "1. Information We Collect",
    body: [
      "We collect information to provide, operate and improve SKENEV products and services. The categories of data we process are described below.",
    ],
    bullets: [
      "Contact details — name, phone number, email address, city and business type you share when you pre-book a device, request a demo, book an appointment or contact our team.",
      "Analysis data — scan imagery and measurement outputs created when a SKENEV device is used, including skin, scalp and beauty metrics.",
      "Usage data — pages visited, device type and browser information collected automatically when you use the website.",
      "Communication data — records of messages, emails and WhatsApp conversations with our support and sales teams.",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    body: [
      "We use the data we collect for the purposes described in this policy — always with a lawful basis under applicable Indian law.",
    ],
    bullets: [
      "To respond to enquiries, schedule demos, process pre-bookings and deliver the services you request.",
      "To generate, store and deliver analysis reports and personalized beauty recommendations.",
      "To support clinics, salons and beauty brands using SKENEV devices.",
      "To improve our products, AI models and website experience — using aggregated and de-identified data where possible.",
      "To send service communications and, with your consent, marketing updates you can opt out of at any time.",
    ],
  },
  {
    heading: "3. Legal Basis for Processing",
    body: [
      "We process personal data on the following legal bases: performance of a contract with you, your consent (which you may withdraw any time), compliance with legal obligations, and our legitimate interest in operating and improving the SKENEV platform — balanced against your rights and interests.",
    ],
  },
  {
    heading: "4. Who We Share Data With",
    body: [
      "We do not sell, rent or trade your personal data. We share it only where necessary and always under strict safeguards.",
    ],
    bullets: [
      "Service providers — cloud hosting, analytics, messaging and payment partners who help us operate, bound by confidentiality and data-protection obligations.",
      "Professional partners — where you operate a clinic, salon or brand, analysis data may connect to your own systems for consultation and retail purposes.",
      "Legal and regulatory bodies — where disclosure is required by law, or to protect SKENEV's rights and the safety of our users.",
    ],
  },
  {
    heading: "5. Data Retention",
    body: [
      "Enquiry and pre-booking data is retained only as long as needed to serve you. Scan data tied to subscriptions is kept while your account or service is active, and deleted or anonymised when you close it — unless a longer retention is required by law.",
    ],
  },
  {
    heading: "6. Data Security",
    body: [
      "We use encryption in transit and at rest, access controls, and regular security reviews to protect your information. While no method of transmission is 100% secure, we work continuously to safeguard the data entrusted to us.",
    ],
  },
  {
    heading: "7. Your Privacy Rights",
    body: [
      "You have the right to access, correct, update, restrict or delete your personal data, and to object to processing based on legitimate interest. You may also withdraw consent and request data portability where applicable.",
    ],
    bullets: [
      "To exercise any of these rights, write to us at the contact details below. We respond within one business day.",
      "Where requested data is connected to your account, we may verify your identity before acting on a request.",
    ],
  },
  {
    heading: "8. Cookies & Similar Technologies",
    body: [
      "Our website uses cookies and similar technologies for essential functions, analytics and personalisation. You can manage or disable cookies through your browser settings; some features may not work fully without them.",
    ],
  },
  {
    heading: "9. Children's Privacy",
    body: [
      "SKENEV products are designed for professional use and are not directed to children under 18. We do not knowingly collect personal data from children. If you believe a child has provided us data, contact us and we will delete it.",
    ],
  },
  {
    heading: "10. International Transfers",
    body: [
      "Data may be processed on secure infrastructure located in India and abroad. Where data is transferred, we apply appropriate safeguards aligned with applicable Indian data protection law.",
    ],
  },
  {
    heading: "11. Changes to This Policy",
    body: [
      "We may update this Privacy Policy as our products and legal requirements evolve. Material changes will be posted on this page with an updated effective date, and — where appropriate — notified directly.",
    ],
  },
  {
    heading: "12. Contact Us",
    body: [
      `Questions, concerns or requests regarding this policy can be directed to our team by WhatsApp or email at ${site.email}. We are committed to resolving privacy concerns promptly and fairly.`,
    ],
  },
];

const EFFECTIVE_DATE = "September 1, 2026";

const privacySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy",
  description: "How SKENEV collects, uses and protects your personal data.",
  url: `${SITE_URL}/privacy`,
};

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy — SKENEV Beauty Technology",
  description:
    "Read the SKENEV privacy policy — how we collect, use and protect your data for AI skin, scalp and beauty analysis.",
  path: "/privacy",
  keywords: ["SKENEV privacy policy", "beauty technology privacy", "data protection beauty tech"],
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={privacySchema} />
      <main>
        <AboutHero
          eyebrow="Legal / Privacy Policy"
          title={[{ text: "Your data," }, { text: "your right.", accent: true }]}
          copy="A clear, plain-language account of how SKENEV collects, uses and protects your personal data. Last updated September 2026."
          signature={
            <>
              Privacy is <em>part of our product.</em>
            </>
          }
        />
        <section className={styles.technology}>
          <div className={styles.technologyInner}>
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>Privacy Policy</span>
              <h2>
                Effective date: <em>{EFFECTIVE_DATE}</em>
              </h2>
              <p>
                This Privacy Policy applies to the SKENEV website, our AI skin,
                scalp and beauty analysis products, and the services we provide
                across India.
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