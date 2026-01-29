import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Building, Leaf, Sun, Wind, Award, History, Shield, Zap } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Energy Efficiency in Historic Restoration in Tampa - Florida Construction Specialists",
  description: "Revitalize Tampa Bay's heritage with energy-efficient historic restoration. Expert renovations blending historic preservation with modern energy conservation.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Energy Efficiency in Historic Restoration in Tampa", href: "/energy-efficiency-in-historic-restoration-in-tampa/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/sustainable-building-materials-in-commercial-construction/", label: "Sustainable Building Materials" },
  { href: "/materials-for-historic-restoration-in-tampa/", label: "Historic Restoration Materials" },
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
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
            alt="Energy-efficient historic restoration in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Energy Efficiency in Historic Restoration in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Preserve Tampa Bay's architectural heritage while achieving modern energy performance. Florida Construction Specialists brings expertise in sustainable historic restoration that honors the past while reducing future operating costs.
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
              Tampa Bay's historic buildings represent irreplaceable cultural and architectural heritage—from the cigar factories of Ybor City to Mediterranean Revival landmarks in Hyde Park and the vernacular commercial buildings of downtown districts. These structures tell the story of our community's history, but they also face the challenge of meeting modern energy performance expectations while preserving their historic character. Florida Construction Specialists brings specialized expertise in energy-efficient historic restoration, helping property owners reduce operating costs and environmental impact without compromising the features that make these buildings historically significant.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The Case for Energy-Efficient Historic Restoration
            </h2>
            <p className="text-gray-600 mb-6">
              Historic buildings often present significant energy efficiency challenges. Many were built before air conditioning became standard, relying on passive design strategies that may have been abandoned in subsequent renovations. Original windows, while often beautiful, may provide minimal insulation. Older mechanical systems can consume 40-60% more energy than modern equipment. Yet these buildings also embody substantial "embodied carbon"—the energy already invested in their construction—making adaptive reuse inherently more sustainable than demolition and new construction.
            </p>
            <p className="text-gray-600 mb-6">
              Energy-efficient restoration addresses the operating cost challenges while capitalizing on the sustainability benefits of building reuse. A well-executed restoration can reduce energy consumption by 30-50% while maintaining or enhancing the building's historic character—often qualifying for both historic preservation tax credits and energy efficiency incentives.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Balancing Preservation and Performance
            </h2>
            <p className="text-gray-600 mb-6">
              The key to successful energy-efficient historic restoration lies in understanding which features are character-defining and must be preserved, and which elements can be modified without impacting historic significance. This requires careful analysis by professionals experienced in both historic preservation and building performance:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <History className="w-5 h-5" />
                  Typically Character-Defining
                </h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Original windows (often restorable)</li>
                  <li>• Facade materials and detailing</li>
                  <li>• Roofline and visible roof materials</li>
                  <li>• Primary entrance features</li>
                  <li>• Significant interior finishes</li>
                  <li>• Overall massing and proportions</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Often Modifiable
                </h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Mechanical and electrical systems</li>
                  <li>• Interior insulation (walls, floors, attics)</li>
                  <li>• Non-visible roof areas</li>
                  <li>• Secondary window retrofits</li>
                  <li>• Lighting systems</li>
                  <li>• Building automation and controls</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Energy Efficiency Strategies for Historic Buildings
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists employs a range of strategies to improve historic building performance while preserving character:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                <Wind className="w-6 h-6" />
                Historic Window Strategies
              </h3>
              <p className="text-gray-600 mb-4">Original windows are often the most significant character-defining feature—and one of the biggest energy concerns:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-brand-green-dark text-sm mb-2">Window Restoration</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Restore original sashes and frames</li>
                    <li>• Install weatherstripping</li>
                    <li>• Add interior storm windows</li>
                    <li>• Repair rather than replace</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-green-dark text-sm mb-2">Performance Enhancement</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Low-E interior storm panels</li>
                    <li>• Historically appropriate glazing</li>
                    <li>• Operable shading systems</li>
                    <li>• Window management protocols</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                <Building className="w-6 h-6" />
                Building Envelope Improvements
              </h3>
              <p className="text-gray-600 mb-4">Reducing heat gain through the building envelope is critical in Tampa's climate:</p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>Attic Insulation:</strong> Often the most impactful improvement—adding R-30 or higher insulation to attic spaces reduces cooling loads by 10-20%.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>Interior Wall Insulation:</strong> Blown-in insulation can be added through small holes, minimizing impact on historic finishes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>Air Sealing:</strong> Sealing penetrations, gaps, and cracks dramatically improves efficiency with no visual impact.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>Cool Roofing:</strong> On flat or low-visible roofs, reflective coatings reduce heat absorption without affecting character.</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                Mechanical System Upgrades
              </h3>
              <p className="text-gray-600 mb-4">Modern HVAC systems dramatically outperform vintage equipment:</p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>VRF Systems:</strong> Variable refrigerant flow systems provide zoned comfort with minimal ductwork—ideal for historic buildings where concealing ductwork is challenging.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>High-Efficiency Equipment:</strong> Modern chillers, boilers, and package units offer 30-50% efficiency improvements over older equipment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>Building Automation:</strong> Smart controls optimize system operation while providing occupant comfort in historic spaces.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Cost Comparison: Energy Upgrades in Historic Buildings
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Improvement</th>
                    <th className="px-6 py-3 text-left">Typical Cost</th>
                    <th className="px-6 py-3 text-left">Energy Savings</th>
                    <th className="px-6 py-3 text-left">Payback Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Attic Insulation (R-30)</td>
                    <td className="px-6 py-4">$1.50-3.00/SF</td>
                    <td className="px-6 py-4">10-20% HVAC</td>
                    <td className="px-6 py-4">2-4 years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Window Storm Panels</td>
                    <td className="px-6 py-4">$15-35/SF glass</td>
                    <td className="px-6 py-4">15-25% HVAC</td>
                    <td className="px-6 py-4">5-8 years</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">LED Lighting Upgrade</td>
                    <td className="px-6 py-4">$2-5/SF</td>
                    <td className="px-6 py-4">60-75% lighting</td>
                    <td className="px-6 py-4">1-3 years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">VRF HVAC System</td>
                    <td className="px-6 py-4">$25-45/SF</td>
                    <td className="px-6 py-4">30-50% HVAC</td>
                    <td className="px-6 py-4">6-10 years</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Building Automation</td>
                    <td className="px-6 py-4">$3-7/SF</td>
                    <td className="px-6 py-4">10-20% total</td>
                    <td className="px-6 py-4">3-5 years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Cool Roof Coating</td>
                    <td className="px-6 py-4">$2-5/SF roof</td>
                    <td className="px-6 py-4">5-15% HVAC</td>
                    <td className="px-6 py-4">3-6 years</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Available Incentives and Tax Credits
            </h2>
            <p className="text-gray-600 mb-6">
              Historic restoration projects can access multiple incentive programs that significantly reduce effective costs:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Incentive Program</th>
                    <th className="px-6 py-3 text-left">Benefit</th>
                    <th className="px-6 py-3 text-left">Requirements</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Federal Historic Tax Credit</td>
                    <td className="px-6 py-4">20% of qualified expenses</td>
                    <td className="px-6 py-4">National Register listed, income-producing</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Florida Historic Tax Credit</td>
                    <td className="px-6 py-4">20% of qualified expenses</td>
                    <td className="px-6 py-4">Florida Main Street or historic</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">179D Tax Deduction</td>
                    <td className="px-6 py-4">Up to $5.00/SF</td>
                    <td className="px-6 py-4">Energy-efficient improvements</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Utility Rebates (TECO)</td>
                    <td className="px-6 py-4">Varies by measure</td>
                    <td className="px-6 py-4">Qualifying efficiency improvements</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">PACE Financing</td>
                    <td className="px-6 py-4">100% financing</td>
                    <td className="px-6 py-4">Energy or resilience improvements</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Tampa Bay Historic Districts and Resources
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay features numerous historic districts and individual landmarks that benefit from energy-efficient restoration:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Ybor City National Historic Landmark District:</strong>
                  <span className="text-gray-600"> Cigar factories and commercial buildings with opportunities for adaptive reuse with modern efficiency.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Hyde Park Historic District:</strong>
                  <span className="text-gray-600"> Mediterranean Revival and bungalow architecture requiring sensitive restoration approaches.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Downtown Tampa:</strong>
                  <span className="text-gray-600"> Early 20th century commercial buildings with potential for office and mixed-use restoration.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Seminole Heights:</strong>
                  <span className="text-gray-600"> Craftsman and vernacular commercial buildings in a revitalizing neighborhood.</span>
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The Restoration Process: Our Approach
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists follows a structured approach to energy-efficient historic restoration:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <strong className="text-brand-green-dark">Historic Assessment:</strong>
                  <span className="text-gray-600"> Evaluate character-defining features, existing conditions, and preservation requirements.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <strong className="text-brand-green-dark">Energy Audit:</strong>
                  <span className="text-gray-600"> Conduct comprehensive energy analysis to identify opportunities and baseline performance.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <strong className="text-brand-green-dark">Strategy Development:</strong>
                  <span className="text-gray-600"> Create integrated plan balancing preservation with efficiency improvements.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                <div>
                  <strong className="text-brand-green-dark">Regulatory Coordination:</strong>
                  <span className="text-gray-600"> Work with State Historic Preservation Office for tax credit compliance if applicable.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center font-bold shrink-0">5</div>
                <div>
                  <strong className="text-brand-green-dark">Implementation:</strong>
                  <span className="text-gray-600"> Execute restoration with preservation-trained craftspeople and quality documentation.</span>
                </div>
              </li>
            </ul>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions About Historic Energy Efficiency
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Can I make energy improvements and still qualify for historic tax credits?
                  </h3>
                  <p className="text-gray-600">
                    Yes, many energy improvements are compatible with historic tax credit requirements. The key is ensuring improvements don't damage or obscure character-defining features. Interior insulation, mechanical upgrades, and lighting improvements are typically acceptable. Window treatments require careful approach—interior storm windows usually work, while replacement of original windows generally does not qualify. We coordinate with the State Historic Preservation Office to ensure compliance.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Should I restore or replace historic windows?
                  </h3>
                  <p className="text-gray-600">
                    In most cases, restoration with interior storm panels is preferred over replacement. Original windows can be restored to excellent condition with proper weatherstripping and glazing compound. High-quality interior storm windows with low-E glass can achieve thermal performance comparable to replacement windows while preserving the historic character that contributes to property value and tax credit eligibility.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How much can I realistically reduce energy costs in a historic building?
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive energy-efficient restoration typically achieves 30-50% reduction in energy consumption. The largest gains come from attic insulation, air sealing, and HVAC upgrades—improvements that often have minimal impact on historic character. LED lighting provides additional savings. Actual results depend on existing conditions and the extent of improvements, but most historic buildings offer significant efficiency improvement potential.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What historic tax credits are available in Florida?
                  </h3>
                  <p className="text-gray-600">
                    Income-producing historic buildings listed on the National Register (or contributing to a listed district) can qualify for a 20% federal historic tax credit. Florida also offers a 20% state historic tax credit for properties in Florida Main Street areas or listed as Florida Heritage landmarks. Combined with energy efficiency incentives like the 179D deduction and utility rebates, these credits can significantly reduce project costs.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Can solar panels be installed on historic buildings?
                  </h3>
                  <p className="text-gray-600">
                    Solar is often possible on historic buildings when thoughtfully integrated. Panels can typically be installed on flat roofs not visible from street level, on rear roof slopes, or on adjacent structures. Ground-mount or parking structure solar is another option. The State Historic Preservation Office provides guidance on acceptable solar installations for tax credit projects. Modern low-profile panels and building-integrated options expand possibilities.
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
            Ready to Restore Your Historic Building?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss energy-efficient restoration for your Tampa Bay historic property.
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
