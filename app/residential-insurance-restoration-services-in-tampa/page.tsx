import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Home, Shield, Hammer, Heart } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Residential Insurance Restoration Tampa | Homes",
  description: "Expert residential insurance restoration services in Tampa Bay. Hurricane, water, and fire damage restoration with full insurance claim support for homeowners.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Residential Insurance Restoration Services in Tampa", href: "/residential-insurance-restoration-services-in-tampa/" },
];

const faqs = [
  {
    question: "What residential damage types does insurance typically cover?",
    answer: "Standard Florida homeowners policies (HO-3) typically cover: hurricane and wind damage (often with separate deductibles), fire and smoke damage, water damage from sudden events (burst pipes, appliance failures), theft and vandalism, lightning strikes, and falling objects. Standard policies exclude flood damage (requires separate NFIP or private flood policy), gradual damage and maintenance issues, mold (except when resulting from covered water damage), and earth movement. Review your policy declarations page and endorsements for specific coverage details."
  },
  {
    question: "How does Florida's hurricane deductible work?",
    answer: "Florida homeowners policies typically have separate hurricane deductibles, usually 2-5% of the dwelling coverage amount. For a home insured for $400,000, a 2% hurricane deductible equals $8,000 out-of-pocket before insurance pays. Hurricane deductibles apply per calendar year for named storms. Some policies have 'triggering' provisions (e.g., hurricane must be declared Category 1+) before the hurricane deductible applies. Regular 'all other perils' deductibles (often $1,000-$2,500) apply to non-hurricane claims."
  },
  {
    question: "What is Additional Living Expense (ALE) coverage and how do I use it?",
    answer: "ALE coverage (Coverage D) pays for increased living costs when your home is uninhabitable due to covered damage. This includes hotel/rental costs exceeding your normal housing costs, restaurant meals above normal food expenses, storage fees, pet boarding, and other reasonable expenses. Keep all receipts and document the necessity of each expense. ALE typically has limits (percentage of dwelling coverage or specific dollar amount) and time limits. Notify your insurer before incurring major expenses when possible."
  },
  {
    question: "Should I hire a public adjuster for my residential claim?",
    answer: "Consider a public adjuster when: damage is extensive (claims over $25,000-$50,000), you lack time or expertise to manage the claim, the insurer's initial offer seems low, you're facing coverage disputes, or the claim involves complex damage types. Public adjusters charge 10% of the settlement (capped by Florida law), but often recover significantly more than that fee. For smaller, straightforward claims, you may be able to handle the process yourself with contractor support."
  },
  {
    question: "How long does residential insurance restoration typically take?",
    answer: "Timelines vary by damage type and extent: Water damage (no mold): 1-3 weeks for drying and repairs. Minor fire/smoke damage: 2-4 weeks. Moderate hurricane damage: 4-8 weeks. Major structural damage: 3-6 months. Complete home rebuilds: 9-18 months. Factors affecting timeline include insurance claim processing speed, permit approval time, contractor availability (especially after widespread storm events), material availability, and weather conditions during restoration."
  }
];

