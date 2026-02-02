import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle, Shield, Clock, DollarSign, AlertTriangle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Balcony Reconstruction & Exterior Waterproofing | Tampa",
  description: "Expert balcony reconstruction and exterior waterproofing for Tampa Bay condos and high-rise buildings. SB 4-D compliant. Licensed engineers. Free estimates.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Balcony Reconstruction & Exterior Waterproofing", href: "/balcony-reconstruction-exterior-waterproofing/" },
];

const internalLinks = [
  { href: "/sb-4-d-compliance-tampa-bay-condos/", label: "SB 4-D Compliance Guide" },
  { href: "/condo-milestone-inspection-remediation/", label: "Milestone Inspection Services" },
  { href: "/condo-structural-reserve-study-repairs/", label: "Structural Reserve Studies" },
  { href: "/balcony-reconstruction/", label: "Balcony Reconstruction Services" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const faqItems = [
  {
    question: "What is Florida SB 4-D and how does it affect my condo building?",
    answer: "Senate Bill 4-D, also known as the Surfside Building Safety Act, requires mandatory milestone structural inspections for all condominium and cooperative buildings three stories or higher. Buildings must be inspected at 30 years (25 years if within 3 miles of the coast), with follow-up inspections every 10 years. Balconies are a primary focus of these inspections due to their exposure to the elements and structural importance."
  },
  {
    question: "How much does balcony reconstruction cost for a Tampa condo building?",
    answer: "Costs vary based on the scope of work, but typical ranges for Tampa Bay high-rise buildings include: minor repairs at $50-150 per square foot, moderate reconstruction at $150-300 per square foot, and full structural reconstruction at $300-500+ per square foot. A 100-unit building might budget $500,000 to $2 million for comprehensive balcony restoration with waterproofing."
  },
  {
    question: "How long does the balcony reconstruction process take?",
    answer: "Timeline depends on the scope and building size. For a typical high-rise condo with 50-100 balconies, expect 3-6 months for moderate reconstruction. Full structural replacement may take 6-12 months. We work in phases to minimize disruption to residents while maintaining safety protocols."
  },
  {
    question: "What waterproofing systems work best for Tampa Bay's climate?",
    answer: "For Tampa's salt air, humidity, and heavy rainfall, we recommend traffic-rated urethane membranes or hot-applied rubberized asphalt for balcony decks. These systems handle UV exposure, thermal cycling, and the foot traffic balconies receive. Fluid-applied membranes offer seamless protection, while sheet membranes provide consistent thickness for predictable performance."
  },
  {
    question: "Can balcony repairs be done without relocating residents?",
    answer: "In most cases, yes. We phase our work so residents can remain in their units during reconstruction. Individual balconies are typically completed in 3-5 days, and we provide temporary barriers and access restrictions for safety. Only in cases of severe structural deficiency would temporary relocation be recommended."
  }
];

const costData = [
  { service: "Milestone Structural Inspection (Phase 1)", range: "$3,000 - $8,000", notes: "Per building, required by SB 4-D" },
  { service: "Phase 2 Inspection (if required)", range: "$5,000 - $15,000", notes: "Invasive testing when issues found" },
  { service: "Minor Concrete Repair & Patching", range: "$50 - $150/sq ft", notes: "Spall repair, crack injection" },
  { service: "Waterproof Membrane Application", range: "$15 - $35/sq ft", notes: "Traffic-rated urethane or elastomeric" },
  { service: "Railing Replacement (Aluminum)", range: "$200 - $400/linear ft", notes: "Code-compliant, 42\" height" },
  { service: "Full Balcony Reconstruction", range: "$300 - $500/sq ft", notes: "Structural replacement, new waterproofing" },
  { service: "Tile or Paver Installation", range: "$25 - $60/sq ft", notes: "Over waterproof membrane" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Balcony Reconstruction & Exterior Waterproofing for Tampa Bay High-Rises"
        description="Comprehensive guide to balcony reconstruction and waterproofing for Florida condominiums, including SB 4-D compliance requirements and cost estimates."
        datePublished="2024-01-15"
        dateModified="2024-06-01"
      />
      <FAQSchema faqs={faqItems} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
            alt="Balcony reconstruction and waterproofing on Tampa high-rise"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Balcony Reconstruction & Exterior Waterproofing
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Protect your Tampa Bay high-rise investment with expert balcony restoration and waterproofing. SB 4-D compliant inspections and repairs from Florida's trusted commercial construction specialists.
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

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-xl text-gray-600 mb-6">
              Florida's coastal environment presents unique challenges for high-rise balcony structures. Salt air corrosion, intense UV exposure, hurricane-driven rain, and year-round humidity create a perfect storm that accelerates concrete deterioration and waterproofing failure. For Tampa Bay condominium associations and commercial property owners, proactive balcony maintenance isn't optional—it's essential for safety, compliance, and property value.
            </p>
            <p className="text-gray-600 mb-6">
              Following the tragic 2021 Surfside condominium collapse, Florida enacted Senate Bill 4-D (the Building Safety Act), mandating milestone structural inspections for all buildings three stories or higher. Balconies and exterior elevated structures are among the primary areas inspectors evaluate. Properties found with deficiencies face mandatory repair timelines and potential liability exposure.
            </p>
            <p className="text-gray-600 mb-8">
              At Florida Construction Specialists, we combine decades of commercial construction experience with deep expertise in Florida's building codes and coastal construction challenges. Our integrated approach addresses both structural reconstruction and waterproofing as a unified system—because lasting balcony repairs require solving both problems together.
            </p>
          </div>
        </div>
      </section>

      {/* Why Both Are Critical */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Why Reconstruction and Waterproofing Must Work Together
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
            Many property owners make the mistake of treating structural repairs and waterproofing as separate projects. This approach often leads to premature failure and repeated costly repairs.
          </p>
          <div className="max-w-3xl mx-auto mb-12">
            <Image
              src="/wp-content/uploads/2023/12/Old/railing-replacement-best-practices-condos.webp"
              alt="Modern commercial building exterior with curved glass balcony railings"
              width={800}
              height={500}
              className="rounded-lg w-full object-cover"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-12 h-12 text-brand-gold" />
                <h3 className="text-2xl font-bold text-brand-green-dark font-heading">The Water Damage Cycle</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Water infiltration is the root cause of most balcony structural failures in Florida. When waterproofing membranes fail, moisture penetrates the concrete substrate and reaches the embedded steel reinforcement (rebar). In Tampa Bay's salt-laden air, this moisture accelerates corrosion dramatically.
              </p>
              <p className="text-gray-600 mb-4">
                As rebar corrodes, it expands—creating internal pressure that cracks and "spalls" the concrete from the inside out. This creates more pathways for water, accelerating the cycle. Eventually, structural capacity is compromised.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Rust stains on concrete indicate active corrosion</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Cracking patterns often follow rebar locations</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Hollow sounds when tapped indicate delamination</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-12 h-12 text-brand-green" />
                <h3 className="text-2xl font-bold text-brand-green-dark font-heading">The Integrated Solution</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Effective balcony restoration addresses both the symptom (structural damage) and the cause (water infiltration) in a coordinated approach:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Structural assessment</strong> by licensed engineers to determine repair scope</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Concrete removal</strong> to expose and treat corroded reinforcement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Rebar treatment or replacement</strong> with corrosion-resistant materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Concrete restoration</strong> using polymer-modified repair mortars</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Waterproof membrane installation</strong> with proper slope and drainage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600"><strong>Wearing surface installation</strong> (tiles, pavers, or coating)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SB 4-D Compliance Section */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 font-heading">Florida SB 4-D: What Condo Associations Must Know</h2>
            <p className="text-xl text-white/90 mb-8">
              The 2022 Building Safety Act (Senate Bill 4-D) created mandatory inspection and reserve requirements that directly impact balcony maintenance planning.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-brand-gold" />
                  Inspection Timeline
                </h3>
                <ul className="space-y-2 text-white/90">
                  <li>• <strong>30 years from Certificate of Occupancy</strong> for initial milestone inspection</li>
                  <li>• <strong>25 years</strong> if building is within 3 miles of the coastline</li>
                  <li>• <strong>Every 10 years</strong> thereafter for subsequent inspections</li>
                  <li>• Buildings already past threshold must complete inspections by <strong>December 31, 2024</strong></li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-brand-gold" />
                  Reserve Requirements
                </h3>
                <ul className="space-y-2 text-white/90">
                  <li>• <strong>Structural Integrity Reserve Studies (SIRS)</strong> now mandatory</li>
                  <li>• Balconies must be included in reserve calculations</li>
                  <li>• <strong>No more waiving reserves</strong> for structural components</li>
                  <li>• Associations must fully fund reserves by 2025 deadline</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-brand-gold/20 border border-brand-gold rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Non-Compliance Consequences</h3>
              <p className="text-white/90">
                Failure to complete required inspections or address identified deficiencies can result in building condemnation, personal liability for board members, and inability to sell units. The Florida DBPR actively tracks compliance and enforces deadlines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waterproofing Systems */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Commercial Waterproofing Systems for High-Rise Balconies
            </h2>
            <p className="text-gray-600 mb-8">
              Not all waterproofing systems are appropriate for balcony applications. Balconies require traffic-rated membranes that can withstand foot traffic, furniture, and thermal movement while maintaining their waterproof integrity for decades.
            </p>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">Traffic-Rated Urethane Membranes</h3>
                <p className="text-gray-600 mb-3">
                  The industry standard for high-rise balcony waterproofing. Fluid-applied urethane systems create a seamless, flexible membrane that bonds directly to the concrete substrate. These systems accommodate building movement and resist UV degradation.
                </p>
                <ul className="grid md:grid-cols-2 gap-2">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-green" />
                    Seamless application, no joints to fail
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-green" />
                    15-20 year typical lifespan
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-green" />
                    Can be top-coated for color/slip resistance
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-green" />
                    Compatible with tile or paver overlays
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">Hot-Applied Rubberized Asphalt</h3>
                <p className="text-gray-600 mb-3">
                  A premium option for new construction or full reconstruction projects. Applied hot, these membranes self-heal minor punctures and provide exceptional durability in Florida's demanding climate.
                </p>
                <ul className="grid md:grid-cols-2 gap-2">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-green" />
                    Self-healing properties
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-green" />
                    20-30 year typical lifespan
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-green" />
                    Excellent adhesion to concrete
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-green" />
                    Requires protection board overlay
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">Sheet Membrane Systems</h3>
                <p className="text-gray-600 mb-3">
                  Pre-manufactured sheets provide consistent thickness and predictable performance. Ideal for projects where quality control is paramount. Available in various thicknesses to match project requirements.
                </p>
                <ul className="grid md:grid-cols-2 gap-2">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-green" />
                    Factory-controlled thickness
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-green" />
                    Faster installation in good weather
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-green" />
                    Proven track record in commercial applications
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-green" />
                    Seams require careful detailing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Tampa Bay Balcony Reconstruction Cost Guide
            </h2>
            <p className="text-gray-600 mb-8">
              Costs vary significantly based on scope, building access, and existing conditions. These ranges reflect 2024 pricing for commercial and high-rise condominium projects in the Tampa Bay area.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Service</th>
                    <th className="px-6 py-4 text-left font-heading">Price Range</th>
                    <th className="px-6 py-4 text-left font-heading">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {costData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.service}</td>
                      <td className="px-6 py-4 text-brand-green-dark font-bold">{row.range}</td>
                      <td className="px-6 py-4 text-gray-600">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 italic">
              * Estimates are for planning purposes. Actual costs depend on building-specific conditions, access requirements, and scope of work. Contact us for a detailed project assessment and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Our Balcony Reconstruction Process
            </h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">Comprehensive Assessment</h3>
                  <p className="text-gray-600">Our licensed engineers conduct thorough inspections including visual assessment, sounding surveys, and invasive testing where needed. We document existing conditions and identify all areas requiring attention to develop an accurate scope of work.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">Engineering & Design</h3>
                  <p className="text-gray-600">We develop detailed repair specifications that address both structural deficiencies and waterproofing failures. Our designs meet Florida Building Code requirements and optimize for long-term durability in Tampa Bay's coastal environment.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">Phased Construction</h3>
                  <p className="text-gray-600">We execute repairs in phases to minimize resident disruption. Typical sequence: concrete removal and rebar treatment, structural repairs, waterproofing membrane installation, and finish surface application. Safety barriers protect residents throughout.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">Quality Assurance & Documentation</h3>
                  <p className="text-gray-600">We provide complete documentation for SB 4-D compliance, including engineer-certified completion reports. Our warranty packages protect your investment, and we offer maintenance programs to extend system life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Services & Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Protect Your Building Investment
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't wait for SB 4-D deadlines or visible failures. Contact Florida Construction Specialists for a comprehensive balcony assessment and waterproofing consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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
