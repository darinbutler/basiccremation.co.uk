import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { crawleyLocation } from "@/lib/locations/crawley";

export const metadata: Metadata = {
  title: crawleyLocation.metaTitle,
  description: crawleyLocation.metaDescription,
  alternates: {
    canonical: `/locations/${crawleyLocation.slug}`
  },
  openGraph: {
    title: crawleyLocation.metaTitle,
    description: crawleyLocation.metaDescription,
    url: `/locations/${crawleyLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: crawleyLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: crawleyLocation.cityImageAlt || `Basic Cremation in ${crawleyLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: crawleyLocation.metaTitle,
    description: crawleyLocation.metaDescription,
    images: [crawleyLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: crawleyLocation.city, url: `/locations/${crawleyLocation.slug}` }
        ]}
      />
      <LocationPage data={crawleyLocation} />
    </>
  );
}
