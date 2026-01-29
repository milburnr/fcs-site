import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Search, Shield, Droplets, Eye } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Identifying Water Damage Signs, Prevention & Action | Tampa Commercial Properties",
  description: "Learn to identify water damage signs in commercial properties. Prevention strategies, early detection tips, and action steps for Tampa Bay businesses. Protect your property investment.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Identifying Water Damage Signs, Prevention and Action", href: "/identifying-water-damage-signs-prevention-and-action/" },
];

const faqs = [
  {
    question: "What are the first signs of water damage in commercial buildings?",
    answer: "Early warning signs include water stains on ceilings or walls (often yellowish-brown rings), musty or moldy odors, peeling or bubbling paint, warped or buckled flooring, increased humidity levels, visible mold growth, and unexplained increases in water bills. In commercial buildings, also watch for condensation on windows, damp spots in storage areas, and changes in ceiling tile appearance."
  },
  {
    question: "How quickly does mold grow after water damage?",
    answer: "In Tampa's warm, humid climate, mold can begin growing within 24-48 hours of water intrusion. Visible mold colonies may appear within 1-2 weeks if conditions remain favorable. This is why rapid response to any water damage is critical—the faster you dry affected materials, the less likely mold will establish and spread."
  },
  {
    question: "How often should commercial buildings be inspected for water damage?",
    answer: "Commercial properties should receive comprehensive water damage inspections at least annually, plus additional checks before and after hurricane season (June 1 and December 1). Monthly visual inspections of high-risk areas (roofs, bathrooms, mechanical rooms, below-grade spaces) catch problems early. Properties with known issues or older building systems may need more frequent professional inspection."
  },
  {
    question: "What's the most common source of commercial water damage in Tampa?",
    answer: "Roof leaks are the leading cause of commercial water damage in Tampa Bay, often starting small and causing extensive hidden damage before detection. HVAC condensate issues are the second most common, particularly in humid conditions when AC systems run constantly. Plumbing failures, especially in older buildings, and storm-related intrusion round out the top causes."
  },
  {
    question: "Does commercial property insurance cover water damage from neglected maintenance?",
    answer: "Generally no. Insurance covers sudden and accidental water damage but excludes damage resulting from deferred maintenance, gradual deterioration, or known defects left unrepaired. A pipe that suddenly bursts is typically covered; a pipe that slowly leaks for months due to known corrosion is not. This makes preventive maintenance and prompt repairs both operationally and financially essential."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Restoration" },
  { href: "/tampas-structural-drying-services-post-flooding/", label: "Structural Drying Services" },
  { href: "/how-to-prevent-water-damage-expert-tips-for-a-dry-home/", label: "Water Damage Prevention Tips" },
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
            alt="Identifying water damage in commercial buildings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Identifying Water Damage: Signs, Prevention and Action
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Early detection of water damage protects your Tampa Bay commercial property from costly repairs and business disruption. Learn the warning signs and prevention strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Schedule Inspection
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
              Water damage is one of the most common and costly problems facing Tampa Bay commercial property owners. The region's heavy rainfall, hurricane exposure, high humidity, and aging building stock create constant risk for water intrusion. Detecting water damage early—before mold develops or structural deterioration advances—dramatically reduces repair costs and business disruption. This guide helps Tampa Bay business and property owners recognize warning signs, implement prevention strategies, and take appropriate action when water damage occurs.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">The Hidden Cost of Water Damage</h3>
                  <p className="text-amber-700">Water damage that goes undetected for weeks or months can cost 10-50 times more to repair than damage caught early. Hidden moisture leads to mold growth, structural deterioration, and indoor air quality problems that affect tenant health and expose property owners to liability. Regular inspection and prompt response are essential risk management.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Warning Signs of Water Damage in Commercial Buildings
            </h2>
            
            <p className="text-gray-600 mb-6">
              Water damage often starts hidden—behind walls, above ceilings, or in mechanical spaces. By the time visible signs appear, damage may already be extensive. Learning to recognize early indicators helps catch problems before they become major repairs.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Eye className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Visual Signs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Water stains on ceilings or walls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Peeling, bubbling, or flaking paint</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Warped, buckled, or cupped flooring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Sagging or stained ceiling tiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Visible mold or mildew growth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Efflorescence (white deposits) on concrete/masonry</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Search className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Other Indicators</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Musty or moldy odors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Increased humidity readings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Unexplained water bill increases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Condensation on windows or pipes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Sound of running water when nothing is on</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Rust stains around fixtures or pipes</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Common Sources of Commercial Water Damage in Tampa
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Roof Leaks</h3>
                <p className="text-gray-600 mb-3">Tampa's intense UV exposure, heavy rains, and occasional hail degrade roofing materials over time. Commercial roofs—especially flat or low-slope systems—require regular inspection and maintenance. Even small leaks can cause extensive damage to insulation, ceilings, and building contents.</p>
                <p className="text-gray-600"><strong>Prevention:</strong> Annual professional roof inspections, immediate repair of damage after storms, clear drainage systems, proactive re-roofing before failure.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">HVAC and Condensate Issues</h3>
                <p className="text-gray-600 mb-3">Air conditioning systems running constantly in Tampa's humid climate produce substantial condensate. Clogged drain lines, damaged drip pans, or improperly sized systems can cause water damage to ceilings, walls, and floors. Condensation on ductwork or diffusers indicates humidity problems.</p>
                <p className="text-gray-600"><strong>Prevention:</strong> Monthly condensate line flushing, regular drain pan inspection, proper system sizing, adequate insulation on ductwork.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Plumbing Failures</h3>
                <p className="text-gray-600 mb-3">Aging pipes, corrosion, high water pressure, and freeze events (rare but possible in Tampa) cause plumbing failures. Supply line ruptures can release hundreds of gallons per hour. Slow leaks waste water and cause hidden damage over time.</p>
                <p className="text-gray-600"><strong>Prevention:</strong> Regular plumbing inspection, pressure monitoring, water leak detection systems, prompt repair of any leaks, pipe replacement before failure in aging systems.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Storm and Hurricane Damage</h3>
                <p className="text-gray-600 mb-3">Hurricane-force winds can damage roofs and building envelopes, allowing water intrusion during and after storms. Wind-driven rain can penetrate openings that are normally weatherproof. Storm surge and flooding are major risks for coastal and low-lying Tampa Bay properties.</p>
                <p className="text-gray-600"><strong>Prevention:</strong> Hurricane preparation including shutter installation, pre-storm roof inspection, maintaining building envelope integrity, flood insurance for flood zone properties.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Water Damage Prevention Strategies
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Proactive Maintenance</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Annual professional roof inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Quarterly HVAC maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Regular plumbing inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Gutter and drain cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Caulking and sealant maintenance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Droplets className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Detection Systems</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Water leak detection sensors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Automatic shut-off valves</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Smart water meters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Humidity monitoring systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Building automation integration</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Action Steps When Water Damage is Discovered
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Stop the Water Source</h3>
                  <p className="text-gray-600">If possible, stop the water at its source—shut off supply valves, stop roof leaks with temporary measures, or address the HVAC condensate issue. The faster you stop water flow, the less damage will occur.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Document the Damage</h3>
                  <p className="text-gray-600">Take photos and video of all visible damage before any cleanup or repairs. This documentation is essential for insurance claims. Note the date, time, and circumstances of discovery.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Contact Your Insurance Company</h3>
                  <p className="text-gray-600">Report the damage promptly—Florida law requires timely claim notification. Your policy may have specific requirements for reporting and documentation.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Call a Professional Restoration Company</h3>
                  <p className="text-gray-600">Professional water damage restoration should begin within 24-48 hours to prevent mold growth. IICRC-certified professionals have the equipment and expertise to dry your building properly.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Protect Building Contents</h3>
                  <p className="text-gray-600">Move valuable equipment, documents, and inventory away from affected areas. Elevate items off wet floors. Remove wet ceiling tiles to prevent collapse and promote drying.</p>
                </div>
              </div>
            </div>

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
              Professional Water Damage Inspection Services
            </h2>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists provides professional water damage inspection and assessment services for Tampa Bay commercial properties. Our inspections include visual assessment, moisture meter readings, thermal imaging to identify hidden moisture, and detailed reports documenting any issues found.
            </p>

            <p className="text-gray-600 mb-8">
              Regular professional inspection catches problems that visual observation misses. Thermal imaging reveals moisture behind walls and above ceilings. Moisture meters quantify readings for comparison over time. Professional documentation supports insurance claims if damage is discovered.
            </p>

            <div className="bg-brand-green-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Protect Your Commercial Property</h3>
              <p className="mb-6 text-gray-200">
                Don't wait for visible damage to appear. Contact Florida Construction Specialists for professional water damage inspection services that catch problems early and protect your Tampa Bay commercial property investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Schedule Inspection
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
            Tampa Bay Water Damage Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for water damage prevention, detection, and restoration services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Professional Help
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
