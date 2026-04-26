import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { portsmouthLocation } from "@/lib/locations/portsmouth";

export const metadata: Metadata = {
  title: portsmouthLocation.metaTitle,
  description: portsmouthLocation.metaDescription,
  alternates: {
    canonical: `/locations/${portsmouthLocation.slug}`
  },
  openGraph: {
    title: portsmouthLocation.metaTitle,
    description: portsmouthLocation.metaDescription,
    url: `/locations/${portsmouthLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: portsmouthLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: portsmouthLocation.cityImageAlt || `Basic Cremation in ${portsmouthLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: portsmouthLocation.metaTitle,
    description: portsmouthLocation.metaDescription,
    images: [portsmouthLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: portsmouthLocation.city, url: `/locations/${portsmouthLocation.slug}` }
        ]}
      />
      <LocationPage data={portsmouthLocation} />
    </>
  );
}
