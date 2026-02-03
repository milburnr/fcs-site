import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle, Shield, AlertTriangle, Clock, DollarSign } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Hurricane-Proof Reconstruction Tampa | Commercial",
  description: "Expert hurricane-proof reconstruction services in Tampa. Commercial building fortification, impact-resistant systems, and Florida Building Code compliance. FEMA-approved contractors serving Tampa Bay businesses.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Hurricane Proof Reconstruction Services in Tampa", href: "/hurricane-proof-reconstruction-services-in-tampa/" },
];

const faqs = [
  {
    question: "What makes a building hurricane-proof in Tampa?",
    answer: "Hurricane-proof construction in Tampa requires compliance with Florida Building Code High-Velocity Hurricane Zone (HVHZ) standards, including impact-resistant windows and doors rated for 150+ mph winds, reinforced roof-to-wall connections with hurricane straps, continuous load paths from roof to foundation, and wind-resistant roofing systems. Commercial buildings must also meet additional requirements for essential facilities and large structures."
  },
  {
    question: "How much does commercial hurricane-proof reconstruction cost in Tampa?",
    answer: "Commercial hurricane-proof reconstruction in Tampa typically ranges from $45-$150 per square foot depending on the scope. Full structural hardening averages $75-$125/sq ft, impact window systems run $800-$2,500 per opening, and reinforced roofing systems cost $15-$35/sq ft. Projects typically range from $150,000 to $500,000+ for mid-size commercial buildings."
  },
  {
    question: "Does insurance cover hurricane-proof upgrades in Florida?",
    answer: "While standard insurance doesn't cover upgrades, Florida law (Section 627.7011) requires insurers to pay for code-required improvements when repairing hurricane damage. Additionally, many insurers offer premium discounts of 15-45% for certified hurricane-resistant construction. FEMA's Hazard Mitigation Grant Program may also fund qualifying commercial hardening projects."
  },
  {
    question: "How long does hurricane-proof reconstruction take for commercial buildings?",
    answer: "Commercial hurricane-proof reconstruction timelines vary by scope: window and door replacement takes 2-4 weeks, roof system reinforcement requires 4-8 weeks, and comprehensive structural hardening can take 3-6 months. Emergency pre-hurricane hardening can be expedited to 1-2 weeks for critical components when materials are available."
  },
  {
    question: "What certifications should a hurricane reconstruction contractor have?",
    answer: "Qualified contractors should hold Florida CGC (Certified General Contractor) or CBC (Certified Building Contractor) licenses, plus certifications from the Florida Building Commission. Look for FORTIFIED Commercial certification training, FEMA Hazard Mitigation Specialist credentials, and membership in the Florida Roofing and Sheet Metal Contractors Association."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/reinforced-construction-services-in-tampa-for-disaster-prevention/", label: "Reinforced Construction Services" },
  { href: "/structural-integrity-evaluation-in-tampa-post-disaster/", label: "Structural Integrity Evaluation" },
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
            src="/images/hurricane-ian/hurricane-ian-display.webp"
            alt="Hurricane-proof commercial building reconstruction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Hurricane-Proof Reconstruction Services in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Commercial building fortification and storm-resistant reconstruction that exceeds Florida Building Code requirements. Protect your Tampa Bay business from the next major hurricane.
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
              Tampa Bay's position on Florida's Gulf Coast makes commercial properties uniquely vulnerable to hurricane damage. With an average of 12 named storms annually affecting Florida and hurricane season extending from June 1 through November 30, Tampa businesses face significant risk every year. Florida Construction Specialists provides comprehensive hurricane-proof reconstruction services designed to protect your commercial investment and ensure business continuity when the next major storm makes landfall.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">Tampa Bay Hurricane Risk Reality</h3>
                  <p className="text-red-700">Tampa hasn't experienced a direct hit from a major hurricane since 1921, but meteorologists consistently rank Tampa Bay as one of the most vulnerable metro areas in the United States. When—not if—the next major hurricane strikes, properties built to minimum code will face catastrophic damage. Hurricane-proof reconstruction isn't an expense; it's essential risk management.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Understanding Hurricane-Proof Construction Standards in Florida
            </h2>
            
            <p className="text-gray-600 mb-6">
              The Florida Building Code (FBC) establishes minimum construction standards, but minimum compliance doesn't equal hurricane-proof construction. True storm-resistant commercial buildings require engineering and construction practices that significantly exceed code minimums. Our hurricane-proof reconstruction services incorporate the latest wind engineering research, FEMA mitigation guidelines, and Insurance Institute for Business & Home Safety (IBHS) FORTIFIED Commercial standards.
            </p>

            <p className="text-gray-600 mb-6">
              The 2023 Florida Building Code, 8th Edition, requires all new construction and major renovations to meet enhanced wind resistance standards based on the property's Risk Category and location within Florida's wind speed zones. Tampa Bay falls within the 150 mph design wind speed zone, requiring commercial buildings to withstand sustained winds of 130+ mph with gusts exceeding 150 mph. However, Category 4 and 5 hurricanes can produce winds far exceeding these minimums.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Commercial Hurricane-Proof Reconstruction Services
            </h2>

            <div className="mb-8">
              <Image
                src="/wp-content/uploads/2023/12/Ian-2.jpg"
                alt="Aerial view of catastrophic hurricane damage to roofs and homes in coastal community"
                width={800}
                height={500}
                className="rounded-lg w-full object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Structural Hardening</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Reinforced roof-to-wall connections with hurricane straps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Continuous load path engineering from roof to foundation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Concrete masonry unit (CMU) wall reinforcement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Steel moment frame retrofits for older buildings</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Building Envelope Protection</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Impact-resistant window and storefront systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Wind-rated commercial door assemblies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Hurricane-rated garage and loading dock doors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Removable or permanent storm shutter systems</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Roofing System Upgrades</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Standing seam metal roofing with concealed fasteners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Modified bitumen systems with enhanced attachment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Secondary water barriers beneath roof coverings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Enhanced edge metal and parapet protection</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Critical Systems Protection</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Generator and electrical system hardening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>HVAC equipment tie-downs and wind screens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Flood-resistant utility placement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Data center and server room protection</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Florida Insurance and FEMA Requirements
            </h2>

            <p className="text-gray-600 mb-6">
              Florida's insurance market has undergone significant changes, with many carriers exiting the state or dramatically increasing premiums. Hurricane-proof reconstruction can substantially reduce your insurance costs while ensuring coverage availability. Under Florida Statute 627.0629, insurers must provide premium discounts for wind mitigation features, and these discounts can reach 45% or more for comprehensive hurricane-resistant construction.
            </p>

            <p className="text-gray-600 mb-6">
              FEMA's Hazard Mitigation Grant Program (HMGP) and Building Resilient Infrastructure and Communities (BRIC) program provide funding for qualifying commercial hardening projects. These programs can cover 75% of eligible mitigation costs, with the state of Florida often covering the remaining 25% match for approved projects. Florida Construction Specialists has extensive experience navigating FEMA grant applications and can help maximize your funding opportunities.
            </p>

            <p className="text-gray-600 mb-8">
              Florida law (Section 627.7011, F.S.) requires insurance companies to pay for code-required upgrades when repairing hurricane damage. This means if your building sustains damage and current code requires enhanced hurricane protection, your insurance must cover those improvements. Understanding this requirement can significantly impact your post-storm reconstruction decisions and coverage.
            </p>

            {/* Cost Table */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Hurricane-Proof Reconstruction Costs in Tampa Bay
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Service Category</th>
                    <th className="px-6 py-4 text-left">Price Range</th>
                    <th className="px-6 py-4 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Impact-Resistant Windows</td>
                    <td className="px-6 py-4">$800 - $2,500/opening</td>
                    <td className="px-6 py-4 text-gray-600">Large missile impact rated</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Commercial Storefront Systems</td>
                    <td className="px-6 py-4">$150 - $350/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Curtain wall and entrance systems</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Hurricane Roofing Systems</td>
                    <td className="px-6 py-4">$15 - $35/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Standing seam or enhanced membrane</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Structural Reinforcement</td>
                    <td className="px-6 py-4">$25 - $75/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Hurricane straps, tie-downs, load path</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Comprehensive Hardening</td>
                    <td className="px-6 py-4">$75 - $150/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Full building envelope upgrade</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Generator/Critical Systems</td>
                    <td className="px-6 py-4">$25,000 - $150,000+</td>
                    <td className="px-6 py-4 text-gray-600">Backup power and protection</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Prices reflect 2024 Tampa Bay market rates. Actual costs vary based on building size, construction type, accessibility, and specific requirements. Contact us for a detailed assessment and quote.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Hurricane-Proof Reconstruction Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Comprehensive Vulnerability Assessment</h3>
                  <p className="text-gray-600">Our engineers evaluate your building's current wind resistance, identifying weaknesses in the structural system, building envelope, and critical components. We use the IBHS FORTIFIED Commercial evaluation criteria to establish a baseline and prioritize improvements.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Engineering and Design</h3>
                  <p className="text-gray-600">Licensed structural engineers develop detailed hardening plans that meet or exceed Florida Building Code requirements. We provide cost-benefit analysis for various improvement levels and help you understand insurance implications of each option.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Permitting and Compliance</h3>
                  <p className="text-gray-600">We handle all Hillsborough County and City of Tampa permitting requirements, ensuring your reconstruction meets current code and qualifies for insurance discounts and potential FEMA funding.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Construction and Installation</h3>
                  <p className="text-gray-600">Our experienced crews execute the hardening plan with minimal disruption to your business operations. We coordinate phased construction when necessary to maintain building occupancy and functionality throughout the project.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Certification and Documentation</h3>
                  <p className="text-gray-600">Upon completion, we provide comprehensive documentation including wind mitigation inspection reports, product approvals, and installation certifications. This documentation is essential for insurance discount qualification and future property transactions.</p>
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
              Why Tampa Bay Businesses Choose Florida Construction Specialists
            </h2>

            <p className="text-gray-600 mb-6">
              With over two decades of experience in Tampa Bay commercial construction, Florida Construction Specialists understands the unique challenges our region faces during hurricane season. We've helped hundreds of commercial property owners protect their investments through strategic hurricane-proof reconstruction that balances cost, protection level, and business continuity requirements.
            </p>

            <p className="text-gray-600 mb-8">
              Our team includes licensed engineers, certified wind mitigation inspectors, and construction professionals with extensive hurricane damage restoration experience. We've seen firsthand what happens when buildings are inadequately protected, and we bring that knowledge to every hardening project we undertake. When the next major hurricane threatens Tampa Bay, our clients have confidence that their properties are built to survive.
            </p>

            <div className="bg-brand-green-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Protect Your Commercial Property Before Hurricane Season</h3>
              <p className="mb-6 text-gray-200">
                Don't wait until a storm is approaching to think about hurricane protection. Contact Florida Construction Specialists today for a comprehensive vulnerability assessment and learn how hurricane-proof reconstruction can protect your Tampa Bay business while reducing insurance costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Schedule Free Assessment
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
            title="Related Disaster Recovery Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Hurricane-Proof Your Commercial Property?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists today for a free vulnerability assessment and hurricane-proof reconstruction consultation.
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
