import Link from "next/link";
import { Metadata } from "next";
import { Phone, ArrowRight, CheckCircle, Building2, Shield, Award, Clock, Users, FileCheck, Layers, Target } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";

import { InternalLinks } from "@/components/InternalLinks";
export const metadata: Metadata = {
  title: "Design-Build Construction Tampa | FCS",
  description: "Design-build construction services in Tampa Bay. Single-source accountability, faster timelines, cost savings. $500K-$25M+ commercial projects. Licensed CBC1262722. Call (813) 420-7561.",
  keywords: ["design-build construction tampa", "design-build contractor florida", "single-source construction", "integrated design-build"],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Commercial Construction", href: "/services/commercial/" },
  { name: "Design-Build", href: "/services/commercial/design-build/" },
];

const benefits = [
  {
    title: "Single Point of Accountability",
    description: "One contract, one team, one responsible party. No finger-pointing between architect and contractor.",
    icon: Target,
  },
  {
    title: "Faster Project Delivery",
    description: "Overlapping design and construction phases can reduce project timelines by 20-30%.",
    icon: Clock,
  },
  {
    title: "Cost Certainty",
    description: "Early pricing collaboration prevents budget surprises. Value engineering built into the process.",
    icon: FileCheck,
  },
  {
    title: "Integrated Team Approach",
    description: "Designers and builders work together from day one, solving problems before they become costly changes.",
    icon: Users,
  },
];

const processSteps = [
  {
    step: "1",
    title: "Discovery & Programming",
    description: "We begin by understanding your business needs, functional requirements, budget parameters, and timeline goals. This programming phase establishes the foundation for design decisions.",
  },
  {
    step: "2",
    title: "Conceptual Design",
    description: "Our design partners develop initial concepts aligned with your program. We provide preliminary cost estimates so you can evaluate options with budget clarity from the start.",
  },
  {
    step: "3",
    title: "Design Development",
    description: "Selected concepts are refined into detailed designs. Concurrent with design, we develop detailed cost estimates and identify value engineering opportunities.",
  },
  {
    step: "4",
    title: "Guaranteed Maximum Price",
    description: "Before construction begins, we establish a Guaranteed Maximum Price (GMP) that protects you from cost overruns. Savings below the GMP can be shared or returned to you.",
  },
  {
    step: "5",
    title: "Construction",
    description: "With design complete and pricing locked, construction proceeds efficiently. Our team manages all subcontractors, inspections, and quality control.",
  },
  {
    step: "6",
    title: "Closeout & Warranty",
    description: "We complete all punch list items, provide comprehensive documentation, and back our work with warranty coverage. One team responsible from concept to completion.",
  },
];

