import type { Metadata } from "next";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { InternalLinks } from "@/components/InternalLinks";
import { HighLevelForm } from "@/components/HighLevelForm";
import { BUSINESS_INFO } from "@/lib/constants";
import Link from "next/link";
import { CheckCircle, Phone, FileText, Calculator, ClipboardCheck, Shield } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/insurance/certified-estimating/' },
  title: "Certified Estimating | Xactimate Insurance Estimates | FCS Tampa",
  description: "Xactimate-certified construction estimates for insurance claims. Detailed, defensible documentation that ensures fair settlements. Tampa Bay's trusted estimating experts.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Insurance", href: "/insurance/" },
  { name: "Certified Estimating", href: "/insurance/certified-estimating/" },
];

const faqs = [
  {
    question: "What is Xactimate and why does it matter?",
    answer: "Xactimate is the industry-standard software used by insurance companies to estimate repair costs. When your estimate is prepared in Xactimate by a certified estimator, it speaks the same language as the insurance adjuster's estimate—making comparison, negotiation, and settlement more straightforward.",
  },
  {
    question: "How detailed are your estimates?",
    answer: "Our estimates include line-by-line breakdowns of all necessary repairs, material specifications, labor costs, and overhead. We document every element of damage with photos, measurements, and industry-standard descriptions that insurance companies recognize and accept.",
  },
  {
    question: "Can your estimate help with a denied claim?",
    answer: "Yes. A professional, certified estimate often reveals damage the original adjuster missed. Our detailed documentation provides the evidence needed for appeals, appraisals, or litigation. Many denied claims are reversed when supported by proper estimation.",
  },
  {
    question: "Do you provide estimates for appraisal or litigation?",
    answer: "Absolutely. Our estimates are designed to withstand scrutiny in appraisal proceedings, arbitration, and court. We provide detailed supporting documentation and can serve as expert witnesses to defend our estimates.",
  },
  {
    question: "How quickly can you provide an estimate?",
    answer: "For typical claims, we provide initial estimates within 5-10 business days of inspection. Complex commercial properties may require additional time. Rush services are available for urgent situations.",
  },
  {
    question: "What's included in your estimating service?",
    answer: "Our service includes on-site inspection, complete damage documentation with photos, Xactimate estimate preparation, written scope of work, and review meeting to discuss findings. We also include revisions if additional damage is discovered.",
  },
];

const services = [
  {
    icon: ClipboardCheck,
    title: "Xactimate Estimates",
    description: "Industry-standard software that insurance companies recognize and accept.",
  },
  {
    icon: FileText,
    title: "Detailed Documentation",
    description: "Photos, measurements, and specifications that support every line item.",
  },
  {
    icon: Calculator,
    title: "Accurate Pricing",
    description: "Tampa Bay market rates that reflect true repair costs, not lowball figures.",
  },
  {
    icon: Shield,
    title: "Defensible Work",
    description: "Estimates that stand up to adjuster review, appraisal, and litigation.",
  },
];

const relatedLinks = [
  { href: "/insurance/", label: "Insurance Services Overview" },
  { href: "/insurance/building-consultant/", label: "Building Consultant" },
  { href: "/insurance/appraisal-arbitration/", label: "Appraisal & Arbitration" },
  { href: "/expert-witness/", label: "Expert Witness" },
];

