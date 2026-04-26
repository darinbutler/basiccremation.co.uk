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

// Tier 2 — mid-size cities (Phase D)
import { bradfordLocation } from "@/lib/locations/bradford";
import { wakefieldLocation } from "@/lib/locations/wakefield";
import { doncasterLocation } from "@/lib/locations/doncaster";
import { rotherhamLocation } from "@/lib/locations/rotherham";
import { bathLocation } from "@/lib/locations/bath";
import { cheltenhamLocation } from "@/lib/locations/cheltenham";
import { gloucesterLocation } from "@/lib/locations/gloucester";
import { exeterLocation } from "@/lib/locations/exeter";
import { lincolnLocation } from "@/lib/locations/lincoln";
import { ipswichLocation } from "@/lib/locations/ipswich";
import { colchesterLocation } from "@/lib/locations/colchester";
import { chelmsfordLocation } from "@/lib/locations/chelmsford";
import { maidstoneLocation } from "@/lib/locations/maidstone";
import { crawleyLocation } from "@/lib/locations/crawley";
import { guildfordLocation } from "@/lib/locations/guildford";
import { sloughLocation } from "@/lib/locations/slough";
import { watfordLocation } from "@/lib/locations/watford";
import { blackpoolLocation } from "@/lib/locations/blackpool";
import { prestonLocation } from "@/lib/locations/preston";
import { warringtonLocation } from "@/lib/locations/warrington";
import { chesterLocation } from "@/lib/locations/chester";

// Tier 3 — fill the gaps (Phase E)
import { telfordLocation } from "@/lib/locations/telford";
import { huddersfieldLocation } from "@/lib/locations/huddersfield";
import { stockportLocation } from "@/lib/locations/stockport";
import { salfordLocation } from "@/lib/locations/salford";
import { oldhamLocation } from "@/lib/locations/oldham";
import { blackburnLocation } from "@/lib/locations/blackburn";
import { burnleyLocation } from "@/lib/locations/burnley";
import { halifaxLocation } from "@/lib/locations/halifax";
import { barnsleyLocation } from "@/lib/locations/barnsley";
import { worcesterLocation } from "@/lib/locations/worcester";
import { salisburyLocation } from "@/lib/locations/salisbury";
import { eastbourneLocation } from "@/lib/locations/eastbourne";
import { worthingLocation } from "@/lib/locations/worthing";
import { hastingsLocation } from "@/lib/locations/hastings";
import { carlisleLocation } from "@/lib/locations/carlisle";

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
  chester: chesterLocation,
  // Tier 3 — fill the gaps (Phase E)
  telford: telfordLocation,
  huddersfield: huddersfieldLocation,
  stockport: stockportLocation,
  salford: salfordLocation,
  oldham: oldhamLocation,
  blackburn: blackburnLocation,
  burnley: burnleyLocation,
  halifax: halifaxLocation,
  barnsley: barnsleyLocation,
  worcester: worcesterLocation,
  salisbury: salisburyLocation,
  eastbourne: eastbourneLocation,
  worthing: worthingLocation,
  hastings: hastingsLocation,
  carlisle: carlisleLocation
};

export function getLocationBySlug(slug: string): LocationData | null {
  return allLocations[slug] || null;
}

export function getAllLocationSlugs(): string[] {
  return Object.keys(allLocations);
}

/* ──────────────────────────────────────────────────────────────────
 * REGIONAL CLUSTERS — geographic groupings used by getRegionalSiblings
 * to surface genuinely-nearby cities on each city page.
 *
 * Each city slug maps to a single cluster_id; clusters are grouped
 * geographically (not by formal county or region — by what's actually
 * driveable / nearby for a family choosing where to arrange a cremation).
 * Adjacent clusters provide fallback siblings if the primary cluster is small.
 * ────────────────────────────────────────────────────────────────── */

type ClusterId =
  | "north-west"
  | "yorkshire"
  | "north-east"
  | "west-midlands"
  | "east-midlands"
  | "east-anglia"
  | "south-west"
  | "south-coast"
  | "south-east"
  | "london"
  | "wales-south"
  | "wales-north"
  | "north-wales-borders";

