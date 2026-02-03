import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award, Calendar, MapPin, FileText, AlertTriangle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InternalLinks } from "@/components/InternalLinks";
import { RelatedArticles } from "@/components/RelatedArticles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SB 4-D Compliance Tampa Bay Condos | FCS",
  description: "Complete guide to SB 4-D compliance for Hillsborough and Pinellas County condominiums. Milestone inspection requirements, SIRS deadlines, and remediation services from Florida Construction Specialists.",
  keywords: "sb 4-d compliance tampa bay, surfside law florida, condo inspection law tampa, florida building safety act, milestone inspection tampa",
};

const faqs = [
  {
    question: "Our building is 29 years old. What do we do now?",
    answer: "Start planning now. You have approximately one year before your milestone inspection is due. Use this time to select a qualified engineer, budget for the inspection ($10,000-$50,000 depending on building size), and begin building reserves for potential remediation. Don't wait until the deadline—engineering firms are experiencing significant backlogs, and early planning gives you more options.",
  },
  {
    question: "Can we delay our SIRS to coordinate with our milestone inspection?",
    answer: "Yes, Florida law allows associations to coordinate their Structural Integrity Reserve Study with their milestone inspection through December 31, 2026. This can be cost-effective since both assessments examine similar building components. However, your SIRS must still be completed—coordination just allows you to bundle the work with a single engineering firm and potentially reduce overall costs.",
  },
  {
    question: "What if our engineer finds problems we can't afford to fix?",
    answer: "This is the reality many Tampa Bay associations are facing. Options include: phased remediation plans that address critical safety items first, special assessments (which can be spread over 1-2 years), bank loans to the association, or a combination of approaches. FCS works with associations to structure projects that address legal requirements while managing financial constraints. The key is having a documented plan showing good-faith progress.",
  },
  {
    question: "Do we need board approval for remediation work?",
    answer: "Under Florida Statute 718.113, the board has authority to maintain and repair common elements without unit owner vote. However, funding remediation through special assessments may require owner approval depending on your bylaws and assessment amount. Most associations hold informational meetings to explain findings and costs, then proceed with board authorization for the work itself.",
  },
  {
    question: "How do we communicate special assessments to unit owners?",
    answer: "Transparency is essential. Best practices include: sharing the full Phase 2 inspection report with all owners, holding a town hall meeting to explain findings in plain language, providing detailed cost breakdowns and payment options, explaining the legal consequences of non-compliance, and giving owners adequate notice before assessments are due. FCS can assist with technical explanations at board or owner meetings.",
  },
  {
    question: "What's the difference between SIRS and a regular reserve study?",
    answer: "A traditional reserve study covers all common element components and their replacement schedules. A Structural Integrity Reserve Study (SIRS) specifically focuses on eight structural components required by Florida law: roof, structural systems, fireproofing, plumbing, electrical, waterproofing/exterior painting, windows/doors, and any item over $25,000 affecting structural integrity. SIRS requires a licensed engineer or architect and mandates full funding—no more waiving reserves for these items.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "SB 4-D Compliance Tampa Bay", href: "/sb-4-d-compliance-tampa-bay-condos/" },
];

const internalLinks = [
  { href: "/condo-milestone-inspection-remediation/", label: "Milestone Inspection Remediation" },
  { href: "/condo-structural-reserve-study-repairs/", label: "SIRS Repair Planning" },
  { href: "/balcony-reconstruction/", label: "Balcony Reconstruction" },
  { href: "/exterior-waterproofing/", label: "Building Waterproofing" },
  { href: "/commercial-construction/", label: "Commercial Construction" },
  { href: "/contact/", label: "Request Consultation" },
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

export default function SB4DCompliancePage() {
  return (
    <>
      <LocalBusinessSchema service="SB 4-D Compliance Services" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="SB 4-D Condo Remediation Services"
        serviceDescription="Expert remediation services for Florida condominiums complying with SB 4-D (Surfside Law) requirements. Milestone inspection repairs, structural restoration, and SIRS compliance throughout Tampa Bay."
        minPrice="100000"
      />

      <Breadcrumb items={[
        { name: "Resources", href: "/resources/" },
        { name: "SB 4-D Compliance Tampa Bay", href: "/sb-4-d-compliance-tampa-bay-condos/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-commercial-building.webp"
            alt="Tampa Bay condominium building compliance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">Florida Building Safety Act</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              SB 4-D Compliance for Tampa Bay Condos
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Your complete guide to Florida's milestone inspection law. Understand your obligations, meet your deadlines, and partner with Tampa Bay's trusted remediation contractor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Compliance Needs
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
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Licensed Florida GC</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">$25M+ Completed Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Tampa Bay Local</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is SB 4-D */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              What is SB 4-D? Understanding Florida's Condo Inspection Law
            </h2>
            
            <div className="mb-8">
              <Image
                src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
                alt="Balcony with tile work for condo restoration"
                width={800}
                height={500}
                className="rounded-lg w-full object-cover"
              />
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 mb-4">
                <strong>Senate Bill 4-D</strong>, passed in May 2022, is Florida's response to the tragic Champlain Towers South collapse in Surfside on June 24, 2021, which killed 98 people. Often called the "Surfside Law" or "Florida Building Safety Act," this legislation mandates regular structural inspections and reserve funding for condominium and cooperative buildings throughout the state.
              </p>
              <p className="text-gray-700">
                The law was subsequently refined by <strong>SB 154 (2023)</strong> and <strong>HB 913 (2025)</strong> to address implementation challenges while maintaining the core safety requirements.
              </p>
            </div>

            <h3 className="text-xl font-bold text-brand-green-dark mb-4">Which Buildings Are Affected?</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-brand-green-bg rounded-xl p-6">
                <h4 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Covered by SB 4-D
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Residential condominiums 3+ habitable stories</li>
                  <li>• Cooperative buildings 3+ habitable stories</li>
                  <li>• Mixed-use buildings with residential units</li>
                  <li>• Buildings with Certificate of Occupancy 30+ years ago</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl p-6">
                <h4 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 text-center">✗</span>
                  NOT Covered
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Single-family homes</li>
                  <li>• Buildings under 3 habitable stories</li>
                  <li>• 2-4 unit buildings (unless 3+ stories)</li>
                  <li>• Commercial-only buildings (different requirements)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-brand-green-dark mb-4">The Two Key Requirements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-brand-green rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-8 h-8 text-brand-green" />
                  <h4 className="text-lg font-bold text-brand-green-dark">Milestone Inspections</h4>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Required when building reaches 30 years old</li>
                  <li>• Phase 1: Visual assessment by FL licensed engineer/architect</li>
                  <li>• Phase 2: Triggered if Phase 1 finds potential issues</li>
                  <li>• Repeat every 10 years thereafter</li>
                  <li>• Results must be shared with all unit owners</li>
                </ul>
              </div>
              <div className="bg-white border-2 border-brand-gold rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-brand-gold" />
                  <h4 className="text-lg font-bold text-brand-green-dark">SIRS (Reserve Study)</h4>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Structural Integrity Reserve Study required</li>
                  <li>• Must cover 8 specific building components</li>
                  <li>• Must be completed by December 31, 2025</li>
                  <li>• Full reserve funding required starting 2026</li>
                  <li>• No more waiving reserves for structural items</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tampa Bay Jurisdictions */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <MapPin className="w-8 h-8 text-brand-green" />
            <h2 className="text-3xl font-bold text-brand-green-dark font-heading">
              Tampa Bay Jurisdiction-Specific Requirements
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Hillsborough County */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-brand-green p-4">
                <h3 className="text-xl font-bold text-white">Hillsborough County</h3>
                <p className="text-green-100 text-sm">Including Tampa, Temple Terrace, Plant City</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-brand-green-dark mb-2">Building Department Contact</h4>
                    <p className="text-gray-600 text-sm">Phone: (813) 272-5600</p>
                    <p className="text-gray-600 text-sm">Building Division handles milestone compliance</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-green-dark mb-2">Local Requirements</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Standard 365-day remediation timeline applies</li>
                      <li>• Permits through Hillsborough County Building Services</li>
                      <li>• City of Tampa coordinates with county department</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-green-dark mb-2">Extension Requests</h4>
                    <p className="text-gray-600 text-sm">
                      Submit in writing to Building Official with documentation of good-faith efforts. Evaluated case-by-case.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pinellas County */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-brand-green p-4">
                <h3 className="text-xl font-bold text-white">Pinellas County</h3>
                <p className="text-green-100 text-sm">St. Petersburg, Clearwater, Beach Communities</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-brand-green-dark mb-2">Building Department Contact</h4>
                    <p className="text-gray-600 text-sm">Phone: (727) 464-3888</p>
                    <p className="text-gray-600 text-sm">Building Services Division</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-green-dark mb-2">Special Considerations</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Highest condo density in Tampa Bay region</li>
                      <li>• Many beach communities with older buildings</li>
                      <li>• Coastal exposure accelerates deterioration</li>
                      <li>• Some municipalities have additional requirements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-green-dark mb-2">Note on 25-Year Option</h4>
                    <p className="text-gray-600 text-sm">
                      The original SB 4-D allowed 25-year triggers for coastal buildings. SB 154 removed this, standardizing at 30 years statewide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* City of Tampa */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-brand-green-dark p-4">
                <h3 className="text-xl font-bold text-white">City of Tampa</h3>
                <p className="text-green-100 text-sm">Development & Growth Management</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-brand-green-dark mb-2">Contact Information</h4>
                    <p className="text-gray-600 text-sm">Phone: (813) 274-8211</p>
                    <p className="text-gray-600 text-sm">Construction Services Division</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-green-dark mb-2">Historic District Considerations</h4>
                    <p className="text-gray-600 text-sm">
                      Buildings in historic districts (Ybor City, Hyde Park, etc.) may have additional architectural review requirements for exterior remediation work. FCS has experience navigating historic preservation requirements.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-green-dark mb-2">Permitting</h4>
                    <p className="text-gray-600 text-sm">
                      Tampa processes permits for remediation work. Our established relationships help expedite approval timelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Municipalities */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-brand-green-dark p-4">
                <h3 className="text-xl font-bold text-white">Other Tampa Bay Municipalities</h3>
                <p className="text-green-100 text-sm">St. Pete, Clearwater, Largo, and more</p>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-700 text-sm font-medium">St. Petersburg</span>
                    <span className="text-gray-500 text-sm">(727) 893-7171</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-700 text-sm font-medium">Clearwater</span>
                    <span className="text-gray-500 text-sm">(727) 562-4567</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-700 text-sm font-medium">Largo</span>
                    <span className="text-gray-500 text-sm">(727) 587-6713</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-700 text-sm font-medium">Dunedin</span>
                    <span className="text-gray-500 text-sm">(727) 298-3030</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-3">
                    FCS serves all Tampa Bay municipalities. Contact us for jurisdiction-specific guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Timeline */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Calendar className="w-8 h-8 text-brand-green" />
            <h2 className="text-3xl font-bold text-brand-green-dark font-heading">
              The Compliance Timeline: What You Need to Do Now
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline Table */}
            <div className="bg-gray-50 rounded-xl overflow-hidden mb-8">
              <table className="w-full">
                <thead className="bg-brand-green text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Deadline</th>
                    <th className="px-4 py-3 text-left font-semibold">Requirement</th>
                    <th className="px-4 py-3 text-left font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-gray-100">
                    <td className="px-4 py-3 font-medium">December 31, 2024</td>
                    <td className="px-4 py-3">Milestone inspection (buildings with CO before July 1992)</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        ✓ Passed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">December 31, 2025</td>
                    <td className="px-4 py-3">SIRS completion for all 3+ story buildings</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                        ⚠ Approaching
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-3 font-medium">December 31, 2025</td>
                    <td className="px-4 py-3">Milestone inspection (CO July 1992 - December 1994)</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                        ⚠ Approaching
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">January 1, 2026</td>
                    <td className="px-4 py-3">Full reserve funding begins (no more waivers)</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                        ⚠ Approaching
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-3 font-medium">December 31, 2026</td>
                    <td className="px-4 py-3">Coordinated SIRS/Milestone deadline (if electing coordination)</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        Extended Option
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Ongoing</td>
                    <td className="px-4 py-3">Milestone inspection when building reaches 30 years</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center px-2 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                        Continuous
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Action Items */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-3">2025 Action Items for Tampa Bay Condo Boards</h3>
                  <ul className="space-y-2 text-amber-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>If SIRS not completed: Engage reserve study professional immediately</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>If Phase 2 report received: Begin contractor selection process now</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>Review current reserve funding and plan for January 2026 requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>Communicate with unit owners about potential special assessments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens After Inspection */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            What Happens After Your Milestone Inspection?
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Pass - No Issues */}
              <div className="bg-white rounded-xl p-6 border-2 border-green-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green-dark">Pass: No Significant Issues</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Your Phase 1 inspection found no substantial structural deterioration.
                </p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• 10-year inspection cycle resets</li>
                  <li>• Continue regular maintenance</li>
                  <li>• Update SIRS as needed</li>
                  <li>• No remediation required at this time</li>
                </ul>
              </div>

              {/* Pass - Minor Issues */}
              <div className="bg-white rounded-xl p-6 border-2 border-blue-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green-dark">Pass: Minor Recommendations</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Phase 1 passed but engineer noted items for preventive maintenance.
                </p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• No Phase 2 required</li>
                  <li>• Address recommendations proactively</li>
                  <li>• Budget for suggested repairs</li>
                  <li>• May prevent future Phase 2 findings</li>
                </ul>
              </div>

              {/* Phase 2 Required */}
              <div className="bg-white rounded-xl p-6 border-2 border-amber-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green-dark">Phase 2 Required</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Phase 1 identified potential issues requiring deeper investigation.
                </p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Engineer conducts detailed assessment</li>
                  <li>• May include destructive testing</li>
                  <li>• Results determine remediation scope</li>
                  <li>• Begin planning for potential repairs</li>
                </ul>
              </div>

              {/* Phase 2 Finds Issues */}
              <div className="bg-white rounded-xl p-6 border-2 border-red-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green-dark">Phase 2 Finds Deficiencies</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Substantial structural deterioration documented. Remediation required.
                </p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• 365-day clock starts upon report receipt</li>
                  <li>• Must share report with all unit owners</li>
                  <li>• Engage remediation contractor</li>
                  <li>• <Link href="/condo-milestone-inspection-remediation/" className="text-brand-green hover:underline font-medium">FCS can help →</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIRS Components */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            The 8 Required SIRS Components
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Florida law mandates that your Structural Integrity Reserve Study include funding plans for these specific components. Reserves for these items can no longer be waived starting January 1, 2026.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { num: "1", title: "Roof", desc: "Replacement and major repairs" },
              { num: "2", title: "Structural Systems", desc: "Load-bearing walls, foundations, floors" },
              { num: "3", title: "Fire Protection", desc: "Sprinklers, alarms, fireproofing" },
              { num: "4", title: "Plumbing", desc: "Main lines, risers, common piping" },
              { num: "5", title: "Electrical", desc: "Main panels, common area wiring" },
              { num: "6", title: "Waterproofing", desc: "Exterior painting and coatings" },
              { num: "7", title: "Windows & Doors", desc: "Common element windows, sliders" },
              { num: "8", title: "Items Over $25K", desc: "Any structural integrity items" },
            ].map((item) => (
              <div key={item.num} className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  {item.num}
                </div>
                <h3 className="font-bold text-brand-green-dark mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-2xl mx-auto">
            <div className="bg-brand-green-bg rounded-xl p-6 text-center">
              <h3 className="font-bold text-brand-green-dark mb-2">FCS Handles Repairs for All 8 SIRS Components</h3>
              <p className="text-gray-700 text-sm mb-4">
                From roof replacement to structural concrete restoration, we're your single-source remediation contractor for all SIRS-required repairs throughout Tampa Bay.
              </p>
              <Link href="/contact/" className="inline-flex items-center text-brand-green font-semibold hover:underline">
                Discuss Your SIRS Repair Needs <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Florida Statute References */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Key Florida Statute References
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-brand-green-dark mb-2">F.S. 553.899 — Mandatory Structural Inspections</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Establishes milestone inspection requirements, Phase 1/Phase 2 protocols, inspector qualifications, and remediation timelines.
                </p>
                <a 
                  href="https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.899.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-green hover:underline text-sm"
                >
                  View Full Statute →
                </a>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-brand-green-dark mb-2">F.S. 718.112(2)(g) — Condominium Reserve Requirements</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Defines SIRS requirements, the 8 required components, reserve funding mandates, and the end of reserve waivers for structural items.
                </p>
                <a 
                  href="https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0718/Sections/0718.112.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-green hover:underline text-sm"
                >
                  View Full Statute →
                </a>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-brand-green-dark mb-2">F.S. 718.113 — Maintenance, Repair, and Replacement</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Outlines association responsibilities for common element maintenance, board authority for repairs, and special assessment procedures.
                </p>
                <a 
                  href="https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0718/Sections/0718.113.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-green hover:underline text-sm"
                >
                  View Full Statute →
                </a>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-brand-green-dark mb-2">DBPR Condo Reporting Portal</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Florida Department of Business and Professional Regulation portal for condo association milestone inspection and SIRS reporting.
                </p>
                <a 
                  href="https://www.myfloridalicense.com/condos-timeshares-mobile-homes/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-green hover:underline text-sm"
                >
                  Access DBPR Portal →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner with FCS */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Partner with Florida Construction Specialists
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            When your milestone inspection identifies issues requiring remediation, FCS is the Tampa Bay contractor condo boards trust to get the job done right.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Award,
                title: "Commercial Expertise",
                desc: "20+ years specializing in large-scale commercial and multi-family construction. Not a residential handyman outfit.",
              },
              {
                icon: Building2,
                title: "Tampa Bay Local",
                desc: "Based in Ruskin, serving Hillsborough, Pinellas, and surrounding counties. We know local codes and building departments.",
              },
              {
                icon: Shield,
                title: "Fully Licensed & Bonded",
                desc: "Florida CGC license, 40+ years experience and in-house engineering, comprehensive insurance. Your association is protected.",
              },
              {
                icon: FileText,
                title: "Engineering Collaboration",
                desc: "We work with—not against—your milestone inspection engineer. Seamless coordination for better outcomes.",
              },
              {
                icon: Building2,
                title: "Occupied Building Experience",
                desc: "Dozens of completed projects in occupied condos. We minimize disruption while maintaining quality and timeline.",
              },
              {
                icon: CheckCircle,
                title: "Full-Service Remediation",
                desc: "From concrete restoration to waterproofing to balcony reconstruction—one contractor for your entire project.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-6">
                <item.icon className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks 
            title="Related Condo Compliance Resources" 
            links={internalLinks} 
          />
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema 
        items={faqs} 
        title="SB 4-D Compliance FAQs" 
        description="Common questions from Tampa Bay condo boards about Florida's milestone inspection law"
      />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Need Help with SB 4-D Compliance?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists offers complimentary consultations for Tampa Bay condo associations navigating milestone inspection requirements. Let us review your situation and explain your options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Consultation
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
