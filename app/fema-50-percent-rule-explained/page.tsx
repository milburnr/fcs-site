import type { Metadata } from "next";
import Link from "next/link";
import {
  Calculator,
  CheckCircle,
  AlertTriangle,
  FileText,
  ArrowRight,
  Phone,
  HelpCircle,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { BackToHub } from "@/components/BackToHub";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "FEMA 50% Rule Explained | Tampa Substantial Improvement Calculator | FCS",
  description:
    "Complete guide to the FEMA 50% Rule for Tampa Bay homeowners. Learn how substantial improvement calculations affect your flood zone renovation project.",
  keywords:
    "FEMA 50% rule Tampa, substantial improvement calculation, flood zone renovation, Tampa flood compliance, FEMA regulations Florida",
};

const calculationExamples = [
  {
    scenario: "Kitchen & Bath Remodel",
    homeValue: "$400,000",
    improvementCost: "$180,000",
    percentage: "45%",
    result: "Under threshold - Standard construction allowed",
    status: "pass",
  },
  {
    scenario: "Full Home Renovation",
    homeValue: "$350,000",
    improvementCost: "$200,000",
    percentage: "57%",
    result: "Exceeds threshold - Elevation required",
    status: "fail",
  },
  {
    scenario: "Hurricane Damage Repair",
    homeValue: "$500,000",
    improvementCost: "$275,000",
    percentage: "55%",
    result: "Exceeds threshold - Full compliance needed",
    status: "fail",
  },
];

const includedCosts = [
  "Structural modifications and additions",
  "Electrical system upgrades",
  "Plumbing renovations",
  "HVAC replacement or upgrades",
  "Kitchen and bathroom remodels",
  "Roof replacement (non-routine)",
  "Foundation work",
  "Interior finishing and drywall",
];

const excludedCosts = [
  "Landscaping and exterior fencing",
  "Detached garages and sheds",
  "Routine maintenance (painting, caulking)",
  "Plans, permits, and design fees*",
  "Furniture and moveable appliances",
  "Flood insurance premiums",
  "Land acquisition costs",
  "Code-required safety improvements**",
];

const faqs = [
  {
    question: "What happens if I exceed the 50% threshold?",
    answer:
      "If your improvement cost equals or exceeds 50% of your home's market value, the entire structure must be brought into compliance with current FEMA flood regulations. This typically means elevating the lowest floor to or above the Base Flood Elevation (BFE), which can add $50,000-$150,000+ to your project.",
  },
  {
    question: "How is market value determined for the 50% calculation?",
    answer:
      "Market value is determined by a professional appraisal of the structure only (not land value). The appraisal must be conducted by a licensed appraiser and reflect pre-improvement condition. Some jurisdictions use tax assessor values, but an independent appraisal is often more favorable.",
  },
  {
    question: "Does the 50% rule apply to hurricane damage repairs?",
    answer:
      "Yes, but it depends on the extent of damage. If your home is declared 'substantially damaged' (damage exceeding 50% of market value), full compliance is required regardless of repair costs. Flood damage repairs may have special provisions - consult your local floodplain manager.",
  },
  {
    question: "Can I phase my renovation to stay under 50%?",
    answer:
      "Yes, strategic phasing is legal and common. However, Tampa and Hillsborough County track cumulative improvements over a rolling period (typically 5-10 years depending on jurisdiction). All permits are tracked, so you cannot simply split one project into separate permits.",
  },
  {
    question: "What flood zones does the 50% rule apply to?",
    answer:
      "The 50% rule applies to all Special Flood Hazard Areas (SFHAs), including zones AE, AO, AH, VE, and V. Homes in X zones (shaded or unshaded) are generally not subject to the rule, but elevation can still reduce flood insurance costs significantly.",
  },
  {
    question: "How do I know my home's flood zone?",
    answer:
      "Check your property's flood zone using FEMA's Flood Map Service Center (msc.fema.gov) or contact your local floodplain administrator. Tampa residents can also check through Hillsborough County's property appraiser website. We can help interpret your flood zone requirements during consultation.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Fema 50 Percent Rule Explained", href: "/fema-50-percent-rule-explained/" },
];


