import Link from "next/link";
import { Metadata } from "next";
import { Phone, ArrowRight, CheckCircle, Home, Shield, Award, Waves, Anchor, Sun, Wind } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";

import { InternalLinks } from "@/components/InternalLinks";
export const metadata: Metadata = {
  title: "Waterfront Home Construction Tampa | Luxury Coastal Builder | FCS",
  description: "Waterfront custom home construction in Tampa Bay. Bayfront, Gulf, river, and lakefront properties. FEMA compliance, seawall coordination, marine-grade materials. $1M+ homes. Call (813) 420-7561.",
  keywords: ["waterfront home construction tampa", "bayfront home builder", "luxury waterfront builder florida", "coastal home construction", "waterfront custom homes"],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Residential Construction", href: "/services/residential/" },
  { name: "Waterfront Homes", href: "/services/residential/waterfront-homes/" },
];

const waterfrontTypes = [
  {
    title: "Tampa Bay Waterfront",
    description: "Bayfront estates on Hillsborough Bay, Old Tampa Bay, and Tampa Bay proper. Views, water access, and hurricane-resistant construction.",
    icon: Waves,
  },
  {
    title: "Gulf Coast Properties",
    description: "Beach and Gulf-front homes on barrier islands and coastal communities. Maximum wind and flood protection requirements.",
    icon: Sun,
  },
  {
    title: "River & Canal Homes",
    description: "Properties on the Hillsborough River, Manatee River, and canal systems. Boat access, seawall construction, and dock coordination.",
    icon: Anchor,
  },
  {
    title: "Lakefront Estates",
    description: "Custom homes on Florida's lakes and spring-fed waters. Dock construction, natural shoreline preservation, and scenic views.",
    icon: Home,
  },
];

const faqs = [
  {
    question: "What makes waterfront construction different from inland building?",
    answer: "Waterfront construction involves unique challenges: FEMA flood zone compliance (including elevation requirements), enhanced wind resistance for coastal high hazard areas, seawall and dock coordination, marine-grade materials to resist salt air corrosion, and specialized foundations for waterfront soils. Tampa Bay waterfront properties often fall in VE or AE flood zones with specific construction requirements.",
  },
  {
    question: "What are FEMA flood zone requirements for waterfront homes?",
    answer: "FEMA flood zones determine construction requirements. VE zones (coastal high hazard) require elevated construction on pilings, breakaway walls below the base flood elevation, and no enclosed areas below BFE. AE zones require elevation to or above BFE, flood-resistant materials below BFE, and proper flood venting. We navigate these requirements for every waterfront project.",
  },
  {
    question: "Do you coordinate seawall construction?",
    answer: "Yes, we coordinate seawall construction with marine contractors as part of waterfront home projects. This includes seawall replacement or repair before home construction, integration of seawall with site grading, coordination of dock permits, and ensuring seawall height meets flood zone requirements. For existing seawalls, we assess condition and recommend repair or replacement as needed.",
  },
  {
    question: "What materials do you use for coastal construction?",
    answer: "Waterfront construction requires marine-grade materials: stainless steel or hot-dipped galvanized fasteners, aluminum or fiberglass doors and windows (or clad wood), treated lumber rated for ground contact, cement board or other moisture-resistant siding, and impact-rated glazing for hurricane protection. Material selection is critical for durability in salt air environments.",
  },
  {
    question: "How do you protect against hurricanes and storm surge?",
    answer: "Hurricane protection is built into every waterfront home: impact-rated windows and doors (or approved shutters), enhanced roof-to-wall connections, continuous load paths from roof to foundation, proper pile embedment for elevated homes, flood-resistant materials below BFE, and consideration of storm surge zones. Tampa Bay's hurricane exposure requires comprehensive protection.",
  },
  {
    question: "What flood insurance considerations affect construction?",
    answer: "Flood insurance costs are significantly affected by construction choices. Building to or above advisory base flood elevation (often 1-2 feet above BFE) can reduce premiums substantially. Elevated construction, proper flood venting, and certified elevation certificates all impact insurance costs. We help clients understand how construction decisions affect long-term insurance expenses.",
  },
  {
    question: "Can you build on lots with seawalls in poor condition?",
    answer: "Yes, but seawall condition must be addressed before or during home construction. Poor seawalls can undermine foundations and increase flood risk. We assess seawall condition during site evaluation and coordinate replacement or repair with marine contractors. Seawall work is typically completed before home construction begins to protect the building site.",
  },
  {
    question: "What about dock and boat lift construction?",
    answer: "We coordinate dock and boat lift construction with licensed marine contractors. This includes dock permitting (often requiring environmental review), dock design integrated with home plans, electrical service for lifts and dock lighting, and water and utilities to dock areas. Dock work is typically scheduled to complete with or shortly after home construction.",
  },
  {
    question: "How long does waterfront home construction take?",
    answer: "Waterfront custom homes typically require 12-18 months for construction, with additional time for design, permitting, and potentially seawall work. Elevated construction and enhanced hurricane protection add complexity. Permitting for waterfront properties often takes longer due to environmental reviews and flood zone requirements. We provide realistic timelines during pre-construction.",
  },
  {
    question: "What areas do you serve for waterfront construction?",
    answer: "We build waterfront homes throughout Tampa Bay including: Davis Islands, Harbour Island, Bayshore Boulevard, Beach Park, South Tampa bayfront, Apollo Beach, Ruskin, St. Petersburg waterfront, Clearwater Beach, and inland waterfront on rivers and lakes. Our Ruskin headquarters positions us ideally for Tampa Bay waterfront construction.",
  },
];

