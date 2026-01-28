import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Waves,
  Landmark,
  Shield,
  Columns,
  Droplets,
  ArrowRight,
  Phone,
  CheckCircle,
  Award
} from "lucide-react";
import { BUSINESS_INFO, LOCATIONS } from "@/lib/constants";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { HubRelatedArticles } from "@/components/HubRelatedArticles";
import { HighLevelForm } from "@/components/HighLevelForm";
import { ParallaxSection, ParallaxCardsContainer } from "@/components/ParallaxSection";
import { PARALLAX_IMAGES } from "@/lib/imageMapping";

import { InternalLinks } from "@/components/InternalLinks";
export const metadata: Metadata = {
  title: "Luxury Custom Homes Tampa | Waterfront & Historic | FCS",
  description:
    "Tampa Bay's premier luxury home builder. $1M+ custom estates, waterfront homes, historic preservation, and FEMA compliance specialists. Design your legacy with FCS.",
  keywords:
    "luxury custom homes Tampa, waterfront home builder, historic preservation Tampa, Davis Islands builders, South Tampa custom homes, FEMA 50% rule",
};

// Residential service clusters with icons
const residentialClusters = [
  {
    name: "Luxury Custom Homes",
    href: "/luxury-custom-homes/",
    icon: Home,
    description: "Architectural residences and custom estates starting at $1M+",
    keywords: ["Custom home design", "Luxury finishes", "Smart home integration"],
  },
  {
    name: "Waterfront Resilience",
    href: "/residential/waterfront-homes/",
    icon: Waves,
    description: "Coastal construction, seawall coordination, and marine-grade materials",
    keywords: ["Waterfront homes", "Seawall construction", "Flood zone building"],
  },
  {
    name: "Historic Preservation",
    href: "/residential/historic-preservation/",
    icon: Landmark,
    description: "Hyde Park, South Tampa historic homes with ARC and SHPO compliance",
    keywords: ["Hyde Park renovations", "Historic materials", "Certificate of appropriateness"],
  },
  {
    name: "FEMA Compliance",
    href: "/residential/fema-compliance/",
    icon: Shield,
    description: "FEMA 50% rule expertise, flood zone VE/AE, and elevation certificates",
    keywords: ["FEMA 50% rule", "Flood zone compliance", "Substantial improvement"],
  },
  {
    name: "Balcony Reconstruction",
    href: "/balcony-reconstruction/",
    icon: Columns,
    description: "Residential balcony repair, waterproofing, and structural restoration",
    keywords: ["Balcony repair", "Concrete restoration", "Waterproofing"],
  },
  {
    name: "Exterior Waterproofing",
    href: "/exterior-waterproofing/",
    icon: Droplets,
    description: "Building envelope protection for luxury homes in Florida's climate",
    keywords: ["Foundation waterproofing", "Moisture barriers", "Envelope protection"],
  },
];

