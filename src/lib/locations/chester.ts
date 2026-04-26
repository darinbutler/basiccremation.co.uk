import type { LocationData } from "@/lib/location-types";

export const chesterLocation: LocationData = {
  slug: "chester",
  city: "Chester",
  region: "Cheshire",
  country: "England",
  metaTitle: "Basic Cremation Chester | £1,499 Direct Cremation | 24/7",
  metaDescription:
    "Arrange a basic cremation in Chester for £1,499 — single all-inclusive price, no hidden fees. Trusted local funeral directors and Cheshire crematoria. 24/7 phone support.",
  h1: "Basic Cremation in Chester",
  lede:
    "A simple, dignified cremation arranged across Chester and Cheshire — handled by trusted local funeral directors and local crematoria, never centralised hundreds of miles away.",

  localIntro: [
    "If you've lost someone in Chester or anywhere across Cheshire, we can help you arrange a basic cremation — also called a direct or unattended cremation. The whole process happens locally: an independent funeral director near you brings your loved one into care at their own funeral home, and the cremation takes place at one of the established Cheshire crematoria.",
    "Chester is the cathedral city of Cheshire. Blacon Crematorium serves the city and the eastern Wrexham fringe.",
    "The price is £1,499 — a single all-inclusive figure covering everything that needs to happen. The team is available 24 hours a day, every day of the year. If you're unsure where to start, the most useful thing is to pick up the phone."
  ],

  crematoriaIntro:
    "We work with Blacon, Pentrebychan — alongside other crematoria across the wider region. Your local funeral director arranges the cremation at the appropriate facility for your area; you'll know the date and time in advance.",
  crematoria: [
    {
      name: "Blacon Cemetery and Crematorium",
      address: "Blacon Avenue, Chester CH1 5BB",
      note:
        "Cheshire West and Chester Council's crematorium, set within Blacon Cemetery in the north of the city."
    },
    {
      name: "Pentrebychan Crematorium",
      address: "Pentrebychan, Wrexham LL14 4EP",
      note:
        "Often used by western Chester residents."
    }
  ],

  areasCovered: [
    "Chester city centre",
    "Hoole",
    "Newton",
    "Boughton",
    "Christleton",
    "Saltney",
    "Lache",
    "Vicars Cross",
    "Upton",
    "Ellesmere Port (linked)",
    "Frodsham",
    "Northwich",
    "Winsford",
    "Tarporley"
  ],

  registerOffice: {
    name: "Chester Register Office",
    address: "Goldsmith House, Hamilton Place, Chester CH1 2BH",
    phone: "0300 500 8035",
    email: "registers@cheshirewestandchester.gov.uk",
    notes:
      "Deaths within Chester must be registered at the Goldsmith House Register Office. Cheshire West and Chester Council operates the registration service. Appointment-only."
  },

  coronerNotes: [
    "If the death is unexpected, sudden or the cause is not yet clear, the Medical Examiner may refer the case to the HM Senior Coroner for Cheshire. This happens for around 40% of deaths in England and Wales — it's routine and not an indication that anything is wrong.",
    "The coroner reviews the cause of death and either releases the death for registration or arranges a post-mortem. Where a post-mortem is needed, your loved one is held at the public mortuary until the examination is complete.",
    "If an inquest is opened, the coroner sends paperwork to the registrar after it concludes. The cremation can proceed once the coroner releases your loved one to the funeral director."
  ],

  hospitalBereavement: [
    {
      name: "Countess of Chester Hospital",
      note: "Bereavement Office, Liverpool Road, CH2 1UL. Call ahead before visiting."
    }
  ],

  supportServices: [
    {
      name: "Hospice of the Good Shepherd — Bereavement Service",
      phone: "01244 851091",
      description: "Chester-area hospice offering bereavement counselling.",
      url: "https://www.hospicegs.com"
    },
    {
      name: "Cruse Bereavement Support — Cheshire",
      phone: "0808 808 1677",
      description: "Free, confidential bereavement support.",
      url: "https://www.cruse.org.uk"
    }
  ],

  fundingHelp: [
    "If you're receiving certain benefits and arranging the funeral, you may qualify for the government's Funeral Expenses Payment.",
    "Apply through gov.uk or call the Bereavement Service helpline on 0800 731 0469. Claims can be made up to six months after the funeral.",
    "If you're struggling to cover the £1,499 upfront, call us — we can talk through payment options."
  ],

  faqs: [
    {
      question: "Which Chester crematorium will be used?",
      answer:
        "It depends on where you are. Your local funeral director picks the appropriate facility based on availability and your area, and tells you the date and time in advance."
    },
    {
      question: "How quickly can you collect from the local hospital in Chester?",
      answer:
        "Once the local bereavement office and Medical Examiner have released the paperwork, collection is typically within hours, day or night."
    },
    {
      question: "What if my loved one died at home in Chester?",
      answer:
        "If expected, call the GP or out-of-hours GP service first; they verify death and start the Medical Certificate of Cause of Death. Then call us. If unexpected, 999 first — paramedic and police attendance is routine, which triggers a coroner referral."
    },
    {
      question: "Do you cover the wider Cheshire region?",
      answer:
        "Yes — we work with funeral directors and crematoria across Cheshire. The £1,499 price is the same wherever you are."
    },
    {
      question: "Can ashes be returned in person or by post?",
      answer:
        "Either. Most families collect from the local funeral home; ashes can also be sent by tracked courier to a UK mainland address at no extra charge."
    }
  ],

  transitNote:
    "Collection from Chester hospitals, care homes and private addresses across Cheshire typically happens within hours of your call, day or night. The local funeral director arrives in their own vehicle and brings your loved one into care at their funeral home — never into a centralised facility hundreds of miles away.",

  cityImage:
    "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1800&q=75",
  cityImageAlt: "Chester — peaceful local scene"
};
