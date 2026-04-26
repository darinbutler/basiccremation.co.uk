/**
 * Legacy URL → city mapping for the WordPress predecessor site.
 * The old basiccremation.co.uk had ~6,000 indexed URLs of the form
 * `/<seo-pattern>-<county>/` (e.g. `/affordable-cremation-yorkshire/`).
 *
 * This map takes a county/region/location slug and returns the closest
 * matching city we cover. Used by middleware.ts to 301-redirect legacy
 * traffic to the new site without losing search rankings.
 *
 * Order of lookup: longest key first, so `west-yorkshire` matches before `yorkshire`.
 */

// county/region slug → target city slug (which exists in /locations/{slug})
export const LEGACY_LOCATION_TO_CITY: Record<string, string> = {
  // ── ENGLAND — counties ─────────────────────────────────────
  bedfordshire: "luton",
  berkshire: "reading",
  buckinghamshire: "milton-keynes",
  cambridgeshire: "cambridge",
  cheshire: "chester",
  cornwall: "plymouth",
  cumbria: "carlisle",
  derbyshire: "derby",
  devon: "exeter",
  dorset: "bournemouth",
  durham: "newcastle",
  "east-riding": "hull",
  "east-sussex": "brighton",
  "east-yorkshire": "hull",
  essex: "chelmsford",
  gloucestershire: "gloucester",
  "greater-manchester": "manchester",
  hampshire: "southampton",
  herefordshire: "worcester",
  hertfordshire: "watford",
  "isle-of-wight": "portsmouth",
  kent: "maidstone",
  lancashire: "preston",
  leicestershire: "leicester",
  lincolnshire: "lincoln",
  merseyside: "liverpool",
  middlesex: "london",
  norfolk: "norwich",
  "north-yorkshire": "york",
  northamptonshire: "northampton",
  northumberland: "newcastle",
  nottinghamshire: "nottingham",
  oxfordshire: "oxford",
  rutland: "leicester",
  shropshire: "telford",
  somerset: "bath",
  "south-yorkshire": "sheffield",
  staffordshire: "stoke-on-trent",
  suffolk: "ipswich",
  surrey: "guildford",
  sussex: "brighton",
  "tyne-wear": "newcastle",
  "tyne-and-wear": "newcastle",
  warwickshire: "coventry",
  "west-midlands": "birmingham",
  "west-sussex": "brighton",
  "west-yorkshire": "leeds",
  wiltshire: "swindon",
  worcestershire: "worcester",
  yorkshire: "leeds",

  // ── ENGLAND — cities (direct match) ────────────────────────
  london: "london",
  birmingham: "birmingham",
  manchester: "manchester",
  leeds: "leeds",
  liverpool: "liverpool",
  sheffield: "sheffield",
  bristol: "bristol",
  newcastle: "newcastle",
  nottingham: "nottingham",
  leicester: "leicester",
  coventry: "coventry",
  reading: "reading",
  brighton: "brighton",
  bolton: "bolton",
  sunderland: "sunderland",
  southampton: "southampton",
  hull: "hull",
  plymouth: "plymouth",
  "milton-keynes": "milton-keynes",
  wolverhampton: "wolverhampton",
  derby: "derby",
  "stoke-on-trent": "stoke-on-trent",
  northampton: "northampton",
  luton: "luton",
  swindon: "swindon",
  norwich: "norwich",
  york: "york",
  portsmouth: "portsmouth",
  peterborough: "peterborough",
  bournemouth: "bournemouth",
  southend: "southend",
  oxford: "oxford",
  cambridge: "cambridge",
  bradford: "bradford",
  wakefield: "wakefield",
  doncaster: "doncaster",
  rotherham: "rotherham",
  bath: "bath",
  cheltenham: "cheltenham",
  gloucester: "gloucester",
  exeter: "exeter",
  lincoln: "lincoln",
  ipswich: "ipswich",
  colchester: "colchester",
  chelmsford: "chelmsford",
  maidstone: "maidstone",
  crawley: "crawley",
  guildford: "guildford",
  slough: "slough",
  watford: "watford",
  blackpool: "blackpool",
  preston: "preston",
  warrington: "warrington",
  chester: "chester",
  telford: "telford",
  huddersfield: "huddersfield",
  stockport: "stockport",
  salford: "salford",
  oldham: "oldham",
  blackburn: "blackburn",
  burnley: "burnley",
  halifax: "halifax",
  barnsley: "barnsley",
  worcester: "worcester",
  salisbury: "salisbury",
  eastbourne: "eastbourne",
  worthing: "worthing",
  hastings: "hastings",
  carlisle: "carlisle",

  // ── WALES ──────────────────────────────────────────────────
  cardiff: "cardiff",
  swansea: "swansea",
  newport: "newport",
  wrexham: "wrexham",
  anglesey: "wrexham",
  bridgend: "cardiff",
  caerphilly: "cardiff",
  carmarthenshire: "swansea",
  ceredigion: "swansea",
  conwy: "wrexham",
  denbighshire: "wrexham",
  flintshire: "wrexham",
  glamorgan: "cardiff",
  "south-glamorgan": "cardiff",
  "mid-glamorgan": "cardiff",
  "west-glamorgan": "swansea",
  gwent: "newport",
  gwynedd: "wrexham",
  "merthyr-tydfil": "cardiff",
  monmouthshire: "newport",
  neath: "swansea",
  "neath-port-talbot": "swansea",
  "port-talbot": "swansea",
  pembrokeshire: "swansea",
  powys: "wrexham",
  rhondda: "cardiff",
  "rhondda-cynon-taf": "cardiff",
  "cynon-taf": "cardiff",
  torfaen: "newport",
  "vale-of-glamorgan": "cardiff",
  "blaenau-gwent": "newport",

  // ── SCOTLAND — site says we serve Scotland but no Scottish city pages yet.
  // Redirect to /locations index where they can call. ──────────
  // (handled as redirect to /locations — see middleware.ts)

  // ── NORTHERN IRELAND — same as Scotland, no NI pages yet ───
  // (handled as redirect to /locations — see middleware.ts)
};

