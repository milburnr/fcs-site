import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, CheckCircle, UtensilsCrossed, Flame, Droplets, Wind, Users, Clock, DollarSign, Zap } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Restaurant Design & Construction in Tampa | Florida Construction Guide",
  description: "Expert guide to restaurant construction in Tampa Bay. Learn about kitchen design, health department requirements, permits, ventilation, and costs for building your restaurant.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Restaurant Design & Construction", href: "/successful-restaurant-design-with-florida-construction-specialists/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/boost-your-business-with-an-attractive-retail-space/", label: "Retail Space Design" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const designElements = [
  {
    icon: UtensilsCrossed,
    title: "Kitchen Layout & Workflow",
    description: "The heart of any restaurant. An efficient kitchen design minimizes steps, reduces ticket times, and keeps staff safe.",
    points: [
      "Assembly-line flow from prep to plating",
      "Separate hot and cold stations",
      "Clear paths for servers and kitchen staff",
      "Adequate storage for dry goods and walk-ins",
      "Dedicated dishwashing area with proper drainage",
    ],
  },
  {
    icon: Flame,
    title: "Ventilation & Hood Systems",
    description: "Commercial kitchens require Type I or Type II hoods based on equipment. Proper ventilation is code-critical and affects comfort.",
    points: [
      "Type I hoods for grease-producing equipment",
      "Make-up air systems to balance exhaust",
      "Fire suppression integration (Ansul systems)",
      "Energy-efficient demand control ventilation",
      "Regular maintenance access requirements",
    ],
  },
  {
    icon: Droplets,
    title: "Plumbing & Grease Management",
    description: "Restaurants have intensive plumbing needs. Grease traps, three-compartment sinks, and hand wash stations are mandated.",
    points: [
      "Grease interceptor sizing per local codes",
      "Three-compartment sink with proper spacing",
      "Hand wash sinks at each workstation",
      "Floor drains with proper slope",
      "Hot water capacity for peak demand",
    ],
  },
  {
    icon: Zap,
    title: "Electrical & Equipment Power",
    description: "Commercial kitchen equipment requires significant electrical capacity. Plan for current needs plus future expansion.",
    points: [
      "208V/480V 3-phase for heavy equipment",
      "Dedicated circuits for refrigeration",
      "GFCI protection per NEC requirements",
      "Emergency lighting and exit signs",
      "POS system infrastructure",
    ],
  },
];

const permittingRequirements = [
  {
    permit: "Building Permit",
    agency: "Local Building Department",
    timeline: "2-6 weeks",
    notes: "Required for any construction or significant renovation",
  },
  {
    permit: "Health Permit",
    agency: "FL Dept of Health / Local Health Dept",
    timeline: "2-4 weeks",
    notes: "Plan review before construction; inspection before opening",
  },
  {
    permit: "Fire Safety",
    agency: "Local Fire Marshal",
    timeline: "1-3 weeks",
    notes: "Hood suppression, egress, occupancy load",
  },
  {
    permit: "Liquor License",
    agency: "FL Division of Alcoholic Beverages",
    timeline: "60-120 days",
    notes: "Apply early—can be lengthy process",
  },
  {
    permit: "Sign Permit",
    agency: "Local Planning/Zoning",
    timeline: "1-4 weeks",
    notes: "Size, placement, and illumination restrictions",
  },
  {
    permit: "Certificate of Occupancy",
    agency: "Local Building Department",
    timeline: "After all inspections pass",
    notes: "Cannot open to public without CO",
  },
];

