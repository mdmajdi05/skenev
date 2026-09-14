"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SCANNER_01, SCANNER_02, SCANNER_03 } from "@/lib/siteImages";
import styles from "@/styles/site.module.css";

const BENEFITS = [
  {
    icon: "01",
    title: "AI-Powered Precision",
    copy: "11+ analysis parameters processed in real time using advanced computer vision - the same depth as clinical-grade devices.",
  },
  {
    icon: "02",
    title: "60-Second Scans",
    copy: "A full skin or scalp scan takes around one minute. The AI report is generated instantly - ready before the consultation ends.",
  },
  {
    icon: "03",
    title: "Personalised Reports",
    copy: "Professional, branded reports tailored to each client - perfect for consultations, follow-ups and progress tracking.",
  },
  {
    icon: "04",
    title: "One Device, Three Modes",
    copy: "Skin intelligence, scalp intelligence and beauty intelligence - all in a single subscription, one scanner.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Scan",
    copy: "Place the SKENEV scanner near the skin or scalp. The 20x CMOS camera captures high-resolution data in seconds.",
  },
  {
    num: "02",
    title: "Analyse",
    copy: "Our cloud AI engine processes 11+ parameters - from hydration and pore density to acne and dark circles - in real time.",
  },
  {
    num: "03",
    title: "Report",
    copy: "A personalised, branded report is generated instantly - ready to share with the client or use in a consultation.",
  },
];

const FEATURES = [
  { label: "20x CMOS Camera", detail: "Clinical-grade imaging for precise skin and scalp reads." },
  { label: "IR Temperature Sensor", detail: "Maps inflammation and surface temperature in real time." },
  { label: "VOC Gas Sensor", detail: "Detects volatile organic compounds linked to skin conditions." },
  { label: "0.7 AU Hydration Probe", detail: "Measures moisture levels with medical-device accuracy." },
  { label: "Cloud AI Engine", detail: "11+ analysis parameters processed securely on our platform." },
  { label: "Branded Reports", detail: "Customisable, professional reports for every consultation." },
];

const REVIEWS = [
  {
    name: "Dr. Priya Sharma",
    role: "Dermatologist, New Delhi",
    text: "SKENEV has completely changed how I consult. Clients can see their skin data in real time - it builds instant trust and makes recommendations far more credible.",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "Salon Owner, Mumbai",
    text: "Our ticket value jumped 40% since we added SKENEV analysis to consultations. Clients love the branded reports - it feels premium and personal.",
    rating: 5,
  },
  {
    name: "Ananya Reddy",
    role: "Beauty Brand Founder",
    text: "We use SKENEV for efficacy studies on our new product line. The objective data it produces is exactly what we needed for claims and consumer insights.",
    rating: 5,
  },
];

const FAQS = [
  {
    q: "What comes in the box?",
    a: "Every SKENEV order includes the AI scanner, secure cloud AI engine access, the full analysis suite (skin, scalp and beauty intelligence) and professional branded report tools.",
  },
  {
    q: "How long does a scan take?",
    a: "A full skin or scalp scan takes around 60 seconds, and the AI report is generated in real time - ready before the consultation ends.",
  },
  {
    q: "Does it need special lighting or training?",
    a: "No. SKENEV is calibrated for normal salon and clinic lighting, and onboarding is simple enough for any team member on day one.",
  },
  {
    q: "Is it a one-time purchase or subscription?",
    a: "The scanner is a one-time purchase. The cloud analysis suite runs as a single subscription covering skin, scalp and beauty intelligence modes.",
  },
  {
    q: "Who is SKENEV for?",
    a: "Dermatologists, hair clinics, salons, medispas and beauty brands - any professional who wants objective, personal beauty intelligence for clients.",
  },
  {
    q: "Is SKENEV available across India?",
    a: "Yes. SKENEV ships across India from our New Delhi office, with demos, onboarding and support available nationwide.",
  },
  {
    q: "Can I see a demo before purchasing?",
    a: "Absolutely. Book a free demo through our contact page or WhatsApp and we will walk you through the full experience.",
  },
];

const TRUST_ITEMS = [
  { icon: "🔒", title: "Secure Checkout", copy: "100% safe payments" },
  { icon: "🚚", title: "Free Shipping", copy: "Across India" },
  { icon: "🛡️", title: "1-Year Warranty", copy: "Full coverage" },
  { icon: "📞", title: "24/7 Support", copy: "We are here to help" },
];

