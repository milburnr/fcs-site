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
  title: "Balcony Reconstruction Brandon | SB 4-D | FCS",
  description: "Brandon balcony reconstruction specialists for condos, apartments, and HOAs. SB 4-D milestone inspection compliance for Hillsborough County properties, structural repairs, waterproofing. Expert contractors serving Brandon and Greater Tampa. Licensed, bonded, insured.",
  keywords: "balcony reconstruction Brandon, SB 4-D compliance Brandon, condo balcony repair Brandon FL, balcony waterproofing Hillsborough County, milestone inspection Brandon, HOA balcony contractor Brandon Florida",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Balcony Reconstruction", href: "/balcony-reconstruction-exterior-waterproofing/" },
  { name: "Brandon", href: "/balcony-reconstruction-brandon/" },
];

const serviceTypes = [
  {
    type: "Structural Balcony Repair",
    description: "Complete structural restoration including concrete repair, rebar treatment, and load-bearing element replacement for Brandon's condos and apartments",
    icon: Building2,
  },
  {
    type: "Waterproofing Systems",
    description: "High-performance waterproofing membranes designed for Central Florida's subtropical climate and heavy rainfall",
    icon: Shield,
  },
  {
    type: "Railing Replacement",
    description: "Aluminum, glass, and cable railing systems meeting current Florida Building Code requirements",
    icon: Wrench,
  },
  {
    type: "SB 4-D Compliance",
    description: "Milestone inspection support for buildings 3+ stories—most Brandon properties follow the 30-year inland timeline",
    icon: FileText,
  },
];

const brandonFaqs = [
  {
    question: "What is the SB 4-D deadline for Brandon condos?",
    answer: "Brandon is an inland community in Hillsborough County, more than 3 miles from the coastline. This means most Brandon properties fall under the 30-year milestone inspection requirement rather than the stricter 25-year coastal deadline. Buildings that reached 30 years old before July 1, 2022 were required to complete milestone inspections by December 31, 2024. Buildings reaching 30 years after that date must complete inspections within 2 years. However, some properties closer to Tampa Bay may fall under the 25-year coastal requirement—consult with FCS to determine your specific timeline.",
  },
  {
    question: "How does Brandon's inland location affect balcony costs compared to coastal areas?",
    answer: "Brandon balcony reconstruction typically costs 15-25% less than comparable projects in coastal communities like Tampa's waterfront or Clearwater. The inland location means no marine-grade material requirements for salt resistance, standard aluminum railings are typically sufficient, and access for equipment is generally easier in Brandon's suburban layout. However, proper waterproofing remains essential due to Florida's heavy rainfall and humidity. Brandon's location just east of Tampa also provides good contractor availability.",
  },
  {
    question: "How much does balcony reconstruction cost in Brandon?",
    answer: "Brandon balcony reconstruction typically costs $10,000-$30,000 per balcony for comprehensive restoration—among the most competitive rates in the Tampa Bay region due to inland pricing advantages. Multi-unit projects achieve economies of scale at $6,000-$18,000 per unit. Building-wide programs for 50+ unit buildings range from $350,000 to $4 million depending on scope. FCS provides detailed assessments with phased payment options aligned with HOA special assessment schedules.",
  },
  {
    question: "Which Brandon neighborhoods have the most balcony reconstruction needs?",
    answer: "Central Brandon has condo communities from the 1980s-1990s now approaching 30-year milestones, including areas along Providence Road, Bloomingdale Avenue, and near the Westfield Brandon mall. The Valrico area has similar building stock from the same era. Communities near Alafia River face slightly higher humidity considerations. Riverview, immediately south of Brandon, has a mix of older condos and newer construction. FishHawk and newer developments have more recent construction with later inspection timelines.",
  },
  {
    question: "Does Brandon's suburban environment affect balcony work differently than urban Tampa?",
    answer: "Yes, Brandon's suburban layout offers several advantages for balcony reconstruction: more staging space around buildings, easier equipment access, less traffic disruption, and typically more flexible scheduling. Parking is usually more available for construction crews. However, Brandon condos may have different HOA dynamics than urban high-rises—often smaller associations with different budget cycles. FCS adapts our approach to fit Brandon's community character while maintaining the same quality standards.",
  },
  {
    question: "Are Brandon apartment complexes subject to SB 4-D requirements?",
    answer: "SB 4-D applies to residential buildings 3 stories or higher that are used for residential or mixed-use purposes, regardless of whether they are condominiums or rental apartments. This means many Brandon apartment complexes are subject to the same milestone inspection requirements as condos. Building owners (not individual tenants) are responsible for compliance. FCS works with both condo associations and apartment complex owners throughout Brandon on SB 4-D compliance.",
  },
  {
    question: "How does weather affect balcony work in Brandon?",
    answer: "Brandon's inland location offers some advantages: no hurricane storm surge risk (though wind remains a factor), slightly lower humidity than coastal areas, and good year-round working conditions. However, Central Florida's afternoon thunderstorm season (May-September) requires careful scheduling of concrete work, coating applications, and waterproofing installation. FCS schedules these weather-sensitive operations for morning hours and monitors forecasts closely. Brandon's location also means projects can often proceed when coastal areas have weather delays.",
  },
  {
    question: "What waterproofing systems work best for Brandon's climate?",
    answer: "Brandon's inland climate requires waterproofing systems designed for heavy rainfall and humidity rather than salt exposure. FCS installs multi-layer systems including: penetrating concrete sealers for substrate protection, elastomeric waterproofing membranes rated for Florida's rain intensity, reinforced coating systems at wall-deck junctions and drainage points, proper slope correction for rapid water evacuation during thunderstorms, and UV-stable traffic coatings. While marine-grade materials aren't required, we still specify high-quality systems appropriate for Florida conditions.",
  },
];

