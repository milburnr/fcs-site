import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Commercial Fire Damage Restoration & Insurance in Tampa | Florida Construction Specialists",
  description: "Expert commercial fire damage restoration in Tampa Bay. Full-service recovery from smoke remediation to complete reconstruction, with insurance claim support.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Fire Damage Restoration and Insurance in Tampa", href: "/fire-damage-restoration-and-insurance-in-tampa/" },
];


const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/services/disaster-recovery/fire-damage/", label: "Fire Damage Restoration" },
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Restoration" },
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
            src="/wp-content/uploads/2023/12/hurricane-ian.webp"
            alt="Fire damage restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Commercial Fire Damage Restoration &amp; Insurance in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            When fire strikes your commercial property, rapid response and expert restoration minimize business disruption. Our team handles everything from emergency stabilization to complete reconstruction while maximizing your insurance recovery.
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
                Commercial fire damage presents unique challenges that go beyond simply repairing burned areas. Smoke infiltrates HVAC systems, soot damages electronics and inventory, and water from fire suppression creates secondary damage requiring immediate attention. For Tampa Bay commercial property owners—whether you operate an office building, retail center, warehouse, or industrial facility—understanding the restoration process and insurance claim requirements is essential for complete recovery.
              </p>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists provides comprehensive fire damage restoration services throughout Tampa, St. Petersburg, Clearwater, and the greater Hillsborough County area. Our integrated approach addresses structural repairs, smoke and odor remediation, contents restoration, and the detailed documentation that supports successful insurance claims.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Understanding Commercial Fire Damage Restoration
              </h2>
              <p className="text-gray-600 mb-6">
                Commercial fire restoration is far more complex than residential work. Industrial equipment, commercial HVAC systems, specialized building finishes, and business inventory all require expert assessment and handling. The restoration process follows a systematic approach designed to salvage what can be saved while properly documenting all losses for your insurance claim.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                Immediate Response: The First 24-48 Hours
              </h3>
              <p className="text-gray-600 mb-6">
                The actions taken immediately after a commercial fire significantly impact both restoration costs and insurance recovery:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li className="mb-2"><strong>Fire department clearance:</strong> Once the fire marshal releases the scene, restoration can begin. Obtain a copy of the fire report for your insurance claim.</li>
                <li className="mb-2"><strong>Comprehensive documentation:</strong> Before any cleanup, thorough photo and video documentation captures the full extent of damage—essential for insurance purposes.</li>
                <li className="mb-2"><strong>Emergency board-up and security:</strong> Securing openings prevents weather intrusion and unauthorized access. This also protects remaining inventory and equipment.</li>
                <li className="mb-2"><strong>Water extraction:</strong> Fire suppression systems and firefighting efforts often cause significant water damage requiring immediate extraction to prevent mold growth.</li>
                <li className="mb-2"><strong>Initial soot and debris removal:</strong> Preventing soot from permanently staining surfaces and corroding metals requires prompt attention.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                Damage Assessment and Scope Development
              </h3>
              <p className="text-gray-600 mb-6">
                Thorough assessment determines what can be restored versus what requires replacement. Commercial fire damage typically falls into several categories:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li className="mb-2"><strong>Structural damage:</strong> Compromised framing, roofing, and load-bearing elements requiring engineering evaluation</li>
                <li className="mb-2"><strong>Smoke and soot contamination:</strong> Often extends far beyond visible fire damage, infiltrating entire HVAC systems</li>
                <li className="mb-2"><strong>Water and mold damage:</strong> Secondary damage from fire suppression requiring specialized drying and potential mold remediation</li>
                <li className="mb-2"><strong>Electrical system damage:</strong> Fire and smoke can compromise wiring, panels, and electrical equipment</li>
                <li className="mb-2"><strong>Contents damage:</strong> Inventory, equipment, furnishings, and documents affected by fire, smoke, or water</li>
                <li className="mb-2"><strong>Odor penetration:</strong> Smoke odor absorbed into porous materials throughout the affected area</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                The Commercial Fire Restoration Process
              </h2>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                Phase 1: Emergency Stabilization
              </h3>
              <p className="text-gray-600 mb-6">
                Immediate actions prevent further damage. Water extraction begins within hours, not days. Temporary climate control prevents secondary mold growth in Tampa&apos;s humid environment. Salvageable contents are inventoried and moved to climate-controlled storage for cleaning and restoration.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                Phase 2: Smoke and Soot Remediation
              </h3>
              <p className="text-gray-600 mb-6">
                Smoke and soot removal requires specialized techniques based on the type of fire and materials burned:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li className="mb-2"><strong>Dry soot:</strong> From fast-burning, high-temperature fires; removed with HEPA vacuuming and dry cleaning</li>
                <li className="mb-2"><strong>Wet/protein soot:</strong> From slow-burning, low-temperature fires; requires chemical cleaning agents</li>
                <li className="mb-2"><strong>Fuel oil soot:</strong> From furnace or fuel fires; extremely difficult to remove, often requiring sealing</li>
              </ul>
              <p className="text-gray-600 mb-6">
                Commercial HVAC systems require particular attention. Smoke infiltrating ductwork can distribute soot and odor throughout a building. Complete duct cleaning and air handler treatment is typically necessary for any significant commercial fire.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                Phase 3: Odor Elimination
              </h3>
              <p className="text-gray-600 mb-6">
                Smoke odor persists long after visible damage is addressed. Professional odor elimination uses multiple technologies:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li className="mb-2"><strong>Thermal fogging:</strong> Replicates smoke penetration to reach odor molecules in hidden areas</li>
                <li className="mb-2"><strong>Ozone treatment:</strong> Oxidizes odor-causing molecules in unoccupied spaces</li>
                <li className="mb-2"><strong>Hydroxyl generation:</strong> Safe for occupied areas, breaks down odor compounds</li>
                <li className="mb-2"><strong>Sealing:</strong> Encapsulating surfaces where odor cannot be eliminated</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                Phase 4: Structural Repairs and Reconstruction
              </h3>
              <p className="text-gray-600 mb-6">
                Once remediation is complete, structural restoration returns your building to pre-loss condition. This may range from targeted repairs to complete reconstruction depending on fire severity. All work must meet current Florida Building Code requirements—often exceeding original construction standards for older buildings.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Commercial Fire Damage Restoration Costs in Tampa Bay
              </h2>
              <p className="text-gray-600 mb-4">
                Fire restoration costs vary dramatically based on damage extent and building type:
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Service</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Tampa Bay Price Range</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Emergency Board-Up &amp; Tarping</td>
                      <td className="border border-gray-300 px-4 py-2">$2,000 - $10,000</td>
                      <td className="border border-gray-300 px-4 py-2">24 hours</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Water Extraction (post-fire)</td>
                      <td className="border border-gray-300 px-4 py-2">$3.50 - $7.00/sq ft</td>
                      <td className="border border-gray-300 px-4 py-2">1-3 days</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Smoke &amp; Soot Remediation</td>
                      <td className="border border-gray-300 px-4 py-2">$5,000 - $75,000+</td>
                      <td className="border border-gray-300 px-4 py-2">1-3 weeks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Commercial HVAC Cleaning</td>
                      <td className="border border-gray-300 px-4 py-2">$3,000 - $25,000</td>
                      <td className="border border-gray-300 px-4 py-2">2-5 days</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Odor Elimination</td>
                      <td className="border border-gray-300 px-4 py-2">$2,500 - $15,000</td>
                      <td className="border border-gray-300 px-4 py-2">3-7 days</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Contents Restoration</td>
                      <td className="border border-gray-300 px-4 py-2">40-60% of replacement cost</td>
                      <td className="border border-gray-300 px-4 py-2">2-6 weeks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Structural Reconstruction</td>
                      <td className="border border-gray-300 px-4 py-2">$175 - $400/sq ft</td>
                      <td className="border border-gray-300 px-4 py-2">2-12 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Commercial Fire Insurance Claims in Florida
              </h2>
              <p className="text-gray-600 mb-6">
                Commercial property insurance typically provides broad coverage for fire damage, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li className="mb-2"><strong>Building coverage:</strong> Structural repairs and reconstruction to replace fire-damaged building components</li>
                <li className="mb-2"><strong>Contents coverage:</strong> Replacement or restoration of business personal property, inventory, and equipment</li>
                <li className="mb-2"><strong>Business income:</strong> Lost revenue during the restoration period (often called &quot;loss of use&quot; or &quot;time element&quot; coverage)</li>
                <li className="mb-2"><strong>Extra expense:</strong> Costs to continue operations during restoration, such as temporary facilities</li>
                <li className="mb-2"><strong>Debris removal:</strong> Clearing fire-damaged materials and demolition debris</li>
                <li className="mb-2"><strong>Code upgrade:</strong> Meeting current building codes when restoring older structures (under Ordinance and Law coverage)</li>
              </ul>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                Critical Deadlines and Requirements
              </h3>
              <p className="text-gray-600 mb-6">
                Under FL Statute 627.70132, commercial property owners must:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li className="mb-2">File initial claims within <strong>one year</strong> of the date of loss</li>
                <li className="mb-2">File supplemental claims for additional discovered damage within <strong>18 months</strong> of the loss date</li>
                <li className="mb-2">Take reasonable steps to prevent further damage (documented mitigation)</li>
                <li className="mb-2">Cooperate with the insurer&apos;s investigation and provide requested documentation</li>
              </ul>
              <p className="text-gray-600 mb-6">
                Florida&apos;s 2023 insurance reform eliminated one-way attorney&apos;s fees in policy disputes, making thorough initial documentation even more important. Working with experienced restoration contractors who understand insurance requirements from the start helps prevent underpayment issues.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Contents Restoration: Saving Business Assets
              </h2>
              <p className="text-gray-600 mb-6">
                Commercial contents restoration can save significant money compared to replacement. Specialized cleaning and restoration techniques can salvage:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li className="mb-2"><strong>Electronics and computers:</strong> Ultrasonic cleaning removes soot without damaging components</li>
                <li className="mb-2"><strong>Documents and records:</strong> Freeze-drying and cleaning recovers critical business documents</li>
                <li className="mb-2"><strong>Inventory:</strong> Many products can be cleaned and deodorized rather than replaced</li>
                <li className="mb-2"><strong>Furniture and fixtures:</strong> Professional restoration often costs 40-60% of replacement</li>
                <li className="mb-2"><strong>Artwork and specialty items:</strong> Expert conservation preserves irreplaceable items</li>
              </ul>
              <p className="text-gray-600 mb-6">
                Proper contents restoration reduces claim costs while returning your business assets to usable condition faster than waiting for replacements.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Frequently Asked Questions
              </h2>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                How long does commercial fire restoration take?
              </h3>
              <p className="text-gray-600 mb-6">
                Timeline depends on damage severity. Minor fire damage with smoke remediation may complete in 2-4 weeks. Moderate damage requiring structural repairs typically takes 2-4 months. Major fires requiring significant reconstruction can extend 6-12 months or longer. We develop detailed timelines during assessment and work to minimize business interruption.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                What should I do immediately after a commercial fire?
              </h3>
              <p className="text-gray-600 mb-6">
                First, ensure everyone is safe and the fire department has cleared the scene. Contact your insurance company to report the claim. Call a commercial fire restoration contractor for emergency mitigation before secondary damage from water and smoke worsens. Document everything with photos and videos before cleanup begins.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                Will insurance pay for temporary relocation during restoration?
              </h3>
              <p className="text-gray-600 mb-6">
                Most commercial property policies include Extra Expense coverage for costs to continue operations during restoration, including temporary facilities. Business Income coverage compensates for lost revenue during the restoration period. Review your policy limits—these coverages often have specific sublimits or time limitations.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                Can smoke damage be removed from a building?
              </h3>
              <p className="text-gray-600 mb-6">
                Yes, professional smoke and odor remediation successfully removes contamination in most cases. The key is prompt treatment before soot permanently stains surfaces. Some porous materials (certain fabrics, drywall in heavily affected areas) may require replacement, but most hard surfaces and many soft goods can be professionally cleaned.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                What if my fire claim is underpaid?
              </h3>
              <p className="text-gray-600 mb-6">
                Commercial fire claims are complex, and initial settlements often undervalue the full scope of damage. You can file supplemental claims within 18 months as additional damage is discovered during restoration. Public adjusters licensed in Florida can negotiate on your behalf. Your restoration contractor&apos;s detailed documentation supports higher recovery.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Tampa Bay&apos;s Commercial Fire Restoration Experts
              </h2>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists has restored commercial properties across Tampa Bay following fires of all sizes. Our team responds 24/7 for emergency mitigation and provides complete restoration services from initial cleanup through final reconstruction. We work closely with your insurance adjuster and provide the documentation that maximizes your recovery.
              </p>
              <p className="text-gray-600 mb-6">
                <Link href="/contact/" className="text-brand-green-dark font-semibold hover:underline">Contact us immediately</Link> if your commercial property has experienced fire damage. For emergency response, call our 24/7 <Link href="/services/disaster-recovery/fire-damage/" className="text-brand-green-dark font-semibold hover:underline">fire damage restoration</Link> hotline.
              </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      
      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

<section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Commercial Fire Damage? We&apos;re Here 24/7
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our emergency response team is ready to begin fire damage restoration immediately. Call now or request an estimate.
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
