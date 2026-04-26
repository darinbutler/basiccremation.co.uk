import type { LocationData } from "@/lib/location-types";

// Top 10 by population
import { londonLocation } from "@/lib/locations/london";
import { birminghamLocation } from "@/lib/locations/birmingham";
import { manchesterLocation } from "@/lib/locations/manchester";
import { leedsLocation } from "@/lib/locations/leeds";
import { liverpoolLocation } from "@/lib/locations/liverpool";
import { sheffieldLocation } from "@/lib/locations/sheffield";
import { bristolLocation } from "@/lib/locations/bristol";
import { cardiffLocation } from "@/lib/locations/cardiff";
import { newcastleLocation } from "@/lib/locations/newcastle";
import { nottinghamLocation } from "@/lib/locations/nottingham";

// Tier 1 remainder — England
import { leicesterLocation } from "@/lib/locations/leicester";
import { coventryLocation } from "@/lib/locations/coventry";
import { readingLocation } from "@/lib/locations/reading";
import { brightonLocation } from "@/lib/locations/brighton";
import { boltonLocation } from "@/lib/locations/bolton";
import { sunderlandLocation } from "@/lib/locations/sunderland";
import { southamptonLocation } from "@/lib/locations/southampton";
import { hullLocation } from "@/lib/locations/hull";
import { plymouthLocation } from "@/lib/locations/plymouth";
import { miltonKeynesLocation } from "@/lib/locations/milton-keynes";
import { wolverhamptonLocation } from "@/lib/locations/wolverhampton";
import { derbyLocation } from "@/lib/locations/derby";
import { stokeOnTrentLocation } from "@/lib/locations/stoke-on-trent";
import { northamptonLocation } from "@/lib/locations/northampton";
import { lutonLocation } from "@/lib/locations/luton";
import { swindonLocation } from "@/lib/locations/swindon";
import { norwichLocation } from "@/lib/locations/norwich";
import { yorkLocation } from "@/lib/locations/york";
import { portsmouthLocation } from "@/lib/locations/portsmouth";
import { peterboroughLocation } from "@/lib/locations/peterborough";
import { bournemouthLocation } from "@/lib/locations/bournemouth";
import { southendLocation } from "@/lib/locations/southend";
import { oxfordLocation } from "@/lib/locations/oxford";
import { cambridgeLocation } from "@/lib/locations/cambridge";

// Tier 1 — Wales
import { swanseaLocation } from "@/lib/locations/swansea";
import { newportLocation } from "@/lib/locations/newport";
import { wrexhamLocation } from "@/lib/locations/wrexham";

export const allLocations: Record<string, LocationData> = {
  // Top 10 by population
  london: londonLocation,
  birmingham: birminghamLocation,
  manchester: manchesterLocation,
  leeds: leedsLocation,
  liverpool: liverpoolLocation,
  sheffield: sheffieldLocation,
  bristol: bristolLocation,
  cardiff: cardiffLocation,
  newcastle: newcastleLocation,
  nottingham: nottinghamLocation,
  // Tier 1 remainder — England
  leicester: leicesterLocation,
  coventry: coventryLocation,
  reading: readingLocation,
  brighton: brightonLocation,
  bolton: boltonLocation,
  sunderland: sunderlandLocation,
  southampton: southamptonLocation,
  hull: hullLocation,
  plymouth: plymouthLocation,
  "milton-keynes": miltonKeynesLocation,
  wolverhampton: wolverhamptonLocation,
  derby: derbyLocation,
  "stoke-on-trent": stokeOnTrentLocation,
  northampton: northamptonLocation,
  luton: lutonLocation,
  swindon: swindonLocation,
  norwich: norwichLocation,
  york: yorkLocation,
  portsmouth: portsmouthLocation,
  peterborough: peterboroughLocation,
  bournemouth: bournemouthLocation,
  southend: southendLocation,
  oxford: oxfordLocation,
  cambridge: cambridgeLocation,
  // Tier 1 — Wales
  swansea: swanseaLocation,
  newport: newportLocation,
  wrexham: wrexhamLocation,
  // Tier 2 — mid-size cities (Phase D)
  bradford: bradfordLocation,
  wakefield: wakefieldLocation,
  doncaster: doncasterLocation,
  rotherham: rotherhamLocation,
  bath: bathLocation,
  cheltenham: cheltenhamLocation,
  gloucester: gloucesterLocation,
  exeter: exeterLocation,
  lincoln: lincolnLocation,
  ipswich: ipswichLocation,
  colchester: colchesterLocation,
  chelmsford: chelmsfordLocation,
  maidstone: maidstoneLocation,
  crawley: crawleyLocation,
  guildford: guildfordLocation,
  slough: sloughLocation,
  watford: watfordLocation,
  blackpool: blackpoolLocation,
  preston: prestonLocation,
  warrington: warringtonLocation,
  chester: chesterLocation
};

export function getLocationBySlug(slug: string): LocationData | null {
  return allLocations[slug] || null;
}

export function getAllLocationSlugs(): string[] {
  return Object.keys(allLocations);
}

/**
 * Returns up to `max` other locations whose `region` overlaps with the given location's region,
 * excluding the current location itself. Powers the "Other locations in {region}" block.
 *
 * Region matching is loose — we use word-overlap so "Greater Manchester" matches "Manchester",
 * "South Yorkshire" matches "South Yorkshire", "Cardiff & South Wales" matches "Newport & South East Wales".
 * Falls back to country if no in-region match.
 */
export function getRegionalSiblings(
  currentSlug: string,
  max = 6
): LocationData[] {
  const current = allLocations[currentSlug];
  if (!current) return [];

  const currentRegionWords = current.region
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 3); // ignore "and", "the", etc.

  const all = Object.values(allLocations);
  const others = all.filter((l) => l.slug !== currentSlug);

  // Score by word overlap with currentRegionWords
  const scored = others.map((l) => {
    const lWords = l.region
      .toLowerCase()
      .replace(/[^a-z\s]/g, " ")
      .split(/\s+/);
    const overlap = currentRegionWords.filter((w) => lWords.includes(w)).length;
    return { loc: l, overlap };
  });

  // Cities in the same exact region
  const sameRegion = scored.filter((s) => s.overlap >= 1).map((s) => s.loc);
  if (sameRegion.length >= max) return sameRegion.slice(0, max);

  // Pad out with same-country cities (sorted alphabetically) until we hit max
  const padding = others
    .filter((l) => l.country === current.country && !sameRegion.includes(l))
    .sort((a, b) => a.city.localeCompare(b.city))
    .slice(0, max - sameRegion.length);

  return [...sameRegion, ...padding];
}

