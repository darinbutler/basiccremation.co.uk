import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { sloughLocation } from "@/lib/locations/slough";

export const metadata: Metadata = {
  title: sloughLocation.metaTitle,
  description: sloughLocation.metaDescription,
  alternates: {
    canonical: `/locations/${sloughLocation.slug}`
  },
  openGraph: {
    title: sloughLocation.metaTitle,
    description: sloughLocation.metaDescription,
    url: `/locations/${sloughLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: sloughLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: sloughLocation.cityImageAlt || `Basic Cremation in ${sloughLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: sloughLocation.metaTitle,
    description: sloughLocation.metaDescription,
    images: [sloughLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: sloughLocation.city, url: `/locations/${sloughLocation.slug}` }
        ]}
      />
      <LocationPage data={sloughLocation} />
    </>
  );
}
