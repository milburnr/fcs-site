/**
 * Service-specific content templates for each location
 * Used to generate hyper-local content for service-location pages
 */

import { LOCATION_DATA, type LocationData } from './locationData';

export interface ServiceLocationContent {
  localContext: string;
  keyFactors: Array<{ title: string; description: string }>;
  comparisonData?: {
    headers: string[];
    rows: Array<{ label: string; values: string[] }>;
  };
  localFaqs: Array<{ question: string; answer: string }>;
  projectTypes?: string[];
}

// Commercial Construction content by location
export function getCommercialConstructionContent(location: LocationData): ServiceLocationContent {
  const contentByLocation: Record<string, ServiceLocationContent> = {
    tampa: {
      localContext: `Tampa is Florida's third-largest city and the economic engine of the Tampa Bay region, home to over 400,000 residents and a thriving commercial real estate market. The Westshore Business District alone contains over 10 million square feet of Class A office space, while the $3.5 billion Water Street Tampa development is transforming the downtown waterfront. Tampa's strategic location, major port, and growing tech sector drive continuous demand for new commercial construction from corporate headquarters to medical facilities.`,
      keyFactors: [
        { title: "Westshore Business District", description: "Tampa Bay's largest office market with 10M+ SF of commercial space. Class A office buildings, corporate headquarters, and major retail along the Kennedy Boulevard and Boy Scout corridors." },
        { title: "Water Street Tampa", description: "The $3.5 billion mixed-use development is adding 9 million SF of office, residential, retail, and hospitality space to downtown Tampa over the next decade." },
        { title: "Healthcare Corridor", description: "Tampa General Hospital, Moffitt Cancer Center, and AdventHealth Tampa create ongoing demand for medical office buildings, specialty clinics, and healthcare facilities." },
        { title: "Industrial & Logistics", description: "Port Tampa Bay and the I-4/I-75 interchange drive warehouse, distribution, and flex space demand along the Tampa industrial corridors." },
      ],
      comparisonData: {
        headers: ["Project Type", "Tampa Cost Range", "Typical Timeline", "Permit Time"],
        rows: [
          { label: "Office Building", values: ["$175-275/SF", "12-18 months", "6-10 weeks"] },
          { label: "Medical Facility", values: ["$250-400/SF", "14-20 months", "8-12 weeks"] },
          { label: "Retail/Restaurant", values: ["$150-250/SF", "4-8 months", "4-8 weeks"] },
          { label: "Industrial/Warehouse", values: ["$85-150/SF", "8-14 months", "4-6 weeks"] },
        ],
      },
      localFaqs: [
        { question: "What commercial districts in Tampa do you serve?", answer: "We serve all of Tampa's major commercial districts including Westshore Business District (Tampa Bay's largest office market), Downtown Tampa/Water Street, the Tampa International Airport corridor, Channelside/Harbour Island, and the USF Research Park. We also work in Tampa Heights, Ybor City, and emerging commercial areas throughout Hillsborough County." },
        { question: "How do Tampa's building codes affect commercial construction?", answer: "Tampa requires compliance with Florida Building Code 2023 with Zone 3 wind requirements (120 mph design wind speed). Commercial projects must also meet City of Tampa stormwater regulations, fire codes, and accessibility requirements. In historic districts like Ybor City, Historic Preservation Commission approval is required. We navigate these requirements daily and have strong relationships with Tampa's building department." },
        { question: "What's the current commercial construction market like in Tampa?", answer: "Tampa's commercial market is strong with 12% year-over-year growth in the Westshore corridor. Major developments like Water Street Tampa are attracting corporate relocations. Healthcare construction is particularly active around Tampa General and Moffitt. Industrial and logistics demand remains high along the I-4 corridor. Commercial vacancy rates are around 8%, driving new construction." },
      ],
      projectTypes: ["Corporate headquarters", "Medical office buildings", "Retail centers", "Hotels and hospitality", "Industrial flex space", "Mixed-use developments"],
    },

    "st-petersburg": {
      localContext: `St. Petersburg has transformed from a retirement destination into one of Florida's most dynamic cities, with a thriving downtown, world-class arts scene, and growing tech sector. The city's peninsula geography creates unique construction challenges, but the $2.5 billion planned Tropicana Field redevelopment signals major commercial growth ahead. Downtown St. Pete's renaissance has driven demand for boutique office space, hospitality venues, and mixed-use development along the waterfront.`,
      keyFactors: [
        { title: "Downtown Arts District", description: "Beach Drive, Central Avenue, and the Edge District have become premier locations for boutique retail, restaurants, and creative office space serving the city's growing tech and arts community." },
        { title: "Tropicana Field Redevelopment", description: "The planned $2.5 billion redevelopment will transform 86 acres of downtown into a mixed-use district with commercial, residential, and entertainment venues." },
        { title: "Healthcare Expansion", description: "Johns Hopkins All Children's Hospital continues to expand, driving medical office construction in the downtown and Tyrone corridors." },
        { title: "Gateway Business District", description: "The Gateway area near I-275 offers modern office parks and flex space serving Tampa Bay's growing professional services sector." },
      ],
      comparisonData: {
        headers: ["Project Type", "St. Pete Cost Range", "Typical Timeline", "Permit Time"],
        rows: [
          { label: "Office Building", values: ["$165-260/SF", "12-16 months", "4-8 weeks"] },
          { label: "Medical Facility", values: ["$240-380/SF", "14-18 months", "6-10 weeks"] },
          { label: "Retail/Restaurant", values: ["$145-235/SF", "4-7 months", "3-6 weeks"] },
          { label: "Mixed-Use", values: ["$200-350/SF", "16-24 months", "8-12 weeks"] },
        ],
      },
      localFaqs: [
        { question: "How does St. Petersburg's coastal location affect commercial construction?", answer: "St. Petersburg's peninsula geography means nearly all commercial properties face some level of flood zone consideration. Coastal High Hazard Area regulations, storm surge planning, and salt air corrosion resistance are factored into every project. We specify marine-grade materials, ensure proper elevation, and design for the city's unique exposure to both Tampa Bay and the Gulf of Mexico." },
        { question: "What's happening with the Tropicana Field site?", answer: "The $2.5 billion Tropicana Field redevelopment will transform 86 acres of downtown St. Pete into a mixed-use district. While timelines continue to evolve, this project signals major long-term commercial growth for the city. The surrounding areas are already seeing increased development activity and property values as the project advances." },
        { question: "Are there design requirements for commercial buildings in downtown St. Pete?", answer: "Yes, downtown St. Petersburg has design standards that address building scale, materials, and street-level activation. The city encourages pedestrian-friendly development with ground-floor retail and restaurant spaces. Historic districts like Kenwood and Old Northeast have additional preservation requirements. We work closely with city planners to ensure projects meet all design criteria." },
      ],
      projectTypes: ["Boutique office buildings", "Restaurant and hospitality", "Medical facilities", "Mixed-use development", "Creative workspace", "Arts and cultural venues"],
    },

    clearwater: {
      localContext: `Clearwater combines thriving beach tourism with a substantial corporate presence, notably Tech Data's (now TD Synnex) headquarters. The city's dual identity drives diverse commercial construction needs—from beachfront hospitality to downtown office buildings and the growing Cleveland Street district. Clearwater Beach remains one of America's top-rated beaches, generating constant demand for hotel renovation, restaurant construction, and retail development along the Gulf.`,
      keyFactors: [
        { title: "Clearwater Beach Tourism", description: "America's top-rated beach drives constant demand for hotel construction, renovation, and hospitality venues. Beach area projects require strict FEMA compliance and barrier island expertise." },
        { title: "Cleveland Street District", description: "Downtown Clearwater's revitalization centers on Cleveland Street, with new mixed-use development, restaurant buildouts, and office renovation transforming the urban core." },
        { title: "Corporate Presence", description: "Tech Data's headquarters and supporting businesses create demand for corporate office space and professional services buildings in mainland Clearwater." },
        { title: "Medical Corridor", description: "Morton Plant Hospital (BayCare) anchors healthcare construction demand, with medical office development throughout the US 19 corridor." },
      ],
      comparisonData: {
        headers: ["Project Type", "Clearwater Cost Range", "Typical Timeline", "Permit Time"],
        rows: [
          { label: "Hotel/Hospitality", values: ["$200-350/SF", "14-20 months", "6-10 weeks"] },
          { label: "Office Building", values: ["$155-245/SF", "10-15 months", "4-6 weeks"] },
          { label: "Retail/Restaurant", values: ["$140-230/SF", "3-6 months", "3-5 weeks"] },
          { label: "Beach Construction", values: ["$225-400/SF", "16-24 months", "8-14 weeks"] },
        ],
      },
      localFaqs: [
        { question: "What are the special requirements for construction on Clearwater Beach?", answer: "Beach construction requires strict FEMA flood zone compliance (typically VE zones with 15-20 foot base flood elevations), Pinellas County environmental review, and city overlay district approval. Projects must use flood-resistant materials, incorporate breakaway walls at grade level, and meet stringent wind requirements. Construction logistics on the barrier island require careful planning due to limited access and seasonal traffic." },
        { question: "How does tourism season affect commercial construction in Clearwater?", answer: "The peak tourism season (December through April) impacts construction logistics, particularly on the beach. We schedule major construction activities and deliveries to minimize tourist impact when possible, but some projects can't avoid busy season work. Off-season construction is ideal for beach area projects. Downtown Clearwater has less seasonality and year-round construction is typical." },
        { question: "Is there opportunity for hotel and hospitality construction in Clearwater?", answer: "Clearwater Beach has strong hospitality construction activity including hotel renovations, new boutique hotels, and restaurant buildouts. The beach's consistent tourism demand and high occupancy rates drive investment. Competition for beachfront sites is intense. We've completed multiple hospitality projects in the area, understanding the unique requirements of beach construction and tourism-oriented development." },
      ],
      projectTypes: ["Hotels and resorts", "Beach retail and restaurants", "Corporate offices", "Medical facilities", "Mixed-use downtown", "Beachfront redevelopment"],
    },

    lakeland: {
      localContext: `Lakeland occupies the strategic midpoint between Tampa and Orlando along the I-4 corridor, making it an increasingly important commercial hub. Home to Publix Super Markets' headquarters and a growing distribution sector, the city offers lower land costs and faster permitting than coastal markets. Downtown Lakeland's historic district, anchored by Frank Lloyd Wright's largest collection of buildings at Florida Southern College, is experiencing a cultural renaissance that's driving boutique commercial development.`,
      keyFactors: [
        { title: "I-4 Logistics Corridor", description: "Strategic location between Tampa and Orlando drives major distribution center and industrial flex construction. Amazon, Walmart, and other logistics companies have expanded significantly." },
        { title: "Publix Headquarters", description: "The grocery chain's headquarters anchors Lakeland's corporate presence, with supporting businesses and suppliers driving office and commercial development." },
        { title: "Downtown Revitalization", description: "Lake Mirror Promenade and the surrounding historic district are attracting boutique retail, restaurants, and creative office space in renovated historic buildings." },
        { title: "Healthcare Growth", description: "Lakeland Regional Health continues expanding, creating demand for medical office buildings and specialty clinics throughout the city." },
      ],
      comparisonData: {
        headers: ["Project Type", "Lakeland Cost Range", "Typical Timeline", "Permit Time"],
        rows: [
          { label: "Office Building", values: ["$140-210/SF", "10-14 months", "3-5 weeks"] },
          { label: "Industrial/Warehouse", values: ["$75-120/SF", "6-10 months", "3-4 weeks"] },
          { label: "Retail/Restaurant", values: ["$125-200/SF", "3-5 months", "2-4 weeks"] },
          { label: "Medical Facility", values: ["$220-340/SF", "12-16 months", "4-6 weeks"] },
        ],
      },
      localFaqs: [
        { question: "How do Lakeland's construction costs compare to Tampa?", answer: "Lakeland typically offers 15-25% lower construction costs than Tampa for comparable projects due to lower land costs, reduced impact fees, and faster permitting. Labor costs are similar as most contractors serve both markets. The I-4 corridor location provides excellent logistics for material delivery while maintaining access to the Tampa Bay workforce." },
        { question: "What's driving commercial development in Lakeland?", answer: "The I-4 corridor logistics boom is the primary driver, with Amazon, Walmart, and other distributors expanding. Publix headquarters attracts suppliers and support businesses. Healthcare expansion at Lakeland Regional creates medical office demand. Downtown revitalization is drawing boutique retail and restaurants. Lower costs compared to coastal markets attract businesses seeking value." },
        { question: "Does Lakeland have different building codes than coastal cities?", answer: "Lakeland is in Wind Zone 2 (110 mph design wind speed) versus Zone 3 for Tampa and coastal cities. This slightly reduces structural requirements but modern commercial construction typically exceeds minimum requirements anyway. Lakeland has minimal flood zone concerns compared to coastal areas. The city's building department is known for efficient processing." },
      ],
      projectTypes: ["Distribution centers", "Corporate offices", "Medical facilities", "Downtown retail", "Industrial flex space", "Historic renovation"],
    },

    sarasota: {
      localContext: `Sarasota is the cultural and affluent heart of Florida's Gulf Coast, known for world-class arts institutions, barrier island beaches, and high-end development. The city's wealth and design-conscious community demand exceptional quality in commercial construction. Downtown Sarasota's high-rise boom is adding luxury condominiums and boutique hotels, while the keys attract premium hospitality and retail development. Healthcare, particularly at Sarasota Memorial, continues to drive medical construction.`,
      keyFactors: [
        { title: "Downtown High-Rise Development", description: "A multi-year construction boom has added dozens of luxury high-rises to downtown Sarasota, with continuing demand for premium residential and mixed-use towers." },
        { title: "St. Armands Circle", description: "The iconic retail and dining destination on St. Armands Key demands high-end buildouts and renovations that match its premium positioning and discerning clientele." },
        { title: "Arts and Cultural Venues", description: "The Ringling Museum, Van Wezel Performing Arts Hall, and new developments like The Bay create unique cultural construction opportunities." },
        { title: "Healthcare Campus", description: "Sarasota Memorial Healthcare System's expansion drives ongoing medical office and clinical facility construction throughout the county." },
      ],
      comparisonData: {
        headers: ["Project Type", "Sarasota Cost Range", "Typical Timeline", "Permit Time"],
        rows: [
          { label: "High-Rise Mixed-Use", values: ["$300-500/SF", "24-36 months", "10-16 weeks"] },
          { label: "Premium Retail", values: ["$200-350/SF", "4-8 months", "4-8 weeks"] },
          { label: "Medical Facility", values: ["$280-420/SF", "14-20 months", "6-10 weeks"] },
          { label: "Hospitality/Keys", values: ["$275-450/SF", "16-24 months", "8-14 weeks"] },
        ],
      },
      localFaqs: [
        { question: "What makes Sarasota commercial construction different from other markets?", answer: "Sarasota's affluent, design-conscious community demands exceptional quality and attention to detail. Architectural review is rigorous for visible projects. Premium materials and finishes are standard expectations. The barrier island locations (Longboat Key, Lido Key, St. Armands) have strict coastal construction requirements. Costs run higher than Tampa but clients expect commensurate quality." },
        { question: "Are there design requirements for commercial buildings in downtown Sarasota?", answer: "Yes, downtown Sarasota has specific design standards for height, setbacks, and architectural character. High-rise development requires extensive review. The city's Architectural Review Board evaluates visible commercial projects. Historic districts like Burns Court and Laurel Park have additional preservation requirements. St. Armands Circle has its own distinctive design guidelines." },
        { question: "What's the commercial construction outlook for Sarasota's barrier islands?", answer: "Longboat Key, Lido Key, and St. Armands continue to attract hospitality renovation and luxury retail development despite strict regulations. New construction is limited by land availability and regulations, but renovation and redevelopment remain active. Coastal setbacks, flood requirements, and environmental review add time and cost. Premium returns justify the complexity." },
      ],
      projectTypes: ["Luxury mixed-use towers", "Premium retail", "Boutique hospitality", "Medical campuses", "Arts and cultural venues", "Waterfront development"],
    },

    bradenton: {
      localContext: `Bradenton offers the Gulf Coast lifestyle at more accessible price points than Sarasota, driving growth in both residential and commercial development. The downtown Riverwalk revitalization has transformed the waterfront, while IMG Academy's expansion creates unique hospitality demand. The city's historic Village of the Arts adds cultural character and adaptive reuse opportunities. Growing connections to Sarasota and Tampa make Bradenton increasingly attractive for commercial investment.`,
      keyFactors: [
        { title: "Downtown Riverwalk", description: "The Manatee River waterfront has been transformed with restaurants, entertainment venues, and mixed-use development, driving downtown commercial investment." },
        { title: "IMG Academy", description: "The world-renowned sports training facility draws international visitors, creating demand for hospitality, retail, and supporting services." },
        { title: "Village of the Arts", description: "This distinctive creative district offers unique opportunities for gallery, studio, and boutique commercial development in renovated cottages and buildings." },
        { title: "Anna Maria Island Gateway", description: "As the gateway to Anna Maria Island, Bradenton benefits from tourism traffic and related hospitality and retail development." },
      ],
      comparisonData: {
        headers: ["Project Type", "Bradenton Cost Range", "Typical Timeline", "Permit Time"],
        rows: [
          { label: "Office Building", values: ["$145-225/SF", "10-14 months", "3-5 weeks"] },
          { label: "Hospitality", values: ["$180-300/SF", "12-18 months", "5-8 weeks"] },
          { label: "Retail/Restaurant", values: ["$130-210/SF", "3-5 months", "3-5 weeks"] },
          { label: "Medical Facility", values: ["$230-350/SF", "12-16 months", "4-6 weeks"] },
        ],
      },
      localFaqs: [
        { question: "How does Bradenton compare to Sarasota for commercial development?", answer: "Bradenton offers 15-20% lower construction costs than Sarasota with faster permitting and more available land. The market is growing as Sarasota prices push development north. Downtown Bradenton's Riverwalk revitalization has elevated the market. While not as affluent as Sarasota, Bradenton increasingly attracts quality commercial projects serving both local and Sarasota-bound audiences." },
        { question: "What commercial opportunities exist around IMG Academy?", answer: "IMG Academy draws thousands of international athletes, families, and sporting events annually, creating demand for hotels, restaurants, sports retail, and family entertainment. The academy's continued expansion adds opportunities. Hospitality and retail development along Cortez Road and SR 70 serves this market. Projects should anticipate seasonal patterns tied to training schedules." },
        { question: "Is the Village of the Arts a good location for commercial development?", answer: "The Village of the Arts offers unique opportunities for galleries, studios, boutique retail, and creative businesses. Properties are typically smaller historic cottages suited for adaptive reuse. The neighborhood has its own zoning overlay and character. While not for large-scale commercial, it attracts distinctive tenants and commands premium interest from the arts community." },
      ],
      projectTypes: ["Waterfront mixed-use", "Hospitality venues", "Medical offices", "Downtown retail", "Sports-related facilities", "Creative adaptive reuse"],
    },

    brandon: {
      localContext: `Brandon is Tampa's largest suburb and a commercial hub in its own right, with extensive retail along Highway 60 and growing healthcare presence. The area's population of 115,000+ supports major retail developments like Westfield Brandon, while proximity to Tampa and I-75 attracts distribution and logistics operations. FishHawk Ranch and other master-planned communities drive both residential and supporting commercial development.`,
      keyFactors: [
        { title: "Highway 60 Retail Corridor", description: "The primary commercial artery features major retailers, restaurants, and service businesses. Continuous redevelopment and new construction maintain the corridor's vitality." },
        { title: "Westfield Brandon", description: "The regional mall and surrounding retail continues to evolve, with renovation and redevelopment adapting to changing retail patterns." },
        { title: "Healthcare Expansion", description: "Brandon Regional Hospital (HCA) and surrounding medical offices drive healthcare construction, serving the growing suburban population." },
        { title: "Distribution and Logistics", description: "I-75 access and lower land costs than Tampa proper attract distribution centers and flex industrial development." },
      ],
      comparisonData: {
        headers: ["Project Type", "Brandon Cost Range", "Typical Timeline", "Permit Time"],
        rows: [
          { label: "Retail/Restaurant", values: ["$130-200/SF", "3-5 months", "4-6 weeks"] },
          { label: "Medical Office", values: ["$210-320/SF", "10-14 months", "4-6 weeks"] },
          { label: "Office Building", values: ["$145-220/SF", "10-14 months", "4-6 weeks"] },
          { label: "Industrial/Flex", values: ["$80-130/SF", "6-10 months", "3-5 weeks"] },
        ],
      },
      localFaqs: [
        { question: "What's the permitting process like in Brandon?", answer: "Brandon falls under Hillsborough County jurisdiction, not a separate city. County permitting is straightforward but requires attention to traffic concurrency requirements, which can affect development approval on busy corridors. Environmental review is required for wetland areas, particularly near FishHawk. We have extensive experience with Hillsborough County Building Services and can navigate the process efficiently." },
        { question: "How does Brandon compare to Tampa for commercial costs?", answer: "Brandon typically offers 10-15% lower construction costs than Tampa proper, with more available land for development. Labor costs are equivalent since the same workforce serves both areas. Retail and medical office development is strong due to the suburban population base. I-75 access makes it attractive for distribution without Tampa's congestion." },
        { question: "Is there opportunity for medical construction in Brandon?", answer: "Healthcare construction is strong in Brandon. Brandon Regional Hospital continues expanding, and medical office development serves the growing suburban population. Urgent care, specialty clinics, and outpatient surgery centers are in demand. The Highway 60 corridor and areas near the hospital see most medical development. We've completed multiple healthcare projects in the area." },
      ],
      projectTypes: ["Retail and restaurant", "Medical offices", "Urgent care facilities", "Distribution centers", "Flex industrial", "Suburban office"],
    },

    ruskin: {
      localContext: `Ruskin and South Hillsborough County represent one of Tampa Bay's fastest-growing areas, transformed by Amazon's major fulfillment center and ongoing distribution expansion. Apollo Beach offers waterfront development opportunities, while Sun City Center anchors the region's retirement community. As our home base, we know this market intimately—its opportunities, its regulatory environment, and its evolving commercial needs.`,
      keyFactors: [
        { title: "Amazon and Distribution", description: "Amazon's massive fulfillment center has catalyzed logistics development throughout South Hillsborough. Supporting businesses, suppliers, and services follow the employment base." },
        { title: "Apollo Beach Waterfront", description: "Tampa Bay waterfront access creates opportunities for marine-related commercial, hospitality, and retail development serving the growing community." },
        { title: "Sun City Center", description: "The large retirement community drives healthcare, retail, and service-oriented commercial development serving its 25,000+ residents." },
        { title: "Agricultural Transition", description: "Former agricultural land is transitioning to commercial and industrial use, offering development opportunities with careful environmental consideration." },
      ],
      comparisonData: {
        headers: ["Project Type", "Ruskin Cost Range", "Typical Timeline", "Permit Time"],
        rows: [
          { label: "Industrial/Warehouse", values: ["$70-110/SF", "6-10 months", "3-5 weeks"] },
          { label: "Retail/Restaurant", values: ["$120-190/SF", "3-5 months", "3-5 weeks"] },
          { label: "Medical Office", values: ["$200-300/SF", "10-14 months", "4-6 weeks"] },
          { label: "Waterfront Commercial", values: ["$180-280/SF", "12-16 months", "6-8 weeks"] },
        ],
      },
      localFaqs: [
        { question: "What's driving commercial growth in Ruskin and South Hillsborough?", answer: "Amazon's fulfillment center and the broader logistics boom along I-75 are the primary drivers. The area offers lower land costs than Tampa or Brandon, available large parcels, and strategic highway access. Population growth from Sun City Center and residential development in Riverview creates retail and service demand. We're based here and see the growth firsthand." },
        { question: "Are there special considerations for development on former agricultural land?", answer: "Former tomato farming and agricultural lands often require environmental review, wetland delineation, and sometimes mitigation. Soil conditions are generally good for construction. Older agricultural operations may have wells or other features requiring documentation. Hillsborough County's environmental review process is well-established. We understand these requirements from extensive local experience." },
        { question: "What waterfront commercial opportunities exist in Apollo Beach?", answer: "Apollo Beach's Tampa Bay frontage offers opportunities for marine services, waterfront dining, and resort-style development. Flood zone requirements are significant (VE and AE zones) and construction costs are higher than inland sites. The community is growing and underserved by commercial amenities. We've completed multiple waterfront projects and understand the specialized requirements." },
      ],
      projectTypes: ["Distribution centers", "Industrial flex", "Retail and services", "Medical facilities", "Waterfront commercial", "Senior-oriented retail"],
    },
  };

  return contentByLocation[location.slug] || contentByLocation.tampa;
}

