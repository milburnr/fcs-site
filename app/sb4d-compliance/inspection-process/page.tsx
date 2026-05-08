import Link from "next/link";
import type { Metadata } from "next";
import { Phone, Shield, Award, AlertTriangle, CheckCircle, ClipboardCheck, Search, FileCheck, Building2, Users, Clock, Scale, ArrowRight } from "lucide-react";
import { ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { AuthorByline } from "@/components/AuthorByline";
import { CodeReference } from "@/components/CodeReference";
import { BackToHub } from "@/components/BackToHub";
import { InternalLinks } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: "https://floridaconstructionspecialists.com/sb4d-compliance/inspection-process/" },
  title: "Milestone Inspection & SIRS Process Guide",
  description: "Florida's SB4-D milestone inspection and SIRS process: Phase 1 visual assessment, Phase 2 detailed engineering examination, and remediation timelines explained.",
  openGraph: {
    title: "Milestone Inspection & SIRS Process Guide",
    description: "Understand the SB4-D milestone inspection and SIRS process. Phase 1 visual inspection Phase 2 detailed examination remediation timelines.",
    url: "https://floridaconstructionspecialists.com/sb4d-compliance/inspection-process/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "Who is responsible for initiating the milestone inspection -- the condo board or individual unit owners?",
    answer: "The condominium association's board of directors is responsible for initiating and completing the milestone inspection. Individual unit owners have no direct obligation under the statute. The board must engage a licensed Professional Engineer or architect to conduct the inspection and must submit the completed report to the local building official. Board members who fail to initiate inspections by the applicable deadline may face personal liability for breach of fiduciary duty."
  },
  {
    question: "Can the same engineer who performs the inspection also design the remediation?",
    answer: "Yes. The licensed Professional Engineer or architect who conducts the milestone inspection may also prepare the repair specifications and oversee the remediation work. In practice, this is common and often beneficial because the inspection engineer already understands the building's specific conditions. However, some associations choose to engage a separate engineer for remediation design as a check on the original findings. The key requirement is that the inspector must be a licensed PE or architect independent of the contractor performing repairs -- FCS does not perform inspections, but works alongside the inspection engineers during remediation."
  },
  {
    question: "What is the difference between a milestone inspection and a SIRS?",
    answer: "A milestone inspection is a structural assessment of the building's physical condition, conducted by a licensed engineer or architect. It evaluates whether the building has substantial structural deterioration. A Structural Integrity Reserve Study (SIRS) is a financial planning document that evaluates the remaining useful life and replacement cost of major building components, then determines whether the association's reserve fund is adequate to cover future repairs. Both are required under Florida law, but they serve different purposes: the milestone inspection asks 'is the building safe now?' while the SIRS asks 'can we afford to maintain it going forward?'"
  },
  {
    question: "What happens if a building fails its Phase 1 inspection?",
    answer: "A Phase 1 inspection does not technically 'fail.' If the inspector identifies substantial structural deterioration, they are required to recommend a Phase 2 inspection, which involves more detailed and potentially destructive testing. The building is not condemned or declared unsafe based on Phase 1 findings alone. However, if the engineer determines there is an immediate life-safety concern, they must notify the local building official, who may take emergency action. In most cases, Phase 2 simply means a more thorough evaluation is needed before a remediation plan can be developed."
  },
  {
    question: "How does the 2-year reserve pause under HB 913 work?",
    answer: "HB 913, effective July 1, 2025, allows condominium associations to pause reserve fund contributions for up to two fiscal years if the association needs to prioritize immediate structural repairs or remediation work. This provision was added because some associations faced the impossible situation of funding both urgent repairs and fully funded reserves simultaneously. The pause must be approved by the board, and the association must resume contributions after the pause period. This option is particularly useful for buildings that received Phase 2 inspection reports requiring substantial remediation -- it lets the association direct funding toward the repairs rather than a reserve account."
  },
  {
    question: "When does an association need to start remediation after receiving a Phase 2 report?",
    answer: "Under Florida Statute 553.899, the association must commence necessary repairs within 365 days of receiving the Phase 2 inspection report. 'Commence' means beginning actual construction work, not merely planning or permitting. Given that permitting, engineering, bidding, and mobilization can take 6 to 9 months, associations should begin engaging a remediation contractor and structural engineer immediately upon receiving the Phase 2 report. Failure to begin remediation within the 365-day window exposes the association to enforcement action by the local building official and potential liability for board members."
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial", href: "/commercial/" },
  { name: "SB4-D Compliance", href: "/sb4d-compliance/" },
  { name: "Inspection Process", href: "/sb4d-compliance/inspection-process/" },
];

