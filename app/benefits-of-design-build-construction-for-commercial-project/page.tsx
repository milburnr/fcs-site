import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, CheckCircle, Clock, DollarSign, Users, Shield, Zap, MessageSquare } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Benefits of Design-Build Construction for Commercial Projects | Tampa",
  description: "Discover why design-build construction delivers commercial projects faster, at lower cost, with fewer disputes. Learn how this integrated approach benefits Florida businesses.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Benefits of Design-Build Construction", href: "/benefits-of-design-build-construction-for-commercial-project/" },
];

const internalLinks = [
  { href: "/services/commercial/design-build/", label: "Our Design-Build Services" },
  { href: "/commercial-construction-stages-in-florida/", label: "Construction Stages Guide" },
  { href: "/avoid-commercial-construction-delays-in-florida/", label: "Avoiding Project Delays" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const benefits = [
  {
    icon: Clock,
    title: "Faster Project Delivery",
    stat: "33%",
    statLabel: "faster than design-bid-build",
    description: "Design and construction phases overlap instead of running sequentially. While architects finalize interior details, site work can already begin. This parallel approach compresses schedules significantly.",
  },
  {
    icon: DollarSign,
    title: "Lower Total Cost",
    stat: "6%",
    statLabel: "average cost savings",
    description: "Contractor input during design catches costly mistakes before they're built. Value engineering happens in real-time. And with one contract, there's no adversarial bidding that often leads to change orders.",
  },
  {
    icon: Shield,
    title: "Single Point of Responsibility",
    stat: "1",
    statLabel: "contract, one team",
    description: "No finger-pointing between designer and builder. When issues arise, your design-build team owns the solution. This accountability drives better outcomes and faster problem resolution.",
  },
  {
    icon: MessageSquare,
    title: "Better Communication",
    stat: "50%",
    statLabel: "fewer RFIs on average",
    description: "Designer and builder work as one team from day one. Questions get answered immediately in collaborative sessions rather than through formal RFI processes that can take weeks.",
  },
  {
    icon: Zap,
    title: "Reduced Risk",
    stat: "30%",
    statLabel: "fewer claims and disputes",
    description: "Studies show design-build projects have significantly fewer legal disputes and claims. When one team is responsible for everything, there's no one to blame but themselves.",
  },
  {
    icon: Users,
    title: "Early Cost Certainty",
    stat: "GMP",
    statLabel: "guaranteed maximum price",
    description: "With design-build, you can lock in a Guaranteed Maximum Price earlier in the process. This budget certainty helps with financing, planning, and decision-making.",
  },
];

const comparisonData = [
  { factor: "Design Duration", designBuild: "3-4 months", traditional: "4-6 months" },
  { factor: "Permitting", designBuild: "Concurrent with design", traditional: "After design complete" },
  { factor: "Construction Start", designBuild: "Design 60-70% complete", traditional: "Design 100% complete" },
  { factor: "Total Timeline", designBuild: "12-18 months", traditional: "18-24 months" },
  { factor: "Change Orders", designBuild: "Minimal", traditional: "Common" },
  { factor: "Cost Certainty", designBuild: "Early GMP", traditional: "After bidding" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Benefits of Design-Build Construction for Commercial Projects"
        description="Discover why design-build construction delivers commercial projects faster, at lower cost, with fewer disputes."
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
            alt="Design-build commercial construction in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Benefits of Design-Build Construction for Commercial Projects
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            One team. One contract. One point of responsibility. Discover why more Florida businesses are choosing design-build for their commercial construction projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* What is Design-Build */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">What is Design-Build?</h2>
            <p className="text-xl text-gray-600 mb-6">
              Design-build is a project delivery method where a single entity—the design-build team—provides both design and construction services under one contract. This contrasts with the traditional "design-bid-build" approach where you hire an architect, wait for complete drawings, then bid the project to contractors.
            </p>
            <p className="text-gray-600 mb-6">
              In design-build, architects, engineers, and builders collaborate from day one. The contractor provides construction expertise during design, catching buildability issues and cost problems before they become expensive change orders. The result: faster projects, lower costs, and fewer headaches.
            </p>
            <p className="text-gray-600 mb-8">
              According to the Design-Build Institute of America, design-build is now the fastest-growing delivery method in the U.S., representing over 45% of non-residential construction spending. Here's why.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-12 font-heading">
            6 Key Benefits of Design-Build
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <benefit.icon className="w-12 h-12 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{benefit.title}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-brand-green">{benefit.stat}</span>
                  <span className="text-sm text-gray-500">{benefit.statLabel}</span>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Design-Build vs. Traditional Delivery
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Factor</th>
                    <th className="px-6 py-4 text-left font-heading">Design-Build</th>
                    <th className="px-6 py-4 text-left font-heading">Traditional</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.factor}</td>
                      <td className="px-6 py-4 text-brand-green font-semibold">{row.designBuild}</td>
                      <td className="px-6 py-4 text-gray-600">{row.traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* When to Choose Design-Build */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              When is Design-Build the Right Choice?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-brand-green" />
                  Ideal For
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Projects with aggressive schedules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Owners who want early cost certainty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Complex projects requiring coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">First-time owners unfamiliar with construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Projects where innovation can add value</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">
                  Best Project Types
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Medical facilities and healthcare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Retail and restaurant buildouts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Office buildings and tenant improvements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Industrial and warehouse facilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Multi-family residential projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Design-Build Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Our Design-Build Process
            </h2>
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">
                At Florida Construction Specialists, we've refined our design-build process over hundreds of successful projects across Tampa Bay. Here's how we work:
              </p>
              
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">1. Discovery & Programming</h3>
              <p className="text-gray-600 mb-6">
                We start by understanding your business, goals, budget, and timeline. This isn't just about square footage—it's about how the space will support your operations, customer experience, and growth plans.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">2. Collaborative Design</h3>
              <p className="text-gray-600 mb-6">
                Our architects, engineers, and construction team work together to develop designs that are both aesthetically compelling and cost-effective to build. You're involved at every decision point.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">3. Guaranteed Maximum Price</h3>
              <p className="text-gray-600 mb-6">
                Once design reaches 60-70% completion, we provide a GMP that locks in your maximum cost. Any savings below this number can be shared or returned to you depending on contract terms.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">4. Fast-Track Construction</h3>
              <p className="text-gray-600 mb-6">
                We begin site work and early construction phases while interior design is finalized. This overlapping approach can shave months off your timeline.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">5. Seamless Delivery</h3>
              <p className="text-gray-600 mb-6">
                From final inspections to owner training, we ensure a smooth transition into your new space with comprehensive documentation and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Learn More"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Explore Design-Build?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss whether design-build is the right approach for your commercial project. Our team will provide an honest assessment and outline potential timelines and budgets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Consultation
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