// Historic Restoration content by location
export function getHistoricRestorationContent(location: LocationData): ServiceLocationContent {
  const contentByLocation: Record<string, ServiceLocationContent> = {
    tampa: {
      localContext: `Tampa's rich architectural heritage spans from the 19th-century cigar factories of Ybor City to the Mediterranean Revival mansions of Hyde Park. The city's five designated historic districts contain hundreds of contributing structures, each with unique preservation requirements. Ybor City's status as a National Historic Landmark District requires particular care, while neighborhoods like Tampa Heights and Seminole Heights are experiencing renewed interest in historic preservation as redevelopment pressure increases.`,
      keyFactors: [
        { title: "Ybor City National Historic Landmark", description: "Florida's only National Historic Landmark District requires compliance with Secretary of Interior Standards and local Historic Preservation Commission (HPC) approval for all exterior work on contributing structures." },
        { title: "Hyde Park Historic District", description: "Tampa's premier residential historic district features Mediterranean Revival, Colonial Revival, and Craftsman homes from the 1910s-1930s. Preservation requires period-accurate materials and methods." },
        { title: "Florida SHPO Coordination", description: "Projects seeking state or federal historic tax credits require Florida State Historic Preservation Office (SHPO) review and approval of rehabilitation plans." },
        { title: "Adaptive Reuse Opportunities", description: "Tampa Heights, Seminole Heights, and West Tampa offer opportunities to restore and repurpose historic commercial buildings for modern uses while preserving architectural character." },
      ],
      localFaqs: [
        { question: "What historic districts does FCS serve in Tampa?", answer: "We serve all five of Tampa's designated historic districts: Ybor City National Historic Landmark District, Hyde Park Historic District, Tampa Heights Historic District, Seminole Heights Historic District, and West Tampa Historic District. Each has specific preservation standards and review requirements. Our team has extensive experience navigating the Tampa Historic Preservation Commission approval process." },
        { question: "Can I get tax credits for historic restoration in Tampa?", answer: "Yes, qualifying projects in Tampa's historic districts may be eligible for federal historic tax credits (20% for income-producing properties), Florida historic tax credits, and local property tax exemptions. Tax credit work requires SHPO approval of detailed rehabilitation plans before construction begins. We coordinate the application process and ensure work meets certification requirements." },
        { question: "What's the process for HPC approval in Tampa?", answer: "Tampa's Historic Preservation Commission reviews all exterior alterations to contributing structures in designated historic districts. The process includes application submission, staff review, and monthly board meetings. Approval typically takes 4-8 weeks depending on project complexity. We prepare comprehensive applications with historic documentation and have strong relationships with HPC staff." },
      ],
      projectTypes: ["Ybor City cigar factory restoration", "Hyde Park mansion rehabilitation", "Commercial adaptive reuse", "Historic facade restoration", "Period interior restoration", "Historic structure stabilization"],
    },

    "st-petersburg": {
      localContext: `St. Petersburg's historic architecture reflects its origins as a winter resort destination, with distinctive 1920s Mediterranean Revival and Art Deco buildings concentrated in the downtown and Old Northeast neighborhoods. The city's five historic districts contain some of Tampa Bay's finest examples of early 20th-century Florida architecture. Recent development pressure has increased interest in preservation, with adaptive reuse projects transforming historic buildings into boutique hotels, restaurants, and creative offices.`,
      keyFactors: [
        { title: "Downtown Historic District", description: "Central Avenue and Beach Drive feature early 20th-century commercial buildings, many now adapted for restaurants, galleries, and boutique retail while maintaining historic character." },
        { title: "Old Northeast Historic District", description: "One of Florida's premier residential historic districts with Mediterranean Revival, Colonial Revival, and Prairie-style homes from the 1910s-1930s requiring careful preservation." },
        { title: "Historic Kenwood", description: "An eclectic district with Craftsman, Mediterranean Revival, and Vernacular homes that attracts homeowners committed to preservation and sensitive restoration." },
        { title: "Development Pressure Response", description: "Increased development interest has elevated demand for preservation services as property owners seek to restore rather than demolish historic structures." },
      ],
      localFaqs: [
        { question: "What historic districts exist in St. Petersburg?", answer: "St. Petersburg has five designated historic districts: Downtown St. Petersburg, Old Northeast, Historic Kenwood, Roser Park, and Historic Uptown. Each has a local historic preservation overlay with design standards. The city's Development Review Services administers historic review. We have completed projects in all St. Pete historic districts." },
        { question: "How does St. Petersburg's historic review process work?", answer: "St. Petersburg requires Certificate of Appropriateness approval for exterior alterations in historic districts. Applications are reviewed by city preservation staff with significant projects going to the Community Planning and Preservation Commission. Review typically takes 3-6 weeks. We prepare thorough applications with historic documentation and design rationale." },
        { question: "Are there adaptive reuse opportunities in St. Petersburg's historic buildings?", answer: "Downtown St. Pete offers excellent adaptive reuse opportunities as historic commercial buildings are transformed for contemporary use. Former hotels become boutique lodging, industrial buildings become breweries, and commercial structures house creative offices. The city supports sensitive adaptive reuse through its historic preservation program. We've completed several successful adaptive reuse projects." },
      ],
      projectTypes: ["Mediterranean Revival restoration", "Art Deco preservation", "Commercial adaptive reuse", "Historic home rehabilitation", "Boutique hotel conversion", "Historic storefronts"],
    },

    clearwater: {
      localContext: `Clearwater's historic architecture reflects its development as an early 20th-century Gulf Coast resort town, with a concentration of historic buildings in the downtown Cleveland Street district and Harbor Oaks neighborhood. While smaller than Tampa's or St. Petersburg's historic resources, Clearwater's historic buildings offer unique restoration opportunities, particularly as downtown revitalization efforts seek to balance new development with preservation of architectural heritage.`,
      keyFactors: [
        { title: "Downtown Cleveland Street", description: "The historic commercial district contains early 20th-century buildings that are being restored and adapted as downtown revitalization continues, blending preservation with new development." },
        { title: "Harbor Oaks Neighborhood", description: "One of Clearwater's original planned neighborhoods features Mediterranean Revival and Colonial Revival homes from the 1920s that require preservation expertise." },
        { title: "Church of Scientology Properties", description: "Several downtown historic buildings have been extensively restored by the Church of Scientology, setting a high standard for downtown preservation efforts." },
        { title: "Balancing Preservation and Development", description: "Clearwater's downtown presents opportunities to restore historic structures while complementing them with compatible new construction." },
      ],
      localFaqs: [
        { question: "What historic preservation requirements exist in Clearwater?", answer: "Clearwater has local historic landmark designation and the Harbor Oaks special area plan with design guidelines. The city's Planning Department reviews alterations to designated properties and structures in protected areas. While Clearwater's historic inventory is smaller than Tampa or St. Petersburg, important buildings remain that warrant professional restoration." },
        { question: "How does downtown Clearwater's revitalization affect historic buildings?", answer: "Downtown Clearwater's revitalization creates both opportunity and pressure for historic buildings. Property values have increased, making restoration economically viable. The city encourages preservation as part of creating a distinctive downtown character. Historic buildings can qualify for various incentive programs. We help owners navigate options for their historic properties." },
        { question: "Are there tax incentives for historic restoration in Clearwater?", answer: "Qualifying historic properties in Clearwater may be eligible for federal historic tax credits (for income-producing properties), state tax exemptions, and local incentive programs. National Register listing, which we can assist with, opens additional funding opportunities. Even locally designated landmarks can access certain benefits. We coordinate tax credit applications with restoration work." },
      ],
      projectTypes: ["Cleveland Street commercial restoration", "Harbor Oaks home preservation", "Downtown adaptive reuse", "Historic facade rehabilitation", "Period interior restoration", "Landmark stabilization"],
    },

    lakeland: {
      localContext: `Lakeland boasts Florida's most significant collection of Frank Lloyd Wright architecture at Florida Southern College, along with charming historic districts in downtown, Dixieland, and Lake Morton. The city's historic preservation program is active and supportive, with a strong community commitment to maintaining architectural heritage. Recent downtown revitalization has sparked renewed interest in restoring Lakeland's early 20th-century commercial and residential buildings.`,
      keyFactors: [
        { title: "Frank Lloyd Wright at Florida Southern", description: "The world's largest single-site collection of Frank Lloyd Wright architecture (12 structures) represents a unique preservation responsibility and international architectural significance." },
        { title: "Downtown Lakeland Historic District", description: "The commercial core features early 20th-century buildings now finding new life as restaurants, breweries, and boutique retail in the revitalizing downtown." },
        { title: "Dixieland Historic District", description: "A residential neighborhood with Craftsman, Colonial Revival, and Vernacular homes from the 1910s-1920s with strong preservation-minded residents." },
        { title: "Lake Morton Area", description: "Historic homes surrounding Lake Morton represent some of Lakeland's finest early residential architecture, benefiting from the lake's natural beauty." },
      ],
      localFaqs: [
        { question: "How does Lakeland's historic preservation program work?", answer: "Lakeland has a well-established historic preservation program with four designated districts: Downtown, Dixieland, Lake Morton, and Florida Southern College. The Historic Preservation Board reviews exterior alterations. The city offers matching grants and technical assistance for preservation projects. Lakeland's program is considered one of Florida's most supportive." },
        { question: "Can you work on Frank Lloyd Wright buildings?", answer: "Work on Florida Southern College's Frank Lloyd Wright buildings requires specialized expertise and careful coordination with the college and preservation authorities. These internationally significant structures demand the highest standards of preservation practice. While we respect the complexity involved, we have the expertise to support preservation work on these exceptional buildings." },
        { question: "What adaptive reuse opportunities exist in downtown Lakeland?", answer: "Downtown Lakeland's revitalization has created excellent adaptive reuse opportunities. Historic commercial buildings are becoming restaurants, breweries, event venues, and creative offices. The city supports sensitive adaptive reuse through its preservation program and downtown development initiatives. Lake Mirror Promenade properties are particularly sought after." },
      ],
      projectTypes: ["Frank Lloyd Wright preservation", "Downtown commercial restoration", "Dixieland home rehabilitation", "Historic church restoration", "Adaptive reuse projects", "Lake Morton mansions"],
    },

    sarasota: {
      localContext: `Sarasota's architectural heritage reflects its development as a wealthy winter colony and arts destination, with significant Mediterranean Revival estates, Sarasota School of Architecture modernist gems, and charming historic districts. The city's affluent, design-conscious community demands exceptional quality in preservation work. Historic tax credits make substantial restoration projects economically attractive, while the city's preservation program actively protects significant structures.`,
      keyFactors: [
        { title: "Mediterranean Revival Estates", description: "Sarasota's bayfront and downtown feature magnificent Mediterranean Revival mansions from the 1920s-1930s, requiring specialized restoration of stucco, terracotta, and decorative elements." },
        { title: "Sarasota School of Architecture", description: "Mid-century modern gems by Paul Rudolph, Ralph Twitchell, and other masters of the Sarasota School represent internationally significant architecture requiring expert preservation." },
        { title: "Burns Court Historic District", description: "The former fishing village commercial area has been restored as a charming retail and restaurant district, demonstrating successful adaptive reuse." },
        { title: "Laurel Park Historic District", description: "An eclectic residential district with Craftsman, Colonial Revival, and Frame Vernacular homes from Sarasota's early development period." },
      ],
      localFaqs: [
        { question: "What makes Sarasota historic restoration different?", answer: "Sarasota's affluent community and design heritage demand exceptional quality in preservation work. Mediterranean Revival estates require specialized craftsmanship for stucco, terracotta, and decorative elements. Sarasota School modernist buildings need understanding of mid-century materials and minimalist detailing. The city's Design Review process evaluates work quality. We meet Sarasota's high expectations." },
        { question: "Can you restore Sarasota School of Architecture buildings?", answer: "Yes, we have expertise in mid-century modern preservation, including the distinctive Sarasota School. These buildings require understanding of experimental materials, climate-responsive design, and minimalist aesthetic. We work to preserve original intent while addressing durability issues common in these structures. Several notable Sarasota School buildings have been successfully restored." },
        { question: "How do historic tax credits work for Sarasota restoration projects?", answer: "Qualifying historic properties in Sarasota can access federal historic tax credits (20% for income-producing properties) and Florida's historic preservation tax exemption. The substantial investment required for Sarasota restoration projects makes tax credits particularly valuable. We coordinate SHPO applications and ensure work meets certification standards. Many significant Sarasota restorations have utilized these incentives." },
      ],
      projectTypes: ["Mediterranean Revival estates", "Sarasota School modernism", "Burns Court commercial", "Laurel Park homes", "Historic hotel restoration", "Estate adaptive reuse"],
    },

    bradenton: {
      localContext: `Bradenton's historic architecture reflects its origins as a Manatee River settlement and early 20th-century commercial center. The downtown historic district and Village of the Arts offer distinct preservation opportunities, from traditional commercial restoration to creative adaptive reuse. The city's growing investment in downtown revitalization has increased interest in preserving historic character while accommodating new uses.`,
      keyFactors: [
        { title: "Downtown Historic District", description: "Old Main Street and surrounding blocks contain early 20th-century commercial buildings now being restored as downtown revitalization brings new investment and activity." },
        { title: "Village of the Arts", description: "A unique arts district in historic cottages and small commercial buildings offers creative adaptive reuse opportunities in a distinctive neighborhood setting." },
        { title: "Palmetto Historic District", description: "Across the Manatee River, Palmetto's historic district contains early commercial and residential structures connected to the area's fishing and agricultural heritage." },
        { title: "Manatee River Heritage", description: "Historic structures along the Manatee River reflect the region's maritime and agricultural history, with preservation connecting to cultural tourism initiatives." },
      ],
      localFaqs: [
        { question: "What historic preservation resources exist in Bradenton?", answer: "Bradenton has local historic districts with design guidelines, a historic preservation advisory board, and staff support for preservation projects. Manatee County also has historic preservation resources. The Manatee County Historical Society provides research assistance. State and federal programs are accessible for qualifying properties. We navigate all available resources for preservation projects." },
        { question: "How does the Village of the Arts handle historic buildings?", answer: "The Village of the Arts has a specific zoning overlay that encourages creative use of historic cottages and buildings while maintaining neighborhood character. Adaptive reuse for galleries, studios, and artisan businesses is encouraged. The city supports preservation that maintains the district's unique identity. We've completed projects in the Village that balance historic character with creative contemporary use." },
        { question: "Are there opportunities for downtown Bradenton historic restoration?", answer: "Downtown Bradenton's revitalization has created opportunities for historic building restoration. The Riverwalk investment and growing restaurant scene are driving property improvement. Historic commercial buildings are being restored for dining, retail, and office use. The city's Main Street program supports downtown preservation efforts. We help property owners access incentives and navigate requirements." },
      ],
      projectTypes: ["Downtown commercial restoration", "Village of the Arts adaptive reuse", "Palmetto district preservation", "Historic home rehabilitation", "Waterfront heritage structures", "Arts district buildouts"],
    },

    brandon: {
      localContext: `While Brandon is primarily a modern suburban community, pockets of historic resources exist, particularly in the original downtown area and older residential neighborhoods. Historic preservation in Brandon focuses on maintaining connection to the community's agricultural and early suburban history. Opportunities exist for restoring remaining historic structures and documenting the area's development history.`,
      keyFactors: [
        { title: "Original Brandon Core", description: "The area around the intersection of Highway 60 and Parsons Avenue contains some of Brandon's oldest structures, reflecting its origins as a small agricultural community." },
        { title: "Early Residential Neighborhoods", description: "Neighborhoods developed in the 1920s-1950s contain modest historic homes that represent Brandon's early suburban character and housing styles." },
        { title: "Agricultural Heritage Structures", description: "Remaining agricultural buildings, including barns and packing houses, represent Brandon's citrus and farming history before suburban development." },
        { title: "Mid-Century Resources", description: "Post-war commercial and residential development includes mid-century resources that may gain historic significance as they reach 50+ years of age." },
      ],
      localFaqs: [
        { question: "Does Brandon have historic preservation requirements?", answer: "Brandon falls under Hillsborough County jurisdiction, which has a historic preservation program but fewer designated resources than Tampa. Individual property owners can pursue National Register listing or local landmark designation for qualifying structures. While Brandon has limited formal historic districts, significant historic structures exist and can be restored to preservation standards." },
        { question: "What historic resources exist in Brandon?", answer: "Brandon's historic resources include early commercial buildings near the original downtown, 1920s-1950s residential neighborhoods, and remaining agricultural structures. As the community has developed rapidly, many historic structures have been lost, making remaining resources more significant. Documentation and preservation of remaining heritage buildings helps maintain community connection to Brandon's history." },
        { question: "Can you restore older homes in Brandon?", answer: "Yes, we restore older homes throughout Brandon, applying preservation principles to maintain historic character while updating for contemporary living. Even homes not formally designated as historic benefit from careful restoration that respects original design intent. We help homeowners understand their home's history and make informed decisions about restoration approaches." },
      ],
      projectTypes: ["Early commercial restoration", "Historic home rehabilitation", "Agricultural heritage preservation", "Mid-century restoration", "Documentation services", "Sensitive renovation"],
    },

    ruskin: {
      localContext: `Ruskin's historic identity centers on its origins as a utopian socialist colony founded in 1910, with remaining structures from this unique experiment in communal living. The Ruskin Historic District, though small, represents significant Florida history. The area's agricultural heritage, particularly tomato farming, has also left architectural traces. As our home community, we have particular interest in preserving Ruskin's distinctive history.`,
      keyFactors: [
        { title: "Ruskin Colony Heritage", description: "The town's founding as a utopian socialist colony in 1910 left distinctive structures, including the historic Ruskin College building and early community structures." },
        { title: "Agricultural History", description: "Tomato farming heritage is reflected in remaining packing houses, farmhouses, and agricultural structures that tell the story of South Hillsborough's agricultural past." },
        { title: "Small-Scale Historic District", description: "The Ruskin Historic District, while modest, contains structures significant to understanding this unique community's origins and early development." },
        { title: "Community Heritage", description: "As development transforms South Hillsborough, preserving remaining historic resources helps maintain community identity and connection to local history." },
      ],
      localFaqs: [
        { question: "What's the history of Ruskin's founding?", answer: "Ruskin was founded in 1910 as a utopian socialist colony based on the ideas of John Ruskin. The community included Ruskin College, communal enterprises, and idealistic social organization. While the colony dissolved by 1918, remaining structures and the community's name preserve this distinctive heritage. Understanding this history informs preservation of Ruskin's significant buildings." },
        { question: "Are there historic preservation resources for Ruskin?", answer: "Ruskin's historic resources fall under Hillsborough County's historic preservation program. The Ruskin Historic District provides some local protection. Individual structures can pursue National Register listing. The Ruskin Historical Society maintains archives and promotes awareness. State and federal preservation programs are accessible for qualifying properties. We can help navigate available resources." },
        { question: "What agricultural heritage structures remain in Ruskin?", answer: "South Hillsborough's tomato farming industry left packing houses, farmhouses, barns, and worker housing throughout the Ruskin area. While many have been lost to development, significant examples remain. These structures represent important agricultural and labor history. Adaptive reuse can preserve these buildings while accommodating new uses. We understand the historical significance of these vernacular structures." },
      ],
      projectTypes: ["Colony-era restoration", "Agricultural heritage preservation", "Historic home rehabilitation", "Adaptive reuse", "Heritage documentation", "Community landmark stabilization"],
    },
  };

  return contentByLocation[location.slug] || contentByLocation.tampa;
}