const faqs = [
  {
    question: "What is design-build construction?",
    answer: "Design-build is a project delivery method where a single entity—the design-build contractor—provides both architectural design and construction services under one contract. This contrasts with traditional design-bid-build, where an owner hires an architect separately from the contractor. Design-build streamlines communication, reduces conflicts, and typically delivers projects faster and with fewer change orders.",
  },
  {
    question: "How does design-build save money compared to traditional construction?",
    answer: "Design-build saves money through several mechanisms: reduced change orders (since the builder is involved in design decisions), value engineering from the start (constructability input during design), shorter timelines (overlapping phases), and eliminated adversarial dynamics between designer and builder. Studies show design-build projects average 6% lower costs and 12% faster delivery than traditional methods.",
  },
  {
    question: "Do I lose control over design decisions with design-build?",
    answer: "No—you retain full control over design decisions. The difference is that you're working with an integrated team that provides real-time cost and constructability feedback. You see the budget implications of design choices as they're made, rather than discovering them during bidding. Many owners find this transparency gives them more informed control, not less.",
  },
  {
    question: "What types of projects are best suited for design-build?",
    answer: "Design-build works well for projects where speed, cost certainty, and single-source accountability are priorities. Common applications include: commercial office buildings, medical facilities, industrial warehouses, multi-family developments, retail centers, and tenant improvements. Projects with aggressive timelines or complex coordination particularly benefit from the integrated approach.",
  },
  {
    question: "How do you select design partners for design-build projects?",
    answer: "We maintain relationships with architects, engineers, and specialty consultants experienced in design-build delivery. For each project, we assemble a team matched to your project type and requirements. You're involved in design partner selection and have direct access to the design team throughout the project. We've successfully partnered with firms on medical facilities, office buildings, industrial projects, and more.",
  },
  {
    question: "What is a Guaranteed Maximum Price (GMP)?",
    answer: "A Guaranteed Maximum Price is a contractual commitment that the project will not exceed a specified cost. If actual costs come in below the GMP, savings may be shared with the owner or returned entirely, depending on contract terms. If costs exceed the GMP (rare in design-build due to early collaboration), the design-builder absorbs the overrun. GMP provides budget certainty while maintaining quality standards.",
  },
  {
    question: "How does the timeline compare to traditional construction?",
    answer: "Design-build typically delivers projects 20-30% faster than traditional design-bid-build. Time savings come from: overlapping design and construction phases (fast-tracking), eliminating the bidding period, reducing design iterations through early builder input, and faster resolution of field issues. A project that might take 18 months traditionally could be completed in 12-14 months with design-build.",
  },
  {
    question: "What size projects do you handle with design-build?",
    answer: "Florida Construction Specialists handles design-build projects ranging from $500,000 to over $25 million. Our 40+ years experience and in-house engineering allows us to take on large commercial developments, while our experienced team can efficiently deliver smaller tenant improvements and building additions. The design-build approach scales effectively across project sizes.",
  },
  {
    question: "Do you have design-build experience in my industry?",
    answer: "We've completed design-build projects across diverse sectors including: medical/healthcare facilities (clinics, surgical centers), commercial office buildings, industrial warehouses and distribution centers, multi-family residential developments, retail centers, and hospitality venues. Each project benefits from our 20+ years of Tampa Bay construction experience and strong subcontractor relationships.",
  },
  {
    question: "How do I get started with a design-build project?",
    answer: "Contact us for a design-build consultation. We'll discuss your project goals, timeline, and budget parameters, then outline how the design-build process would work for your specific situation. There's no obligation—we want to ensure design-build is the right fit before proceeding. Call (813) 420-7561 or schedule a consultation online.",
  },
];

