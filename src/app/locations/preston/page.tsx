import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { prestonLocation } from "@/lib/locations/preston";

export const metadata: Metadata = {
  title: prestonLocation.metaTitle,
  description: prestonLocation.metaDescription,
  alternates: {
    canonical: `/locations/${prestonLocation.slug}`
  },
  openGraph: {
    title: prestonLocation.metaTitle,
    description: prestonLocation.metaDescription,
    url: `/locations/${prestonLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: prestonLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: prestonLocation.cityImageAlt || `Basic Cremation in ${prestonLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: prestonLocation.metaTitle,
    description: prestonLocation.metaDescription,
    images: [prestonLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: prestonLocation.city, url: `/locations/${prestonLocation.slug}` }
        ]}
      />
      <LocationPage data={prestonLocation} />
    </>
  );
}
