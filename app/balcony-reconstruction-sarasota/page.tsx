import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, AlertTriangle, FileText, Wrench, Clock, Calendar, DollarSign, Users } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Balcony Reconstruction Sarasota | SB 4-D | FCS",
  description: "Sarasota balcony reconstruction specialists for Gulf-front condos, Siesta Key properties, and HOAs. SB 4-D milestone inspection compliance, structural repairs, waterproofing. Expert contractors serving Sarasota County. Licensed, bonded, insured.",
  keywords: "balcony reconstruction Sarasota, SB 4-D compliance Sarasota, condo balcony repair Siesta Key, balcony waterproofing Longboat Key, milestone inspection Sarasota, HOA balcony contractor Sarasota FL",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Balcony Reconstruction", href: "/balcony-reconstruction-exterior-waterproofing/" },
  { name: "Sarasota", href: "/balcony-reconstruction-sarasota/" },
];

const serviceTypes = [
  {
    type: "Structural Balcony Repair",
    description: "Complete structural restoration including concrete repair, rebar treatment, and load-bearing element replacement for Sarasota's luxury condos",
    icon: Building2,
  },
  {
    type: "Waterproofing Systems",
    description: "Marine-grade waterproofing membranes designed for Gulf-front properties on Siesta Key, Longboat Key, and Lido Key",
    icon: Shield,
  },
  {
    type: "Railing Replacement",
    description: "Premium aluminum, glass, and cable railing systems meeting Florida Building Code and coastal wind requirements",
    icon: Wrench,
  },
  {
    type: "SB 4-D Compliance",
    description: "Milestone inspection support for buildings 3+ stories—most Sarasota barrier island condos require 25-year coastal inspections",
    icon: FileText,
  },
];

const sarasotaFaqs = [
  {
    question: "What SB 4-D deadline applies to Sarasota condos?",
    answer: "Sarasota's barrier islands—Siesta Key, Longboat Key, Lido Key, and Bird Key—all fall within 3 miles of the coastline, triggering the stricter 25-year milestone inspection requirement. Mainland Sarasota properties more than 3 miles from the coast follow the 30-year timeline. Buildings that reached their milestone age before July 1, 2022 were required to complete inspections by December 31, 2024. Given Sarasota's concentration of 1980s-1990s Gulf-front condos, many buildings are now past or approaching their deadlines.",
  },
  {
    question: "Why are Sarasota's Gulf-front condos particularly vulnerable to balcony deterioration?",
    answer: "Sarasota's barrier island condos face among the harshest conditions in Florida. Direct Gulf of Mexico exposure brings constant salt air, intense UV from unobstructed sun, wind-driven rain during storms, and beach sand abrasion. Properties on Siesta Key and Longboat Key often have west-facing balconies that receive maximum sun and weather exposure. The combination of salt, sun, and humidity can accelerate concrete deterioration significantly faster than inland locations. Many luxury condos also have larger balconies with more complex waterproofing requirements.",
  },
  {
    question: "How much does balcony reconstruction cost in Sarasota?",
    answer: "Sarasota balcony reconstruction typically costs $18,000-$50,000 per balcony for comprehensive restoration—reflecting the premium materials required for Gulf-front locations and Sarasota's luxury market expectations. Longboat Key and Siesta Key properties with larger balconies and higher finish standards may trend higher. Multi-unit projects achieve economies of scale at $10,000-$30,000 per unit. Building-wide programs for 50+ unit buildings range from $600,000 to $8 million depending on scope and finish level.",
  },
  {
    question: "Which Sarasota areas have the most balcony reconstruction needs?",
    answer: "Longboat Key has extensive high-rise condo development from the 1970s-1990s, with many buildings now 30-50 years old. Siesta Key has a mix of mid-rise and high-rise condos along Beach Road and Midnight Pass. Lido Key and St. Armands have waterfront properties requiring assessment. Downtown Sarasota's bay-front condos along Bayfront Drive and Golden Gate Point face salt air exposure. Bird Key's exclusive properties have unique design considerations. Palmer Ranch and Lakewood Ranch have newer construction with later timelines.",
  },
  {
    question: "Do Sarasota's luxury condos require special balcony finishes?",
    answer: "Yes, Sarasota's luxury market often demands higher finish standards than standard reconstruction. FCS works with HOA boards and architects to match existing building aesthetics—this may include decorative concrete overlays, premium tile or pavers, custom railing designs, and color-matched coatings. We coordinate with building designers and can provide finish samples for board approval. While premium finishes add cost, they protect property values in Sarasota's competitive luxury market.",
  },
  {
    question: "Can balcony work be scheduled around Sarasota's tourist and snowbird seasons?",
    answer: "Yes, scheduling is a major consideration for Sarasota condos. Peak season (December through April) brings increased occupancy, social events, and sensitivity to construction disruption. Many HOAs prefer scheduling major work during summer months when seasonal residents are away, though summer brings afternoon thunderstorms that affect exterior work. FCS works with boards to determine optimal timing—some associations split work between shoulder seasons to minimize impact during both summer and winter peaks.",
  },
  {
    question: "How do Sarasota's historic preservation areas affect balcony work?",
    answer: "Several Sarasota neighborhoods have historic designations that may affect balcony reconstruction, including portions of Downtown Sarasota, Burns Court, and Laurel Park. Work in these areas may require coordination with the Sarasota Historic Preservation Board to ensure repairs are compatible with historic character. This typically affects railing designs and exterior finishes rather than structural work. FCS has experience navigating historic requirements and can coordinate the approval process.",
  },
  {
    question: "What waterproofing systems work best for Sarasota's Gulf-front properties?",
    answer: "Sarasota's direct Gulf exposure requires premium waterproofing systems. FCS installs multi-layer systems including: deep-penetrating concrete sealers for salt resistance, marine-grade polyurethane membranes rated for extreme UV and salt exposure, reinforced coating systems at deck-wall junctions (common failure points), slope corrections for proper drainage during intense storms, and UV-stable traffic coatings that withstand Florida's intense sun. For luxury properties, we also offer decorative coating options that combine protection with aesthetics.",
  },
];

