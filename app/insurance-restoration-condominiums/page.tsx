import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  CheckCircle,
  AlertTriangle,
  Shield,
  ArrowRight,
  Phone,
  HelpCircle,
  FileCheck,
  DollarSign,
  Clock,
  Users,
  Clipboard,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { BackToHub } from "@/components/BackToHub";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Insurance Restoration for Condominiums Tampa | FCS Construction",
  description:
    "Expert insurance restoration services for Tampa Bay condominiums. Navigate HOA claims, unit owner responsibilities, and complex multi-party insurance coordination for condo damage repairs.",
  keywords:
    "condo insurance restoration Tampa, condominium damage repair Florida, HOA insurance claims, condo association restoration, multi-family insurance repair, Tampa condo storm damage",
};

const condoInsuranceTypes = [
  {
    type: "Master Policy (HOA Coverage)",
    covers: "Building structure, common areas, shared systems",
    typical: "$1M-$25M+ depending on building size",
    claimProcess: "Association files claim; board oversees restoration",
    challenges: "Multiple decision-makers; political dynamics",
  },
  {
    type: "Unit Owner HO-6 Policy",
    covers: "Interior finishes, personal property, improvements",
    typical: "$100K-$500K coverage",
    claimProcess: "Individual owner files; coordinates with HOA",
    challenges: "Delineation between HOA and owner responsibility",
  },
  {
    type: "Loss Assessment Coverage",
    covers: "Owner's share of HOA deductible or uninsured losses",
    typical: "$1,000-$50,000 coverage",
    claimProcess: "Owner claims when special assessment issued",
    challenges: "Often inadequate limits; underutilized",
  },
  {
    type: "Directors & Officers (D&O)",
    covers: "Board member liability for restoration decisions",
    typical: "$1M-$5M coverage",
    claimProcess: "Triggered by lawsuits against board",
    challenges: "Does not cover construction defects",
  },
];

const damageScenarios = [
  {
    scenario: "Hurricane/Wind Damage",
    masterPolicy: "Roof, exterior walls, windows (common elements)",
    unitOwner: "Interior water intrusion, personal property",
    coordination: "HOA must secure building; owners handle unit interiors",
    timeline: "6-18 months typical for full restoration",
  },
  {
    scenario: "Water Damage (Pipe Break)",
    masterPolicy: "Pipes in walls, damage to multiple units from common pipes",
    unitOwner: "Unit interior if source was in their unit",
    coordination: "Source determination critical; may involve litigation",
    timeline: "2-6 months depending on scope",
  },
  {
    scenario: "Fire Damage",
    masterPolicy: "Structural damage, common area restoration",
    unitOwner: "Unit contents, betterments and improvements",
    coordination: "May require temporary relocation coordination",
    timeline: "6-24 months for significant fires",
  },
  {
    scenario: "Flood Damage",
    masterPolicy: "Separate flood policy required (NFIP or private)",
    unitOwner: "Contents coverage separate from HOA flood policy",
    coordination: "FEMA involvement; different claim process",
    timeline: "6-12 months; funding delays common",
  },
];

const claimProcess = [
  {
    phase: "Emergency Response",
    duration: "0-72 hours",
    hoaActions: [
      "Document damage with photos/video",
      "Secure building and prevent further damage",
      "Notify insurance carrier immediately",
      "Arrange emergency board meeting",
    ],
    ownerActions: [
      "Document unit damage thoroughly",
      "Notify HOA of unit-specific issues",
      "File HO-6 claim if applicable",
      "Arrange temporary relocation if needed",
    ],
  },
  {
    phase: "Claim Documentation",
    duration: "1-4 weeks",
    hoaActions: [
      "Obtain scope of damage assessment",
      "Get preliminary repair estimates",
      "Submit proof of loss to carrier",
      "Coordinate with adjuster inspections",
    ],
    ownerActions: [
      "Inventory personal property losses",
      "Get quotes for interior repairs",
      "Attend HOA/adjuster meetings",
      "Request scope determination letter",
    ],
  },
  {
    phase: "Contractor Selection",
    duration: "2-6 weeks",
    hoaActions: [
      "Solicit bids from qualified contractors",
      "Verify insurance and licensing",
      "Present options to board for approval",
      "Negotiate contract terms",
    ],
    ownerActions: [
      "Understand what HOA contract covers",
      "Select contractor for unit-specific work",
      "Coordinate access schedules",
      "Clarify upgrade vs. restoration scope",
    ],
  },
  {
    phase: "Restoration Execution",
    duration: "2-18 months",
    hoaActions: [
      "Manage contractor performance",
      "Process draw requests with carrier",
      "Communicate progress to owners",
      "Handle change orders appropriately",
    ],
    ownerActions: [
      "Coordinate unit access with contractors",
      "Document progress and issues",
      "Approve work affecting unit interior",
      "Track expenses for insurance",
    ],
  },
  {
    phase: "Completion & Closeout",
    duration: "1-3 months",
    hoaActions: [
      "Final inspection and punch list",
      "Close out insurance claim",
      "Release retention to contractor",
      "Document warranties",
    ],
    ownerActions: [
      "Final walkthrough of unit",
      "Close out HO-6 claim",
      "File for loss assessment if needed",
      "Update HOA on completion",
    ],
  },
];

