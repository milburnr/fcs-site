import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, AlertTriangle, FileText } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Florida Condo Milestone Inspection Remediation | Phase 2 Repair Specialists | FCS",
  description: "Expert remediation after Phase 2 milestone inspections reveal structural deficiencies. Tampa Bay's trusted contractor for condo concrete restoration, balcony repairs, and SB 4-D compliance. 365-day deadline specialists.",
  keywords: "florida condo milestone inspection remediation, phase 2 inspection repairs, sb 4-d remediation contractor, condo structural repair florida, milestone inspection contractor tampa",
};

const remediationServices = [
  "Concrete spalling and rebar corrosion repair",
  "Balcony structural restoration",
  "Parking structure rehabilitation",
  "Building envelope waterproofing",
  "Post-tension cable inspection and repair",
  "Structural crack injection and repair",
  "Walkway and corridor restoration",
  "Window and slider frame remediation",
];

const faqs = [
  {
    question: "What happens if we can't afford the repairs identified in our Phase 2 inspection?",
    answer: "Florida law requires that repairs commence within 365 days, but there are options. Associations can levy special assessments, obtain bank loans, or work with contractors like FCS to phase repairs strategically. Some associations are also exploring Fannie Mae and FHA lending programs designed for condo rehabilitation. The key is starting the process—we can help structure a phased approach that addresses the most critical safety items first while keeping costs manageable.",
  },
  {
    question: "Can we get a second opinion on our Phase 2 inspection findings?",
    answer: "Yes, you have the right to engage another licensed Florida engineer or architect to review the findings. However, be aware that this doesn't stop the 365-day clock. If you dispute findings, we recommend engaging a second engineer quickly while simultaneously beginning remediation planning. FCS works with multiple engineering firms and can facilitate coordination between parties.",
  },
  {
    question: "How do we communicate with residents during major remediation construction?",
    answer: "Communication is critical for successful condo remediation projects. FCS provides a comprehensive communication plan including pre-construction meetings with unit owners, weekly progress updates, dedicated contact information for resident concerns, advance notice of any utility interruptions or access restrictions, and regular board updates. We've managed dozens of occupied building projects and understand the importance of keeping residents informed.",
  },
  {
    question: "What happens if we miss the 365-day deadline to begin repairs?",
    answer: "Missing the deadline can expose the association and individual board members to significant liability. Under Florida Statute 553.899, failure to comply can result in enforcement actions, potential fines, and personal liability for board members. Insurance carriers may also use non-compliance as grounds to deny coverage. The best approach is to engage a contractor early—even if full funding isn't available, demonstrating good faith progress toward compliance is important.",
  },
  {
    question: "Can repairs be phased over multiple years to spread costs?",
    answer: "Yes, phasing is often the most practical approach for large remediation projects. FCS works with associations to prioritize repairs based on safety criticality, develop multi-year remediation plans that address the most urgent issues first, coordinate with engineering firms to document phased compliance, and structure projects to align with special assessment collection timelines. The key is having a documented plan that shows continuous progress.",
  },
  {
    question: "Do we need a construction manager for our condo remediation project?",
    answer: "For projects over $1 million, a construction manager or owner's representative can be valuable. However, FCS serves as prime contractor with full project management capabilities. We coordinate directly with your engineer, manage all subcontractors, handle permitting, and provide complete project oversight. For smaller associations, our integrated approach often eliminates the need for separate construction management.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Condo Milestone Inspection Remediation", href: "/condo-milestone-inspection-remediation/" },
];

const internalLinks = [
  { href: "/sb-4-d-compliance-tampa-bay-condos/", label: "SB 4-D Compliance Guide" },
  { href: "/condo-structural-reserve-study-repairs/", label: "SIRS Repair Planning" },
  { href: "/balcony-reconstruction/", label: "Balcony Reconstruction" },
  { href: "/exterior-waterproofing/", label: "Building Waterproofing" },
  { href: "/condo-balcony-inspection-requirements/", label: "Balcony Inspection Requirements" },
  { href: "/contact/", label: "Request Consultation" },
];

