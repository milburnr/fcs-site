import Link from "next/link";
import type { Metadata } from "next";
import { Phone, Scale, FileText, Shield, Award, CheckCircle, ArrowRight, Briefcase, Users, Gavel, Clock, Target } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { BUSINESS_INFO } from "@/lib/constants";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Insurance Arbitration & Appraisal Services | Florida Construction Specialists",
  description: "Expert appraiser/umpire for insurance claim disputes under policy appraisal clauses. 43+ years, former Allstate adjuster. Schedule consultation: (813) 420-7561.",
  keywords: [
    "insurance arbitration Florida",
    "insurance appraisal services Tampa",
    "appraisal clause insurance dispute",
    "property damage appraiser",
    "insurance umpire services",
    "insurance claim arbitration",
    "appraisal panel appraiser",
  ],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Insurance Arbitration & Appraisal", href: "/insurance-arbitration-appraisal/" },
];

const faqs = [
  {
    question: "What is the appraisal clause in an insurance policy?",
    answer: "The appraisal clause is a provision in most property insurance policies that provides a method for resolving disputes over the amount of loss when the policyholder and insurance carrier cannot agree on the value of damages. Either party can invoke the appraisal process, which involves each side selecting an appraiser. The two appraisers then attempt to agree on the amount of loss; if they cannot, they select an umpire whose decision (when agreed upon by either appraiser) becomes binding."
  },
  {
    question: "What is the difference between an appraiser and an umpire in insurance disputes?",
    answer: "An appraiser represents one party's interests in the appraisal process - either the policyholder or the insurance carrier. The appraiser evaluates the damage, prepares estimates, and negotiates with the opposing appraiser to reach agreement on the loss amount. An umpire is a neutral third party selected when the two appraisers cannot agree. The umpire reviews both positions and makes a binding decision. Frank Bragano serves in both capacities depending on the engagement."
  },
  {
    question: "What qualifies Frank Bragano to serve as an insurance appraiser or umpire?",
    answer: "Frank Bragano brings unique dual expertise to insurance appraisals. From 1982-1989, he served as a Commercial Property adjuster for Allstate, understanding how carriers evaluate claims. He later became an Executive General Adjuster for CJW-Vericlaim/Sedgwick, handling major commercial losses. Combined with 43+ years of construction experience and $50M+ in completed projects, he understands both the insurance and construction sides of every dispute - making him uniquely qualified to render fair, informed appraisal decisions."
  },
  {
    question: "When should I invoke the appraisal clause instead of filing a lawsuit?",
    answer: "The appraisal process is typically faster and less expensive than litigation. It's appropriate when the dispute is solely about the amount or value of loss - not coverage issues. If your carrier has accepted coverage but you disagree on the repair/replacement costs, depreciation, or scope of damage, appraisal is often the better path. However, if the dispute involves coverage denial, bad faith, or policy interpretation, those issues cannot be resolved through appraisal and may require litigation."
  },
  {
    question: "How long does the insurance appraisal process typically take?",
    answer: "The timeline varies based on complexity and cooperation between parties. Simple residential claims may resolve in 30-60 days. Commercial or large-loss appraisals typically take 60-120 days. Factors affecting timeline include property accessibility, documentation availability, opposing appraiser responsiveness, and whether an umpire must be selected. We work efficiently to reach fair resolutions without unnecessary delays."
  },
  {
    question: "Do you serve as appraiser for policyholders or insurance companies?",
    answer: "We serve as appraiser for both policyholders and insurance carriers, as well as serving as a neutral umpire when both appraisers cannot agree. Our extensive experience on both sides of insurance claims - as a carrier adjuster and as a construction professional advocating for property owners - allows us to understand and fairly evaluate both perspectives. Our commitment is to accurate, defensible valuations regardless of which party retains us."
  },
  {
    question: "What types of property claims do you handle in appraisal?",
    answer: "We handle appraisal services for all types of property damage claims including hurricane and wind damage, hail damage, water damage and flooding, fire and smoke damage, tornado damage, roof damage, structural damage, and building envelope failures. Our expertise spans both residential and commercial properties, from single-family homes to large commercial buildings and multi-family complexes."
  },
  {
    question: "What documentation do you need to begin the appraisal process?",
    answer: "To begin, we typically need: the insurance policy (especially the appraisal clause), the carrier's estimate and any correspondence, your contractor's estimate or scope of work, photos and documentation of damage, any engineering or inspection reports, the written demand letter invoking appraisal, and information about the opposing appraiser if already selected. The more documentation available upfront, the more efficiently we can proceed."
  },
  {
    question: "How are appraisal awards enforced if the carrier doesn't pay?",
    answer: "An appraisal award, once signed by the umpire and one appraiser (or both appraisers), becomes binding on both parties for the amount of loss. If the carrier fails to pay the awarded amount, the policyholder can file a breach of contract lawsuit to enforce the award. Courts generally uphold appraisal awards unless there's evidence of fraud, bias, or failure to follow proper procedures. The award significantly strengthens any enforcement action."
  },
  {
    question: "What are your fees for insurance arbitration and appraisal services?",
    answer: "Appraisal fees are based on hourly rates for case review, inspections, estimate preparation, negotiations, and any umpire proceedings. Complexity and claim size affect total cost. We provide fee estimates after initial case review and require a retainer to begin work. For umpire engagements, fees are typically split between both parties. Specific rates and terms are provided during initial consultation."
  },
];

