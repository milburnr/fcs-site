import type { Metadata } from "next";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { InternalLinks } from "@/components/InternalLinks";
import { HighLevelForm } from "@/components/HighLevelForm";
import { BUSINESS_INFO } from "@/lib/constants";
import Link from "next/link";
import { Phone, Gavel, Award, FileText, Scale, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/insurance/expert-witness/' },
  title: "Expert Witness | Construction Litigation Support | FCS Tampa",
  description: "Construction expert witness services in Tampa Bay. 40+ years experience providing credible testimony for litigation, arbitration, and dispute resolution.",
  keywords: "construction expert witness Tampa, expert testimony Florida, construction litigation, building expert witness",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Insurance", href: "/insurance/" },
  { name: "Expert Witness", href: "/insurance/expert-witness/" },
];

const faqs = [
  {
    question: "What qualifies FCS as a construction expert witness?",
    answer: "Our leadership brings 40+ years of hands-on construction experience, including 300+ completed projects totaling over $25 million. We hold a Florida CGC license, have in-house engineering capability, and specialize in insurance restoration. This combination of credentials and practical experience provides credible, defensible testimony.",
  },
  {
    question: "What types of cases do you support?",
    answer: "We provide expert testimony for insurance claim disputes, construction defect cases, contractor negligence claims, personal injury involving construction, property damage disputes, and professional liability matters. Both plaintiff and defense engagements.",
  },
  {
    question: "What is the expert witness engagement process?",
    answer: "We begin with case review to determine if we can provide meaningful expertise. If engaged, we conduct site inspections, document review, and analysis. We prepare written reports, participate in depositions if needed, and provide trial testimony. All work is thoroughly documented.",
  },
  {
    question: "Do you work for plaintiffs or defendants?",
    answer: "We work for both sides—our role is providing truthful, objective expert opinion regardless of who engages us. Our opinions are based on facts, industry standards, and our professional experience, not on who's paying.",
  },
  {
    question: "What geographic area do you cover?",
    answer: "While based in Tampa Bay, we provide expert witness services throughout Florida and can travel for significant cases elsewhere. Our primary experience is in Florida construction practices, codes, and climate considerations.",
  },
  {
    question: "How are expert witness fees structured?",
    answer: "We charge hourly rates for case review, investigation, report preparation, deposition, and testimony. Rates vary based on case complexity. We provide detailed estimates before engagement and regular updates throughout.",
  },
];

const services = [
  { icon: Gavel, title: "Trial Testimony", description: "Clear, credible testimony that explains complex construction issues to judges and juries." },
  { icon: FileText, title: "Expert Reports", description: "Detailed written opinions with supporting documentation and analysis." },
  { icon: Users, title: "Deposition Support", description: "Thorough preparation and confident deposition testimony." },
  { icon: Scale, title: "Case Analysis", description: "Review facts, standards, and practices to form expert opinions." },
  { icon: Shield, title: "Insurance Disputes", description: "Expert support for coverage disputes, appraisals, and claim litigation." },
  { icon: Award, title: "40+ Years Experience", description: "Decades of hands-on construction experience backing every opinion." },
];

const relatedLinks = [
  { href: "/insurance/", label: "Insurance Services Overview" },
  { href: "/insurance/appraisal-arbitration/", label: "Appraisal & Arbitration" },
  { href: "/insurance/certified-estimating/", label: "Certified Estimating" },
  { href: "/insurance/building-consultant/", label: "Building Consultant" },
];

export default function ExpertWitnessPage() {
  return (
    <>
      <LocalBusinessSchema service="Expert Witness" />
      <ServiceSchema
        serviceName="Construction Expert Witness Services"
        serviceDescription="Construction expert witness services in Tampa Bay. 40+ years experience providing credible testimony for litigation, arbitration, and dispute resolution."
        minPrice="5000"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-repeat" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb items={breadcrumbItems} className="mb-8 text-gray-300" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-slate-500/20 border border-slate-500/50 px-4 py-2 rounded-full mb-6">
              <Gavel className="w-5 h-5 text-slate-300" />
              <span className="text-slate-200 font-medium">40+ Years Experience</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Expert Witness
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Credible construction expert testimony backed by 40+ years of hands-on experience. 
              We help attorneys, insurers, and property owners understand construction matters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-gray-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact/" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 border border-white/30">
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Expert Witness Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive litigation support from case analysis through trial testimony.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Construction Expert Witness Services</h2>
            <p>
              Construction litigation requires expert testimony that's both technically sound and credibly 
              presented. FCS brings four decades of actual construction experience—not just theoretical 
              knowledge—to every engagement.
            </p>
            <h3>Our Expert Credentials</h3>
            <ul>
              <li><strong>Florida CGC License:</strong> CGC1262722 - Certified General Contractor</li>
              <li><strong>40+ Years Experience:</strong> Active construction since 1982</li>
              <li><strong>300+ Projects:</strong> Over $25 million in completed work</li>
              <li><strong>In-House Engineering:</strong> Structural assessment capability</li>
              <li><strong>Insurance Expertise:</strong> Deep knowledge of restoration and claims</li>
            </ul>
            <h3>Types of Cases</h3>
            <p>Our expert witness services support:</p>
            <ul>
              <li>Insurance claim disputes and bad faith claims</li>
              <li>Construction defect litigation</li>
              <li>Contractor negligence and liability cases</li>
              <li>Personal injury involving construction</li>
              <li>Property damage disputes</li>
              <li>Code compliance questions</li>
              <li>Standard of care analysis</li>
            </ul>
            <h3>Objective Analysis</h3>
            <p>
              We work for both plaintiffs and defendants. Our role is to provide truthful, objective 
              expert opinion based on facts and industry standards—regardless of which party engages us. 
              This objectivity strengthens our credibility with judges, juries, and opposing counsel.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-green-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Construction Expert Testimony?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact FCS to discuss your case and determine if we can provide meaningful expertise.
          </p>
          <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-gray-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg">
            <Phone className="w-5 h-5" />
            Call {BUSINESS_INFO.phone}
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <HighLevelForm variant="commercial" />
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <InternalLinks title="Related Services" links={relatedLinks} />
        </div>
      </section>
    </>
  );
}
