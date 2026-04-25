import Link from "next/link";
import type { Metadata } from "next";
import { Phone, AlertTriangle, DollarSign, Shield, Award, ArrowRight, Building2, TrendingUp, Landmark, Droplets, Car, BarChart3, Banknote, PiggyBank, FileText, Wrench, ClipboardCheck, Search } from "lucide-react";
import { ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { AuthorByline } from "@/components/AuthorByline";
import { CodeReference } from "@/components/CodeReference";
import { BackToHub } from "@/components/BackToHub";
import { BUSINESS_INFO } from "@/lib/constants";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/sb4d-compliance/costs/' },
  title: "Condo Remediation Cost Guide | SB4-D Compliance Costs",
  description: "Realistic condo remediation cost ranges for SB4-D compliance. Special assessments $10K-$150K+ per unit balcony remediation $500K-$5M.",
  openGraph: {
    title: "Condo Remediation Cost Guide | SB4-D Compliance Costs",
    description: "Realistic condo remediation cost ranges for SB4-D compliance. Special assessments $10K-$150K+ per unit balcony remediation $500K-$5M.",
    url: "https://floridaconstructionspecialists.com/sb4d-compliance/costs/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "How much does a typical condo remediation cost per unit owner?",
    answer: "Special assessments for SB4-D remediation typically range from $10,000 to $150,000 or more per unit, depending on building size, the extent of structural deficiencies, the scope of remediation required, and the number of units sharing the cost. Smaller buildings with fewer units tend to have higher per-unit assessments because fixed costs like engineering, permitting, and mobilization are spread across fewer owners. Buildings with severe structural deterioration, particularly those with widespread concrete damage or post-tension cable issues, tend toward the higher end of this range. We strongly recommend that associations budget a 10-20% contingency above any initial estimate."
  },
  {
    question: "Why do condo remediation costs often exceed initial estimates?",
    answer: "Construction costs in remediation work frequently exceed initial estimates because the full extent of structural damage is often not visible until demolition and investigation begin. Concrete may appear sound on the surface but contain corroded reinforcing steel throughout. Waterproofing membranes that appear intact may be delaminated beneath the surface. Post-tension cables may show corrosion beyond the areas tested during inspection. Each of these discoveries expands the scope of necessary repair. This is not unique to any contractor. It is inherent to remediation work on aging structures. We recommend budgeting a 10-20% contingency above any estimate and maintaining a reserve for unforeseen conditions."
  },
  {
    question: "Can our association phase remediation to spread costs over time?",
    answer: "Phasing is often possible when the structural engineer's findings support it. Not all deficiencies require immediate attention. Critical structural repairs, such as compromised load-bearing elements or safety-critical balcony damage, must be addressed promptly. However, less urgent items like cosmetic concrete repair, non-structural waterproofing, or preventive maintenance can sometimes be deferred to a second or third phase. We help associations distinguish between immediately critical work and deferrable items, developing phased plans that address safety priorities first while managing cash flow. HB 913 also now allows associations to pause reserve contributions for up to two fiscal years to fund immediate repairs."
  },
  {
    question: "Does insurance cover any condo remediation costs?",
    answer: "Insurance coverage for remediation depends on the cause of the damage. Structural deterioration from aging, deferred maintenance, or normal wear is generally not covered by property insurance. However, if deterioration was caused or worsened by a covered event such as hurricane damage, water intrusion from a covered loss, or fire, portions of the remediation may be claimable. We provide the detailed documentation that insurance carriers need to evaluate claims, and we work with your association's public adjuster or insurance professional to support the claims process where applicable. Each situation requires individual assessment."
  },
  {
    question: "How does HB 913 affect our association's financial planning for remediation?",
    answer: "HB 913, effective July 2025, introduced several provisions that affect remediation financing. The baseline funding plan requirement means your SIRS must now demonstrate that structural reserves stay above zero throughout the study period. The $25,000 threshold for mandatory reserve funding, now indexed to inflation, determines which structural components require full funding. The two-year reserve pause option allows associations facing immediate remediation costs to temporarily redirect reserve contributions to fund urgent repairs. These provisions are designed to give associations more flexibility in managing the financial burden of compliance, but they also require more rigorous financial planning."
  },
  {
    question: "What financing options are available for condo associations facing large remediation costs?",
    answer: "Condominium associations typically fund remediation through a combination of sources. Special assessments are the most common funding mechanism, either as a lump sum or installment plan. Reserve funds, where adequately funded, can cover portions of planned remediation. Association loans and lines of credit from banks that specialize in community association lending provide another option, allowing associations to spread costs over multiple years rather than imposing a single large assessment. Some associations use a combination approach: reserves cover immediate costs while a loan funds the remainder with repayment through regular assessments. Where applicable, insurance proceeds from covered events can offset portions of the total cost."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial", href: "/commercial/" },
  { name: "SB4-D Compliance", href: "/sb4d-compliance/" },
  { name: "Cost Guidance", href: "/sb4d-compliance/costs/" },
];

const costCategories = [
  {
    icon: BarChart3,
    title: "Special Assessments Per Unit",
    range: "$10,000 - $150,000+",
    description: "The per-unit cost to individual owners varies enormously based on building size, the number of units sharing the cost, and the scope of remediation required.",
    drivers: [
      "Building size and number of units (fewer units = higher per-unit cost)",
      "Extent of structural deficiencies identified during inspection",
      "Whether remediation is phased or completed in a single project",
      "Original construction quality and materials",
      "Complexity of access (high-rise scaffolding vs low-rise access)"
    ]
  },
  {
    icon: Landmark,
    title: "Balcony Remediation Per Building",
    range: "$500,000 - $5,000,000",
    description: "Balcony repair and reconstruction is one of the most common remediation requirements. Costs depend on the number of balconies, extent of concrete deterioration, and whether full reconstruction or targeted repair is needed.",
    drivers: [
      "Number of balconies and total square footage",
      "Severity of concrete deterioration and steel corrosion",
      "Full reconstruction vs localized repair approach",
      "Waterproofing system specification and warranty level",
      "Railing replacement scope (code compliance requirements)"
    ]
  },
  {
    icon: Building2,
    title: "Concrete Restoration Building-Wide",
    range: "$1,000,000 - $15,000,000",
    description: "Building-wide concrete restoration addresses spalling, delamination, and reinforcing steel corrosion across the entire structure. This is typically the largest single cost category in major remediation projects.",
    drivers: [
      "Building footprint and number of stories",
      "Extent of chloride contamination in the concrete",
      "Depth and severity of reinforcing steel corrosion",
      "Whether post-tension cables require repair or replacement",
      "Access requirements (swing staging, scaffolding, mast climbers)"
    ]
  },
  {
    icon: Droplets,
    title: "Building Envelope Waterproofing",
    range: "$200,000 - $2,000,000",
    description: "Comprehensive waterproofing of the building exterior including wall systems, joints, windows, doors, and roof interfaces. Essential for preventing future moisture-related structural deterioration.",
    drivers: [
      "Total exterior wall area and complexity of the facade",
      "Number and type of penetrations (windows, doors, mechanical)",
      "Condition of existing sealants, coatings, and membranes",
      "Whether substrate repair is needed before waterproofing",
      "Waterproofing system selection (elastomeric, crystalline, membrane)"
    ]
  },
  {
    icon: Car,
    title: "Parking Structure Repair",
    range: "$500,000 - $10,000,000",
    description: "Parking structures are among the most exposure-intensive elements of a condominium building. Vehicle chemicals, rainfall, and salt air create aggressive deterioration conditions that compound over decades.",
    drivers: [
      "Number of levels and total deck area",
      "Post-tension vs conventionally reinforced concrete",
      "Extent of traffic-bearing membrane deterioration",
      "Column and beam structural repair needs",
      "Expansion joint replacement scope"
    ]
  }
];

export default function SB4DCostsPage() {
  return (
    <>
      <ServiceSchema
        serviceName="SB4-D Compliance Cost Consulting"
        serviceDescription="Condo remediation cost guidance and financial planning for SB4-D compliance. Realistic cost ranges, phased construction planning, and cost-effective repair method selection for condominium associations."
        serviceCategories={["Remediation Cost Assessment", "Phased Construction Planning", "Cost-Effective Repair Selection", "Insurance Documentation Support"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(228,198,110,0.3),transparent_70%)]" />
        </div>
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <BackToHub silo="commercial" customHubTitle="SB4-D Compliance Hub" customHubHref="/sb4d-compliance/" />

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6 mt-4">
              <DollarSign className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold text-sm">Realistic Cost Guidance</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Understanding Condo Remediation Costs: A Realistic Guide for Boards and Managers
            </h1>

            <AuthorByline publishDate="2026-02-18" variant="light" />

            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Condo remediation under SB4-D is a significant financial undertaking. This guide provides honest cost ranges based on Tampa Bay market conditions, explains what drives cost variability, and outlines funding options available to condominium associations.
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

      {/* Opening Caveat */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-10">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-900 text-lg">Important: Every Remediation Project Is Unique</p>
                  <p className="text-amber-800 mt-2">
                    The cost ranges below reflect typical Tampa Bay market conditions, but actual costs depend on building size, age, structural condition, and the scope of deficiencies found during inspection. <strong>Construction costs frequently exceed initial estimates</strong> due to hidden damage discovered during demolition and investigation. We recommend budgeting a <strong>10-20% contingency above any estimate</strong> to account for unforeseen conditions that are routinely discovered once work begins.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Condo Remediation Cost Ranges
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              The following cost categories represent the most common remediation work required under SB4-D compliance. Most buildings require a combination of these services, and costs are influenced by factors specific to each building&apos;s condition, size, and construction type.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Category Cards */}
      <section className="pb-16 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto space-y-8">
            {costCategories.map((category) => (
              <div key={category.title} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-brand-green-bg flex items-center justify-center">
                        <category.icon className="w-8 h-8 text-brand-green-dark" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold text-brand-green-dark">{category.title}</h3>
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-green-dark text-white font-bold text-sm whitespace-nowrap">
                          {category.range}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">{category.description}</p>
                      <div>
                        <p className="font-semibold text-gray-800 mb-2">What drives the range:</p>
                        <ul className="space-y-1.5">
                          {category.drivers.map((driver, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <ArrowRight className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                              <span>{driver}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Contingency reminder */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-red-900">Budget for the Unexpected</p>
                  <p className="text-red-800 mt-1">
                    In remediation work, hidden damage is the rule, not the exception. Once demolition begins, conditions beneath the surface frequently reveal deterioration beyond what was visible during the initial inspection. We consistently recommend that associations maintain a <strong>10-20% contingency reserve</strong> above the contracted scope to handle these discoveries without delaying the project or requiring emergency supplemental assessments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Costs Vary */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Remediation Costs Vary So Much
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              The wide cost ranges above are not imprecision. They reflect the genuine variability inherent in remediation work on aging structures. Understanding what drives cost variability helps associations evaluate proposals and plan realistically.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Building Age and Original Construction Quality",
                  description: "Buildings constructed in the 1970s and 1980s were built under different code requirements than those built in the 2000s. Older buildings may have thinner concrete cover over reinforcing steel, less sophisticated waterproofing systems, and materials that have degraded more aggressively over time. Original construction quality varies widely even within the same era. Some developers used high-quality materials and careful installation practices. Others cut corners. The difference shows up decades later in remediation costs."
                },
                {
                  title: "Extent of Hidden Deterioration",
                  description: "This is the single largest source of cost uncertainty in remediation. Concrete may appear sound on the surface while the reinforcing steel underneath is severely corroded. Post-tension cables may pass initial testing but fail when exposed during repair. Waterproofing membranes may be delaminated beneath an apparently intact surface. The full scope of damage is often not known until demolition and exploratory work reveal conditions that were invisible during the inspection phase. This is why contingency budgeting is essential, not optional."
                },
                {
                  title: "Material and Labor Market Conditions in Tampa Bay",
                  description: "Tampa Bay's construction market experiences significant cost fluctuation based on overall demand, material availability, and labor conditions. Following major hurricane events, material costs and labor rates increase significantly as restoration demand surges region-wide. Remediation also requires specialized materials and skilled labor that may not be readily available in all market conditions. Steel reinforcement, structural concrete repair mortars, waterproofing membranes, and post-tension cable components are specialty items with lead times that affect project cost and schedule."
                },
                {
                  title: "Access Complexity",
                  description: "A ten-story building is fundamentally more expensive to remediate than a three-story building, even with identical deficiencies. High-rise work requires swing staging, mast climbers, or scaffolding systems that represent a significant project cost. Work at height requires additional safety measures, specialized equipment, and longer setup and teardown times. Buildings with complex facades, setbacks, or cantilevered elements further increase access costs."
                },
                {
                  title: "Phasing Decisions",
                  description: "Completing all remediation in a single mobilization is typically more cost-effective than phasing work over multiple years. However, phasing may be necessary for financial or operational reasons. Each phase requires its own mobilization, staging, engineering coordination, and permitting, which adds overhead. Against this, phasing spreads the financial burden over time and allows the association to address the most critical items first. The cost-optimal approach depends on each association's specific financial situation and the urgency of different findings."
                }
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-brand-green-dark mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Funding Remediation */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Funding Remediation
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              The financial challenge of SB4-D compliance is often as daunting as the construction challenge. Most associations use a combination of funding sources, and the right mix depends on the association&apos;s financial position, the urgency of repairs, and unit owner demographics.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Banknote,
                  title: "Special Assessments",
                  description: "The most direct funding mechanism. Associations levy a one-time or installment-based assessment on unit owners to fund remediation. Lump-sum assessments create less total cost but impose immediate financial hardship. Installment plans spread the burden but may delay project start if cash collection is needed before construction."
                },
                {
                  icon: PiggyBank,
                  title: "Reserve Funds",
                  description: "Well-funded reserves can cover some or all of planned remediation. However, many associations that deferred maintenance also deferred reserve funding. HB 913 now requires a baseline funding plan showing reserves stay above zero. The reserve waiver prohibition, in effect since January 2025, means associations can no longer vote to underfund structural reserves."
                },
                {
                  icon: FileText,
                  title: "Association Loans and Lines of Credit",
                  description: "Banks that specialize in community association lending offer loans and lines of credit for major remediation projects. These instruments allow associations to begin construction immediately while repaying the loan through regular assessments over multiple years. Interest rates and terms vary, but this approach avoids the need for large upfront assessments."
                },
                {
                  icon: Shield,
                  title: "Insurance Claims (Where Applicable)",
                  description: "If structural damage resulted from or was exacerbated by a covered event such as hurricane damage, portions of remediation may be recoverable through insurance. We provide the detailed documentation, including scope delineation between maintenance-related and event-related damage, that carriers need to evaluate claims."
                }
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-brand-green-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">HB 913: Two-Year Reserve Pause Option</h3>
              <p className="text-blue-800 text-sm">
                Under HB 913, associations may pause reserve contributions for up to two fiscal years to prioritize funding of immediate structural repairs. This provision recognizes that associations facing urgent remediation may need to redirect all available funds to the immediate construction project rather than continuing to accumulate reserves for future needs. The pause must be formally approved by the association board and documented in accordance with DBPR requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How FCS Helps Manage Costs */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              How FCS Helps Manage Costs
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              While remediation costs are substantial, the approach to scoping, planning, and executing the work has a meaningful impact on the total financial burden. Florida Construction Specialists brings four decades of structural repair experience to help associations manage remediation costs without compromising structural integrity.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Search,
                  title: "Detailed Repair Scoping: Critical vs Deferrable",
                  description: "Not every deficiency identified in a milestone inspection requires immediate remediation. We review the structural engineer's findings and categorize repairs by urgency: immediately critical items that affect structural safety, important items that should be addressed within 1-2 years, and maintenance items that can be planned for future phases. This prioritization allows associations to focus available funds on the most important work first."
                },
                {
                  icon: Wrench,
                  title: "Cost-Effective Repair Method Selection",
                  description: "For any given structural deficiency, there are typically multiple valid repair approaches ranging from least to most expensive. The right choice depends on the specific conditions, required service life, and budget constraints. We evaluate each deficiency and recommend the most cost-effective repair method that achieves the structural engineer's required performance criteria, not the most expensive option and not the cheapest option that cuts corners."
                },
                {
                  icon: ClipboardCheck,
                  title: "Phased Construction Planning",
                  description: "When phasing is appropriate, we develop construction plans that maximize the value of each phase while minimizing remobilization costs. Effective phasing groups related work together, addresses the most critical items in early phases, and sequences work so that later phases build on rather than redo earlier phases. A well-designed phasing plan can make a large remediation project financially manageable without sacrificing construction efficiency."
                },
                {
                  icon: Building2,
                  title: "Direct Access to Licensed Structural Engineers",
                  description: "Accurate scoping is the foundation of cost management. Through our dedicated engineering partners, we ensure that the structural assessment is thorough enough to develop a reliable scope of work but focused enough to avoid unnecessary testing and investigation costs. Our engineers understand construction practicalities, which means their repair specifications are buildable and cost-conscious while meeting all structural requirements."
                },
                {
                  icon: FileText,
                  title: "Documentation for Insurance and Reserve Studies",
                  description: "Thorough documentation during remediation serves multiple financial purposes. Detailed records of discovered conditions support supplemental insurance claims where applicable. Comprehensive repair documentation provides the data that reserve study professionals need to develop accurate future funding plans. Warranty documentation protects the association against premature failure of remediation work."
                }
              ].map((item) => (
                <div key={item.title} className="flex gap-5 bg-white rounded-xl p-6 shadow-sm">
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

      {/* Code References */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-4">
            <CodeReference
              code="Florida Statute 553.899"
              section="Mandatory Structural Inspections for Condominium and Cooperative Buildings"
              description="Establishes the milestone inspection and remediation framework that drives the compliance costs discussed in this guide. Phase 2 remediation must commence within 365 days of the inspection report when substantial structural deterioration is identified."
              link="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.899.html"
              linkText="View F.S. 553.899"
            />
            <CodeReference
              code="HB 913 (2025)"
              section="Amendments to Condominium Reserve and Inspection Requirements"
              description="Modifies the financial planning requirements for condominium associations. Introduces baseline funding plan requirement for SIRS, increases the reserve threshold to $25,000 (inflation-indexed), and provides the two-year reserve pause option for associations prioritizing immediate structural repairs."
              link="https://www.flsenate.gov/Session/Bill/2025/913"
              linkText="View HB 913"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={faqs}
        title="Condo Remediation Cost Questions"
        description="Frequently asked questions about SB4-D compliance costs, funding options, and managing remediation expenses."
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
                { title: "Deadline Calendar", href: "/sb4d-compliance/deadlines/", desc: "Current status of all SB4-D milestone and SIRS deadlines" },
                { title: "Compliance Checklist", href: "/sb4d-compliance/checklist/", desc: "Step-by-step checklist for condo boards to assess compliance status" },
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
            Call to Discuss Your Building&apos;s Compliance Needs
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Every building&apos;s remediation needs are different. Contact Florida Construction Specialists to discuss your milestone inspection findings, understand your cost exposure, and develop a realistic remediation and funding plan.
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
    <RelatedArticles pageSlug="costs" />
    </>
  );
}
