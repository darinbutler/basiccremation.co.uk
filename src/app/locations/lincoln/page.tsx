import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { lincolnLocation } from "@/lib/locations/lincoln";

export const metadata: Metadata = {
  title: lincolnLocation.metaTitle,
  description: lincolnLocation.metaDescription,
  alternates: {
    canonical: `/locations/${lincolnLocation.slug}`
  },
  openGraph: {
    title: lincolnLocation.metaTitle,
    description: lincolnLocation.metaDescription,
    url: `/locations/${lincolnLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: lincolnLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: lincolnLocation.cityImageAlt || `Basic Cremation in ${lincolnLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: lincolnLocation.metaTitle,
    description: lincolnLocation.metaDescription,
    images: [lincolnLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: lincolnLocation.city, url: `/locations/${lincolnLocation.slug}` }
        ]}
      />
      <LocationPage data={lincolnLocation} />
    </>
  );
}