// Add similar functions for other services...
export function getMultiFamilyContent(location: LocationData): ServiceLocationContent {
  // Default content that can be customized per location
  return {
    localContext: `${location.name} presents strong opportunities for multi-family construction, driven by population growth and housing demand throughout the ${location.metro}. Local zoning, density regulations, and market conditions create specific considerations for developers in ${location.county}.`,
    keyFactors: [
      { title: "Market Demand", description: `${location.name}'s growing population creates demand for quality multi-family housing across market segments from workforce housing to luxury apartments.` },
      { title: "Zoning and Density", description: `${location.county} zoning regulations determine allowable density and building types. We navigate local requirements to maximize development potential.` },
      { title: "Construction Considerations", description: `Local soil conditions, ${location.constructionContext.floodZones ? "flood zones," : ""} and building code requirements affect multi-family construction approach and costs.` },
      { title: "Amenity Expectations", description: `${location.name} market expectations for amenities vary by segment. Understanding local preferences ensures appropriate amenity packages.` },
    ],
    localFaqs: [
      { question: `What multi-family development opportunities exist in ${location.name}?`, answer: `${location.name} has ongoing demand for multi-family development ranging from garden-style apartments to high-rise construction depending on location and zoning. ${location.economicData.developmentNotes} Contact us to discuss specific opportunities and market conditions.` },
      { question: `What are the zoning requirements for multi-family in ${location.name}?`, answer: `Multi-family zoning in ${location.county} includes various residential classifications with different density allowances. Specific requirements vary by location and existing land use designations. We can assess a specific site's development potential and navigate the entitlement process.` },
      { question: `How long does multi-family construction take in ${location.name}?`, answer: `Multi-family project timelines in ${location.name} vary based on project scale and type. Garden-style apartments typically take 12-18 months; mid-rise construction 18-24 months; high-rise projects 24-36 months. Permitting through ${location.constructionContext.permitAuthority} typically adds ${location.constructionContext.avgPermitTime}.` },
    ],
    projectTypes: ["Apartment complexes", "Condominiums", "Townhome developments", "Senior living", "Student housing", "Mixed-use residential"],
  };
}

