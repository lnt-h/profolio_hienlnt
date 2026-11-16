import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://www.hienlnt.id.vn", lastModified: new Date("2026-11-16"), changeFrequency: "monthly", priority: 1 }];
}
