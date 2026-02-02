import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Hurricane Damage Repair Services in Tampa",
  description: "Looking Hurricane Damage Repair Services in Tampa? Our team specializes in hurricane restoration and storm damage repair. Get fast, reliable property repairs.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Hurricane Damage Repair Services in Tampa", href: "/hurricane-damage-repair-services-in-tampa/" },
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
            Tampa Hurricane Damage Repair Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Looking Hurricane Damage Repair Services in Tampa? Our team specializes in hurricane restoration and storm damage repair. Get fast, reliable property
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
                Hurricane damage repair in Tampa requires specialized expertise that addresses the complex interactions of wind damage, water intrusion, and structural compromise created by major storm events. Florida Construction Specialists has provided comprehensive hurricane damage repair services throughout Tampa Bay for over 43 years, responding to every major hurricane from Elena in 1985 through Ian in 2022. Our hurricane repair expertise combines rapid emergency response with complete reconstruction services that restore properties to pre-storm condition while improving resistance to future storms.
              </p>

              <p className="text-gray-600 mb-6">
                Our unique position in Tampa's construction industry stems from 43 years of experience working both sides of insurance claims – as contractors advocating for property owners and as consultants advising insurance companies on appropriate repair scope and pricing. This dual perspective provides unparalleled insight into how hurricane damage claims are evaluated and what documentation produces optimal outcomes for property owners facing complex hurricane restoration challenges.
              </p>

              <p className="text-gray-600 mb-6">
                Hurricane damage in Tampa Bay creates predictable patterns that require specialized knowledge of regional building techniques, materials performance in high-wind environments, and insurance coverage provisions specific to hurricane losses. Our comprehensive approach addresses immediate emergency needs while developing long-term restoration strategies that improve property resilience against future hurricane events.
              </p>

              <p className="text-gray-600 mb-6">
                Every hurricane damage repair project begins with comprehensive assessment that identifies both obvious and hidden damage throughout the property. Hurricane damage often involves multiple building systems and requires coordinated restoration that addresses structural, mechanical, electrical, and finish components in proper sequence to achieve optimal results while maximizing insurance coverage benefits.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Understanding Hurricane Damage Patterns in Tampa Bay
              </h2>
              <p className="text-gray-600 mb-6">
                Tampa Bay's geographic location in Florida's hurricane corridor creates specific damage patterns that require specialized repair expertise. Our decades of hurricane restoration experience have identified common damage characteristics and developed proven repair strategies that address Tampa's unique vulnerabilities while providing superior long-term performance.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Wind Damage and Structural Impact</h3>
              <p className="text-gray-600 mb-6">
                Hurricane winds create both positive pressure and negative suction forces that stress building envelopes beyond design limits. Roof systems, windows, doors, and siding components are particularly vulnerable to wind damage that can compromise the entire building envelope. Understanding wind damage patterns is critical for developing repair strategies that restore structural integrity while improving wind resistance.
              </p>

              <p className="text-gray-600 mb-6">
                Wind damage assessment requires engineering expertise that evaluates both visible damage and hidden structural compromise that could affect safety and long-term performance. Our wind damage evaluation includes structural analysis, connection testing, and material assessment that ensures complete identification of repair requirements for accurate insurance claims and effective restoration.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Water Intrusion and Secondary Damage</h3>
              <p className="text-gray-600 mb-6">
                Hurricane water damage occurs through multiple mechanisms including roof damage, window failure, storm surge, and flooding that create complex moisture problems throughout affected buildings. Tampa's high humidity and warm temperatures accelerate water damage progression, making rapid response critical for preventing mold growth and structural deterioration.
              </p>

              <p className="text-gray-600 mb-6">
                Water damage restoration requires immediate moisture extraction, comprehensive drying, and contamination control that prevents secondary damage progression. Our water damage expertise includes advanced moisture detection, professional drying techniques, and antimicrobial treatments that ensure complete moisture removal and safe restoration conditions.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Combined Impact and System Failures</h3>
              <p className="text-gray-600 mb-6">
                Hurricane damage typically involves multiple building systems that interact in complex ways requiring integrated repair strategies. Roof damage allows water intrusion that affects electrical systems, structural components, and interior finishes simultaneously. Understanding these interactions is essential for developing effective repair sequences and comprehensive insurance claims.
              </p>

              <p className="text-gray-600 mb-6">
                System integration expertise ensures that hurricane repairs address all affected components in proper sequence while avoiding conflicts between different repair activities. This coordinated approach prevents delays and additional costs while ensuring that all hurricane damage is properly restored and documented for insurance purposes.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Case Study: Turner Agri-Civic Center Hurricane Ian Restoration</h3>
                <p className="text-gray-700 mb-3">
                  Hurricane Ian devastated the Turner Agri-Civic Center with sustained winds exceeding 150 mph and storm surge flooding that created the perfect storm of hurricane damage. The facility suffered complete roof failure, extensive window damage, flooding throughout the lower level, and compromise of electrical, mechanical, and structural systems across the entire 40,000 square foot complex.
                </p>
                <p className="text-gray-700 mb-3">
                  Our hurricane restoration team mobilized immediately after the storm, conducting emergency damage assessment while coordinating with insurance adjusters, engineers, and emergency services. The complexity of the damage required comprehensive documentation, structural engineering evaluation, environmental testing, and coordinated restoration of multiple building systems over an 18-month timeline.
                </p>
                <p className="text-gray-700 mb-3">
                  The insurance claim for this project exceeded $3.8 million and involved complex coverage issues including wind versus flood damage, ordinance and law upgrades, business interruption, and specialized facility requirements. Our 43 years of insurance experience proved crucial in structuring the claim to access maximum coverage while ensuring compliance with policy requirements and FEMA regulations.
                </p>
                <p className="text-gray-700">
                  The completed restoration incorporated significant improvements including enhanced hurricane resistance, updated building systems, improved accessibility, and flood mitigation measures that exceed original construction standards. Today, the Turner Agri-Civic Center serves as a model of hurricane-resilient construction while providing expanded community services with confidence in its ability to withstand future storms.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Emergency Response and Immediate Damage Mitigation
              </h2>
              <p className="text-gray-600 mb-6">
                Effective hurricane damage repair begins with immediate emergency response that prevents further damage while preserving evidence needed for insurance claims. Our 24/7 emergency response capabilities mobilize immediately after hurricane passage, providing critical services that protect property and establish the foundation for successful restoration.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Rapid Damage Assessment and Documentation</h3>
              <p className="text-gray-600 mb-6">
                Professional hurricane damage assessment must occur immediately after storms to capture evidence before cleanup activities begin. Our assessment teams use advanced documentation techniques including drone photography, thermal imaging, and moisture detection that provide comprehensive evidence for insurance claims while identifying all damage requiring restoration.
              </p>

              <p className="text-gray-600 mb-6">
                Documentation expertise includes understanding what insurance adjusters need to see and how to present damage evidence in formats that support maximum claim settlements. Our documentation often reveals additional damage that significantly increases claim values while ensuring that all legitimate hurricane damage is included in insurance settlements.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Emergency Water Extraction and Drying</h3>
              <p className="text-gray-600 mb-6">
                Hurricane water damage requires immediate extraction and drying to prevent mold growth and structural deterioration in Tampa's humid environment. Our emergency water damage services deploy industrial extraction equipment, commercial dehumidifiers, and air movement systems that quickly establish controlled drying conditions throughout affected areas.
              </p>

              <p className="text-gray-600 mb-6">
                Professional drying protocols include moisture monitoring, environmental controls, and antimicrobial treatments that ensure complete water removal while preventing secondary damage that could complicate restoration and insurance claims. Rapid professional drying significantly reduces total restoration costs while improving outcomes.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Structural Stabilization and Safety Securing</h3>
              <p className="text-gray-600 mb-6">
                Hurricane damage often compromises structural integrity requiring immediate stabilization and safety measures. Our emergency structural services include temporary shoring, emergency roof repairs, and building securing that protects against additional damage while maintaining safe conditions for restoration work and insurance inspections.
              </p>

              <p className="text-gray-600 mb-6">
                Emergency structural work follows engineering protocols and building code requirements that ensure safety while supporting permanent restoration goals. Professional structural stabilization prevents additional damage and liability issues while creating stable conditions for comprehensive restoration planning.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Comprehensive Hurricane Damage Restoration Services
              </h2>
              <p className="text-gray-600 mb-6">
                Complete hurricane restoration addresses all affected building components through coordinated repair sequences that restore properties to pre-storm condition while improving hurricane resistance. Our comprehensive approach ensures that no damage is overlooked while providing opportunities for meaningful improvements that enhance property value and storm resilience.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Roof System Restoration and Upgrades</h3>
              <p className="text-gray-600 mb-6">
                Hurricane roof damage requires specialized repair techniques that address wind damage, water intrusion, and structural compromise while meeting current building code requirements. Our roof restoration services include emergency repairs, complete replacement, and upgrade opportunities that provide enhanced hurricane protection while maximizing insurance coverage benefits.
              </p>

              <p className="text-gray-600 mb-6">
                Modern roofing systems incorporate advanced materials and installation techniques that exceed original specifications while providing superior hurricane resistance. Our roofing expertise includes impact-resistant materials, enhanced attachment systems, and integrated flashing details that improve long-term performance while reducing future hurricane damage risk.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Window and Door Hurricane Impact Restoration</h3>
              <p className="text-gray-600 mb-6">
                Hurricane damage to windows and doors creates immediate security and weather vulnerabilities while providing opportunities for impact-resistant upgrades. Our window and door restoration includes emergency boarding, temporary protection, and permanent replacement with hurricane-rated systems that meet current building code requirements.
              </p>

              <p className="text-gray-600 mb-6">
                Impact-resistant windows and doors provide significant insurance and practical benefits through enhanced storm protection, energy efficiency, and security features. These upgrades often qualify for insurance premium discounts while providing superior protection against future hurricane events.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Structural and Framing System Repairs</h3>
              <p className="text-gray-600 mb-6">
                Hurricane structural damage requires engineering evaluation and specialized repair techniques that restore load-carrying capacity while improving connection details and structural integrity. Our structural restoration includes engineering analysis, code-compliant repairs, and upgrade opportunities that enhance overall building performance.
              </p>

              <p className="text-gray-600 mb-6">
                Modern structural repair techniques use advanced materials and connection systems that exceed original construction specifications while providing enhanced hurricane resistance. Structural upgrades often qualify for building code coverage that provides additional insurance benefits during restoration projects.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Electrical and Mechanical System Restoration</h3>
              <p className="text-gray-600 mb-6">
                Hurricane damage to electrical and mechanical systems requires specialized assessment and restoration that ensures safety and code compliance while improving performance and efficiency. Our system restoration includes complete evaluation, necessary repairs, and upgrade opportunities that enhance overall building operations.
              </p>

              <p className="text-gray-600 mb-6">
                System upgrades during hurricane restoration provide opportunities for improved efficiency, code compliance, and enhanced protection against future storm damage. These improvements often qualify for utility rebates and tax incentives that offset upgrade costs while providing long-term operational benefits.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Hurricane Insurance Claims and Coverage Optimization
              </h2>
              <p className="text-gray-600 mb-6">
                Successful hurricane insurance claims require strategic planning that maximizes available coverage while ensuring compliance with policy requirements and regulatory standards. Our 43 years of experience working both sides of insurance claims provides unique insight into how adjusters evaluate hurricane damage and what produces optimal claim outcomes.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Wind vs. Flood Damage Assessment and Coverage</h3>
              <p className="text-gray-600 mb-6">
                Hurricane damage often involves both wind and flood impacts that require careful evaluation to determine appropriate coverage sources and maximize available benefits. Understanding the differences between wind and flood damage helps ensure that all damage is properly categorized and claimed under appropriate policies.
              </p>

              <p className="text-gray-600 mb-6">
                Our damage assessment expertise includes identifying damage causes and providing documentation that supports appropriate coverage determinations. This expertise often reveals additional covered damage while preventing disputes over coverage interpretation that could reduce claim settlements.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Building Code Upgrade and Ordinance Coverage</h3>
              <p className="text-gray-600 mb-6">
                Hurricane restoration often triggers building code upgrade requirements that qualify for additional insurance coverage through ordinance and law provisions. Understanding these requirements and coverage opportunities helps maximize available benefits while ensuring that restoration work meets current standards and regulations.
              </p>

              <p className="text-gray-600 mb-6">
                Code upgrade coverage can provide substantial additional benefits for hurricane restoration projects while ensuring that restored buildings meet current safety and performance standards. Our expertise in code requirements and insurance coverage helps optimize these valuable benefits during restoration planning.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Business Interruption and Additional Living Expenses</h3>
              <p className="text-gray-600 mb-6">
                Hurricane damage often requires temporary relocation and business interruption that qualifies for additional insurance coverage beyond property damage repairs. Understanding these coverage provisions helps ensure that all hurricane-related costs are properly claimed and covered under applicable policies.
              </p>

              <p className="text-gray-600 mb-6">
                Business interruption and additional living expense claims require careful documentation of costs and restoration timelines that support coverage determinations. Our project management expertise helps develop realistic timelines and cost projections that support these important coverage provisions.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Advanced Hurricane Damage Assessment Technologies
              </h2>
              <p className="text-gray-600 mb-6">
                Modern hurricane damage assessment incorporates advanced technologies that reveal hidden damage and provide comprehensive documentation for insurance and restoration purposes. Our investment in cutting-edge assessment tools ensures that no damage is missed while providing superior documentation that supports successful insurance claims.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Drone Technology for Aerial Damage Assessment</h3>
              <p className="text-gray-600 mb-6">
                Unmanned aerial systems provide safe access to hurricane-damaged roofs and upper building areas that would be dangerous to inspect through conventional methods. Drone technology captures high-resolution imagery and video that documents damage extent while providing unique perspectives for insurance adjusters and restoration planning.
              </p>

              <p className="text-gray-600 mb-6">
                Aerial documentation is particularly valuable for large properties, complex roof systems, and areas with access restrictions common after hurricane events. Drone technology enables rapid assessment of multiple properties while providing comprehensive documentation that supports accurate damage evaluation and restoration planning.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Thermal Imaging for Hidden Damage Detection</h3>
              <p className="text-gray-600 mb-6">
                Infrared thermal imaging reveals moisture intrusion, structural damage, and thermal irregularities that aren't visible through conventional inspection methods. Hurricane damage often creates hidden moisture problems and structural issues that require specialized detection equipment to identify and document properly.
              </p>

              <p className="text-gray-600 mb-6">
                Thermal imaging documentation provides scientific evidence of damage that supports insurance claims while identifying restoration requirements that might otherwise be missed. This comprehensive approach often reveals additional damage that significantly increases claim values while ensuring complete restoration.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Moisture Detection and Environmental Monitoring</h3>
              <p className="text-gray-600 mb-6">
                Hurricane water damage requires precise moisture measurement and monitoring that tracks drying progress and ensures complete moisture removal. Professional moisture detection equipment provides scientific documentation of conditions while ensuring that drying procedures achieve safe levels for restoration work.
              </p>

              <p className="text-gray-600 mb-6">
                Environmental monitoring includes air quality testing, contamination assessment, and safety verification that protects occupants and workers while documenting conditions for insurance and regulatory compliance. Professional monitoring provides objective evidence that supports restoration decisions and regulatory approval.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Hurricane-Resistant Construction and Mitigation Strategies
              </h2>
              <p className="text-gray-600 mb-6">
                Hurricane restoration provides opportunities to incorporate mitigation measures that reduce vulnerability to future storm events while improving overall building performance. Our restoration approach includes protective strategies and design improvements that enhance hurricane resistance while providing excellent return on investment.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Enhanced Building Envelope Protection</h3>
              <p className="text-gray-600 mb-6">
                Hurricane restoration includes opportunities to upgrade building envelope components with enhanced wind resistance, impact protection, and weatherproofing systems. These improvements provide superior performance during future storms while often qualifying for insurance premium discounts and tax incentives.
              </p>

              <p className="text-gray-600 mb-6">
                Modern building envelope technologies include impact-resistant materials, enhanced sealing systems, and improved connection details that exceed original construction standards while providing long-term durability and performance benefits. These upgrades represent excellent investments in property protection and value enhancement.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Structural Strengthening and Connection Improvements</h3>
              <p className="text-gray-600 mb-6">
                Structural improvements during hurricane restoration can significantly enhance wind resistance through upgraded connections, reinforced framing, and improved load paths. These improvements often qualify for building code coverage while providing superior protection against future hurricane events.
              </p>

              <p className="text-gray-600 mb-6">
                Modern structural techniques use advanced materials and connection systems that provide enhanced hurricane resistance while meeting current building code requirements. Structural improvements represent long-term investments in safety and property protection that provide excellent returns through reduced hurricane damage risk.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Site Drainage and Flood Mitigation Measures</h3>
              <p className="text-gray-600 mb-6">
                Hurricane restoration includes opportunities to improve site drainage and flood protection through enhanced grading, drainage systems, and elevation improvements. These measures reduce flood damage risk while often qualifying for FEMA mitigation grants and insurance premium reductions.
              </p>

              <p className="text-gray-600 mb-6">
                Flood mitigation measures provide excellent protection against hurricane storm surge and flooding while improving overall site performance during normal rainfall events. These improvements represent valuable investments in property protection and long-term maintenance cost reduction.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Project Management and Restoration Coordination
              </h2>
              <p className="text-gray-600 mb-6">
                Complex hurricane restoration projects require sophisticated project management that coordinates multiple contractors, manages material procurement, and ensures quality control while maintaining communication with insurance companies and regulatory agencies. Our project management expertise ensures successful outcomes while minimizing disruption and delays.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Multi-Trade Coordination and Sequencing</h3>
              <p className="text-gray-600 mb-6">
                Hurricane restoration typically involves multiple construction trades working in coordinated sequences that require careful planning and management to avoid conflicts and delays. Professional project management ensures efficient work progression while maintaining quality standards and safety requirements.
              </p>

              <p className="text-gray-600 mb-6">
                Coordination expertise prevents common problems including schedule conflicts, material delays, and quality issues that can extend project timelines and increase costs. Effective coordination ensures that hurricane restoration proceeds smoothly while meeting all stakeholder requirements and deadlines.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Material Procurement and Supply Chain Management</h3>
              <p className="text-gray-600 mb-6">
                Hurricane restoration often occurs during periods of high demand when materials may be scarce and expensive. Professional supply chain management ensures material availability while controlling costs and maintaining quality standards that support successful project completion.
              </p>

              <p className="text-gray-600 mb-6">
                Material expertise includes understanding product availability, quality standards, and cost factors that affect restoration planning and outcomes. Professional procurement often achieves significant cost savings while ensuring material quality and availability that support project schedules.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Quality Control and Progress Monitoring</h3>
              <p className="text-gray-600 mb-6">
                Hurricane restoration quality requires continuous monitoring and control measures that ensure work meets specifications while maintaining progress toward completion. Professional quality control prevents problems before they become costly corrections while ensuring that restoration work meets all requirements and standards.
              </p>

              <p className="text-gray-600 mb-6">
                Quality control expertise includes understanding construction standards, material requirements, and inspection procedures that ensure successful project outcomes. Effective quality control minimizes warranty issues while ensuring that restoration work provides long-term performance and value.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Getting Professional Hurricane Damage Repair in Tampa
              </h2>
              <p className="text-gray-600 mb-6">
                When hurricane damage affects your Tampa property, immediate professional restoration protects your investment while ensuring successful insurance claims and superior restoration outcomes. Florida Construction Specialists' hurricane damage repair services combine 43 years of experience with advanced technologies and proven techniques that restore properties to exceed pre-storm condition.
              </p>

              <p className="text-gray-600 mb-6">
                Our hurricane restoration process begins with comprehensive damage assessment that identifies all affected building components while providing documentation that supports maximum insurance recovery. We coordinate with insurance companies, obtain necessary permits, and manage all aspects of restoration work to ensure successful outcomes with minimal disruption to your life or business operations.
              </p>

              <p className="text-gray-600 mb-6">
                Don't let hurricane damage compromise your property's safety, value, or functionality. Contact Florida Construction Specialists immediately for professional hurricane damage repair services that protect your investment while improving resilience against future storms. Our proven track record of successful hurricane restoration throughout Tampa Bay makes us the trusted choice when hurricane damage repair expertise matters most.
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
