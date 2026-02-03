import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Shield, AlertTriangle, Eye, Wrench, FileCheck, Baby } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Balcony Safety Measures Florida | Compliance",
  description: "Essential balcony safety measures for Florida condos and apartments. Learn about SB4-D inspection requirements, structural safety, railings, waterproofing, and fall prevention.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Balcony Safety Measures", href: "/balcony-safety-measures/" },
];

const internalLinks = [
  { href: "/balcony-reconstruction/", label: "Balcony Reconstruction Services" },
  { href: "/condo-balcony-inspection-requirements/", label: "SB4-D Inspection Requirements" },
  { href: "/services/residential/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/effective-balcony-maintenance-tips/", label: "Balcony Maintenance Tips" },
  { href: "/contact/", label: "Schedule an Inspection" },
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

const safetyCategories = [
  {
    icon: Shield,
    title: "Structural Integrity",
    description: "The foundation of balcony safety is a sound structure",
    items: [
      "Regular inspections by licensed engineers (required by SB4-D)",
      "Check for concrete spalling, cracking, or exposed rebar",
      "Verify connections between balcony and building structure",
      "Inspect support beams and load-bearing elements",
      "Monitor for signs of water damage or corrosion",
      "Address any deflection or unusual movement immediately",
    ],
  },
  {
    icon: Wrench,
    title: "Railing & Guard Requirements",
    description: "Railings prevent falls—Florida code specifies exact requirements",
    items: [
      "Minimum 42\" height for commercial/multi-family (36\" for single-family)",
      "Maximum 4\" spacing between balusters (prevents child entrapment)",
      "Must withstand 200 lbs of force at any point",
      "No climbable horizontal elements that could help children climb",
      "Secure anchoring into structural elements, not just surface-mounted",
      "Regular testing for loose connections or corrosion",
    ],
  },
  {
    icon: Eye,
    title: "Waterproofing & Drainage",
    description: "Water is the primary enemy of balcony structures in Florida",
    items: [
      "Proper slope (minimum 1/4\" per foot) toward drains",
      "Waterproof membrane covering entire balcony surface",
      "Sealed penetrations at railings and door thresholds",
      "Functional drains that don't clog or overflow",
      "Flashing at wall-to-balcony connections",
      "No ponding water after rain events",
    ],
  },
  {
    icon: Baby,
    title: "Child Safety Features",
    description: "Additional precautions for families with young children",
    items: [
      "Self-closing and self-latching doors to balcony",
      "Door locks or guards out of children's reach",
      "No furniture that children can climb to reach railings",
      "Mesh or plexiglass panels if railing design has gaps",
      "Remove items that could be used as stepping stools",
      "Consider additional safety gates for toddlers",
    ],
  },
];

const warningSignsData = [
  {
    sign: "Rust stains on concrete",
    meaning: "Indicates rebar corrosion inside the concrete—structural concern",
    urgency: "High",
  },
  {
    sign: "Cracking or spalling concrete",
    meaning: "Concrete is deteriorating, possibly from water or reinforcement corrosion",
    urgency: "High",
  },
  {
    sign: "Wobbly or loose railings",
    meaning: "Anchorage failure or corrosion at connections",
    urgency: "High",
  },
  {
    sign: "Ponding water after rain",
    meaning: "Drainage failure—water will eventually damage structure",
    urgency: "Medium",
  },
  {
    sign: "Soft spots in walking surface",
    meaning: "Possible substrate deterioration beneath tiles or coating",
    urgency: "Medium",
  },
  {
    sign: "Staining on ceiling below balcony",
    meaning: "Water is penetrating through the balcony structure",
    urgency: "Medium",
  },
  {
    sign: "Visible deflection when loaded",
    meaning: "Structural members may be failing",
    urgency: "Critical",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Balcony Safety Measures: Florida Compliance & Best Practices"
        description="Essential balcony safety measures for Florida condos and apartments."
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
            alt="Safe balcony with proper railings and waterproofing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Balcony Safety Measures for Florida Properties
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            From structural inspections to railing requirements, learn how to ensure your balcony is safe, compliant, and properly maintained in Florida's challenging climate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Schedule an Inspection
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

      {/* Intro */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-xl text-gray-600 mb-6">
              Balcony safety in Florida isn't just about common sense—it's increasingly a matter of law. Following the Surfside condominium collapse in 2021, Florida enacted Senate Bill 4-D (SB4-D), requiring milestone structural inspections for condominium and cooperative buildings. Balconies and elevated walkways are a primary focus of these inspections.
            </p>
            <p className="text-gray-600 mb-6">
              But beyond compliance, balcony safety is about protecting lives. Falls from balconies cause serious injuries and fatalities every year. Structural failures, while rare, can be catastrophic. And in Florida's humid, salt-air environment, balcony components deteriorate faster than in other climates.
            </p>
            <p className="text-gray-600 mb-8">
              This guide covers the essential safety measures every Florida property owner and condo association should implement, from structural integrity to child safety features.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Categories */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-12 font-heading">
            Essential Balcony Safety Measures
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {safetyCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <category.icon className="w-10 h-10 text-brand-gold" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark font-heading">{category.title}</h3>
                    <p className="text-sm text-gray-500">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
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

      {/* Florida SB4-D Section */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <FileCheck className="w-12 h-12 text-brand-gold" />
              <h2 className="text-3xl font-bold font-heading">Florida's SB4-D Requirements</h2>
            </div>
            <p className="text-xl text-white/90 mb-8">
              Senate Bill 4-D requires condominium and cooperative associations to conduct milestone structural inspections, with particular attention to balconies and elevated structures.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">When Inspections Are Required</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Buildings 3+ stories: 30 years from CO (25 years within 3 miles of coast)</li>
                  <li>• Follow-up inspections every 10 years thereafter</li>
                  <li>• Must be performed by licensed engineer or architect</li>
                  <li>• Phase 1 visual inspection; Phase 2 if problems found</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">What Inspectors Look For</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Structural adequacy of balcony connections</li>
                  <li>• Condition of reinforcing steel and concrete</li>
                  <li>• Waterproofing and drainage effectiveness</li>
                  <li>• Railing anchorage and condition</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="/condo-balcony-inspection-requirements/" className="btn-cta">
                Learn More About SB4-D Compliance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <AlertTriangle className="w-10 h-10 text-red-600" />
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading">Warning Signs to Watch For</h2>
            </div>
            <p className="text-gray-600 mb-8">
              Don't wait for an inspection to identify problems. Property owners and residents should regularly check for these warning signs:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Warning Sign</th>
                    <th className="px-6 py-4 text-left font-heading">What It Means</th>
                    <th className="px-6 py-4 text-left font-heading">Urgency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {warningSignsData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.sign}</td>
                      <td className="px-6 py-4 text-gray-600">{row.meaning}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                          row.urgency === "Critical" ? "bg-red-100 text-red-800" :
                          row.urgency === "High" ? "bg-orange-100 text-orange-800" :
                          "bg-yellow-100 text-yellow-800"
                        }`}>
                          {row.urgency}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Ongoing Maintenance for Balcony Safety
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Monthly Checks</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Test railing stability by pushing firmly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Clear drains of debris and leaves</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Check for new cracks or damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Ensure door locks and latches work properly</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Annual Maintenance</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Professional inspection of structural elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Resealing of cracks and joints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Touch-up of protective coatings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Assessment of waterproofing condition</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SB4-D Compliance Detail */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              SB4-D Structural Inspection Requirements
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Florida's SB4-D legislation, passed in response to the Champlain Towers South tragedy, establishes mandatory milestone structural inspection requirements for condominiums and cooperatives three stories or higher. This law specifically addresses balcony safety as a critical component of overall building integrity and resident protection.
              </p>
              <p className="text-gray-600 mb-6">
                Balcony inspections under SB4-D must be performed by a licensed architect or structural engineer with experience in building envelope systems and coastal construction. The inspection must assess structural elements, connections to the building, waterproofing systems, drainage components, and safety features like railings and barriers.
              </p>
              <p className="text-gray-600 mb-6">
                When substantial structural deterioration is identified during SB4-D inspections, associations have strict timelines for remediation. Emergency repairs addressing immediate safety hazards must begin within 30 days, while comprehensive restoration must be completed within specified timeframes based on the severity of deficiencies found.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Inspection Timeline</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span>Buildings ≥3 miles from coast: First inspection at 30 years</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span>Buildings &lt;3 miles from coast: First inspection at 25 years</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span>Subsequent inspections every 10 years thereafter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span>Phase 1: Visual inspection and reporting within 180 days</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span>Phase 2: Detailed assessment if deficiencies found</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Required Documentation</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span>Licensed engineer/architect inspection report</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span>Photographic documentation of all deficiencies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span>Prioritized repair recommendations with timelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span>Reserve study updates reflecting repair needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span>Remediation completion certifications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Hazards */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Environmental Safety Hazards for Florida Balconies
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Florida's subtropical climate and coastal location create unique environmental challenges that significantly impact balcony safety. Understanding these hazards helps building owners and residents take proactive measures to maintain safe conditions and prevent deterioration.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-8 h-8 text-orange-500" />
                  <h3 className="text-lg font-bold text-brand-green-dark">Salt Air Corrosion</h3>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Accelerated rebar corrosion in concrete structures</li>
                  <li>• Deterioration of metal railings and fasteners</li>
                  <li>• Compromised structural connections over time</li>
                  <li>• Requires specialized marine-grade materials</li>
                  <li>• More frequent inspection and maintenance needed</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-8 h-8 text-blue-500" />
                  <h3 className="text-lg font-bold text-brand-green-dark">Hurricane Exposure</h3>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Extreme wind loads exceeding design capacity</li>
                  <li>• Impact from wind-borne debris</li>
                  <li>• Water intrusion during storm events</li>
                  <li>• Post-storm structural damage assessment</li>
                  <li>• Enhanced anchoring requirements</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                  <h3 className="text-lg font-bold text-brand-green-dark">UV Deterioration</h3>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Breakdown of protective coatings and sealants</li>
                  <li>• Degradation of plastic and polymer components</li>
                  <li>• Thermal cycling stress from daily heat expansion</li>
                  <li>• Accelerated aging of waterproofing membranes</li>
                  <li>• Regular recoating and protection required</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Technology */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Advanced Safety Monitoring Technologies
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Modern balcony safety incorporates advanced monitoring technologies that provide early warning of structural issues, environmental hazards, and maintenance needs. These systems help building managers maintain optimal safety conditions while reducing long-term maintenance costs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Structural Monitoring Systems</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <FileCheck className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Wireless strain gauges</strong> - Monitor structural stress and movement in real-time
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileCheck className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Crack monitoring sensors</strong> - Track crack growth and structural changes
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileCheck className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Corrosion monitoring</strong> - Early detection of rebar deterioration
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileCheck className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Load monitoring systems</strong> - Track weight distribution and capacity usage
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Environmental Monitoring</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Moisture detection sensors</strong> - Monitor water intrusion and humidity levels
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Weather station integration</strong> - Track wind, rain, and temperature impacts
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Drainage monitoring</strong> - Detect clogs and overflow conditions
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Security integration</strong> - Access control and safety zone monitoring
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Procedures */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Emergency Response Procedures for Balcony Safety
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                When balcony safety issues are identified, prompt and appropriate response can prevent injuries and minimize property damage. Building managers and residents should be familiar with emergency procedures for various scenarios.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  Immediate Safety Hazards
                </h3>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <strong className="text-brand-green-dark">Structural Failure Signs:</strong>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• Immediately evacuate the balcony and restrict access</li>
                      <li>• Contact licensed structural engineer for emergency assessment</li>
                      <li>• Document conditions with photographs from safe location</li>
                      <li>• Notify building management and insurance carrier</li>
                      <li>• Install temporary barriers to prevent accidental access</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-brand-green-dark">Railing Failure:</strong>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• Secure loose railings or restrict balcony access</li>
                      <li>• Install temporary fall protection if feasible</li>
                      <li>• Schedule immediate professional inspection</li>
                      <li>• Document failure mode and contributing factors</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-blue-500" />
                  Prevention Planning
                </h3>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <strong className="text-brand-green-dark">Proactive Measures:</strong>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• Establish regular inspection schedules with documentation</li>
                      <li>• Develop relationships with qualified engineers and contractors</li>
                      <li>• Maintain adequate reserve funds for emergency repairs</li>
                      <li>• Train building staff to recognize warning signs</li>
                      <li>• Create resident education programs on safety practices</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-brand-green-dark">Documentation Requirements:</strong>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• Maintain inspection reports and repair records</li>
                      <li>• Track insurance claims and safety incidents</li>
                      <li>• Document preventive maintenance activities</li>
                      <li>• Keep warranty information for materials and work</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal and Insurance Considerations */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Legal and Insurance Implications of Balcony Safety
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Balcony safety carries significant legal and insurance implications for condominium associations, property managers, and individual owners. Understanding these responsibilities helps ensure appropriate coverage and risk management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Legal Responsibilities</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Association Duties:</strong> Maintain common elements including balcony structures, railings, and waterproofing systems
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>SB4-D Compliance:</strong> Meet mandatory inspection timelines and remediate identified deficiencies
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Building Code Compliance:</strong> Ensure all repairs meet current Florida Building Code requirements
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Documentation Requirements:</strong> Maintain detailed records of inspections, repairs, and safety measures
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Insurance Considerations</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <FileCheck className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Liability Coverage:</strong> Adequate limits for injury claims related to balcony failures
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileCheck className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Property Coverage:</strong> Protection for structural damage and repair costs
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileCheck className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Maintenance Requirements:</strong> Policy compliance through regular inspections and upkeep
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileCheck className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Claims Management:</strong> Prompt reporting and documentation of safety incidents
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      

      {/* Internal Links */}
      <section className="section bg-white">
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
            Concerned About Your Balcony's Safety?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our licensed engineers can assess your balcony's condition, identify safety concerns, and recommend repairs. We help condo associations meet SB4-D requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule an Inspection
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
