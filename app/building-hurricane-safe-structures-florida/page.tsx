import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Shield, Wind, Home, Droplets, AlertTriangle, Building2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Building Hurricane-Safe Structures in Florida | Construction Guide",
  description: "Learn how Florida's building codes create hurricane-resistant commercial structures. Expert guidance on wind-resistant design, impact glazing, and storm-proof construction from Tampa Bay contractors.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Building Hurricane Safe Structures Florida", href: "/building-hurricane-safe-structures-florida/" },
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/reinforced-construction-services-in-tampa-for-disaster-prevention/", label: "Reinforced Construction" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const windZones = [
  {
    zone: "Inland Zone",
    speed: "130-140 mph",
    areas: "Most of Tampa, Lakeland, Brandon",
    requirements: "Standard high-velocity hurricane zone requirements",
  },
  {
    zone: "Coastal Zone",
    speed: "150-160 mph",
    areas: "St. Petersburg, Clearwater, coastal Pinellas",
    requirements: "Enhanced wind resistance, stricter opening protection",
  },
  {
    zone: "High-Velocity Zone",
    speed: "170+ mph",
    areas: "Miami-Dade, Broward (for reference)",
    requirements: "Most stringent requirements in the nation",
  },
];

const keyElements = [
  {
    icon: Home,
    title: "Reinforced Roof Systems",
    description: "Roofs are the most vulnerable component in hurricanes. Florida code requires continuous load paths from roof to foundation, hurricane straps at every connection, and enhanced fastening schedules. Metal roofing and concrete tiles outperform traditional shingles in high winds.",
    specs: [
      "Hurricane straps at 6' O.C. minimum",
      "Ring-shank nails or structural screws",
      "Secondary water barriers required",
      "Sealed roof deck mandatory",
    ],
  },
  {
    icon: Shield,
    title: "Impact-Resistant Glazing",
    description: "Windows and doors are critical weak points. Impact-resistant glazing or approved shutters are required throughout Florida's high-velocity hurricane zones. Large-missile impact standards (9 lb. 2x4 at 50 fps) apply to most commercial buildings.",
    specs: [
      "Miami-Dade NOA approved products",
      "Large-missile impact testing",
      "Pressure cycling requirements",
      "Structural silicone glazing systems",
    ],
  },
  {
    icon: Building2,
    title: "Structural Connections",
    description: "The continuous load path concept ensures wind forces transfer from roof to walls to foundation without breaking the chain. Every connection must be engineered and inspected. Simpson Strong-Tie and similar connectors are standard.",
    specs: [
      "Engineered connection design",
      "Hold-down anchors at corners",
      "Shear wall construction",
      "Concrete or masonry walls preferred",
    ],
  },
  {
    icon: Droplets,
    title: "Water Intrusion Prevention",
    description: "Most hurricane damage comes from water, not wind. Proper flashing, sealed penetrations, and secondary barriers prevent water intrusion even if the outer envelope is breached. Commercial buildings require enhanced waterproofing details.",
    specs: [
      "Peel-and-stick underlayments",
      "Self-sealing flashings",
      "Weep systems for water management",
      "Flood-resistant materials below BFE",
    ],
  },
];

