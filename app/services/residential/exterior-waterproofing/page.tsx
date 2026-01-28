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
  Droplets,
  Building2,
  Home,
  Layers,
  PaintBucket,
  Wind
} from "lucide-react";

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Residential Construction", href: "/services/residential/" },
  { name: "Exterior Waterproofing", href: "/services/residential/exterior-waterproofing/" },
];

const faqs = [
  {
    question: "What is exterior waterproofing and why is it important in Florida?",
    answer: "Exterior waterproofing involves applying protective barriers, coatings, and drainage systems to prevent water infiltration into building envelopes. In Florida's climate with 50+ inches of annual rainfall, high humidity, and hurricane-driven rain, proper waterproofing prevents mold growth, structural deterioration, and costly interior damage.",
  },
  {
    question: "How do I know if my home needs exterior waterproofing?",
    answer: "Signs include water stains on interior walls, musty odors, peeling paint or wallpaper, efflorescence (white mineral deposits) on masonry, visible cracks in stucco or concrete, bubbling or blistering exterior paint, and mold or mildew growth. If your home is 15+ years old and hasn't been waterproofed, a professional inspection is recommended.",
  },
  {
    question: "What types of exterior waterproofing do you provide?",
    answer: "We provide comprehensive waterproofing solutions including elastomeric coatings, penetrating sealers, crystalline waterproofing, cementitious coatings, sheet membrane systems, and specialty coatings for different substrates. Each solution is selected based on your building's construction type, exposure conditions, and existing issues.",
  },
  {
    question: "How long does exterior waterproofing last?",
    answer: "Quality elastomeric coatings typically last 10-15 years when properly applied to prepared surfaces. Penetrating sealers may need reapplication every 5-7 years. Sheet membrane systems can last 20+ years. Longevity depends on product quality, surface preparation, application technique, and ongoing maintenance.",
  },
  {
    question: "Can you waterproof stucco buildings?",
    answer: "Yes, stucco waterproofing is one of our specialties. We repair cracks and damaged areas, apply appropriate primer systems, and finish with elastomeric coatings designed specifically for stucco substrates. This creates a flexible, breathable barrier that expands and contracts with the stucco while preventing water intrusion.",
  },
  {
    question: "What about waterproofing historic masonry buildings?",
    answer: "Historic masonry requires specialized breathable products that won't trap moisture inside walls or damage historic surfaces. We use appropriate penetrating silane/siloxane sealers for brick, lime-compatible products for historic mortar, and reversible treatments where required by preservation standards. Our experience with SHPO compliance ensures proper historic treatment.",
  },
  {
    question: "Do you waterproof foundations and below-grade walls?",
    answer: "Yes, we provide below-grade waterproofing for foundations, basement walls, and below-grade parking structures. This includes positive-side membrane systems, drainage board installation, French drain systems, and sump pump installation. Below-grade work requires different products than above-grade exterior walls.",
  },
  {
    question: "How do you handle waterproofing around windows and doors?",
    answer: "Window and door openings are critical waterproofing details. We install proper flashing systems, flexible sealants, and drainage paths to direct water away from openings. This includes head flashing, jamb flashing, and sill pan flashing integration with the overall building envelope waterproofing.",
  },
  {
    question: "What is the waterproofing process for my home?",
    answer: "Our process begins with inspection and moisture testing to identify water entry points. We then prepare surfaces by cleaning, repairing cracks, and ensuring proper adhesion. Products are applied per manufacturer specifications with attention to coverage rates and cure times. Final inspection ensures complete protection.",
  },
  {
    question: "How much does exterior waterproofing cost?",
    answer: "Residential exterior waterproofing typically ranges from $3-8 per square foot depending on surface condition, preparation requirements, and product selection. A 2,000 square foot home exterior might cost $6,000-$16,000. We provide detailed proposals after on-site inspection so you know exactly what's included.",
  },
];

const waterproofingTypes = [
  {
    icon: PaintBucket,
    title: "Elastomeric Coatings",
    description: "Flexible, rubberized coatings that bridge cracks and expand/contract with building movement while creating a waterproof barrier.",
  },
  {
    icon: Droplets,
    title: "Penetrating Sealers",
    description: "Silane/siloxane products that penetrate substrate pores to create water-repellent barriers while allowing vapor transmission.",
  },
  {
    icon: Layers,
    title: "Sheet Membrane Systems",
    description: "Self-adhering or torch-applied membranes for below-grade waterproofing and high-exposure horizontal surfaces.",
  },
  {
    icon: Building2,
    title: "Stucco Restoration",
    description: "Complete stucco waterproofing including crack repair, texture matching, and protective coating application.",
  },
  {
    icon: Home,
    title: "Foundation Waterproofing",
    description: "Below-grade protection including membrane installation, drainage boards, and French drain systems.",
  },
  {
    icon: Wind,
    title: "Hurricane-Grade Systems",
    description: "Wind-driven rain protection meeting Florida Building Code requirements for high-velocity hurricane zones.",
  },
];

const relatedLinks = [
  { href: "/services/residential/balcony-reconstruction/", label: "Balcony Reconstruction" },
  { href: "/services/residential/hurricane-resistant-construction/", label: "Hurricane-Resistant Construction" },
  { href: "/services/residential/waterfront-homes/", label: "Waterfront Home Construction" },
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Restoration" },
  { href: "/exterior-waterproofing-clearwater/", label: "Exterior Waterproofing Clearwater" },
  { href: "/services/historic-restoration/", label: "Historic Restoration" },
];

