import Link from "next/link";
import type { Metadata } from "next";
import { Phone, CheckCircle, Shield, Award, AlertTriangle, ArrowRight, Building2, FileCheck, Clock, MapPin, Users, Scale } from "lucide-react";
import { ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { BUSINESS_INFO } from "@/lib/constants";
import { CodeReference } from "@/components/CodeReference";
import { AuthorByline } from "@/components/AuthorByline";
import { BackToHub } from "@/components/BackToHub";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/sb4d-compliance/checklist/' },
  title: "SB4-D Compliance Checklist for Condo Boards",
  description: "Step-by-step SB4-D compliance checklist for Florida condo associations. Determine your deadline, schedule inspections, plan remediation, complete SIRS.",
  openGraph: {
    title: "SB4-D Compliance Checklist for Condo Boards",
    description: "Step-by-step SB4-D compliance checklist for Florida condo associations. Determine your deadline, schedule inspections, plan remediation, complete SIRS.",
    url: "https://floridaconstructionspecialists.com/sb4d-compliance/checklist/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "Who is responsible for ensuring SB4-D compliance -- the condo board or individual unit owners?",
    answer: "The condominium association's board of directors bears the legal responsibility for ensuring SB4-D compliance. This includes initiating the milestone inspection, engaging qualified engineers, overseeing any required remediation, completing the Structural Integrity Reserve Study, and filing reports with the local building department and DBPR. Individual unit owners are responsible for paying their share of any special assessments the board levies to fund compliance activities. Board members who fail to take required action may face personal liability for breach of fiduciary duty."
  },
  {
    question: "Can our condo association perform the milestone inspection ourselves?",
    answer: "No. Florida law requires that milestone inspections be performed by a licensed Professional Engineer or licensed architect. The association's role is to engage a qualified inspector, provide access to the building, and act on the findings. The inspector must have no financial interest in any remediation work they recommend. Under HB 913's enhanced conflict-of-interest provisions, the inspecting engineer must provide specific disclosures about any relationships with contractors or the association."
  },
  {
    question: "What is the difference between Phase 1 and Phase 2 milestone inspections?",
    answer: "Phase 1 is a visual examination of the building's structural components by a licensed engineer or architect. If the Phase 1 inspection does not identify signs of substantial structural deterioration, no further inspection is required until the next 10-year cycle. If substantial structural deterioration is identified in Phase 1, a Phase 2 inspection is triggered. Phase 2 involves destructive and non-destructive testing -- core samples, ground-penetrating radar, chloride testing, and other methods -- to determine the full extent of deterioration. Phase 2 produces detailed findings and remediation recommendations."
  },
  {
    question: "How long do we have to begin remediation after a Phase 2 inspection?",
    answer: "Under Florida Statute 553.899, remediation of the conditions identified in a Phase 2 inspection must commence within 365 days of receiving the report. 'Commence' means that the association must have engaged a contractor and begun active construction -- not simply be planning or fundraising. Associations that cannot meet this timeline due to funding constraints should document their good-faith efforts and consult with legal counsel about compliance options, as enforcement may consider the association's diligence in responding to findings."
  },
  {
    question: "What is a Structural Integrity Reserve Study (SIRS) and how is it different from a regular reserve study?",
    answer: "A SIRS is a specialized reserve study required by SB4-D that specifically addresses structural components: roof, load-bearing walls, floors, foundations, fireproofing, plumbing, electrical, waterproofing, and exterior painting or coating. Unlike a traditional reserve study that may cover all common elements, a SIRS focuses on components that affect the building's structural integrity and safety. Under HB 913, the SIRS must include a baseline funding plan demonstrating that reserves stay above zero throughout the study period. Associations can no longer waive or reduce reserve contributions for these structural components."
  },
  {
    question: "What should our board do if we have already missed our SB4-D deadline?",
    answer: "If your building has missed its milestone inspection or SIRS deadline, the most important step is to act now. Engage a licensed structural engineer to begin the milestone inspection process immediately. Document every step the board takes to demonstrate good-faith progress toward compliance. Notify your insurance carrier proactively about your compliance timeline. Consult with the association's attorney about liability exposure and communication to unit owners. Contact your local building department to understand their enforcement approach and any grace period considerations. The longer you wait, the greater the exposure to insurance non-renewal, lending restrictions, and code enforcement action."
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial", href: "/commercial/" },
  { name: "SB4-D Compliance", href: "/sb4d-compliance/" },
  { name: "Compliance Checklist", href: "/sb4d-compliance/checklist/" },
];

const checklistSteps = [
  {
    step: 1,
    title: "Determine Your Building's Milestone Inspection Deadline",
    who: "Board / Property Manager",
    when: "Immediately",
    content: [
      "Locate your building's original certificate of occupancy (CO) date from the local building department.",
      "Determine whether your building is within three miles of the coastline. If yes, the milestone inspection trigger is 25 years from the CO date. If no, the trigger is 30 years.",
      "Compare the trigger date against the current deadline schedule. Buildings with CO dates before July 1, 1992 had a December 31, 2024 deadline (now past due). Buildings with CO dates between July 1992 and December 1994 had a December 31, 2025 deadline (now past due). Buildings reaching their trigger age after these dates must complete the inspection by the year they reach the applicable age.",
      "If your building's deadline has already passed and the inspection is not complete, you are currently non-compliant. Proceed to Step 2 immediately.",
    ],
  },
  {
    step: 2,
    title: "Engage a Licensed Structural Engineer for Phase 1 Inspection",
    who: "Board (with engineer selection)",
    when: "Within 30 days of determining deadline status",
    content: [
      "The milestone inspection must be performed by a Florida-licensed Professional Engineer (PE) or licensed architect. The association selects and engages the inspector directly.",
      "Under HB 913, the inspecting engineer must provide conflict-of-interest disclosures. The engineer should have no financial interest in remediation work they may recommend.",
      "The Phase 1 inspection is a visual examination of structural components: load-bearing walls, columns, beams, floors, foundations, balconies, walkways, parking structures, and the building envelope.",
      "If Phase 1 finds no substantial structural deterioration, you will receive certification that the building has passed. Schedule the next inspection in 10 years. If substantial deterioration is found, Phase 2 is triggered.",
    ],
  },
  {
    step: 3,
    title: "If Phase 2 Required, Begin Remediation Planning Within 365 Days",
    who: "Board + Licensed Contractor + Engineer",
    when: "Within 365 days of Phase 2 report",
    content: [
      "Phase 2 involves destructive and non-destructive testing to determine the full extent of structural deterioration. The engineer will produce a detailed report with remediation recommendations.",
      "Review the Phase 2 findings with a qualified licensed contractor to develop a remediation scope of work, cost estimate, and construction timeline.",
      "Prioritize repairs: distinguish between critical structural items that must be addressed immediately and lower-priority maintenance items that can be phased.",
      "Florida law requires that remediation must commence within 365 days of receiving the Phase 2 report. 'Commence' means active construction has begun, not simply planning or fundraising.",
      "Begin the special assessment or financing process immediately -- funding delays are the most common reason associations miss the 365-day remediation window.",
    ],
  },
  {
    step: 4,
    title: "Complete Structural Integrity Reserve Study (SIRS)",
    who: "Board + Reserve Study Professional",
    when: "By December 31, 2025 (deadline past due for most buildings)",
    content: [
      "Engage a qualified reserve study professional to conduct a SIRS that specifically covers structural components: roof, load-bearing walls, floors, foundations, fireproofing, plumbing, electrical, waterproofing, and exterior painting or coating.",
      "The SIRS must estimate the remaining useful life and replacement cost of each structural component.",
      "Under HB 913, the SIRS must include a baseline funding plan demonstrating that reserves stay above zero throughout the study period.",
      "The SIRS will determine the annual reserve contribution amount needed to maintain compliant funding levels. Associations can no longer waive or reduce contributions for structural components.",
    ],
  },
  {
    step: 5,
    title: "Establish Compliant Reserve Funding Plan",
    who: "Board + Financial Advisor / Attorney",
    when: "Within 30 days of SIRS completion",
    content: [
      "Based on the SIRS findings, establish a reserve funding plan that meets the baseline requirement: reserves must stay above zero throughout the study period.",
      "The reserve threshold under HB 913 increased to $25,000 (indexed to inflation). Buildings above this threshold must fully fund structural reserves.",
      "Associations may pause reserve contributions for up to two fiscal years if the funds are needed for immediate structural repairs. This pause option exists to help associations facing simultaneous remediation costs and reserve requirements.",
      "Communicate the funding plan, including any special assessments, to unit owners with clear timelines and payment options.",
      "Consult with the association's attorney regarding proper notice, voting, and assessment procedures under Florida condominium law.",
    ],
  },
  {
    step: 6,
    title: "File Reports with Local Building Department and DBPR",
    who: "Board / Property Manager / Engineer",
    when: "Within 30 days of inspection completion",
    content: [
      "The milestone inspection report must be filed with the local building department. In Tampa, reports are submitted via the Accela system using the RCT record type.",
      "Under HB 913, associations must also submit reports online through the Department of Business and Professional Regulation (DBPR) condominium portal.",
      "Retain copies of all inspection reports, remediation plans, SIRS documents, and filing confirmations in the association's permanent records.",
      "Provide copies of the inspection report to unit owners upon request, as required by Florida condominium law.",
    ],
  },
  {
    step: 7,
    title: "Schedule 10-Year Reinspection Timeline",
    who: "Board / Property Manager",
    when: "After initial compliance achieved",
    content: [
      "After the initial milestone inspection cycle is complete, the building must be reinspected every 10 years.",
      "Set calendar reminders and board resolutions to initiate the next inspection at least 12 months before the 10-year deadline to allow adequate time for engineer engagement and scheduling.",
      "Maintain a proactive maintenance program between inspections. Buildings that address deterioration as it develops face significantly less remediation during subsequent milestone inspections.",
      "Update the SIRS as structural conditions change and ensure reserve contributions continue at the levels required by the most recent study.",
    ],
  },
];

export default function SB4DChecklistPage() {
  return (
    <>
      <ServiceSchema
        serviceName="SB4-D Compliance Checklist"
        serviceDescription="Step-by-step SB4-D compliance checklist and remediation guidance for Florida condominium associations. Milestone inspection coordination, SIRS completion, structural repair planning. Licensed CBC1262722."
        serviceCategories={["Compliance Assessment", "Milestone Inspection Coordination", "SIRS Planning", "Remediation Scope Development", "Reserve Study Coordination"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/tampa-condo-building-construction/tampa-condo-building-construction-display.webp')] bg-cover bg-center opacity-15" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <BackToHub silo="commercial" customHubTitle="SB4-D Compliance Hub" customHubHref="/sb4d-compliance/" />
          <div className="max-w-4xl mt-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Is Your Building SB4-D Compliant? A Step-by-Step Checklist
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              This checklist walks condo board members and property managers through every step of SB4-D compliance, from determining your deadline to filing final reports. If your building has not completed these steps, use this guide to identify where you stand and what action to take next.
            </p>
            <AuthorByline variant="light" />

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
                Call to Discuss Your Building&apos;s Status
              </a>
              <Link href="/contact/" className="btn-secondary flex items-center justify-center gap-2">
                Request Consultation Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Where Does Your Building Stand? */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Where Does Your Building Stand?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Before working through the checklist below, answer these five questions to assess your building&apos;s current compliance status.
            </p>

            <div className="space-y-4 mb-10">
              {[
                {
                  question: "Do you know your building's certificate of occupancy date?",
                  context: "This date determines your milestone inspection deadline. Contact your local building department if you don't have it.",
                  icon: FileCheck,
                },
                {
                  question: "Is your building within three miles of the coastline?",
                  context: "Buildings within three miles use the 25-year inspection trigger. Buildings further inland use the 30-year trigger. In Tampa Bay, most condo buildings fall under the 25-year timeline.",
                  icon: MapPin,
                },
                {
                  question: "Has your building completed its initial milestone inspection?",
                  context: "If your building's deadline has passed and the inspection is not complete, you are currently non-compliant.",
                  icon: Building2,
                },
                {
                  question: "If Phase 2 was required, has remediation begun?",
                  context: "Remediation must commence within 365 days of the Phase 2 report. Delay increases both cost and legal exposure.",
                  icon: Clock,
                },
                {
                  question: "Has your association completed a Structural Integrity Reserve Study?",
                  context: "The SIRS deadline of December 31, 2025 has passed. Associations without a completed SIRS are non-compliant.",
                  icon: Scale,
                },
              ].map((item) => (
                <div key={item.question} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-green-bg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-brand-green-dark" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-green-dark">{item.question}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.context}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Numbered Checklist */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            SB4-D Compliance Checklist: 7 Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Each step identifies who is responsible, when it must happen, and what actions to take.
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {checklistSteps.map((item) => (
              <div key={item.step} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-brand-green-dark px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center">
                      <span className="text-brand-green-dark font-bold text-lg">{item.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-brand-green" />
                      <span className="text-gray-600"><strong>Who:</strong> {item.who}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-brand-green" />
                      <span className="text-gray-600"><strong>When:</strong> {item.when}</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {item.content.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What If You're Already Past Due */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-2xl font-bold text-amber-900 mb-3">What If You&apos;re Already Past Due?</h2>
                  <div className="prose prose-sm max-w-none text-amber-800">
                    <p className="mb-3">
                      If your building has missed its milestone inspection or SIRS deadline, the situation is serious but not hopeless. The most important action is to begin the compliance process now, even if you are late.
                    </p>
                    <p className="mb-3">
                      <strong>Document everything.</strong> Every board meeting where compliance is discussed, every engineer engagement letter, every proposal received. Demonstrating good-faith progress toward compliance is your strongest defense against enforcement action and liability claims.
                    </p>
                    <p className="mb-3">
                      <strong>Contact your insurance carrier proactively.</strong> Insurers are more likely to work with associations that are actively pursuing compliance than those that have ignored the requirement. Provide your carrier with a specific timeline for completing the inspection and any necessary remediation.
                    </p>
                    <p>
                      <strong>Engage qualified professionals immediately.</strong> A licensed structural engineer for the milestone inspection and a licensed contractor for remediation planning. Having professionals engaged demonstrates that the association is taking the requirement seriously and making measurable progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <CodeReference
              code="Florida Statute 553.899"
              section="Mandatory Structural Inspections for Condominium and Cooperative Buildings"
              description="Establishes milestone inspection requirements, Phase 1 and Phase 2 procedures, 365-day remediation commencement deadline, SIRS requirements, and reserve funding obligations for condominium associations with buildings three stories or higher."
              link="https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.899.html"
              linkText="View Florida Statute 553.899"
            />
          </div>
        </div>
      </section>

      {/* Why FCS - Brief */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading text-center">
              FCS: Your SB4-D Compliance Partner
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              Florida Construction Specialists helps condo associations navigate every phase of the SB4-D compliance process, from initial assessment through completed remediation and certification.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Direct Access to Licensed Structural Engineers",
                  detail: "Our dedicated engineering partners coordinate directly with association boards throughout the inspection and remediation process.",
                },
                {
                  title: "Licensed CBC Contractor",
                  detail: `Florida CBC license ${BUSINESS_INFO.licenseNumber} qualifies us for the full scope of structural remediation required under SB4-D.`,
                },
                {
                  title: "Decades of Florida Structural Repair",
                  detail: "Since 1982, our team has restored aging concrete, waterproofing systems, and structural elements across Tampa Bay's demanding coastal environment.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <h3 className="font-bold text-brand-green-dark mb-2 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={faqs}
        title="SB4-D Compliance Checklist FAQ"
        description="Frequently asked questions about SB4-D compliance steps, responsibilities, and timelines for condo associations."
      />

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
              Continue Exploring SB4-D Compliance
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/sb4d-compliance/", label: "SB4-D Compliance Hub", desc: "Overview and full resource directory" },
                { href: "/sb4d-compliance/deadlines/", label: "Deadline Calendar", desc: "Current deadlines and past-due status" },
                { href: "/sb4d-compliance/costs/", label: "Cost Guidance", desc: "Realistic remediation cost ranges" },
                { href: "/sb4d-compliance/inspection-process/", label: "Inspection & SIRS Guide", desc: "How the inspection process works" },
                { href: "/commercial/condo-remediation/", label: "Condo Remediation Services", desc: "FCS remediation capabilities" },
                { href: "/balcony-reconstruction/", label: "Balcony Reconstruction", desc: "Structural balcony repair services" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100 hover:shadow-md hover:border-brand-green/30 transition-all group"
                >
                  <ArrowRight className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                  <div>
                    <span className="font-bold text-brand-green-dark group-hover:text-brand-green transition-colors">{link.label}</span>
                    <p className="text-gray-500 text-xs mt-0.5">{link.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-brand-green-dark to-brand-green-forest">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Need Help Working Through This Checklist?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            If your building is past due or you need guidance on any step in the compliance process, our team can help you develop a plan and begin making progress.
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
              <span>Since 1982</span>
            </div>
          </div>
        </div>
      </section>
    <RelatedArticles pageSlug="checklist" />
    </>
  );
}
