export const BUSINESS_INFO = {
  name: "Florida Construction Specialists",
  shortName: "FCS",
  phone: "(813) 420-7561",
  phoneRaw: "8134207561",
  email: "frankbragano.fcs@gmail.com",
  address: {
    street: "822 Bayview Dr",
    city: "Ruskin",
    state: "FL",
    zip: "33579",
  },
  coordinates: {
    lat: 27.7332411,
    lng: -82.386967,
  },
  hours: {
    weekdays: "8:00 AM - 4:00 PM",
    saturday: "Closed",
    sunday: "Closed",
  },
  serviceAreas: {
    primary: ["Tampa"],
    central: ["Lakeland", "Brandon", "Plant City"],
    coastal: ["Clearwater", "St. Petersburg", "Sarasota", "Bradenton"],
  },
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
  foundingDate: "1982",
  // Premium positioning data
  projectValueRange: "$500K - $25M+",
  yearsInBusiness: "40+",
  projectsCompleted: "300+",
  totalProjectValue: "$25M+",
  licenseNumber: "CBC1262722",
  // Legacy field - use financingCapability instead for new content
  bondingCapacity: "40+ Years",
  // Company history
  companyHistory: "Florida Construction Specialists (FCS) is a merging of Florida Restoration Team and Shamblin Construction, large scale general contractors that have operated in Florida since 1982.",
  formerName: "Florida Restoration Team",
  // Key differentiators
  inHouseEngineer: true,
  inHouseArchitecturalDraftsman: true,
  financingCapability: "Proven track record allows us to easily access construction financing for commercial, residential, and historic preservation projects. Heavy experience in capturing preservation and restoration grants.",
};

export const SERVICES = [
  {
    name: "Commercial Construction",
    slug: "commercial-construction",
    silo: "commercial" as const,
    description: "Large-scale commercial construction from $500K to $50M+ including office buildings, medical facilities, retail, and hospitality.",
    icon: "Building2",
    minValue: "$500,000",
    features: [
      "New commercial building construction",
      "Office buildings and corporate campuses",
      "Medical and healthcare facilities",
      "Retail centers and shopping complexes",
      "Hospitality and restaurant buildouts",
      "Educational institutions",
      "Industrial and warehouse facilities",
      "Tenant improvements and renovations",
    ],
  },
  {
    name: "Multi-Family Construction",
    slug: "multi-family-construction",
    silo: "commercial" as const,
    description: "Condominium, apartment complex, and multi-family residential construction throughout Tampa Bay.",
    icon: "Building",
    minValue: "$1,000,000",
    features: [
      "Condominium construction",
      "Apartment complexes",
      "Townhome developments",
      "Senior living facilities",
      "Student housing",
      "Mixed-use developments",
      "Common area construction",
      "Amenity buildings",
    ],
  },
  {
    name: "Disaster Recovery",
    slug: "disaster-recovery",
    silo: "commercial" as const,
    description: "Large loss property restoration and insurance restoration services. Prime contractor for commercial and residential disaster recovery.",
    icon: "ShieldCheck",
    minValue: "$250,000",
    features: [
      "Hurricane damage restoration",
      "Storm damage repair",
      "Fire damage restoration",
      "Flood damage recovery",
      "Insurance claim management",
      "Large loss commercial restoration",
      "Multi-family disaster recovery",
      "Complete property rebuilds",
    ],
  },
  {
    name: "Historic Restoration",
    slug: "historic-restoration",
    silo: "commercial" as const,
    description: "Certified historic restoration and preservation specialists. Expert restoration of Tampa Bay's architectural heritage.",
    icon: "Landmark",
    minValue: "$500,000",
    features: [
      "Historic building restoration",
      "Preservation compliance",
      "Adaptive reuse projects",
      "Facade restoration",
      "Period-accurate renovations",
      "Structural stabilization",
      "Interior historic restoration",
      "SHPO coordination",
    ],
  },
  {
    name: "Lifetime Custom Homes",
    slug: "luxury-custom-homes",
    silo: "residential" as const,
    description: "Build a home you'll enjoy for a lifetime. Design/build custom home construction for waterfront estates and luxury residences throughout Tampa Bay.",
    icon: "Home",
    minValue: "$1,000,000",
    features: [
      "Design/Build services",
      "Waterfront estate homes",
      "Architectural home builds",
      "Smart home integration",
      "High-end finishes",
      "Pool and outdoor living",
      "Multi-generational homes",
      "Hurricane-resistant construction",
    ],
  },
  {
    name: "Balcony Reconstruction",
    slug: "balcony-reconstruction",
    silo: "residential" as const,
    description: "Commercial and multi-family balcony reconstruction, waterproofing, and structural repair.",
    icon: "Columns",
    minValue: "$100,000",
    features: [
      "Structural balcony repair",
      "Balcony waterproofing",
      "Railing replacement",
      "Concrete restoration",
      "HOA and condo association work",
      "Multi-unit balcony projects",
      "Safety compliance upgrades",
      "Preventive maintenance programs",
    ],
  },
  {
    name: "Exterior Waterproofing",
    slug: "exterior-waterproofing",
    silo: "residential" as const,
    description: "Building envelope and exterior waterproofing for commercial and residential properties.",
    icon: "Droplets",
    minValue: "$50,000",
    features: [
      "Building envelope waterproofing",
      "Foundation waterproofing",
      "Below-grade waterproofing",
      "Deck and plaza waterproofing",
      "Parking structure waterproofing",
      "Caulking and sealants",
      "Drainage systems",
      "Moisture barrier installation",
    ],
  },
];

