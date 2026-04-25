export interface CrematoriumDetail {
  /** Display name, e.g. "Manchester Crematorium" */
  name: string;
  /** Address (one line), e.g. "Barlow Moor Road, Chorlton-cum-Hardy, M21 7GZ" */
  address: string;
  /** One sentence of substantive context — opened year, character, anything notable */
  note: string;
}

export interface SupportService {
  /** Display name, e.g. "Greater Manchester Bereavement Service" */
  name: string;
  /** Phone number for the service */
  phone?: string;
  /** Brief description of what the service does and who it's for */
  description: string;
  /** Optional outbound URL to the service's own page */
  url?: string;
}

export interface HospitalBereavement {
  name: string;
  /** Free-text note: e.g. "Bereavement Office, M13 9WL — call ahead before visiting" */
  note: string;
}

export interface RegisterOffice {
  name: string;
  address: string;
  phone: string;
  email: string;
  /** Body copy describing how registration works for this authority */
  notes: string;
}

export interface LocationData {
  /** URL slug, e.g. "manchester" */
  slug: string;
  /** Display name, e.g. "Manchester" */
  city: string;
  /** Wider catchment, e.g. "Greater Manchester" */
  region: string;
  /** Country */
  country: "England" | "Scotland" | "Wales";
  /** SEO meta title (under 60 chars ideal) */
  metaTitle: string;
  /** SEO meta description (under 160 chars ideal) */
  metaDescription: string;
  /** H1 (the page heading) */
  h1: string;
  /** Lede paragraph — sits under the H1 */
  lede: string;
  /** A 2–3 paragraph genuinely-local intro */
  localIntro: string[];
  /** Crematoria with brief substantive detail per facility */
  crematoria: CrematoriumDetail[];
  /** Optional intro paragraph for the crematoria section */
  crematoriaIntro?: string;
  /** List of areas/suburbs/boroughs served from this hub */
  areasCovered: string[];
  /** Register office details */
  registerOffice: RegisterOffice;
  /** Coroner/Procurator Fiscal section content (paragraphs) */
  coronerNotes: string[];
  /** Hospital bereavement contacts in the area */
  hospitalBereavement?: HospitalBereavement[];
  /** Local bereavement support services */
  supportServices: SupportService[];
  /** Help with funeral costs — paragraphs of content */
  fundingHelp: string[];
  /** City-specific FAQ entries */
  faqs: { question: string; answer: string }[];
  /** Approximate transit/collection note */
  transitNote: string;
  /** Whether to include the optional "What is a basic cremation?" reassurance block */
  showWhatIsBlock?: boolean;
}
