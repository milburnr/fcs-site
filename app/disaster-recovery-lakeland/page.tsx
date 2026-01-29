import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, AlertTriangle, FileText, Wrench, Users, DollarSign, CloudLightning, Droplets } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disaster Recovery Lakeland FL | Storm & Tornado Damage Restoration | FCS",
  description: "Lakeland disaster recovery contractor specializing in tornado, severe storm, and flood damage restoration. Prime contractor for large loss insurance claims $250K-$50M. 24/7 emergency response. Licensed, bonded, insured.",
  keywords: "disaster recovery Lakeland, tornado damage restoration Lakeland, storm damage repair Lakeland, flood damage Lakeland, insurance restoration Lakeland, large loss contractor Lakeland, Frank Lloyd Wright restoration",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Disaster Recovery", href: "/insurance-restoration/" },
  { name: "Lakeland", href: "/disaster-recovery-lakeland/" },
];

const disasterTypes = [
  {
    type: "Tornado & Wind Damage",
    description: "Structural repairs, roof restoration, and debris removal from tornadic activity and severe thunderstorm winds common to Polk County",
    icon: CloudLightning,
  },
  {
    type: "Severe Storm Restoration",
    description: "Comprehensive damage repair from hail, lightning strikes, heavy rain, and the intense afternoon thunderstorms Central Florida experiences",
    icon: AlertTriangle,
  },
  {
    type: "Flash Flood Recovery",
    description: "Water extraction, structural drying, and restoration for lake-adjacent properties and low-lying areas around Lakeland's numerous lakes",
    icon: Droplets,
  },
  {
    type: "Fire & Lightning Damage",
    description: "Complete fire and smoke damage restoration including structural repairs, odor removal, and electrical system replacement after lightning strikes",
    icon: Wrench,
  },
];

const lakelandFaqs = [
  {
    question: "How quickly can FCS respond to disaster damage in Lakeland?",
    answer: "Florida Construction Specialists provides 24/7 emergency response throughout Lakeland and Polk County. For large loss commercial and high-value residential properties, we typically have assessment teams on-site within 3-5 hours of initial contact. Our teams are experienced with Lakeland's inland disaster profile, including tornado damage and severe thunderstorm impacts that require immediate stabilization.",
  },
  {
    question: "What types of disasters are most common in Lakeland?",
    answer: "Lakeland's inland location creates a different risk profile than coastal Tampa Bay. The most common disasters include severe thunderstorms with damaging winds (60-80+ mph), tornado activity along the I-4 corridor, flash flooding around the city's numerous lakes, lightning strikes (Central Florida has among the highest lightning density in the US), and tropical storm winds that remain strong even 50+ miles inland. Hurricane storm surge is not a concern, but sustained winds and rainfall still cause significant damage.",
  },
  {
    question: "Do you work directly with insurance companies on Lakeland disaster claims?",
    answer: "Yes, FCS specializes in large loss insurance restoration and works directly with all major insurance carriers. We provide detailed documentation, scope assessments, and claims support for Lakeland property owners. Our experience with Xactimate estimating and insurance adjuster protocols helps expedite claims. Lakeland properties typically see 10-15% lower restoration costs than coastal areas, which we document accurately for fair insurance settlements.",
  },
  {
    question: "What is the typical timeline for storm damage restoration in Lakeland?",
    answer: "Storm damage restoration timelines in Lakeland vary by scope: Emergency stabilization (1-2 days), water extraction and drying (4-10 days), structural repairs (21-75 days), and full restoration (60-150 days for large commercial projects). Lakeland's faster permit processing through the City of Lakeland Building Inspection Division (typically 3-5 weeks) often results in quicker project completion compared to coastal jurisdictions.",
  },
  {
    question: "Can you restore historic properties in Lakeland after disaster damage?",
    answer: "Absolutely. FCS has extensive experience with Lakeland's historic districts, including the Downtown Lakeland Historic District, Dixieland Historic District, Lake Morton Historic District, and the nationally significant Frank Lloyd Wright architecture at Florida Southern College. We understand the unique requirements of historic restoration, work with local preservation boards, and source period-appropriate materials while incorporating modern disaster-resistant improvements where permitted.",
  },
  {
    question: "How does Lakeland's inland location affect disaster recovery costs?",
    answer: "Lakeland's position roughly 35 miles from Tampa Bay provides natural protection from storm surge and reduces saltwater corrosion concerns. This typically results in 10-15% lower restoration costs compared to coastal properties. The city's Zone 2 wind requirements (versus Zone 3 coastal) also reduce code upgrade costs during substantial repairs. However, tornado and severe thunderstorm damage can still be extensive and requires specialized restoration expertise.",
  },
  {
    question: "What about flood damage around Lakeland's lakes?",
    answer: "While Lakeland has less flood risk than coastal areas (most of the city is FEMA Zone X), properties adjacent to the city's numerous lakes - including Lake Mirror, Lake Morton, Lake Hollingsworth, and Lake Parker - may be in AE flood zones. Flash flooding during heavy rain events can impact low-lying areas. We specialize in water damage restoration including extraction, structural drying, mold prevention, and repairs that meet any applicable flood zone requirements.",
  },
  {
    question: "Do you handle Publix and other major commercial property restoration in Lakeland?",
    answer: "Yes, FCS serves as a prime contractor for commercial disaster recovery throughout Lakeland, including properties owned by major employers like Publix Super Markets (headquartered in Lakeland), Lakeland Regional Health, GEICO, Amazon distribution facilities, and Florida Southern College. We understand the unique requirements of retail, healthcare, logistics, and institutional facilities, including minimizing business interruption during restoration.",
  },
];

