import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Impact of Climate on Historic Restoration in Tampa",
  description: "Learn how Tampa's subtropical climate affects historic building preservation. Expert strategies for protecting landmarks from humidity, hurricanes, and salt air corrosion.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Impact of Climate on Historic Restoration in Tampa", href: "/impact-of-climate-on-historic-restoration-in-tampa/" },
];

const internalLinks = [
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/services/historic-restoration/shpo-compliance/", label: "SHPO Compliance" },
  { href: "/services/historic-restoration/historic-tax-credits/", label: "Historic Tax Credits" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/historic-preservation/historic-preservation-display.webp"
            alt="Climate impact on historic restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Impact of Climate on Historic Restoration in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Understanding how Tampa's subtropical climate—with its hurricanes, humidity, and intense sun—affects historic preservation and the specialized strategies required to protect irreplaceable landmarks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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

      {/* Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <p className="text-gray-600 mb-6">
              Tampa's subtropical climate presents unique challenges for historic preservation that differ significantly from those faced in northern states. The combination of high humidity, intense ultraviolet radiation, salt air corrosion, frequent severe storms, and hurricane threats requires specialized restoration approaches that balance historical authenticity with climate resilience. Florida Construction Specialists has developed expertise in addressing these regional challenges while maintaining compliance with the Secretary of the Interior's Standards for the Treatment of Historic Properties.
            </p>

            <p className="text-gray-600 mb-6">
              Historic landmarks throughout Tampa Bay—from the ornate Mediterranean Revival structures of Hyde Park to the industrial brick buildings of Ybor City's cigar district—face accelerated deterioration compared to similar structures in more temperate climates. Understanding these climate impacts and implementing appropriate mitigation strategies protects both cultural heritage and significant financial investments in historic properties.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Humidity and Moisture Management in Historic Buildings
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's average relative humidity exceeds 75% for much of the year, creating persistent moisture challenges for historic buildings. This constant humidity promotes mold growth, wood rot, and corrosion of metal elements. Historic structures often lack modern vapor barriers and air conditioning systems, making moisture management a primary restoration concern.
            </p>
            
            <p className="text-gray-600 mb-6">
              The Italian Club in Ybor City exemplifies these challenges. Its historic ballroom features ornate plasterwork and decorative woodwork that require carefully controlled humidity levels. Restoration professionals must integrate modern HVAC systems while preserving the building's historic character—a balance required by Standard 9 of the Secretary of the Interior's Standards, which states that new additions should not destroy historic materials and should be differentiated from the historic fabric.
            </p>

            <p className="text-gray-600 mb-6">
              Effective moisture management strategies for Tampa's historic buildings include installation of dehumidification systems that maintain 45-55% interior humidity, improvement of drainage and grading to direct water away from foundations, restoration of historic gutter and downspout systems with appropriate materials, and creation of ventilation pathways that allow historic walls to breathe while controlling interior humidity.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Hurricane Resilience and Historic Preservation
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay's location makes hurricane preparedness essential for all building owners, but historic properties face particular challenges. Modern building codes require wind resistance standards that historic materials and construction methods cannot meet. The Tampa Theatre, for example, must maintain its ornate atmospheric ceiling and decorative elements while withstanding potential Category 5 hurricane forces.
            </p>

            <p className="text-gray-600 mb-6">
              The Secretary of the Interior's Standards allow for installation of life-safety features when sensitively designed and installed. For historic buildings in Tampa's hurricane zone, this includes impact-resistant glazing systems that replicate historic window profiles, concealed structural reinforcement that strengthens without altering visible character, removable storm shutters designed to complement architectural style, and reinforced roof connections that protect historic roofing materials.
            </p>

            <p className="text-gray-600 mb-6">
              Federal and state historic tax credits support these improvements when properly documented. Projects utilizing the 20% federal tax credit and Florida's additional 25% state credit can allocate substantial portions of their budgets to climate resilience measures, provided the work maintains historical integrity and follows approved plans.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Salt Air Corrosion and Coastal Proximity
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's proximity to Tampa Bay and the Gulf of Mexico exposes historic buildings to salt-laden air that accelerates corrosion of metal elements and deterioration of masonry. Historic iron railings, window hardware, structural steel, and decorative metalwork require specialized treatment in this corrosive environment.
            </p>

            <p className="text-gray-600 mb-6">
              Masonry materials also suffer from salt intrusion. When salt water penetrates brick, stone, or mortar, subsequent evaporation leaves salt crystals that expand and contract with moisture changes, causing spalling and deterioration. This process, called subflorescence, particularly threatens the historic brick structures of Ybor City's cigar factories, which were constructed with locally-produced brick that proves susceptible to salt damage.
            </p>

            <p className="text-gray-600 mb-6">
              Restoration strategies for salt air exposure include application of appropriate water-repellent treatments that allow vapor transmission, use of stainless steel or bronze fasteners in place of corroded originals (when replacement is necessary), implementation of sacrificial anode systems to protect structural steel, and regular washing programs to remove salt deposits before they penetrate materials.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Ultraviolet Radiation and Material Degradation
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa receives intense solar radiation year-round, with UV levels significantly higher than northern latitudes. This radiation degrades organic materials including wood, paint, fabric awnings, and roofing materials. Historic exterior woodwork in Hyde Park's residential district requires more frequent maintenance cycles than identical elements would need in northern states.
            </p>

            <p className="text-gray-600 mb-6">
              Paint systems fail faster under Tampa's intense sun, requiring restoration professionals to select formulations that balance historical appearance with enhanced UV resistance. Modern paint technologies can extend service life while matching historic colors documented through paint analysis. The Secretary of the Interior's Standards support use of improved materials when they maintain historical appearance and protect underlying historic fabric.
            </p>

            {/* Cost Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Climate-Related Restoration Costs in Tampa</h3>
              <table className="min-w-full border border-gray-300">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Climate Challenge</th>
                    <th className="px-4 py-2 text-left">Typical Remediation</th>
                    <th className="px-4 py-2 text-left">Cost per SF</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="bg-white">
                    <td className="px-4 py-2">Humidity/Moisture Control</td>
                    <td className="px-4 py-2">HVAC integration, dehumidification</td>
                    <td className="px-4 py-2">$15 - $35</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Hurricane Hardening</td>
                    <td className="px-4 py-2">Window protection, structural reinforcement</td>
                    <td className="px-4 py-2">$25 - $75</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Salt Damage Remediation</td>
                    <td className="px-4 py-2">Masonry restoration, metal treatment</td>
                    <td className="px-4 py-2">$20 - $60</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">UV Protection Systems</td>
                    <td className="px-4 py-2">Window films, exterior coatings</td>
                    <td className="px-4 py-2">$8 - $25</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Termite/Pest Damage Repair</td>
                    <td className="px-4 py-2">Wood replacement, treatment systems</td>
                    <td className="px-4 py-2">$30 - $100</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Termites and Biological Threats
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's warm, humid climate creates ideal conditions for termites and other wood-destroying organisms. Subterranean termites, drywood termites, and wood-rot fungi threaten the structural integrity of historic buildings throughout the region. Many historic structures in Ybor City and Hyde Park contain significant wood elements—framing, flooring, decorative trim, and structural members—that require protection.
            </p>

            <p className="text-gray-600 mb-6">
              Restoration of termite-damaged historic buildings requires careful assessment to determine which materials can be repaired and which require replacement. The Secretary of the Interior's Standards prioritize repair over replacement (Standard 6), so restoration professionals must evaluate whether consolidation treatments, Dutchman repairs, or other conservation techniques can preserve original fabric. When replacement becomes necessary, new materials should match the original in species, profile, and finish.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Climate Change Considerations
            </h2>
            <p className="text-gray-600 mb-6">
              Long-term climate projections for Tampa indicate increasing temperatures, more intense storm events, and rising sea levels. Historic preservation planning must consider these trends when designing restoration approaches that will protect buildings for decades to come. Properties in flood-prone areas may require elevation or flood-proofing measures that challenge traditional preservation approaches.
            </p>

            <p className="text-gray-600 mb-6">
              The National Park Service has issued guidance on climate adaptation for historic properties, recognizing that preservation sometimes requires accepting changes to maintain overall building viability. For Tampa's historic resources, this may mean making difficult choices about flood barriers, building elevation, or strategic retreat for structures in the most vulnerable locations.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Integrated Climate Resilience Strategies
            </h2>
            <p className="text-gray-600 mb-6">
              Effective historic preservation in Tampa requires integrated approaches that address multiple climate challenges simultaneously. A comprehensive restoration plan considers moisture management, wind resistance, salt protection, and biological threats as interconnected systems rather than isolated problems.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists develops customized climate resilience strategies for each historic restoration project. Our team evaluates site-specific conditions, building construction, and owner objectives to create preservation plans that protect cultural heritage while acknowledging Tampa's environmental realities. This integrated approach often reduces overall costs while improving long-term building performance.
            </p>

            {/* FAQ Section */}
            <div className="my-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">Can historic buildings in Tampa be made truly hurricane-resistant?</h4>
                  <p className="text-gray-600">While no building is completely hurricane-proof, historic structures can be significantly strengthened through code-compliant techniques that preserve historical character. Concealed reinforcement, impact-resistant glazing that replicates historic profiles, and improved roof connections can bring historic buildings closer to modern wind resistance standards.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Will installing air conditioning damage historic buildings?</h4>
                  <p className="text-gray-600">Properly designed HVAC systems actually protect historic buildings by controlling humidity and reducing moisture-related deterioration. The key is selecting equipment and distribution systems that minimize impact on historic fabric while providing appropriate climate control. Ductless mini-split systems and concealed ductwork often work well in historic contexts.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Do historic tax credits cover climate resilience improvements?</h4>
                  <p className="text-gray-600">Yes, qualified rehabilitation expenditures for federal and state historic tax credits can include work that improves building resilience when the work conforms to the Secretary of the Interior's Standards. Hurricane protection, moisture management systems, and structural reinforcement typically qualify when properly designed and documented.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How often should historic buildings in Tampa receive maintenance?</h4>
                  <p className="text-gray-600">Tampa's climate demands more frequent maintenance than temperate regions. Exterior paint may require renewal every 5-7 years versus 10-15 years in northern states. Annual inspections for moisture intrusion, pest activity, and storm damage should be standard practice. Proactive maintenance costs significantly less than deferred repairs.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">What's the biggest climate threat to Tampa's historic buildings?</h4>
                  <p className="text-gray-600">While hurricanes receive the most attention, chronic moisture-related deterioration actually causes more cumulative damage to Tampa's historic buildings. The combination of high humidity, frequent rain, and inadequate historic ventilation systems creates conditions for wood rot, mold growth, and masonry deterioration that gradually undermines building integrity.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Expert Climate-Aware Historic Restoration
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists understands the unique challenges that Tampa's climate presents for historic preservation. Our restoration teams combine traditional craftsmanship with modern building science to create solutions that protect historic buildings against environmental threats while maintaining their cultural significance and tax credit eligibility.
            </p>

            <p className="text-gray-600 mb-6">
              From the iconic Tampa Theatre to the historic cigar factories of Ybor City, our climate-informed approach has successfully preserved Tampa's architectural heritage for future generations. Contact us today to discuss how we can help protect your historic property against Tampa's challenging environment.
            </p>

          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Historic Restoration Services"
            links={internalLinks}
          />
        </div>
      </section>

      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists today for a free consultation on protecting your historic building.
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
