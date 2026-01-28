import Link from "next/link";
import { Metadata } from "next";
import { Phone, ArrowRight, CheckCircle, Home, Shield, Award, Wind, Lock, Layers, Zap } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";

import { InternalLinks } from "@/components/InternalLinks";
export const metadata: Metadata = {
  title: "Hurricane-Resistant Home Construction Tampa | Storm-Proof Building | FCS",
  description: "Hurricane-resistant home construction in Tampa Bay. Impact windows, reinforced roofing, continuous load paths, flood protection. Custom homes built to exceed Florida Building Code. Call (813) 420-7561.",
  keywords: ["hurricane resistant construction tampa", "storm proof home building", "impact resistant construction florida", "fortified home builder", "hurricane protection construction"],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Residential Construction", href: "/services/residential/" },
  { name: "Hurricane-Resistant Construction", href: "/services/residential/hurricane-resistant-construction/" },
];

const protectionFeatures = [
  {
    title: "Impact-Rated Openings",
    description: "Impact-resistant windows, doors, and garage doors that protect against wind-borne debris—the primary cause of structural failure during hurricanes.",
    icon: Shield,
  },
  {
    title: "Reinforced Roofing Systems",
    description: "Enhanced roof-to-wall connections, proper underlayment, and wind-rated shingles or tiles that resist the uplift forces of hurricane winds.",
    icon: Layers,
  },
  {
    title: "Continuous Load Paths",
    description: "Steel connectors and reinforcement from foundation to roof, creating an unbroken chain of resistance against wind forces.",
    icon: Lock,
  },
  {
    title: "Flood Resilience",
    description: "Elevated construction, flood-resistant materials, and proper venting for properties in flood zones. FEMA compliance and insurance optimization.",
    icon: Wind,
  },
];

const faqs = [
  {
    question: "What makes a home hurricane-resistant?",
    answer: "Hurricane-resistant construction involves multiple integrated systems: impact-rated windows and doors (or approved shutters), enhanced roof connections with metal straps and clips, continuous load paths from foundation to roof, reinforced garage doors, proper roof underlayment and wind-rated covering, and structural connections that exceed code minimums. It's not any single feature—it's how all components work together.",
  },
  {
    question: "What wind speed is your construction rated for?",
    answer: "Florida Building Code requires construction to withstand specific wind speeds based on location. Tampa Bay's coastal areas require 150-170 mph design wind speed; inland areas require 130-150 mph. We build to or above these requirements and can achieve higher ratings for clients seeking maximum protection. Design wind speed is based on 3-second gusts, the standard for building codes.",
  },
  {
    question: "Do I need impact windows or can I use shutters?",
    answer: "Both provide wind-borne debris protection. Impact windows offer 24/7 protection without action, maintain views, provide noise reduction and energy efficiency, and may qualify for insurance discounts. Shutters cost less upfront but require deployment before storms. Many homeowners choose impact windows for convenience and peace of mind, but either approach meets code requirements.",
  },
  {
    question: "What is a continuous load path?",
    answer: "A continuous load path is an unbroken chain of structural connections from roof to foundation. During hurricanes, wind creates uplift forces that try to lift the roof. Without proper connections, the roof can separate from walls, leading to catastrophic failure. We use hurricane straps, hold-downs, and embedded anchors to create continuous load paths that transfer wind forces safely to the ground.",
  },
  {
    question: "How does hurricane-resistant construction affect insurance?",
    answer: "Hurricane-resistant features can significantly reduce homeowner's insurance premiums—often 15-45% depending on location and features. Opening protection (impact windows or shutters), roof shape, roof-to-wall connections, and secondary water resistance all impact rates. We can coordinate wind mitigation inspections and provide documentation that helps clients maximize insurance savings.",
  },
  {
    question: "What is FORTIFIED Home certification?",
    answer: "FORTIFIED Home is a voluntary program from the Insurance Institute for Business & Home Safety (IBHS) that recognizes construction exceeding code requirements. FORTIFIED designation can qualify for additional insurance discounts. We can build to FORTIFIED standards for clients seeking maximum hurricane resistance and insurance benefits. Three levels are available: Bronze, Silver, and Gold.",
  },
  {
    question: "Do you retrofit existing homes for hurricane resistance?",
    answer: "Yes, we perform hurricane retrofits on existing homes. Common upgrades include: impact window and door installation, garage door replacement, roof strap addition, secondary water resistance for roofs, and opening protection systems. Retrofits are often more cost-effective than rebuilding and can qualify for insurance premium reductions.",
  },
  {
    question: "How do you protect against flooding during hurricanes?",
    answer: "Flood protection is critical in Tampa Bay. For new construction, we build above base flood elevation (often 1-2 feet higher for insurance savings), use flood-resistant materials below BFE, install proper flood venting, and design drainage to move water away from structures. In flood zones, elevated construction on pilings may be required.",
  },
  {
    question: "What roofing materials are most hurricane-resistant?",
    answer: "Metal roofing offers excellent wind resistance when properly installed. Concrete and clay tiles are durable but require proper attachment. Architectural shingles rated for high winds perform well in most applications. The attachment method is as important as the material—we use enhanced fastening patterns, proper underlayment, and roof-to-wall connections that exceed minimums.",
  },
  {
    question: "How much more does hurricane-resistant construction cost?",
    answer: "True hurricane-resistant construction typically adds 10-20% to construction costs compared to code-minimum building. However, this investment often pays back through: lower insurance premiums (ongoing annual savings), reduced storm damage over the building's life, peace of mind during hurricane season, and potentially higher resale value. We help clients evaluate the cost-benefit of enhanced protection levels.",
  },
];

