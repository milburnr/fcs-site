import Link from "next/link";
import { Metadata } from "next";
import { Phone, ArrowRight, CheckCircle, Building2, Shield, Award, Clock, Paintbrush, Layout, Wrench } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";

import { InternalLinks } from "@/components/InternalLinks";
export const metadata: Metadata = {
  title: "Tenant Improvements Tampa | Commercial Buildouts & TI | FCS",
  description: "Tenant improvement construction in Tampa Bay. Office buildouts, retail TI, medical suites, restaurant construction. Fast timelines, landlord coordination. Call (813) 420-7561.",
  keywords: ["tenant improvements tampa", "commercial buildout florida", "office tenant improvement", "retail TI construction", "restaurant buildout tampa"],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Commercial Construction", href: "/services/commercial/" },
  { name: "Tenant Improvements", href: "/services/commercial/tenant-improvements/" },
];

const projectTypes = [
  {
    title: "Office Buildouts",
    description: "Professional office space construction including open floor plans, private offices, conference rooms, break rooms, and reception areas. Data and telecommunications coordination.",
  },
  {
    title: "Retail Store Construction",
    description: "Retail tenant improvements from boutiques to major retailers. Storefront modifications, fitting rooms, display areas, and point-of-sale infrastructure.",
  },
  {
    title: "Restaurant & Food Service",
    description: "Restaurant buildouts including kitchen construction, hood installation, grease traps, walk-in coolers, dining areas, and bar construction. Health department compliance.",
  },
  {
    title: "Medical Suite Buildouts",
    description: "Medical office improvements including exam rooms, procedure rooms, waiting areas, and medical systems. AHCA compliance for licensed facilities.",
  },
  {
    title: "Fitness & Wellness",
    description: "Gym and fitness center buildouts including open workout areas, locker rooms, wet areas, and specialized fitness equipment installation.",
  },
  {
    title: "Professional Services",
    description: "Law offices, financial services, insurance agencies, and professional firms. Conference rooms, client reception, and professional finishes.",
  },
];

const faqs = [
  {
    question: "What is a tenant improvement (TI)?",
    answer: "A tenant improvement is construction work performed within a leased commercial space to customize it for a tenant's specific use. This includes everything from basic office buildouts (walls, flooring, ceilings) to specialized construction for restaurants, medical offices, or retail stores. TI work transforms vanilla shell or existing space into functional environments for business operations.",
  },
  {
    question: "Do you coordinate with landlords on TI projects?",
    answer: "Yes, landlord coordination is essential for successful TI projects. We communicate with property management on building standards, required approvals, after-hours access, utility connections, and base building systems. Many landlords have specific requirements for contractors working in their buildings—we ensure compliance with all landlord policies and coordinate inspections.",
  },
  {
    question: "How does TI allowance work?",
    answer: "A TI allowance is a dollar amount the landlord contributes toward tenant improvements, typically expressed as dollars per square foot. The allowance is negotiated as part of the lease. We provide budgeting during lease negotiations to help tenants understand what their TI allowance will cover and what additional investment may be required for their desired buildout.",
  },
  {
    question: "What is the typical timeline for a tenant improvement?",
    answer: "Tenant improvement timelines vary by scope and complexity. Basic office buildouts: 4-8 weeks. Medical and professional suites: 8-12 weeks. Restaurant buildouts: 12-16 weeks (including hood installation and health permits). Retail stores: 6-12 weeks. We provide detailed schedules during pre-construction that account for permit times and landlord approval processes.",
  },
  {
    question: "Can you work around existing tenants?",
    answer: "Yes, we regularly perform TI work in occupied buildings with adjacent tenants. This requires careful scheduling, noise management, dust control, and coordination with property management. We schedule loud work appropriately, maintain clean common areas, and minimize disruption to neighboring businesses.",
  },
  {
    question: "Do you handle permits for tenant improvements?",
    answer: "Yes, we manage all permitting for tenant improvement projects. This includes building permits, electrical permits, plumbing permits, and mechanical permits. For restaurants, we coordinate health department requirements. For medical spaces, we navigate AHCA reviews if applicable. Permit timelines are built into project schedules.",
  },
  {
    question: "What's included in a typical office buildout?",
    answer: "A typical office buildout includes: demising walls and interior partitions, ceilings (typically suspended acoustic tile), flooring (carpet, LVT, or tile), interior doors and hardware, electrical and lighting, HVAC modifications, data and telecom rough-in, fire sprinkler modifications, and interior finishes (paint, trim, millwork). Scope varies based on tenant requirements and base building conditions.",
  },
  {
    question: "Do you build restaurants and food service spaces?",
    answer: "Yes, restaurant construction is a specialty. We handle commercial kitchen buildouts including hood installation and makeup air, grease trap installation, walk-in coolers and freezers, three-compartment sinks, floor drains and FRP walls, dining room construction, bar areas, and all health department requirements. We coordinate with equipment suppliers and health inspectors.",
  },
  {
    question: "Can you match existing building finishes?",
    answer: "Yes, we work to match existing building standards and finishes, particularly important in multi-tenant buildings where consistency is required. This includes matching ceiling systems, door and hardware styles, flooring transitions, and corridor finishes. Landlords often provide finish schedules that we incorporate into TI design and construction.",
  },
  {
    question: "What areas do you serve for tenant improvements?",
    answer: "We provide tenant improvement services throughout Tampa Bay including Tampa, St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, and Bradenton. Our experience includes office buildings, retail centers, mixed-use developments, and medical office buildings across the region. Contact us to discuss your TI project location.",
  },
];