const codeTimeline = [
  { year: "Pre-1992", description: "Minimal hurricane requirements, contributing to catastrophic Andrew damage" },
  { year: "1992", description: "Hurricane Andrew exposes severe code deficiencies" },
  { year: "2002", description: "Florida Building Code adopted statewide, unifying standards" },
  { year: "2007", description: "Enhanced high-velocity hurricane zone requirements" },
  { year: "2020", description: "FBC 7th Edition with updated wind maps and requirements" },
  { year: "2023", description: "FBC 8th Edition with post-Ian/Nicole improvements" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Building Hurricane-Safe Structures in Florida"
        description="Learn how Florida's building codes create hurricane-resistant commercial structures."
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/hurricane-ian.webp"
            alt="Hurricane-resistant construction in Florida"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Building Hurricane-Safe Structures in Florida
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Florida's building codes are among the strictest in the nation for wind resistance. Understanding these requirements is essential for any commercial construction project in the Tampa Bay area.
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
              When Hurricane Andrew devastated South Florida in 1992, it exposed critical weaknesses in construction practices. The $27 billion in damage—much of it preventable—led to a complete overhaul of Florida's building codes. Today, structures built to current code are dramatically more resistant to hurricane forces than those built just 30 years ago.
            </p>
            <p className="text-gray-600 mb-6">
              For commercial building owners in Tampa Bay, understanding hurricane-resistant construction isn't just about code compliance—it's about protecting your investment, ensuring business continuity, and potentially reducing insurance costs. Modern hurricane-safe construction techniques can help buildings survive Category 4 and even Category 5 storms with minimal damage.
            </p>
          </div>
        </div>
      </section>

      {/* Wind Zones */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Florida Wind Speed Zones
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Design wind speeds vary by location. The Tampa Bay area falls within the high-velocity hurricane zone, with design speeds ranging from 130-160 mph depending on proximity to the coast.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {windZones.map((zone, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <Wind className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{zone.zone}</h3>
                <p className="text-3xl font-bold text-brand-green mb-2">{zone.speed}</p>
                <p className="text-sm text-gray-500 mb-4">{zone.areas}</p>
                <p className="text-gray-600 text-sm">{zone.requirements}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Elements */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-12 font-heading">
            Key Elements of Hurricane-Resistant Construction
          </h2>
          <div className="space-y-12">
            {keyElements.map((element, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-4 mb-4">
                    <element.icon className="w-10 h-10 text-brand-gold" />
                    <h3 className="text-2xl font-bold text-brand-green-dark font-heading">{element.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{element.description}</p>
                </div>
                <div className="lg:w-1/3 bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-bold text-brand-green-dark mb-3">Key Specifications</h4>
                  <ul className="space-y-2">
                    {element.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Evolution */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Evolution of Florida's Hurricane Building Codes
            </h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-brand-green-dark"></div>
              <div className="space-y-8">
                {codeTimeline.map((item, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 bg-brand-green-dark rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{item.year.slice(-2)}</span>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <p className="font-bold text-brand-green-dark">{item.year}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Considerations */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Special Considerations for Commercial Buildings
            </h2>
            <div className="prose prose-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Essential Facilities</h3>
              <p className="text-gray-600 mb-6">
                Hospitals, emergency operations centers, and other essential facilities must meet enhanced requirements—typically designed for wind speeds 15-20% higher than standard buildings. These structures must remain operational during and immediately after a hurricane.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Large Envelope Buildings</h3>
              <p className="text-gray-600 mb-6">
                Warehouses, retail stores, and other large single-story buildings face unique challenges. Their large roof areas experience significant uplift forces, and their expansive walls must resist both direct pressure and debris impact. Metal building systems require special detailing for hurricane zones.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Multi-Story Buildings</h3>
              <p className="text-gray-600 mb-6">
                Wind speeds increase with height. Upper floors of multi-story buildings experience significantly higher pressures than ground level. Curtain wall systems, balconies, and rooftop equipment all require enhanced engineering. Progressive collapse prevention is also a consideration.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Insurance Considerations</h3>
              <p className="text-gray-600 mb-6">
                Buildings that exceed minimum code requirements may qualify for reduced insurance premiums. Features like Miami-Dade approved impact glazing (even when not required), enhanced roof attachments, and backup power systems can improve insurability and reduce costs. Some carriers offer credits of 15-30% for documented above-code construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Box */}
      <section className="section bg-red-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto flex gap-6 items-start">
            <AlertTriangle className="w-12 h-12 text-red-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-red-800 mb-2">Existing Building Upgrades</h3>
              <p className="text-gray-700">
                If you own a commercial building constructed before 2002, it may not meet current hurricane standards. While full upgrades aren't required until major renovation, voluntary improvements can significantly improve survivability. Roof tie-downs, impact shutters, and garage door bracing are often cost-effective retrofits. Contact us for a hurricane vulnerability assessment of your existing building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Build for Florida's Worst Weather
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team has built hurricane-resistant commercial structures throughout Tampa Bay. Let's discuss how to protect your investment from Florida's storms.
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
