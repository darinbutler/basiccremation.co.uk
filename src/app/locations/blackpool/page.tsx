import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { blackpoolLocation } from "@/lib/locations/blackpool";

export const metadata: Metadata = {
  title: blackpoolLocation.metaTitle,
  description: blackpoolLocation.metaDescription,
  alternates: {
    canonical: `/locations/${blackpoolLocation.slug}`
  },
  openGraph: {
    title: blackpoolLocation.metaTitle,
    description: blackpoolLocation.metaDescription,
    url: `/locations/${blackpoolLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: blackpoolLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: blackpoolLocation.cityImageAlt || `Basic Cremation in ${blackpoolLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: blackpoolLocation.metaTitle,
    description: blackpoolLocation.metaDescription,
    images: [blackpoolLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: blackpoolLocation.city, url: `/locations/${blackpoolLocation.slug}` }
        ]}
      />
      <LocationPage data={blackpoolLocation} />
    </>
  );
}
