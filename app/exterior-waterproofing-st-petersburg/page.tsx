import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, CheckCircle, Building2, Shield, Award, Clock, ArrowRight, FileCheck, HardHat, Briefcase, Droplets } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";
import { CodeReference } from "@/components/CodeReference";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/exterior-waterproofing-st-petersburg/' },
  title: "Exterior Waterproofing St. Pete",
  description: "Exterior waterproofing in St. Petersburg by Florida Construction Specialists. Building envelope foundation parking deck.",
  openGraph: {
    title: "Exterior Waterproofing St. Pete",
    description: "Exterior waterproofing in St. Petersburg by Florida Construction Specialists. Building envelope foundation parking deck.",
    url: "https://floridaconstructionspecialists.com/exterior-waterproofing-st-petersburg/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "Why does St. Petersburg's peninsula geography create more severe waterproofing challenges than other Florida coastal cities?",
    answer: "Most Florida coastal cities have a defined oceanfront side and a relatively protected inland side. St. Petersburg is fundamentally different because the peninsula is bordered by Tampa Bay to the east, Boca Ciega Bay to the west, and the Gulf of Mexico to the southwest. Moisture-laden air reaches buildings from every direction, and prevailing wind patterns shift seasonally, so no building orientation provides consistent protection. The city's average relative humidity of 75 percent means exterior surfaces rarely dry completely, and the high water table, often just two to four feet below grade, creates constant hydrostatic pressure on foundation systems. These conditions combine to create waterproofing demands that exceed what standard coastal specifications address."
  },
  {
    question: "What types of buildings in St. Petersburg most commonly need exterior waterproofing?",
    answer: "Condominium towers in Downtown St. Petersburg and the waterfront communities of Isla del Sol, Shore Acres, and Coquina Key represent the largest share of our waterproofing work due to their exposure to salt-laden air and the regulatory requirements of SB 4-D milestone inspections. Commercial buildings along the Gateway and Carillon corridor frequently need parking structure and building envelope waterproofing. Historic properties in Old Northeast, Historic Kenwood, and Crescent Heights require specialized breathable waterproofing systems that protect without trapping moisture within older masonry and stucco walls. New construction projects throughout the city require proper waterproofing installation to meet the Florida Building Code's current requirements for the High Velocity Hurricane Zone."
  },
  {
    question: "How does St. Petersburg's high water table affect foundation waterproofing requirements?",
    answer: "The water table across much of St. Petersburg sits between two and four feet below grade, rising even higher during the wet season from June through September. This creates persistent hydrostatic pressure against foundation walls and slabs that standard damp-proofing cannot address. Properties in low-lying areas near Tampa Bay, Shore Acres, Coquina Key, and the barrier island communities experience the most severe conditions. FCS installs positive-side waterproofing membranes rated for continuous hydrostatic pressure, supplemented by drainage board systems that channel water to collection points and sump discharge systems. For existing buildings experiencing water intrusion, we can install negative-side crystalline waterproofing systems that penetrate and seal concrete from the interior when exterior excavation is not feasible."
  },
  {
    question: "What waterproofing systems perform best in St. Petersburg's salt air environment?",
    answer: "Standard waterproofing products formulated for general use often fail prematurely in St. Petersburg's salt air because chloride ions degrade adhesives and accelerate membrane breakdown. FCS specifies marine-grade systems from manufacturers including Tremco, Carlisle, Sika, and BASF that are tested for salt fog exposure. For building envelope applications, we use fluid-applied polyurethane and elastomeric membranes with enhanced chloride resistance. Foundation systems incorporate crystalline waterproofing that becomes more effective as it reacts with moisture and mineral deposits. Traffic-bearing deck membranes receive UV-stable topcoats that resist the intense solar exposure that the Sunshine City receives. Every system is selected based on the specific exposure conditions of the building's location on the peninsula."
  },
  {
    question: "Can exterior waterproofing be applied to occupied buildings without relocating tenants?",
    answer: "Yes, exterior waterproofing work is performed from outside the building envelope and generally does not require tenant relocation. Building envelope waterproofing uses swing stages or scaffolding on the exterior, foundation waterproofing involves excavation around the building perimeter, and deck waterproofing is applied to exposed surfaces. The primary impacts to occupants are noise from surface preparation and application equipment during work hours, temporary restrictions on exterior door and window use in active work zones, and staging areas that may temporarily affect parking or landscape areas. FCS develops detailed work phasing plans that minimize disruption and coordinates schedules with property management to avoid conflicts with building operations."
  },
  {
    question: "How often should waterproofing be inspected and maintained on St. Petersburg buildings?",
    answer: "The peninsula's aggressive environment means waterproofing systems require more frequent inspection than inland installations. FCS recommends annual visual inspections of exposed waterproofing surfaces including traffic coatings, sealant joints, and flashing terminations. Detailed inspections with adhesion testing and moisture surveys should be performed every three to five years to catch early degradation before water intrusion occurs. Sealant joints at windows, doors, and expansion joints typically require replacement every seven to ten years in the salt air environment, earlier for joints with southern exposure. Proactive maintenance extends waterproofing system life significantly and is far less expensive than remedial repairs after water damage occurs."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Exterior Waterproofing", href: "/commercial/guides/balcony-reconstruction-exterior-waterproofing/" },
  { name: "St. Petersburg", href: "/exterior-waterproofing-st-petersburg/" },
];