const costData = [
  { category: "Water Damage Restoration", range: "$12,000 - $65,000", timeline: "1-3 weeks", notes: "Lake-area flooding and storm water intrusion" },
  { category: "Storm/Tornado Roof Repair", range: "$40,000 - $425,000", timeline: "3-10 weeks", notes: "Commercial roofing with Zone 2 wind compliance" },
  { category: "Fire & Lightning Damage", range: "$85,000 - $1.75M+", timeline: "2-8 months", notes: "Structural repairs and electrical restoration" },
  { category: "Full Building Restoration", range: "$425,000 - $45M+", timeline: "5-15 months", notes: "Complete disaster recovery with code upgrades" },
];

const processSteps = [
  { step: 1, title: "Emergency Response", description: "24/7 rapid response with damage assessment and immediate stabilization to prevent further loss from weather exposure" },
  { step: 2, title: "Documentation", description: "Comprehensive photo/video documentation, moisture mapping, and detailed scope development for insurance purposes" },
  { step: 3, title: "Insurance Coordination", description: "Direct carrier communication, Xactimate estimates, and claims negotiation support for maximum recovery" },
  { step: 4, title: "Restoration Planning", description: "Engineering assessments, City of Lakeland permit applications, and detailed project scheduling" },
  { step: 5, title: "Construction Phase", description: "Professional restoration with quality control, daily progress reporting, and Florida Building Code compliance" },
  { step: 6, title: "Final Inspection", description: "City of Lakeland inspections, insurance sign-off, warranty documentation, and project closeout" },
];

