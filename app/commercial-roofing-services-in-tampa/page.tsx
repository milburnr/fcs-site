import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Shield, Clock, Award, Wrench } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Commercial Roofing Services Tampa | Expert",
  description: "Complete commercial roofing services in Tampa Bay. TPO, EPDM, metal, and built-up roofing systems. Hurricane-rated installations, repairs, and maintenance from Florida Construction Specialists.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Roofing Services in Tampa", href: "/commercial-roofing-services-in-tampa/" },
];

const faqs = [
  {
    question: "What types of commercial roofing systems do you install in Tampa?",
    answer: "We install all major commercial roofing systems including TPO (thermoplastic polyolefin), EPDM rubber roofing, PVC membranes, modified bitumen, built-up roofing (BUR), standing seam metal, and coated systems. Each system has specific advantages—we help you select the best option based on your building type, budget, and performance requirements for Tampa's climate."
  },
  {
    question: "How long does a commercial roof last in Florida's climate?",
    answer: "Roof lifespan varies by material and maintenance. TPO and PVC membranes typically last 20-30 years, EPDM 25-30 years, modified bitumen 15-20 years, built-up roofing 20-30 years, and quality metal roofing 40-60+ years. Florida's UV exposure, heat, and hurricane activity affect longevity, making proper installation and regular maintenance essential for maximum lifespan."
  },
  {
    question: "Do commercial roofs need to meet hurricane code requirements?",
    answer: "Yes. Florida Building Code requires commercial roofs to meet specific wind uplift resistance ratings based on location and building height. Tampa Bay's High Velocity Hurricane Zone designation requires enhanced fastening patterns, membrane attachment methods, and edge securement. All our installations meet or exceed current FBC requirements for your specific location."
  },
  {
    question: "How often should commercial roofs be inspected?",
    answer: "We recommend professional inspections twice annually—before and after hurricane season—plus after any significant storm. Regular inspections catch minor issues before they become major problems. Many roof warranties require documented maintenance to remain valid. We offer maintenance programs that include scheduled inspections and minor repairs."
  },
  {
    question: "Can you work on occupied buildings without disrupting business?",
    answer: "Absolutely. Most commercial roofing work occurs with minimal disruption to building occupants. We schedule noisy work during appropriate hours, coordinate with building management on sensitive operations, and maintain clean, safe work areas. For complete re-roofing, we can often phase the work to minimize impact on specific areas."
  }
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/top-commercial-contractor-for-roof-repair-and-replacement/", label: "Roof Repair & Replacement" },
  { href: "/roof-damage-restoration-and-insurance-claims-in-tampa/", label: "Storm Damage & Insurance Claims" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Services" },
  { href: "/contact/", label: "Request Roofing Estimate" },
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
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Commercial roofing installation in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Commercial Roofing Services in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Complete commercial roofing solutions for Tampa Bay businesses. From new installations to repairs and maintenance, Florida Construction Specialists delivers hurricane-rated roofing systems built for Florida's demanding climate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Roofing Estimate
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
              Your commercial roof is more than a building component—it's the primary defense protecting your Tampa Bay business from hurricanes, tropical storms, intense UV radiation, and daily thunderstorms. Commercial roofing in Florida faces challenges unlike anywhere else in the country, requiring specialized knowledge, hurricane-rated systems, and installation techniques that account for our unique climate demands.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists brings decades of commercial roofing expertise to Tampa Bay property owners and managers. We understand that a commercial roof must perform flawlessly during hurricane-force winds, shed water during torrential downpours, resist UV degradation under relentless sun exposure, and maintain energy efficiency despite extreme heat. Our comprehensive roofing services address every aspect of commercial roof performance.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Commercial Roofing Systems for Tampa Bay Buildings
            </h2>

            <p className="text-gray-600 mb-6">
              Different commercial building types require different roofing solutions. The flat roofs common on Tampa's retail centers, warehouses, and office buildings need single-ply membranes or built-up systems. Sloped roofs on restaurants, churches, and some industrial facilities may use metal panels or modified systems. We install, repair, and maintain all major commercial roofing types:
            </p>

            <div className="mb-8">
              <Image
                src="/wp-content/uploads/2023/12/Old/maya-patel.jpg"
                alt="Modern commercial building with professional flat roof installation, MVP Orthodontics office"
                width={800}
                height={500}
                className="rounded-lg w-full object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">TPO Roofing Systems</h3>
                <p className="text-gray-600 mb-4">
                  Thermoplastic polyolefin (TPO) has become the dominant commercial roofing membrane in Florida. White TPO reflects solar radiation, reducing cooling costs by 15-30%. Heat-welded seams create watertight bonds stronger than the membrane itself. TPO resists UV degradation, ozone, and chemical exposure while meeting strict wind uplift requirements.
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Energy Star rated reflective surface</li>
                  <li>• 20-30 year typical lifespan</li>
                  <li>• Excellent puncture resistance</li>
                  <li>• Cost-effective installation</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">EPDM Rubber Roofing</h3>
                <p className="text-gray-600 mb-4">
                  Ethylene propylene diene monomer (EPDM) rubber roofing provides exceptional durability and proven performance over decades. Black EPDM absorbs heat (beneficial for some applications) while white EPDM offers reflective properties. The material's flexibility accommodates building movement without cracking.
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• 25-30 year proven performance</li>
                  <li>• Excellent weather resistance</li>
                  <li>• Low maintenance requirements</li>
                  <li>• Easy repair when needed</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Metal Roofing Systems</h3>
                <p className="text-gray-600 mb-4">
                  Standing seam metal roofing provides the highest wind resistance of any commercial system—critical for Tampa Bay's hurricane exposure. Properly installed metal roofs can withstand winds exceeding 150 mph. The material's longevity (40-60+ years) often makes metal the most economical long-term choice despite higher initial costs.
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Superior hurricane performance</li>
                  <li>• 40-60+ year lifespan</li>
                  <li>• Low maintenance needs</li>
                  <li>• Excellent energy efficiency</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Modified Bitumen & Built-Up</h3>
                <p className="text-gray-600 mb-4">
                  Modified bitumen and built-up roofing (BUR) systems offer proven performance on low-slope commercial roofs. Multi-ply construction provides redundant waterproofing layers. These systems work well for roofs with heavy foot traffic or equipment installations requiring durable surfaces.
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Excellent foot traffic resistance</li>
                  <li>• Multiple waterproof layers</li>
                  <li>• Accommodates roof penetrations</li>
                  <li>• Proven long-term performance</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Hurricane-Rated Commercial Roofing
            </h2>

            <p className="text-gray-600 mb-6">
              Tampa Bay's location in Florida's High Velocity Hurricane Zone means commercial roofs must meet stringent wind resistance requirements. The Florida Building Code specifies design wind speeds based on location, building height, and exposure category. Our installations are engineered to exceed these requirements, providing additional protection during major storm events.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h3 className="font-bold text-blue-800 mb-2">Florida Building Code Compliance</h3>
              <p className="text-blue-700">
                All commercial roofing installations must meet current Florida Building Code requirements including wind uplift resistance, impact resistance in certain zones, and proper attachment methods. Our projects are engineered, permitted, and inspected to ensure full code compliance. We provide documentation demonstrating code conformance for your records and insurance purposes.
              </p>
            </div>

            <p className="text-gray-600 mb-6">
              Hurricane-rated roofing involves more than just the membrane or surface material. The entire roof assembly—from deck to surface—must work together to resist wind forces. Key elements include enhanced fastening patterns with closer spacing in edge and corner zones, FM Global or UL-rated assemblies tested for specific wind speeds, proper edge metal and termination details, and securement of all roof penetrations and equipment.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Commercial Roofing Services
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Wrench className="w-8 h-8 text-brand-green flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">New Roof Installation</h3>
                    <p className="text-gray-600">Complete roof system installation for new construction or total replacement. We work with architects and building owners from design through completion, ensuring the specified system meets performance requirements and budget constraints. Our installations include manufacturer warranties backed by our workmanship guarantee.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Wrench className="w-8 h-8 text-brand-green flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Roof Replacement & Re-Roofing</h3>
                    <p className="text-gray-600">When existing roofs reach end of life or suffer extensive damage, complete replacement restores full protection. We evaluate existing conditions, recommend appropriate replacement systems, and manage the entire project including tear-off, deck inspection/repair, and new system installation—often while the building remains occupied.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Wrench className="w-8 h-8 text-brand-green flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Roof Repairs</h3>
                    <p className="text-gray-600">Prompt repair of leaks, damage, and deterioration extends roof life and prevents interior damage. Our crews are trained in all commercial roofing systems and carry materials for common repairs. We respond quickly to emergency situations and provide permanent solutions rather than temporary patches.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Wrench className="w-8 h-8 text-brand-green flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Preventive Maintenance Programs</h3>
                    <p className="text-gray-600">Regular maintenance dramatically extends roof life and catches problems before they cause water damage. Our maintenance programs include scheduled inspections, drain clearing, minor repairs, and detailed condition reports. Many roof warranties require documented maintenance—our programs satisfy these requirements while protecting your investment.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Wrench className="w-8 h-8 text-brand-green flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Roof Coatings & Restoration</h3>
                    <p className="text-gray-600">When roof membranes are structurally sound but showing age, coating systems can add years of service life at a fraction of replacement cost. Silicone, acrylic, and other coating systems waterproof, reflect UV, and restore weathered surfaces. Not all roofs are candidates for coating—we provide honest assessments of whether coating or replacement makes more sense.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Table */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Commercial Roofing Costs in Tampa Bay
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Roofing System</th>
                    <th className="px-6 py-4 text-left">Installed Cost/Sq Ft</th>
                    <th className="px-6 py-4 text-left">Expected Lifespan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">TPO Membrane (60 mil)</td>
                    <td className="px-6 py-4">$6.00 - $10.00</td>
                    <td className="px-6 py-4 text-gray-600">20-30 years</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">TPO Membrane (80 mil)</td>
                    <td className="px-6 py-4">$8.00 - $12.00</td>
                    <td className="px-6 py-4 text-gray-600">25-30 years</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">EPDM Rubber</td>
                    <td className="px-6 py-4">$5.50 - $9.00</td>
                    <td className="px-6 py-4 text-gray-600">25-30 years</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">PVC Membrane</td>
                    <td className="px-6 py-4">$7.00 - $12.00</td>
                    <td className="px-6 py-4 text-gray-600">20-30 years</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Modified Bitumen (2-ply)</td>
                    <td className="px-6 py-4">$6.00 - $11.00</td>
                    <td className="px-6 py-4 text-gray-600">15-20 years</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Built-Up Roofing (4-ply)</td>
                    <td className="px-6 py-4">$8.00 - $16.00</td>
                    <td className="px-6 py-4 text-gray-600">20-30 years</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Standing Seam Metal</td>
                    <td className="px-6 py-4">$12.00 - $25.00</td>
                    <td className="px-6 py-4 text-gray-600">40-60+ years</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Roof Coating System</td>
                    <td className="px-6 py-4">$2.50 - $5.00</td>
                    <td className="px-6 py-4 text-gray-600">10-15 years (extends existing)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Prices reflect 2024 Tampa Bay market rates for quality installations. Costs vary based on roof size, accessibility, existing conditions, and specific system requirements. Larger projects typically achieve lower per-square-foot costs. Contact us for accurate project pricing.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Choose Florida Construction Specialists for Commercial Roofing
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-brand-green flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Licensed & Insured</h3>
                  <p className="text-gray-600">Fully licensed Florida roofing contractor with comprehensive insurance coverage. Our licensing ensures you work with qualified professionals who meet state requirements for commercial roofing work.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-brand-green flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Decades of Experience</h3>
                  <p className="text-gray-600">Our team has installed millions of square feet of commercial roofing throughout Tampa Bay. This experience means we understand local conditions, code requirements, and best practices for lasting results.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-brand-green flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Manufacturer Certifications</h3>
                  <p className="text-gray-600">Certified installers for major commercial roofing manufacturers including GAF, Carlisle, Firestone, Johns Manville, and others. Certification enables us to offer enhanced manufacturer warranties on your installation.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-brand-green flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Quality Workmanship Guarantee</h3>
                  <p className="text-gray-600">We stand behind our work with comprehensive workmanship warranties. If any issue arises from our installation, we make it right. Our reputation depends on roofs that perform as promised.</p>
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

            <div className="bg-brand-green-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Get Your Commercial Roofing Project Started</h3>
              <p className="mb-6 text-gray-200">
                Contact Florida Construction Specialists for a comprehensive assessment of your commercial roofing needs. We provide detailed proposals with multiple options, helping you make informed decisions about protecting your Tampa Bay property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Request Roofing Estimate
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
            title="Related Roofing Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Tampa Bay's Trusted Commercial Roofing Contractor
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From new installations to repairs and maintenance, Florida Construction Specialists delivers commercial roofing solutions built for Florida's demanding climate.
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