const commonChallenges = [
  {
    challenge: "Scope Disputes",
    description: "Disagreement over what's covered and by whom",
    solution: "Get written determination from both carriers before starting work; review declarations pages and CC&Rs carefully",
    prevention: "Annual insurance review with association attorney",
  },
  {
    challenge: "Underfunding/Underinsurance",
    description: "Master policy limits insufficient for full restoration",
    solution: "Special assessment to owners; negotiate with carrier; prioritize critical repairs",
    prevention: "Annual appraisal; adequate reserves; proper coverage review",
  },
  {
    challenge: "Board Disputes/Delays",
    description: "Board members disagree on restoration approach",
    solution: "Follow CC&Rs for major decisions; consider special meeting; professional management",
    prevention: "Clear emergency powers in governing documents",
  },
  {
    challenge: "Unit Access Issues",
    description: "Owners unavailable or uncooperative for repairs",
    solution: "CC&Rs typically grant emergency access; legal counsel if needed; document attempts",
    prevention: "Current contact info for all owners; clear access policies",
  },
  {
    challenge: "Betterments and Improvements",
    description: "Owners expect upgrades beyond original condition",
    solution: "Clearly communicate insurance covers like-kind replacement; owner-funded upgrades possible",
    prevention: "Written scope approval before work begins",
  },
  {
    challenge: "Depreciation and ACV",
    description: "Carrier pays actual cash value, not replacement cost",
    solution: "Complete work to trigger replacement cost holdback; document completion",
    prevention: "Ensure replacement cost coverage; review policy annually",
  },
];

const sb4dConsiderations = [
  {
    consideration: "Milestone Inspections",
    impact: "Restoration may trigger inspection requirements",
    guidance: "Consult with engineer before major structural work",
  },
  {
    consideration: "SIRS Requirements",
    impact: "Post-restoration reserve funding may be affected",
    guidance: "Update reserve study after significant restoration",
  },
  {
    consideration: "Documentation",
    impact: "Maintenance records required by law",
    guidance: "Document all restoration work thoroughly for compliance",
  },
];

