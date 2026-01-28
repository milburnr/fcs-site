import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, TrendingUp, Building2, MapPin, DollarSign, Users } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Commercial Real Estate Development | Construction Partner for Developers",
  description: "Expert construction partner for Tampa commercial real estate development. From site analysis through project delivery, Florida Construction Specialists builds the projects that drive Tampa Bay's growth.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Commercial Real Estate Development", href: "/tampa-commercial-real-estate-development/" },
];

const faqs = [
  {
    question: "What types of commercial development projects do you handle?",
    answer: "We partner with developers on the full spectrum of commercial projects: retail centers, office buildings, medical facilities, industrial/warehouse developments, mixed-use projects, hospitality properties, and multi-family residential. Our experience spans ground-up construction, adaptive reuse, and major renovations. Project sizes range from single-tenant buildings to multi-phase developments exceeding $50 million."
  },
  {
    question: "How early should I involve a contractor in the development process?",
    answer: "The earlier, the better. We provide the most value when engaged during site selection and feasibility analysis—before you've committed to a property or design. Early involvement allows us to provide preliminary budgets that inform go/no-go decisions, identify site challenges before they become surprises, suggest value engineering opportunities, and help optimize designs for constructability and cost efficiency."
  },
  {
    question: "Do you offer design-build services for commercial developments?",
    answer: "Yes. Design-build delivery consolidates design and construction responsibility under one contract, giving you a single point of accountability. This approach typically reduces overall timeline by 15-20%, minimizes change orders, and provides guaranteed maximum pricing earlier in the process. We partner with respected architectural firms to deliver complete design-build solutions."
  },
  {
    question: "How do you handle hurricane considerations for new commercial buildings?",
    answer: "Florida Building Code already requires hurricane-resistant construction in our wind zone. We go beyond minimum code by recommending impact-resistant systems, redundant waterproofing, emergency power provisions, and wind-resistant roof systems. For businesses with critical operations, we can design enhanced resilience features that keep facilities operational during and after major storms."
  },
  {
    question: "What financing structures do you work with?",
    answer: "We work with all common commercial development financing structures: conventional construction loans, SBA 504 loans, CMBS financing, private equity, and various public-private partnership arrangements. Our experience with draw processes, lender inspections, and construction loan requirements helps ensure smooth project financing throughout the build."
  }
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/investing-in-commercial-real-estate-construction/", label: "Real Estate Investment" },
  { href: "/enhancing-commercial-property-value/", label: "Enhancing Property Value" },
  { href: "/contact/", label: "Discuss Your Project" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Commercial real estate development in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa Commercial Real Estate Development
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Your construction partner for successful Tampa Bay commercial development. From feasibility analysis through certificate of occupancy, Florida Construction Specialists delivers the expertise that turns real estate vision into profitable reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Discuss Your Project
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

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Tampa Bay is one of America's fastest-growing commercial real estate markets. Population growth, business relocations, and tourism expansion create sustained demand for new retail, office, industrial, medical, and multi-family developments. Successfully capitalizing on these opportunities requires more than just a good site and favorable financing—it requires a construction partner who understands the local market, navigates Florida's regulatory environment efficiently, and delivers projects on time and on budget.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists has partnered with developers, investors, and owner-occupants on commercial real estate projects throughout Tampa Bay for decades. We understand that development success depends on controlling construction costs, maintaining schedules, and delivering quality that supports long-term asset value. Our comprehensive preconstruction services, experienced project management, and deep local knowledge make us the construction partner of choice for commercial development in our market.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa Bay Commercial Real Estate Market Overview
            </h2>

            <p className="text-gray-600 mb-6">
              Tampa Bay's commercial real estate fundamentals remain exceptionally strong. The metropolitan area adds approximately 50,000 new residents annually, driving demand across all property types. Major corporate relocations and expansions—attracted by Florida's business-friendly environment and talent availability—fuel office and industrial absorption. Tourism growth supports hospitality and retail development, while an aging population creates sustained demand for healthcare facilities.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <TrendingUp className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Industrial & Logistics</h3>
                <p className="text-gray-600">
                  E-commerce growth and supply chain reshoring drive unprecedented industrial demand. Tampa Bay's port access, interstate connectivity, and available land make it a prime logistics hub. Vacancy rates remain below 5% with strong rental growth, supporting new speculative and build-to-suit development.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Building2 className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Office Development</h3>
                <p className="text-gray-600">
                  Despite remote work impacts, quality office space in prime locations maintains strong performance. Class A buildings with modern amenities outperform older inventory. Medical office remains particularly strong, driven by healthcare sector expansion and aging demographics.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <MapPin className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Retail & Mixed-Use</h3>
                <p className="text-gray-600">
                  Experiential retail and mixed-use developments thrive as traditional retail adapts. Grocery-anchored centers, restaurant-focused developments, and walkable mixed-use projects capture spending from population growth. Infill locations in established areas command premium rents.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Users className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Multi-Family Residential</h3>
                <p className="text-gray-600">
                  Sustained population growth drives multi-family demand across all price points. New construction focuses on Class A amenitized properties, workforce housing in suburban locations, and urban infill projects. Strong rent growth supports new development economics despite rising construction costs.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Development Partnership Approach
            </h2>

            <p className="text-gray-600 mb-6">
              We engage with development projects differently than traditional contractor relationships. Rather than simply bidding finished plans, we partner early in the development process to add value through feasibility analysis, preconstruction planning, and collaborative project delivery. This approach produces better outcomes for developers—more accurate budgets, faster schedules, fewer surprises, and higher quality results.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Site Feasibility Analysis</h3>
                <p className="text-gray-600">
                  Before committing to a site, developers need realistic cost estimates. We provide preliminary budgets based on site characteristics, planned building type, and current market conditions. Our analysis identifies potential cost drivers—soil conditions, utility availability, access requirements, flood zone status—that inform site selection and pricing negotiations.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Preconstruction Services</h3>
                <p className="text-gray-600">
                  Our preconstruction team works alongside architects and engineers during design development. We provide ongoing cost feedback, constructability reviews, and value engineering recommendations. This collaborative process optimizes designs before construction begins—reducing change orders, controlling costs, and accelerating schedules.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Permitting & Entitlement Support</h3>
                <p className="text-gray-600">
                  Tampa Bay's permitting environment varies significantly by jurisdiction. We navigate City of Tampa, Hillsborough County, Pinellas County, and other local requirements efficiently. Our relationships with plan reviewers and inspectors help move projects through the approval process without unnecessary delays.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Construction Management</h3>
                <p className="text-gray-600">
                  From groundbreaking through certificate of occupancy, our experienced project managers keep developments on track. We coordinate subcontractors, manage schedules, control quality, and communicate transparently throughout construction. Our detailed reporting keeps developers and lenders informed of progress and any issues requiring attention.
                </p>
              </div>
            </div>

            {/* Cost Table */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa Bay Commercial Construction Costs
            </h2>

            <p className="text-gray-600 mb-6">
              Construction costs vary significantly by building type, quality level, and site conditions. The following ranges reflect current Tampa Bay market conditions for quality commercial construction meeting current code requirements:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Building Type</th>
                    <th className="px-6 py-4 text-left">Cost Range/SF</th>
                    <th className="px-6 py-4 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Industrial/Warehouse</td>
                    <td className="px-6 py-4">$85 - $150</td>
                    <td className="px-6 py-4 text-gray-600">Shell only; office build-out additional</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Flex/Light Industrial</td>
                    <td className="px-6 py-4">$120 - $200</td>
                    <td className="px-6 py-4 text-gray-600">With office component</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Retail (Shell)</td>
                    <td className="px-6 py-4">$150 - $250</td>
                    <td className="px-6 py-4 text-gray-600">Tenant finish separate</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Professional Office</td>
                    <td className="px-6 py-4">$200 - $350</td>
                    <td className="px-6 py-4 text-gray-600">Class A finish</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Medical Office</td>
                    <td className="px-6 py-4">$300 - $500</td>
                    <td className="px-6 py-4 text-gray-600">Specialty systems intensive</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Multi-Family (Wood)</td>
                    <td className="px-6 py-4">$175 - $275</td>
                    <td className="px-6 py-4 text-gray-600">Garden-style apartments</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Multi-Family (Concrete)</td>
                    <td className="px-6 py-4">$250 - $400</td>
                    <td className="px-6 py-4 text-gray-600">Mid-rise construction</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Hospitality (Select Service)</td>
                    <td className="px-6 py-4">$200 - $325</td>
                    <td className="px-6 py-4 text-gray-600">Per key basis varies by brand</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Costs reflect 2024 Tampa Bay market conditions and exclude land, soft costs, and site development. Actual project costs depend on specific design, site conditions, and market timing. Contact us for project-specific budgeting.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa Bay Development Considerations
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-brand-green-dark">Hurricane Resilience</h3>
                  <p className="text-gray-600">Florida Building Code already requires significant hurricane resistance. We recommend additional measures for critical facilities—impact-resistant systems, enhanced roof attachments, emergency power, and flood mitigation. Resilient buildings attract quality tenants and maintain operations during storm events.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-brand-green-dark">Flood Zone Considerations</h3>
                  <p className="text-gray-600">Much of Tampa Bay lies within FEMA flood zones. Development in these areas requires elevated construction, flood-resistant materials, and additional insurance costs. We help developers evaluate flood zone impacts and design appropriate mitigation measures.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-brand-green-dark">Energy Efficiency</h3>
                  <p className="text-gray-600">Florida's energy costs make efficiency investments particularly valuable. High-performance HVAC, quality insulation, reflective roofing, and LED lighting reduce operating costs throughout the building's life. Many efficiency measures pay back quickly in our climate.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-brand-green-dark">Skilled Labor Market</h3>
                  <p className="text-gray-600">Tampa Bay's construction boom creates competition for skilled trades. Our long-term subcontractor relationships and reputation for well-managed projects help secure quality crews even in tight labor markets. We plan schedules and phase work strategically to maintain workforce continuity.</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mb-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-brand-green-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Partner with Tampa Bay's Development Experts</h3>
              <p className="mb-6 text-gray-200">
                Contact Florida Construction Specialists to discuss your commercial development project. Whether you're in early feasibility or ready to build, we provide the expertise and resources to make your project successful.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Discuss Your Project
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {BUSINESS_INFO.phone}
                </a>
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

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Build Your Tampa Bay Development
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists—your construction partner for successful commercial real estate development in Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Consultation
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
