import Link from "next/link";
import type { Metadata } from "next";
import {
  Phone,
  Building2,
  FileText,
  Shield,
  Award,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Scale,
  Users,
  ClipboardCheck,
  HardHat,
} from "lucide-react";
import {
  LocalBusinessSchema,
  ServiceSchema,
  FAQSchema,
  BreadcrumbSchema,
} from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { BUSINESS_INFO } from "@/lib/constants";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Building Consultants | Construction Consulting | Florida Construction Specialists",
  description:
    "Professional building consulting for property owners, attorneys & insurers. 43+ years experience, 40+ years experience. Schedule your consultation. Call (813) 420-7561.",
  keywords: [
    "building consultant Tampa",
    "construction consultant Florida",
    "building consulting services",
    "construction consulting Tampa Bay",
    "property owner consulting",
    "construction advisor",
    "building expert consultant",
  ],
};

const breadcrumbItems = [
  { name: "Services", href: "/services/" },
  { name: "Building Consultants", href: "/building-consultants/" },
];

const faqs = [
  {
    question: "What is a building consultant and what services do you provide?",
    answer:
      "A building consultant is a construction industry expert who provides professional advice and guidance on construction matters without necessarily performing the actual construction work. Our services include project feasibility analysis, construction oversight, quality assurance inspections, cost analysis and verification, dispute resolution support, insurance claim consulting, owner representation, and pre-purchase building evaluations. We leverage 43+ years of construction and insurance industry experience to help clients make informed decisions.",
  },
  {
    question: "Who typically needs building consulting services?",
    answer:
      "Our building consulting services benefit a wide range of clients including property owners planning major construction or renovation projects, attorneys handling construction litigation or disputes, insurance carriers needing independent damage assessments, real estate investors evaluating acquisition targets, HOAs and condo associations managing large capital projects, lenders requiring construction progress monitoring, and municipalities or public entities overseeing construction contracts.",
  },
  {
    question: "How does your insurance industry background benefit consulting clients?",
    answer:
      "Frank Bragano's unique background as a former Allstate Commercial Property adjuster (1982-1989) and Executive General Adjuster for CJW-Vericlaim/Sedgwick provides invaluable insight for consulting clients. We understand how insurance claims are evaluated, how coverage is interpreted, and how disputes arise. This dual perspective in both construction methodology and insurance processes makes our consulting particularly valuable for property damage claims, coverage disputes, and restoration projects.",
  },
  {
    question: "What qualifications does Florida Construction Specialists have for building consulting?",
    answer:
      "Our qualifications include: Licensed Florida General Contractor (CBC1262722), 40+ years experience and in-house engineering demonstrating financial stability, 43+ years combined construction and insurance experience, $25M+ in successfully completed projects across Florida and the Southeast, former insurance adjuster credentials providing carrier-side perspective, and extensive experience with hurricanes including Charley, Irma, Harvey, and other major events.",
  },
  {
    question: "Can you provide owner representation during construction projects?",
    answer:
      "Yes, owner representation is one of our core consulting services. We act as your advocate throughout the construction process, reviewing contractor qualifications and proposals, negotiating contract terms, monitoring construction progress and quality, verifying payment applications against work completed, managing change orders, and ensuring the project meets specifications and building codes. This service is particularly valuable for property owners who lack construction expertise or time to actively manage their projects.",
  },
  {
    question: "Do you provide consulting for construction disputes and litigation?",
    answer:
      "Absolutely. We provide comprehensive support for construction disputes including detailed analysis of construction quality and defects, assessment of scope and cost disagreements, review of contractor performance against contract requirements, documentation of construction methodology and industry standards, support for mediation, arbitration, or litigation proceedings, and coordination with legal counsel on technical matters. Our expertise spans both plaintiff and defendant representation.",
  },
  {
    question: "What is involved in a pre-construction consultation?",
    answer:
      "Pre-construction consulting helps property owners make informed decisions before committing to a project. This includes reviewing architectural plans and specifications for completeness and constructability, evaluating contractor proposals and qualifications, analyzing project budgets and timelines for reasonableness, identifying potential risks and mitigation strategies, recommending contract terms and conditions, and advising on permit requirements and regulatory compliance. This upfront investment often prevents costly problems during construction.",
  },
  {
    question: "How do you assist insurance carriers with building consulting?",
    answer:
      "We assist insurance carriers with independent damage assessments and repair cost verification, construction quality evaluations for coverage disputes, scope of loss determination for complex claims, reserved cost analysis for large loss claims, construction progress monitoring for claim payments, and technical consultation on building systems and repair methodologies. Our experience on both sides of the claims process enables objective, defensible assessments.",
  },
  {
    question: "What geographic areas do you serve for building consulting?",
    answer:
      "While headquartered in Ruskin, Florida, we provide building consulting services throughout the Tampa Bay region including Tampa, St. Petersburg, Clearwater, Lakeland, Sarasota, and Bradenton. For larger projects or specialized engagements, we also accept consulting assignments throughout Florida and the Southeast United States. Travel arrangements and considerations apply for distant locations.",
  },
  {
    question: "How are building consulting fees structured?",
    answer:
      "Consulting fees are typically structured based on the scope and complexity of the engagement. Options include hourly consulting rates for advisory services and meetings, fixed-fee arrangements for defined scope projects like pre-purchase evaluations, percentage-based fees for owner representation on construction projects, and retainer arrangements for ongoing consulting relationships. We provide detailed proposals outlining scope, deliverables, and compensation before engagement.",
  },
];

