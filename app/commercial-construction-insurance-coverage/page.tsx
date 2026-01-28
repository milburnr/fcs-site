import Link from "next/link";
import Image from "next/image";
import { Phone, Shield, AlertTriangle, FileText, CheckCircle, DollarSign, Building2, HardHat, Umbrella } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Commercial Construction Insurance Coverage Guide | Florida Requirements",
  description: "Understand commercial construction insurance requirements in Florida. Learn about liability, workers' comp, builder's risk, and what coverage contractors should carry.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Construction Insurance Coverage", href: "/commercial-construction-insurance-coverage/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/hire-licensed-contractors-for-commercial-construction-project/", label: "Licensed Contractor Requirements" },
  { href: "/hiring-a-commercial-contractor-in-tampa/", label: "Hiring Guide" },
  { href: "/commercial-construction-project-on-schedule/", label: "Project Scheduling" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const insuranceTypes = [
  {
    icon: Shield,
    type: "General Liability Insurance",
    description: "Covers third-party bodily injury and property damage claims arising from construction activities.",
    typical: "$1M-$2M per occurrence, $2M-$4M aggregate",
    required: "Essential for all commercial projects",
    whoProvides: "Contractor",
    considerations: "Verify coverage extends to your specific project type and work activities.",
  },
  {
    icon: HardHat,
    type: "Workers' Compensation",
    description: "Covers employee injuries and illnesses occurring during work. Required by Florida law for employers.",
    typical: "Based on payroll and classification codes",
    required: "Legally required in Florida",
    whoProvides: "Contractor (for their employees)",
    considerations: "Verify all subcontractors also carry workers' comp—you could be liable if they don't.",
  },
  {
    icon: Building2,
    type: "Builder's Risk Insurance",
    description: "Covers the structure under construction against damage from fire, weather, vandalism, and other perils.",
    typical: "Based on project value, typically 0.5-2% of construction cost",
    required: "Essential for new construction and major renovations",
    whoProvides: "Owner or Contractor (per contract terms)",
    considerations: "Coverage should equal full replacement cost; verify covered perils and exclusions.",
  },
  {
    icon: Umbrella,
    type: "Umbrella/Excess Liability",
    description: "Provides additional liability coverage above primary policy limits.",
    typical: "$5M-$25M+ depending on project size",
    required: "Recommended for larger projects",
    whoProvides: "Contractor and/or Owner",
    considerations: "Large projects often require higher limits than primary policies provide.",
  },
  {
    icon: FileText,
    type: "Professional Liability (E&O)",
    description: "Covers design errors and omissions in design-build or construction management projects.",
    typical: "$1M-$5M per claim",
    required: "Essential for design-build contractors",
    whoProvides: "Design-build contractor or architect",
    considerations: "Critical when contractor provides design services; verify coverage period extends post-completion.",
  },
  {
    icon: DollarSign,
    type: "Contractor's Equipment Insurance",
    description: "Covers owned and leased construction equipment against damage, theft, and loss.",
    typical: "Based on equipment value",
    required: "Contractor's responsibility for their equipment",
    whoProvides: "Contractor",
    considerations: "Verify whether rented equipment is covered or requires separate floater.",
  },
];

const coverageRequirements = [
  {
    size: "Small Projects ($100K-$500K)",
    generalLiability: "$1M per occurrence / $2M aggregate",
    workersComp: "Statutory limits",
    buildersRisk: "Project value",
    umbrella: "May not be required",
    notes: "Standard coverage sufficient for most tenant improvements and small renovations.",
  },
  {
    size: "Medium Projects ($500K-$5M)",
    generalLiability: "$1M-$2M per occurrence / $2M-$4M aggregate",
    workersComp: "Statutory limits",
    buildersRisk: "Project value with appropriate deductible",
    umbrella: "$5M recommended",
    notes: "Consider naming owner as additional insured on contractor policies.",
  },
  {
    size: "Large Projects ($5M-$25M)",
    generalLiability: "$2M per occurrence / $4M aggregate",
    workersComp: "Statutory limits",
    buildersRisk: "Full replacement cost with builder's risk program",
    umbrella: "$10M-$25M",
    notes: "Owner's protective liability policy recommended. Professional liability for design-build.",
  },
  {
    size: "Major Projects ($25M+)",
    generalLiability: "Project-specific wrap-up or CCIP",
    workersComp: "Wrap-up or individual policies",
    buildersRisk: "Comprehensive builder's risk program",
    umbrella: "$25M+ or project-specific",
    notes: "Consider Owner Controlled Insurance Program (OCIP) or Contractor Controlled Insurance Program (CCIP).",
  },
];

const floridaConsiderations = [
  {
    title: "Hurricane and Wind Coverage",
    description: "Standard builder's risk policies in Florida typically have separate wind/hurricane deductibles (often 2-5% of coverage). Named storm exclusions may apply during hurricane season. Verify coverage carefully.",
  },
  {
    title: "Flood Insurance",
    description: "Builder's risk typically excludes flood damage. Separate flood coverage may be needed, especially in flood zones. FEMA flood maps determine requirements.",
  },
  {
    title: "Hardening Insurance Market",
    description: "Florida's property insurance market has become significantly more challenging. Premiums have increased 15-25%+ for many commercial policies. Budget accordingly and secure quotes early.",
  },
  {
    title: "Workers' Comp Requirements",
    description: "Florida requires workers' comp for construction employers with 1+ employees (non-construction requires 4+). Subcontractor compliance is critical—general contractors can be liable for uninsured subs.",
  },
  {
    title: "Certificates of Insurance",
    description: "Always require original certificates of insurance directly from the carrier or a reputable certificate service. Verify certificates match claimed coverage amounts and project dates.",
  },
];

const verificationChecklist = [
  "Request certificate of insurance (COI) directly from insurance carrier",
  "Verify policy dates cover your project timeline",
  "Confirm coverage amounts meet your contract requirements",
  "Check that your project type isn't excluded",
  "Request to be named as Additional Insured on liability policies",
  "Verify workers' comp covers all employee classifications",
  "Confirm subcontractors maintain required coverage",
  "Review deductibles—especially wind/hurricane in Florida",
  "Check for any coverage gaps or exclusions",
  "Request 30-day cancellation notice requirement",
];

const faqs = [
  {
    question: "What insurance should a commercial contractor carry in Florida?",
    answer: "At minimum, Florida commercial contractors should carry: General Liability Insurance ($1M+ per occurrence), Workers' Compensation (legally required), and Commercial Auto if using vehicles for work. For project-specific coverage, Builder's Risk insures the structure during construction. Design-build contractors need Professional Liability. Most commercial projects also require contractors to carry Umbrella/Excess Liability for additional protection beyond primary limits.",
  },
  {
    question: "Who is responsible for builder's risk insurance?",
    answer: "Builder's risk responsibility is determined by the construction contract—either the owner or contractor can provide it. Owner-provided builder's risk is common on larger projects and ensures consistent coverage. Contractor-provided builder's risk is typical on smaller projects and may be included in the bid. Regardless of who provides it, ensure coverage equals full replacement cost and appropriately addresses Florida-specific risks like hurricanes.",
  },
  {
    question: "How much does construction insurance cost in Tampa?",
    answer: "Construction insurance costs vary significantly based on project type, size, and contractor risk profile. General liability typically runs 0.5-1.5% of contract value. Builder's risk ranges from 0.5-2% of project value. Workers' compensation depends on trade classifications (administrative might be $1.50/$100 payroll while roofing could be $25+/$100). Florida's challenging insurance market means costs are elevated compared to other states—budget 2-4% of project cost for insurance overall.",
  },
  {
    question: "What happens if a contractor's insurance lapses during my project?",
    answer: "An insurance lapse creates serious exposure. You could be liable for injuries or property damage that would otherwise be covered. Most well-written contracts allow you to stop work and/or terminate for failure to maintain insurance. Some owners add themselves to policies for cancellation notices. Verify insurance status before construction starts and consider periodic verification on longer projects.",
  },
  {
    question: "Do subcontractors need their own insurance?",
    answer: "Yes. Each subcontractor should carry their own General Liability and Workers' Compensation. If a subcontractor lacks insurance, the general contractor (and potentially the owner) could be liable for their claims. Require certificates of insurance from all subcontractors before they begin work, and have your general contractor confirm subcontractor insurance as part of their scope.",
  },
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
            alt="Commercial construction insurance coverage"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Commercial Construction Insurance Coverage
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Protect your investment and your project. Understand the essential insurance coverage required for commercial construction in Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Work With Insured Pros
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

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-6">
              Construction insurance isn't just paperwork—it's the safety net that protects everyone involved when things go wrong. A worker injury without workers' comp, a fire without builder's risk, or a property damage claim without liability coverage can financially devastate a project and everyone associated with it.
            </p>
            <p className="text-gray-600 mb-6">
              Florida's construction insurance landscape presents unique challenges. Hurricane exposure drives up costs and creates coverage gaps that require careful attention. The state's hardening insurance market has significantly increased premiums. And Florida's workers' compensation requirements are particularly strict for the construction industry.
            </p>
            <p className="text-gray-600 mb-8">
              Whether you're an owner planning a commercial project or a contractor managing risk, understanding construction insurance is essential. This guide covers the key coverage types, Florida-specific considerations, and verification best practices for commercial construction projects.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-red-800 mb-2">Insurance Is Non-Negotiable</h3>
                  <p className="text-gray-700">
                    Never proceed with a contractor who lacks proper insurance. Under Florida law, you could be held liable for injuries or damages if your contractor is uninsured or underinsured. Always verify coverage before work begins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Essential Insurance Types for Commercial Construction
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Understand what each coverage type protects and who typically provides it.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {insuranceTypes.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-brand-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green-dark font-heading">{item.type}</h3>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-gray-700 min-w-[80px]">Typical:</span>
                    <span className="text-gray-600">{item.typical}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-gray-700 min-w-[80px]">Required:</span>
                    <span className="text-gray-600">{item.required}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-gray-700 min-w-[80px]">Provider:</span>
                    <span className="text-gray-600">{item.whoProvides}</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600"><strong>Note:</strong> {item.considerations}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage by Project Size */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Recommended Coverage by Project Size
            </h2>
            <p className="text-gray-600 mb-8">
              Insurance requirements scale with project size and risk. Here's a general guide for Tampa Bay commercial projects.
            </p>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-4 text-left font-heading">Project Size</th>
                    <th className="px-4 py-4 text-left font-heading">General Liability</th>
                    <th className="px-4 py-4 text-left font-heading">Builder's Risk</th>
                    <th className="px-4 py-4 text-left font-heading">Umbrella</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {coverageRequirements.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-4 font-semibold text-brand-green-dark">{item.size}</td>
                      <td className="px-4 py-4 text-gray-600 text-sm">{item.generalLiability}</td>
                      <td className="px-4 py-4 text-gray-600 text-sm">{item.buildersRisk}</td>
                      <td className="px-4 py-4 text-gray-600 text-sm">{item.umbrella}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              *All contractors must carry Workers' Compensation per Florida law. Requirements vary by project; consult with insurance professionals for specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Florida Considerations */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Florida-Specific Insurance Considerations
            </h2>
            <div className="space-y-4">
              {floridaConsiderations.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2 font-heading">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verification Checklist */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Insurance Verification Checklist
            </h2>
            <p className="text-gray-600 mb-8">
              Before any contractor begins work on your commercial project, verify their insurance coverage using this checklist.
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {verificationChecklist.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 p-4 bg-brand-green-light/20 rounded-lg">
              <p className="text-gray-700">
                <strong>Pro Tip:</strong> Don't just accept certificates of insurance from the contractor. Request them directly from the insurance carrier or use a certificate verification service. Fraudulent certificates are unfortunately common.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Claims */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              What Insurance Covers: Common Claim Scenarios
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">Scenario: Worker Injury on Site</h3>
                <p className="text-gray-600 mb-3">
                  A subcontractor's employee falls from scaffolding and is seriously injured.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm"><strong className="text-brand-green-dark">Coverage:</strong> <span className="text-gray-700">Subcontractor's Workers' Compensation covers the injured worker's medical expenses and lost wages. If the sub lacks coverage, the general contractor's policy may respond, or the owner could be liable.</span></p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">Scenario: Fire During Construction</h3>
                <p className="text-gray-600 mb-3">
                  A fire damages the partially completed building and neighboring property.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm"><strong className="text-brand-green-dark">Coverage:</strong> <span className="text-gray-700">Builder's Risk covers damage to the structure under construction. General Liability covers damage to neighboring property. Both policies work together to address the full scope of damage.</span></p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">Scenario: Design Error Causes Problems</h3>
                <p className="text-gray-600 mb-3">
                  A design-build contractor's HVAC design proves inadequate, requiring expensive modifications after occupancy.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm"><strong className="text-brand-green-dark">Coverage:</strong> <span className="text-gray-700">Professional Liability (E&O) covers design errors and omissions when the contractor provides design services. General Liability typically excludes professional services.</span></p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">Scenario: Hurricane Damages Project</h3>
                <p className="text-gray-600 mb-3">
                  A named hurricane causes significant damage to a building under construction during June hurricane season.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm"><strong className="text-brand-green-dark">Coverage:</strong> <span className="text-gray-700">Builder's Risk should cover wind damage, but Florida policies often have separate named storm deductibles (2-5% of coverage). Some policies exclude named storms entirely during peak season. Review policy terms carefully before hurricane season.</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FCS Coverage */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Florida Construction Specialists: Fully Insured Protection
            </h2>
            <p className="text-gray-600 mb-6">
              When you work with Florida Construction Specialists, you're protected by comprehensive insurance coverage that meets or exceeds industry standards. We maintain:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <span className="text-gray-700">Comprehensive General Liability insurance</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <span className="text-gray-700">Full Workers' Compensation coverage</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <span className="text-gray-700">Umbrella liability for large project requirements</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <span className="text-gray-700">Professional Liability for design-build services</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <span className="text-gray-700">Verified subcontractor insurance requirements</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <span className="text-gray-700">Bonding capacity for projects of all sizes</span>
              </div>
            </div>
            <p className="text-gray-600">
              We provide certificates of insurance promptly and can accommodate special insurance requirements for your project. Our commitment to proper coverage reflects our commitment to professionalism and risk management.
            </p>
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
            Work With a Properly Insured Contractor
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Protect your project with a contractor who takes risk management seriously. Contact Florida Construction Specialists for a consultation.
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