const internalLinks = [
  { href: "/services/", label: "Our Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/about/", label: "About Florida Construction Specialists" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function FEMA50PercentRulePage() {
  const breadcrumbItems = [
    { name: "Residential Services", href: "/residential/" },
    { name: "FEMA Compliance", href: "/residential/fema-compliance/" },
    { name: "50% Rule Explained", href: "/fema-50-percent-rule-explained/" },
  ];

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <LocalBusinessSchema
        schemaType="HomeAndConstructionBusiness"
        service="FEMA 50% Rule Compliance"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="FEMA Substantial Improvement Compliance"
        serviceDescription="Expert guidance on FEMA 50% rule calculations and flood zone construction compliance in Tampa Bay"
        minPrice="500"
      />
      <ArticleSchema
        headline="FEMA 50% Rule Explained | Tampa Substantial Improvement Calculator"
        description="Complete guide to the FEMA 50% Rule for Tampa Bay homeowners. Learn how substantial improvement calculations affect your flood zone renovation project."
        datePublished="2024-03-01"
        dateModified="2025-01-15"
        slug="/fema-50-percent-rule-explained/"
      />
      <FAQSchema faqs={faqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumb items={breadcrumbItems} />

      <div className="container-custom py-8">
        <BackToHub silo="residential" />
      </div>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-brand-gold via-brand-gold-dark to-brand-gold">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="w-10 h-10 text-white" />
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-bold">
                FEMA COMPLIANCE GUIDE
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              The FEMA 50% Rule Explained: What Tampa Homeowners Must Know
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Before you renovate your Tampa Bay home, understand how the FEMA
              Substantial Improvement rule could require you to elevate your
              entire house. This guide breaks down the calculation, exceptions,
              and strategies to stay compliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-green-dark text-white font-bold rounded-full hover:bg-brand-green transition-all"
              >
                Get 50% Rule Analysis
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is the 50% Rule */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-6">
              What is the FEMA 50% Rule?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                The <strong>FEMA 50% Rule</strong>, officially known as the{" "}
                <strong>Substantial Improvement Rule</strong>, is a federal
                regulation enforced by local governments in flood-prone areas.
                It states:
              </p>
              <div className="bg-brand-gold-bg border-l-4 border-brand-gold p-6 rounded-r-lg mb-6">
                <p className="text-lg text-gray-800 font-medium italic">
                  &quot;If the cost of reconstruction, rehabilitation, addition,
                  or other improvement equals or exceeds 50% of the market value
                  of the structure, the building must be brought into compliance
                  with current flood regulations.&quot;
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  — 44 CFR 59.1, National Flood Insurance Program
                </p>
              </div>
              <p className="text-gray-600 mb-6">
                For Tampa Bay homeowners in flood zones, this means a major
                renovation could trigger the requirement to{" "}
                <strong>elevate your entire home</strong> to or above the Base
                Flood Elevation (BFE). This can add significant cost to your
                project—sometimes $75,000 to $200,000 or more.
              </p>
            </div>

            {/* The Formula */}
            <div className="bg-gray-50 rounded-xl p-8 mt-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                The 50% Calculation Formula
              </h3>
              <div className="bg-white rounded-lg p-6 mb-6">
                <p className="text-xl font-mono text-center text-brand-green-dark">
                  (Improvement Cost ÷ Market Value) × 100 = Substantial
                  Improvement %
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-brand-green-dark mb-2">
                    Improvement Cost
                  </h4>
                  <p className="text-gray-600 text-sm">
                    The total cost of all construction work, materials, labor,
                    and contractor overhead. This is based on permit
                    applications and contractor estimates.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-brand-green-dark mb-2">
                    Market Value
                  </h4>
                  <p className="text-gray-600 text-sm">
                    The value of the <em>structure only</em> (not land) before
                    improvements, determined by appraisal or tax assessment.
                    Land value is excluded.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculation Examples */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            Real-World 50% Rule Examples
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {calculationExamples.map((example, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-sm border-t-4 ${
                  example.status === "pass"
                    ? "border-green-500"
                    : "border-red-500"
                }`}
              >
                <h3 className="font-bold text-brand-green-dark mb-4">
                  {example.scenario}
                </h3>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Home Value:</span>
                    <span className="font-medium">{example.homeValue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Improvement Cost:</span>
                    <span className="font-medium">
                      {example.improvementCost}
                    </span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-gray-500">Percentage:</span>
                    <span
                      className={`font-bold ${
                        example.status === "pass"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {example.percentage}
                    </span>
                  </div>
                </div>
                <div
                  className={`p-3 rounded-lg text-sm ${
                    example.status === "pass"
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  {example.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Counts / What Doesn't */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            What Counts Toward the 50% Calculation?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-red-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-bold text-red-800">
                  Included in Calculation
                </h3>
              </div>
              <ul className="space-y-2">
                {includedCosts.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-green-800">
                  Excluded from Calculation
                </h3>
              </div>
              <ul className="space-y-2">
                {excludedCosts.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-4">
                *Some jurisdictions include permit fees. **Must be required by
                code enforcement, not voluntary upgrades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-6 text-center">
              Strategies to Stay Under 50%
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Working with an experienced contractor who understands FEMA
              regulations can help you maximize your renovation while staying
              compliant.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "1. Get a Pre-Project Appraisal",
                  description:
                    "An independent appraisal often yields a higher structure value than tax assessments, giving you more room under the 50% threshold. This is legal and commonly done.",
                },
                {
                  title: "2. Strategic Phasing Over Time",
                  description:
                    "If your total project exceeds 50%, consider phasing improvements over multiple years. Track the cumulative improvement period in your jurisdiction (typically 5-10 years).",
                },
                {
                  title: "3. Value Engineering",
                  description:
                    "Our team can help identify ways to reduce construction costs without sacrificing quality—every dollar saved increases your margin under the threshold.",
                },
                {
                  title: "4. Maximize Excluded Costs",
                  description:
                    "Shift budget toward landscaping, detached structures, and other excluded items. These improve your property without counting toward the 50%.",
                },
                {
                  title: "5. Consider Full Compliance",
                  description:
                    "Sometimes elevation is the right choice. Elevated homes have lower flood insurance premiums and higher resale value. We can provide cost-benefit analysis.",
                },
              ].map((strategy, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-brand-green-dark mb-2">
                    {strategy.title}
                  </h3>
                  <p className="text-gray-600">{strategy.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <HelpCircle className="w-8 h-8 text-brand-gold" />
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading">
                Frequently Asked Questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-gray-50 rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-bold text-brand-green-dark hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            Related Residential Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/residential/fema-compliance/"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <FileText className="w-8 h-8 text-brand-gold mb-3" />
              <h3 className="font-bold text-brand-green-dark mb-2">
                FEMA Compliance Services
              </h3>
              <p className="text-sm text-gray-600">
                Full-service FEMA compliance for Tampa Bay renovations
              </p>
            </Link>
            <Link
              href="/residential/waterfront-homes/"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <FileText className="w-8 h-8 text-brand-gold mb-3" />
              <h3 className="font-bold text-brand-green-dark mb-2">
                Waterfront Construction
              </h3>
              <p className="text-sm text-gray-600">
                Coastal resilience and seawall coordination
              </p>
            </Link>
            <Link
              href="/residential/"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <FileText className="w-8 h-8 text-brand-gold mb-3" />
              <h3 className="font-bold text-brand-green-dark mb-2">
                All Residential Services
              </h3>
              <p className="text-sm text-gray-600">
                Explore our full range of luxury home services
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gold">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-heading">
            Don&apos;t Let the 50% Rule Surprise You
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Before you start your renovation, get a professional 50% rule
            analysis. FCS has helped hundreds of Tampa Bay homeowners navigate
            FEMA compliance successfully.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-dark text-white font-bold rounded-full hover:bg-brand-green transition-all"
          >
            Schedule Free 50% Rule Consultation
          </Link>
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

    </>
  );
}