// Featured residential articles (placeholder - will be populated from actual content)
const featuredArticles = [
  {
    title: "The FEMA 50% Rule Explained for Tampa Homeowners",
    href: "/fema-50-percent-rule-explained/",
    category: "FEMA Compliance",
    excerpt: "Understanding substantial improvement thresholds and how they affect your renovation",
  },
  {
    title: "The Hyde Park Renovation Guide",
    href: "/hyde-park-renovation-guide/",
    category: "Historic Preservation",
    excerpt: "Navigating ARC guidelines and preserving South Tampa's architectural heritage",
  },
  {
    title: "Building on Tampa Bay Waterfront Lots",
    href: "/waterfront-home-construction-tampa/",
    category: "Waterfront Homes",
    excerpt: "Site considerations, seawalls, and coastal resilience for waterfront estates",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Residential", href: "/residential/" },
];

export default function ResidentialHubPage() {
  const breadcrumbItems = [
    { name: "Residential Services", href: "/residential/" },
  ];

  return (
    <>
      <LocalBusinessSchema schemaType="HomeAndConstructionBusiness" />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2024/01/Custom-home-2-rotated-1.jpg"
            alt="Elevated coastal home with new dark asphalt shingle roof and white siding"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/90 via-brand-gold-dark/85 to-brand-gold/90" />
        </div>
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10 z-5">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/20" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              LUXURY HOME CONSTRUCTION
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Luxury Custom Homes Tampa | Vision & Legacy
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              $1M+ custom estates, waterfront homes, and historic preservation.
              From Davis Islands to Hyde Park, we build homes designed to last
              generations with hurricane resilience and timeless design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-green-dark text-white font-bold rounded-full hover:bg-brand-green transition-all"
              >
                Schedule Design Consultation
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

      {/* Vision Statement */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-brand-gold-dark">$1M+</p>
              <p className="text-sm text-gray-600">Minimum Project Value</p>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block" />
            <div>
              <p className="text-3xl font-bold text-brand-gold-dark">{BUSINESS_INFO.yearsInBusiness}</p>
              <p className="text-sm text-gray-600">Years of Excellence</p>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block" />
            <div>
              <p className="text-3xl font-bold text-brand-gold-dark">Tampa Bay</p>
              <p className="text-sm text-gray-600">Premium Locations</p>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block" />
            <div>
              <p className="text-3xl font-bold text-brand-gold-dark">Hurricane Ready</p>
              <p className="text-sm text-gray-600">Built to Last</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Clusters Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-4">
              Residential Construction Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Luxury home construction focused on vision, legacy, and
              regulatory mastery for Tampa Bay's most discerning homeowners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {residentialClusters.map((cluster) => {
              const Icon = cluster.icon;
              return (
                <Link
                  key={cluster.name}
                  href={cluster.href}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-brand-gold/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-gold-bg rounded-lg flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                      <Icon className="w-6 h-6 text-brand-gold-dark group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold transition-colors font-heading">
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

      {/* Why Residential Clients Choose FCS - Parallax Section */}
      <ParallaxSection
        backgroundImage={PARALLAX_IMAGES.residential}
        title="Building Your Vision, Protecting Your Legacy"
        subtitle="Luxury craftsmanship with deep knowledge of Tampa Bay's regulatory environment"
        overlayOpacity={0.6}
        cardOverlap={200}
        minHeight="400px"
      />
      <ParallaxCardsContainer overlap={200} className="pb-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-brand-green-dark font-heading mb-6">
              Our Residential Expertise
            </h3>
            <div className="space-y-4">
              {[
                "FEMA 50% rule specialists - navigate substantial improvement thresholds",
                "Hyde Park ARC and South Tampa historic preservation expertise",
                "Waterfront construction with seawall coordination and marine-grade materials",
                "Hurricane-resistant design exceeding Florida Building Code",
                "Smart home integration and luxury finishes throughout",
                "Direct collaboration with your architect and design team",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 shadow-xl overflow-hidden">
            <HighLevelForm height={662} />
          </div>
        </div>
      </ParallaxCardsContainer>

      {/* Premium Locations */}
      <section className="py-16 bg-brand-gold-bg">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-4">
              Tampa Bay's Premium Neighborhoods
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We build in Tampa Bay's most desirable locations, bringing deep knowledge
              of each neighborhood's unique character and regulatory requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Davis Islands", description: "Waterfront estates with island living" },
              { name: "Hyde Park", description: "Historic homes with modern luxury" },
              { name: "Harbour Island", description: "Downtown waterfront sophistication" },
              { name: "South Tampa", description: "Established neighborhoods, premium lots" },
              { name: "Beach Park", description: "Bayshore living at its finest" },
              { name: "Palma Ceia", description: "Old Florida charm with modern amenities" },
              { name: "Culbreath Isles", description: "Exclusive waterfront community" },
              { name: "Apollo Beach", description: "Growing waterfront community" },
            ].map((area) => (
              <div
                key={area.name}
                className="bg-white rounded-xl p-6 text-center shadow-sm"
              >
                <Award className="w-8 h-8 text-brand-gold mx-auto mb-3" />
                <h3 className="font-bold text-brand-green-dark mb-1">{area.name}</h3>
                <p className="text-sm text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <HubRelatedArticles
            silo="residential"
            title="Residential Design & Compliance Insights"
            articles={featuredArticles}
            showAll={false}
          />
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            Residential Service Areas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {LOCATIONS.map((location) => {
              // Strip -fl suffix for URL (pages are /luxury-custom-homes-tampa/, not /luxury-custom-homes-tampa-fl/)
              const urlSlug = location.slug.replace('-fl', '');
              return (
                <Link
                  key={location.slug}
                  href={`/luxury-custom-homes-${urlSlug}/`}
                  className="bg-white rounded-lg p-4 text-center hover:bg-brand-gold hover:text-white transition-colors group shadow-sm"
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
      <section className="py-16 bg-brand-gold">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Build Your Dream Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From waterfront estates to historic renovations,
            Florida Construction Specialists brings your vision to life with
            craftsmanship built to last generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-dark text-white font-bold rounded-full hover:bg-brand-green transition-all duration-300"
            >
              Schedule Design Consultation
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-gold-dark font-bold rounded-full hover:bg-gray-100 transition-all duration-300"
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
