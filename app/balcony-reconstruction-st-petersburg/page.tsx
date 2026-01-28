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
  title: "Balcony Reconstruction St. Petersburg FL | SB 4-D Compliance & Condo Restoration | FCS",
  description: "St. Petersburg balcony reconstruction specialists for condos, apartments, and HOAs. SB 4-D milestone inspection compliance for peninsula properties, structural repairs, waterproofing. Expert contractors serving Pinellas County. Licensed, bonded, insured.",
  keywords: "balcony reconstruction St Petersburg, SB 4-D compliance St Pete, condo balcony repair St Petersburg, balcony waterproofing Pinellas County, milestone inspection St Pete, HOA balcony contractor St Petersburg",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Balcony Reconstruction", href: "/balcony-reconstruction-exterior-waterproofing/" },
  { name: "St. Petersburg", href: "/balcony-reconstruction-st-petersburg/" },
];

const serviceTypes = [
  {
    type: "Structural Balcony Repair",
    description: "Complete structural restoration including concrete repair, rebar treatment, and load-bearing element replacement for St. Pete's high-rise condos",
    icon: Building2,
  },
  {
    type: "Waterproofing Systems",
    description: "Marine-grade waterproofing membranes designed for peninsula exposure with salt air and dual-coast weather patterns",
    icon: Shield,
  },
  {
    type: "Railing Replacement",
    description: "Corrosion-resistant aluminum, glass, and cable railing systems meeting Florida Building Code and coastal requirements",
    icon: Wrench,
  },
  {
    type: "SB 4-D Compliance",
    description: "Milestone inspection support for buildings 3+ stories—most St. Pete properties fall under 25-year coastal deadline",
    icon: FileText,
  },
];

const stPeteFaqs = [
  {
    question: "Why does St. Petersburg have so many condos requiring balcony reconstruction?",
    answer: "St. Petersburg's peninsula geography means virtually the entire city is within 3 miles of the coastline, triggering SB 4-D's stricter 25-year milestone inspection requirement. The city experienced a major condo building boom in the 1980s-1990s, meaning thousands of units are now 25-40 years old. Combined with the peninsula's exposure to both Tampa Bay and the Gulf, salt air corrosion accelerates balcony deterioration. Areas like Downtown, Old Northeast, Snell Isle, and Coquina Key have particularly high concentrations of affected buildings.",
  },
  {
    question: "How does St. Petersburg's peninsula location affect balcony deterioration?",
    answer: "St. Petersburg is uniquely vulnerable because it's surrounded by water on three sides—Tampa Bay to the east, Boca Ciega Bay to the west, and the Gulf of Mexico to the southwest. This means salt air comes from multiple directions, and no building orientation fully escapes exposure. The city also has the highest lightning strike density in the United States, causing accelerated deterioration of metal components. Combined with 44 inches of annual rainfall and near-constant humidity, balconies in St. Pete deteriorate faster than inland locations.",
  },
  {
    question: "What is the SB 4-D deadline for St. Petersburg condos?",
    answer: "Because essentially all of St. Petersburg falls within 3 miles of the coastline, the stricter 25-year milestone inspection requirement applies citywide. Buildings that reached 25 years old before July 1, 2022 were required to have milestone inspections completed by December 31, 2024. Buildings reaching 25 years after that date must complete inspections within 2 years of that milestone. After the initial inspection, reinspection is required every 10 years. Non-compliance can result in fines and restrictions on unit sales.",
  },
  {
    question: "How much does balcony reconstruction cost in St. Petersburg?",
    answer: "St. Petersburg balcony reconstruction typically costs $18,000-$45,000 per balcony for comprehensive restoration—slightly higher than Tampa due to increased access challenges in older high-rises and marine-grade material requirements. Downtown high-rise condos with limited staging access may be 15-20% higher. Multi-unit projects achieve economies of scale at $10,000-$28,000 per unit. Building-wide programs for 50+ unit buildings range from $600,000 to $6 million depending on scope. FCS provides detailed assessments and phased payment options aligned with HOA special assessments.",
  },
  {
    question: "Which St. Petersburg neighborhoods have the most balcony reconstruction needs?",
    answer: "Downtown St. Petersburg has the highest concentration of high-rise condos requiring assessment, including towers along Beach Drive, the Pier District, and Central Avenue. Old Northeast features many mid-rise buildings from the 1970s-1990s now past their 25-year milestone. Snell Isle's waterfront condos face severe salt air exposure. Coquina Key's direct bay exposure accelerates deterioration. The Gateway area has newer stock but buildings from the late 1990s are now approaching deadlines. Tropicana Field redevelopment may also trigger requirements for nearby buildings.",
  },
  {
    question: "Can balcony work be done during St. Pete's tourist season?",
    answer: "Yes, though scheduling requires coordination. St. Petersburg's downtown and waterfront areas see increased activity from December through April. FCS schedules work to minimize disruption—noisy operations during daytime hours, advance notice to residents and neighboring businesses, and phased approaches that keep most units accessible. Some HOAs prefer to schedule major work in the summer months when part-time residents are away. We work with your board to determine optimal timing for your community.",
  },
  {
    question: "Do you work with St. Petersburg's historic district condos?",
    answer: "Yes, FCS has extensive experience with St. Petersburg's five historic districts, including Downtown, Old Northeast, Historic Kenwood, Roser Park, and Historic Uptown. Balcony reconstruction in historic districts requires additional coordination with the City's Historic Preservation Office. We help navigate design requirements while ensuring structural integrity and SB 4-D compliance. In many cases, railing designs and finishes must complement the building's historic character while meeting current safety codes.",
  },
  {
    question: "What waterproofing methods work best for St. Petersburg's climate?",
    answer: "St. Petersburg's unique peninsula exposure requires marine-grade waterproofing systems. FCS installs multi-layer systems including: penetrating sealers for concrete substrate protection, elastomeric polyurethane membranes with enhanced salt resistance, reinforced coating systems at wall-deck junctions (common failure points), proper slope correction for St. Pete's heavy afternoon rains, and UV-stable traffic coatings rated for Florida's intense sun. We also address flashing and threshold details that often fail in peninsula conditions.",
  },
];

