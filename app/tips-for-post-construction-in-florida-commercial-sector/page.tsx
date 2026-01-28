import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ClipboardCheck, Shield, FileText, Users, Clock, AlertTriangle, Building2, Wrench } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema, ArticleSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tips for Post-Construction in Florida Commercial Sector | Tampa Bay Guide",
  description: "Essential post-construction tips for Florida commercial projects. From final inspections to warranty management, learn how to successfully close out your Tampa Bay construction project.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tips for Post Construction in Florida Commercial Sector", href: "/tips-for-post-construction-in-florida-commercial-sector/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/florida-construction-specialists-mastering-your-post-construction-checklist/", label: "Post-Construction Checklist" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/avoid-commercial-construction-delays-in-florida/", label: "Avoiding Construction Delays" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const postConstructionPhases = [
  {
    icon: ClipboardCheck,
    title: "Punch List Completion",
    description: "Systematic walkthrough identifying all incomplete or deficient items for correction before final acceptance.",
  },
  {
    icon: FileText,
    title: "Documentation & Turnover",
    description: "Comprehensive handover of warranties, manuals, as-built drawings, and maintenance schedules.",
  },
  {
    icon: Shield,
    title: "Final Inspections",
    description: "Coordination of all required inspections including fire marshal, health department, and building final.",
  },
  {
    icon: Wrench,
    title: "Warranty Activation",
    description: "Proper registration and documentation of all warranty periods for equipment and workmanship.",
  },
];

const closeoutDocuments = [
  { document: "Certificate of Occupancy", description: "Official approval to occupy the building", timeline: "At project completion" },
  { document: "As-Built Drawings", description: "Drawings reflecting actual construction conditions", timeline: "Within 30 days of completion" },
  { document: "O&M Manuals", description: "Operation and maintenance guides for all systems", timeline: "At or before substantial completion" },
  { document: "Warranty Documentation", description: "Manufacturer and contractor warranties compiled", timeline: "At substantial completion" },
  { document: "Lien Waivers", description: "Releases from all contractors and suppliers", timeline: "With final payment" },
  { document: "Training Records", description: "Documentation of owner training on building systems", timeline: "Before occupancy" },
  { document: "Attic Stock", description: "Extra materials for future repairs and matching", timeline: "At substantial completion" },
  { document: "Keys & Access Cards", description: "All keys, access credentials, and master lists", timeline: "At substantial completion" },
];

const floridaSpecificItems = [
  {
    category: "Hurricane Preparedness",
    items: ["Impact window certifications", "Storm shutter storage locations", "Emergency generator testing", "Hurricane tie inspections"],
  },
  {
    category: "Moisture Management",
    items: ["HVAC balancing for humidity control", "Drainage system verification", "Waterproofing warranty activation", "Mold prevention protocols"],
  },
  {
    category: "Energy Systems",
    items: ["HVAC commissioning in Florida climate", "Energy code compliance verification", "Solar panel system activation", "Building automation testing"],
  },
  {
    category: "Regulatory Compliance",
    items: ["Fire alarm system acceptance", "Elevator certification", "Health department approval", "ADA compliance verification"],
  },
];

const commonIssues = [
  { issue: "HVAC Balancing", frequency: "Very Common", impact: "Comfort complaints, energy waste", solution: "Professional balancing with verification testing" },
  { issue: "Water Intrusion", frequency: "Common", impact: "Damage, mold risk", solution: "Water testing before closeout, warranty documentation" },
  { issue: "Finish Defects", frequency: "Common", impact: "Aesthetic issues", solution: "Thorough punch list with good lighting" },
  { issue: "Systems Training", frequency: "Occasional", impact: "Operational problems", solution: "Documented training with video recording" },
  { issue: "Missing Documentation", frequency: "Common", impact: "Maintenance difficulties", solution: "Checklist-driven document collection" },
  { issue: "Permit Closeout", frequency: "Occasional", impact: "Legal/insurance issues", solution: "Track all permits to final status" },
];

