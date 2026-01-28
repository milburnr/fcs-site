import Link from "next/link";
import {
  Phone,
  CheckCircle,
  Building2,
  Users,
  Award,
  Clock,
  MapPin,
  Truck,
  Shield,
  Target,
  TrendingUp,
  Warehouse,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, OrganizationSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";

import { InternalLinks } from "@/components/InternalLinks";
export const metadata: Metadata = {
  title: "About Florida Construction Specialists | Tampa Bay's Premier Builder",
  description:
    "Learn about Florida Construction Specialists - Tampa Bay's trusted general contractor with 30+ years experience, $15M bonding capacity, and strategic headquarters for rapid deployment across the region.",
  keywords:
    "about FCS, Tampa general contractor, Florida Construction Specialists history, Tampa Bay construction company",
};

const values = [
  {
    icon: Shield,
    title: "Always Prime Contractor",
    description:
      "We never work as a subcontractor. Your project gets our full attention, direct accountability, and complete quality control from start to finish.",
  },
  {
    icon: Award,
    title: "Quality Over Shortcuts",
    description:
      "We build relationships that last decades by delivering work we're proud to stand behind. Our reputation is earned one project at a time.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We understand time is money. CPM scheduling, proactive coordination, and experienced project management keep your project on track.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "Your project is a partnership. We maintain open communication, transparent pricing, and collaborative problem-solving throughout.",
  },
];

const capabilities = [
  {
    icon: Building2,
    title: "Commercial Construction",
    items: [
      "Medical & healthcare facilities",
      "Industrial & warehouse",
      "Multi-family developments",
      "Historic commercial restoration",
    ],
  },
  {
    icon: Target,
    title: "Residential Excellence",
    items: [
      "Luxury custom homes ($1M+)",
      "Waterfront estates",
      "Historic preservation",
      "FEMA-compliant construction",
    ],
  },
  {
    icon: Shield,
    title: "Specialized Services",
    items: [
      "Insurance restoration",
      "Disaster recovery",
      "Balcony reconstruction",
      "Exterior waterproofing",
    ],
  },
  {
    icon: TrendingUp,
    title: "Project Support",
    items: [
      "Pre-construction planning",
      "Value engineering",
      "Expert witness services",
      "Certified estimates",
    ],
  },
];

const ruskinAdvantages = [
  {
    icon: Truck,
    title: "Rapid Regional Deployment",
    description:
      "Our central Tampa Bay location allows rapid mobilization to projects throughout the region—from downtown Tampa to Sarasota—without the traffic delays and congestion of a downtown headquarters.",
  },
  {
    icon: Warehouse,
    title: "Full-Scale Logistics Facility",
    description:
      "Our Ruskin headquarters includes material staging areas and equipment storage that a cramped downtown office simply can't provide. We can pre-stage large deliveries and coordinate logistics efficiently.",
  },
  {
    icon: MapPin,
    title: "Strategic Coverage",
    description:
      "Positioned between Tampa and Sarasota, we serve the entire Tampa Bay coastal region—Davis Islands, Hyde Park, St. Petersburg, Clearwater, and Sarasota—all within our optimal service radius.",
  },
];

const serviceAreaHighlights = [
  { area: "South Tampa", focus: "Hyde Park, Davis Islands, Harbour Island luxury homes" },
  { area: "Downtown Tampa", focus: "Commercial construction and historic restoration" },
  { area: "St. Petersburg", focus: "Waterfront properties and condo remediation" },
  { area: "Clearwater", focus: "Coastal construction and medical facilities" },
  { area: "Sarasota", focus: "Luxury residential and commercial development" },
  { area: "Brandon/Riverview", focus: "Industrial and multi-family construction" },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about/" },
];

export default function AboutPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <OrganizationSchema />

      <Breadcrumb items={[{ name: "About Us", href: "/about/" }]} />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Building Tampa Bay&apos;s Future, One Project at a Time
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl">
              For over three decades, Florida Construction Specialists has delivered
              large-scale commercial projects and luxury custom homes throughout Tampa Bay.
              We&apos;re not just contractors—we&apos;re partners in building your vision.
            </p>
            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-gold" />
                <span>{BUSINESS_INFO.yearsInBusiness} Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-gold" />
                <span>{BUSINESS_INFO.bondingCapacity} Bonding</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-gold" />
                <span>{BUSINESS_INFO.projectsCompleted} Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-center">
            <div>
              <p className="text-3xl font-bold text-brand-green">{BUSINESS_INFO.totalProjectValue}</p>
              <p className="text-sm text-gray-600">Total Project Value</p>
            </div>
            <div className="h-10 w-px bg-gray-200 hidden md:block" />
            <div>
              <p className="text-3xl font-bold text-brand-green">{BUSINESS_INFO.bondingCapacity}</p>
              <p className="text-sm text-gray-600">Bonding Capacity</p>
            </div>
            <div className="h-10 w-px bg-gray-200 hidden md:block" />
            <div>
              <p className="text-3xl font-bold text-brand-green">License #{BUSINESS_INFO.licenseNumber}</p>
              <p className="text-sm text-gray-600">State Certified GC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div >
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6 text-lg">
                Florida Construction Specialists was founded on a simple principle: be the
                contractor you&apos;d want to hire for your own project. That means showing up
                when we say we will, communicating openly about challenges, and never cutting
                corners on quality.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Over three decades, we&apos;ve grown from a small residential contractor into
                one of Tampa Bay&apos;s most trusted names in both commercial and residential
                construction. Our portfolio spans medical facilities, industrial warehouses,
                historic restorations, and luxury custom homes—but our approach hasn&apos;t changed.
              </p>
              <p className="text-gray-600 text-lg">
                Today, with {BUSINESS_INFO.bondingCapacity} in bonding capacity and a team of
                experienced project managers, architects, and engineers, we take on projects
                ranging from $500K to $50M+. But whether it&apos;s a medical office build-out or
                a waterfront estate on Davis Islands, every client receives the same commitment
                to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-12 text-center font-heading">
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-14 h-14 rounded-full bg-brand-green-light flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-brand-green-dark" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Ruskin Advantage */}
      <section className="py-16 bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-heading">
              The Strategic Advantage of Our Location
            </h2>
            <p className="text-xl text-gray-200">
              Headquartered in Ruskin for rapid deployment across the entire Tampa Bay
              and Sarasota coastal region
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {ruskinAdvantages.map((advantage) => (
              <div
                key={advantage.title}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <advantage.icon className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-gray-200">{advantage.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-center">
              Serving Tampa Bay&apos;s Most Desirable Communities
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceAreaHighlights.map((item) => (
                <div key={item.area} className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{item.area}</p>
                    <p className="text-sm text-gray-300">{item.focus}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Full-Service Construction Capabilities
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From pre-construction planning to final walkthrough, we provide comprehensive
            services for commercial and residential projects of all scales.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability) => (
              <div key={capability.title} className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  {capability.title}
                </h3>
                <ul className="space-y-2">
                  {capability.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Why Clients Choose FCS
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Financial Strength",
                    text: `${BUSINESS_INFO.bondingCapacity} bonding capacity means we can handle projects of virtually any scale with the financial backing to see them through.`,
                  },
                  {
                    title: "Regulatory Expertise",
                    text: "Deep knowledge of Tampa Bay's unique requirements—from FEMA flood zones to historic preservation guidelines to AHCA compliance.",
                  },
                  {
                    title: "In-House Technical Team",
                    text: "Architects, engineers, and insurance specialists on staff provide integrated expertise that most GCs can't match.",
                  },
                  {
                    title: "Proven Track Record",
                    text: `${BUSINESS_INFO.projectsCompleted} completed projects and ${BUSINESS_INFO.totalProjectValue} in delivered work speaks to our ability to execute.`,
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-brand-green-dark">{item.title}</h4>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">
                Ready to Discuss Your Project?
              </h3>
              <p className="text-gray-600 mb-6">
                Whether you&apos;re planning a commercial development or a custom home,
                we&apos;d love to learn about your vision and discuss how we can help.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact/"
                  className="block w-full py-3 bg-brand-gold text-white font-bold rounded-lg text-center hover:bg-brand-gold-dark transition-colors"
                >
                  Schedule a Consultation
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-brand-green text-white font-bold rounded-lg hover:bg-brand-green-dark transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-sm text-gray-500">
                  {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city},{" "}
                  {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From initial concept to final walkthrough, Florida Construction Specialists
            is your partner in bringing exceptional projects to life throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/commercial/" className="btn-cta">
              Commercial Services
            </Link>
            <Link
              href="/residential/"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
            >
              Residential Services
            </Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            links={[{"href":"/services/commercial/","label":"Commercial Construction"},{"href":"/services/residential/","label":"Residential Construction"},{"href":"/services/disaster-recovery/","label":"Disaster Recovery"},{"href":"/services/historic-restoration/","label":"Historic Restoration"},{"href":"/locations/tampa/","label":"Tampa Construction Services"}]}
            title="Related Resources"
            
          />
        </div>
      </section>

    </>
  );
}
