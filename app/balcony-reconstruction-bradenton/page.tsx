import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, AlertTriangle, FileText, Wrench, Clock, Calendar, DollarSign, Users } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Balcony Reconstruction Bradenton FL | SB 4-D Compliance & Condo Restoration | FCS",
  description: "Bradenton balcony reconstruction specialists for Anna Maria Island condos, riverfront properties, and HOAs. SB 4-D milestone inspection compliance, structural repairs, waterproofing. Expert contractors serving Manatee County. Licensed, bonded, insured.",
  keywords: "balcony reconstruction Bradenton, SB 4-D compliance Bradenton, condo balcony repair Anna Maria Island, balcony waterproofing Manatee County, milestone inspection Bradenton, HOA balcony contractor Bradenton FL",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Balcony Reconstruction", href: "/balcony-reconstruction-exterior-waterproofing/" },
  { name: "Bradenton", href: "/balcony-reconstruction-bradenton/" },
];

const serviceTypes = [
  {
    type: "Structural Balcony Repair",
    description: "Complete structural restoration including concrete repair, rebar treatment, and load-bearing element replacement for Bradenton's coastal and riverfront condos",
    icon: Building2,
  },
  {
    type: "Waterproofing Systems",
    description: "Marine-grade waterproofing membranes designed for Anna Maria Island's Gulf exposure and Manatee River properties",
    icon: Shield,
  },
  {
    type: "Railing Replacement",
    description: "Corrosion-resistant aluminum, glass, and cable railing systems meeting Florida Building Code and coastal requirements",
    icon: Wrench,
  },
  {
    type: "SB 4-D Compliance",
    description: "Milestone inspection support for buildings 3+ stories—Anna Maria Island and coastal Bradenton require 25-year inspections",
    icon: FileText,
  },
];

const bradentonFaqs = [
  {
    question: "What SB 4-D deadline applies to Bradenton and Anna Maria Island condos?",
    answer: "Anna Maria Island, Holmes Beach, Bradenton Beach, and coastal Bradenton properties within 3 miles of the coastline require 25-year milestone inspections under SB 4-D. Mainland Bradenton properties more than 3 miles from the coast follow the 30-year timeline. Buildings that reached their milestone age before July 1, 2022 were required to complete inspections by December 31, 2024. Many Anna Maria Island condos built during the 1980s-1990s tourism boom are now past or approaching their deadlines.",
  },
  {
    question: "How does Bradenton's location between Tampa Bay and the Gulf affect balcony deterioration?",
    answer: "Bradenton and Manatee County sit at the confluence of Tampa Bay and the Gulf of Mexico, creating unique exposure conditions. Anna Maria Island faces direct Gulf weather, while riverfront and bay-front condos along the Manatee River experience salt air from Tampa Bay. Even downtown Bradenton properties face higher humidity than typical inland locations. This dual water exposure means salt air can approach from multiple directions. The Cortez fishing village and Palma Sola areas face particularly aggressive conditions.",
  },
  {
    question: "How much does balcony reconstruction cost in Bradenton?",
    answer: "Bradenton balcony reconstruction typically costs $15,000-$42,000 per balcony for comprehensive restoration. Anna Maria Island properties with direct Gulf exposure trend toward the higher end due to marine-grade material requirements. Mainland and riverfront condos may fall in the middle range. Multi-unit projects achieve economies of scale at $9,000-$26,000 per unit. Building-wide programs for 50+ unit buildings range from $550,000 to $6 million depending on location and scope.",
  },
  {
    question: "Which Bradenton areas have the most balcony reconstruction needs?",
    answer: "Anna Maria Island has numerous condos from the 1970s-1990s now reaching milestone deadlines, including properties along Gulf Drive, Holmes Beach, and Bradenton Beach. The Manatee River waterfront from downtown to the bay has mid-rise condos with salt air exposure. Cortez and Palma Sola have waterfront properties facing Tampa Bay. Bradenton's downtown revitalization area has older buildings now requiring assessment. Lakewood Ranch and East Manatee have newer construction with later timelines.",
  },
  {
    question: "Do Anna Maria Island condos have special considerations for balcony work?",
    answer: "Yes, Anna Maria Island presents unique challenges: the island has strict building height limits and architectural guidelines, limited staging space due to small lots, seasonal access constraints during tourist season, coordination with beach access and parking, and some properties have historic significance. Holmes Beach and Bradenton Beach have different municipal requirements. FCS has experience navigating these island-specific challenges while maintaining SB 4-D compliance.",
  },
  {
    question: "Can balcony work be scheduled around Bradenton's tourist and snowbird seasons?",
    answer: "Yes, seasonal scheduling is a major consideration in Bradenton and especially on Anna Maria Island. Peak season (December through April) brings significantly increased occupancy and visitor traffic. Many HOAs prefer scheduling major work during summer months when seasonal residents are away and beach traffic is lower. However, summer brings afternoon thunderstorms that affect exterior work. FCS works with boards to determine optimal timing based on their specific community dynamics.",
  },
  {
    question: "How do you serve Anna Maria Island given access limitations?",
    answer: "Anna Maria Island access requires careful logistics planning. The island is reached primarily via the Manatee Avenue bridge from Bradenton or the Cortez Road bridge from the south. FCS stages materials and equipment to minimize island traffic impact, schedules deliveries during off-peak hours, and maintains smaller on-site footprints due to limited staging space. Our crew scheduling accounts for bridge traffic patterns. We've successfully completed numerous island projects with minimal community disruption.",
  },
  {
    question: "What waterproofing systems work best for Bradenton's coastal environment?",
    answer: "Bradenton's location between the Gulf and Tampa Bay requires robust waterproofing systems. FCS installs multi-layer systems including: penetrating concrete sealers for salt resistance, marine-grade elastomeric membranes rated for Gulf exposure, reinforced coating systems at deck-wall junctions (common failure points), slope corrections for proper drainage during heavy storms, and UV-stable traffic coatings. For Gulf-front Anna Maria properties, we use the same premium systems specified for Sarasota and Clearwater beachfront buildings.",
  },
];

