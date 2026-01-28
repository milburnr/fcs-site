import Link from "next/link";
import { Metadata } from "next";
import { Phone, ArrowRight, CheckCircle, Building2, Shield, Award, Home, Users, FileCheck, Layers } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";

import { InternalLinks } from "@/components/InternalLinks";
export const metadata: Metadata = {
  title: "Multi-Family Construction Tampa | Apartments & Condos | FCS",
  description: "Multi-family construction in Tampa Bay. Apartment buildings, condominiums, townhomes, senior living. Ground-up and renovation. $1M-$50M+ projects. Licensed CBC1262722. Call (813) 420-7561.",
  keywords: ["multi-family construction tampa", "apartment construction florida", "condo builder tampa bay", "senior living construction", "townhome developer"],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Commercial Construction", href: "/services/commercial/" },
  { name: "Multi-Family", href: "/services/commercial/multi-family/" },
];

const projectTypes = [
  {
    title: "Apartment Communities",
    description: "Garden-style apartments, mid-rise buildings, and mixed-use developments with residential components. Market-rate and workforce housing expertise.",
  },
  {
    title: "Condominium Buildings",
    description: "New condominium construction and condo conversion projects. Experience with HOA requirements, individual unit finishes, and common area construction.",
  },
  {
    title: "Townhome Developments",
    description: "Attached and detached townhome communities. Efficient site work, unit repetition for cost control, and quality individual unit construction.",
  },
  {
    title: "Senior Living Communities",
    description: "Independent living, assisted living, and memory care facilities. Specialized knowledge of senior housing accessibility and safety requirements.",
  },
  {
    title: "Student Housing",
    description: "Purpose-built student housing near universities. Understanding of student housing design, durability requirements, and management considerations.",
  },
  {
    title: "Mixed-Use Developments",
    description: "Multi-family over retail or commercial. Coordinating residential and commercial construction, separate entries, and mixed-use building codes.",
  },
];

const faqs = [
  {
    question: "What size multi-family projects do you handle?",
    answer: "Florida Construction Specialists handles multi-family projects ranging from $1 million to over $50 million. This includes smaller townhome developments (10-30 units), mid-size apartment communities (50-150 units), and large-scale developments (150+ units). Our $10M+ bonding capacity allows us to take on substantial multi-family projects while our experienced team can efficiently deliver smaller developments.",
  },
  {
    question: "Do you work with multi-family developers?",
    answer: "Yes, we partner with multi-family developers throughout Tampa Bay. We understand developer pro forma requirements, the importance of schedule adherence for lease-up timing, and the need for cost control during construction. We provide detailed budgeting during pre-construction and maintain transparent communication on costs throughout the project.",
  },
  {
    question: "What multi-family building types do you construct?",
    answer: "We construct all multi-family building types including: wood-frame garden-style (Type V), podium construction (wood over concrete), mid-rise concrete and steel (Type I/II), and townhome construction. We select appropriate construction types based on project requirements, site conditions, and budget optimization.",
  },
  {
    question: "How do you handle repetitive unit construction efficiently?",
    answer: "Multi-family efficiency comes from treating repetitive units as production work. We establish quality standards on initial units, then systematically replicate across all units. Bulk material purchasing, crew specialization, and detailed scheduling allow us to maintain quality while achieving the cost efficiencies that multi-family pro formas require.",
  },
  {
    question: "Do you have experience with affordable housing construction?",
    answer: "Yes, we have experience with affordable and workforce housing projects including those with LIHTC (Low-Income Housing Tax Credit) requirements. These projects often have specific construction standards, documentation requirements, and inspection protocols that differ from market-rate construction. We understand these requirements and ensure compliance throughout construction.",
  },
  {
    question: "What amenity spaces do you build?",
    answer: "We construct all common amenity spaces including: clubhouses and leasing offices, fitness centers, pools and pool houses, business centers, package rooms, dog parks and pet spas, outdoor kitchens and gathering areas, parking structures, and landscaping and hardscaping. Amenity construction is coordinated with unit construction for efficient lease-up.",
  },
  {
    question: "How do you coordinate with property management during construction?",
    answer: "For projects that will be professionally managed, we coordinate with property management teams before construction completion. This includes ensuring management office space is prioritized, demonstrating building systems, providing documentation for maintenance, and facilitating smooth transitions to operations. For lease-up projects, we coordinate model unit completion with marketing timelines.",
  },
  {
    question: "What is your typical timeline for multi-family construction?",
    answer: "Multi-family timelines depend on project size and construction type. Townhome developments: 8-14 months. Garden-style apartments (50-100 units): 12-18 months. Mid-rise apartments (100-200 units): 14-22 months. Podium construction adds time for the concrete podium before wood framing. We provide detailed schedules during pre-construction.",
  },
  {
    question: "Do you handle multi-family renovations?",
    answer: "Yes, we renovate existing multi-family properties including unit interiors, common areas, building exteriors, and systems upgrades. Renovation work can be performed on occupied properties with proper phasing and resident communication. We also handle condo common area reconstruction, including balcony repairs required under Florida's SB 4-D.",
  },
  {
    question: "What areas do you serve for multi-family construction?",
    answer: "We provide multi-family construction services throughout Tampa Bay including Tampa, St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, and Bradenton. Our experience spans urban infill developments, suburban garden communities, and coastal properties with enhanced wind and flood requirements.",
  },
];

