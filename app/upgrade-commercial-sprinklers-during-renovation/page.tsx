import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Droplets, Shield, AlertTriangle, Building2, HelpCircle, FileText, DollarSign, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Upgrade Commercial Sprinklers During Renovation | Tampa Fire Protection",
  description: "Why renovating your Tampa commercial building is the ideal time to upgrade fire sprinkler systems. Code requirements, cost savings, and integration strategies from Florida Construction Specialists.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Upgrade Commercial Sprinklers During Renovation", href: "/upgrade-commercial-sprinklers-during-renovation/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/maximize-savings-on-commercial-renovation/", label: "Maximize Renovation Savings" },
  { href: "/key-signs-your-commercial-remodel-needs/", label: "Signs You Need a Remodel" },
  { href: "/contact/", label: "Get Free Estimate" },
];

const sprinklerBenefits = [
  { title: "Life Safety", description: "Protect employees, customers, and tenants from fire emergencies", icon: Shield },
  { title: "Property Protection", description: "Minimize fire damage and business interruption losses", icon: Building2 },
  { title: "Insurance Savings", description: "Reduce premiums with modern fire suppression systems", icon: DollarSign },
  { title: "Code Compliance", description: "Meet current Florida Fire Prevention Code requirements", icon: FileText },
];

const whenToUpgrade = [
  "System is over 25-30 years old",
  "Corrosion visible on pipes or heads",
  "Frequent false alarms or system malfunctions",
  "Building use or occupancy has changed",
  "Layout modifications affect coverage",
  "Insurance carrier recommends improvements",
  "Fire marshal has issued recommendations",
  "System uses obsolete components"
];

