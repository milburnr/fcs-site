import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Building2, DollarSign, Ruler, Shield, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Build vs Buy Commercial Property Tampa | New Construction Benefits",
  description: "Discover why Florida Construction Specialists recommends building instead of buying commercial property in Tampa. Learn about customization, code compliance, efficiency, and long-term value advantages.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Why We Recommend Building Instead of Buying", href: "/why-florida-construction-specialists-recommend-building-instead-of-buying/" },
];

const faqs = [
  {
    question: "How long does it take to build a commercial building in Tampa?",
    answer: "Commercial construction timelines vary by project size and complexity. Small commercial buildings (5,000-10,000 SF) typically take 6-9 months from groundbreaking to completion. Medium buildings (10,000-30,000 SF) usually require 9-14 months. Large or complex projects may take 14-24+ months. Design-build delivery often compresses timelines by overlapping design and construction phases. We provide realistic schedules during project planning."
  },
  {
    question: "Is building more expensive than buying an existing building?",
    answer: "Not necessarily when comparing total costs. New construction may have higher initial costs, but existing buildings often require significant renovation, code upgrades, and deferred maintenance. New buildings have lower operating costs (energy efficiency), reduced maintenance, and modern warranties. Financing new construction can be advantageous with construction-to-permanent loans. We help clients analyze total cost of ownership for informed decisions."
  },
  {
    question: "What about buying and renovating an existing building?",
    answer: "Renovation can be effective but carries risks: hidden conditions (asbestos, structural issues, outdated systems), code upgrade requirements that may be triggered by renovation scope, limitations from existing structure, and unpredictable costs. Renovation costs often exceed initial estimates by 20-40% due to discovered conditions. New construction has more predictable costs and no hidden conditions."
  },
  {
    question: "How do building codes affect the build vs. buy decision?",
    answer: "Existing buildings were built to codes in effect at construction time—potentially decades ago. Significant renovation triggers requirements to bring systems up to current Florida Building Code standards. New construction is designed to current codes from the start, including latest hurricane requirements, energy efficiency standards, and accessibility requirements. This provides better protection and avoids costly retrofit requirements."
  },
  {
    question: "Can you help evaluate whether to build or buy for our specific situation?",
    answer: "Yes. We provide pre-construction consulting to help clients evaluate options. We can assess existing buildings you're considering, estimate renovation costs, and provide new construction budgets for comparison. This analysis considers your operational needs, timeline, budget, and long-term plans to determine which approach makes sense for your specific situation. Contact us for a consultation."
  }
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/tampa-commercial-construction-permits/", label: "Construction Permits" },
  { href: "/the-importance-of-quality-construction-materials-in-tampa/", label: "Quality Materials" },
  { href: "/contact/", label: "Schedule a Consultation" },
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
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
            alt="Commercial construction vs buying in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Why Florida Construction Specialists Recommends Building Instead of Buying
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            For many Tampa Bay businesses, new construction offers advantages over purchasing existing buildings: customization for your operations, current code compliance, energy efficiency, and long-term value that existing buildings rarely match.
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

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              When Tampa Bay businesses need commercial space, they face a fundamental choice: buy an existing building or build new. While purchasing existing property may seem simpler, Florida Construction Specialists often recommends new construction for businesses seeking optimal functionality, efficiency, and long-term value. Our decades of experience building and renovating commercial properties has shown us the advantages and hidden costs of each approach.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <div className="flex items-start gap-4">
                <Building2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-green-800 mb-2">Your Building, Your Way</h3>
                  <p className="text-green-700">New construction puts you in control. Every aspect—layout, systems, finishes, site configuration—can be optimized for your specific operations. Existing buildings force compromises between your needs and the building's limitations.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Key Advantages of Building New
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Ruler className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Complete Customization</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Floor plan designed for your workflow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Ceiling heights optimized for use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Electrical capacity for your equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>HVAC sized for your needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Site layout for your operations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Current Code Compliance</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Latest Florida Building Code requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Current hurricane protection standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Modern energy code compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Full ADA accessibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>No grandfathered deficiencies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <DollarSign className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Lower Operating Costs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Energy-efficient building envelope</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>High-efficiency HVAC systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>LED lighting throughout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Modern building automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Lower maintenance requirements</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Clock className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Long-Term Value</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>New warranties on all systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Full expected service life ahead</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>No deferred maintenance backlog</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Modern materials and methods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Better resale/lease potential</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Hidden Costs of Existing Buildings
            </h2>

            <p className="text-gray-600 mb-6">
              The purchase price of an existing building often represents only a portion of total costs. Our renovation experience has revealed common hidden costs:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Hidden Cost Category</th>
                    <th className="px-6 py-4 text-left">Common Issues</th>
                    <th className="px-6 py-4 text-left">Typical Cost Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Code Upgrades</td>
                    <td className="px-6 py-4 text-gray-600">Fire protection, accessibility, electrical</td>
                    <td className="px-6 py-4 text-gray-600">$15-50/SF for significant renovation</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">System Replacements</td>
                    <td className="px-6 py-4 text-gray-600">HVAC, roofing, electrical panels</td>
                    <td className="px-6 py-4 text-gray-600">$20-80/SF depending on systems</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Environmental Issues</td>
                    <td className="px-6 py-4 text-gray-600">Asbestos, lead paint, mold</td>
                    <td className="px-6 py-4 text-gray-600">$10-100+/SF for remediation</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Structural Repairs</td>
                    <td className="px-6 py-4 text-gray-600">Foundation, framing, connections</td>
                    <td className="px-6 py-4 text-gray-600">$25-150+/SF if significant</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Space Reconfiguration</td>
                    <td className="px-6 py-4 text-gray-600">Walls, ceilings, floors for new layout</td>
                    <td className="px-6 py-4 text-gray-600">$50-150/SF for major changes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Build vs. Buy: Cost Comparison Factors
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-700 mb-3">Existing Building Costs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">+</span>
                    <span>Purchase price</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">+</span>
                    <span>Due diligence and inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">+</span>
                    <span>Renovation/tenant improvement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">+</span>
                    <span>Code upgrade requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">+</span>
                    <span>Unforeseen conditions (20-40% common)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">+</span>
                    <span>Higher ongoing operating costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">+</span>
                    <span>Near-term system replacements</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-700 mb-3">New Construction Costs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Land acquisition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Site development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Building construction (predictable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>All new systems (efficient)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Lower operating costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Full warranties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>No near-term replacements</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              When Buying May Make Sense
            </h2>

            <p className="text-gray-600 mb-6">
              While we often recommend building new, buying existing property can be appropriate in certain circumstances:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Prime location:</strong> When the location is critical and no suitable land is available for new construction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Recent construction:</strong> Buildings less than 10-15 years old with quality construction may offer good value</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Suitable layout:</strong> When existing building closely matches your needs with minimal modification required</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Immediate need:</strong> When time constraints make new construction impractical</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Significant discount:</strong> When purchase price is low enough to offset renovation costs with margin</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Build vs. Buy Analysis Service
            </h2>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists offers pre-construction consulting to help you make informed decisions:
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Existing Building Assessment</h3>
                  <p className="text-gray-600">We inspect buildings you're considering, identify needed improvements and code issues, and estimate renovation costs to achieve your requirements.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">New Construction Budget</h3>
                  <p className="text-gray-600">We develop conceptual budgets for new construction meeting your requirements, including site development, building construction, and soft costs.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Comparative Analysis</h3>
                  <p className="text-gray-600">We compare total costs, timelines, and outcomes for each option, including operating cost projections and long-term value considerations.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Recommendation</h3>
                  <p className="text-gray-600">Based on your specific needs, budget, timeline, and priorities, we provide our professional recommendation with supporting analysis.</p>
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
              <h3 className="text-2xl font-bold mb-4">Ready to Build Your Future?</h3>
              <p className="mb-6 text-gray-200">
                Florida Construction Specialists delivers quality commercial construction throughout Tampa Bay. Whether you need help evaluating options or are ready to build, contact us for a consultation. We'll help you make the best decision for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Get Free Estimate
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
            title="Commercial Construction Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Build Your Perfect Commercial Space
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss building a commercial property customized for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Consultation
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
