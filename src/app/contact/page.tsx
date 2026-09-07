import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import AboutHero from "@/components/about/AboutHero";
import ContactForm from "@/components/about/ContactForm";
import styles from "@/styles/site.module.css";

export const metadata: Metadata = {
  title: "Contact — SKENEV",
  description:
    "Book a demo or talk to the SKENEV team about intelligent beauty technology for your practice or brand.",
};

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main>
        <AboutHero
          eyebrow="Contact"
          title={[{ text: "Let's talk" }, { text: "beauty.", accent: true }]}
          copy="Tell us about your practice, clinic or brand. We&rsquo;ll show you what intelligent beauty technology can do for it."
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
                We typically reply within one business day. Prefer email? Write to us
                at <strong>hello@skenev.com</strong>.
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
                    <span>hello@skenev.com</span>
                  </div>
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}