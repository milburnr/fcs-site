import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, TreePine, Shovel, Droplets, Sun } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Post-Disaster Landscaping Restoration Tampa | Commercial Site Recovery",
  description: "Post-disaster landscaping restoration in Tampa. Commercial property debris removal, tree services, irrigation repair, and landscape reconstruction after hurricanes and storms.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Post-Disaster Landscaping Restoration in Tampa", href: "/post-disaster-landscaping-restoration-in-tampa/" },
];

const faqs = [
  {
    question: "How quickly should landscape debris be cleared after a hurricane?",
    answer: "Landscape debris should be cleared as soon as safely possible after a storm. Downed trees and branches can block access, create safety hazards, and begin attracting pests within days. Vegetative debris left on turf for more than 1-2 weeks can kill the grass underneath. However, wait for power company clearance before addressing any trees near power lines."
  },
  {
    question: "Will insurance cover landscape damage from hurricanes?",
    answer: "Commercial property insurance typically covers debris removal from the insured premises, usually as part of the main claim or under a separate debris removal provision. Coverage for replacing trees, shrubs, and landscaping is more limited—often capped at $500-$1,000 per plant with aggregate limits. Review your policy carefully; landscape coverage varies significantly between policies."
  },
  {
    question: "Can storm-damaged trees be saved or should they be removed?",
    answer: "It depends on the damage extent. Trees with less than 50% crown damage and no significant trunk splitting often recover with proper pruning. However, trees with major structural damage, root upheaval, or trunk wounds exposing more than 25% of the circumference typically cannot be saved and pose future failure risks. A certified arborist assessment determines salvageability."
  },
  {
    question: "How long does commercial landscape restoration take?",
    answer: "Timeline depends on damage extent. Debris removal typically takes 1-3 weeks for a commercial site. Irrigation repair and hardscape restoration may take 2-4 weeks. Full landscape replacement and establishment can take 3-6 months, though initial planting can occur quickly. We phase work to restore site usability as quickly as possible."
  },
  {
    question: "Should I replant the same species after hurricane damage?",
    answer: "Not necessarily. Post-hurricane restoration is an opportunity to improve your landscape's wind resistance. Replace weak-wooded or poorly structured trees (like Queen Palms or Brazilian Pepper) with species proven to withstand Tampa Bay hurricanes: Live Oaks, Sabal Palms, Bald Cypress, and Southern Magnolias all have excellent wind resistance records."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Services" },
  { href: "/complete-property-overhaul-after-disasters-in-tampa/", label: "Complete Property Overhaul" },
  { href: "/commercial-property-damage-restoration-in-tampa/", label: "Commercial Property Restoration" },
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
            src="/images/hurricane-ian/hurricane-ian-display.webp"
            alt="Post-disaster landscaping restoration in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Post-Disaster Landscaping Restoration in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Restore your Tampa Bay commercial property's landscape after hurricanes and storms. Debris removal, tree services, irrigation repair, and landscape reconstruction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Request Site Assessment
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
              Hurricanes and severe storms can devastate commercial property landscapes in minutes—toppling mature trees, flooding turf areas, destroying irrigation systems, and covering sites in debris. For Tampa Bay businesses, rapid landscape restoration is essential for site access, safety, professional appearance, and property function. Florida Construction Specialists provides comprehensive post-disaster landscaping restoration services, from emergency debris removal through complete landscape reconstruction.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Safety First: Post-Storm Landscape Hazards</h3>
                  <p className="text-amber-700">Storm-damaged landscapes present serious hazards. Hanging branches can fall without warning. Downed power lines may be hidden in debris. Standing water creates mosquito breeding and slip hazards. Root balls can shift, causing further tree falls. Keep people away from damaged areas until professional assessment is complete.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Commercial Landscape Damage After Storms
            </h2>
            
            <p className="text-gray-600 mb-6">
              Tampa Bay's landscape plant palette—including palms, live oaks, and tropical plantings—faces significant stress during hurricanes. Understanding common damage types helps property owners assess their restoration needs and priorities:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <TreePine className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Tree Damage</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Complete uprooting (blow-over)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Major limb loss and crown damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Trunk splitting and bark stripping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Leaning trees with root damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Palm frond loss and crown damage</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Droplets className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Ground-Level Damage</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Turf flooding and saltwater intrusion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Shrub and groundcover destruction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Erosion and soil displacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Debris accumulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Mulch and soil contamination</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shovel className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Hardscape Damage</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Pavement damage from fallen trees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Fence and wall destruction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Lighting fixture damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Signage and site furniture loss</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Sun className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">System Damage</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Irrigation mainline breaks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Sprinkler head damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Controller and electrical damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Drainage system blockage</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Landscaping Restoration Services
            </h2>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Emergency Debris Removal</h3>
            <p className="text-gray-600 mb-6">
              Our crews respond quickly to clear fallen trees, branches, and storm debris from commercial properties. Priority goes to clearing access routes, removing safety hazards, and enabling building access. We coordinate with utility companies for any debris involving power lines and provide proper disposal through licensed facilities.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Tree Services</h3>
            <p className="text-gray-600 mb-6">
              Certified arborists assess damaged trees to determine salvageability. Services include emergency tree removal, hazardous limb removal, corrective pruning of damaged crowns, tree staking and support installation, and complete stump removal. We help you decide which trees to save and which to replace based on species, damage extent, and future risk.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Irrigation System Repair</h3>
            <p className="text-gray-600 mb-6">
              Storm damage often affects irrigation systems—from mainline breaks caused by fallen trees to head damage from debris. We locate and repair all breaks, replace damaged components, verify zone coverage, and reprogram controllers. Restored irrigation is essential for landscape recovery and new plantings.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-8">Complete Landscape Reconstruction</h3>
            <p className="text-gray-600 mb-8">
              When damage is extensive, complete landscape reconstruction may be needed. We design and install hurricane-resistant landscapes using species proven to withstand Tampa Bay storms. New installations include proper tree selection and placement, native and adapted plant materials, efficient irrigation design, and stormwater management features.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Landscape Restoration Costs in Tampa Bay
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
                    <td className="px-6 py-4 font-medium">Debris Removal</td>
                    <td className="px-6 py-4">$500 - $5,000</td>
                    <td className="px-6 py-4 text-gray-600">Per commercial site, varies by volume</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Emergency Tree Removal</td>
                    <td className="px-6 py-4">$500 - $3,000/tree</td>
                    <td className="px-6 py-4 text-gray-600">Size and complexity dependent</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Tree Pruning (storm damage)</td>
                    <td className="px-6 py-4">$200 - $1,000/tree</td>
                    <td className="px-6 py-4 text-gray-600">Crown restoration</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Stump Grinding</td>
                    <td className="px-6 py-4">$100 - $500/stump</td>
                    <td className="px-6 py-4 text-gray-600">Size dependent</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Irrigation Repair</td>
                    <td className="px-6 py-4">$200 - $2,000</td>
                    <td className="px-6 py-4 text-gray-600">Depends on damage extent</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Sod Installation</td>
                    <td className="px-6 py-4">$1.50 - $3.00/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Including soil prep</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Tree Installation</td>
                    <td className="px-6 py-4">$300 - $2,500/tree</td>
                    <td className="px-6 py-4 text-gray-600">Species and size vary</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Complete Landscape Restoration</td>
                    <td className="px-6 py-4">$8 - $25/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Full redesign and installation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Prices reflect 2024 Tampa Bay market rates. Emergency services during major storm events may face price increases due to demand. Contact us for site-specific assessment and estimate.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Wind-Resistant Landscape Design
            </h2>

            <p className="text-gray-600 mb-6">
              Post-disaster restoration is an opportunity to create a more hurricane-resistant landscape. Research from the University of Florida and real-world experience from Tampa Bay hurricanes identify species and design practices that minimize storm damage:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-bold text-brand-green-dark mb-3">Hurricane-Resistant Trees for Tampa Bay</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-700 mb-2">Excellent Wind Resistance:</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Live Oak (Quercus virginiana)</li>
                    <li>• Sabal Palm (Sabal palmetto)</li>
                    <li>• Bald Cypress (Taxodium distichum)</li>
                    <li>• Southern Magnolia (Magnolia grandiflora)</li>
                    <li>• Crape Myrtle (Lagerstroemia indica)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-2">Species to Avoid:</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Queen Palm (high failure rate)</li>
                    <li>• Water Oak (weak wood)</li>
                    <li>• Laurel Oak (shallow roots)</li>
                    <li>• Bradford Pear (poor structure)</li>
                    <li>• Eucalyptus species (brittle)</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Landscape Restoration Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Safety Assessment</h3>
                  <p className="text-gray-600">We assess the site for immediate hazards—hanging branches, unstable trees, downed power lines, and structural damage. Hazards are marked and addressed before general work begins.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Emergency Clearing</h3>
                  <p className="text-gray-600">Priority clearing restores site access and removes immediate hazards. Debris is removed and processed appropriately. Access routes for building restoration work are established.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Comprehensive Assessment</h3>
                  <p className="text-gray-600">Arborists evaluate remaining trees for salvageability. Irrigation systems are tested. Hardscape damage is documented. Complete site assessment supports insurance claims and restoration planning.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Tree and Irrigation Work</h3>
                  <p className="text-gray-600">Damaged trees are removed or pruned for recovery. Irrigation systems are repaired and tested. This work enables plant material recovery and prepares for new installations.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Landscape Installation</h3>
                  <p className="text-gray-600">New trees, shrubs, groundcovers, and turf are installed to replace losses. Plant selection emphasizes hurricane resistance and low maintenance. Proper installation techniques ensure establishment success.</p>
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
              <h3 className="text-2xl font-bold mb-4">Storm Damage to Your Commercial Landscape?</h3>
              <p className="mb-6 text-gray-200">
                Contact Florida Construction Specialists for professional landscape restoration services. From emergency debris clearing to complete landscape reconstruction, we restore your Tampa Bay commercial property's outdoor spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Request Site Assessment
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
            Tampa Bay Landscape Restoration Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for post-disaster landscaping restoration throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Landscape Assessment
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
