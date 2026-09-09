import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutTechnology from "@/components/about/AboutTechnology";
import AboutCTA from "@/components/about/AboutCTA";
import AudienceSection from "@/components/AudienceSection";
import SeoFaqSection from "@/components/SeoFaqSection";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Technology — SKENEV AI Beauty Scanner Tech Stack",
  description:
    "Hyperspectral imaging, deep learning and a personalization engine — the stack behind SKENEV intelligent beauty technology for India.",
  path: "/technology",
});

const techSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "SKENEV Technology",
  description: "Hyperspectral imaging, deep learning and personalization engine behind the SKENEV AI scanner.",
  url: `${SITE_URL}/technology`,
};

const FAQS = [
  {
    question: "How does hyperspectral imaging work in SKENEV?",
    answer:
      "Instead of only reading the surface, spectral capture measures how light behaves across wavelengths below the skin's surface — where the signals that matter actually live.",
  },
  {
    question: "What AI models power the analysis?",
    answer:
      "Deep learning networks trained on millions of skin and scalp signals deliver readings for moisture, oil, pigment, lesions, follicles and more — refined continuously with every scan.",
  },
  {
    question: "Is the analysis really real-time?",
    answer:
      "Yes. Processing happens in milliseconds, so a 60-second scan produces an instant, complete report that can be discussed right in the appointment.",
  },
  {
    question: "How is my data kept secure?",
    answer:
      "All data is encrypted both in transit and at rest, stored on secure servers and never sold. You own your beauty data — privacy is engineered in by design.",
  },
  {
    question: "Does the system improve over time?",
    answer:
      "Yes. Adaptive intelligence means the models learn and refine with every scan, becoming sharper and more accurate for every client and environment.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <JsonLd data={techSchema} />
      <main>
        <AboutHero
          eyebrow="Technology"
          title={[
            { text: "Intelligence," },
            { text: "behind every scan.", accent: true },
          ]}
          copy="From hyperspectral sensors to deep learning models, our stack is built to do remarkable work — and make it feel effortless."
          showScroll
          signature={
            <>
              Precision that <em>starts with people.</em>
            </>
          }
        />
        <AboutTechnology />
        <AudienceSection
          heading="The stack,"
          accent="at work in your space."
          intro="One intelligent system, six systems inside — engineered to slip into real clinics, salons and brands without friction."
          items={[
            {
              title: "In the Clinic",
              copy: "Real-time reports, lesion tracking and secure records that make diagnosis more objective.",
            },
            {
              title: "In the Salon",
              copy: "Instant scans with branded reports that elevate service and power retail recommendations.",
            },
            {
              title: "In the Brand Lab",
              copy: "Consumer-scale, anonymized measurement that turns product experiments into reliable data.",
            },
          ]}
        />
        <SeoFaqSection
          items={FAQS}
          heading="Under the hood,"
          accent="answers inside."
          intro="The questions technologists and founders ask before trusting SKENEV with their device."
        />
        <AboutCTA />
      </main>
    </>
  );
}