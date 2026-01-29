"use client";

import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { InternalLinks } from "@/components/InternalLinks";
import { HighLevelForm } from "@/components/HighLevelForm";
import { BUSINESS_INFO } from "@/lib/constants";
import Link from "next/link";
import { FadeIn, StaggerContainer } from "@/components/AnimatedElements";
import {
  CheckCircle,
  Shield,
  Award,
  Phone,
  FileCheck,
  Building2,
  AlertTriangle,
  ClipboardCheck,
  HardHat,
  Scale
} from "lucide-react";

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Residential Construction", href: "/services/residential/" },
  { name: "Balcony Reconstruction", href: "/services/residential/balcony-reconstruction/" },
];

const faqs = [
  {
    question: "What is Florida Senate Bill 4-D (SB4-D) and how does it affect my balcony?",
    answer: "SB4-D, passed in 2022 following the Surfside condo collapse, requires mandatory milestone inspections and Structural Integrity Reserve Studies (SIRS) for buildings 3 stories or taller. Balconies and exterior elevated elements are specifically targeted due to their exposure to Florida's harsh weather. Buildings 25+ years old within 3 miles of the coast, or 30+ years old elsewhere, must complete these inspections by December 31, 2024.",
  },
  {
    question: "How do I know if my balcony needs reconstruction vs. repair?",
    answer: "A licensed structural engineer will assess factors including concrete spalling, rebar corrosion, waterproofing membrane failure, drainage issues, and structural capacity. If damage exceeds 30% of the structural elements, full reconstruction is typically more cost-effective than piecemeal repairs. FCS provides comprehensive assessments before recommending a course of action.",
  },
  {
    question: "What causes balcony deterioration in Florida?",
    answer: "Florida's combination of salt air, high humidity, intense UV radiation, and frequent rain creates the perfect storm for balcony deterioration. Water infiltration leads to rebar corrosion and concrete spalling. Poor original waterproofing, inadequate drainage slopes, and deferred maintenance accelerate the process. Hurricane damage can also compromise structural connections.",
  },
  {
    question: "How long does balcony reconstruction take?",
    answer: "Individual balcony reconstruction typically takes 2-4 weeks depending on size and complexity. For multi-unit condo projects, we phase work to minimize resident disruption, typically completing 4-6 balconies per month. Factors affecting timeline include permit processing, material lead times, and weather conditions. We provide detailed schedules during project planning.",
  },
  {
    question: "Can residents remain in their units during balcony reconstruction?",
    answer: "In most cases, yes. We implement careful scheduling and safety barriers to allow residents to remain in their units. Access to the balcony is restricted during active construction. For projects requiring significant structural work, we'll coordinate with property management on any temporary relocation needs.",
  },
  {
    question: "What materials do you use for balcony reconstruction?",
    answer: "We use marine-grade concrete mixes, epoxy-coated or stainless steel rebar, high-performance waterproofing membranes, and corrosion-inhibiting admixtures specifically designed for coastal Florida conditions. Our material specifications exceed Florida Building Code requirements to ensure maximum longevity in our harsh climate.",
  },
  {
    question: "How does the milestone inspection process work?",
    answer: "Phase 1 is a visual inspection by a licensed engineer identifying areas of concern. If substantial deterioration is found, Phase 2 requires detailed testing and analysis. FCS can coordinate with your engineer throughout the process and provide repair/reconstruction estimates based on their findings. We handle the construction; they handle the certification.",
  },
  {
    question: "What is included in balcony waterproofing?",
    answer: "Comprehensive balcony waterproofing includes surface preparation and crack repair, application of penetrating sealers, installation of traffic-bearing waterproof membranes, proper slope correction for drainage, flashing installation at wall intersections, and sealant application at all penetrations. We warranty our waterproofing work for 10 years.",
  },
  {
    question: "What are the penalties for non-compliance with SB4-D?",
    answer: "Condo associations that fail to complete required inspections and repairs face potential liability exposure, increased insurance costs, and property devaluation. Buildings cannot obtain required certifications, affecting unit sales and refinancing. In extreme cases, buildings may be declared unsafe for occupancy by local authorities.",
  },
  {
    question: "How much does balcony reconstruction cost?",
    answer: "Balcony reconstruction typically ranges from $15,000-$50,000 per unit depending on size, extent of damage, and accessibility. Multi-unit projects often achieve economies of scale. FCS provides detailed proposals after engineering assessment, and we can work with associations on phased approaches to manage reserve fund impacts.",
  },
];

const balconyTypes = [
  {
    icon: Building2,
    title: "Concrete Balcony Reconstruction",
    description: "Complete demolition and rebuild of concrete balconies with modern waterproofing systems and code-compliant connections.",
  },
  {
    icon: Shield,
    title: "Structural Reinforcement",
    description: "Carbon fiber wrapping, steel plate reinforcement, and epoxy injection to restore structural capacity without full replacement.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Stabilization",
    description: "Immediate shoring and safety measures for balconies with critical structural deficiencies requiring urgent attention.",
  },
  {
    icon: ClipboardCheck,
    title: "SB4-D Compliance Work",
    description: "Targeted repairs based on milestone inspection findings to achieve certification requirements and satisfy engineering reports.",
  },
  {
    icon: HardHat,
    title: "Waterproofing & Coatings",
    description: "High-performance traffic-bearing membranes, deck coatings, and drainage improvements to prevent future water intrusion.",
  },
  {
    icon: Scale,
    title: "Railing Replacement",
    description: "Code-compliant railing systems including aluminum, cable, glass, and decorative options with proper anchorage engineering.",
  },
];

