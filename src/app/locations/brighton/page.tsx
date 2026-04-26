import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { brightonLocation } from "@/lib/locations/brighton";

export const metadata: Metadata = {
  title: brightonLocation.metaTitle,
  description: brightonLocation.metaDescription,
  alternates: {
    canonical: `/locations/${brightonLocation.slug}`
  },
  openGraph: {
    title: brightonLocation.metaTitle,
    description: brightonLocation.metaDescription,
    url: `/locations/${brightonLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: brightonLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: brightonLocation.cityImageAlt || `Basic Cremation in ${brightonLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: brightonLocation.metaTitle,
    description: brightonLocation.metaDescription,
    images: [brightonLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: brightonLocation.city, url: `/locations/${brightonLocation.slug}` }
        ]}
      />
      <LocationPage data={brightonLocation} />
    </>
  );
}
