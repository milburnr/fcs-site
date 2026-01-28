"use client";

import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { InternalLinks } from "@/components/InternalLinks";
import { HighLevelForm } from "@/components/HighLevelForm";
import { BUSINESS_INFO } from "@/lib/constants";
import Link from "next/link";
import { FadeIn, StaggerContainer } from "@/components/AnimatedElements";
import {
  CheckCircle,
  Shield,
  Award,
  Phone,
  FileText,
  Camera,
  Users,
  Scale,
  ClipboardCheck,
  Calculator
} from "lucide-react";

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Disaster Recovery", href: "/services/disaster-recovery/" },
  { name: "Insurance Claims Process", href: "/services/disaster-recovery/insurance-claims-process/" },
];

const faqs = [
  {
    question: "What is your experience with insurance restoration claims?",
    answer: "Our principal, Frank Bragano, spent 43 years in the insurance industry, including 7 years as a commercial adjuster for Allstate and later as an Executive General Adjuster handling catastrophe claims. This unique background means we understand both sides of the claims process—how adjusters evaluate damage, what documentation they need, and how to ensure claims are properly valued.",
  },
  {
    question: "Do I need to get my own estimate before calling you?",
    answer: "No. We provide comprehensive estimates as part of our service. In fact, getting contractor estimates before understanding your policy coverage can create confusion. We assess damage, develop detailed scopes, and price them using industry-standard methods (Xactimate) that insurance companies recognize. This ensures alignment between our estimate and what insurers expect.",
  },
  {
    question: "Will you meet with my insurance adjuster?",
    answer: "Yes, we encourage joint inspections with your adjuster. Having us present ensures all damage is identified and documented. We can point out issues that might be overlooked and provide context on repair methods. This collaborative approach typically results in more accurate initial claim valuations and fewer disputes.",
  },
  {
    question: "What is a supplement claim and when is it needed?",
    answer: "A supplement is a request for additional payment when hidden damage is discovered during repairs, when the original scope was insufficient, or when code upgrades are required. Supplements are common in restoration work—hidden damage is often revealed only when walls are opened or systems are tested. We document and submit supplements throughout the project as needed.",
  },
  {
    question: "How do you price restoration work for insurance?",
    answer: "We use Xactimate, the same software most insurance companies use for estimating. This creates apples-to-apples comparisons and reduces pricing disputes. Xactimate pricing reflects local market rates and includes overhead and profit appropriate for general contractor work. Using industry-standard methods expedites claim approval.",
  },
  {
    question: "What if my insurance company's estimate is too low?",
    answer: "Low estimates are common. We review your insurer's estimate against our assessment, identify discrepancies, and provide documentation supporting our scope. If negotiations don't resolve differences, the policy provides for appraisal—a neutral process where independent appraisers determine fair value. We can recommend experienced appraisers and provide supporting documentation.",
  },
  {
    question: "What is 'overhead and profit' and should it be included?",
    answer: "Overhead and profit (O&P) compensates general contractors for project management, coordination, liability, and business operations—typically 10% each. Insurance companies sometimes exclude O&P on simpler claims. However, when multiple trades are required or repairs are complex, O&P is industry-standard and should be included. We advocate for appropriate O&P inclusion.",
  },
  {
    question: "How do code upgrades affect my claim?",
    answer: "Florida Building Code evolves, and repairs may require upgrades beyond original construction. Most policies include coverage for code-required upgrades (often called 'ordinance or law' coverage). When repairs trigger code compliance requirements—electrical panel upgrades, window replacements, structural improvements—we document these for inclusion in your claim.",
  },
  {
    question: "What's the difference between ACV and RCV policies?",
    answer: "Actual Cash Value (ACV) policies pay depreciated value—what damaged items are worth today. Replacement Cost Value (RCV) policies pay to replace with new materials of like kind and quality, typically in two payments: initial ACV payment, then recoverable depreciation after repairs complete. RCV provides better coverage but requires proof of completed repairs to collect full value.",
  },
  {
    question: "How long does the insurance claim process take?",
    answer: "Timeline varies by claim complexity and carrier. Florida law requires insurers to acknowledge claims within 14 days, make coverage decisions within 90 days, and pay undisputed amounts promptly. Simple claims may settle in 30-60 days. Complex claims involving supplements and disputes can extend 6-12 months. We work to expedite the process while ensuring full claim value.",
  },
];

const claimsServices = [
  {
    icon: Camera,
    title: "Damage Documentation",
    description: "Comprehensive photo and video documentation, measurements, and written descriptions that support your claim from initial filing through final settlement.",
  },
  {
    icon: Calculator,
    title: "Xactimate Estimating",
    description: "Industry-standard estimates using the same software your insurance company uses, ensuring accurate scope and pricing alignment.",
  },
  {
    icon: Users,
    title: "Adjuster Meetings",
    description: "We meet with your adjuster, walk the property together, identify all damage, and advocate for complete scope recognition.",
  },
  {
    icon: FileText,
    title: "Supplement Preparation",
    description: "When additional damage is discovered, we document and submit supplement claims with supporting evidence for approval.",
  },
  {
    icon: ClipboardCheck,
    title: "Code Upgrade Documentation",
    description: "Identify and document code-required improvements for inclusion in your claim under ordinance or law coverage.",
  },
  {
    icon: Scale,
    title: "Dispute Resolution Support",
    description: "If claim disputes arise, we provide documentation and expert testimony for appraisal or litigation support.",
  },
];

const relatedLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Restoration" },
  { href: "/services/disaster-recovery/fire-damage/", label: "Fire Damage Restoration" },
  { href: "/disaster-recovery-tampa/", label: "Disaster Recovery Tampa" },
  { href: "/disaster-recovery-st-petersburg/", label: "Disaster Recovery St. Petersburg" },
];