const costData = [
  { scope: "Minor Repairs (per balcony)", range: "$4,000 - $10,000", timeline: "2-4 days", description: "Crack repair, coating renewal, minor concrete patching" },
  { scope: "Moderate Restoration (per balcony)", range: "$10,000 - $25,000", timeline: "5-10 days", description: "Structural repairs, waterproofing, railing refurbishment" },
  { scope: "Full Reconstruction (per balcony)", range: "$25,000 - $45,000", timeline: "10-15 days", description: "Complete demo and rebuild, new railings, full waterproofing" },
  { scope: "Multi-Unit Project (per unit)", range: "$10,000 - $28,000", timeline: "Varies", description: "Economies of scale for 10+ unit projects" },
  { scope: "Building-Wide Program", range: "$600K - $6M+", timeline: "4-12 months", description: "Comprehensive restoration for entire building" },
];

const processSteps = [
  { step: 1, title: "Assessment & Testing", description: "Structural evaluation, concrete testing, moisture mapping, and scope development with licensed engineers" },
  { step: 2, title: "HOA/Board Presentation", description: "Detailed proposals, cost options, and timeline presentations for association decision-making" },
  { step: 3, title: "Engineering & Permits", description: "Structural engineering drawings, City of St. Petersburg permit applications, and compliance documentation" },
  { step: 4, title: "Mobilization & Phasing", description: "Site setup, resident notification, and phased work schedule to minimize disruption" },
  { step: 5, title: "Structural Restoration", description: "Concrete repair, rebar treatment, structural reinforcement, and code-required upgrades" },
  { step: 6, title: "Waterproofing & Finishes", description: "Marine-grade waterproofing, railings, coatings, and final inspections with warranty documentation" },
];