const CLUSTER_MEMBERS: Record<ClusterId, string[]> = {
  "north-west": [
    "manchester", "liverpool", "bolton", "warrington", "preston", "blackpool",
    "chester", "stockport", "salford", "oldham", "blackburn", "burnley",
    "lancaster", "carlisle", "st-helens"
  ],
  "yorkshire": [
    "leeds", "bradford", "sheffield", "wakefield", "doncaster", "rotherham",
    "york", "hull", "huddersfield", "halifax", "barnsley"
  ],
  "north-east": ["newcastle", "sunderland", "durham"],
  "west-midlands": [
    "birmingham", "coventry", "wolverhampton", "telford", "worcester",
    "stoke-on-trent"
  ],
  "east-midlands": [
    "leicester", "nottingham", "derby", "northampton", "lincoln"
  ],
  "east-anglia": [
    "norwich", "ipswich", "colchester", "chelmsford", "peterborough",
    "cambridge", "southend"
  ],
  "south-west": [
    "bristol", "bath", "gloucester", "cheltenham", "exeter", "plymouth",
    "bournemouth", "swindon", "salisbury"
  ],
  "south-coast": [
    "brighton", "southampton", "portsmouth", "worthing", "eastbourne",
    "hastings"
  ],
  "south-east": [
    "reading", "oxford", "slough", "watford", "guildford", "crawley",
    "maidstone", "luton", "milton-keynes"
  ],
  "london": ["london"],
  "wales-south": ["cardiff", "swansea", "newport"],
  "wales-north": ["wrexham"],
  "north-wales-borders": []
};

const CLUSTER_ADJACENCY: Record<ClusterId, ClusterId[]> = {
  "north-west": ["yorkshire", "north-east", "west-midlands", "wales-north"],
  "yorkshire": ["north-west", "north-east", "east-midlands"],
  "north-east": ["yorkshire", "north-west"],
  "west-midlands": ["east-midlands", "south-west", "wales-south", "north-west"],
  "east-midlands": ["yorkshire", "west-midlands", "east-anglia"],
  "east-anglia": ["east-midlands", "south-east", "london"],
  "south-west": ["wales-south", "south-coast", "south-east", "west-midlands"],
  "south-coast": ["south-east", "south-west"],
  "south-east": ["london", "south-coast", "south-west", "east-anglia"],
  "london": ["south-east", "east-anglia"],
  "wales-south": ["south-west", "west-midlands", "wales-north"],
  "wales-north": ["north-west", "west-midlands", "wales-south"],
  "north-wales-borders": ["wales-north", "north-west"]
};

// Reverse-lookup: slug → cluster_id
const SLUG_TO_CLUSTER: Record<string, ClusterId> = (() => {
  const map: Record<string, ClusterId> = {};
  (Object.keys(CLUSTER_MEMBERS) as ClusterId[]).forEach((cluster) => {
    CLUSTER_MEMBERS[cluster].forEach((slug) => {
      map[slug] = cluster;
    });
  });
  return map;
})();

/**
 * Returns up to `max` other locations that are GEOGRAPHICALLY NEARBY to the
 * given city. Uses explicit cluster membership; falls back to adjacent
 * clusters if the primary cluster has fewer than `max` other members.
 */
export function getRegionalSiblings(
  currentSlug: string,
  max = 8
): LocationData[] {
  const cluster = SLUG_TO_CLUSTER[currentSlug];
  if (!cluster) {
    // Fallback for unmapped cities — return same-country alphabetical
    const current = allLocations[currentSlug];
    if (!current) return [];
    return Object.values(allLocations)
      .filter((l) => l.slug !== currentSlug && l.country === current.country)
      .sort((a, b) => a.city.localeCompare(b.city))
      .slice(0, max);
  }

  // Same-cluster siblings (excluding self), only those that exist in allLocations
  const sameCluster = CLUSTER_MEMBERS[cluster]
    .filter((s) => s !== currentSlug && allLocations[s])
    .map((s) => allLocations[s]);

  if (sameCluster.length >= max) return sameCluster.slice(0, max);

  // Pad with adjacent clusters
  const adjacent = CLUSTER_ADJACENCY[cluster] || [];
  const padding: LocationData[] = [];
  const seen = new Set<string>([currentSlug, ...sameCluster.map((l) => l.slug)]);

  for (const adjCluster of adjacent) {
    for (const slug of CLUSTER_MEMBERS[adjCluster]) {
      if (seen.has(slug) || !allLocations[slug]) continue;
      padding.push(allLocations[slug]);
      seen.add(slug);
      if (sameCluster.length + padding.length >= max) break;
    }
    if (sameCluster.length + padding.length >= max) break;
  }

  return [...sameCluster, ...padding].slice(0, max);
}

