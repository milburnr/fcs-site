import Link from "next/link";
import type { Metadata } from "next";
import { Phone, Scale, FileText, Shield, Award, CheckCircle, ArrowRight, Briefcase } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { BUSINESS_INFO } from "@/lib/constants";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Construction Expert Witness Services",
  description: "Expert witness testimony for construction disputes in Florida. 43+ years experience, former insurance adjuster. Litigation support for attorneys. Call (813) 420-7561.",
  keywords: [
    "construction expert witness Tampa",
    "expert witness construction litigation",
    "construction defect expert witness Florida",
    "insurance claim expert witness",
    "building expert witness testimony",
  ],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Expert Witness", href: "/expert-witness/" },
];

const faqs = [
  {
    question: "What qualifies Frank Bragano as a construction expert witness?",
    answer: "Frank Bragano brings 43+ years of combined experience in construction and insurance claims. His credentials include serving as a Commercial Property adjuster for Allstate (1982-1989), Executive General Adjuster for CJW-Vericlaim/Sedgwick, and principal of Florida Construction Specialists with $25M+ in completed projects. This dual expertise in both construction methodology and insurance claims processes provides uniquely comprehensive testimony."
  },
  {
    question: "What types of cases do you provide expert witness services for?",
    answer: "We provide expert witness testimony for construction defect litigation, insurance coverage disputes, contractor negligence claims, scope of damage disagreements, construction delay claims, workmanship quality disputes, building code compliance issues, cost estimation challenges, and property restoration disputes. Our expertise spans both commercial and residential construction matters."
  },
  {
    question: "Do you work with plaintiffs or defendants?",
    answer: "We provide objective, fact-based expert witness services for both plaintiffs and defendants. Our role is to provide accurate, unbiased professional opinions based on industry standards, building codes, and our extensive field experience. The facts of each case determine our testimony, not which side retains us."
  },
  {
    question: "What geographic areas do you cover for expert witness work?",
    answer: "While based in the Tampa Bay area, we provide expert witness services throughout Florida and have participated in cases across the Southeast United States. For cases outside Florida, travel arrangements and additional considerations apply."
  },
  {
    question: "What does your expert witness engagement include?",
    answer: "Our expert witness services include case review and analysis, site inspections when applicable, detailed written reports, deposition testimony, trial testimony, rebuttal of opposing expert opinions, and consultation with legal counsel throughout the litigation process. We work closely with attorneys to ensure our expertise effectively supports case strategy."
  },
  {
    question: "How do you prepare expert witness reports?",
    answer: "Our reports are comprehensive, well-documented analyses that include relevant background information, methodology description, findings based on physical evidence and documentation review, opinions supported by industry standards and codes, and clear conclusions. Reports are prepared to withstand cross-examination and meet Daubert standards for expert testimony."
  },
  {
    question: "What is your experience with insurance claim disputes?",
    answer: "With experience as both a carrier-side adjuster (Allstate Commercial) and policyholder-side construction professional, we understand both perspectives in insurance disputes. This includes scope disagreements, coverage interpretation, estimate methodology, depreciation calculations, and code upgrade requirements. We've handled claims from Hurricane Charley, Irma, Harvey, and other major events."
  },
  {
    question: "Can you testify on construction cost estimates?",
    answer: "Yes, we provide expert testimony on construction cost estimation including material costs, labor rates, project overhead, contractor profit margins, and total project valuation. Our 20+ years of actual construction experience and $25M+ in completed projects provides real-world basis for cost opinions."
  },
  {
    question: "How do you handle conflicts of interest?",
    answer: "We conduct thorough conflict checks before accepting any engagement. If we have prior involvement with any party, property, or related matter, we disclose this immediately. We decline engagements where any conflict—real or perceived—could compromise our objectivity or credibility."
  },
  {
    question: "What are your expert witness fees and terms?",
    answer: "Expert witness fees are based on hourly rates for case review, report preparation, and testimony. A retainer is required to initiate engagement. Specific rates and terms are provided upon initial case discussion. We require written engagement agreements that clearly define scope, deliverables, and compensation terms."
  },
];