export default function ExteriorWaterproofingStPetersburgPage() {
  return (
    <>
      <LocalBusinessSchema city="St. Petersburg" service="Exterior Waterproofing" />
      <ServiceSchema
        serviceName="Exterior Waterproofing"
        serviceDescription="Exterior waterproofing in St. Petersburg, FL. Building envelope, foundation, parking deck, and plaza waterproofing for peninsula properties. Marine-grade systems with 10-year warranty. Licensed CBC1262722, 40+ years experience."
        city="St. Petersburg"
        minPrice="50000"
        serviceCategories={["Building Envelope Waterproofing", "Foundation Waterproofing", "Parking Deck Waterproofing", "Plaza Deck Systems", "Sealant and Caulking"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/fcs-commercial-exterior-waterproofing/fcs-commercial-exterior-waterproofing-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving St. Petersburg, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Exterior Waterproofing in St. Petersburg, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              St. Petersburg's peninsula is surrounded by water on three sides, creating the most demanding waterproofing environment in the Tampa Bay region. Florida Construction Specialists installs marine-grade building envelope, foundation, and deck waterproofing systems engineered for the salt air, high water table, and intense UV exposure that define this coastal market.
            </p>

            {/* Trust Badges */}
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
                <Droplets className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">10-Year Warranty</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta text-center">
                Request Waterproofing Assessment
              </Link>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-secondary flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* St. Petersburg Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Three Bodies of Water, One Peninsula: The Waterproofing Reality of Building in St. Petersburg
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                The fundamental challenge of waterproofing in St. Petersburg is that the city exists on a narrow peninsula bordered by Tampa Bay, Boca Ciega Bay, and the Gulf of Mexico. This geography creates a moisture environment with no parallel among Florida's major markets. Humidity averages 75 percent year-round. Salt-laden air arrives from multiple directions depending on season and wind pattern. The water table sits two to four feet below grade across much of the city, rising higher during the June-through-September wet season. And St. Petersburg earns its Sunshine City reputation with intense UV exposure that degrades waterproofing materials faster than shaded or inland applications.
              </p>
              <p className="mb-6">
                These conditions mean that waterproofing systems specified for general Florida use frequently underperform in St. Petersburg. Standard sealants lose adhesion in the salt atmosphere within three to five years rather than the seven to ten year lifespan expected in inland applications. Below-grade waterproofing that performs adequately with seasonal water table fluctuations may fail under the persistent hydrostatic pressure that low-lying peninsula sites experience. Building envelope coatings formulated for normal coastal exposure can degrade under the bidirectional salt deposition that distinguishes St. Petersburg from single-coastline cities. Specifying waterproofing for St. Petersburg requires understanding these intensified conditions and selecting products and systems that are rated for them.
              </p>
              <p className="mb-6">
                The building inventory that requires waterproofing protection spans every era and type of construction. Downtown St. Petersburg's high-rise condominium towers need building envelope and deck waterproofing that addresses the wind-driven rain exposure at upper floors. The established mid-rise communities of Shore Acres, Coquina Key, and Isla del Sol have parking structures and common-area decks that require traffic-bearing waterproofing restoration after decades of salt exposure and UV degradation. Historic properties in Old Northeast and Historic Kenwood need breathable waterproofing approaches that protect masonry and stucco without trapping moisture within the wall assembly. Commercial properties along the Gateway corridor and Central Avenue require parking garage waterproofing, plaza deck systems, and building envelope protection that maintain performance under heavy use.
              </p>
              <p>
                Florida Construction Specialists has protected St. Petersburg buildings from water intrusion for over two decades, functioning as the prime contractor on every project. We specify and install marine-grade waterproofing systems from manufacturers whose products are tested and warranted for severe coastal exposure. Our 10-year workmanship warranty reflects confidence in both the products we select and the installation quality our crews deliver. We work with building owners, property managers, condominium associations, and architects to develop waterproofing solutions that address the specific conditions each building faces on the peninsula.
              </p>
            </div>

            <CodeReference
              code="Florida Statute 553.899"
              section="Waterproofing as a Milestone Inspection Element"
              description="SB 4-D milestone inspections evaluate waterproofing membrane integrity as part of the structural assessment for condominium buildings. On the St. Petersburg peninsula, where bidirectional salt exposure accelerates waterproofing degradation, failed membranes that allow moisture into structural elements frequently trigger remediation requirements."
              link="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.899.html"
              linkText="View F.S. 553.899"
            />
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/fcs-commercial-exterior-waterproofing/fcs-commercial-exterior-waterproofing-display.webp"
        alt="Commercial exterior waterproofing application in St. Petersburg"
        title="Marine-Grade Waterproofing for Peninsula Properties"
        subtitle="Building envelope, foundation, and deck systems engineered for bidirectional coastal exposure"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Exterior Waterproofing Services for St. Petersburg Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Comprehensive waterproofing solutions for every building system exposed to the peninsula's aggressive moisture environment.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Building Envelope Waterproofing",
                description: "Complete exterior wall waterproofing including fluid-applied membranes, sheet membrane systems, air and water barrier installation, and joint sealant programs. We address the window-to-wall interfaces, expansion joints, and penetration details that are the most common failure points in St. Petersburg's wind-driven rain environment. Systems are selected for salt fog resistance and the UV exposure levels specific to each building face."
              },
              {
                icon: Droplets,
                title: "Foundation and Below-Grade Systems",
                description: "Positive-side and negative-side foundation waterproofing designed for St. Petersburg's high water table conditions. We install bentonite sheet membranes, fluid-applied systems, and crystalline waterproofing depending on the substrate and exposure conditions. Drainage board systems and interior drainage channels manage hydrostatic pressure in buildings where the water table contacts foundation elements seasonally or continuously."
              },
              {
                icon: HardHat,
                title: "Parking Structure Waterproofing",
                description: "Traffic-bearing waterproofing membranes for parking decks, ramp surfaces, and vehicular areas that endure tire abrasion, fluid spills, and the salt deposits that vehicles carry from coastal roadways. We install polyurethane and epoxy systems with anti-skid finishes rated for the heavy vehicle traffic that St. Petersburg's commercial and condominium parking structures experience. Deck drain and joint systems complete the water management approach."
              },
              {
                icon: Shield,
                title: "Plaza and Pedestrian Deck Systems",
                description: "Waterproofing beneath pavers, tile, and concrete topping on occupied plazas, pool decks, and elevated terrace areas. These systems must perform as both waterproofing membranes and structural protection layers while accommodating the thermal movement that St. Petersburg's temperature cycles create. We detail transitions at walls, drains, and planters to prevent the water intrusion that degrades both the membrane and the structural deck below."
              },
              {
                icon: FileCheck,
                title: "Sealant and Caulking Programs",
                description: "Comprehensive joint sealant replacement for windows, curtain wall systems, expansion joints, and penetrations throughout the building envelope. Salt air in St. Petersburg degrades sealant adhesion faster than inland environments, and failed sealants are the most common source of water intrusion in high-rise and mid-rise buildings. We develop building-wide sealant programs that systematically address all joints on a replacement cycle appropriate for the exposure conditions."
              },
              {
                icon: Award,
                title: "Historic Building Waterproofing",
                description: "Breathable waterproofing systems for St. Petersburg's historic masonry, stucco, and wood frame buildings in Old Northeast, Historic Kenwood, Crescent Heights, and other preservation areas. We use silane and siloxane penetrating sealers, lime-based stucco repairs, and moisture management strategies that protect against water intrusion without creating vapor barriers that trap moisture within historic wall assemblies, which causes more damage than the water intrusion it prevents."
              }
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-brand-green-dark" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Expertise Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Waterproofing Conditions Across St. Petersburg's Building Zones
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Waterproofing specifications that perform well in one part of St. Petersburg may be insufficient in another because exposure conditions vary significantly across the peninsula. The waterfront high-rises of downtown face different challenges than the garden-style condominiums of Gateway, and the historic masonry buildings of Old Northeast require fundamentally different approaches than the concrete towers of Isla del Sol.
              </p>
              <p className="mb-6">
                The <a href="https://www.stpete.org/building_and_development_review/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of St. Petersburg Development Services Department</a> reviews building permit applications for waterproofing projects that involve structural modifications or changes to the building envelope. We manage the permitting process and coordinate inspections to ensure completed work meets the Florida Building Code requirements applicable to the city's coastal zone designation.
              </p>
              <p className="mb-6">
                Downtown and waterfront properties face the most extreme exposure conditions. Buildings along Beach Drive, the Pier District, and the bayfront receive direct salt spray during periods of onshore wind, and upper floors of high-rise towers experience wind-driven rain pressures that exceed ground-level conditions by substantial margins. The parking structures serving downtown buildings endure concentrated salt exposure from vehicles that travel the Pinellas Bayway and Gulf boulevard roadways. Waterproofing specifications for these properties must account for salt fog exposure, elevated wind pressures, and the thermal cycling that occurs on south- and west-facing surfaces exposed to the full force of afternoon sun.
              </p>
              <p className="mb-6">
                The established residential communities of Shore Acres, Coquina Key, Snell Isle, and the neighborhoods surrounding Coffee Pot Bayou present waterproofing challenges driven primarily by proximity to open water and the high water table. Foundation waterproofing is critical in these low-lying areas where the water table can reach within two feet of grade during wet season. Buildings that were constructed without modern foundation waterproofing frequently experience efflorescence, mold growth, and structural degradation at grade-level walls and slabs. Retrofitting waterproofing on existing foundations requires different techniques than new construction, often involving negative-side crystalline systems or interior drainage approaches when exterior access is limited.
              </p>
              <p>
                The Gateway and Carillon business corridor contains commercial office buildings, retail centers, and newer residential developments that require proactive waterproofing maintenance to prevent the premature deterioration that the salt air environment causes. While newer buildings benefit from improved construction standards, the waterproofing systems installed during original construction still require regular inspection and maintenance in St. Petersburg's aggressive climate. Sealant joints, through-wall flashings, and rooftop equipment penetrations are common failure points that FCS addresses through systematic inspection and preventive maintenance programs that extend waterproofing system life and avoid the costly remedial repairs that result from deferred maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            St. Petersburg Exterior Waterproofing Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            A systematic approach from diagnostics through warranty, calibrated for the peninsula's demanding moisture environment.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Building Assessment and Diagnostics",
                description: "We survey the building's waterproofing conditions using visual inspection, infrared thermography for moisture detection, adhesion testing of existing coatings, and water testing at suspect locations. For below-grade work, we evaluate water table conditions and hydrostatic pressure. The assessment identifies failure points, deterioration patterns, and the exposure conditions that the new waterproofing system must address.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "System Design and Specification",
                description: "Based on assessment findings, we develop waterproofing specifications that address the specific conditions of the building's location on the peninsula. Product selections account for salt exposure intensity, UV levels, hydrostatic pressure, substrate type, and expected traffic loads. We prepare detail drawings for transitions, terminations, and penetrations that are the most common failure points in coastal waterproofing installations.",
                icon: Building2,
              },
              {
                step: "03",
                title: "Surface Preparation",
                description: "Proper surface preparation determines waterproofing adhesion and longevity. We remove failed existing coatings, repair concrete defects, treat exposed reinforcing steel, remove salt deposits from substrates, and profile surfaces to manufacturer specifications. In St. Petersburg's salt environment, substrate preparation is particularly critical because chloride contamination on the surface can prevent proper membrane adhesion.",
                icon: HardHat,
              },
              {
                step: "04",
                title: "Waterproofing Installation",
                description: "Certified applicators install waterproofing systems following manufacturer specifications for primers, membranes, flashings, and protection courses. We monitor weather conditions during application because temperature, humidity, and dew point affect membrane performance, particularly important in St. Petersburg's variable afternoon weather patterns. Quality control includes wet film thickness checks and adhesion testing at specified intervals.",
                icon: Briefcase,
              },
              {
                step: "05",
                title: "Testing, Documentation, and Warranty",
                description: "Flood testing on horizontal surfaces, adhesion pull testing, and visual inspection verify installation quality before protection courses or finishes are applied. We compile comprehensive documentation including material certifications, test results, application conditions, and photographs that support warranty claims and provide a maintenance baseline. Our 10-year workmanship warranty and manufacturer material warranties provide long-term protection.",
                icon: Award,
              },
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
        title="St. Petersburg Exterior Waterproofing FAQ"
        description="Common questions about exterior waterproofing for commercial and residential buildings in St. Petersburg, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="St. Petersburg" currentService="exterior-waterproofing" currentServiceName="Exterior Waterproofing" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Protect Your St. Petersburg Property from Water Intrusion
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to assess your building's waterproofing conditions and develop a protection strategy engineered for the peninsula's demanding coastal environment. Complimentary assessments for commercial and condominium properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request Waterproofing Assessment
            </Link>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all">
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-300">
              <span>License {BUSINESS_INFO.licenseNumber}</span>
              <span>10-Year Warranty</span>
              <span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
              <span>Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
