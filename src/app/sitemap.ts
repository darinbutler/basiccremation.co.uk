import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getAllLocationSlugs } from "@/lib/locations";

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

  const locationRoutes = getAllLocationSlugs().map(
    (slug) => `/locations/${slug}`
  );

  const allRoutes = [...staticRoutes, ...locationRoutes];
  const now = new Date();

  return allRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority:
      route === ""
        ? 1.0
        : route.startsWith("/locations/")
        ? 0.85
        : 0.7
  }));
}
