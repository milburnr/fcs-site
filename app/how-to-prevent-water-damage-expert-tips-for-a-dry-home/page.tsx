import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Droplets, Shield, Wrench, Home } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "How to Prevent Water Damage | Expert Tips for Tampa Commercial Properties",
  description: "Expert tips to prevent water damage in Tampa commercial properties. Roof maintenance, plumbing inspection, HVAC care, and flood preparation strategies to protect your business investment.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "How to Prevent Water Damage: Expert Tips for a Dry Home", href: "/how-to-prevent-water-damage-expert-tips-for-a-dry-home/" },
];

const faqs = [
  {
    question: "What is the most common cause of water damage in Tampa commercial buildings?",
    answer: "Roof leaks are the leading cause of commercial water damage in Tampa Bay, followed by HVAC condensate issues and plumbing failures. Tampa's intense sun degrades roofing materials, heavy rains test waterproofing, and constant AC operation produces significant condensate. Regular maintenance of these systems prevents most water damage incidents."
  },
  {
    question: "How often should commercial buildings be inspected for water damage risk?",
    answer: "Professional inspections should occur at least annually, with additional checks before and after hurricane season. Monthly visual inspections of high-risk areas (roof, bathrooms, mechanical rooms, below-grade spaces) by building staff catch developing problems early. Properties with known issues or older systems may need more frequent professional assessment."
  },
  {
    question: "Are water detection systems worth the investment?",
    answer: "Absolutely. Water detection systems typically cost $500-$5,000 to install depending on building size and sophistication. A single undetected leak can cause $50,000-$500,000+ in damage. Systems that include automatic shut-off valves provide even greater protection by stopping water flow immediately when leaks are detected."
  },
  {
    question: "Does regular maintenance really prevent water damage claims?",
    answer: "Yes—and it affects your insurance coverage. Insurance policies exclude damage from deferred maintenance or known defects. A pipe that fails despite regular maintenance is typically covered; one that fails because corrosion was ignored is not. Documented maintenance history both prevents damage and protects your coverage."
  },
  {
    question: "What should be included in a water damage prevention checklist?",
    answer: "Key items include: annual roof inspection and maintenance, quarterly HVAC maintenance including condensate lines, annual plumbing inspection, monthly visual checks of high-risk areas, gutter and drain cleaning before rainy season, water heater maintenance, backflow preventer testing, and hurricane preparation procedures. Document all maintenance activities."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Restoration" },
  { href: "/identifying-water-damage-signs-prevention-and-action/", label: "Identifying Water Damage" },
  { href: "/tampas-structural-drying-services-post-flooding/", label: "Structural Drying Services" },
  { href: "/commercial-property-damage-restoration-in-tampa/", label: "Commercial Property Restoration" },
  { href: "/contact/", label: "Schedule Inspection" },
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
            src="/images/hurricane-ian/hurricane-ian-large.webp"
            alt="Preventing water damage in Tampa commercial properties"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            How to Prevent Water Damage: Expert Tips for Tampa Properties
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Protect your Tampa Bay commercial property from water damage with proven prevention strategies. Expert guidance on maintenance, detection, and preparation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Prevention Assessment
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
              Water damage is one of the most common and costly problems facing Tampa Bay commercial property owners. Between hurricane season, tropical rainfall, high humidity, and aging building systems, the threats are constant. The good news: most water damage is preventable with proper maintenance, monitoring, and preparation. This guide provides expert strategies to protect your commercial property from water intrusion and its expensive consequences.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-blue-800 mb-2">Prevention ROI</h3>
                  <p className="text-blue-700">Every dollar spent on water damage prevention saves $5-$10 in potential damage costs. A $10,000 annual investment in maintenance and monitoring can prevent claims worth $50,000-$100,000 or more—plus avoid business interruption, tenant disruption, and the hassle of restoration work.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Roof Maintenance: Your First Line of Defense
            </h2>
            
            <p className="text-gray-600 mb-6">
              The roof is the most critical element in water damage prevention. Tampa's intense UV exposure degrades roofing materials, while heavy rains test every seam, flashing, and penetration. Proactive roof maintenance prevents most roof-related water damage.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Roof Maintenance Checklist</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Annual professional roof inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Post-storm inspections after severe weather</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Semi-annual gutter and drain cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Immediate repair of identified issues</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Check flashings at penetrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Inspect parapet walls and copings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Clear debris from roof surface</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Plan for proactive re-roofing before failure</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              HVAC and Condensate Management
            </h2>

            <p className="text-gray-600 mb-6">
              Air conditioning systems in Tampa run almost constantly during hot months, producing substantial condensate. A typical commercial system can generate 5-20 gallons of water per day. When drain lines clog or drip pans overflow, this water damages ceilings, walls, and building contents.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Wrench className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">HVAC Prevention Tips</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Monthly condensate line flushing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Install overflow float switches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Regular drip pan inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Insulate cold surfaces to prevent condensation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Droplets className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Warning Signs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>Water stains on ceiling tiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>Condensation on diffusers or ductwork</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>Musty odors near AC equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>Dripping or pooling water</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Plumbing System Care
            </h2>

            <p className="text-gray-600 mb-6">
              Plumbing failures can release hundreds of gallons of water per hour. Older pipes corrode, connections fail, and water heaters eventually leak. Proactive plumbing maintenance prevents catastrophic failures and the extensive damage they cause.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Plumbing Prevention Strategies</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Annual inspection</strong> of all visible plumbing, looking for corrosion, leaks, and deterioration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Water heater maintenance</strong> including annual flushing and anode rod inspection (replace units over 10-12 years old)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Pressure monitoring</strong>—high water pressure accelerates pipe wear; install pressure regulators if needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Shut-off valve testing</strong>—ensure main and zone shut-offs work properly for emergencies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Backflow preventer testing</strong>—required annually in most jurisdictions</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Water Detection and Monitoring Systems
            </h2>

            <p className="text-gray-600 mb-6">
              Technology provides powerful tools for water damage prevention. Modern detection systems can identify leaks within minutes and automatically shut off water supply to prevent extensive damage.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Detection Options</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Point sensors at high-risk locations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Rope sensors along walls and equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Smart water meters tracking usage patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Automatic shut-off valves</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">High-Priority Locations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Under water heaters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>HVAC drip pans and condensate areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Bathrooms and break rooms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Server rooms and critical equipment areas</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Hurricane and Flood Preparation
            </h2>

            <p className="text-gray-600 mb-6">
              Tampa Bay's hurricane exposure requires specific preparation to prevent storm-related water damage. Preparation before hurricane season makes emergency response much more effective.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Hurricane Season Preparation</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Pre-season roof inspection</strong> in May to identify and repair vulnerabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Clear gutters and drains</strong> to handle heavy rainfall</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Install or test hurricane shutters</strong> and window protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Know your flood zone</strong> and have flood insurance if at risk</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Elevate critical equipment</strong> and protect sensitive items</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Maintain emergency contacts</strong> for restoration contractors</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Building Envelope Maintenance
            </h2>

            <p className="text-gray-600 mb-6">
              Beyond the roof, the entire building envelope—walls, windows, doors, and penetrations—must be maintained to prevent water intrusion:
            </p>

            <ul className="space-y-3 text-gray-600 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <span><strong>Caulking and sealants:</strong> Inspect and replace weathered caulking around windows, doors, and penetrations annually</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <span><strong>Window and door maintenance:</strong> Ensure proper operation, weather stripping, and seal integrity</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <span><strong>Exterior walls:</strong> Repair cracks in stucco, tuckpoint masonry, and address any signs of water entry</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <span><strong>Grading and drainage:</strong> Ensure water flows away from the building, not toward it</span>
              </li>
            </ul>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mb-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Professional Prevention Services
            </h2>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists offers water damage prevention services including comprehensive building assessments, maintenance program development, water detection system installation, and emergency preparedness planning. Our experience restoring water-damaged buildings gives us unique insight into effective prevention strategies.
            </p>

            <p className="text-gray-600 mb-8">
              We also provide rapid response when prevention isn't enough—24/7 emergency services minimize damage when water intrusion occurs despite best efforts.
            </p>

            <div className="bg-brand-green-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Protect Your Property from Water Damage</h3>
              <p className="mb-6 text-gray-200">
                Contact Florida Construction Specialists for a water damage prevention assessment. We'll identify vulnerabilities and recommend cost-effective strategies to protect your Tampa Bay commercial property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Schedule Assessment
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Related Water Damage Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Tampa Bay Water Damage Prevention Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for water damage prevention services throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Prevention Assessment
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
