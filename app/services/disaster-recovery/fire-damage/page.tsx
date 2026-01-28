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
  Flame,
  AlertTriangle,
  Home,
  Building2,
  Wind,
  Sparkles
} from "lucide-react";

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Disaster Recovery", href: "/services/disaster-recovery/" },
  { name: "Fire Damage", href: "/services/disaster-recovery/fire-damage/" },
];

const faqs = [
  {
    question: "What should I do immediately after a fire at my property?",
    answer: "First, ensure everyone is safe and the fire department has cleared the property for entry. Contact your insurance company to report the claim. Document damage with photos before any cleanup. Don't attempt to clean or discard items—improper cleaning can set soot permanently. Secure the property from weather and intrusion. Then contact FCS for professional assessment and restoration.",
  },
  {
    question: "What types of fire damage do you restore?",
    answer: "We handle all fire damage restoration including structural repairs, smoke and soot damage, water damage from firefighting efforts, content cleaning and restoration, odor elimination, and complete reconstruction. Our services cover residential fires, commercial fires, kitchen fires, electrical fires, and large-scale structure fires.",
  },
  {
    question: "How does smoke damage spread beyond the fire area?",
    answer: "Smoke particles travel throughout buildings via HVAC systems, natural air currents, and pressure differentials. Smoke affects areas far from the fire source, penetrating porous materials, settling in ductwork, and leaving residue on every surface. Comprehensive restoration must address the entire affected area, not just the fire origin.",
  },
  {
    question: "Can fire-damaged items be saved?",
    answer: "Many items can be restored with proper professional cleaning. Hard surfaces, some textiles, electronics, documents, and photographs can often be saved with specialized techniques. The key is rapid response—soot becomes more difficult to remove over time. We assess all contents and recommend restoration vs. replacement based on feasibility and cost-effectiveness.",
  },
  {
    question: "What is the fire damage restoration process?",
    answer: "Our process includes: 1) Emergency board-up and stabilization, 2) Assessment and documentation, 3) Water removal from firefighting, 4) Smoke and soot removal from all surfaces, 5) Structural cleaning and repairs, 6) Content pack-out and professional cleaning, 7) Odor elimination, 8) Complete reconstruction and restoration.",
  },
  {
    question: "How long does fire damage restoration take?",
    answer: "Timeline depends on fire severity and extent. Minor kitchen fires may be restored in 2-4 weeks. Moderate structure fires typically require 2-4 months. Severe fires with structural damage can take 6-12 months for complete restoration. We provide detailed timelines during assessment and keep you updated throughout the project.",
  },
  {
    question: "Does insurance cover fire damage restoration?",
    answer: "Homeowner's and commercial property insurance typically covers fire damage, including structure repair, content cleaning/replacement, and additional living expenses during restoration. We work directly with your insurance company, providing detailed documentation, meeting with adjusters, and ensuring your claim reflects the full scope of necessary restoration.",
  },
  {
    question: "How do you eliminate smoke odor?",
    answer: "Smoke odor elimination requires multiple approaches: thermal fogging penetrates porous materials, hydroxyl generators oxidize odor molecules, ozone treatment (in unoccupied spaces) destroys odor-causing compounds, and sealants encapsulate residual odors in structural materials. We don't mask odors—we eliminate them at the source.",
  },
  {
    question: "Can you restore fire-damaged commercial buildings?",
    answer: "Yes, commercial fire restoration is a specialty. We understand business interruption concerns and work to minimize downtime. Our team can phase restoration to allow partial operations, provide detailed timelines for business planning, and coordinate with your insurance for business interruption claims. We've restored office buildings, retail spaces, restaurants, and industrial facilities.",
  },
  {
    question: "What happens to electrical and HVAC systems after a fire?",
    answer: "Smoke and heat damage electrical wiring, panels, outlets, and HVAC components. Systems must be inspected by licensed professionals before restoration. HVAC ductwork requires thorough cleaning to remove soot and prevent redistribution. Often, affected systems require partial or complete replacement for safety and code compliance.",
  },
];

const fireDamageTypes = [
  {
    icon: Flame,
    title: "Structure Fire Restoration",
    description: "Complete restoration of fire-damaged buildings including structural repairs, system replacement, and full reconstruction.",
  },
  {
    icon: Wind,
    title: "Smoke & Soot Damage",
    description: "Professional cleaning and removal of smoke residue from all surfaces, including hidden areas and HVAC systems.",
  },
  {
    icon: Sparkles,
    title: "Odor Elimination",
    description: "Advanced deodorization using thermal fogging, hydroxyl generators, and ozone treatment to permanently eliminate smoke odor.",
  },
  {
    icon: Home,
    title: "Content Restoration",
    description: "Professional cleaning, restoration, and pack-out services for salvageable furniture, electronics, documents, and personal items.",
  },
  {
    icon: Building2,
    title: "Commercial Fire Restoration",
    description: "Business-focused restoration minimizing downtime with phased approaches and business interruption claim support.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Board-Up",
    description: "Immediate property securing including board-up, tarping, and temporary fencing to protect against weather and intrusion.",
  },
];

const relatedLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Restoration" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/services/disaster-recovery/insurance-claims-process/", label: "Insurance Claims Process" },
  { href: "/services/commercial/tenant-improvements/", label: "Commercial Tenant Improvements" },
  { href: "/disaster-recovery-tampa/", label: "Disaster Recovery Tampa" },
];

