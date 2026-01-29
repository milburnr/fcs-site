import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Award, Building, Leaf, Sun, Users, TrendingUp, DollarSign, Shield } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Green Contractor Certifications in Commercial Construction - Florida Construction Specialists",
  description: "Understand green contractor certifications and their value in commercial construction. Florida Construction Specialists brings LEED expertise to Tampa Bay projects.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Green Contractor Certifications in Commercial Construction", href: "/green-contractor-certifications-in-commercial-construction/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/construction-florida-leading-way-leed-certification/", label: "LEED Certification Services" },
  { href: "/sustainable-building-materials-in-commercial-construction/", label: "Sustainable Building Materials" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
            alt="Green contractor certifications for commercial construction"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Green Contractor Certifications in Commercial Construction
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Understanding green contractor certifications and their impact on commercial construction success. Florida Construction Specialists brings certified expertise to Tampa Bay's sustainable building projects.
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

      {/* Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              When pursuing sustainable commercial construction in Tampa Bay, the credentials of your contractor matter as much as the building systems you specify. Green contractor certifications demonstrate verified expertise in sustainable building practices, ensuring your project achieves its environmental and performance goals. Florida Construction Specialists brings multiple certifications and decades of experience to every green building project, helping clients throughout Tampa, Lakeland, Sarasota, and the surrounding areas achieve successful sustainable construction outcomes.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Why Green Contractor Certifications Matter
            </h2>
            <p className="text-gray-600 mb-6">
              Sustainable construction requires specialized knowledge that goes beyond conventional building practices. Green contractor certifications validate that a contractor understands sustainable materials, energy-efficient systems, water conservation, indoor environmental quality, and the documentation requirements for green building certifications like LEED. Working with a certified green contractor reduces risk, improves outcomes, and helps ensure your sustainable investment delivers its intended benefits.
            </p>
            <p className="text-gray-600 mb-6">
              For Tampa Bay property owners, choosing a certified green contractor means confidence that your project will meet increasingly stringent energy codes, qualify for available incentives, achieve targeted certifications, and deliver the operating cost savings that make sustainable construction financially attractive.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Key Green Contractor Certifications
            </h2>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                <Award className="w-6 h-6" />
                LEED Accredited Professional (LEED AP)
              </h3>
              <p className="text-gray-600 mb-4">
                The LEED AP credential, administered by the Green Business Certification Inc. (GBCI), represents the gold standard for green building expertise. LEED APs have demonstrated deep understanding of the LEED rating system through rigorous examination and ongoing education.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-brand-green-dark mb-2">Specializations Available:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• LEED AP BD+C (Building Design & Construction)</li>
                    <li>• LEED AP ID+C (Interior Design & Construction)</li>
                    <li>• LEED AP O+M (Operations & Maintenance)</li>
                    <li>• LEED AP ND (Neighborhood Development)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-green-dark mb-2">Value to Your Project:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Expert LEED credit navigation</li>
                    <li>• Optimized certification strategies</li>
                    <li>• Documentation expertise</li>
                    <li>• Higher certification success rates</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Florida Green Building Coalition (FGBC) Certified
              </h3>
              <p className="text-gray-600 mb-4">
                FGBC certifications are specifically designed for Florida's unique climate and building requirements. Contractors with FGBC credentials understand hurricane-resistant construction, humidity management, and Florida-specific energy efficiency strategies.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>Florida-specific climate considerations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>Hurricane resilience integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>Insurance discount eligibility knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>Florida energy code expertise</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                <Award className="w-6 h-6" />
                WELL Accredited Professional (WELL AP)
              </h3>
              <p className="text-gray-600 mb-4">
                WELL AP credentials demonstrate expertise in the WELL Building Standard, which focuses on occupant health and wellness. As indoor environmental quality becomes increasingly important, WELL expertise adds significant value to commercial projects.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>Indoor air quality optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>Healthy material selection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>Lighting and thermal comfort design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>Biophilic design integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Energy Star Partner
              </h3>
              <p className="text-gray-600 mb-4">
                Energy Star partnership indicates commitment to energy efficiency and experience with EPA's Energy Star programs for commercial buildings.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>Energy benchmarking expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>Performance verification experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>Ongoing efficiency commitment</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The Value of Certified Green Contractors
            </h2>
            <p className="text-gray-600 mb-6">
              Working with certified green contractors delivers measurable benefits throughout your project:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Reduced Risk
                </h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Higher certification success rates</li>
                  <li>• Fewer costly mistakes and rework</li>
                  <li>• Proper documentation from the start</li>
                  <li>• Compliance with evolving codes</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Better Value
                </h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Optimized sustainability investments</li>
                  <li>• Maximum incentive capture</li>
                  <li>• Right-sized systems and features</li>
                  <li>• Avoided over-specification costs</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Superior Results
                </h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Buildings perform as designed</li>
                  <li>• Operating costs meet projections</li>
                  <li>• Certifications achieved as planned</li>
                  <li>• Tenant satisfaction from day one</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Expert Guidance
                </h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Informed sustainability decisions</li>
                  <li>• Clear cost-benefit analysis</li>
                  <li>• Certification pathway clarity</li>
                  <li>• Ongoing industry knowledge</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Certification Impact on Project Outcomes
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Metric</th>
                    <th className="px-6 py-3 text-left">With Certified Contractor</th>
                    <th className="px-6 py-3 text-left">Without Certification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">LEED Certification Success</td>
                    <td className="px-6 py-4 text-green-600 font-bold">95%+</td>
                    <td className="px-6 py-4">60-70%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Energy Performance vs. Target</td>
                    <td className="px-6 py-4 text-green-600 font-bold">Within 10%</td>
                    <td className="px-6 py-4">Often 20-30% variance</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Documentation Issues</td>
                    <td className="px-6 py-4 text-green-600 font-bold">Minimal</td>
                    <td className="px-6 py-4">Frequent delays</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Incentive Capture</td>
                    <td className="px-6 py-4 text-green-600 font-bold">Maximized</td>
                    <td className="px-6 py-4">Often missed</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Sustainability Cost Premium</td>
                    <td className="px-6 py-4 text-green-600 font-bold">Optimized (0-5%)</td>
                    <td className="px-6 py-4">Higher due to inefficiency</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida Green Building Incentives
            </h2>
            <p className="text-gray-600 mb-6">
              Certified green contractors understand how to maximize available incentives for Tampa Bay projects:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Incentive Program</th>
                    <th className="px-6 py-3 text-left">Potential Value</th>
                    <th className="px-6 py-3 text-left">Certification Requirement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Federal 179D Deduction</td>
                    <td className="px-6 py-4">Up to $5.00/SF</td>
                    <td className="px-6 py-4">Energy modeling and verification</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Solar Investment Tax Credit</td>
                    <td className="px-6 py-4">30% of system cost</td>
                    <td className="px-6 py-4">Proper installation documentation</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Tampa Expedited Permitting</td>
                    <td className="px-6 py-4">50% faster review</td>
                    <td className="px-6 py-4">LEED registration</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">TECO/Duke Rebates</td>
                    <td className="px-6 py-4">Varies by measure</td>
                    <td className="px-6 py-4">Pre-approval and documentation</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">FGBC Insurance Discounts</td>
                    <td className="px-6 py-4">Up to 10% premium reduction</td>
                    <td className="px-6 py-4">FGBC certification</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              What to Look for in a Green Contractor
            </h2>
            <p className="text-gray-600 mb-6">
              When selecting a contractor for your sustainable commercial project, consider these factors:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Relevant Certifications:</strong>
                  <span className="text-gray-600"> Look for LEED AP credentials matching your project type, plus FGBC certification for Florida-specific expertise.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Successful Project History:</strong>
                  <span className="text-gray-600"> Ask for examples of certified green projects and references from clients who achieved their sustainability goals.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Integrated Approach:</strong>
                  <span className="text-gray-600"> Sustainability should be woven into standard practices, not treated as an optional add-on.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Incentive Knowledge:</strong>
                  <span className="text-gray-600"> A qualified green contractor knows all available incentives and how to capture them for your project.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Cost Transparency:</strong>
                  <span className="text-gray-600"> Clear communication about sustainability costs, paybacks, and value creation helps you make informed decisions.</span>
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida Construction Specialists Green Credentials
            </h2>
            <p className="text-gray-600 mb-6">
              Our team brings extensive green building credentials to every Tampa Bay project:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg flex items-center gap-3">
                <Award className="w-8 h-8 text-brand-green" />
                <div>
                  <div className="font-bold text-brand-green-dark">LEED Accredited Professionals</div>
                  <div className="text-sm text-gray-600">BD+C and ID+C specializations</div>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg flex items-center gap-3">
                <Award className="w-8 h-8 text-brand-green" />
                <div>
                  <div className="font-bold text-brand-green-dark">FGBC Certified</div>
                  <div className="text-sm text-gray-600">Florida Green Building expertise</div>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg flex items-center gap-3">
                <Award className="w-8 h-8 text-brand-green" />
                <div>
                  <div className="font-bold text-brand-green-dark">Energy Star Partner</div>
                  <div className="text-sm text-gray-600">Committed to energy efficiency</div>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg flex items-center gap-3">
                <Award className="w-8 h-8 text-brand-green" />
                <div>
                  <div className="font-bold text-brand-green-dark">Proven Track Record</div>
                  <div className="text-sm text-gray-600">Successful green projects throughout Tampa Bay</div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions About Green Contractor Certifications
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Do I need a LEED-certified contractor to achieve LEED certification?
                  </h3>
                  <p className="text-gray-600">
                    While not technically required, working with a LEED AP dramatically increases your chances of successful certification. LEED APs understand the credit requirements, documentation processes, and strategies for earning points cost-effectively. They can navigate the certification review process and address any issues that arise. Projects without LEED expertise often struggle with documentation or miss certification points.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What's the difference between LEED AP and LEED Green Associate?
                  </h3>
                  <p className="text-gray-600">
                    LEED Green Associate is a foundational credential demonstrating general knowledge of green building. LEED AP represents advanced expertise with a specialty (like BD+C for Building Design & Construction). For commercial construction projects, you want team members with LEED AP BD+C credentials who understand the specific requirements for new buildings and major renovations.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Why is Florida-specific green certification important?
                  </h3>
                  <p className="text-gray-600">
                    Florida's climate presents unique challenges—intense solar radiation, high humidity, hurricane threats, and year-round cooling demands. FGBC certification demonstrates understanding of these Florida-specific issues. A contractor with only national credentials may not fully understand humidity management, hurricane-resistant construction, or Florida energy code nuances.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How much do green contractor certifications add to project costs?
                  </h3>
                  <p className="text-gray-600">
                    Working with certified green contractors typically doesn't add significant costs—in fact, it often reduces total project costs by avoiding mistakes, optimizing sustainability investments, and capturing all available incentives. The expertise prevents costly rework, ensures certification success, and delivers buildings that perform as designed from day one.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What questions should I ask a green contractor?
                  </h3>
                  <p className="text-gray-600">
                    Key questions include: What green certifications do your team members hold? How many LEED-certified projects have you completed? Can you provide references from clients who achieved certification? How do you identify and capture available incentives? How do you approach cost optimization for sustainability features? What is your experience with Tampa Bay's specific climate challenges?
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Partner with Certified Green Building Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to bring certified green building expertise to your Tampa Bay project.
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
