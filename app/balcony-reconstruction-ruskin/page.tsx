import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, AlertTriangle, FileText, Wrench, Clock, Calendar, DollarSign, Users, Home } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Balcony Reconstruction Ruskin | SB 4-D | FCS",
  description: "Ruskin balcony reconstruction specialists for Apollo Beach condos, Sun City Center properties, and HOAs. SB 4-D milestone inspection compliance, structural repairs, waterproofing. FCS headquarters location serving South Hillsborough County. Licensed, bonded, insured.",
  keywords: "balcony reconstruction Ruskin, SB 4-D compliance Ruskin, condo balcony repair Apollo Beach, balcony waterproofing Sun City Center, milestone inspection Ruskin, HOA balcony contractor South Hillsborough County",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Balcony Reconstruction", href: "/balcony-reconstruction-exterior-waterproofing/" },
  { name: "Ruskin", href: "/balcony-reconstruction-ruskin/" },
];

const serviceTypes = [
  {
    type: "Structural Balcony Repair",
    description: "Complete structural restoration including concrete repair, rebar treatment, and load-bearing element replacement for South County condos",
    icon: Building2,
  },
  {
    type: "Waterproofing Systems",
    description: "Salt-resistant waterproofing membranes designed for Apollo Beach and Tampa Bay waterfront properties",
    icon: Shield,
  },
  {
    type: "Railing Replacement",
    description: "Marine-grade aluminum, glass, and cable railing systems meeting Florida Building Code for coastal and bay-front properties",
    icon: Wrench,
  },
  {
    type: "SB 4-D Compliance",
    description: "Milestone inspection support for buildings 3+ stories—Apollo Beach waterfront properties require 25-year coastal inspections",
    icon: FileText,
  },
];

const ruskinFaqs = [
  {
    question: "What SB 4-D deadline applies to Ruskin and Apollo Beach condos?",
    answer: "Ruskin and Apollo Beach have a mix of requirements depending on location. Properties within 3 miles of Tampa Bay or the Gulf of Mexico—including Apollo Beach waterfront condos and much of coastal Ruskin—fall under the 25-year milestone inspection requirement. Inland areas of Ruskin, Sun City Center, and Wimauma follow the 30-year timeline. FCS, headquartered in Ruskin, is highly familiar with local geography and can help determine which requirement applies to your specific property.",
  },
  {
    question: "Is FCS based in Ruskin?",
    answer: "Yes, Florida Construction Specialists is headquartered in Ruskin, making South Hillsborough County our home territory. Our local presence means faster response times, easier site access for assessments, and deep familiarity with the area's building stock, HOA communities, and permitting processes. We've watched the area grow from a small agricultural community to one of Tampa Bay's fastest-growing regions, and we understand the unique mix of waterfront condos, retirement communities, and new construction in the area.",
  },
  {
    question: "How much does balcony reconstruction cost in Ruskin and Apollo Beach?",
    answer: "Ruskin balcony reconstruction costs vary significantly based on location. Apollo Beach waterfront condos with Tampa Bay exposure typically cost $15,000-$40,000 per balcony due to marine-grade material requirements. Inland Ruskin and Sun City Center properties range from $10,000-$28,000 per balcony. Multi-unit projects achieve economies of scale at $6,000-$22,000 per unit. Building-wide programs for 50+ unit buildings range from $400,000 to $5 million depending on scope and location.",
  },
  {
    question: "Which areas of Ruskin and South County have the most balcony reconstruction needs?",
    answer: "Apollo Beach has significant condo development from the 1990s-2000s now approaching milestone deadlines, particularly waterfront communities along Tampa Bay. Sun City Center's retirement communities include multi-story buildings requiring assessment. Ruskin's older downtown area has some aging multi-family properties. The newer communities in SouthShore—MiraBay, Waterset, Symmes Cove—have more recent construction with later timelines. FCS serves all these communities from our local headquarters.",
  },
  {
    question: "How does Apollo Beach's waterfront location affect balcony requirements?",
    answer: "Apollo Beach sits directly on Tampa Bay, with many condos having direct bay views and exposure. This waterfront location triggers the 25-year SB 4-D inspection requirement and necessitates marine-grade materials for balcony reconstruction. Salt air from Tampa Bay accelerates concrete deterioration, railing corrosion, and waterproofing membrane breakdown. FCS installs the same premium coastal systems used on Clearwater Beach and St. Petersburg waterfront properties for Apollo Beach condos.",
  },
  {
    question: "Do Sun City Center communities require balcony inspections?",
    answer: "Sun City Center has numerous multi-story residential buildings that fall under SB 4-D requirements. As an inland community more than 3 miles from the coast, most Sun City Center properties follow the 30-year milestone inspection timeline. However, the community has substantial building stock from the 1980s-1990s that is now approaching or past the 30-year threshold. HOA boards in Sun City Center should verify their specific building ages and plan accordingly.",
  },
  {
    question: "What advantages does FCS's Ruskin location provide?",
    answer: "Being headquartered in Ruskin provides significant advantages for South County clients: same-day site visits for assessments, minimal travel time for crews, established relationships with Hillsborough County's South County permitting office, deep knowledge of local HOA communities, and understanding of the area's unique mix of waterfront and inland properties. We're your neighbors, not just your contractor—we live and work in this community.",
  },
  {
    question: "What waterproofing systems work best for Tampa Bay waterfront properties?",
    answer: "Apollo Beach and Ruskin waterfront properties require robust waterproofing systems similar to Gulf-front buildings. FCS installs multi-layer systems including: deep-penetrating concrete sealers for salt resistance, marine-grade polyurethane membranes rated for bay exposure, reinforced coating systems at deck-wall junctions (common failure points), proper slope correction for Florida's intense afternoon storms, and UV-stable traffic coatings. Inland properties can use standard high-quality systems without marine-grade specifications.",
  },
];

