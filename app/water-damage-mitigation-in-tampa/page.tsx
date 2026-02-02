import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Water Damage Mitigation in Tampa",
  description: "Get fast, expert water damage mitigation in Tampa to restore your home or business. Our 24/7 emergency water damage repair services ensure your property is safe",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Water Damage Mitigation in Tampa", href: "/water-damage-mitigation-in-tampa/" },
];


const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/services/disaster-recovery/fire-damage/", label: "Fire Damage Restoration" },
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Restoration" },
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
            src="/images/hurricane-ian/hurricane-ian-display.webp"
            alt="Hurricane damage restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Water Damage Mitigation in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Get fast, expert water damage mitigation in Tampa to restore your home or business. Our 24/7 emergency water damage repair services ensure your proper
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
                Water damage mitigation is the critical first line of defense when your Tampa property faces water intrusion emergencies. Florida Construction Specialists brings 43 years of insurance restoration experience to provide immediate, professional water damage mitigation services that minimize property damage and reduce restoration costs. Our rapid response and proven mitigation strategies have saved countless Tampa Bay properties from devastating secondary damage like mold growth and structural deterioration.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Understanding Water Damage Mitigation vs. Restoration
              </h2>
              <p className="text-gray-600 mb-6">
                Water damage mitigation and restoration are two distinct but complementary phases of water damage recovery. Mitigation focuses on immediate emergency response to stop ongoing damage and prevent secondary problems. This includes source identification and control, water extraction, structural stabilization, and moisture content reduction. Restoration, which follows mitigation, involves rebuilding and repairing damaged materials and systems.
              </p>

              <p className="text-gray-600 mb-6">
                The quality and speed of mitigation directly impacts the scope and cost of restoration. Prompt, professional mitigation can often reduce restoration costs by 50% or more by preventing secondary damage. In Tampa's humid climate, this difference is even more pronounced because mold growth can begin within 24-48 hours of water exposure.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Emergency Water Damage Mitigation Response
              </h2>
              <p className="text-gray-600 mb-6">
                Our emergency mitigation response begins the moment you call our 24/7 hotline. Our dispatch system immediately activates the nearest response team while gathering critical information about your water damage emergency. Within minutes, we can provide initial guidance to help you take immediate steps to minimize damage while our crews are en route.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">First Response Priority Actions</h3>
              <p className="text-gray-600 mb-6">
                Upon arrival, our certified technicians immediately assess the situation for safety hazards, identify and control the water source, begin emergency water extraction, document the damage scope for insurance purposes, and deploy moisture detection equipment to map the full extent of water intrusion.
              </p>

              <p className="text-gray-600 mb-6">
                Safety is our top priority. Before any mitigation work begins, we assess electrical hazards, structural integrity, and contamination risks. We have the equipment and training to work safely in dangerous conditions, including standing water near electrical systems and contaminated water situations.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Emergency Mitigation Checklist:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Source identification and water shutoff</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Safety assessment and hazard identification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Immediate water extraction and removal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Moisture mapping and damage documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Initial stabilization and protection measures</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Water Source Identification and Control
              </h2>
              <p className="text-gray-600 mb-6">
                Effective water damage mitigation begins with quickly identifying and controlling the source of water intrusion. Our technicians are trained to rapidly diagnose various water sources, from obvious pipe bursts to hidden leaks behind walls. We carry the tools and equipment necessary to stop water flow immediately, including emergency pipe repair clamps, valve shutoffs, and temporary sealing materials.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Common Water Sources in Tampa Properties</h3>
              <p className="text-gray-600 mb-6">
                Tampa properties face water intrusion from multiple sources: supply line failures, appliance malfunctions (water heaters, washing machines, refrigerators), roof leaks from storm damage, HVAC condensation problems, sewage backups, and external flooding from storms or drainage failures. Each source requires different mitigation approaches and safety considerations.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Hidden Water Sources</h3>
              <p className="text-gray-600 mb-6">
                Not all water damage sources are immediately obvious. We use moisture meters, thermal imaging cameras, and inspection tools to locate hidden leaks behind walls, under floors, and in ceiling cavities. Finding and stopping these hidden sources is crucial for effective mitigation – continued water intrusion will undermine any drying efforts.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Rapid Water Extraction Techniques
              </h2>
              <p className="text-gray-600 mb-6">
                Speed is critical in water extraction. Every minute that water remains in contact with building materials increases absorption and damage. Our extraction process uses the most appropriate equipment for each situation, from truck-mounted units for large-scale extraction to portable units for accessing tight spaces.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Extraction Equipment and Methods</h3>
              <p className="text-gray-600 mb-6">
                We deploy truck-mounted extraction units with thousands of gallons per hour capacity for major flooding, portable extractors for upper floors and confined spaces, submersible pumps for deep standing water, wet vacuums for detailed extraction from furnishings and fixtures, and specialized tools for extracting water from carpeting and upholstery.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Extraction Strategy Based on Water Type</h3>
              <p className="text-gray-600 mb-6">
                Different types of water contamination require different extraction approaches. Clean water can be extracted and properly disposed of through standard drainage systems. Gray water requires containment and specialized disposal. Black water (sewage contamination) requires full containment, protective equipment, and hazardous waste disposal protocols.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Moisture Detection and Mapping
              </h2>
              <p className="text-gray-600 mb-6">
                Effective mitigation requires understanding the full scope of water intrusion, including moisture that has penetrated into building materials and hidden areas. Our technicians use advanced moisture detection equipment to map water damage accurately and ensure that all affected areas are addressed during mitigation.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Advanced Detection Technology</h3>
              <p className="text-gray-600 mb-6">
                We employ infrared thermal cameras that reveal moisture patterns behind walls and ceilings, pin-type moisture meters for direct measurement in wood and drywall, pinless moisture meters for non-invasive scanning of large areas, thermo-hygrometers for environmental monitoring, and digital documentation systems that create detailed moisture maps for insurance and restoration planning.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Creating Accurate Damage Assessments</h3>
              <p className="text-gray-600 mb-6">
                Our moisture mapping creates a detailed picture of water damage that guides both immediate mitigation efforts and long-term restoration planning. This documentation is crucial for insurance claims and ensures that no moisture is overlooked, preventing future problems like mold growth or structural issues.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Structural Drying and Stabilization
              </h2>
              <p className="text-gray-600 mb-6">
                After water extraction, aggressive structural drying is essential to remove moisture from building materials and prevent secondary damage. Our mitigation process includes deploying industrial-grade drying equipment strategically throughout the affected areas to create optimal drying conditions.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Industrial Drying Equipment</h3>
              <p className="text-gray-600 mb-6">
                We use low grain refrigerant (LGR) dehumidifiers that extract moisture more efficiently than standard units, centrifugal and axial air movers positioned to maximize air circulation, desiccant dehumidifiers for challenging conditions with high humidity levels, and specialty equipment like wall cavity drying systems that extract moisture without requiring demolition.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Monitoring and Adjustment</h3>
              <p className="text-gray-600 mb-6">
                Effective structural drying requires constant monitoring and adjustment. Our technicians take daily moisture readings, monitor temperature and humidity levels, adjust equipment placement as needed, and maintain detailed logs that document the drying progress for insurance purposes.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Preventing Secondary Damage During Mitigation
              </h2>
              <p className="text-gray-600 mb-6">
                Secondary damage prevention is a primary goal of water damage mitigation. In Tampa's climate, secondary damage like mold growth, wood warping, metal corrosion, and electrical system damage can quickly exceed the cost of the original water damage. Our mitigation protocols specifically target these risks.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Mold Prevention Strategies</h3>
              <p className="text-gray-600 mb-6">
                Mold prevention begins immediately upon arrival. We apply EPA-registered antimicrobial treatments to all affected surfaces, maintain humidity levels below 60% throughout the drying process, ensure adequate air circulation to prevent moisture pockets, and remove water-damaged materials that cannot be adequately dried within the critical 48-hour window.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Protecting Unaffected Areas</h3>
              <p className="text-gray-600 mb-6">
                Professional mitigation includes protecting unaffected areas from contamination and humidity. We use containment barriers, direct air movement away from clean areas, control humidity migration through proper ventilation, and protect valuable contents through pack-out services when necessary.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Tampa-Specific Water Damage Mitigation Challenges
              </h2>
              <p className="text-gray-600 mb-6">
                Tampa's subtropical climate creates unique challenges for water damage mitigation. High humidity levels slow drying processes, frequent storms can complicate emergency response, and year-round warm temperatures can accelerate mold growth. Our local experience allows us to adapt mitigation strategies for these specific conditions.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Hurricane Season Preparedness</h3>
              <p className="text-gray-600 mb-6">
                During hurricane season, we pre-stage equipment and coordinate with suppliers to ensure rapid response capability even during major storm events. Our hurricane mitigation protocols account for power outages, supply chain disruptions, and simultaneous multiple property events that can occur during major storms.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Humidity Control Strategies</h3>
              <p className="text-gray-600 mb-6">
                Tampa's high ambient humidity requires aggressive dehumidification strategies. We often use more powerful equipment and longer drying times than would be necessary in drier climates. Our technicians are trained to recognize when standard drying approaches won't be sufficient and can deploy specialized equipment for challenging conditions.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Insurance Coordination During Emergency Mitigation
              </h2>
              <p className="text-gray-600 mb-6">
                Our 43 years of insurance experience means we understand the importance of proper documentation and communication during emergency mitigation. We begin insurance coordination immediately, contacting your insurance company to report the claim and coordinating adjuster inspections while continuing mitigation efforts.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Documentation Standards</h3>
              <p className="text-gray-600 mb-6">
                Insurance companies require specific documentation for water damage claims. Our mitigation process includes detailed photographic documentation, moisture content readings and maps, comprehensive damage inventories, daily progress reports, and equipment logs that demonstrate the thoroughness of our mitigation efforts.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Protecting Your Coverage</h3>
              <p className="text-gray-600 mb-6">
                Proper mitigation can actually enhance insurance coverage by demonstrating that you took reasonable steps to minimize damage after the initial loss. Our documentation proves that professional mitigation was implemented promptly and thoroughly, supporting your claim and protecting your coverage.
              </p>

              <div className="bg-brand-green-light/20 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Insurance Benefits of Professional Mitigation:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <span>Demonstrates duty to mitigate losses as required by policy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <span>Provides thorough documentation supporting claim settlement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <span>Prevents secondary damage that might not be covered</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <span>Reduces overall claim costs through effective damage control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <span>Expedites claim settlement with professional documentation</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Content Protection and Emergency Pack-Out
              </h2>
              <p className="text-gray-600 mb-6">
                Water damage mitigation often includes protecting and preserving personal belongings and business assets. Our emergency pack-out services remove valuable contents from the water-damaged environment, preventing further damage and allowing for off-site cleaning and restoration.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Priority Content Protection</h3>
              <p className="text-gray-600 mb-6">
                We prioritize contents based on value, replaceability, and susceptibility to water damage. Electronics, documents, artwork, and antiques receive immediate attention, while less sensitive items may be protected in place. Our inventory system ensures that all removed items are tracked and properly cared for during the mitigation process.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">On-Site vs. Off-Site Protection</h3>
              <p className="text-gray-600 mb-6">
                Depending on the scope of damage and type of contents, we may provide protection services on-site through containment and environmental controls, or off-site through pack-out to our climate-controlled restoration facility. Our decision process considers factors like contamination levels, drying time requirements, and space limitations.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Quality Control and Monitoring Systems
              </h2>
              <p className="text-gray-600 mb-6">
                Our water damage mitigation includes rigorous quality control and monitoring systems to ensure that mitigation efforts are effective and complete. We use digital monitoring systems, regular inspections, and verification protocols to confirm that mitigation goals are achieved.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Real-Time Monitoring Technology</h3>
              <p className="text-gray-600 mb-6">
                We deploy wireless monitoring systems that provide real-time data on temperature, humidity, and moisture content throughout affected areas. This technology allows us to adjust mitigation strategies immediately when conditions change and provides continuous documentation of mitigation progress.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Verification and Sign-Off Procedures</h3>
              <p className="text-gray-600 mb-6">
                Before declaring mitigation complete, our supervisors conduct thorough verification inspections using independent moisture testing, visual inspection of all affected areas, environmental monitoring to confirm stable conditions, and customer walk-through to address any concerns.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Case Studies: Successful Water Damage Mitigation in Tampa
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Hyde Park Townhome - Second Floor Pipe Burst</h3>
                <p className="text-gray-600 mb-4">
                  A second-floor bathroom supply line failure caused water damage to three floors of a luxury townhome. Our team responded within 45 minutes, immediately stopping the water source and beginning extraction. Aggressive mitigation prevented mold growth and saved original hardwood floors throughout the home.
                </p>
                <p className="text-gray-600">
                  Result: Complete mitigation in 5 days with minimal demolition required. Property was ready for restoration with no secondary damage and 100% material salvage rate.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Westshore Medical Office - HVAC Leak</h3>
                <p className="text-gray-600 mb-4">
                  A hidden HVAC condensation leak caused extensive water damage in a medical office over several weeks before discovery. Our mitigation team used advanced moisture mapping to identify all affected areas and implemented targeted drying strategies that allowed the practice to continue operations in unaffected areas.
                </p>
                <p className="text-gray-600">
                  Result: Mitigation completed in 7 days with zero business interruption. Prevented an estimated $150,000 in secondary damage through prompt professional intervention.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Transition from Mitigation to Restoration
              </h2>
              <p className="text-gray-600 mb-6">
                Successful water damage mitigation sets the foundation for efficient restoration. Our comprehensive approach means we handle both phases seamlessly, eliminating coordination delays and ensuring that restoration work begins as soon as mitigation is complete and insurance approvals are obtained.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Mitigation Completion Criteria</h3>
              <p className="text-gray-600 mb-6">
                We declare mitigation complete when moisture content in all building materials reaches acceptable levels, environmental conditions are stable with humidity below 60%, all affected areas have been thoroughly dried and treated, and documentation is complete for insurance purposes.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Restoration Planning Integration</h3>
              <p className="text-gray-600 mb-6">
                During mitigation, we begin planning restoration activities, coordinating with insurance adjusters for scope development, ordering materials for restoration work, scheduling specialized trades for complex repairs, and preparing detailed project timelines that minimize property disruption.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Why Choose Florida Construction Specialists for Water Damage Mitigation
              </h2>
              <p className="text-gray-600 mb-6">
                Our water damage mitigation services combine rapid emergency response, advanced technology, and extensive insurance experience to provide the most effective mitigation possible. With 43 years of experience in Tampa Bay, we understand local conditions and have the resources to handle any scale of water damage emergency.
              </p>

              <div className="bg-brand-green-light/20 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Our Mitigation Advantages:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <span>24/7 emergency response throughout Tampa Bay</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <span>Advanced moisture detection and drying technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <span>Certified technicians with specialized training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <span>Comprehensive insurance documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <span>Local expertise in Tampa climate challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <span>Seamless transition from mitigation to restoration</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Emergency Water Damage Mitigation: Call Now
              </h2>
              <p className="text-gray-600 mb-6">
                Water damage emergencies require immediate professional mitigation to minimize damage and prevent costly secondary problems. If your Tampa property is experiencing water intrusion, don't delay – call Florida Construction Specialists immediately for emergency mitigation services.
              </p>

              <p className="text-gray-600 mb-6">
                Our 24/7 emergency response team will guide you through immediate damage control steps while dispatching our crews to your location. With proper mitigation, we can often reduce restoration costs significantly and prevent secondary damage that could make your property uninhabitable. Time is critical – call now to protect your property investment.
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
            Contact Florida Construction Specialists today for a free consultation.
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
