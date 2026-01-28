import Link from "next/link";
import type { Metadata } from "next";
import { Phone, FileText, Shield, Award, CheckCircle, ArrowRight, Briefcase, Calculator, ClipboardList, Building2, Scale, DollarSign } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { BUSINESS_INFO } from "@/lib/constants";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Certified Construction Estimates | Florida Construction Specialists",
  description: "Professional certified estimates for insurance claims, litigation & project planning. 43+ years experience, former adjuster. Schedule consultation: (813) 420-7561.",
  keywords: [
    "certified construction estimates Tampa",
    "insurance claim estimate Florida",
    "construction cost estimate",
    "damage assessment estimate",
    "certified estimator Tampa Bay",
    "litigation support estimates",
    "insurance appraisal estimates",
    "construction damage estimate",
  ],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Certified Estimates", href: "/certified-estimates/" },
];

const faqs = [
  {
    question: "What is a certified construction estimate?",
    answer: "A certified construction estimate is a detailed, professional assessment of construction or repair costs prepared by a qualified expert. Unlike informal quotes, certified estimates are prepared using industry-standard methodologies, documented thoroughly, and backed by the estimator's professional credentials. These estimates can be used for insurance claims, legal proceedings, project financing, and budget planning with confidence in their accuracy and defensibility."
  },
  {
    question: "What qualifies Frank Bragano to provide certified estimates?",
    answer: "Frank Bragano brings 43+ years of combined experience in construction and insurance claims. His credentials include serving as a Commercial Property adjuster for Allstate (1982-1989), Executive General Adjuster for CJW-Vericlaim/Sedgwick, and principal of Florida Construction Specialists with $50M+ in completed projects. This dual expertise in both construction methodology and insurance claims processes ensures estimates are accurate, comprehensive, and defensible in any forum."
  },
  {
    question: "How are certified estimates different from contractor quotes?",
    answer: "While contractor quotes typically provide a price for work the contractor will perform, certified estimates are objective assessments of what work should cost based on current market rates, material costs, and labor standards. Certified estimates include detailed line-item breakdowns, methodology documentation, supporting calculations, and professional certification. They're designed to withstand scrutiny in insurance negotiations, legal proceedings, and formal appraisals."
  },
  {
    question: "When would I need a certified estimate for insurance purposes?",
    answer: "Certified estimates are valuable when you disagree with your insurance company's damage assessment, need to support a supplemental claim, are entering appraisal or arbitration proceedings, suspect your claim was underpaid, need professional documentation for disputed items, or are dealing with a denied claim that requires detailed cost justification. Our insurance industry background ensures estimates address carrier concerns while advocating for proper claim valuation."
  },
  {
    question: "Can certified estimates be used in litigation?",
    answer: "Absolutely. Our certified estimates are prepared to meet legal evidentiary standards and can be used in construction defect lawsuits, insurance bad faith litigation, breach of contract cases, personal injury property damage claims, and any legal proceeding requiring professional cost opinions. Frank Bragano is available to provide expert testimony supporting his estimates when required."
  },
  {
    question: "What estimating software and methodologies do you use?",
    answer: "We use industry-standard estimating tools including Xactimate (the insurance industry standard), RS Means cost data, and proprietary spreadsheets developed over 43 years in the field. Our methodology incorporates current local labor rates, verified material costs, appropriate overhead and profit margins, and code-required upgrades. All assumptions and calculations are documented for transparency."
  },
  {
    question: "How detailed are your certified estimates?",
    answer: "Our certified estimates include comprehensive line-item breakdowns covering demolition, materials, labor, equipment, overhead, profit, and applicable taxes. Each estimate includes scope documentation, methodology explanation, supporting photographs when applicable, code requirements analysis, and professional certification. The level of detail ensures the estimate can withstand rigorous examination in any forum."
  },
  {
    question: "What types of damage do you provide estimates for?",
    answer: "We provide certified estimates for all types of construction damage including hurricane and storm damage, fire and smoke damage, water damage and flooding, hail damage, construction defects, structural failures, and general property damage. Our experience spans commercial buildings, multi-family residential, single-family homes, and industrial facilities throughout Florida."
  },
  {
    question: "How long does it take to receive a certified estimate?",
    answer: "Timeline depends on project scope and complexity. Simple residential estimates may be completed within 3-5 business days of site inspection. Complex commercial projects or those requiring extensive documentation review may take 1-2 weeks. We provide timeline estimates during initial consultation and prioritize urgent needs for litigation or appraisal deadlines when possible."
  },
  {
    question: "What is the fee structure for certified estimates?",
    answer: "Certified estimate fees are based on project complexity, scope, and intended use. Fees are established during initial consultation and documented in a written engagement agreement. A retainer is typically required to initiate work. For litigation support or expert witness assignments, fees are billed hourly. We provide clear cost expectations upfront so there are no surprises."
  },
];

