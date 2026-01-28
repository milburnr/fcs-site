import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Building2,
  Home,
  FileText,
  BookOpen,
  Shield,
  Landmark,
  Waves,
  Stethoscope,
  Factory,
  HardHat,
  Scale,
  ArrowRight,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Resources & Guides | Construction Knowledge Hub | FCS Tampa",
  description:
    "Expert guides on Tampa Bay construction regulations, FEMA compliance, historic preservation, SB4-D requirements, and more. Free resources for commercial and residential projects.",
  keywords:
    "Tampa construction guides, FEMA 50% rule guide, SB4-D compliance, historic preservation Tampa, construction resources",
};

const commercialResources = [
  {
    category: "Medical & Healthcare",
    icon: Stethoscope,
    articles: [
      { title: "Navigating AHCA Inspections", href: "/navigating-ahca-inspections/", isNew: true },
      { title: "Medical Office Value Engineering", href: "/medical-office-value-engineering/" },
      { title: "Clean Room Construction Standards", href: "/clean-room-construction-standards/" },
      { title: "Medical Gas Piping Requirements", href: "/medical-gas-piping-requirements/" },
    ],
  },
  {
    category: "Industrial & Large Scale",
    icon: Factory,
    articles: [
      { title: "CPM Scheduling to Prevent Delays", href: "/commercial/cpm-scheduling/" },
      { title: "Tilt-Wall vs Metal Buildings", href: "/tilt-wall-vs-metal-buildings/" },
      { title: "Industrial Flex Space Development", href: "/industrial-flex-space-development/" },
      { title: "Warehouse Construction Tampa Bay", href: "/warehouse-construction-tampa-bay/" },
    ],
  },
  {
    category: "Historic Restoration (Commercial)",
    icon: Landmark,
    articles: [
      { title: "Tampa's Historic Social Clubs Restoration", href: "/tampa-historic-social-clubs-restoration/" },
      { title: "Navigating Florida SHPO Requirements", href: "/florida-shpo-requirements/" },
      { title: "Historic Tax Credits for Commercial Buildings", href: "/historic-tax-credits-commercial-buildings/" },
      { title: "Adaptive Reuse of Historic Civic Buildings", href: "/adaptive-reuse-historic-civic-buildings/" },
    ],
  },
  {
    category: "Condo Remediation & Compliance",
    icon: Shield,
    articles: [
      { title: "Florida SB4-D Compliance Guide", href: "/florida-sb4d-compliance-guide/", isNew: true },
      { title: "Milestone Inspection Requirements", href: "/milestone-inspection-requirements/" },
      { title: "SIRS Structural Integrity Reserve Studies", href: "/sirs-structural-integrity-reserve-studies/" },
      { title: "Condo Balcony Inspection Requirements", href: "/condo-balcony-inspection-requirements/" },
    ],
  },
  {
    category: "Multi-Family Construction",
    icon: Building2,
    articles: [
      { title: "Multi-Family Construction Project Management", href: "/multi-family-construction-project-management/", isNew: true },
      { title: "Condo Common Area Construction", href: "/condo-common-area-construction/", isNew: true },
      { title: "Mixed-Use Development in Tampa", href: "/mixed-use-development-tampa/" },
      { title: "Senior Living Construction Requirements", href: "/senior-living-construction-requirements/" },
    ],
  },
  {
    category: "Insurance Restoration",
    icon: Scale,
    articles: [
      { title: "Large Loss Commercial Restoration", href: "/large-loss-commercial-restoration/" },
      { title: "Insurance Restoration for Condominiums", href: "/insurance-restoration-condominiums/" },
      { title: "Common Area Reconstruction After Disasters", href: "/condo-common-area-reconstruction/" },
      { title: "Understanding Insurance Restoration Claims", href: "/understanding-tampa-insurance-restoration-claims/" },
    ],
  },
];

