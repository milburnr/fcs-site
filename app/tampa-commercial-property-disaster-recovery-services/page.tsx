import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Commercial Property Disaster Recovery Services",
  description: "Recover quickly from unexpected damage with Tampa&apos;s top-rated Commercial Property Disaster Recovery services. Get expert restoration solutions. Call now!",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Commercial Property Disaster Recovery Ser...", href: "/tampa-commercial-property-disaster-recovery-services/" },
];


const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/commercial/medical-construction/", label: "Medical Facility Construction" },
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
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Commercial construction project in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Commercial Property Disaster Recovery in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Recover quickly from unexpected damage with Tampa&apos;s top-rated Commercial Property Disaster Recovery services. Get expert restoration solutions. Call n
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
                When disaster strikes your commercial property in Tampa Bay, every minute counts. Florida Construction Specialists brings 43 years of insurance experience and deep understanding of both sides of the claims process to deliver rapid, comprehensive disaster recovery services. Our team has navigated countless hurricanes, flooding events, and catastrophic losses throughout the Tampa Bay area, making us the trusted partner for commercial property owners when they need it most.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Why Tampa Bay Commercial Properties Need Specialized Disaster Recovery
              </h2>
              <p className="text-gray-600 mb-6">
                The Tampa Bay area faces unique challenges when it comes to commercial property disasters. Our subtropical climate, hurricane seasons, and proximity to water bodies create a perfect storm of potential risks. From hurricane-force winds and storm surge to sudden flooding and prolonged power outages, commercial properties in Tampa face threats that require specialized knowledge and rapid response capabilities.
              </p>

              <p className="text-gray-600 mb-6">
                Unlike residential properties, commercial buildings have complex systems, valuable equipment, and business operations that cannot afford extended downtime. A retail store losing customers during peak season, a medical facility unable to serve patients, or an office building with displaced tenants – these scenarios demand immediate, expert intervention to minimize business interruption and financial losses.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Our 43 Years of Insurance Experience Working for You
              </h2>
              <p className="text-gray-600 mb-6">
                What sets Florida Construction Specialists apart is our unique perspective on insurance restoration. With 43 years of experience working on both sides of the claims process, we understand exactly what insurance adjusters look for, what documentation they require, and how to present claims that result in fair settlements. This insider knowledge means faster approvals, fewer disputes, and maximum coverage for your commercial property damage.
              </p>

              <p className="text-gray-600 mb-6">
                Our team includes certified insurance restoration specialists who speak the language of adjusters, understand policy coverage intricacies, and know how to document damage in ways that insurance companies recognize and accept. We've worked with every major insurance carrier in Florida and have established relationships that expedite the claims process for our clients.
              </p>

              <div className="bg-brand-green-light/20 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Insurance Expertise Benefits:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <span>Pre-approval coordination to expedite project starts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <span>Detailed damage documentation that maximizes claim value</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <span>Direct communication with adjusters to prevent delays</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <span>Supplemental claim preparation for hidden damages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <span>Code upgrade advocacy and coverage optimization</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Comprehensive Commercial Disaster Recovery Services
              </h2>
              <p className="text-gray-600 mb-6">
                Our commercial disaster recovery services cover every aspect of restoration, from initial emergency response through complete reconstruction. We handle structural repairs, systems restoration, interior reconstruction, and business continuity planning to ensure your commercial property returns to full operation as quickly as possible.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Emergency Stabilization Services</h3>
              <p className="text-gray-600 mb-6">
                When disaster strikes, our emergency response team is available 24/7 to secure your property and prevent further damage. We provide emergency board-up services, tarp installation, water extraction, and temporary power solutions to stabilize your commercial property immediately after a disaster event.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Structural Assessment and Repair</h3>
              <p className="text-gray-600 mb-6">
                Our certified engineers and contractors conduct thorough structural assessments to identify both visible and hidden damage. We repair damaged roofing systems, structural framing, foundation issues, and exterior building envelope problems. All work meets current building codes and insurance requirements, often including valuable upgrades that enhance your property's resilience against future disasters.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Building Systems Restoration</h3>
              <p className="text-gray-600 mb-6">
                Commercial properties rely on complex mechanical, electrical, and plumbing systems. Our restoration includes HVAC system repair and replacement, electrical system restoration, plumbing repairs, fire suppression system restoration, and elevator/escalator repairs. We coordinate with specialized subcontractors to ensure all systems are restored to full functionality.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Interior Reconstruction</h3>
              <p className="text-gray-600 mb-6">
                From office spaces to retail environments, we rebuild interiors to match or exceed their pre-loss condition. Our services include flooring replacement, drywall repair and painting, ceiling reconstruction, custom millwork replacement, and tenant improvement restoration. We work with your existing design plans or provide design services to improve your space during reconstruction.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Tampa Bay Hurricane and Flooding Expertise
              </h2>
              <p className="text-gray-600 mb-6">
                Living and working in Tampa Bay means preparing for hurricanes and flood events. Our team has responded to every major hurricane that has impacted our region, from Hurricane Andrew to Hurricane Ian. We understand the unique challenges that Tampa Bay commercial properties face during these events and have developed specialized protocols for rapid response and efficient restoration.
              </p>

              <p className="text-gray-600 mb-6">
                Hurricane damage often combines multiple types of destruction: wind damage to roofing and building envelope, flood damage from storm surge or inland flooding, and secondary damages from power outages and compromised building security. Our comprehensive approach addresses all these damage types simultaneously, reducing restoration time and minimizing business interruption.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Hurricane Damage Response Protocol</h3>
              <p className="text-gray-600 mb-6">
                Our hurricane response begins before the storm arrives. We pre-stage equipment, coordinate with suppliers for materials, and prepare our teams for immediate deployment once conditions are safe. This preparation allows us to respond within hours of a hurricane's passage, securing properties and beginning damage assessment while other contractors are still mobilizing.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Flood Damage Specialization</h3>
              <p className="text-gray-600 mb-6">
                Flooding requires immediate response to prevent mold growth and structural compromise. Our flood response includes rapid water extraction, structural drying, dehumidification, antimicrobial treatments, and documentation for insurance claims. We understand FEMA flood insurance requirements and work with both commercial flood policies and NFIP claims to maximize coverage.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Business Continuity and Temporary Solutions
              </h2>
              <p className="text-gray-600 mb-6">
                We recognize that commercial property owners cannot afford extended business interruptions. Our disaster recovery services include business continuity planning and temporary solutions to keep your operations running during reconstruction. We coordinate temporary space solutions, mobile office setups, and phased reconstruction to minimize operational disruption.
              </p>

              <p className="text-gray-600 mb-6">
                Our project managers work closely with business owners to understand critical operations and develop reconstruction schedules that accommodate business needs. Whether you need to maintain customer access, preserve critical equipment, or ensure employee safety, we build these requirements into our restoration plan.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Technology and Innovation in Disaster Recovery
              </h2>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists employs cutting-edge technology to enhance our disaster recovery services. We use thermal imaging to detect hidden moisture, drone inspections for roof and structural damage assessment, 3D laser scanning for precise damage documentation, and project management software that provides real-time updates to property owners and insurance companies.
              </p>

              <p className="text-gray-600 mb-6">
                Our documentation process includes detailed photographic evidence, comprehensive damage reports, and digital project tracking that insurance companies value. This technology-driven approach reduces disputes, accelerates approvals, and ensures that no damage goes undetected or uncovered.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Working with Insurance Companies and Adjusters
              </h2>
              <p className="text-gray-600 mb-6">
                Insurance claim navigation can be complex and frustrating for commercial property owners. Our team serves as your advocate throughout the claims process, communicating directly with adjusters, providing required documentation, and ensuring that all covered damage is included in the claim settlement. We understand insurance policy language and know how to present claims for maximum coverage.
              </p>

              <p className="text-gray-600 mb-6">
                We also handle supplemental claims when additional damage is discovered during restoration, coordinate with multiple insurance policies when applicable, and assist with code upgrade coverage that can significantly enhance your property's value and resilience.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Case Studies: Successful Commercial Recoveries
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Medical Office Complex - Hurricane Ian</h3>
                <p className="text-gray-600 mb-4">
                  A 15,000 square foot medical complex in South Tampa suffered extensive roof damage and interior flooding during Hurricane Ian. Our team responded within 24 hours, securing the building and beginning water extraction. We coordinated with medical equipment specialists to protect sensitive equipment and worked with multiple insurance policies to ensure complete coverage.
                </p>
                <p className="text-gray-600">
                  Result: Full restoration completed in 90 days with minimal disruption to patient care. Insurance settlement exceeded $1.2 million, including code upgrades that enhanced the building's hurricane resistance.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Retail Shopping Center - Flood Damage</h3>
                <p className="text-gray-600 mb-4">
                  A neighborhood shopping center experienced severe flooding from a failed stormwater system, affecting 8 tenant spaces. We coordinated with individual tenant insurance policies while managing the master property insurance claim. Our phased approach allowed most tenants to remain operational while reconstruction occurred.
                </p>
                <p className="text-gray-600">
                  Result: All tenant spaces restored within 60 days. Master policy claim settled for $850,000 with additional tenant improvement allowances. Zero permanent business closures resulted from the incident.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Prevention and Mitigation Services
              </h2>
              <p className="text-gray-600 mb-6">
                Beyond disaster response, Florida Construction Specialists provides prevention and mitigation services to help commercial properties better withstand future disasters. Our services include hurricane-resistant upgrades, improved drainage systems, backup power solutions, and building envelope enhancements that reduce vulnerability to wind and water damage.
              </p>

              <p className="text-gray-600 mb-6">
                We also conduct vulnerability assessments that identify potential weak points in your commercial property and recommend cost-effective upgrades that often qualify for insurance discounts or special financing programs.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Why Choose Florida Construction Specialists for Commercial Disaster Recovery
              </h2>
              <p className="text-gray-600 mb-6">
                Our 43 years of experience in the Tampa Bay area has given us unparalleled expertise in commercial disaster recovery. We combine deep insurance knowledge with superior construction capabilities to deliver faster, more complete restorations that maximize insurance settlements and minimize business interruption.
              </p>

              <div className="bg-brand-green-light/20 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Our Advantages:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <span>Licensed general contractor with specialized disaster recovery experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <span>24/7 emergency response capability throughout Tampa Bay</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <span>Comprehensive in-house capabilities reducing coordination delays</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <span>Established relationships with all major insurance carriers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <span>Local knowledge of Tampa Bay building codes and requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <span>Proven track record with hundreds of successful commercial recoveries</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Getting Started: Our Disaster Response Process
              </h2>
              <p className="text-gray-600 mb-6">
                When disaster strikes your commercial property, time is critical. Here's how our response process works to get your business back to normal as quickly as possible:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="bg-brand-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">1</div>
                  <div>
                    <h4 className="font-bold text-brand-green-dark mb-1">Emergency Response (0-4 hours)</h4>
                    <p className="text-gray-600 text-sm">24/7 emergency hotline activates our response team. We dispatch crews for immediate property stabilization and damage assessment.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-brand-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">2</div>
                  <div>
                    <h4 className="font-bold text-brand-green-dark mb-1">Damage Assessment (4-24 hours)</h4>
                    <p className="text-gray-600 text-sm">Comprehensive evaluation using advanced technology. Documentation begins for insurance claims while stabilization continues.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-brand-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">3</div>
                  <div>
                    <h4 className="font-bold text-brand-green-dark mb-1">Insurance Coordination (24-48 hours)</h4>
                    <p className="text-gray-600 text-sm">Direct communication with your insurance company. Adjuster meetings coordinated and preliminary estimates provided.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-brand-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">4</div>
                  <div>
                    <h4 className="font-bold text-brand-green-dark mb-1">Restoration Planning (48-72 hours)</h4>
                    <p className="text-gray-600 text-sm">Detailed project planning with business continuity considerations. Timeline and phasing established with property owner approval.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-brand-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">5</div>
                  <div>
                    <h4 className="font-bold text-brand-green-dark mb-1">Restoration Execution</h4>
                    <p className="text-gray-600 text-sm">Full-scale restoration begins with regular progress updates and ongoing coordination with insurance companies and business operations.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                Throughout this process, you'll have a dedicated project manager serving as your single point of contact. They'll coordinate all activities, communicate with insurance companies, and ensure that your restoration stays on schedule and within budget.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Contact Us for Immediate Disaster Response
              </h2>
              <p className="text-gray-600 mb-6">
                Don't let disaster damage put your business at risk. Florida Construction Specialists is ready to respond immediately to your commercial property emergency. Our 43 years of experience, comprehensive insurance knowledge, and commitment to rapid response make us Tampa Bay's trusted partner for commercial disaster recovery.
              </p>

              <p className="text-gray-600 mb-6">
                Call our 24/7 emergency hotline now, and let us help you get your business back to normal as quickly as possible. Time is critical in disaster recovery – the sooner we can begin stabilization and assessment, the faster and more complete your recovery will be.
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
