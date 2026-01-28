/**
 * Hyper-local facts for each service area
 * Used to generate location-specific content for SEO pages
 */

export interface LocationData {
  slug: string;
  name: string;
  county: string;
  population: string;
  metro: string;
  majorEmployers: string[];
  landmarks: string[];
  neighborhoods: string[];
  constructionContext: {
    floodZones: string;
    soilConditions: string;
    historicDistricts: string[];
    permitAuthority: string;
    avgPermitTime: string;
    specialRequirements?: string[];
  };
  weatherFactors: string[];
  economicData: {
    medianIncome: string;
    commercialGrowth: string;
    developmentNotes: string;
  };
  nearbyAreas: string[];
}

export const LOCATION_DATA: Record<string, LocationData> = {
  tampa: {
    slug: "tampa",
    name: "Tampa",
    county: "Hillsborough County",
    population: "400,000+",
    metro: "3.2M Tampa Bay Metro",
    majorEmployers: [
      "Tampa General Hospital",
      "University of South Florida",
      "USAA",
      "Tech Data",
      "Moffitt Cancer Center",
      "Raymond James Financial",
      "Bristol-Myers Squibb",
    ],
    landmarks: [
      "Bayshore Boulevard",
      "Ybor City Historic District",
      "Tampa Riverwalk",
      "Westshore Business District",
      "Water Street Tampa",
      "Tampa International Airport",
      "Port Tampa Bay",
      "Amalie Arena",
    ],
    neighborhoods: [
      "South Tampa",
      "Hyde Park",
      "Davis Islands",
      "Harbour Island",
      "Channelside",
      "Tampa Heights",
      "Seminole Heights",
      "Westshore",
      "Carrollwood",
      "New Tampa",
    ],
    constructionContext: {
      floodZones: "Significant VE and AE zones along Hillsborough Bay, coastal areas, and the Hillsborough River corridor. Many downtown and South Tampa properties require elevation certificates.",
      soilConditions: "Sandy soil with high water table. Karst topography creates sinkhole risk in certain areas. Deep foundations often required, especially for multi-story commercial buildings.",
      historicDistricts: [
        "Ybor City National Historic Landmark District",
        "Hyde Park Historic District",
        "Tampa Heights Historic District",
        "Seminole Heights Historic District",
        "West Tampa Historic District",
      ],
      permitAuthority: "City of Tampa Building Department",
      avgPermitTime: "4-8 weeks for commercial projects",
      specialRequirements: [
        "Zone 3 wind requirements (120 mph design wind speed)",
        "SWFWMD stormwater permits for large sites",
        "HPC review required in historic districts",
      ],
    },
    weatherFactors: [
      "Hurricane season June-November with significant storm surge risk",
      "Daily afternoon thunderstorms May-September",
      "Annual rainfall 46 inches - schedule concrete pours carefully",
      "70-80% humidity year-round requires moisture management",
      "No freeze risk for concrete pours",
    ],
    economicData: {
      medianIncome: "$58,000",
      commercialGrowth: "12% YoY growth in Westshore corridor",
      developmentNotes: "Water Street Tampa adding 9M SF mixed-use. Major healthcare expansion at Tampa General and Moffitt. Tech sector growth driving Class A office demand.",
    },
    nearbyAreas: ["Brandon", "Temple Terrace", "Town 'n' Country", "Riverview"],
  },

  "st-petersburg": {
    slug: "st-petersburg",
    name: "St. Petersburg",
    county: "Pinellas County",
    population: "260,000+",
    metro: "3.2M Tampa Bay Metro",
    majorEmployers: [
      "Johns Hopkins All Children's Hospital",
      "Duke Energy",
      "Raymond James Financial",
      "Jabil",
      "Tampa Bay Times",
      "Pinellas County Schools",
    ],
    landmarks: [
      "Downtown St. Pete Arts District",
      "The Pier District",
      "The Dali Museum",
      "Tropicana Field",
      "Albert Whitted Airport",
      "Vinoy Park",
      "Beach Drive",
      "Central Avenue",
    ],
    neighborhoods: [
      "Downtown St. Petersburg",
      "Old Northeast",
      "Historic Kenwood",
      "Snell Isle",
      "Coquina Key",
      "Tyrone",
      "Gateway",
      "Northeast Park",
      "Historic Uptown",
    ],
    constructionContext: {
      floodZones: "Extensive VE and AE zones due to peninsula geography. Storm surge is a major concern for most of the city. Nearly all waterfront properties require flood-resistant construction.",
      soilConditions: "Sandy soil with limestone substrate. Water table typically 2-5 feet below grade. Dewatering often required for deep foundations.",
      historicDistricts: [
        "Downtown St. Petersburg Historic District",
        "Old Northeast Historic District",
        "Historic Kenwood District",
        "Roser Park Historic District",
        "Historic Uptown District",
      ],
      permitAuthority: "City of St. Petersburg Development Services",
      avgPermitTime: "4-6 weeks for commercial projects",
      specialRequirements: [
        "Pinellas County density restrictions",
        "Coastal High Hazard Area regulations",
        "City design standards in downtown core",
      ],
    },
    weatherFactors: [
      "Highest lightning strike density in US",
      "Peninsula exposed to both Gulf and Bay storms",
      "Significant storm surge risk (5-15 ft possible)",
      "Salt air corrosion requires marine-grade materials",
      "44 inches annual rainfall",
    ],
    economicData: {
      medianIncome: "$56,000",
      commercialGrowth: "Downtown renaissance with major mixed-use development",
      developmentNotes: "Tropicana Field redevelopment planned ($2.5B). Downtown adding thousands of residential units. Healthcare and tech sectors driving commercial growth.",
    },
    nearbyAreas: ["Gulfport", "South Pasadena", "Pinellas Park", "Kenneth City"],
  },

  clearwater: {
    slug: "clearwater",
    name: "Clearwater",
    county: "Pinellas County",
    population: "117,000+",
    metro: "3.2M Tampa Bay Metro",
    majorEmployers: [
      "Morton Plant Hospital (BayCare)",
      "Tech Data (now TD Synnex)",
      "Church of Scientology",
      "Pinellas County Schools",
      "City of Clearwater",
      "Clearwater Marine Aquarium",
    ],
    landmarks: [
      "Clearwater Beach",
      "Pier 60",
      "Clearwater Marine Aquarium",
      "Cleveland Street District",
      "Coachman Park",
      "Sand Key",
      "Safety Harbor",
    ],
    neighborhoods: [
      "Clearwater Beach",
      "Downtown Clearwater",
      "Countryside",
      "East Clearwater",
      "North Greenwood",
      "Sand Key",
      "Island Estates",
      "Clearwater Point",
    ],
    constructionContext: {
      floodZones: "Beach areas and barrier islands in VE zones. Mainland has extensive AE zones near Tampa Bay. Beach construction requires strict FEMA compliance.",
      soilConditions: "Sandy soil, similar to St. Petersburg. Barrier island construction requires specialized foundations. High water table throughout.",
      historicDistricts: [
        "Downtown Clearwater Historic District",
        "Harbor Oaks Neighborhood",
      ],
      permitAuthority: "City of Clearwater Planning & Development",
      avgPermitTime: "3-6 weeks for commercial projects",
      specialRequirements: [
        "Beach area has additional overlay requirements",
        "Tourism-related development incentives available",
        "Waterfront setback requirements",
      ],
    },
    weatherFactors: [
      "Direct Gulf exposure increases hurricane risk",
      "Beach erosion concerns for coastal properties",
      "Salt air corrosion accelerated on barrier islands",
      "42 inches annual rainfall",
      "High tourist season impacts construction logistics (Dec-Apr)",
    ],
    economicData: {
      medianIncome: "$51,000",
      commercialGrowth: "Tourism-driven development along beach corridor",
      developmentNotes: "Clearwater Beach redevelopment ongoing. Downtown Cleveland Street revitalization. Major hotel renovations and new hospitality construction.",
    },
    nearbyAreas: ["Safety Harbor", "Dunedin", "Palm Harbor", "Largo"],
  },

  lakeland: {
    slug: "lakeland",
    name: "Lakeland",
    county: "Polk County",
    population: "115,000+",
    metro: "750,000 Lakeland-Winter Haven Metro",
    majorEmployers: [
      "Publix Super Markets (HQ)",
      "Lakeland Regional Health",
      "Florida Southern College",
      "GEICO",
      "Amazon",
      "City of Lakeland",
    ],
    landmarks: [
      "Florida Southern College (Frank Lloyd Wright architecture)",
      "Lakeland Linder International Airport",
      "Hollis Garden",
      "Lake Mirror Promenade",
      "Polk Museum of Art",
      "Downtown Lakeland",
      "Detroit Tigers Spring Training (Publix Field)",
    ],
    neighborhoods: [
      "Downtown Lakeland",
      "South Lakeland",
      "Dixieland",
      "Lake Hollingsworth",
      "Lake Morton",
      "Providence",
      "Grasslands",
    ],
    constructionContext: {
      floodZones: "Less flood risk than coastal areas. Lake-adjacent properties may be in AE zones. Most of the city is Zone X (minimal flood risk).",
      soilConditions: "Clay-rich soil differs from coastal sand. Better foundation support but drainage considerations. Some phosphate mining legacy issues in certain areas.",
      historicDistricts: [
        "Downtown Lakeland Historic District",
        "Dixieland Historic District",
        "Lake Morton Historic District",
        "Florida Southern College Historic District",
      ],
      permitAuthority: "City of Lakeland Building Inspection Division",
      avgPermitTime: "3-5 weeks for commercial projects",
      specialRequirements: [
        "I-4 corridor logistics park development incentives",
        "Downtown overlay district standards",
        "Lake setback requirements vary by lake classification",
      ],
    },
    weatherFactors: [
      "Inland location reduces hurricane wind speeds (still Zone 2)",
      "No storm surge risk",
      "Afternoon thunderstorms typical May-September",
      "50 inches annual rainfall",
      "Occasional freeze events in winter",
    ],
    economicData: {
      medianIncome: "$46,000",
      commercialGrowth: "Major I-4 corridor logistics expansion",
      developmentNotes: "Amazon, Walmart, and other distribution centers expanding. Downtown revitalization ongoing. Publix HQ anchors corporate presence. Strong healthcare sector growth.",
    },
    nearbyAreas: ["Winter Haven", "Auburndale", "Plant City", "Bartow"],
  },

  sarasota: {
    slug: "sarasota",
    name: "Sarasota",
    county: "Sarasota County",
    population: "57,000+",
    metro: "850,000 North Port-Sarasota-Bradenton Metro",
    majorEmployers: [
      "Sarasota Memorial Health Care System",
      "Sarasota County Schools",
      "FCCI Insurance Group",
      "Boar's Head Provisions",
      "PGT Innovations",
      "Tervis Tumbler",
    ],
    landmarks: [
      "St. Armands Circle",
      "The Ringling Museum",
      "Marie Selby Botanical Gardens",
      "Sarasota Opera House",
      "Van Wezel Performing Arts Hall",
      "Main Street Downtown",
      "Lido Beach",
      "Siesta Key",
    ],
    neighborhoods: [
      "Downtown Sarasota",
      "St. Armands Key",
      "Lido Key",
      "Longboat Key",
      "Bird Key",
      "Indian Beach/Sapphire Shores",
      "Southside Village",
      "Gillespie Park",
      "Laurel Park",
    ],
    constructionContext: {
      floodZones: "Barrier islands in VE zones with strict requirements. Downtown has some AE zones. Keys require specialized coastal construction expertise.",
      soilConditions: "Sandy coastal soils. Shell substrate in some areas. High-end waterfront homes often require helical piles or deep foundations.",
      historicDistricts: [
        "Downtown Sarasota Historic District",
        "Laurel Park Historic District",
        "Burns Court Historic District",
        "Indian Beach/Sapphire Shores Historic District",
      ],
      permitAuthority: "City of Sarasota Building Department",
      avgPermitTime: "4-8 weeks for commercial projects",
      specialRequirements: [
        "High-rise development review in downtown",
        "Architectural design review for visible projects",
        "Coastal setback requirements on keys",
      ],
    },
    weatherFactors: [
      "Gulf exposure for barrier islands",
      "Storm surge risk for coastal properties (6-12 ft possible)",
      "Salt air accelerates material deterioration",
      "54 inches annual rainfall",
      "Mild winters benefit construction schedules",
    ],
    economicData: {
      medianIncome: "$62,000",
      commercialGrowth: "High-end development focused on luxury and arts",
      developmentNotes: "Downtown high-rise construction boom. Luxury waterfront development on the keys. Healthcare expansion at Sarasota Memorial. Strong cultural tourism drives hospitality construction.",
    },
    nearbyAreas: ["Bradenton", "Venice", "North Port", "Osprey"],
  },

  bradenton: {
    slug: "bradenton",
    name: "Bradenton",
    county: "Manatee County",
    population: "60,000+",
    metro: "850,000 North Port-Sarasota-Bradenton Metro",
    majorEmployers: [
      "Manatee Memorial Hospital (HCA)",
      "Manatee County Schools",
      "Bealls Inc. (HQ)",
      "Tropicana Products",
      "Manatee County Government",
      "IMG Academy",
    ],
    landmarks: [
      "Downtown Bradenton Riverwalk",
      "Village of the Arts",
      "South Florida Museum",
      "LECOM Park (Pirates Spring Training)",
      "Robinson Preserve",
      "Anna Maria Island (nearby)",
      "Palmetto Historic District",
    ],
    neighborhoods: [
      "Downtown Bradenton",
      "Village of the Arts",
      "Old Northeast Bradenton",
      "Palma Sola",
      "West Bradenton",
      "Bayshore Gardens",
      "Trailer Estates",
    ],
    constructionContext: {
      floodZones: "Manatee River areas and coastal properties in flood zones. Anna Maria Island heavily regulated. Downtown has both Zone X and AE areas.",
      soilConditions: "Mix of sandy and clay soils. River sediment in some areas. Standard foundations typically adequate except for waterfront.",
      historicDistricts: [
        "Downtown Bradenton Historic District",
        "Village of the Arts",
        "Old Main Street Bradenton",
        "Palmetto Historic District",
      ],
      permitAuthority: "City of Bradenton Building Division",
      avgPermitTime: "3-5 weeks for commercial projects",
      specialRequirements: [
        "Manatee River setback requirements",
        "Village of the Arts overlay standards",
        "Anna Maria Island has separate, stricter requirements",
      ],
    },
    weatherFactors: [
      "Similar to Sarasota - Gulf exposure",
      "Manatee River flooding during heavy rains",
      "Hurricane evacuation zone considerations",
      "50 inches annual rainfall",
      "Mild winter temperatures",
    ],
    economicData: {
      medianIncome: "$44,000",
      commercialGrowth: "Downtown revitalization and Riverwalk development",
      developmentNotes: "IMG Academy expansion brings hospitality demand. Downtown redevelopment ongoing. Medical sector growth at Manatee Memorial. Growing retirement community drives multi-family.",
    },
    nearbyAreas: ["Sarasota", "Palmetto", "Ellenton", "Parrish", "Anna Maria Island"],
  },

  brandon: {
    slug: "brandon",
    name: "Brandon",
    county: "Hillsborough County",
    population: "115,000+",
    metro: "3.2M Tampa Bay Metro",
    majorEmployers: [
      "Brandon Regional Hospital (HCA)",
      "Hillsborough County Schools",
      "Walmart Distribution",
      "Amazon (Ruskin/Brandon area)",
      "Retail sector (Westfield Brandon)",
      "ValPak (HQ)",
    ],
    landmarks: [
      "Westfield Brandon Mall",
      "Brandon Town Center",
      "Winthrop Town Centre",
      "Ice Sports Forum",
      "Alafia River State Park (nearby)",
      "FishHawk Ranch",
    ],
    neighborhoods: [
      "Downtown Brandon",
      "FishHawk Ranch",
      "Bloomingdale",
      "Valrico",
      "Boyette",
      "Brandon Lakes",
      "Kingsway",
    ],
    constructionContext: {
      floodZones: "Alafia River corridor has flood zones. Most of Brandon is Zone X. FishHawk and newer developments have comprehensive stormwater management.",
      soilConditions: "Mix of sandy and clay soils. Generally good building conditions. Some areas have higher water tables requiring drainage consideration.",
      historicDistricts: [],
      permitAuthority: "Hillsborough County Building Services",
      avgPermitTime: "4-6 weeks for commercial projects",
      specialRequirements: [
        "Hillsborough County traffic concurrency requirements",
        "Environmental resources permit for wetlands",
        "Planned Development (PD) review for large projects",
      ],
    },
    weatherFactors: [
      "Inland location - reduced but not eliminated hurricane risk",
      "No storm surge risk",
      "Flash flooding in some low-lying areas",
      "Typical Tampa Bay thunderstorm patterns",
      "48 inches annual rainfall",
    ],
    economicData: {
      medianIncome: "$54,000",
      commercialGrowth: "Retail and medical sector expansion",
      developmentNotes: "Major retail corridor along Highway 60. Healthcare expansion at Brandon Regional. FishHawk and Riverview driving residential growth. Distribution and logistics growing near I-75.",
    },
    nearbyAreas: ["Tampa", "Riverview", "Valrico", "Plant City", "Seffner"],
  },

  ruskin: {
    slug: "ruskin",
    name: "Ruskin",
    county: "Hillsborough County",
    population: "25,000+",
    metro: "3.2M Tampa Bay Metro",
    majorEmployers: [
      "Amazon Fulfillment Center",
      "Manatee Fruit Company",
      "South Bay Hospital",
      "Hillsborough County Schools",
      "Agricultural sector",
      "Logistics and distribution",
    ],
    landmarks: [
      "E.G. Simmons Park",
      "Little Manatee River State Park",
      "Sun City Center (nearby)",
      "Port Manatee (nearby)",
      "Ruskin Family Drive-In",
      "Tampa Bay Watch",
    ],
    neighborhoods: [
      "Ruskin",
      "Sun City Center",
      "Apollo Beach",
      "Wimauma",
      "Balm",
      "College Avenue area",
    ],
    constructionContext: {
      floodZones: "Coastal areas along Tampa Bay in VE/AE zones. Apollo Beach has significant flood requirements. Inland areas generally Zone X.",
      soilConditions: "Agricultural clay-rich soils. Former tomato farming areas. Good conditions for commercial construction. Some wetland areas require mitigation.",
      historicDistricts: [
        "Ruskin Historic District (small)",
      ],
      permitAuthority: "Hillsborough County Building Services",
      avgPermitTime: "4-6 weeks for commercial projects",
      specialRequirements: [
        "Environmental review for former agricultural land",
        "Port Manatee Development Impact Area",
        "Large lot requirements in some areas",
      ],
    },
    weatherFactors: [
      "Coastal exposure along Tampa Bay",
      "Storm surge risk in Apollo Beach and waterfront areas",
      "Little Manatee River flooding potential",
      "Similar to greater Tampa Bay weather patterns",
      "46 inches annual rainfall",
    ],
    economicData: {
      medianIncome: "$48,000",
      commercialGrowth: "Industrial and logistics expansion",
      developmentNotes: "Amazon and distribution center growth driving commercial development. Sun City Center retirement community expanding. Apollo Beach residential and commercial growth. Port access drives industrial interest.",
    },
    nearbyAreas: ["Brandon", "Riverview", "Gibsonton", "Sun City Center", "Wimauma"],
  },
};

// Helper to get location by slug
export function getLocationData(slug: string): LocationData | undefined {
  return LOCATION_DATA[slug] || LOCATION_DATA[slug.replace("-", "")];
}

// Get all locations as array
export function getAllLocations(): LocationData[] {
  return Object.values(LOCATION_DATA);
}

// Get locations for internal linking (excluding current)
export function getNearbyLocations(currentSlug: string): LocationData[] {
  const current = getLocationData(currentSlug);
  if (!current) return [];

  return current.nearbyAreas
    .map(name => {
      const slug = name.toLowerCase().replace(/\s+/g, "-").replace("'", "");
      return getLocationData(slug);
    })
    .filter((loc): loc is LocationData => loc !== undefined);
}
