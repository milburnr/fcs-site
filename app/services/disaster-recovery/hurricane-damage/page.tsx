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
  Wind,
  AlertTriangle,
  Home,
  Building2,
  FileText,
  Clock
} from "lucide-react";

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Disaster Recovery", href: "/services/disaster-recovery/" },
  { name: "Hurricane Damage", href: "/services/disaster-recovery/hurricane-damage/" },
];

const faqs = [
  {
    question: "What should I do immediately after hurricane damage to my property?",
    answer: "First, ensure safety and evacuate if structural integrity is compromised. Document all damage with photos and videos before any cleanup. Make temporary repairs to prevent further damage (tarping roofs, boarding windows). Contact your insurance company to file a claim. Keep all receipts for emergency repairs and temporary housing. Then contact FCS for professional assessment and restoration.",
  },
  {
    question: "How quickly can you respond after a hurricane?",
    answer: "FCS maintains 24/7 emergency response capability during hurricane season. For clients with pre-storm agreements, we begin assessments within 24-48 hours after the storm passes and roads are accessible. For new clients, response time depends on storm severity and demand, but we prioritize based on safety concerns and damage severity.",
  },
  {
    question: "What types of hurricane damage do you repair?",
    answer: "We handle all aspects of hurricane damage restoration including roof damage (missing shingles to complete tear-offs), structural damage (wall failures, foundation issues), window and door damage, water intrusion damage, exterior damage (siding, stucco, soffits), interior reconstruction (drywall, flooring, finishes), and debris removal. We're equipped for both residential and commercial properties.",
  },
  {
    question: "Do you work with insurance companies on hurricane claims?",
    answer: "Yes, insurance claim coordination is a core part of our service. Our principal, Frank Bragano, spent 43 years in the insurance industry including work as a commercial adjuster. We understand documentation requirements, proper scope development, and fair pricing. We work directly with your carrier to ensure your claim reflects the full scope of necessary repairs.",
  },
  {
    question: "What's the difference between Category 1-5 hurricane damage?",
    answer: "Category ratings indicate wind speed at landfall. Cat 1 (74-95 mph) typically causes roof and siding damage. Cat 2 (96-110 mph) can cause structural damage and power outages. Cat 3-5 (111+ mph) causes severe structural damage including wall failures and can devastate entire neighborhoods. Higher categories generally mean longer restoration timelines and more complex repairs.",
  },
  {
    question: "Can you help secure my property before a hurricane?",
    answer: "Yes, we offer pre-storm preparation services including window and door boarding, roof tie-down inspection, loose item removal, and temporary waterproofing. For commercial clients, we offer comprehensive storm preparation plans. Pre-storm clients receive priority response after the storm passes.",
  },
  {
    question: "How do you handle water damage that occurs with hurricane damage?",
    answer: "Wind damage often leads to water intrusion. We address both simultaneously—emergency tarping to stop ongoing water entry, water extraction and drying to prevent mold, and then permanent repairs. Our water damage restoration team uses industrial dehumidifiers and monitoring equipment to ensure proper drying before reconstruction begins.",
  },
  {
    question: "What if my property has structural damage from the hurricane?",
    answer: "Structural damage requires immediate professional assessment. We work with licensed structural engineers to evaluate damage, develop repair plans, and obtain necessary permits. Our team has experience with foundation repairs, load-bearing wall reconstruction, and complete structural restoration. Safety is paramount—some properties may require temporary evacuation during repairs.",
  },
  {
    question: "How long does hurricane damage restoration take?",
    answer: "Timeline depends on damage severity and scope. Minor roof repairs may take 1-2 weeks. Moderate damage restoration typically takes 2-4 months. Severe structural damage can require 6-12 months for complete restoration. We provide detailed timelines during assessment and update you throughout the project.",
  },
  {
    question: "Do you help with FEMA claims and SBA disaster loans?",
    answer: "Yes, we're experienced with federal disaster assistance programs. We can provide documentation required for FEMA claims and SBA disaster loan applications. For properties that don't qualify for FEMA assistance or need funds beyond what's available, we can discuss financing options for your restoration project.",
  },
];

const damageTypes = [
  {
    icon: Wind,
    title: "Roof Damage",
    description: "From missing shingles to complete roof failures, we handle all hurricane roof damage including emergency tarping and permanent restoration.",
  },
  {
    icon: Building2,
    title: "Structural Damage",
    description: "Wall failures, foundation damage, and structural compromises requiring engineering assessment and professional reconstruction.",
  },
  {
    icon: AlertTriangle,
    title: "Window & Door Damage",
    description: "Impact damage, blown-out windows, failed doors, and the water intrusion that follows—restored to code with impact-rated replacements.",
  },
  {
    icon: Home,
    title: "Interior Damage",
    description: "Water-damaged drywall, flooring, insulation, and finishes requiring professional drying, mold prevention, and complete restoration.",
  },
  {
    icon: FileText,
    title: "Insurance Claim Support",
    description: "Full documentation, scope development, and carrier coordination to ensure your claim covers necessary repairs.",
  },
  {
    icon: Clock,
    title: "Emergency Board-Up",
    description: "24/7 emergency response for temporary protection including tarping, boarding, and securing damaged properties.",
  },
];

const relatedLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Restoration" },
  { href: "/services/disaster-recovery/insurance-claims-process/", label: "Insurance Claims Process" },
  { href: "/services/residential/hurricane-resistant-construction/", label: "Hurricane-Resistant Construction" },
  { href: "/disaster-recovery-tampa/", label: "Disaster Recovery Tampa" },
  { href: "/disaster-recovery-st-petersburg/", label: "Disaster Recovery St. Petersburg" },
];

export default function HurricaneDamagePage() {
  return (
    <>
      <LocalBusinessSchema service="Hurricane Damage Restoration" />
      <ServiceSchema
        serviceName="Hurricane Damage Restoration Services"
        serviceDescription="24/7 hurricane damage restoration for Tampa Bay properties. Emergency response, roof repair, structural restoration, water damage remediation, and full insurance claim support with 43+ years experience."
        minPrice="10000"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-repeat" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb items={breadcrumbItems} className="mb-8 text-gray-300" />

          <div className="max-w-4xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 px-4 py-2 rounded-full mb-6">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <span className="text-red-200 font-medium">24/7 Emergency Response Available</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Hurricane Damage Restoration
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                When hurricanes strike Tampa Bay, FCS responds with emergency stabilization,
                comprehensive damage restoration, and expert insurance claim support.
                We restore homes and businesses after nature's worst.
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
                  className="inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg transition-colors"
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
                Tampa Bay's Hurricane Restoration Experts
              </h2>
            </FadeIn>

            <div className="prose prose-lg max-w-none">
              <FadeIn delay={0.1}>
                <p className="text-gray-700 mb-6">
                  Living in Florida means accepting hurricane risk, but you don't have to face
                  the aftermath alone. Florida Construction Specialists has restored hundreds
                  of properties after hurricanes including Charley (2004), Irma (2017), Michael
                  (2018), and Ian (2022). Our experience means faster restoration, better
                  insurance outcomes, and properties rebuilt to withstand future storms.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-gray-700 mb-6">
                  Our principal, Frank Bragano, brings unique expertise to hurricane restoration.
                  His 43-year career includes working as a commercial adjuster for Allstate and
                  later as an Executive General Adjuster handling catastrophe response for
                  insurers. This background means we understand both sides of the claims process—
                  what adjusters look for, how to document damage properly, and how to ensure
                  your settlement reflects the true cost of restoration.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Our Hurricane Response Process
                </h3>
                <p className="text-gray-700 mb-6">
                  When a hurricane threatens Tampa Bay, we begin mobilizing resources before
                  landfall. Emergency response crews stand ready with tarps, generators, and
                  board-up materials. As soon as roads are passable, we begin damage assessments
                  for pre-registered clients, prioritizing properties with safety concerns or
                  ongoing water intrusion.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p className="text-gray-700 mb-6">
                  Our assessment teams document all damage with detailed photography, measurements,
                  and written descriptions. This documentation forms the foundation of your
                  insurance claim. We identify both obvious damage and hidden issues that may
                  not be apparent to untrained observers—water intrusion behind walls, structural
                  connections that have been compromised, and damage to mechanical systems.
                </p>
              </FadeIn>

              <FadeIn delay={0.5}>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Complete Property Restoration
                </h3>
                <p className="text-gray-700 mb-6">
                  Hurricane damage is rarely simple. Wind damage leads to water intrusion.
                  Water intrusion leads to mold. Structural damage affects finishes. Our
                  approach addresses all damage comprehensively, with coordinated trades
                  working from stabilization through final finishes. We handle roofing,
                  structural repairs, electrical, plumbing, HVAC, drywall, flooring,
                  painting, and exterior restoration—everything needed to return your
                  property to pre-storm condition or better.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Damage Types Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Hurricane Damage Restoration Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive restoration for all types of hurricane damage, from emergency
                response through complete property reconstruction.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {damageTypes.map((type, index) => (
              <FadeIn key={type.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <type.icon className="w-7 h-7 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Insurance Claim Support
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-gray-700 mb-6">
                Hurricane claims are often the largest and most complex claims property
                owners will ever file. Insurance companies deploy their most experienced
                adjusters for catastrophe response. You need someone equally experienced
                on your side.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {[
                {
                  title: "Thorough Documentation",
                  description: "Professional documentation of all damage including hidden issues often missed in initial assessments.",
                },
                {
                  title: "Accurate Scope Development",
                  description: "Detailed repair scopes using industry-standard pricing that reflect the true cost of proper restoration.",
                },
                {
                  title: "Adjuster Meeting Attendance",
                  description: "We meet with your adjuster, walk the property together, and advocate for complete damage recognition.",
                },
                {
                  title: "Supplement Preparation",
                  description: "When additional damage is discovered during repairs, we prepare and submit supplement claims for approval.",
                },
                {
                  title: "Code Upgrade Documentation",
                  description: "Florida Building Code requires certain upgrades when repairs exceed thresholds. We document code-required improvements for claim inclusion.",
                },
                {
                  title: "Dispute Resolution",
                  description: "If disagreements arise, we provide documentation and testimony to support your claim through appraisal or litigation.",
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
                Hurricane Damage FAQs
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Common questions about hurricane damage restoration, insurance claims,
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 px-4 py-2 rounded-full mb-6">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <span className="text-red-200 font-medium">24/7 Emergency Response</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Hurricane Damage? We're Here to Help
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Don't face hurricane restoration alone. Contact FCS for immediate
                  emergency response, comprehensive damage assessment, and expert
                  insurance claim support. We restore what storms destroy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg transition-colors"
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Emergency Assessment</h3>
                <HighLevelForm height={450} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