export default function FireDamagePage() {
  return (
    <>
      <LocalBusinessSchema service="Fire Damage Restoration" />
      <ServiceSchema
        serviceName="Fire Damage Restoration Services"
        serviceDescription="Professional fire damage restoration for Tampa Bay properties. Emergency response, smoke and soot removal, odor elimination, content restoration, and complete reconstruction with 43+ years experience."
        minPrice="10000"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-repeat" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb items={breadcrumbItems} className="mb-8 text-gray-300" />

          <div className="max-w-4xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/50 px-4 py-2 rounded-full mb-6">
                <AlertTriangle className="w-5 h-5 text-orange-400" />
                <span className="text-orange-200 font-medium">24/7 Emergency Response</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Fire Damage Restoration
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive fire damage restoration for Tampa Bay properties. From emergency
                stabilization through complete reconstruction, we restore your property
                and help you recover from fire's devastating effects.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
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
                  <span>Insurance Claim Experts</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Emergency: {BUSINESS_INFO.phone}
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg transition-colors border border-white/30"
                >
                  Request Assessment
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
                Complete Fire Damage Restoration Services
              </h2>
            </FadeIn>

            <div className="prose prose-lg max-w-none">
              <FadeIn delay={0.1}>
                <p className="text-gray-700 mb-6">
                  A fire is one of the most traumatic events a property owner can experience.
                  Beyond the immediate damage from flames, properties suffer from smoke infiltration,
                  soot accumulation, and water damage from firefighting efforts. Florida Construction
                  Specialists provides comprehensive fire restoration services that address every
                  aspect of fire damage, helping you rebuild and recover.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-gray-700 mb-6">
                  Our approach to fire restoration is systematic and thorough. We understand that
                  smoke and soot damage often extends far beyond the fire's origin, traveling through
                  HVAC systems and settling on surfaces throughout the building. Our teams are
                  trained in proper cleaning techniques for different types of smoke residue—dry
                  smoke from fast-burning fires requires different treatment than wet smoke from
                  smoldering fires or protein residue from kitchen fires.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Understanding Fire Damage
                </h3>
                <p className="text-gray-700 mb-6">
                  Fire damage comes in multiple forms. Direct flame damage destroys materials
                  through combustion. Heat damage warps, melts, and weakens materials even without
                  direct flame contact. Smoke damage deposits acidic residue that etches surfaces
                  and creates lasting odor. Water damage from firefighting saturates materials
                  and creates mold risk. Effective restoration must address all these elements.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p className="text-gray-700 mb-6">
                  Different materials respond to fire in different ways. Wood chars but can often
                  be salvaged with proper treatment. Plastics melt and off-gas toxic compounds.
                  Metals conduct heat and may warp or weaken. Electronics are particularly vulnerable
                  to smoke infiltration. Our assessment identifies what can be restored, what
                  requires replacement, and what hidden damage may exist in walls, ceilings, and
                  mechanical systems.
                </p>
              </FadeIn>

              <FadeIn delay={0.5}>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Our Fire Restoration Process
                </h3>
                <p className="text-gray-700 mb-6">
                  We begin with emergency stabilization—boarding up openings, tarping damaged
                  roofs, and securing the property. This prevents additional damage from weather
                  and unauthorized entry. We then conduct a comprehensive assessment, documenting
                  all damage for insurance purposes and developing a detailed restoration plan.
                </p>
              </FadeIn>

              <FadeIn delay={0.6}>
                <p className="text-gray-700 mb-6">
                  Content restoration often runs parallel to structural work. We pack out salvageable
                  items, catalog everything for insurance, and transport items to our cleaning facility.
                  Professional cleaning of furniture, documents, electronics, and personal items can
                  save thousands compared to replacement. Items that can't be saved are documented
                  for insurance claim purposes.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Fire Damage Types Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Fire Damage Restoration Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive restoration for all types of fire damage, from minor kitchen
                fires to major structural losses.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fireDamageTypes.map((type, index) => (
              <FadeIn key={type.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <type.icon className="w-7 h-7 text-orange-600" />
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
                Our Fire Restoration Process
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Emergency Response & Securing",
                  description: "Board-up, tarping, and property securing to prevent additional damage from weather and intrusion.",
                },
                {
                  step: "2",
                  title: "Assessment & Documentation",
                  description: "Comprehensive damage assessment, photo documentation, and detailed scope development for insurance.",
                },
                {
                  step: "3",
                  title: "Water Removal & Drying",
                  description: "Extract water from firefighting efforts and thoroughly dry the structure to prevent mold.",
                },
                {
                  step: "4",
                  title: "Smoke & Soot Removal",
                  description: "Professional cleaning of all surfaces, HVAC systems, and structural elements to remove residue.",
                },
                {
                  step: "5",
                  title: "Content Pack-Out & Cleaning",
                  description: "Catalog, transport, and professionally clean salvageable contents; document non-salvageable items.",
                },
                {
                  step: "6",
                  title: "Odor Elimination",
                  description: "Thermal fogging, hydroxyl generators, and ozone treatment to permanently eliminate smoke odor.",
                },
                {
                  step: "7",
                  title: "Structural Reconstruction",
                  description: "Complete reconstruction of damaged areas including framing, systems, finishes, and final details.",
                },
              ].map((item, index) => (
                <FadeIn key={item.step} delay={index * 0.1}>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                Fire Damage FAQs
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Common questions about fire damage restoration, insurance claims,
                and our restoration process.
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/50 px-4 py-2 rounded-full mb-6">
                  <AlertTriangle className="w-5 h-5 text-orange-400" />
                  <span className="text-orange-200 font-medium">24/7 Emergency Response</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Fire Damage? We're Here to Help
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Don't face fire restoration alone. Contact FCS for immediate
                  emergency response, professional restoration, and expert
                  insurance claim support. We help you rebuild after fire.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Emergency: {BUSINESS_INFO.phone}
                  </a>
                </div>
                <p className="text-gray-400 mt-4">
                  {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Emergency Service</h3>
                <HighLevelForm height={450} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
