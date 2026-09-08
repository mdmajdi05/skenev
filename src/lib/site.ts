/* =========================================================
   SKENEV — Central Site Configuration
   Single source of truth for contact, brand, SEO and addresses.
   Edit here and it updates everywhere (footer, contact, schema).
========================================================= */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://skenev.in";

export const site = {
  name: "SKENEV",
  tagline: "Intelligent Beauty Technology",
  description:
    "SKENEV is an AI-powered skin, scalp and beauty analysis scanner built for dermatologists, clinics, salons and beauty brands in India.",

  /* TODO: Fill in your business email. */
  email: "",

  /* TODO: Your WhatsApp number in international format, digits only (91 = India).
     E.g. "919876543210"  */
  whatsappNumber: "",
  get whatsappLink() {
    return `https://wa.me/${this.whatsappNumber}`;
  },
  get whatsappDisplay() {
    return this.whatsappNumber ? this.whatsappNumber : "";
  },

  phone: "",

  address: {
    street: "A-24/5 3rd Floor, NH-19",
    area: "Mohan Cooperative Industrial Estate",
    city: "New Delhi",
    state: "Delhi",
    postalCode: "110044",
    country: "India",
    countryCode: "IN",
    get full() {
      return `${this.street}, ${this.area}, ${this.city}, ${this.state} ${this.postalCode}`;
    },
  },

  /* Primary SEO keyword — used across meta, schema and content. */
  keywords: [
    "AI skin analysis India",
    "AI beauty scanner",
    "skin scanner for clinics",
    "AI scalp analysis",
    "beauty intelligence",
    "personalized skincare recommendations",
  ],

  socials: {
    instagram: "https://instagram.com/skenev",
    linkedin: "https://linkedin.com/company/skenev",
  },

  foundedYear: "2026",
} as const;

export type SiteConfig = typeof site;