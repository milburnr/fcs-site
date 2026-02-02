import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  AlertTriangle,
  Building,
  Phone,
  HelpCircle,
  Shield,
  FileText,
  Gauge,
  Wrench,
  Eye,
  Clock,
  AlertCircle,
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
  title: "Medical Gas Piping Requirements | Healthcare Construction Tampa | FCS",
  description:
    "Complete guide to medical gas piping requirements for healthcare facilities in Tampa Bay. NFPA 99, ASSE 6000 standards, installation requirements, and testing protocols explained.",
  keywords:
    "medical gas piping Tampa, healthcare gas systems Florida, NFPA 99 medical gas, hospital gas installation Tampa Bay, medical air vacuum systems",
};

const gasTypes = [
  {
    gas: "Oxygen (O2)",
    color: "Green",
    pressure: "50-55 psi",
    purity: "USP grade (99.0% min)",
    applications: "Patient care, respiratory therapy, surgery, emergency",
    hazards: "Oxidizer - supports combustion; never use near open flame or oil",
  },
  {
    gas: "Medical Air",
    color: "Yellow",
    pressure: "50-55 psi",
    purity: "Grade D or better per CGA G-7.1",
    applications: "Ventilators, pneumatic tools, patient breathing",
    hazards: "Contamination risk if compressor oil leaks; moisture concerns",
  },
  {
    gas: "Nitrogen (N2)",
    color: "Black",
    pressure: "160-180 psi",
    purity: "NF grade (99.0% min)",
    applications: "Surgical tools, cryotherapy, laboratory equipment",
    hazards: "Asphyxiant in enclosed spaces; high pressure hazard",
  },
  {
    gas: "Nitrous Oxide (N2O)",
    color: "Blue",
    pressure: "50-55 psi",
    purity: "USP grade (99.0% min)",
    applications: "Anesthesia, dental sedation, pain management",
    hazards: "Oxidizer; abuse potential; exposure limits apply",
  },
  {
    gas: "Carbon Dioxide (CO2)",
    color: "Gray",
    pressure: "50-55 psi",
    purity: "USP grade (99.0% min)",
    applications: "Laparoscopic surgery, cryotherapy, laboratory",
    hazards: "Asphyxiant; can cause rapid temperature drops",
  },
  {
    gas: "Medical Vacuum",
    color: "White",
    pressure: "-12\" Hg minimum",
    purity: "N/A - suction system",
    applications: "Surgery suction, wound drainage, waste gas scavenging",
    hazards: "Cross-contamination if system fails; pump maintenance critical",
  },
  {
    gas: "WAGD (Waste Anesthetic Gas)",
    color: "Violet",
    pressure: "Negative (exhaust)",
    purity: "N/A - exhaust system",
    applications: "Removal of anesthetic gases from operating rooms",
    hazards: "Must exhaust outdoors; staff exposure concerns",
  },
];

const nfpaRequirements = [
  {
    requirement: "Piping Material",
    standard: "NFPA 99 Section 5.1.10",
    specification: "Type K or L copper (ASTM B88); hard-drawn for above grade, annealed for underground",
    notes: "Brazed joints required; no soldering allowed for medical gases",
  },
  {
    requirement: "Brazing",
    standard: "NFPA 99 Section 5.1.10.3",
    specification: "BCuP-5 (15% silver) minimum; nitrogen purge during brazing required",
    notes: "Brazer must hold ASSE 6010 or AWS certification; document all joints",
  },
  {
    requirement: "Pipe Sizing",
    standard: "NFPA 99 Section 5.1.10.1",
    specification: "Based on flow rates, pressure drop calculations, and system diversity",
    notes: "Engineer must calculate; cannot simply match existing sizes",
  },
  {
    requirement: "Valve Locations",
    standard: "NFPA 99 Section 5.1.4",
    specification: "Zone valves, riser valves, main shutoffs per code; accessible locations",
    notes: "Valve boxes must be labeled; emergency shutoffs near exits",
  },
  {
    requirement: "Outlets/Inlets",
    standard: "NFPA 99 Section 5.1.12",
    specification: "DISS (Diameter Index Safety System) connectors; gas-specific",
    notes: "Prevents cross-connection; each gas has unique connection",
  },
  {
    requirement: "Alarm Systems",
    standard: "NFPA 99 Section 5.1.9",
    specification: "Master alarms, area alarms for pressure, source equipment status",
    notes: "Must be visible and audible; connect to nurse call/BAS",
  },
  {
    requirement: "Testing",
    standard: "NFPA 99 Section 5.1.12.3",
    specification: "Initial pressure test, cross-connection test, purge, standing pressure test",
    notes: "Third-party verification required before use; document everything",
  },
];

