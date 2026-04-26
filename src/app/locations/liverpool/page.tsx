import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { liverpoolLocation } from "@/lib/locations/liverpool";

export const metadata: Metadata = {
  title: liverpoolLocation.metaTitle,
  description: liverpoolLocation.metaDescription,
  alternates: {
    canonical: `/locations/${liverpoolLocation.slug}`
  },
  openGraph: {
    title: liverpoolLocation.metaTitle,
    description: liverpoolLocation.metaDescription,
    url: `/locations/${liverpoolLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: liverpoolLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: liverpoolLocation.cityImageAlt || `Basic Cremation in ${liverpoolLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: liverpoolLocation.metaTitle,
    description: liverpoolLocation.metaDescription,
    images: [liverpoolLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: liverpoolLocation.city, url: `/locations/${liverpoolLocation.slug}` }
        ]}
      />
      <LocationPage data={liverpoolLocation} />
    </>
  );
}