export function getDisasterRecoveryContent(location: LocationData): ServiceLocationContent {
  return {
    localContext: `${location.name}'s location in ${location.county} presents specific disaster risks that property owners must understand. ${location.weatherFactors.join(". ")}. When disaster strikes, ${location.name} property owners need experienced restoration contractors who understand local building codes, insurance processes, and construction conditions.`,
    keyFactors: [
      { title: "Hurricane and Storm Risk", description: `${location.name}'s ${location.constructionContext.floodZones} require understanding of storm surge, wind damage, and flooding patterns when planning restoration.` },
      { title: "Insurance Coordination", description: `We work with all major insurance carriers serving ${location.county}, navigating claims processes and ensuring proper documentation for maximum recovery.` },
      { title: "Code Compliance", description: `Restoration work must meet current ${location.county} building codes through ${location.constructionContext.permitAuthority}, which may exceed original construction standards.` },
      { title: "Rapid Response", description: `Our ${location.name} presence enables quick mobilization for damage assessment and restoration planning when disasters affect local properties.` },
    ],
    localFaqs: [
      { question: `What types of disasters affect ${location.name} properties?`, answer: `${location.name} properties face risks from hurricanes, tropical storms, severe thunderstorms, flooding, and fire. ${location.weatherFactors[0]}. We restore properties from all disaster types, working with insurance carriers to return buildings to pre-loss condition or better.` },
      { question: `How do you handle insurance claims for ${location.name} restoration?`, answer: `We assist throughout the insurance claim process including detailed damage documentation, certified estimates, adjuster coordination, supplemental claims, and negotiation support. Our experience with ${location.county} restoration projects helps ensure fair settlements. We work with all major carriers serving the ${location.name} market.` },
      { question: `What's the restoration process after a disaster in ${location.name}?`, answer: `Our process includes emergency stabilization, comprehensive damage assessment, insurance coordination, detailed restoration planning, permitting through ${location.constructionContext.permitAuthority}, quality construction, and final inspection. For ${location.name} projects, we account for local conditions including ${location.constructionContext.soilConditions} and current building code requirements.` },
    ],
    projectTypes: ["Hurricane damage restoration", "Flood damage recovery", "Fire damage restoration", "Storm damage repair", "Commercial restoration", "Multi-family disaster recovery"],
  };
}