const costData = [
  { scope: "Minor Repairs (per balcony)", range: "$2,500 - $7,000", timeline: "2-4 days", description: "Crack repair, coating renewal, minor concrete patching" },
  { scope: "Moderate Restoration (per balcony)", range: "$7,000 - $18,000", timeline: "5-10 days", description: "Structural repairs, waterproofing, railing refurbishment" },
  { scope: "Full Reconstruction (per balcony)", range: "$18,000 - $40,000", timeline: "10-15 days", description: "Complete demo and rebuild, new railings, full waterproofing" },
  { scope: "Multi-Unit Project (per unit)", range: "$6,000 - $22,000", timeline: "Varies", description: "Economies of scale for 10+ unit projects" },
  { scope: "Building-Wide Program", range: "$400K - $5M+", timeline: "4-10 months", description: "Comprehensive restoration for entire building" },
];

const processSteps = [
  { step: 1, title: "Assessment & Testing", description: "Structural evaluation, concrete testing, moisture mapping, and scope development with licensed engineers" },
  { step: 2, title: "HOA/Board Presentation", description: "Detailed proposals, cost options, and timeline presentations for association decision-making" },
  { step: 3, title: "Engineering & Permits", description: "Structural engineering drawings, South County permit applications, and compliance documentation" },
  { step: 4, title: "Mobilization & Phasing", description: "Site setup from our local Ruskin base, resident notification, and phased work schedule" },
  { step: 5, title: "Structural Restoration", description: "Concrete repair, rebar treatment, structural reinforcement, and code-required upgrades" },
  { step: 6, title: "Waterproofing & Finishes", description: "Location-appropriate waterproofing, railings, coatings, and final inspections with warranty documentation" },
];