/**
 * Scottish + NI location slugs that should redirect to /locations
 * (we serve them by phone but don't have city pages).
 */
export const LEGACY_LOCATIONS_TO_INDEX: Set<string> = new Set([
  // Scotland
  "aberdeen", "aberdeenshire", "angus", "argyll", "argyll-and-bute", "ayrshire",
  "bute", "borders", "scottish-borders", "clackmannanshire", "dumfries",
  "dumfries-and-galloway", "galloway", "dundee", "east-ayrshire", "east-dunbartonshire",
  "east-lothian", "east-renfrewshire", "edinburgh", "falkirk", "fife", "glasgow",
  "highland", "inverclyde", "lanarkshire", "lothian", "midlothian", "moray",
  "north-ayrshire", "north-lanarkshire", "orkney", "perthshire", "perth",
  "perth-and-kinross", "renfrewshire", "shetland", "south-ayrshire",
  "south-lanarkshire", "stirling", "stirlingshire", "west-dunbartonshire",
  "west-lothian", "western-isles", "outer-hebrides", "kinross",
  // Northern Ireland
  "antrim", "armagh", "belfast", "castlereagh", "derry", "down", "north-down",
  "south-down", "fermanagh", "lisburn", "londonderry", "newry", "tyrone"
]);

/**
 * Sorted list of all legacy location keys, longest first — used to find the
 * longest-matching trailing location in a URL path.
 */
export const ALL_LEGACY_LOCATION_KEYS: string[] = (() => {
  const all = [
    ...Object.keys(LEGACY_LOCATION_TO_CITY),
    ...Array.from(LEGACY_LOCATIONS_TO_INDEX)
  ];
  return all.sort((a, b) => b.length - a.length);
})();

/**
 * Returns the redirect target for a legacy location slug, or null if not recognised.
 */
export function resolveLegacyLocation(locationSlug: string): string | null {
  if (LEGACY_LOCATION_TO_CITY[locationSlug]) {
    return `/locations/${LEGACY_LOCATION_TO_CITY[locationSlug]}`;
  }
  if (LEGACY_LOCATIONS_TO_INDEX.has(locationSlug)) {
    return `/locations`;
  }
  return null;
}