export default function DisasterRecoveryLakelandPage() {
  return (
    <>
      <LocalBusinessSchema city="Lakeland" service="Disaster Recovery" />
      <ServiceSchema
        serviceName="Disaster Recovery and Insurance Restoration"
        serviceDescription="Professional disaster recovery and insurance restoration services in Lakeland, FL. Prime contractor for tornado damage, severe storm restoration, flood damage, and large loss insurance claims. 24/7 emergency response with projects from $250,000 to $25 million."
        city="Lakeland"
        minPrice="250000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Disaster Recovery Services in Lakeland, FL"
        description="Comprehensive guide to disaster recovery and insurance restoration services in Lakeland. Learn about tornado damage restoration, severe storm recovery, and large loss insurance claim processes for inland Central Florida properties."
        datePublished="2024-01-15"
        dateModified="2025-01-18"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hurricane-insurance-restoration/hurricane-insurance-restoration-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Lakeland, Polk County, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Disaster Recovery & Insurance Restoration in Lakeland
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Polk County's trusted large loss contractor for tornado damage, severe storm restoration, and commercial property disaster recovery. We work directly with insurance companies on claims from $250,000 to $25 million. 24/7 emergency response throughout Lakeland and Central Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                24/7 Emergency Response
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
              <Clock className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">24/7 Emergency Response</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Direct Insurance Billing</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Prime Contractor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Lakeland's Premier Disaster Recovery Contractor
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists is Lakeland and Polk County's trusted prime contractor for large loss disaster recovery and insurance restoration. While Lakeland's inland location 35 miles from Tampa Bay provides protection from hurricane storm surge, the area faces significant risks from severe thunderstorms, tornado activity along the I-4 corridor, and localized flooding around its numerous lakes. Property owners need experienced restoration partners who understand both the unique challenges of inland Central Florida and the complexities of major insurance claims.
              </p>

              <p className="text-gray-600 mb-6">
                Lakeland sits at the heart of Polk County with a population exceeding 115,000 and serves as headquarters for major employers including Publix Super Markets. The city's 50 inches of annual rainfall, frequent afternoon thunderstorms from May through September, and position in Florida's "tornado alley" create distinct disaster recovery needs. Our team has restored properties throughout Lakeland following severe storms, tornado touchdowns, flash flooding events, and lightning-caused fires - always working as the prime contractor with direct accountability for project success.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-4 mt-8">
                Lakeland Disaster Recovery Services
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {disasterTypes.map((service) => (
                  <div key={service.type} className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <service.icon className="w-8 h-8 text-brand-green flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-brand-green-dark mb-2">{service.type}</h4>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">
                Lakeland's Unique Disaster Risk Profile
              </h3>

              <p className="text-gray-600 mb-4">
                Unlike coastal Tampa Bay communities, Lakeland faces a different set of disaster challenges. Understanding these risks is essential for effective restoration planning:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>I-4 Corridor Tornado Risk:</strong> Lakeland sits along Central Florida's "tornado alley" with higher tornado frequency than coastal areas; EF0-EF2 tornadoes can cause significant structural damage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Severe Thunderstorm Frequency:</strong> Daily afternoon storms May-September bring damaging winds, large hail, and lightning - Florida leads the nation in lightning strikes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Lake-Area Flash Flooding:</strong> Properties near Lake Mirror, Lake Morton, Lake Hollingsworth, and Lake Parker face localized flood risk during heavy rain events</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Historic Property Preservation:</strong> Multiple historic districts including Frank Lloyd Wright architecture at Florida Southern College require specialized restoration expertise</span>
                </li>
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Lakeland Property's Disaster Recovery Needs <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">24/7 Emergency Line</h3>
                <p className="text-gray-200 mb-4">
                  Immediate response for disaster damage in Lakeland and Polk County. Our emergency crews are ready to deploy throughout Central Florida.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-full hover:bg-brand-gold-light transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <RelatedServices city="Lakeland" currentService="disaster-recovery" />
              <NearbyLocations currentCity="Lakeland" service="disaster-recovery" serviceName="Disaster Recovery" />
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Lakeland Disaster Recovery Costs & Timelines
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Lakeland's inland location typically results in 10-15% lower restoration costs than coastal properties due to reduced storm surge risk and Zone 2 wind requirements. These ranges reflect typical Lakeland projects - actual costs depend on specific conditions and insurance coverage.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Restoration Category</th>
                  <th className="px-6 py-4 text-left">Typical Cost Range</th>
                  <th className="px-6 py-4 text-left">Timeline</th>
                  <th className="px-6 py-4 text-left">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {costData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-brand-green-dark">{item.category}</td>
                    <td className="px-6 py-4 text-gray-700">{item.range}</td>
                    <td className="px-6 py-4 text-gray-700">{item.timeline}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 text-center mt-4">
            * Costs as of 2025. Actual project costs depend on damage assessment, insurance coverage, and code requirements. Lakeland costs are typically 10-15% lower than coastal Tampa Bay areas.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Lakeland Disaster Recovery Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our proven 6-step process ensures thorough restoration, proper documentation, and maximum insurance recovery for Lakeland property owners. Lakeland's efficient permitting process often results in faster project completion than coastal areas.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frank Lloyd Wright / Historic Section */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Historic & Frank Lloyd Wright Restoration Expertise
              </h2>
              <p className="text-gray-200 mb-6">
                Lakeland is home to the largest single-site collection of Frank Lloyd Wright architecture in the world at Florida Southern College. This architectural treasure, along with the city's multiple historic districts, requires specialized restoration expertise that balances preservation requirements with modern disaster-resistant construction.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Florida Southern College:</strong> Experience restoring Frank Lloyd Wright's "Child of the Sun" buildings using authentic materials and preservation techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Downtown Lakeland Historic District:</strong> Restoration expertise for early 20th century commercial architecture along Main Street and Kentucky Avenue</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Dixieland & Lake Morton Districts:</strong> Craftsman, Colonial Revival, and Mediterranean Revival residential restoration following Secretary of Interior Standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Period Material Sourcing:</strong> Access to salvage yards and specialty suppliers for matching original cypress, heart pine, and decorative elements</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <DollarSign className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">$40M+</div>
                <div className="text-gray-300 text-sm">Lakeland Area Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Building2 className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-gray-300 text-sm">Properties Restored</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Clock className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">3-5 Hr</div>
                <div className="text-gray-300 text-sm">Emergency Response</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Users className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lakeland-Specific Expertise */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Local Lakeland Expertise Matters
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Disaster recovery in Lakeland requires contractors who understand local conditions, building codes, and the unique characteristics of Polk County's construction environment.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-6">
              <h3 className="font-bold text-brand-green-dark text-xl mb-4">Local Permit & Code Knowledge</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Established relationships with City of Lakeland Building Inspection Division for faster permit processing (typically 3-5 weeks)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Zone 2 wind requirements (versus Zone 3 coastal) understanding for cost-effective code compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Lake setback requirements expertise for waterfront property restoration</span>
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-bold text-brand-green-dark text-xl mb-4">Major Employer Experience</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Experience with Publix Super Markets corporate and retail facilities throughout Polk County</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Healthcare facility restoration including Lakeland Regional Health medical campus properties</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">I-4 corridor logistics facility expertise including Amazon and distribution center restoration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FCS */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Lakeland Chooses FCS for Disaster Recovery
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <Shield className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                FCS is always the prime contractor on Lakeland disaster recovery projects - never a subcontractor. You get direct accountability and single-point responsibility for your restoration.
              </p>
            </div>
            <div className="card text-center p-8">
              <FileText className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Insurance Expertise</h3>
              <p className="text-gray-600">
                Our team includes insurance restoration specialists who understand claim documentation, Xactimate estimating, and carrier negotiation to maximize your recovery on Lakeland claims.
              </p>
            </div>
            <div className="card text-center p-8">
              <Award className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Proven Track Record</h3>
              <p className="text-gray-600">
                With $40M+ in completed Lakeland-area disaster recovery projects, we have the experience, bonding capacity, and local expertise to handle any restoration challenge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={lakelandFaqs}
        title="Lakeland Disaster Recovery FAQs"
        description="Common questions about disaster recovery and insurance restoration services in Lakeland, Florida and Polk County."
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Lakeland Disaster Recovery Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From emergency response to complete restoration, FCS is Lakeland's trusted partner for large loss disaster recovery. Contact us 24/7 for immediate assistance with tornado, storm, flood, or fire damage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Emergency Response
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
