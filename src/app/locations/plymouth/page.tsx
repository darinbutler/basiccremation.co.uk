import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { plymouthLocation } from "@/lib/locations/plymouth";

export const metadata: Metadata = {
  title: plymouthLocation.metaTitle,
  description: plymouthLocation.metaDescription,
  alternates: {
    canonical: `/locations/${plymouthLocation.slug}`
  },
  openGraph: {
    title: plymouthLocation.metaTitle,
    description: plymouthLocation.metaDescription,
    url: `/locations/${plymouthLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: plymouthLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: plymouthLocation.cityImageAlt || `Basic Cremation in ${plymouthLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: plymouthLocation.metaTitle,
    description: plymouthLocation.metaDescription,
    images: [plymouthLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: plymouthLocation.city, url: `/locations/${plymouthLocation.slug}` }
        ]}
      />
      <LocationPage data={plymouthLocation} />
    </>
  );
}
