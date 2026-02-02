import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Award, Building, Leaf, Sun, Droplets, Users, TrendingUp, DollarSign } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Construction in Florida: Leading the Way with LEED Certification",
  description: "Florida Construction Specialists leads Tampa Bay in LEED-certified commercial construction. Expert guidance through all LEED certification levels with proven results.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Leading the Way with LEED Certification", href: "/construction-florida-leading-way-leed-certification/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/sustainable-building-materials-in-commercial-construction/", label: "Sustainable Building Materials" },
  { href: "/zero-net-energy-boosting-commercial-construction/", label: "Zero Net Energy Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="LEED certified commercial construction in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Florida Construction Specialists: Leading the Way with LEED Certification
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            As Tampa Bay's premier LEED-experienced contractor, Florida Construction Specialists delivers certified green buildings that reduce operating costs, attract quality tenants, and demonstrate environmental leadership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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

      {/* Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              LEED (Leadership in Energy and Environmental Design) has become the global benchmark for sustainable building, and Florida Construction Specialists has positioned itself at the forefront of LEED-certified construction in Tampa Bay. With a team that includes LEED-accredited professionals and a portfolio of successful certified projects, we bring the expertise necessary to guide commercial developments from concept through certification—delivering buildings that perform better, cost less to operate, and command premium market values.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Understanding LEED Certification for Commercial Buildings
            </h2>
            <p className="text-gray-600 mb-6">
              LEED is the most widely used green building rating system in the world, providing a comprehensive framework for designing, constructing, and operating high-performance buildings. Developed by the U.S. Green Building Council (USGBC), LEED evaluates buildings across multiple categories including energy efficiency, water conservation, materials selection, indoor environmental quality, and site sustainability.
            </p>
            <p className="text-gray-600 mb-6">
              For Tampa Bay commercial property owners, LEED certification offers tangible benefits: documented operating cost reductions, enhanced marketability, higher occupancy rates, and access to incentives. LEED-certified buildings in Florida markets consistently outperform conventional buildings on key metrics, making certification an investment that delivers measurable returns.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              LEED Certification Levels and Requirements
            </h2>
            <p className="text-gray-600 mb-6">
              LEED certification operates on a points-based system, with projects earning credits across categories. Florida Construction Specialists helps clients target the certification level that best aligns with their goals and budget:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Certification Level</th>
                    <th className="px-6 py-3 text-left">Points Required</th>
                    <th className="px-6 py-3 text-left">Cost Premium</th>
                    <th className="px-6 py-3 text-left">Typical ROI Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">LEED Certified</td>
                    <td className="px-6 py-4">40-49 points</td>
                    <td className="px-6 py-4">0-2%</td>
                    <td className="px-6 py-4">2-4 years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">LEED Silver</td>
                    <td className="px-6 py-4">50-59 points</td>
                    <td className="px-6 py-4">2-4%</td>
                    <td className="px-6 py-4">3-5 years</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">LEED Gold</td>
                    <td className="px-6 py-4">60-79 points</td>
                    <td className="px-6 py-4">3-6%</td>
                    <td className="px-6 py-4">4-7 years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">LEED Platinum</td>
                    <td className="px-6 py-4">80+ points</td>
                    <td className="px-6 py-4">5-10%</td>
                    <td className="px-6 py-4">5-10 years</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              LEED Credit Categories
            </h2>
            <p className="text-gray-600 mb-6">
              LEED evaluates buildings across multiple sustainability dimensions. Florida Construction Specialists brings expertise in earning credits across all categories:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Sustainable Sites (16 points)
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Minimizing construction impact and maximizing site sustainability:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Site selection and development density</li>
                  <li>• Alternative transportation access</li>
                  <li>• Stormwater management</li>
                  <li>• Heat island reduction</li>
                  <li>• Light pollution reduction</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Droplets className="w-5 h-5" />
                  Water Efficiency (10 points)
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Reducing potable water consumption:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Water-efficient landscaping</li>
                  <li>• Indoor water use reduction</li>
                  <li>• Innovative wastewater technologies</li>
                  <li>• Water metering and monitoring</li>
                  <li>• Cooling tower water management</li>
                </ul>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Sun className="w-5 h-5" />
                  Energy & Atmosphere (35 points)
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Maximizing energy performance:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Optimize energy performance</li>
                  <li>• On-site renewable energy</li>
                  <li>• Enhanced commissioning</li>
                  <li>• Green power procurement</li>
                  <li>• Advanced energy metering</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  Materials & Resources (14 points)
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Sustainable material selection and waste management:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Building life-cycle impact reduction</li>
                  <li>• Construction waste management</li>
                  <li>• Recycled content materials</li>
                  <li>• Regional materials</li>
                  <li>• Rapidly renewable materials</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The Business Case for LEED in Florida
            </h2>
            <p className="text-gray-600 mb-6">
              LEED certification delivers measurable financial benefits for Tampa Bay commercial properties:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">25-35%</div>
                <div className="text-sm text-gray-600">Lower Energy Costs</div>
                <div className="text-xs text-gray-500">vs. conventional buildings</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">11%</div>
                <div className="text-sm text-gray-600">Higher Rent Premium</div>
                <div className="text-xs text-gray-500">average in Florida markets</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">16%</div>
                <div className="text-sm text-gray-600">Better Occupancy</div>
                <div className="text-xs text-gray-500">LEED vs. conventional</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida Green Building Incentives
            </h2>
            <p className="text-gray-600 mb-6">
              Multiple incentives make LEED certification more financially attractive for Tampa Bay projects:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Incentive</th>
                    <th className="px-6 py-3 text-left">Value</th>
                    <th className="px-6 py-3 text-left">Application</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">179D Tax Deduction</td>
                    <td className="px-6 py-4">Up to $5.00/sq ft</td>
                    <td className="px-6 py-4">Energy-efficient commercial buildings</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Solar Investment Tax Credit</td>
                    <td className="px-6 py-4">30% of system cost</td>
                    <td className="px-6 py-4">On-site solar installations</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Tampa Expedited Permitting</td>
                    <td className="px-6 py-4">50% faster review</td>
                    <td className="px-6 py-4">LEED-registered projects</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">TECO Commercial Rebates</td>
                    <td className="px-6 py-4">Varies by measure</td>
                    <td className="px-6 py-4">Lighting, HVAC, controls</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">PACE Financing</td>
                    <td className="px-6 py-4">100% financing</td>
                    <td className="px-6 py-4">Qualifying energy improvements</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Our LEED Certification Process
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists provides comprehensive LEED support from initial planning through final certification:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Pre-Design Phase:</strong>
                  <span className="text-gray-600"> We analyze your project goals, budget, and site to identify the optimal LEED pathway and target certification level. Early engagement ensures sustainability is integrated from the start.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Design Phase:</strong>
                  <span className="text-gray-600"> Our team coordinates with architects and engineers to incorporate LEED credits into the design, optimizing the balance between certification points and construction costs.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Construction Phase:</strong>
                  <span className="text-gray-600"> We implement LEED requirements throughout construction: waste management, indoor air quality protocols, material documentation, and commissioning preparation.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Documentation & Certification:</strong>
                  <span className="text-gray-600"> We compile all required documentation, coordinate the commissioning process, and manage the GBCI certification review to achieve your target certification level.</span>
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              LEED for Different Building Types
            </h2>
            <p className="text-gray-600 mb-6">
              LEED offers rating systems tailored to different project types. Florida Construction Specialists has experience with:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  LEED BD+C (Building Design & Construction)
                </h4>
                <p className="text-gray-600 text-sm mb-2">For new construction and major renovations:</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• New Construction</li>
                  <li>• Core & Shell</li>
                  <li>• Healthcare</li>
                  <li>• Retail</li>
                  <li>• Hospitality</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  LEED ID+C (Interior Design & Construction)
                </h4>
                <p className="text-gray-600 text-sm mb-2">For tenant improvements and fit-outs:</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Commercial Interiors</li>
                  <li>• Retail</li>
                  <li>• Hospitality</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida Green Building Coalition Alternative
            </h2>
            <p className="text-gray-600 mb-6">
              For some projects, the Florida Green Building Coalition (FGBC) certification offers an alternative tailored specifically to Florida's climate and building practices. FGBC addresses Florida-specific issues like hurricane resistance and humidity management, often at lower certification costs. Florida Construction Specialists can advise on whether LEED, FGBC, or both certifications best serve your project goals.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Why Choose Florida Construction Specialists for LEED Projects?
            </h2>
            <p className="text-gray-600 mb-6">
              Our LEED expertise translates to successful, cost-effective certifications:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Award className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>LEED-Accredited Staff:</strong> Our team includes LEED professionals who understand the certification process inside and out.</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Proven Track Record:</strong> Multiple successful LEED certifications across building types in Tampa Bay.</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Integrated Approach:</strong> We coordinate all aspects of LEED from design through certification.</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Cost Optimization:</strong> We identify the most cost-effective path to your target certification level.</span>
              </li>
            </ul>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions About LEED Certification
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How much does LEED certification add to construction costs?
                  </h3>
                  <p className="text-gray-600">
                    The cost premium for LEED varies by certification level: LEED Certified typically adds 0-2%, Silver adds 2-4%, Gold adds 3-6%, and Platinum adds 5-10%. However, available incentives (179D deduction, utility rebates, expedited permitting) often offset much of this premium. The long-term operating cost savings and enhanced property values typically deliver strong ROI within 3-7 years.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How long does the LEED certification process take?
                  </h3>
                  <p className="text-gray-600">
                    LEED certification runs parallel to the design and construction process, not sequentially. Design credits are submitted during design; construction credits are documented during construction. After project completion, the final certification review by GBCI typically takes 4-8 weeks for standard review, or faster with expedited review options. Overall, LEED doesn't significantly extend project timelines.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Which LEED level should my project target?
                  </h3>
                  <p className="text-gray-600">
                    The optimal certification level depends on your budget, goals, and building type. LEED Certified and Silver are achievable with minimal cost premium and good practices. Gold represents the "sweet spot" for many commercial projects, delivering strong market recognition with reasonable investment. Platinum requires significant commitment but provides maximum differentiation. We analyze each project to recommend the optimal target.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Can existing buildings achieve LEED certification?
                  </h3>
                  <p className="text-gray-600">
                    Yes, LEED offers pathways for existing buildings. LEED O+M (Operations & Maintenance) certifies existing buildings based on ongoing performance. LEED ID+C certifies interior renovations and tenant improvements. Major renovations can use LEED BD+C. Florida Construction Specialists can evaluate your existing building's certification potential.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How do I maintain LEED certification after the building opens?
                  </h3>
                  <p className="text-gray-600">
                    Initial LEED certification doesn't require ongoing recertification, though the building should maintain the practices that earned certification. For buildings seeking ongoing recognition, LEED O+M provides a pathway for performance-based recertification. We provide transition documentation to help facility managers maintain sustainable operations.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Achieve LEED Certification?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists today to discuss LEED certification for your Tampa Bay commercial project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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
