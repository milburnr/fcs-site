import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Palette, Building2, Users, Lightbulb, TrendingUp, Layout } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Commercial Interior Design in Tampa | Office & Retail Design Services",
  description: "Transform your Tampa Bay commercial space with expert interior design. Office space planning, retail design, healthcare interiors, and hospitality environments that enhance business performance.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Interior Design in Tampa", href: "/commercial-interior-design-in-tampa/" },
];

const internalLinks = [
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvement Services" },
  { href: "/bespoke-architectural-design-in-tampa/", label: "Bespoke Architectural Design" },
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const designServices = [
  {
    icon: Layout,
    title: "Space Planning",
    description: "Strategic layouts that optimize workflow, maximize usable square footage, and support your operational goals.",
  },
  {
    icon: Palette,
    title: "Material Selection",
    description: "Curated finishes, furniture, and fixtures that balance aesthetics, durability, and budget for commercial environments.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description: "Illumination strategies that enhance productivity, create ambiance, and reduce energy costs in Tampa's climate.",
  },
  {
    icon: Users,
    title: "Workplace Strategy",
    description: "Evidence-based design that supports collaboration, focus work, and employee wellbeing in modern work environments.",
  },
];

const industrySpecializations = [
  {
    industry: "Corporate Offices",
    trends: "Hybrid work support, collaboration zones, wellness amenities, biophilic design",
    sqftRange: "5,000 - 100,000+ SF",
    costRange: "$45-$150/SF",
  },
  {
    industry: "Medical/Healthcare",
    trends: "Patient experience focus, infection control, telehealth integration, calming environments",
    sqftRange: "2,000 - 50,000 SF",
    costRange: "$75-$200/SF",
  },
  {
    industry: "Retail/Restaurant",
    trends: "Instagram-worthy moments, flexible displays, enhanced customer journey, brand immersion",
    sqftRange: "1,000 - 20,000 SF",
    costRange: "$60-$250/SF",
  },
  {
    industry: "Hospitality",
    trends: "Experiential design, local character, technology integration, sustainability focus",
    sqftRange: "2,500 - 75,000 SF",
    costRange: "$100-$350/SF",
  },
];

const designTrends = [
  {
    trend: "Biophilic Design",
    description: "Incorporating natural elements—plants, natural light, organic materials—to improve wellbeing and productivity",
    impact: "Studies show 15% higher productivity and 6% less sick time",
  },
  {
    trend: "Activity-Based Working",
    description: "Varied spaces supporting different work modes: focus areas, collaboration zones, social spaces",
    impact: "Improved space utilization and employee satisfaction",
  },
  {
    trend: "Sustainable Materials",
    description: "Low-VOC finishes, recycled content, locally-sourced materials, and energy-efficient systems",
    impact: "LEED credits, lower operating costs, and brand alignment",
  },
  {
    trend: "Technology Integration",
    description: "Seamless AV systems, wireless charging, smart lighting, and touchless interfaces",
    impact: "Enhanced collaboration and reduced friction in daily operations",
  },
];

const costBreakdown = [
  { category: "Space Planning & Design", percentage: "5-8%", description: "Conceptual through construction documents" },
  { category: "Furniture & Fixtures", percentage: "25-35%", description: "Desks, seating, storage, specialty items" },
  { category: "Finishes", percentage: "15-25%", description: "Flooring, wall treatments, ceilings" },
  { category: "Lighting", percentage: "8-12%", description: "Fixtures, controls, specialty lighting" },
  { category: "MEP Systems", percentage: "20-30%", description: "HVAC, electrical, plumbing modifications" },
  { category: "Construction", percentage: "15-25%", description: "Walls, doors, millwork, general conditions" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Commercial Interior Design in Tampa"
        description="Transform your Tampa Bay commercial space with expert interior design services."
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Commercial interior design services in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Commercial Interior Design in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Strategic interior design that transforms commercial spaces into high-performing environments. From modern offices to healthcare facilities, we create interiors that work as hard as you do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Start Your Design Project
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
              Interior Design That Drives Business Results
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                Commercial interior design isn't about aesthetics alone—it's a strategic investment that impacts employee productivity, customer experience, brand perception, and ultimately your bottom line. In Tampa Bay's competitive business environment, thoughtful interior design creates measurable advantages.
              </p>
              <p className="text-gray-600 mb-6">
                Research consistently demonstrates the ROI of good design. A Cornell study found that improved office lighting increases productivity by 2%. The World Green Building Council reports that enhanced indoor air quality reduces sick time by 35%. Retail environments designed with customer journey in mind see conversion rate improvements of 10-15%. These aren't soft benefits—they're quantifiable returns on design investment.
              </p>
              <p className="text-gray-600 mb-6">
                At Florida Construction Specialists, our interior design services are integrated with construction expertise. This means designs that aren't just beautiful on paper but built efficiently within budget. When designers and builders collaborate from the start, you avoid the costly surprises that occur when design intent meets construction reality.
              </p>
              <p className="text-gray-600 mb-8">
                Tampa Bay's diverse commercial market demands versatile interior design capabilities. We've designed medical offices that put patients at ease, corporate headquarters that attract top talent, retail environments that drive sales, and hospitality spaces that create memorable experiences. Each project type has unique requirements—and we bring specific expertise to each.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Comprehensive Interior Design Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            From initial concept through final installation, our interior design services address every aspect of your commercial space.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tampa Design Trends */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Commercial Design Trends Shaping Tampa's Business Landscape
            </h2>
            
            <div className="space-y-6">
              {designTrends.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <TrendingUp className="w-8 h-8 text-brand-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{item.trend}</h3>
                      <p className="text-gray-600 mb-2">{item.description}</p>
                      <p className="text-brand-green font-semibold text-sm">Impact: {item.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Specializations */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Interior Design by Industry
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Every industry has unique interior design requirements. Here's what we typically see in the Tampa Bay market.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Industry</th>
                    <th className="px-6 py-4 text-left font-heading">Current Trends</th>
                    <th className="px-6 py-4 text-left font-heading">Typical Size</th>
                    <th className="px-6 py-4 text-left font-heading">Cost Range*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {industrySpecializations.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.industry}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{row.trends}</td>
                      <td className="px-6 py-4 text-gray-600">{row.sqftRange}</td>
                      <td className="px-6 py-4 text-brand-green font-semibold">{row.costRange}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              *Cost per square foot for complete interior buildout including design, construction, and FF&E.
            </p>
          </div>
        </div>
      </section>

      {/* Tampa-Specific Considerations */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Designing for Tampa Bay's Unique Environment
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Climate Considerations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Materials that resist humidity and temperature fluctuations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">UV-resistant fabrics and finishes near windows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">HVAC zoning for varying occupancy patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Indoor-outdoor transitions that manage heat gain</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Local Market Factors</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Designs that attract Tampa's growing tech workforce</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Healthcare environments for an aging population</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Retail that competes with e-commerce through experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Restaurant design for Tampa's vibrant dining scene</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Understanding Interior Design Budget Allocation
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Here's how commercial interior design budgets typically break down across project categories.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {costBreakdown.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="text-3xl font-bold text-brand-green mb-2">{item.percentage}</div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2 font-heading">{item.category}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
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
                  How long does commercial interior design take?
                </h3>
                <p className="text-gray-600">
                  Design timelines depend on project scope. Space planning and schematic design typically takes 3-4 weeks. Design development adds another 4-6 weeks. Construction documents require 4-8 weeks. Total design time is usually 3-5 months for a typical office or retail project, with construction adding another 2-6 months depending on scope.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  Do you handle furniture selection and procurement?
                </h3>
                <p className="text-gray-600">
                  Yes. We provide complete FF&E (furniture, fixtures, and equipment) services including selection, specification, procurement, and installation coordination. We work with major commercial furniture manufacturers and can leverage dealer relationships for competitive pricing on quality products.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How do you ensure the design works for our specific operations?
                </h3>
                <p className="text-gray-600">
                  We begin every project with thorough programming that documents your workflows, space needs, adjacency requirements, and growth projections. For offices, this includes staff counts by department and work style analysis. For retail, it includes customer journey mapping. This data-driven approach ensures designs support real operational needs.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  Can you design within our existing shell space?
                </h3>
                <p className="text-gray-600">
                  Absolutely. Many of our projects are tenant improvements within existing buildings. We evaluate your space's infrastructure (electrical capacity, HVAC, structural grid) and design interior environments that work within those constraints while maximizing the space's potential.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How do you handle ADA compliance in commercial interiors?
                </h3>
                <p className="text-gray-600">
                  ADA compliance is integrated into every design decision, not an afterthought. This includes accessible routes, restroom configurations, counter heights, door hardware, and signage. For certain facilities like healthcare, additional accessibility requirements apply. Our designs always meet or exceed code requirements.
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
            title="Related Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Transform Your Commercial Space?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how strategic interior design can enhance your business performance in Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Design Consultation
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
