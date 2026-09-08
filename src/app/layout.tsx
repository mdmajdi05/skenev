import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import WhatsAppButton from "@/components/WhatsAppButton";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, site } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title: `${site.name} — AI Skin, Scalp & Beauty Analysis Scanner`,
  description: site.description,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#241d18",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: SITE_URL,
  email: site.email,
  telephone: site.phone,
  foundingDate: site.foundedYear,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.area,
    addressRegion: site.address.state,
    postalCode: site.address.postalCode,
    addressCountry: site.address.countryCode,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: site.email,
    telephone: site.phone,
    availableLanguage: ["en", "hi"],
  },
  sameAs: Object.values(site.socials),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: SITE_URL,
  description: site.description,
  keywords: site.keywords.join(", "),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${manrope.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={orgSchema} />
        <JsonLd data={websiteSchema} />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}