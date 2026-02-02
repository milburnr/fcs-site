import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Building2, Ruler, FileText, Users, Award, Clock, Shield, Lightbulb } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Commercial Building Design Services in Tampa | FCS",
  description: "Comprehensive commercial building design services in Tampa Bay. From architectural design to construction planning, we deliver innovative solutions for office, retail, medical, and industrial projects.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Building Design Services in Tampa", href: "/commercial-building-design-services-in-tampa/" },
];

const internalLinks = [
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/bespoke-architectural-design-in-tampa/", label: "Custom Architectural Design" },
  { href: "/commercial-interior-design-in-tampa/", label: "Commercial Interior Design" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const designServices = [
  {
    icon: Building2,
    title: "Architectural Design",
    description: "Complete building design from concept through construction documents, optimized for Florida's climate and codes.",
  },
  {
    icon: Ruler,
    title: "Space Planning",
    description: "Strategic layouts that maximize efficiency, support operations, and create value within your building footprint.",
  },
  {
    icon: FileText,
    title: "Construction Planning",
    description: "Integration of buildability analysis, cost optimization, and schedule development into every design decision.",
  },
  {
    icon: Shield,
    title: "Code Compliance",
    description: "Expert navigation of Florida Building Code, ADA, fire codes, and local Tampa Bay regulations.",
  },
];

const buildingTypes = [
  {
    type: "Office Buildings",
    description: "Modern workplaces designed for productivity, collaboration, and talent attraction in Tampa's competitive market",
    features: ["Flexible floor plates", "Efficient core layouts", "Premium amenity spaces", "LEED-ready design"],
    costRange: "$150-$350/SF",
  },
  {
    type: "Medical Facilities",
    description: "Healthcare environments that optimize patient care while meeting stringent regulatory requirements",
    features: ["Clinical workflow optimization", "Infection control design", "Equipment planning", "Wayfinding systems"],
    costRange: "$250-$500/SF",
  },
  {
    type: "Retail Centers",
    description: "Shopping destinations designed to drive traffic, maximize tenant success, and create community gathering spaces",
    features: ["Visibility optimization", "Flexible tenant spaces", "Parking efficiency", "Outdoor integration"],
    costRange: "$125-$275/SF",
  },
  {
    type: "Industrial/Warehouse",
    description: "Efficient distribution and manufacturing facilities optimized for Tampa Bay's logistics network",
    features: ["Clear height optimization", "Loading efficiency", "Office integration", "Expansion flexibility"],
    costRange: "$75-$175/SF",
  },
];

const designCosts = [
  { phase: "Feasibility Study", percentage: "0.5-1%", description: "Site analysis, zoning review, preliminary budget" },
  { phase: "Conceptual Design", percentage: "1-2%", description: "Massing studies, floor plan options, renderings" },
  { phase: "Schematic Design", percentage: "2-3%", description: "Refined plans, elevations, outline specifications" },
  { phase: "Design Development", percentage: "3-4%", description: "Detailed drawings, MEP coordination, finishes" },
  { phase: "Construction Documents", percentage: "4-6%", description: "Permit-ready drawings, full specifications" },
  { phase: "Total Design Services", percentage: "7-12%", description: "Complete architectural services as % of construction" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Commercial Building Design Services in Tampa"
        description="Comprehensive commercial building design services for Tampa Bay projects."
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Commercial building design services in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Commercial Building Design Services in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Top-tier architectural and construction planning services for Tampa Bay's commercial market. Innovative design solutions that balance aesthetics, function, and constructability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Start Your Design Project
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Architectural Excellence for Tampa Bay Commercial Projects
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                Commercial building design in Tampa Bay requires specialized expertise that most architectural firms simply don't possess. Beyond creating attractive buildings, effective commercial design must address Florida's unique climate challenges, navigate complex regulatory requirements, and deliver spaces that drive business performance—all while remaining constructable within realistic budgets.
              </p>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists brings a distinctive approach to commercial design: our architectural capabilities are fully integrated with construction expertise. This means every design decision is informed by real-world buildability considerations, accurate cost implications, and practical scheduling impacts. There's no gap between what designers envision and what builders can deliver.
              </p>
              <p className="text-gray-600 mb-6">
                Our design team has completed projects across Tampa Bay's diverse commercial landscape—from Class A office towers in downtown Tampa to medical facilities in South Tampa, retail centers in Brandon, and industrial parks near the Port of Tampa. This breadth of experience means we understand what works in each building type and can apply lessons learned across sectors.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you're developing a new commercial building, repositioning an existing property, or planning a major tenant improvement, our integrated design services provide the foundation for project success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Comprehensive Commercial Design Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            From initial concept through construction documents, our design services cover every phase of commercial building development.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Types */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Design Expertise by Building Type
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Each commercial building type has unique design requirements. Our experience spans Tampa Bay's diverse commercial market.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {buildingTypes.map((building, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-brand-green-dark font-heading">{building.type}</h3>
                  <span className="text-brand-green font-semibold text-sm bg-brand-green/10 px-3 py-1 rounded-full">
                    {building.costRange}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{building.description}</p>
                <div className="flex flex-wrap gap-2">
                  {building.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Considerations */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Key Design Considerations for Tampa's Commercial Sector
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Site & Zoning Analysis</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Zoning verification and variance assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Setback, height, and FAR optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Parking requirements and alternatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Stormwater and environmental compliance</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Florida Code Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">High-velocity hurricane zone compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Flood zone design requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Florida Energy Code compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Accessibility and fire/life safety</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Market Positioning</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Design that commands premium rents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Amenities that attract quality tenants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Future flexibility for market changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Sustainability features for ESG compliance</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Construction Integration</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Constructability review at each phase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Real-time cost feedback during design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Schedule optimization through phasing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Value engineering without design compromise</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Commercial Design Services Cost Guide
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Typical design fees as a percentage of construction cost for Tampa Bay commercial projects.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Design Phase</th>
                    <th className="px-6 py-4 text-left font-heading">Typical Fee*</th>
                    <th className="px-6 py-4 text-left font-heading">Includes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {designCosts.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.phase}</td>
                      <td className="px-6 py-4 text-brand-green font-semibold">{row.percentage}</td>
                      <td className="px-6 py-4 text-gray-600">{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              *As percentage of construction cost. Design-build projects may achieve lower total costs through integrated delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Construction Planning Contribution */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              How Construction Planning Enhances Design
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                The separation of design from construction expertise is the fundamental flaw in traditional project delivery. When architects design without builder input, the result is often beautiful drawings that are expensive or difficult to build. Our integrated approach eliminates this disconnect.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6 font-heading">Construction Planning Services During Design</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-brand-gold" />
                    During Conceptual Design
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Preliminary budget validation against program</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Site logistics and access assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">High-level schedule development</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-brand-gold" />
                    During Schematic Design
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Systems comparison (structural, MEP)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Initial value engineering options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Long-lead item identification</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-brand-gold" />
                    During Design Development
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Detailed constructability reviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Subcontractor input on specialty systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">GMP development and refinement</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-brand-gold" />
                    During Construction Documents
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Final coordination and clash detection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Bid package preparation and buyout</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Procurement and early work planning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How long does commercial building design take?
                </h3>
                <p className="text-gray-600">
                  Design timelines vary by project complexity. A typical commercial building (20,000-50,000 SF) requires 4-6 months from concept through permit-ready documents. Larger or more complex projects may take 8-12 months. Design-build delivery can compress these timelines by overlapping design and early construction activities.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  Do you work with outside architects?
                </h3>
                <p className="text-gray-600">
                  Yes. While we have in-house design capabilities, we frequently collaborate with owner-selected architects. Our construction team provides preconstruction services—cost estimating, constructability review, and scheduling—while the architect maintains design leadership. This hybrid approach works well for many projects.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  What permits are required for commercial buildings in Tampa?
                </h3>
                <p className="text-gray-600">
                  Commercial buildings typically require: building permits, site development permits, environmental permits (EPC in Hillsborough County), utility connection permits, and potentially special permits for signage, parking variances, or conditional uses. Permit timelines range from 4-8 weeks for simple projects to 4-6 months for complex developments requiring rezoning.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How do you handle design changes during the project?
                </h3>
                <p className="text-gray-600">
                  Design changes are inevitable. Our design-build approach handles them efficiently by having designers and builders working together. Changes during design are incorporated with immediate cost and schedule feedback. Changes during construction are evaluated quickly with clear options presented to the owner. Our GMP contracts include defined contingencies for managing changes.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  What's included in your feasibility studies?
                </h3>
                <p className="text-gray-600">
                  Our feasibility studies include: site analysis (zoning, utilities, access), preliminary building massing and program fit, order-of-magnitude cost estimates, preliminary schedule, risk assessment, and recommendation on project viability. This analysis typically costs 0.5-1% of projected construction cost and provides the information needed for informed go/no-go decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Related Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Design Your Commercial Building?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project vision and how our integrated design services can bring it to life efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Design Meeting
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