const costData = [
  { scope: "Minor Repairs (per balcony)", range: "$2,500 - $6,000", timeline: "2-4 days", description: "Crack repair, coating renewal, minor concrete patching" },
  { scope: "Moderate Restoration (per balcony)", range: "$6,000 - $15,000", timeline: "5-10 days", description: "Structural repairs, waterproofing, railing refurbishment" },
  { scope: "Full Reconstruction (per balcony)", range: "$15,000 - $30,000", timeline: "10-15 days", description: "Complete demo and rebuild, new railings, full waterproofing" },
  { scope: "Multi-Unit Project (per unit)", range: "$6,000 - $18,000", timeline: "Varies", description: "Economies of scale for 10+ unit projects" },
  { scope: "Building-Wide Program", range: "$350K - $4M+", timeline: "4-10 months", description: "Comprehensive restoration for entire building" },
];

const processSteps = [
  { step: 1, title: "Assessment & Testing", description: "Structural evaluation, concrete testing, moisture mapping, and scope development with licensed engineers" },
  { step: 2, title: "HOA/Board Presentation", description: "Detailed proposals, cost options, and timeline presentations for association decision-making" },
  { step: 3, title: "Engineering & Permits", description: "Structural engineering drawings, Hillsborough County permit applications, and compliance documentation" },
  { step: 4, title: "Mobilization & Phasing", description: "Site setup, resident notification, weather contingency planning, and phased work schedule" },
  { step: 5, title: "Structural Restoration", description: "Concrete repair, rebar treatment, structural reinforcement, and code-required upgrades" },
  { step: 6, title: "Waterproofing & Finishes", description: "Quality waterproofing, railings, coatings, and final inspections with warranty documentation" },
];