export const OTHER_SERVICES = [
  {
    name: "Building Consultants",
    slug: "building-consultants",
    description: "Expert construction consulting services for project planning, feasibility studies, and owner representation.",
  },
  {
    name: "Insurance Restoration",
    slug: "insurance-restoration",
    description: "Large loss insurance claim management and restoration. We work directly with adjusters and carriers.",
  },
  {
    name: "Certified Estimates",
    slug: "certified-estimates",
    description: "Accurate certified construction estimates for insurance claims, legal proceedings, and project planning.",
  },
  {
    name: "Expert Witness",
    slug: "expert-witness",
    description: "Construction expert witness testimony for litigation, arbitration, and dispute resolution.",
  },
];

export const LOCATIONS = [
  { name: "Tampa", slug: "tampa-fl", population: "400,000+", description: "Florida's third-largest city and our primary market" },
  { name: "St. Petersburg", slug: "st-petersburg-fl", population: "260,000+", description: "Historic waterfront city with significant commercial development" },
  { name: "Clearwater", slug: "clearwater-fl", population: "117,000+", description: "Coastal city with thriving tourism and commercial sectors" },
  { name: "Lakeland", slug: "lakeland-fl", population: "115,000+", description: "Growing central Florida city between Tampa and Orlando" },
  { name: "Sarasota", slug: "sarasota-fl", population: "57,000+", description: "Affluent Gulf Coast city known for arts and culture" },
  { name: "Bradenton", slug: "bradenton-fl", population: "60,000+", description: "Historic city with growing commercial and residential development" },
  { name: "Brandon", slug: "brandon-fl", population: "115,000+", description: "Major Tampa suburb with extensive commercial growth" },
  { name: "Ruskin", slug: "ruskin-fl", population: "25,000+", description: "Our home base in South Hillsborough County" },
];

// Commercial services (B2B - Risk & ROI focus)
export const COMMERCIAL_SERVICES = [
  { label: "Commercial Construction", href: "/commercial-construction/" },
  { label: "Multi-Family Construction", href: "/multi-family-construction/" },
  { label: "Medical & Healthcare", href: "/commercial/medical-construction/" },
  { label: "Industrial Flex", href: "/commercial/industrial-construction/" },
  { label: "Disaster Recovery (B2B)", href: "/disaster-recovery/" },
  { label: "Historic Restoration (Comm)", href: "/commercial/historic-restoration/" },
  { label: "Condo Remediation", href: "/commercial/condo-remediation/" },
  { label: "CPM Scheduling", href: "/commercial/cpm-scheduling/" },
];

// Design/Build services (B2C - Vision & Legacy focus)
export const RESIDENTIAL_SERVICES = [
  { label: "Lifetime Custom Homes", href: "/residential/" },
  { label: "Waterfront Resilience", href: "/residential/waterfront-homes/" },
  { label: "Historic Preservation (Res)", href: "/residential/historic-preservation/" },
  { label: "Balcony Reconstruction", href: "/balcony-reconstruction/" },
  { label: "Exterior Waterproofing", href: "/exterior-waterproofing/" },
  { label: "FEMA Compliance", href: "/residential/fema-compliance/" },
];

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Commercial",
    href: "/commercial/",
    submenu: COMMERCIAL_SERVICES,
  },
  {
    label: "Residential",
    href: "/residential/",
    submenu: RESIDENTIAL_SERVICES,
  },
  {
    label: "Locations",
    href: "/locations/",
    submenu: LOCATIONS.map((l) => ({ label: `${l.name}, FL`, href: `/locations/${l.slug}/` })),
  },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

