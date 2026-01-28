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
  FileText,
  Landmark,
  Building2,
  BookOpen,
  ClipboardCheck,
  Scale
} from "lucide-react";

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Historic Restoration", href: "/services/historic-restoration/" },
  { name: "SHPO Compliance", href: "/services/historic-restoration/shpo-compliance/" },
];

const faqs = [
  {
    question: "What is SHPO and why does compliance matter?",
    answer: "SHPO (State Historic Preservation Office) oversees historic preservation in Florida, administering the National Historic Preservation Act. Compliance matters because projects affecting historic properties must meet Secretary of Interior Standards to maintain historic status, access tax credits, and avoid penalties. Non-compliant work can result in loss of historic designation and tax credit clawback.",
  },
  {
    question: "What projects require SHPO compliance?",
    answer: "Projects typically require SHPO review if they: receive federal funding or permits, involve National Register-listed properties, seek Federal or State Historic Tax Credits, occur in local historic districts (Tampa's Barrio Latino Commission, for example), or affect properties with pending National Register nominations. Even private projects may need local historic review.",
  },
  {
    question: "What are the Secretary of the Interior Standards?",
    answer: "The Standards are 10 principles guiding historic preservation work, emphasizing: preserving historic character, retaining original materials, making changes reversible when possible, and distinguishing new work from historic. They're flexible guidelines, not rigid rules—the key is thoughtful application to each unique property.",
  },
  {
    question: "How does the SHPO review process work?",
    answer: "The process typically involves: 1) Consultation to discuss project scope, 2) Submission of plans, specifications, and photos, 3) SHPO review against applicable standards, 4) Comments and requested modifications, 5) Revised submissions if needed, 6) Final approval. Timeline varies from weeks for simple projects to months for complex ones.",
  },
  {
    question: "What documentation is required for SHPO review?",
    answer: "Documentation typically includes: current condition photos (interior/exterior), historic photos if available, architectural drawings showing existing and proposed conditions, specifications for materials and methods, contractor qualifications, and narrative describing how work meets applicable standards. More complex projects require more detailed submissions.",
  },
  {
    question: "Can I make changes to a National Register property?",
    answer: "Yes, National Register listing doesn't prevent changes—it requires appropriate changes. The key is meeting the Secretary of Interior Standards. Many modifications are acceptable if done thoughtfully: mechanical system upgrades, accessibility improvements, adaptive reuse, and even additions that are compatible with historic character. The goal is preserving significance while allowing reasonable use.",
  },
  {
    question: "What happens if I do non-compliant work on a historic property?",
    answer: "Consequences vary by situation. For tax credit projects, non-compliant work can trigger credit recapture—you may owe back the credits plus interest. Local historic districts may require removal of non-compliant work. Properties can lose their historic designation. At minimum, you may face difficulty selling the property to buyers who value its historic status.",
  },
  {
    question: "How do you handle Barrio Latino Commission requirements in Ybor City?",
    answer: "Tampa's Barrio Latino Commission reviews all exterior changes in the Ybor City Historic District. We've completed numerous projects under their jurisdiction including the Wotjowicz House and Ferraro House—ground-up construction in the historic district. We understand their requirements for architectural compatibility, material selection, and design review process.",
  },
  {
    question: "Can modern materials be used on historic buildings?",
    answer: "Sometimes, when original materials are unavailable or inappropriate for the application. Modern materials must be compatible—similar appearance, physical properties, and reversibility. For example, a synthetic slate roof might be acceptable where weight prohibits original slate. Each decision requires justification and often SHPO approval.",
  },
  {
    question: "How long does SHPO compliance add to a project?",
    answer: "Plan for 2-6 months for SHPO review, depending on project complexity and whether issues arise. Simple maintenance projects may proceed quickly. Major rehabilitations involving tax credits require multiple submissions. We build review time into project schedules and maintain ongoing communication with SHPO to minimize delays.",
  },
];

const complianceServices = [
  {
    icon: FileText,
    title: "SHPO Application Preparation",
    description: "Complete documentation packages including photos, drawings, specifications, and narratives meeting SHPO submission requirements.",
  },
  {
    icon: BookOpen,
    title: "Secretary of Interior Standards Guidance",
    description: "Expert interpretation of the Standards and practical application to your specific property and project requirements.",
  },
  {
    icon: Landmark,
    title: "National Register Consultation",
    description: "Guidance on working with National Register-listed properties including documentation, review processes, and approval timelines.",
  },
  {
    icon: Building2,
    title: "Local Historic District Compliance",
    description: "Navigation of local requirements including Tampa's Barrio Latino Commission, St. Petersburg preservation board, and other local authorities.",
  },
  {
    icon: ClipboardCheck,
    title: "Construction Monitoring",
    description: "On-site supervision ensuring work is completed per approved plans and documented for SHPO final approval.",
  },
  {
    icon: Scale,
    title: "Tax Credit Coordination",
    description: "Integration of SHPO compliance with Federal and State Historic Tax Credit requirements for maximum benefit.",
  },
];

