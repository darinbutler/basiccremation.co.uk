import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { salisburyLocation } from "@/lib/locations/salisbury";

export const metadata: Metadata = {
  title: salisburyLocation.metaTitle,
  description: salisburyLocation.metaDescription,
  alternates: {
    canonical: `/locations/${salisburyLocation.slug}`
  },
  openGraph: {
    title: salisburyLocation.metaTitle,
    description: salisburyLocation.metaDescription,
    url: `/locations/${salisburyLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: salisburyLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: salisburyLocation.cityImageAlt || `Basic Cremation in ${salisburyLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: salisburyLocation.metaTitle,
    description: salisburyLocation.metaDescription,
    images: [salisburyLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: salisburyLocation.city, url: `/locations/${salisburyLocation.slug}` }
        ]}
      />
      <LocationPage data={salisburyLocation} />
    </>
  );
}
