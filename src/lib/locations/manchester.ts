import type { LocationData } from "@/lib/location-types";

export const manchesterLocation: LocationData = {
  slug: "manchester",
  city: "Manchester",
  region: "Greater Manchester",
  country: "England",
  metaTitle: "Basic Cremation Manchester | £1,499 Direct Cremation | 24/7",
  metaDescription:
    "Arrange a basic cremation in Manchester for £1,499 — single all-inclusive price, no hidden fees. Trusted local funeral directors and Greater Manchester crematoria. 24/7 phone support.",
  h1: "Basic Cremation in Manchester",
  lede:
    "A simple, dignified cremation arranged across Manchester and Greater Manchester — handled by trusted local funeral directors and local crematoria, not a centralised national operator.",

  localIntro: [
    "If you’ve lost someone in Manchester or anywhere across Greater Manchester, we can help you arrange a basic cremation — also known as a direct or unattended cremation. The whole process is taken care of locally: an independent funeral director near you brings your loved one into care at their own funeral home, and the cremation itself takes place at one of the established Greater Manchester crematoria.",
    "Greater Manchester is well served for direct cremation. The historic Manchester Crematorium in Chorlton (the second-oldest in the country, opened in 1892) and Blackley Crematorium in north Manchester between them serve much of the city. Salford, Stockport and Trafford are covered by their own crematoria, and the wider conurbation — Bolton, Bury, Oldham, Rochdale, Tameside, Wigan — has its own facilities too. Your local funeral director arranges the cremation at the appropriate crematorium for your area. Nothing is transported across the country.",
    "The price is £1,499 — a single all-inclusive price covering everything that needs to happen. The team is available 24 hours a day, every day of the year. If a death has just occurred and you’re not sure what to do, the most useful thing is to pick up the phone."
  ],

  crematoriaIntro:
    "We work with Manchester Crematorium, Blackley, Agecroft, Stockport and Altrincham — alongside other established crematoria across the wider Greater Manchester area. Your local funeral director arranges the cremation at the appropriate facility for your area; you’ll know the date and time in advance.",
  crematoria: [
    {
      name: "Manchester Crematorium",
      address: "Barlow Moor Road, Chorlton-cum-Hardy, Manchester M21 7GZ",
      note:
        "Opened in 1892, Manchester Crematorium was the second crematorium ever built in the UK. The Grade II listed Chorlton site sits beside Southern Cemetery, with mature gardens and two chapels."
    },
    {
      name: "Blackley Crematorium",
      address: "Victoria Avenue, Blackley, Manchester M9 8JP",
      note:
        "The only crematorium owned and operated by Manchester City Council. Opened in 1965, with a recently refurbished centre chapel and two smaller side chapels. Set among gentle hills with views towards the Pennines."
    },
    {
      name: "Agecroft Crematorium",
      address: "Langley Road, Pendlebury, Swinton, Salford M27 8SS",
      note:
        "Salford’s primary crematorium, set within Agecroft (Northern) Cemetery. Serves families across Salford, Eccles, Worsley and the surrounding areas."
    },
    {
      name: "Stockport Crematorium",
      address: "Buxton Road, Heaviley, Stockport SK2 6LS",
      note:
        "Located on the south side of Stockport, with the Cypress and Rowan chapels. Operated locally and serves Stockport, Cheadle, Marple and the Cheshire borders."
    },
    {
      name: "Altrincham Crematorium",
      address: "Whitehouse Lane, Dunham Massey, Altrincham WA14 5RH",
      note:
        "The crematorium for Trafford borough — covering Altrincham, Sale, Stretford, Urmston and Hale. Trafford’s statutory burial and cremation records are held here."
    }
  ],

  areasCovered: [
    "Manchester city centre",
    "Salford",
    "Stockport",
    "Trafford",
    "Bury",
    "Bolton",
    "Oldham",
    "Rochdale",
    "Tameside",
    "Wigan",
    "Chorlton",
    "Didsbury",
    "Withington",
    "Sale",
    "Altrincham",
    "Cheadle",
    "Whitefield",
    "Eccles",
    "Pendlebury",
    "Prestwich"
  ],

  registerOffice: {
    name: "Manchester Register Office",
    address: "Heron House, 47 Lloyd Street, Manchester M2 5LE",
    phone: "0161 234 5005",
    email: "registeroffice@manchester.gov.uk",
    notes:
      "All deaths that occurred within the City of Manchester must be registered in person at Manchester Register Office in Heron House, on the corner of Albert Square opposite the Town Hall. The office is open Monday to Friday from 8.15am to 3.30pm, with an early close at 1pm on the first Tuesday of each month. A death must normally be registered within 5 days unless the coroner is involved. Importantly: Manchester only registers deaths that occurred within the City of Manchester itself — Salford, Stockport, Tameside, Trafford, Bury, Bolton, Oldham, Rochdale and Wigan each have their own register offices for deaths in their borough. Registration is by appointment only; appointments can only be booked once the Medical Examiner or coroner has released the relevant paperwork to the office. They’ll then email you a booking link. Manchester participates in the Tell Us Once service, which lets you notify most government departments of a death in a single step at the registration appointment."
  },

  coronerNotes: [
    "If the death is unexpected, sudden, or the cause is not yet clear, the Medical Examiner may refer the case to HM Coroner for Manchester. This is more common than people expect — around 40% of deaths in England and Wales are referred to a coroner — and it is not a sign that anything is wrong.",
    "The coroner’s role is to confirm the cause of death. Where they conclude the cause is natural, they’ll release the death for registration without further action. If a post-mortem examination is needed, the body is held until the examination is complete; this can add several days. If a full inquest is opened, you don’t need to register the death yourself — the registrar receives the paperwork directly after the inquest concludes.",
    "Throughout this period, you can still appoint a funeral director and start preparing — but the cremation date can only be confirmed once the coroner releases the body. Your funeral director will be familiar with the Manchester coroner’s process and will keep you informed."
  ],

  hospitalBereavement: [
    {
      name: "Manchester Royal Infirmary (MRI)",
      note: "Bereavement Office on Oxford Road, M13 9WL. Call ahead before visiting; the office issues paperwork to the Medical Examiner."
    },
    {
      name: "Wythenshawe Hospital",
      note: "Bereavement Office on Southmoor Road, M23 9LT. Serves south Manchester."
    },
    {
      name: "North Manchester General",
      note: "Bereavement Office on Delaunays Road, Crumpsall, M8 5RB. Serves north Manchester."
    },
    {
      name: "Salford Royal",
      note: "Bereavement Office on Stott Lane, Salford M6 8HD. For Salford-borough deaths."
    },
    {
      name: "Stepping Hill Hospital",
      note: "Bereavement Office on Poplar Grove, Stockport SK2 7JE. For Stockport-borough deaths."
    },
    {
      name: "The Christie",
      note: "Bereavement Office on Wilmslow Road, M20 4BX. The cancer specialist hospital, serving the wider region."
    }
  ],

  supportServices: [
    {
      name: "Greater Manchester Bereavement Service",
      phone: "0161 983 0902",
      description:
        "A free local service for anyone in Greater Manchester who has been bereaved or affected by a death — regardless of how recent or how long ago. They help match you with the appropriate local support, including counselling, peer support and signposting. Open Monday to Friday, 9am–5pm.",
      url: "https://greater-manchester-bereavement-service.org.uk/"
    },
    {
      name: "Cruse Bereavement Support — Manchester",
      phone: "0808 808 1677",
      description:
        "The Manchester branch of the national bereavement charity, offering confidential one-to-one support, telephone support and email support, all free of charge. The national helpline is 0808 808 1677, open Monday, Wednesday, Thursday and Friday 9.30am–5pm, and Tuesday 1pm–8pm.",
      url: "https://www.cruse.org.uk/"
    },
    {
      name: "Survivors of Bereavement by Suicide (SOBS)",
      description:
        "A self-help organisation for people bereaved by suicide. Provides peer support groups across Greater Manchester and a national helpline. If you’re bereaved by suicide, the GM Bereavement Service can also signpost to specific local support."
    }
  ],

  fundingHelp: [
    "If you’re on a low income or receive certain benefits, you may be eligible for a Funeral Expenses Payment from the Department for Work and Pensions (DWP). It can cover the cost of cremation, basic funeral costs, and up to £1,000 towards other funeral expenses. You can apply by phone or online via gov.uk; the application typically needs to be made within 6 months of the funeral.",
    "Manchester City Council does not run a separate funeral grant scheme, but the council can signpost residents in financial difficulty to other forms of support, including Council Tax exemptions for the deceased’s estate during the administration period. If you’re struggling, Citizens Advice Manchester has a dedicated service for benefits and bereavement-related issues.",
    "If your loved one had no next of kin able to arrange or fund a funeral, the council may arrange a Public Health Funeral (sometimes called a paupers’ funeral) under section 46 of the Public Health (Control of Disease) Act 1984. This is a last-resort option arranged directly between the council and a contracted funeral director."
  ],

  transitNote:
    "Collection from Manchester hospitals, care homes and private addresses across Greater Manchester typically happens within hours of your call, day or night. The local funeral director arrives in their own vehicle and brings your loved one into care at their funeral home — never into a centralised facility hundreds of miles away.",

  faqs: [
    {
      question: "How quickly can you collect from a Manchester hospital?",
      answer:
        "A local funeral director can usually collect from a Manchester hospital — including Manchester Royal Infirmary, North Manchester General, Wythenshawe Hospital, The Christie, Stepping Hill, and Salford Royal — within a few hours of your call. The exact timing depends on the hospital’s Medical Examiner sign-off and mortuary release process, which the funeral director will manage on your behalf."
    },
    {
      question: "Which Manchester crematorium will be used?",
      answer:
        "We work with Manchester Crematorium in Chorlton, Blackley Crematorium in north Manchester, Agecroft Crematorium in Salford, Stockport Crematorium and Altrincham Crematorium for Trafford. The exact crematorium depends on your area within Greater Manchester, and the local funeral director arranges this directly. You’ll know the date and time in advance."
    },
    {
      question: "Do you cover Salford, Stockport, Trafford and the wider Greater Manchester area?",
      answer:
        "Yes. We arrange basic cremations across the whole of Greater Manchester, including Salford, Stockport, Trafford, Bury, Bolton, Oldham, Rochdale, Tameside and Wigan. The price is £1,499 regardless of which Greater Manchester borough you’re in. Note that for death registration, you’ll need to use the register office for the borough where the person died — Manchester Register Office only registers deaths that occurred within the City of Manchester itself."
    },
    {
      question: "What if my loved one died at home or in a care home in Manchester?",
      answer:
        "Collection from a private address (home, care home or hospice) involves a £250 Priority Care fee in addition to the £1,499 base price — total £1,749. This is because home collections are arranged on shorter notice than hospital collections. The Priority Care fee is always explained before anything happens, never added retrospectively."
    },
    {
      question: "What if the coroner is involved?",
      answer:
        "If the death is referred to HM Coroner for Manchester — which happens in around 40% of deaths in England and Wales — you don’t need to do anything different. We can still take care of the arrangements; the cremation date is simply confirmed once the coroner releases the body. If a full inquest is opened, you don’t need to register the death yourself — the registrar receives the paperwork directly after the inquest concludes. Your funeral director will be familiar with the process."
    },
    {
      question: "Can family attend the cremation?",
      answer:
        "A basic cremation is by definition unattended — no family members are present at the crematorium. This is part of what keeps the cost down compared to a traditional funeral. Many families instead choose to gather at home before or after, or hold a memorial service of their own once the ashes are returned. The local funeral director will tell you the date and time the cremation will take place so you can mark it in your own way."
    }
  ],

  showWhatIsBlock: true
};