const STATS = [
  { value: "11+", label: "Analysis Parameters" },
  { value: "60s", label: "Scan Time" },
  { value: "4.9", label: "Average Rating" },
  { value: "250+", label: "Happy Clients" },
];

const BOX_ITEMS = [
  { num: "01", title: "SKENEV AI Scanner", desc: "The precision imaging device for skin and scalp." },
  { num: "02", title: "Cloud AI Engine", desc: "11+ parameters processed in real time on a secure platform." },
  { num: "03", title: "Analysis Suite", desc: "Skin, scalp and beauty intelligence - three modes, one subscription." },
  { num: "04", title: "Branded Reports", desc: "Professional, customisable reports for every consultation." },
];

function StarRating({ count }: { count: number }) {
  return (
    <span className={styles.landingStars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>&#9733;</span>
      ))}
    </span>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.landingFaqItem} ${open ? styles.landingFaqOpen : ""}`}>
      <button
        className={styles.landingFaqQ}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className={styles.landingFaqIcon}>{open ? "-" : "+"}</span>
      </button>
      <div className={styles.landingFaqA} aria-hidden={!open}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function ProductLanding() {
  return (
    <main className={styles.landingMain}>
      <section className={styles.landingHero}>
        <div className={styles.landingHeroGlow} />
        <div className={styles.landingHeroInner}>
          <div className={styles.landingHeroContent}>
            <span className={styles.eyebrow}>Introducing</span>
            <h1>
              The AI Scanner
              <br />
              <em>that sees everything.</em>
            </h1>
            <p className={styles.landingHeroSub}>
              India&rsquo;s smartest skin &amp; scalp analysis device - built for
              dermatologists, salons and beauty brands who want objective,
              personal beauty intelligence.
            </p>

            <div className={styles.landingHeroPrice}>
              <span className={styles.landingPriceLabel}>Pre-Order Price</span>
              <span className={styles.landingPriceValue}>On Request</span>
              <span className={styles.landingPriceNote}>
                Limited early-bird slots available
              </span>
            </div>

            <div className={styles.landingHeroActions}>
              <Link href="/contact" className={styles.landingBtnPrimary}>
                Pre-Order Now
              </Link>
              <Link href="/products" className={styles.landingBtnSecondary}>
                Explore Features
              </Link>
            </div>

            <div className={styles.landingHeroTrust}>
              <span>&#10003; Free Shipping</span>
              <span>&#10003; 1-Year Warranty</span>
              <span>&#10003; Pan-India Delivery</span>
            </div>
          </div>

          <div className={styles.landingHeroImage}>
            <div className={styles.landingHeroImageGlow} />
            <Image
              src={SCANNER_01}
              alt="SKENEV AI Beauty Scanner"
              fill
              sizes="(max-width: 900px) 90vw, 45vw"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </section>

      <section className={styles.landingTrustBar}>
        <div className={styles.landingTrustBarInner}>
          {TRUST_ITEMS.map((item) => (
            <Reveal key={item.title} className={styles.landingTrustItem}>
              <span className={styles.landingTrustIcon}>{item.icon}</span>
              <div>
                <strong>{item.title}</strong>
                <span>{item.copy}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.landingSection}>
        <div className={styles.landingSectionInner}>
          <Reveal className={styles.landingSectionHead}>
            <span className={styles.eyebrow}>Why SKENEV</span>
            <h2>
              One scanner.
              <br />
              <em>Endless insight.</em>
            </h2>
            <p>
              SKENEV reads skin and scalp at a depth no mirror can match - then
              makes it personal for every client.
            </p>
          </Reveal>

          <div className={styles.landingBenefitsGrid}>
            {BENEFITS.map((b) => (
              <Reveal key={b.title} className={styles.landingBenefitCard}>
                <span className={styles.landingBenefitNum}>{b.icon}</span>
                <h3>{b.title}</h3>
                <p>{b.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.landingSection} ${styles.landingSectionDark}`}>
        <div className={styles.landingSectionInner}>
          <Reveal className={styles.landingSectionHead}>
            <span className={`${styles.eyebrow} ${styles.landingEyebrowLight}`}>
              How It Works
            </span>
            <h2 className={styles.landingHeadingLight}>
              Three steps.
              <br />
              <em>Infinite value.</em>
            </h2>
          </Reveal>

          <div className={styles.landingStepsGrid}>
            {STEPS.map((s) => (
              <Reveal key={s.num} className={styles.landingStepCard}>
                <span className={styles.landingStepNum}>{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.landingImageBreak}>
        <div className={styles.landingImageBreakInner}>
          <Reveal className={styles.landingImageBreakCard}>
            <Image
              src={SCANNER_02}
              alt="SKENEV AI Scanner close-up"
              fill
              sizes="(max-width: 900px) 90vw, 50vw"
              style={{ objectFit: "contain" }}
            />
          </Reveal>
          <Reveal className={styles.landingImageBreakCopy}>
            <span className={styles.eyebrow}>The Device</span>
            <h2>
              Precision you can hold,
              <br />
              <em>intelligence you can trust.</em>
            </h2>
            <p>
              One product. One subscription. Three intelligences. Designed to
              make advanced beauty technology feel effortless for clinics, salons
              and brands across India.
            </p>
            <Link href="/contact" className={styles.landingBtnPrimary}>
              Book a Free Demo
            </Link>
          </Reveal>
        </div>
      </section>

      <section className={styles.landingSection}>
        <div className={styles.landingSectionInner}>
          <Reveal className={styles.landingSectionHead}>
            <span className={styles.eyebrow}>Specifications</span>
            <h2>
              Built with,
              <br />
              <em>clinical precision.</em>
            </h2>
          </Reveal>

          <div className={styles.landingFeaturesGrid}>
            {FEATURES.map((f) => (
              <Reveal key={f.label} className={styles.landingFeatureCard}>
                <h3>{f.label}</h3>
                <p>{f.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.landingSection} ${styles.landingSectionAccent}`}>
        <div className={styles.landingSectionInner}>
          <div className={styles.landingStatsGrid}>
            {STATS.map((s) => (
              <Reveal key={s.label} className={styles.landingStatItem}>
                <span className={styles.landingStatValue}>{s.value}</span>
                <span className={styles.landingStatLabel}>{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.landingSection}>
        <div className={styles.landingSectionInner}>
          <Reveal className={styles.landingSectionHead}>
            <span className={styles.eyebrow}>Testimonials</span>
            <h2>
              Trusted by,
              <br />
              <em>the best in beauty.</em>
            </h2>
          </Reveal>

          <div className={styles.landingReviewsGrid}>
            {REVIEWS.map((r) => (
              <Reveal key={r.name} className={styles.landingReviewCard}>
                <StarRating count={r.rating} />
                <p className={styles.landingReviewText}>&ldquo;{r.text}&rdquo;</p>
                <div className={styles.landingReviewAuthor}>
                  <div className={styles.landingReviewAvatar}>
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <strong>{r.name}</strong>
                    <span>{r.role}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.landingSection} ${styles.landingSectionLight}`}>
        <div className={styles.landingSectionInner}>
          <Reveal className={styles.landingSectionHead}>
            <span className={styles.eyebrow}>In The Box</span>
            <h2>
              Everything you need.
              <br />
              <em>Nothing you don&rsquo;t.</em>
            </h2>
          </Reveal>

          <div className={styles.landingBoxGrid}>
            <Reveal className={styles.landingBoxImage}>
              <Image
                src={SCANNER_03}
                alt="SKENEV scanner variants"
                fill
                sizes="(max-width: 900px) 90vw, 45vw"
                style={{ objectFit: "contain" }}
              />
            </Reveal>
            <div className={styles.landingBoxList}>
              {BOX_ITEMS.map((item) => (
                <Reveal key={item.num} className={styles.landingBoxItem}>
                  <span className={styles.landingBoxNum}>{item.num}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.landingSection}>
        <div className={styles.landingSectionInner}>
          <Reveal className={styles.landingSectionHead}>
            <span className={styles.eyebrow}>FAQ</span>
            <h2>
              Got questions?
              <br />
              <em>We have answers.</em>
            </h2>
          </Reveal>

          <div className={styles.landingFaqGrid}>
            {FAQS.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.landingSection} ${styles.landingCta}`}>
        <div className={styles.landingCtaInner}>
          <Reveal>
            <span className={`${styles.eyebrow} ${styles.landingEyebrowLight}`}>
              Limited Slots
            </span>
            <h2 className={styles.landingHeadingLight}>
              Ready to transform
              <br />
              <em>your consultations?</em>
            </h2>
            <p className={styles.landingCtaCopy}>
              Pre-book your SKENEV scanner today and join the future of
              beauty intelligence. Limited early-bird slots - first come,
              first served.
            </p>
            <div className={styles.landingCtaActions}>
              <Link href="/contact" className={styles.landingBtnLight}>
                Pre-Order Now
              </Link>
              <Link href="https://wa.me/917982498712" className={styles.landingBtnOutline}>
                Chat on WhatsApp
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}