// FAQ Database for each service
export const FAQ_DATABASE = {
  commercial: [
    {
      question: "What size commercial projects does FCS handle?",
      answer: "Florida Construction Specialists handles commercial construction projects ranging from $500,000 to over $50 million. We specialize in large-scale projects including office buildings, medical facilities, retail centers, hospitality venues, and educational institutions throughout the Tampa Bay area."
    },
    {
      question: "Do you work as a subcontractor or prime contractor?",
      answer: "FCS always serves as the prime general contractor on our projects. We do not work as a subcontractor. As prime contractor, we maintain full project control, direct relationships with owners, and complete accountability for project delivery, quality, and timeline."
    },
    {
      question: "Do you offer construction financing assistance?",
      answer: "Yes, Florida Construction Specialists has a proven track record that allows us to easily access construction financing for commercial, residential, and historic preservation projects. We have heavy experience in capturing preservation and restoration grants, and can help navigate financing options for qualified projects."
    },
    {
      question: "How long does a typical commercial project take?",
      answer: "Commercial project timelines vary based on scope and complexity. A typical tenant improvement might take 2-4 months, while ground-up commercial construction ranges from 8-18 months. We provide detailed schedules during pre-construction and maintain strict timeline adherence."
    },
    {
      question: "Do you provide design-build services?",
      answer: "Yes, FCS offers full design-build services where we manage both design and construction under a single contract. This approach streamlines communication, reduces costs, and accelerates project delivery. We work with top architects and engineers to deliver turnkey solutions."
    },
    {
      question: "What types of commercial buildings do you construct?",
      answer: "We construct a wide range of commercial facilities including office buildings, medical clinics and hospitals, retail centers, restaurants and hospitality venues, educational facilities, industrial and warehouse buildings, and mixed-use developments."
    },
    {
      question: "Do you handle permits and inspections?",
      answer: "Absolutely. FCS manages all permitting, inspections, and regulatory compliance as part of our comprehensive general contracting services. We have established relationships with building departments throughout Tampa Bay, ensuring smooth permit approvals and inspection processes."
    },
  ],
  multiFamily: [
    {
      question: "What types of multi-family projects do you build?",
      answer: "FCS specializes in condominium construction, apartment complexes, townhome developments, senior living facilities, student housing, and mixed-use residential projects. We handle projects from 10 units to hundreds of units throughout Tampa Bay."
    },
    {
      question: "Do you handle condo and apartment construction?",
      answer: "Yes, multi-family residential construction is one of our core specialties. We build both for-sale condominiums and for-rent apartment communities, including all common areas, amenities, parking structures, and site work."
    },
    {
      question: "What is the typical project value for multi-family construction?",
      answer: "Our multi-family projects typically range from $1 million for smaller townhome developments to $50 million or more for large condominium and apartment complexes. We're equipped to handle projects of virtually any scale."
    },
    {
      question: "How do you handle common area construction?",
      answer: "We construct all common areas including lobbies, fitness centers, pools, clubhouses, parking structures, and outdoor amenity spaces. Our integrated approach ensures common areas are built to the same high standards as individual units."
    },
    {
      question: "Do you offer balcony and exterior waterproofing?",
      answer: "Yes, balcony construction and waterproofing is included in all our multi-family projects. We also offer standalone balcony reconstruction and waterproofing services for existing buildings. This is critical in Florida's climate."
    },
  ],
  disaster: [
    {
      question: "Do you work with insurance companies on restoration projects?",
      answer: "Yes, FCS has extensive experience working directly with insurance companies, adjusters, and claims professionals. We handle large loss commercial and residential claims, providing detailed documentation, certified estimates, and direct communication with carriers throughout the restoration process."
    },
    {
      question: "What is large loss property restoration?",
      answer: "Large loss refers to significant property damage claims, typically exceeding $250,000. These complex claims require experienced contractors who understand insurance processes, can provide accurate certified estimates, and have the capacity to complete major restoration projects."
    },
    {
      question: "How quickly can you respond to commercial disasters?",
      answer: "While we don't handle small emergency repairs, we mobilize quickly for large loss situations. Once engaged, we begin damage assessment and documentation immediately, working with your insurance carrier to expedite the claims process and begin restoration."
    },
    {
      question: "Do you handle the insurance claim process?",
      answer: "We assist throughout the insurance claim process including damage documentation, certified estimates, adjuster meetings, supplemental claims, and negotiation support. Our expertise helps ensure fair claim settlements and smooth restoration projects."
    },
    {
      question: "What types of disasters do you restore from?",
      answer: "We handle restoration from all major disaster types including hurricanes, tropical storms, tornadoes, flooding, fire damage, and other catastrophic events. Our experience includes commercial buildings, multi-family residential, and high-value single-family homes."
    },
    {
      question: "Are you a prime contractor for insurance restoration?",
      answer: "Yes, FCS always serves as the prime contractor on insurance restoration projects. We maintain direct contracts with property owners and work alongside (not for) insurance companies. This ensures our loyalty is to you, the property owner, while maintaining professional relationships with all parties."
    },
  ],
  historic: [
    {
      question: "Are you certified for historic restoration?",
      answer: "Yes, Florida Construction Specialists has extensive experience in historic restoration and works in compliance with the Secretary of the Interior's Standards for Historic Preservation. We coordinate with the State Historic Preservation Office (SHPO) and local historic preservation boards."
    },
    {
      question: "Do you work with the Florida Division of Historical Resources?",
      answer: "Yes, we regularly coordinate with the Florida Division of Historical Resources and local historic preservation boards to ensure our restoration work meets all applicable standards and maintains historic tax credit eligibility when applicable."
    },
    {
      question: "What makes historic restoration different from renovation?",
      answer: "Historic restoration requires specialized knowledge of period construction techniques, materials, and architectural details. It involves preserving original character while meeting modern building codes. We balance authenticity with functionality, often using traditional methods alongside modern solutions."
    },
    {
      question: "How do you preserve original materials?",
      answer: "We prioritize preservation over replacement whenever possible. Our team is skilled in restoring original materials including historic masonry, woodwork, metalwork, and decorative elements. When replacement is necessary, we source or fabricate period-appropriate materials."
    },
    {
      question: "Can you add modern amenities to historic buildings?",
      answer: "Absolutely. A key part of successful historic restoration is sensitively integrating modern systems—HVAC, electrical, plumbing, fire protection, and technology—while preserving historic character. We design these updates to be minimally invasive and reversible where possible."
    },
  ],
  balcony: [
    {
      question: "Do you specialize in condo balcony repair?",
      answer: "Yes, balcony reconstruction for condominiums and multi-family buildings is one of our specialties. We work extensively with HOAs and condo associations on both emergency repairs and planned maintenance programs throughout Tampa Bay."
    },
    {
      question: "What causes balcony structural damage?",
      answer: "In Florida, the primary causes are water intrusion, reinforcing steel corrosion, concrete deterioration, and inadequate original waterproofing. Our humid, salt-air environment accelerates deterioration. We identify root causes and implement lasting solutions."
    },
    {
      question: "How do you waterproof balconies?",
      answer: "We use multi-layer waterproofing systems including traffic-bearing membranes, proper slope-to-drain, flashing details, and appropriate sealants. Our systems are designed for Florida's climate and backed by manufacturer warranties."
    },
    {
      question: "Do you handle HOA and condo association work?",
      answer: "Yes, we work extensively with HOAs and condo associations. We understand the unique requirements including board approvals, reserve fund coordination, phased construction to minimize disruption, and communication with unit owners throughout the project."
    },
    {
      question: "What is the typical timeline for balcony reconstruction?",
      answer: "Timelines depend on project scope. Individual balcony repairs might take 1-2 weeks per unit. Building-wide reconstruction projects are typically phased over several months to minimize disruption. We provide detailed schedules during pre-construction."
    },
  ],
  waterproofing: [
    {
      question: "What is building envelope waterproofing?",
      answer: "Building envelope waterproofing protects a structure from water intrusion through all exterior surfaces—walls, roofs, foundations, windows, and below-grade areas. It's a comprehensive approach to moisture management critical in Florida's climate."
    },
    {
      question: "Do you waterproof commercial buildings?",
      answer: "Yes, commercial waterproofing is a major part of our business. We handle everything from high-rise building envelopes to parking structures, plaza decks, and below-grade spaces. Our systems are designed for long-term performance in Florida's demanding environment."
    },
    {
      question: "What areas need waterproofing in Florida?",
      answer: "In Florida's climate, critical areas include foundations, below-grade walls, plaza and terrace decks, balconies, parking structures, expansion joints, window and door openings, and roof-wall interfaces. We assess each building's specific vulnerabilities."
    },
    {
      question: "How long does commercial waterproofing last?",
      answer: "Quality commercial waterproofing systems typically last 15-25 years or more with proper maintenance. We use premium materials from manufacturers like Sika, BASF, and Tremco, backed by substantial warranties. Regular maintenance extends system life significantly."
    },
    {
      question: "Do you warranty your waterproofing work?",
      answer: "Yes, all our waterproofing work includes both manufacturer material warranties and our workmanship warranty. Specific terms depend on the systems used, but we stand behind our work and offer maintenance programs to maximize system longevity."
    },
  ],
  customHomes: [
    {
      question: "What is your minimum project size for custom homes?",
      answer: "Florida Construction Specialists focuses on luxury custom homes valued at $1 million and above. This includes waterfront estates, architectural residences, and high-end custom homes throughout Tampa Bay. For smaller residential projects, we can recommend qualified builders."
    },
    {
      question: "Do you build waterfront homes?",
      answer: "Yes, waterfront estate construction is one of our specialties. We have extensive experience building on challenging waterfront sites including seawall coordination, flood zone compliance, marine-grade materials, and the premium finishes expected in waterfront properties."
    },
    {
      question: "How long does custom home construction take?",
      answer: "Luxury custom home construction typically takes 12-24 months depending on size and complexity. This includes design development, permitting, and construction. We provide detailed schedules and maintain consistent communication throughout the process."
    },
    {
      question: "Do you work with our architect?",
      answer: "Absolutely. We work collaboratively with your architect and design team, or we can introduce you to architects we've partnered with successfully. Our pre-construction services include constructability reviews, value engineering, and detailed budgeting to bring your vision to reality."
    },
    {
      question: "What makes your custom homes hurricane-resistant?",
      answer: "We build to exceed Florida Building Code requirements for wind resistance. This includes impact-resistant windows and doors, enhanced roof tie-downs, reinforced concrete construction, backup power systems, and storm-rated garage doors. Our homes are built to withstand Florida's worst weather."
    },
  ],
  general: [
    {
      question: "How long has FCS been in business?",
      answer: "Florida Construction Specialists (FCS) is a merging of Florida Restoration Team and Shamblin Construction, large scale general contractors that have operated in Florida since 1982. With over 40 years of experience and 300+ completed projects, our leadership team has built or restored hundreds of large-scale projects across the Southeast United States and the Bahamas."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve the greater Tampa Bay region including Tampa, St. Petersburg, Clearwater, Lakeland, Sarasota, Bradenton, Brandon, and Ruskin. We also take on select projects throughout Florida for the right opportunities."
    },
    {
      question: "Do you offer free estimates?",
      answer: "For qualified projects ($250,000+), we provide complimentary project consultations and preliminary budgeting. Detailed estimates and proposals are developed during our pre-construction phase once we have complete project information."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, Florida Construction Specialists is a fully licensed Florida General Contractor with comprehensive insurance coverage including general liability, workers' compensation, and professional liability. We also have an in-house engineer and architectural draftsman on staff."
    },
    {
      question: "What sets FCS apart from other contractors?",
      answer: "FCS is always the prime contractor—never a sub. We specialize in large-scale, complex projects that require experienced management. With 40+ years of experience, 300+ completed projects, in-house engineering and architectural drafting capabilities, and deep expertise in insurance restoration and historic preservation, we bring unmatched resources to every project."
    },
  ],
};

