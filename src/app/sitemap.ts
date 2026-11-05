import type { MetadataRoute } from "next";
import { getPublicSiteUrl } from "@/config/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: getPublicSiteUrl(), changeFrequency: "monthly", priority: 1 }];
}
