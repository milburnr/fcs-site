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
  Boxes,
  Layers,
  Hammer,
  Trees,
  Sparkles,
  Factory
} from "lucide-react";

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Historic Restoration", href: "/services/historic-restoration/" },
  { name: "Material Sourcing", href: "/services/historic-restoration/material-sourcing/" },
];

const faqs = [
  {
    question: "Why is using period-appropriate materials important for historic restoration?",
    answer: "Period-appropriate materials maintain historic integrity, meet Secretary of Interior Standards, preserve eligibility for tax credits, and ensure compatibility with existing building systems. Historic mortars, for example, are softer than modern Portland cement—using incompatible materials can damage historic masonry. Matching original materials also maintains the building's aesthetic and historical significance.",
  },
  {
    question: "What types of historic materials do you source?",
    answer: "We source all materials needed for authentic restoration including: antique brick and salvaged masonry, historic lumber (heart pine, cypress, old-growth), period hardware and fixtures, custom millwork matching historic profiles, lime-based mortars and plasters, traditional roofing materials (slate, clay tile, wood shingle), and specialty items like cast iron, decorative terra cotta, and architectural glass.",
  },
  {
    question: "Where do you find antique and salvaged building materials?",
    answer: "We maintain relationships with architectural salvage yards throughout the Southeast, specialty suppliers of reproduction materials, demolition contractors who notify us of available materials, and manufacturers who still produce traditional products. Florida's development history means significant salvage inventory is available locally, though we source nationally when needed for specific requirements.",
  },
  {
    question: "What's the difference between salvage and reproduction materials?",
    answer: "Salvaged materials are genuine antiques—original brick, lumber, hardware, and fixtures recovered from demolished or renovated buildings. Reproductions are newly manufactured items made to match historic specifications. Both have roles in restoration: salvage provides authenticity; reproduction ensures availability and consistency. The choice depends on project requirements, budget, and preservation goals.",
  },
  {
    question: "Can you match existing historic materials exactly?",
    answer: "Often yes, though it requires expertise. We analyze existing materials—mortar composition, brick dimensions and color, wood species and profiles—then source matches from salvage or specify custom reproductions. Perfect matches aren't always possible or necessary; the Standards allow compatible rather than identical materials when appropriate.",
  },
  {
    question: "What is lime mortar and why is it used in historic restoration?",
    answer: "Lime mortar (lime and sand) was standard before Portland cement became common in the early 1900s. It's softer and more permeable than modern mortar, allowing historic brick to 'breathe' and flex. Using hard Portland cement mortar on soft historic brick causes damage—the mortar is stronger than the brick, so stress cracks the brick rather than the joint. Lime mortar is essential for pre-1920s masonry.",
  },
  {
    question: "How do you source heart pine and other historic lumber?",
    answer: "Antique heart pine comes from salvaged beams and flooring from demolished buildings, river-recovered logs (sinker logs from historic logging), and standing dead timber from old-growth stumps. We work with specialty mills who process these materials. Heart pine's density and resin content make it exceptionally durable—today's plantation pine can't match it.",
  },
  {
    question: "What about historic hardware and fixtures?",
    answer: "We source period hardware through architectural salvage, antique dealers, and manufacturers producing authentic reproductions. This includes door and window hardware, lighting fixtures, plumbing fixtures, cabinet hardware, and decorative metalwork. For unique items, we can commission custom fabrication matching historic designs.",
  },
  {
    question: "Does using salvage materials affect project timeline?",
    answer: "Sourcing specialized materials requires lead time that should be built into project schedules. We identify material needs during preconstruction, begin sourcing immediately, and coordinate delivery with construction schedules. For tax credit projects, using salvage often provides stronger compliance documentation than reproduction materials.",
  },
  {
    question: "How do material choices affect Historic Tax Credit compliance?",
    answer: "The Standards favor retention of original materials, then repair using matching materials, then replacement in-kind. Material choices are documented in tax credit applications. Using salvaged materials of the same period can strengthen applications. Reproduction materials must be justified based on unavailability or unsuitability of original materials.",
  },
];

const materialTypes = [
  {
    icon: Boxes,
    title: "Antique Brick & Masonry",
    description: "Salvaged brick, terra cotta, stone, and architectural elements matching the size, color, and character of historic masonry.",
  },
  {
    icon: Trees,
    title: "Historic Lumber",
    description: "Heart pine, old-growth cypress, and other period lumber for flooring, millwork, and structural applications.",
  },
  {
    icon: Hammer,
    title: "Period Hardware",
    description: "Authentic and reproduction door hardware, window hardware, lighting fixtures, and decorative metalwork.",
  },
  {
    icon: Layers,
    title: "Lime Mortars & Plasters",
    description: "Traditional lime-based mortars, plasters, and renders formulated for compatibility with historic masonry.",
  },
  {
    icon: Factory,
    title: "Custom Millwork",
    description: "Custom-milled trim, moldings, doors, and windows replicating historic profiles and joinery.",
  },
  {
    icon: Sparkles,
    title: "Specialty Materials",
    description: "Architectural glass, decorative tile, roofing materials, and unique elements sourced for specific restoration needs.",
  },
];

const relatedLinks = [
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
  { href: "/services/historic-restoration/shpo-compliance/", label: "SHPO Compliance" },
  { href: "/services/historic-restoration/historic-tax-credits/", label: "Historic Tax Credits" },
  { href: "/historic-restoration-tampa/", label: "Historic Restoration Tampa" },
  { href: "/services/residential/home-additions/", label: "Home Additions" },
  { href: "/services/commercial/", label: "Commercial Construction" },
];