const faqs = [
  {
    question: "What is the difference between substantial completion and final completion?",
    answer: "Substantial completion occurs when the building is sufficiently complete for its intended use—you can occupy and operate the space even though minor items remain. This triggers warranty start dates and often releases retainage. Final completion happens when every item on the punch list is resolved and all documentation is delivered. Typically 30-60 days separate these milestones."
  },
  {
    question: "How long should I expect the closeout process to take?",
    answer: "For a typical commercial project in Tampa Bay, closeout takes 30-90 days from substantial completion to final completion. Complex projects with many systems (medical facilities, laboratories) may take longer. The timeline depends on punch list complexity, inspection scheduling, documentation completeness, and owner responsiveness in reviewing materials. A well-organized contractor can significantly accelerate this process."
  },
  {
    question: "What warranties should I expect from a commercial construction project?",
    answer: "Standard commercial construction includes: one-year contractor warranty on workmanship, various manufacturer warranties on equipment (1-25 years depending on product), roof warranties (10-25 years for commercial systems), and HVAC warranties (1-5 years on parts, 10+ years on compressors). Specialty systems like fire suppression have their own warranty structures. All warranties should be compiled and transferred to you at closeout."
  },
  {
    question: "What Florida-specific issues should I check during post-construction?",
    answer: "Florida's climate creates unique concerns: verify HVAC systems are properly balanced for humidity control (not just temperature), confirm all hurricane protection features are properly installed and certified, check drainage systems function correctly for heavy rains, verify roof attachments meet high-wind requirements, and ensure waterproofing systems are properly warrantied. These items prevent costly problems during Florida's challenging weather conditions."
  },
  {
    question: "How do I handle defects discovered after the project is closed out?",
    answer: "Document the defect with photos and written description, then submit a warranty claim to the contractor in writing. Most contractors have formal warranty request processes. For items within the one-year warranty period, the contractor is typically obligated to repair at no cost. For manufacturer warranties, work with the contractor to process claims. Keep detailed records of all warranty claims and resolutions."
  }
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ArticleSchema
        headline="Tips for Post-Construction in Florida Commercial Sector"
        description="Essential post-construction tips for Florida commercial projects."
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Post-construction services for commercial buildings in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Essential Tips for Post-Construction in Florida's Commercial Sector
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Successfully closing out your commercial construction project in Tampa Bay requires systematic attention to inspections, documentation, and Florida-specific requirements. Learn how to ensure a smooth transition from construction to operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Expert Guidance
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

      {/* Post-Construction Phases */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {postConstructionPhases.map((phase, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <phase.icon className="w-12 h-12 text-brand-green mx-auto mb-4" />
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Post-Construction Matters for Florida Commercial Projects
            </h2>
            <p className="text-gray-600 mb-6">
              The construction may be complete, but your project isn't truly finished until post-construction activities are properly executed. In Florida's commercial sector, this phase is particularly critical due to our unique climate challenges, strict building codes, and the long-term implications of proper closeout on building performance.
            </p>
            <p className="text-gray-600 mb-6">
              Many building owners rush through post-construction, eager to occupy their new space and begin operations. This haste often creates problems that persist for years—warranty coverage gaps, missing documentation that complicates future maintenance, unresolved defects that worsen over time, and systems that never perform as designed because commissioning was incomplete.
            </p>
            <p className="text-gray-600 mb-6">
              At Florida Construction Specialists, we've refined our post-construction processes through hundreds of commercial projects across Tampa Bay. We understand that successful closeout requires the same systematic attention as construction itself. This guide shares our approach and the lessons we've learned.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Understanding the Post-Construction Timeline
            </h2>
            <p className="text-gray-600 mb-6">
              Post-construction in Florida typically unfolds in predictable phases, though the specific timeline varies by project complexity and the efficiency of all parties involved.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Pre-Punch List (1-2 weeks before substantial completion):</strong> Before formally completing construction, the contractor should conduct internal quality reviews. This self-inspection identifies obvious issues before the owner's walkthrough, reducing frustration and accelerating the punch list process.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Punch List Generation (1-3 days):</strong> The owner, architect, and contractor walk through the completed building together, documenting all items requiring attention. Good lighting is essential—many finish defects only appear under proper illumination. Using digital punch list software with photo documentation streamlines the process.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Punch List Completion (2-4 weeks typically):</strong> The contractor systematically addresses all identified items. Some items resolve quickly; others may require material orders or subcontractor coordination. The owner should expect regular status updates and schedule re-inspection as areas are completed.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Final Inspections (1-2 weeks):</strong> All required government inspections must be passed and certificates obtained. In Tampa Bay, this typically includes building final, fire marshal, elevator (if applicable), and potentially health department for certain occupancies. These inspections cannot be scheduled until the building is truly complete.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Documentation Turnover (ongoing through closeout):</strong> Warranties, manuals, as-built drawings, and training should occur throughout this period, not just at the end. Staggering document delivery ensures you can begin using the building effectively while administrative closeout continues.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida-Specific Post-Construction Considerations
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's climate and regulatory environment create post-construction requirements that don't exist in other markets. Understanding these helps you ensure your building is truly ready for Florida conditions.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Hurricane Preparedness Verification:</strong> Before accepting the building, verify all hurricane protection elements are properly installed and documented. This includes impact-rated windows and doors (with certifications), storm shutters (with storage locations identified), roof tie-down inspections, and emergency generator testing. Your insurance carrier may require this documentation, and having it organized from the start saves headaches later.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>HVAC Commissioning for Florida Climate:</strong> Florida's humidity is as challenging as its heat. Verify that HVAC systems are properly balanced not just for temperature but for humidity control. Systems should be tested under actual Florida conditions, not just checked for airflow. Improper humidity control leads to mold, comfort complaints, and energy waste.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Drainage and Waterproofing:</strong> Florida's intense rainfall tests every building's water management systems. Before accepting the building, observe performance during an actual rain event if possible, or conduct water testing on critical waterproofing areas. Ensure all drainage systems flow properly and waterproofing warranties are fully documented and activated.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Energy Code Compliance:</strong> Florida Energy Code requires specific documentation at project completion. Ensure you receive the required compliance certificates and that all specified energy features are properly installed and functioning. This documentation may be required for occupancy permits.
            </p>
          </div>
        </div>
      </section>

      {/* Closeout Documents Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Essential Closeout Documentation
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Document</th>
                    <th className="px-6 py-4 text-left font-heading">Description</th>
                    <th className="px-6 py-4 text-left font-heading">When to Receive</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {closeoutDocuments.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.document}</td>
                      <td className="px-6 py-4 text-gray-600">{row.description}</td>
                      <td className="px-6 py-4 text-brand-green font-semibold">{row.timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Florida-Specific Items */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Florida-Specific Post-Construction Checklist
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {floridaSpecificItems.map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Punch List Best Practices */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Punch List Best Practices for Commercial Projects
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">During the Walkthrough</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Schedule walkthroughs during daylight with good artificial lighting also on</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Test every fixture, switch, outlet, and piece of equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Open and close every door, drawer, and window</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Check all finishes at eye level and from multiple angles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Take photos of every item noted for clear documentation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Managing Resolution</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Prioritize items by impact on operations and safety</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Set clear deadlines for completion with accountability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Require sign-off on each completed item</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Hold retainage until punch list completion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Document any items deferred and warranty coverage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Common Post-Construction Issues in Florida
            </h2>
            <p className="text-center text-gray-600 mb-8">
              These issues appear frequently in Tampa Bay commercial projects. Proactive attention prevents long-term problems.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Issue</th>
                    <th className="px-6 py-4 text-left font-heading">Frequency</th>
                    <th className="px-6 py-4 text-left font-heading">Impact</th>
                    <th className="px-6 py-4 text-left font-heading">Solution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {commonIssues.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.issue}</td>
                      <td className="px-6 py-4 text-gray-600">{row.frequency}</td>
                      <td className="px-6 py-4 text-red-600">{row.impact}</td>
                      <td className="px-6 py-4 text-brand-green">{row.solution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Management */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Managing Warranties for Long-Term Protection
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Warranties represent significant value that many building owners fail to fully capture. Proper warranty management during post-construction establishes the foundation for years of protection.
              </p>
            </div>

            <div className="bg-brand-green/5 rounded-xl p-8 border border-brand-green/20">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6 font-heading">Warranty Management Best Practices</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Organization</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Create a master warranty log with start/end dates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Store all warranty documents in accessible location</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Include contractor and manufacturer contact info</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Proactive Management</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Schedule 11-month walkthrough before warranty expires</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Document all warranty claims in writing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Follow maintenance requirements to maintain coverage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Need Help with Post-Construction Closeout?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists provides comprehensive post-construction services to ensure your Tampa Bay commercial project transitions smoothly from construction to operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Expert Guidance
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