const hubLinks = [
  { label: "SB4-D Compliance Hub", href: "/sb4d-compliance/" },
  { label: "Compliance Checklist", href: "/sb4d-compliance/checklist/" },
  { label: "Deadline Calendar", href: "/sb4d-compliance/deadlines/" },
  { label: "Remediation Cost Guide", href: "/sb4d-compliance/costs/" },
  { label: "Condo Remediation Services", href: "/commercial/condo-remediation/" },
  { label: "Balcony Reconstruction", href: "/balcony-reconstruction/" },
  { label: "Exterior Waterproofing", href: "/exterior-waterproofing/" },
];

export default function SB4DInspectionProcessPage() {
  return (
    <>
      <ServiceSchema
        serviceName="SB4-D Milestone Inspection Remediation"
        serviceDescription="Milestone inspection coordination, Phase 2 remediation, and SIRS compliance support for condominium associations in Tampa Bay. Licensed CBC contractor working alongside structural engineers to complete required repairs."
        serviceCategories={["Milestone Inspection Coordination", "Phase 2 Remediation", "Structural Concrete Repair", "SIRS Compliance Support", "Threshold Building Certification"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full mb-6">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 font-semibold text-sm">Many Buildings Are Already Past Due</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Understanding the Milestone Inspection and SIRS Process
            </h1>
            <AuthorByline publishDate="2026-02-18" variant="light" />
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Florida&apos;s SB 4-D legislation requires condominium buildings three stories and above to undergo structural milestone inspections and maintain adequate reserves through a Structural Integrity Reserve Study. This guide explains what happens at each stage of the process, who is responsible, and how FCS supports associations through remediation.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Since 1982</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">License {BUSINESS_INFO.licenseNumber}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-cta flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact/" className="btn-secondary flex items-center justify-center gap-2">
                Request Consultation Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Hub */}
      <section className="bg-white pt-8 pb-0">
        <div className="container-custom">
          <BackToHub silo="commercial" customHubTitle="SB4-D Compliance" customHubHref="/sb4d-compliance/" />
        </div>
      </section>

      {/* Phase 1 Inspection */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Phase 1 Inspection: Visual and Limited Examination
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                The Phase 1 milestone inspection is the initial structural assessment required under Florida Statute 553.899. It is a visual and limited-scope examination of the building&apos;s primary structural components, intended to determine whether substantial structural deterioration exists.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Who Performs Phase 1</h3>
                <p className="mb-4">
                  The Phase 1 inspection must be conducted by a <strong>licensed Professional Engineer (PE) or a licensed architect</strong> -- not by a contractor. The inspection is an engineering assessment, not a construction evaluation. The association&apos;s board of directors is responsible for engaging and paying for the inspection engineer. FCS does not perform milestone inspections. We are the remediation contractor that enters the process after the engineer has completed their assessment and identified the necessary repairs.
                </p>
              </div>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">What Phase 1 Examines</h3>
              <p className="mb-4">
                The inspector evaluates the building&apos;s load-bearing walls, floors, foundations, primary structural members, and other components that affect the structural integrity of the building. For Florida condominiums, common focus areas include:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Concrete spalling and delamination</strong> on balconies, walkways, columns, and parking structures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Reinforcing steel corrosion</strong> visible through cracking, rust staining, or exposed rebar</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Waterproofing system failures</strong> allowing moisture into structural elements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Post-tension cable distress</strong> in parking garages and elevated slabs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Foundation settlement or movement</strong> affecting structural stability</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Timeline and Deadlines</h3>
              <p className="mb-4">
                Under the current statute, buildings must complete their initial milestone inspection based on when they received their certificate of occupancy:
              </p>

              {/* Past-Due Deadline Alert */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-amber-900">Key Deadlines Have Passed</p>
                    <p className="text-amber-800 text-sm mt-1">
                      Buildings with certificates of occupancy issued before July 1, 1992 were required to complete their milestone inspection by <strong>December 31, 2024</strong>. Buildings with certificates issued between July 1992 and December 1994 had a <strong>December 31, 2025</strong> deadline. Both deadlines have now passed. Buildings that have not completed their required inspections are non-compliant and face escalating consequences.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mb-4">
                For buildings reaching 30 years of age after January 1, 1995, the milestone inspection is due by the end of the year the building turns 30 -- or 25 years for buildings located within three miles of the coastline. Subsequent inspections are required every 10 years.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Phase 1 Outcome</h3>
              <p className="mb-4">
                The Phase 1 inspection produces one of two outcomes:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <h4 className="font-bold text-green-900">No Substantial Deterioration</h4>
                  </div>
                  <p className="text-green-800 text-sm">
                    The engineer finds no evidence of substantial structural deterioration. The report is filed with the local building official, and the association&apos;s next inspection is due in 10 years. The building may still have maintenance needs, but no Phase 2 is required.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    <h4 className="font-bold text-amber-900">Phase 2 Required</h4>
                  </div>
                  <p className="text-amber-800 text-sm">
                    The engineer identifies substantial structural deterioration requiring further investigation. A Phase 2 inspection must be initiated within 180 days of the Phase 1 report submission. This is where most associations begin engaging a remediation contractor.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Typical Phase 1 Cost</h3>
              <p>
                Phase 1 inspection costs typically range from <strong>$5,000 to $25,000</strong> depending on building size, number of stories, and complexity. This is the inspection cost only -- it covers the engineer&apos;s time for examination and report preparation. It does not include any remediation costs. Larger buildings with parking structures, extensive balcony systems, or complex structural configurations will be at the higher end of this range. Associations should budget for this as a recurring expense every 10 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2 Inspection */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                <ClipboardCheck className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Phase 2 Inspection: Detailed Structural Examination
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                When a Phase 1 inspection reveals substantial structural deterioration, the statute requires a Phase 2 inspection -- a significantly more detailed and potentially destructive examination of the building&apos;s structural systems.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">What Triggers Phase 2</h3>
              <p className="mb-6">
                Phase 2 is triggered when the Phase 1 inspector determines that substantial structural deterioration exists. &quot;Substantial structural deterioration&quot; means the building has damage or distress that affects its general structural integrity, as opposed to isolated or cosmetic damage. The determination is a professional judgment call made by the licensed engineer or architect who conducted the Phase 1 inspection.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">What Phase 2 Involves</h3>
              <p className="mb-4">
                Unlike the primarily visual Phase 1 examination, Phase 2 involves detailed, often destructive testing methods to fully characterize the extent and severity of structural deterioration. The inspection engineer may:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Core concrete samples</strong> for compressive strength testing and chloride content analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Remove concrete cover</strong> to expose and evaluate reinforcing steel condition</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Ground-penetrating radar scans</strong> to map rebar location, post-tension cables, and voids</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Load testing</strong> on structural elements where capacity is in question</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Moisture and water intrusion testing</strong> on building envelope systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Post-tension cable evaluation</strong> including tendon force measurement and corrosion assessment</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Timeline Requirements</h3>
              <p className="mb-6">
                The Phase 2 inspection must be initiated within <strong>180 days</strong> of the Phase 1 report being submitted to the local building official. &quot;Initiated&quot; means the association has engaged an engineer and work has begun -- not merely that a contract has been signed. Given the complexity of Phase 2 testing, the inspection itself may take several weeks to several months to complete depending on building size and the extent of deterioration found.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Phase 2 Deliverable</h3>
              <p className="mb-6">
                The Phase 2 inspection produces a detailed report that includes specific findings for each structural system examined, prioritized repair recommendations, estimated repair costs, and a recommended repair timeline. This report becomes the roadmap for remediation -- it is the document that FCS and the association&apos;s engineering team use to develop the actual construction scope, schedule, and budget for the repair work.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Typical Phase 2 Cost</h3>
              <p>
                Phase 2 inspection costs typically range from <strong>$15,000 to $75,000 or more</strong> depending on building size, the extent of destructive testing required, and the number of structural systems being evaluated. The cost is substantially higher than Phase 1 because it involves laboratory testing, specialized equipment (GPR scanners, core drills), and significantly more engineering time. Some associations are surprised by this cost, but the Phase 2 report is essential for developing an accurate remediation plan and preventing cost overruns during construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Remediation After Phase 2 */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-brand-green-dark flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Remediation After Phase 2: From Report to Repairs
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Once the Phase 2 inspection report is complete, the association has a <strong>365-day window to commence necessary repairs</strong>. This is where FCS enters the process -- we are the remediation contractor that executes the repairs the engineers have specified.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">The 365-Day Clock</h3>
              <p className="mb-6">
                The 365-day remediation commencement deadline starts from the date the Phase 2 report is submitted to the local building official. &quot;Commence&quot; under the statute means actual construction work has begun. Given that the path from report to construction involves engineering design, permitting, contractor selection, and mobilization, associations that wait to start this process risk missing the deadline. Most remediation projects require 6 to 9 months of pre-construction work before the first repair begins on-site.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Who Does What During Remediation</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Scale className="w-4 h-4 text-blue-700" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-green-dark">The Structural Engineer</p>
                      <p className="text-gray-600 text-sm">Prepares repair specifications, reviews contractor submittals, conducts progress inspections, and provides the final certification that repairs were completed per the Phase 2 report recommendations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Building2 className="w-4 h-4 text-green-700" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-green-dark">FCS (Remediation Contractor)</p>
                      <p className="text-gray-600 text-sm">Executes the repairs specified by the engineer. This includes concrete removal and replacement, steel reinforcement repair, waterproofing installation, balcony reconstruction, and all associated construction work. We work alongside the inspection engineers, not independently of them.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Users className="w-4 h-4 text-purple-700" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-green-dark">The Association Board</p>
                      <p className="text-gray-600 text-sm">Approves the remediation scope and funding, communicates with unit owners about timelines and assessments, and ensures the association meets its statutory obligations for compliance documentation.</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Construction Planning and Phasing</h3>
              <p className="mb-6">
                Remediation construction on occupied condominium buildings requires careful phasing. Residents continue to live in the building during repairs, which means the contractor must manage noise, dust, access disruptions, and safety throughout the project. FCS develops phased construction plans that sequence work by building elevation, floor level, or structural system to minimize disruption. For example, balcony repairs might proceed one elevation at a time, while parking structure work is phased to maintain adequate resident parking throughout the project.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Threshold Building Certification</h3>
              <p>
                Upon completion of remediation, the structural engineer conducts verification inspections and issues the documentation required to demonstrate that the building has met its SB 4-D obligations. This &quot;threshold building certification&quot; is filed with the local building official and becomes part of the building&apos;s permanent compliance record. FCS coordinates with the inspection engineer throughout the construction process to ensure that all repairs meet the specifications and that the certification process proceeds without delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIRS Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                SIRS: Structural Integrity Reserve Study
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                The Structural Integrity Reserve Study is a separate but complementary requirement to the milestone inspection. While the milestone inspection evaluates the building&apos;s current structural condition, the SIRS evaluates whether the association has adequate financial reserves to fund future maintenance, repair, and replacement of major building components.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Who Needs a SIRS</h3>
              <p className="mb-6">
                All condominium associations with buildings three stories or higher must complete a SIRS. This is required regardless of building age -- it applies to newer buildings as well as older ones that also require milestone inspections. The study must be conducted by a licensed Professional Engineer, architect, or reserve specialist who is not affiliated with the association&apos;s management company.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Required Reserve Components</h3>
              <p className="mb-4">
                Under Section 718.112, Florida Statutes, the SIRS must evaluate the remaining useful life and replacement cost of these building components:
              </p>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {[
                  "Roof and roof deck",
                  "Load-bearing walls and primary structural members",
                  "Floor and foundation systems",
                  "Fireproofing and fire protection systems",
                  "Plumbing systems",
                  "Electrical systems",
                  "Waterproofing and exterior painting",
                  "Windows and exterior doors",
                  "Any other item with deferred maintenance or replacement cost exceeding $25,000"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 bg-white rounded-lg p-3 border border-gray-200">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">HB 913 Changes: Baseline Funding Plan</h3>
              <p className="mb-6">
                HB 913, signed into law in June 2025 and effective July 1, 2025, introduced significant changes to SIRS requirements. The most important is the <strong>baseline funding plan</strong> requirement: the association&apos;s reserve funding plan must demonstrate that reserves will never drop below zero at any point during the planning horizon. This prevents associations from underfunding reserves by deferring contributions to future years. Additionally, the deferred maintenance threshold was raised from $10,000 to <strong>$25,000</strong>, indexed to inflation, and associations must report SIRS results to the DBPR through an online portal.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">The 2-Year Reserve Pause Option</h3>
              <p className="mb-6">
                Recognizing that some associations face the difficult situation of needing to fund both immediate repairs and long-term reserves simultaneously, HB 913 allows associations to <strong>pause reserve fund contributions for up to two fiscal years</strong> to prioritize immediate structural repairs. This is particularly relevant for buildings that received Phase 2 inspection reports requiring substantial remediation. The pause must be approved by the board and documented in the association&apos;s records. After the pause period, full reserve funding must resume.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">SIRS vs. Milestone Inspection</h3>
              <p className="mb-4">
                These are separate requirements that serve different purposes:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl p-5 border border-gray-200">
                  <h4 className="font-bold text-brand-green-dark mb-2">Milestone Inspection</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Evaluates current physical condition</li>
                    <li>Performed by PE or architect</li>
                    <li>Triggered by building age</li>
                    <li>Determines if remediation needed</li>
                    <li>Required every 10 years</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200">
                  <h4 className="font-bold text-brand-green-dark mb-2">SIRS</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Evaluates financial adequacy of reserves</li>
                    <li>Performed by PE, architect, or reserve specialist</li>
                    <li>Required for all 3+ story condos</li>
                    <li>Determines if reserves are funded</li>
                    <li>Updated periodically per association policy</li>
                  </ul>
                </div>
              </div>

              {/* Past-Due SIRS Alert */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-amber-900">SIRS Deadline Has Passed</p>
                    <p className="text-amber-800 text-sm mt-1">
                      The initial SIRS completion deadline of <strong>December 31, 2025</strong> has passed. Additionally, as of <strong>January 1, 2025</strong>, associations may no longer waive or reduce reserve funding for SIRS components. Buildings that have not completed their SIRS are non-compliant and may face difficulty obtaining insurance, financing unit sales, and meeting fiduciary obligations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How FCS Supports the Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              How FCS Supports the Inspection and Remediation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
              FCS is a remediation contractor, not an inspection firm. We enter the process after the structural engineer identifies what needs to be repaired. Here is how we help at each stage.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Search,
                  title: "Pre-Inspection Consultation",
                  description: "Before the milestone inspection begins, we help association boards understand what to expect from the process, what the engineer will be looking for, and how to prepare the building for efficient access. We can identify areas of obvious concern that the board should bring to the inspector's attention. This is not an inspection -- it is construction-experienced guidance that helps the association ask the right questions.",
                },
                {
                  icon: Users,
                  title: "Direct Access to Licensed Structural Engineers",
                  description: "FCS maintains relationships with dedicated engineering partners who specialize in Florida condominium structural assessments. When an association needs a qualified inspection engineer, we can facilitate introductions to licensed professionals with specific experience in the type of building being evaluated. The engineer works independently -- they are engaged by and report to the association, not to FCS.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Post-Inspection Remediation Planning",
                  description: "Once the Phase 2 report is complete, we work with the association and the inspection engineer to develop a comprehensive remediation plan. This includes detailed construction scoping, cost estimating, phasing plans for occupied buildings, and timeline projections. We translate the engineer's technical findings into a construction plan the board can understand and approve.",
                },
                {
                  icon: Building2,
                  title: "Remediation Construction Management",
                  description: "As the licensed general contractor, FCS manages all aspects of the remediation construction. We coordinate subcontractors, manage materials, maintain quality control, ensure safety compliance, and keep the project on schedule. We work alongside the inspection engineers throughout construction so they can verify that repairs are executed according to their specifications.",
                },
                {
                  icon: FileCheck,
                  title: "Threshold Certification Coordination",
                  description: "At project completion, we coordinate with the structural engineer for verification inspections and support the preparation of the threshold building certification. We compile complete project records including repair documentation, material certifications, quality control reports, and warranty information that the association needs for its permanent compliance files.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-6 bg-gray-50 rounded-xl p-6">
                  <div className="w-14 h-14 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Code References */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Applicable Florida Statutes
            </h2>
            <CodeReference
              code="Florida Statute 553.899"
              section="Mandatory Structural Inspections for Condominium and Cooperative Buildings"
              description="Establishes milestone inspection requirements for condominium buildings 3 stories or higher. Phase 1 visual inspection at 30 years (25 years within 3 miles of coast), Phase 2 detailed inspection if substantial deterioration found, and 365-day remediation commencement requirement after Phase 2 report."
              link="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.899.html"
              linkText="View F.S. 553.899"
            />
            <CodeReference
              code="Florida Statute 718.112"
              section="Condominium Association Powers and Duties -- Reserve Funds and SIRS"
              description="Requires Structural Integrity Reserve Studies for all condominium buildings 3 stories or higher. As amended by HB 913 (2025), reserves must follow a baseline funding plan that keeps balances above zero, the deferred maintenance threshold is $25,000 (inflation-indexed), and associations may pause contributions for up to 2 years to fund immediate repairs."
              link="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0718/Sections/0718.112.html"
              linkText="View F.S. 718.112"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={faqs}
        title="Milestone Inspection & SIRS Process FAQ"
        description="Common questions about the inspection process, SIRS requirements, and remediation timeline under Florida's SB 4-D legislation."
      />

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <InternalLinks
              title="SB4-D Compliance Resources"
              links={hubLinks}
            />
          </div>
        </div>
      </section>

      {/* Phone-First CTA Section */}
      <section className="py-16 bg-gradient-to-br from-brand-green-dark to-brand-green-forest">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Discuss Your Building&apos;s Inspection Findings
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether your building has received a Phase 2 inspection report or you&apos;re preparing for your first milestone inspection, our team can help you understand your obligations and develop a remediation plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-brand-green-dark font-bold rounded-lg hover:bg-brand-gold-light transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {BUSINESS_INFO.phone}
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              Request Consultation Online
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-300">
              <span>License {BUSINESS_INFO.licenseNumber}</span>
              <span>Dedicated Engineering Partners</span>
              <span>{BUSINESS_INFO.yearsInBusiness} Years Experience</span>
              <span>SB 4-D Remediation Specialists</span>
            </div>
          </div>
        </div>
      </section>
    <RelatedArticles pageSlug="inspection-process" />
    </>
  );
}