const relatedServices = [
  { href: "/expert-witness/", label: "Expert Witness Services" },
  { href: "/certified-estimates/", label: "Certified Estimates" },
  { href: "/insurance-arbitration-appraisal/", label: "Insurance Arbitration & Appraisal" },
  { href: "/services/commercial/", label: "Commercial Construction" },
];

const clientTypes = [
  {
    icon: Building2,
    title: "Property Owners",
    description:
      "Navigate complex construction projects with confidence. From pre-construction planning to project closeout, we protect your investment and represent your interests.",
  },
  {
    icon: Scale,
    title: "Attorneys",
    description:
      "Technical support for construction litigation. We provide detailed analysis, expert opinions, and defensible documentation for disputes and claims.",
  },
  {
    icon: Shield,
    title: "Insurance Carriers",
    description:
      "Independent damage assessments and cost verification. Our carrier-side experience ensures objective, industry-standard evaluations for claims processing.",
  },
  {
    icon: Users,
    title: "HOAs & Condo Associations",
    description:
      "Navigate major capital projects and reserve studies. We help boards make informed decisions and hold contractors accountable.",
  },
  {
    icon: Briefcase,
    title: "Real Estate Investors",
    description:
      "Due diligence for property acquisitions. We evaluate building conditions, estimate repair costs, and identify potential issues before you commit.",
  },
  {
    icon: HardHat,
    title: "Lenders & Financial Institutions",
    description:
      "Construction progress monitoring and draw inspections. We verify work completion and payment applications to protect your investment.",
  },
];

const consultingServices = [
  {
    title: "Pre-Construction Consulting",
    items: [
      "Project feasibility analysis",
      "Budget and schedule review",
      "Contractor qualification evaluation",
      "Plan and specification review",
      "Risk assessment and mitigation",
      "Contract negotiation support",
    ],
  },
  {
    title: "Construction Phase Services",
    items: [
      "Owner representation",
      "Quality assurance inspections",
      "Progress monitoring",
      "Payment application review",
      "Change order evaluation",
      "Dispute resolution",
    ],
  },
  {
    title: "Insurance & Claims Consulting",
    items: [
      "Damage assessment",
      "Scope of loss evaluation",
      "Cost verification",
      "Coverage analysis support",
      "Claim documentation",
      "Settlement support",
    ],
  },
  {
    title: "Dispute & Litigation Support",
    items: [
      "Construction defect analysis",
      "Standard of care evaluation",
      "Cost and damage quantification",
      "Technical documentation",
      "Expert report preparation",
      "Litigation support",
    ],
  },
];


