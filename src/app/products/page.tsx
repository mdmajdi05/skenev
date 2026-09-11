import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutCTA from "@/components/about/AboutCTA";
import ProductShowcase from "@/components/about/ProductCards";
import VideoReel from "@/components/VideoReel";
import AudienceSection from "@/components/AudienceSection";
import SeoFaqSection from "@/components/SeoFaqSection";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: `SKENEV AI Scanner — AI Skin & Scalp Beauty Analysis Device India`,
  description:
    "Meet the SKENEV AI scanner: one intelligent device for skin, scalp and beauty analysis — built for clinics, salons and beauty brands across India.",
  path: "/products",
  keywords: [
    "AI beauty scanner India",
    "AI skin analysis device",
    "AI scalp analysis machine",
    "beauty technology scanner",
    "SKENEV product",
  ],
});

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: `${site.name} AI Beauty Scanner`,
  description: site.description,
  url: `${SITE_URL}/products`,
  brand: { "@type": "Brand", name: site.name },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "INR",
    url: `${SITE_URL}/contact`,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "120",
  },
};

const FAQS = [
  {
    question: "What comes in the box?",
    answer:
      "Every SKENEV order includes the AI scanner, secure cloud AI engine access, the full analysis suite (skin, scalp and beauty intelligence) and professional branded report tools.",
  },
  {
    question: "How long does a SKENEV scan take?",
    answer:
      "A full skin or scalp scan takes around 60 seconds, and the AI report is generated in real time — ready before the consultation ends.",
  },
  {
    question: "Does the scanner need special lighting or training?",
    answer:
      "No. SKENEV is calibrated for normal salon and clinic lighting, and onboarding is simple enough for any team member on day one.",
  },
  {
    question: "Is SKENEV a one-time purchase or a subscription?",
    answer:
      "The scanner is a one-time purchase, and the cloud analysis suite runs as a single subscription covering skin, scalp and beauty intelligence modes.",
  },
  {
    question: "Who is the SKENEV scanner for?",
    answer:
      "Dermatologists, hair clinics, salons, medispas and beauty brands — any professional who wants objective, personal beauty intelligence for clients.",
  },
  {
    question: "Is the scanner available across India?",
    answer:
      "Yes. SKENEV ships across India from our New Delhi office, with demos, onboarding and support available nationwide.",
  },
];

const AUDIENCE = [
  {
    title: "Clinics & Practices",
    copy: "Diagnostic-grade documentation and progress data that make every consultation more credible.",
  },
  {
    title: "Salons & Studios",
    copy: "A premium analysis experience that lifts ticket value, retail and client loyalty.",
  },
  {
    title: "Brands & R&D",
    copy: "Consumer-scale measurement for efficacy studies, claims and personalized products.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <main>
        <AboutHero
          eyebrow="The Product"
          title={[
            { text: "One scanner." },
            { text: "Endless insight.", accent: true },
          ]}
          copy="SKENEV is a single intelligent beauty scanner that reads skin, scalp and beauty at a depth no mirror can match — then makes it personal for your clients across India."
          showScroll
          signature={
            <>
              Precision you can hold, <em>intelligence you can trust.</em>
            </>
          }
        />
        <ProductShowcase />
        <VideoReel />
        <AudienceSection
          heading="Built for,"
          accent="the professionals of beauty."
          intro="From consultation rooms to salon floors, SKENEV fits the places where beauty decisions are made."
          items={AUDIENCE}
        />
        <SeoFaqSection
          items={FAQS}
          heading="The scanner,"
          accent="questions answered."
          intro="Everything clinics and salons ask before bringing SKENEV into their space."
        />
        <AboutCTA />
      </main>
    </>
  );
}