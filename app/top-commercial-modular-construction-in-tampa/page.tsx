import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Clock, DollarSign, Building2, Shield, Zap, Recycle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Top Commercial Modular Construction in Tampa | Prefab Building Solutions",
  description: "Tampa's leading commercial modular construction specialists. Faster timelines, controlled costs, quality prefab buildings for offices, healthcare, education, and more.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Top Commercial Modular Construction in Tampa", href: "/top-commercial-modular-construction-in-tampa/" },
];

const faqs = [
  {
    question: "What types of commercial buildings can be built using modular construction?",
    answer: "Modular construction works for many commercial building types: office buildings, medical and dental facilities, educational facilities, retail structures, hotels, multi-family residential, and industrial offices. The approach works best for buildings with repetitive floor plans or room layouts. Highly custom, unique designs may not benefit as much from modular methods."
  },
  {
    question: "How much faster is modular construction compared to traditional building?",
    answer: "Modular construction typically reduces overall project timelines by 30-50%. The key advantage is concurrent construction—site work proceeds while modules are fabricated, eliminating the sequential delays of traditional construction. A project that might take 12 months conventionally could be completed in 7-9 months with modular methods."
  },
  {
    question: "Is modular construction less expensive than traditional building?",
    answer: "Modular construction offers cost advantages through reduced labor costs (factory efficiency), shorter financing periods, faster time to revenue, and less weather-related delays. However, transportation and crane costs partially offset savings. Overall, modular projects typically cost 5-15% less than equivalent traditional construction when all factors are considered."
  },
  {
    question: "Do modular buildings meet Florida hurricane code requirements?",
    answer: "Absolutely. Modular buildings must meet the same Florida Building Code requirements as traditional construction, including hurricane resistance standards. In fact, modular construction often exceeds code requirements because modules must survive transportation stresses. Our modular projects are engineered specifically for Tampa Bay's wind zone and undergo the same permitting and inspection processes as traditional buildings."
  },
  {
    question: "What's the quality difference between modular and traditional construction?",
    answer: "Quality in modular construction is typically equal to or better than traditional methods. Factory construction provides climate-controlled environments (no rain damage during framing), better quality control and inspection processes, precision manufacturing with tighter tolerances, and consistent workmanship from trained factory crews. The key is working with experienced modular contractors who understand both fabrication and site integration."
  }
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/how-technology-is-revolutionizing-the-construction-process/", label: "Construction Technology" },
  { href: "/services/commercial/medical-construction/", label: "Medical Construction" },
  { href: "/contact/", label: "Discuss Modular Project" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Commercial modular construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Top Commercial Modular Construction in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Faster timelines, controlled costs, and quality construction. Florida Construction Specialists delivers commercial modular and prefabricated building solutions that meet Tampa Bay's demanding requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Explore Modular Options
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
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Commercial modular construction offers Tampa Bay businesses a compelling alternative to traditional building methods. By fabricating building components in controlled factory environments and assembling them on-site, modular construction delivers faster project completion, more predictable costs, and quality that often exceeds conventional construction. For the right projects, modular building represents the future of commercial construction.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists brings comprehensive modular construction expertise to Tampa Bay commercial projects. We help clients evaluate whether modular approaches suit their specific needs, manage the complete process from design through occupancy, and ensure that modular buildings meet all Florida Building Code requirements—including the stringent hurricane resistance standards essential in our market.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Advantages of Commercial Modular Construction
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Clock className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Faster Project Completion</h3>
                <p className="text-gray-600 mb-4">
                  Modular construction's greatest advantage is speed. While site work proceeds—foundations, utilities, site improvements—modules are simultaneously fabricated in the factory. This parallel construction process can reduce overall timelines by 30-50% compared to traditional sequential construction.
                </p>
                <p className="text-sm text-brand-green-dark font-semibold">30-50% faster than traditional construction</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <DollarSign className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Cost Predictability</h3>
                <p className="text-gray-600 mb-4">
                  Factory fabrication provides better cost control than field construction. Material quantities are precise, labor is more efficient, and weather delays are eliminated for the fabrication phase. Shorter project duration also reduces financing costs and accelerates time to revenue.
                </p>
                <p className="text-sm text-brand-green-dark font-semibold">5-15% typical cost savings over conventional</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Quality Control</h3>
                <p className="text-gray-600 mb-4">
                  Factory environments provide better quality control than construction sites. Climate-controlled facilities eliminate weather damage during construction. Trained crews work in optimal conditions with proper supervision. Inspection processes catch issues before modules leave the factory.
                </p>
                <p className="text-sm text-brand-green-dark font-semibold">Consistent quality from controlled environment</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Recycle className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Sustainability Benefits</h3>
                <p className="text-gray-600 mb-4">
                  Modular construction generates 30-50% less waste than traditional building. Factory processes optimize material usage, and scraps can be recycled efficiently. Reduced site activity means less environmental disruption. Tight construction tolerances improve building energy efficiency.
                </p>
                <p className="text-sm text-brand-green-dark font-semibold">30-50% reduction in construction waste</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Modular Construction Applications
            </h2>

            <p className="text-gray-600 mb-6">
              Modular construction works best for buildings with repetitive elements—similar rooms, floor plates, or units. The following commercial applications commonly benefit from modular approaches:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Building2 className="w-10 h-10 text-brand-green flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Office Buildings</h3>
                    <p className="text-gray-600">Multi-story office buildings with repetitive floor plates are excellent modular candidates. Private offices, conference rooms, and common areas can all be prefabricated. The speed advantage helps businesses occupy new space faster, generating revenue sooner.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Zap className="w-10 h-10 text-brand-green flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Healthcare Facilities</h3>
                    <p className="text-gray-600">Medical offices, clinics, and healthcare facilities benefit from modular construction's precision. Exam rooms, procedure rooms, and patient areas can be prefabricated with all mechanical, electrical, and plumbing systems installed. Clean factory conditions support healthcare construction requirements.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Building2 className="w-10 h-10 text-brand-green flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Educational Buildings</h3>
                    <p className="text-gray-600">Schools, training centers, and educational facilities often feature repetitive classroom layouts ideal for modular construction. The ability to construct during summer breaks—when site work proceeds while modules are built—helps minimize disruption to academic schedules.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Building2 className="w-10 h-10 text-brand-green flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Hotels & Multi-Family</h3>
                    <p className="text-gray-600">Hotel guest rooms and apartment units are highly repetitive, making them excellent modular applications. Complete bathroom pods, fully finished guest rooms, and apartment units can be prefabricated and stacked on-site. This approach has delivered some of the most dramatic timeline reductions.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Building2 className="w-10 h-10 text-brand-green flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Industrial & Warehouse Offices</h3>
                    <p className="text-gray-600">Industrial facilities often need office space within larger warehouse structures. Modular construction can deliver complete office buildouts—from single rooms to multi-story structures—while warehouse operations continue. Quick installation minimizes business disruption.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Table */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Modular Construction Cost Comparison
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Building Type</th>
                    <th className="px-6 py-4 text-left">Traditional Cost/SF</th>
                    <th className="px-6 py-4 text-left">Modular Cost/SF</th>
                    <th className="px-6 py-4 text-left">Time Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Office Building</td>
                    <td className="px-6 py-4">$200 - $350</td>
                    <td className="px-6 py-4 text-brand-green font-medium">$175 - $300</td>
                    <td className="px-6 py-4 text-gray-600">30-40%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Medical Office</td>
                    <td className="px-6 py-4">$300 - $500</td>
                    <td className="px-6 py-4 text-brand-green font-medium">$275 - $450</td>
                    <td className="px-6 py-4 text-gray-600">25-35%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Educational</td>
                    <td className="px-6 py-4">$250 - $400</td>
                    <td className="px-6 py-4 text-brand-green font-medium">$220 - $350</td>
                    <td className="px-6 py-4 text-gray-600">35-45%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Hotel (Per Room)</td>
                    <td className="px-6 py-4">$85K - $150K</td>
                    <td className="px-6 py-4 text-brand-green font-medium">$75K - $130K</td>
                    <td className="px-6 py-4 text-gray-600">40-50%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Multi-Family (Per Unit)</td>
                    <td className="px-6 py-4">$125K - $200K</td>
                    <td className="px-6 py-4 text-brand-green font-medium">$110K - $175K</td>
                    <td className="px-6 py-4 text-gray-600">35-45%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Costs reflect 2024 Tampa Bay market estimates. Actual costs depend on project specifics, design complexity, and site conditions. Time savings assume well-coordinated modular execution.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Modular Construction in Florida: Hurricane Considerations
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h3 className="font-bold text-blue-800 mb-2">Meeting Florida Building Code</h3>
              <p className="text-blue-700 mb-4">
                Modular buildings in Florida must meet the same stringent building code requirements as traditional construction—including hurricane resistance standards. All our modular projects are engineered specifically for Tampa Bay's wind zone and undergo the same permitting, inspection, and certification processes as conventional buildings.
              </p>
              <p className="text-blue-700">
                In fact, modular construction often provides superior hurricane performance. Modules must withstand transportation stresses—being lifted, transported, and placed by crane—that can exceed forces experienced in hurricanes. The structural integrity required for transportation translates to robust buildings.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Modular Construction Process
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-1">Feasibility Assessment</h3>
                  <p className="text-gray-600">We evaluate whether modular construction suits your project. Not every building benefits from modular methods—highly custom designs may be better suited to traditional construction. We provide honest recommendations based on your specific needs.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-1">Design & Engineering</h3>
                  <p className="text-gray-600">Modular projects require design for manufacturing—considering module sizes, transportation constraints, and assembly requirements. We work with architects and manufacturers to optimize designs for modular execution while meeting all functional and aesthetic requirements.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-1">Permitting & Approvals</h3>
                  <p className="text-gray-600">We navigate Tampa Bay permitting requirements for modular construction. This includes both factory inspection of modules and site permits for foundations and assembly. Our experience with local jurisdictions helps streamline approvals.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-1">Concurrent Construction</h3>
                  <p className="text-gray-600">While site work proceeds—foundations, utilities, site improvements—modules are fabricated in the factory. This parallel approach is where modular construction achieves its timeline advantages. We coordinate both tracks to ensure modules arrive when the site is ready.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-1">Module Setting & Integration</h3>
                  <p className="text-gray-600">Modules are delivered and set by crane onto prepared foundations. Our crews then integrate modules—connecting structural elements, completing MEP connections, and finishing intermodular joints. This phase transforms individual modules into a cohesive building.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">6</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-1">Completion & Inspection</h3>
                  <p className="text-gray-600">Final site work, landscaping, and finishing complete the project. All required inspections verify code compliance. The result is a finished building indistinguishable from traditional construction—delivered faster and often at lower cost.</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mb-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-brand-green-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Explore Modular Construction for Your Project</h3>
              <p className="mb-6 text-gray-200">
                Contact Florida Construction Specialists to discuss whether modular construction makes sense for your commercial project. We'll evaluate your needs, provide realistic comparisons to traditional methods, and help you make an informed decision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Discuss Your Project
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Related Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Tampa Bay's Modular Construction Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists delivers commercial modular solutions with faster timelines, controlled costs, and quality that meets Florida's demanding requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Consultation
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
    </>
  );
}
