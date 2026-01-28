import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Factory,
  Stethoscope,
  ShieldCheck,
  Landmark,
  Building,
  Calendar,
  ArrowRight,
  Phone,
  CheckCircle
} from "lucide-react";
import { BUSINESS_INFO, LOCATIONS } from "@/lib/constants";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { HubRelatedArticles } from "@/components/HubRelatedArticles";
import { HighLevelForm } from "@/components/HighLevelForm";
import { ParallaxSection, ParallaxCardsContainer, ParallaxCard } from "@/components/ParallaxSection";
import { PARALLAX_IMAGES } from "@/lib/imageMapping";

import { InternalLinks } from "@/components/InternalLinks";
export const metadata: Metadata = {
  title: "Commercial Construction Services Tampa | $500K-$50M+ Projects | FCS",
  description:
    "Tampa Bay's premier commercial general contractor. Medical facilities, multi-family developments, industrial construction, and large-loss disaster recovery. $10M+ bonding capacity.",
  keywords:
    "commercial construction Tampa, general contractor Tampa Bay, medical facility construction, multi-family construction, industrial construction Florida",
};

// Commercial service clusters with icons
const commercialClusters = [
  {
    name: "Medical & Healthcare",
    href: "/commercial/medical-construction/",
    icon: Stethoscope,
    description: "AHCA-compliant medical facilities, clean rooms, and healthcare construction",
    keywords: ["AHCA compliance", "Medical gas piping", "Clean room construction"],
  },
  {
    name: "Multi-Family Construction",
    href: "/multi-family-construction/",
    icon: Building,
    description: "Condominiums, apartment complexes, and mixed-use residential developments",
    keywords: ["Condo construction", "Apartment buildings", "Mixed-use development"],
  },
  {
    name: "Industrial & Flex Space",
    href: "/commercial/industrial-construction/",
    icon: Factory,
    description: "Tilt-wall construction, steel erection, and warehouse facilities",
    keywords: ["Tilt-wall construction", "Steel erection", "Warehouse facilities"],
  },
  {
    name: "Disaster Recovery (B2B)",
    href: "/disaster-recovery/",
    icon: ShieldCheck,
    description: "Large-loss insurance restoration for commercial and multi-family properties",
    keywords: ["Large loss restoration", "Insurance claims", "Commercial restoration"],
  },
  {
    name: "Historic Restoration (Comm)",
    href: "/commercial/historic-restoration/",
    icon: Landmark,
    description: "Historic tax credits, SHPO compliance, and adaptive reuse projects",
    keywords: ["Historic tax credits", "SHPO compliance", "Adaptive reuse"],
  },
  {
    name: "Condo Remediation & SB4-D",
    href: "/commercial/condo-remediation/",
    icon: Building2,
    description: "SB4-D compliance, milestone inspections, and SIRS structural assessments",
    keywords: ["SB4-D compliance", "Milestone inspections", "SIRS assessments"],
  },
  {
    name: "CPM Scheduling",
    href: "/commercial/cpm-scheduling/",
    icon: Calendar,
    description: "Critical path method scheduling to prevent delays and cost overruns",
    keywords: ["CPM scheduling", "Project timelines", "Delay prevention"],
  },
];

