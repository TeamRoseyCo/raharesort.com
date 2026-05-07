import type { MetadataRoute } from "next";

const SITE = "https://raharesort.com";

const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/rooms", priority: 0.9, changeFrequency: "weekly" },
  { path: "/dining", priority: 0.8, changeFrequency: "monthly" },
  { path: "/spa", priority: 0.8, changeFrequency: "monthly" },
  { path: "/pool", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services", priority: 0.7, changeFrequency: "monthly" },
  { path: "/tours", priority: 0.7, changeFrequency: "monthly" },
  { path: "/events", priority: 0.7, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.6, changeFrequency: "monthly" },
  { path: "/gym", priority: 0.5, changeFrequency: "monthly" },
  { path: "/transport", priority: 0.5, changeFrequency: "monthly" },
  { path: "/location", priority: 0.6, changeFrequency: "yearly" },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/blog/dead-sea-guide", priority: 0.6, changeFrequency: "monthly" },
  { path: "/newsletter", priority: 0.4, changeFrequency: "yearly" },
  { path: "/legal/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/legal/terms", priority: 0.2, changeFrequency: "yearly" },
  { path: "/legal/cookies", priority: 0.2, changeFrequency: "yearly" },
  { path: "/legal/accessibility", priority: 0.2, changeFrequency: "yearly" },
  { path: "/legal/notice", priority: 0.2, changeFrequency: "yearly" },
  { path: "/legal/refund", priority: 0.2, changeFrequency: "yearly" },
  { path: "/legal/do-not-sell", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