const residentialResources = [
  {
    category: "South Tampa Regulatory",
    icon: FileText,
    articles: [
      { title: "The Hyde Park Renovation Guide", href: "/hyde-park-renovation-guide/", isNew: true },
      { title: "Certificate of Appropriateness Process", href: "/tampa-certificate-of-appropriateness/", isNew: true },
      { title: "South Tampa Historic District Guide", href: "/south-tampa-historic-district-guide/", isNew: true },
      { title: "Sourcing Historic Materials Tampa Bay", href: "/sourcing-historic-materials-tampa-bay/" },
    ],
  },
  {
    category: "Coastal Resilience & FEMA",
    icon: Waves,
    articles: [
      { title: "The FEMA 50% Rule Explained", href: "/fema-50-percent-rule-explained/", isNew: true },
      { title: "Flood Zone VE vs AE Guide", href: "/flood-zone-ve-vs-ae-guide/" },
      { title: "Breakaway Wall Construction Requirements", href: "/breakaway-wall-construction-requirements/" },
      { title: "Waterproofing Historic Masonry", href: "/waterproofing-historic-masonry/" },
    ],
  },
  {
    category: "Luxury Custom Homes",
    icon: Home,
    articles: [
      { title: "Building on Tampa Bay Waterfront Lots", href: "/building-on-tampa-bay-waterfront/", isNew: true },
      { title: "Smart Home Integration for Luxury Estates", href: "/smart-home-integration-luxury-estates/" },
      { title: "Hurricane-Resistant Luxury Home Design", href: "/hurricane-resistant-luxury-home-design/" },
      { title: "Davis Islands Custom Home Building", href: "/davis-islands-custom-home-building/" },
    ],
  },
  {
    category: "Waterfront Construction",
    icon: Waves,
    articles: [
      { title: "Waterfront Lot Site Preparation", href: "/waterfront-lot-site-preparation/", isNew: true },
      { title: "Seawall Coordination for New Construction", href: "/seawall-coordination-new-construction/" },
      { title: "Marine-Grade Building Materials Guide", href: "/marine-grade-building-materials-guide/" },
      { title: "Living Shoreline vs Traditional Seawall", href: "/living-shoreline-vs-seawall/" },
    ],
  },
  {
    category: "Historic Preservation (Residential)",
    icon: Landmark,
    articles: [
      { title: "Renovating Historic Homes in Tampa", href: "/renovating-historic-homes-tampa/", isNew: true },
      { title: "Balancing Modern Comfort with Historic Character", href: "/balancing-modern-comfort-historic-homes/", isNew: true },
      { title: "Historic Home Energy Efficiency Upgrades", href: "/historic-home-energy-efficiency/", isNew: true },
      { title: "Period-Accurate Material Sourcing", href: "/sourcing-historic-materials-tampa-bay/" },
    ],
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources/" },
];


const internalLinks = [
  { href: "/services/", label: "Our Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/about/", label: "About Florida Construction Specialists" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function ResourcesPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={[{ name: "Resources", href: "/resources/" }]} />

      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Construction Knowledge Hub
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-6">
            Expert guides on Tampa Bay construction regulations, compliance requirements,
            and best practices. Select your project type below.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#commercial"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green text-white font-bold rounded-full hover:bg-brand-green-dark transition-all"
            >
              <Building2 className="w-5 h-5" />
              Commercial Resources
            </a>
            <a
              href="#residential"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-dark transition-all"
            >
              <Home className="w-5 h-5" />
              Residential Resources
            </a>
          </div>
        </div>
      </section>

      {/* Commercial Resources */}
      <section id="commercial" className="py-16 bg-white scroll-mt-20">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading">
                Commercial Resources
              </h2>
              <p className="text-gray-600">Risk mitigation, compliance, and project management guides</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialResources.map((category) => (
              <div
                key={category.category}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-brand-green/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-green-light rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-brand-green-dark" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.articles.map((article) => (
                    <li key={article.href}>
                      <Link
                        href={article.href}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-green transition-colors group"
                      >
                        <ArrowRight className="w-3 h-3 text-brand-green opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>{article.title}</span>
                        {article.isNew && (
                          <span className="text-xs bg-brand-green text-white px-1.5 py-0.5 rounded">
                            NEW
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/commercial/"
              className="inline-flex items-center gap-2 text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
            >
              View All Commercial Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Residential Resources */}
      <section id="residential" className="py-16 bg-brand-gold-bg scroll-mt-20">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading">
                Residential Resources
              </h2>
              <p className="text-gray-600">Design guidance, regulatory compliance, and preservation expertise</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {residentialResources.map((category) => (
              <div
                key={category.category}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-brand-gold/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-gold-bg rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-brand-gold-dark" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.articles.map((article) => (
                    <li key={article.href}>
                      <Link
                        href={article.href}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-gold-dark transition-colors group"
                      >
                        <ArrowRight className="w-3 h-3 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>{article.title}</span>
                        {article.isNew && (
                          <span className="text-xs bg-brand-gold text-white px-1.5 py-0.5 rounded">
                            NEW
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/residential/"
              className="inline-flex items-center gap-2 text-brand-gold-dark font-semibold hover:text-brand-gold transition-colors"
            >
              View All Residential Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Most Popular Guides
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/fema-50-percent-rule-explained/"
              className="group bg-gray-50 rounded-xl p-6 hover:bg-brand-gold-bg transition-colors"
            >
              <Shield className="w-8 h-8 text-brand-gold mb-3" />
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold transition-colors">
                FEMA 50% Rule Explained
              </h3>
              <p className="text-sm text-gray-600">
                Understanding substantial improvement thresholds for coastal properties
              </p>
            </Link>
            <Link
              href="/florida-sb4d-compliance-guide/"
              className="group bg-gray-50 rounded-xl p-6 hover:bg-brand-green-light transition-colors"
            >
              <Building2 className="w-8 h-8 text-brand-green mb-3" />
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green transition-colors">
                SB4-D Compliance Guide
              </h3>
              <p className="text-sm text-gray-600">
                Florida's condo safety requirements and compliance timeline
              </p>
            </Link>
            <Link
              href="/hyde-park-renovation-guide/"
              className="group bg-gray-50 rounded-xl p-6 hover:bg-brand-gold-bg transition-colors"
            >
              <Landmark className="w-8 h-8 text-brand-gold mb-3" />
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold transition-colors">
                Hyde Park Renovation Guide
              </h3>
              <p className="text-sm text-gray-600">
                Navigating ARC guidelines in Tampa's premier historic district
              </p>
            </Link>
            <Link
              href="/commercial/cpm-scheduling/"
              className="group bg-gray-50 rounded-xl p-6 hover:bg-brand-green-light transition-colors"
            >
              <HardHat className="w-8 h-8 text-brand-green mb-3" />
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green transition-colors">
                CPM Scheduling Guide
              </h3>
              <p className="text-sm text-gray-600">
                Critical path method scheduling for commercial construction
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Have Questions About Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is ready to help you navigate the complexities of Tampa Bay
            construction regulations and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Consultation
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
      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

    </>
  );
}