const faqs = [
  {
    question: "Who pays the deductible on a condo insurance claim?",
    answer:
      "For master policy claims, the HOA typically pays the deductible from reserves or through a special assessment to all owners. Condo master policy deductibles can range from $10,000 to $100,000 or more for hurricane coverage. Some associations have bylaws specifying that the deductible is assessed only to affected units, while others spread it across all owners. For unit owner HO-6 claims, the individual owner pays their own deductible. If damage was caused by another unit (like a pipe break), the responsible owner's liability coverage may cover the damaged party's deductible. Loss assessment coverage on HO-6 policies can help owners pay their share of HOA deductibles.",
  },
  {
    question: "How do I know if damage is HOA or unit owner responsibility?",
    answer:
      "The division depends on your condo's governing documents (CC&Rs or Declaration) and the master policy type. 'All-in' policies cover everything except unit contents and floor coverings—the HOA is responsible for drywall, cabinets, fixtures, etc. 'Bare walls' or 'studs out' policies cover only the structure—owners are responsible for everything from drywall in, including cabinets, fixtures, flooring, and finishes. 'Single entity' policies are in between, covering original finishes but not owner improvements. Request a 'scope of coverage' letter from the HOA's insurance agent clarifying exactly where HOA coverage ends and owner coverage begins. This letter is essential before any restoration work begins.",
  },
  {
    question: "Can the HOA choose my contractor for unit interior work?",
    answer:
      "It depends on the damage type and governing documents. For work covered by the master policy (like drywall in an all-in policy), the HOA typically controls contractor selection to ensure consistent restoration and efficient claims processing. For work covered by your HO-6 policy (personal improvements, contents), you generally choose your own contractor but must coordinate access and scheduling with the HOA's restoration project. Some associations require approval of any contractor working in units for insurance and quality control reasons. Review your CC&Rs and discuss with the HOA before hiring independent contractors to avoid conflicts with the master restoration project.",
  },
  {
    question: "What if my condo is uninhabitable during restoration?",
    answer:
      "Both HOA master policies and unit owner HO-6 policies typically include 'loss of use' or 'additional living expenses' coverage. The master policy may cover common area amenities being unavailable, while your HO-6 policy covers temporary housing if your unit is uninhabitable. Coverage limits and duration vary—typically 12-24 months or a percentage of your dwelling coverage. Keep all receipts for temporary housing, meals exceeding normal costs, and other displacement expenses. If displacement is due to HOA-covered damage, coordinate with the association about when units will be habitable. Extended displacement may require negotiating extended coverage with your carrier.",
  },
  {
    question: "How long does condo insurance restoration typically take?",
    answer:
      "Timeline varies significantly based on damage scope. Single-unit water damage: 2-4 months. Multiple-unit damage from a common source: 3-6 months. Building-wide hurricane damage: 12-24+ months. Factors affecting timeline include: claim approval speed, contractor availability (especially post-hurricane), scope disputes between carriers, board decision-making efficiency, access coordination across multiple units, and material availability. Post-hurricane restorations in Florida face particular delays due to demand surge. Large-loss projects may be phased, with common areas and building envelope prioritized before unit interiors. Plan for worst-case timelines when arranging temporary housing.",
  },
  {
    question: "What if the HOA's insurance doesn't cover all the damage?",
    answer:
      "Funding shortfalls are unfortunately common in condo restoration. Options include: special assessment to unit owners (may require owner vote depending on amount and CC&Rs), HOA line of credit or restoration loan (spreads cost over time but adds interest), negotiation with insurance carrier for additional payment, prioritizing critical repairs within available funding, and owner loss assessment coverage to help with their share. Some associations carry 'ordinance or law' coverage for code upgrades required during restoration. If shortfall is due to underinsurance, board members could face liability—D&O coverage becomes relevant. Work with your insurance agent and attorney to explore all funding options before beginning work.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Insurance Restoration Condominiums", href: "/insurance-restoration-condominiums/" },
];