export default function CertifiedEstimatingPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Certified Estimating Services"
        serviceDescription="Xactimate-certified construction estimates for insurance claims. Detailed, defensible documentation that ensures fair settlements throughout Tampa Bay."
        minPrice="500"
      serviceCategories={["Xactimate Estimates","Loss Quantification","Scope Documentation","Supplemental Claims"]}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-repeat" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb items={breadcrumbItems} className="mb-8 text-gray-300" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 px-4 py-2 rounded-full mb-6">
              <FileText className="w-5 h-5 text-blue-400" />
              <span className="text-blue-200 font-medium">Xactimate Certified</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Certified Estimating
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Professional Xactimate estimates that insurance companies recognize. 
              Detailed documentation that ensures you receive fair compensation for your damage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-gray-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 border border-white/30"
              >
                Request Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Estimating Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-brand-green/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-brand-green-dark" />
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
            <h2>Why Certified Xactimate Estimates Matter for Insurance Claims</h2>
            <p>
              Insurance companies base settlements on estimates—specifically, Xactimate estimates. Xactimate is the industry-standard software used by approximately 80% of insurance carriers to price property damage claims. When your contractor provides a handwritten estimate or uses different software, the insurance adjuster must "translate" that into their system—often resulting in missing items, reduced quantities, or lower pricing.
            </p>
            <p>
              A professional, certified Xactimate estimate speaks the same language as the insurance company's own documentation. Claims process faster, disputes are minimized, and when disagreements arise, both parties are working from the same foundation.
            </p>

            <h3>The Problem with Insurance Company Estimates</h3>
            <p>
              Insurance adjusters are trained to minimize payouts—it's built into their job performance metrics. Common problems with adjuster estimates include:
            </p>
            <ul>
              <li><strong>Missed Damage:</strong> Adjusters often spend 30-60 minutes on site for properties that require hours of thorough inspection. Hidden damage behind walls, under flooring, or in attic spaces frequently goes undocumented.</li>
              <li><strong>Outdated Pricing:</strong> Insurance companies use regional pricing databases that may lag behind actual market rates, especially during high-demand periods after major storms.</li>
              <li><strong>Improper Depreciation:</strong> Florida law has specific rules about what can and cannot be depreciated. Adjusters frequently apply depreciation to items that shouldn't be reduced, including labor on certain repairs.</li>
              <li><strong>Missing Code Upgrades:</strong> The Florida Building Code requires certain upgrades when repairs exceed specific thresholds. Insurance policies typically cover these code-required improvements, but adjusters often fail to include them.</li>
              <li><strong>Incomplete Scope:</strong> Related damage is frequently excluded—for example, water damage is noted but the mold testing and remediation that Florida's humidity demands is omitted.</li>
            </ul>

            <h3>The FCS Certified Estimating Advantage</h3>
            <p>
              Florida Construction Specialists combines Xactimate certification with four decades of actual construction experience. This dual expertise means our estimates reflect both insurance industry standards and real-world construction costs.
            </p>
            <ul>
              <li><strong>Xactimate Level 2 Certified:</strong> Our estimators have completed advanced training in Xactimate software, understanding not just how to use it, but how to maximize its capabilities for complete, accurate estimates.</li>
              <li><strong>Construction Background:</strong> Every estimate is informed by 40+ years of building, repairing, and restoring commercial and residential properties. We know what repairs actually cost because we perform them.</li>
              <li><strong>Tampa Bay Market Rates:</strong> We use current local pricing that reflects what qualified Tampa Bay contractors actually charge—not theoretical national averages.</li>
              <li><strong>Code Compliance Expertise:</strong> We identify code-required upgrades that insurance should cover, including hurricane protection standards, electrical upgrades, and ADA compliance for commercial properties.</li>
              <li><strong>Complete Documentation:</strong> Every line item is supported by photographs, measurements, manufacturer specifications, and current pricing data.</li>
            </ul>

            <h3>When You Need Professional Certified Estimates</h3>
            <p>
              Professional estimates serve different purposes throughout the claims process:
            </p>
            <ul>
              <li><strong>Initial Claim Submission:</strong> Starting with an accurate, professional estimate sets the right expectations and often results in faster, fairer initial settlements.</li>
              <li><strong>Disputed Claims:</strong> When the insurance company's estimate falls significantly short, a competing certified estimate provides the documentation needed for negotiation.</li>
              <li><strong>Supplemental Claims:</strong> As repairs progress, additional damage is often discovered. Professional documentation of supplements ensures this additional damage is covered.</li>
              <li><strong>Appraisal Support:</strong> In appraisal proceedings, estimates must withstand scrutiny from both the insurance company's appraiser and a neutral umpire. Our estimates are designed for this level of examination.</li>
              <li><strong>Litigation Documentation:</strong> If claims proceed to court, our estimates serve as defensible documentation that can be presented as evidence and explained by our expert witnesses.</li>
            </ul>

            <h3>What's Included in Our Estimating Service</h3>
            <p>
              A complete FCS certified estimate includes:
            </p>
            <ul>
              <li><strong>Comprehensive On-Site Inspection:</strong> We spend the time necessary to document all damage—not a quick drive-by, but thorough examination including use of moisture meters, thermal imaging when appropriate, and inspection of hidden areas.</li>
              <li><strong>Photographic Documentation:</strong> Extensive photos of all damage, referenced to estimate line items, creating a visual record that supports every element of the estimate.</li>
              <li><strong>Full Xactimate Estimate:</strong> Line-by-line breakdown in the industry-standard format, using current Tampa Bay pricing and appropriate material specifications.</li>
              <li><strong>Written Scope of Work:</strong> Plain-language description of repairs needed, supplementing the technical Xactimate estimate for clarity.</li>
              <li><strong>Review Meeting:</strong> We walk through findings with you, explaining damage documented and repairs needed, and answering questions before submitting to insurance.</li>
              <li><strong>Revision Capability:</strong> If additional damage is discovered or circumstances change, we update the estimate accordingly.</li>
            </ul>

            <h3>Estimate Turnaround Times</h3>
            <p>
              For typical residential and commercial claims, FCS provides initial estimates within 5-10 business days of inspection. Complex commercial properties, multi-building projects, or claims involving extensive documentation may require additional time. Rush services are available for urgent situations, including properties with ongoing damage or impending legal deadlines.
            </p>

            <h3>Large Loss Estimating for Commercial Properties</h3>
            <p>
              Commercial property claims present unique challenges that require specialized expertise. FCS handles large loss estimates ranging from $225,000 to $45 million, including:
            </p>
            <ul>
              <li>Multi-story office buildings and commercial complexes</li>
              <li>Retail centers and shopping plazas</li>
              <li>Industrial facilities and warehouses</li>
              <li>Hospitality properties including hotels and restaurants</li>
              <li>Healthcare facilities and medical offices</li>
              <li>Educational institutions</li>
              <li>Houses of worship and religious facilities</li>
              <li>Multi-family residential complexes</li>
            </ul>
            <p>
              Large loss claims require not just accurate estimates, but documentation that addresses business interruption, code compliance, accessibility requirements, and the specialized systems found in commercial construction.
            </p>

            <h3>Start with the Right Documentation</h3>
            <p>
              The outcome of your insurance claim often depends on the quality of your documentation. A certified Xactimate estimate from FCS provides the professional foundation your claim needs—whether you're filing initially, disputing an unfair settlement, or preparing for appraisal or litigation.
            </p>
            <p>
              Contact Florida Construction Specialists for a professional estimate that accurately reflects your damage and repair costs. We serve property owners throughout Tampa Bay, including Tampa, St. Petersburg, Clearwater, Brandon, and surrounding Hillsborough, Pinellas, and Pasco County communities.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-green-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Certified Estimate?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get professional Xactimate estimates that support your insurance claim.
          </p>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-gray-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg"
          >
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
