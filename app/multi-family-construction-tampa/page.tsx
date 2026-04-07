import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, CheckCircle, Building2, Shield, Award, Clock, Users, HardHat, FileCheck, Landmark, Home } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/multi-family-construction-tampa/' },
  title: "Multi-Family Construction Tampa | Apartments",
  description: "Multi-family construction in Tampa by Florida Construction Specialists. Condos, apartments, townhomes, senior living, student housing.",
  openGraph: {
    title: "Multi-Family Construction Tampa | Apartments",
    description: "Multi-family construction in Tampa by Florida Construction Specialists. Condos, apartments, townhomes, senior living, student housing.",
    url: "https://floridaconstructionspecialists.com/multi-family-construction-tampa/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "Where is the strongest demand for new multi-family development in Tampa right now?",
    answer: "Tampa's multi-family demand is concentrated in several distinct corridors. Downtown and Channelside continue attracting luxury rental and condominium development, driven by the Water Street Tampa transformation and growing walkability. The SoHo and South Tampa neighborhoods see strong demand for boutique mid-rise projects where land is scarce but rental rates are high. The USF corridor, including New Tampa and Temple Terrace, supports student housing and workforce apartments serving the university and nearby medical employers. Suburban corridors along the Selmon Expressway and in the Westshore area attract garden-style apartment communities targeting commuters who work in the business district but want more space."
  },
  {
    question: "What are the key code requirements for multi-family construction in Tampa?",
    answer: "Multi-family construction in Tampa must comply with the Florida Building Code with Wind Zone 3 requirements, meaning 120 mph design wind speeds for structural systems, windows, doors, and roofing. Buildings three stories and above fall under Florida's SB 4-D milestone inspection requirements. The City of Tampa requires compliance with the Florida Fire Prevention Code for multi-family occupancies, including fire-rated corridor walls, sprinkler systems, smoke evacuation, and fire alarm systems. Flood zone compliance is critical for sites near Tampa Bay, the Hillsborough River, or coastal areas where FEMA AE and VE designations require elevated construction or flood-resistant design. Stormwater management must satisfy both the City of Tampa and the Southwest Florida Water Management District."
  },
  {
    question: "How does FCS approach the pre-construction phase for Tampa multi-family projects?",
    answer: "Pre-construction for Tampa multi-family projects begins with detailed site evaluation, including geotechnical analysis of Hillsborough County's sandy soils and high water table, flood zone determination through FEMA mapping, utility capacity assessment for the density of units planned, and zoning review to confirm the proposed use is permitted. We develop preliminary budgets based on current Tampa subcontractor pricing, create detailed CPM schedules that account for the rainy season, and identify long-lead items like impact windows and structural steel. We also coordinate early with the City of Tampa Building Services Department on permitting pathway and timeline expectations."
  },
  {
    question: "What amenity trends are developers building into Tampa multi-family projects?",
    answer: "Tampa multi-family amenity packages have evolved significantly. Beyond the standard pool and fitness center, current Tampa projects include coworking spaces and private offices for the remote work population, package concierge systems and cold storage for deliveries, resort-style pool areas with cabanas reflecting the Florida lifestyle, dog parks and pet wash stations responding to Tampa's high pet ownership, rooftop amenity decks in mid-rise and high-rise buildings offering bay and skyline views, bike storage and repair stations supporting Tampa's growing cycling infrastructure, and electric vehicle charging stations. The specific amenity mix depends on the target demographic and submarket. Downtown projects lean toward rooftop social spaces, while suburban communities emphasize outdoor recreation and family amenities."
  },
  {
    question: "Can FCS build multi-family projects that include ground-floor commercial space?",
    answer: "Yes, mixed-use multi-family with ground-floor retail or commercial space is one of the fastest-growing project types in Tampa, particularly in walkable neighborhoods like SoHo, Seminole Heights, and Downtown. These projects involve more complex construction including different structural systems for commercial versus residential floors, separate MEP systems, independent fire suppression, and distinct building entrances. Permitting for mixed-use in Tampa may require additional zoning review to confirm the commercial uses are permitted in the district. We have experience with the specific construction challenges of mixed-use, including managing the interface between commercial tenant buildout and residential occupancy timelines."
  },
  {
    question: "How long does a typical mid-rise apartment project take from permit to occupancy in Tampa?",
    answer: "A mid-rise apartment project, typically four to six stories with 100 to 200 units, takes approximately 18 to 24 months from permit issuance to certificate of occupancy in the Tampa market. The timeline breaks down roughly as follows: site work and foundations take 3 to 4 months, vertical structure 8 to 12 months depending on construction type, and interior finishes plus common areas 4 to 6 months. Permit review through the City of Tampa Building Services Department typically adds 6 to 10 weeks before construction begins. We account for Tampa's rainy season in scheduling, focusing on exterior-sensitive work during drier months and interior work during the wet season. Phased occupancy can allow earlier units to be delivered while later buildings complete."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Multi-Family Construction", href: "/multi-family-construction/" },
  { name: "Tampa", href: "/multi-family-construction-tampa/" },
];

export default function MultiFamilyConstructionTampaPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Multi-Family Construction" />
      <ServiceSchema
        serviceName="Multi-Family Construction"
        serviceDescription="Multi-family construction contractor serving Tampa, FL. Condominiums, apartments, townhomes, senior living, student housing, mixed-use. Licensed CBC1262722, projects from $1M to $25M+."
        city="Tampa"
        minPrice="1000000"
        serviceCategories={["Condominium Construction", "Apartment Complexes", "Townhome Developments", "Senior Living Facilities", "Student Housing", "Mixed-Use Residential"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/southwinds-condo-front/southwinds-condo-front-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Tampa, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Multi-Family Construction in Tampa, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Tampa's population growth drives relentless demand for apartments, condominiums, townhomes, and senior living. Florida Construction Specialists delivers multi-family construction from the high-rise corridors of Downtown and Channelside to the suburban apartment communities expanding across Hillsborough County. Always the prime contractor, never a subcontractor.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Since 1982</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">License {BUSINESS_INFO.licenseNumber}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Building2 className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Prime Contractor Only</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta text-center">
                Discuss Your Multi-Family Project
              </Link>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-secondary flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tampa Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              A Housing Boom That Shows No Signs of Slowing
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Tampa added more than 100,000 new residents to its metropolitan area between 2020 and 2024, and the housing market has struggled to keep pace. Rental vacancy rates remain tight across most submarkets, driving developers to plan new apartment communities from the urban core outward to suburban growth corridors. Condominium development, which stalled after the 2008 downturn, has returned to Downtown Tampa and the waterfront, with buyers drawn by the city's lower cost of living compared to South Florida and its increasingly urban lifestyle centered around the Riverwalk and Water Street districts.
              </p>
              <p className="mb-6">
                The composition of Tampa's multi-family market reflects the city's demographic diversity. Young professionals working in the Westshore Business District and at Tampa International Airport fuel demand for luxury rentals in SoHo and Channelside. The University of South Florida's 50,000-plus student enrollment sustains a purpose-built student housing sector in the New Tampa and Temple Terrace area. Florida's ongoing retirement migration creates continuous need for independent living and assisted living facilities, with several senior living campuses expanding along the Bayshore corridor and in established South Tampa neighborhoods like Palma Ceia and Beach Park.
              </p>
              <p className="mb-6">
                Affordable and workforce housing represents another growth segment. Hillsborough County's inclusionary housing incentives encourage developers to incorporate attainable-rent units into larger projects, particularly in the Seminole Heights and East Tampa neighborhoods where redevelopment activity is accelerating. Build-to-rent townhome communities have emerged as a popular product type in the Brandon, Riverview, and New Tampa corridors where land costs are lower but commuter access to employment centers remains strong.
              </p>
              <p>
                Florida Construction Specialists serves this full spectrum of Tampa multi-family construction. We bring the bonding capacity for projects from one million to twenty-five million dollars, in-house engineering capabilities, and a deep bench of Tampa-based subcontractors who understand local soil conditions, code requirements, and inspection expectations. As a prime general contractor, we maintain direct accountability on every project, which is exactly the level of control that multi-family developers need when timelines and budgets determine project viability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/tampa-apartment-complex-construction/tampa-apartment-complex-construction-small.webp"
        alt="Multi-family apartment construction in Tampa"
        title="Building Tampa's Neighborhoods"
        subtitle="Condominiums, apartments, townhomes, and senior living across Hillsborough County"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Multi-Family Project Types Throughout Tampa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            From student housing near USF to waterfront condominiums on Harbour Island, we build every type of multi-family residential in Tampa.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Condominium Construction",
                description: "Mid-rise and high-rise condominium development in Downtown Tampa, Channelside, and the Bayshore corridor. We build to the quality standards that condo buyers expect, including premium finishes, impact-resistant glazing, and amenity spaces that differentiate the property in Tampa's competitive market."
              },
              {
                icon: Home,
                title: "Apartment Communities",
                description: "Garden-style and mid-rise apartment complexes serving Tampa's rental market. From luxury rentals in SoHo to workforce apartments in Seminole Heights and East Tampa, we deliver projects that balance construction costs with the amenities and durability that attract and retain tenants."
              },
              {
                icon: Users,
                title: "Senior Living Facilities",
                description: "Independent living, assisted living, and memory care construction for Tampa Bay's growing senior population. These specialized projects require healthcare-adjacent design, accessibility beyond basic ADA, life safety systems, and finishes that create a residential atmosphere within a licensed care facility."
              },
              {
                icon: Landmark,
                title: "Student Housing",
                description: "Purpose-built student housing near the University of South Florida and the University of Tampa. Student housing construction in Tampa requires durable finishes, efficient unit layouts, high-capacity laundry and common areas, and security systems appropriate for the student demographic."
              },
              {
                icon: HardHat,
                title: "Townhome Developments",
                description: "Build-to-rent and for-sale townhome communities in Tampa's suburban corridors. The New Tampa, Brandon, and Riverview areas support significant townhome development where land availability and commuter access create viable product for families priced out of the single-family market."
              },
              {
                icon: FileCheck,
                title: "Mixed-Use Residential",
                description: "Residential-over-retail and residential-over-commercial projects in Tampa's walkable neighborhoods. SoHo, Seminole Heights, and Downtown all support mixed-use development that combines ground-floor commercial with upper-floor residential, requiring complex structural and MEP coordination."
              }
            ].map((project) => (
              <div key={project.title} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                  <project.icon className="w-7 h-7 text-brand-green-dark" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Building Multi-Family for Tampa's Conditions
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Multi-family construction in Tampa presents a unique combination of environmental, regulatory, and market conditions that demand local expertise. The <a href="https://www.tampa.gov/building-services" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of Tampa Building Services Department</a> processes multi-family permits through a multi-discipline review that includes building, fire, mechanical, electrical, plumbing, and site plan review. We prepare complete submission packages that address all review disciplines simultaneously, reducing the back-and-forth that delays less organized permit applications.
              </p>
              <p className="mb-6">
                Tampa's subtropical climate shapes every decision in multi-family design and construction. The city's 50-plus inches of annual rainfall demands robust building envelope systems, with particular attention to window and door flashing, balcony waterproofing, and stormwater management. Hurricane readiness is not optional: Wind Zone 3 requirements mandate impact-resistant windows, reinforced structural connections, and roof systems engineered for 120 mph sustained winds. These requirements affect both construction cost and timeline, and we build them into every budget and schedule from the first pre-construction meeting.
              </p>
              <p className="mb-6">
                Flood zone considerations affect many potential multi-family sites in Tampa. Properties along the Bayshore corridor, near the Hillsborough River, in the Channelside area, and throughout low-lying portions of South Tampa and Davis Islands often carry FEMA flood zone designations that require elevated construction, flood-resistant materials below the base flood elevation, and specific insurance documentation. We conduct early flood zone analysis on every Tampa multi-family site to identify these requirements before they become schedule or budget surprises.
              </p>
              <p>
                The neighborhoods where Tampa multi-family projects are built affect construction logistics and community engagement. Downtown projects navigate tight urban sites with limited staging areas and active pedestrian traffic. Projects in established residential neighborhoods like Seminole Heights and Tampa Heights require sensitivity to existing community character and local input. Suburban sites in the New Tampa and Carrollwood corridors offer easier construction access but may require more extensive site infrastructure including roads, utilities, and stormwater facilities. We adapt our construction approach to each Tampa neighborhood's specific conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Tampa Multi-Family Construction Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            A structured approach refined through years of multi-family delivery in the Tampa market.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Site Evaluation and Feasibility",
                description: "Geotechnical analysis of Tampa's sandy soils and high water table, flood zone determination, utility capacity assessment for the planned unit count, zoning confirmation, and preliminary budget development based on current Tampa market conditions and subcontractor pricing."
              },
              {
                step: "02",
                title: "Pre-Construction and Design Coordination",
                description: "Detailed constructability review of architectural and engineering plans, value engineering to optimize cost without sacrificing quality, long-lead procurement planning for impact windows and structural materials, and schedule development that accounts for Tampa's rainy season and permit review timelines."
              },
              {
                step: "03",
                title: "Permitting and Approvals",
                description: "Complete permit package preparation and submission to the City of Tampa Building Services Department or Hillsborough County Construction Services. We coordinate multi-discipline plan review and manage any required variance or special exception processes. For projects in historic overlay districts, we handle preservation board coordination."
              },
              {
                step: "04",
                title: "Construction Execution",
                description: "Full-time superintendent oversight with experienced project managers coordinating our Tampa-based subcontractor network. Strategic scheduling places weather-sensitive exterior work in dry months. Weekly progress reporting, strict quality control, and proactive issue resolution keep the project on track and on budget."
              },
              {
                step: "05",
                title: "Turnover and Occupancy",
                description: "Comprehensive closeout including all final inspections, Certificate of Occupancy from the City of Tampa, unit-by-unit punch list completion, and coordination with property management for occupancy transition. We provide complete as-built documentation, equipment warranties, and maintenance guides for all building systems."
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-6 bg-white rounded-xl p-6 shadow-sm">
                <div className="w-14 h-14 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={faqs}
        title="Tampa Multi-Family Construction FAQ"
        description="Answers to common questions about multi-family residential construction in Tampa, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="Tampa" currentService="multi-family-construction" currentServiceName="Multi-Family Construction" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Discuss Your Tampa Multi-Family Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you are developing condominiums downtown, apartments in the suburbs, or senior living along the Bayshore, Florida Construction Specialists has the multi-family expertise Tampa developers depend on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Project Consultation
            </Link>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all">
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-300">
              <span>License {BUSINESS_INFO.licenseNumber}</span>
              <span>In-House Engineering</span>
              <span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
              <span>Always the Prime Contractor</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
