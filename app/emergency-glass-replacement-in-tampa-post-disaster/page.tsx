import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Emergency Glass Replacement in Tampa Post-Disaster",
  description: "Experienced emergency glass replacement in Tampa post-disaster. Fast, reliable emergency glass repair Tampa services.We secure your property quickly.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Emergency Glass Replacement in Tampa Post Disaster", href: "/emergency-glass-replacement-in-tampa-post-disaster/" },
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
            Emergency Glass Replacement in Tampa Post-Disaster
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Experienced emergency glass replacement in Tampa post-disaster. Fast, reliable emergency glass repair Tampa services.We secure your property quickly.
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
                When disaster strikes Tampa Bay, broken windows and damaged glass pose immediate safety and security threats to property owners. Florida Construction Specialists has provided emergency glass replacement services throughout Tampa for over 43 years, responding to hurricanes, storms, and other disasters that shatter windows and compromise building envelopes. Our rapid response team understands that emergency glass replacement isn't just about aesthetics – it's about protecting your property from further damage, securing against intrusion, and maintaining insurance coverage compliance.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                The Critical Importance of Emergency Glass Replacement in Tampa
              </h2>
              <p className="text-gray-600 mb-6">
                Tampa's position in Florida's hurricane corridor makes emergency glass replacement a crucial service for property owners. When high winds and flying debris break windows, the clock starts ticking on multiple fronts: weather exposure, security vulnerabilities, insurance compliance, and potential liability issues. Every hour of delay increases the risk of water damage, theft, vandalism, and additional structural compromise.
              </p>
              
              <p className="text-gray-600 mb-6">
                Our emergency glass replacement team operates 24/7 during disaster periods, understanding that broken windows create cascading problems that worsen with time. Tampa's subtropical climate means that even brief exposure to rain and humidity can cause thousands of dollars in additional water damage to interior spaces. Quick action with professional emergency glass replacement prevents these secondary damages and protects your insurance claim.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Types of Emergency Glass Replacement Services We Provide
              </h2>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists provides comprehensive emergency glass replacement services for all types of properties throughout the Tampa Bay area. Our extensive experience and specialized equipment allow us to handle any glass replacement challenge, from residential windows to complex commercial glazing systems.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Residential Window Replacement</h3>
              <p className="text-gray-600 mb-6">
                Home windows are particularly vulnerable during Tampa's severe weather events. We provide emergency replacement for single and double-hung windows, casement windows, picture windows, sliding glass doors, and specialty architectural glass. Our residential emergency services include temporary boarding, emergency glazing, and permanent window replacement with upgraded hurricane-resistant options.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Commercial Storefront Glass Replacement</h3>
              <p className="text-gray-600 mb-6">
                Commercial properties face unique challenges when glass is damaged during disasters. Broken storefronts compromise security and business operations while exposing valuable inventory and equipment. We provide 24/7 emergency commercial glass replacement, including large plate glass windows, entry door glass, curtain wall systems, and specialized retail glazing.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Hurricane Impact Window Installation</h3>
              <p className="text-gray-600 mb-6">
                When replacing disaster-damaged windows, many Tampa property owners choose to upgrade to hurricane impact windows that meet Florida Building Code requirements. We offer complete impact window installation services, including proper permitting, code-compliant installation, and insurance documentation for potential premium discounts.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Specialty Glass Applications</h3>
              <p className="text-gray-600 mb-6">
                Our emergency services extend to specialty glass applications including safety glass, tempered glass, laminated glass, insulated glass units, and decorative glass. We maintain relationships with specialty glass manufacturers to ensure rapid availability of hard-to-find glass types during emergency situations.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Case Study: Turner Agri-Civic Center Emergency Glazing</h3>
                <p className="text-gray-700 mb-3">
                  Hurricane Ian's devastating winds shattered over 200 square feet of glass at the Turner Agri-Civic Center, including large commercial windows and entry doors. The facility's exposed position made it particularly vulnerable to wind-driven debris, and the extensive glass damage threatened the building's interior and compromised security for valuable equipment.
                </p>
                <p className="text-gray-700 mb-3">
                  Our emergency response team arrived within two hours of the hurricane's passing, immediately securing the building with temporary boarding and beginning damage assessment. Working around the clock, we coordinated with glass suppliers to source appropriate replacement materials and completed temporary glazing within 24 hours to protect against incoming weather.
                </p>
                <p className="text-gray-700">
                  The permanent glass replacement incorporated upgraded impact-resistant glass that exceeds current Florida Building Code requirements, providing enhanced protection against future storms. This proactive approach not only restored the facility but improved its disaster resilience, demonstrating how emergency glass replacement can be an opportunity for meaningful upgrades.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Our Emergency Response Process for Glass Replacement
              </h2>
              <p className="text-gray-600 mb-6">
                Effective emergency glass replacement requires systematic processes that prioritize safety, security, and rapid restoration. Our proven approach has been refined through decades of disaster response experience throughout Tampa Bay, ensuring consistent, professional results even under challenging conditions.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Immediate Assessment and Safety Measures</h3>
              <p className="text-gray-600 mb-6">
                Upon arrival, our team conducts a comprehensive safety assessment to identify hazards including unstable glass, structural damage, electrical issues, and access challenges. We secure the work area, establish safety perimeters, and begin documentation for insurance purposes while prioritizing immediate threats to safety and security.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Emergency Boarding and Temporary Protection</h3>
              <p className="text-gray-600 mb-6">
                While permanent glass replacement is being arranged, we provide professional emergency boarding services using marine-grade plywood, aluminum panels, or clear polycarbonate sheeting depending on the application. These temporary measures protect against weather, intrusion, and liability while maintaining some visibility where possible.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Glass Sourcing and Logistics Coordination</h3>
              <p className="text-gray-600 mb-6">
                Emergency glass replacement often involves sourcing materials from multiple suppliers, especially during widespread disaster events when demand exceeds local inventory. Our established relationships with glass manufacturers and distributors throughout Florida ensure priority access to replacement materials even during high-demand periods.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Installation and Quality Assurance</h3>
              <p className="text-gray-600 mb-6">
                Professional installation is critical for both immediate function and long-term performance. Our certified glaziers follow manufacturer specifications and Florida Building Code requirements for all installations, ensuring proper sealing, structural integration, and compliance with local building standards.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Hurricane Season Preparation and Glass Vulnerability Assessment
              </h2>
              <p className="text-gray-600 mb-6">
                Proactive preparation significantly reduces the likelihood of emergency glass replacement needs during Tampa's hurricane season. We offer comprehensive glass vulnerability assessments that identify potential failure points and recommend preventive measures to strengthen your property's glass envelope.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Window and Door Inspection Services</h3>
              <p className="text-gray-600 mb-6">
                Our inspection services evaluate existing windows and doors for signs of deterioration, improper installation, or inadequate wind resistance. This includes checking glazing compound condition, hardware functionality, frame integrity, and compliance with current building codes. Early identification of vulnerable elements allows for preventive replacement or reinforcement.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Hurricane Shutter Integration Planning</h3>
              <p className="text-gray-600 mb-6">
                For properties not ready to invest in impact windows, we design and install hurricane shutter systems that protect existing glass during storms. Options include roll-down shutters, accordion shutters, colonial shutters, and removable panels, each with specific advantages depending on the application and budget.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Building Envelope Improvements</h3>
              <p className="text-gray-600 mb-6">
                Glass replacement provides opportunities to improve overall building envelope performance through upgraded glazing, enhanced sealing systems, and improved frame materials. These improvements reduce energy costs, improve comfort, and provide better storm protection while addressing existing maintenance issues.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Insurance Considerations for Emergency Glass Replacement
              </h2>
              <p className="text-gray-600 mb-6">
                Understanding insurance coverage for emergency glass replacement helps property owners make informed decisions during crisis situations. Our experience working with Tampa area insurance companies and adjusters ensures that emergency glass work is properly documented and covered under applicable policies.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Covered Perils and Policy Language</h3>
              <p className="text-gray-600 mb-6">
                Most property insurance policies cover glass damage caused by wind, hail, falling objects, and vandalism. However, coverage details vary significantly between policies, particularly regarding replacement glass specifications, installation requirements, and upgrade allowances. We help clients understand their coverage and ensure compliance with policy requirements.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Emergency Service Documentation</h3>
              <p className="text-gray-600 mb-6">
                Proper documentation is essential for insurance reimbursement of emergency glass replacement services. We photograph all damage before beginning work, maintain detailed material and labor records, and provide comprehensive reports that satisfy insurance company requirements for emergency service claims.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Upgrade Coverage and Code Requirements</h3>
              <p className="text-gray-600 mb-6">
                When glass replacement involves code upgrades or improvements beyond the original installation, additional coverage considerations apply. Many policies include ordinance and law coverage that pays for required upgrades, while others offer optional endorsements for building code improvements. We help navigate these coverage nuances to maximize insurance benefits.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Safety Protocols and OSHA Compliance in Emergency Glass Work
              </h2>
              <p className="text-gray-600 mb-6">
                Emergency glass replacement involves significant safety hazards that require specialized training, equipment, and procedures. Florida Construction Specialists maintains strict safety protocols that exceed OSHA requirements and industry standards, protecting both our workers and property occupants during emergency operations.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Hazardous Material Handling</h3>
              <p className="text-gray-600 mb-6">
                Broken glass creates multiple hazards including cuts, eye injuries, and respiratory exposure to glass particles. Our teams use appropriate personal protective equipment, implement proper cleanup procedures, and follow hazardous waste disposal protocols for contaminated glass materials.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Fall Protection and Height Safety</h3>
              <p className="text-gray-600 mb-6">
                Emergency glass replacement often involves working at elevated heights under challenging conditions. We use comprehensive fall protection systems, maintain proper equipment inspection schedules, and ensure all team members receive regular safety training updates specific to glazing work.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Structural Stability Assessment</h3>
              <p className="text-gray-600 mb-6">
                Disaster-damaged buildings may have compromised structural integrity that affects the safety of glass replacement operations. Our team includes structural assessment capabilities to identify potential hazards and implement appropriate safety measures during emergency work.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Advanced Glass Technologies for Disaster Resilience
              </h2>
              <p className="text-gray-600 mb-6">
                Modern glass technologies offer significant improvements in disaster resistance, energy efficiency, and security compared to traditional glazing systems. When emergency replacement becomes necessary, upgrading to advanced glass systems provides long-term benefits that justify the additional investment.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Impact-Resistant Laminated Glass</h3>
              <p className="text-gray-600 mb-6">
                Laminated glass consists of two or more glass sheets bonded with a plastic interlayer that holds the glass together when broken. This technology prevents penetration by wind-borne debris while maintaining transparency and normal window operation. Impact-resistant laminated glass meets Florida Building Code requirements for high-velocity hurricane zones.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Tempered Safety Glass Applications</h3>
              <p className="text-gray-600 mb-6">
                Tempered glass is heat-treated to increase strength and create safer failure characteristics. When broken, tempered glass crumbles into small, relatively harmless pieces rather than large, dangerous shards. This technology is required by building codes for certain applications and provides enhanced safety during disasters.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Insulated Glass Units for Energy Efficiency</h3>
              <p className="text-gray-600 mb-6">
                Insulated glass units (IGUs) incorporate multiple glass panes separated by insulating air or gas spaces. These systems provide superior energy efficiency while maintaining impact resistance when properly specified. IGUs also offer noise reduction benefits, an important consideration for properties in busy Tampa areas.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Smart Glass and Dynamic Glazing</h3>
              <p className="text-gray-600 mb-6">
                Advanced glazing technologies include electrochromic glass that can change opacity, low-emissivity coatings that control heat transfer, and integrated photovoltaic glass that generates electricity. While more expensive initially, these technologies offer long-term operational benefits and may qualify for tax incentives or utility rebates.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Commercial Glass Replacement: Specialized Considerations
              </h2>
              <p className="text-gray-600 mb-6">
                Commercial properties present unique challenges for emergency glass replacement due to size constraints, business continuity requirements, specialized glazing systems, and complex access issues. Our commercial emergency services are designed to minimize business disruption while ensuring proper restoration.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Curtain Wall and Glazing Systems</h3>
              <p className="text-gray-600 mb-6">
                Modern commercial buildings often incorporate complex curtain wall systems that require specialized knowledge and equipment for proper repair. These systems integrate structural, weatherproofing, and thermal performance in engineered assemblies that must be carefully matched during replacement work.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Security and Access Control Integration</h3>
              <p className="text-gray-600 mb-6">
                Commercial glass replacement often involves integration with security systems, access controls, and fire safety equipment. We coordinate with security vendors and building systems contractors to ensure that glass replacement doesn't compromise existing security or safety systems.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Business Continuity Planning</h3>
              <p className="text-gray-600 mb-6">
                Emergency glass replacement in commercial settings requires careful planning to minimize business disruption. We work with building managers and business owners to schedule work during off-hours when possible, provide temporary solutions that maintain operations, and coordinate with other building systems to prevent conflicts.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Quality Assurance and Warranty Programs
              </h2>
              <p className="text-gray-600 mb-6">
                Professional emergency glass replacement includes comprehensive quality assurance measures and warranty protection that provide peace of mind beyond the immediate crisis. Our quality programs ensure that emergency work meets the same standards as planned construction projects.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Installation Quality Standards</h3>
              <p className="text-gray-600 mb-6">
                All emergency glass installation work follows manufacturer specifications, industry best practices, and applicable building codes. Our certified glaziers receive ongoing training on new products and techniques, ensuring that emergency work maintains professional standards despite time pressures.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Material and Workmanship Warranties</h3>
              <p className="text-gray-600 mb-6">
                We provide comprehensive warranties on both materials and workmanship for all emergency glass replacement work. Material warranties are backed by manufacturers, while workmanship warranties are supported by our company's 43-year track record and financial stability in the Tampa market.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Follow-Up Inspection Services</h3>
              <p className="text-gray-600 mb-6">
                Emergency installations receive follow-up inspections to ensure proper performance and identify any issues that may develop as the building settles or weather conditions change. These inspections help prevent small problems from becoming major failures and demonstrate our commitment to long-term customer satisfaction.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Environmental Considerations and Sustainability
              </h2>
              <p className="text-gray-600 mb-6">
                Emergency glass replacement provides opportunities to improve environmental performance and sustainability while addressing immediate disaster recovery needs. We help clients balance urgent restoration requirements with long-term environmental goals and energy efficiency objectives.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Glass Recycling and Waste Management</h3>
              <p className="text-gray-600 mb-6">
                Proper disposal of damaged glass materials follows environmental best practices including recycling where possible and appropriate hazardous waste handling for materials containing harmful substances. We maintain relationships with certified glass recycling facilities and waste management companies to ensure responsible disposal.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Energy-Efficient Replacement Options</h3>
              <p className="text-gray-600 mb-6">
                Modern glass technologies offer significant energy efficiency improvements over older installations. Low-emissivity coatings, advanced framing materials, and improved sealing systems can reduce energy consumption while providing better comfort and storm resistance. These improvements often qualify for utility rebates or tax incentives.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Sustainable Material Selection</h3>
              <p className="text-gray-600 mb-6">
                When possible, we prioritize glass products and framing materials that incorporate recycled content, sustainable manufacturing processes, and extended service life characteristics. These choices support broader sustainability goals while maintaining performance and cost-effectiveness.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Emergency Response Logistics and Resource Management
              </h2>
              <p className="text-gray-600 mb-6">
                Effective emergency glass replacement requires sophisticated logistics coordination to ensure materials, equipment, and personnel are available when and where needed. Our emergency response capabilities have been developed through decades of disaster response experience in the Tampa Bay area.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Pre-Positioned Inventory and Materials</h3>
              <p className="text-gray-600 mb-6">
                We maintain strategic inventory of common glass sizes and emergency materials to ensure immediate availability during widespread disaster events. This includes standard window glass, boarding materials, hardware, and specialized tools required for rapid deployment.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Mobile Equipment and Transportation</h3>
              <p className="text-gray-600 mb-6">
                Our emergency response fleet includes specialized vehicles equipped with glass handling equipment, portable tools, and safety systems necessary for field operations. Mobile capabilities allow us to respond quickly to multiple locations and adapt to changing conditions during disaster events.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">24/7 Communication and Dispatch Systems</h3>
              <p className="text-gray-600 mb-6">
                Emergency glass replacement requires reliable communication systems that function during disasters when normal infrastructure may be compromised. We maintain redundant communication capabilities including satellite communication options to ensure continuous contact with clients and emergency coordination.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Getting Emergency Glass Replacement Services in Tampa
              </h2>
              <p className="text-gray-600 mb-6">
                When disaster strikes and your property's glass is damaged, immediate action is essential to prevent further damage and ensure safety. Florida Construction Specialists' emergency glass replacement services are available 24/7 during disaster periods, with rapid response teams ready to secure your property and begin restoration work immediately.
              </p>

              <p className="text-gray-600 mb-6">
                Our emergency hotline connects you directly with experienced dispatch personnel who can assess your situation, dispatch appropriate resources, and provide immediate guidance on safety and damage mitigation measures. With over four decades of experience serving Tampa Bay, we understand the urgency of glass replacement needs and have the resources to respond quickly regardless of conditions.
              </p>

              <p className="text-gray-600 mb-6">
                Don't let broken glass compromise your property's security, safety, or weather protection. Contact Florida Construction Specialists immediately for professional emergency glass replacement services that protect your property, comply with insurance requirements, and restore your peace of mind. Our proven track record of successful disaster response throughout Tampa Bay makes us the trusted choice when you need emergency glass replacement services you can count on.
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
