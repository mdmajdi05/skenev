import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

type Frequency = "weekly" | "monthly" | "daily";

const ROUTES: {
  path: string;
  priority: number;
  changeFrequency: Frequency;
}[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/solutions", priority: 0.9, changeFrequency: "weekly" },
  { path: "/solutions/ai-skin-analysis", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/ai-scalp-analysis", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/beauty-intelligence", priority: 0.8, changeFrequency: "monthly" },
  {
    path: "/solutions/personalized-recommendations",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  { path: "/products", priority: 0.9, changeFrequency: "monthly" },
  { path: "/technology", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}