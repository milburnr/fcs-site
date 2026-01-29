import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Eco-Friendly Historic Restoration Techniques in Tampa | Sustainable Preservation",
  description: "Discover sustainable historic restoration in Tampa. Learn how preservation conserves embodied energy, combines with LEED certification, and qualifies for tax credits.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Eco-Friendly Historic Restoration Techniques in Tampa", href: "/eco-friendly-historic-restoration-techniques-in-tampa/" },
];


const internalLinks = [
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
  { href: "/services/historic-restoration/shpo-compliance/", label: "SHPO Compliance" },
  { href: "/services/historic-restoration/historic-tax-credits/", label: "Historic Tax Credits" },
  { href: "/services/historic-restoration/material-sourcing/", label: "Historic Material Sourcing" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/historic-preservation/historic-preservation-large.webp"
            alt="Sustainable historic restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Eco-Friendly Historic Restoration Techniques in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            &quot;The greenest building is the one that is already built.&quot; Discover how sustainable historic restoration in Tampa preserves cultural heritage while advancing environmental goals.
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
            
              <p className="text-gray-600 mb-6">
                Historic preservation and sustainable building practices share a fundamental principle: maximizing the value of existing resources. When we restore a historic building in Tampa—whether a Mediterranean Revival landmark in Hyde Park or a vernacular cigar factory in Ybor City—we preserve not only cultural heritage but also the enormous environmental investment embodied in that structure. The phrase &quot;the greenest building is the one that is already built,&quot; coined by architect Carl Elefante, captures this powerful intersection of preservation and sustainability.
              </p>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists integrates sustainable practices throughout our historic restoration projects, helping property owners achieve environmental objectives while meeting the Secretary of the Interior&apos;s Standards for Rehabilitation. From maximizing the performance of original building features to integrating modern high-efficiency systems, our approach demonstrates that historic preservation and green building are not competing goals—they are complementary strategies.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                The Environmental Case for Historic Preservation
              </h2>
              
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Understanding Embodied Energy
              </h3>
              <p className="text-gray-600 mb-6">
                Embodied energy refers to the total energy required to extract, manufacture, transport, and assemble building materials—plus the energy consumed in maintaining and eventually demolishing the structure. When a historic building is demolished, all of that embodied energy is lost, and new energy must be expended to construct a replacement. The Preservation Green Lab study &quot;The Greenest Building: Quantifying the Environmental Value of Building Reuse&quot; found that it takes 10-80 years for a new energy-efficient building to overcome the negative climate change impacts created through construction.
              </p>

              <p className="text-gray-600 mb-6">
                Tampa&apos;s historic buildings represent significant stores of embodied energy:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Brick and masonry:</strong> Extremely energy-intensive to produce, with embodied energy of approximately 2,000-3,500 MJ per cubic meter</li>
                <li><strong>Old-growth lumber:</strong> Irreplaceable heart pine and cypress that required centuries to develop</li>
                <li><strong>Clay roof tiles:</strong> Kiln-fired materials with significant embodied energy and exceptional durability</li>
                <li><strong>Historic metals:</strong> Copper, cast iron, and wrought iron elements with high energy costs for extraction and processing</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Waste Reduction Through Rehabilitation
              </h3>
              <p className="text-gray-600 mb-6">
                The EPA estimates that building construction and demolition generate approximately 600 million tons of debris annually in the United States—nearly double the amount of municipal solid waste. Historic rehabilitation dramatically reduces this waste stream by preserving existing materials in place. Even when materials must be removed, thoughtful deconstruction allows for salvage and reuse rather than landfill disposal.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Inherent Sustainable Features of Historic Buildings
              </h2>
              <p className="text-gray-600 mb-6">
                Tampa&apos;s historic buildings were designed and constructed during an era before mechanical air conditioning and cheap energy. As a result, they incorporate passive design strategies that remain effective today:
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Climate-Responsive Design
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Deep porches and overhangs:</strong> Shade windows and walls from direct sun, reducing cooling loads</li>
                <li><strong>Operable windows:</strong> Enable cross-ventilation and natural cooling during temperate periods</li>
                <li><strong>High ceilings:</strong> Allow hot air to rise above occupied zones</li>
                <li><strong>Transom windows:</strong> Provide ventilation while maintaining privacy</li>
                <li><strong>Light-colored exterior surfaces:</strong> Reflect solar radiation, reducing heat gain</li>
                <li><strong>Thick masonry walls:</strong> Provide thermal mass that moderates interior temperature swings</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Durable, Long-Lasting Materials
              </h3>
              <p className="text-gray-600 mb-6">
                Historic buildings utilized materials of exceptional quality and durability. Old-growth heart pine, properly maintained, can last indefinitely. Historic brick and terra cotta, when protected from moisture intrusion, serve for centuries. Compare this to modern materials with design lives of 20-40 years, and the sustainability advantage of preservation becomes clear.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Sustainable Restoration Techniques
              </h2>
              
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Historic Window Restoration vs. Replacement
              </h3>
              <p className="text-gray-600 mb-6">
                Original wood windows are frequently targeted for replacement in the name of energy efficiency. However, studies demonstrate that properly restored historic windows with weatherstripping and storm windows can achieve energy performance comparable to replacement windows—while preserving original materials, maintaining historic character, and avoiding the environmental impact of manufacturing new windows.
              </p>
              
              <p className="text-gray-600 mb-6">
                Our window restoration approach includes:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Repairing and consolidating original wood sashes</li>
                <li>Installing quality weatherstripping to reduce air infiltration</li>
                <li>Adding interior or exterior storm windows compatible with historic character</li>
                <li>Restoring original hardware and counterweight systems</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Sustainable Insulation Strategies
              </h3>
              <p className="text-gray-600 mb-6">
                Adding insulation to historic buildings requires careful consideration to avoid creating moisture problems that damage historic materials. Sustainable insulation approaches for Tampa&apos;s historic buildings include:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Attic insulation:</strong> Often the most cost-effective improvement; blown cellulose (made from recycled paper) offers good performance with low environmental impact</li>
                <li><strong>Interior storm windows:</strong> Improve thermal performance without exterior alterations</li>
                <li><strong>Radiant barriers:</strong> Particularly effective in Florida&apos;s cooling-dominated climate</li>
                <li><strong>Carefully designed wall insulation:</strong> When appropriate, breathable insulation systems that don&apos;t trap moisture in historic wall assemblies</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                High-Efficiency Mechanical Systems
              </h3>
              <p className="text-gray-600 mb-6">
                Modern high-efficiency HVAC systems can dramatically improve comfort and reduce energy consumption in historic buildings when properly designed and integrated:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Variable refrigerant flow (VRF) systems:</strong> Offer efficiency and flexibility with minimal ductwork, reducing impacts on historic fabric</li>
                <li><strong>High-efficiency heat pumps:</strong> Particularly effective in Tampa&apos;s mild climate</li>
                <li><strong>Smart controls:</strong> Optimize system performance based on occupancy and conditions</li>
                <li><strong>Geothermal systems:</strong> Where site conditions permit, provide exceptional efficiency</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Low-VOC and Sustainable Finishes
              </h3>
              <p className="text-gray-600 mb-6">
                Historic restoration provides opportunities to select environmentally responsible finish materials:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Low-VOC and zero-VOC paints that protect indoor air quality</li>
                <li>Traditional lime-based plasters and mortars that are breathable and sustainable</li>
                <li>Natural finishes such as linseed oil and tung oil for wood</li>
                <li>Locally sourced and salvaged materials that reduce transportation impacts</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Combining Historic Tax Credits and LEED Certification
              </h2>
              <p className="text-gray-600 mb-6">
                Historic rehabilitation projects can successfully achieve both federal historic tax credit certification and LEED certification, maximizing both financial incentives and environmental recognition. The National Park Service notes that numerous projects have combined these programs, with several achieving LEED Platinum certification while meeting the Secretary of the Interior&apos;s Standards.
              </p>

              <p className="text-gray-600 mb-6">
                Key considerations for combining these programs:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>LEED credits for existing building reuse:</strong> The USGBC added credits specifically recognizing historic resource preservation and adaptive reuse</li>
                <li><strong>Coordination is essential:</strong> Some LEED strategies may conflict with preservation standards; early coordination ensures compatible approaches</li>
                <li><strong>Documentation requirements:</strong> Both programs require extensive documentation, which can be coordinated to reduce administrative burden</li>
                <li><strong>Energy modeling:</strong> Demonstrates performance of restored historic features and integrated systems</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Cost Considerations for Sustainable Historic Restoration
              </h2>
              <p className="text-gray-600 mb-6">
                The following table provides typical costs for sustainable restoration strategies in Tampa-area historic projects:
              </p>

              {/* Cost Table */}
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-brand-green-dark text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">Sustainable Strategy</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Typical Cost</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Payback Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Historic Window Restoration + Storm Windows</td>
                      <td className="border border-gray-300 px-4 py-3">$800 - $2,000 per window</td>
                      <td className="border border-gray-300 px-4 py-3">8-15 years</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Attic Insulation (blown cellulose)</td>
                      <td className="border border-gray-300 px-4 py-3">$2 - $4 per sq ft</td>
                      <td className="border border-gray-300 px-4 py-3">3-5 years</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Radiant Barrier Installation</td>
                      <td className="border border-gray-300 px-4 py-3">$1 - $2 per sq ft</td>
                      <td className="border border-gray-300 px-4 py-3">2-4 years</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">High-Efficiency VRF System</td>
                      <td className="border border-gray-300 px-4 py-3">$20 - $35 per sq ft</td>
                      <td className="border border-gray-300 px-4 py-3">7-12 years</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">LED Lighting Upgrade</td>
                      <td className="border border-gray-300 px-4 py-3">$5 - $15 per sq ft</td>
                      <td className="border border-gray-300 px-4 py-3">2-4 years</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Smart Building Controls</td>
                      <td className="border border-gray-300 px-4 py-3">$3 - $8 per sq ft</td>
                      <td className="border border-gray-300 px-4 py-3">3-6 years</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Low-Flow Plumbing Fixtures</td>
                      <td className="border border-gray-300 px-4 py-3">$500 - $2,000 per fixture</td>
                      <td className="border border-gray-300 px-4 py-3">2-5 years</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">LEED Certification (consulting/documentation)</td>
                      <td className="border border-gray-300 px-4 py-3">$25,000 - $100,000</td>
                      <td className="border border-gray-300 px-4 py-3">Varies (market premium)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-600 mb-6">
                Many sustainable improvements qualify as part of the <Link href="/services/historic-restoration/historic-tax-credits/" className="text-brand-green-dark hover:underline">federal historic tax credit</Link> rehabilitation expenditure base, effectively reducing their net cost by 20% for qualifying projects.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Sustainable Material Sourcing for Historic Restoration
              </h2>
              <p className="text-gray-600 mb-6">
                When historic materials must be replaced, selecting sustainable alternatives requires balancing compatibility with environmental impact:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-brand-green-dark">Salvaged Historic Materials:</strong>
                    <p className="text-gray-600">Reclaimed brick, lumber, and architectural elements preserve embodied energy while providing authentic replacements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-brand-green-dark">FSC-Certified Wood:</strong>
                    <p className="text-gray-600">For new wood elements, Forest Stewardship Council certification ensures responsible forestry practices</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-brand-green-dark">Local Materials:</strong>
                    <p className="text-gray-600">Sourcing materials locally reduces transportation energy and supports regional economy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-brand-green-dark">Traditional Lime Products:</strong>
                    <p className="text-gray-600">Lime mortars and plasters have lower carbon footprints than Portland cement products and reabsorb CO2 over time</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                Our <Link href="/services/historic-restoration/material-sourcing/" className="text-brand-green-dark hover:underline">historic material sourcing services</Link> prioritize salvaged and sustainable materials while ensuring compatibility with historic fabric.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Water Conservation in Historic Building Restoration
              </h2>
              <p className="text-gray-600 mb-6">
                Sustainable historic restoration addresses water consumption alongside energy efficiency:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Low-flow fixtures:</strong> Modern efficient fixtures can be selected with period-appropriate styling</li>
                <li><strong>Rainwater harvesting:</strong> Capturing roof runoff for landscape irrigation, compatible with historic character</li>
                <li><strong>Native and drought-tolerant landscaping:</strong> Restoring or creating landscapes that minimize irrigation needs</li>
                <li><strong>Efficient irrigation systems:</strong> Drip irrigation and smart controllers reduce water waste</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-brand-green pl-4">
                  <h3 className="font-bold text-brand-green-dark mb-2">Can I install solar panels on a historic building?</h3>
                  <p className="text-gray-600">Solar panels can often be installed on historic buildings if properly located and designed. The National Park Service and local preservation commissions generally accept installations that are not visible from public rights-of-way and do not damage historic roofing materials. Flat roofs, rear-facing slopes, and accessory structures often provide acceptable locations. We work with preservation consultants to develop solar strategies that meet both sustainability goals and preservation standards.</p>
                </div>
                
                <div className="border-l-4 border-brand-green pl-4">
                  <h3 className="font-bold text-brand-green-dark mb-2">Should I replace historic windows with energy-efficient units?</h3>
                  <p className="text-gray-600">In most cases, no. Properly restored historic windows with weatherstripping and storm windows can achieve energy performance within 15-20% of replacement windows—while preserving original materials, maintaining historic character, and avoiding the environmental impact of manufacturing. Additionally, replacement windows have a typical lifespan of 15-25 years, while well-maintained historic wood windows can last indefinitely. The Secretary of the Interior&apos;s Standards generally require retaining original windows.</p>
                </div>
                
                <div className="border-l-4 border-brand-green pl-4">
                  <h3 className="font-bold text-brand-green-dark mb-2">How does historic preservation compare to new green construction environmentally?</h3>
                  <p className="text-gray-600">Research by the Preservation Green Lab found that building reuse almost always offers environmental savings over new construction. Even when new construction incorporates green building practices, it can take 10-80 years to overcome the negative climate impacts of demolition and new construction. Rehabilitation of historic buildings preserves embodied energy, avoids construction waste, and typically requires fewer new materials.</p>
                </div>
                
                <div className="border-l-4 border-brand-green pl-4">
                  <h3 className="font-bold text-brand-green-dark mb-2">Can a historic building achieve LEED certification?</h3>
                  <p className="text-gray-600">Yes. Numerous historic buildings have achieved LEED certification, including Platinum certification, while meeting the Secretary of the Interior&apos;s Standards. The USGBC&apos;s LEED program includes credits specifically recognizing historic building reuse. Key strategies include maximizing the sustainability of existing features, carefully integrating efficient systems, and selecting sustainable materials for new work.</p>
                </div>
                
                <div className="border-l-4 border-brand-green pl-4">
                  <h3 className="font-bold text-brand-green-dark mb-2">What incentives are available for sustainable historic restoration?</h3>
                  <p className="text-gray-600">Projects may benefit from multiple incentive programs: the 20% federal historic tax credit for qualified rehabilitation expenditures (including many sustainable improvements), utility rebates for energy-efficient equipment, and potential PACE financing for energy and water improvements. Some jurisdictions offer additional incentives for combined historic preservation and green building achievements.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Start Your Sustainable Historic Restoration
              </h2>
              <p className="text-gray-600 mb-6">
                Historic preservation and sustainability are natural partners. By restoring Tampa&apos;s historic buildings thoughtfully—maximizing inherent sustainable features while integrating appropriate modern systems—we honor our architectural heritage while advancing environmental goals. Florida Construction Specialists brings the expertise to achieve both objectives in every project.
              </p>
              
              <p className="text-gray-600 mb-6">
                <Link href="/contact/" className="text-brand-green-dark hover:underline font-semibold">Contact us today</Link> to discuss how sustainable historic restoration can preserve your building&apos;s heritage while reducing its environmental footprint and operating costs.
              </p>

          </div>
        </div>
      </section>

      {/* CTA */}
      
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for sustainable historic restoration solutions.
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
