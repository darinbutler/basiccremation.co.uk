import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { lutonLocation } from "@/lib/locations/luton";

export const metadata: Metadata = {
  title: lutonLocation.metaTitle,
  description: lutonLocation.metaDescription,
  alternates: {
    canonical: `/locations/${lutonLocation.slug}`
  },
  openGraph: {
    title: lutonLocation.metaTitle,
    description: lutonLocation.metaDescription,
    url: `/locations/${lutonLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: lutonLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: lutonLocation.cityImageAlt || `Basic Cremation in ${lutonLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: lutonLocation.metaTitle,
    description: lutonLocation.metaDescription,
    images: [lutonLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: lutonLocation.city, url: `/locations/${lutonLocation.slug}` }
        ]}
      />
      <LocationPage data={lutonLocation} />
    </>
  );
}
