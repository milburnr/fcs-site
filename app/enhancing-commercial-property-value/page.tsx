import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, TrendingUp, DollarSign, Building2, Zap, Shield, PaintBucket } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Enhancing Commercial Property Value | Tampa Renovation & Upgrades",
  description: "Maximize your Tampa commercial property value with strategic renovations and upgrades. Expert guidance on ROI-focused improvements from Florida Construction Specialists.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Enhancing Commercial Property Value", href: "/enhancing-commercial-property-value/" },
];

const faqs = [
  {
    question: "What renovations provide the best ROI for commercial properties?",
    answer: "In Tampa Bay's market, the highest-ROI improvements typically include: lobby and common area upgrades (immediate tenant appeal), energy-efficient HVAC replacement (reduces operating costs and attracts tenants), roof replacement or restoration (protects the building and often required for sale), exterior façade improvements (curb appeal drives first impressions), and restroom modernization. The best investment depends on your specific property, tenant base, and market positioning goals."
  },
  {
    question: "How much should I budget for commercial property improvements?",
    answer: "Budget varies widely by improvement type and property condition. Minor cosmetic updates might cost $5-15 per square foot. Significant renovations like lobby redesign, restroom upgrades, and common area improvements typically run $30-75 per square foot. Major system replacements (HVAC, roof, electrical) can range from $10-50 per square foot for the affected systems. We provide detailed budgets during consultation to help you plan strategically."
  },
  {
    question: "Will renovations disrupt my existing tenants?",
    answer: "We specialize in occupied building renovations. Our approach minimizes disruption through careful phasing, after-hours work for noisy activities, dust containment, and clear communication with tenants. Many improvements—like roof work, exterior upgrades, and mechanical replacements—have minimal tenant impact. Interior work requires coordination, but we've successfully renovated buildings without losing tenants to construction inconvenience."
  },
  {
    question: "How do property improvements affect rental rates?",
    answer: "Quality improvements directly impact achievable rents. In Tampa Bay's competitive market, renovated properties with modern amenities, efficient systems, and attractive common areas command premium rents—often 15-30% above comparable unrenovated properties. Improvements also reduce vacancy time and tenant turnover, improving overall property performance beyond just rental rate increases."
  },
  {
    question: "Should I renovate before selling a commercial property?",
    answer: "Strategic pre-sale improvements often increase sale price by more than their cost. Focus on items that buyers or their inspectors will flag: roof condition, HVAC age and efficiency, parking lot condition, and deferred maintenance. Cosmetic improvements provide less certain returns but can accelerate sales and expand the buyer pool. We can help evaluate which improvements make sense for your sale timeline and target buyer profile."
  }
];