export default function BalconyReconstructionBrandonPage() {
  return (
    <>
      <LocalBusinessSchema city="Brandon" service="Balcony Reconstruction" />
      <ServiceSchema
        serviceName="Balcony Reconstruction and Waterproofing"
        serviceDescription="Expert balcony reconstruction and waterproofing for Brandon condominiums, apartments, and commercial buildings. SB 4-D milestone inspection compliance (30-year inland requirement), structural repairs, and HOA project management. Projects from $100,000 to $10 million."
        city="Brandon"
        minPrice="100000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Balcony Reconstruction Services in Brandon, FL"
        description="Comprehensive guide to balcony reconstruction for Brandon condos and apartments. Learn about SB 4-D compliance for inland properties (30-year milestone), costs, timelines, and working with HOAs on balcony restoration projects."
        datePublished="2024-01-15"
        dateModified="2025-01-18"
        slug="/balcony-reconstruction-brandon/"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Brandon, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Balcony Reconstruction in Brandon
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Greater Tampa's trusted contractor for condo and apartment balcony reconstruction. SB 4-D milestone inspection compliance with Brandon's 30-year inland timeline, structural repairs, and quality waterproofing. Competitive inland pricing. We work directly with HOAs on projects from $100K to $10M+.
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
              <strong>SB 4-D Timeline:</strong> Brandon (inland) buildings 3+ stories have 30-year milestone inspections—later deadline than coastal areas.
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
                Brandon's Balcony Reconstruction Experts
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists is Greater Tampa's trusted contractor for balcony reconstruction and waterproofing in Brandon and surrounding communities. As an inland community in Hillsborough County, Brandon benefits from the 30-year SB 4-D milestone inspection timeline rather than the stricter 25-year coastal requirement—giving condo associations additional time for planning and budgeting.
              </p>

              <p className="text-gray-600 mb-6">
                Brandon's inland location offers significant cost advantages compared to coastal communities—no marine-grade materials required, easier access for equipment, and competitive labor rates. However, Central Florida's heavy rainfall, afternoon thunderstorms, and high humidity still require proper engineering and waterproofing. Our team has restored balconies at condominiums and apartments throughout Brandon, Valrico, and Riverview.
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
                Why Brandon Condos Need Balcony Assessment
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>30-Year Inland Deadline:</strong> Brandon follows the extended inland timeline—but 1990s buildings are now approaching compliance requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Heavy Rainfall Impact:</strong> Central Florida's intense thunderstorms require proper waterproofing even without salt exposure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Cost Advantages:</strong> Inland location means 15-25% lower costs than coastal communities—plan now while timing allows</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Growing Community:</strong> Brandon's continued growth makes property maintenance essential for competitive values</span>
                </li>
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Request a Balcony Assessment for Your Brandon Building <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">HOA & Property Managers</h3>
                <p className="text-gray-200 mb-4">
                  Request a complimentary assessment and proposal for your Brandon condo or apartment building.
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
                  <li>• Brandon (inland): 30-year milestone</li>
                  <li>• Reinspection every 10 years after</li>
                  <li>• More time than coastal communities</li>
                  <li>• Affects unit resale and financing</li>
                </ul>
                <Link href="/florida-sb4d-compliance-guide/" className="text-amber-800 font-semibold text-sm mt-3 inline-block hover:underline">
                  Read Full SB 4-D Guide →
                </Link>
              </div>

              <RelatedServices city="Brandon" currentService="balcony-reconstruction" />
              <NearbyLocations currentCity="Brandon" service="balcony-reconstruction" serviceName="Balcony Reconstruction" />
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Brandon Balcony Reconstruction Costs
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Brandon's inland location offers competitive pricing compared to coastal communities. Costs vary based on balcony size, deterioration extent, and specific building conditions. Standard (non-marine) materials are typically sufficient.
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
            * Costs as of 2025. Brandon pricing is typically 15-25% below coastal rates. Contact FCS for detailed assessment and proposal.
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
            FCS manages balcony reconstruction from initial assessment through warranty completion, with special attention to HOA processes and resident communication.
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

      {/* Brandon Condo Stats */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Brandon Condo Expertise
              </h2>
              <p className="text-gray-200 mb-6">
                FCS has restored balconies at condo buildings and apartments throughout Brandon, Valrico, Riverview, and Hillsborough County. Our team understands the advantages of inland construction, suburban HOA dynamics, and the county's permitting processes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Inland Construction Expertise:</strong> Understanding of non-coastal requirements and cost-effective material selection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Suburban Logistics:</strong> Efficient work in Brandon's spacious condo communities with ample staging access</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Weather-Aware Scheduling:</strong> Work scheduled around afternoon thunderstorms for optimal results</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Hillsborough County Expertise:</strong> Established relationships with Building Services for efficient permitting</span>
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
            Why Brandon HOAs Choose FCS
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
                We work with structural engineers to address milestone inspection findings and bring your building into full compliance with Florida's 30-year inland requirement.
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
        items={brandonFaqs}
        title="Brandon Balcony Reconstruction FAQs"
        description="Common questions about balcony reconstruction, SB 4-D compliance (30-year inland requirement), and HOA projects in Brandon, Florida."
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Brandon Balcony Reconstruction Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From SB 4-D compliance to full balcony restoration, FCS is Brandon's trusted partner for condo and apartment balcony reconstruction. Competitive inland pricing. Contact us for a complimentary assessment.
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
