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
              Tampa Neighborhoods Popular for Eco-Friendly Construction
            </h2>
            <p className="text-gray-600 mb-6">
              We've built sustainable custom homes throughout Tampa Bay's most desirable communities. In South Tampa neighborhoods like Palma Ceia and Beach Park, our eco-friendly designs complement the area's established character while introducing 21st-century sustainability. Westchase and Carrollwood homeowners appreciate our energy-efficient designs that reduce cooling costs during hot summers. Waterfront communities in Apollo Beach and Ruskin benefit from our climate-resilient construction methods that protect against storm surge while minimizing environmental impact.
            </p>

            {/* FAQ Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How much more does an eco-friendly custom home cost compared to traditional construction?
                  </h3>
                  <p className="text-gray-600">
                    Eco-friendly construction typically adds 10-20% to initial building costs in the Tampa Bay area. However, our clients see payback within 5-8 years through reduced utility bills (averaging $3,000-5,000 annual savings), increased home value (green homes sell for 8-10% more), and available tax credits. Federal solar credits alone can offset $15,000-25,000 of your investment.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Can I build an eco-friendly home in any Tampa neighborhood?
                  </h3>
                  <p className="text-gray-600">
                    Yes, sustainable construction is permitted throughout Tampa Bay. Some HOAs have guidelines about solar panel placement and exterior aesthetics, but we work within these requirements while maximizing green features. We've successfully built eco-friendly homes in deed-restricted communities in Avila, Cheval, and Tampa Palms by using integrated solar tiles and subtle rainwater collection systems.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What green building certifications do your homes qualify for?
                  </h3>
                  <p className="text-gray-600">
                    Our eco-friendly homes can achieve ENERGY STAR certification (standard), LEED for Homes (Silver through Platinum levels), FGBC (Florida Green Building Coalition) certification, and National Green Building Standard certification. We guide you through the certification process and help document your home's sustainable features for maximum recognition and resale value.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How long does it take to build an eco-friendly custom home in Tampa?
                  </h3>
                  <p className="text-gray-600">
                    Eco-friendly custom homes typically take 10-14 months to complete, similar to conventional custom construction. Some sustainable materials like ICF forms actually speed construction, while specialty items like triple-pane windows may require additional lead time. We coordinate material deliveries to maintain efficient schedules while ensuring every green feature is properly installed.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Do you offer financing options for eco-friendly home construction?
                  </h3>
                  <p className="text-gray-600">
                    We partner with lenders offering green construction loans and energy-efficient mortgages (EEMs) that factor reduced utility costs into qualifying ratios. Many Tampa-area banks offer favorable terms for ENERGY STAR and LEED-certified construction. We also help coordinate PACE (Property Assessed Clean Energy) financing for solar and efficiency upgrades.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Begin Your Sustainable Home Journey
            </h2>
            <p className="text-gray-600 mb-6">
              Building an eco-friendly custom home in Tampa represents one of the most meaningful investments you can make for your family and our community. Florida Construction Specialists brings decades of green building expertise to every project, ensuring your sustainable vision becomes a high-performing reality. From initial site analysis through final LEED certification, our team guides you through creating a home that's beautiful, comfortable, and kind to the environment.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us today to schedule a consultation at our Tampa design center, where we'll explore sustainable options tailored to your lifestyle, budget, and environmental goals. Whether you're building in established South Tampa neighborhoods or on undeveloped land in Pasco County, we have the expertise to create your perfect eco-friendly home.
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
