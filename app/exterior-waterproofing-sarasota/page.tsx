import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, FileCheck, HardHat, Briefcase, Droplets } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/exterior-waterproofing-sarasota/' },
  title: "Exterior Waterproofing Sarasota | Building Envelope",
  description: "Exterior waterproofing in Sarasota by Florida Construction Specialists. Building envelope foundation barrier island protection salt spray defense.",
  openGraph: {
    title: "Exterior Waterproofing Sarasota | Building Envelope",
    description: "Exterior waterproofing in Sarasota by Florida Construction Specialists. Building envelope foundation barrier island protection salt spray defense.",
    url: "https://floridaconstructionspecialists.com/exterior-waterproofing-sarasota/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "Why do Sarasota barrier island buildings need specialized waterproofing systems?",
    answer: "Buildings on Siesta Key, Lido Key, Longboat Key, and Bird Key face waterproofing conditions fundamentally different from mainland structures. Constant salt spray from the Gulf of Mexico attacks waterproofing membranes, sealants, and coatings at accelerated rates. Salt crystals form within concrete pores and expand as humidity fluctuates, creating micro-cracking that allows more moisture intrusion. Standard waterproofing products rated for inland use may fail within three to five years on a barrier island, while marine-grade systems specified for direct coastal exposure can provide 15 to 20 years of reliable service. FCS specifies all barrier island waterproofing with materials tested and warranted for salt spray environments."
  },
  {
    question: "How does Hurricane Ian's aftermath affect waterproofing needs for Sarasota buildings?",
    answer: "Hurricane Ian in September 2022 compromised building envelopes across Sarasota through several mechanisms: wind-driven rain penetrated wall assemblies at pressures exceeding original design capacity, storm surge saturated foundations and below-grade structures with salt water, and debris impacts created new penetrations in exterior walls and roofing systems. Many buildings that appeared structurally sound after Ian developed delayed waterproofing failures as salt water dried within wall cavities, leaving salt deposits that continue drawing moisture through hygroscopic action. FCS evaluates buildings for both immediate and latent hurricane-related waterproofing damage."
  },
  {
    question: "What building envelope systems does FCS install for Sarasota high-rises?",
    answer: "For Sarasota's downtown and bayfront high-rise buildings, FCS installs comprehensive building envelope waterproofing including fluid-applied air and moisture barriers, through-wall flashing systems at floor lines and shelf angles, window and curtain wall perimeter sealant replacement, expansion joint treatment with marine-grade sealants, balcony-to-building connection waterproofing, and below-grade foundation membrane systems. Each system is specified for the specific exposure conditions of the building elevation, with Gulf-facing elevations receiving enhanced protection. We coordinate with building engineers to ensure waterproofing integration with the structural and architectural systems."
  },
  {
    question: "How much does exterior waterproofing cost for Sarasota commercial buildings?",
    answer: "Sarasota exterior waterproofing costs vary by application and coastal exposure. Building envelope wall waterproofing typically ranges from $8 to $20 per square foot for barrier island properties, foundation waterproofing from $10 to $28 per square foot, parking deck traffic-bearing coatings from $15 to $35 per square foot, and plaza deck waterproofing from $18 to $40 per square foot. Complete condominium building envelope restoration projects in Sarasota typically range from $200,000 to over $2 million depending on building size, condition, and the number of elevations requiring treatment. Barrier island projects run 15 to 25 percent higher than mainland equivalents due to marine-grade material requirements."
  },
  {
    question: "What waterproofing approach works best for Sarasota's sandy soil foundations?",
    answer: "Sarasota's sandy soils, particularly on the barrier islands, create unique foundation waterproofing challenges. The high permeability of sandy soil means water reaches foundations quickly during heavy rainfall, while tidal influences on the barrier islands cause water table fluctuations that subject foundations to cyclical wetting and drying. FCS designs foundation waterproofing using positive-side sheet membranes where accessible, crystalline waterproofing admixtures for new concrete, and negative-side cementitious coatings for existing structures where exterior access is limited. Drainage systems including perimeter drains and sump systems manage the water that reaches the foundation, preventing hydrostatic pressure buildup against the waterproofing membrane."
  },
  {
    question: "Does FCS provide maintenance programs for Sarasota waterproofing installations?",
    answer: "Yes, FCS provides maintenance programs designed specifically for Sarasota's demanding coastal environment. Annual inspections evaluate sealant condition at expansion joints, window perimeters, and penetrations where salt spray exposure causes accelerated aging. We inspect membrane terminations, flashing conditions, and drainage system function. After hurricane season, we perform supplemental inspections to identify any storm-related waterproofing damage. Maintenance programs include sealant touch-up, membrane repair, and drain cleaning to ensure continuous waterproofing performance. For barrier island properties, these maintenance programs typically extend the waterproofing system's service life by 30 to 50 percent compared to installations without regular maintenance."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Exterior Waterproofing", href: "/commercial/guides/balcony-reconstruction-exterior-waterproofing/" },
  { name: "Sarasota", href: "/exterior-waterproofing-sarasota/" },
];