export default function WaterfrontHomesPage() {
  return (
    <>
      <LocalBusinessSchema service="Waterfront Home Construction" />
      <ServiceSchema
        serviceName="Waterfront Custom Home Construction"
        serviceDescription="Luxury waterfront home construction in Tampa Bay. Bayfront, Gulf, river, and lakefront properties. FEMA compliance, seawall coordination, marine-grade materials, hurricane protection. Custom homes starting at $1M+."
        minPrice="1000000"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems.slice(1)} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/luxury-custom-homes.jpg')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <Waves className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Waterfront Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Waterfront Custom Homes in Tampa Bay
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists builds luxury waterfront homes that embrace Tampa Bay's exceptional water lifestyle. From bayfront estates to Gulf Coast properties, we deliver homes designed for waterfront living—with the flood protection, hurricane resistance, and marine-grade construction that waterfront locations demand.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              FEMA compliance, seawall coordination, impact-rated construction. Custom waterfront homes starting at $1M+. Prime contractor accountability on every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Your Waterfront Project
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
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            <div className="flex items-center gap-2">
              <Waves className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">FEMA Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Hurricane-Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">$10M+ Bonding</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">20+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div >
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Waterfront Construction Expertise
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay's waterfront lifestyle is exceptional—year-round boating, spectacular sunsets, and direct water access from your backyard. But waterfront properties also present unique construction challenges that require specialized expertise: FEMA flood zone requirements, hurricane protection, seawall coordination, and marine-grade materials that withstand salt air exposure.
            </p>
            <p className="text-gray-600 mb-6">
              At Florida Construction Specialists, we build waterfront homes that embrace the water lifestyle while providing the protection and durability these locations require. We navigate FEMA requirements, coordinate with marine contractors, and specify materials proven in coastal environments. Every waterfront home we build is designed to withstand Florida's hurricane threats while maximizing views and water access.
            </p>
            <p className="text-gray-600 mb-8">
              Our Ruskin headquarters—itself waterfront on Tampa Bay—positions us ideally for waterfront construction throughout the region. We understand the specific challenges of bayfront, riverfront, and Gulf Coast properties.
            </p>

            <Link
              href="/services/residential/"
              className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Back to Residential Construction Services
            </Link>
          </div>
        </div>
      </section>

      {/* Waterfront Types */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Waterfront Property Types
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {waterfrontTypes.map((type) => (
              <div key={type.title} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center flex-shrink-0">
                    <type.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark text-lg mb-2">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section bg-white">
        <div className="container-custom">
          <div >
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Waterfront Construction Capabilities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Flood & Storm Protection</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">FEMA flood zone compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Elevated construction on pilings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Impact-rated doors and windows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Enhanced roof-to-wall connections</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Marine Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Seawall coordination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Dock and boat lift planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Marine-grade materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Waterfront outdoor living</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Waterfront Home Construction FAQs
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Residential Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services/residential/" className="text-brand-green hover:underline">Residential Construction</Link></li>
                <li><Link href="/services/residential/hurricane-resistant-construction/" className="text-brand-green hover:underline">Hurricane-Resistant Homes</Link></li>
                <li><Link href="/services/residential/exterior-waterproofing/" className="text-brand-green hover:underline">Exterior Waterproofing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">By Location</h3>
              <ul className="space-y-2">
                <li><Link href="/locations/tampa-fl/" className="text-brand-green hover:underline">Tampa Waterfront</Link></li>
                <li><Link href="/locations/st-petersburg-fl/" className="text-brand-green hover:underline">St. Petersburg Waterfront</Link></li>
                <li><Link href="/locations/clearwater-fl/" className="text-brand-green hover:underline">Clearwater Beach</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Other Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services/disaster-recovery/" className="text-brand-green hover:underline">Disaster Recovery</Link></li>
                <li><Link href="/services/historic-restoration/" className="text-brand-green hover:underline">Historic Restoration</Link></li>
                <li><Link href="/contact/" className="text-brand-green hover:underline">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Build Your Waterfront Dream Home
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your waterfront home project. From bayfront estates to Gulf Coast properties, we build luxury homes designed for Tampa Bay's exceptional water lifestyle.
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

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            links={[{"href":"/services/residential/","label":"Residential Construction Services"},{"href":"/luxury-custom-homes/","label":"Luxury Custom Homes"},{"href":"/balcony-reconstruction/","label":"Balcony Reconstruction"},{"href":"/exterior-waterproofing/","label":"Exterior Waterproofing"},{"href":"/services/residential/waterfront-homes/","label":"Waterfront Home Construction"}]}
            title="Related Resources"
            
          />
        </div>
      </section>

    </>
  );
}
