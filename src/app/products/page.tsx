import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import AboutHero from "@/components/about/AboutHero";
import AboutCTA from "@/components/about/AboutCTA";
import ProductShowcase from "@/components/about/ProductCards";
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

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <SiteNav />
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
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}