const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/services/disaster-recovery/fire-damage/", label: "Fire Damage Restoration" },
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Restoration" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function InsuranceRestorationCondominiumsPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Condominium Insurance Restoration" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Condo Insurance Restoration Services"
        serviceDescription="Expert insurance restoration for Tampa Bay condominiums. Navigate complex HOA claims, multi-party coordination, and ensure complete recovery from storm and water damage."
        city="Tampa"
        minPrice="50000"
      />

      
      <ArticleSchema
        headline="Insurance Restoration for Condominiums Tampa | FCS Construction"
        description="Expert insurance restoration services for Tampa Bay condominiums. Navigate HOA claims, unit owner responsibilities, and complex multi-party insurance coordination for condo damage repairs."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/insurance-restoration-condominiums/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Commercial", href: "/commercial/" },
          { name: "Condo Remediation", href: "/commercial/condo-remediation/" },
          { name: "Insurance Restoration", href: "/insurance-restoration-condominiums/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hurricane-ian/hurricane-ian-large.webp"
            alt="Hurricane damage restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <BackToHub
              silo="commercial"
              customHubTitle="Condo Remediation"
              customHubHref="/commercial/condo-remediation/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Insurance Restoration for Condominiums
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Navigate the complexities of condo insurance claims with expert guidance.
              From HOA master policies to unit owner coverage, we help Tampa Bay
              condominiums recover completely from damage events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Get Restoration Help
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
        </div>
      </section>

      {/* Insurance Types */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Condo Insurance Coverage Types
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Understanding who covers what is essential for successful restoration.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {condoInsuranceTypes.map((insurance) => (
              <div key={insurance.type} className="card p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">
                  {insurance.type}
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">
                    <strong className="text-brand-green">Covers:</strong> {insurance.covers}
                  </p>
                  <p className="text-gray-600">
                    <strong>Typical Limits:</strong> {insurance.typical}
                  </p>
                  <p className="text-gray-600">
                    <strong>Claim Process:</strong> {insurance.claimProcess}
                  </p>
                  <p className="text-yellow-700 bg-yellow-50 rounded p-2">
                    <strong>Challenge:</strong> {insurance.challenges}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Damage Scenarios */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Common Damage Scenarios
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            How different damage types are typically handled in condo restoration.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">Scenario</th>
                  <th className="px-4 py-3 text-left font-semibold">Master Policy Covers</th>
                  <th className="px-4 py-3 text-left font-semibold">Unit Owner Covers</th>
                  <th className="px-4 py-3 text-left font-semibold">Coordination Needed</th>
                  <th className="px-4 py-3 text-center font-semibold">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {damageScenarios.map((scenario, index) => (
                  <tr
                    key={scenario.scenario}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-4 font-semibold text-brand-green-dark">
                      {scenario.scenario}
                    </td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{scenario.masterPolicy}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{scenario.unitOwner}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{scenario.coordination}</td>
                    <td className="px-4 py-4 text-center text-brand-gold-dark font-medium text-sm">
                      {scenario.timeline}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Claim Process */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Condo Restoration Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Parallel tracks for HOA and unit owner actions throughout restoration.
          </p>
          <div className="space-y-6 max-w-5xl mx-auto">
            {claimProcess.map((phase, index) => (
              <div
                key={phase.phase}
                className="bg-gray-50 rounded-xl p-6 shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-brand-green-dark">
                      {phase.phase}
                    </h3>
                  </div>
                  <span className="text-sm font-medium text-brand-gold bg-brand-gold-light/30 px-3 py-1 rounded-full">
                    {phase.duration}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-brand-green-dark mb-3 flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      HOA/Board Actions
                    </h4>
                    <ul className="space-y-2">
                      {phase.hoaActions.map((action, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-brand-gold-dark mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Unit Owner Actions
                    </h4>
                    <ul className="space-y-2">
                      {phase.ownerActions.map((action, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Common Challenges & Solutions
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Anticipate these issues in condo restoration projects.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonChallenges.map((item) => (
              <div key={item.challenge} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  <h3 className="font-bold text-brand-green-dark">{item.challenge}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-green-700 bg-green-50 rounded p-2">
                    <strong>Solution:</strong> {item.solution}
                  </p>
                  <p className="text-sm text-blue-700 bg-blue-50 rounded p-2">
                    <strong>Prevention:</strong> {item.prevention}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SB4D Considerations */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Florida SB4D Considerations
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            How restoration work intersects with new condo safety requirements.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {sb4dConsiderations.map((item) => (
              <div key={item.consideration} className="card p-6 border-l-4 border-brand-green">
                <h3 className="font-bold text-brand-green-dark mb-2">
                  {item.consideration}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{item.impact}</p>
                <p className="text-sm text-brand-gold-dark bg-brand-gold-light/20 rounded p-2">
                  {item.guidance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-brand-green-dark hover:no-underline py-4">
                  <span className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Condo Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/florida-sb4d-compliance-guide/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                SB4D Compliance Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Understand new condo structural requirements.
              </p>
            </Link>
            <Link
              href="/understanding-tampa-insurance-restoration-claims/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Insurance Claims Guide
              </h3>
              <p className="text-gray-600 text-sm">
                General insurance restoration guidance.
              </p>
            </Link>
            <Link
              href="/commercial/condo-remediation/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Condo Remediation Services
              </h3>
              <p className="text-gray-600 text-sm">
                Full range of condo repair capabilities.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Need Condo Insurance Restoration Help?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS specializes in helping Tampa Bay condominiums navigate complex
            insurance claims. From initial documentation through final restoration,
            we ensure complete recovery for your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Start Your Project
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
      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

    </>
  );
}