export default function DesignBuildPage() {
  return (
    <>
      <LocalBusinessSchema service="Design-Build Construction" />
      <ServiceSchema
        serviceName="Design-Build Construction"
        serviceDescription="Integrated design-build construction services in Tampa Bay. Single-source accountability for commercial projects from $500K to $25M+. Faster delivery, cost certainty, and seamless coordination."
        minPrice="500000"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems.slice(1)} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/commercial-construction.jpg')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <Layers className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Integrated Project Delivery</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Design-Build Construction in Tampa Bay
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              One team. One contract. One point of accountability. Florida Construction Specialists delivers design-build projects that combine architectural excellence with construction expertise—faster timelines, better coordination, and cost certainty from concept to completion.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              From $500K tenant improvements to $25M+ commercial developments, our integrated approach eliminates the conflicts and delays of traditional construction delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule Design-Build Consultation
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Single-Source Accountability</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">20-30% Faster Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">20+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is Design-Build */}
      <section className="section bg-white">
        <div className="container-custom">
          <div >
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              What is Design-Build Construction?
            </h2>
            <p className="text-gray-600 mb-6">
              Design-build is a project delivery method that combines architectural design and construction services under a single contract. Unlike traditional design-bid-build—where owners hire an architect, wait for complete drawings, then bid the project to contractors—design-build integrates the design and construction teams from the project's inception.
            </p>
            <p className="text-gray-600 mb-6">
              This integrated approach means the builder provides constructability input during design, the designer understands budget constraints in real-time, and the owner works with one accountable team rather than managing separate contracts with potentially conflicting interests.
            </p>
            <p className="text-gray-600 mb-8">
              For Tampa Bay commercial property owners, design-build offers a streamlined path from concept to completion—particularly valuable when speed, budget certainty, or complex coordination are priorities.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-brand-green-dark text-xl mb-4">Design-Build vs. Traditional Construction</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Traditional Design-Bid-Build</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">-</span>
                      <span>Separate contracts with architect and contractor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">-</span>
                      <span>Sequential phases extend timeline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">-</span>
                      <span>Budget unknown until bidding complete</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">-</span>
                      <span>Change orders common from design gaps</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Design-Build</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">+</span>
                      <span>Single contract, single point of responsibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">+</span>
                      <span>Overlapping phases compress schedule</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">+</span>
                      <span>Early cost visibility and GMP protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">+</span>
                      <span>Fewer change orders through collaboration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Link
              href="/services/commercial/"
              className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Back to Commercial Construction Services
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Benefits of Design-Build Construction
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Our Design-Build Process
          </h2>
          <div >
            <div className="space-y-6">
              {processSteps.map((item) => (
                <div key={item.step} className="flex gap-4 bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div >
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Design-Build Project Types
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-brand-green-dark mb-3">Commercial Office Buildings</h3>
                <p className="text-gray-600 text-sm mb-3">
                  From single-tenant professional buildings to multi-story office complexes, design-build delivers efficient, functional workspaces on accelerated timelines.
                </p>
                <Link href="/services/commercial/" className="text-brand-green text-sm hover:underline">
                  Learn more about commercial construction →
                </Link>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-brand-green-dark mb-3">Medical & Healthcare Facilities</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Medical design-build requires specialized knowledge of healthcare regulations, infection control, and patient flow—expertise we integrate from day one.
                </p>
                <Link href="/services/commercial/medical-construction/" className="text-brand-green text-sm hover:underline">
                  Learn more about medical construction →
                </Link>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-brand-green-dark mb-3">Industrial & Warehouse</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Industrial design-build focuses on operational efficiency, material flow, and future flexibility—optimizing layouts before construction begins.
                </p>
                <Link href="/services/commercial/industrial-construction/" className="text-brand-green text-sm hover:underline">
                  Learn more about industrial construction →
                </Link>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-brand-green-dark mb-3">Multi-Family Developments</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Apartment and condominium design-build balances unit efficiency, amenity spaces, and construction costs—critical for development pro formas.
                </p>
                <Link href="/services/commercial/multi-family/" className="text-brand-green text-sm hover:underline">
                  Learn more about multi-family construction →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why FCS */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Choose FCS for Design-Build
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-green-bg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                We never subcontract our role. You get direct accountability from a single team that owns the project from design through construction closeout.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-green-bg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Strong Design Partnerships</h3>
              <p className="text-gray-600">
                We've built relationships with architects and engineers experienced in design-build collaboration. The right design partner is matched to your project type.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-green-bg flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">20+ Years Tampa Bay Experience</h3>
              <p className="text-gray-600">
                Local knowledge matters. We understand Tampa Bay's permitting processes, subcontractor market, and building conditions—accelerating every phase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Design-Build Construction FAQs
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Commercial Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services/commercial/" className="text-brand-green hover:underline">Commercial Construction</Link></li>
                <li><Link href="/services/commercial/medical-construction/" className="text-brand-green hover:underline">Medical Construction</Link></li>
                <li><Link href="/services/commercial/multi-family/" className="text-brand-green hover:underline">Multi-Family Construction</Link></li>
                <li><Link href="/services/commercial/industrial-construction/" className="text-brand-green hover:underline">Industrial Construction</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">By Location</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-tampa/" className="text-brand-green hover:underline">Commercial Construction Tampa</Link></li>
                <li><Link href="/commercial-construction-st-petersburg/" className="text-brand-green hover:underline">Commercial Construction St. Petersburg</Link></li>
                <li><Link href="/commercial-construction-clearwater/" className="text-brand-green hover:underline">Commercial Construction Clearwater</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Other Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services/residential/" className="text-brand-green hover:underline">Residential Construction</Link></li>
                <li><Link href="/services/disaster-recovery/" className="text-brand-green hover:underline">Disaster Recovery</Link></li>
                <li><Link href="/services/historic-restoration/" className="text-brand-green hover:underline">Historic Restoration</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Explore Design-Build?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss how design-build can deliver your project faster, with greater cost certainty and single-source accountability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Consultation
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