const faqs = [
  {
    question: "What triggers mandatory sprinkler upgrades during renovation?",
    answer: "Florida Building Code triggers sprinkler upgrades in several scenarios: change of occupancy classification (e.g., warehouse to retail), substantial renovation affecting more than 50% of building area or value, addition of assembly spaces over threshold sizes, and addition of high-hazard occupancies. Even when not mandatory, fire marshals often recommend upgrades when renovation provides access. Understanding triggers early helps budget appropriately—discovering mid-project that sprinklers are required can significantly impact costs and schedule."
  },
  {
    question: "How much do commercial sprinkler system upgrades cost in Tampa?",
    answer: "Commercial sprinkler costs in Tampa typically range from $4-12 per square foot for new systems, with upgrades and modifications often less depending on existing infrastructure. Key cost factors include: building height (high-rise requires more expensive systems), hazard classification (higher hazards need denser coverage), ceiling type (exposed vs. concealed systems), and water supply adequacy (some buildings need upgraded service). For a 20,000 SF commercial building, full sprinkler installation ranges $80,000-240,000. Modifications to existing systems during renovation typically cost $2-6 per square foot of affected area."
  },
  {
    question: "Can existing sprinkler systems be modified during renovation?",
    answer: "Yes, and renovation provides an ideal opportunity. Moving walls requires relocating sprinkler heads to maintain proper coverage. Changing ceiling heights may require different head types or spacing. New rooms need additional coverage. These modifications must be designed by a licensed fire protection engineer and installed by licensed fire sprinkler contractors. When ceilings are already open for other renovation work, sprinkler modifications cost significantly less than standalone projects."
  },
  {
    question: "What types of sprinkler systems are used in commercial buildings?",
    answer: "The most common commercial systems are wet pipe (water-filled pipes, fastest activation, used in heated spaces), dry pipe (air-filled pipes that release water when activated, used where freezing is possible), pre-action (requires two triggers—both detection and head activation—used where accidental discharge is catastrophic like data centers), and deluge (all heads open simultaneously, used in high-hazard industrial applications). Most Tampa commercial buildings use wet pipe systems since freezing isn't a concern. System selection depends on building use, hazard classification, and environmental conditions."
  },
  {
    question: "How do sprinkler upgrades affect insurance premiums?",
    answer: "Modern sprinkler systems can significantly reduce commercial property insurance premiums—typically 5-20% depending on building type, insurer, and coverage. Some insurers provide additional credits for monitored systems with central station connections. Beyond premium reductions, sprinklered buildings often qualify for higher coverage limits and lower deductibles. Payback period for sprinkler investment through insurance savings alone often runs 10-15 years, with life safety and property protection benefits providing additional value."
  },
  {
    question: "What maintenance do commercial sprinkler systems require?",
    answer: "Florida Fire Prevention Code requires regular inspections and maintenance: quarterly visual inspections of all system components, annual inspections by licensed contractors including flow tests, five-year internal pipe inspections for wet systems, and ten-year internal pipe inspections for dry systems. Tampa Bay's water quality can accelerate corrosion, making inspection and maintenance particularly important. We help clients establish maintenance programs during project closeout."
  },
  {
    question: "Should we upgrade fire alarm systems at the same time?",
    answer: "We strongly recommend coordinating fire alarm and sprinkler work. Modern fire alarm systems integrate with sprinkler monitoring for faster response. Addressable alarm systems pinpoint fire location and sprinkler activation, improving evacuation and fire department response. Voice evacuation systems (required in many occupancies) provide clear occupant guidance. Coordinating these systems during renovation ensures proper integration and avoids the cost and disruption of separate projects."
  }
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
            alt="Commercial fire sprinkler system upgrade in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Upgrade Commercial Sprinklers During Renovation: The Smart Strategy
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Renovation provides the perfect opportunity to upgrade your Tampa commercial building's fire sprinkler system. Open ceilings, coordinated scheduling, and combined mobilization create significant cost advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Sprinkler Assessment
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

      {/* Benefits */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sprinklerBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <benefit.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
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
              Why Renovation Is the Ideal Time for Sprinkler Upgrades
            </h2>
            <p className="text-gray-600 mb-6">
              Fire sprinkler systems are among the most effective life safety investments a commercial building owner can make. Modern sprinkler systems control or extinguish fires in over 96% of activations, dramatically reducing loss of life, property damage, and business interruption. Yet many Tampa Bay commercial buildings have sprinkler systems that are decades old, undersized for current use, or completely absent. Renovation provides a unique window to address these deficiencies cost-effectively.
            </p>
            <p className="text-gray-600 mb-6">
              The economics are compelling: when ceilings are already open for other renovation work, sprinkler installation or modification costs 30-50% less than standalone projects. Coordinated scheduling eliminates multiple mobilizations and reduces overall project duration. And addressing fire protection during renovation often allows work to proceed without the operational disruptions a separate sprinkler project would cause.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Understanding Florida's Fire Sprinkler Requirements
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's fire codes are among the nation's most comprehensive, reflecting our state's high-density development, tourism economy, and catastrophic fire history. The Florida Fire Prevention Code, adopted with modifications from NFPA standards, establishes when sprinkler systems are required and how they must be designed and maintained.
            </p>
            <p className="text-gray-600 mb-6">
              For existing buildings, sprinkler requirements are typically triggered by changes in use, substantial renovation, or additions. A warehouse converting to retail, an office building adding assembly space, or a renovation affecting more than 50% of building area or value may require full sprinkler installation or upgrade to current standards. Understanding these triggers early in renovation planning prevents costly mid-project surprises.
            </p>
            <p className="text-gray-600 mb-6">
              Tampa's Fire Prevention Bureau reviews all commercial renovation permits for fire protection compliance. Their plan review identifies required sprinkler work and ensures proposed systems meet code. Building inspections verify proper installation. Working with experienced contractors who understand local requirements prevents delays from plan review rejections or failed inspections.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Types of Sprinkler Modifications During Renovation
            </h2>
            <p className="text-gray-600 mb-6">
              Renovation scope determines what sprinkler work is needed. Understanding the categories helps with budgeting and planning.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Coverage Modifications:</strong> When partition walls move, sprinkler head locations must maintain proper coverage. New rooms require additional heads. Combined spaces may allow head removal. These modifications are relatively straightforward when ceiling access is already available. Typical costs run $500-1,500 per relocated head including design, permit, and inspection.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>System Upgrades:</strong> Older systems may have corroded piping, obsolete head types, or inadequate water supply. Renovation provides opportunity to address these deficiencies. Replacing galvanized steel piping with CPVC or grooved steel eliminates corrosion concerns. Modern quick-response heads activate faster and use less water. Larger supply mains support increased coverage density.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Complete System Installation:</strong> Buildings without existing sprinklers may require full installation when renovation triggers code requirements. This is the most significant scope, but renovation timing dramatically reduces cost. New systems must be designed to current codes, which often exceed original building requirements.
            </p>

            {/* Cost Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Commercial Sprinkler Costs - Tampa Bay 2024</h3>
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-red-800 text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Work Type</th>
                    <th className="px-6 py-3 text-left">Cost Range</th>
                    <th className="px-6 py-3 text-left">Key Factors</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Head Relocation (during renovation)</td>
                    <td className="px-6 py-4">$500 - $1,200/head</td>
                    <td className="px-6 py-4">Access, pipe routing</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">New System (open ceiling)</td>
                    <td className="px-6 py-4">$4 - $8/SF</td>
                    <td className="px-6 py-4">Hazard class, building height</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">New System (finished ceiling)</td>
                    <td className="px-6 py-4">$8 - $15/SF</td>
                    <td className="px-6 py-4">Ceiling repair costs included</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">System Replacement (corroded)</td>
                    <td className="px-6 py-4">$5 - $10/SF</td>
                    <td className="px-6 py-4">Removal + new installation</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Fire Pump Addition</td>
                    <td className="px-6 py-4">$50,000 - $150,000</td>
                    <td className="px-6 py-4">Size, power requirements</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Fire Department Connection</td>
                    <td className="px-6 py-4">$8,000 - $15,000</td>
                    <td className="px-6 py-4">Location, pipe routing</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Inspection/Testing/Certification</td>
                    <td className="px-6 py-4">$1,500 - $4,000</td>
                    <td className="px-6 py-4">System size, testing scope</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-500 mt-2">*Costs assume coordination with renovation work. Standalone projects typically cost 30-50% more due to ceiling access and mobilization.</p>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Coordinating Sprinkler Work with Renovation
            </h2>
            <p className="text-gray-600 mb-6">
              Successful sprinkler integration requires careful coordination with other trades. The sequence of work matters: electrical and HVAC rough-in must coordinate with sprinkler pipe routing; drywall installation must wait until sprinkler inspection is complete; and final ceiling installation must accommodate sprinkler head locations. Florida Construction Specialists manages this coordination as part of comprehensive project management.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Design Coordination:</strong> Sprinkler design must begin early in the renovation design process. Ceiling heights, partition locations, and HVAC layouts all affect sprinkler head placement. Changes late in design force expensive sprinkler redesigns. Our design-build approach integrates fire protection design from project inception.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Permit Timing:</strong> Sprinkler permits are separate from general building permits in most Tampa Bay jurisdictions. These permits require engineered drawings that take 2-4 weeks to prepare after architectural design is complete. Plan review adds 2-3 weeks. Building this timeline into the overall project schedule prevents delays.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Inspection Sequencing:</strong> Sprinkler systems require inspection before ceilings are closed. This "rough-in" inspection must be scheduled when all sprinkler work is complete but before drywall or ceiling tile installation. Failing to schedule this inspection properly can require expensive ceiling removal to allow re-inspection.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Insurance and Financial Benefits
            </h2>
            <p className="text-gray-600 mb-6">
              Beyond life safety and property protection, modern sprinkler systems deliver tangible financial benefits. Commercial property insurance premiums typically drop 5-20% for properly sprinklered buildings, with the exact reduction depending on insurer, building type, and coverage terms. For a building with $50,000 annual premiums, this represents $2,500-$10,000 in annual savings.
            </p>
            <p className="text-gray-600 mb-6">
              Many commercial lenders require sprinkler systems for financing, particularly for hospitality, healthcare, and assembly occupancies. Building owners seeking refinancing or new loans may need to add or upgrade sprinklers to qualify for preferred terms. Addressing this during renovation minimizes disruption and combines costs.
            </p>
            <p className="text-gray-600 mb-6">
              From a property value perspective, sprinkled buildings command higher prices and attract more buyers than unprotected properties. The combination of lower insurance costs, reduced fire risk, and broader marketability typically returns 100-300% of sprinkler investment at sale.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Choosing the Right Fire Protection Partners
            </h2>
            <p className="text-gray-600 mb-6">
              Fire sprinkler work requires specialized licensing and expertise. In Florida, fire sprinkler contractors must hold specific state licenses separate from general contracting. They must employ designers certified by NICET (National Institute for Certification in Engineering Technologies) and maintain insurance specific to fire protection work.
            </p>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists maintains relationships with Tampa Bay's most respected fire protection contractors. We pre-qualify these partners based on licensing, experience, financial stability, and track record. When sprinkler work is part of your renovation, we manage coordination, scheduling, and quality control—you benefit from expert fire protection without managing an additional contractor relationship.
            </p>
          </div>
        </div>
      </section>

      {/* When to Upgrade */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
            Signs Your Sprinkler System Needs Attention
          </h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
            {whenToUpgrade.map((sign, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                <span className="text-gray-700">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-brand-green" />
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
            title="Commercial Renovation Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Planning a Renovation? Include Fire Protection Assessment
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists evaluates fire protection needs as part of every commercial renovation assessment. Contact us to discuss your project and ensure fire safety is properly addressed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Assessment
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
