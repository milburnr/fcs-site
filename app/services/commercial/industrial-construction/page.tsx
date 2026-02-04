import Link from "next/link";
import { Metadata } from "next";
import { Phone, ArrowRight, CheckCircle, Building2, Shield, Award, Factory, Truck, Warehouse, Settings } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";

import { InternalLinks } from "@/components/InternalLinks";
export const metadata: Metadata = {
  title: "Industrial Construction Tampa | Warehouse | FCS",
  description: "Industrial construction in Tampa Bay. Warehouses, distribution centers, manufacturing facilities, flex space. Tilt-wall, steel, concrete. $500K-$25M+ projects. Call (813) 420-7561.",
  keywords: ["industrial construction tampa", "warehouse construction florida", "manufacturing facility builder", "distribution center construction", "flex space construction"],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Commercial Construction", href: "/services/commercial/" },
  { name: "Industrial Construction", href: "/services/commercial/industrial-construction/" },
];

const facilityTypes = [
  {
    title: "Warehouse & Distribution",
    description: "Distribution centers, fulfillment facilities, and storage warehouses. High-bay construction, dock equipment, and logistics infrastructure.",
    icon: Warehouse,
  },
  {
    title: "Manufacturing Facilities",
    description: "Production facilities for food processing, electronics, pharmaceuticals, and general manufacturing. Clean rooms, process utilities, and specialized systems.",
    icon: Factory,
  },
  {
    title: "Flex & Light Industrial",
    description: "Flexible industrial space combining warehouse, office, and light manufacturing. Multi-tenant and single-user configurations.",
    icon: Settings,
  },
  {
    title: "Cold Storage",
    description: "Refrigerated and frozen storage facilities. Specialized insulation, refrigeration systems, and temperature-controlled environments.",
    icon: Building2,
  },
];

const constructionMethods = [
  {
    title: "Tilt-Wall Construction",
    description: "Cost-effective for large footprint buildings. Concrete panels cast on-site and tilted into place. Durable, low-maintenance, and efficient for warehouse applications.",
  },
  {
    title: "Pre-Engineered Metal Buildings",
    description: "Fast construction timelines and economical for clear-span requirements. Steel framing with metal panel systems. Ideal for distribution and light manufacturing.",
  },
  {
    title: "Conventional Steel Frame",
    description: "Maximum flexibility for complex requirements. Structural steel with various cladding options. Suited for manufacturing facilities with heavy equipment loads.",
  },
  {
    title: "Concrete Construction",
    description: "Cast-in-place or precast concrete for heavy-duty applications. High durability for food processing, cold storage, and demanding industrial environments.",
  },
];

const faqs = [
  {
    question: "What size industrial projects do you handle?",
    answer: "Florida Construction Specialists handles industrial construction projects ranging from $500,000 to over $25 million. This includes smaller flex space buildings (10,000-30,000 SF), mid-size warehouses (50,000-150,000 SF), and large distribution centers (150,000+ SF). Our 40+ years experience and in-house engineering allows us to take on substantial industrial developments.",
  },
  {
    question: "What construction methods do you use for industrial buildings?",
    answer: "We select construction methods based on your facility requirements and budget. Options include: tilt-wall concrete (cost-effective for large footprints), pre-engineered metal buildings (fast timelines, clear spans), conventional steel frame (maximum flexibility), and concrete construction (heavy-duty applications). We'll recommend the best approach during pre-construction.",
  },
  {
    question: "Do you build cold storage and refrigerated facilities?",
    answer: "Yes, we construct cold storage and refrigerated facilities including frozen storage, refrigerated warehouses, and controlled-environment buildings. These projects require specialized insulation systems, refrigeration equipment coordination, vapor barriers, and temperature-controlled construction practices. We coordinate with refrigeration engineers and equipment suppliers.",
  },
  {
    question: "Can you accommodate specialized manufacturing requirements?",
    answer: "Yes, we build facilities for diverse manufacturing operations including clean rooms, food processing, pharmaceutical production, and general manufacturing. We coordinate specialized systems including process piping, compressed air, specialty gases, high-capacity electrical, and industrial HVAC. Our pre-construction process identifies all specialty requirements.",
  },
  {
    question: "How do you handle heavy equipment foundations?",
    answer: "Manufacturing facilities often require specialized foundations for heavy machinery. We coordinate with equipment suppliers and structural engineers to design foundations that accommodate equipment weights, vibration isolation, and anchor bolt patterns. Foundation work is completed before equipment delivery to maintain project schedules.",
  },
  {
    question: "What is the typical timeline for industrial construction?",
    answer: "Industrial construction timelines depend on building size and complexity. Small flex buildings (under 30,000 SF): 4-8 months. Mid-size warehouses (50,000-100,000 SF): 8-14 months. Large distribution centers (150,000+ SF): 12-18 months. Specialized manufacturing facilities may require additional time for equipment installation and commissioning.",
  },
  {
    question: "Do you handle site work for industrial projects?",
    answer: "Yes, we manage complete site development including grading, utilities, paving, truck courts, dock areas, retention ponds, and landscaping. Industrial sites often have significant paving requirements for truck circulation and trailer storage. We coordinate all site work to support building construction and operational needs.",
  },
  {
    question: "What dock and loading equipment do you install?",
    answer: "We install dock equipment including dock levelers, dock seals and shelters, dock bumpers, vehicle restraints, and dock doors. Equipment is specified during pre-construction based on your operational requirements—trailer types, loading frequency, and product handling needs. We coordinate with equipment suppliers and installation.",
  },
  {
    question: "Do you have experience with speculative industrial development?",
    answer: "Yes, we work with developers on speculative industrial buildings designed to attract tenants. These projects require flexibility for unknown end-users while controlling costs. We provide input on construction methods, building features, and finish levels that optimize marketability while meeting budget targets.",
  },
  {
    question: "What areas do you serve for industrial construction?",
    answer: "We provide industrial construction services throughout Tampa Bay and the I-4 corridor including Tampa, Lakeland, Brandon, Plant City, St. Petersburg, and Clearwater. The region's logistics infrastructure—including Port Tampa Bay, interstate access, and proximity to central Florida—makes it a strong market for industrial development.",
  },
];