const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Restoration" },
  { href: "/services/disaster-recovery/fire-damage/", label: "Fire Damage Restoration" },
  { href: "/contact/", label: "Schedule a Consultation" },
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
            src="/images/custom-home-1/custom-home-1-display.webp"
            alt="Residential insurance restoration services in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Residential Insurance Restoration Services in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Expert restoration for Tampa Bay homeowners. From hurricane and water damage to fire restoration, we help you navigate insurance claims and restore your home to pre-loss condition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Home Restoration Help
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
              Your home is more than a building—it's where your family lives, creates memories, and feels safe. When disaster strikes, Florida Construction Specialists provides compassionate, professional restoration services that help Tampa Bay homeowners recover. We understand the stress of dealing with property damage and insurance claims, and we're here to guide you through every step of the restoration process while ensuring you receive fair treatment from your insurance company.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Florida Homeowner Protections</h3>
                  <p className="text-amber-700">Florida law provides significant protections for homeowners with insurance claims. Under Florida Statute 627.7011, insurers must cover code upgrade costs when repairing hurricane damage. The Valued Policy Law (F.S. 627.702) requires full policy limits for total losses. You have the right to hire contractors and representatives of your choosing—don't let anyone pressure you into decisions.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Residential Restoration Services
            </h2>
            
            <p className="text-gray-600 mb-6">
              We provide comprehensive residential restoration services for all types of property damage. Our experienced team handles everything from emergency response through final repairs, with full documentation to support your insurance claim.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Home className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Hurricane & Storm Damage</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Roof repair and replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Window and door replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Siding and exterior repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Structural damage repair</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Water Damage Restoration</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Emergency water extraction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Structural drying</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Mold prevention/remediation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Interior reconstruction</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Hammer className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Fire & Smoke Damage</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Board-up and securing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Smoke and soot cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Odor elimination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Complete reconstruction</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Heart className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Insurance Claim Support</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Damage documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Detailed repair estimates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Adjuster meeting attendance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Supplement claim assistance</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Residential Restoration Costs
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Restoration Type</th>
                    <th className="px-6 py-4 text-left">Typical Cost Range</th>
                    <th className="px-6 py-4 text-left">Timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Water damage (minor)</td>
                    <td className="px-6 py-4">$3,000 - $10,000</td>
                    <td className="px-6 py-4 text-gray-600">1-2 weeks</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Water damage (major)</td>
                    <td className="px-6 py-4">$15,000 - $50,000</td>
                    <td className="px-6 py-4 text-gray-600">3-6 weeks</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Roof replacement</td>
                    <td className="px-6 py-4">$15,000 - $45,000</td>
                    <td className="px-6 py-4 text-gray-600">1-2 weeks</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Hurricane repairs (moderate)</td>
                    <td className="px-6 py-4">$25,000 - $100,000</td>
                    <td className="px-6 py-4 text-gray-600">4-8 weeks</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Fire damage restoration</td>
                    <td className="px-6 py-4">$20,000 - $150,000</td>
                    <td className="px-6 py-4 text-gray-600">4-12 weeks</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Major structural repair</td>
                    <td className="px-6 py-4">$50,000 - $200,000+</td>
                    <td className="px-6 py-4 text-gray-600">2-6 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The Residential Restoration Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Emergency Response</h3>
                  <p className="text-gray-600">We respond quickly to secure your home, prevent further damage, and begin mitigation. This includes board-up, tarping, water extraction, and emergency stabilization—all documented for your insurance claim.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Assessment & Documentation</h3>
                  <p className="text-gray-600">We thoroughly assess all damage, create detailed documentation with photos and descriptions, and prepare comprehensive estimates. This documentation supports your insurance claim and ensures nothing is missed.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Insurance Coordination</h3>
                  <p className="text-gray-600">We work with your insurance company, attend adjuster inspections, provide required documentation, and help resolve any claim issues. Our goal is ensuring you receive fair compensation for your loss.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Restoration & Repairs</h3>
                  <p className="text-gray-600">Once the claim is approved, we complete all repairs to restore your home. Our quality craftsmanship meets or exceeds original construction, with code upgrades where required.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Final Walkthrough</h3>
                  <p className="text-gray-600">We conduct a thorough final walkthrough with you, address any concerns, and ensure you're completely satisfied. We also help with any remaining insurance documentation, including recoverable depreciation.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Homeowner Tips for Insurance Claims
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Do</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Document damage immediately</li>
                  <li>• Prevent further damage (mitigation)</li>
                  <li>• Save damaged materials as evidence</li>
                  <li>• Get everything in writing</li>
                  <li>• Keep all receipts</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">Don't</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Accept the first offer without review</li>
                  <li>• Sign contracts under pressure</li>
                  <li>• Dispose of damaged items prematurely</li>
                  <li>• Start major repairs without approval</li>
                  <li>• Miss claim deadlines</li>
                </ul>
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
              <h3 className="text-2xl font-bold mb-4">We're Here When You Need Us</h3>
              <p className="mb-6 text-gray-200">
                Florida Construction Specialists provides compassionate, professional residential restoration services throughout Tampa Bay. When disaster affects your home, we're here to help you recover.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Get Help Now
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
            Restore Your Home with Confidence
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for residential restoration services throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Consultation
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