const installerCredentials = [
  {
    credential: "ASSE 6010",
    description: "Medical Gas Systems Installer",
    scope: "Installation of medical gas and vacuum piping systems",
    required: "Yes - all installers must hold current certification",
  },
  {
    credential: "ASSE 6020",
    description: "Medical Gas Maintenance Personnel",
    scope: "Maintenance and repair of existing medical gas systems",
    required: "Yes - maintenance staff at healthcare facilities",
  },
  {
    credential: "ASSE 6030",
    description: "Medical Gas Verifier",
    scope: "Testing and verification of new and modified systems",
    required: "Yes - third-party verification before system use",
  },
  {
    credential: "ASSE 6040",
    description: "Medical Gas Instructor",
    scope: "Training other medical gas personnel",
    required: "For training programs only",
  },
];

const testingProtocol = [
  {
    phase: "Initial Pressure Test",
    timing: "After installation, before concealment",
    method: "Pressurize to 150 psi with oil-free nitrogen for 24 hours",
    passFailCriteria: "No pressure drop allowed; repair any leaks and retest",
  },
  {
    phase: "Cross-Connection Test",
    timing: "After rough-in, outlets installed",
    method: "Test each outlet with gas analyzer to verify correct gas identity",
    passFailCriteria: "Each outlet must deliver only the labeled gas; 100% accuracy",
  },
  {
    phase: "Piping Purge",
    timing: "After cross-connection test passes",
    method: "Purge system with source gas until particulate/moisture levels acceptable",
    passFailCriteria: "Meets cleanliness standards for intended gas",
  },
  {
    phase: "Standing Pressure Test",
    timing: "Final verification",
    method: "System at operating pressure for 24 hours minimum",
    passFailCriteria: "Pressure stable within gauge tolerance; no leaks",
  },
  {
    phase: "Operational Test",
    timing: "Before patient use",
    method: "Verify all alarms, valves, gauges, and outlets function correctly",
    passFailCriteria: "All components operational; alarms annunciate properly",
  },
  {
    phase: "Third-Party Verification",
    timing: "After contractor testing complete",
    method: "ASSE 6030 certified verifier independently tests entire system",
    passFailCriteria: "Written verification report required; AHJ may require additional",
  },
];

const commonIssues = [
  {
    issue: "Uncertified Installers",
    consequence: "System fails verification; requires reinstallation; project delays",
    prevention: "Verify ASSE 6010 credentials before work begins; check expiration dates",
  },
  {
    issue: "Improper Brazing",
    consequence: "Joint failures, leaks, contamination; system shutdown",
    prevention: "Nitrogen purge during all brazing; proper filler material; trained brazers",
  },
  {
    issue: "Inadequate Labeling",
    consequence: "Cross-connection risk; verification failure; code violations",
    prevention: "Label at every interval per code; use proper color coding; permanent markers",
  },
  {
    issue: "Missing Documentation",
    consequence: "Cannot obtain verification; AHJ rejection; project delays",
    prevention: "Document everything: test results, brazer certs, material certs, as-builts",
  },
  {
    issue: "Contamination",
    consequence: "System fails purity tests; patient safety risk; costly purging",
    prevention: "Cap all openings; clean installation; proper purge procedures",
  },
];