export default function IndustrialConstructionPage() {
  return (
    <>
      <LocalBusinessSchema service="Industrial Construction" />
      <ServiceSchema
        serviceName="Industrial Construction"
        serviceDescription="Industrial construction in Tampa Bay including warehouses, distribution centers, manufacturing facilities, and flex space. Tilt-wall, steel, and concrete construction. Projects from $500K to $25M+."
        minPrice="500000"
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
              <Factory className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Industrial Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Industrial Construction in Tampa Bay
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists builds industrial facilities that support your operations—warehouses that optimize logistics, manufacturing facilities that enable production, and flex spaces that adapt to your business needs.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              Tilt-wall, pre-engineered metal, and conventional construction. $500K-$25M+ projects with 40+ years experience and in-house engineering. From the I-4 corridor to Port Tampa Bay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Your Industrial Project
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
              <Factory className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">All Building Types</span>
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
              <Truck className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">I-4 Corridor Coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div >
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Industrial Construction Expertise
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay's strategic location—with Port Tampa Bay, interstate access, and central Florida proximity—makes it a prime market for industrial development. Whether you're building a distribution center to serve the Southeast, a manufacturing facility for production operations, or flex space for a growing business, Florida Construction Specialists delivers industrial facilities that support your success.
            </p>
            <p className="text-gray-600 mb-6">
              We build industrial facilities using the construction methods best suited to your requirements: tilt-wall concrete for cost-effective large footprints, pre-engineered metal buildings for fast timelines, conventional steel for maximum flexibility, and concrete construction for demanding applications. Our pre-construction process identifies the right approach for your project.
            </p>
            <p className="text-gray-600 mb-8">
              From site development through building completion, we manage every aspect of industrial construction—foundations, structural systems, building envelope, dock equipment, and specialized systems for manufacturing operations.
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

      {/* Facility Types */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Industrial Facility Types
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {facilityTypes.map((facility) => (
              <div key={facility.title} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center flex-shrink-0">
                    <facility.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark text-lg mb-2">{facility.title}</h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Methods */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Construction Methods
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {constructionMethods.map((method) => (
              <div key={method.title} className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-brand-green-dark mb-3">{method.title}</h3>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div >
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Industrial Construction Capabilities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Site & Structure</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Complete site development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Heavy-duty concrete floors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Clear-span structures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Equipment foundations</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Systems & Equipment</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Dock equipment installation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Fire suppression systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">High-bay lighting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Process utilities coordination</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Industrial Construction FAQs
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
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
                <li><Link href="/services/commercial/tenant-improvements/" className="text-brand-green hover:underline">Tenant Improvements</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">By Location</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-tampa/" className="text-brand-green hover:underline">Industrial Tampa</Link></li>
                <li><Link href="/locations/lakeland-fl/" className="text-brand-green hover:underline">Industrial Lakeland</Link></li>
                <li><Link href="/locations/plant-city-fl/" className="text-brand-green hover:underline">Industrial Plant City</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Other Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services/disaster-recovery/" className="text-brand-green hover:underline">Disaster Recovery</Link></li>
                <li><Link href="/contact/" className="text-brand-green hover:underline">Contact Us</Link></li>
                <li><Link href="/portfolio/" className="text-brand-green hover:underline">Project Portfolio</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Plan Your Industrial Facility
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your industrial construction project. From site selection through building completion, we deliver facilities that support your operations.
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