const costFactors = [
  { factor: "Kitchen equipment", range: "$50,000 - $300,000+", notes: "Varies greatly by cuisine type and capacity" },
  { factor: "Ventilation/HVAC", range: "$30,000 - $100,000", notes: "Type I hoods are expensive but required" },
  { factor: "Plumbing", range: "$15,000 - $50,000", notes: "Grease interceptors, floor drains, sinks" },
  { factor: "Electrical", range: "$20,000 - $60,000", notes: "3-phase service often needed" },
  { factor: "Interior buildout", range: "$100 - $300/SF", notes: "Finishes, seating, decor" },
  { factor: "Design & permits", range: "$10,000 - $40,000", notes: "Architecture, engineering, permit fees" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Restaurant Design & Construction in Tampa Bay"
        description="Expert guide to restaurant construction in Tampa Bay. Learn about kitchen design, health department requirements, permits, and costs."
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Restaurant construction in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Restaurant Design & Construction in Tampa Bay
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            From kitchen workflow to health department approvals—everything you need to know about building a successful restaurant in Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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
              Restaurant construction is among the most complex commercial buildouts. Unlike a standard office or retail space, restaurants require specialized mechanical systems, strict health department compliance, and careful workflow design that directly impacts operational success.
            </p>
            <p className="text-gray-600 mb-6">
              The Tampa Bay area's thriving culinary scene means competition is fierce. A well-designed restaurant doesn't just meet code—it creates an experience that brings customers back. And critically, it supports your back-of-house team with an efficient, safe, and comfortable work environment.
            </p>
            <p className="text-gray-600 mb-8">
              This guide covers the essential elements of restaurant construction, from initial design considerations through permitting and final inspections. Whether you're opening your first location or expanding an existing concept, understanding these fundamentals will help you make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Design Elements */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-12 font-heading">
            Critical Design Elements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {designElements.map((element, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <element.icon className="w-10 h-10 text-brand-gold" />
                  <h3 className="text-xl font-bold text-brand-green-dark font-heading">{element.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{element.description}</p>
                <ul className="space-y-2">
                  {element.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Front of House */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Front-of-House Design Considerations
            </h2>
            <div className="prose prose-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Dining Room Layout</h3>
              <p className="text-gray-600 mb-6">
                The dining room is where your concept comes to life. Key considerations include traffic flow, accessibility, noise management, and creating distinct zones (bar, dining, waiting area). Florida restaurants also need to consider outdoor seating—a major draw in our climate—and how it integrates with the interior.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">ADA Compliance</h3>
              <p className="text-gray-600 mb-6">
                Accessibility isn't optional. Restaurants must provide accessible routes, seating, restrooms, and counters. Plan for 5% of seating to be wheelchair-accessible (minimum 1 table), and ensure 36" clear paths throughout. Restrooms require specific clearances and grab bars.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Acoustics & Ambiance</h3>
              <p className="text-gray-600 mb-6">
                Hard surfaces look great but create noise problems. Balance aesthetic goals with acoustic treatments—ceiling baffles, upholstered seating, wall treatments. HVAC noise is also a concern; plan duct velocities and equipment locations to minimize disruption.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Server Stations</h3>
              <p className="text-gray-600 mb-6">
                Strategically placed server stations reduce trips to the kitchen. Include POS terminals, beverage stations, and side work areas. Plan electrical and plumbing rough-ins even if you're building out in phases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Permitting */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Permits & Approvals Required
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Restaurant permitting involves multiple agencies. Starting early and understanding the process prevents costly delays.
          </p>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-heading">Permit</th>
                  <th className="px-6 py-4 text-left font-heading">Agency</th>
                  <th className="px-6 py-4 text-left font-heading">Timeline</th>
                  <th className="px-6 py-4 text-left font-heading">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {permittingRequirements.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-700">{row.permit}</td>
                    <td className="px-6 py-4 text-gray-600">{row.agency}</td>
                    <td className="px-6 py-4 text-gray-600">{row.timeline}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Health Department */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 font-heading">Health Department Requirements</h2>
            <p className="text-xl text-white/90 mb-8">
              The Florida Department of Health (or local health department) reviews all restaurant plans and inspects before opening. Failing inspection means delays and re-inspection fees.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Plan Review Focus Areas</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Equipment specifications and layout</li>
                  <li>• Handwashing sink locations (one per station)</li>
                  <li>• Food storage and temperature control</li>
                  <li>• Three-compartment sink sizing</li>
                  <li>• Grease trap sizing and location</li>
                  <li>• Finish materials (smooth, cleanable surfaces)</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Common Inspection Failures</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Inadequate hot water capacity</li>
                  <li>• Missing hand sinks or soap/towels</li>
                  <li>• Improper food storage temperatures</li>
                  <li>• Flooring that doesn't meet spec</li>
                  <li>• Ventilation not operational</li>
                  <li>• Missing thermometers in equipment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Restaurant Construction Costs
            </h2>
            <p className="text-gray-600 mb-8">
              Restaurant buildouts typically range from $150 to $500+ per square foot depending on concept and condition of existing space. Here's a breakdown of major cost categories:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Cost Factor</th>
                    <th className="px-6 py-4 text-left font-heading">Typical Range</th>
                    <th className="px-6 py-4 text-left font-heading">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {costFactors.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.factor}</td>
                      <td className="px-6 py-4 text-brand-green font-semibold">{row.range}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 mt-4 text-sm">
              *Ranges are for Tampa Bay market and vary based on space condition, concept complexity, and equipment quality.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Clock className="w-10 h-10 text-brand-gold" />
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading">Typical Project Timeline</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <p className="text-4xl font-bold text-brand-green mb-2">4-8</p>
                <p className="text-gray-600 font-semibold">weeks</p>
                <p className="text-sm text-gray-500 mt-2">Design & Engineering</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <p className="text-4xl font-bold text-brand-green mb-2">4-8</p>
                <p className="text-gray-600 font-semibold">weeks</p>
                <p className="text-sm text-gray-500 mt-2">Permitting</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <p className="text-4xl font-bold text-brand-green mb-2">8-16</p>
                <p className="text-gray-600 font-semibold">weeks</p>
                <p className="text-sm text-gray-500 mt-2">Construction</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <p className="text-4xl font-bold text-brand-green mb-2">2-4</p>
                <p className="text-gray-600 font-semibold">weeks</p>
                <p className="text-sm text-gray-500 mt-2">Inspections & Opening</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6">
              <strong>Total: 4-9 months</strong> from concept to opening day
            </p>
          </div>
        </div>
      </section>

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
            Ready to Build Your Restaurant?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team has built restaurants, bars, and food service facilities throughout Tampa Bay. Let's discuss your concept and create a realistic timeline and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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