const costData = [
  { scope: "Minor Repairs (per balcony)", range: "$3,500 - $9,000", timeline: "2-4 days", description: "Crack repair, coating renewal, minor concrete patching" },
  { scope: "Moderate Restoration (per balcony)", range: "$9,000 - $24,000", timeline: "5-10 days", description: "Structural repairs, waterproofing, railing refurbishment" },
  { scope: "Full Reconstruction (per balcony)", range: "$24,000 - $42,000", timeline: "10-15 days", description: "Complete demo and rebuild, new railings, full waterproofing" },
  { scope: "Multi-Unit Project (per unit)", range: "$9,000 - $26,000", timeline: "Varies", description: "Economies of scale for 10+ unit projects" },
  { scope: "Building-Wide Program", range: "$550K - $6M+", timeline: "4-12 months", description: "Comprehensive restoration for entire building" },
];

const processSteps = [
  { step: 1, title: "Assessment & Testing", description: "Structural evaluation, concrete testing, moisture mapping, and scope development with licensed engineers" },
  { step: 2, title: "HOA/Board Presentation", description: "Detailed proposals, cost options, and timeline presentations for association decision-making" },
  { step: 3, title: "Engineering & Permits", description: "Structural engineering drawings, Manatee County permit applications, and island-specific compliance" },
  { step: 4, title: "Mobilization & Phasing", description: "Site setup with island logistics, resident notification, and phased work schedule" },
  { step: 5, title: "Structural Restoration", description: "Concrete repair, rebar treatment, structural reinforcement, and code-required upgrades" },
  { step: 6, title: "Waterproofing & Finishes", description: "Marine-grade waterproofing, railings, coatings, and final inspections with warranty documentation" },
];

