import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/what-is-a-basic-cremation",
    "/prices",
    "/whats-included",
    "/faqs",
    "/help-and-advice",
    "/help-and-advice/what-to-do-when-someone-dies",
    "/help-and-advice/registering-a-death-england-wales",
    "/help-and-advice/registering-a-death-scotland",
    "/help-and-advice/coroner-and-procurator-fiscal",
    "/locations",
    "/contact",
    "/privacy",
    "/terms"
  ];

  const now = new Date();

  return staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.7
  }));
}
