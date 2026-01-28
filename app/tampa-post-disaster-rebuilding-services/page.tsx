import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, AlertTriangle, Clock, Shield, FileText, HelpCircle, Zap, Building2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Post-Disaster Rebuilding Services | Commercial Storm & Fire Restoration",
  description: "24/7 commercial post-disaster rebuilding services in Tampa Bay. Hurricane, fire, flood, and storm damage restoration. Insurance coordination, emergency board-up, and complete reconstruction from Florida Construction Specialists.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Post-Disaster Rebuilding Services", href: "/tampa-post-disaster-rebuilding-services/" },
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/services/disaster-recovery/fire-damage/", label: "Fire Damage Restoration" },
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Restoration" },
  { href: "/contact/", label: "Emergency Contact" },
];

const emergencyServices = [
  { title: "24/7 Emergency Response", description: "On-site within 2-4 hours throughout Tampa Bay", icon: Clock },
  { title: "Emergency Board-Up", description: "Secure your property against further damage", icon: Shield },
  { title: "Insurance Coordination", description: "Direct work with adjusters and carriers", icon: FileText },
  { title: "Rapid Reconstruction", description: "Fast-track rebuilding to minimize downtime", icon: Zap },
];

const disasterTypes = [
  {
    type: "Hurricane Damage",
    description: "Wind, water intrusion, and structural damage from tropical storms",
    services: ["Roof repair/replacement", "Water extraction", "Structural stabilization", "Window/door replacement"]
  },
  {
    type: "Fire Damage",
    description: "Fire, smoke, and water damage from suppression efforts",
    services: ["Structural assessment", "Smoke remediation", "Content cleaning", "Complete reconstruction"]
  },
  {
    type: "Flood Damage",
    description: "Standing water, contamination, and foundation issues",
    services: ["Water extraction", "Mold prevention", "Flooring replacement", "Electrical system restoration"]
  },
  {
    type: "Wind Damage",
    description: "Roof damage, fallen debris, and building envelope breaches",
    services: ["Emergency tarping", "Debris removal", "Structural repairs", "Building envelope restoration"]
  },
];