const faqs = [
  {
    question: "Who can install medical gas piping in Florida?",
    answer:
      "Medical gas piping in Florida must be installed by personnel holding current ASSE 6010 (Medical Gas Systems Installer) certification. This applies to all individuals performing installation work, not just the supervising contractor. The certification requires passing an exam and maintaining continuing education. Before hiring any contractor for medical gas work, verify their installers' credentials through ASSE or the credential holder directly.",
  },
  {
    question: "What testing is required for new medical gas systems?",
    answer:
      "New medical gas systems require a multi-phase testing protocol per NFPA 99: (1) Initial pressure test at 150 psi for 24 hours, (2) Cross-connection test of every outlet to verify correct gas, (3) System purge to remove contaminants, (4) Standing pressure test at operating pressure for 24 hours, and (5) Operational testing of all components. After the contractor completes testing, an independent ASSE 6030 certified verifier must perform third-party verification before the system can be used for patient care.",
  },
  {
    question: "Can existing medical gas systems be modified without full reverification?",
    answer:
      "Minor modifications to medical gas systems may be reverified for only the affected portion, but this depends on the scope of work and local AHJ interpretation. Adding outlets to an existing zone typically requires testing only that zone. However, any work that affects the main supply, adds new zones, or modifies source equipment usually requires more extensive testing. Always consult with an ASSE 6030 verifier before beginning modification work to understand the testing scope required.",
  },
  {
    question: "What are the brazing requirements for medical gas piping?",
    answer:
      "Medical gas piping must be brazed, not soldered. NFPA 99 requires BCuP-5 (minimum 15% silver content) or equivalent brazing alloy. All brazing must be performed with a continuous nitrogen purge through the pipe to prevent oxidation inside the joint. Brazers must hold appropriate AWS certification or demonstrate equivalent competency. All joints must be documented, and joints should be visually inspected before concealment. Failed joints require cutting out and rebrazing - repair attempts are not permitted.",
  },
  {
    question: "How much does medical gas piping cost for a new medical facility?",
    answer:
      "Medical gas piping costs in Tampa Bay typically range from $15-40 per square foot of served area, depending on system complexity and outlet density. A typical outpatient surgery center (5,000 SF) might spend $100,000-175,000 on complete medical gas systems. Hospital floors with intensive outlet requirements can exceed $50/SF. Costs include piping, outlets, zone valves, alarms, source equipment (if new), and mandatory testing/verification. The verification process alone typically costs $5,000-15,000 depending on system size.",
  },
  {
    question: "What medical gas systems are required for an outpatient surgery center?",
    answer:
      "Florida outpatient surgery centers typically require: oxygen, medical air, medical vacuum, nitrous oxide (if used for anesthesia), and waste anesthetic gas disposal (WAGD). Nitrogen may be required for certain surgical tools. The specific requirements depend on the procedures performed, AHCA licensure category, and equipment specifications. During planning, work with your medical equipment consultant and anesthesiologist to determine exact requirements before design begins.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Medical Gas Piping Requirements", href: "/medical-gas-piping-requirements/" },
];


