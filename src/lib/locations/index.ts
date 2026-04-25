import type { LocationData } from "@/lib/location-types";
import { manchesterLocation } from "@/lib/locations/manchester";

export const allLocations: Record<string, LocationData> = {
  manchester: manchesterLocation
  // Other Tier 1 cities added in subsequent batches
};

export function getLocationBySlug(slug: string): LocationData | null {
  return allLocations[slug] || null;
}

export function getAllLocationSlugs(): string[] {
  return Object.keys(allLocations);
}
