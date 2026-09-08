import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Solutions from "@/components/Solutions";
import Technology from "@/components/Technology";
import Scanner from "@/components/Scanner";
import Steps from "@/components/Steps";
import Business from "@/components/Business";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CaseStudy from "@/components/CaseStudy";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, site } from "@/lib/site";
import { FAQS } from "@/lib/faqs";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `${site.name} — Intelligent Beauty Technology`,
  description: site.description,
  url: SITE_URL,
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={aboutSchema} />
      <main className="flex min-h-full flex-col">
        <Hero />
        <Trust />
        <Solutions />
        <Technology />
        <Scanner />
        <Steps />
        <Business />
        <Stats />
        <Testimonials />
        <CaseStudy />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}