export default function BalconyReconstructionRuskinPage() {
  return (
    <>
      <LocalBusinessSchema city="Ruskin" service="Balcony Reconstruction" />
      <ServiceSchema
        serviceName="Balcony Reconstruction and Waterproofing"
        serviceDescription="Expert balcony reconstruction and waterproofing for Ruskin, Apollo Beach, and Sun City Center condominiums, apartments, and commercial buildings. SB 4-D milestone inspection compliance, structural repairs, and HOA project management. FCS headquarters location. Projects from $100,000 to $10 million."
        city="Ruskin"
        minPrice="100000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Balcony Reconstruction Services in Ruskin, FL"
        description="Comprehensive guide to balcony reconstruction for Ruskin, Apollo Beach, and Sun City Center condos and apartments. Learn about SB 4-D compliance, costs, timelines, and working with HOAs on balcony restoration projects in South Hillsborough County."
        datePublished="2024-01-15"
        dateModified="2025-01-18"
        slug="/balcony-reconstruction-ruskin/"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <Home className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">FCS Headquarters - Ruskin, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Balcony Reconstruction in Ruskin
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              South Hillsborough County's trusted contractor for condo and apartment balcony reconstruction. Headquartered in Ruskin, we serve Apollo Beach, Sun City Center, and surrounding communities. SB 4-D compliance, marine-grade waterproofing for bay-front properties, and quality restoration. We work directly with HOAs on projects from $100K to $10M+.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Request Balcony Assessment
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

      {/* SB 4-D Alert Banner */}
      <section className="py-4 bg-amber-50 border-y border-amber-200">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-3 text-amber-800">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" />
            <p className="font-semibold">
              <strong>SB 4-D Alert:</strong> Apollo Beach waterfront condos require 25-year milestone inspections. Sun City Center follows the 30-year inland timeline.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Home className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">FCS Headquarters</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">SB 4-D Specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">HOA Specialists</span>
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
                Ruskin's Local Balcony Reconstruction Experts
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists is headquartered in Ruskin, making South Hillsborough County our home territory for balcony reconstruction and waterproofing. We've served this community for over two decades, watching it transform from a quiet agricultural area to one of Tampa Bay's fastest-growing regions. Our local presence means faster response, deeper community knowledge, and the familiarity of working with neighbors.
              </p>

              <p className="text-gray-600 mb-6">
                Ruskin and South County present a unique mix of building types and SB 4-D requirements. Apollo Beach waterfront condos face Tampa Bay exposure requiring marine-grade materials and 25-year inspections. Sun City Center's retirement communities have substantial 1980s-1990s building stock approaching 30-year milestones. Newer communities like MiraBay and Waterset have more recent construction. We understand these local nuances and tailor our approach to each property's specific needs.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-4 mt-8">
                Balcony Reconstruction Services
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {serviceTypes.map((service) => (
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
                Why South County Condos Need Balcony Assessment
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Mixed SB 4-D Requirements:</strong> Apollo Beach waterfront has 25-year deadline while Sun City Center follows 30-year inland timeline</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Tampa Bay Exposure:</strong> Apollo Beach and bay-front properties face salt air corrosion requiring marine-grade systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>1990s Building Stock:</strong> Sun City Center and older Ruskin areas have significant inventory now approaching milestones</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Local Expertise:</strong> FCS headquarters are here—we know this community and its unique building mix</span>
                </li>
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Request a Balcony Assessment for Your South County Building <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">HOA & Property Managers</h3>
                <p className="text-gray-200 mb-4">
                  Request a complimentary assessment from your local FCS team. Same-day site visits available.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-full hover:bg-brand-gold-light transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              {/* SB 4-D Info Box */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-amber-800 mb-3">SB 4-D Quick Facts</h3>
                <ul className="space-y-2 text-amber-700 text-sm">
                  <li>• 3+ story buildings must be inspected</li>
                  <li>• Apollo Beach waterfront: 25 years (coastal)</li>
                  <li>• Sun City Center: 30 years (inland)</li>
                  <li>• Reinspection every 10 years after</li>
                  <li>• Affects unit resale and financing</li>
                </ul>
                <Link href="/florida-sb4d-compliance-guide/" className="text-amber-800 font-semibold text-sm mt-3 inline-block hover:underline">
                  Read Full SB 4-D Guide →
                </Link>
              </div>

              <RelatedServices city="Ruskin" currentService="balcony-reconstruction" />
              <NearbyLocations currentCity="Ruskin" service="balcony-reconstruction" serviceName="Balcony Reconstruction" />
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Ruskin Area Balcony Reconstruction Costs
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Costs vary based on location (Apollo Beach waterfront vs. Sun City Center inland), balcony size, deterioration extent, and material requirements. Waterfront properties require marine-grade materials; inland can use standard specifications.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Project Scope</th>
                  <th className="px-6 py-4 text-left">Cost Range</th>
                  <th className="px-6 py-4 text-left">Timeline</th>
                  <th className="px-6 py-4 text-left">Includes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {costData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-brand-green-dark">{item.scope}</td>
                    <td className="px-6 py-4 text-gray-700">{item.range}</td>
                    <td className="px-6 py-4 text-gray-700">{item.timeline}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 text-center mt-4">
            * Costs as of 2025. Waterfront properties at higher end of ranges. Contact FCS for detailed assessment and proposal.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Our Balcony Reconstruction Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            FCS manages balcony reconstruction from initial assessment through warranty completion. Our Ruskin headquarters location means rapid response and efficient project execution for South County clients.
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

      {/* Ruskin Condo Stats */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Your Local South County Experts
              </h2>
              <p className="text-gray-200 mb-6">
                FCS has restored balconies at condo buildings throughout South Hillsborough County for over 20 years. Our Ruskin headquarters means we're not just contractors—we're your neighbors. We understand the unique characteristics of Apollo Beach, Sun City Center, and surrounding communities.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Local Headquarters:</strong> Based in Ruskin for faster response, same-day assessments, and efficient project execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Tampa Bay Waterfront Experience:</strong> Marine-grade systems for Apollo Beach and bay-front properties</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Retirement Community Expertise:</strong> Experience with Sun City Center's unique HOA dynamics and resident needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>South County Permitting:</strong> Established relationships with Hillsborough County's South County office</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Home className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">HQ</div>
                <div className="text-gray-300 text-sm">Ruskin Based</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <DollarSign className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">$30M+</div>
                <div className="text-gray-300 text-sm">Balcony Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Calendar className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Clock className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">10 Yr</div>
                <div className="text-gray-300 text-sm">Waterproofing Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FCS */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why South County HOAs Choose FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <Home className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Local Headquarters</h3>
              <p className="text-gray-600">
                FCS is headquartered in Ruskin—we're your neighbors. Local presence means faster response, deeper community knowledge, and accountability you can trust.
              </p>
            </div>
            <div className="card text-center p-8">
              <FileText className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">SB 4-D Compliance</h3>
              <p className="text-gray-600">
                We work with structural engineers to address milestone inspection findings and bring your building into full compliance—whether 25-year coastal or 30-year inland.
              </p>
            </div>
            <div className="card text-center p-8">
              <Users className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">HOA Expertise</h3>
              <p className="text-gray-600">
                We understand condo governance—from board presentations to special assessments to resident communication. We make complex projects manageable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={ruskinFaqs}
        title="Ruskin Balcony Reconstruction FAQs"
        description="Common questions about balcony reconstruction, SB 4-D compliance, and HOA projects in Ruskin, Apollo Beach, and Sun City Center, Florida."
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Your Local Balcony Reconstruction Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From SB 4-D compliance to full balcony restoration, FCS is South Hillsborough County's trusted partner for condo and apartment balcony reconstruction. Contact your local team for a complimentary assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request Assessment
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