const costData = [
  { scope: "Minor Repairs (per balcony)", range: "$4,000 - $10,000", timeline: "2-4 days", description: "Crack repair, coating renewal, minor concrete patching" },
  { scope: "Moderate Restoration (per balcony)", range: "$10,000 - $28,000", timeline: "5-10 days", description: "Structural repairs, waterproofing, railing refurbishment" },
  { scope: "Full Reconstruction (per balcony)", range: "$28,000 - $50,000", timeline: "10-15 days", description: "Complete demo and rebuild, new railings, full waterproofing" },
  { scope: "Multi-Unit Project (per unit)", range: "$10,000 - $30,000", timeline: "Varies", description: "Economies of scale for 10+ unit projects" },
  { scope: "Building-Wide Program", range: "$600K - $8M+", timeline: "4-12 months", description: "Comprehensive restoration for entire luxury building" },
];

const processSteps = [
  { step: 1, title: "Assessment & Testing", description: "Structural evaluation, concrete testing, moisture mapping, and scope development with licensed engineers" },
  { step: 2, title: "HOA/Board Presentation", description: "Detailed proposals, cost options, finish selections, and timeline presentations for association decision-making" },
  { step: 3, title: "Engineering & Permits", description: "Structural engineering drawings, Sarasota County permit applications, and compliance documentation" },
  { step: 4, title: "Mobilization & Phasing", description: "Site setup, resident notification, seasonal scheduling coordination, and phased work schedule" },
  { step: 5, title: "Structural Restoration", description: "Concrete repair, rebar treatment, structural reinforcement, and code-required upgrades" },
  { step: 6, title: "Waterproofing & Finishes", description: "Marine-grade waterproofing, premium railings, decorative coatings, and final inspections with warranty documentation" },
];