// Location-specific FAQ template generator
export function generateLocationFAQs(cityName: string, serviceName?: string): Array<{question: string; answer: string}> {
  const baseFAQs = [
    {
      question: `Do you serve ${cityName}, FL?`,
      answer: `Yes, Florida Construction Specialists proudly serves ${cityName} and the surrounding areas. We have completed numerous projects in ${cityName} and maintain strong relationships with local building departments and subcontractors.`
    },
    {
      question: `How many projects have you completed in ${cityName}?`,
      answer: `We have completed dozens of projects in the ${cityName} area ranging from commercial construction and multi-family residential to historic restoration and disaster recovery. Our portfolio includes notable projects throughout the greater Tampa Bay region.`
    },
    {
      question: `What types of construction projects do you handle in ${cityName}?`,
      answer: `In ${cityName}, we handle commercial construction, multi-family residential, disaster recovery, historic restoration, luxury custom homes, balcony reconstruction, and exterior waterproofing. Project values typically range from $250,000 to $50 million or more.`
    },
  ];

  if (serviceName) {
    baseFAQs.push({
      question: `What is the typical ${serviceName.toLowerCase()} project cost in ${cityName}?`,
      answer: `${serviceName} project costs in ${cityName} vary based on scope and complexity. Contact us for a project consultation and we'll provide detailed budgeting based on your specific requirements.`
    });
  }

  baseFAQs.push({
    question: `How far from ${cityName} do you provide services?`,
    answer: `While based in Ruskin, we serve all of Tampa Bay including ${cityName} and surrounding communities. We also take on select projects throughout Florida. Distance is rarely a limiting factor for the right project.`
  });

  return baseFAQs;
}
