import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Home, Shield, FileText, Wrench } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Roof Damage Restoration & Insurance Claims Tampa | Commercial Roofing Repair",
  description: "Commercial roof damage restoration and insurance claims in Tampa. Hurricane, wind, and storm damage repair. Expert claim documentation, fast repairs, and quality workmanship for Tampa Bay businesses.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Roof Damage Restoration and Insurance Claims in Tampa", href: "/roof-damage-restoration-and-insurance-claims-in-tampa/" },
];

const faqs = [
  {
    question: "How do I know if my commercial roof has hurricane damage?",
    answer: "Signs include missing or displaced roofing materials, visible punctures or tears, granule loss on shingles (check gutters), damaged flashing around penetrations, lifted seams on metal or membrane roofs, water stains on ceilings inside the building, and debris accumulation. Even without visible exterior damage, water intrusion indicates roof compromise. Professional inspection after any significant storm is recommended."
  },
  {
    question: "Will my insurance cover roof replacement or just repairs?",
    answer: "Coverage depends on damage extent and policy terms. If damage is localized, insurance typically pays for repairs. If damage is widespread or affects more than a certain percentage of the roof, full replacement may be covered. Florida law (Section 627.7011) requires insurers to pay for code-required upgrades when making repairs, which may mean enhanced materials or attachment methods on the repaired area."
  },
  {
    question: "How long do I have to file a roof damage claim in Florida?",
    answer: "Florida law requires policyholders to report claims promptly. While there's no specific day limit for initial notification, most policies require proof of loss within a specified timeframe (often 60 days). For supplemental claims (additional damage discovered later), the same timeline applies from discovery. Document damage immediately and report promptly to protect your claim rights."
  },
  {
    question: "Should I get temporary repairs before the insurance adjuster comes?",
    answer: "Yes—you're required to mitigate further damage. Emergency tarping and temporary repairs are covered by insurance and protect your property. Document all temporary repairs with photos and save receipts. Don't make permanent repairs before the adjuster inspects unless absolutely necessary for safety, as this can complicate your claim."
  },
  {
    question: "What's the difference between ACV and Replacement Cost roof coverage?",
    answer: "Actual Cash Value (ACV) pays the depreciated value of your roof—what it was worth at the time of damage, considering age and wear. Replacement Cost Value (RCV) pays to replace with new materials of like kind and quality without depreciation. For commercial roofs, RCV coverage is strongly recommended as roofs depreciate significantly over their lifespan."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Services" },
  { href: "/tampa-insurance-restoration-for-hurricane-damage/", label: "Insurance Restoration" },
  { href: "/property-damage-assessment-for-insurance-claims-in-tampa/", label: "Damage Assessment Services" },
  { href: "/hurricane-proof-reconstruction-services-in-tampa/", label: "Hurricane-Proof Construction" },
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
            alt="Roof damage restoration and insurance claims in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Roof Damage Restoration and Insurance Claims in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Expert commercial roof damage restoration with full insurance claim support. From emergency tarping through complete re-roofing, we protect your Tampa Bay business and maximize your claim recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Request Roof Inspection
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
              Your commercial roof is your building's primary defense against Tampa Bay's hurricanes, tropical storms, and intense summer weather. When storm damage compromises this critical protection, rapid response prevents cascading interior damage while proper insurance documentation ensures you receive fair compensation for repairs. Florida Construction Specialists combines expert commercial roofing capabilities with extensive insurance restoration experience to deliver complete roof damage solutions for Tampa Bay businesses.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">Roof Damage = Interior Damage</h3>
                  <p className="text-red-700">Even small roof breaches can cause massive interior damage during Tampa's heavy rains. A 1-inch hole can allow gallons of water per minute during storms. Emergency tarping is essential immediately after discovering roof damage—don't wait for insurance approval. Temporary repairs are covered by your policy and prevent far more expensive interior damage claims.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Commercial Roof Damage Types
            </h2>
            
            <p className="text-gray-600 mb-6">
              Tampa Bay commercial properties feature various roofing systems, each with characteristic damage patterns. Understanding how your roof type fails helps identify damage that might otherwise go unnoticed:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Home className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Low-Slope/Flat Roofs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Membrane punctures from debris</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Seam separation and lifting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Flashing failure at penetrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Wind uplift of membrane sections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Parapet and edge damage</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Metal Roofing Systems</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Panel displacement from wind</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Fastener failure and backing out</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Dents and punctures from debris</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Seam separation on standing seam</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Ridge cap and trim damage</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Wrench className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Built-Up & Modified Bitumen</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Gravel displacement and bare spots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Membrane tears and punctures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Seam failures and delamination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Flashing separation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <FileText className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Shingle/Tile Roofs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Missing or displaced shingles/tiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Cracked or broken tiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Granule loss (check gutters)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Ridge and hip damage</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Roof Restoration Services
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Emergency Tarping & Temporary Repairs</h3>
                <p className="text-gray-600">Immediate response to stop water intrusion. We install commercial-grade tarps secured to withstand additional storms, seal minor penetrations, and perform temporary repairs that protect your building until permanent work is scheduled. Available 24/7.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Professional Damage Assessment</h3>
                <p className="text-gray-600">Thorough roof inspection by experienced commercial roofers documenting all storm damage. We photograph and measure every damaged area, identify hidden damage that might be missed, and prepare detailed documentation for your insurance claim.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Roof Repair Services</h3>
                <p className="text-gray-600">When damage is localized, repairs restore roof integrity without complete replacement. We match existing materials, properly integrate repairs with the existing system, and ensure work meets Florida Building Code requirements including enhanced wind resistance standards.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Complete Re-Roofing</h3>
                <p className="text-gray-600">When damage is extensive, complete replacement is often the best solution. New roof systems meet current Florida Building Code, provide enhanced hurricane resistance, and come with manufacturer warranties. We install all commercial roof types: TPO, EPDM, PVC, modified bitumen, metal, and built-up systems.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Insurance Claims for Roof Damage
            </h2>

            <p className="text-gray-600 mb-6">
              Roof damage insurance claims require specific documentation and understanding of policy terms. Florida Construction Specialists has extensive experience helping commercial property owners navigate roof claims successfully:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-bold text-brand-green-dark mb-3">Key Insurance Considerations</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Hurricane Deductible:</strong> Separate from regular deductible, typically 2-5% of dwelling coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Code Upgrades:</strong> Florida law requires insurers to pay for code-required improvements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Matching:</strong> If damaged materials can't be matched, larger replacement may be covered</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Interior Damage:</strong> Claim should include all water damage caused by roof failure</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Commercial Roof Restoration Costs in Tampa Bay
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Service</th>
                    <th className="px-6 py-4 text-left">Price Range</th>
                    <th className="px-6 py-4 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Emergency Tarping</td>
                    <td className="px-6 py-4">$500 - $3,000</td>
                    <td className="px-6 py-4 text-gray-600">Per affected area</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Roof Inspection/Assessment</td>
                    <td className="px-6 py-4">$300 - $1,500</td>
                    <td className="px-6 py-4 text-gray-600">With documentation</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Localized Repairs</td>
                    <td className="px-6 py-4">$500 - $10,000</td>
                    <td className="px-6 py-4 text-gray-600">Damage extent dependent</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">TPO/PVC Membrane</td>
                    <td className="px-6 py-4">$6 - $14/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Installed, including tear-off</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Modified Bitumen</td>
                    <td className="px-6 py-4">$7 - $15/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">2-3 ply systems</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Standing Seam Metal</td>
                    <td className="px-6 py-4">$12 - $25/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Highest wind resistance</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Built-Up Roofing</td>
                    <td className="px-6 py-4">$8 - $18/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Traditional multi-ply</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Prices reflect 2024 Tampa Bay market rates. Actual costs depend on roof size, accessibility, system type, and complexity. Insurance coverage may offset most or all costs depending on your policy.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Roof Damage Restoration Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Emergency Response</h3>
                  <p className="text-gray-600">Immediate deployment to stop water intrusion. Tarping and temporary repairs protect your building while permanent solutions are developed.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Professional Assessment</h3>
                  <p className="text-gray-600">Thorough inspection documents all roof damage with photos, measurements, and detailed notes. We identify obvious damage and hidden issues that might be missed.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Insurance Coordination</h3>
                  <p className="text-gray-600">We prepare detailed estimates, meet with adjusters, and ensure your claim includes all damage. Our documentation helps maximize your recovery.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Restoration</h3>
                  <p className="text-gray-600">Expert crews repair or replace your roof using quality materials and proper techniques. Work meets Florida Building Code requirements for hurricane resistance.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Final Inspection & Warranty</h3>
                  <p className="text-gray-600">Quality inspection ensures work meets our standards. We provide manufacturer warranties on materials and workmanship warranties on installation.</p>
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
              <h3 className="text-2xl font-bold mb-4">Roof Damage? Get Expert Help Now.</h3>
              <p className="mb-6 text-gray-200">
                Contact Florida Construction Specialists for professional roof damage assessment and restoration. We'll protect your building, document your damage, and help you navigate the insurance process for maximum recovery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Request Roof Inspection
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
            title="Related Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Tampa Bay Commercial Roof Restoration Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for roof damage restoration and insurance claim support throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Roof Assessment
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
