import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, FileCheck, HardHat, Briefcase, Home } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/luxury-custom-homes-clearwater/' },
  title: "Luxury Custom Homes Clearwater | Waterfront",
  description: "Luxury custom home construction in Clearwater by Florida Construction Specialists. Island Estates waterfront, Belleair enclave, coastal design.",
  openGraph: {
    title: "Luxury Custom Homes Clearwater | Waterfront",
    description: "Luxury custom home construction in Clearwater by Florida Construction Specialists. Island Estates waterfront, Belleair enclave, coastal design.",
    url: "https://floridaconstructionspecialists.com/luxury-custom-homes-clearwater/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "What makes Island Estates one of Clearwater's premier custom home locations?",
    answer: "Island Estates occupies a series of man-made islands in Clearwater Harbor, connected to the Clearwater Beach barrier island by bridge. The neighborhood offers waterfront homesites with protected harbor views, deep-water docks for sailboats and larger vessels, and proximity to both Clearwater Beach and mainland amenities. Homes on Island Estates benefit from the waterfront setting while having somewhat more protection from direct Gulf wave action than beach-front properties, though they still require full coastal construction specifications. The combination of water access, beach proximity, and established residential character makes Island Estates one of the most desirable custom home locations in the Tampa Bay area."
  },
  {
    question: "How does building a custom home near Belleair differ from other Clearwater locations?",
    answer: "Belleair is an incorporated town adjacent to southern Clearwater with its own building department, zoning codes, and architectural standards separate from the City of Clearwater. The community is known for its large-lot residential properties, mature tree canopy, and proximity to the Belleair Country Club. Custom home construction in Belleair operates under the Town of Belleair's permitting process, which may have different setback requirements, height restrictions, and design review processes than Clearwater proper. Belleair's affluent residential character establishes expectations for construction quality, design sophistication, and landscape integration that we incorporate into every custom home project in the area."
  },
  {
    question: "What coastal construction requirements apply to Clearwater waterfront custom homes?",
    answer: "Waterfront custom homes in Clearwater must meet Florida Building Code requirements for their specific wind zone and flood zone classification. Properties on Island Estates, along the Intracoastal Waterway, or on Clearwater Harbor typically fall within AE or VE flood zones requiring elevated construction above the base flood elevation. Wind speed design requirements for Clearwater waterfront properties range from 130 to 150 mph depending on exact location and exposure. Beyond code minimums, we recommend marine-grade fasteners throughout, corrosion-resistant structural connections, impact-rated glazing on all openings, and waterproofing systems engineered for continuous salt spray exposure. These specifications protect the significant investment custom homeowners make in Clearwater waterfront properties."
  },
  {
    question: "Can FCS design and build a custom home with a private dock in Clearwater?",
    answer: "Yes, we handle custom home construction that integrates private dock facilities on Clearwater waterfront properties. Dock construction along Clearwater Harbor and the Intracoastal Waterway requires permits from multiple agencies including the City of Clearwater, the Florida Department of Environmental Protection, the Army Corps of Engineers, and potentially Pinellas County depending on the specific location. We coordinate the dock permitting process concurrently with the home construction permits to align construction timelines. Dock design considerations include water depth, seawall condition, vessel size accommodation, and the aesthetic integration of dock structures with the home's architectural design."
  },
  {
    question: "What architectural styles are popular for luxury custom homes in Clearwater?",
    answer: "Clearwater's luxury custom home market favors architectural styles that embrace the coastal setting. Contemporary coastal designs with clean lines, expansive glass, and indoor-outdoor living spaces are increasingly popular, particularly on Island Estates where water views drive the design program. Mediterranean and Tuscan-influenced designs remain strong in the Belleair area, where they complement the neighborhood's established architectural character. Florida Vernacular designs that reference traditional Gulf Coast building forms with modern performance are popular on harbor-front properties. Regardless of style, Clearwater custom homes emphasize outdoor living with lanais, pool courtyards, summer kitchens, and covered terraces that take advantage of the mild climate and water proximity."
  },
  {
    question: "How long does it take to build a custom home in Clearwater?",
    answer: "Custom home construction timelines in Clearwater typically range from 12 to 18 months for most luxury residences, with larger or more complex projects extending to 20 to 24 months. The Clearwater permitting process adds 6 to 12 weeks before construction begins, depending on the project's complexity and whether any variances or special approvals are required. Waterfront properties may require additional time for concurrent dock permitting and seawall work. We develop detailed construction schedules that account for Clearwater's rainy season, coordinate marine-related work with tidal conditions, and sequence exterior envelope completion before the most weather-sensitive interior finish work begins."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Luxury Custom Homes", href: "/luxury-custom-homes/" },
  { name: "Clearwater", href: "/luxury-custom-homes-clearwater/" },
];