// Featured commercial articles (placeholder - will be populated from actual content)
const featuredArticles = [
  {
    title: "Navigating AHCA Inspections for Medical Facilities",
    href: "/ahca-compliance-medical-construction/",
    category: "Medical Construction",
    excerpt: "Essential compliance requirements for healthcare construction in Florida",
  },
  {
    title: "Florida SB4-D Compliance Guide for Condo Associations",
    href: "/sb4d-compliance-guide/",
    category: "Condo Remediation",
    excerpt: "Understanding the new milestone inspection and SIRS requirements",
  },
  {
    title: "CPM Scheduling to Prevent Commercial Project Delays",
    href: "/cpm-scheduling-commercial-construction/",
    category: "Project Management",
    excerpt: "How critical path method scheduling keeps large projects on track",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial", href: "/commercial/" },
];

export default function CommercialHubPage() {
  const breadcrumbItems = [
    { name: "Commercial Services", href: "/commercial/" },
  ];

  return (
    <>
      <LocalBusinessSchema schemaType="GeneralContractor" />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/20" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block bg-brand-green/30 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              B2B CONSTRUCTION SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Commercial Construction Tampa | Risk & ROI Focus
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              Large-scale commercial projects from $500K to $50M+. Medical facilities,
              multi-family developments, industrial construction, and disaster recovery
              with {BUSINESS_INFO.bondingCapacity} bonding capacity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-dark transition-all"
              >
                Request a Bid
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-brand-green-dark">{BUSINESS_INFO.projectValueRange}</p>
              <p className="text-sm text-gray-600">Project Range</p>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block" />
            <div>
              <p className="text-3xl font-bold text-brand-green-dark">{BUSINESS_INFO.bondingCapacity}</p>
              <p className="text-sm text-gray-600">Bonding Capacity</p>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block" />
            <div>
              <p className="text-3xl font-bold text-brand-green-dark">{BUSINESS_INFO.projectsCompleted}</p>
              <p className="text-sm text-gray-600">Projects Completed</p>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block" />
            <div>
              <p className="text-3xl font-bold text-brand-green-dark">Prime Only</p>
              <p className="text-sm text-gray-600">Never a Subcontractor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Clusters Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-4">
              Commercial Construction Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized B2B construction services focused on risk mitigation,
              compliance, and return on investment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialClusters.map((cluster) => {
              const Icon = cluster.icon;
              return (
                <Link
                  key={cluster.name}
                  href={cluster.href}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-brand-green/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-green-bg rounded-lg flex items-center justify-center group-hover:bg-brand-green transition-colors">
                      <Icon className="w-6 h-6 text-brand-green-dark group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-brand-green-dark mb-2 group-hover:text-brand-green transition-colors font-heading">
                        {cluster.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">{cluster.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {cluster.keywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Commercial Clients Choose FCS - Parallax Section */}
      <ParallaxSection
        backgroundImage={PARALLAX_IMAGES.commercial}
        title="Why Commercial Clients Choose FCS"
        subtitle="Risk management and ROI delivered through experienced project management"
        overlayOpacity={0.6}
        cardOverlap={200}
        minHeight="400px"
      />
      <ParallaxCardsContainer overlap={200} className="pb-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-brand-green-dark font-heading mb-6">
              Our Commercial Advantage
            </h3>
            <div className="space-y-4">
              {[
                "Always prime contractor - never subcontract your project",
                `${BUSINESS_INFO.bondingCapacity} bonding capacity for projects of any scale`,
                "Experienced with AHCA, SHPO, and regulatory compliance",
                "CPM scheduling to prevent costly delays",
                "Large-loss insurance restoration expertise",
                "Direct relationships with building departments",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 shadow-xl overflow-hidden">
            <HighLevelForm variant="commercial" />
          </div>
        </div>
      </ParallaxCardsContainer>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <HubRelatedArticles
            silo="commercial"
            title="Commercial Construction Insights"
            articles={featuredArticles}
            showAll={false}
          />
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            Commercial Service Areas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {LOCATIONS.map((location) => {
              // Strip -fl suffix for URL (pages are /commercial-construction-tampa/, not /commercial-construction-tampa-fl/)
              const urlSlug = location.slug.replace('-fl', '');
              return (
                <Link
                  key={location.slug}
                  href={`/commercial-construction-${urlSlug}/`}
                  className="bg-gray-50 rounded-lg p-4 text-center hover:bg-brand-green hover:text-white transition-colors group"
                >
                  <span className="font-semibold text-brand-green-dark group-hover:text-white transition-colors">
                    {location.name}, FL
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Discuss Your Commercial Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From $500K tenant improvements to $50M+ developments,
            Florida Construction Specialists has the experience and bonding capacity
            to deliver your project on time and on budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request Commercial Bid
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all duration-300"
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
            links={[{"href":"/services/commercial/","label":"Commercial Construction Services"},{"href":"/commercial-construction-tampa/","label":"Commercial Construction Tampa"},{"href":"/services/commercial/design-build/","label":"Design-Build Services"},{"href":"/services/commercial/medical-construction/","label":"Medical Facility Construction"},{"href":"/services/commercial/tenant-improvements/","label":"Tenant Improvements"}]}
            title="Related Resources"
            
          />
        </div>
      </section>

    </>
  );
}