export default function HurricaneResistantPage() {
  return (
    <>
      <LocalBusinessSchema service="Hurricane-Resistant Construction" />
      <ServiceSchema
        serviceName="Hurricane-Resistant Home Construction"
        serviceDescription="Hurricane-resistant custom home construction in Tampa Bay. Impact windows, reinforced roofing, continuous load paths, flood protection. Homes built to exceed Florida Building Code requirements for maximum storm protection."
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
              <Wind className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Storm-Proof Building</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Hurricane-Resistant Home Construction
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists builds homes that stand strong when storms strike. Our hurricane-resistant construction goes beyond code minimums—integrating impact protection, reinforced roofing, continuous load paths, and flood resilience into homes that protect your family and investment.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              Impact windows, enhanced connections, flood protection. Insurance premium reductions. 20+ years of Florida storm experience. Custom homes starting at $1M+.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Build a Storm-Proof Home
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
              <Wind className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">150+ MPH Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Impact Protection</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">FORTIFIED Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Insurance Savings</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div >
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Building for Florida's Storm Reality
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay has been fortunate to avoid a direct major hurricane hit in recent decades, but that luck will eventually change. When it does, the difference between homes that survive and those that don't comes down to construction quality—specifically, how well the building resists wind, water, and debris.
            </p>
            <p className="text-gray-600 mb-6">
              At Florida Construction Specialists, we build homes that are prepared for that day. Our hurricane-resistant construction integrates multiple protection systems: impact-rated openings that stop wind-borne debris, reinforced roof connections that resist uplift, continuous load paths that hold the structure together, and flood-resilient features for properties in vulnerable areas.
            </p>
            <p className="text-gray-600 mb-8">
              This isn't about building bunkers—it's about building beautiful homes that happen to be exceptionally strong. Modern hurricane-resistant construction is virtually invisible; your home looks the same but performs dramatically better when storms threaten.
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

      {/* Protection Features */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Hurricane Protection Systems
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {protectionFeatures.map((feature) => (
              <div key={feature.title} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Benefits */}
      <section className="section bg-white">
        <div className="container-custom">
          <div >
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Insurance & Financial Benefits
            </h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-gray-600 mb-6">
                Hurricane-resistant construction isn't just about protection—it's also a financial investment that can pay returns every year through reduced insurance premiums.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-3">Premium Reductions</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Opening protection: 15-30% reduction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Roof shape & attachments: 5-15% reduction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Secondary water resistance: 3-8% reduction</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-3">Additional Value</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Reduced storm damage risk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Peace of mind during season</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Enhanced resale value</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Hurricane-Resistant Construction FAQs
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
                <li><Link href="/services/residential/waterfront-homes/" className="text-brand-green hover:underline">Waterfront Homes</Link></li>
                <li><Link href="/services/residential/exterior-waterproofing/" className="text-brand-green hover:underline">Exterior Waterproofing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Storm Recovery</h3>
              <ul className="space-y-2">
                <li><Link href="/services/disaster-recovery/" className="text-brand-green hover:underline">Disaster Recovery</Link></li>
                <li><Link href="/services/disaster-recovery/hurricane-damage/" className="text-brand-green hover:underline">Hurricane Damage Repair</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">By Location</h3>
              <ul className="space-y-2">
                <li><Link href="/locations/tampa-fl/" className="text-brand-green hover:underline">Tampa</Link></li>
                <li><Link href="/locations/clearwater-fl/" className="text-brand-green hover:underline">Clearwater</Link></li>
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
            Build with Hurricane Protection
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss hurricane-resistant construction for your new home. We build beautiful homes that stand strong when storms strike.
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