const faqs = [
  {
    question: "How quickly can you respond to a commercial disaster emergency in Tampa?",
    answer: "Florida Construction Specialists maintains 24/7 emergency response capability with on-site arrival within 2-4 hours throughout the Tampa Bay area. For widespread disasters like hurricanes, we pre-position resources and personnel to ensure rapid response even when demand is highest. Our emergency hotline connects directly to project managers—not answering services—so qualified decision-makers assess your situation immediately."
  },
  {
    question: "Do you work directly with insurance companies for commercial disaster claims?",
    answer: "Yes, insurance coordination is a core part of our post-disaster services. We document damage thoroughly with photos, videos, and detailed reports that meet insurance requirements. We prepare accurate scope-of-work documents and cost estimates that adjusters can approve. We communicate directly with adjusters and supplement claims when initial estimates fall short. Our experience with major carriers including Citizens, Universal, and national insurers helps expedite the claims process."
  },
  {
    question: "What should I do immediately after my commercial building suffers disaster damage?",
    answer: "Safety first—ensure all occupants are evacuated and don't re-enter until cleared. Document everything with photos and video before any cleanup. Prevent further damage by covering openings and removing standing water if safe to do so. Contact your insurance company to initiate a claim. Then call Florida Construction Specialists for emergency assessment and stabilization. We can be on-site within hours to secure your property and begin the restoration process."
  },
  {
    question: "How long does commercial post-disaster reconstruction typically take?",
    answer: "Timeline varies dramatically based on damage extent. Minor damage (water intrusion, partial roof damage) can often be repaired in 2-6 weeks. Moderate damage requiring significant reconstruction typically takes 2-4 months. Major damage involving structural rebuilding may take 6-12 months. We provide realistic timelines during initial assessment and work to accelerate schedules when possible. Insurance processing often affects timeline more than construction itself."
  },
  {
    question: "Can my business continue operating during disaster restoration?",
    answer: "In many cases, yes—at least partially. We assess operational feasibility during initial response and develop phasing plans that allow safe business continuity when possible. For some businesses, we can isolate damaged areas while maintaining operations in unaffected spaces. We've helped Tampa businesses including medical practices, retail stores, and offices maintain partial operations during significant restoration projects. Safety always comes first, but we understand business continuity matters."
  },
  {
    question: "What's the difference between emergency mitigation and full reconstruction?",
    answer: "Emergency mitigation happens immediately after disaster—board-up, tarping, water extraction, debris removal—to prevent further damage and stabilize the building. This work typically begins within hours and completes within days. Full reconstruction is the permanent repair and restoration of damaged elements—structural repairs, system replacement, finish work. Reconstruction follows insurance approval and may take weeks to months. Both phases are essential, and we handle both seamlessly."
  },
  {
    question: "Do you handle mold remediation as part of post-disaster services?",
    answer: "Yes, mold prevention and remediation are critical components of our water damage response. Florida's humidity means mold can begin growing within 24-48 hours after water intrusion. Our teams deploy commercial dehumidification equipment immediately to prevent mold growth. When mold is already present, we provide licensed remediation services including containment, removal, and air quality verification. Post-remediation reconstruction ensures affected areas are properly restored."
  }
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/hurricane-ian.webp"
            alt="Post-disaster commercial rebuilding in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <div className="flex justify-center mb-6">
            <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              24/7 EMERGENCY RESPONSE AVAILABLE
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa Post-Disaster Rebuilding Services for Commercial Properties
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            When disaster strikes your Tampa Bay business, Florida Construction Specialists responds fast. From emergency stabilization through complete reconstruction, we restore your commercial property and get you back in business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="btn-cta flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700"
            >
              <Phone className="w-5 h-5" />
              Emergency Line: {BUSINESS_INFO.phone}
            </a>
            <Link href="/contact/" className="btn-secondary">
              Request Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyServices.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl border-2 border-gray-100">
                <service.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Comprehensive Commercial Disaster Recovery in Tampa Bay
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay's geographic position makes our region uniquely vulnerable to natural disasters. Hurricanes, tropical storms, flooding, and severe weather events pose ongoing threats to commercial properties throughout Hillsborough, Pinellas, Pasco, and Polk counties. When disaster strikes, the speed and quality of your response directly impacts your business recovery. Florida Construction Specialists has been Tampa Bay's trusted post-disaster rebuilding partner for over 20 years, helping hundreds of businesses recover from storms, fires, floods, and other catastrophic events.
            </p>
            <p className="text-gray-600 mb-6">
              Our post-disaster services span the complete recovery spectrum—from the first emergency call through final reconstruction and beyond. Unlike companies that only provide mitigation or only offer construction, we handle the entire process seamlessly. This integrated approach eliminates coordination problems, accelerates timelines, and ensures consistent quality from emergency response through project completion. When your business is suffering, you need one call, one team, one solution.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Emergency Response: The Critical First 24-72 Hours
            </h2>
            <p className="text-gray-600 mb-6">
              The first hours after a disaster determine much about your recovery trajectory. Quick action prevents secondary damage—water intrusion leads to mold, exposed interiors deteriorate rapidly, and unsecured buildings invite vandalism and additional damage. Our emergency response teams understand this urgency and arrive prepared to act.
            </p>
            <p className="text-gray-600 mb-6">
              When you call our 24/7 emergency line, you reach a project manager—not an answering service. Within minutes, we assess the situation and dispatch appropriate resources. For most Tampa Bay locations, our teams arrive on-site within 2-4 hours. During widespread events like hurricanes, we pre-position crews and materials to maintain rapid response even when demand spikes.
            </p>
            <p className="text-gray-600 mb-6">
              Emergency services include board-up and tarping to secure building openings, water extraction using commercial-grade equipment, emergency power for critical systems, debris removal to ensure safe access, and initial damage documentation for insurance purposes. These immediate actions protect your property from additional damage while we develop comprehensive restoration plans.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Insurance Coordination and Claims Support
            </h2>
            <p className="text-gray-600 mb-6">
              Navigating commercial property insurance claims ranks among the most stressful aspects of disaster recovery. Policies are complex, adjusters may be overwhelmed, and underdocumented claims often result in inadequate settlements. Florida Construction Specialists brings extensive insurance experience that protects your interests throughout the claims process.
            </p>
            <p className="text-gray-600 mb-6">
              Our documentation begins immediately—detailed photographs, video walkthroughs, moisture readings, and written assessments that meet insurance requirements. We prepare comprehensive scope-of-work documents that accurately describe all necessary repairs. When adjusters visit, our team provides professional representation, ensuring nothing is overlooked or undervalued.
            </p>
            <p className="text-gray-600 mb-6">
              We work with all major insurance carriers serving Tampa Bay commercial properties including Citizens Property Insurance, Universal Insurance, Federated National, and national carriers. Our familiarity with carrier requirements and adjuster expectations helps expedite approvals. When initial estimates fall short of actual repair costs, we prepare and present supplements with supporting documentation to secure appropriate coverage.
            </p>

            {/* Cost Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Commercial Disaster Restoration Cost Ranges - Tampa Bay 2024</h3>
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-red-800 text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Service Category</th>
                    <th className="px-6 py-3 text-left">Typical Cost Range</th>
                    <th className="px-6 py-3 text-left">Timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Emergency Board-Up/Tarping</td>
                    <td className="px-6 py-4">$1,500 - $15,000</td>
                    <td className="px-6 py-4">Same day</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Water Extraction & Drying</td>
                    <td className="px-6 py-4">$3,000 - $25,000</td>
                    <td className="px-6 py-4">3-7 days</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Mold Remediation</td>
                    <td className="px-6 py-4">$5,000 - $50,000+</td>
                    <td className="px-6 py-4">1-3 weeks</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Roof Repair/Replacement</td>
                    <td className="px-6 py-4">$15,000 - $300,000+</td>
                    <td className="px-6 py-4">2-8 weeks</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Interior Reconstruction</td>
                    <td className="px-6 py-4">$50 - $200/SF</td>
                    <td className="px-6 py-4">4-16 weeks</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Complete Building Restoration</td>
                    <td className="px-6 py-4">$100 - $400/SF</td>
                    <td className="px-6 py-4">3-12 months</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-500 mt-2">*Costs vary significantly based on damage extent, building type, and specific requirements. Insurance typically covers most restoration costs minus deductible.</p>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Complete Reconstruction Services
            </h2>
            <p className="text-gray-600 mb-6">
              Once emergency stabilization is complete and insurance approval is secured, our construction teams begin the permanent restoration work. As a full-service commercial contractor, we handle every aspect of reconstruction—structural repairs, roofing, mechanical systems, electrical, plumbing, finishes, and final inspections. You won't need to coordinate multiple contractors or worry about handoffs between companies.
            </p>
            <p className="text-gray-600 mb-6">
              Our reconstruction approach prioritizes both quality and speed. We understand that every day your business remains closed or compromised represents lost revenue and customer relationships. Our project managers develop aggressive but realistic schedules, pre-order materials to avoid supply delays, and deploy adequate crews to meet milestones. Regular progress updates keep you informed, and our team is always available to address concerns.
            </p>
            <p className="text-gray-600 mb-6">
              Many clients view disaster reconstruction as an opportunity to improve their spaces. While insurance covers restoration to pre-loss condition, building owners often choose to upgrade finishes, improve layouts, or add features during reconstruction. We help clients understand their options and coordinate betterment decisions with insurance coverage to maximize value.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Hurricane Preparedness and Building Hardening
            </h2>
            <p className="text-gray-600 mb-6">
              Beyond reactive disaster response, we help Tampa Bay commercial property owners prepare for future events. Post-disaster reconstruction provides an ideal opportunity to upgrade building resilience—impact-resistant windows, reinforced roofing systems, improved drainage, backup power systems, and enhanced structural connections. These improvements not only protect your investment but often qualify for insurance premium reductions.
            </p>
            <p className="text-gray-600 mb-6">
              Our hurricane preparedness consulting helps businesses develop response plans before disasters strike. We assess vulnerabilities, recommend improvements, and help prioritize investments that provide the greatest protection. Having a relationship with a qualified contractor before disaster strikes ensures faster response when you need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Disaster Types */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
            Disaster Types We Handle
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {disasterTypes.map((disaster, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">{disaster.type}</h3>
                <p className="text-gray-600 mb-4">{disaster.description}</p>
                <ul className="space-y-2">
                  {disaster.services.map((service, sIndex) => (
                    <li key={sIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-brand-green shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-brand-green" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Disaster Recovery Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-red-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Disaster Doesn't Wait. Neither Do We.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            If your Tampa Bay commercial property has suffered damage, call now for immediate assistance. Our 24/7 emergency team is ready to respond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-800 font-bold rounded-full hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Emergency: {BUSINESS_INFO.phone}
            </a>
            <Link href="/contact/" className="btn-secondary border-white text-white hover:bg-white/10">
              Non-Emergency Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
