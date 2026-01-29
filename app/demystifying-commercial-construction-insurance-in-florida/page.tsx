import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, CheckCircle, Shield, FileText, AlertTriangle, Building, Users, DollarSign, Umbrella, Scale } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Demystifying Commercial Construction Insurance in Florida - Florida Construction Specialists",
  description: "Navigate the complexities of commercial construction insurance in Florida with confidence. Discover essential tips for understanding policies and safeguarding your investment.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Demystifying Commercial Construction Insurance in Florida", href: "/demystifying-commercial-construction-insurance-in-florida/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/commercial/medical-construction/", label: "Medical Facility Construction" },
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
            alt="Commercial construction insurance in Florida"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Demystifying Commercial Construction Insurance in Florida
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Navigate the complexities of commercial construction insurance in Florida with confidence. Discover essential tips for understanding policies and safeguarding your Tampa Bay investment.
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
              Construction insurance is one of the most important yet least understood aspects of commercial building projects. As Tampa Bay's leading commercial contractor serving Tampa, Lakeland, Sarasota, and the surrounding areas, Florida Construction Specialists helps clients navigate the complex insurance landscape that protects their investments. This comprehensive guide explains the essential insurance coverages, why they matter, and how to ensure your project is properly protected.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Why Construction Insurance Matters in Florida
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's unique risk environment makes construction insurance particularly important. Hurricane exposure, frequent severe storms, high water tables, and active litigation markets create risks that can devastate uninsured or underinsured projects. Proper insurance coverage protects property owners, contractors, and lenders from financial loss due to accidents, weather events, property damage, and liability claims.
            </p>
            <p className="text-gray-600 mb-6">
              Beyond basic protection, adequate insurance is typically required by lenders, permitting authorities, and landlords. Understanding what coverage is required—and what's advisable—helps you make informed decisions about risk management for your Tampa Bay commercial construction project.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Essential Insurance Coverages for Commercial Construction
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  Commercial General Liability (CGL)
                </h3>
                <p className="text-gray-600 mb-3">
                  The foundation of construction insurance, CGL protects against third-party claims for bodily injury and property damage arising from construction operations.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-brand-green-dark text-sm mb-2">What It Covers:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Third-party bodily injury on site</li>
                      <li>• Property damage to adjacent properties</li>
                      <li>• Completed operations liability</li>
                      <li>• Products liability</li>
                      <li>• Personal and advertising injury</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-green-dark text-sm mb-2">Typical Limits (Tampa Bay):</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• $1-2 million per occurrence</li>
                      <li>• $2-4 million general aggregate</li>
                      <li>• Higher limits via umbrella policies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Workers' Compensation
                </h3>
                <p className="text-gray-600 mb-3">
                  Required by Florida law for most employers, workers' compensation provides benefits to employees injured on the job while protecting employers from lawsuits.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-brand-green-dark text-sm mb-2">What It Covers:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Medical expenses for work injuries</li>
                      <li>• Lost wages during recovery</li>
                      <li>• Disability benefits</li>
                      <li>• Death benefits to dependents</li>
                      <li>• Rehabilitation costs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-green-dark text-sm mb-2">Florida Requirements:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Construction: 1+ employees</li>
                      <li>• Statutory benefits mandated</li>
                      <li>• $1M employer's liability typical</li>
                      <li>• Exemptions require specific filings</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Building className="w-6 h-6" />
                  Builder's Risk Insurance
                </h3>
                <p className="text-gray-600 mb-3">
                  Protects the building under construction and materials on site from physical damage. Essential for all ground-up and major renovation projects.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-brand-green-dark text-sm mb-2">What It Covers:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Fire and lightning damage</li>
                      <li>• Wind and hail (critical in Florida)</li>
                      <li>• Theft and vandalism</li>
                      <li>• Materials in transit or storage</li>
                      <li>• Collapse during construction</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-green-dark text-sm mb-2">Florida Considerations:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Named storm deductibles (2-5%)</li>
                      <li>• Flood coverage usually separate</li>
                      <li>• Soft cost coverage recommended</li>
                      <li>• Duration matches construction period</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Umbrella className="w-6 h-6" />
                  Umbrella/Excess Liability
                </h3>
                <p className="text-gray-600 mb-3">
                  Provides additional liability limits above underlying policies, essential for larger projects or those with significant exposure.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-brand-green-dark text-sm mb-2">What It Covers:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Excess over CGL limits</li>
                      <li>• Excess over auto liability</li>
                      <li>• Excess over employer's liability</li>
                      <li>• Broader coverage (umbrella form)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-green-dark text-sm mb-2">Typical Limits:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• $5-10 million common</li>
                      <li>• Higher for large projects</li>
                      <li>• Often required by owners</li>
                      <li>• Cost-effective additional protection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Insurance Cost Factors for Florida Construction
            </h2>
            <p className="text-gray-600 mb-4">
              Understanding what drives insurance costs helps you budget accurately and identify opportunities to manage premiums:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Coverage Type</th>
                    <th className="px-6 py-3 text-left">Typical Cost Range</th>
                    <th className="px-6 py-3 text-left">Key Cost Drivers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">General Liability</td>
                    <td className="px-6 py-4">$1.50-$3.50 per $100 payroll</td>
                    <td className="px-6 py-4">Trade mix, claims history, project type</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Workers' Comp</td>
                    <td className="px-6 py-4">$5-$25 per $100 payroll</td>
                    <td className="px-6 py-4">Classification codes, EMR, payroll</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Builder's Risk</td>
                    <td className="px-6 py-4">0.5-2% of project value</td>
                    <td className="px-6 py-4">Location, construction type, duration</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Professional Liability</td>
                    <td className="px-6 py-4">1-3% of design fees</td>
                    <td className="px-6 py-4">Project size, design-build scope</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Umbrella ($5M)</td>
                    <td className="px-6 py-4">$5,000-$15,000 annually</td>
                    <td className="px-6 py-4">Underlying limits, revenue, claims</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Who Provides What Coverage?
            </h2>
            <p className="text-gray-600 mb-6">
              Understanding which party is responsible for each coverage type is essential for proper risk management:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Coverage</th>
                    <th className="px-6 py-3 text-left">Typically Provided By</th>
                    <th className="px-6 py-3 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Commercial General Liability</td>
                    <td className="px-6 py-4">General Contractor</td>
                    <td className="px-6 py-4">Owner named as additional insured</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Workers' Compensation</td>
                    <td className="px-6 py-4">Each Employer</td>
                    <td className="px-6 py-4">GC verifies all subs</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Builder's Risk</td>
                    <td className="px-6 py-4">Owner or Contractor</td>
                    <td className="px-6 py-4">Specify in contract; all parties as insured</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Professional Liability</td>
                    <td className="px-6 py-4">Design Professionals</td>
                    <td className="px-6 py-4">GC for design-build; A/E for traditional</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Permanent Property</td>
                    <td className="px-6 py-4">Owner</td>
                    <td className="px-6 py-4">Transitions from Builder's Risk at completion</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida-Specific Insurance Considerations
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's risk environment creates unique insurance considerations for commercial construction:
            </p>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Hurricane and Named Storm Coverage
              </h3>
              <p className="text-gray-600 mb-4">
                Florida's hurricane exposure significantly impacts construction insurance:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li><strong>Named Storm Deductibles:</strong> Builder's risk policies typically have separate, higher deductibles for named storm damage (2-5% of coverage amount)</li>
                <li><strong>Wind Coverage Sublimits:</strong> Some policies cap wind damage coverage below the overall limit</li>
                <li><strong>Seasonal Restrictions:</strong> Some carriers won't bind new coverage during hurricane season (June-November)</li>
                <li><strong>Site Protection Requirements:</strong> Policies may require specific hurricane preparedness measures</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3">Flood Insurance</h4>
                <p className="text-gray-600 text-sm">
                  Standard property policies exclude flood damage. Many Tampa Bay construction sites require separate flood coverage through NFIP or private carriers. Costs vary dramatically based on flood zone designation.
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3">Sinkhole Coverage</h4>
                <p className="text-gray-600 text-sm">
                  Florida's karst geology creates sinkhole risks. Standard policies typically exclude sinkhole damage. Catastrophic ground cover collapse may be covered, but true sinkhole coverage requires endorsement.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Additional Insured Status Explained
            </h2>
            <p className="text-gray-600 mb-6">
              "Additional insured" is a common contract requirement that extends liability protection from one party's policy to another:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">What It Means:</strong>
                  <span className="text-gray-600"> When an owner is named as additional insured on the contractor's CGL policy, the contractor's insurance responds to claims against the owner arising from the contractor's work.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Why It Matters:</strong>
                  <span className="text-gray-600"> Provides owners with immediate access to defense and indemnification without relying solely on contractual indemnification provisions.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Standard Practice:</strong>
                  <span className="text-gray-600"> Florida Construction Specialists routinely provides additional insured status to project owners, architects, and lenders as required by contract.</span>
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Certificate of Insurance Requirements
            </h2>
            <p className="text-gray-600 mb-6">
              Certificates of Insurance (COIs) document coverage but have important limitations:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>COIs are informational only—they don't confer rights or alter coverage</li>
              <li>Always request copies of actual policies or endorsements for important coverage</li>
              <li>Verify coverage through direct contact with insurers when necessary</li>
              <li>Track certificate expiration dates and request renewals proactively</li>
              <li>Require 30-day notice of cancellation provisions when available</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida Construction Specialists Insurance Standards
            </h2>
            <p className="text-gray-600 mb-6">
              We maintain comprehensive insurance coverage that exceeds typical requirements, protecting both our company and our clients:
            </p>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">$2M</div>
                <div className="text-sm text-gray-600">General Liability</div>
                <div className="text-xs text-gray-500">Per Occurrence</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">$10M</div>
                <div className="text-sm text-gray-600">Umbrella Coverage</div>
                <div className="text-xs text-gray-500">Per Occurrence</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">A-Rated</div>
                <div className="text-sm text-gray-600">Carriers Only</div>
                <div className="text-xs text-gray-500">AM Best Rating</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">0.75</div>
                <div className="text-sm text-gray-600">EMR Rating</div>
                <div className="text-xs text-gray-500">Below Average</div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions About Construction Insurance
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Who should purchase Builder's Risk insurance—the owner or contractor?
                  </h3>
                  <p className="text-gray-600">
                    Either party can purchase Builder's Risk coverage, but the contract should clearly specify responsibility. Owner-provided policies ensure the owner controls coverage terms and limits. Contractor-provided coverage is common for smaller projects or when rolled into the construction contract. Regardless of who purchases, both parties (plus lenders and major subcontractors) should be named as insureds.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What happens if a hurricane damages my project during construction?
                  </h3>
                  <p className="text-gray-600">
                    Builder's Risk insurance covers hurricane damage, subject to the named storm deductible (typically 2-5% of coverage amount). The policy pays to repair or replace damaged work and materials. Soft cost coverage (if included) can cover extended construction financing, additional rental costs, and other delay-related expenses. Florida Construction Specialists implements comprehensive hurricane preparation to minimize damage exposure.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How do I verify that subcontractors have proper insurance?
                  </h3>
                  <p className="text-gray-600">
                    Florida Construction Specialists maintains rigorous subcontractor prequalification that includes insurance verification. We collect and verify certificates of insurance before any subcontractor begins work, confirm coverage meets our minimum requirements, track certificate expiration dates, and require additional insured status for Florida Construction Specialists and the project owner.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What is an EMR and why should I care about my contractor's rating?
                  </h3>
                  <p className="text-gray-600">
                    Experience Modification Rate (EMR) measures a company's workers' compensation claims experience against the industry average. An EMR of 1.0 is average; lower is better. A contractor with a high EMR (above 1.0) has more claims than average, indicating potential safety problems. Our EMR of 0.75 demonstrates our commitment to safety and results in lower insurance costs—savings we pass on to clients.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Do I need insurance coverage after construction is complete?
                  </h3>
                  <p className="text-gray-600">
                    Yes—Builder's Risk coverage ends at project completion or occupancy, requiring transition to permanent property insurance. Additionally, construction defect claims can arise years after completion. Contractor's "completed operations" coverage under their CGL policy addresses this exposure. Ensure your contractor maintains completed operations coverage for at least the applicable statute of limitations (in Florida, typically 4 years for latent defects, 10 years under the statute of repose).
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
            Partner with a Properly Insured Contractor
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists today to discuss your commercial project. Our comprehensive insurance program protects your investment.
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
