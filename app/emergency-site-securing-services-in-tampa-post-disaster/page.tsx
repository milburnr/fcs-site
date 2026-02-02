import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Emergency Site Securing Services in Tampa Post-Disaster",
  description: "Reliable emergency site securing services in Tampa post-disaster - contact us for rapid response and expert securing services to ensure your property&apos;s safety.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Emergency Site Securing Services in Tampa Post ...", href: "/emergency-site-securing-services-in-tampa-post-disaster/" },
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
            Emergency Site Securing in Tampa Post-Disaster
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Reliable emergency site securing services in Tampa post-disaster - contact us for rapid response and expert securing services to ensure your property&apos;
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
                When disaster damages your Tampa property, immediate site securing becomes critical for preventing theft, vandalism, liability issues, and additional weather damage. Florida Construction Specialists has provided emergency site securing services throughout Tampa Bay for over 43 years, understanding that rapid, professional security measures protect your property, preserve your insurance coverage, and prevent costly secondary losses. Our 24/7 emergency site securing services deploy immediately after disasters, providing comprehensive protection that safeguards your investment while restoration planning proceeds.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Critical Importance of Emergency Site Securing in Tampa
              </h2>
              <p className="text-gray-600 mb-6">
                Disaster-damaged properties become immediate targets for theft and vandalism, while compromised structures create serious liability risks for property owners. Tampa's urban environment and tourist population create particular security challenges after disasters, as damaged properties attract opportunistic criminals and curious visitors. Professional site securing services provide immediate protection that prevents these secondary losses while maintaining compliance with insurance requirements and local safety regulations.
              </p>
              
              <p className="text-gray-600 mb-6">
                Beyond security concerns, unsecured disaster-damaged sites face continued weather exposure that can multiply damage costs exponentially. Tampa's frequent rain and high humidity can turn minor damage into major structural problems within hours if proper securing measures aren't implemented immediately. Our comprehensive approach addresses both security and weather protection, creating a controlled environment that prevents damage escalation while permanent restoration is planned and executed.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Comprehensive Emergency Site Securing Services
              </h2>
              <p className="text-gray-600 mb-6">
                Professional site securing involves multiple coordinated services that address immediate vulnerabilities while preparing for extended protection during restoration. Our comprehensive approach ensures that all aspects of site security are addressed promptly and professionally, providing complete protection for your property investment.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Emergency Board-Up Services</h3>
              <p className="text-gray-600 mb-6">
                Broken windows, damaged doors, and structural openings create immediate security vulnerabilities that require professional board-up services. We use marine-grade plywood, steel security panels, and specialized hardware that provides maximum protection while maintaining access for insurance inspections and restoration work. Our board-up installations follow industry standards and local building codes, ensuring that temporary protection doesn't interfere with permanent restoration planning.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Perimeter Fencing and Access Control</h3>
              <p className="text-gray-600 mb-6">
                Large properties and construction sites require perimeter security that controls access while allowing necessary work to proceed. We install temporary fencing systems, access gates, and signage that clearly establish property boundaries and restrict unauthorized entry. These measures protect against liability issues while providing controlled access for restoration teams, insurance adjusters, and property owners.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Roof Tarping and Weather Protection</h3>
              <p className="text-gray-600 mb-6">
                Damaged roofs require immediate protection to prevent water intrusion and structural deterioration. Our emergency roof tarping services use heavy-duty materials and professional installation techniques that provide reliable weather protection while maintaining structural integrity. Proper roof protection is essential for preserving insurance coverage and preventing costly secondary water damage.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Structural Stabilization and Safety Measures</h3>
              <p className="text-gray-600 mb-6">
                Disaster damage can compromise structural integrity, creating safety hazards that require immediate attention. Our site securing services include emergency structural assessment, temporary shoring, and safety measures that protect both property occupants and emergency workers. These services prevent injuries and liability issues while preserving structural elements needed for permanent restoration.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Case Study: Turner Agri-Civic Center Emergency Securing</h3>
                <p className="text-gray-700 mb-3">
                  Hurricane Ian's destruction of the Turner Agri-Civic Center created massive security vulnerabilities across the 40,000 square foot facility. Multiple structural breaches, destroyed windows, and damaged access points left valuable equipment and community assets completely exposed to theft and weather damage.
                </p>
                <p className="text-gray-700 mb-3">
                  Our emergency site securing team deployed within hours, implementing a comprehensive security plan that included perimeter fencing, strategic board-up installation, roof tarping, and 24-hour security monitoring. Working around the clock for 72 hours, we transformed a completely vulnerable site into a secure, weather-protected environment.
                </p>
                <p className="text-gray-700">
                  The immediate site securing prevented an estimated $200,000 in theft and weather damage while maintaining insurance compliance and public safety. The Turner Agri-Civic Center restoration proceeded without security incidents, demonstrating how professional site securing protects both immediate assets and long-term restoration success.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Security Risks and Threats in Post-Disaster Tampa
              </h2>
              <p className="text-gray-600 mb-6">
                Understanding specific security threats that affect disaster-damaged properties in Tampa helps property owners appreciate the importance of professional site securing services. Our experience responding to countless disasters has identified common threat patterns and developed proven countermeasures that provide effective protection.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Theft and Vandalism Patterns</h3>
              <p className="text-gray-600 mb-6">
                Opportunistic theft occurs almost immediately after disasters, with criminals targeting copper wiring, HVAC equipment, appliances, and other valuable materials. Vandalism often follows, particularly in vacant damaged properties where destruction goes unnoticed. Professional site securing creates visible deterrents and physical barriers that eliminate easy access and discourage criminal activity.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Trespassing and Liability Issues</h3>
              <p className="text-gray-600 mb-6">
                Damaged properties attract curious visitors, urban explorers, and homeless individuals seeking shelter. These intrusions create significant liability risks for property owners, who remain responsible for injuries that occur on their property regardless of authorized access. Proper site securing includes liability protection measures and clear legal notifications that reduce exposure to premises liability claims.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Environmental and Health Hazards</h3>
              <p className="text-gray-600 mb-6">
                Disaster damage can expose hazardous materials including asbestos, lead paint, and contaminated water that pose health risks to unauthorized visitors. Site securing services include hazmat assessment, appropriate warning signage, and protective measures that prevent exposure while maintaining compliance with environmental regulations.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Weather-Related Secondary Damage</h3>
              <p className="text-gray-600 mb-6">
                Tampa's frequent rain, high winds, and intense sun create ongoing threats to disaster-damaged structures. Unsecured openings allow water intrusion, wind damage, and UV degradation that can multiply repair costs dramatically. Professional weather protection systems prevent these secondary damages while preservation restoration options and insurance coverage.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Professional Materials and Installation Standards
              </h2>
              <p className="text-gray-600 mb-6">
                Effective site securing requires professional-grade materials and installation techniques that provide reliable protection under challenging conditions. Our material specifications and installation standards have been developed through decades of experience and are designed to withstand Tampa Bay's severe weather conditions and security challenges.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Marine-Grade Plywood and Steel Panels</h3>
              <p className="text-gray-600 mb-6">
                Standard plywood fails quickly in Tampa's humid, stormy environment, leaving properties vulnerable to both weather and security threats. We use marine-grade plywood and steel security panels that resist moisture, provide superior strength, and maintain integrity throughout extended deployment periods. These materials cost more initially but prevent failure-related damages that far exceed the additional investment.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Professional Hardware and Fastening Systems</h3>
              <p className="text-gray-600 mb-6">
                Amateur board-up installations often fail due to inadequate fastening systems that allow panels to fail during storms or security challenges. We use professional-grade hardware including security screws, reinforced brackets, and redundant fastening systems that maintain integrity even under extreme conditions. This attention to detail ensures reliable protection throughout the restoration period.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Weather-Resistant Tarping and Sealing Systems</h3>
              <p className="text-gray-600 mb-6">
                Roof tarping requires specialized materials and installation techniques that provide reliable weather protection without damaging existing structure. We use heavy-duty tarping materials, professional installation methods, and comprehensive sealing systems that prevent water intrusion while maintaining structural integrity for permanent roof restoration.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Insurance Requirements and Coverage Considerations</h2>
              <p className="text-gray-600 mb-6">
                Property insurance policies typically require prompt mitigation measures to prevent further damage and maintain coverage. Understanding these requirements and ensuring compliance protects your claim while maximizing available benefits for both site securing and permanent restoration work.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Mitigation Requirements and Coverage</h3>
              <p className="text-gray-600 mb-6">
                Insurance policies require property owners to take reasonable steps to prevent further damage after a covered loss. Professional site securing services typically qualify as covered mitigation expenses, meaning the insurance company pays for protective measures. However, work must be performed promptly and professionally to maintain coverage compliance.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Documentation and Evidence Preservation</h3>
              <p className="text-gray-600 mb-6">
                Proper documentation of site securing work supports insurance claims and demonstrates compliance with policy requirements. We provide comprehensive documentation including photographs, material specifications, and work completion reports that satisfy insurance company requirements while preserving evidence needed for claim negotiations.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Coordination with Insurance Adjusters</h3>
              <p className="text-gray-600 mb-6">
                Professional site securing services coordinate with insurance adjusters to ensure that protective measures don't interfere with damage assessment while maintaining necessary security. We provide adjusters with access for inspections while maintaining site security, ensuring that both insurance requirements and protection needs are satisfied.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Commercial and Industrial Site Securing Challenges
              </h2>
              <p className="text-gray-600 mb-6">
                Commercial and industrial properties present unique site securing challenges due to size, complexity, valuable equipment, and business continuity requirements. Our commercial site securing services address these specific challenges while maintaining operational capabilities wherever possible.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Large-Scale Perimeter Security</h3>
              <p className="text-gray-600 mb-6">
                Commercial and industrial sites often require extensive perimeter security that covers multiple acres and numerous access points. We design and install comprehensive security systems that control access while maintaining necessary operational capabilities. This includes vehicle gates, pedestrian access controls, and monitoring systems appropriate for the scale and complexity of commercial operations.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Equipment and Inventory Protection</h3>
              <p className="text-gray-600 mb-6">
                Commercial properties often contain valuable equipment, inventory, and materials that require specialized protection measures. Our site securing services include equipment enclosure, inventory protection, and specialized security measures that address high-value assets while maintaining access for business operations and restoration work.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Business Continuity Considerations</h3>
              <p className="text-gray-600 mb-6">
                Commercial site securing must balance security requirements with business operational needs. We work with business owners and managers to develop security solutions that protect property while allowing essential business functions to continue. This includes partial facility isolation, secure access zones, and temporary operational accommodations.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Technology Integration in Modern Site Securing
              </h2>
              <p className="text-gray-600 mb-6">
                Modern site securing incorporates advanced technology that enhances security effectiveness while providing real-time monitoring and response capabilities. Our technology integration provides superior protection compared to traditional securing methods while offering valuable monitoring capabilities during extended restoration periods.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Security Camera and Monitoring Systems</h3>
              <p className="text-gray-600 mb-6">
                Wireless security camera systems provide real-time monitoring capabilities that detect intrusions and document security events. These systems operate on battery or solar power, making them effective even when main power systems are damaged. Camera monitoring provides evidence for law enforcement and insurance purposes while deterring criminal activity.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Motion Detection and Alert Systems</h3>
              <p className="text-gray-600 mb-6">
                Automated motion detection systems provide immediate alerts when unauthorized access occurs, enabling rapid security response. These systems can operate independently of main power and communicate through cellular networks, ensuring reliable operation even under challenging post-disaster conditions. Alert systems significantly improve response times and security effectiveness.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Access Control and Key Management</h3>
              <p className="text-gray-600 mb-6">
                Electronic access control systems allow authorized personnel to enter secured sites while maintaining comprehensive access logs. These systems eliminate the security risks associated with traditional key distribution while providing detailed records of site access that support security and project management needs.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Coordination with Emergency Services and Law Enforcement
              </h2>
              <p className="text-gray-600 mb-6">
                Professional site securing includes coordination with local emergency services, law enforcement, and building departments to ensure compliance with safety regulations and enhance security effectiveness. Our established relationships with Tampa Bay emergency services facilitate smooth coordination and rapid response when security incidents occur.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Police Department Notification and Coordination</h3>
              <p className="text-gray-600 mb-6">
                Secured disaster sites require coordination with local police departments to establish patrol schedules, provide access information, and ensure rapid response to security incidents. We maintain contact information and protocols that facilitate immediate law enforcement response when security breaches occur.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Fire Department Access and Safety Coordination</h3>
              <p className="text-gray-600 mb-6">
                Site securing measures must maintain emergency access for fire department and other emergency services while providing effective security. We design security installations that include emergency access provisions and coordinate with fire departments to ensure that security measures don't compromise emergency response capabilities.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Building Department and Code Compliance</h3>
              <p className="text-gray-600 mb-6">
                Temporary securing installations must comply with local building codes and safety regulations even under emergency conditions. Our securing methods meet code requirements for temporary installations while providing maximum security effectiveness. Compliance with building codes prevents legal issues and supports permanent restoration permit approvals.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Extended Security During Restoration Projects
              </h2>
              <p className="text-gray-600 mb-6">
                Large restoration projects can require extended security measures that evolve as restoration work progresses. Our extended security services adapt to changing conditions while maintaining effective protection throughout the restoration timeline, ensuring that security measures support rather than impede restoration progress.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Phased Security Adjustments</h3>
              <p className="text-gray-600 mb-6">
                As restoration work progresses, security requirements change based on completed work areas, remaining vulnerabilities, and construction activities. We adjust security measures in phases that correspond to restoration progress, ensuring continued protection while allowing efficient work access and material movement.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Construction Site Security Management</h3>
              <p className="text-gray-600 mb-6">
                Active restoration projects require specialized security measures that protect both existing property and construction materials, tools, and equipment. Our construction site security services include tool and material protection, access control for workers, and coordination with construction schedules that maintain security without impeding productivity.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Transition to Permanent Security Systems</h3>
              <p className="text-gray-600 mb-6">
                As restoration nears completion, temporary security measures must transition to permanent security systems without creating security gaps. We coordinate the transition from temporary to permanent security, ensuring continuous protection while supporting the installation of upgraded security systems that improve long-term property protection.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Cost-Effective Security Solutions and ROI Analysis
              </h2>
              <p className="text-gray-600 mb-6">
                Professional site securing services provide excellent return on investment through prevented theft, vandalism, and secondary damage. Understanding the cost-benefit relationship helps property owners make informed decisions about security investments that protect their property and restoration investments.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Theft Prevention Value Analysis</h3>
              <p className="text-gray-600 mb-6">
                The cost of stolen copper, HVAC equipment, and other valuable materials often exceeds the cost of professional site securing by significant margins. Professional security measures typically prevent theft that would cost five to ten times the security investment, making security services an excellent financial decision beyond their insurance and liability benefits.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Secondary Damage Prevention Benefits</h3>
              <p className="text-gray-600 mb-6">
                Weather protection provided by professional site securing prevents water damage, mold growth, and structural deterioration that can multiply restoration costs dramatically. The cost of preventing secondary damage through professional weather protection is typically a fraction of the cost to repair damage caused by continued exposure.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Insurance Premium and Liability Considerations</h3>
              <p className="text-gray-600 mb-6">
                Professional site securing reduces liability risks that can result in expensive premises liability claims. Some insurance carriers offer premium discounts for properties with professional security measures, providing ongoing financial benefits that justify security investments. Additionally, professional security demonstrates responsible property management that supports insurance claim negotiations.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Emergency Response and Deployment Capabilities
              </h2>
              <p className="text-gray-600 mb-6">
                Effective site securing requires rapid deployment capabilities that respond immediately to disaster situations. Our emergency response infrastructure and deployment procedures ensure that site securing services begin within hours of disaster events, providing immediate protection when properties are most vulnerable.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">24/7 Emergency Response Teams</h3>
              <p className="text-gray-600 mb-6">
                Our site securing teams operate around the clock during disaster periods, with specialized equipment and materials pre-positioned for rapid deployment. Emergency response protocols ensure that securing services begin immediately regardless of weather conditions, time of day, or access challenges that often follow disaster events.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Mobile Equipment and Material Capabilities</h3>
              <p className="text-gray-600 mb-6">
                Site securing effectiveness depends on having appropriate equipment and materials immediately available when disasters occur. Our mobile response capabilities include specialized vehicles equipped with security materials, installation tools, and communication equipment necessary for rapid site securing under challenging conditions.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Coordination with Other Emergency Services</h3>
              <p className="text-gray-600 mb-6">
                Site securing deployment requires coordination with other emergency services including water extraction, structural assessment, and utility disconnection. Our integrated approach ensures that security measures complement other emergency services while maintaining focus on immediate property protection and preparation for restoration work.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Getting Professional Emergency Site Securing in Tampa
              </h2>
              <p className="text-gray-600 mb-6">
                When disaster damages your Tampa property, immediate professional site securing protects your investment from theft, vandalism, and additional damage while maintaining insurance compliance and public safety. Florida Construction Specialists' emergency site securing services are available 24/7, with experienced teams ready to deploy immediately to provide comprehensive protection for any size property.
              </p>

              <p className="text-gray-600 mb-6">
                Our emergency response team assesses your specific security needs, deploys appropriate protective measures, and maintains site security throughout the restoration period. With over four decades of experience securing disaster-damaged properties throughout Tampa Bay, we understand the unique challenges and threats that affect different property types and have the expertise to provide effective protection tailored to your specific situation.
              </p>

              <p className="text-gray-600 mb-6">
                Don't leave your disaster-damaged property vulnerable to theft, vandalism, and additional damage. Contact Florida Construction Specialists immediately for professional emergency site securing services that protect your property, preserve your insurance coverage, and provide peace of mind during the challenging restoration period. Our proven track record and comprehensive approach make us Tampa Bay's trusted choice for emergency site securing when you need protection you can count on.
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