export default function ExteriorWaterproofingSarasotaPage() {
  return (
    <>
      <LocalBusinessSchema city="Sarasota" service="Exterior Waterproofing" />
      <ServiceSchema
        serviceName="Exterior Waterproofing"
        serviceDescription="Professional exterior waterproofing services in Sarasota, FL. Building envelope, foundation, parking deck, and plaza waterproofing with marine-grade systems for coastal exposure. Licensed CBC1262722, 40+ years experience."
        city="Sarasota"
        minPrice="50000"
        serviceCategories={["Building Envelope Waterproofing", "Foundation Waterproofing", "Deck Coatings", "Caulking and Sealants", "Drainage Systems"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/FCS-Exterior-Waterproofing/fcs-exterior-waterproofing-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Sarasota, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Exterior Waterproofing in Sarasota, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Sarasota's barrier island condominiums, bayfront high-rises, and Gulf Coast commercial buildings face relentless moisture assault from salt spray, hurricane-driven rain, and subtropical humidity. Florida Construction Specialists protects these structures with marine-grade waterproofing systems engineered for the specific exposure conditions that make Sarasota's coastal environment one of the most demanding in Florida.
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
                <Droplets className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Marine-Grade Systems</span>
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

      {/* Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Sarasota Buildings Demand Premium Waterproofing
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                The Sarasota building stock exists in a convergence of waterproofing challenges that few Florida markets can match. Barrier island condominiums on Siesta Key, Lido Key, and Longboat Key endure direct Gulf of Mexico salt spray that penetrates building envelopes from every direction. Downtown bayfront towers absorb moisture from both Sarasota Bay humidity and wind-driven rain during summer thunderstorms. Even mainland commercial buildings along University Parkway and Fruitville Road experience the elevated humidity and intense UV exposure that degrade waterproofing materials years ahead of their rated service life.
              </p>
              <p className="mb-6">
                The age of Sarasota's building stock compounds the problem. Much of the barrier island construction dates from the 1970s and 1980s building boom, when waterproofing technology was less sophisticated and building codes required less protection than current Florida Building Code standards. These 40 to 55 year-old buildings are simultaneously reaching the end of their original waterproofing service life and facing increasing moisture exposure as climate patterns intensify. Senate Bill 4-D milestone inspections are revealing the extent of water intrusion damage in these aging structures, often finding deterioration that had been hidden within wall cavities and below finished surfaces for years.
              </p>
              <p className="mb-6">
                Hurricane Ian in September 2022 tested every building envelope in Sarasota County and found many lacking. Wind-driven rain at hurricane force penetrated wall assemblies that had been adequate for normal weather, and storm surge on the barrier islands saturated foundations and ground-floor structures with salt water. Buildings that appeared structurally sound after the storm often developed delayed waterproofing failures as trapped salt water migrated through building assemblies, corroding embedded metals and degrading interior finishes. The post-Ian waterproofing demand in Sarasota remains one of the most active construction markets in the region.
              </p>
              <p>
                Florida Construction Specialists approaches Sarasota waterproofing with the understanding that each building faces a unique combination of exposure, age, construction type, and damage history. We evaluate every project individually, specify materials rated for the actual conditions rather than generic coastal ratings, and install systems with the quality control protocols that premium Sarasota properties demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/fcs-commercial-exterior-waterproofing/fcs-commercial-exterior-waterproofing-display.webp"
        alt="Commercial exterior waterproofing application on Sarasota building"
        title="Protecting Sarasota's Building Envelopes"
        subtitle="Marine-grade waterproofing systems engineered for Gulf Coast salt spray and hurricane exposure"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Exterior Waterproofing Services for Sarasota Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Comprehensive waterproofing solutions for every component of the building envelope in Sarasota's demanding coastal environment.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Building Envelope Systems",
                description: "Complete above-grade waterproofing including fluid-applied air barriers, through-wall flashing, window and curtain wall perimeter sealing, and expansion joint treatment. Gulf-facing elevations receive enhanced protection with redundant moisture management layers designed for direct salt spray and wind-driven rain at hurricane pressures."
              },
              {
                icon: Droplets,
                title: "Foundation Waterproofing",
                description: "Positive-side and negative-side foundation waterproofing engineered for Sarasota's sandy soils and tidal water table fluctuations. Sheet membrane systems, crystalline waterproofing, and cementitious coatings combined with perimeter drainage to prevent hydrostatic pressure buildup against below-grade structures on the barrier islands."
              },
              {
                icon: HardHat,
                title: "Parking Deck Coatings",
                description: "Traffic-bearing waterproofing membranes for parking structures that prevent water and chloride migration to structural concrete below. Polyurethane and epoxy-based systems with aggregate-broadcast wearing surfaces provide both waterproofing and slip resistance. Critical for Sarasota condo parking structures exposed to salt-laden vehicle traffic."
              },
              {
                icon: Shield,
                title: "Plaza and Terrace Waterproofing",
                description: "Below-tile and below-paver waterproofing for rooftop terraces, pool decks, and elevated plazas common in Sarasota's luxury condominiums. Hot-applied rubberized asphalt, cold-applied sheet membranes, and liquid systems with drainage composites to manage the 55 inches of annual rainfall these horizontal surfaces collect."
              },
              {
                icon: Briefcase,
                title: "Joint Sealant Programs",
                description: "Systematic replacement of deteriorated sealants at expansion joints, control joints, window perimeters, and building penetrations. Salt spray degrades even high-quality sealants faster than expected. FCS evaluates all building joints, prioritizes based on water intrusion risk, and installs marine-grade sealants with extended UV and salt resistance."
              },
              {
                icon: FileCheck,
                title: "Waterproofing Assessment",
                description: "Non-destructive and invasive evaluation of existing waterproofing systems using infrared thermography, electronic leak detection, adhesion testing, and moisture mapping. Comprehensive reports identify active leaks, at-risk areas, and remaining waterproofing service life to help Sarasota property owners plan capital improvements efficiently."
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

      {/* Local Expertise */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Sarasota Waterproofing: Coastal Knowledge That Matters
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Waterproofing a building in Sarasota is not the same as waterproofing a building in Orlando or Jacksonville. The Gulf Coast environment imposes conditions that generic waterproofing specifications simply do not address. Salt spray concentrations on the barrier islands can exceed 300 micrograms per square meter per day during onshore wind events. UV intensity in Sarasota regularly exceeds 10 on the UV index scale, degrading exposed membranes and sealants at rates that surpass manufacturer projections based on national averages. These conditions demand material selection and installation practices calibrated to Sarasota's actual environment.
              </p>
              <p className="mb-6">
                The <a href="https://www.sarasotafl.gov/government/building-department" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of Sarasota Building Department</a>, Sarasota County Building Services, and the individual barrier island municipalities each have specific requirements for waterproofing work, particularly when it involves structural modifications or changes to the building envelope. Permit requirements vary between jurisdictions and depend on the scope of waterproofing work. FCS maintains relationships with all local building departments and prepares complete permit packages that address each jurisdiction's specific documentation requirements.
              </p>
              <p>
                Sarasota's luxury property market demands waterproofing execution that matches the quality standard these properties represent. Barrier island condo associations expect clean jobsites, minimal disruption to residents and common areas, clear communication about construction schedules and access restrictions, and finished work that meets both functional and aesthetic expectations. Our crews are experienced with the occupied-building protocols and elevated finish standards that Sarasota's premium properties require.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Sarasota Waterproofing Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Systematic execution from evaluation through warranty, with every step calibrated for Gulf Coast conditions.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Building Assessment and Diagnostics",
                description: "Comprehensive evaluation including infrared thermography to locate active moisture, electronic leak detection on membrane systems, adhesion testing of existing coatings, concrete moisture content measurement, and visual inspection of all sealant joints and flashings. Reports identify both active problems and at-risk areas.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "System Design and Material Selection",
                description: "Waterproofing system specification based on the specific exposure conditions of each building elevation and surface. Marine-grade materials selected for Sarasota's salt spray, UV intensity, and hurricane wind-driven rain pressures. Detail drawings for all transitions, terminations, and penetrations where waterproofing failures most commonly occur.",
                icon: Building2,
              },
              {
                step: "03",
                title: "Surface Preparation",
                description: "Substrate preparation including pressure washing to remove salt deposits, concrete crack repair and spall restoration, removal of failed existing waterproofing, and surface profiling to achieve proper membrane adhesion. Salt removal is especially critical for barrier island projects where surface salt contamination will cause premature adhesion failure of new waterproofing.",
                icon: HardHat,
              },
              {
                step: "04",
                title: "Waterproofing Installation",
                description: "Installation of primers, membranes, flashings, sealants, and protection systems per manufacturer specifications and our enhanced coastal protocols. Quality control checks at each phase including adhesion pull tests, membrane thickness verification, and detail inspection at transitions and terminations. Weather monitoring ensures installation during optimal conditions.",
                icon: Briefcase,
              },
              {
                step: "05",
                title: "Testing and Warranty Documentation",
                description: "Post-installation verification including flood testing of horizontal surfaces, electronic leak detection of roofing and deck membranes, adhesion testing of wall systems, and sealant cure verification. Complete warranty documentation package including manufacturer material warranties, FCS workmanship warranty, and maintenance recommendations specific to Sarasota's coastal exposure.",
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
        title="Sarasota Exterior Waterproofing FAQ"
        description="Common questions about exterior waterproofing for commercial and residential buildings in Sarasota, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="Sarasota" currentService="exterior-waterproofing" currentServiceName="Exterior Waterproofing" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Protect Your Sarasota Property from Moisture Intrusion
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your building's waterproofing needs. From barrier island condominiums to downtown commercial buildings, we provide the marine-grade waterproofing systems and Gulf Coast expertise that Sarasota properties require for lasting protection.
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
              <span>Marine-Grade Systems</span>
              <span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
              <span>{BUSINESS_INFO.projectsCompleted}+ Projects Completed</span>
            </div>
          </div>
        </div>
      </section>
    <RelatedArticles pageSlug="exterior-waterproofing-sarasota" />
    </>
  );
}
