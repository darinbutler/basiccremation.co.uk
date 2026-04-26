import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { newportLocation } from "@/lib/locations/newport";

export const metadata: Metadata = {
  title: newportLocation.metaTitle,
  description: newportLocation.metaDescription,
  alternates: {
    canonical: `/locations/${newportLocation.slug}`
  },
  openGraph: {
    title: newportLocation.metaTitle,
    description: newportLocation.metaDescription,
    url: `/locations/${newportLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: newportLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: newportLocation.cityImageAlt || `Basic Cremation in ${newportLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: newportLocation.metaTitle,
    description: newportLocation.metaDescription,
    images: [newportLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: newportLocation.city, url: `/locations/${newportLocation.slug}` }
        ]}
      />
      <LocationPage data={newportLocation} />
    </>
  );
}
