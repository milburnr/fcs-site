import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, FileCheck, Droplets, Layers, Factory, Home } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/exterior-waterproofing-bradenton/' },
  title: "Exterior Waterproofing Bradenton | Building Envelope",
  description: "Exterior waterproofing in Bradenton by Florida Construction Specialists. Building envelope, foundation, parking deck, waterfront property waterproofing.",
  openGraph: {
    title: "Exterior Waterproofing Bradenton | Building Envelope",
    description: "Exterior waterproofing in Bradenton by Florida Construction Specialists. Building envelope, foundation, parking deck, waterfront property waterproofing.",
    url: "https://floridaconstructionspecialists.com/exterior-waterproofing-bradenton/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "How does Bradenton's position between the Gulf and the Manatee River create unusual waterproofing demands?",
    answer: "Most coastal Florida cities face a single direction of primary marine exposure. Bradenton is different because properties can face salt exposure from the Gulf of Mexico to the west, Tampa Bay to the north, and the Manatee River running through the center of the community. A building in downtown Bradenton near the Riverwalk receives airborne salt from the river and from Tampa Bay, even though it is miles from the Gulf. Anna Maria Island properties face direct Gulf exposure on their west elevations and bay or river exposure on their east elevations. This multi-directional exposure means that waterproofing systems cannot simply be enhanced on one side of a building. Every elevation requires evaluation for its specific exposure conditions, and waterproofing specifications may vary by building face based on the direction and intensity of the nearest moisture and salt source."
  },
  {
    question: "What types of Bradenton buildings most commonly need exterior waterproofing?",
    answer: "The most common exterior waterproofing projects in Bradenton fall into several categories. Waterfront condominiums along Anna Maria Island, the Manatee River, and Palma Sola Bay represent the highest volume, as these buildings face the most aggressive exposure and their waterproofing systems degrade the fastest. Commercial buildings in downtown Bradenton's revitalization area often need waterproofing as part of renovation projects, particularly older masonry buildings that were never designed for the waterproofing standards expected today. Parking structures throughout Manatee County, including those in Lakewood Ranch's Town Center, require traffic-bearing waterproofing on occupied decks and ramp areas. Marina and waterfront commercial facilities in Cortez, along the Manatee River, and on Anna Maria Island need marine-grade waterproofing designed for direct water contact. New construction in flood zones also requires below-grade waterproofing systems designed for the tidal water table fluctuations common in Bradenton."
  },
  {
    question: "How does the Manatee River's tidal influence affect foundation waterproofing in Bradenton?",
    answer: "The Manatee River is a tidal waterway, meaning groundwater levels in properties along its banks and throughout much of central Bradenton fluctuate with the tides. This creates a dynamic hydrostatic pressure environment for foundation waterproofing that is more challenging than static groundwater conditions. During high tide events, particularly king tides that coincide with onshore winds, groundwater can temporarily rise well above typical levels. Storm events compound this when river levels rise from upstream rainfall at the same time that tidal surge pushes water up from Tampa Bay. Foundation waterproofing for riverfront and near-river Bradenton properties must be designed for these peak water table conditions rather than average conditions. We specify positive-side waterproofing systems with drainage boards and proper sump systems, and for properties in the most tide-affected areas, we incorporate crystalline waterproofing additives in the concrete itself as a secondary defense."
  },
  {
    question: "What is the difference between remedial waterproofing and new construction waterproofing in Bradenton?",
    answer: "New construction waterproofing is applied to clean, properly prepared substrate during the construction sequence, allowing optimal material adhesion and integration with the building's drainage systems. Remedial waterproofing, which is what most existing Bradenton buildings require, involves diagnosing the cause of water intrusion in an occupied building and applying waterproofing systems to substrate that may have years of contamination, damage, or previous failed waterproofing attempts. Remedial work typically costs more per square foot because it requires surface preparation to remove existing coatings, cleaning to remove salt deposits and biological growth, repair of substrate damage, and sometimes negative-side application when the positive side is not accessible. In Bradenton, remedial waterproofing projects frequently reveal conditions not visible during initial assessment, particularly salt contamination that has migrated deep into concrete substrates along the river and coast."
  },
  {
    question: "Does FCS waterproof historic buildings in downtown Bradenton and the Village of the Arts?",
    answer: "Yes, and historic building waterproofing requires a different approach than modern construction. Downtown Bradenton's older masonry buildings and Village of the Arts structures from the 1920s through 1940s were built before modern waterproofing systems existed. These buildings rely on wall mass, lime mortar, and natural material breathability to manage moisture. Applying modern impermeable waterproofing directly to historic masonry can trap moisture inside the wall assembly, causing more damage than the waterproofing prevents. For Bradenton's historic buildings, we use breathable waterproofing approaches, including lime-compatible pointing mortars, silane and siloxane penetrating water repellents that allow vapor transmission, and properly designed drainage planes that work with the building's original construction rather than against it. When below-grade waterproofing is needed on historic buildings, we use systems that can be applied to the exterior foundation without disturbing interior historic finishes."
  },
  {
    question: "What warranty does FCS provide for waterproofing in Bradenton's coastal environment?",
    answer: "FCS provides a 10-year workmanship warranty on all exterior waterproofing installations in Bradenton, which covers both materials and labor for any water intrusion resulting from waterproofing system failure. This warranty applies equally to Gulf-front Anna Maria Island properties and to inland Lakewood Ranch buildings. The manufacturer material warranties, which are separate from our workmanship warranty, typically range from 10 to 20 years depending on the specific product system. Because Bradenton's coastal environment is more demanding than the average conditions that manufacturer warranties assume, we install all systems exceeding minimum manufacturer application requirements. We also recommend annual maintenance inspections for waterfront properties and biennial inspections for inland buildings, and we offer maintenance programs that extend the effective life of the waterproofing beyond the warranty period."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Exterior Waterproofing", href: "/commercial/guides/balcony-reconstruction-exterior-waterproofing/" },
  { name: "Bradenton", href: "/exterior-waterproofing-bradenton/" },
];

