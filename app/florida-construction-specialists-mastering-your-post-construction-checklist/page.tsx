import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ClipboardList, FileCheck, Shield, Users, Clock, AlertTriangle, Building2, Wrench, Key, BookOpen } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema, ArticleSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Master Your Post-Construction Checklist",
  description: "Complete post-construction checklist for Florida commercial projects. Expert guidance on inspections, documentation, warranty management, and occupancy preparation from Tampa Bay's leading contractor.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Mastering Your Post-Construction Checklist", href: "/florida-construction-specialists-mastering-your-post-construction-checklist/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/tips-for-post-construction-in-florida-commercial-sector/", label: "Post-Construction Tips" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/construction-project-management-and-scheduling/", label: "Project Management Guide" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const checklistCategories = [
  {
    icon: ClipboardList,
    title: "Punch List Items",
    description: "Complete documentation and systematic resolution of all outstanding construction items.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Approvals",
    description: "Final inspections, certificates of occupancy, and all required government approvals.",
  },
  {
    icon: BookOpen,
    title: "Documentation Package",
    description: "Warranties, O&M manuals, as-built drawings, and training documentation.",
  },
  {
    icon: Key,
    title: "Occupancy Preparation",
    description: "Keys, access systems, utility transfers, and move-in coordination.",
  },
];

const detailedChecklist = [
  {
    category: "Final Inspections",
    items: [
      "Building final inspection completed and passed",
      "Fire marshal inspection and approval obtained",
      "Elevator inspection certificate received (if applicable)",
      "Health department approval (for restaurants, medical, etc.)",
      "Certificate of Occupancy issued",
      "All permit cards signed off and closed",
      "Environmental permits closed (EPC, SWFWMD)",
    ],
  },
  {
    category: "Systems Commissioning",
    items: [
      "HVAC systems tested and balanced",
      "Electrical systems tested and functional",
      "Plumbing pressure tested, no leaks",
      "Fire alarm system tested and certified",
      "Fire sprinkler system tested and certified",
      "Emergency generator tested under load",
      "Building automation system programmed and tested",
      "Elevator safety testing complete",
    ],
  },
  {
    category: "Documentation Turnover",
    items: [
      "As-built drawings delivered (architectural, MEP, structural)",
      "Operation and maintenance manuals for all equipment",
      "Warranty documentation compiled and organized",
      "Material safety data sheets (MSDS) for all products",
      "Attic stock (extra materials) identified and stored",
      "Test reports and certifications compiled",
      "Subcontractor contact list provided",
      "Emergency contact information documented",
    ],
  },
  {
    category: "Training & Handover",
    items: [
      "HVAC system training completed",
      "Fire alarm and life safety training conducted",
      "Building automation training provided",
      "Elevator operation training (if applicable)",
      "Security system training completed",
      "Training documented with sign-off sheets",
      "Video recording of training sessions (recommended)",
    ],
  },
  {
    category: "Physical Items",
    items: [
      "All keys accounted for and logged",
      "Access cards/fobs programmed and delivered",
      "Master keying documentation provided",
      "Spare parts and attic stock delivered",
      "Equipment manuals physically delivered",
      "Site cleaned to occupancy standard",
      "Landscaping installation complete",
      "Parking lot striping and signage complete",
    ],
  },
  {
    category: "Financial Closeout",
    items: [
      "All change orders finalized and signed",
      "Final application for payment submitted",
      "Retainage release request submitted",
      "Lien waivers from all contractors/suppliers",
      "Consent of surety (for bonded projects)",
      "Final accounting reconciliation",
    ],
  },
];

const warrantyCoverage = [
  { item: "General Contractor Workmanship", typical: "1 year", notes: "Standard in Florida commercial contracts" },
  { item: "Roofing Systems", typical: "10-25 years", notes: "Manufacturer warranty with proper maintenance" },
  { item: "HVAC Equipment", typical: "1-5 years parts, 10+ years compressor", notes: "Register warranty promptly" },
  { item: "Windows/Glazing", typical: "10-20 years", notes: "Impact-rated products often longer" },
  { item: "Plumbing Fixtures", typical: "1-lifetime", notes: "Varies significantly by manufacturer" },
  { item: "Electrical Equipment", typical: "1-3 years", notes: "Extended warranties often available" },
  { item: "Flooring", typical: "1-25 years", notes: "Depends on product type" },
  { item: "Paint/Finishes", typical: "1 year", notes: "Coverage for peeling/defects only" },
];

