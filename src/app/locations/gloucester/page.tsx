import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { gloucesterLocation } from "@/lib/locations/gloucester";

export const metadata: Metadata = {
  title: gloucesterLocation.metaTitle,
  description: gloucesterLocation.metaDescription,
  alternates: {
    canonical: `/locations/${gloucesterLocation.slug}`
  },
  openGraph: {
    title: gloucesterLocation.metaTitle,
    description: gloucesterLocation.metaDescription,
    url: `/locations/${gloucesterLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: gloucesterLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: gloucesterLocation.cityImageAlt || `Basic Cremation in ${gloucesterLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: gloucesterLocation.metaTitle,
    description: gloucesterLocation.metaDescription,
    images: [gloucesterLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: gloucesterLocation.city, url: `/locations/${gloucesterLocation.slug}` }
        ]}
      />
      <LocationPage data={gloucesterLocation} />
    </>
  );
}