const internalLinks = [
  { href: "/services/", label: "Our Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/about/", label: "About Florida Construction Specialists" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function BuildingConsultantsPage() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema service="Building Consulting Services" />
      <ServiceSchema
        serviceName="Building Consulting Services"
        serviceDescription="Professional building and construction consulting services for property owners, attorneys, insurance carriers, and stakeholders. 43+ years experience in construction and insurance claims."
        minPrice="2500"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, ...breadcrumbItems]} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />

          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <ClipboardCheck className="w-4 h-4 text-brand-gold" />
              <span className="text-sm font-medium text-white">Professional Consulting</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight text-white">
              Building Consultants
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Expert construction consulting for property owners, attorneys, insurance carriers, and
              stakeholders who need professional guidance on complex construction matters. With 43+
              years in construction and insurance claims, Florida Construction Specialists provides
              the expertise you need to make informed decisions.
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
                <p className="text-sm font-semibold text-white">{BUSINESS_INFO.licenseNumber}</p>
                <p className="text-xs text-gray-400">Licensed Contractor</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Building2 className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                <p className="text-sm font-semibold text-white">In-House Engineering</p>
                <p className="text-xs text-gray-400">Financial Stability</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <FileText className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                <p className="text-sm font-semibold text-white">150+ Projects</p>
                <p className="text-xs text-gray-400">Successfully Completed</p>
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

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading">
              Construction Expertise When You Need It Most
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl mb-6">
                Not every construction situation requires hiring a general contractor. Sometimes you
                need expert advice, independent analysis, or professional oversight. Florida
                Construction Specialists provides building consulting services that give you access
                to decades of construction and insurance industry expertise without the commitment
                of a full construction contract.
              </p>
              <p className="mb-6">
                Our principal, Frank Bragano, brings a uniquely valuable combination of experience to
                consulting engagements. From 1982 to 1989, he served as a Commercial Property
                adjuster for Allstate, learning firsthand how insurance carriers evaluate claims and
                determine coverage. He later worked as an Executive General Adjuster for
                CJW-Vericlaim/Sedgwick, handling large-loss commercial claims across the country.
              </p>
              <p className="mb-6">
                This insurance industry background, combined with over 20 years leading Florida
                Construction Specialists and completing $25M+ in construction projects, creates a
                perspective that few consultants can match. Whether you are a property owner planning
                a major project, an attorney handling a construction dispute, or an insurance carrier
                evaluating a claim, we bring the expertise you need.
              </p>
              <p>
                Our consulting practice is built on the same principles that guide our construction
                work: integrity, expertise, and a commitment to getting it right. We provide honest,
                objective analysis even when it is not what clients want to hear because our
                reputation depends on it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our building consulting services benefit clients across multiple industries and
              situations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientTypes.map((client) => (
              <div key={client.title} className="bg-white rounded-xl shadow-md p-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <client.icon className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{client.title}</h3>
                <p className="text-gray-600">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Building Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consulting services for every phase of construction and property
              ownership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {consultingServices.map((service) => (
              <div
                key={service.title}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
            Need Expert Construction Guidance?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you are planning a project, managing a dispute, or evaluating a property,
            our consulting services provide the expertise you need.
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

      {/* The Consulting Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              The Consulting Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach ensures you get the most value from our consulting engagement.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  description:
                    "We begin with a detailed discussion of your situation, objectives, and concerns. This helps us understand your needs and determine how we can best assist you. Initial consultations are typically complimentary for qualified engagements.",
                },
                {
                  step: "02",
                  title: "Scope Definition",
                  description:
                    "Based on our initial discussion, we develop a clear scope of work outlining specific deliverables, timeline, and compensation. You will know exactly what you are getting before we begin.",
                },
                {
                  step: "03",
                  title: "Investigation & Analysis",
                  description:
                    "We conduct thorough investigation including document review, site visits when applicable, research of codes and standards, and interviews with relevant parties. Our analysis is methodical and well-documented.",
                },
                {
                  step: "04",
                  title: "Findings & Recommendations",
                  description:
                    "You receive a detailed report of our findings, analysis, and recommendations. We present information clearly, support opinions with evidence, and provide actionable guidance for your situation.",
                },
                {
                  step: "05",
                  title: "Ongoing Support",
                  description:
                    "Consulting relationships often continue beyond the initial engagement. We remain available for follow-up questions, additional analysis, and ongoing advisory support as your situation develops.",
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

      {/* Why Choose Us */}
      <section className="section-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-heading text-center">
              Why Choose Florida Construction Specialists
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-gray-700 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Dual Industry Expertise</h3>
                    <p className="text-gray-600">
                      Rare combination of construction and insurance industry experience provides
                      uniquely comprehensive perspective.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-gray-700 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">43+ Years of Experience</h3>
                    <p className="text-gray-600">
                      Decades of hands-on experience across commercial, residential, historic, and
                      disaster recovery construction.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-gray-700 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">$25M+ Project Portfolio</h3>
                    <p className="text-gray-600">
                      Real-world construction experience provides practical, actionable advice
                      grounded in actual project delivery.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-gray-700 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Licensed & Bonded</h3>
                    <p className="text-gray-600">
                      Florida Licensed Contractor ({BUSINESS_INFO.licenseNumber}) with $10M+
                      bonding demonstrates professional standing and financial stability.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-gray-700 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Objective Analysis</h3>
                    <p className="text-gray-600">
                      We provide honest, unbiased opinions based on facts and industry standards,
                      not what clients want to hear.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-gray-700 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Major Hurricane Experience</h3>
                    <p className="text-gray-600">
                      Direct experience with Hurricanes Charley, Irma, Harvey, and other major
                      events provides critical disaster-related expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Experience */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading text-center">
              Project Experience That Informs Our Consulting
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Our consulting advice is grounded in real-world project delivery across diverse
              construction types.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Hurricane Recovery</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Turner Agri-Center - Hurricane Charley ($12.5M estimated)</li>
                  <li>Leon County Detention Center - Water Loss ($1.8M)</li>
                  <li>Hurricane Harvey Texas - Multiple properties ($40M+ total)</li>
                  <li>Hurricane Irma Miami - Multiple properties ($20M+ total)</li>
                  <li>Tiara Condominium - Hurricanes Francis & Wilma</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Historic Restoration</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Italian American Club, Ybor City ($1.2M)</li>
                  <li>Lion&apos;s Eye Institute - National Historic Register</li>
                  <li>Bay Pines Veterans Hospital ($2M) - Federal compliance</li>
                  <li>Plant High School Tampa ($525K) - Brick restoration</li>
                  <li>Historic Sebring Fire Station - Hurricane Charley ($900K)</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Commercial & Industrial</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Coronet Phosphate Mine - Overhead Railway Collapse</li>
                  <li>Mulberry Phosphates - Tornado damage</li>
                  <li>Wellington Polo Club - Fire & Mold</li>
                  <li>Carlton Arms Apartment Complex - Large Loss Fire</li>
                  <li>Imperial Gardens Apartments - Large Loss Fire</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Insurance Expertise</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Former Allstate Commercial Property adjuster (1982-1989)</li>
                  <li>Executive General Adjuster - CJW-Vericlaim/Sedgwick</li>
                  <li>Part of Disaster Remediation Group (DRG) consortium</li>
                  <li>Multi-state large loss claims experience</li>
                  <li>Both carrier-side and policyholder representation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
                Building Consulting FAQ
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
              Expert Construction Guidance When It Matters
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              With 43+ years of construction and insurance industry experience, Florida
              Construction Specialists provides the expertise you need to make informed decisions
              about your construction matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-gray-900 font-bold rounded-full hover:bg-brand-gold-light transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all"
              >
                Schedule Consultation
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              Licensed Contractor {BUSINESS_INFO.licenseNumber} | In-House Engineering | 150+ Projects
              Completed
            </p>
          </div>
        </div>
      </section>
</>
  );
}
