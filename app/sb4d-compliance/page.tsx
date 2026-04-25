import Link from "next/link";
import type { Metadata } from "next";
import { Phone, MapPin, CheckCircle, Shield, Award, AlertTriangle, Calendar, DollarSign, ClipboardCheck, Search, Building2, ArrowRight, Scale, FileCheck } from "lucide-react";
import { ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { BUSINESS_INFO } from "@/lib/constants";
import { CodeReference } from "@/components/CodeReference";
import { AuthorByline } from "@/components/AuthorByline";
import { RelatedServices } from "@/components/InternalLinks";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/sb4d-compliance/' },
  title: "SB4-D Compliance Tampa Bay",
  description: "SB4-D compliance services for Tampa Bay condo associations. Milestone inspection remediation, SIRS coordination, structural repairs.",
  openGraph: {
    title: "SB4-D Compliance Tampa Bay",
    description: "SB4-D compliance services for Tampa Bay condo associations. Milestone inspection remediation, SIRS coordination, structural repairs.",
    url: "https://floridaconstructionspecialists.com/sb4d-compliance/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "What is SB4-D and which buildings does it apply to?",
    answer: "SB4-D refers to Florida Senate Bill 4-D, passed in 2022 following the Champlain Towers collapse in Surfside. It requires condominium and cooperative buildings three stories or higher to undergo milestone structural inspections at 30 years of age, or 25 years if located within three miles of the coastline. The law also mandates Structural Integrity Reserve Studies (SIRS) for these buildings and prohibits associations from waiving or reducing reserve contributions for critical structural components. SB4-D was later amended by HB 913 in 2025, which introduced additional requirements including baseline funding plans and enhanced reporting to DBPR."
  },
  {
    question: "Are SB4-D milestone inspection deadlines already past due?",
    answer: "Yes. The December 31, 2024 deadline for buildings with certificates of occupancy issued before July 1, 1992 has passed. The December 31, 2025 deadline for SIRS completion and for buildings with certificates of occupancy between July 1992 and December 1994 has also passed. If your building falls into either category and has not completed these requirements, you are currently non-compliant. The next major deadline is December 31, 2026 for the coordinated SIRS and milestone inspection cycle. Buildings that have not yet begun the compliance process face escalating exposure to insurance non-renewal, lending restrictions, and code enforcement action."
  },
  {
    question: "What happens if our condo association misses the SB4-D deadline?",
    answer: "Non-compliance with SB4-D creates several escalating consequences. Insurance carriers may decline to renew coverage or significantly increase premiums, making the building effectively uninsurable. Mortgage lenders may refuse to finance or refinance unit purchases, depressing property values across the entire building. Local building departments can issue code violations and pursue unsafe building proceedings. Association board members may face personal liability for failing to meet their fiduciary duty. Additionally, the longer remediation is deferred, the more structural deterioration progresses and the more expensive repairs become. Early action limits both legal exposure and construction costs."
  },
  {
    question: "How does FCS coordinate with structural engineers for milestone inspections?",
    answer: "Florida Construction Specialists works alongside licensed structural engineers throughout the milestone inspection and remediation process. While the inspections themselves must be performed by a licensed Professional Engineer or architect under Florida law, FCS provides construction expertise during the assessment phase to help scope remediation options before the final report is complete. This parallel approach shortens the timeline from inspection findings to construction start. Our dedicated engineering partners have decades of experience with Florida structural assessments, and we coordinate with them during and after remediation to obtain the threshold building certification that demonstrates compliance."
  },
  {
    question: "What does SB4-D remediation typically involve?",
    answer: "The scope depends on the milestone inspection findings. Common remediation work includes structural concrete repair where spalling and corroded reinforcement are found, balcony and exterior walkway restoration, post-tension cable testing and replacement, building envelope waterproofing to address failed membranes and sealant joints, parking structure repair, and drainage improvements. For many Tampa Bay buildings, the combination of salt air, heavy rainfall, and decades of deferred maintenance has produced deterioration across multiple building systems. FCS develops prioritized remediation plans that address critical structural repairs first while planning for longer-term envelope and waterproofing improvements."
  },
  {
    question: "How much does SB4-D compliance remediation cost?",
    answer: "Remediation costs vary significantly based on building size, condition, and the scope of deficiencies identified during the milestone inspection. Special assessments to unit owners can range from $10,000 to $150,000 or more per unit. Building-wide balcony remediation typically costs $500,000 to $5 million, comprehensive concrete restoration ranges from $1 million to $15 million, and parking structure repairs run $500,000 to $10 million. We recommend budgeting a 10 to 20 percent contingency above initial estimates, as hidden damage is commonly discovered once demolition begins. FCS provides detailed cost breakdowns during the scoping phase to help associations plan assessments and phasing."
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial", href: "/commercial/" },
  { name: "SB4-D Compliance", href: "/sb4d-compliance/" },
];

const hubPages = [
  {
    title: "Compliance Checklist",
    href: "/sb4d-compliance/checklist/",
    description: "Step-by-step checklist for condo boards to assess and achieve SB4-D compliance. Actionable steps with clear responsibility assignments.",
    icon: ClipboardCheck,
  },
  {
    title: "Deadline Calendar",
    href: "/sb4d-compliance/deadlines/",
    description: "Current milestone dates and past-due status for each building category. Understand where your building stands today.",
    icon: Calendar,
  },
  {
    title: "Cost Guidance",
    href: "/sb4d-compliance/costs/",
    description: "Realistic cost ranges for milestone inspection remediation, per-unit assessment planning, and financing considerations.",
    icon: DollarSign,
  },
  {
    title: "Inspection & SIRS Guide",
    href: "/sb4d-compliance/inspection-process/",
    description: "How Phase 1 and Phase 2 milestone inspections work, what SIRS requires, and what happens after findings are reported.",
    icon: Search,
  },
];

const locationPages = [
  {
    city: "Tampa",
    href: "/sb4d-compliance/tampa/",
    context: "Bayshore Boulevard corridor, Harbour Island, Davis Islands, Channelside high-rises",
  },
  {
    city: "St. Petersburg",
    href: "/sb4d-compliance/st-petersburg/",
    context: "Highest condo density in Tampa Bay, beach communities, barrier island properties",
  },
  {
    city: "Clearwater",
    href: "/sb4d-compliance/clearwater/",
    context: "Beach condo concentration, Sand Key, Island Estates, 25-year coastal trigger",
  },
  {
    city: "Sarasota",
    href: "/sb4d-compliance/sarasota/",
    context: "Barrier island luxury condos, Siesta Key, Lido Key, Longboat Key",
  },
];

export default function SB4DCompliancePage() {
  return (
    <>
      <ServiceSchema
        serviceName="SB4-D Compliance Remediation"
        serviceDescription="SB4-D milestone inspection remediation and compliance services for Tampa Bay condominium associations. Structural concrete repair, balcony restoration, SIRS coordination, building envelope waterproofing. Licensed CBC1262722, serving Florida since 1982."
        serviceCategories={["Milestone Inspection Remediation", "Structural Concrete Repair", "SIRS Coordination", "Balcony Restoration", "Building Envelope Waterproofing", "Parking Structure Remediation"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/tampa-condo-building-construction/tampa-condo-building-construction-display.webp')] bg-cover bg-center opacity-15" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full mb-6">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 font-semibold">Multiple Deadlines Already Past Due</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              SB4-D Compliance for Tampa Bay Condominiums
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Many Tampa Bay buildings are already past their SB4-D compliance deadlines. Florida Construction Specialists provides milestone inspection remediation, SIRS coordination, and structural repair services to help condo associations achieve compliance and protect their buildings.
            </p>

            <AuthorByline variant="light" />

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Since 1982</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">License {BUSINESS_INFO.licenseNumber}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Scale className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">SB4-D Remediation Specialists</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-cta flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call to Discuss Your Building&apos;s Compliance Needs
              </a>
              <Link href="/contact/" className="btn-secondary flex items-center justify-center gap-2">
                Request Consultation Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Past-Due Warning Callout */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-10">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-900 text-lg">Many Buildings Are Already Past Due</p>
                  <div className="mt-3 space-y-2 text-amber-800 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-0.5 rounded mt-0.5 flex-shrink-0">PAST DUE</span>
                      <span><strong>December 31, 2024:</strong> Milestone inspection deadline for buildings with certificates of occupancy before July 1, 1992</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-0.5 rounded mt-0.5 flex-shrink-0">PAST DUE</span>
                      <span><strong>December 31, 2025:</strong> SIRS completion deadline and milestone inspection for buildings with CO between July 1992 and December 1994</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-0.5 rounded mt-0.5 flex-shrink-0">APPROACHING</span>
                      <span><strong>December 31, 2026:</strong> Coordinated SIRS and milestone inspection deadline</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What SB4-D Requires */}
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              What SB4-D Requires of Your Building
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                <strong>For condo board members:</strong> Florida&apos;s SB4-D legislation, passed after the Champlain Towers collapse in Surfside, requires your building to undergo a professional structural inspection and demonstrate that you have adequate reserves to fund necessary repairs. If your building is three stories or higher and has reached a certain age, these are not optional. The deadlines are set by state law, and many have already passed.
              </p>
              <p className="mb-6">
                <strong>For property managers:</strong> SB4-D created two primary obligations. First, milestone inspections: a qualified licensed engineer or architect must perform a structural assessment of the building at 30 years of age (or 25 years if the building is within three miles of the coastline). If the Phase 1 visual inspection identifies signs of substantial structural deterioration, a Phase 2 inspection requiring destructive and non-destructive testing follows. Any remediation identified in Phase 2 must commence within 365 days. Second, Structural Integrity Reserve Studies (SIRS): the association must complete a reserve study that specifically accounts for structural components and establish a funding plan that keeps reserves above zero.
              </p>
              <p className="mb-6">
                The practical impact is significant. Buildings that fail to comply face insurance non-renewal, lending restrictions that prevent unit sales and refinancing, code enforcement action from local building departments, and potential personal liability for board members who fail to act. For many Tampa Bay buildings built in the 1970s through the 1990s, decades of deferred maintenance combined with Florida&apos;s aggressive salt air and rainfall environment have produced structural deterioration that now requires professional remediation.
              </p>
              <p>
                Florida Construction Specialists helps condo associations move from inspection findings to completed remediation. As a licensed Certified Building Contractor with direct access to licensed structural engineers, we coordinate the entire process from initial scope development through final structural certification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hub Navigation Cards */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            SB4-D Compliance Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Detailed guidance for each aspect of SB4-D compliance, from initial assessment through completed remediation.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {hubPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg hover:border-brand-green/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center flex-shrink-0">
                    <page.icon className="w-6 h-6 text-brand-green-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2 group-hover:text-brand-green transition-colors flex items-center gap-2">
                      {page.title}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-gray-600 text-sm">{page.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Location Cards */}
          <h3 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            SB4-D Compliance by Location
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {locationPages.map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                className="bg-white rounded-lg p-4 border border-gray-100 hover:shadow-md hover:border-brand-green/30 transition-all group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-brand-gold" />
                  <h4 className="font-bold text-brand-green-dark group-hover:text-brand-green transition-colors">
                    {loc.city}
                  </h4>
                </div>
                <p className="text-gray-500 text-xs">{loc.context}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why FCS for SB4-D Compliance */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Why Florida Construction Specialists for SB4-D Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            SB4-D remediation requires a contractor with structural repair expertise, engineering coordination capabilities, and experience working with condo associations under deadline pressure.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Search,
                title: "Direct Access to Licensed Structural Engineers",
                description: "Our dedicated engineering partners have decades of experience with Florida structural assessments. We coordinate directly with licensed Professional Engineers throughout the inspection and remediation process, shortening the timeline from findings to construction."
              },
              {
                icon: Award,
                title: "Licensed Certified Building Contractor",
                description: `FCS holds Florida CBC license ${BUSINESS_INFO.licenseNumber}, qualifying us for the full scope of structural remediation work required under SB4-D. We serve as the prime contractor on every project, maintaining direct accountability to the association.`
              },
              {
                icon: Shield,
                title: "Structural Repair Expertise Since 1982",
                description: "Over four decades of concrete restoration, waterproofing, and structural repair experience in Florida's demanding climate. We understand the deterioration patterns caused by salt air, high humidity, and heavy rainfall that affect Tampa Bay's aging building stock."
              },
              {
                icon: Building2,
                title: "Condo Association Experience",
                description: "We understand the realities of working with condo associations: board approval processes, special assessment coordination, phased construction to minimize resident disruption, and clear communication with hundreds of individual unit owners."
              },
              {
                icon: FileCheck,
                title: "Complete Documentation and Certification",
                description: "From initial scope development through final structural certification, we compile the repair specifications, material certifications, quality control records, and compliance documentation your association needs to demonstrate SB4-D compliance."
              },
              {
                icon: Scale,
                title: "Affiliated Public Adjuster Resource",
                description: "For associations with insurance claims related to structural deterioration, we can connect you with affiliated public adjuster resources to help navigate the claims process alongside remediation construction."
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-brand-green-dark" />
                </div>
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Reference */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <CodeReference
              code="Florida Statute 553.899"
              section="Mandatory Structural Inspections for Condominium and Cooperative Buildings"
              description="Requires milestone inspections for all condominium and cooperative buildings three stories or higher at 30 years of age (25 years if within three miles of the coastline). Phase 2 inspection remediation must commence within 365 days of the report. Associations must also complete Structural Integrity Reserve Studies and maintain compliant reserve funding."
              link="https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.899.html"
              linkText="View Florida Statute 553.899"
            />

            {/* HB 913 Section */}
            <div className="mt-10">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                HB 913: Key Changes Effective July 1, 2025
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  House Bill 913, signed into law in June 2025, amended several provisions of the original SB4-D legislation. Understanding these changes is important for associations planning their compliance approach.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Baseline Funding Plan Requirement",
                    detail: "SIRS must now include a baseline funding plan demonstrating that reserves remain above zero throughout the study period. This prevents associations from adopting reserve plans that technically comply on paper but leave the association underfunded."
                  },
                  {
                    title: "Increased Reserve Threshold",
                    detail: "The reserve threshold increased from $10,000 to $25,000, indexed to inflation. This higher threshold captures more buildings under the mandatory reserve requirements."
                  },
                  {
                    title: "Two-Year Reserve Pause Option",
                    detail: "Associations may pause reserve contributions for up to two fiscal years to prioritize immediate structural repairs. This provision recognizes that some associations face the competing demands of funding remediation construction while building reserves."
                  },
                  {
                    title: "Enhanced Conflict-of-Interest Disclosures",
                    detail: "Engineers and architects performing milestone inspections must now provide enhanced conflict-of-interest disclosures, strengthening the independence of the inspection process."
                  },
                  {
                    title: "Online DBPR Reporting",
                    detail: "Associations are now required to submit inspection reports and compliance documentation online through the Department of Business and Professional Regulation portal, improving transparency and enforcement tracking."
                  },
                ].map((change) => (
                  <div key={change.title} className="bg-white rounded-lg p-5 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-brand-green-dark">{change.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{change.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={faqs}
        title="SB4-D Compliance FAQ"
        description="Frequently asked questions about SB4-D compliance requirements, deadlines, and remediation for Tampa Bay condominiums."
      />

      {/* Related Services */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading text-center">
              Related Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { href: "/commercial/condo-remediation/", label: "Condo Remediation Services", desc: "Comprehensive remediation for aging condo buildings" },
                { href: "/balcony-reconstruction/", label: "Balcony Reconstruction", desc: "Structural balcony repair and waterproofing" },
                { href: "/exterior-waterproofing/", label: "Exterior Waterproofing", desc: "Building envelope protection and moisture management" },
                { href: "/multi-family-construction/", label: "Multi-Family Construction", desc: "New construction and major renovation for multi-family properties" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100 hover:shadow-md hover:border-brand-green/30 transition-all group"
                >
                  <ArrowRight className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                  <div>
                    <span className="font-bold text-brand-green-dark group-hover:text-brand-green transition-colors">{link.label}</span>
                    <p className="text-gray-500 text-sm mt-1">{link.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-brand-green-dark to-brand-green-forest">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Discuss Your Building&apos;s Compliance Needs
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you&apos;ve received a Phase 2 inspection report or haven&apos;t started the process yet, our team can help you understand your obligations and develop a remediation plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-brand-green-dark font-bold rounded-lg hover:bg-brand-gold-light transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {BUSINESS_INFO.phone}
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              Request Consultation Online
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-300">
              <span>License {BUSINESS_INFO.licenseNumber}</span>
              <span>Dedicated Engineering Partners</span>
              <span>Since 1982</span>
              <span>SB4-D Remediation Specialists</span>
            </div>
          </div>
        </div>
      </section>
    <RelatedArticles pageSlug="sb4d-compliance" />
    </>
  );
}