const relatedLinks = [
  { href: "/services/residential/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/services/residential/hurricane-resistant-construction/", label: "Hurricane-Resistant Construction" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/services/commercial/multi-family/", label: "Multi-Family Construction" },
  { href: "/balcony-reconstruction-tampa/", label: "Balcony Reconstruction Tampa" },
  { href: "/balcony-reconstruction-clearwater/", label: "Balcony Reconstruction Clearwater" },
];

export default function BalconyReconstructionPage() {
  return (
    <>
      <LocalBusinessSchema service="Balcony Reconstruction" />
      <ServiceSchema
        serviceName="Balcony Reconstruction Services"
        serviceDescription="Professional balcony reconstruction and SB4-D compliance services for Tampa Bay condominiums and residential properties. Expert structural repair, waterproofing, and complete reconstruction with 43+ years experience."
        minPrice="15000"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-repeat" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb items={breadcrumbItems} className="mb-8 text-gray-300" />

          <div className="max-w-4xl">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Balcony Reconstruction & SB4-D Compliance
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Expert balcony reconstruction for Tampa Bay condominiums and residential properties.
                We specialize in SB4-D compliance work, structural restoration, and waterproofing
                solutions that protect your investment for decades.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span>SB4-D Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Shield className="w-5 h-5 text-amber-400" />
                  <span>Licensed: {BUSINESS_INFO.licenseNumber}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span>43+ Years Experience</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg transition-colors border border-white/30"
                >
                  Schedule Assessment
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tampa Bay's Trusted Balcony Reconstruction Experts
              </h2>
            </FadeIn>

            <div className="prose prose-lg max-w-none">
              <FadeIn delay={0.1}>
                <p className="text-gray-700 mb-6">
                  Florida Construction Specialists has been restoring and reconstructing balconies
                  throughout the Tampa Bay region for over four decades. Following the Surfside
                  condominium tragedy, we've become a leading resource for condo associations
                  navigating the new SB4-D compliance requirements, combining structural engineering
                  expertise with hands-on construction experience.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-gray-700 mb-6">
                  Our principal, Frank Bragano, brings 43 years of construction and insurance
                  industry experience to every project. This unique background allows us to
                  understand both the structural requirements and the documentation needs for
                  insurance carriers and milestone inspection certifications.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Understanding SB4-D Compliance
                </h3>
                <p className="text-gray-700 mb-6">
                  Senate Bill 4-D requires condominium and cooperative buildings three stories or
                  taller to undergo milestone inspections and maintain Structural Integrity Reserve
                  Studies. Buildings 25+ years old within three miles of the coastline, or 30+ years
                  old elsewhere, must complete Phase 1 visual inspections. If substantial structural
                  deterioration is found, Phase 2 testing is required.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p className="text-gray-700 mb-6">
                  Balconies are among the most common areas of concern in these inspections.
                  Florida's combination of salt air, humidity, UV exposure, and driving rain
                  creates ideal conditions for concrete deterioration and rebar corrosion.
                  Many buildings constructed during the 1970s-1990s development boom are now
                  reaching the age where deferred maintenance becomes critical.
                </p>
              </FadeIn>

              <FadeIn delay={0.5}>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Our Reconstruction Process
                </h3>
                <p className="text-gray-700 mb-6">
                  Every balcony reconstruction project begins with a thorough assessment in
                  coordination with your structural engineer. We document existing conditions,
                  identify underlying causes of deterioration, and develop a scope of work that
                  addresses both immediate repairs and long-term protection.
                </p>
              </FadeIn>

              <FadeIn delay={0.6}>
                <p className="text-gray-700 mb-6">
                  For full reconstructions, we remove deteriorated concrete to expose and treat
                  corroded rebar, install supplemental reinforcement where needed, and pour new
                  concrete using marine-grade mixes with corrosion inhibitors. Our waterproofing
                  systems include traffic-bearing membranes, proper drainage slopes, and detailed
                  flashing at all transitions.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Balcony Reconstruction Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions for all balcony repair and reconstruction needs,
                from minor waterproofing to complete structural rebuilds.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {balconyTypes.map((type, index) => (
              <FadeIn key={type.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                    <type.icon className="w-7 h-7 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose FCS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Why Tampa Bay Associations Choose FCS
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "SB4-D Compliance Experience",
                  description: "We've completed dozens of milestone inspection repair projects and understand the documentation requirements for certification.",
                },
                {
                  title: "Insurance Industry Background",
                  description: "Frank Bragano's 43 years in insurance claims and construction provides unique insight into documentation and coverage issues.",
                },
                {
                  title: "In-House Engineering",
                  description: "Large-scale multi-unit projects are within our capabilities, providing associations confidence in project completion.",
                },
                {
                  title: "Phased Project Approach",
                  description: "We work with associations on phased reconstruction to manage reserve fund impacts while maintaining progress toward compliance.",
                },
                {
                  title: "Resident Communication",
                  description: "We provide regular updates, maintain clean work sites, and minimize disruption to residents throughout the project.",
                },
                {
                  title: "10-Year Waterproofing Warranty",
                  description: "Our comprehensive waterproofing systems come with a 10-year warranty, giving associations long-term peace of mind.",
                },
              ].map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.1}>
                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Balcony Reconstruction FAQs
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Common questions about balcony reconstruction, SB4-D compliance, and our process.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <InternalLinks
              title="Related Services"
              links={relatedLinks}
            />
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Schedule Your Balcony Assessment
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Whether you're responding to a milestone inspection report or proactively
                  addressing balcony concerns, FCS provides expert assessment and
                  reconstruction solutions. Contact us to discuss your project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
                <p className="text-gray-400 mt-4">
                  {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Assessment</h3>
                <HighLevelForm height={450} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