export function getBalconyReconstructionContent(location: LocationData): ServiceLocationContent {
  return {
    localContext: `Balcony reconstruction in ${location.name} addresses critical structural and waterproofing issues common in Florida's challenging climate. ${location.county}'s multi-family properties face particular exposure to ${location.weatherFactors.slice(0, 2).join(" and ")}. Following Florida's SB 4-D milestone inspection requirements, many ${location.name} condominiums require professional balcony assessment and reconstruction.`,
    keyFactors: [
      { title: "SB 4-D Compliance", description: `Florida's milestone inspection requirements affect buildings 3+ stories within 3 miles of the coast. Many ${location.name} properties now require structural assessments and potential balcony reconstruction.` },
      { title: "Climate Exposure", description: `${location.name}'s ${location.weatherFactors[0]} accelerates balcony deterioration. Salt air, humidity, and water intrusion cause concrete spalling and reinforcement corrosion.` },
      { title: "HOA and Condo Associations", description: `We work extensively with ${location.name} HOAs and condo associations, understanding board approval processes, reserve fund coordination, and resident communication requirements.` },
      { title: "Phased Construction", description: `Multi-unit balcony projects in ${location.name} are typically phased to minimize disruption to residents while maintaining project efficiency.` },
    ],
    localFaqs: [
      { question: `Do ${location.name} condos need balcony inspections?`, answer: `Florida's SB 4-D requires milestone inspections for buildings 3+ stories tall at 30 years of age (25 years within 3 miles of the coast), with recertification every 10 years. Many ${location.name} condominiums are now subject to these requirements. Inspections often reveal balcony issues requiring reconstruction. We provide comprehensive balcony assessment and reconstruction services.` },
      { question: `What causes balcony damage in ${location.name}?`, answer: `Common causes in ${location.name} include water intrusion through failed waterproofing, reinforcing steel corrosion from salt air and moisture, concrete spalling and delamination, improper original construction, and age-related deterioration. ${location.weatherFactors[0]} accelerates these issues. We identify root causes and implement lasting solutions.` },
      { question: `How do you work with ${location.name} condo associations?`, answer: `We understand condo association processes including board presentations, bidding requirements, reserve fund coordination, and resident communication. We provide detailed scope documentation for board review, phase work to minimize disruption, and maintain clear communication throughout projects. Many ${location.name} associations are repeat clients.` },
    ],
    projectTypes: ["Structural balcony repair", "Balcony waterproofing", "Railing replacement", "Concrete restoration", "SB 4-D compliance", "Preventive maintenance"],
  };
}