export default function BalconyReconstructionSarasotaPage() {
  return (
    <>
      <LocalBusinessSchema city="Sarasota" service="Balcony Reconstruction" />
      <ServiceSchema
        serviceName="Balcony Reconstruction and Waterproofing"
        serviceDescription="Expert balcony reconstruction and waterproofing for Sarasota's luxury condominiums on Siesta Key, Longboat Key, and Lido Key. SB 4-D milestone inspection compliance, structural repairs, and HOA project management. Projects from $100,000 to $10 million."
        city="Sarasota"
        minPrice="100000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Balcony Reconstruction Services in Sarasota, FL"
        description="Comprehensive guide to balcony reconstruction for Sarasota's Gulf-front condos and apartments. Learn about SB 4-D compliance for barrier island properties, costs, timelines, and working with HOAs on luxury balcony restoration projects."
        datePublished="2024-01-15"
        dateModified="2025-01-18"
        slug="/balcony-reconstruction-sarasota/"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Sarasota, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Balcony Reconstruction in Sarasota
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Sarasota County's trusted contractor for Gulf-front condo balcony reconstruction. SB 4-D milestone inspection compliance for Siesta Key, Longboat Key, and Lido Key properties. Marine-grade waterproofing and premium finishes. We work directly with HOAs on projects from $100K to $10M+.
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
              <strong>SB 4-D Alert:</strong> Sarasota barrier island condos 3+ stories require 25-year milestone inspections. Many 1980s-1990s buildings are past deadline.
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
                Sarasota's Balcony Reconstruction Experts
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists is Sarasota County's trusted contractor for balcony reconstruction and waterproofing. Sarasota's barrier islands—Siesta Key, Longboat Key, Lido Key, and Bird Key—are home to some of Florida's most prestigious condominium communities. These Gulf-front properties face the stricter 25-year SB 4-D milestone inspection requirement, with many 1980s-1990s buildings now past their deadlines.
              </p>

              <p className="text-gray-600 mb-6">
                Sarasota's luxury market demands exceptional quality in balcony reconstruction. Direct Gulf exposure requires marine-grade materials, while property values depend on maintaining premium aesthetics. Our team has restored balconies at condominiums throughout Sarasota, from iconic Longboat Key towers to boutique Siesta Key properties, understanding both the technical requirements and the high standards expected in this market.
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
                Why Sarasota Condos Need Balcony Assessment
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Barrier Island Requirements:</strong> Siesta Key, Longboat Key, and Lido Key properties require 25-year coastal milestone inspections under SB 4-D</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Direct Gulf Exposure:</strong> West-facing balconies receive maximum sun, salt, and weather impact—accelerating deterioration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Luxury Market Standards:</strong> Property values depend on maintaining premium aesthetics—balcony condition affects resale and financing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>1980s-1990s Building Stock:</strong> Sarasota's condo boom created thousands of units now 25-40 years old and requiring assessment</span>
                </li>
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Request a Balcony Assessment for Your Sarasota Building <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">HOA & Property Managers</h3>
                <p className="text-gray-200 mb-4">
                  Request a complimentary assessment and proposal for your Sarasota condo building.
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
                  <li>• Barrier islands: 25 years (coastal)</li>
                  <li>• Mainland: 30 years (if &gt;3 mi from coast)</li>
                  <li>• Reinspection every 10 years after</li>
                  <li>• Affects unit resale and financing</li>
                </ul>
                <Link href="/florida-sb4d-compliance-guide/" className="text-amber-800 font-semibold text-sm mt-3 inline-block hover:underline">
                  Read Full SB 4-D Guide →
                </Link>
              </div>

              <RelatedServices city="Sarasota" currentService="balcony-reconstruction" />
              <NearbyLocations currentCity="Sarasota" service="balcony-reconstruction" serviceName="Balcony Reconstruction" />
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Sarasota Balcony Reconstruction Costs
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Costs reflect Sarasota's luxury market standards and Gulf-front material requirements. Premium finishes, larger balconies, and higher aesthetic expectations are factored into these ranges.
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
            * Costs as of 2025. Luxury finish upgrades available. Contact FCS for detailed assessment and proposal.
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
            FCS manages balcony reconstruction from initial assessment through warranty completion, with special attention to Sarasota's luxury standards and seasonal scheduling requirements.
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

      {/* Sarasota Condo Stats */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Sarasota Luxury Condo Expertise
              </h2>
              <p className="text-gray-200 mb-6">
                FCS has restored balconies at prestigious condo communities throughout Sarasota County, from Longboat Key towers to Siesta Key beachfront properties. Our team understands the unique requirements of Sarasota's luxury market, HOA governance, and the county's permitting processes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Luxury Market Experience:</strong> Premium finishes and attention to aesthetic detail for discerning communities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Barrier Island Expertise:</strong> Marine-grade systems designed for direct Gulf exposure on Siesta Key and Longboat Key</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Seasonal Scheduling:</strong> Flexible timing to minimize impact during snowbird and tourist seasons</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Sarasota County Expertise:</strong> Established relationships with Building Department for efficient permitting</span>
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
            Why Sarasota HOAs Choose FCS
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
                We work with structural engineers to address milestone inspection findings and bring your building into full compliance with Florida's 25-year coastal requirement.
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
        items={sarasotaFaqs}
        title="Sarasota Balcony Reconstruction FAQs"
        description="Common questions about balcony reconstruction, SB 4-D compliance, and HOA projects in Sarasota, Florida."
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Sarasota Balcony Reconstruction Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From SB 4-D compliance to premium luxury finishes, FCS is Sarasota's trusted partner for Gulf-front condo balcony reconstruction. Contact us for a complimentary assessment.
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
