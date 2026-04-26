import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { peterboroughLocation } from "@/lib/locations/peterborough";

export const metadata: Metadata = {
  title: peterboroughLocation.metaTitle,
  description: peterboroughLocation.metaDescription,
  alternates: {
    canonical: `/locations/${peterboroughLocation.slug}`
  },
  openGraph: {
    title: peterboroughLocation.metaTitle,
    description: peterboroughLocation.metaDescription,
    url: `/locations/${peterboroughLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: peterboroughLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: peterboroughLocation.cityImageAlt || `Basic Cremation in ${peterboroughLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: peterboroughLocation.metaTitle,
    description: peterboroughLocation.metaDescription,
    images: [peterboroughLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: peterboroughLocation.city, url: `/locations/${peterboroughLocation.slug}` }
        ]}
      />
      <LocationPage data={peterboroughLocation} />
    </>
  );
}
