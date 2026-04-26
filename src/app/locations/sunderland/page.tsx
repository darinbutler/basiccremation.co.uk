import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { sunderlandLocation } from "@/lib/locations/sunderland";

export const metadata: Metadata = {
  title: sunderlandLocation.metaTitle,
  description: sunderlandLocation.metaDescription,
  alternates: {
    canonical: `/locations/${sunderlandLocation.slug}`
  },
  openGraph: {
    title: sunderlandLocation.metaTitle,
    description: sunderlandLocation.metaDescription,
    url: `/locations/${sunderlandLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: sunderlandLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: sunderlandLocation.cityImageAlt || `Basic Cremation in ${sunderlandLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: sunderlandLocation.metaTitle,
    description: sunderlandLocation.metaDescription,
    images: [sunderlandLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: sunderlandLocation.city, url: `/locations/${sunderlandLocation.slug}` }
        ]}
      />
      <LocationPage data={sunderlandLocation} />
    </>
  );
}
