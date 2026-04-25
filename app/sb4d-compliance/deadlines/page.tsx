import Link from "next/link";
import type { Metadata } from "next";
import { Phone, AlertTriangle, Calendar, Clock, Shield, Award, CheckCircle, ArrowRight, Building2, FileWarning, Scale, Info } from "lucide-react";
import { ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { AuthorByline } from "@/components/AuthorByline";
import { CodeReference } from "@/components/CodeReference";
import { BackToHub } from "@/components/BackToHub";
import { BUSINESS_INFO } from "@/lib/constants";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/sb4d-compliance/deadlines/' },
  title: "SB4-D Compliance Deadlines & Milestone Inspection",
  description: "SB4-D compliance deadlines for Florida condos. Multiple milestone inspection and SIRS deadlines have already passed as of February 2026.",
  openGraph: {
    title: "SB4-D Compliance Deadlines & Milestone Inspection",
    description: "SB4-D compliance deadlines for Florida condos. Multiple milestone inspection and SIRS deadlines have already passed as of February 2026.",
    url: "https://floridaconstructionspecialists.com/sb4d-compliance/deadlines/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "Which SB4-D deadlines have already passed?",
    answer: "As of February 2026, the December 31, 2024 milestone inspection deadline for buildings with certificates of occupancy issued before July 1, 1992 has passed. The December 31, 2025 deadline for buildings with certificates of occupancy between July 1992 and December 1994 has also passed. Additionally, the December 31, 2025 SIRS (Structural Integrity Reserve Study) completion deadline has passed for all applicable buildings. Associations that have not met these deadlines face increasing insurance, mortgage, and legal exposure."
  },
  {
    question: "What is the next SB4-D deadline still ahead?",
    answer: "The next major deadline is December 31, 2026, which is the coordinated SIRS and milestone inspection deadline for buildings that have not yet completed both requirements. Beyond that, buildings that reach 30 years of age after January 1, 1995 must complete their milestone inspection in the year the building turns 30 (or 25 years if within three miles of the coastline). Subsequent inspections are required every 10 years after the initial milestone inspection."
  },
  {
    question: "How do I determine my building's certificate of occupancy date?",
    answer: "Your building's certificate of occupancy (CO) date is typically available from your local building department. In Tampa, you can contact Construction Services at (813) 274-3100 or search the Accela permitting system online. In other Tampa Bay jurisdictions, contact the county or city building department. Your condo association's original developer documents or property appraiser records may also contain this information. The CO date determines which milestone inspection deadline applies to your building."
  },
  {
    question: "Does our building fall under the 25-year or 30-year inspection requirement?",
    answer: "The inspection timeline depends on your building's proximity to the coastline. Buildings located within three miles of the coast must complete their first milestone inspection at 25 years. Buildings farther than three miles from the coast have until 30 years. In the Tampa Bay region, the majority of condominium buildings fall within the three-mile coastal zone due to proximity to Tampa Bay, the Gulf of Mexico, and the Intracoastal Waterway. If there is any ambiguity about your building's classification, the local building official makes the determination."
  },
  {
    question: "What changed under HB 913 that affects our deadlines?",
    answer: "HB 913, effective July 1, 2025, made several significant changes to the SB4-D framework. It introduced a baseline funding plan requirement for SIRS, meaning reserve studies must now demonstrate that reserves remain above zero. The reserve threshold for mandatory funding increased from $10,000 to $25,000, indexed to inflation. Associations may now pause reserve contributions for up to two fiscal years to prioritize immediate structural repairs. The bill also added enhanced conflict-of-interest disclosure requirements for engineers and architects, and mandated online reporting to the Florida DBPR."
  },
  {
    question: "Can our association get an extension on a missed SB4-D deadline?",
    answer: "Florida law does not provide a formal extension process for missed SB4-D milestone inspection deadlines. However, associations that are actively engaged in the inspection and remediation process, even if past their original deadline, are in a stronger position than those that have taken no action. The practical consequences of missed deadlines, including insurance non-renewal, mortgage restrictions, and potential code enforcement, tend to escalate over time rather than triggering immediate penalties. The most important step for any past-due association is to begin the inspection process immediately and document the timeline of engagement."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial", href: "/commercial/" },
  { name: "SB4-D Compliance", href: "/sb4d-compliance/" },
  { name: "Deadline Calendar", href: "/sb4d-compliance/deadlines/" },
];

const deadlines = [
  {
    requirement: "Milestone inspection: buildings with CO before July 1, 1992",
    deadline: "December 31, 2024",
    status: "PAST DUE" as const,
    detail: "Buildings that received their certificate of occupancy before July 1, 1992 were required to complete their initial milestone structural inspection by this date."
  },
  {
    requirement: "Milestone inspection: buildings with CO between July 1992 and December 1994",
    deadline: "December 31, 2025",
    status: "PAST DUE" as const,
    detail: "Buildings with certificates of occupancy issued between July 1, 1992 and December 31, 1994 were required to complete their milestone inspection by this date."
  },
  {
    requirement: "SIRS completion for all applicable buildings",
    deadline: "December 31, 2025",
    status: "PAST DUE" as const,
    detail: "All condominium and cooperative buildings three stories or higher were required to complete a Structural Integrity Reserve Study by this date."
  },
  {
    requirement: "Reserve waiver prohibition begins",
    deadline: "January 1, 2025",
    status: "IN EFFECT" as const,
    detail: "Associations can no longer waive or reduce reserves for structural components identified in the SIRS. Full funding of structural reserves is now mandatory."
  },
  {
    requirement: "Coordinated SIRS and milestone inspection deadline",
    deadline: "December 31, 2026",
    status: "APPROACHING" as const,
    detail: "Deadline for buildings to complete both SIRS and milestone inspection requirements if not already done under earlier deadlines."
  },
  {
    requirement: "Buildings reaching 30 years after January 1, 1995",
    deadline: "Year building turns 30 (or 25 near coast)",
    status: "ONGOING" as const,
    detail: "Buildings with certificates of occupancy after January 1, 1995 must complete their milestone inspection in the year they reach 30 years of age, or 25 years if within three miles of the coastline."
  },
  {
    requirement: "Subsequent inspections after initial milestone",
    deadline: "Every 10 years",
    status: "ONGOING" as const,
    detail: "After completing the initial milestone inspection, buildings must undergo subsequent inspections every 10 years."
  }
];

function StatusBadge({ status }: { status: "PAST DUE" | "IN EFFECT" | "APPROACHING" | "ONGOING" }) {
  const styles = {
    "PAST DUE": "bg-red-100 text-red-800 border-red-200",
    "IN EFFECT": "bg-amber-100 text-amber-800 border-amber-200",
    "APPROACHING": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "ONGOING": "bg-green-100 text-green-800 border-green-200",
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${styles[status]}`}>
      {status}
    </span>
  );
}

export default function SB4DDeadlinesPage() {
  return (
    <>
      <ServiceSchema
        serviceName="SB4-D Compliance Consulting"
        serviceDescription="SB4-D compliance deadline tracking and milestone inspection coordination for Florida condominium associations. Remediation planning, SIRS coordination, and structural repair services."
        serviceCategories={["Milestone Inspection Coordination", "SIRS Compliance", "Structural Remediation Planning", "Deadline Compliance Assessment"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(228,198,110,0.3),transparent_70%)]" />
        </div>
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <BackToHub silo="commercial" customHubTitle="SB4-D Compliance Hub" customHubHref="/sb4d-compliance/" />

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full mb-6 mt-4">
              <AlertTriangle className="w-4 h-4 text-red-300" />
              <span className="text-red-200 font-semibold text-sm">Multiple Deadlines Already Passed</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              SB4-D Compliance Deadlines: Where Does Your Building Stand?
            </h1>

            <AuthorByline publishDate="2026-02-18" variant="light" />

            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Florida&apos;s condominium structural safety legislation has established a series of mandatory deadlines for milestone inspections, Structural Integrity Reserve Studies, and reserve funding. As of February 2026, several of these deadlines have already passed, and buildings that have not complied face escalating consequences.
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
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">SB4-D Deadline Specialists</span>
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

      {/* Past-Due Warning Callout */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-10">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-900 text-lg">As of February 2026, Multiple SB4-D Deadlines Have Already Passed</p>
                  <p className="text-amber-800 mt-2">
                    The December 31, 2024 milestone inspection deadline for buildings with certificates of occupancy before July 1992 has passed. The December 31, 2025 SIRS completion deadline and the milestone inspection deadline for 1992-1994 buildings have also passed. If your building has not completed these requirements, your association may already be facing compliance exposure including insurance non-renewal, mortgage restrictions, and potential board liability.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Complete SB4-D Deadline Calendar
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              The following table reflects the current state of all SB4-D compliance deadlines as of February 2026. Status indicators show whether each deadline has passed, is currently in effect, or is still ahead.
            </p>
          </div>
        </div>
      </section>

      {/* Deadline Status Table */}
      <section className="pb-16 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-green-dark text-white">
                    <th className="px-6 py-4 text-left font-bold">Requirement</th>
                    <th className="px-6 py-4 text-left font-bold">Deadline</th>
                    <th className="px-6 py-4 text-center font-bold">Status (Feb 2026)</th>
                  </tr>
                </thead>
                <tbody>
                  {deadlines.map((item, index) => (
                    <tr key={index} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="px-6 py-4">
                        <p className="font-semibold text-gray-900">{item.requirement}</p>
                        <p className="text-sm text-gray-500 mt-1">{item.detail}</p>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item.deadline}</td>
                      <td className="px-6 py-4 text-center"><StatusBadge status={item.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4">
              {deadlines.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <StatusBadge status={item.status} />
                    <span className="text-sm font-medium text-gray-600 whitespace-nowrap">{item.deadline}</span>
                  </div>
                  <p className="font-semibold text-gray-900 mb-2">{item.requirement}</p>
                  <p className="text-sm text-gray-500">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Your Building's Timeline */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Understanding Your Building&apos;s Timeline
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Determining which SB4-D deadlines apply to your condominium requires knowing three key facts about your building: when it received its certificate of occupancy, how many stories it has, and how close it is to the coastline.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                    <FileWarning className="w-6 h-6 text-brand-green-dark" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">Determine Your CO Date</h3>
                  <p className="text-gray-600 text-sm">
                    Your certificate of occupancy date establishes which deadline tier your building falls under. This date is available from your local building department, your original developer documents, or the county property appraiser. In Tampa, contact Construction Services at (813) 274-3100 or search the Accela permitting system.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-brand-green-dark" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">Three Stories or Higher</h3>
                  <p className="text-gray-600 text-sm">
                    SB4-D milestone inspection requirements apply to condominium and cooperative buildings that are three stories or higher. &ldquo;Stories&rdquo; is determined by the building code definition, which counts habitable floors above grade. Parking levels that are partially below grade may or may not count depending on the local building official&apos;s interpretation. If your building is at the threshold, consult with the local building department for a definitive determination.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                    <Scale className="w-6 h-6 text-brand-green-dark" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">25-Year vs 30-Year Trigger</h3>
                  <p className="text-gray-600 text-sm">
                    Buildings within three miles of the coastline must complete their first milestone inspection at 25 years of age. Buildings farther from the coast have until 30 years. In the Tampa Bay area, the vast majority of condominium buildings fall within the three-mile zone due to proximity to Tampa Bay, the Gulf of Mexico, and the Intracoastal Waterway. The local building official makes the final determination on coastal proximity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HB 913 Changes */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              HB 913 Changes (Effective July 1, 2025)
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              House Bill 913, signed into law in June 2025, introduced several significant modifications to the original SB4-D framework. These changes affect reserve funding, reporting requirements, and the financial planning obligations of condominium associations.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: CheckCircle,
                  title: "Baseline Funding Plan Requirement",
                  description: "SIRS must now include a baseline funding plan demonstrating that reserves for structural components will remain above zero throughout the study period. This replaces the previous approach where associations could choose from multiple funding methodologies. The baseline plan ensures minimum structural reserve adequacy."
                },
                {
                  icon: ArrowRight,
                  title: "$25,000 Threshold (Inflation-Indexed)",
                  description: "The threshold for mandatory reserve funding increased from $10,000 to $25,000, and is now indexed to inflation. Structural reserve components exceeding this threshold must be fully funded according to the SIRS baseline plan. The inflation indexing means this threshold will adjust automatically in future years."
                },
                {
                  icon: Clock,
                  title: "Two-Year Reserve Pause Option",
                  description: "Associations may now pause reserve contributions for up to two fiscal years to prioritize funding of immediate structural repairs. This provision recognizes that associations facing large remediation costs may need to redirect funds from long-term reserves to address urgent structural deficiencies identified during milestone inspections."
                },
                {
                  icon: Info,
                  title: "Enhanced Conflict-of-Interest Disclosures",
                  description: "Engineers and architects performing milestone inspections and SIRS must now provide enhanced conflict-of-interest disclosures. This includes disclosure of any financial interest in remediation work that might be recommended as a result of the inspection. The provision aims to ensure inspection objectivity."
                },
                {
                  icon: Building2,
                  title: "Online DBPR Reporting Requirement",
                  description: "Condominium associations must now report milestone inspection results and SIRS completion to the Florida Department of Business and Professional Regulation through an online portal. This creates a centralized compliance tracking system and makes non-compliance more visible to regulators, insurance carriers, and prospective buyers."
                }
              ].map((item) => (
                <div key={item.title} className="flex gap-5 bg-gray-50 rounded-xl p-6">
                  <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-brand-green-dark" />
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

      {/* Consequences of Missing Deadlines */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              What Happens When You Miss a Deadline
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              The consequences of missed SB4-D deadlines are not abstract. They affect insurance availability, property financing, property values, and the personal liability exposure of board members. These consequences tend to compound over time.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Insurance Non-Renewal or Premium Increases",
                  description: "Property insurance carriers are increasingly requiring proof of milestone inspection completion and SIRS compliance as a condition of coverage renewal. Buildings that cannot demonstrate compliance face non-renewal, dramatically increased premiums, or coverage restrictions that leave the association effectively underinsured. In Florida's already constrained property insurance market, losing coverage can be catastrophic for property values.",
                  severity: "high" as const,
                },
                {
                  title: "Mortgage and Financing Restrictions",
                  description: "Fannie Mae, Freddie Mac, and FHA have implemented lending restrictions for condominium units in buildings that are not in compliance with structural inspection requirements. Lenders may decline to issue mortgages for units in non-compliant buildings, which directly reduces the pool of eligible buyers and depresses unit sale prices throughout the building.",
                  severity: "high" as const,
                },
                {
                  title: "Code Enforcement and Unsafe Building Proceedings",
                  description: "Local building officials have the authority to issue code violations for non-compliance with SB4-D requirements. In severe cases, this can escalate to unsafe building proceedings that may ultimately require building evacuation. While this is an extreme outcome, the legal framework exists and has been applied in South Florida jurisdictions.",
                  severity: "medium" as const,
                },
                {
                  title: "Board Member Personal Liability",
                  description: "Condominium association board members have a fiduciary duty to maintain the building and comply with applicable laws. Boards that fail to initiate milestone inspections or address inspection findings may face personal liability claims from unit owners, particularly if non-compliance results in financial harm such as lost property value, increased assessments, or insurance unavailability.",
                  severity: "medium" as const,
                }
              ].map((item) => (
                <div key={item.title} className={`rounded-xl p-6 border-l-4 ${
                  item.severity === 'high' ? 'bg-red-50 border-red-500' : 'bg-amber-50 border-amber-500'
                }`}>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Code Reference */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <CodeReference
              code="Florida Statute 553.899"
              section="Mandatory Structural Inspections for Condominium and Cooperative Buildings"
              description="Establishes milestone inspection requirements for condominium and cooperative buildings three stories or higher. Buildings must complete initial inspections at 25 years (within 3 miles of coast) or 30 years, with subsequent inspections every 10 years. Phase 2 remediation, when required, must commence within 365 days of the inspection report. As amended by HB 913 (2025), includes baseline funding plans for structural reserves and enhanced conflict-of-interest disclosures."
              link="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.899.html"
              linkText="View F.S. 553.899"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={faqs}
        title="SB4-D Deadline Questions"
        description="Frequently asked questions about SB4-D compliance deadlines, milestone inspection timing, and the consequences of non-compliance."
      />

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">
              Related SB4-D Compliance Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "SB4-D Compliance Hub", href: "/sb4d-compliance/", desc: "Complete overview of SB4-D compliance requirements and FCS services" },
                { title: "Compliance Checklist", href: "/sb4d-compliance/checklist/", desc: "Step-by-step checklist for condo boards to assess compliance status" },
                { title: "Cost Guidance", href: "/sb4d-compliance/costs/", desc: "Realistic cost ranges for condo remediation and compliance work" },
                { title: "Condo Remediation Services", href: "/commercial/condo-remediation/", desc: "FCS condo remediation capabilities and service details" },
                { title: "Balcony Reconstruction", href: "/balcony-reconstruction/", desc: "Structural balcony repair and waterproofing services" },
                { title: "Exterior Waterproofing", href: "/exterior-waterproofing/", desc: "Building envelope and exterior waterproofing solutions" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-200 hover:border-brand-green hover:shadow-md transition-all group"
                >
                  <ArrowRight className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  <div>
                    <p className="font-semibold text-brand-green-dark group-hover:text-brand-green transition-colors">{link.title}</p>
                    <p className="text-sm text-gray-500 mt-1">{link.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Phone-First CTA Section */}
      <section className="section bg-gradient-to-br from-brand-green-dark to-brand-green-forest">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Call to Discuss Your Building&apos;s Compliance Timeline
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether your building has already missed a deadline or you need to understand which requirements apply, Florida Construction Specialists can help you assess your compliance status and develop a remediation plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-brand-green-dark font-bold rounded-lg hover:bg-brand-gold-light transition-colors text-lg"
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
              <span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
              <span>SB4-D Remediation Specialists</span>
            </div>
          </div>
        </div>
      </section>
    <RelatedArticles pageSlug="deadlines" />
    </>
  );
}
