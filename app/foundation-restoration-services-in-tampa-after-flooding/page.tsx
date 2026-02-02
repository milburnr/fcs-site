import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Foundation Restoration Services in Tampa After Flooding",
  description: "Get expert foundation restoration services in Tampa, ensure your home&apos;s stability with effective foundation repair,water damage repair,and flood damage resto...",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Foundation Restoration Services in Tampa After ...", href: "/foundation-restoration-services-in-tampa-after-flooding/" },
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
            Foundation Restoration in Tampa After Flooding
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Get expert foundation restoration services in Tampa, ensure your home&apos;s stability with effective foundation repair,water damage repair,and flood damag
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
                Flooding poses the most serious threat to foundation integrity in Tampa Bay, where flat topography and frequent storms create conditions that can undermine even well-built foundations. Florida Construction Specialists has provided expert foundation restoration services in Tampa for over 43 years, understanding that flood-damaged foundations require immediate attention to prevent structural failure and costly repairs. Our comprehensive foundation restoration services address both immediate damage and long-term stability, ensuring that your property remains safe, structurally sound, and protected against future flooding events.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Understanding Flood Damage Impact on Tampa Foundations
              </h2>
              <p className="text-gray-600 mb-6">
                Tampa's unique geographic and geological characteristics make foundations particularly vulnerable to flood damage. The area's flat topography, high water table, and sandy soil create conditions where flood water can remain in contact with foundations for extended periods, causing both immediate and long-term damage. Understanding how floods affect different foundation types is crucial for effective restoration planning and preventing future problems.
              </p>
              
              <p className="text-gray-600 mb-6">
                Flood damage to foundations occurs through multiple mechanisms including soil erosion, hydrostatic pressure, contamination, and thermal cycling. Each of these damage types requires specific repair techniques and materials to ensure permanent restoration. Our foundation restoration specialists conduct comprehensive assessments that identify all damage types and develop integrated repair strategies that address both visible and hidden foundation problems.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Common Foundation Problems Caused by Tampa Flooding
              </h2>
              <p className="text-gray-600 mb-6">
                Tampa's flooding events create predictable patterns of foundation damage that require specialized knowledge and repair techniques. Our decades of experience restoring flood-damaged foundations have identified the most common problems and developed proven solutions that provide permanent restoration and improved flood resistance.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Soil Erosion and Foundation Undermining</h3>
              <p className="text-gray-600 mb-6">
                Flood waters erode soil from around and beneath foundations, creating voids that cause settling, cracking, and structural instability. Tampa's sandy soils are particularly vulnerable to erosion, with flood waters capable of removing significant amounts of supporting soil in just hours. Foundation undermining requires immediate attention to prevent catastrophic failure and ensure long-term stability.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Hydrostatic Pressure and Structural Cracking</h3>
              <p className="text-gray-600 mb-6">
                Standing flood water creates hydrostatic pressure against foundation walls and slabs, causing cracking, bowing, and structural failure. This pressure increases dramatically with water depth and duration, making rapid water removal critical for minimizing damage. Hydrostatic pressure damage often appears as horizontal cracks in walls, vertical movement in slabs, and joint separation in masonry foundations.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Contamination and Material Degradation</h3>
              <p className="text-gray-600 mb-6">
                Flood waters carry contaminants including sewage, chemicals, salt water, and organic matter that can penetrate foundation materials and cause long-term degradation. These contaminants weaken concrete, corrode reinforcing steel, and create conditions for ongoing deterioration even after flood waters recede. Professional cleaning and treatment are essential for preventing continued damage and ensuring foundation longevity.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Thermal and Moisture Cycling Effects</h3>
              <p className="text-gray-600 mb-6">
                Repeated wetting and drying cycles cause foundation materials to expand and contract, leading to cracking, joint failure, and surface deterioration. Tampa's climate amplifies these effects through high temperatures and humidity that accelerate thermal cycling and moisture penetration. Understanding these cycles is crucial for selecting repair materials and techniques that withstand Tampa's challenging environment.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Case Study: Turner Agri-Civic Center Foundation Restoration</h3>
                <p className="text-gray-700 mb-3">
                  Hurricane Ian's storm surge caused extensive flooding at the Turner Agri-Civic Center, with standing water reaching 4 feet above the foundation slab for over 12 hours. The combination of hydrostatic pressure, soil erosion, and contamination created multiple foundation problems including cracked walls, undermined footings, and contaminated concrete throughout the lower level.
                </p>
                <p className="text-gray-700 mb-3">
                  Our foundation restoration team conducted a comprehensive structural assessment using ground-penetrating radar, core sampling, and load testing to determine the extent of damage. The restoration required underpinning of undermined footings, injection of structural cracks, complete decontamination of affected materials, and installation of improved drainage systems.
                </p>
                <p className="text-gray-700">
                  The project incorporated advanced materials including polymer-modified concrete, corrosion-resistant reinforcement, and waterproofing systems that exceed original specifications. Today, the Turner Agri-Civic Center foundation is more resistant to flood damage than before the hurricane, demonstrating how professional restoration can improve upon original construction while addressing existing vulnerabilities.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Professional Foundation Assessment and Damage Evaluation
              </h2>
              <p className="text-gray-600 mb-6">
                Effective foundation restoration begins with comprehensive assessment that identifies all damage types, evaluates structural integrity, and determines appropriate repair strategies. Our assessment process uses advanced technology and engineering analysis to provide accurate evaluation of foundation condition and restoration requirements.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Structural Engineering Evaluation</h3>
              <p className="text-gray-600 mb-6">
                Licensed structural engineers conduct detailed evaluations of foundation damage using calculations, load analysis, and structural modeling to determine safety and required repairs. This engineering analysis ensures that restoration work addresses all structural concerns and meets current building codes. Engineering evaluation is essential for complex damage scenarios and insurance claim documentation.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Ground-Penetrating Radar and Subsurface Investigation</h3>
              <p className="text-gray-600 mb-6">
                Ground-penetrating radar reveals hidden damage including voids, cracks, and material deterioration that isn't visible through surface inspection. This technology identifies problems that could cause future failure if left untreated, ensuring comprehensive restoration that addresses all damage. Subsurface investigation is particularly important for understanding soil conditions and erosion extent following flooding.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Material Testing and Contamination Analysis</h3>
              <p className="text-gray-600 mb-6">
                Core sampling and material testing determine the extent of contamination and material degradation caused by flood exposure. Laboratory analysis identifies harmful contaminants, evaluates concrete strength, and assesses reinforcing steel condition. This information guides cleaning and treatment procedures while determining which materials can be restored versus requiring replacement.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Soil Condition and Bearing Capacity Assessment</h3>
              <p className="text-gray-600 mb-6">
                Flooding affects soil conditions around foundations, potentially reducing bearing capacity and creating ongoing stability issues. Geotechnical evaluation determines current soil conditions, identifies areas requiring improvement, and guides foundation underpinning or reinforcement requirements. Understanding post-flood soil conditions is crucial for ensuring long-term foundation stability.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Foundation Restoration Techniques and Technologies
              </h2>
              <p className="text-gray-600 mb-6">
                Modern foundation restoration incorporates advanced materials and techniques that provide superior performance compared to traditional repair methods. Our restoration approach uses the latest technologies and materials specifically selected for Tampa's challenging environment and flooding risks.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Structural Crack Injection and Sealing</h3>
              <p className="text-gray-600 mb-6">
                Hydraulic and structural cracks require professional injection techniques using epoxy or polyurethane materials that restore structural integrity and prevent water intrusion. Our injection procedures follow manufacturer specifications and industry standards to ensure permanent repairs that withstand Tampa's weather cycles. Injection materials are selected based on crack characteristics, loading conditions, and exposure environment.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Foundation Underpinning and Support Systems</h3>
              <p className="text-gray-600 mb-6">
                Undermined or settled foundations require underpinning techniques that transfer loads to stable soil or bedrock. We use micropiles, helical piers, and push piers depending on soil conditions and structural requirements. These systems provide permanent support that exceeds original foundation capacity while accommodating future settlement or soil movement.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Concrete Restoration and Material Replacement</h3>
              <p className="text-gray-600 mb-6">
                Severely damaged or contaminated foundation materials require removal and replacement using modern concrete technologies. Our restoration uses high-performance concrete mixtures with enhanced durability, chemical resistance, and waterproofing properties. These materials provide superior performance in Tampa's challenging environment while meeting current building codes and standards.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Waterproofing and Drainage System Installation</h3>
              <p className="text-gray-600 mb-6">
                Foundation restoration includes comprehensive waterproofing and drainage systems that prevent future flood damage. We install exterior and interior drainage systems, waterproof membranes, and vapor barriers that manage water effectively. These systems are designed specifically for Tampa's flood risks and groundwater conditions.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Advanced Materials for Tampa Foundation Restoration
              </h2>
              <p className="text-gray-600 mb-6">
                Foundation restoration success depends heavily on material selection that addresses Tampa's specific environmental challenges including flooding, humidity, temperature cycling, and soil conditions. Our material specifications use the latest technologies that provide superior performance and longevity compared to traditional materials.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">High-Performance Concrete Systems</h3>
              <p className="text-gray-600 mb-6">
                Modern concrete technologies include polymer modification, fiber reinforcement, and chemical admixtures that enhance strength, durability, and water resistance. These systems resist chemical attack, reduce permeability, and maintain integrity under challenging conditions. High-performance concrete is essential for foundations exposed to Tampa's flooding and environmental stresses.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Corrosion-Resistant Reinforcement</h3>
              <p className="text-gray-600 mb-6">
                Stainless steel and epoxy-coated reinforcement prevent corrosion damage that commonly affects foundations in Tampa's humid, flooding environment. These materials maintain structural integrity even when exposed to salt water, chemicals, and high moisture levels. Corrosion-resistant reinforcement is particularly important for foundations with previous flood exposure.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Chemical-Resistant Coatings and Sealers</h3>
              <p className="text-gray-600 mb-6">
                Specialized coatings provide chemical resistance, waterproofing, and surface protection that prevents contamination penetration and material degradation. These systems are specifically designed for foundations exposed to sewage, salt water, and chemical contaminants common in Tampa flood waters. Professional application ensures maximum performance and longevity.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Synthetic Waterproofing Membranes</h3>
              <p className="text-gray-600 mb-6">
                Modern membrane systems provide superior waterproofing compared to traditional materials while resisting damage from soil movement and chemical exposure. These systems include self-healing properties, enhanced flexibility, and chemical resistance that maintain effectiveness under challenging conditions. Membrane selection considers Tampa's specific soil and water conditions.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Flood Mitigation and Future Protection Strategies</h2>
              <p className="text-gray-600 mb-6">
                Foundation restoration provides opportunities to incorporate flood mitigation measures that reduce vulnerability to future flooding events. Our restoration approach includes protective systems and design improvements that enhance flood resistance while addressing current damage.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Elevation and Grade Improvements</h3>
              <p className="text-gray-600 mb-6">
                Strategic site grading and building elevation reduce flood exposure while improving drainage around foundations. These improvements often qualify for insurance premium reductions while providing practical flood protection. Elevation work requires careful engineering to maintain structural integrity while achieving flood protection goals.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Enhanced Drainage and Water Management</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive drainage systems include surface drainage, subsurface collection, and pump systems that manage flood water effectively. These systems are designed for Tampa's specific rainfall patterns and flooding characteristics while integrating with existing infrastructure. Enhanced drainage significantly reduces foundation exposure to standing water.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Flood-Resistant Construction Details</h3>
              <p className="text-gray-600 mb-6">
                Foundation restoration incorporates construction details that resist flood damage including flood vents, breakaway walls, and elevated utilities. These features allow flood water to flow through foundations without causing structural damage while maintaining FEMA compliance and insurance eligibility. Flood-resistant details reduce damage severity during future flooding events.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Insurance and Building Code Compliance for Foundation Restoration
              </h2>
              <p className="text-gray-600 mb-6">
                Foundation restoration must comply with insurance requirements and current building codes while addressing flood damage concerns. Understanding these requirements ensures that restoration work maintains coverage eligibility and provides maximum protection for your investment.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">FEMA and Flood Insurance Requirements</h3>
              <p className="text-gray-600 mb-6">
                Foundation restoration in flood-prone areas must comply with FEMA regulations and flood insurance requirements to maintain coverage eligibility. These requirements address elevation, construction methods, and materials that resist flood damage. Compliance with FEMA standards often qualifies properties for insurance premium reductions while improving flood protection.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Florida Building Code Foundation Requirements</h3>
              <p className="text-gray-600 mb-6">
                Foundation restoration must meet current Florida Building Code requirements for structural design, materials, and construction methods. These codes incorporate lessons learned from recent hurricane and flooding events while addressing specific challenges in Tampa's environment. Code compliance ensures restoration work provides maximum protection and maintains permit approval.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Engineering Documentation and Permits</h3>
              <p className="text-gray-600 mb-6">
                Structural foundation repairs require engineering documentation and permit approval to ensure compliance with building codes and insurance requirements. Our restoration projects include comprehensive engineering analysis, permit acquisition, and inspection coordination that satisfies all regulatory requirements while streamlining the restoration process.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Timing and Urgency of Foundation Restoration After Flooding
              </h2>
              <p className="text-gray-600 mb-6">
                Foundation damage progression accelerates after flooding exposure, making timing critical for successful restoration and cost control. Understanding damage progression and restoration timing helps property owners make informed decisions about repair priorities and methods.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Immediate Stabilization Requirements</h3>
              <p className="text-gray-600 mb-6">
                Severely damaged foundations require immediate stabilization to prevent catastrophic failure and ensure safety. Emergency stabilization includes temporary shoring, structural bracing, and load redistribution that maintains stability while permanent restoration is planned. Immediate stabilization prevents additional damage and maintains safety for occupants and workers.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Moisture and Contamination Control</h3>
              <p className="text-gray-600 mb-6">
                Rapid moisture removal and contamination control prevent ongoing damage and health hazards that worsen with time. Professional dehumidification, cleaning, and treatment procedures eliminate harmful contaminants while creating conditions suitable for permanent restoration work. Moisture control is particularly critical in Tampa's humid environment where mold and bacteria grow rapidly.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Optimal Restoration Timing and Sequencing</h3>
              <p className="text-gray-600 mb-6">
                Foundation restoration must be coordinated with other building systems repairs to achieve optimal results and avoid conflicts. Proper sequencing ensures that foundation work supports rather than interferes with other restoration activities while maintaining structural stability throughout the process. Planning restoration timing optimizes outcomes and minimizes overall project duration.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Cost Considerations and Return on Investment for Foundation Restoration
              </h2>
              <p className="text-gray-600 mb-6">
                Foundation restoration represents a significant investment that provides crucial protection for your property's structural integrity and value. Understanding cost factors and return on investment helps property owners make informed decisions about restoration scope and methods that provide optimal value.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Damage Assessment and Repair Scope Costs</h3>
              <p className="text-gray-600 mb-6">
                Foundation restoration costs vary significantly based on damage extent, repair methods, and material requirements. Comprehensive assessment identifies all necessary repairs and prevents cost overruns from undiscovered problems. Professional assessment provides accurate cost estimates that support budget planning and insurance negotiations.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Long-Term Value and Property Protection</h3>
              <p className="text-gray-600 mb-6">
                Professional foundation restoration protects property value while improving structural performance and flood resistance. The investment in proper restoration typically prevents much larger costs from progressive damage and maintains property marketability. Foundation restoration is essential for protecting one of your largest financial investments.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Insurance Coverage and Financial Benefits</h3>
              <p className="text-gray-600 mb-6">
                Foundation restoration costs are typically covered under property insurance policies when damage results from covered perils. Professional restoration documentation supports insurance claims while ensuring that restoration work meets coverage requirements. Some restoration improvements may qualify for insurance premium reductions that provide ongoing financial benefits.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Quality Assurance and Warranty Programs for Foundation Work
              </h2>
              <p className="text-gray-600 mb-6">
                Foundation restoration requires rigorous quality assurance measures and comprehensive warranty protection that provide confidence in restoration outcomes. Our quality programs ensure that foundation work meets the highest standards while providing long-term warranty protection for your investment.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Engineering Quality Control and Testing</h3>
              <p className="text-gray-600 mb-6">
                Foundation restoration includes comprehensive testing of materials, installation procedures, and final performance to ensure compliance with engineering specifications and building codes. Quality control testing provides documentation of restoration effectiveness while identifying any issues requiring correction before project completion.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Materials and Workmanship Warranties</h3>
              <p className="text-gray-600 mb-6">
                Our foundation restoration work includes comprehensive warranties on both materials and workmanship that provide protection against defects and failures. Warranty terms reflect the expected performance life of restoration materials and installation quality, providing confidence that your investment is protected for years to come.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Long-Term Performance Monitoring</h3>
              <p className="text-gray-600 mb-6">
                Foundation restoration effectiveness requires ongoing monitoring to ensure that repairs perform as expected and identify any developing issues. We provide monitoring recommendations and periodic inspection services that maintain restoration effectiveness while supporting warranty coverage. Performance monitoring helps optimize foundation maintenance and prevents small problems from becoming major failures.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Getting Professional Foundation Restoration in Tampa
              </h2>
              <p className="text-gray-600 mb-6">
                When flooding damages your Tampa foundation, immediate professional restoration protects your property's structural integrity while preventing progressive damage that can threaten your entire investment. Florida Construction Specialists' foundation restoration services combine 43 years of experience with the latest technologies and materials to provide permanent solutions that exceed original foundation performance.
              </p>

              <p className="text-gray-600 mb-6">
                Our foundation restoration process begins with comprehensive engineering assessment that identifies all damage and determines optimal repair strategies. We coordinate with insurance companies, obtain necessary permits, and manage all aspects of restoration work to ensure successful outcomes with minimal disruption to your property use. Our expertise in Tampa's unique geology and flooding conditions ensures that foundation restoration addresses both current damage and future protection.
              </p>

              <p className="text-gray-600 mb-6">
                Don't let flood-damaged foundations threaten your property's safety and value. Contact Florida Construction Specialists immediately for professional foundation restoration services that protect your investment while improving flood resistance for the future. Our proven track record and comprehensive approach make us Tampa Bay's trusted choice for foundation restoration when structural integrity matters most.
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