export default function BalconyReconstructionBradentonPage() {
  return (
    <>
      <LocalBusinessSchema city="Bradenton" service="Balcony Reconstruction" />
      <ServiceSchema
        serviceName="Balcony Reconstruction and Waterproofing"
        serviceDescription="Expert balcony reconstruction and waterproofing for Bradenton and Anna Maria Island condominiums, apartments, and commercial buildings. SB 4-D milestone inspection compliance, structural repairs, and HOA project management. Projects from $100,000 to $10 million."
        city="Bradenton"
        minPrice="100000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Balcony Reconstruction Services in Bradenton, FL"
        description="Comprehensive guide to balcony reconstruction for Bradenton and Anna Maria Island condos and apartments. Learn about SB 4-D compliance, costs, timelines, and working with HOAs on balcony restoration projects in Manatee County."
        datePublished="2024-01-15"
        dateModified="2025-01-18"
        slug="/balcony-reconstruction-bradenton/"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Bradenton, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Balcony Reconstruction in Bradenton
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Manatee County's trusted contractor for condo and apartment balcony reconstruction. SB 4-D milestone inspection compliance for Anna Maria Island, Holmes Beach, and riverfront properties. Marine-grade waterproofing and structural repairs. We work directly with HOAs on projects from $100K to $10M+.
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
              <strong>SB 4-D Alert:</strong> Anna Maria Island condos 3+ stories require 25-year milestone inspections. Many 1980s-1990s buildings are past deadline.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <FileText className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">SB 4-D Specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">100+ Condo Buildings</span>
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
                Bradenton's Balcony Reconstruction Experts
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists is Manatee County's trusted contractor for balcony reconstruction and waterproofing. Bradenton's strategic location between Tampa Bay and the Gulf of Mexico creates varied conditions—from direct Gulf exposure on Anna Maria Island to riverfront and bay-front properties along the Manatee River. Coastal properties face the stricter 25-year SB 4-D milestone inspection requirement.
              </p>

              <p className="text-gray-600 mb-6">
                Anna Maria Island presents unique challenges with its strict architectural guidelines, limited staging space, and seasonal access constraints. Our team has extensive experience on the island and throughout Bradenton, understanding both the technical requirements of coastal reconstruction and the specific logistics of island work. From Holmes Beach high-rises to downtown Bradenton riverfront condos, we deliver quality balcony restoration.
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
                Why Bradenton Condos Need Balcony Assessment
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Dual Water Exposure:</strong> Tampa Bay and Gulf access means salt air from multiple directions for many Bradenton properties</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Anna Maria Island Deadlines:</strong> Island condos require 25-year coastal milestone inspections—many are now past deadline</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>1980s-1990s Building Stock:</strong> Tourism boom created thousands of condo units now 25-40 years old and requiring assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Property Value Protection:</strong> Well-maintained balconies are essential for Bradenton's competitive vacation rental and resale market</span>
                </li>
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Request a Balcony Assessment for Your Bradenton Building <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">HOA & Property Managers</h3>
                <p className="text-gray-200 mb-4">
                  Request a complimentary assessment and proposal for your Bradenton or Anna Maria Island condo building.
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
                  <li>• Anna Maria Island: 25 years (coastal)</li>
                  <li>• Mainland: 30 years (if &gt;3 mi from coast)</li>
                  <li>• Reinspection every 10 years after</li>
                  <li>• Affects unit resale and financing</li>
                </ul>
                <Link href="/florida-sb4d-compliance-guide/" className="text-amber-800 font-semibold text-sm mt-3 inline-block hover:underline">
                  Read Full SB 4-D Guide →
                </Link>
              </div>

              <RelatedServices city="Bradenton" currentService="balcony-reconstruction" />
              <NearbyLocations currentCity="Bradenton" service="balcony-reconstruction" serviceName="Balcony Reconstruction" />
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Bradenton Balcony Reconstruction Costs
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Costs vary based on location (Anna Maria Island vs. mainland), balcony size, deterioration extent, and access requirements. Island properties typically require marine-grade materials and have higher logistics costs.
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
            * Costs as of 2025. Anna Maria Island properties may be at higher end of ranges. Contact FCS for detailed assessment and proposal.
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
            FCS manages balcony reconstruction from initial assessment through warranty completion, with special attention to Anna Maria Island logistics and Bradenton's HOA processes.
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

      {/* Bradenton Condo Stats */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Bradenton & Anna Maria Island Expertise
              </h2>
              <p className="text-gray-200 mb-6">
                FCS has restored balconies at condo buildings throughout Manatee County, from Anna Maria Island beachfront towers to downtown Bradenton riverfront communities. Our team understands the unique logistics of island work, HOA governance, and the county's permitting processes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Anna Maria Island Experience:</strong> Extensive work navigating island logistics, access constraints, and municipal requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Marine-Grade Materials:</strong> Premium systems designed for Gulf and Tampa Bay salt exposure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Seasonal Scheduling:</strong> Flexible timing to minimize impact during snowbird and tourist seasons</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Manatee County Expertise:</strong> Established relationships with Building Department for efficient permitting</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Building2 className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-gray-300 text-sm">Condo Buildings</div>
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
            Why Bradenton HOAs Choose FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <Shield className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Prime Contractor</h3>
              <p className="text-gray-600">
                FCS is always the prime contractor—never a subcontractor. Your HOA gets direct accountability and single-point responsibility for the entire project.
              </p>
            </div>
            <div className="card text-center p-8">
              <FileText className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">SB 4-D Compliance</h3>
              <p className="text-gray-600">
                We work with structural engineers to address milestone inspection findings and bring your building into full compliance with Florida's coastal requirements.
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
        items={bradentonFaqs}
        title="Bradenton Balcony Reconstruction FAQs"
        description="Common questions about balcony reconstruction, SB 4-D compliance, and HOA projects in Bradenton and Anna Maria Island, Florida."
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Bradenton Balcony Reconstruction Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From SB 4-D compliance to full balcony restoration, FCS is Bradenton's trusted partner for Anna Maria Island and mainland condo balcony reconstruction. Contact us for a complimentary assessment.
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
