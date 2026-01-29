import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Shield, FileText, Building2, Camera } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Insurance Restoration for Vandalism Damage Tampa | Commercial Property Repair",
  description: "Insurance restoration for vandalism damage in Tampa. Commercial property repair for graffiti, break-ins, and intentional destruction. Expert claim documentation and complete restoration services.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Insurance Restoration for Vandalism Damage in Tampa", href: "/insurance-restoration-for-vandalism-damage-in-tampa/" },
];

const faqs = [
  {
    question: "Does commercial property insurance cover vandalism damage?",
    answer: "Yes, most commercial property insurance policies cover vandalism as a named peril. Coverage typically includes damage to the building structure, business personal property inside, and often business income losses resulting from vandalism. However, vacant buildings may have limited or excluded vandalism coverage—check your policy if your building is or may become vacant."
  },
  {
    question: "What should I do immediately after discovering vandalism?",
    answer: "First, call the police and file a report—this is required for insurance claims. Don't touch or clean anything until the scene is documented. Take photos and video of all damage. Secure the property to prevent additional damage or theft. Then contact your insurance company to report the claim and a restoration contractor to assess damage and begin repairs."
  },
  {
    question: "How long does vandalism restoration typically take?",
    answer: "Timeline depends on damage extent. Graffiti removal and minor repairs may take 1-3 days. Window and door replacement typically takes 1-2 weeks. Extensive damage involving interior restoration, electrical repairs, or structural work may take 2-8 weeks. We work efficiently to minimize business disruption while ensuring quality restoration."
  },
  {
    question: "Will my insurance rates increase after a vandalism claim?",
    answer: "Possibly, but vandalism claims typically have less impact on premiums than at-fault claims like water damage from maintenance failures. A single vandalism claim usually doesn't dramatically affect rates. However, multiple claims or patterns of claims may increase premiums or affect renewal. Consider this when deciding whether to file claims for minor damage."
  },
  {
    question: "Can vandalism damage be prevented?",
    answer: "While you can't eliminate risk entirely, several measures reduce vandalism likelihood and impact: adequate exterior lighting, security cameras (with signage), alarm systems, security film on windows, graffiti-resistant coatings, quick removal of any vandalism (to discourage repeat incidents), and active property management showing the building is monitored."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/commercial-property-damage-restoration-in-tampa/", label: "Commercial Property Restoration" },
  { href: "/property-damage-assessment-for-insurance-claims-in-tampa/", label: "Damage Assessment Services" },
  { href: "/tampa-insurance-restoration-for-hurricane-damage/", label: "Insurance Restoration Services" },
  { href: "/contact/", label: "Schedule Assessment" },
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
            alt="Insurance restoration for vandalism damage in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Insurance Restoration for Vandalism Damage in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Expert vandalism damage restoration for Tampa Bay commercial properties. From graffiti removal to complete building repair, we restore your property and navigate the insurance process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Report Vandalism Damage
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
              Vandalism can strike any Tampa Bay commercial property—from graffiti on exterior walls to break-ins causing extensive interior damage. Beyond the immediate physical damage, vandalism affects your business's professional image, employee morale, and customer perception. Florida Construction Specialists provides rapid response vandalism restoration services that minimize disruption, restore your property completely, and help you navigate the insurance claims process.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Immediate Steps After Vandalism</h3>
                  <p className="text-amber-700">1) Call police and file a report. 2) Document all damage with photos/video before cleanup. 3) Secure the property from further damage or theft. 4) Contact your insurance company. 5) Call a restoration contractor. Following this sequence protects your claim and ensures proper documentation.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Types of Vandalism Damage We Restore
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Building2 className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Exterior Damage</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Graffiti on walls, doors, and signage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Broken windows and storefronts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Damaged doors and entry systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Exterior lighting and fixtures</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Interior Damage</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Forced entry damage to walls/doors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Intentional destruction of interiors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Electrical and plumbing sabotage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Fire damage from arson</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Vandalism Restoration Costs in Tampa Bay
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
                    <td className="px-6 py-4 font-medium">Emergency Board-Up</td>
                    <td className="px-6 py-4">$150 - $500/opening</td>
                    <td className="px-6 py-4 text-gray-600">Windows and doors</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Graffiti Removal</td>
                    <td className="px-6 py-4">$2 - $10/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Surface type dependent</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Window Replacement</td>
                    <td className="px-6 py-4">$300 - $1,500/window</td>
                    <td className="px-6 py-4 text-gray-600">Size and glass type</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Door Replacement</td>
                    <td className="px-6 py-4">$1,500 - $5,000</td>
                    <td className="px-6 py-4 text-gray-600">Including hardware</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Interior Restoration</td>
                    <td className="px-6 py-4">$25 - $100/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Damage extent dependent</td>
                  </tr>
                </tbody>
              </table>
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
              <h3 className="text-2xl font-bold mb-4">Vandalism Damage? We Can Help.</h3>
              <p className="mb-6 text-gray-200">
                Contact Florida Construction Specialists for rapid vandalism restoration. We'll secure your property, document damage for your insurance claim, and restore your Tampa Bay commercial property quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Get Restoration Help
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
            Tampa Bay Vandalism Restoration Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for vandalism damage restoration throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Report Damage Now
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
