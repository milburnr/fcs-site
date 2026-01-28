import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Leaf, Building, Users, TrendingUp, Award, Sun, Droplets, TreePine } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Sustainable Urban Development in Tampa - Florida Construction Specialists",
  description: "Leading sustainable urban development in Tampa Bay with green building practices, LEED certification, and eco-friendly commercial construction solutions.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Sustainable Urban Development in Tampa", href: "/sustainable-urban-development-in-tampa/" },
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
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Sustainable urban development construction in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Sustainable Urban Development in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Transform Tampa Bay's urban landscape with sustainable development practices. Florida Construction Specialists leads the way in green building, LEED certification, and eco-conscious commercial construction.
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
              Tampa Bay stands at the forefront of Florida's sustainable urban development movement. As the region experiences unprecedented growth—with population expected to exceed 4 million by 2030—the need for sustainable construction practices has never been more critical. Florida Construction Specialists is leading this transformation, delivering commercial projects that balance economic development with environmental stewardship, creating vibrant, resilient urban spaces throughout Tampa, Lakeland, Sarasota, and the surrounding communities.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The Importance of Sustainable Urban Development in Tampa
            </h2>
            <p className="text-gray-600 mb-6">
              Sustainable urban development goes beyond individual green buildings—it encompasses how we plan, design, and construct entire communities. Tampa Bay faces unique challenges that make sustainable development essential: rising sea levels threatening coastal properties, increasing hurricane intensity, urban heat island effects, and the need to protect critical ecosystems like Tampa Bay's estuary system. Sustainable development addresses these challenges while creating economic opportunities and improving quality of life for residents and businesses.
            </p>
            <p className="text-gray-600 mb-6">
              The business case for sustainable urban development in Tampa is compelling. Properties in sustainably developed areas command 10-20% higher values, experience lower vacancy rates, and attract quality tenants seeking alignment with their environmental values. Major employers increasingly locate in sustainable developments to attract talent—particularly millennials and Gen Z workers who prioritize sustainability when choosing employers.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Key Components of Sustainable Urban Development
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Smart Land Use Planning
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Sustainable development maximizes land use efficiency:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Mixed-use developments reducing commute needs</li>
                  <li>• Infill development revitalizing existing areas</li>
                  <li>• Transit-oriented development near public transit</li>
                  <li>• Preservation of green spaces and natural areas</li>
                  <li>• Brownfield redevelopment and remediation</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <TreePine className="w-5 h-5" />
                  Green Infrastructure
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Natural systems that provide urban services:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Urban tree canopy for cooling and air quality</li>
                  <li>• Bioswales and rain gardens for stormwater</li>
                  <li>• Permeable surfaces reducing runoff</li>
                  <li>• Green corridors connecting natural areas</li>
                  <li>• Living shorelines protecting waterfront</li>
                </ul>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Sun className="w-5 h-5" />
                  Energy-Efficient Buildings
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  High-performance construction reducing energy demand:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• LEED and FGBC certified buildings</li>
                  <li>• Solar-ready and solar-equipped structures</li>
                  <li>• Cool roofing and reflective surfaces</li>
                  <li>• High-efficiency HVAC systems</li>
                  <li>• Smart building automation</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Droplets className="w-5 h-5" />
                  Water Management
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Protecting Tampa Bay's water resources:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Low-impact development techniques</li>
                  <li>• Water-efficient landscaping</li>
                  <li>• Reclaimed water systems</li>
                  <li>• Flood-resilient construction</li>
                  <li>• Stormwater treatment and reuse</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Tampa Bay's Sustainable Development Initiatives
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay is home to numerous sustainable development initiatives that create opportunities for commercial construction:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Tampa Bay Regional Planning Council:</strong>
                  <span className="text-gray-600"> Coordinates sustainable development across the seven-county region, with green building initiatives and resiliency planning.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">City of Tampa Green Building Program:</strong>
                  <span className="text-gray-600"> Offers expedited permitting and fee reductions for LEED-certified commercial projects.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Hillsborough County Sustainability Program:</strong>
                  <span className="text-gray-600"> Supports commercial green building through incentives and technical assistance.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Tampa Bay Estuary Program:</strong>
                  <span className="text-gray-600"> Partners on developments protecting water quality and coastal ecosystems.</span>
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              LEED Certification for Urban Development Projects
            </h2>
            <p className="text-gray-600 mb-6">
              LEED (Leadership in Energy and Environmental Design) provides the framework for sustainable urban development. Beyond individual building certification, LEED for Neighborhood Development (LEED-ND) addresses entire districts and communities. Florida Construction Specialists brings LEED expertise to every project, helping Tampa Bay developers achieve certification and its associated benefits.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">LEED Level</th>
                    <th className="px-6 py-3 text-left">Points Required</th>
                    <th className="px-6 py-3 text-left">Rent Premium</th>
                    <th className="px-6 py-3 text-left">Value Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">LEED Certified</td>
                    <td className="px-6 py-4">40-49 points</td>
                    <td className="px-6 py-4">5-8%</td>
                    <td className="px-6 py-4">8-12%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">LEED Silver</td>
                    <td className="px-6 py-4">50-59 points</td>
                    <td className="px-6 py-4">8-12%</td>
                    <td className="px-6 py-4">12-16%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">LEED Gold</td>
                    <td className="px-6 py-4">60-79 points</td>
                    <td className="px-6 py-4">12-18%</td>
                    <td className="px-6 py-4">16-22%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">LEED Platinum</td>
                    <td className="px-6 py-4">80+ points</td>
                    <td className="px-6 py-4">18-25%</td>
                    <td className="px-6 py-4">22-30%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Green Building Incentives in Florida
            </h2>
            <p className="text-gray-600 mb-6">
              Florida offers numerous incentives that make sustainable urban development financially attractive:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Incentive Program</th>
                    <th className="px-6 py-3 text-left">Benefit</th>
                    <th className="px-6 py-3 text-left">Eligibility</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Federal 179D Deduction</td>
                    <td className="px-6 py-4">Up to $5.00/sq ft</td>
                    <td className="px-6 py-4">Energy-efficient commercial buildings</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Solar Investment Tax Credit</td>
                    <td className="px-6 py-4">30% of system cost</td>
                    <td className="px-6 py-4">Solar installations</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">PACE Financing</td>
                    <td className="px-6 py-4">100% financing, property assessed</td>
                    <td className="px-6 py-4">Qualifying improvements</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Tampa Expedited Permitting</td>
                    <td className="px-6 py-4">50% faster review</td>
                    <td className="px-6 py-4">LEED-certified projects</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Utility Rebates (TECO/Duke)</td>
                    <td className="px-6 py-4">Varies by measure</td>
                    <td className="px-6 py-4">Efficiency improvements</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Sustainable Commercial Construction Practices
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists implements sustainable practices throughout the construction process:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  Pre-Construction Phase
                </h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Site assessment for environmental impact</li>
                  <li>• Energy modeling and optimization</li>
                  <li>• LEED pathway analysis</li>
                  <li>• Sustainable material specification</li>
                  <li>• Local sourcing identification</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Construction Phase
                </h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• 90%+ construction waste recycling</li>
                  <li>• Erosion and sediment control</li>
                  <li>• Indoor air quality management</li>
                  <li>• Low-emission equipment use</li>
                  <li>• Documentation for LEED</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Climate Resilience in Urban Development
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay's exposure to hurricanes, flooding, and sea level rise makes climate resilience essential to sustainable urban development. Our approach integrates resilience with sustainability:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Hurricane-Resistant Construction:</strong> Building beyond code minimums with reinforced structures, impact-resistant glazing, and wind-rated assemblies that protect investments during storms.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Flood Adaptation:</strong> Elevated construction, flood-resistant materials, and site design that manages water effectively in Tampa Bay's flood-prone areas.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Heat Island Mitigation:</strong> Cool roofing, reflective paving, and urban tree canopy that reduce ambient temperatures in developed areas.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Energy Independence:</strong> Solar plus storage systems providing resilience during grid outages following major storms.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Economic Impact of Sustainable Development
            </h2>
            <p className="text-gray-600 mb-6">
              Sustainable urban development drives economic benefits throughout Tampa Bay:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">$2.3B</div>
                <div className="text-sm text-gray-600">Annual Green Building Activity</div>
                <div className="text-xs text-gray-500">in Tampa Bay</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">15,000+</div>
                <div className="text-sm text-gray-600">Green Jobs Created</div>
                <div className="text-xs text-gray-500">in the region</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">25%</div>
                <div className="text-sm text-gray-600">Lower Operating Costs</div>
                <div className="text-xs text-gray-500">for green buildings</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Partner with Tampa Bay's Sustainable Development Leader
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists brings comprehensive expertise to sustainable urban development projects throughout Tampa Bay. Our team includes LEED-accredited professionals who understand how to integrate sustainability, resilience, and economic performance. Whether you're developing a single commercial building or a multi-phase mixed-use community, we deliver sustainable construction that creates lasting value.
            </p>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions About Sustainable Urban Development
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How much does sustainable construction add to project costs?
                  </h3>
                  <p className="text-gray-600">
                    The cost premium for sustainable construction has declined significantly and now typically ranges from 0-5% for most commercial projects. When factoring in available incentives (179D deduction, solar ITC, utility rebates), the net premium is often negligible. More importantly, sustainable buildings deliver 20-30% lower operating costs, higher rents, and better occupancy—typically recovering any additional investment within 3-7 years.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What is LEED-ND certification and how does it apply to developments?
                  </h3>
                  <p className="text-gray-600">
                    LEED for Neighborhood Development (LEED-ND) certifies entire districts or communities rather than individual buildings. It evaluates smart location and linkage, neighborhood pattern and design, and green infrastructure. LEED-ND certification signals to tenants, investors, and the community that a development has been designed and built to the highest sustainability standards, enhancing marketability and long-term value.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How does sustainable development address Tampa's flood and hurricane risks?
                  </h3>
                  <p className="text-gray-600">
                    Sustainable urban development integrates resilience as a core principle. This includes building above base flood elevation, using flood-resistant materials at lower levels, designing structures to exceed wind load requirements, and incorporating features like hurricane-rated glazing and reinforced connections. Green infrastructure elements like rain gardens and permeable surfaces also reduce flooding by managing stormwater naturally.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What incentives are available for sustainable development in Tampa?
                  </h3>
                  <p className="text-gray-600">
                    Tampa Bay offers numerous incentives: the federal 179D deduction (up to $5/sq ft for energy-efficient buildings), 30% solar Investment Tax Credit, PACE financing for energy improvements, City of Tampa expedited permitting for LEED projects, and utility rebates from TECO and Duke Energy. Our team helps identify and maximize available incentives for every project.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How long does LEED certification add to the project timeline?
                  </h3>
                  <p className="text-gray-600">
                    LEED certification doesn't significantly extend construction timelines—sustainable practices are integrated into our standard approach. The documentation process runs parallel to construction, with final certification typically occurring 3-6 months after completion. Early planning for LEED ensures requirements are incorporated from design through construction, avoiding delays.
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
            Ready to Build Sustainably in Tampa Bay?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists today to discuss your sustainable urban development project.
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