export default function CondoMilestoneInspectionRemediationPage() {
  return (
    <>
      <LocalBusinessSchema service="Condo Milestone Inspection Remediation" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Condo Milestone Inspection Remediation"
        serviceDescription="Expert remediation services for Florida condominiums following Phase 2 milestone inspections. Concrete restoration, balcony repairs, structural rehabilitation, and full SB 4-D compliance throughout Tampa Bay."
        minPrice="250000"
      />

      <Breadcrumb items={[
        { name: "Services", href: "/services/" },
        { name: "Condo Milestone Inspection Remediation", href: "/condo-milestone-inspection-remediation/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-concrete-restoration.webp"
            alt="Condo concrete restoration and milestone inspection remediation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">Phase 2 Inspection Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Florida Condo Milestone Inspection Remediation
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Your Phase 2 inspection revealed structural deficiencies. The 365-day clock has started. Florida Construction Specialists is your trusted partner for expert remediation throughout Tampa Bay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule Board Consultation
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
              <span className="font-semibold text-gray-700">$10M+ Bonding Capacity</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Your Phase 2 Report */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Understanding Your Phase 2 Milestone Inspection Report
            </h2>
            <p className="text-gray-600 mb-6">
              If your Phase 1 visual assessment identified potential issues, your building was required to undergo a more comprehensive Phase 2 inspection. This deeper investigation may have included destructive testing, core samples, and detailed structural analysis. Now you're facing the results—and the legal requirement to act.
            </p>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">What "Substantial Structural Deterioration" Means</h3>
                  <p className="text-amber-700">
                    Under Florida Statute 553.899, this term refers to deterioration that "is adversely affecting the structural capacity of a building or structure." It doesn't necessarily mean imminent collapse—but it does mean repairs cannot wait. Your engineer has identified conditions that, if left unaddressed, could compromise building safety.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-brand-green-dark mb-4">Common Findings in Tampa Bay Phase 2 Reports</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { issue: "Concrete spalling with exposed rebar", severity: "Common" },
                { issue: "Chloride contamination from salt air", severity: "Very Common" },
                { issue: "Balcony structural deterioration", severity: "Very Common" },
                { issue: "Post-tension cable corrosion", severity: "Moderate" },
                { issue: "Waterproofing membrane failure", severity: "Common" },
                { issue: "Parking structure deck degradation", severity: "Very Common" },
                { issue: "Window and door frame corrosion", severity: "Common" },
                { issue: "Foundation or pile cap deterioration", severity: "Less Common" },
              ].map((item) => (
                <div key={item.issue} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                  <div>
                    <span className="text-gray-700">{item.issue}</span>
                    <span className="text-sm text-gray-500 ml-2">({item.severity})</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-brand-green-bg p-6 rounded-xl">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6" />
                Your Legal Obligations Under F.S. 553.899
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>Distribute Phase 2 report to all unit owners within 45 days of receipt</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>Begin remediation within 365 days of receiving the Phase 2 report</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>Report compliance status to local building official</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>Maintain records and update DBPR reporting database</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 365-Day Timeline */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-brand-green" />
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading">
                The 365-Day Remediation Timeline
              </h2>
            </div>
            
            <p className="text-gray-600 mb-8">
              Florida law is clear: once your association receives the Phase 2 inspection report documenting substantial structural deterioration, you have 365 days to <strong>commence repairs</strong>. Not complete them—but meaningfully begin the remediation process.
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">What "Commence Repairs" Means Legally</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span><strong>Contractor engagement:</strong> Signed contract with a licensed general contractor</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span><strong>Permit application:</strong> Building permits submitted to local jurisdiction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span><strong>Physical work:</strong> Actual construction activity has begun on-site</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">
                Simply hiring an engineer for additional assessment or getting bids does not satisfy the "commence repairs" requirement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border-l-4 border-brand-green">
                <h4 className="font-bold text-brand-green-dark mb-3">Local Jurisdiction Variations</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Some Tampa Bay municipalities have additional requirements or expedited timelines:
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Hillsborough County: Standard 365-day timeline</li>
                  <li>• Pinellas County: Some beach communities require faster action</li>
                  <li>• City of Tampa: Coordinates with county building department</li>
                  <li>• Clearwater: Additional coastal building requirements</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 border-l-4 border-amber-500">
                <h4 className="font-bold text-amber-800 mb-3">Extension Possibilities</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Extensions may be granted by the local building official if:
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Good faith effort to begin repairs can be demonstrated</li>
                  <li>• Contractor/material availability issues are documented</li>
                  <li>• Financing challenges are being actively addressed</li>
                  <li>• Weather or emergency conditions prevent progress</li>
                </ul>
                <p className="text-xs text-amber-700 mt-3 font-medium">
                  Extensions are not guaranteed. Don't count on them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Remediation Projects */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Common Remediation Projects for Tampa Bay Condos
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Concrete Spalling */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-4">
                <Image
                  src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
                  alt="Balcony with tile work for condo restoration"
                  width={600}
                  height={400}
                  className="rounded-lg w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">
                Concrete Spalling & Rebar Corrosion
              </h3>
              <p className="text-gray-600 mb-4">
                The combination of salt air, humidity, and age causes reinforcing steel to corrode, expanding and breaking away the surrounding concrete. This is the most common issue found in Tampa Bay Phase 2 inspections.
              </p>
              <div className="space-y-2 mb-4">
                <p className="text-sm"><strong>Why it happens:</strong> Chloride penetration, carbonation, inadequate concrete cover, original construction quality</p>
                <p className="text-sm"><strong>Repair methods:</strong> Patch repair, section removal and replacement, cathodic protection for severe cases</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Typical Cost Ranges:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Patch repairs: $50–$150 per square foot</li>
                  <li>• Section replacement: $150–$300 per square foot</li>
                  <li>• Building-wide restoration: $500K–$5M+</li>
                </ul>
              </div>
            </div>

            {/* Balcony Restoration */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">
                Balcony Structural Restoration
              </h3>
              <p className="text-gray-600 mb-4">
                Balconies are particularly vulnerable in Florida due to direct exposure to weather, inadequate drainage, and the challenges of waterproofing cantilevered structures. Many buildings constructed in the 1970s-1990s are now experiencing significant deterioration.
              </p>
              <div className="space-y-2 mb-4">
                <p className="text-sm"><strong>Common issues:</strong> Railing post corrosion, slab edge deterioration, waterproofing failure, drainage problems</p>
                <p className="text-sm"><strong>Solutions:</strong> Structural repair with new waterproofing, partial replacement, or full reconstruction</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Typical Cost Ranges:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Per-unit average: $15,000–$50,000</li>
                  <li>• Building-wide (50 units): $500K–$2.5M</li>
                  <li>• Timeline: 3–8 months depending on scope</li>
                </ul>
              </div>
            </div>

            {/* Parking Structure */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">
                Parking Structure Rehabilitation
              </h3>
              <p className="text-gray-600 mb-4">
                Parking garages experience accelerated deterioration from vehicle traffic, salt from nearby roads and coastal air, and the challenge of maintaining waterproofing on horizontal surfaces. Post-tension cable issues are particularly common.
              </p>
              <div className="space-y-2 mb-4">
                <p className="text-sm"><strong>Key concerns:</strong> Post-tension cable corrosion, traffic membrane failure, structural crack propagation, column/beam deterioration</p>
                <p className="text-sm"><strong>Approach:</strong> Comprehensive assessment, phased repair, new traffic coating system</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Typical Cost Ranges:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Deck coating replacement: $8–$15 per square foot</li>
                  <li>• Structural repairs: $40–$120 per square foot</li>
                  <li>• Full rehabilitation: $500K–$10M</li>
                </ul>
              </div>
            </div>

            {/* Building Envelope */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="mb-4">
                <Image
                  src="/wp-content/uploads/2023/12/FCS-Exterior-Waterproofing.png"
                  alt="Black bituminous waterproofing applied to exposed brick foundation wall during excavation"
                  width={600}
                  height={400}
                  className="rounded-lg w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">
                Building Envelope Waterproofing
              </h3>
              <p className="text-gray-600 mb-4">
                The building envelope—walls, windows, doors, and roof interfaces—is your first defense against water intrusion. Failed waterproofing leads to interior damage, mold, and accelerated structural deterioration.
              </p>
              <div className="space-y-2 mb-4">
                <p className="text-sm"><strong>Systems include:</strong> Elastomeric coatings, joint sealants, window perimeter sealing, below-grade waterproofing</p>
                <p className="text-sm"><strong>SIRS connection:</strong> Waterproofing is one of the 8 required reserve study components under Florida law</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Typical Cost Ranges:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Exterior coating: $5–$15 per square foot</li>
                  <li>• Window/door sealing: $500–$2,000 per unit</li>
                  <li>• Building-wide envelope: $200K–$2M</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selecting a Contractor */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Selecting a Remediation Contractor: What Condo Boards Should Look For
              </h2>
              <p className="text-gray-600 mb-6">
                Choosing the right contractor for milestone inspection remediation is one of the most important decisions your board will make. This isn't a typical maintenance project—it's a complex undertaking with legal, safety, and financial implications.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Florida General Contractor License",
                    desc: "Verify active CGC or CBC license through DBPR. Don't accept unlicensed 'specialty' contractors for structural work.",
                  },
                  {
                    title: "Commercial Multi-Family Experience",
                    desc: "Residential contractors aren't equipped for condo remediation. Look for documented experience with occupied multi-family buildings.",
                  },
                  {
                    title: "Insurance and Bonding",
                    desc: "Require $2M+ general liability, workers' comp, and payment/performance bonds. Projects over $500K should be bonded.",
                  },
                  {
                    title: "Engineering Firm Relationships",
                    desc: "The best contractors work collaboratively with engineers—not adversarially. Ask about their approach to engineer coordination.",
                  },
                  {
                    title: "Condo Association References",
                    desc: "Request references from other HOAs and property managers. Ask specifically about communication, timeline adherence, and change order management.",
                  },
                  {
                    title: "Warranty and Workmanship Guarantees",
                    desc: "Standard should be 1-year workmanship warranty minimum. Materials should carry manufacturer warranties of 5-15 years depending on system.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-brand-green-dark">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">
                Our Remediation Services Include:
              </h3>
              <ul className="space-y-3">
                {remediationServices.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t">
                <Link
                  href="/contact/"
                  className="btn-cta w-full text-center"
                >
                  Request Board Presentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Remediation Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-12 text-center font-heading">
            The Remediation Process: From Report to Resolution
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Report Review & Scope Development",
                  desc: "We review your Phase 2 inspection report with your engineering firm, clarifying findings, prioritizing repairs, and developing a preliminary scope of work.",
                  timeline: "Week 1-2",
                },
                {
                  step: "2",
                  title: "Engineering Coordination",
                  desc: "We coordinate with your milestone inspection engineer to ensure our proposed solutions align with their findings and recommendations. If needed, we can recommend additional engineering support.",
                  timeline: "Week 2-4",
                },
                {
                  step: "3",
                  title: "Detailed Proposal & Cost Breakdown",
                  desc: "You receive a comprehensive proposal with detailed line-item pricing, phasing options, timeline, and payment schedule. We present to your board and answer questions.",
                  timeline: "Week 4-6",
                },
                {
                  step: "4",
                  title: "Board Approval & Contract",
                  desc: "Once approved, we execute a detailed contract covering scope, timeline, payment terms, warranty, and resident communication protocols.",
                  timeline: "Week 6-8",
                },
                {
                  step: "5",
                  title: "Permitting",
                  desc: "We handle all permit applications with Hillsborough County, Pinellas County, or municipal building departments. Our relationships help expedite approval.",
                  timeline: "Week 8-12",
                },
                {
                  step: "6",
                  title: "Phased Construction",
                  desc: "Construction proceeds in phases to minimize resident disruption. We coordinate access, manage noise/dust, and provide regular progress updates.",
                  timeline: "Varies by scope",
                },
                {
                  step: "7",
                  title: "Final Engineering Sign-Off",
                  desc: "Upon completion, your engineer inspects the work and provides sign-off documentation. We assist with amended inspection report filing to satisfy compliance requirements.",
                  timeline: "Project completion",
                },
              ].map((phase) => (
                <div key={phase.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center text-xl font-bold">
                      {phase.step}
                    </div>
                  </div>
                  <div className="flex-1 pb-6 border-b border-gray-200 last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-brand-green-dark">{phase.title}</h3>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{phase.timeline}</span>
                    </div>
                    <p className="text-gray-600">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 text-center font-heading">
              Financing Major Condo Remediation Projects
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Funding multi-million dollar remediation projects is one of the biggest challenges condo boards face. Here are the options available to Tampa Bay associations:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">Special Assessments</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Direct billing to unit owners based on ownership percentage. Can be collected as lump sum or over 12-24 months.
                </p>
                <div className="text-sm">
                  <p className="text-green-700 mb-1">✓ No interest costs</p>
                  <p className="text-green-700 mb-1">✓ No approval delays</p>
                  <p className="text-red-700 mb-1">✗ Can strain owners financially</p>
                  <p className="text-red-700">✗ May impact unit values short-term</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">Bank Loans / Lines of Credit</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Association borrows funds and repays through increased monthly assessments over 5-15 years.
                </p>
                <div className="text-sm">
                  <p className="text-green-700 mb-1">✓ Spreads cost over time</p>
                  <p className="text-green-700 mb-1">✓ More affordable monthly payments</p>
                  <p className="text-red-700 mb-1">✗ Interest adds 15-30% to total cost</p>
                  <p className="text-red-700">✗ Requires lender approval process</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">Fannie Mae / FHA Considerations</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Non-compliant buildings may lose Fannie Mae/FHA certification, making units harder to sell or refinance.
                </p>
                <div className="text-sm">
                  <p className="text-amber-700 mb-1">⚠ Deferred maintenance can disqualify buildings</p>
                  <p className="text-amber-700">⚠ Completing remediation helps restore certification eligibility</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">Phased Payment Approach</h3>
                <p className="text-gray-600 text-sm mb-3">
                  FCS can structure projects with phased payments aligned to special assessment collection schedules.
                </p>
                <div className="text-sm">
                  <p className="text-green-700 mb-1">✓ Matches cash flow to collections</p>
                  <p className="text-green-700 mb-1">✓ Reduces need for bridge financing</p>
                  <p className="text-green-700">✓ We work with your association's financial constraints</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why FCS */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Tampa Bay Condos Choose Florida Construction Specialists
            </h2>
            <p className="text-gray-600 mb-12">
              When your Phase 2 inspection reveals issues that require remediation, you need a contractor who understands the unique challenges of condo association work. Here's why boards throughout Tampa Bay trust FCS:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "20+ Years Commercial Experience",
                desc: "We specialize in large-scale commercial and multi-family projects—not residential handyman work. Our team has managed $50M+ in completed projects.",
              },
              {
                icon: Building2,
                title: "Prime Contractor Only",
                desc: "FCS is always the prime contractor, never a subcontractor. You get direct accountability and a single point of contact for your entire project.",
              },
              {
                icon: Shield,
                title: "Fully Bonded & Insured",
                desc: "With $10M+ bonding capacity and comprehensive insurance, your association is protected throughout the remediation process.",
              },
              {
                icon: FileText,
                title: "Insurance Restoration Background",
                desc: "Our experience with complex insurance claims means we understand documentation, supplemental processes, and working with carriers.",
              },
              {
                icon: Building2,
                title: "Local Engineering Relationships",
                desc: "We work collaboratively with Tampa Bay engineering firms conducting milestone inspections. No adversarial relationships—just solutions.",
              },
              {
                icon: CheckCircle,
                title: "Occupied Building Expertise",
                desc: "We've managed dozens of remediation projects in occupied buildings, minimizing disruption while maintaining safety and timeline.",
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

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks 
            title="Related Condo Remediation Resources" 
            links={internalLinks} 
          />
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema 
        items={faqs} 
        title="Condo Milestone Inspection Remediation FAQs" 
        description="Common questions from Tampa Bay condo boards about Phase 2 inspection repairs and SB 4-D compliance"
      />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Your 365-Day Clock Is Ticking. Let's Get Started.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists offers complimentary board consultations for condo associations facing milestone inspection remediation. We'll review your Phase 2 report and provide a preliminary scope assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Board Consultation
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
