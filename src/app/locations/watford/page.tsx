import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { watfordLocation } from "@/lib/locations/watford";

export const metadata: Metadata = {
  title: watfordLocation.metaTitle,
  description: watfordLocation.metaDescription,
  alternates: {
    canonical: `/locations/${watfordLocation.slug}`
  },
  openGraph: {
    title: watfordLocation.metaTitle,
    description: watfordLocation.metaDescription,
    url: `/locations/${watfordLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: watfordLocation.cityImage || `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: watfordLocation.cityImageAlt || `Basic Cremation in ${watfordLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: watfordLocation.metaTitle,
    description: watfordLocation.metaDescription,
    images: [watfordLocation.cityImage || `https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: watfordLocation.city, url: `/locations/${watfordLocation.slug}` }
        ]}
      />
      <LocationPage data={watfordLocation} />
    </>
  );
}