export default function BalconyReconstructionStPetersburgPage() {
  return (
    <>
      <LocalBusinessSchema city="St. Petersburg" service="Balcony Reconstruction" />
      <ServiceSchema
        serviceName="Balcony Reconstruction and Waterproofing"
        serviceDescription="Expert balcony reconstruction and waterproofing for St. Petersburg condominiums, apartments, and commercial buildings. SB 4-D milestone inspection compliance for peninsula properties, structural repairs, and HOA project management. Projects from $100,000 to $10 million."
        city="St. Petersburg"
        minPrice="100000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Balcony Reconstruction Services in St. Petersburg, FL"
        description="Comprehensive guide to balcony reconstruction for St. Petersburg condos and apartments. Learn about SB 4-D compliance for peninsula properties, costs, timelines, and working with HOAs on balcony restoration projects."
        datePublished="2024-01-15"
        dateModified="2025-01-18"
        slug="/balcony-reconstruction-st-petersburg/"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">St. Petersburg, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Balcony Reconstruction in St. Petersburg
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Pinellas County's trusted contractor for condo and apartment balcony reconstruction. SB 4-D milestone inspection compliance for St. Pete's peninsula properties, structural repairs, and marine-grade waterproofing. We work directly with HOAs and property managers on projects from $100K to $10M+.
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
              <strong>SB 4-D Alert:</strong> All St. Petersburg buildings 3+ stories require 25-year milestone inspections (entire city is within 3-mile coastal zone).
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
              <span className="font-semibold text-gray-700">$10M+ Bonding</span>
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
                St. Petersburg's Balcony Reconstruction Experts
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists is Pinellas County's trusted contractor for balcony reconstruction and waterproofing. St. Petersburg's unique peninsula geography means virtually the entire city falls under SB 4-D's stricter 25-year coastal inspection requirements—making timely balcony assessment critical for condo associations throughout the city.
              </p>

              <p className="text-gray-600 mb-6">
                St. Petersburg's waterfront location presents unique challenges for balcony construction. Properties along Beach Drive, the Pier District, Central Avenue, and throughout Downtown face accelerated deterioration from salt air exposure from multiple directions, the nation's highest lightning strike density, and heavy seasonal rainfall. Our team has restored balconies at condominiums throughout St. Petersburg, from high-rise towers downtown to waterfront communities in Old Northeast and Snell Isle.
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
                Why St. Petersburg Condos Need Balcony Assessment
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Peninsula-Wide Coastal Rules:</strong> Entire city falls within 3-mile coastal zone—all 3+ story buildings require 25-year milestone inspections under SB 4-D</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Multi-Directional Salt Exposure:</strong> Tampa Bay, Boca Ciega Bay, and Gulf exposure means salt air corrosion from every direction</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>1980s-1990s Building Stock:</strong> Downtown renaissance brought thousands of condo units now 25-40 years old and requiring assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>High-Rise Challenges:</strong> St. Pete's downtown high-rises require specialized access equipment and phased construction</span>
                </li>
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Request a Balcony Assessment for Your St. Petersburg Building <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">HOA & Property Managers</h3>
                <p className="text-gray-200 mb-4">
                  Request a complimentary assessment and proposal for your St. Petersburg condo building.
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
                  <li>• St. Pete: 25 years (entire city coastal)</li>
                  <li>• Reinspection every 10 years after</li>
                  <li>• Penalties for non-compliance</li>
                  <li>• Affects unit resale and financing</li>
                </ul>
                <Link href="/florida-sb4d-compliance-guide/" className="text-amber-800 font-semibold text-sm mt-3 inline-block hover:underline">
                  Read Full SB 4-D Guide →
                </Link>
              </div>

              <RelatedServices city="St. Petersburg" currentService="balcony-reconstruction" />
              <NearbyLocations currentCity="St. Petersburg" service="balcony-reconstruction" serviceName="Balcony Reconstruction" />
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            St. Petersburg Balcony Reconstruction Costs
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Costs vary based on balcony size, deterioration extent, and access requirements. St. Petersburg's high-rise concentration and marine environment typically require marine-grade materials and specialized access.
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
            * Costs as of 2025. Actual costs depend on specific conditions. Contact FCS for detailed assessment and proposal.
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
            FCS manages balcony reconstruction from initial assessment through warranty completion, with special attention to St. Pete's HOA processes and historic district requirements.
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

      {/* St. Pete Condo Stats */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-heading">
                St. Petersburg Condo Expertise
              </h2>
              <p className="text-gray-200 mb-6">
                FCS has restored balconies at condo buildings throughout St. Petersburg, from downtown high-rises to waterfront communities along Tampa Bay. Our team understands Pinellas County's unique challenges, HOA governance, and the city's historic preservation requirements.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Historic District Experience:</strong> Work with all five St. Pete historic districts and the Historic Preservation Office</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>High-Rise Specialists:</strong> Equipment and expertise for downtown towers with specialized access needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Marine-Grade Materials:</strong> Salt-resistant systems designed for peninsula exposure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>City of St. Petersburg Expertise:</strong> Established relationships with Development Services for efficient permitting</span>
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
            Why St. Petersburg HOAs Choose FCS
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
        items={stPeteFaqs}
        title="St. Petersburg Balcony Reconstruction FAQs"
        description="Common questions about balcony reconstruction, SB 4-D compliance, and HOA projects in St. Petersburg, Florida."
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            St. Petersburg Balcony Reconstruction Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From SB 4-D compliance to full balcony restoration, FCS is St. Petersburg's trusted partner for condo and apartment balcony reconstruction. Contact us for a complimentary assessment.
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