export default function LuxuryCustomHomesClearwaterPage() {
  return (
    <>
      <LocalBusinessSchema city="Clearwater" service="Luxury Custom Homes" />
      <ServiceSchema
        serviceName="Luxury Custom Homes"
        serviceDescription="Luxury custom home construction in Clearwater, FL. Island Estates waterfront, Belleair luxury, coastal design, private docks. Licensed CBC1262722, 40+ years experience."
        city="Clearwater"
        minPrice="500000"
        serviceCategories={["Waterfront Custom Homes", "Coastal Design-Build", "Luxury Renovation", "Outdoor Living Construction", "Dock Integration"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/tampa-luxury-custom-home-construction/tampa-luxury-custom-home-construction-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Clearwater, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Luxury Custom Homes in Clearwater, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Clearwater offers some of Tampa Bay's most coveted settings for luxury custom home construction. From the waterfront homesites of Island Estates to the gracious lots of Belleair, from harbor-front properties along the Intracoastal Waterway to established neighborhoods with Gulf access, Florida Construction Specialists builds custom homes that capture the Clearwater coastal lifestyle while meeting the demanding construction requirements of waterfront living.
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
                Schedule a Design Consultation
              </Link>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-secondary flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Clearwater Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Clearwater's Luxury Home Market Combines Waterfront Living with Coastal Character
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Clearwater's luxury residential market is defined by water. Unlike inland markets where views and acreage drive premium pricing, Clearwater's most desirable custom home locations are those with direct water access, whether on the harbor, the Intracoastal Waterway, or the interconnected canal systems that thread through Island Estates and adjacent neighborhoods. This water orientation shapes everything about luxury home design and construction in Clearwater, from the foundation systems required for waterfront building to the outdoor living spaces that frame harbor sunsets to the dock facilities that accommodate the boating lifestyle.
              </p>
              <p className="mb-6">
                Island Estates, a collection of man-made islands in Clearwater Harbor, represents the most concentrated luxury waterfront market in the Clearwater area. Homes here enjoy protected harbor water, deep-water access for serious boating, and the unique island community experience of being surrounded by water while remaining minutes from both Clearwater Beach and mainland services. Custom home construction on Island Estates requires understanding of the island's specific soil conditions, the relationship between home elevation and flood zone requirements, and the integration of dock and seawall construction with the overall project timeline.
              </p>
              <p className="mb-6">
                Belleair, the incorporated town bordering Clearwater's southern edge, offers a distinctly different luxury market. Known for its large residential lots, established tree canopy, and the Belleair Country Club, Belleair attracts custom home buyers who prefer estate-scale properties in a manicured community setting. Custom construction here operates under Belleair's own building department and design standards, which differ from the City of Clearwater's requirements. The town's residential character emphasizes quality construction and architectural distinction.
              </p>
              <p>
                Florida Construction Specialists brings the structural engineering capability, coastal construction expertise, and project management capacity that Clearwater's luxury custom home market demands. Our experience as a prime general contractor on large commercial projects translates directly to the construction management, subcontractor coordination, and quality control expectations of luxury residential clients who are accustomed to institutional-quality execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/custom-home-1/custom-home-1-display.webp"
        alt="Luxury custom home construction in Clearwater's waterfront neighborhoods"
        title="Clearwater Luxury Custom Homes"
        subtitle="Island Estates waterfront, Belleair estates, and harbor-front residences built to coastal standards"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Custom Home Construction for Clearwater's Premier Neighborhoods
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            From waterfront design-build to estate renovation, we deliver luxury residential construction that meets Clearwater's coastal demands.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Waterfront Design-Build",
                description: "Complete custom home construction on Clearwater waterfront properties. Site-specific foundation design, coastal-rated structural systems, impact-resistant building envelopes, and water-oriented floor plans that maximize harbor and Gulf views from Island Estates, Intracoastal, and harbor-front homesites."
              },
              {
                icon: Building2,
                title: "Estate-Scale Construction",
                description: "Large-scale custom homes in Belleair and Clearwater's established luxury neighborhoods. Multi-level residences, guest houses, detached garages, pool complexes, and landscape structures built to the architectural standards and community expectations of each neighborhood."
              },
              {
                icon: Shield,
                title: "Coastal Structural Engineering",
                description: "In-house engineering capability for Clearwater's demanding waterfront construction requirements. Elevated foundation systems for flood zone compliance, reinforced concrete and steel framing for wind loads up to 150 mph, and marine-grade material specifications that protect against salt air corrosion."
              },
              {
                icon: HardHat,
                title: "Outdoor Living Construction",
                description: "Expansive lanais, covered terraces, summer kitchens, pool and spa installations, screen enclosures, and landscape hardscaping designed for Clearwater's year-round outdoor lifestyle. Waterfront outdoor spaces with dock access, seawall integration, and wind-resistant design for exposed harbor locations."
              },
              {
                icon: Briefcase,
                title: "Dock and Marine Integration",
                description: "Coordination of private dock construction with home building timelines. Multi-agency permitting through City of Clearwater, FDEP, Army Corps of Engineers, and Pinellas County. Seawall assessment and replacement, boat lift installation, and aesthetic integration of marine facilities with the home's architecture."
              },
              {
                icon: FileCheck,
                title: "Luxury Renovation and Addition",
                description: "Major renovation and expansion of existing Clearwater luxury homes. Kitchen and bath redesign, wing additions, second-story additions with structural reinforcement, and whole-home modernization that brings older luxury properties to current performance and lifestyle standards."
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
              Building Luxury Homes in Clearwater's Coastal Environment
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Luxury custom home construction in Clearwater demands more than aesthetic excellence. Every waterfront home must perform as an engineered system designed to resist the Gulf's salt environment, withstand hurricane-force winds, comply with flood zone elevation requirements, and maintain its beauty and functionality for decades in one of Florida's most demanding coastal climates.
              </p>
              <p className="mb-6">
                The <a href="https://www.clearwater-fl.com/gov/depts/pwa/ds/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of Clearwater Development Services Department</a> manages the permitting process for custom home construction within city limits. Waterfront properties require additional review for flood zone compliance, seawall condition, and environmental setbacks. Island Estates properties must demonstrate compliance with the island's specific development standards. Belleair properties go through the Town of Belleair's separate building department, which maintains its own review process and community standards.
              </p>
              <p className="mb-6">
                Material selection for Clearwater luxury homes must balance aesthetic preferences with coastal durability. Exterior cladding systems, whether stucco, stone, or composite materials, must resist salt air degradation. Window and door systems require impact ratings that may exceed standard coastal requirements based on the property's specific exposure. Roofing materials must withstand sustained high winds while meeting the architectural vision. Pool and outdoor living materials must resist the dual effects of chlorine and salt air. We guide clients through material selection with specific knowledge of how products perform in Clearwater's microclimate.
              </p>
              <p>
                The neighborhoods where we build Clearwater luxury homes each have distinct characteristics. Island Estates waterfront lots are typically narrow with water frontage on one or both sides, requiring vertical design solutions and careful site utilization. Harbor Oaks properties offer larger lots with mature landscaping that must be preserved during construction. Belleair estates provide generous setbacks and community expectations for refined architecture. Clearwater Beach waterfront lots, where available, present the most demanding construction conditions with direct Gulf exposure and barrier island flood zone requirements. We adapt our construction approach to each neighborhood's specific conditions and character.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Clearwater Custom Home Construction Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            A structured process for luxury home construction designed for Clearwater's waterfront and coastal environments.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Site Evaluation and Design Development",
                description: "Thorough assessment of your Clearwater homesite including flood zone, soil conditions, waterfront exposure, and view orientation. We coordinate with your architect or provide design-build services, ensuring the home design accounts for coastal construction requirements, dock integration, and outdoor living potential from the earliest design phases.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "Pre-Construction and Value Engineering",
                description: "Detailed cost estimation, material specification, and construction scheduling for your Clearwater custom home. We identify opportunities to optimize the budget through value engineering while maintaining the design vision and coastal performance standards. Subcontractor selection focuses on crews with Clearwater waterfront experience.",
                icon: Building2,
              },
              {
                step: "03",
                title: "Permitting",
                description: "Complete permit management through the City of Clearwater or Town of Belleair, including site plan review, building permits, and concurrent dock or seawall permits where applicable. For waterfront properties, we coordinate with FDEP, Army Corps, and Pinellas County for marine-related approvals.",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Construction",
                description: "On-site superintendent manages daily construction with experienced Clearwater-area crews. Foundation and structural work proceeds first to establish weather protection, followed by mechanical systems, interior finishes, outdoor living construction, and landscape installation. Regular client updates and site meetings ensure the home meets your vision at every stage.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Completion and Transition",
                description: "Comprehensive punch list, final inspections, Certificate of Occupancy, and warranty orientation. We provide a complete owner's manual covering all building systems, maintenance schedules specific to Clearwater's coastal environment, and warranty documentation. Your custom home is delivered ready for immediate enjoyment.",
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
        title="Clearwater Luxury Custom Homes FAQ"
        description="Common questions about luxury custom home construction in Clearwater, Florida."
      />

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <RelatedServices city="Clearwater" currentService="luxury-custom-homes" />
            <NearbyLocations currentCity="Clearwater" service="luxury-custom-homes" serviceName="Luxury Custom Homes" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Build Your Dream Home in Clearwater
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your custom home vision. Whether on Island Estates, in Belleair, or along Clearwater's harbor, we bring the coastal expertise and construction excellence your luxury home deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Design Consultation
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
              <span>Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