export default function MultiFamilyPage() {
  return (
    <>
      <LocalBusinessSchema service="Multi-Family Construction" />
      <ServiceSchema
        serviceName="Multi-Family Construction"
        serviceDescription="Multi-family residential construction in Tampa Bay including apartments, condominiums, townhomes, and senior living. Ground-up construction and renovation. Projects from $1M to $50M+."
        minPrice="1000000"
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
              <span className="text-brand-gold font-semibold">Multi-Family Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Multi-Family Construction in Tampa Bay
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists delivers multi-family projects that meet developer pro forma requirements while creating quality living environments. From townhome communities to large-scale apartment developments, we bring efficiency and expertise to residential construction.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              Apartments, condominiums, townhomes, and senior living. Ground-up construction and renovation. $1M-$50M+ projects with $10M+ bonding capacity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Your Multi-Family Project
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
              <Building2 className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">All Building Types</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">$10M+ Bonding</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Developer Partnerships</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div >
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Multi-Family Construction Expertise
            </h2>
            <p className="text-gray-600 mb-6">
              Multi-family construction requires a unique combination of residential quality and commercial efficiency. Developers need projects delivered on budget and schedule to meet pro forma targets. Residents expect quality finishes and functional living spaces. Property managers need durable construction that minimizes maintenance.
            </p>
            <p className="text-gray-600 mb-6">
              At Florida Construction Specialists, we understand these sometimes-competing demands. Our experience spans garden-style apartments, mid-rise buildings, townhome communities, and senior living facilities throughout Tampa Bay. We bring the systems and processes that deliver repetitive unit construction efficiently while maintaining the quality that supports successful lease-up and long-term property performance.
            </p>
            <p className="text-gray-600 mb-8">
              Whether you're developing a small townhome community or a large-scale apartment development, we provide the multi-family expertise your project requires.
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
            Multi-Family Project Types
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

      {/* Capabilities */}
      <section className="section bg-white">
        <div className="container-custom">
          <div >
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Multi-Family Construction Capabilities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Construction Types</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Wood-frame garden-style (Type V)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Podium construction (wood over concrete)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Mid-rise concrete and steel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Townhome and attached housing</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Amenity Construction</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Clubhouses and leasing offices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Fitness centers and pools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Parking structures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Site work and landscaping</span>
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
            Multi-Family Construction FAQs
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
                <li><Link href="/services/commercial/design-build/" className="text-brand-green hover:underline">Design-Build Construction</Link></li>
                <li><Link href="/services/commercial/retail-construction/" className="text-brand-green hover:underline">Retail Construction</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Residential Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services/residential/" className="text-brand-green hover:underline">Residential Construction</Link></li>
                <li><Link href="/services/residential/balcony-reconstruction/" className="text-brand-green hover:underline">Balcony Reconstruction</Link></li>
                <li><Link href="/services/residential/exterior-waterproofing/" className="text-brand-green hover:underline">Exterior Waterproofing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">By Location</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-tampa/" className="text-brand-green hover:underline">Construction Tampa</Link></li>
                <li><Link href="/commercial-construction-st-petersburg/" className="text-brand-green hover:underline">Construction St. Petersburg</Link></li>
                <li><Link href="/locations/lakeland-fl/" className="text-brand-green hover:underline">Construction Lakeland</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Plan Your Multi-Family Development
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your multi-family project. From initial budgeting through construction completion, we deliver multi-family developments that meet your goals.
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