export default function ExteriorWaterproofingBradentonPage() {
  return (
    <>
      <LocalBusinessSchema city="Bradenton" service="Exterior Waterproofing" />
      <ServiceSchema
        serviceName="Exterior Waterproofing"
        serviceDescription="Exterior waterproofing for Bradenton commercial and residential buildings. Building envelope, foundation, parking deck, waterfront property waterproofing with 10-year warranty. Licensed CBC1262722, 40+ years experience."
        city="Bradenton"
        minPrice="50000"
        serviceCategories={["Building Envelope Waterproofing", "Foundation Waterproofing", "Parking Deck Coatings", "Waterfront Waterproofing", "Below-Grade Systems"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/fcs-exterior-waterproofing/fcs-exterior-waterproofing-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Bradenton & Manatee County</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Exterior Waterproofing in Bradenton, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Bradenton buildings contend with a moisture environment shaped by three water bodies: the Gulf of Mexico, Tampa Bay, and the Manatee River. This tri-directional exposure creates waterproofing demands that differ fundamentally from single-coast locations. Florida Construction Specialists protects Bradenton properties with waterproofing systems engineered for the specific exposure conditions at each building, from Anna Maria Island's direct Gulf assault to the tidal groundwater dynamics along the Manatee River corridor.
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
                <Building2 className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">{BUSINESS_INFO.projectsCompleted}+ Projects</span>
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

      {/* Bradenton Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Three Water Bodies Define Bradenton's Waterproofing Challenge
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Every waterproofing specification begins with understanding the moisture environment. In Bradenton, that environment is shaped by the intersection of the Gulf of Mexico, Tampa Bay, and the Manatee River, creating conditions that are distinct from any single-coast Florida city. The practical consequence for building owners is that waterproofing systems designed for generic coastal conditions may underperform in Bradenton's more complex exposure environment.
              </p>
              <p className="mb-6">
                The Gulf of Mexico dominates waterproofing considerations for Anna Maria Island and western Bradenton. Properties on the barrier island face direct salt spray from Gulf storms, unobstructed wind-driven rain from tropical weather systems, and the most intense UV exposure in the Bradenton area. These conditions degrade exterior waterproofing coatings and sealants faster than manufacturer specifications typically project. Gulf-front buildings require marine-grade waterproofing systems with enhanced UV stabilizers, salt-resistant chemistry, and the flexibility to accommodate the thermal movement that intense sun exposure produces. Below-grade waterproofing on the island must also contend with sandy soils and a salt-influenced water table that creates aggressive conditions for conventional foundation waterproofing.
              </p>
              <p className="mb-6">
                Tampa Bay's influence extends south into Bradenton through salt-laden prevailing winds and the brackish conditions of the upper Manatee River. Properties along the Bradenton Riverwalk, in Palmetto, and in the Cortez fishing village area experience this bay-influenced salt air on a daily basis. The Manatee River itself presents a unique waterproofing variable because it is a tidal waterway. Groundwater levels in properties along the river fluctuate with the tides, creating cyclical hydrostatic pressure on foundation walls and below-grade structures. King tide events, which are becoming more frequent, can temporarily raise groundwater levels well above normal ranges. Foundation waterproofing along the river corridor must account for these peak conditions, not just the average water table height.
              </p>
              <p>
                Even Bradenton's inland areas, including the rapidly developing Lakewood Ranch corridor and the SR-64 commercial zone, face waterproofing challenges that exceed typical inland locations. Manatee County receives over 50 inches of rainfall annually, much of it concentrated in intense summer thunderstorms that can deliver 3 to 5 inches in a single event. Afternoon thunderstorm winds drive rain horizontally into building facades, testing window seals, wall flashing, and exterior cladding joints. High ambient humidity, which routinely exceeds 80 percent during summer months, creates persistent moisture pressure on building envelopes. New construction in Lakewood Ranch's Town Center, mixed-use developments, and multi-story commercial buildings requires waterproofing designed for these subtropical conditions even though the sites are miles from any waterfront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/fcs-exterior-waterproofing/fcs-exterior-waterproofing-display.webp"
        alt="Exterior waterproofing membrane application on a Bradenton building"
        title="Defending Bradenton Buildings Against Moisture"
        subtitle="Marine-grade waterproofing systems for Gulf, river, and inland properties"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Exterior Waterproofing Services for Bradenton's Building Types
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Bradenton's building stock ranges from historic downtown masonry to modern Lakewood Ranch commercial construction. Each building type demands waterproofing approaches matched to its construction method and exposure conditions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Building Envelope Systems",
                description: "Complete exterior wall waterproofing including fluid-applied membranes, sheet membrane systems, and air barrier assemblies. For Bradenton's commercial buildings, we design wall systems that manage both bulk water from wind-driven rain and vapor drive from the high humidity environment. System specifications account for the building's orientation and the specific exposure conditions on each elevation, because a Gulf-facing wall on an Anna Maria Island building requires a fundamentally different approach than an inland-facing wall on a Lakewood Ranch commercial property."
              },
              {
                icon: Layers,
                title: "Foundation and Below-Grade",
                description: "Positive-side and negative-side foundation waterproofing with drainage systems designed for Bradenton's variable water table conditions. Along the Manatee River and in coastal areas, we specify systems rated for tidal groundwater fluctuation and brackish water chemistry. Foundation waterproofing includes membrane application, drainage board installation, sump and dewatering systems where needed, and crystalline waterproofing additives for concrete in the most demanding conditions. Proper foundation waterproofing is critical in Bradenton where many sites have high water tables influenced by the river and bay."
              },
              {
                icon: Factory,
                title: "Waterfront and Marina Properties",
                description: "Specialized waterproofing for Bradenton's waterfront commercial properties including restaurants along the Riverwalk, marina facilities in Cortez, boat storage buildings, and waterfront retail. These structures face direct water contact, splash zone conditions, and the most aggressive salt exposure in the Bradenton area. We use marine-grade epoxy systems, polyurea coatings, and stainless steel flashings designed for the marine environment. Cortez fishing village properties present unique challenges combining waterfront exposure with historic construction."
              },
              {
                icon: Home,
                title: "Parking Deck Waterproofing",
                description: "Traffic-bearing waterproofing for parking structures and occupied decks throughout Bradenton. These systems must withstand vehicle traffic, tire turning forces, and chemical exposure from automotive fluids while preventing water penetration to the structural concrete below. For Bradenton's parking structures, we specify systems with enhanced UV resistance to handle the intense Florida sun that degrades conventional deck coatings. We also design proper slope corrections and drainage systems to handle the volume and intensity of Gulf Coast rainstorms."
              },
              {
                icon: Droplets,
                title: "Remedial Leak Investigation",
                description: "Systematic diagnosis of water intrusion in existing Bradenton buildings. Leaks in the Gulf Coast environment are often not straightforward because moisture can travel significant distances through building assemblies before becoming visible. We use infrared thermal imaging, electronic leak detection, water testing to recreate leak conditions, and visual inspection of concealed building assembly components. Proper diagnosis is essential before remedial waterproofing because applying waterproofing in the wrong location wastes money and may trap moisture in the assembly."
              },
              {
                icon: FileCheck,
                title: "Preventive Maintenance Programs",
                description: "Scheduled inspection and maintenance for existing waterproofing systems on Bradenton buildings. Bradenton's coastal environment degrades waterproofing faster than inland locations, making preventive maintenance more important and more cost-effective than waiting for failure. Our maintenance programs include annual sealant joint inspections, coating condition assessment, drainage system cleaning, and minor repairs that prevent small issues from becoming major waterproofing failures. For waterfront properties, we recommend semi-annual inspections given the accelerated exposure conditions."
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
              Waterproofing Expertise for Bradenton's Unique Conditions
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Exterior waterproofing in Bradenton requires permitting through the appropriate jurisdiction based on the property's location. The <a href="https://www.bradentonfl.gov/217/Building" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of Bradenton Building Division</a> handles permits for projects within city limits, including downtown Riverwalk properties and central Bradenton. The <a href="https://www.mymanatee.org/departments/building_and_development_services" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">Manatee County Building and Development Services</a> covers unincorporated areas including Lakewood Ranch, Cortez, and the SR-64 corridor. Anna Maria Island properties go through their respective municipal building departments. Waterproofing projects involving structural repairs or significant scope may require engineering documentation and formal permits, while maintenance-level applications may fall within permit exemptions.
              </p>
              <p className="mb-6">
                Material selection for Bradenton waterproofing projects requires matching the chemistry and performance characteristics of the waterproofing system to the specific exposure conditions at the building. We work with manufacturers including Tremco, Carlisle, Sika, and Neogard, specifying products from their coastal and marine product lines rather than their standard product lines for Bradenton's most exposed properties. For Anna Maria Island and waterfront buildings, we specify systems that have been tested for salt spray resistance, UV stability at Gulf Coast exposure levels, and adhesion performance under the temperature and humidity ranges that Bradenton buildings actually experience. For inland Lakewood Ranch commercial buildings, standard coastal-grade products are typically appropriate, though even these properties require better-than-average waterproofing due to Bradenton's rainfall intensity and humidity levels.
              </p>
              <p className="mb-6">
                Quality assurance is where waterproofing projects succeed or fail. A membrane system perfectly specified on paper will leak if the substrate preparation is inadequate, the application thickness is insufficient, or the critical transitions at windows, penetrations, and wall-to-roof connections are not properly detailed. We perform adhesion testing throughout the application to verify bond strength. We flood-test horizontal surfaces before protection courses are installed. We document membrane thickness with wet film gauges during application. For critical below-grade waterproofing, we may specify electronic leak detection systems that allow post-installation verification of membrane integrity before backfilling. These quality measures add cost to the application but prevent the far greater cost of failed waterproofing that requires removal and reinstallation.
              </p>
              <p>
                Downtown Bradenton's ongoing revitalization along the Riverwalk corridor creates a steady demand for exterior waterproofing in the context of building renovation and adaptive reuse. Older commercial buildings being converted to mixed-use or restaurant space often need comprehensive waterproofing that was never part of their original construction. The challenge with these projects is performing waterproofing work on buildings that may be partially occupied or adjacent to active businesses. We develop project schedules and application methods that minimize disruption to existing tenants and neighboring businesses, including scheduling noisy preparation work during off-hours and using low-odor waterproofing products where occupied spaces are adjacent to the work area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Bradenton Exterior Waterproofing Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Effective waterproofing in Bradenton's demanding environment requires a methodical process from diagnosis through verification.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Assessment and Diagnostics",
                description: "Comprehensive building survey including visual inspection, infrared thermal imaging to identify moisture in building assemblies, water testing to replicate leak conditions where intrusion is occurring, and substrate evaluation to determine existing conditions. For Bradenton waterfront properties, we include salt contamination testing of concrete substrates because salt deposits can compromise adhesion of new waterproofing systems if not properly addressed during preparation.",
                icon: Droplets,
              },
              {
                step: "02",
                title: "System Design and Specification",
                description: "Selection of waterproofing systems matched to the building's specific exposure conditions, substrate type, and performance requirements. We develop detailed specifications and installation drawings that show every transition, penetration, and termination detail. For Bradenton projects, the specification process includes evaluating whether marine-grade or standard coastal-grade systems are appropriate based on the building's proximity to the Gulf, bay, and river.",
                icon: FileCheck,
              },
              {
                step: "03",
                title: "Surface Preparation",
                description: "Proper substrate preparation is the foundation of waterproofing performance. This includes cleaning to remove contaminants, concrete repair to restore sound substrate, crack injection where structural cracks exist, and surface profiling to achieve the texture required for membrane adhesion. In Bradenton's salt-exposed environment, preparation often includes salt removal processes that go beyond standard cleaning to address chloride deposits that would compromise adhesion.",
                icon: Layers,
              },
              {
                step: "04",
                title: "Waterproofing Application",
                description: "Installation of primers, membranes, flashings, and drainage components following manufacturer specifications and our enhanced coastal application standards. We monitor weather conditions carefully during application because Bradenton's afternoon thunderstorms can interrupt exterior work. Application scheduling accounts for temperature, humidity, and rain probability to ensure each layer of the waterproofing system cures properly under controlled conditions.",
                icon: Shield,
              },
              {
                step: "05",
                title: "Testing and Verification",
                description: "Flood testing of horizontal surfaces, adhesion pull testing of membrane systems, and visual inspection of all critical details including flashings, penetrations, and terminations. For below-grade waterproofing, we may use electronic leak detection to verify membrane integrity before backfilling. Testing documentation becomes part of the project record and supports future maintenance and warranty claims.",
                icon: Building2,
              },
              {
                step: "06",
                title: "Protection and Warranty Documentation",
                description: "Installation of protection courses, drainage boards, backfill, or wear surfaces over the completed waterproofing. Complete project documentation including material certifications, test results, as-built conditions, and maintenance recommendations specific to the building's Bradenton exposure zone. We register manufacturer warranties and provide our 10-year workmanship warranty with maintenance program recommendations.",
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
        title="Bradenton Exterior Waterproofing FAQ"
        description="Common questions about exterior waterproofing for commercial and residential buildings in Bradenton and Manatee County, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="Bradenton" currentService="exterior-waterproofing" currentServiceName="Exterior Waterproofing" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Protect Your Bradenton Property from Moisture
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss exterior waterproofing for your Bradenton building. Whether you are addressing active leaks, planning preventive waterproofing for a new building, or protecting a waterfront property from Bradenton's demanding exposure conditions, we will assess your building and recommend the right system.
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
