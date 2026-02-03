import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Palette, Building2, Users, Sparkles, Award, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, ArticleSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Bespoke Architectural Design Tampa | Commercial",
  description: "Custom architectural design services for commercial buildings in Tampa Bay. Tailored solutions that reflect your brand, optimize operations, and create distinctive spaces.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Bespoke Architectural Design in Tampa", href: "/bespoke-architectural-design-in-tampa/" },
];

const internalLinks = [
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/commercial-interior-design-in-tampa/", label: "Commercial Interior Design" },
  { href: "/commercial-building-design-services-in-tampa/", label: "Commercial Design Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const designApproaches = [
  {
    icon: Palette,
    title: "Brand-Driven Design",
    description: "Architecture that embodies your company's values, culture, and market positioning—creating spaces that tell your story without words.",
  },
  {
    icon: Building2,
    title: "Site-Responsive Solutions",
    description: "Designs that embrace Tampa Bay's unique context—climate, views, surrounding architecture—rather than fighting against them.",
  },
  {
    icon: Users,
    title: "User-Centered Planning",
    description: "Spaces designed around how people actually work, shop, heal, or interact—not arbitrary aesthetic preferences.",
  },
  {
    icon: Sparkles,
    title: "Innovation Integration",
    description: "Thoughtful incorporation of emerging technologies, sustainable systems, and flexible infrastructure for future adaptability.",
  },
];

const projectTypes = [
  {
    type: "Corporate Headquarters",
    description: "Executive offices that project success while fostering collaboration and productivity",
    features: ["Executive suites", "Collaborative spaces", "Board rooms", "Employee amenities"],
  },
  {
    type: "Medical Facilities",
    description: "Healthcare environments designed for patient comfort and clinical efficiency",
    features: ["Patient flow optimization", "Healing environments", "Technology integration", "Infection control"],
  },
  {
    type: "Retail Flagships",
    description: "Destination retail experiences that drive brand loyalty and sales",
    features: ["Customer journey mapping", "Display optimization", "Brand immersion", "Flexible layouts"],
  },
  {
    type: "Hospitality Venues",
    description: "Restaurants, hotels, and entertainment spaces that create memorable experiences",
    features: ["Ambiance design", "Acoustic planning", "Kitchen/BOH efficiency", "Guest experience"],
  },
];

const costTable = [
  { projectType: "Standard Commercial Office", designFee: "5-7%", timeframe: "3-4 months", complexity: "Basic" },
  { projectType: "Custom Corporate Facility", designFee: "7-9%", timeframe: "4-6 months", complexity: "Moderate" },
  { projectType: "Signature/Flagship Building", designFee: "9-12%", timeframe: "6-9 months", complexity: "High" },
  { projectType: "Landmark/Iconic Structure", designFee: "12-15%+", timeframe: "9-18 months", complexity: "Very High" },
];

const faqs = [
  {
    question: "Is bespoke design worth the additional investment?",
    answer: "For owner-occupied buildings, absolutely. Custom design typically costs 2-5% more than spec-level design but can improve operational efficiency, employee productivity, customer experience, and brand perception in ways that far exceed the investment. For investment properties, distinctive design commands premium rents and lower vacancy rates."
  },
  {
    question: "How do you balance custom design with budget constraints?",
    answer: "Design-build integration allows us to provide real-time cost feedback during design. We focus custom details on high-impact areas visible to customers or employees, while using value-engineered solutions in back-of-house spaces. The result is maximum design impact within your budget."
  },
  {
    question: "How involved will I be in the design process?",
    answer: "Bespoke design requires meaningful client collaboration. Expect multiple design presentations, material selection sessions, and decision points throughout the process. Your input ensures the final design truly reflects your vision and business needs. We guide you through each decision with clear recommendations."
  },
  {
    question: "Can you work with our existing branding guidelines?",
    answer: "Absolutely. We regularly collaborate with corporate branding teams to ensure architectural design reinforces brand identity. This includes incorporating brand colors, materials, and design language into the architecture while meeting Florida's building requirements."
  },
  {
    question: "Does custom design extend the project timeline?",
    answer: "Bespoke design does require more design time than spec-level work—typically 2-4 additional months. However, design-build delivery allows construction to begin while design is being finalized, often recovering this time. The result is a custom building on a competitive overall schedule."
  }
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ArticleSchema
        headline="Bespoke Architectural Design in Tampa"
        description="Custom architectural design services for commercial buildings in Tampa Bay."
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Bespoke commercial architectural design in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Bespoke Architectural Design in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Custom commercial architecture that transforms your vision into distinctive, functional spaces. Where creativity meets constructability in Tampa Bay's dynamic market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Start Your Custom Project
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

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Bespoke Design Matters for Commercial Success
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                In Tampa Bay's competitive commercial real estate market, generic buildings fade into the background. Bespoke architectural design creates spaces that command attention, attract premium tenants or customers, and deliver returns that justify the investment in custom design.
              </p>
              <p className="text-gray-600 mb-6">
                "Bespoke" doesn't mean expensive ornamentation—it means architecture precisely tailored to your specific needs, site, and objectives. A custom-designed medical office building optimizes patient flow in ways a speculative shell never could. A purpose-built restaurant creates dining experiences that generic retail spaces simply can't match. A headquarters designed around your company culture attracts and retains talent more effectively than standard office space.
              </p>
              <p className="text-gray-600 mb-6">
                At Florida Construction Specialists, we combine architectural creativity with construction expertise. Our design-build approach means the architects creating your vision understand exactly how it will be built, what it will cost, and how to deliver the design intent within your budget. This integration produces architecture that's not only beautiful but buildable, practical, and cost-effective.
              </p>
              <p className="text-gray-600 mb-8">
                Tampa Bay's growth has created demand for distinctive commercial spaces that stand out in an increasingly crowded market. Whether you're building a corporate headquarters in Westshore, a medical facility in South Tampa, or a retail destination in St. Petersburg, bespoke design helps you compete for the customers, patients, tenants, or employees who drive your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Approaches */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Our Approach to Custom Commercial Design
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Every bespoke project begins with understanding what makes your business, your brand, and your vision unique.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designApproaches.map((approach, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <approach.icon className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">{approach.title}</h3>
                <p className="text-gray-600">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Custom Differs */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              How Bespoke Design Differs from Standard Development
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Standard/Speculative Design</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-gray-300 flex-shrink-0 mt-0.5"></span>
                    <span className="text-gray-600">Generic floor plates designed for broad appeal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-gray-300 flex-shrink-0 mt-0.5"></span>
                    <span className="text-gray-600">Cost-driven material selections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-gray-300 flex-shrink-0 mt-0.5"></span>
                    <span className="text-gray-600">Standard building systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-gray-300 flex-shrink-0 mt-0.5"></span>
                    <span className="text-gray-600">Minimal site integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-gray-300 flex-shrink-0 mt-0.5"></span>
                    <span className="text-gray-600">One-size-fits-all approach</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-brand-green/5 rounded-xl p-6 border-2 border-brand-green">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Bespoke Design</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Spaces tailored to specific operational needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Value-driven material selections (quality where it matters)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Systems optimized for your use patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Architecture responsive to site and context</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Solutions designed for your specific challenges</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Bespoke Design for Every Commercial Application
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Different business types require different design approaches. Our custom solutions address the unique requirements of each sector.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {projectTypes.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{project.type}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-brand-green/10 text-brand-green-dark text-sm rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tampa Bay Context */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Designing for Tampa Bay's Unique Context
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Bespoke architecture in Tampa Bay must respond to environmental, cultural, and regulatory factors that shape the built environment. Our designs embrace these conditions rather than fighting them.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">Climate Integration</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Designs that celebrate Florida's indoor-outdoor lifestyle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Shading strategies that reduce cooling loads naturally</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Materials that perform in humid, salt-air environments</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">Regulatory Navigation</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Creative solutions within zoning constraints</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Hurricane-resistant design that enhances aesthetics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Flood zone compliance integrated into design</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">Market Positioning</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Architecture that differentiates in a competitive market</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Design that attracts Tampa Bay's evolving demographics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Spaces that command premium lease rates</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">Community Context</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Respect for neighborhood character and scale</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Integration with Tampa's emerging urban fabric</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Public realm enhancement through good design</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Bespoke Design Investment Guide
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Custom architectural design fees vary based on project complexity and scope. Here's what to expect in the Tampa Bay market.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Project Type</th>
                    <th className="px-6 py-4 text-left font-heading">Design Fee*</th>
                    <th className="px-6 py-4 text-left font-heading">Design Timeframe</th>
                    <th className="px-6 py-4 text-left font-heading">Complexity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {costTable.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.projectType}</td>
                      <td className="px-6 py-4 text-brand-green font-semibold">{row.designFee}</td>
                      <td className="px-6 py-4 text-gray-600">{row.timeframe}</td>
                      <td className="px-6 py-4 text-gray-600">{row.complexity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              *As percentage of construction cost. Design-build projects typically achieve lower total costs due to integrated delivery.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  Is bespoke design worth the additional investment?
                </h3>
                <p className="text-gray-600">
                  For owner-occupied buildings, absolutely. Custom design typically costs 2-5% more than spec-level design but can improve operational efficiency, employee productivity, customer experience, and brand perception in ways that far exceed the investment. For investment properties, distinctive design commands premium rents and lower vacancy rates.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How do you balance custom design with budget constraints?
                </h3>
                <p className="text-gray-600">
                  Design-build integration allows us to provide real-time cost feedback during design. We focus custom details on high-impact areas visible to customers or employees, while using value-engineered solutions in back-of-house spaces. The result is maximum design impact within your budget.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How involved will I be in the design process?
                </h3>
                <p className="text-gray-600">
                  Bespoke design requires meaningful client collaboration. Expect multiple design presentations, material selection sessions, and decision points throughout the process. Your input ensures the final design truly reflects your vision and business needs. We guide you through each decision with clear recommendations.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  Can you work with our existing branding guidelines?
                </h3>
                <p className="text-gray-600">
                  Absolutely. We regularly collaborate with corporate branding teams to ensure architectural design reinforces brand identity. This includes incorporating brand colors, materials, and design language into the architecture while meeting Florida's building requirements.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  Does custom design extend the project timeline?
                </h3>
                <p className="text-gray-600">
                  Bespoke design does require more design time than spec-level work—typically 2-4 additional months. However, design-build delivery allows construction to begin while design is being finalized, often recovering this time. The result is a custom building on a competitive overall schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Related Design Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready for Architecture That's Uniquely Yours?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how bespoke design can differentiate your commercial project in Tampa Bay's competitive market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Design Discussion
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