export function getExteriorWaterproofingContent(location: LocationData): ServiceLocationContent {
  return {
    localContext: `Exterior waterproofing in ${location.name} protects buildings from Florida's intense rainfall, humidity, and storm exposure. ${location.weatherFactors.slice(0, 2).join(". ")}. Proper waterproofing is essential for building longevity and occupant comfort throughout ${location.county}.`,
    keyFactors: [
      { title: "Climate Demands", description: `${location.name}'s ${location.weatherFactors[0]} creates significant waterproofing challenges. Systems must handle heavy rainfall, wind-driven rain, and constant humidity.` },
      { title: "Building Types", description: `We waterproof commercial buildings, multi-family residential, parking structures, and high-value single-family homes throughout ${location.name}.` },
      { title: "Material Selection", description: `Florida's UV exposure and humidity require waterproofing systems rated for our climate. We specify products from manufacturers with proven ${location.name} performance.` },
      { title: "Long-Term Protection", description: `Proper waterproofing prevents costly water damage, mold issues, and structural deterioration. Our systems provide 15-25 year protection with maintenance.` },
    ],
    localFaqs: [
      { question: `What areas need waterproofing in ${location.name} buildings?`, answer: `Critical areas for ${location.name} buildings include foundations, below-grade walls, plaza and terrace decks, balconies, parking structures, expansion joints, window and door openings, and roof-wall interfaces. ${location.constructionContext.floodZones} creates additional below-grade waterproofing requirements for many properties.` },
      { question: `How does ${location.name}'s climate affect waterproofing systems?`, answer: `${location.name}'s intense UV, high humidity, significant rainfall, and tropical storm exposure stress waterproofing systems. We specify products designed for Florida's climate with proven local performance records. Proper system selection extends service life and reduces maintenance requirements.` },
      { question: `What waterproofing systems do you recommend for ${location.name}?`, answer: `System selection depends on application and exposure. We use traffic-bearing membranes for decks and balconies, crystalline systems for foundations, fluid-applied membranes for walls, and specialty systems for parking structures. All products are rated for ${location.name}'s climate conditions and backed by manufacturer warranties.` },
    ],
    projectTypes: ["Building envelope waterproofing", "Foundation waterproofing", "Plaza and deck waterproofing", "Parking structure waterproofing", "Below-grade waterproofing", "Balcony waterproofing"],
  };
}