const relatedServices = [
  { href: "/expert-witness/", label: "Expert Witness Services" },
  { href: "/insurance-arbitration-appraisal/", label: "Insurance Arbitration & Appraisal" },
  { href: "/building-consultants/", label: "Building Consultants" },
  { href: "/services/disaster-recovery/", label: "Disaster Recovery" },
];

const estimateTypes = [
  {
    title: "Insurance Claim Estimates",
    description: "Comprehensive damage assessments formatted for insurance claim submission. Includes Xactimate-compatible documentation, scope narratives, and supporting evidence to maximize legitimate claim recovery.",
    icon: Shield,
  },
  {
    title: "Litigation Support Estimates",
    description: "Detailed construction cost analyses prepared to meet legal evidentiary standards. Includes methodology documentation, supporting calculations, and professional certification suitable for court proceedings.",
    icon: Scale,
  },
  {
    title: "Appraisal Panel Estimates",
    description: "Independent cost assessments for insurance appraisal and arbitration proceedings. Prepared with the detail and objectivity required for formal dispute resolution processes.",
    icon: FileText,
  },
  {
    title: "Pre-Construction Budgets",
    description: "Accurate project cost estimates for planning, financing, and decision-making. Includes detailed breakdowns, contingency analysis, and value engineering recommendations.",
    icon: Calculator,
  },
  {
    title: "Repair vs. Replace Analysis",
    description: "Objective assessments comparing repair costs against replacement costs. Essential for insurance claims, capital planning, and determining the most cost-effective restoration approach.",
    icon: ClipboardList,
  },
  {
    title: "Code Upgrade Assessments",
    description: "Analysis of code-required upgrades triggered by repair work. Critical for insurance claims where ordinance and law coverage may apply to bring damaged structures into current compliance.",
    icon: Building2,
  },
];


