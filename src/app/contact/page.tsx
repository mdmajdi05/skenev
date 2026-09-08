import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import ContactForm from "@/components/about/ContactForm";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, site } from "@/lib/site";
import styles from "@/styles/site.module.css";

export const metadata: Metadata = buildMetadata({
  title: `Contact ${site.name} — Book a Demo in India`,
  description:
    "Book a SKENEV demo, visit our New Delhi office or chat on WhatsApp. AI skin, scalp and beauty analysis for Indian clinics, salons and brands.",
  path: "/contact",
});

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${site.name}`,
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: site.name,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.area,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <main>
        <AboutHero
          eyebrow="Contact"
          title={[{ text: "Let's talk" }, { text: "beauty.", accent: true }]}
          copy="Tell us about your practice, clinic or brand. We&rsquo;ll show you what intelligent beauty technology can do for it — anywhere in India."
          showScroll
          signature={
            <>
              One conversation, <em>a lifetime of insights.</em>
            </>
          }
        />
        <section className={styles.contactSection}>
          <div className={styles.contactInner}>
            <div className={styles.contactInfo}>
              <span className={styles.eyebrow}>Get in touch</span>
              <p>
                We typically reply within one business day. Prefer email? Write
                to us at <strong>{site.email}</strong>.
              </p>
              <ul className={styles.contactDetails}>
                <li>
                  <span className={styles.contactDetailsIcon}>S</span>
                  <div>
                    <strong>Book a demo</strong>
                    <span>Live walkthrough + sample report</span>
                  </div>
                </li>
                <li>
                  <span className={styles.contactDetailsIcon}>W</span>
                  <div>
                    <strong>WhatsApp</strong>
                    <span>
                      <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer">
                        {site.whatsappDisplay}
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <span className={styles.contactDetailsIcon}>P</span>
                  <div>
                    <strong>Partnerships</strong>
                    <span>For brands and distributors</span>
                  </div>
                </li>
                <li>
                  <span className={styles.contactDetailsIcon}>C</span>
                  <div>
                    <strong>Press &amp; media</strong>
                    <span>{site.email}</span>
                  </div>
                </li>
              </ul>
              <div className={styles.contactAddress}>
                <span className={styles.contactDetailsIcon}>A</span>
                <div>
                  <strong>{site.name} — New Delhi Office</strong>
                  <span>{site.address.full}</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}