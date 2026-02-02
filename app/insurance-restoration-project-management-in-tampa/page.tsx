import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, ClipboardList, Users, Calendar, Target } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Insurance Restoration Project Management Tampa | Commercial Property Recovery",
  description: "Expert insurance restoration project management in Tampa. Coordinated claim support, contractor oversight, timeline management, and quality control for commercial properties.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Insurance Restoration Project Management in Tampa", href: "/insurance-restoration-project-management-in-tampa/" },
];

const faqs = [
  {
    question: "What does insurance restoration project management include?",
    answer: "Insurance restoration project management encompasses the entire recovery process: initial damage assessment and documentation, insurance claim coordination and support, contractor selection and oversight, scope development and change order management, schedule development and monitoring, quality control and inspections, budget tracking and cost control, permit coordination with local authorities, communication between all stakeholders, and final punch list and project closeout. For commercial properties, effective project management ensures restoration is completed correctly, on time, and within the insurance claim settlement."
  },
  {
    question: "How does project management affect insurance claim outcomes?",
    answer: "Professional project management significantly improves claim outcomes by: ensuring all damage is documented before repairs begin, creating detailed scopes that capture all necessary work, coordinating change orders when additional damage is discovered, maintaining documentation that supports supplemental claims, managing timelines that affect business interruption coverage, and providing expert advocacy in scope discussions with adjusters. Well-managed projects typically recover 20-30% more than poorly coordinated restorations."
  },
  {
    question: "What's the typical timeline for commercial insurance restoration in Tampa?",
    answer: "Timelines vary significantly based on damage type and extent. Water damage restoration: 1-4 weeks. Fire damage restoration: 2-6 months. Hurricane damage: 3-12 months depending on severity. Major structural damage: 6-18 months. Tampa Bay's permitting process, contractor availability (especially after major storms), and material supply chains all affect timelines. Professional project management focuses on identifying and addressing schedule risks early to minimize delays."
  },
  {
    question: "How do you coordinate between insurance adjusters and restoration contractors?",
    answer: "Effective coordination requires understanding both perspectives. We translate technical construction requirements into insurance claim language, prepare documentation that meets adjuster requirements, attend joint inspections to ensure all damage is acknowledged, manage the change order process when hidden damage is discovered, and facilitate communication to resolve disputes before they delay work. Our team understands Florida insurance regulations and claim procedures, enabling effective advocacy while maintaining productive relationships with adjusters."
  },
  {
    question: "What happens if additional damage is discovered during restoration?",
    answer: "Hidden damage is common, especially in water and fire restoration. When discovered, we: immediately document the additional damage with photos and detailed descriptions, notify the insurance company through proper channels, prepare supplemental claims with supporting estimates, coordinate reinspection with the adjuster, manage the approval process while minimizing work delays, and adjust project schedules and budgets accordingly. Florida Statute 627.70131 provides for supplemental claims, and proper procedures protect your right to recover for additional damage."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/tampas-insurance-restoration-reporting-and-documentation/", label: "Reporting and Documentation" },
  { href: "/technology-role-in-insurance-restoration-processes-in-tampa/", label: "Technology in Restoration" },
  { href: "/tampas-insurance-restoration-for-commercial-interiors/", label: "Commercial Interior Restoration" },
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
            src="/images/hurricane-ian/hurricane-ian-display.webp"
            alt="Insurance restoration project management in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Insurance Restoration Project Management in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Expert project management for commercial insurance restoration. Coordinating contractors, adjusters, and stakeholders to restore your Tampa Bay property efficiently while maximizing claim recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Project Management Help
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
              Commercial insurance restoration projects involve complex coordination between property owners, insurance companies, adjusters, contractors, subcontractors, inspectors, and permitting authorities. Without professional project management, restoration efforts can become disorganized, expensive, and contentious. Florida Construction Specialists provides comprehensive project management services that keep your Tampa Bay commercial restoration on track while supporting maximum insurance claim recovery.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Why Project Management Matters for Insurance Claims</h3>
                  <p className="text-amber-700">Poorly managed restoration projects often result in underpaid claims, cost overruns, and delays that extend business interruption. Professional project management ensures proper documentation, coordinates with insurance requirements, and manages the complex process of restoring commercial properties within claim settlements. The investment in professional management typically saves 15-25% in avoided problems and recovered claim amounts.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Project Management Services
            </h2>
            
            <p className="text-gray-600 mb-6">
              Insurance restoration requires specialized project management that understands both construction and insurance claim requirements. Our team brings expertise in both areas, ensuring your project meets construction quality standards while maintaining documentation and procedures that support your insurance recovery.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <ClipboardList className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Pre-Construction Phase</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Damage assessment and documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Scope of work development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Insurance claim coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Permit strategy and filing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Users className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Contractor Coordination</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Subcontractor selection and vetting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Contract administration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Work coordination and sequencing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Performance monitoring</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Calendar className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Schedule Management</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Critical path scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Progress tracking and reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Delay identification and mitigation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Schedule impact documentation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Target className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Quality & Closeout</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Quality control inspections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Code compliance verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Punch list management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Final documentation package</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Project Management Costs and Value
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Project Size</th>
                    <th className="px-6 py-4 text-left">PM Fee Range</th>
                    <th className="px-6 py-4 text-left">Services Included</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">$50,000 - $150,000</td>
                    <td className="px-6 py-4">8-12% of restoration cost</td>
                    <td className="px-6 py-4 text-gray-600">Basic coordination and oversight</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">$150,000 - $500,000</td>
                    <td className="px-6 py-4">6-10% of restoration cost</td>
                    <td className="px-6 py-4 text-gray-600">Full PM services, claim support</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">$500,000 - $2,000,000</td>
                    <td className="px-6 py-4">5-8% of restoration cost</td>
                    <td className="px-6 py-4 text-gray-600">Dedicated PM, adjuster coordination</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">$2,000,000+</td>
                    <td className="px-6 py-4">4-6% of restoration cost</td>
                    <td className="px-6 py-4 text-gray-600">Full team, executive reporting</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Project management fees are typically included in insurance claim recovery as general contractor overhead. Professional PM services typically recover their cost through improved claim outcomes and avoided problems.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The Insurance Restoration Project Lifecycle
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Emergency Response & Stabilization</h3>
                  <p className="text-gray-600">Secure the property, implement emergency mitigation, document conditions as-found, and coordinate with insurance company notification requirements. Speed is critical to prevent secondary damage and protect claim rights.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Assessment & Claim Development</h3>
                  <p className="text-gray-600">Comprehensive damage assessment, scope of work development, insurance claim preparation and submission, and coordination with adjusters on initial inspections. Professional documentation supports maximum claim recovery.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Planning & Procurement</h3>
                  <p className="text-gray-600">Detailed planning, subcontractor selection and contracting, permit applications, material procurement, and schedule development. Proper planning prevents costly changes during construction.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Construction & Monitoring</h3>
                  <p className="text-gray-600">Active construction management, daily coordination, quality control, progress documentation, change order management, and ongoing insurance claim coordination. Consistent oversight ensures quality and schedule.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Closeout & Final Claim</h3>
                  <p className="text-gray-600">Punch list completion, final inspections, certificate of occupancy, warranty documentation, and final insurance claim settlement including any supplements or recoverable depreciation. Proper closeout protects your interests.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Professional PM Outperforms Self-Management
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">Self-Managed Challenges</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Contractor coordination conflicts</li>
                  <li>• Insurance claim documentation gaps</li>
                  <li>• Schedule delays and overruns</li>
                  <li>• Quality issues requiring rework</li>
                  <li>• Missed supplemental claim opportunities</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Professional PM Benefits</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Coordinated team execution</li>
                  <li>• Complete claim documentation</li>
                  <li>• Proactive schedule management</li>
                  <li>• Quality control throughout</li>
                  <li>• Maximum claim recovery</li>
                </ul>
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
              <h3 className="text-2xl font-bold mb-4">Expert Project Management for Your Restoration</h3>
              <p className="mb-6 text-gray-200">
                Florida Construction Specialists provides comprehensive project management for commercial insurance restoration throughout Tampa Bay. Let our experienced team coordinate your restoration while you focus on your business.
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
            Professional Project Management for Insurance Restoration
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for expert restoration project management throughout Tampa Bay.
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