const occupancyTimeline = [
  { week: "Week -4", activities: "Begin punch list walkthroughs, schedule final inspections" },
  { week: "Week -3", activities: "Complete major punch list items, systems commissioning" },
  { week: "Week -2", activities: "Final inspections, obtain CO, training sessions begin" },
  { week: "Week -1", activities: "Final cleaning, documentation turnover, key handover" },
  { week: "Week 0", activities: "Certificate of Occupancy issued, move-in begins" },
  { week: "Week +1", activities: "Punch list completion continues, training finishes" },
  { week: "Week +2-4", activities: "Minor punch items resolved, warranty log established" },
];

const faqs = [
  {
    question: "What is the most commonly missed item on post-construction checklists?",
    answer: "Training documentation is frequently overlooked. Contractors conduct training but fail to document it properly. This becomes problematic when staff turnover occurs or warranty claims require proof of proper operation. Always require signed training logs, and we recommend video recording all training sessions for future reference."
  },
  {
    question: "How do I organize the volume of closeout documentation I'll receive?",
    answer: "Create a structured digital filing system before closeout begins. Categories should include: Permits/Inspections, As-Builts, O&M Manuals, Warranties, Training Records, Test Reports, and Financial. Request electronic copies of everything in addition to physical binders. Many owners use building management software to organize and access documentation—it's worth the investment for larger facilities."
  },
  {
    question: "What should I do if punch list items aren't being resolved?",
    answer: "First, ensure you're withholding appropriate retainage—this is your leverage. Send written notice of outstanding items with specific deadlines. If items remain unresolved, escalate to company ownership. For persistent issues, you may need to engage your attorney to enforce contract terms. Document everything in writing. Never make final payment until all items are satisfactorily resolved or formally deferred with appropriate adjustments."
  },
  {
    question: "How do I ensure warranty coverage isn't voided?",
    answer: "Three key practices: First, register all warranties promptly—many have registration deadlines. Second, follow all maintenance requirements exactly as specified; many warranties are voided by improper maintenance. Third, document all maintenance activities with dates, service providers, and work performed. When warranty claims arise, you'll need this documentation to support your claim."
  },
  {
    question: "What Tampa Bay-specific items should be on my checklist?",
    answer: "Florida-specific items include: hurricane protection verification (impact windows, shutters, roof attachments), HVAC humidity control testing, drainage system verification for heavy rains, waterproofing warranty documentation, generator load testing, and flood zone compliance documentation if applicable. Also verify all contractors held appropriate Florida licenses throughout the project for insurance purposes."
  }
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ArticleSchema
        headline="Mastering Your Post-Construction Checklist"
        description="Complete post-construction checklist for Florida commercial projects."
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Post-construction checklist for commercial buildings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Mastering Your Post-Construction Checklist
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            A comprehensive guide to closing out your commercial construction project in Tampa Bay. From final inspections to warranty management, ensure nothing falls through the cracks.
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

      {/* Category Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {checklistCategories.map((category, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <category.icon className="w-12 h-12 text-brand-green mx-auto mb-4" />
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
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
              Why a Systematic Post-Construction Checklist Matters
            </h2>
            <p className="text-gray-600 mb-6">
              The final weeks of a construction project are when details matter most. After months of coordinated effort, the project reaches completion—but "complete" is a relative term. Without a rigorous post-construction checklist, critical items get missed: warranties go unregistered, documentation is incomplete, training doesn't happen, and problems that should have been caught persist into occupancy.
            </p>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists has refined our post-construction process through hundreds of commercial projects across Tampa Bay. Our checklist approach ensures every project receives the same systematic attention to closeout, regardless of size or complexity. This guide shares our comprehensive checklist along with the context needed to use it effectively.
            </p>
            <p className="text-gray-600 mb-6">
              The best time to review this checklist is before construction begins—understanding what's required at the end shapes expectations and preparation throughout the project. The second best time is now. Wherever you are in your project, these principles will help you achieve a complete, professional closeout.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The Four Pillars of Successful Closeout
            </h2>
            <p className="text-gray-600 mb-6">
              Post-construction activities fall into four interconnected categories. Success requires attention to all four—neglecting any one creates gaps that cause problems for years.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Physical Completion:</strong> The building must be physically complete and functional. This means all construction work finished, systems operational, and spaces ready for occupancy. The punch list process ensures all items meet contract requirements.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Regulatory Compliance:</strong> All permits must be closed and certificates obtained. Without proper regulatory closeout, you may face legal issues, insurance problems, and difficulty selling or refinancing the property later.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Knowledge Transfer:</strong> The building's operational knowledge must transfer from the construction team to the owner/operator. This includes formal training, documentation, and establishment of maintenance programs.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Financial Settlement:</strong> All accounts must be settled, including final payments, retainage release, lien waivers, and warranty documentation. Proper financial closeout protects you from future claims.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Timing Your Post-Construction Activities
            </h2>
            <p className="text-gray-600 mb-6">
              Post-construction isn't a single event—it's a coordinated sequence that typically spans 4-8 weeks from substantial completion to final closeout. Starting too late creates unnecessary pressure; proper planning builds in time for issues that inevitably arise.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Typical Post-Construction Timeline
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Timeframe</th>
                    <th className="px-6 py-4 text-left font-heading">Key Activities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {occupancyTimeline.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-brand-green-dark whitespace-nowrap">{row.week}</td>
                      <td className="px-6 py-4 text-gray-600">{row.activities}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Checklist */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Complete Post-Construction Checklist
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Use this comprehensive checklist to ensure thorough closeout of your Tampa Bay commercial project.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {detailedChecklist.map((section, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">{section.category}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-5 h-5 border-2 border-gray-300 rounded mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Typical Warranty Coverage Guide
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Know what warranty coverage to expect for major building components.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Item</th>
                    <th className="px-6 py-4 text-left font-heading">Typical Coverage</th>
                    <th className="px-6 py-4 text-left font-heading">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {warrantyCoverage.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.item}</td>
                      <td className="px-6 py-4 text-brand-green font-semibold">{row.typical}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Best Practices for Checklist Execution
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <Clock className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Start Early</h3>
                <p className="text-gray-600 mb-4">
                  Begin gathering documentation and scheduling inspections 4-6 weeks before anticipated completion. Late starts create pressure that leads to shortcuts.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Schedule final inspections in advance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Begin collecting warranties as equipment installs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Plan training sessions with appropriate staff</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <Users className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Assign Responsibility</h3>
                <p className="text-gray-600 mb-4">
                  Every checklist item should have a named person responsible and a deadline. Ambiguous ownership leads to items falling through cracks.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Designate owner representative for closeout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Hold weekly closeout meetings with action items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Track progress in shared document</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <FileCheck className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Document Everything</h3>
                <p className="text-gray-600 mb-4">
                  Written records protect you. Verbal agreements, informal sign-offs, and undocumented training create problems later.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Photograph all punch list items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Obtain signed training acknowledgments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Video record training sessions</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <Shield className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Protect Your Leverage</h3>
                <p className="text-gray-600 mb-4">
                  Retainage exists specifically to ensure closeout completion. Don't release it until all checklist items are genuinely complete.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Hold retainage until documentation complete</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Require lien waivers before final payment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Document any deferred items in writing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Florida-Specific Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Florida-Specific Closeout Requirements
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Florida's climate and regulatory environment create closeout requirements that don't exist in other markets. Your checklist should include these Florida-specific items:
              </p>
            </div>

            <div className="bg-brand-green/5 rounded-xl p-8 border border-brand-green/20">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6 font-heading flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-brand-gold" />
                Florida-Specific Checklist Items
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Hurricane Preparedness</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Impact window/door certifications collected</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Storm shutter storage locations documented</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Emergency generator load tested</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Roof attachment inspection complete</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Climate Considerations</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">HVAC balanced for humidity control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Drainage systems tested with water</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Waterproofing warranties registered</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Pest control bond established</span>
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
            Need Help with Project Closeout?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists brings systematic closeout processes to every project. Contact us to discuss how we can ensure your commercial construction project closes out completely and professionally.
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