export default function TenantImprovementsPage() {
  return (
    <>
      <LocalBusinessSchema service="Tenant Improvements" />
      <ServiceSchema
        serviceName="Tenant Improvement Construction"
        serviceDescription="Tenant improvement and commercial buildout construction in Tampa Bay. Office buildouts, retail TI, restaurant construction, medical suites. Landlord coordination, fast timelines, quality finishes."
        minPrice="100000"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems.slice(1)} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/commercial-construction-in-tampa/commercial-construction-in-tampa-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <Layout className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Commercial Buildouts</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Tenant Improvements in Tampa Bay
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists transforms commercial spaces into functional environments for your business. From office buildouts to restaurant construction, we deliver tenant improvements that meet your timeline and budget—with the quality your business deserves.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              Office, retail, restaurant, medical, and professional space buildouts. Landlord coordination, permit management, and quality construction throughout Tampa Bay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule TI Consultation
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
              <Clock className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Fast Timelines</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Landlord Coordination</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">All Space Types</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div >
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tenant Improvement Expertise
            </h2>
            <p className="text-gray-600 mb-6">
              Whether you're leasing new space or renovating your current location, tenant improvements transform commercial real estate into environments that support your business operations. At Florida Construction Specialists, we understand that TI projects often have aggressive timelines—leases start, rent begins, and businesses need to open.
            </p>
            <p className="text-gray-600 mb-6">
              We bring systems and processes that deliver TI projects efficiently: proactive landlord coordination, permit management, experienced trade partners, and attention to the details that create professional, functional spaces. From basic office buildouts to complex restaurant construction, we manage every aspect of tenant improvement construction.
            </p>
            <p className="text-gray-600 mb-8">
              Our TI experience spans office buildings, retail centers, mixed-use developments, and medical office buildings throughout Tampa Bay. We understand building systems, landlord requirements, and the coordination required to deliver successful tenant improvements.
            </p>

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

      {/* Project Types */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Tenant Improvement Project Types
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectTypes.map((project) => (
              <div key={project.title} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-brand-green-dark text-lg mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Our TI Process
          </h2>
          <div >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Pre-Construction</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Site evaluation and existing conditions assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Budget development for lease negotiations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Landlord coordination and approval</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Permit application and management</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Construction</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Efficient scheduling and trade coordination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Building systems integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Quality finishes and attention to detail</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Punch list completion and turnover</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Tenant Improvement FAQs
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
                <li><Link href="/services/commercial/retail-construction/" className="text-brand-green hover:underline">Retail Construction</Link></li>
                <li><Link href="/services/commercial/medical-construction/" className="text-brand-green hover:underline">Medical Construction</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">By Location</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-tampa/" className="text-brand-green hover:underline">Commercial Tampa</Link></li>
                <li><Link href="/commercial-construction-st-petersburg/" className="text-brand-green hover:underline">Commercial St. Petersburg</Link></li>
                <li><Link href="/commercial-construction-clearwater/" className="text-brand-green hover:underline">Commercial Clearwater</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Other Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services/commercial/design-build/" className="text-brand-green hover:underline">Design-Build</Link></li>
                <li><Link href="/services/disaster-recovery/" className="text-brand-green hover:underline">Disaster Recovery</Link></li>
                <li><Link href="/contact/" className="text-brand-green hover:underline">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Plan Your Tenant Improvement
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your tenant improvement project. From budgeting during lease negotiations to construction completion, we deliver TI projects that meet your timeline and budget.
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
