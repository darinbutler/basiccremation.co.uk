import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { guildfordLocation } from "@/lib/locations/guildford";

export const metadata: Metadata = {
  title: guildfordLocation.metaTitle,
  description: guildfordLocation.metaDescription,
  alternates: {
    canonical: `/locations/${guildfordLocation.slug}`
  },
  openGraph: {
    title: guildfordLocation.metaTitle,
    description: guildfordLocation.metaDescription,
    url: `/locations/${guildfordLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: guildfordLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: guildfordLocation.cityImageAlt || `Basic Cremation in ${guildfordLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: guildfordLocation.metaTitle,
    description: guildfordLocation.metaDescription,
    images: [guildfordLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: guildfordLocation.city, url: `/locations/${guildfordLocation.slug}` }
        ]}
      />
      <LocationPage data={guildfordLocation} />
    </>
  );
}
