import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { miltonKeynesLocation } from "@/lib/locations/milton-keynes";

export const metadata: Metadata = {
  title: miltonKeynesLocation.metaTitle,
  description: miltonKeynesLocation.metaDescription,
  alternates: {
    canonical: `/locations/${miltonKeynesLocation.slug}`
  },
  openGraph: {
    title: miltonKeynesLocation.metaTitle,
    description: miltonKeynesLocation.metaDescription,
    url: `/locations/${miltonKeynesLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: miltonKeynesLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: miltonKeynesLocation.cityImageAlt || `Basic Cremation in ${miltonKeynesLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: miltonKeynesLocation.metaTitle,
    description: miltonKeynesLocation.metaDescription,
    images: [miltonKeynesLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: miltonKeynesLocation.city, url: `/locations/${miltonKeynesLocation.slug}` }
        ]}
      />
      <LocationPage data={miltonKeynesLocation} />
    </>
  );
}