export default function InsuranceClaimsProcessPage() {
  return (
    <>
      <LocalBusinessSchema service="Insurance Claims Support" />
      <ServiceSchema
        serviceName="Insurance Restoration Claims Support"
        serviceDescription="Expert insurance claim support for Tampa Bay property damage restoration. Damage documentation, Xactimate estimating, adjuster meetings, supplement claims, and dispute resolution from a team with 43+ years insurance industry experience."
        minPrice="0"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-repeat" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb items={breadcrumbItems} className="mb-8 text-gray-300" />

          <div className="max-w-4xl">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Insurance Claims Process Support
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Navigate the insurance restoration process with a contractor who spent 43 years
                in the insurance industry. We understand claims from both sides and ensure
                you receive fair compensation for your property damage.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span>43 Years Insurance Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Shield className="w-5 h-5 text-amber-400" />
                  <span>Licensed: {BUSINESS_INFO.licenseNumber}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span>Xactimate Certified</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg transition-colors border border-white/30"
                >
                  Discuss Your Claim
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Insurance Industry Experience on Your Side
              </h2>
            </FadeIn>

            <div className="prose prose-lg max-w-none">
              <FadeIn delay={0.1}>
                <p className="text-gray-700 mb-6">
                  Most contractors have experience filing insurance claims. Frank Bragano has
                  43 years of experience processing them. His career began in 1982 as a commercial
                  property adjuster for Allstate, handling everything from small business claims
                  to large commercial losses. He later served as an Executive General Adjuster
                  with CJW-Vericlaim (now Sedgwick), managing catastrophe response teams and
                  overseeing millions in claims.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-gray-700 mb-6">
                  This background means we understand what insurance companies need to approve
                  claims, how adjusters evaluate damage, what documentation supports higher
                  settlements, and where claims commonly get underpaid. We don't approach
                  insurance as an adversary—we approach it as a process that works best when
                  everyone has accurate information.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Understanding the Claims Process
                </h3>
                <p className="text-gray-700 mb-6">
                  Property insurance claims follow a predictable process, but outcomes vary
                  dramatically based on documentation, scope accuracy, and effective communication.
                  The claim begins when you report loss to your carrier. They assign an adjuster
                  who inspects the property, determines coverage, and develops an initial estimate.
                  This initial estimate often forms the basis for negotiations.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p className="text-gray-700 mb-6">
                  The challenge is that initial estimates are prepared before restoration begins—
                  before walls are opened, before systems are tested, before hidden damage is
                  revealed. That's why the supplement process exists. When additional damage is
                  discovered during repairs, contractors submit supplement requests with documentation.
                  Well-documented supplements are typically approved; poorly documented ones are denied.
                </p>
              </FadeIn>

              <FadeIn delay={0.5}>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Our Role in Your Claim
                </h3>
                <p className="text-gray-700 mb-6">
                  We begin by thoroughly documenting existing damage—photographs, moisture readings,
                  measurements, and detailed written descriptions. This documentation supports your
                  claim from first report through final payment. We develop comprehensive repair
                  scopes using Xactimate, the same estimating software most carriers use, ensuring
                  apples-to-apples comparison.
                </p>
              </FadeIn>

              <FadeIn delay={0.6}>
                <p className="text-gray-700 mb-6">
                  When your adjuster inspects, we're there to walk the property together. We point
                  out damage that might be missed, explain repair methods, and ensure the adjuster
                  understands the full scope needed for proper restoration. This collaborative
                  approach typically results in better initial estimates and fewer disputes.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Claims Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Insurance Claims Support Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive support throughout the insurance restoration process,
                from initial documentation through final settlement.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {claimsServices.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The Insurance Restoration Process
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Report Loss to Your Insurance",
                  description: "Contact your insurance company to report the loss. Get a claim number and assigned adjuster contact information.",
                },
                {
                  step: "2",
                  title: "Contact FCS for Assessment",
                  description: "We assess damage, document conditions, and develop a comprehensive scope—ideally before the adjuster visit.",
                },
                {
                  step: "3",
                  title: "Joint Adjuster Inspection",
                  description: "We meet with your adjuster, walk the property together, and ensure all damage is identified and documented.",
                },
                {
                  step: "4",
                  title: "Estimate Comparison & Negotiation",
                  description: "Compare adjuster's estimate with our assessment. Negotiate discrepancies with supporting documentation.",
                },
                {
                  step: "5",
                  title: "Begin Restoration Work",
                  description: "Once scope is agreed, restoration begins. We document all work and photograph hidden damage as discovered.",
                },
                {
                  step: "6",
                  title: "Supplement Claims as Needed",
                  description: "Submit supplement claims for additional damage discovered during restoration, with full documentation.",
                },
                {
                  step: "7",
                  title: "Final Inspection & Payment",
                  description: "Complete restoration, final walkthrough, and collect any remaining claim payments including recoverable depreciation.",
                },
              ].map((item, index) => (
                <FadeIn key={item.step} delay={index * 0.1}>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Insurance Claims FAQs
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Common questions about insurance restoration claims, the process,
                and how we support property owners.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <InternalLinks
              title="Related Services"
              links={relatedLinks}
            />
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Get Expert Insurance Claim Support
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Don't navigate the insurance claims process alone. Contact FCS for
                  expert guidance, thorough documentation, and advocacy to ensure
                  you receive fair compensation for your property damage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
                <p className="text-gray-400 mt-4">
                  {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Discuss Your Claim</h3>
                <HighLevelForm height={450} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
