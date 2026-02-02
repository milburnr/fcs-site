import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, MapPin, Droplets, TreeDeciduous, Car, CheckCircle, Compass } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Efficient Site Planning for Commercial Construction in Florida",
  description: "Master site planning for Florida commercial construction. Expert guidance on drainage, utilities, parking, permitting, and environmental considerations for Tampa Bay projects.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Efficient Site Planning for Commercial Construction", href: "/efficient-site-planning-for-commercial-construction-in-florida/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/commercial-construction-stages-in-florida/", label: "Construction Stages" },
  { href: "/commercial-construction-regulations-in-tampa/", label: "Regulations" },
  { href: "/tampa-commercial-construction-costs/", label: "Construction Costs" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const sitePlanningElements = [
  {
    icon: Compass,
    title: "Building Placement & Orientation",
    description: "Strategic positioning for access, visibility, energy efficiency, and future expansion possibilities.",
  },
  {
    icon: Droplets,
    title: "Stormwater Management",
    description: "Florida-compliant drainage systems that meet SWFWMD requirements and prevent flooding issues.",
  },
  {
    icon: Car,
    title: "Parking & Circulation",
    description: "Code-compliant parking layouts with efficient traffic flow for customers, employees, and deliveries.",
  },
  {
    icon: TreeDeciduous,
    title: "Landscaping & Buffers",
    description: "Florida-friendly plantings that meet code requirements while enhancing property aesthetics.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Efficient Site Planning for Commercial Construction in Florida"
        description="Master site planning for Florida commercial construction with expert guidance on drainage, utilities, and permitting."
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Commercial site planning in Florida"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Efficient Site Planning for Commercial Construction in Florida
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Expert strategies for site layout, drainage, utilities, and permitting that maximize your property's potential while meeting Florida's unique requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-xl text-gray-600 mb-6">
              Effective site planning lays the foundation for successful commercial construction in Florida. How you position buildings, manage stormwater, route utilities, organize parking, and address environmental requirements affects not only construction cost and timeline but also long-term property functionality and value.
            </p>
            <p className="text-gray-600 mb-6">
              Florida's flat terrain, high water table, sandy soil, and stringent environmental regulations create unique site planning challenges. Add local zoning requirements, impact fees, and utility coordination, and the complexity of commercial site development becomes clear. Early planning with experienced professionals helps navigate these challenges efficiently.
            </p>
            <p className="text-gray-600 mb-8">
              Florida Construction Specialists has developed commercial sites throughout Tampa Bay for over two decades. This guide shares our insights on efficient site planning—the strategies that reduce costs, accelerate schedules, and create better-functioning commercial properties.
            </p>
          </div>
        </div>
      </section>

      {/* Site Planning Elements Grid */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-12 font-heading">
            Key Site Planning Elements
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sitePlanningElements.map((element, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-brand-green/10 rounded-full flex items-center justify-center">
                    <element.icon className="w-7 h-7 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green-dark font-heading">{element.title}</h3>
                </div>
                <p className="text-gray-600">{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Site Selection and Due Diligence
            </h2>
            <p className="text-gray-600 mb-6">
              Efficient site planning begins before you own the property. Thorough due diligence identifies constraints and opportunities that affect development potential. Early discovery of site issues enables informed purchase decisions and realistic project planning.
            </p>
            <p className="text-gray-600 mb-6">
              Essential due diligence for Florida commercial sites includes geotechnical investigation to understand soil conditions, water table depth, and foundation requirements; environmental assessment identifying wetlands, contamination, and protected species; survey and title work confirming boundaries, easements, and encroachments; utility availability verifying capacity and connection costs for water, sewer, power, and communications; flood zone determination establishing base flood elevation and construction requirements; and zoning analysis confirming permitted uses, setbacks, height limits, and parking requirements.
            </p>
            <p className="text-gray-600 mb-8">
              Many site issues can be addressed but at a cost. Knowing these costs before purchase enables accurate project budgeting and potentially informs purchase price negotiations.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Stormwater Management: Florida's Critical Challenge
            </h2>
            <p className="text-gray-600 mb-6">
              Stormwater management often represents the largest site development cost for Florida commercial projects. The combination of flat terrain, high water table, heavy seasonal rainfall, and stringent regulations creates complex engineering challenges.
            </p>
            <p className="text-gray-600 mb-6">
              Florida requires pre-development runoff patterns to be maintained post-development—you cannot simply shed water onto adjacent properties. Commercial sites must retain or detain stormwater, typically requiring retention ponds, underground systems, or pervious surfaces. The Southwest Florida Water Management District (SWFWMD) regulates stormwater for most Tampa Bay projects.
            </p>
            <p className="text-gray-600 mb-8">
              Efficient stormwater design integrates retention areas into usable site features—parking islands, landscaped buffers, and amenity areas. Underground detention can reduce surface area requirements but at higher construction cost. Early coordination between civil engineers and architects optimizes the balance between stormwater requirements and buildable area.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Building Placement Strategy
            </h2>
            <p className="text-gray-600 mb-6">
              Optimal building placement balances multiple factors: setback requirements, parking efficiency, visibility, access, future expansion, and construction economics. In Florida, building orientation also significantly affects energy performance.
            </p>
            <p className="text-gray-600 mb-6">
              East-west building orientation minimizes solar heat gain on the largest wall surfaces, reducing cooling costs. Locating parking to the south shields the building from the most intense sun exposure. These energy-efficient orientations should be balanced against visibility, access, and site-specific constraints.
            </p>
            <p className="text-gray-600 mb-8">
              When future expansion is anticipated, initial building placement should preserve options for additions, additional parking, or outparcels. Utility and fire protection systems should be sized or positioned to accommodate expansion without major rework.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Parking and Circulation Design
            </h2>
            <p className="text-gray-600 mb-6">
              Parking requirements consume significant site area for most commercial developments. Florida jurisdictions specify minimum parking ratios by use type—typically 1 space per 200-300 SF for office, 1 per 150-200 SF for retail, and higher ratios for restaurants and medical facilities.
            </p>
            <p className="text-gray-600 mb-6">
              Efficient parking design maximizes spaces per acre of paved area. Standard 90-degree parking with two-way drive aisles typically provides the best space efficiency. Angled parking reduces aisle width requirements but yields fewer spaces per area. One-way circulation can work in some configurations but may create wayfinding confusion.
            </p>
            <p className="text-gray-600 mb-8">
              Circulation design should accommodate delivery vehicles, fire apparatus, and refuse collection without conflicting with customer and employee parking. Loading areas should be screened from primary building entries and adjacent properties. ADA-compliant accessible parking must be located on the shortest accessible route to building entries.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Utility Coordination
            </h2>
            <p className="text-gray-600 mb-6">
              Utility planning significantly affects both construction budget and schedule. Early coordination with utility providers identifies capacity limitations, connection costs, and required infrastructure extensions.
            </p>
            <p className="text-gray-600 mb-6">
              Water and sewer availability varies significantly across Tampa Bay. Properties near existing mains typically incur modest connection costs. Sites requiring main extensions can face costs of $100,000 or more plus delays for design and permitting. Some areas may require on-site water storage or private lift stations.
            </p>
            <p className="text-gray-600 mb-8">
              Electrical service for commercial buildings typically requires coordination with the utility provider 6+ months before construction. Transformer locations, service entrance routing, and capacity requirements should be established during site planning. For larger developments, utility duct banks and electrical distribution infrastructure can represent significant site work costs.
            </p>
          </div>
        </div>
      </section>

      {/* Site Development Costs */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Typical Site Development Costs in Tampa Bay
            </h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Site Work Element</th>
                    <th className="px-6 py-4 text-left">Typical Cost Range</th>
                    <th className="px-6 py-4 text-left">Key Factors</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium">Earthwork/Grading</td>
                    <td className="px-6 py-4 text-gray-600">$2-8/SF site</td>
                    <td className="px-6 py-4 text-gray-600">Existing grade, fill requirements</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Stormwater System</td>
                    <td className="px-6 py-4 text-gray-600">$3-12/SF site</td>
                    <td className="px-6 py-4 text-gray-600">Pond vs. underground, soil conditions</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium">Paving (Parking/Drives)</td>
                    <td className="px-6 py-4 text-gray-600">$4-8/SF paved</td>
                    <td className="px-6 py-4 text-gray-600">Asphalt vs. concrete, base conditions</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Water/Sewer</td>
                    <td className="px-6 py-4 text-gray-600">$25,000-150,000+</td>
                    <td className="px-6 py-4 text-gray-600">Distance to mains, capacity</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium">Landscaping</td>
                    <td className="px-6 py-4 text-gray-600">$3-10/SF landscape</td>
                    <td className="px-6 py-4 text-gray-600">Code requirements, design level</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Site Lighting</td>
                    <td className="px-6 py-4 text-gray-600">$3,000-8,000/pole</td>
                    <td className="px-6 py-4 text-gray-600">Pole height, fixture type, spacing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Costs reflect 2024 Tampa Bay market conditions. Actual costs vary significantly based on specific site conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Considerations */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Environmental Considerations
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's environmental regulations significantly affect commercial site development. Early environmental assessment identifies constraints that may limit development options or require mitigation measures.
            </p>
            <p className="text-gray-600 mb-6">
              Wetlands on or adjacent to commercial sites require careful delineation and usually trigger permitting requirements. Development within wetlands is generally prohibited, though buffers and setbacks vary by wetland quality and local regulations. Wetland mitigation through preservation, creation, or mitigation bank credits may be required for impacts.
            </p>
            <p className="text-gray-600 mb-8">
              Protected species surveys may be required depending on habitat characteristics. Gopher tortoises, common in Florida, require relocation permits before land clearing. Eagles, scrub jays, and other protected species have specific setback and timing requirements. Early surveys enable project planning that accommodates environmental requirements without costly delays.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Permitting Strategy
            </h2>
            <p className="text-gray-600 mb-6">
              Commercial site development in Florida requires multiple permits from various agencies. Strategic permit sequencing minimizes delays and enables early construction starts.
            </p>
            <p className="text-gray-600 mb-6">
              Site development permits from local jurisdictions authorize clearing, grading, and infrastructure construction. These permits may be obtained before building permits, enabling site work to proceed while building design continues. Environmental Resource Permits from SWFWMD address stormwater and environmental impacts—these typically require 30-90 days for approval and should begin early.
            </p>
            <p className="text-gray-600 mb-8">
              Building permits for the actual structures typically cannot be issued until site permits are approved. However, foundation-only permits may be available in some jurisdictions, enabling foundation construction to begin before complete building permit approval.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">How much of my site can be developed?</h3>
                <p className="text-gray-600">Florida jurisdictions limit impervious coverage (buildings and paving) to 65-85% of site area depending on zoning. Required landscaping, stormwater retention, setbacks, and buffers further reduce buildable area. Actual development capacity depends on specific site conditions and local requirements.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">How long does site permitting take in Tampa?</h3>
                <p className="text-gray-600">Site development permits typically require 6-12 weeks in Tampa Bay jurisdictions. SWFWMD Environmental Resource Permits add 30-90 days. Environmental permits for wetlands or protected species can add months. Early application and complete submittals help minimize delays.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">What are impact fees in Tampa Bay?</h3>
                <p className="text-gray-600">Impact fees fund infrastructure improvements necessitated by new development. Fees vary by jurisdiction and use type. Hillsborough County commercial impact fees range from $2,000-20,000+ depending on building type and size. Water and sewer connection fees add substantial additional costs.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Can I start site work before building design is complete?</h3>
                <p className="text-gray-600">Often yes. Early site work packages can clear, grade, and install infrastructure while building design continues. This approach can compress overall schedule by several months. The site design must be far enough along to obtain site development permits and SWFWMD approval.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">What if my site has wetlands?</h3>
                <p className="text-gray-600">Wetlands limit but don't necessarily prevent development. Options include avoiding wetlands through site layout, minimizing impacts through design, and mitigating unavoidable impacts through preservation, creation, or mitigation bank credits. Early wetland delineation is essential for planning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Explore Related Topics"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Plan Your Site Development
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists' experience with Tampa Bay site development helps you maximize your property's potential while navigating Florida's requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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