export default function MaterialSourcingPage() {
  return (
    <>
      <LocalBusinessSchema service="Historic Material Sourcing" />
      <ServiceSchema
        serviceName="Historic Material Sourcing Services"
        serviceDescription="Expert sourcing of period-appropriate materials for Tampa Bay historic restoration projects. Antique brick, heart pine, lime mortars, period hardware, and custom millwork with 43+ years experience."
        minPrice="1000"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-repeat" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb items={breadcrumbItems} className="mb-8 text-gray-300" />

          <div className="max-w-4xl">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Historic Material Sourcing
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Authentic restoration requires authentic materials. We source period-appropriate
                brick, lumber, hardware, and specialty items for Tampa Bay's historic
                properties—from salvage yards to specialty manufacturers.
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
                  <span>Southeast Supplier Network</span>
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
                  Discuss Your Project
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
                Authentic Materials for Authentic Restoration
              </h2>
            </FadeIn>

            <div className="prose prose-lg max-w-none">
              <FadeIn delay={0.1}>
                <p className="text-gray-700 mb-6">
                  Historic restoration isn't just about appearance—it's about using the right
                  materials in the right ways. Modern materials often look similar to historic
                  ones but behave differently. Using Portland cement mortar on soft historic
                  brick, for example, can cause serious damage. Authentic restoration requires
                  understanding material science alongside construction techniques.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-gray-700 mb-6">
                  Florida Construction Specialists has spent decades building relationships
                  with salvage dealers, specialty suppliers, and craftsmen who understand
                  historic materials. When we restored the Italian American Club in Ybor City,
                  we sourced matching brick for masonry repairs, custom-milled trim to match
                  existing profiles, and period-appropriate finishes. The result honors the
                  building's 1918 construction while meeting modern code requirements.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Understanding Historic Building Materials
                </h3>
                <p className="text-gray-700 mb-6">
                  Pre-1920s buildings used fundamentally different materials than modern
                  construction. Brick was softer and more variable. Mortar was lime-based,
                  not Portland cement. Lumber came from old-growth forests with tight grain
                  and high resin content. Hardware was hand-forged or early cast. Glass was
                  hand-blown with characteristic waves and bubbles.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p className="text-gray-700 mb-6">
                  These materials aged together over decades, reaching equilibrium with each
                  other and their environment. Introducing modern materials disrupts this
                  balance. That's why we prioritize salvaged and period-appropriate materials—
                  they're not just aesthetically correct, they're technically compatible.
                </p>
              </FadeIn>

              <FadeIn delay={0.5}>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Our Material Sourcing Network
                </h3>
                <p className="text-gray-700 mb-6">
                  Over four decades, we've built relationships throughout the Southeast with
                  architectural salvage operations, specialty mills processing antique lumber,
                  manufacturers producing traditional materials, and craftsmen creating
                  authentic reproductions. When a project needs specific materials, we know
                  where to look.
                </p>
              </FadeIn>

              <FadeIn delay={0.6}>
                <p className="text-gray-700 mb-6">
                  Florida's development patterns create good salvage availability. Tampa,
                  St. Petersburg, and surrounding communities experienced significant growth
                  in the early 1900s, then again in the post-war era. When buildings from
                  these periods are demolished or renovated, materials become available.
                  We maintain relationships with demolition contractors who notify us of
                  upcoming projects with salvageable materials.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Material Types Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Historic Materials We Source
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive sourcing for all historic restoration material needs,
                from structural elements to decorative details.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materialTypes.map((type, index) => (
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

      {/* Lime Mortar Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Importance of Lime Mortars
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-gray-700 mb-6">
                One of the most common mistakes in historic masonry restoration is using
                modern Portland cement mortar. Pre-1920s masonry was built with lime mortar—
                a mixture of lime, sand, and water that's softer and more flexible than
                modern cement-based mortars.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-gray-700 mb-6">
                This softness is intentional. In a masonry wall, either the brick or the
                mortar must be the sacrificial element—the weaker one absorbs stress and
                deteriorates first. With lime mortar, the joint fails before the brick.
                Repointing is relatively easy. With Portland cement mortar, the brick
                fails—requiring expensive brick replacement.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {[
                {
                  title: "Compatible Flexibility",
                  description: "Lime mortar moves with the building, accommodating thermal expansion and minor settlement without cracking.",
                },
                {
                  title: "Moisture Management",
                  description: "Lime mortar is permeable, allowing moisture to escape through joints rather than becoming trapped behind impermeable cement.",
                },
                {
                  title: "Self-Healing Properties",
                  description: "Lime mortar can actually heal minor cracks as dissolved lime recrystallizes—a property Portland cement doesn't have.",
                },
                {
                  title: "Reversibility",
                  description: "Lime mortar can be removed without damaging historic brick, allowing future repairs. Portland cement bonds permanently.",
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
                Historic Material Sourcing FAQs
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Common questions about sourcing period-appropriate materials for
                historic restoration projects.
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Source Authentic Materials for Your Project
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Authentic restoration requires authentic materials. Contact FCS to discuss
                  material sourcing for your historic restoration project—from antique
                  brick to custom millwork.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Discuss Your Project</h3>
                <HighLevelForm height={450} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