const internalLinks = [
  { href: "/services/", label: "Our Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/about/", label: "About Florida Construction Specialists" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function CertifiedEstimatesPage() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema service="Certified Construction Estimates" />
      <ServiceSchema
        serviceName="Certified Construction Estimates"
        serviceDescription="Professional certified estimates for insurance claims, litigation support, and project planning. 43+ years of construction and insurance industry experience. Accurate, defensible cost assessments."
        minPrice="1000"
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
              <Calculator className="w-4 h-4 text-brand-gold" />
              <span className="text-sm font-medium text-white">Professional Cost Assessment</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight text-white">
              Certified Construction Estimates
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Accurate, defensible construction cost estimates for insurance claims, litigation, and project planning. With 43+ years in construction and insurance claims—including experience as both adjuster and contractor—Florida Construction Specialists provides certified estimates that stand up to scrutiny in any forum.
            </p>

            {/* Trust Badges */}
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
                <DollarSign className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                <p className="text-sm font-semibold text-white">$10M+</p>
                <p className="text-xs text-gray-400">Bonding Capacity</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta text-center">
                Schedule Consultation
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

      {/* Introduction - Why Certified Estimates Matter */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading">
              Why Certified Estimates Matter
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl mb-6">
                In construction disputes, insurance claims, and legal proceedings, the quality of your cost estimate can make or break your case. A certified estimate from a qualified professional provides the credibility, detail, and defensibility that informal quotes simply cannot match.
              </p>
              <p className="mb-6">
                Florida Construction Specialists provides certified construction estimates backed by 43+ years of dual expertise in both construction and insurance claims. Frank Bragano&apos;s unique background—having served as both an insurance company adjuster and a construction professional—means our estimates anticipate the questions adjusters, attorneys, and appraisers will ask.
              </p>
              <p className="mb-6">
                From 1982 to 1989, Frank served as a Commercial Property adjuster for Allstate, learning exactly how carriers evaluate claims, determine scope, and calculate damages. He later served as an Executive General Adjuster for CJW-Vericlaim/Sedgwick, handling large-loss commercial claims requiring detailed cost analysis. This carrier-side experience informs every estimate we prepare, ensuring nothing is overlooked and every item is properly documented.
              </p>
              <p>
                Since founding Florida Construction Specialists, Frank has completed over $50 million in construction projects, providing the real-world cost data that makes our estimates accurate and defensible. Whether you need an estimate for insurance claim support, litigation, appraisal, or project planning, our certified estimates are prepared to the highest professional standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Estimates */}
      <section className="section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Certified Estimate Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional cost assessments for every situation requiring accurate, defensible construction estimates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {estimateTypes.map((type) => (
              <div key={type.title} className="bg-white rounded-xl shadow-md p-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Claims Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Insurance Claim Estimates
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-6">
                  When your insurance company&apos;s estimate doesn&apos;t reflect the true cost of repairs, you need a certified estimate that can stand up to carrier scrutiny. Our insurance claim estimates are prepared using Xactimate—the same software most carriers use—ensuring apples-to-apples comparisons that highlight where adjustments are needed.
                </p>
                <p className="mb-6">
                  Having worked on the carrier side for years, Frank understands exactly what insurance companies look for and what they question. Our estimates anticipate these concerns, providing documentation and justification that addresses common pushback points before they become disputes.
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Xactimate-compatible documentation for direct carrier comparison",
                  "Detailed scope narratives explaining damage and necessary repairs",
                  "Code upgrade analysis for ordinance and law coverage",
                  "Depreciation calculations and RCV/ACV breakdowns",
                  "Supplemental claim support for additional discovered damage",
                  "Appraisal-ready documentation for dispute resolution",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/insurance-arbitration-appraisal/" className="inline-flex items-center gap-2 text-brand-green font-semibold hover:underline">
                Learn about our appraisal services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">When You Need Our Help</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Underpaid Claims",
                    description: "When the carrier's estimate doesn't cover actual repair costs",
                  },
                  {
                    title: "Scope Disputes",
                    description: "When damage items are excluded or minimized by adjusters",
                  },
                  {
                    title: "Denied Claims",
                    description: "When you need professional documentation to support an appeal",
                  },
                  {
                    title: "Supplemental Claims",
                    description: "When additional damage is discovered during repairs",
                  },
                  {
                    title: "Appraisal Proceedings",
                    description: "When formal dispute resolution requires independent estimates",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Litigation Support Section */}
      <section className="section-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading text-center">
              Litigation Support Estimates
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              When construction costs become a legal matter, you need estimates prepared to evidentiary standards.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Types of Cases We Support</h3>
                <ul className="space-y-3">
                  {[
                    "Construction defect litigation",
                    "Insurance bad faith claims",
                    "Breach of contract disputes",
                    "Property damage claims",
                    "Negligent construction cases",
                    "Coverage disputes",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What Our Estimates Include</h3>
                <ul className="space-y-3">
                  {[
                    "Detailed methodology documentation",
                    "Line-item cost breakdowns",
                    "Supporting calculations and data sources",
                    "Professional certification",
                    "Expert availability for testimony",
                    "Rebuttal analysis of opposing estimates",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Expert Witness Support?</h3>
              <p className="text-gray-300 mb-6">
                Frank Bragano is available to provide deposition and trial testimony supporting certified estimates.
              </p>
              <Link href="/expert-witness/" className="inline-flex items-center gap-2 bg-brand-gold text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-brand-gold-light transition-all">
                Expert Witness Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Our Certified Estimate Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach ensuring accurate, comprehensive, and defensible cost assessments.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  description: "We discuss your situation, understand the purpose of the estimate, review available documentation, and establish scope, timeline, and fee structure. Written engagement agreement is executed before work begins.",
                },
                {
                  step: "02",
                  title: "Document Review",
                  description: "Thorough review of all relevant documentation including contracts, specifications, insurance policies, adjuster reports, photographs, and any prior estimates or repair proposals.",
                },
                {
                  step: "03",
                  title: "Site Inspection",
                  description: "When applicable, comprehensive on-site inspection to assess damage, measure areas, photograph conditions, and verify scope items. Detailed inspection notes document all findings.",
                },
                {
                  step: "04",
                  title: "Cost Research & Analysis",
                  description: "Development of detailed cost estimate using industry-standard tools, current material pricing, local labor rates, and appropriate overhead/profit factors. All assumptions documented.",
                },
                {
                  step: "05",
                  title: "Report Preparation",
                  description: "Creation of comprehensive certified estimate report including executive summary, detailed line items, methodology explanation, supporting documentation, and professional certification.",
                },
                {
                  step: "06",
                  title: "Delivery & Support",
                  description: "Final report delivery with explanation of findings. Ongoing support available for questions, revisions if new information emerges, and testimony preparation if needed.",
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

      {/* Credentials Section */}
      
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
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Credentials That Matter
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Our certified estimates are backed by qualifications that insurance companies, attorneys, and courts recognize and respect.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                <h3 className="text-xl font-bold text-white mb-4">Insurance Industry Experience</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span>Allstate Commercial Property Adjuster (1982-1989)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span>Executive General Adjuster - CJW-Vericlaim/Sedgwick</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span>Major hurricane claims experience (Charley, Irma, Harvey)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span>Understanding of carrier processes and requirements</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                <h3 className="text-xl font-bold text-white mb-4">Construction Industry Experience</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span>Florida Licensed General Contractor - {BUSINESS_INFO.licenseNumber}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span>$50M+ in completed construction projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span>$10M+ bonding capacity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span>Commercial, residential, and historic restoration expertise</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Planning Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pre-Construction Budget Benefits</h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Accurate Project Budgeting",
                    description: "Know true costs before committing to a project",
                  },
                  {
                    title: "Financing Support",
                    description: "Professional estimates for lender requirements",
                  },
                  {
                    title: "Value Engineering",
                    description: "Identify cost-saving opportunities without sacrificing quality",
                  },
                  {
                    title: "Scope Clarity",
                    description: "Detailed breakdowns prevent scope creep and surprises",
                  },
                  {
                    title: "Bid Evaluation",
                    description: "Benchmark for evaluating contractor proposals",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-gray-900">{item.title}:</span>{" "}
                      <span className="text-gray-600">{item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Pre-Construction Budget Estimates
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-6">
                  Not all certified estimates involve disputes or damage. We also provide professional cost estimates for project planning, helping property owners, developers, and institutions understand true construction costs before committing to projects.
                </p>
                <p className="mb-6">
                  Our pre-construction estimates provide accurate budgets based on actual market conditions, not wishful thinking. With $50M+ in completed projects, we know what construction actually costs in the Tampa Bay market—not just what estimating software suggests.
                </p>
                <p>
                  Whether you&apos;re planning a commercial development, renovating a historic building, or building a custom home, our certified estimates give you the financial clarity to make informed decisions.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/building-consultants/" className="inline-flex items-center gap-2 text-brand-green font-semibold hover:underline">
                  Learn about our consulting services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Need a Certified Estimate?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your situation and determine how our certified estimate services can support your insurance claim, legal matter, or project planning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Consultation
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
                Certified Estimates FAQ
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about our certified construction estimate services.
              </p>
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
              43 Years of Experience in Every Estimate
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              When accuracy matters—for your insurance claim, your legal case, or your project budget—Florida Construction Specialists provides certified estimates backed by unmatched dual expertise in construction and insurance.
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
              Licensed Contractor {BUSINESS_INFO.licenseNumber} · $10M+ Bonding · Former Allstate Commercial Adjuster · Executive General Adjuster
            </p>
          </div>
        </div>
      </section>
</>
  );
}
