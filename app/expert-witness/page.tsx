import Link from "next/link";
import type { Metadata } from "next";
import { Phone, Scale, FileText, Shield, Award, CheckCircle, ArrowRight, Briefcase } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { BUSINESS_INFO } from "@/lib/constants";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Construction Expert Witness Services | Florida Construction Specialists",
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
