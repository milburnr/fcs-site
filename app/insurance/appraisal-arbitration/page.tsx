import type { Metadata } from "next";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { InternalLinks } from "@/components/InternalLinks";
import { HighLevelForm } from "@/components/HighLevelForm";
import { BUSINESS_INFO } from "@/lib/constants";
import Link from "next/link";
import { Phone, Scale, Shield, FileText, Users, Gavel } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/insurance/appraisal-arbitration/' },
  title: "Appraisal & Arbitration | Insurance Claim Disputes | FCS Tampa",
  description: "Insurance claim appraisal and arbitration services in Tampa Bay. Resolve disputed claims and ensure fair settlements. Expert representation for property owners.",
  keywords: "insurance appraisal Tampa, claim arbitration Florida, disputed insurance claim, appraisal clause",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Insurance", href: "/insurance/" },
  { name: "Appraisal & Arbitration", href: "/insurance/appraisal-arbitration/" },
];

const faqs = [
  {
    question: "What is the insurance appraisal process?",
    answer: "Appraisal is a dispute resolution process outlined in most insurance policies. When you and your insurer disagree on claim value, each party selects an appraiser. The two appraisers select an umpire. If the appraisers can't agree, the umpire makes binding decisions. It's faster and less expensive than litigation.",
  },
  {
    question: "When should I invoke appraisal?",
    answer: "Consider appraisal when your claim is significantly underpaid (usually 20%+ difference), when the insurer refuses to include legitimate damage, or when negotiations have stalled. Appraisal addresses the amount of loss, not coverage disputes—those require different remedies.",
  },
  {
    question: "How is appraisal different from arbitration?",
    answer: "Appraisal determines the amount of loss under an existing claim. Arbitration can address broader disputes including coverage questions and bad faith claims. Many policies require appraisal before arbitration or litigation for amount disputes.",
  },
  {
    question: "Do I need a construction expert for appraisal?",
    answer: "Yes—appraisers should understand construction costs. FCS provides expert construction knowledge to the appraisal process, ensuring your appraiser understands true repair costs, not just insurance company pricing databases.",
  },
  {
    question: "What are typical appraisal outcomes?",
    answer: "Property owners frequently recover 30-50% more than the original insurance offer through appraisal. The process validates legitimate damage and costs that adjusters initially missed or undervalued.",
  },
  {
    question: "How long does appraisal take?",
    answer: "Typical appraisals take 30-90 days from demand to award, depending on complexity and cooperation. It's significantly faster than litigation, which can take years.",
  },
];

const services = [
  { icon: Scale, title: "Appraisal Support", description: "Expert support for the insurance appraisal process with construction expertise." },
  { icon: Users, title: "Appraiser Services", description: "Serve as your appraiser with deep construction and estimating knowledge." },
  { icon: FileText, title: "Documentation", description: "Detailed estimates and documentation to support your appraisal position." },
  { icon: Gavel, title: "Arbitration Support", description: "Expert testimony and documentation for arbitration proceedings." },
];

const relatedLinks = [
  { href: "/insurance/", label: "Insurance Services Overview" },
  { href: "/insurance/certified-estimating/", label: "Certified Estimating" },
  { href: "/insurance/expert-witness/", label: "Expert Witness" },
  { href: "/insurance/building-consultant/", label: "Building Consultant" },
];