const relatedServices = [
  { href: "/certified-estimates/", label: "Certified Estimates" },
  { href: "/insurance-arbitration-appraisal/", label: "Insurance Arbitration & Appraisal" },
  { href: "/building-consultants/", label: "Building Consultants" },
  { href: "/services/disaster-recovery/", label: "Disaster Recovery" },
];


const internalLinks = [
  { href: "/services/", label: "Our Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/about/", label: "About Florida Construction Specialists" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function ExpertWitnessPage() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema service="Expert Witness Services" />
      <ServiceSchema
        serviceName="Construction Expert Witness Services"
        serviceDescription="Expert witness testimony for construction disputes, insurance claims litigation, and building defect cases. 43+ years of construction and insurance industry experience."
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>

        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />

          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Scale className="w-4 h-4 text-brand-gold" />
              <span className="text-sm font-medium text-white">Litigation Support</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight text-white">
              Construction Expert Witness Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Credible, experienced testimony for construction disputes and insurance litigation. With 43+ years in construction and insurance claims—including experience on both carrier and policyholder sides—Florida Construction Specialists provides expert opinions that withstand rigorous cross-examination.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Award className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                <p className="text-sm font-semibold text-white">43+ Years</p>
                <p className="text-xs text-gray-400">Industry Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                <p className="text-sm font-semibold text-white">Licensed</p>
                <p className="text-xs text-gray-400">{BUSINESS_INFO.licenseNumber}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Briefcase className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                <p className="text-sm font-semibold text-white">Former Adjuster</p>
                <p className="text-xs text-gray-400">Allstate Commercial</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <FileText className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                <p className="text-sm font-semibold text-white">$25M+</p>
                <p className="text-xs text-gray-400">Project Experience</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta text-center">
                Discuss Your Case
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading">
              Dual Expertise: Construction & Insurance
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl mb-6">
                What sets Florida Construction Specialists apart in expert witness work is our principal's rare combination of both construction and insurance industry experience. Frank Bragano doesn't just understand how buildings are constructed—he understands how claims are adjusted, how coverage is interpreted, and how disputes arise between policyholders and carriers.
              </p>
              <p className="mb-6">
                From 1982 to 1989, Frank served as a Commercial Property adjuster for Allstate, gaining firsthand experience in how insurance carriers evaluate claims, determine coverage, and calculate damages. He later served as an Executive General Adjuster for CJW-Vericlaim/Sedgwick, handling large-loss commercial claims across the country. This carrier-side experience provides invaluable insight when testifying about insurance disputes.
              </p>
              <p className="mb-6">
                Since founding Florida Construction Specialists, Frank has completed over $25 million in construction projects, including complex hurricane restoration, historic preservation, and commercial construction. This hands-on construction experience ensures testimony is grounded in real-world building practices, not just theoretical knowledge.
              </p>
              <p>
                This dual perspective—understanding both how buildings are built and how claims are handled—makes our expert witness testimony particularly effective in cases involving insurance coverage disputes, scope disagreements, and construction defect claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Areas of Expert Testimony
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive expertise across construction and insurance disciplines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Construction Defects",
                description: "Testimony on workmanship quality, code compliance, material failures, and construction methodology. Analysis of whether work meets industry standards and contractual specifications.",
              },
              {
                title: "Insurance Coverage Disputes",
                description: "Expert opinions on scope of damage, coverage interpretation, estimate methodology, and claim valuation. Experience on both carrier and policyholder sides provides balanced perspective.",
              },
              {
                title: "Cost & Damage Estimation",
                description: "Detailed analysis of construction costs, damage valuations, repair vs. replacement decisions, and depreciation calculations based on actual project experience.",
              },
              {
                title: "Hurricane & Storm Damage",
                description: "Extensive experience with major hurricanes including Charley, Irma, and Harvey. Understanding of wind damage patterns, water intrusion, and restoration requirements.",
              },
              {
                title: "Historic Preservation",
                description: "Expertise in Secretary of Interior Standards, SHPO compliance, and period-accurate restoration methods. Testimony on appropriate restoration techniques and costs.",
              },
              {
                title: "Commercial Construction",
                description: "Knowledge spanning medical facilities, multi-family, industrial, retail, and institutional construction. Understanding of commercial building systems and code requirements.",
              },
            ].map((area) => (
              <div key={area.title} className="bg-white rounded-xl shadow-md p-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Expert Witness Engagement Process
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Initial Case Review",
                  description: "We review case materials, assess our qualifications for the specific matter, check for conflicts, and provide an initial assessment of how we can assist.",
                },
                {
                  step: "02",
                  title: "Formal Engagement",
                  description: "Upon retention, we establish scope of work, deliverables, timeline, and compensation terms in a written agreement. Retainer is collected to initiate work.",
                },
                {
                  step: "03",
                  title: "Investigation & Analysis",
                  description: "Thorough review of documents, site inspection if applicable, research of applicable codes and standards, and development of professional opinions.",
                },
                {
                  step: "04",
                  title: "Report Preparation",
                  description: "Comprehensive written report documenting methodology, findings, and opinions. Reports are prepared to meet Daubert standards and withstand cross-examination.",
                },
                {
                  step: "05",
                  title: "Testimony",
                  description: "Deposition and/or trial testimony presenting findings clearly and professionally. Preparation with counsel to anticipate cross-examination challenges.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials and Experience */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-heading">
              Professional Credentials & Ongoing Education
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Certifications & Licenses</h3>
              <p className="mb-6">
                Florida Construction Specialists maintains current licensing and certifications essential for credible expert witness testimony. Our General Contractor license {BUSINESS_INFO.licenseNumber} demonstrates ongoing compliance with state construction industry requirements. We maintain required continuing education to stay current with evolving building codes, construction techniques, and industry standards.
              </p>
              <p className="mb-6">
                Frank Bragano's insurance industry credentials include extensive training in Commercial Property adjusting, catastrophic loss handling, and coverage interpretation. His experience includes handling claims under standard commercial policies, specialty coverage forms, and complex multi-location claims. This background provides essential understanding of how insurance disputes develop and how claims are evaluated from a carrier perspective.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Major Claims Experience</h3>
              <p className="mb-6">
                Our catastrophic loss experience spans multiple major hurricanes and weather events throughout the Southeast. Hurricane Charley (2004) provided extensive experience with wind damage assessment and restoration requirements. Hurricane Irma (2017) and Ian (2022) offered more recent experience with modern construction materials and techniques under extreme conditions.
              </p>
              <p className="mb-6">
                Beyond hurricane damage, our claims experience includes fire losses, water damage from burst pipes and roof leaks, vandalism and theft claims, and complex coverage disputes involving exclusions and policy interpretation. This breadth of experience enables testimony on various types of property damage and insurance coverage issues.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Construction Project Diversity</h3>
              <p className="mb-6">
                Our construction experience spans multiple project types and delivery methods, providing comprehensive understanding of industry practices. Medical facilities construction requires understanding of specialized codes, infection control requirements, and complex mechanical systems. Educational facility projects involve detailed coordination with multiple stakeholders and phased construction in occupied buildings.
              </p>
              <p className="mb-6">
                Historic preservation projects demand specialized knowledge of Secretary of Interior Standards, period-appropriate materials and techniques, and coordination with State Historic Preservation Office requirements. This expertise proves valuable in testimony involving historic buildings, restoration disputes, and compliance with preservation standards.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Development</h3>
              <p className="mb-6">
                We maintain active participation in industry organizations including the Associated General Contractors of Florida, Florida Building Contractors Association, and relevant insurance industry groups. Regular attendance at seminars, workshops, and continuing education programs ensures our testimony reflects current industry standards and best practices.
              </p>
              <p className="mb-6">
                Our professional library includes current building codes, industry standards from organizations like ACI (American Concrete Institute) and ASTM International, and insurance industry publications. We stay current with legal developments affecting construction and insurance through professional publications and legal education programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investigation Methodology */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-heading">
              Investigation Methodology & Documentation
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Site Investigation Techniques</h3>
              <p className="mb-6">
                Our site investigations employ systematic documentation methods designed to withstand scrutiny during cross-examination. We use professional photography equipment to document existing conditions, damage patterns, and construction details. Digital photography with embedded metadata provides timestamp verification and location information that supports testimony credibility.
              </p>
              <p className="mb-6">
                When appropriate, we employ specialized investigation tools including moisture meters for detecting water intrusion, thermal imaging cameras for identifying insulation gaps or moisture patterns, and measuring equipment for verifying dimensions and compliance with plans. All measurements and readings are documented contemporaneously with detailed field notes.
              </p>
              <p className="mb-6">
                Our investigation methodology includes coordination with other experts when cases require multiple disciplines. We work effectively with structural engineers, architects, environmental consultants, and forensic accountants to develop comprehensive case understanding while maintaining clear boundaries between our expertise and other professional disciplines.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Document Review and Analysis</h3>
              <p className="mb-6">
                Thorough document review forms the foundation of credible expert testimony. Our review process encompasses construction contracts, plans and specifications, change orders, progress reports, inspection records, material certifications, and warranty documentation. We identify discrepancies between contractual requirements and actual construction that may affect case outcomes.
              </p>
              <p className="mb-6">
                For insurance-related cases, our document analysis includes policy language review, claim files examination, adjuster reports evaluation, and contractor estimates analysis. Our carrier-side experience enables identification of issues that may not be apparent to experts without insurance industry background. We understand how adjusters document their decisions and what factors influence coverage determinations.
              </p>
              <p className="mb-6">
                Our analysis identifies timeline issues that often prove critical in construction disputes. We create detailed project chronologies showing when problems occurred, when they were discovered, when they were reported, and how they were addressed. These timelines help establish causation and responsibility in complex construction disputes.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Standards Research</h3>
              <p className="mb-6">
                Credible expert testimony requires grounding in accepted industry standards and practices. Our research methodology includes review of applicable building codes, industry standards from organizations like ACI and ASTM, manufacturer installation requirements, and trade organization best practice guidelines. We distinguish between minimum code requirements and industry best practices when relevant to case issues.
              </p>
              <p className="mb-6">
                We maintain a comprehensive technical library including current and historical building codes, enabling testimony about standards that were in effect when construction occurred. This historical perspective proves essential in cases involving older buildings or long-term construction projects where codes may have changed during construction.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Cost Analysis and Estimation</h3>
              <p className="mb-6">
                Our cost analysis methodology combines published cost data with actual project experience to develop credible estimates for repair, replacement, or completion costs. We use multiple cost databases including RSMeans, Marshall & Swift, and local subcontractor pricing to verify estimate reasonableness. Our estimates include detailed breakdowns of materials, labor, equipment, and overhead costs.
              </p>
              <p className="mb-6">
                For insurance claims, we understand the difference between actual cash value and replacement cost calculations, depreciation methodologies, and code upgrade requirements. Our estimates address these insurance-specific considerations while maintaining accuracy in underlying cost calculations. We can testify about appropriate profit margins, overhead rates, and contingency allowances based on actual project experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Collaboration */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-heading">
              Collaboration with Legal Teams
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Case Strategy Development</h3>
              <p className="mb-6">
                Effective expert witness work requires close collaboration with legal counsel to understand case strategy and how technical testimony supports legal theories. We work with attorneys to identify the most compelling technical arguments while maintaining objectivity and professional credibility. Our role is to provide accurate technical information that attorneys can use to build persuasive cases.
              </p>
              <p className="mb-6">
                During case development, we help attorneys understand technical issues that may affect case strategy. This includes explaining construction industry practices, identifying potential weaknesses in opposing arguments, and suggesting areas where additional investigation might be beneficial. We provide technical education to legal teams who may not have construction industry background.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Deposition Preparation</h3>
              <p className="mb-6">
                Thorough deposition preparation ensures effective testimony that advances case objectives while withstanding aggressive cross-examination. We work with counsel to anticipate likely areas of questioning, review case facts and opinions thoroughly, and practice explaining technical concepts clearly to non-technical audiences.
              </p>
              <p className="mb-6">
                Our deposition preparation includes review of opposing expert reports when available, identification of areas where our opinions differ, and development of clear explanations for our methodology and conclusions. We prepare exhibits and demonstrative aids that help explain complex technical concepts during testimony.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Trial Testimony Support</h3>
              <p className="mb-6">
                Trial testimony requires clear communication of technical concepts to judge and jury audiences without construction industry background. We develop demonstrative exhibits, visual aids, and analogies that help lay audiences understand complex construction and insurance concepts. Our testimony style emphasizes clarity and objectivity over advocacy.
              </p>
              <p className="mb-6">
                We work with legal teams to coordinate our testimony with other witnesses and evidence presentation. This includes understanding how our testimony fits within the overall case narrative and ensuring consistency with other expert opinions where appropriate. We prepare for cross-examination by reviewing opposing counsel's likely approach and preparing responses to anticipated challenges.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Rebuttal and Response</h3>
              <p className="mb-6">
                When opposing experts present conflicting opinions, we provide detailed analysis of alternative viewpoints and explain the basis for disagreement. Our rebuttal work focuses on factual and methodological differences rather than personal criticism of opposing experts. We maintain professional objectivity while clearly explaining why our opinions should be preferred.
              </p>
              <p className="mb-6">
                Our rebuttal analysis includes review of opposing expert qualifications, methodology critique where appropriate, and identification of factual errors or unsupported assumptions. We provide detailed written analysis that attorneys can use for cross-examination preparation or in their own expert rebuttal testimony.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Examples */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-heading">
              Representative Case Examples
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hurricane Damage Scope Dispute</h3>
              <p className="mb-6">
                A large commercial property sustained significant damage during Hurricane Irma, with the carrier's initial estimate significantly lower than the policyholder's restoration estimate. The dispute centered on whether certain damage was wind-related (covered) or resulted from pre-existing maintenance issues (excluded). Our investigation included detailed damage pattern analysis, review of pre-storm building condition, and evaluation of both estimates' methodology.
              </p>
              <p className="mb-6">
                Our testimony addressed wind damage signatures, typical hurricane damage patterns for the building type and age, and appropriate repair techniques for addressing the identified damage. The case settled favorably after our deposition testimony demonstrated the technical basis for the policyholder's position and identified deficiencies in the carrier's damage assessment.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Construction Defect Litigation</h3>
              <p className="mb-6">
                A medical facility experienced recurring water intrusion issues within two years of completion, leading to litigation against the general contractor and roofing subcontractor. The case required analysis of building envelope design, construction sequencing, quality control procedures, and compliance with manufacturer specifications.
              </p>
              <p className="mb-6">
                Our testimony covered industry standard construction practices for medical facility envelopes, proper waterproofing installation techniques, and the relationship between observed water intrusion patterns and construction deficiencies. The case resulted in a significant settlement that enabled complete building envelope remediation.
              </p>

              <h3 className="text-xl font-bold text-brand-green mb-4">Historic Preservation Dispute</h3>
              <p className="mb-6">
                A municipality disputed a contractor's approach to historic courthouse restoration, claiming that modern materials and techniques violated Secretary of Interior Standards. The case required detailed analysis of preservation standards, appropriate restoration techniques for the building's period and condition, and cost implications of alternative approaches.
              </p>
              <p className="mb-6">
                Our testimony addressed the balance between historic preservation requirements and practical building performance needs, appropriate use of modern materials in historic restoration, and industry standards for preservation work. The case resulted in approval of a modified approach that satisfied preservation requirements while ensuring long-term building performance.
              </p>

              <h3 className="text-xl font-bold text-brand-green mb-4">Contractor Performance Dispute</h3>
              <p className="mb-6">
                An institutional project experienced significant delays and cost overruns, with the owner claiming contractor negligence and the contractor claiming owner-directed changes and unforeseen conditions. The case required analysis of project scheduling, change order documentation, and industry standards for project management and cost control.
              </p>
              <p className="mb-6">
                Our testimony addressed reasonable construction productivity rates, appropriate change order pricing, and industry standards for documenting changed conditions. We provided detailed analysis of project timeline to identify responsibility for various delays and cost impacts. The case was resolved through mediation after our analysis clarified the technical basis for each party's claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-heading">
              Expert Witness Fee Structure & Engagement Terms
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hourly Rate Structure</h3>
              <p className="mb-6">
                Our expert witness services are provided on an hourly basis, with rates reflecting the specialized nature of expert testimony work and the time required for thorough case preparation. Rates vary based on the type of activity: document review and analysis, site investigation and travel, report preparation, deposition testimony, and trial testimony.
              </p>
              <p className="mb-6">
                We provide detailed time records for all work performed, including description of activities, time spent, and work product generated. This transparency enables clients to understand how time is being utilized and facilitates efficient case management. We discuss time estimates for major project components during initial case assessment.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Retainer Requirements</h3>
              <p className="mb-6">
                Expert witness engagements require an initial retainer to commence work. Retainer amounts vary based on case complexity and anticipated scope of work. The retainer covers initial case review, conflict checking, and preliminary analysis necessary to provide meaningful case assessment. Additional retainers may be required for major project phases like report preparation or trial testimony.
              </p>
              <p className="mb-6">
                We provide regular accounting of retainer use and request additional funds as needed to continue work. Final invoicing occurs upon case completion, with any unused retainer funds returned promptly. Our financial procedures are designed to maintain transparency while ensuring availability for client needs throughout litigation.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Travel and Expense Reimbursement</h3>
              <p className="mb-6">
                Cases requiring travel outside the Tampa Bay area include reimbursement for actual travel expenses including airfare, lodging, meals, ground transportation, and incidental expenses. We provide detailed expense reporting with supporting documentation for all reimbursable costs. Travel time is charged at standard hourly rates.
              </p>
              <p className="mb-6">
                For cases requiring extended travel or multiple site visits, we work with counsel to optimize travel efficiency and minimize costs while ensuring thorough investigation. Video conferencing and other technologies are used when appropriate to reduce travel requirements while maintaining effective communication.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Engagement Agreement Terms</h3>
              <p className="mb-6">
                All expert witness engagements are governed by written agreements that clearly define scope of work, deliverables, timeline expectations, and compensation terms. Engagement agreements include provisions for conflict resolution, work product ownership, and confidentiality requirements. We maintain clear communication about scope changes that might affect fees or timeline.
              </p>
              <p className="mb-6">
                Our engagement terms protect both client and expert interests while ensuring availability for testimony requirements. We understand the unpredictable nature of litigation scheduling and maintain flexibility to accommodate court calendar changes while protecting time availability for trial testimony when required.
              </p>
            </div>
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

<section className="section bg-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Need Expert Witness Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your case and determine how our construction and insurance expertise can support your litigation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Discuss Your Case
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
                Expert Witness Services FAQ
              </h2>
            </div>
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-light">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
              Related Professional Services
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-brand-green"
              >
                {service.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-gray-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              43 Years of Experience at Your Service
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              When your case requires credible, experienced testimony on construction or insurance matters, Florida Construction Specialists provides the dual expertise that makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-gray-900 font-bold rounded-full hover:bg-brand-gold-light transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all">
                Contact Us Online
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              Licensed Contractor {BUSINESS_INFO.licenseNumber} · Former Allstate Commercial Adjuster · Executive General Adjuster
            </p>
          </div>
        </div>
      </section>
</>
  );
}