export function getLuxuryCustomHomesContent(location: LocationData): ServiceLocationContent {
  return {
    localContext: `${location.name}'s luxury home market reflects the community's affluence and lifestyle preferences, with opportunities ranging from waterfront estates to architectural residences in premier neighborhoods like ${location.neighborhoods.slice(0, 3).join(", ")}. Custom home construction in ${location.county} requires understanding of local conditions, from ${location.constructionContext.soilConditions} to ${location.constructionContext.floodZones}.`,
    keyFactors: [
      { title: "Premier Neighborhoods", description: `${location.name}'s luxury market centers on ${location.neighborhoods.slice(0, 4).join(", ")} and other premier areas with established estates and new construction opportunities.` },
      { title: "Waterfront Construction", description: `${location.name}'s waterfront locations require specialized construction including flood zone compliance, marine-grade materials, and coordination with seawall and dock work.` },
      { title: "Hurricane Resistance", description: `All ${location.name} custom homes are built to exceed Florida Building Code wind requirements with impact-resistant systems and storm-ready design.` },
      { title: "Custom Excellence", description: `${location.name}'s discerning homeowners expect exceptional quality, attention to detail, and project management that respects their time and investment.` },
    ],
    localFaqs: [
      { question: `What luxury neighborhoods do you build in ${location.name}?`, answer: `We build luxury custom homes throughout ${location.name}'s premier neighborhoods including ${location.neighborhoods.slice(0, 5).join(", ")}, and other exclusive areas. Each neighborhood has distinct characteristics and requirements. We help clients select sites and navigate local considerations for optimal results.` },
      { question: `What's the custom home construction process in ${location.name}?`, answer: `Our ${location.name} custom home process includes site selection assistance, design development with your architect, detailed budgeting, permitting through ${location.constructionContext.permitAuthority}, construction management, and turnover. We account for local factors including ${location.constructionContext.soilConditions} and current building requirements. Typical timeline is 12-24 months depending on scope.` },
      { question: `How do you handle waterfront construction in ${location.name}?`, answer: `${location.name} waterfront construction requires specialized expertise in flood zone compliance (${location.constructionContext.floodZones}), marine-grade materials, seawall coordination, and coastal environmental requirements. We've completed numerous waterfront estates and understand the technical and regulatory complexities involved.` },
    ],
    projectTypes: ["Waterfront estates", "Architectural residences", "Multi-generational homes", "Estate renovations", "Smart home integration", "Hurricane-resistant construction"],
  };
}
