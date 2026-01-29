import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Home, Shield, Wrench, FileCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Residential Restoration After Hurricane Damage | Home Storm Repair",
  description: "Expert residential restoration after hurricane damage in Tampa. Complete home reconstruction, roof repair, water damage restoration, and insurance claim support for Tampa Bay homeowners.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Residential Restoration After Hurricane Damage", href: "/tampa-residential-restoration-after-hurricane-damage/" },
];

const faqs = [
  {
    question: "How long does residential hurricane restoration typically take in Tampa?",
    answer: "Restoration timelines vary significantly based on damage severity. Minor roof and water damage repairs may take 2-4 weeks. Moderate damage requiring roof replacement and interior restoration typically takes 2-3 months. Major structural damage or complete rebuilds can take 6-12 months. We provide realistic timelines during initial assessment and keep you updated throughout the project."
  },
  {
    question: "Should I file an insurance claim for hurricane damage to my Tampa home?",
    answer: "For any significant damage, yes. Document everything before temporary repairs, file your claim promptly (Florida requires timely notification), and request a professional damage assessment. Be aware of your policy's hurricane deductible—typically 2-5% of your dwelling coverage amount. Even if damage seems minor, hidden issues like roof deck damage or water intrusion can cause major problems later."
  },
  {
    question: "What's the difference between hurricane deductible and regular deductible?",
    answer: "Florida homeowners policies have separate hurricane deductibles, typically 2-5% of your dwelling coverage (not the damage amount). For a $400,000 home with 2% hurricane deductible, you'd pay $8,000 before insurance kicks in. Regular deductibles (often $1,000-$2,500) apply to non-hurricane claims. Hurricane deductibles apply when the National Weather Service declares a hurricane watch or warning."
  },
  {
    question: "Can I stay in my home during hurricane restoration?",
    answer: "It depends on the damage extent and work being performed. Minor repairs may allow continued occupancy. However, extensive work involving structural repairs, roof replacement, or mold remediation typically requires temporary relocation. Most homeowner policies include Additional Living Expense (ALE) coverage that pays for temporary housing during restoration—typically 20-30% of dwelling coverage."
  },
  {
    question: "How do I prevent contractor fraud after a hurricane?",
    answer: "Hurricane season unfortunately attracts unlicensed contractors and scammers. Protect yourself by verifying Florida contractor licenses at myfloridalicense.com, checking references and reviews, getting multiple written estimates, never paying more than 10% upfront (Florida law), and avoiding contractors who demand full payment before work begins or pressure you to sign immediately. Florida Construction Specialists is fully licensed, insured, and has served Tampa Bay for over 20 years."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Services" },
  { href: "/hurricane-proof-reconstruction-services-in-tampa/", label: "Hurricane-Proof Reconstruction" },
  { href: "/roof-damage-restoration-and-insurance-claims-in-tampa/", label: "Roof Damage Restoration" },
  { href: "/tampa-insurance-restoration-for-hurricane-damage/", label: "Insurance Restoration" },
  { href: "/contact/", label: "Schedule Consultation" },
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
            alt="Residential hurricane damage restoration in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa Residential Restoration After Hurricane Damage
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Complete home restoration services for Tampa Bay homeowners recovering from hurricane damage. From emergency repairs to full reconstruction, we restore your home and peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Free Assessment
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
              Tampa Bay's vulnerability to hurricanes means residential restoration services are an essential resource for homeowners. When a hurricane damages your home, you need a contractor you can trust to restore your property properly, work effectively with your insurance company, and get your family back to normal life as quickly as possible. Florida Construction Specialists has helped thousands of Tampa Bay homeowners recover from hurricane damage, providing comprehensive restoration services from emergency board-up through complete reconstruction.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">After the Storm: Critical First Steps</h3>
                  <p className="text-red-700">Document all damage with photos and video before making any repairs. Contact your insurance company promptly—Florida law requires timely claim notification. Make only temporary repairs necessary to prevent further damage (save receipts). Avoid unlicensed contractors who go door-to-door after storms. Call Florida Construction Specialists for professional assessment and restoration.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Comprehensive Residential Hurricane Restoration
            </h2>
            
            <p className="text-gray-600 mb-6">
              Hurricane damage to residential properties ranges from minor shingle loss to complete structural devastation. Florida Construction Specialists provides the full spectrum of restoration services, managing every aspect of your recovery from initial damage assessment through final quality inspection. Our experience with Tampa Bay's housing stock—from historic bungalows to modern construction—ensures your home is restored appropriately for its style and construction type.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Emergency Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>24/7 emergency response availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Emergency board-up and tarping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Water extraction and emergency drying</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Debris removal and site securing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Home className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Roof Restoration</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Complete roof replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Shingle and tile repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Roof deck repair and replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Fascia and soffit restoration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Wrench className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Structural Repairs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Wall and framing repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Window and door replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Foundation and slab repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Structural reinforcement upgrades</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <FileCheck className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Interior Restoration</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Water damage remediation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Mold inspection and remediation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Drywall, flooring, and ceiling repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Kitchen and bathroom restoration</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Understanding Florida Homeowner Insurance for Hurricane Damage
            </h2>

            <p className="text-gray-600 mb-6">
              Florida's homeowner insurance market is complex, with many carriers, varying policy forms, and unique requirements. Understanding your coverage before a hurricane helps ensure proper protection and smoother claims processing. Key coverages for hurricane damage include Dwelling Coverage (your home's structure), Other Structures (fences, sheds, detached garages), Personal Property (contents), and Additional Living Expenses (temporary housing).
            </p>

            <p className="text-gray-600 mb-6">
              Florida law (Section 627.7011, F.S.) requires insurers to pay for code-required upgrades when repairing hurricane damage. For older Tampa Bay homes, this can be significant—current Florida Building Code often requires enhanced hurricane protection that original construction didn't include. Your restoration contractor should identify all code upgrade requirements and document them for your claim.
            </p>

            <p className="text-gray-600 mb-8">
              Hurricane deductibles in Florida typically range from 2-5% of your dwelling coverage amount, applied separately from your regular deductible. For a home insured at $400,000 with a 2% hurricane deductible, you'd pay $8,000 before insurance coverage applies. Understanding this before a storm helps you prepare financially for potential out-of-pocket costs.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Residential Hurricane Restoration Costs in Tampa Bay
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Service Type</th>
                    <th className="px-6 py-4 text-left">Price Range</th>
                    <th className="px-6 py-4 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Emergency Board-Up/Tarp</td>
                    <td className="px-6 py-4">$500 - $3,000</td>
                    <td className="px-6 py-4 text-gray-600">Per opening or roof section</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Roof Replacement (Shingle)</td>
                    <td className="px-6 py-4">$8,000 - $25,000</td>
                    <td className="px-6 py-4 text-gray-600">Average Tampa home size</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Roof Replacement (Tile)</td>
                    <td className="px-6 py-4">$20,000 - $50,000</td>
                    <td className="px-6 py-4 text-gray-600">Concrete or clay tile</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Water Damage Restoration</td>
                    <td className="px-6 py-4">$2,500 - $15,000</td>
                    <td className="px-6 py-4 text-gray-600">Depending on affected area</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Impact Windows (per opening)</td>
                    <td className="px-6 py-4">$500 - $1,500</td>
                    <td className="px-6 py-4 text-gray-600">Supply and installation</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Interior Reconstruction</td>
                    <td className="px-6 py-4">$50 - $150/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Complete interior rebuild</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Complete Home Restoration</td>
                    <td className="px-6 py-4">$75,000 - $300,000+</td>
                    <td className="px-6 py-4 text-gray-600">Major damage, full restoration</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Prices reflect 2024 Tampa Bay market rates. Actual costs vary based on home size, damage extent, material choices, and current market conditions. Contact us for a detailed assessment and estimate.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The Residential Restoration Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Emergency Response</h3>
                  <p className="text-gray-600">We respond quickly to secure your property, prevent further damage, and begin the recovery process. Emergency services include board-up, tarping, water extraction, and debris clearing to make your property safe and protected.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Damage Assessment</h3>
                  <p className="text-gray-600">Our team conducts thorough inspection of your entire property, documenting all damage with photos, measurements, and detailed notes. This assessment forms the basis of your insurance claim and our restoration plan.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Insurance Coordination</h3>
                  <p className="text-gray-600">We work directly with your insurance adjuster, providing documentation, meeting on-site for inspections, and ensuring all damage is properly identified and included in your claim. Our Xactimate estimates match insurance industry formats.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Restoration Planning</h3>
                  <p className="text-gray-600">Once your claim is approved, we develop a detailed restoration plan, timeline, and material selections. You'll know exactly what work will be performed, how long it will take, and what your home will look like when complete.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Construction & Restoration</h3>
                  <p className="text-gray-600">Our crews execute the restoration plan, performing all necessary repairs from structural work through final finishes. We maintain communication throughout the project and address any issues promptly.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">6</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Final Inspection & Warranty</h3>
                  <p className="text-gray-600">We conduct a thorough final walkthrough with you, ensure all work meets your expectations, obtain required permits and approvals, and provide warranty documentation for all completed work.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Hurricane Hardening: Stronger Than Before
            </h2>

            <p className="text-gray-600 mb-6">
              Post-hurricane restoration is an opportunity to make your home more resilient against future storms. Florida Building Code requires that repairs meet current standards, which are significantly stronger than codes from even 10-15 years ago. Beyond code minimums, we can incorporate additional hurricane protection measures that reduce future damage risk and may lower your insurance premiums.
            </p>

            <p className="text-gray-600 mb-8">
              Consider upgrading to impact-resistant windows, installing a fortified roof system, adding hurricane straps and clips, or reinforcing garage doors. These improvements can qualify for significant insurance discounts under Florida's wind mitigation provisions—sometimes reducing premiums by 30% or more. The investment often pays for itself within a few years while providing real protection.
            </p>

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
              Why Tampa Bay Homeowners Trust Florida Construction Specialists
            </h2>

            <p className="text-gray-600 mb-6">
              For over two decades, Florida Construction Specialists has helped Tampa Bay families recover from hurricanes and return to their homes. We understand that your home is more than a building—it's where your family lives, where memories are made, and where you should feel safe and comfortable. Our restoration work reflects that understanding.
            </p>

            <p className="text-gray-600 mb-8">
              We're fully licensed (Florida CGC License), insured, and local. We don't chase storms; we serve our community year-round. Our crews live in Tampa Bay, and many have experienced hurricane damage to their own homes. That shared experience drives our commitment to quality restoration and honest, transparent service.
            </p>

            <div className="bg-brand-green-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Hurricane Damaged Your Home?</h3>
              <p className="mb-6 text-gray-200">
                Contact Florida Construction Specialists for professional residential restoration services. We'll assess your damage, help you navigate the insurance process, and restore your Tampa Bay home to its pre-storm condition—or better.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Get Free Assessment
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
            Restore Your Tampa Home After Hurricane Damage
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for professional residential hurricane restoration services throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Assessment
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
