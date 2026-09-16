import type { Metadata } from "next";
import ProductPage from "@/components/product/ProductPage";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "SKENEV — AI Skin, Scalp & Beauty Analysis Scanner",
  description:
    "Professional AI skin, scalp and beauty analysis in a 60-second scan. Book a demo or pre-book the SKENEV AI Beauty Scanner across India.",
  path: "/products",
  keywords: [
    "AI beauty scanner India",
    "skin analysis device",
    "scalp analysis scanner",
    "beauty technology product",
    "SKENEV scanner pre-book",
    "AI skin care device buy online",
  ],
});

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: `${site.name} AI Skin, Scalp & Beauty Analysis Scanner`,
  description:
    "An AI-powered skin, scalp and beauty analysis scanner built for clinics, salons and beauty brands. Delivers dermatologist-grade insights in a 60-second scan.",
  url: `${SITE_URL}/products`,
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

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <ProductPage />
    </>
  );
}