export default function ExteriorWaterproofingPage() {
  return (
    <>
      <LocalBusinessSchema service="Exterior Waterproofing" />
      <ServiceSchema
        serviceName="Exterior Waterproofing Services"
        serviceDescription="Professional exterior waterproofing services for Tampa Bay homes and buildings. Elastomeric coatings, penetrating sealers, foundation waterproofing, and stucco restoration with 43+ years experience."
        minPrice="5000"
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
                Exterior Waterproofing Services in Tampa Bay
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Protect your property from Florida's harsh weather with professional
                exterior waterproofing. From elastomeric coatings to foundation
                membrane systems, we keep water out and your investment protected.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span>43+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Shield className="w-5 h-5 text-amber-400" />
                  <span>Licensed: {BUSINESS_INFO.licenseNumber}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span>10-Year Warranties</span>
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
                  Request Inspection
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
                Florida's Demanding Climate Requires Expert Waterproofing
              </h2>
            </FadeIn>

            <div className="prose prose-lg max-w-none">
              <FadeIn delay={0.1}>
                <p className="text-gray-700 mb-6">
                  Florida's combination of intense rainfall, high humidity, salt air exposure,
                  and hurricane-force winds creates the most demanding waterproofing environment
                  in the continental United States. At Florida Construction Specialists, we've
                  spent over four decades perfecting waterproofing systems that withstand
                  everything our climate can deliver.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-gray-700 mb-6">
                  Whether you're dealing with water intrusion issues in an existing home,
                  protecting a new construction project, or waterproofing a historic masonry
                  building, our team brings the expertise and premium products necessary to
                  keep water where it belongs—outside.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Understanding Water Intrusion in Florida Buildings
                </h3>
                <p className="text-gray-700 mb-6">
                  Water finds its way into buildings through multiple pathways: direct
                  penetration through porous materials, capillary action through hairline
                  cracks, wind-driven rain forced through joints and openings, and rising
                  moisture from below grade. Each pathway requires specific countermeasures.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p className="text-gray-700 mb-6">
                  Florida's building stock presents particular challenges. The stucco systems
                  common in our region develop cracks as buildings settle and expand/contract
                  with temperature changes. Older CBS (concrete block and stucco) construction
                  was often built without modern moisture barriers. Coastal properties face
                  accelerated deterioration from salt-laden air and storm surge exposure.
                </p>
              </FadeIn>

              <FadeIn delay={0.5}>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Our Waterproofing Approach
                </h3>
                <p className="text-gray-700 mb-6">
                  Every waterproofing project begins with thorough diagnosis. We use moisture
                  meters, infrared scanning, and visual inspection to identify current water
                  entry points and vulnerabilities. Understanding how water is getting in
                  determines which waterproofing systems will be most effective.
                </p>
              </FadeIn>

              <FadeIn delay={0.6}>
                <p className="text-gray-700 mb-6">
                  Surface preparation is the foundation of lasting waterproofing. We repair
                  cracks, address structural issues, clean surfaces of efflorescence and
                  organic growth, and ensure proper profile for coating adhesion. Skipping
                  preparation is the leading cause of waterproofing failures.
                </p>
              </FadeIn>

              <FadeIn delay={0.7}>
                <p className="text-gray-700 mb-6">
                  Product selection matches the specific substrate and exposure conditions.
                  Elastomeric coatings work well on stucco where flexibility is needed.
                  Penetrating sealers protect masonry while allowing vapor transmission.
                  Below-grade applications require positive-side membrane systems. We use
                  only premium products from manufacturers like Dryvit, StoGuard, and BASF.
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
                Exterior Waterproofing Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive waterproofing systems for every building type and exposure condition.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {waterproofingTypes.map((type, index) => (
              <FadeIn key={type.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <type.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Waterproofing Process
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Inspection & Moisture Testing",
                  description: "Comprehensive assessment using moisture meters, infrared cameras, and visual inspection to identify water entry points and underlying issues.",
                },
                {
                  step: "2",
                  title: "Surface Preparation",
                  description: "Repair cracks and damaged areas, remove efflorescence, clean surfaces, and ensure proper substrate profile for optimal coating adhesion.",
                },
                {
                  step: "3",
                  title: "Product Selection & Specification",
                  description: "Select appropriate waterproofing system based on substrate type, exposure conditions, and desired performance characteristics.",
                },
                {
                  step: "4",
                  title: "Professional Application",
                  description: "Apply waterproofing products per manufacturer specifications with attention to coverage rates, mil thickness, and cure time requirements.",
                },
                {
                  step: "5",
                  title: "Quality Verification",
                  description: "Final inspection to ensure complete coverage, proper curing, and effective water resistance. Document work for warranty purposes.",
                },
              ].map((item, index) => (
                <FadeIn key={item.step} delay={index * 0.1}>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-amber-500 text-gray-900 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
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
                Exterior Waterproofing FAQs
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Common questions about waterproofing products, processes, and our services.
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
                  Protect Your Property from Water Damage
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Don't wait for water damage to become an expensive problem.
                  Contact FCS for a professional waterproofing assessment and
                  protect your Tampa Bay property from Florida's demanding climate.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Free Assessment</h3>
                <HighLevelForm height={450} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
