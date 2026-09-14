import type { Metadata } from "next";
import ProductLanding from "@/components/ProductLanding";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: `SKENEV AI Beauty Scanner — Book Your Pre-Order Now`,
  description:
    "India's smartest AI-powered skin & scalp analysis scanner. Get dermatologist-grade insights in 60 seconds. Pre-book now — limited early-bird pricing.",
  path: "/products/landing",
  keywords: [
    "AI beauty scanner India",
    "skin analysis device",
    "scalp analysis scanner",
    "beauty technology product",
    "SKENEV scanner pre-order",
    "AI skin care device buy online",
  ],
});

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: `${site.name} AI Beauty Scanner`,
  description:
    "An AI-powered skin, scalp and beauty analysis scanner built for clinics, salons and beauty brands. Delivers dermatologist-grade insights in 60 seconds.",
  url: `${SITE_URL}/products/landing`,
  image: `${SITE_URL}/skenev-hero1.webp`,
  brand: { "@type": "Brand", name: site.name },
  offers: {
    "@type": "AggregateOffer",
    availability: "https://schema.org/PreOrder",
    priceCurrency: "INR",
    lowPrice: "On Request",
    url: `${SITE_URL}/contact`,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "250",
    bestRating: "5",
  },
};

export default function ProductLandingPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <ProductLanding />
    </>
  );
}
