import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, Clock, Shield, Droplets, Sun, Wind } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Balcony Restoration & Exterior Waterproofing for Longevity | Tampa",
  description: "Maximize your Tampa Bay condo's balcony lifespan with professional restoration and waterproofing. Expert strategies for 20+ year durability in Florida's coastal climate.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Balcony Restoration & Waterproofing for Longevity", href: "/balcony-restoration-and-exterior-waterproofing-for-longevity/" },
];

const internalLinks = [
  { href: "/balcony-reconstruction/", label: "Balcony Reconstruction Services" },
  { href: "/services/residential/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/effective-balcony-maintenance-tips/", label: "Balcony Maintenance Tips" },
  { href: "/condo-balcony-inspection-requirements/", label: "SB4-D Compliance Requirements" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const faqItems = [
  {
    question: "How long should a properly waterproofed balcony last in Tampa Bay?",
    answer: "With quality materials and proper installation, a commercial balcony waterproofing system should last 15-25 years in Tampa Bay's climate. Traffic-rated urethane membranes typically perform for 15-20 years, while hot-applied rubberized asphalt can exceed 25 years. The key factors are proper surface preparation, correct material selection, and ongoing maintenance."
  },
  {
    question: "What maintenance extends balcony waterproofing life?",
    answer: "Annual inspections to catch small issues before they spread, keeping drains clear of debris, resealing cracks and joints every 3-5 years, and avoiding standing water all extend system life. For condos, we recommend an association-wide maintenance program that includes semi-annual drain clearing and annual professional inspections."
  },
  {
    question: "When is restoration better than replacement for aging balconies?",
    answer: "Restoration is preferred when structural elements are sound but surface deterioration exists—typically with spalling under 30% of the surface area and no significant rebar section loss. If corrosion has significantly reduced rebar cross-section, or if deflection or cracking indicates structural compromise, reconstruction is the safer and more cost-effective long-term choice."
  },
  {
    question: "How do Florida's hurricanes affect balcony waterproofing requirements?",
    answer: "Hurricane-driven rain creates extreme pressure that can force water through any gap or defect. Florida Building Code requires balcony waterproofing to resist wind-driven rain at design wind speeds for the building's location. In Tampa Bay, this means systems must handle sustained winds of 130-150 mph. Proper flashing, sealed penetrations, and continuous membranes are critical."
  },
  {
    question: "What is the ROI on quality balcony waterproofing versus cheaper options?",
    answer: "Quality waterproofing costs 20-40% more upfront but typically delivers 2-3x the service life. A $20/sq ft economy coating lasting 8 years costs $2.50/year. A $30/sq ft premium membrane lasting 20 years costs $1.50/year—plus avoids the disruption and scaffolding costs of more frequent replacements. For high-rise buildings where access is expensive, premium systems are almost always more economical."
  }
];

const longevityFactors = [
  {
    icon: Droplets,
    title: "Moisture Management",
    description: "Proper drainage and waterproofing prevent the corrosion cycle",
    details: [
      "Minimum 1/4\" per foot slope toward drains",
      "Waterproof membrane covering 100% of walking surface",
      "Sealed penetrations at railings, doors, and utilities",
      "Overflow scuppers for backup drainage",
      "No ponding allowed 48 hours after rain"
    ]
  },
  {
    icon: Sun,
    title: "UV Protection",
    description: "Tampa's intense sun degrades unprotected materials quickly",
    details: [
      "UV-stable membrane materials or protective topcoats",
      "Light-colored surfaces to reduce thermal stress",
      "Annual inspection of sun-exposed areas",
      "Flexible systems that accommodate thermal cycling",
      "Reflective coatings to reduce surface temperatures"
    ]
  },
  {
    icon: Wind,
    title: "Hurricane Resistance",
    description: "Systems must withstand Florida's severe weather events",
    details: [
      "Fully adhered membranes resist uplift",
      "No unsealed laps facing prevailing winds",
      "Reinforced terminations at walls and railings",
      "Impact-resistant finish surfaces where required",
      "Post-storm inspection protocols"
    ]
  },
  {
    icon: Shield,
    title: "Structural Integration",
    description: "Waterproofing must work with the structure, not against it",
    details: [
      "Compatible with concrete repair materials",
      "Accommodates building movement and settling",
      "Proper bonding to avoid trapped moisture",
      "Vapor transmission management in humid climates",
      "Coordination with building envelope systems"
    ]
  }
];

const lifespanData = [
  { system: "Economy Elastomeric Coating", lifespan: "5-8 years", maintenance: "High", bestFor: "Budget projects, interim protection" },
  { system: "Standard Traffic Coating", lifespan: "10-12 years", maintenance: "Medium", bestFor: "Low-rise buildings, moderate traffic" },
  { system: "Premium Urethane Membrane", lifespan: "15-20 years", maintenance: "Low", bestFor: "High-rise condos, demanding environments" },
  { system: "Hot-Applied Rubberized Asphalt", lifespan: "20-30 years", maintenance: "Very Low", bestFor: "New construction, full reconstruction" },
  { system: "Sheet Membrane + Topping", lifespan: "15-25 years", maintenance: "Low", bestFor: "Parking structures, large balconies" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Balcony Restoration and Exterior Waterproofing for Longevity"
        description="Expert guide to maximizing balcony lifespan through quality restoration and waterproofing in Florida's challenging coastal environment."
        datePublished="2024-01-20"
        dateModified="2024-06-01"
      />
      <FAQSchema faqs={faqItems} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
            alt="Restored balcony with long-lasting waterproofing in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Balcony Restoration & Exterior Waterproofing for Long-Term Performance
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Protect your Tampa Bay high-rise investment with restoration and waterproofing systems engineered for 20+ years of reliable service in Florida's demanding coastal climate.
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
              For Tampa Bay condominium associations facing balcony restoration decisions, longevity isn't just about choosing the most expensive option—it's about selecting the right system for your specific conditions and maintaining it properly. The difference between a waterproofing system that fails in 8 years versus one that lasts 25 years often comes down to decisions made during the planning phase.
            </p>
            <p className="text-gray-600 mb-6">
              Florida's coastal environment is uniquely challenging for building exteriors. Salt-laden air accelerates corrosion of steel reinforcement. Intense UV radiation degrades polymer-based coatings. Hurricane-driven rain creates pressures that test every seal and membrane. And year-round humidity means moisture never fully dries out. Yet buildings in Tampa Bay routinely achieve decades of service life from their balcony systems—when they're designed and installed correctly.
            </p>
            <p className="text-gray-600 mb-8">
              This guide covers the key factors that determine balcony longevity, helping property managers and association boards make informed decisions about restoration scope, material selection, and maintenance planning.
            </p>
          </div>
        </div>
      </section>

      {/* Longevity Factors */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Four Pillars of Balcony Longevity
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Long-lasting balcony systems address all four of these critical factors. Neglecting any one of them significantly reduces overall system life.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {longevityFactors.map((factor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-4 mb-4">
                  <factor.icon className="w-10 h-10 text-brand-gold" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark font-heading">{factor.title}</h3>
                    <p className="text-sm text-gray-500">{factor.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {factor.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restoration vs Reconstruction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Restoration vs. Full Reconstruction: Making the Right Choice
            </h2>
            <p className="text-gray-600 mb-8">
              One of the most important decisions affecting long-term outcomes is determining whether existing balconies can be restored or require full reconstruction. Making the wrong call in either direction is costly.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 border-2 border-brand-green rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">✓ Restoration is Appropriate When:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Concrete is sound with surface deterioration only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Spalling affects less than 30% of surface area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Rebar corrosion is surface rust only, no section loss</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">No visible deflection or cracking patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Waterproofing failure is the primary issue</span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-700 mb-4 font-heading">✗ Reconstruction is Required When:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">×</span>
                    <span className="text-gray-700">Engineer identifies structural deficiency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">×</span>
                    <span className="text-gray-700">Rebar has significant cross-section loss (&gt;25%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">×</span>
                    <span className="text-gray-700">Concrete delamination is widespread</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">×</span>
                    <span className="text-gray-700">Balcony shows deflection under load</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">×</span>
                    <span className="text-gray-700">Previous repairs have failed repeatedly</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-brand-gold/10 border border-brand-gold rounded-xl p-6">
              <h3 className="text-lg font-bold text-brand-green-dark mb-2">The Engineering Assessment is Critical</h3>
              <p className="text-gray-600">
                SB 4-D milestone inspections now require licensed engineers to evaluate structural conditions. This same assessment should guide restoration vs. reconstruction decisions. Attempting to restore structurally compromised balconies wastes money and creates liability. Conversely, reconstructing balconies that could be effectively restored wastes association funds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waterproofing System Lifespans */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 font-heading">Waterproofing System Lifespan Comparison</h2>
            <p className="text-xl text-white/90 mb-8">
              Not all waterproofing systems are created equal. Expected service life varies significantly based on material type, application quality, and environmental exposure.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white/10 rounded-xl overflow-hidden">
                <thead className="bg-white/20">
                  <tr>
                    <th className="px-4 py-3 text-left font-heading">System Type</th>
                    <th className="px-4 py-3 text-left font-heading">Expected Lifespan</th>
                    <th className="px-4 py-3 text-left font-heading">Maintenance</th>
                    <th className="px-4 py-3 text-left font-heading">Best Application</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {lifespanData.map((row, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 font-semibold">{row.system}</td>
                      <td className="px-4 py-3 text-brand-gold font-bold">{row.lifespan}</td>
                      <td className="px-4 py-3">{row.maintenance}</td>
                      <td className="px-4 py-3 text-sm">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-white/70 mt-4 italic">
              * Lifespans assume proper installation and regular maintenance in Tampa Bay coastal conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Maintenance for Longevity */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Maintenance Practices That Extend System Life
            </h2>
            <p className="text-gray-600 mb-8">
              Even the best waterproofing system requires maintenance to achieve its full service life potential. For condo associations, establishing a formal maintenance program is essential.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-6 h-6 text-brand-gold" />
                  <h3 className="text-lg font-bold text-brand-green-dark font-heading">Monthly</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Clear drains of leaves and debris</li>
                  <li>• Check for standing water after rain</li>
                  <li>• Report new cracks or damage</li>
                  <li>• Verify railings are secure</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-6 h-6 text-brand-gold" />
                  <h3 className="text-lg font-bold text-brand-green-dark font-heading">Annually</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Professional condition survey</li>
                  <li>• Sealant and caulk inspection</li>
                  <li>• Membrane wear assessment</li>
                  <li>• Drainage system cleaning</li>
                  <li>• Touch-up of protective coatings</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-6 h-6 text-brand-gold" />
                  <h3 className="text-lg font-bold text-brand-green-dark font-heading">Every 3-5 Years</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Re-seal all joints and penetrations</li>
                  <li>• Refresh topcoat if applicable</li>
                  <li>• Address any identified repairs</li>
                  <li>• Update reserve study</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-brand-green/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-brand-green-dark mb-2">Post-Hurricane Inspection Protocol</h3>
              <p className="text-gray-600">
                After any hurricane or tropical storm, all balconies should be inspected for wind-driven rain intrusion, debris damage, and loose components. Early detection of storm damage prevents water infiltration from causing structural damage during subsequent weather events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Total Cost of Ownership */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Understanding Total Cost of Ownership
            </h2>
            <p className="text-gray-600 mb-8">
              When evaluating waterproofing options, associations should consider total cost over the building's planning horizon—not just initial installation cost.
            </p>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">25-Year Cost Comparison (per 100 sq ft balcony)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border-2 border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-700 mb-2">Economy Approach</h4>
                  <ul className="space-y-1 text-gray-600 text-sm mb-4">
                    <li>Initial: $15/sq ft coating = $1,500</li>
                    <li>Year 8 replacement = $1,800</li>
                    <li>Year 16 replacement = $2,100</li>
                    <li>Year 24 replacement = $2,400</li>
                  </ul>
                  <p className="font-bold text-red-600">Total: ~$7,800</p>
                  <p className="text-xs text-gray-500">Plus 4 disruption events, scaffolding costs each time</p>
                </div>
                <div className="border-2 border-brand-green rounded-lg p-4">
                  <h4 className="font-bold text-brand-green-dark mb-2">Premium Approach</h4>
                  <ul className="space-y-1 text-gray-600 text-sm mb-4">
                    <li>Initial: $30/sq ft membrane = $3,000</li>
                    <li>Year 10 topcoat refresh = $800</li>
                    <li>Year 20 topcoat refresh = $1,000</li>
                    <li>Maintenance over 25 years = $500</li>
                  </ul>
                  <p className="font-bold text-brand-green">Total: ~$5,300</p>
                  <p className="text-xs text-gray-500">Only 1 major mobilization, minimal disruption</p>
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
            Plan for Long-Term Performance
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get expert guidance on balcony restoration strategies that maximize service life while meeting SB 4-D requirements. Florida Construction Specialists provides comprehensive assessments and long-term planning support.
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
