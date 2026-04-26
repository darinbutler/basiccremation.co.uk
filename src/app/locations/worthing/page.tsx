import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { worthingLocation } from "@/lib/locations/worthing";

export const metadata: Metadata = {
  title: worthingLocation.metaTitle,
  description: worthingLocation.metaDescription,
  alternates: {
    canonical: `/locations/${worthingLocation.slug}`
  },
  openGraph: {
    title: worthingLocation.metaTitle,
    description: worthingLocation.metaDescription,
    url: `/locations/${worthingLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: worthingLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: worthingLocation.cityImageAlt || `Basic Cremation in ${worthingLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: worthingLocation.metaTitle,
    description: worthingLocation.metaDescription,
    images: [worthingLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: worthingLocation.city, url: `/locations/${worthingLocation.slug}` }
        ]}
      />
      <LocationPage data={worthingLocation} />
    </>
  );
}