const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/commercial/medical-construction/", label: "Medical Facility Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function MedicalGasPipingRequirementsPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Medical Gas Piping Installation" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Medical Gas Systems Construction"
        serviceDescription="NFPA 99 compliant medical gas piping installation for healthcare facilities in Tampa Bay. Certified installers, complete testing, and third-party verification services."
        city="Tampa"
        minPrice="75000"
      />

      
      <ArticleSchema
        headline="Medical Gas Piping Requirements | Healthcare Construction Tampa | FCS"
        description="Complete guide to medical gas piping requirements for healthcare facilities in Tampa Bay. NFPA 99, ASSE 6000 standards, installation requirements, and testing protocols explained."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/medical-gas-piping-requirements/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Commercial", href: "/commercial/" },
          { name: "Medical Construction", href: "/commercial/medical-construction/" },
          { name: "Medical Gas Piping", href: "/medical-gas-piping-requirements/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Commercial construction project in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <BackToHub
              silo="commercial"
              customHubTitle="Medical Construction"
              customHubHref="/commercial/medical-construction/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Medical Gas Piping Requirements
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Understanding NFPA 99 requirements for medical gas systems in healthcare
              facilities. Installation standards, testing protocols, and certification
              requirements for Tampa Bay medical construction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Your Medical Gas Project
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

      {/* Alert */}
      <section className="py-4 bg-red-50 border-y border-red-200">
        <div className="container-custom">
          <div className="flex items-center gap-3 text-red-800">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" />
            <p className="font-medium">
              <strong>Life Safety System:</strong> Medical gas systems are critical
              infrastructure. Only ASSE-certified personnel may install, modify, or
              verify these systems. Non-compliance can result in patient harm and facility closure.
            </p>
          </div>
        </div>
      </section>

      {/* Gas Types */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Medical Gas Types and Applications
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Healthcare facilities use multiple gas systems, each with specific
            requirements and safety considerations.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-3 py-3 text-left font-semibold">Gas</th>
                  <th className="px-3 py-3 text-center font-semibold">Color</th>
                  <th className="px-3 py-3 text-center font-semibold">Pressure</th>
                  <th className="px-3 py-3 text-left font-semibold">Applications</th>
                  <th className="px-3 py-3 text-left font-semibold">Hazards</th>
                </tr>
              </thead>
              <tbody>
                {gasTypes.map((gas, index) => (
                  <tr
                    key={gas.gas}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-3 py-3 font-semibold text-brand-green-dark">
                      {gas.gas}
                    </td>
                    <td className="px-3 py-3 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded text-xs font-bold text-white ${
                          gas.color === "Green" ? "bg-green-600" :
                          gas.color === "Yellow" ? "bg-yellow-500 text-black" :
                          gas.color === "Black" ? "bg-gray-800" :
                          gas.color === "Blue" ? "bg-blue-600" :
                          gas.color === "Gray" ? "bg-gray-500" :
                          gas.color === "White" ? "bg-gray-300 text-black" :
                          "bg-purple-600"
                        }`}
                      >
                        {gas.color}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-center">{gas.pressure}</td>
                    <td className="px-3 py-3 text-gray-600">{gas.applications}</td>
                    <td className="px-3 py-3 text-red-600 text-xs">{gas.hazards}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* NFPA Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            NFPA 99 Key Requirements
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            NFPA 99 Health Care Facilities Code governs medical gas system design,
            installation, and testing. These are critical requirements.
          </p>
          <div className="space-y-4">
            {nfpaRequirements.map((req) => (
              <div key={req.requirement} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <FileText className="w-8 h-8 text-brand-green" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-brand-green-dark">
                        {req.requirement}
                      </h3>
                      <span className="text-xs bg-brand-green-light/30 text-brand-green-dark px-2 py-1 rounded">
                        {req.standard}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-2">{req.specification}</p>
                    <p className="text-sm text-gray-500 italic">{req.notes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installer Credentials */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Required Certifications (ASSE 6000 Series)
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Medical gas work requires specific professional certifications.
            These are not optional - they are mandated by code and enforced by AHJs.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {installerCredentials.map((cred) => (
              <div key={cred.credential} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-8 h-8 text-brand-gold" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark">
                      {cred.credential}
                    </h3>
                    <p className="text-sm text-brand-gold-dark">{cred.description}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">{cred.scope}</p>
                <div className={`inline-block px-3 py-1 rounded text-sm font-semibold ${
                  cred.required.startsWith("Yes") ? "bg-red-100 text-red-700" : "bg-gray-200 text-gray-600"
                }`}>
                  {cred.required}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Protocol */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Testing and Verification Protocol
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Medical gas systems require rigorous testing before patient use.
            This is the standard sequence for new installations.
          </p>
          <div className="max-w-4xl mx-auto">
            {testingProtocol.map((test, index) => (
              <div key={test.phase} className="flex gap-6 mb-6 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  {index < testingProtocol.length - 1 && (
                    <div className="w-0.5 h-full bg-brand-green-light mx-auto mt-2" />
                  )}
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-md">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-brand-green-dark">
                      {test.phase}
                    </h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {test.timing}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{test.method}</p>
                  <div className="bg-green-50 rounded-lg p-3">
                    <span className="text-xs text-green-600 font-semibold">Pass Criteria</span>
                    <p className="text-green-700 text-sm">{test.passFailCriteria}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Common Issues and Prevention
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            These problems frequently cause verification failures and project delays.
            Proper planning prevents most issues.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonIssues.map((issue) => (
              <div key={issue.issue} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                  <h3 className="text-lg font-bold text-brand-green-dark">
                    {issue.issue}
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-red-50 rounded-lg p-3">
                    <span className="text-xs text-red-600 font-semibold">Consequence</span>
                    <p className="text-red-700 text-sm">{issue.consequence}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <span className="text-xs text-green-600 font-semibold">Prevention</span>
                    <p className="text-green-700 text-sm">{issue.prevention}</p>
                  </div>
                </div>
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
            Related Medical Construction Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/commercial/medical-construction/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Medical Construction Services
              </h3>
              <p className="text-gray-600 text-sm">
                Full-scope healthcare facility construction in Tampa Bay.
              </p>
            </Link>
            <Link
              href="/clean-room-construction-standards/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Clean Room Standards
              </h3>
              <p className="text-gray-600 text-sm">
                ISO classification requirements for controlled environments.
              </p>
            </Link>
            <Link
              href="/navigating-ahca-inspections/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                AHCA Inspection Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Florida healthcare facility licensing requirements.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Planning a Medical Facility with Gas Systems?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists coordinates medical gas installation
            with ASSE-certified contractors and verifiers. We ensure your healthcare
            project meets all NFPA 99 requirements and passes verification on schedule.
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