const relatedLinks = [
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
  { href: "/services/historic-restoration/material-sourcing/", label: "Historic Material Sourcing" },
  { href: "/services/historic-restoration/historic-tax-credits/", label: "Historic Tax Credits" },
  { href: "/historic-restoration-tampa/", label: "Historic Restoration Tampa" },
  { href: "/historic-restoration-st-petersburg/", label: "Historic Restoration St. Petersburg" },
  { href: "/services/residential/", label: "Residential Construction" },
];

export default function SHPOCompliancePage() {
  return (
    <>
      <LocalBusinessSchema service="SHPO Compliance Services" />
      <ServiceSchema
        serviceName="SHPO Compliance & Historic Preservation Services"
        serviceDescription="Expert SHPO compliance services for Tampa Bay historic properties. Secretary of Interior Standards guidance, application preparation, local historic district navigation, and tax credit coordination with 43+ years experience."
        minPrice="5000"
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
                SHPO Compliance Services
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Navigate Florida's historic preservation requirements with confidence.
                Expert guidance on SHPO reviews, Secretary of Interior Standards,
                local historic districts, and tax credit compliance.
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
                  <span>National Register Projects</span>
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
                Expert Navigation of Historic Preservation Requirements
              </h2>
            </FadeIn>

            <div className="prose prose-lg max-w-none">
              <FadeIn delay={0.1}>
                <p className="text-gray-700 mb-6">
                  Working on historic properties in Florida means navigating a complex web of
                  federal, state, and local requirements. The Florida State Historic Preservation
                  Office (SHPO) administers the National Historic Preservation Act, reviews
                  projects affecting historic resources, and coordinates with federal agencies
                  on compliance. Understanding these requirements is essential for successful
                  historic rehabilitation projects.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-gray-700 mb-6">
                  Florida Construction Specialists has completed numerous projects requiring
                  SHPO compliance, including National Register-listed properties like the
                  Lion's Eye Institute in Ybor City, the Bay Pines Veterans Hospital in
                  St. Petersburg, and the Italian American Club restoration. Our experience
                  includes both federal undertakings requiring Section 106 review and private
                  projects seeking Historic Tax Credits.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Understanding the Secretary of Interior Standards
                </h3>
                <p className="text-gray-700 mb-6">
                  The Secretary of the Interior's Standards for the Treatment of Historic
                  Properties form the foundation of historic preservation practice in the
                  United States. These ten standards guide decisions about rehabilitation,
                  emphasizing respect for historic character, retention of original materials,
                  and compatibility of new work with existing fabric.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p className="text-gray-700 mb-6">
                  The Standards are principles, not prescriptions. They require professional
                  judgment to apply appropriately to each unique situation. A technique that
                  meets the Standards for one building may not be appropriate for another.
                  Our experience across dozens of historic projects informs practical
                  application of these principles to achieve preservation goals while
                  meeting owner objectives.
                </p>
              </FadeIn>

              <FadeIn delay={0.5}>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Local Historic District Compliance
                </h3>
                <p className="text-gray-700 mb-6">
                  Beyond state and federal requirements, Tampa Bay's local historic districts
                  add another layer of review. Tampa's Barrio Latino Commission oversees
                  Ybor City, one of Florida's most significant historic districts. We've
                  completed ground-up construction within this district—the Wotjowicz House
                  and Ferraro House—demonstrating that new construction can meet stringent
                  compatibility requirements.
                </p>
              </FadeIn>

              <FadeIn delay={0.6}>
                <p className="text-gray-700 mb-6">
                  Other local jurisdictions including St. Petersburg, Clearwater, and Sarasota
                  maintain their own historic preservation programs. Each has unique requirements,
                  review processes, and architectural standards. Our regional experience means
                  we understand these local variations and can guide projects through appropriate
                  review processes.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                SHPO Compliance Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive support for navigating historic preservation requirements
                at federal, state, and local levels.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceServices.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
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
                SHPO Review Process
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Pre-Application Consultation",
                  description: "Discuss project scope with SHPO staff to identify review requirements and potential issues before formal submission.",
                },
                {
                  step: "2",
                  title: "Documentation Preparation",
                  description: "Compile required photos, drawings, specifications, and narratives demonstrating Standards compliance.",
                },
                {
                  step: "3",
                  title: "Application Submission",
                  description: "Submit complete application package to SHPO for formal review. Incomplete submissions delay the process.",
                },
                {
                  step: "4",
                  title: "SHPO Review & Comments",
                  description: "SHPO reviews submission against applicable standards and provides written comments on proposed work.",
                },
                {
                  step: "5",
                  title: "Revision & Resubmission",
                  description: "If modifications are requested, revise plans and resubmit. Multiple rounds may be needed for complex projects.",
                },
                {
                  step: "6",
                  title: "Final Approval & Construction",
                  description: "Receive written approval, proceed with construction per approved plans, and document completed work.",
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
                SHPO Compliance FAQs
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Common questions about SHPO review, the Secretary of Interior Standards,
                and historic preservation requirements.
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
                  Navigate SHPO Compliance with Confidence
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Don't let historic preservation requirements derail your project.
                  Contact FCS for expert guidance on SHPO review, Standards compliance,
                  and local historic district requirements.
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