export default function AppraisalArbitrationPage() {
  return (
    <>
      <LocalBusinessSchema service="Appraisal & Arbitration" />
      <ServiceSchema
        serviceName="Appraisal & Arbitration Services"
        serviceDescription="Insurance claim appraisal and arbitration services in Tampa Bay. Expert construction knowledge to resolve disputed claims and ensure fair settlements."
        minPrice="2500"
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
              <Scale className="w-5 h-5 text-blue-400" />
              <span className="text-blue-200 font-medium">Dispute Resolution Experts</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Appraisal & Arbitration
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              When insurance companies undervalue your claim, we fight for fair settlement 
              through appraisal and arbitration—backed by 40+ years of construction expertise.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Appraisal & Arbitration Services</h2>
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
            <h2>Fighting for Fair Insurance Settlements in Tampa Bay</h2>
            <p>
              Insurance companies routinely undervalue claims—it's built into their business model. When your property suffers significant damage and the insurance settlement falls far short of actual repair costs, the appraisal process provides a path to fair settlement without expensive, lengthy litigation. Florida Construction Specialists brings four decades of construction expertise to help property owners navigate this critical dispute resolution process.
            </p>

            <h3>Understanding the Insurance Appraisal Process</h3>
            <p>
              Most property insurance policies include an appraisal clause that allows either party to invoke a binding dispute resolution process when they disagree on the value of a loss. This process is specifically designed to address disputes over the <strong>amount</strong> of the claim—not coverage questions or bad faith issues, which require different legal remedies.
            </p>
            <p>
              When appraisal is invoked, the process follows a structured format:
            </p>
            <ul>
              <li><strong>Appraiser Selection:</strong> Each party (the policyholder and the insurance company) selects their own appraiser—someone with expertise in construction costs and property damage valuation.</li>
              <li><strong>Umpire Selection:</strong> The two appraisers jointly select a neutral umpire who will break any deadlocks.</li>
              <li><strong>Independent Assessment:</strong> Each appraiser independently evaluates the damage and prepares their estimate of the loss.</li>
              <li><strong>Negotiation:</strong> The appraisers meet to compare findings and attempt to reach agreement on the loss amount.</li>
              <li><strong>Umpire Decision:</strong> If the appraisers cannot agree, the umpire reviews both positions and makes a binding decision. Any two of the three (the two appraisers or one appraiser plus the umpire) can establish the final award.</li>
            </ul>

            <h3>When to Invoke the Appraisal Clause</h3>
            <p>
              Appraisal is a powerful tool, but timing matters. Consider invoking appraisal when:
            </p>
            <ul>
              <li><strong>Significant Underpayment:</strong> The insurance company's settlement offer is 20% or more below your documented repair costs. Smaller disputes may not justify the costs of the appraisal process.</li>
              <li><strong>Excluded Damage:</strong> The adjuster's estimate omits legitimate damage that should be covered under your policy—for example, failing to include water damage behind walls or structural damage hidden from view.</li>
              <li><strong>Stalled Negotiations:</strong> Multiple rounds of negotiation have failed to produce meaningful movement from the insurance company.</li>
              <li><strong>Depreciation Disputes:</strong> The insurer has applied excessive depreciation to materials or labor that shouldn't be depreciated under Florida law.</li>
              <li><strong>Pricing Disagreements:</strong> The insurance company's unit pricing is significantly below actual market rates in the Tampa Bay area.</li>
            </ul>

            <h3>The FCS Advantage in Appraisal Proceedings</h3>
            <p>
              Appraisal is ultimately about construction costs—and that's exactly what Florida Construction Specialists knows best. Unlike desk adjusters using national pricing databases, we know what repairs actually cost in Tampa Bay because we perform them daily. Our participation in the appraisal process brings:
            </p>
            <ul>
              <li><strong>Xactimate Certified Estimating:</strong> We use the same software insurance companies rely on, but with Tampa Bay market pricing—not outdated national averages.</li>
              <li><strong>Field Experience:</strong> Our estimates reflect real-world conditions, labor requirements, and material costs from over 40 years of commercial and residential construction.</li>
              <li><strong>Code Compliance Knowledge:</strong> We identify code-required upgrades that insurance companies often miss or improperly exclude.</li>
              <li><strong>Detailed Documentation:</strong> Every line item is supported by photographs, measurements, and current pricing data that withstands scrutiny.</li>
              <li><strong>Expert Testimony:</strong> When needed, our professionals can serve as expert witnesses to explain construction realities to umpires unfamiliar with building practices.</li>
            </ul>

            <h3>Arbitration: When Appraisal Isn't Enough</h3>
            <p>
              While appraisal addresses the amount of loss, some disputes require the broader scope of arbitration. Arbitration may be appropriate when:
            </p>
            <ul>
              <li>The insurer is denying coverage entirely rather than just undervaluing the claim</li>
              <li>Bad faith practices have complicated the claims process</li>
              <li>Policy interpretation questions need resolution</li>
              <li>The appraisal process has been frustrated by the insurance company's non-cooperation</li>
            </ul>
            <p>
              FCS provides expert support for arbitration proceedings, including detailed damage assessments, cost documentation, and expert testimony to help property owners establish the full extent of their losses.
            </p>

            <h3>What to Expect: Appraisal Timeline and Outcomes</h3>
            <p>
              The appraisal process typically takes 30-90 days from demand to award, depending on the complexity of the damage and the cooperation of all parties. This is significantly faster than litigation, which can drag on for years in Florida's court system.
            </p>
            <p>
              Property owners frequently recover 30-50% more through appraisal than the insurance company's original offer. The process works because it requires detailed examination of actual damage by qualified construction professionals—not the quick drive-by inspections that often characterize initial insurance adjustments.
            </p>

            <h3>Costs and Considerations</h3>
            <p>
              Each party pays for their own appraiser, and the cost of the umpire is typically split. While there are costs involved, the potential recovery often far exceeds these expenses—particularly for large loss claims where insurance companies have the most incentive to minimize payments.
            </p>
            <p>
              FCS can advise whether your claim is a good candidate for appraisal based on the gap between the insurance offer and actual repair costs. Not every dispute justifies the process, but when the numbers support it, appraisal provides a clear path to fair settlement.
            </p>

            <h3>Tampa Bay Insurance Claim Disputes: Local Expertise Matters</h3>
            <p>
              Insurance companies often use adjusters from outside Florida who don't understand local construction costs, building code requirements, or the unique challenges of Tampa Bay's climate. FCS knows Tampa Bay construction:
            </p>
            <ul>
              <li>Hurricane-resistant construction requirements under the Florida Building Code</li>
              <li>Local labor rates and material availability</li>
              <li>Humidity and moisture considerations in repair specifications</li>
              <li>Permitting requirements and inspection standards</li>
              <li>Code upgrade costs that insurance should cover under Florida's Code Compliance provisions</li>
            </ul>
            <p>
              When your claim is underpaid, don't accept less than you deserve. Contact Florida Construction Specialists for a professional assessment of your situation and honest advice on whether appraisal or arbitration makes sense for your case.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Claim Underpaid?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let FCS help you through the appraisal process for a fair settlement.
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
