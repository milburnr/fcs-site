import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { Phone, CheckCircle, AlertTriangle, Calendar, FileText, Building2, Shield } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Condo Milestone Inspection Remediation Tampa | SB4-D Compliance Contractor",
  description: "Florida Construction Specialists provides SB4-D milestone inspection remediation for Tampa Bay condominiums. Expert structural repairs, SIRS compliance, and HOA board guidance for buildings 3+ stories.",
  keywords: "milestone inspection remediation Tampa, SB4-D contractor, condo structural repairs Tampa, SIRS compliance Florida, condominium inspection repairs, structural integrity reserve study",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Balcony Reconstruction", href: "/balcony-reconstruction/" },
  { name: "Condo Milestone Inspection Remediation", href: "/condo-milestone-inspection-remediation-tampa/" },
];

const faqs = [
  {
    question: "What is a milestone inspection under Florida's SB4-D?",
    answer: "A milestone inspection is a structural inspection required by Florida Senate Bill 4-D for condominium and cooperative buildings that are 3 stories or taller. Buildings must be inspected by 30 years of age (or 25 years if within 3 miles of the coast), then every 10 years thereafter. The inspection, performed by a licensed engineer or architect, identifies structural deterioration that could pose a safety risk."
  },
  {
    question: "What happens if our condo fails its milestone inspection?",
    answer: "If the Phase 1 visual inspection identifies signs of substantial structural deterioration, a Phase 2 inspection is required. This involves more detailed testing and analysis. Any structural issues identified must be remediated. The association must notify unit owners within 14 days of receiving the inspection report, and remediation timelines depend on severity—though there are no specific deadlines in the current law, failure to address issues creates significant liability for HOA boards."
  },
  {
    question: "How much does milestone inspection remediation cost?",
    answer: "Costs vary dramatically based on issues identified. Common repairs like concrete spalling and rebar corrosion on balconies might cost $50,000-$500,000 for a mid-size building. Major structural issues requiring significant concrete restoration or reinforcement can reach $2-10 million or more. Florida Construction Specialists provides detailed estimates after reviewing your inspection report."
  },
  {
    question: "What is a Structural Integrity Reserve Study (SIRS)?",
    answer: "SIRS is also required under SB4-D. Unlike traditional reserve studies, SIRS specifically examines structural components including roof, load-bearing walls, foundation, floor/ceiling systems, fireproofing, plumbing, electrical, waterproofing, and exterior painting. Associations must maintain reserves for these items and can no longer waive reserve funding for structural components."
  },
  {
    question: "Does insurance cover milestone inspection repairs?",
    answer: "Generally, no. Standard insurance policies exclude coverage for maintenance-related deterioration and wear. However, if deterioration was caused or accelerated by a covered event (hurricane damage, water intrusion from a covered loss), portions may be covered. We help associations document conditions and identify any potential insurance coverage."
  },
  {
    question: "How do we fund major remediation work?",
    answer: "Associations typically fund remediation through special assessments, loans, or a combination. Florida Construction Specialists works with HOA-experienced lenders and can help structure projects to align with financing timelines. We also identify opportunities to phase work when structurally appropriate, spreading costs over time."
  },
  {
    question: "Can you help us prepare for our milestone inspection?",
    answer: "Yes. We offer pre-inspection assessments to help associations understand potential issues before the formal inspection. This allows boards to budget appropriately and avoid surprises. We can also recommend qualified engineers for the official inspection itself."
  }
];

const internalLinks = [
  { href: "/balcony-reconstruction/", label: "Balcony Reconstruction Services" },
  { href: "/condo-balcony-inspection-requirements/", label: "Condo Balcony Inspection Requirements" },
  { href: "/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/balcony-restoration-and-exterior-waterproofing-for-longevity/", label: "Balcony Restoration & Waterproofing" },
  { href: "/structural-integrity-evaluation-in-tampa-post-disaster/", label: "Structural Integrity Evaluation" },
  { href: "/contact/", label: "Request Remediation Estimate" },
];