const internalLinks = [
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvement Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/tampa-commercial-real-estate-development/", label: "Real Estate Development" },
  { href: "/investing-in-commercial-real-estate-construction/", label: "Investment Construction" },
  { href: "/contact/", label: "Property Assessment" },
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
            alt="Commercial property value enhancement in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Enhancing Commercial Property Value in Tampa Bay
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Strategic renovations and upgrades that maximize your commercial property's value, attract quality tenants, and optimize long-term returns. Florida Construction Specialists helps Tampa Bay property owners make smart improvement investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Property Assessment
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
              Commercial real estate success in Tampa Bay depends on maintaining competitive properties that attract and retain quality tenants. As the market evolves and tenant expectations increase, strategic property improvements become essential for maintaining occupancy, commanding market rents, and building long-term asset value. Florida Construction Specialists helps commercial property owners identify and execute the renovations and upgrades that deliver the strongest returns on investment.
            </p>

            <p className="text-gray-600 mb-6">
              Not all property improvements are created equal. Some renovations dramatically increase rental rates and property values; others consume capital without proportional returns. The key is understanding your property's position in the market, your tenant base's priorities, and which improvements will most effectively differentiate your property from competing options. Our experience with hundreds of commercial renovation projects in Tampa Bay provides the insight needed to make smart improvement decisions.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              High-Impact Property Improvements
            </h2>

            <p className="text-gray-600 mb-6">
              Certain improvements consistently deliver strong returns across property types and markets. These high-impact renovations address factors that directly influence tenant decisions and property valuations:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Building2 className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Lobby & Common Area Upgrades</h3>
                <p className="text-gray-600 mb-4">
                  First impressions drive leasing decisions. Modern lobbies with quality finishes, good lighting, and contemporary design signal a well-managed property. Upgraded common areas—corridors, restrooms, break areas—affect daily tenant experience and satisfaction.
                </p>
                <p className="text-sm text-brand-green-dark font-semibold">Typical ROI: 20-40% rent premium achievable</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Zap className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">HVAC System Replacement</h3>
                <p className="text-gray-600 mb-4">
                  Modern HVAC systems reduce energy costs by 25-40% compared to aging equipment. In Tampa's climate, cooling efficiency directly impacts operating costs. New systems also improve comfort, reduce maintenance, and eliminate tenant complaints about temperature control.
                </p>
                <p className="text-sm text-brand-green-dark font-semibold">Typical ROI: Payback in 3-7 years through reduced costs</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Roof Replacement or Coating</h3>
                <p className="text-gray-600 mb-4">
                  Roof condition is a critical factor in property transactions and tenant confidence. A new roof eliminates leak concerns, improves energy efficiency with reflective membranes, and demonstrates ownership commitment to property maintenance. Coating existing roofs extends life at lower cost.
                </p>
                <p className="text-sm text-brand-green-dark font-semibold">Typical ROI: Essential for maintaining property value</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <PaintBucket className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Exterior Façade Improvements</h3>
                <p className="text-gray-600 mb-4">
                  Building exterior creates curb appeal that influences tenant attraction and property perception. Fresh paint, updated signage, improved lighting, landscaping, and entrance enhancements transform property appearance without major structural work.
                </p>
                <p className="text-sm text-brand-green-dark font-semibold">Typical ROI: 15-25% improvement in leasing activity</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Property Type-Specific Improvements
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Office Buildings</h3>
                <p className="text-gray-600 mb-4">
                  Today's office tenants prioritize: modern common areas and lobbies, upgraded restrooms, reliable technology infrastructure, energy efficiency, and outdoor amenity spaces. Post-pandemic, air quality and ventilation improvements have become increasingly important. Conference facilities and tenant lounges add value for multi-tenant buildings.
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green" />
                    Lobby modernization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green" />
                    Restroom upgrades
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green" />
                    HVAC improvements
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green" />
                    Technology infrastructure
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Retail Centers</h3>
                <p className="text-gray-600 mb-4">
                  Retail success depends on customer traffic, making appearance and accessibility critical. Parking lot condition, lighting, signage visibility, and façade appeal all influence shopper decisions. Common area maintenance, including landscaping, directly impacts center perception and retailer success.
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green" />
                    Parking lot resurfacing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green" />
                    LED lighting upgrades
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green" />
                    Façade improvements
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green" />
                    Monument signage
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Industrial Properties</h3>
                <p className="text-gray-600 mb-4">
                  Industrial tenants focus on functionality: clear height, loading capacity, power availability, and truck access. Value-add improvements include adding dock doors, upgrading electrical service, improving yard areas for trailer storage, and office area renovations for distribution operations with administrative components.
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green" />
                    Additional dock doors
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green" />
                    Electrical upgrades
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green" />
                    Yard improvements
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green" />
                    Office renovations
                  </li>
                </ul>
              </div>
            </div>

            {/* Cost Table */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Typical Improvement Costs in Tampa Bay
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Improvement</th>
                    <th className="px-6 py-4 text-left">Cost Range</th>
                    <th className="px-6 py-4 text-left">Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Lobby Renovation</td>
                    <td className="px-6 py-4">$75 - $200/SF</td>
                    <td className="px-6 py-4 text-gray-600">High—first impression driver</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Common Area Upgrades</td>
                    <td className="px-6 py-4">$40 - $100/SF</td>
                    <td className="px-6 py-4 text-gray-600">High—daily tenant experience</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Restroom Remodel</td>
                    <td className="px-6 py-4">$15,000 - $40,000/room</td>
                    <td className="px-6 py-4 text-gray-600">High—tenant satisfaction</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">HVAC Replacement</td>
                    <td className="px-6 py-4">$15 - $35/SF</td>
                    <td className="px-6 py-4 text-gray-600">High—efficiency + comfort</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Roof Replacement</td>
                    <td className="px-6 py-4">$6 - $15/SF</td>
                    <td className="px-6 py-4 text-gray-600">Critical—protection + value</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Exterior Paint/Façade</td>
                    <td className="px-6 py-4">$3 - $12/SF</td>
                    <td className="px-6 py-4 text-gray-600">Medium—curb appeal</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Parking Lot Resurface</td>
                    <td className="px-6 py-4">$3 - $6/SF</td>
                    <td className="px-6 py-4 text-gray-600">Medium—appearance + function</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">LED Lighting Upgrade</td>
                    <td className="px-6 py-4">$2 - $5/SF</td>
                    <td className="px-6 py-4 text-gray-600">Medium—energy + appearance</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Costs reflect 2024 Tampa Bay market rates and vary based on property condition, design selections, and project complexity. Contact us for project-specific budgeting.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Strategic Improvement Planning
            </h2>

            <p className="text-gray-600 mb-6">
              Successful property improvement requires strategic planning—not just picking attractive upgrades. We help property owners develop improvement strategies that align with ownership goals, whether that's maximizing current income, positioning for sale, or building long-term value.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <DollarSign className="w-8 h-8 text-brand-green flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Budget Prioritization</h3>
                  <p className="text-gray-600">Limited budgets require focusing resources on highest-impact improvements first. We help identify which improvements deliver the strongest returns for your specific property and market position, creating phased plans that maximize value within budget constraints.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 text-brand-green flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Market Analysis</h3>
                  <p className="text-gray-600">Understanding competitive properties helps identify necessary improvements. We assess comparable properties' conditions and amenities to determine what level of renovation positions your property competitively without over-improving for the market.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-brand-green flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Tenant Coordination</h3>
                  <p className="text-gray-600">Improvements in occupied buildings require careful tenant coordination. We develop renovation schedules that minimize disruption, communicate clearly with tenants, and maintain building operations throughout construction. Lease timing can inform improvement scheduling.</p>
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
              <h3 className="text-2xl font-bold mb-4">Maximize Your Property's Potential</h3>
              <p className="mb-6 text-gray-200">
                Contact Florida Construction Specialists for a comprehensive property assessment. We'll evaluate your building's condition, identify high-impact improvement opportunities, and develop a strategic plan that maximizes your return on investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Get Property Assessment
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
            Enhance Your Commercial Property Value
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists helps Tampa Bay property owners maximize asset value through strategic renovations and upgrades.
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
