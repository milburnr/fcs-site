import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, CheckCircle, Shield, Award, Users, FileCheck, AlertTriangle, Star, Building, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tips for Choosing a Commercial Contractor in Tampa - Florida Construction Specialists",
  description: "Our trusted tips for choosing a commercial contractor you can trust will guide you towards reputable construction companies and reliable contractors in Tampa Bay.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tips for Choosing a Commercial Contractor in Tampa", href: "/tips-for-choosing-a-commercial-contractor-in-tampa/" },
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
            alt="Commercial construction project in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Trusted Tips for Choosing a Commercial Contractor in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Our trusted tips for choosing a commercial construction company will guide you towards reputable contractors and help you make the right decision for your Tampa Bay project.
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
              Selecting the right commercial contractor is one of the most consequential decisions you'll make for your Tampa Bay construction project. The contractor you choose will directly impact your project's quality, timeline, budget, and long-term value. With dozens of commercial contractors operating throughout Hillsborough, Pinellas, Polk, and Manatee counties, understanding how to evaluate and select the right partner is essential for protecting your investment and achieving your project goals.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Why Contractor Selection Matters in Tampa Bay
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay's commercial construction market presents unique challenges that make contractor selection particularly important. Florida's stringent building codes, hurricane resistance requirements, high humidity conditions, and complex permitting processes across multiple jurisdictions all demand a contractor with deep local expertise. A contractor experienced in Orlando or Miami may not understand the specific requirements of Hillsborough County or the nuances of building in flood-prone areas near Tampa Bay.
            </p>
            <p className="text-gray-600 mb-6">
              The consequences of choosing the wrong contractor can be severe: budget overruns averaging 20-40% for troubled projects, timeline delays that impact your business operations, quality issues requiring expensive remediation, and in worst cases, construction defect litigation. Taking time to thoroughly vet potential contractors protects your investment and sets the stage for a successful project.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Essential Qualities of a Reliable Tampa Commercial Contractor
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Proper Licensing & Insurance
                </h3>
                <p className="text-gray-600">
                  Verify the contractor holds a valid Florida Certified General Contractor (CGC) license through the Florida Department of Business and Professional Regulation. Additionally, confirm they carry comprehensive general liability insurance (minimum $1 million), workers' compensation coverage for all employees, and professional liability insurance for design-build projects.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Relevant Experience
                </h3>
                <p className="text-gray-600">
                  Look for contractors with substantial experience in your specific project type. A contractor who excels at retail construction may not be the best fit for medical facilities. Ask for portfolios showing completed projects similar in scope, size, and complexity to yours within the Tampa Bay market.
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Financial Stability
                </h3>
                <p className="text-gray-600">
                  A contractor's financial health directly affects project security. Request proof of bonding capacity, bank references, and consider running a Dun & Bradstreet report. Contractors who are financially stressed may cut corners, struggle to pay subcontractors, or even abandon projects mid-construction.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Strong Local Network
                </h3>
                <p className="text-gray-600">
                  Established relationships with quality subcontractors, suppliers, and local building officials can significantly impact your project. Contractors with deep Tampa Bay roots can often secure better pricing, faster permit approvals, and more reliable subcontractor performance.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              10 Critical Questions to Ask Commercial Contractors
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="bg-brand-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-brand-green-dark">How long have you been operating in the Tampa Bay area?</h4>
                  <p className="text-gray-600 text-sm">Look for at least 10 years of local experience. Longevity indicates stability and established relationships with local inspectors, subcontractors, and suppliers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="bg-brand-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-brand-green-dark">Can you provide references for similar projects completed in the past 2-3 years?</h4>
                  <p className="text-gray-600 text-sm">Recent references are crucial. A contractor's team and capabilities can change significantly over time. Ask for at least three references and actually contact them.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="bg-brand-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-brand-green-dark">Who will be the dedicated project manager, and what is their experience?</h4>
                  <p className="text-gray-600 text-sm">Your project manager is your primary point of contact. Ensure they have relevant experience and won't be stretched across too many simultaneous projects.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="bg-brand-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                <div>
                  <h4 className="font-bold text-brand-green-dark">What is your approach to hurricane preparedness during construction?</h4>
                  <p className="text-gray-600 text-sm">Tampa Bay's hurricane season (June-November) requires specific protocols. Experienced contractors have detailed plans for securing sites and protecting work-in-progress.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="bg-brand-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">5</div>
                <div>
                  <h4 className="font-bold text-brand-green-dark">How do you handle change orders and scope modifications?</h4>
                  <p className="text-gray-600 text-sm">Change orders are inevitable. Understand the contractor's process for pricing, documenting, and approving changes before they proceed.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="bg-brand-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">6</div>
                <div>
                  <h4 className="font-bold text-brand-green-dark">What safety certifications do your site personnel hold?</h4>
                  <p className="text-gray-600 text-sm">OSHA 30-hour certification for supervisors, OSHA 10-hour for workers, and a documented safety program with low EMR (Experience Modification Rate) are essential indicators.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="bg-brand-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">7</div>
                <div>
                  <h4 className="font-bold text-brand-green-dark">Can you walk me through your permitting experience with Hillsborough County?</h4>
                  <p className="text-gray-600 text-sm">Permitting in Tampa can be complex. Contractors familiar with local processes can often expedite approvals and avoid common pitfalls.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="bg-brand-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">8</div>
                <div>
                  <h4 className="font-bold text-brand-green-dark">What percentage of work do you self-perform versus subcontract?</h4>
                  <p className="text-gray-600 text-sm">Understanding the self-perform ratio helps gauge quality control. Contractors who self-perform critical trades often deliver more consistent results.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="bg-brand-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">9</div>
                <div>
                  <h4 className="font-bold text-brand-green-dark">How do you communicate project status and handle issues?</h4>
                  <p className="text-gray-600 text-sm">Regular progress reports, online project portals, and clear escalation procedures indicate professional project management practices.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="bg-brand-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">10</div>
                <div>
                  <h4 className="font-bold text-brand-green-dark">What warranties do you provide, and what is your approach to warranty service?</h4>
                  <p className="text-gray-600 text-sm">Standard warranties, warranty walk-through schedules, and a track record of responsive warranty service demonstrate commitment to long-term quality.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Contractor Comparison Checklist
            </h2>
            <p className="text-gray-600 mb-4">
              Use this comparison table when evaluating multiple contractors for your Tampa Bay commercial project:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Evaluation Criteria</th>
                    <th className="px-6 py-3 text-left">Weight</th>
                    <th className="px-6 py-3 text-left">What to Look For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Licensing & Insurance</td>
                    <td className="px-6 py-4">Pass/Fail</td>
                    <td className="px-6 py-4">Valid CGC license, adequate coverage</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Relevant Experience</td>
                    <td className="px-6 py-4">25%</td>
                    <td className="px-6 py-4">Similar projects in Tampa Bay</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">References & Reputation</td>
                    <td className="px-6 py-4">20%</td>
                    <td className="px-6 py-4">Verified client testimonials</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Price/Value</td>
                    <td className="px-6 py-4">20%</td>
                    <td className="px-6 py-4">Competitive but not lowest bidder</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Project Team</td>
                    <td className="px-6 py-4">15%</td>
                    <td className="px-6 py-4">Experienced PM, clear structure</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Safety Record</td>
                    <td className="px-6 py-4">10%</td>
                    <td className="px-6 py-4">EMR below 1.0, documented program</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Financial Stability</td>
                    <td className="px-6 py-4">10%</td>
                    <td className="px-6 py-4">Bonding capacity, references</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Red Flags to Watch For
            </h2>
            <p className="text-gray-600 mb-4">
              Be cautious if you encounter any of these warning signs during your contractor evaluation:
            </p>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Warning Signs of Problematic Contractors
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Significantly lower bid than competitors (20%+ below average often indicates missed scope or future cost overruns)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Reluctance to provide references or insurance certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>High-pressure sales tactics or demands for large upfront deposits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Vague contract terms or resistance to detailed scope documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>History of litigation or unresolved BBB complaints</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>No physical office presence in Tampa Bay area</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Inability to provide proof of active workers' compensation coverage</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Understanding Contractor Pricing Models
            </h2>
            <p className="text-gray-600 mb-6">
              Commercial contractors in Tampa Bay typically offer several pricing structures. Understanding these helps you evaluate proposals effectively:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-2">Lump Sum (Fixed Price)</h4>
                <p className="text-gray-600">The contractor provides a fixed total price for the complete scope. Best for projects with well-defined plans and specifications. Provides cost certainty but less flexibility for changes.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-2">Cost Plus with GMP (Guaranteed Maximum Price)</h4>
                <p className="text-gray-600">The contractor bills actual costs plus a fee, but guarantees the total won't exceed a maximum. Offers transparency and savings sharing while protecting against overruns. Popular for larger Tampa Bay projects.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-2">Design-Build</h4>
                <p className="text-gray-600">Single contract covering both design and construction. Streamlines communication, can accelerate schedules, and provides single-point accountability. Florida Construction Specialists excels in this delivery method.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Why Tampa Business Owners Choose Florida Construction Specialists
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists has served the Tampa Bay commercial construction market for decades, building a reputation for quality, integrity, and client satisfaction. Our approach addresses every consideration outlined in this guide:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Licensed and Bonded:</strong> Valid Florida CGC license with comprehensive insurance coverage exceeding industry standards</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Deep Local Expertise:</strong> Decades of experience specifically in Tampa, Lakeland, Sarasota, and surrounding communities</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Proven Track Record:</strong> Extensive portfolio of completed commercial projects with verifiable references</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Financial Stability:</strong> Strong bonding capacity and established banking relationships</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Safety Excellence:</strong> EMR below industry average, OSHA-certified supervisors, documented safety program</span>
              </li>
            </ul>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions About Choosing a Commercial Contractor
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How many contractors should I get bids from for my Tampa commercial project?
                  </h3>
                  <p className="text-gray-600">
                    We recommend soliciting 3-5 bids for most commercial projects. Fewer than three doesn't provide adequate comparison, while more than five becomes difficult to evaluate thoroughly. Focus on pre-qualified contractors who meet your basic requirements before issuing bid invitations.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Should I always choose the lowest bidder?
                  </h3>
                  <p className="text-gray-600">
                    No. In commercial construction, the lowest bidder is often not the best choice. Bids significantly below the average (15-20% or more) often indicate missed scope, inadequate understanding of Florida building requirements, or a strategy of aggressive change orders. Evaluate bids in context of contractor qualifications, not just price.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How can I verify a contractor's Florida license?
                  </h3>
                  <p className="text-gray-600">
                    Visit the Florida Department of Business and Professional Regulation (DBPR) website at myfloridalicense.com. Enter the contractor's name or license number to verify active status, view any complaints or disciplinary actions, and confirm their license scope covers commercial construction (look for CGC - Certified General Contractor).
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What should I look for when checking contractor references?
                  </h3>
                  <p className="text-gray-600">
                    Ask references specific questions: Was the project completed on time? Were there significant change orders? How did the contractor handle problems? Would you hire them again? Also ask about the project manager—is that same person proposed for your project? Visit completed projects if possible to assess quality firsthand.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How important is local Tampa Bay experience versus general construction experience?
                  </h3>
                  <p className="text-gray-600">
                    Local experience is critical in Florida. Hurricane code requirements, permitting processes, soil conditions, and climate considerations vary significantly from other regions. A contractor new to Tampa Bay may underestimate these factors, leading to code compliance issues, permit delays, and inappropriate material selections. Prioritize contractors with demonstrated Tampa Bay project history.
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
            Ready to Discuss Your Commercial Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists today for a free consultation. Discover why Tampa Bay businesses trust us as their commercial contractor of choice.
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
