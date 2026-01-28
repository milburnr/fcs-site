import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, TrendingUp, Shield, Droplets, DollarSign, Clock, Building, Award } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, ArticleSchema, FAQSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Discover the Benefits of Exterior Waterproofing | Tampa Bay Condos",
  description: "Learn how exterior waterproofing protects Tampa Bay high-rises from structural damage, extends building life, and reduces long-term maintenance costs. SB 4-D compliance guide.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Benefits of Exterior Waterproofing", href: "/discover-the-benefits-of-exterior-waterproofing/" },
];

const internalLinks = [
  { href: "/balcony-reconstruction/", label: "Balcony Reconstruction Services" },
  { href: "/services/residential/exterior-waterproofing/", label: "Exterior Waterproofing Services" },
  { href: "/choosing-the-right-waterproofing-solution-your-ultimate-guide/", label: "Waterproofing Selection Guide" },
  { href: "/condo-balcony-inspection-requirements/", label: "SB4-D Compliance Requirements" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const faqItems = [
  {
    question: "How does exterior waterproofing protect building structures?",
    answer: "Exterior waterproofing creates a barrier that prevents moisture from reaching the concrete substrate and embedded steel reinforcement. In Florida's salt-air environment, moisture accelerates rebar corrosion, which causes concrete spalling and structural deterioration. Effective waterproofing interrupts this cycle, extending the building's service life by decades."
  },
  {
    question: "What ROI can condo associations expect from exterior waterproofing?",
    answer: "Studies show exterior waterproofing ROI of 3:1 to 5:1 over a 20-year period when comparing protected buildings to unprotected ones. The savings come from avoided structural repairs, reduced maintenance frequency, extended component life, and lower insurance costs. For a typical 100-unit high-rise, quality waterproofing can save $500,000-$1M in future repair costs."
  },
  {
    question: "Does exterior waterproofing help with SB 4-D compliance?",
    answer: "While waterproofing isn't specifically required by SB 4-D, the milestone inspection requirements mean that water-damaged structures will need remediation. Proactive waterproofing helps ensure your building passes inspections without costly emergency repairs. It also protects reserve funds by preventing the structural deterioration that triggers mandatory repairs."
  },
  {
    question: "How long does commercial exterior waterproofing last?",
    answer: "Quality commercial waterproofing systems last 15-30 years depending on the system type, exposure conditions, and maintenance. Traffic-rated urethane membranes typically provide 15-20 years of service. Hot-applied rubberized asphalt can exceed 25 years. Regular maintenance and timely repairs extend these lifespans significantly."
  },
  {
    question: "What areas of a high-rise need exterior waterproofing?",
    answer: "Critical waterproofing areas include: balconies and terraces, parking structure decks, plaza decks over occupied space, exterior walkways, pool decks, planter areas, and building envelope penetrations. The highest priority is horizontal surfaces that collect water and areas where failure would damage occupied spaces below."
  },
  {
    question: "Can exterior waterproofing reduce energy costs?",
    answer: "Yes. Moisture infiltration reduces insulation effectiveness and can increase cooling loads by 15-25% in affected areas. Waterproofing also enables additional insulation options and reduces the humidity load on HVAC systems. For Tampa Bay buildings, these energy savings can reach $1-3 per square foot annually in the most affected areas."
  }
];

const benefits = [
  {
    icon: Shield,
    title: "Structural Protection",
    description: "Prevents water-driven deterioration that threatens building integrity",
    details: [
      "Stops moisture from reaching steel reinforcement",
      "Prevents freeze-thaw damage (even in Florida, thermal cycling causes damage)",
      "Protects against salt chloride penetration in coastal areas",
      "Maintains concrete strength and durability over decades"
    ]
  },
  {
    icon: DollarSign,
    title: "Long-Term Cost Savings",
    description: "Investment in prevention costs far less than reactive repairs",
    details: [
      "Structural repairs cost 5-10x more than preventive waterproofing",
      "Reduces frequency of maintenance interventions",
      "Avoids emergency repair premiums and disruption costs",
      "Protects reserve funds from unexpected assessments"
    ]
  },
  {
    icon: TrendingUp,
    title: "Property Value Protection",
    description: "Well-maintained buildings command premium prices and lower insurance",
    details: [
      "Documented waterproofing program reassures buyers",
      "Supports competitive insurance rates",
      "Demonstrates proactive association management",
      "Helps maintain property values in competitive market"
    ]
  },
  {
    icon: Clock,
    title: "Extended Component Life",
    description: "Waterproofing extends the life of every protected building element",
    details: [
      "Concrete structures last 20-40% longer with proper protection",
      "Railings and hardware resist corrosion longer",
      "Finish materials maintain appearance longer",
      "Reduces lifecycle replacement costs"
    ]
  },
  {
    icon: Building,
    title: "SB 4-D Compliance Support",
    description: "Proactive waterproofing helps ensure successful inspections",
    details: [
      "Prevents the deterioration that triggers mandatory repairs",
      "Documents proactive maintenance for inspectors",
      "Supports reserve study assumptions",
      "Demonstrates board due diligence"
    ]
  },
  {
    icon: Award,
    title: "Improved Living Conditions",
    description: "Waterproofing problems affect resident quality of life",
    details: [
      "Eliminates water intrusion into units",
      "Prevents mold and mildew growth",
      "Reduces humidity-related discomfort",
      "Prevents staining and damage to interior finishes"
    ]
  }
];

const roiData = [
  { scenario: "No Waterproofing (Reactive)", year5: "$50,000", year10: "$180,000", year20: "$450,000", notes: "Emergency repairs, structural damage" },
  { scenario: "Economy Coating (Reapplied)", year5: "$45,000", year10: "$120,000", year20: "$280,000", notes: "3 coating cycles + repairs" },
  { scenario: "Premium Membrane System", year5: "$60,000", year10: "$80,000", year20: "$140,000", notes: "1 application + maintenance" },
];

const applicationPriority = [
  { area: "Balconies/Terraces", priority: "Critical", reason: "Direct exposure, water intrusion damages units below" },
  { area: "Parking Structure Decks", priority: "Critical", reason: "Traffic wear, salt/chemical exposure, large area" },
  { area: "Plaza Decks Over Occupied Space", priority: "Critical", reason: "Leaks directly impact occupied spaces" },
  { area: "Pool Decks", priority: "High", reason: "Chemical exposure, constant wet conditions" },
  { area: "Exterior Walkways", priority: "High", reason: "Safety concerns, traffic wear" },
  { area: "Planter Areas", priority: "High", reason: "Constant moisture, root intrusion potential" },
  { area: "Building Envelope Joints", priority: "Medium-High", reason: "Wind-driven rain, thermal movement" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Discover the Benefits of Exterior Waterproofing for Tampa Bay High-Rises"
        description="Comprehensive guide to the benefits of exterior waterproofing for Florida condominiums and commercial buildings, including cost analysis and SB 4-D compliance."
        datePublished="2024-02-01"
        dateModified="2024-06-01"
      />
      <FAQSchema faqs={faqItems} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
            alt="Protected balcony with professional waterproofing in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Discover the Benefits of Exterior Waterproofing
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Protect your Tampa Bay high-rise investment with professional exterior waterproofing. Reduce long-term costs, extend building life, and ensure SB 4-D compliance.
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
              For Tampa Bay condominium associations and commercial property owners, exterior waterproofing represents one of the highest-return investments in building maintenance. Unlike many building systems that depreciate over time, quality waterproofing actively protects your investment—preventing the costly structural damage that moisture infiltration causes in Florida's challenging coastal climate.
            </p>
            <p className="text-gray-600 mb-6">
              The 2021 Surfside tragedy and subsequent SB 4-D legislation brought new attention to building structural integrity. While the law focuses on inspections rather than specific maintenance requirements, the reality is clear: buildings that have protected their structures with proper waterproofing are far more likely to pass milestone inspections without costly remediation orders.
            </p>
            <p className="text-gray-600 mb-8">
              This guide explores the specific benefits exterior waterproofing delivers for Florida high-rise buildings—from structural protection to financial returns to compliance support. Whether you're planning proactive maintenance or responding to inspection findings, understanding these benefits helps make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Six Key Benefits of Professional Exterior Waterproofing
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Quality waterproofing delivers value across multiple dimensions—from protecting building structure to supporting property values to ensuring regulatory compliance.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <benefit.icon className="w-10 h-10 text-brand-gold" />
                  <h3 className="text-xl font-bold text-brand-green-dark font-heading">{benefit.title}</h3>
                </div>
                <p className="text-gray-500 text-sm mb-4">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Florida Challenge */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 font-heading">Why Waterproofing Matters More in Florida</h2>
            <p className="text-xl text-white/90 mb-8">
              Florida's coastal environment creates conditions that accelerate building deterioration. Understanding these challenges helps explain why waterproofing delivers exceptional value in the Tampa Bay area.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Droplets className="w-6 h-6 text-brand-gold" />
                  Salt Air Corrosion
                </h3>
                <p className="text-white/90">
                  Chloride ions from sea spray penetrate unprotected concrete and reach embedded steel reinforcement. Once rebar begins corroding, it expands—cracking the concrete from within and accelerating deterioration. Within 3 miles of the coast, this process happens 2-3x faster than inland.
                </p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-brand-gold" />
                  Hurricane Exposure
                </h3>
                <p className="text-white/90">
                  Wind-driven rain during hurricanes creates extreme water pressure that tests every seal and membrane. A single storm can introduce more water intrusion than years of normal rainfall. Post-storm inspection and repair is essential, but prevention is far more effective.
                </p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Year-Round Humidity</h3>
                <p className="text-white/90">
                  Tampa Bay's average humidity exceeds 70% year-round. Unlike northern climates where concrete can dry out seasonally, Florida buildings remain constantly exposed to moisture. Waterproofing must work continuously—there are no dry seasons for recovery.
                </p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Intense UV Exposure</h3>
                <p className="text-white/90">
                  Florida receives some of the highest UV radiation in the continental US. Unprotected coatings and membranes degrade rapidly. Quality waterproofing systems include UV stabilizers, but even these require periodic maintenance to maintain performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Analysis */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Waterproofing ROI: A 20-Year Comparison
            </h2>
            <p className="text-gray-600 mb-8">
              This comparison illustrates typical costs for a 10,000 sq ft balcony/deck area on a Tampa Bay high-rise over a 20-year period. The difference between approaches becomes dramatic over time.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-heading">Approach</th>
                    <th className="px-4 py-3 text-left font-heading">Year 5</th>
                    <th className="px-4 py-3 text-left font-heading">Year 10</th>
                    <th className="px-4 py-3 text-left font-heading">Year 20</th>
                    <th className="px-4 py-3 text-left font-heading">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {roiData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 font-semibold text-gray-700">{row.scenario}</td>
                      <td className="px-4 py-3 text-gray-600">{row.year5}</td>
                      <td className="px-4 py-3 text-gray-600">{row.year10}</td>
                      <td className={`px-4 py-3 font-bold ${index === 2 ? 'text-brand-green' : 'text-red-600'}`}>{row.year20}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 bg-brand-gold/10 border border-brand-gold rounded-xl p-6">
              <h3 className="text-lg font-bold text-brand-green-dark mb-2">Key Insight</h3>
              <p className="text-gray-600">
                The premium membrane approach costs more initially but delivers <strong>70% lower total cost over 20 years</strong> compared to reactive maintenance. The savings come from avoided structural repairs, fewer mobilization events, and reduced disruption costs. For high-rise buildings where access requires scaffolding or swing stages, the economics favor premium systems even more strongly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Priority */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Waterproofing Priority Areas for High-Rise Buildings
            </h2>
            <p className="text-gray-600 mb-8">
              Not all building areas have equal waterproofing urgency. This guide helps associations prioritize investments based on risk and impact.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-heading">Area</th>
                    <th className="px-4 py-3 text-left font-heading">Priority</th>
                    <th className="px-4 py-3 text-left font-heading">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {applicationPriority.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 font-semibold text-gray-700">{row.area}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                          row.priority === "Critical" ? "bg-red-100 text-red-800" :
                          row.priority === "High" ? "bg-orange-100 text-orange-800" :
                          "bg-yellow-100 text-yellow-800"
                        }`}>
                          {row.priority}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SB 4-D Connection */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Exterior Waterproofing and SB 4-D Compliance
            </h2>
            <p className="text-gray-600 mb-6">
              While Florida's Building Safety Act (SB 4-D) doesn't mandate specific waterproofing requirements, the connection between waterproofing and structural integrity is direct and significant.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">How Waterproofing Supports Compliance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600"><strong>Prevents deterioration</strong> that triggers mandatory repairs during inspections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600"><strong>Documents proactive maintenance</strong> that demonstrates board diligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600"><strong>Supports SIRS assumptions</strong> by extending component life</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600"><strong>Reduces special assessments</strong> by protecting reserve funds</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Inspection Focus Areas</h3>
                <p className="text-gray-600 mb-4">
                  Milestone inspections specifically evaluate:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold font-bold">•</span>
                    <span className="text-gray-600">Balcony structural connections and load capacity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold font-bold">•</span>
                    <span className="text-gray-600">Concrete condition and reinforcement corrosion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold font-bold">•</span>
                    <span className="text-gray-600">Waterproofing membrane effectiveness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold font-bold">•</span>
                    <span className="text-gray-600">Drainage adequacy and function</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold font-bold">•</span>
                    <span className="text-gray-600">Evidence of water intrusion or damage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading text-center">
              Getting Started with Exterior Waterproofing
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              A systematic approach ensures waterproofing investments deliver maximum value.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">Condition Assessment</h3>
                  <p className="text-gray-600">Begin with a professional evaluation of current conditions. This identifies areas requiring immediate attention, areas that can be scheduled for future work, and appropriate system recommendations for each application.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">Priority Planning</h3>
                  <p className="text-gray-600">Develop a phased plan that addresses critical areas first while spreading costs over time. Align waterproofing work with other planned maintenance to reduce mobilization costs. Update reserve studies to reflect the waterproofing plan.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">System Selection</h3>
                  <p className="text-gray-600">Choose waterproofing systems based on application requirements, expected service life, and total cost of ownership—not just initial price. Consider manufacturer warranties and contractor qualifications.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">Maintenance Program</h3>
                  <p className="text-gray-600">Establish ongoing inspection and maintenance protocols to maximize system life. Regular attention extends service life significantly and catches problems before they become costly failures.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Related Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Start Protecting Your Building Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists provides comprehensive waterproofing assessments and solutions for Tampa Bay high-rise buildings. Contact us for a free consultation and discover how professional waterproofing can protect your investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Assessment
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
