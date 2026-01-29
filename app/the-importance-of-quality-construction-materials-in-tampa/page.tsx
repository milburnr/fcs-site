import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Shield, Award, CloudRain, Sun, Wind } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Quality Construction Materials Tampa | Florida Building Code Compliance",
  description: "Learn why quality construction materials matter in Tampa's demanding climate. Florida Construction Specialists explains FBC requirements, hurricane-resistant materials, and material specifications for commercial buildings.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "The Importance of Quality Construction Materials in Tampa", href: "/the-importance-of-quality-construction-materials-in-tampa/" },
];

const faqs = [
  {
    question: "What makes construction materials 'hurricane-rated' in Florida?",
    answer: "Hurricane-rated materials meet specific Florida Building Code requirements for wind resistance, impact resistance, and water intrusion prevention. Products must be tested and approved by the Florida Building Commission through the Product Approval system. Look for FL#/FBC approval numbers and Miami-Dade NOA (Notice of Acceptance) for high-velocity hurricane zones. These certifications verify materials meet the demanding standards required for Florida construction."
  },
  {
    question: "How does Florida's climate affect material selection?",
    answer: "Florida's combination of high humidity, salt air (near coast), intense UV radiation, heavy rainfall, and hurricane-force winds creates one of the most demanding construction environments in the country. Materials must resist moisture, corrosion, UV degradation, and extreme wind loads. What works in other climates often fails prematurely in Florida. Local experience with material performance is essential for appropriate selection."
  },
  {
    question: "What is the Florida Product Approval system?",
    answer: "The Florida Product Approval system verifies that construction products meet Florida Building Code requirements. Products must be tested by accredited laboratories and approved before use. Approvals are searchable in the FBC Product Approval database by FL# number. Using non-approved products violates building code and may result in failed inspections, required replacement, and liability exposure."
  },
  {
    question: "Are more expensive materials always better?",
    answer: "Not necessarily—appropriate materials matched to the application matter more than price alone. However, cutting costs on materials in Florida's demanding climate often leads to premature failure and expensive replacement. The cheapest materials rarely represent the best value when total cost of ownership is considered. We specify materials balancing initial cost, durability, maintenance requirements, and expected lifespan."
  },
  {
    question: "How do you verify material quality during construction?",
    answer: "Quality verification includes: reviewing product approval documentation before ordering, inspecting materials upon delivery for damage or defects, verifying quantities and specifications match orders, proper storage to prevent damage before installation, installation per manufacturer specifications, and inspection documentation throughout construction. We maintain detailed records supporting quality compliance for every project."
  }
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/hurricane-proof-reconstruction-services-in-tampa/", label: "Hurricane-Proof Construction" },
  { href: "/ensuring-construction-site-safety-a-top-priority/", label: "Construction Safety" },
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
            alt="Quality construction materials in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            The Importance of Quality Construction Materials in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Florida Construction Specialists explains why quality materials matter in Tampa's demanding climate, from Florida Building Code requirements to long-term performance in hurricane, humidity, and salt air conditions.
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
              Tampa Bay's subtropical climate creates one of the most challenging construction environments in the United States. Materials must withstand hurricane-force winds, intense UV radiation, high humidity, salt air corrosion, heavy rainfall, and biological growth—often simultaneously. Quality materials specified and installed correctly provide the foundation for buildings that perform safely and durably for decades. Florida Construction Specialists' experience with local conditions guides our material recommendations for commercial construction throughout the region.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-yellow-800 mb-2">Florida Requires Approved Products</h3>
                  <p className="text-yellow-700">Florida Building Code requires construction products to be approved through the Florida Product Approval system. Using non-approved products violates code, fails inspections, and creates liability. We verify product approvals before specifying materials for any project.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Florida's Demanding Construction Environment
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Wind className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Wind and Storm Exposure</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Design wind speeds 130+ mph (Tampa)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Wind-borne debris impact resistance required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Roof uplift resistance critical</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Water intrusion prevention essential</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <CloudRain className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Moisture and Humidity</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Average humidity 74% year-round</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>52+ inches annual rainfall</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Mold and mildew growth environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Condensation management required</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Sun className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">UV and Heat Exposure</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Extreme UV index (10-11) common</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Surface temperatures exceeding 160°F</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Material degradation from UV exposure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Color fading and surface breakdown</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Salt and Corrosion</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Salt air corrosion near coast</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Accelerated metal deterioration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Special coatings and materials required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Stainless steel often specified near water</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Florida Building Code Material Requirements
            </h2>

            <p className="text-gray-600 mb-6">
              The 8th Edition (2023) Florida Building Code establishes minimum material requirements that exceed most other states due to Florida's environmental challenges:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Structural Materials (FBC Chapter 16, 19, 22, 23)</h3>
                <p className="text-gray-600 mb-3">Structural systems must resist Florida's wind loads:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Steel connectors and fasteners meeting corrosion resistance requirements</li>
                  <li>• Concrete specified for Florida exposure conditions</li>
                  <li>• Wood products treated for termite and decay resistance</li>
                  <li>• Connections designed for wind uplift and lateral loads</li>
                  <li>• Anchor bolts and straps meeting wind resistance requirements</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Roofing Materials (FBC Chapter 15)</h3>
                <p className="text-gray-600 mb-3">Roofing must withstand Florida's combined challenges:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Wind uplift resistance tested per ASTM/FM standards</li>
                  <li>• Impact resistance for wind-borne debris regions</li>
                  <li>• Underlayment requirements (self-adhering in most of Florida)</li>
                  <li>• Fastener patterns and types specified for wind zone</li>
                  <li>• Warranty requirements from approved manufacturers</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Windows and Glazing (FBC Chapter 24)</h3>
                <p className="text-gray-600 mb-3">Fenestration (windows, doors, skylights) requirements:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Impact-resistant glazing or approved shutters in wind-borne debris regions</li>
                  <li>• Pressure ratings meeting design wind loads</li>
                  <li>• Water infiltration resistance testing</li>
                  <li>• Air infiltration limits for energy code compliance</li>
                  <li>• Florida Product Approval required for all fenestration</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Key Material Categories for Tampa Commercial Construction
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Material Category</th>
                    <th className="px-6 py-4 text-left">Florida Considerations</th>
                    <th className="px-6 py-4 text-left">Quality Indicators</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Roofing</td>
                    <td className="px-6 py-4 text-gray-600">Wind uplift, impact resistance, UV stability</td>
                    <td className="px-6 py-4 text-gray-600">FL Product Approval, FM 4470, Miami-Dade NOA</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Windows/Doors</td>
                    <td className="px-6 py-4 text-gray-600">Impact resistance, pressure rating, water resistance</td>
                    <td className="px-6 py-4 text-gray-600">FL Product Approval, AAMA certification</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Exterior Cladding</td>
                    <td className="px-6 py-4 text-gray-600">Wind load, water management, UV resistance</td>
                    <td className="px-6 py-4 text-gray-600">FL Product Approval, manufacturer warranty</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Structural Fasteners</td>
                    <td className="px-6 py-4 text-gray-600">Corrosion resistance, load capacity</td>
                    <td className="px-6 py-4 text-gray-600">ICC-ES evaluation, stainless/hot-dip galvanized</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Concrete</td>
                    <td className="px-6 py-4 text-gray-600">Chloride exposure, sulfate resistance, strength</td>
                    <td className="px-6 py-4 text-gray-600">ACI 318 compliance, exposure class specification</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Insulation</td>
                    <td className="px-6 py-4 text-gray-600">Moisture resistance, thermal performance, mold resistance</td>
                    <td className="px-6 py-4 text-gray-600">Closed-cell or moisture-resistant products</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The True Cost of Material Quality
            </h2>

            <p className="text-gray-600 mb-6">
              While quality materials may cost more initially, total cost of ownership often favors better materials:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-700 mb-3">Low-Quality Material Costs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Premature replacement (5-10 years vs 20-30)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Increased maintenance and repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Business disruption during replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Storm damage when materials fail</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Insurance issues with substandard materials</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-700 mb-3">Quality Material Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Extended service life (2-3x longer)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Reduced maintenance requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Better storm performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Manufacturer warranty coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Insurance and code compliance</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Material Selection Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Application Analysis</h3>
                  <p className="text-gray-600">We analyze each application's specific requirements: exposure conditions, performance requirements, code mandates, and maintenance considerations. Location matters—coastal projects face different challenges than inland sites.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Product Approval Verification</h3>
                  <p className="text-gray-600">We verify Florida Product Approval for all applicable products. We check testing reports, approval limitations, and installation requirements. Non-approved products are not specified.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Local Performance History</h3>
                  <p className="text-gray-600">We draw on decades of Tampa Bay experience to evaluate how materials actually perform locally. Laboratory testing doesn't always predict real-world performance in Florida's unique environment.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Total Cost Analysis</h3>
                  <p className="text-gray-600">We evaluate total cost of ownership—initial cost, expected service life, maintenance requirements, and replacement costs—to recommend materials providing the best long-term value.</p>
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
              <h3 className="text-2xl font-bold mb-4">Quality Materials. Built to Last.</h3>
              <p className="mb-6 text-gray-200">
                Florida Construction Specialists specifies and installs quality materials proven to perform in Tampa Bay's demanding environment. Our material expertise protects your investment with buildings designed to last for decades. Contact us to discuss your commercial construction project.
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
            title="Related Construction Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Build with Quality Materials
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for commercial construction using quality materials suited to Tampa Bay's demanding climate.
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