const relatedServices = [
  { href: "/expert-witness/", label: "Expert Witness Services" },
  { href: "/certified-estimates/", label: "Certified Estimates" },
  { href: "/building-consultants/", label: "Building Consultants" },
  { href: "/services/disaster-recovery/", label: "Disaster Recovery" },
];


const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/services/disaster-recovery/fire-damage/", label: "Fire Damage Restoration" },
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Restoration" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function InsuranceArbitrationAppraisalPage() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema service="Insurance Arbitration and Appraisal Services" />
      <ServiceSchema
        serviceName="Insurance Arbitration and Appraisal Services"
        serviceDescription="Professional appraiser and umpire services for insurance claim disputes under the appraisal clause. 43+ years of construction and insurance industry experience, including former Allstate Commercial adjuster and Executive General Adjuster credentials."
        minPrice="5000"
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
              <Gavel className="w-4 h-4 text-brand-gold" />
              <span className="text-sm font-medium text-white">Insurance Dispute Resolution</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight text-white">
              Insurance Arbitration & Appraisal Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Serving as appraiser or umpire in insurance claim disputes under the appraisal clause. With 43+ years in construction and insurance claims—including direct experience as both carrier adjuster and policyholder advocate—Florida Construction Specialists brings unmatched perspective to fair claim resolution.
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
                <p className="text-sm font-semibold text-white">License</p>
                <p className="text-xs text-gray-400">{BUSINESS_INFO.licenseNumber}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Briefcase className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                <p className="text-sm font-semibold text-white">Former Adjuster</p>
                <p className="text-xs text-gray-400">Allstate Commercial</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Scale className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                <p className="text-sm font-semibold text-white">Executive GA</p>
                <p className="text-xs text-gray-400">CJW-Vericlaim/Sedgwick</p>
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

      {/* Introduction - Understanding Both Sides */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading">
              Understanding Both Sides of Insurance Disputes
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl mb-6">
                What makes Florida Construction Specialists uniquely qualified for insurance arbitration and appraisal work is our principal's rare combination of experience on both sides of the claims process. Frank Bragano doesn't just understand construction—he understands how insurance carriers evaluate, adjust, and value claims from the inside.
              </p>
              <p className="mb-6">
                From 1982 to 1989, Frank served as a Commercial Property adjuster for Allstate Insurance, gaining firsthand knowledge of how carriers investigate claims, determine coverage, establish reserves, and negotiate settlements. He later served as an Executive General Adjuster for CJW-Vericlaim/Sedgwick, handling complex large-loss commercial claims across the country on behalf of major insurance carriers.
              </p>
              <p className="mb-6">
                This carrier-side experience provides invaluable insight when serving as an appraiser or umpire. Frank understands the methodologies carriers use, the concerns they have about inflated claims, and the documentation they need to justify payments. He also understands when carriers are undervaluing legitimate losses and the proper way to demonstrate actual repair costs.
              </p>
              <p className="mb-6">
                Combined with 43+ years of construction experience and over $50 million in completed projects—including complex hurricane restoration and large-loss commercial work—this dual perspective allows for truly balanced, informed appraisal decisions that both parties can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Insurance Appraisal */}
      <section className="section-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading text-center">
              Understanding the Insurance Appraisal Process
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              The appraisal clause provides a structured method for resolving disputes about the amount of loss without costly litigation.
            </p>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Triggers the Appraisal Process?</h3>
              <p className="text-gray-700 mb-4">
                When you and your insurance carrier cannot agree on the amount of loss after a covered claim, either party can invoke the appraisal clause found in most property insurance policies. This typically happens when:
              </p>
              <ul className="space-y-3">
                {[
                  "The carrier's estimate is significantly lower than your contractor's repair costs",
                  "Disagreement exists over the scope of damage (what needs to be repaired)",
                  "Disputes arise over material quality, repair methods, or code upgrades",
                  "Depreciation calculations are contested",
                  "Hidden or additional damage is discovered after initial estimate",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How the Appraisal Process Works</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Demand for Appraisal</h4>
                    <p className="text-gray-600">Either party sends written notice invoking the appraisal clause, citing the policy provision and the nature of the dispute.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Appraiser Selection</h4>
                    <p className="text-gray-600">Each party selects their own competent, independent appraiser within the timeframe specified by the policy (typically 20 days).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Appraisal Negotiation</h4>
                    <p className="text-gray-600">The two appraisers inspect the property, review documentation, prepare their own estimates, and attempt to reach agreement on the amount of loss.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Umpire Selection (If Needed)</h4>
                    <p className="text-gray-600">If appraisers cannot agree, they jointly select an umpire. If they cannot agree on an umpire, either party can petition the court to appoint one.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">5</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Binding Award</h4>
                    <p className="text-gray-600">Agreement by both appraisers, or by one appraiser and the umpire, determines the amount of loss. This award is binding on both parties.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Our Appraisal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve in multiple capacities depending on your needs and the nature of the dispute.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Policyholder Appraiser</h3>
              <p className="text-gray-700 mb-4">
                Representing property owners in disputes with their insurance carriers. We prepare detailed, defensible estimates based on actual repair costs and industry standards, then negotiate with the carrier's appraiser to achieve fair settlement.
              </p>
              <ul className="space-y-2">
                {[
                  "Detailed damage documentation",
                  "Comprehensive repair estimates",
                  "Code upgrade identification",
                  "Aggressive but fair negotiation",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-gray-700 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Carrier Appraiser</h3>
              <p className="text-gray-700 mb-4">
                Representing insurance carriers in appraisal disputes. Our carrier experience allows us to understand your concerns while ensuring fair, accurate valuations. We identify legitimate damages while protecting against inflated or unsubstantiated claims.
              </p>
              <ul className="space-y-2">
                {[
                  "Accurate damage assessment",
                  "Industry-standard pricing",
                  "Fraud and inflation detection",
                  "Defensible documentation",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-gray-700 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-6">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Neutral Umpire</h3>
              <p className="text-gray-700 mb-4">
                When appointed as umpire, we provide completely neutral, binding decisions based on the evidence presented by both appraisers. Our dual experience on both sides of claims ensures balanced evaluation and awards that both parties can accept.
              </p>
              <ul className="space-y-2">
                {[
                  "Impartial evaluation",
                  "Experience-based decisions",
                  "Efficient resolution process",
                  "Binding, enforceable awards",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-gray-700 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Claims */}
      <section className="section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Types of Claims We Handle
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extensive experience with all types of property damage claims across residential and commercial properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Hurricane & Wind Damage",
                description: "Roof damage, water intrusion, structural impact, debris removal, and related losses from tropical storms and hurricanes.",
              },
              {
                title: "Hail Damage",
                description: "Roof systems, siding, gutters, HVAC equipment, and other property damaged by hailstorms.",
              },
              {
                title: "Water Damage",
                description: "Pipe bursts, appliance failures, roof leaks, and flooding damage to structures and contents.",
              },
              {
                title: "Fire & Smoke Damage",
                description: "Structural fire damage, smoke infiltration, content losses, and required demolition/rebuild.",
              },
              {
                title: "Tornado Damage",
                description: "Catastrophic wind damage, structural failures, and complete or partial building losses.",
              },
              {
                title: "Commercial Properties",
                description: "Office buildings, retail centers, industrial facilities, and multi-family complexes.",
              },
              {
                title: "Residential Properties",
                description: "Single-family homes, condominiums, townhomes, and high-value custom residences.",
              },
              {
                title: "Large Loss Claims",
                description: "Complex claims exceeding $250,000 requiring specialized expertise and documentation.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Approach Works */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading text-center">
              Why Our Approach Produces Fair Results
            </h2>

            <div className="space-y-8 mt-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                    <Target className="w-7 h-7 text-gray-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">We Know What Carriers Need to See</h3>
                  <p className="text-gray-700">
                    Having worked as an adjuster, Frank understands what documentation carriers require to justify claim payments internally. Our estimates and reports are structured to address carrier concerns proactively, facilitating faster agreement rather than prolonged disputes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                    <FileText className="w-7 h-7 text-gray-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Real Construction Costs, Not Theories</h3>
                  <p className="text-gray-700">
                    With 43+ years of actual construction experience and over $50 million in completed projects, our estimates reflect real-world repair costs. We know what materials cost, what labor rates are, and what it actually takes to restore properties to pre-loss condition in the Tampa Bay market.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                    <Scale className="w-7 h-7 text-gray-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Balanced Perspective Builds Trust</h3>
                  <p className="text-gray-700">
                    Our experience on both sides of claims means we can speak credibly to opposing appraisers. We don't take unreasonable positions or inflate damages. This balanced approach often leads to faster agreement because the opposing party trusts our professionalism and accuracy.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                    <Clock className="w-7 h-7 text-gray-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Efficient Process, Fair Outcomes</h3>
                  <p className="text-gray-700">
                    We understand that prolonged disputes cost everyone—property owners need their buildings repaired, and carriers need claims resolved. Our goal is always efficient resolution through fair, accurate valuations that both parties can accept without unnecessary delays or escalation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
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
            Dispute Over Your Insurance Claim Amount?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            If you and your insurance carrier cannot agree on the value of your loss, the appraisal process may be your fastest path to fair resolution. Contact us to discuss your situation.
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

      {/* Appraisal vs Litigation */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading text-center">
              Appraisal vs. Litigation: Choosing the Right Path
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  When Appraisal is Appropriate
                </h3>
                <ul className="space-y-3">
                  {[
                    "Coverage has been accepted by the carrier",
                    "Dispute is solely about amount/value of loss",
                    "Disagreement over repair costs or scope",
                    "Depreciation calculations are contested",
                    "Code upgrade costs are disputed",
                    "You want faster, less expensive resolution",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <ArrowRight className="w-4 h-4 text-gray-500 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Scale className="w-6 h-6 text-gray-700" />
                  When Litigation May Be Necessary
                </h3>
                <ul className="space-y-3">
                  {[
                    "Coverage has been denied by the carrier",
                    "Policy interpretation is disputed",
                    "Bad faith handling is alleged",
                    "Fraud or misrepresentation issues exist",
                    "Causation of damage is disputed",
                    "Time limits or conditions were violated",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <ArrowRight className="w-4 h-4 text-gray-500 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-100 rounded-xl">
              <p className="text-gray-700 text-center">
                <strong>Note:</strong> Appraisal addresses the <em>amount</em> of loss, not <em>coverage</em> questions. If your carrier has denied coverage entirely or you believe bad faith occurred, you should consult with an insurance attorney. We often work alongside attorneys when appraisal and litigation issues are both present.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
                Insurance Arbitration & Appraisal FAQ
              </h2>
            </div>
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-white">
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
                className="inline-flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-gray-900"
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
              Experience That Bridges Both Worlds
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              When your insurance dispute requires someone who truly understands both carrier and policyholder perspectives, Florida Construction Specialists delivers the expertise and balanced approach that produces fair, efficient resolutions.
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
                Schedule Consultation
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              Licensed Contractor {BUSINESS_INFO.licenseNumber} | Former Allstate Commercial Adjuster (1982-1989) | Executive General Adjuster
            </p>
          </div>
        </div>
      </section>
</>
  );
}