const commonIssues = [
  {
    title: "Concrete Spalling & Rebar Corrosion",
    description: "Salt air and moisture penetrate concrete, causing rebar to rust and expand. This creates visible spalling (concrete breaking off) and compromises structural integrity. Common on balconies, parking structures, and building exteriors.",
    severity: "High"
  },
  {
    title: "Balcony & Walkway Deterioration",
    description: "Post-tensioned concrete balconies and walkways are particularly vulnerable in Tampa's climate. Failed waterproofing allows water intrusion, leading to corrosion of cables and rebar. The Surfside collapse highlighted these risks.",
    severity: "Critical"
  },
  {
    title: "Waterproofing Failures",
    description: "Failed or aging waterproofing on roofs, balconies, and building envelope allows water intrusion that accelerates structural deterioration. Often the root cause of concrete and steel corrosion issues.",
    severity: "High"
  },
  {
    title: "Foundation & Settlement Issues",
    description: "Florida's soil conditions can lead to differential settlement. Cracks in foundations or load-bearing walls, sticking doors, or visible settling require engineering evaluation.",
    severity: "Critical"
  },
  {
    title: "Roof Structure Deterioration",
    description: "Wood rot, hurricane strap corrosion, and structural member damage are common in older buildings. SIRS specifically requires reserve funding for roof structural components.",
    severity: "Medium-High"
  }
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ArticleSchema
        headline="Condo Milestone Inspection Remediation in Tampa"
        description="Expert guidance on Florida SB4-D milestone inspection compliance and structural remediation for Tampa Bay condominiums."
        datePublished="2026-01-27"
        dateModified="2026-01-27"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2024/01/balcony-reconstruction.webp"
            alt="Condo balcony structural inspection and remediation in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/50 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <span className="text-amber-200 font-semibold">Florida SB4-D Compliance Required</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Condo Milestone Inspection Remediation in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200 mb-8">
            Your building failed its milestone inspection—or you're preparing for one. Florida Construction Specialists helps HOA boards navigate SB4-D requirements with expert structural remediation that protects residents and your association.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Remediation Estimate
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

      {/* Urgency/Context Section */}
      <section className="section bg-amber-50 border-y border-amber-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Your SB4-D Obligations</h2>
                <p className="text-gray-700 mb-4">
                  Following the tragic Surfside condominium collapse in 2021, Florida enacted Senate Bill 4-D establishing mandatory structural inspections for condominium and cooperative buildings. If your Tampa Bay building is 3 stories or taller, you're subject to these requirements:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green-dark flex-shrink-0 mt-0.5" />
                    <span><strong>30-year milestone inspection</strong> required (25 years if within 3 miles of coast)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green-dark flex-shrink-0 mt-0.5" />
                    <span><strong>Structural Integrity Reserve Study (SIRS)</strong> required by December 31, 2024</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green-dark flex-shrink-0 mt-0.5" />
                    <span><strong>Reserve funding</strong> for structural components can no longer be waived</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green-dark flex-shrink-0 mt-0.5" />
                    <span><strong>Board liability</strong> for failure to address identified structural issues</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Tampa Bay Condos Face Unique Structural Challenges
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                Tampa Bay's coastal environment is particularly harsh on concrete structures. The combination of salt air, high humidity, intense UV exposure, and periodic hurricane-force winds accelerates deterioration in ways that inland buildings don't experience. Many Tampa Bay condominiums built in the 1970s-1990s are now reaching the age where deferred maintenance meets mandatory inspection requirements.
              </p>
              <p>
                Florida Construction Specialists has been helping Tampa Bay condominium associations address structural issues for over 20 years. We've seen the same patterns repeatedly: waterproofing failures leading to water intrusion, which causes rebar corrosion, which leads to concrete spalling, which—if left unaddressed—can compromise structural integrity.
              </p>
              <p>
                Our approach to milestone inspection remediation focuses on solving root causes, not just cosmetic repairs. When we restore a balcony or parking structure, we address the waterproofing failures that caused the deterioration, restore structural capacity with proper concrete repair techniques, and protect against future damage with appropriate coatings and drainage systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Common Issues Found in Milestone Inspections
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are the structural deficiencies we most frequently remediate for Tampa Bay condominiums
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {commonIssues.map((issue, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-brand-green-dark">{issue.title}</h3>
                  <span className={`text-xs font-bold px-2 py-1 rounded ${
                    issue.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                    issue.severity === 'High' ? 'bg-amber-100 text-amber-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {issue.severity}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{issue.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Our Milestone Remediation Process
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-green-dark text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Inspection Report Review</h3>
                  <p className="text-gray-700">
                    We thoroughly review your engineer's milestone inspection report, identifying all items requiring remediation. We meet with your board to explain findings in plain language and answer questions about severity and urgency.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-green-dark text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Detailed Scope & Estimate</h3>
                  <p className="text-gray-700">
                    We develop a comprehensive scope of work addressing all identified issues. Our estimate breaks down costs by building area and repair type, helping boards understand where money is going and prioritize if needed.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-green-dark text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Financing Coordination</h3>
                  <p className="text-gray-700">
                    Major remediation often requires financing beyond reserves. We work with HOA-experienced lenders and can help structure project phases to align with financing and special assessment timelines.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-green-dark text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Remediation Execution</h3>
                  <p className="text-gray-700">
                    Our crews execute repairs with minimal disruption to residents. We coordinate access schedules, maintain clear communication about work progress, and ensure proper containment and safety measures throughout.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-green-dark text-white rounded-full flex items-center justify-center font-bold text-xl">5</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Documentation & Certification</h3>
                  <p className="text-gray-700">
                    Upon completion, we provide comprehensive documentation of all repairs performed. Your inspecting engineer can then certify that identified deficiencies have been addressed, satisfying SB4-D requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FCS */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Why HOA Boards Choose Florida Construction Specialists
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Building2 className="w-10 h-10 text-brand-green-dark mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">In-House Engineering</h3>
                <p className="text-gray-600">
                  Our financial strength allows us to take on large-scale remediation projects that smaller contractors can't bond. This protects your association if anything goes wrong.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Shield className="w-10 h-10 text-brand-green-dark mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">20+ Years HOA Experience</h3>
                <p className="text-gray-600">
                  We understand HOA dynamics—board approval processes, owner communication requirements, and the importance of minimizing disruption to residents.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <FileText className="w-10 h-10 text-brand-green-dark mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Complete Documentation</h3>
                <p className="text-gray-600">
                  We provide the thorough documentation boards need for records, insurance purposes, and demonstrating fiduciary compliance to unit owners.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Calendar className="w-10 h-10 text-brand-green-dark mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Schedule Reliability</h3>
                <p className="text-gray-600">
                  We commit to realistic schedules and stick to them. Our project managers provide weekly updates so boards always know project status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Related Services for Condominium Associations"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Facing Milestone Inspection Remediation?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't let SB4-D requirements overwhelm your board. Florida Construction Specialists helps Tampa Bay condominium associations understand their options and execute remediation that protects residents and property values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request Free Board Consultation
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
