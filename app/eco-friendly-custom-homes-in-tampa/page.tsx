import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle, Leaf, Sun, Droplets, Wind } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Eco-Friendly Custom Homes in Tampa | Sustainable Luxury Building",
  description: "Build your dream eco-friendly custom home in Tampa. Solar-ready designs, sustainable materials, LEED-certified construction. Green luxury living from $450K-$2M+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Eco Friendly Custom Homes in Tampa", href: "/eco-friendly-custom-homes-in-tampa/" },
];

const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/energy-efficient-custom-homes-in-tampa/", label: "Energy-Efficient Custom Homes" },
  { href: "/tampa-custom-homes-with-green-building-practices/", label: "Green Building Practices" },
  { href: "/climate-resilient-custom-homes-in-tampa/", label: "Climate-Resilient Homes" },
  { href: "/tampa-luxury-custom-home-building-services/", label: "Luxury Custom Homes" },
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
            src="/images/custom-home-1/custom-home-1-display.webp"
            alt="Eco-friendly custom home construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Eco-Friendly Custom Homes in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Build a sustainable luxury home that reduces your carbon footprint while maximizing comfort. Solar-ready designs, recycled materials, and LEED-certified construction throughout Tampa Bay.
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

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Tampa's subtropical climate and year-round sunshine create the perfect environment for eco-friendly home construction. At Florida Construction Specialists, we've built over 200 sustainable custom homes across Hillsborough, Pinellas, and Pasco counties, helping environmentally conscious families reduce their utility bills by 40-60% while living in homes that rival any luxury property in South Tampa or Beach Park. Our green building expertise transforms your vision of sustainable living into architectural reality.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Tampa Is Ideal for Eco-Friendly Home Construction
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay receives an average of 244 sunny days annually, making solar energy incredibly viable for residential applications. Our eco-friendly custom homes take full advantage of Florida's abundant natural resources while addressing the unique challenges of our coastal environment. The average Tampa homeowner with a properly designed eco-friendly home sees their electric bills drop from $350/month to under $75, with many achieving net-zero energy status through solar integration.
            </p>
            <p className="text-gray-600 mb-6">
              The Tampa Bay region's commitment to sustainability is evident in programs like the Tampa Bay Regional Planning Council's green initiatives and Hillsborough County's solar-ready building incentives. When you build an eco-friendly custom home with Florida Construction Specialists, you're not just investing in your family's future—you're contributing to a regional movement toward sustainable development that's reshaping how we build in Florida.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <h3 className="text-xl font-bold text-green-800 mb-3">Tampa Bay Sustainability Facts</h3>
              <ul className="space-y-2 text-green-900">
                <li className="flex items-start gap-2">
                  <Sun className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>244 sunny days per year—optimal for solar energy generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Droplets className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>52 inches average annual rainfall—perfect for rainwater harvesting systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wind className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Consistent Gulf breezes enable natural ventilation design strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Native Florida landscaping reduces water usage by 50-70%</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Sustainable Materials and Construction Methods
            </h2>
            <p className="text-gray-600 mb-6">
              Our eco-friendly custom homes utilize cutting-edge sustainable materials specifically chosen for Tampa's climate. We source FSC-certified lumber from responsibly managed forests, recycled steel framing that withstands hurricane-force winds, and low-VOC finishes that improve indoor air quality while minimizing environmental impact. Every material selection balances sustainability with durability—critical in Florida's demanding weather conditions.
            </p>
            <p className="text-gray-600 mb-6">
              Insulated Concrete Forms (ICF) have become a cornerstone of our eco-friendly construction in Tampa. These forms create walls with R-values of R-25 or higher, dramatically reducing the energy required to cool your home during our hot summers. Combined with spray foam insulation in attics and advanced air sealing techniques, our homes maintain comfortable temperatures while using 40-50% less energy than conventionally built properties in neighborhoods like Palma Ceia, Harbour Island, and Hyde Park.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Solar Integration and Energy Systems
            </h2>
            <p className="text-gray-600 mb-6">
              Every eco-friendly custom home we build is solar-ready from day one, with electrical panels, conduit, and roof structures designed to accommodate photovoltaic systems. Many of our clients choose to install solar at construction time, taking advantage of 30% federal tax credits and Tampa Electric's solar rebate programs. A typical 8kW solar system on our homes generates enough electricity to offset 100% of annual usage, with excess power credited back through net metering.
            </p>
            <p className="text-gray-600 mb-6">
              Beyond solar panels, we integrate comprehensive energy management systems including Tesla Powerwall battery storage, smart thermostats that learn your patterns, and whole-home energy monitoring. These systems allow homeowners in areas like Westchase, Carrollwood, and New Tampa to track their energy production and consumption in real-time, optimizing their home's performance and maximizing return on their sustainable investment.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Water Conservation and Management
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's summer rainstorms provide an abundant free resource that most homes waste. Our eco-friendly designs incorporate rainwater harvesting systems that capture roof runoff for landscape irrigation, reducing municipal water usage by 30-50%. These systems are particularly valuable in areas like Davis Islands and Shore Acres, where maintaining lush landscaping would otherwise require significant irrigation.
            </p>
            <p className="text-gray-600 mb-6">
              Inside the home, we install WaterSense-certified fixtures, dual-flush toilets, and greywater recycling systems that redirect sink and shower water to irrigation use. Hot water recirculation pumps eliminate the wait for warm water while preventing thousands of gallons of waste annually. Combined with drought-tolerant native landscaping, our homes use 60% less water than comparable conventional properties.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Indoor Air Quality and Health
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's humidity and allergen levels make indoor air quality a critical consideration for custom homes. Our eco-friendly construction utilizes ERV (Energy Recovery Ventilator) systems that continuously exchange stale indoor air with filtered fresh air while recovering energy. Combined with MERV-13 or higher filtration and UV air purification, our homes maintain indoor air quality that's 50-70% cleaner than outdoor Tampa air.
            </p>
            <p className="text-gray-600 mb-6">
              We exclusively use zero-VOC paints, formaldehyde-free cabinetry, and natural flooring materials like bamboo and reclaimed hardwood. These choices eliminate the "new house smell" that's actually off-gassing of harmful chemicals, creating living spaces that are healthier for families—especially important for children and those with respiratory sensitivities common in Florida's humid climate.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Eco-Friendly Custom Home Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Home Size</th>
                      <th className="px-6 py-4 text-left">Base Green Build</th>
                      <th className="px-6 py-4 text-left">Premium Eco Package</th>
                      <th className="px-6 py-4 text-left">Net-Zero Ready</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">2,500 sq ft</td>
                      <td className="px-6 py-4">$450,000 - $550,000</td>
                      <td className="px-6 py-4">$575,000 - $700,000</td>
                      <td className="px-6 py-4">$700,000 - $850,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">3,500 sq ft</td>
                      <td className="px-6 py-4">$630,000 - $770,000</td>
                      <td className="px-6 py-4">$800,000 - $980,000</td>
                      <td className="px-6 py-4">$980,000 - $1.2M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">4,500 sq ft</td>
                      <td className="px-6 py-4">$810,000 - $990,000</td>
                      <td className="px-6 py-4">$1.0M - $1.26M</td>
                      <td className="px-6 py-4">$1.26M - $1.55M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">5,500+ sq ft</td>
                      <td className="px-6 py-4">$990,000 - $1.2M</td>
                      <td className="px-6 py-4">$1.25M - $1.55M</td>
                      <td className="px-6 py-4">$1.55M - $2M+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Prices reflect 2024 Tampa Bay market rates. Base Green Build includes ENERGY STAR certification. Premium includes solar-ready infrastructure and advanced insulation. Net-Zero Ready includes full solar array and battery storage.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Eco-Friendly Home Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-brand-green-dark">Energy Efficiency</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Solar panel integration (8-15kW systems)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>ICF walls with R-25+ insulation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>High-efficiency HVAC (20+ SEER)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>LED lighting throughout</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-brand-green-dark">Water Conservation</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Rainwater harvesting systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Greywater recycling capability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>WaterSense-certified fixtures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Native drought-tolerant landscaping</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-brand-green-dark">Sustainable Materials</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>FSC-certified lumber</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Recycled steel framing options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Low-VOC paints and finishes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Reclaimed and bamboo flooring</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-brand-green-dark">Smart Home Integration</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Whole-home energy monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Smart thermostat systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Automated lighting controls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>EV charging station ready</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Climate-Responsive Design for Florida Living
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's subtropical climate demands specialized eco-friendly design strategies. Our passive solar design principles orient homes to minimize summer heat gain while maximizing winter warmth and natural light. Large roof overhangs and strategically placed windows reduce air conditioning loads by 25-30% compared to standard construction. Cross-ventilation design takes advantage of Gulf breezes, allowing natural cooling during mild weather months.
            </p>
            <p className="text-gray-600 mb-6">
              Thermal mass integration using concrete floors and interior masonry walls helps moderate temperature swings, storing cool nighttime air and releasing it gradually during hot days. Cool roof technologies reflect solar radiation while advanced attic ventilation systems prevent heat buildup that can raise indoor temperatures. These design elements work together to create comfortable living environments while dramatically reducing energy consumption.
            </p>
            <p className="text-gray-600 mb-6">
              Hurricane resilience is a critical component of our eco-friendly designs. Impact-resistant windows and doors provide safety while maintaining energy efficiency. Elevated construction in flood-prone areas protects against storm surge while allowing natural water flow. Native landscaping and permeable hardscaping reduce stormwater runoff that can overwhelm Tampa Bay's drainage systems.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Advanced Building Technologies
            </h2>
            <p className="text-gray-600 mb-6">
              Structural Insulated Panels (SIPs) offer superior performance for eco-friendly construction in Tampa's climate. These factory-manufactured panels provide continuous insulation without thermal bridging, achieving R-values of R-25 to R-50 while dramatically reducing air infiltration. SIPs construction also provides exceptional strength for hurricane resistance while using fewer materials than conventional framing.
            </p>
            <p className="text-gray-600 mb-6">
              Geothermal HVAC systems, though less common in Florida, offer remarkable efficiency for larger custom homes. Ground-source heat pumps leverage the earth's constant 70°F temperature to provide heating and cooling at costs 40-60% below conventional systems. We've installed geothermal systems in luxury homes in Avila and Tampa Palms with outstanding performance results.
            </p>
            <p className="text-gray-600 mb-6">
              Smart glass technology allows windows to automatically adjust transparency based on sunlight intensity, reducing solar heat gain during peak hours while maintaining views. These electrochromic windows integrate with home automation systems to optimize comfort and energy efficiency throughout the day. While representing a premium investment, smart glass can reduce HVAC loads by 15-20% in west-facing rooms.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Renewable Energy Integration
            </h2>
            <p className="text-gray-600 mb-6">
              Beyond traditional rooftop solar panels, we integrate multiple renewable energy sources for maximum sustainability. Solar hot water systems provide domestic hot water heating at 60-80% efficiency, particularly valuable for Tampa families with pools or large households. Micro-wind turbines supplement solar production during cloudy periods, though Tampa's generally low wind speeds limit their effectiveness compared to solar.
            </p>
            <p className="text-gray-600 mb-6">
              Battery storage systems have become increasingly sophisticated and affordable. Tesla Powerwall, LG Chem, and Enphase battery systems store excess solar production for evening use and provide backup power during outages. Whole-home battery systems can power essential circuits for 2-3 days, while larger installations can maintain full home operation during extended outages common during hurricane season.
            </p>
            <p className="text-gray-600 mb-6">
              Grid-tie systems with net metering allow homeowners to sell excess power back to Tampa Electric, earning credits during peak production months that offset consumption during cloudy periods. Advanced inverter systems optimize power production throughout the day, even when panels are partially shaded. Monitoring systems provide real-time data on energy production, consumption, and savings.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
              <h3 className="text-xl font-bold text-amber-800 mb-3">Tampa Bay Green Building Incentives</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Federal Incentives</h4>
                  <ul className="space-y-1 text-amber-900 text-sm">
                    <li>• Solar Tax Credit: 30% of system cost through 2032</li>
                    <li>• Energy-Efficient Home Credit: Up to $5,000 for certified homes</li>
                    <li>• Battery Storage Credit: 30% for systems paired with solar</li>
                    <li>• Heat Pump Rebates: Up to $8,000 for qualified systems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Local Tampa Bay Programs</h4>
                  <ul className="space-y-1 text-amber-900 text-sm">
                    <li>• Tampa Electric Solar Rebates: $0.75-$1.00 per watt installed</li>
                    <li>• Duke Energy Solar Rebates: Up to $1,200 per system</li>
                    <li>• Property Tax Exemptions: Solar installations exempt from assessment</li>
                    <li>• Expedited Permitting: Fast-track permits for certified green builds</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Financing Options</h4>
                  <ul className="space-y-1 text-amber-900 text-sm">
                    <li>• PACE Financing: Property-based energy improvement loans</li>
                    <li>• Energy-Efficient Mortgages: Higher borrowing limits for green homes</li>
                    <li>• Green Construction Loans: Favorable rates for certified builders</li>
                    <li>• Utility On-Bill Financing: Equipment costs added to utility bills</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Sustainable Landscaping and Site Design
            </h2>
            <p className="text-gray-600 mb-6">
              Native Florida landscaping reduces water consumption by 60-70% while providing habitat for local wildlife and requiring minimal maintenance. Our landscape architects select plants adapted to Tampa's climate: coontie palms, firebush, simpson's stopper, and coral honeysuckle provide year-round beauty while supporting butterflies, birds, and beneficial insects. These plants thrive in sandy soils and tolerate drought conditions common during Tampa's dry season.
            </p>
            <p className="text-gray-600 mb-6">
              Permeable hardscaping materials allow rainwater to infiltrate rather than rushing into storm drains. Pervious concrete driveways, permeable pavers, and shell paths reduce runoff while maintaining attractive appearance. Rain gardens and bioswales collect and filter stormwater naturally, reducing pollution in Tampa Bay while creating beautiful landscape features.
            </p>
            <p className="text-gray-600 mb-6">
              Edible landscaping integrates food production with ornamental beauty. Citrus trees, herbs, and vegetables can provide fresh produce while reducing grocery bills and transportation emissions. Fruit trees like mango, avocado, and figs thrive in Tampa's climate and produce for decades with proper care. Community garden spaces in larger properties provide family activity areas while demonstrating sustainable living principles to children.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Waste Reduction and Recycling Systems
            </h2>
            <p className="text-gray-600 mb-6">
              Construction waste reduction begins with precise material ordering and careful inventory management. We donate usable surplus materials to Habitat for Humanity and similar organizations rather than sending them to landfills. Modular construction techniques reduce waste by 25-30% compared to stick-built methods while improving quality control through factory production.
            </p>
            <p className="text-gray-600 mb-6">
              Built-in composting systems turn kitchen and yard waste into valuable soil amendments. Tumbler composters, worm bins, and compost bins integrated into landscape design make waste reduction convenient for daily use. These systems can process 60-80% of household organic waste while producing nutrient-rich compost for gardens and landscaping.
            </p>
            <p className="text-gray-600 mb-6">
              Recycling stations throughout the home make sorting and storing recyclables convenient. Mudroom recycling centers, kitchen sorting drawers, and garage collection areas encourage family participation in waste reduction. Some of our luxury homes include pneumatic waste systems that transport recyclables to central collection points, eliminating manual handling while encouraging proper sorting.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa Neighborhoods Popular for Eco-Friendly Construction
            </h2>
            <p className="text-gray-600 mb-6">
              We've built sustainable custom homes throughout Tampa Bay's most desirable communities. In South Tampa neighborhoods like Palma Ceia and Beach Park, our eco-friendly designs complement the area's established character while introducing 21st-century sustainability. Historic districts appreciate our respectful approach to green building that maintains architectural integrity while improving energy performance.
            </p>
            <p className="text-gray-600 mb-6">
              Westchase and Carrollwood families particularly appreciate our energy-efficient designs that reduce cooling costs during hot summers. New construction in these established communities often incorporates solar panels, rainwater harvesting, and native landscaping that sets positive examples for neighborhood sustainability initiatives. HOA guidelines are generally accommodating for green features that enhance property values.
            </p>
            <p className="text-gray-600 mb-6">
              Waterfront communities in Apollo Beach, Ruskin, and Harbor Island benefit from our climate-resilient construction methods that protect against storm surge while minimizing environmental impact. Elevated designs with sustainable materials perform better during storm events while reducing long-term maintenance costs. Salt-air resistant materials and finishes maintain appearance in challenging coastal environments.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Future-Proofing Your Sustainable Investment
            </h2>
            <p className="text-gray-600 mb-6">
              Technology continues advancing rapidly in green building. We design homes with infrastructure to accommodate future improvements: additional electrical capacity for electric vehicle charging, conduit for upgraded automation systems, and structural provisions for expanded solar arrays. These preparations cost minimal during construction but save thousands when upgrades become desirable.
            </p>
            <p className="text-gray-600 mb-6">
              Climate change adaptation affects long-term building performance. Higher temperature extremes, more intense storms, and changing precipitation patterns influence design decisions today. We incorporate resilient features that perform better under stress: hurricane-rated windows, elevated utilities, and flood-resistant materials that protect your investment for decades.
            </p>

            {/* FAQ Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions About Eco-Friendly Custom Homes
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How much more does an eco-friendly custom home cost compared to traditional construction?
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Eco-friendly construction typically adds 10-20% to initial building costs in the Tampa Bay area. However, our clients see payback within 5-8 years through reduced utility bills (averaging $3,000-5,000 annual savings), increased home value (green homes sell for 8-10% more), and available tax credits. Federal solar credits alone can offset $15,000-25,000 of your investment.
                  </p>
                  <p className="text-gray-600">
                    For example, a $800,000 traditional custom home might cost $880,000-960,000 with full eco-friendly upgrades, but the owner saves $300-400 monthly on utilities while receiving $25,000-35,000 in tax credits. The net cost difference becomes minimal while providing superior comfort and performance.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Can I build an eco-friendly home in any Tampa neighborhood?
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Yes, sustainable construction is permitted throughout Tampa Bay. Some HOAs have guidelines about solar panel placement and exterior aesthetics, but we work within these requirements while maximizing green features. We've successfully built eco-friendly homes in deed-restricted communities in Avila, Cheval, and Tampa Palms by using integrated solar tiles and subtle rainwater collection systems.
                  </p>
                  <p className="text-gray-600">
                    Historic districts like Hyde Park and Seminole Heights have specific architectural requirements, but we incorporate green technologies that maintain period appearance. Many HOAs now encourage sustainable features as they enhance property values and demonstrate community environmental responsibility.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What green building certifications do your homes qualify for?
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Our eco-friendly homes can achieve ENERGY STAR certification (standard), LEED for Homes (Silver through Platinum levels), FGBC (Florida Green Building Coalition) certification, and National Green Building Standard certification. We guide you through the certification process and help document your home's sustainable features for maximum recognition and resale value.
                  </p>
                  <p className="text-gray-600">
                    LEED Platinum certification adds approximately $25,000-40,000 to construction costs but provides lifetime benefits including property tax exemptions, insurance discounts, and significant resale premiums. We've achieved LEED Platinum on 15+ homes in Tampa Bay, making us one of the region's most experienced green builders.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How do eco-friendly homes perform during hurricanes and severe weather?
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Our eco-friendly construction methods often exceed standard hurricane resistance. ICF walls provide superior wind resistance compared to traditional framing, while impact-resistant windows offer both energy efficiency and storm protection. Elevated designs in flood-prone areas protect against storm surge while renewable energy systems with battery backup maintain power during outages.
                  </p>
                  <p className="text-gray-600">
                    During Hurricane Ian, our eco-friendly homes in vulnerable areas performed exceptionally well. Solar systems with battery storage provided power for essential systems, while superior insulation and air sealing maintained comfortable indoor conditions even without air conditioning. Native landscaping recovered faster than conventional plantings, reducing cleanup costs.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How long does it take to build an eco-friendly custom home in Tampa?
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Eco-friendly custom homes typically take 10-14 months to complete, similar to conventional custom construction. Some sustainable materials like ICF forms actually speed construction, while specialty items like triple-pane windows may require additional lead time. We coordinate material deliveries to maintain efficient schedules while ensuring every green feature is properly installed.
                  </p>
                  <p className="text-gray-600">
                    The design phase may take 1-2 months longer for eco-friendly homes as we optimize orientation, select sustainable materials, and coordinate green technology installations. However, this additional planning prevents delays and change orders during construction, often making the overall timeline comparable to traditional building.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Do you offer financing options for eco-friendly home construction?
                  </h3>
                  <p className="text-gray-600 mb-3">
                    We partner with lenders offering green construction loans and energy-efficient mortgages (EEMs) that factor reduced utility costs into qualifying ratios. Many Tampa-area banks offer favorable terms for ENERGY STAR and LEED-certified construction. We also help coordinate PACE (Property Assessed Clean Energy) financing for solar and efficiency upgrades.
                  </p>
                  <p className="text-gray-600">
                    Energy-efficient mortgages allow borrowers to qualify for higher loan amounts based on projected energy savings. This can add $20,000-50,000 to borrowing capacity for green features. PACE financing allows solar and efficiency improvements to be paid through property tax bills, with 15-20 year terms that transfer to new owners if you sell.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What maintenance requirements do eco-friendly homes have?
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Eco-friendly homes typically require less maintenance than conventional construction. Solar panels need occasional cleaning and annual inspections. Native landscaping requires minimal watering and pruning compared to traditional lawns. High-efficiency HVAC systems with quality filtration last longer and need less frequent service.
                  </p>
                  <p className="text-gray-600">
                    We provide comprehensive maintenance schedules and connect homeowners with qualified service providers familiar with green technologies. Many components like LED lighting and high-efficiency appliances have longer lifespans, reducing replacement frequency. Overall maintenance costs are typically 20-30% lower than conventional homes.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Can I add eco-friendly features to my design after construction begins?
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Some features can be added during construction, but many require early planning for optimal integration and cost-effectiveness. Solar wiring, enhanced insulation, and ICF walls must be incorporated from the beginning. Fixtures, appliances, and finish materials can often be upgraded to eco-friendly options throughout construction.
                  </p>
                  <p className="text-gray-600">
                    We encourage early decision-making on green features to maximize benefits and minimize costs. Late additions often require change orders and may not integrate as seamlessly with overall design. Our green building specialists help prioritize features and timing to achieve your sustainability goals within budget.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Performance Monitoring and Optimization</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Real-Time Energy Monitoring</h4>
                  <p className="text-blue-900 text-sm">Advanced monitoring systems track energy production, consumption, and efficiency in real-time. Smartphone apps allow homeowners to optimize usage patterns, identify opportunities for additional savings, and ensure all systems operate at peak performance. Data analytics help predict maintenance needs and identify optimization opportunities.</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Performance Verification</h4>
                  <p className="text-blue-900 text-sm">Post-occupancy testing verifies that homes perform as designed. Blower door tests confirm air sealing effectiveness, thermal imaging identifies insulation gaps, and energy audits validate efficiency projections. We provide one-year performance reviews to ensure all systems meet design expectations.</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Continuous Improvement</h4>
                  <p className="text-blue-900 text-sm">Technology advances continuously in green building. We maintain relationships with homeowners to recommend upgrades as new opportunities become available. Software updates, system optimizations, and equipment replacements keep homes performing at their best throughout their operational life.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The Economic Case for Eco-Friendly Construction
            </h2>
            <p className="text-gray-600 mb-6">
              Beyond environmental benefits, eco-friendly custom homes provide compelling financial returns. Tampa Bay's green homes sell for 8-12% premiums while spending 25% less time on market. Utility savings average $3,000-5,000 annually, creating $60,000-100,000 value over 20 years. Insurance companies offer discounts for hurricane-resistant and sustainable features, while property taxes remain stable due to green building exemptions.
            </p>
            <p className="text-gray-600 mb-6">
              Resale value protection is particularly strong for eco-friendly homes as environmental consciousness grows among buyers. Younger demographics particularly value sustainable features, ensuring strong future demand. Energy independence provides stability against rising utility costs, while premium construction materials and methods reduce long-term maintenance expenses.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Begin Your Sustainable Home Journey
            </h2>
            <p className="text-gray-600 mb-6">
              Building an eco-friendly custom home in Tampa represents one of the most meaningful investments you can make for your family and our community. Florida Construction Specialists brings decades of green building expertise to every project, ensuring your sustainable vision becomes a high-performing reality. From initial site analysis through final LEED certification, our team guides you through creating a home that's beautiful, comfortable, and kind to the environment.
            </p>
            <p className="text-gray-600 mb-6">
              Our comprehensive approach includes site evaluation for solar potential, soil analysis for geothermal systems, flood risk assessment for resilient design, and utility interconnection planning for renewable energy systems. We coordinate with TECO, Duke Energy, and local utilities to optimize your home's grid integration while maximizing sustainability benefits.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us today to schedule a consultation at our Tampa design center, where we'll explore sustainable options tailored to your lifestyle, budget, and environmental goals. Whether you're building in established South Tampa neighborhoods or on undeveloped land in Pasco County, we have the expertise to create your perfect eco-friendly home.
            </p>
            <p className="text-gray-600 mb-6">
              Join the growing community of Tampa Bay families enjoying the comfort, savings, and satisfaction of truly sustainable living. Your eco-friendly custom home will serve as a model for responsible development while providing your family with superior performance, lower operating costs, and the peace of mind that comes from living in harmony with Florida's beautiful natural environment.
            </p>

          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Related Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Build Your Eco-Friendly Dream Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists today for a free consultation on sustainable custom home construction in Tampa Bay.
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
