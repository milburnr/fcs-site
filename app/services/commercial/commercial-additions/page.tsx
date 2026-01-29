import Link from "next/link";
import { Metadata } from "next";
import { Phone, ArrowRight, CheckCircle, Building2, Shield, Award, Expand, Clock, FileCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";

import { InternalLinks } from "@/components/InternalLinks";
export const metadata: Metadata = {
  title: "Commercial Additions Tampa | Building Expansions | FCS",
  description: "Commercial building additions in Tampa Bay. Expand your facility without relocating. Warehouses, offices, manufacturing, retail. Occupied building expertise. Call (813) 420-7561.",
  keywords: ["commercial additions tampa", "building expansion florida", "commercial building addition", "warehouse expansion", "office building addition"],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Commercial Construction", href: "/services/commercial/" },
  { name: "Commercial Additions", href: "/services/commercial/commercial-additions/" },
];

const additionTypes = [
  {
    title: "Warehouse & Industrial Additions",
    description: "Expand warehouse capacity, add dock positions, or create new manufacturing space. Structural matching, utility extensions, and fire protection integration.",
  },
  {
    title: "Office Building Additions",
    description: "Vertical and horizontal office expansions. New floors, wing additions, and connected new buildings. Occupied facility construction expertise.",
  },
  {
    title: "Retail Expansions",
    description: "Expand retail footprints for inventory, display, or service areas. Storefront modifications, parking considerations, and minimal disruption to operations.",
  },
  {
    title: "Manufacturing Expansions",
    description: "Add production capacity with new manufacturing space. Equipment foundations, process utilities, and coordination with ongoing operations.",
  },
  {
    title: "Medical Facility Additions",
    description: "Expand healthcare facilities with new clinical space. Infection control during construction, AHCA compliance, and occupied facility protocols.",
  },
  {
    title: "Second Story Additions",
    description: "Add vertical capacity to existing single-story buildings. Structural assessment, foundation evaluation, and elevator/stair additions.",
  },
];

const faqs = [
  {
    question: "What types of commercial additions do you build?",
    answer: "We build all types of commercial additions including warehouse expansions, office building additions (horizontal and vertical), retail expansions, manufacturing facility additions, medical facility expansions, and second story additions. Each project type has unique requirements we address during pre-construction—from structural matching to utility extensions to occupied building coordination.",
  },
  {
    question: "Can you expand an occupied building without disrupting operations?",
    answer: "Yes, we regularly complete additions to occupied commercial facilities. This requires careful phasing, dust and noise control, secure separation between construction and operations, and coordination with your team. We develop construction plans that minimize impact on your business, schedule disruptive work during off-hours when possible, and maintain safe separation throughout construction.",
  },
  {
    question: "How do you match the addition to the existing building?",
    answer: "We match additions to existing buildings structurally and aesthetically. This includes matching structural systems (steel, concrete, wood frame), exterior materials (brick, metal panels, stucco), roofing systems, and architectural details. During pre-construction, we assess existing conditions and specify materials that integrate seamlessly with your current facility.",
  },
  {
    question: "What about utilities and building systems?",
    answer: "Additions require extending utilities and building systems from the existing facility. We coordinate electrical service increases, HVAC extensions or new systems, plumbing connections, fire sprinkler extensions, and data/telecom infrastructure. System capacities are evaluated during pre-construction to ensure the existing infrastructure can support the addition or identify needed upgrades.",
  },
  {
    question: "Do additions require permits and inspections?",
    answer: "Yes, commercial additions require building permits, plan reviews, and inspections just like new construction. We manage all permitting including structural, electrical, mechanical, and plumbing permits. For additions to licensed facilities (medical, food service), we also coordinate specialized reviews. Permit timelines are built into project schedules.",
  },
  {
    question: "How does adding a second story work?",
    answer: "Second story additions require structural evaluation of the existing building. We assess foundation capacity, existing structural systems, and determine what reinforcement is needed to support additional floors. This may include foundation strengthening, structural column additions, and elevator/stair construction. Not all buildings are candidates for vertical expansion—we provide honest assessments during pre-construction.",
  },
  {
    question: "What is the typical timeline for a commercial addition?",
    answer: "Commercial addition timelines vary by scope and complexity. Simple warehouse additions: 4-8 months. Office building additions: 6-12 months. Complex occupied facility expansions: 8-14 months. Second story additions may take longer due to structural work. We provide detailed schedules during pre-construction that account for occupied facility constraints.",
  },
  {
    question: "Can you add parking with a building addition?",
    answer: "Yes, we address parking requirements as part of addition projects. Building additions may trigger increased parking requirements under local zoning codes. We coordinate with site civil engineers, manage parking lot construction or expansion, and ensure compliance with zoning and ADA requirements. Some projects may require parking variances or alternative compliance.",
  },
  {
    question: "What size additions do you handle?",
    answer: "We handle commercial additions ranging from $250,000 to $20 million or more. This includes modest warehouse expansions, significant office building additions, and large-scale manufacturing facility expansions. Our 40+ years experience and in-house engineering allows us to take on substantial addition projects while maintaining the attention required for smaller expansions.",
  },
  {
    question: "Is it better to add on or relocate?",
    answer: "This depends on your specific situation. Additions make sense when: your location is valuable, relocation would disrupt operations, land is available for expansion, and the existing building can support expansion. Relocation may be better when: extensive renovation is also needed, expansion needs exceed available land, or a new location offers strategic advantages. We can help evaluate your options during consultation.",
  },
];

export default function CommercialAdditionsPage() {
  return (
    <>
      <LocalBusinessSchema service="Commercial Additions" />
      <ServiceSchema
        serviceName="Commercial Building Additions"
        serviceDescription="Commercial building additions and expansions in Tampa Bay. Warehouse, office, manufacturing, and retail additions. Occupied building expertise, structural matching, and utility integration."
        minPrice="250000"
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
              <Expand className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Building Expansions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Commercial Additions in Tampa Bay
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists expands your facility without the disruption of relocating. Whether you need more warehouse space, additional office capacity, or expanded manufacturing capabilities, we build additions that integrate seamlessly with your existing building.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              Warehouse, office, manufacturing, and retail additions. Occupied building expertise. Structural matching and utility integration. $250K-$20M+ projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Your Expansion Project
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
              <span className="font-semibold text-gray-700">Occupied Building Experts</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Minimal Disruption</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div >
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Commercial Building Addition Expertise
            </h2>
            <p className="text-gray-600 mb-6">
              When your business outgrows its current space, you face a choice: relocate or expand. For many Tampa Bay businesses, expansion makes more sense—preserving your established location, avoiding operational disruption, and building exactly the space you need connected to your existing facility.
            </p>
            <p className="text-gray-600 mb-6">
              At Florida Construction Specialists, we build commercial additions that integrate seamlessly with existing buildings. We match structural systems, extend utilities, and coordinate construction around your ongoing operations. Whether you're adding warehouse capacity, office space, manufacturing area, or retail square footage, we deliver additions that function as natural extensions of your facility.
            </p>
            <p className="text-gray-600 mb-8">
              Our experience spans warehouse and industrial expansions, office building additions, retail growth projects, and specialized additions for manufacturing and healthcare facilities. We understand the complexities of occupied building construction and the importance of minimizing disruption to your business.
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

      {/* Addition Types */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Commercial Addition Types
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionTypes.map((type) => (
              <div key={type.title} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-brand-green-dark text-lg mb-3">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
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
              Addition Construction Capabilities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Structural Integration</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Existing building assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Foundation design and construction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Structural system matching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Exterior material matching</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Systems Extension</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Electrical service expansion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">HVAC system integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Fire sprinkler extensions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Data and telecom infrastructure</span>
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
            Commercial Addition FAQs
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
                <li><Link href="/services/commercial/industrial-construction/" className="text-brand-green hover:underline">Industrial Construction</Link></li>
                <li><Link href="/services/commercial/tenant-improvements/" className="text-brand-green hover:underline">Tenant Improvements</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Residential</h3>
              <ul className="space-y-2">
                <li><Link href="/services/residential/" className="text-brand-green hover:underline">Residential Construction</Link></li>
                <li><Link href="/services/residential/home-additions/" className="text-brand-green hover:underline">Home Additions</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">By Location</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-tampa/" className="text-brand-green hover:underline">Commercial Tampa</Link></li>
                <li><Link href="/locations/lakeland-fl/" className="text-brand-green hover:underline">Commercial Lakeland</Link></li>
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
            Plan Your Building Expansion
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss expanding your commercial facility. We'll assess your existing building, understand your needs, and develop a plan for seamless expansion.
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
