import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, XCircle, Droplets, Building, Thermometer, DollarSign, Clock, Shield } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Choosing Waterproofing Solutions Tampa | Guide",
  description: "Complete guide to selecting commercial waterproofing systems for Tampa Bay high-rises. Compare traffic coatings, membranes, and sealants. Expert recommendations for Florida condos.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Choosing the Right Waterproofing Solution", href: "/choosing-the-right-waterproofing-solution-your-ultimate-guide/" },
];

const internalLinks = [
  { href: "/balcony-reconstruction/", label: "Balcony Reconstruction Services" },
  { href: "/services/residential/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/discover-the-benefits-of-exterior-waterproofing/", label: "Benefits of Exterior Waterproofing" },
  { href: "/condo-balcony-inspection-requirements/", label: "SB4-D Compliance Requirements" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const relatedArticles = [
  {
    "title": "Balcony Restoration & Waterproofing for Longevity",
    "href": "/balcony-restoration-and-exterior-waterproofing-for-longevity/",
    "description": "Protect your investment with restoration systems engineered for 20+ years of service."
  },
  {
    "title": "Florida SB4-D Compliance Guide",
    "href": "/florida-sb4d-compliance-guide/",
    "description": "Essential requirements for condo milestone inspections and structural integrity reserves."
  },
  {
    "title": "Effective Balcony Maintenance Tips",
    "href": "/effective-balcony-maintenance-tips/",
    "description": "Proactive maintenance strategies to extend balcony lifespan and prevent costly repairs."
  },
  {
    "title": "Condo Balcony Inspection Requirements",
    "href": "/condo-balcony-inspection-requirements/",
    "description": "Understanding inspection requirements under Florida's updated condo safety legislation."
  }
];

const faqItems = [
  {
    question: "What's the difference between waterproof coatings and membranes?",
    answer: "Coatings are thin (typically 20-60 mils dry) and applied in multiple liquid coats. They're less expensive but have shorter lifespans. Membranes are thicker systems (60-180 mils) that provide more robust protection. For high-traffic areas like balconies in Tampa's harsh climate, membranes typically offer better long-term value despite higher initial cost."
  },
  {
    question: "Can I waterproof over existing tile or pavers?",
    answer: "Generally, no. Effective waterproofing requires direct adhesion to the concrete substrate. Tiles and pavers must be removed, the substrate properly prepared, and the membrane installed before reinstalling finishes. Some elastomeric deck coatings can be applied over existing concrete surfaces if the surface is sound and properly prepared."
  },
  {
    question: "How do I know if my building needs below-grade or above-grade waterproofing?",
    answer: "Above-grade waterproofing (balconies, plaza decks, exterior walls) deals with rain and humidity exposure. Below-grade waterproofing (foundations, parking structures) addresses hydrostatic pressure from groundwater. Each requires different materials and application methods. Tampa Bay's high water table makes below-grade waterproofing particularly important."
  },
  {
    question: "What waterproofing is required for SB 4-D compliance?",
    answer: "SB 4-D doesn't mandate specific waterproofing systems—it requires that buildings pass milestone structural inspections. However, failed waterproofing that has caused structural deterioration will require remediation. Engineers may specify waterproofing repairs as part of addressing inspection deficiencies."
  },
  {
    question: "How long does waterproofing installation take for a typical condo balcony?",
    answer: "Individual balcony waterproofing typically takes 3-5 days: 1 day for preparation, 1-2 days for membrane installation (with cure time between coats), and 1-2 days for finish surface. Building-wide projects are phased so only a few balconies are under construction at any time, minimizing resident disruption."
  },
  {
    question: "Should we match the original waterproofing system or upgrade?",
    answer: "Unless the original system performed well for its expected life, upgrading is usually recommended. Waterproofing technology has improved significantly, and premium modern systems often cost only marginally more than commodity products. Consider the total cost of ownership over the building's remaining life, not just initial installation cost."
  }
];

const systemComparison = [
  {
    system: "Elastomeric Deck Coating",
    thickness: "20-40 mils",
    lifespan: "5-10 years",
    cost: "$8-15/sq ft",
    traffic: "Pedestrian only",
    pros: ["Low initial cost", "Fast application", "Many color options", "Easy repairs"],
    cons: ["Shortest lifespan", "Requires frequent recoating", "Limited crack bridging"],
    bestFor: "Budget projects, interim protection, light traffic areas"
  },
  {
    system: "Polyurethane Traffic Coating",
    thickness: "40-80 mils",
    lifespan: "10-15 years",
    cost: "$15-25/sq ft",
    traffic: "Pedestrian + light furniture",
    pros: ["Good flexibility", "UV stable", "Seamless application", "Moderate durability"],
    cons: ["Weather-sensitive application", "Requires skilled installers"],
    bestFor: "Standard condo balconies, walkways, moderate traffic"
  },
  {
    system: "Traffic-Rated Urethane Membrane",
    thickness: "60-120 mils",
    lifespan: "15-20 years",
    cost: "$20-35/sq ft",
    traffic: "Heavy pedestrian + furniture",
    pros: ["Long service life", "Excellent crack bridging", "Impact resistant", "Low maintenance"],
    cons: ["Higher initial cost", "Longer cure times", "Requires proper prep"],
    bestFor: "High-rise condos, demanding environments, long-term solutions"
  },
  {
    system: "Hot-Applied Rubberized Asphalt",
    thickness: "100-180 mils",
    lifespan: "20-30 years",
    cost: "$25-40/sq ft",
    traffic: "Vehicular rated",
    pros: ["Self-healing", "Longest lifespan", "Excellent adhesion", "Premium performance"],
    cons: ["Highest cost", "Requires protection course", "Specialized equipment"],
    bestFor: "Parking structures, plaza decks, new construction, full replacement"
  },
  {
    system: "Sheet Membrane (Modified Bitumen)",
    thickness: "60-120 mils",
    lifespan: "15-25 years",
    cost: "$18-30/sq ft",
    traffic: "Vehicular rated with topping",
    pros: ["Consistent thickness", "Proven technology", "Factory quality control"],
    cons: ["Seams require careful detailing", "Not seamless", "Weather-sensitive install"],
    bestFor: "Parking decks, large areas, projects requiring consistent quality"
  }
];

const applicationFactors = [
  {
    icon: Building,
    title: "Building Type & Use",
    description: "Different applications require different solutions",
    factors: [
      "High-rise condo balconies need traffic-rated systems",
      "Parking structures require vehicular-rated membranes",
      "Pool decks need slip-resistant, chlorine-resistant options",
      "Rooftop amenity spaces need UV-stable systems"
    ]
  },
  {
    icon: Thermometer,
    title: "Environmental Exposure",
    description: "Tampa Bay's climate demands specific performance",
    factors: [
      "Salt air accelerates coating degradation",
      "UV exposure requires stabilized formulations",
      "Hurricane-driven rain tests every seal",
      "High humidity affects cure times and adhesion"
    ]
  },
  {
    icon: DollarSign,
    title: "Budget & Timeline",
    description: "Balance initial cost against long-term value",
    factors: [
      "Premium systems cost more but last 2-3x longer",
      "Access costs (scaffolding, lifts) favor fewer replacements",
      "Resident disruption has real costs to associations",
      "Reserve funding requirements may drive phasing"
    ]
  },
  {
    icon: Clock,
    title: "Existing Conditions",
    description: "Substrate condition limits options",
    factors: [
      "Damaged concrete needs repair before waterproofing",
      "Previous coatings may require removal",
      "Slope corrections may be needed for drainage",
      "Railing penetrations need special attention"
    ]
  }
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Choosing the Right Waterproofing Solution: Your Ultimate Guide"
        description="Comprehensive comparison of commercial waterproofing systems for Tampa Bay high-rise buildings, including costs, lifespans, and application recommendations."
        datePublished="2024-01-25"
        dateModified="2024-06-01"
      />
      <FAQSchema faqs={faqItems} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
            alt="Professional waterproofing application on Tampa high-rise"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Choosing the Right Waterproofing Solution: Your Ultimate Guide
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Navigate the complex world of commercial waterproofing with confidence. Compare systems, understand costs, and select the right solution for your Tampa Bay property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Expert Recommendation
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
              Selecting the right waterproofing system for your Tampa Bay commercial property or condominium isn't a decision to make lightly. The wrong choice can mean premature failure, repeated repair costs, and even structural damage to your building. The right choice provides decades of reliable protection with minimal maintenance.
            </p>
            <p className="text-gray-600 mb-6">
              This guide cuts through marketing claims to help property managers, condo association boards, and facility directors understand what different waterproofing systems actually deliver. We'll compare the major categories of commercial waterproofing, explain when each is appropriate, and provide realistic cost and lifespan expectations for Florida's demanding coastal environment.
            </p>
            <p className="text-gray-600 mb-8">
              Whether you're responding to SB 4-D inspection findings, planning proactive maintenance, or evaluating a contractor's proposal, this information will help you make informed decisions that protect your building and your budget.
            </p>
          </div>
        </div>
      </section>

      {/* Decision Factors */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Key Factors in Waterproofing Selection
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Before comparing specific products, understand the factors that should drive your decision. The "best" system depends entirely on your specific situation.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {applicationFactors.map((factor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <factor.icon className="w-10 h-10 text-brand-gold" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark font-heading">{factor.title}</h3>
                    <p className="text-sm text-gray-500">{factor.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {factor.factors.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Comparison */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Commercial Waterproofing System Comparison
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Compare the five major categories of commercial waterproofing systems used in Tampa Bay high-rise and commercial applications.
          </p>
          
          <div className="space-y-8">
            {systemComparison.map((system, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
                <div className="bg-brand-green-dark text-white p-4">
                  <h3 className="text-xl font-bold font-heading">{system.system}</h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-1">Thickness</p>
                      <p className="font-bold text-brand-green-dark">{system.thickness}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-1">Expected Lifespan</p>
                      <p className="font-bold text-brand-green-dark">{system.lifespan}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-1">Installed Cost</p>
                      <p className="font-bold text-brand-gold">{system.cost}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-1">Traffic Rating</p>
                      <p className="font-bold text-brand-green-dark">{system.traffic}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-brand-green-dark mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Advantages
                      </h4>
                      <ul className="space-y-1">
                        {system.pros.map((pro, idx) => (
                          <li key={idx} className="text-gray-600 text-sm">• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-red-500" />
                        Limitations
                      </h4>
                      <ul className="space-y-1">
                        {system.cons.map((con, idx) => (
                          <li key={idx} className="text-gray-600 text-sm">• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm">
                      <span className="font-bold text-brand-green-dark">Best For:</span>{" "}
                      <span className="text-gray-600">{system.bestFor}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Florida-Specific Considerations */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 font-heading">Florida-Specific Waterproofing Considerations</h2>
            <p className="text-xl text-white/90 mb-8">
              Generic waterproofing recommendations don't account for Tampa Bay's unique challenges. Here's what Florida coastal exposure means for system selection.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Droplets className="w-6 h-6 text-brand-gold" />
                  Salt Air Exposure
                </h3>
                <p className="text-white/90 mb-4">
                  Chloride ions from salt air penetrate concrete and accelerate rebar corrosion dramatically. Waterproofing must create a true moisture barrier—not just slow water transmission.
                </p>
                <p className="text-brand-gold font-semibold">
                  Recommendation: Fully-adhered membranes over coatings for critical areas.
                </p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Thermometer className="w-6 h-6 text-brand-gold" />
                  Thermal Cycling
                </h3>
                <p className="text-white/90 mb-4">
                  Florida's hot surfaces can exceed 160°F in summer sun. Systems must remain flexible across a 100°+ temperature range without cracking, peeling, or softening.
                </p>
                <p className="text-brand-gold font-semibold">
                  Recommendation: High elongation (&gt;300%) systems with proven thermal stability.
                </p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-brand-gold" />
                  Hurricane Resistance
                </h3>
                <p className="text-white/90 mb-4">
                  Wind-driven rain during hurricanes creates extreme pressure differentials that can force water through any gap. Waterproofing must be continuous with no weak points.
                </p>
                <p className="text-brand-gold font-semibold">
                  Recommendation: Fully-adhered systems with reinforced terminations at all edges.
                </p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-brand-gold" />
                  High Humidity
                </h3>
                <p className="text-white/90 mb-4">
                  Tampa's year-round humidity affects cure times and can cause adhesion failures if moisture is trapped beneath coatings. Proper scheduling and moisture testing are essential.
                </p>
                <p className="text-brand-gold font-semibold">
                  Recommendation: Moisture vapor transmission testing before application; follow manufacturer cure guidelines strictly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Selection Guide */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Quick Selection Guide by Application
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-heading">Application</th>
                    <th className="px-4 py-3 text-left font-heading">Recommended System</th>
                    <th className="px-4 py-3 text-left font-heading">Budget Alternative</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-700">High-Rise Condo Balconies</td>
                    <td className="px-4 py-3 text-brand-green-dark">Traffic-Rated Urethane Membrane</td>
                    <td className="px-4 py-3 text-gray-600">Polyurethane Traffic Coating</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-700">Parking Structures</td>
                    <td className="px-4 py-3 text-brand-green-dark">Hot-Applied Rubberized Asphalt</td>
                    <td className="px-4 py-3 text-gray-600">Sheet Membrane + Topping</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-700">Pool Decks</td>
                    <td className="px-4 py-3 text-brand-green-dark">Slip-Resistant Urethane Coating</td>
                    <td className="px-4 py-3 text-gray-600">Elastomeric with Texture Additive</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-700">Plaza Decks (Over Occupied Space)</td>
                    <td className="px-4 py-3 text-brand-green-dark">Hot-Applied Rubberized Asphalt</td>
                    <td className="px-4 py-3 text-gray-600">Traffic-Rated Urethane</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-700">Exterior Walkways</td>
                    <td className="px-4 py-3 text-brand-green-dark">Polyurethane Traffic Coating</td>
                    <td className="px-4 py-3 text-gray-600">Elastomeric Deck Coating</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-700">Rooftop Amenity Areas</td>
                    <td className="px-4 py-3 text-brand-green-dark">Traffic-Rated Membrane + Pavers</td>
                    <td className="px-4 py-3 text-gray-600">Urethane Coating System</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-sm text-gray-500 mt-4 italic text-center">
              These are general recommendations. Site-specific conditions may require different solutions. Always consult with a waterproofing professional.
            </p>
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Red Flags When Evaluating Contractors
            </h2>
            <p className="text-gray-600 mb-8">
              Quality waterproofing depends as much on installation as material selection. Watch for these warning signs when evaluating proposals.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6" />
                  Warning Signs
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-600">
                    <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    Price significantly below market range
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    No moisture testing before application
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    Won't provide product specifications
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    Vague warranty terms or exclusions
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    No manufacturer certification/training
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    Can't provide local references
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  Quality Indicators
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Detailed written specifications
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Manufacturer warranty + contractor warranty
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Documented surface preparation procedures
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Third-party inspection offered/included
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    History of work in coastal Florida
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Insurance and licensing verified
                  </li>
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
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      

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
            Get Expert Guidance on Waterproofing Selection
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't guess on waterproofing. Florida Construction Specialists provides honest assessments and recommendations based on your specific building, budget, and performance requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Consultation
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
