import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Commercial Disaster Recovery & Insurance Restoration in Tampa | Florida Construction Specialists",
  description: "Complete guide to commercial disaster recovery and insurance restoration in Tampa Bay. Emergency response, claim support, and full reconstruction services.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Disaster Recovery Insurance Restoration", href: "/disaster-recovery-insurance-restoration/" },
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
            alt="Hurricane damage restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Commercial Disaster Recovery &amp; Insurance Restoration
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            From hurricane devastation to fire damage, Tampa Bay commercial properties require specialized disaster recovery services. Our integrated approach combines emergency response with comprehensive insurance claim support.
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
                Tampa Bay&apos;s location on Florida&apos;s Gulf Coast makes commercial properties particularly vulnerable to hurricanes, tropical storms, flooding, and severe weather events during the June through November hurricane season. When disaster strikes your office building, retail center, warehouse, or industrial facility, the combination of rapid emergency response and strategic insurance claim management determines how quickly—and completely—your business recovers.
              </p>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists provides comprehensive disaster recovery services throughout Tampa, St. Petersburg, Clearwater, Sarasota, and Lakeland. Our integrated approach addresses both the physical restoration of your property and the documentation requirements that maximize your insurance recovery under Florida law.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                The Three Phases of Commercial Disaster Recovery
              </h2>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                Phase 1: Emergency Response and Mitigation (0-72 Hours)
              </h3>
              <p className="text-gray-600 mb-6">
                The first 72 hours after a disaster are critical. During this phase, the priority is preventing additional damage while documenting existing conditions for your insurance claim. Most commercial property insurance policies require &quot;reasonable steps to prevent further damage&quot;—and they typically cover these mitigation costs even before your full claim is approved.
              </p>
              <p className="text-gray-600 mb-6">
                Emergency response services include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li className="mb-2"><strong>Water extraction and structural drying</strong> — Critical in Tampa&apos;s humid climate where mold can begin growing within 24-48 hours</li>
                <li className="mb-2"><strong>Emergency board-up and tarping</strong> — Securing openings from weather intrusion and unauthorized access</li>
                <li className="mb-2"><strong>Debris removal and site safety</strong> — Clearing hazards while preserving evidence for insurance documentation</li>
                <li className="mb-2"><strong>Temporary power and utilities</strong> — Maintaining essential systems during restoration</li>
                <li className="mb-2"><strong>Comprehensive photo and video documentation</strong> — Creating the evidence trail your claim requires</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                Phase 2: Damage Assessment and Claim Development (1-4 Weeks)
              </h3>
              <p className="text-gray-600 mb-6">
                Once emergency conditions are stabilized, thorough assessment determines the full scope of damage. For commercial properties, this phase requires expertise in building systems that most residential contractors lack. Our assessment covers:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li className="mb-2"><strong>Structural integrity evaluation</strong> — Foundation, framing, load-bearing walls, and roof systems</li>
                <li className="mb-2"><strong>Building envelope analysis</strong> — Roofing, windows, doors, and exterior finishes</li>
                <li className="mb-2"><strong>MEP systems assessment</strong> — Mechanical, electrical, and plumbing infrastructure</li>
                <li className="mb-2"><strong>Fire and life safety systems</strong> — Sprinklers, alarms, and emergency lighting</li>
                <li className="mb-2"><strong>Contents and equipment inventory</strong> — Business personal property and specialized equipment</li>
                <li className="mb-2"><strong>Code compliance review</strong> — Identifying upgrades required by current Florida Building Code</li>
              </ul>
              <p className="text-gray-600 mb-6">
                This assessment translates into a detailed scope of work using industry-standard Xactimate pricing that insurance adjusters expect. Under FL Statute 627.70132, you must file initial claims within one year of the loss date—our documentation ensures you meet all deadlines while capturing the complete scope of covered damage.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                Phase 3: Restoration and Reconstruction (Weeks to Months)
              </h3>
              <p className="text-gray-600 mb-6">
                The restoration phase transforms damaged commercial properties back to full operational capacity. Depending on damage severity, this may involve repairs to specific areas or complete reconstruction. Throughout this phase, we maintain documentation that supports supplemental claims—damage frequently appears during demolition that wasn&apos;t visible during initial assessment.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Tampa Bay-Specific Disaster Risks and Insurance Considerations
              </h2>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                Hurricane and Tropical Storm Damage
              </h3>
              <p className="text-gray-600 mb-6">
                Tampa Bay faces significant hurricane exposure. Commercial properties must meet Florida Building Code wind resistance requirements based on their location within designated wind zones. Many Tampa Bay areas require design for wind speeds of 150+ mph in the High-Velocity Hurricane Zone. Insurance restoration after hurricane damage often requires upgrading older construction to current code standards—costs that are typically covered under your policy&apos;s &quot;code upgrade&quot; or &quot;ordinance and law&quot; provisions when properly documented.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                Flood Damage and FEMA Zones
              </h3>
              <p className="text-gray-600 mb-6">
                Many commercial properties in Tampa Bay are located within FEMA-designated flood zones (AE, VE, X500). Standard commercial property insurance typically excludes flood damage, requiring separate National Flood Insurance Program (NFIP) or private flood policies. Understanding your flood zone designation—and the corresponding coverage requirements—is essential for complete disaster recovery planning.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                Water Damage and Secondary Effects
              </h3>
              <p className="text-gray-600 mb-6">
                Water intrusion from any source (storms, plumbing failures, fire suppression systems) creates urgent restoration needs in Tampa&apos;s climate. Our advanced drying systems, including ConvectionDrying® technology, can accelerate drying time by 30% or more—reducing business interruption and secondary damage. Mold remediation, when required, must be performed by Florida-licensed mold remediators under state regulations.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Commercial Disaster Recovery Cost Guide
              </h2>
              <p className="text-gray-600 mb-4">
                Understanding restoration costs helps commercial property owners evaluate settlements and plan budgets:
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Service Category</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Tampa Bay Cost Range</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Emergency Mitigation</td>
                      <td className="border border-gray-300 px-4 py-2">$5,000 - $50,000+</td>
                      <td className="border border-gray-300 px-4 py-2">Usually covered before claim approval</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Commercial Water Damage</td>
                      <td className="border border-gray-300 px-4 py-2">$4.00 - $8.00/sq ft</td>
                      <td className="border border-gray-300 px-4 py-2">Extraction, drying, antimicrobial treatment</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Hurricane Damage Repair</td>
                      <td className="border border-gray-300 px-4 py-2">$25,000 - $750,000+</td>
                      <td className="border border-gray-300 px-4 py-2">Varies by building size/damage extent</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Commercial Fire Restoration</td>
                      <td className="border border-gray-300 px-4 py-2">$35,000 - $1,000,000+</td>
                      <td className="border border-gray-300 px-4 py-2">Includes smoke remediation</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Code Upgrade Compliance</td>
                      <td className="border border-gray-300 px-4 py-2">10-25% of restoration cost</td>
                      <td className="border border-gray-300 px-4 py-2">Often covered under O&amp;L endorsement</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Full Commercial Reconstruction</td>
                      <td className="border border-gray-300 px-4 py-2">$200 - $450/sq ft</td>
                      <td className="border border-gray-300 px-4 py-2">Ground-up rebuild</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Maximizing Your Insurance Recovery
              </h2>
              <p className="text-gray-600 mb-6">
                Florida&apos;s commercial property insurance market has experienced significant changes, with many carriers restricting coverage or exiting the market entirely. Maximizing your recovery from a covered loss requires understanding both your policy&apos;s provisions and the claim process:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li className="mb-2"><strong>Review your policy before disaster strikes</strong> — Understand coverage limits, deductibles, and exclusions</li>
                <li className="mb-2"><strong>Document everything immediately</strong> — Photos, videos, and inventories before any cleanup begins</li>
                <li className="mb-2"><strong>Report claims promptly</strong> — Florida&apos;s one-year deadline starts on the date of loss, not discovery</li>
                <li className="mb-2"><strong>Consider public adjuster representation</strong> — For large commercial claims, licensed public adjusters can negotiate on your behalf (fees limited to 10% for first year after declared disasters)</li>
                <li className="mb-2"><strong>Maintain detailed records</strong> — All contractor estimates, invoices, and communication with adjusters</li>
                <li className="mb-2"><strong>File supplemental claims</strong> — Additional damage discovered during restoration has an 18-month filing window</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Business Continuity During Restoration
              </h2>
              <p className="text-gray-600 mb-6">
                Commercial disaster recovery isn&apos;t just about restoring a building—it&apos;s about restoring your business operations. Most commercial property policies include Business Income coverage that compensates for lost revenue during restoration, and Extra Expense coverage for costs incurred to continue operations. Your restoration contractor should understand these policy provisions and work to minimize business interruption while documenting all covered expenses.
              </p>
              <p className="text-gray-600 mb-6">
                Options for maintaining operations during restoration include temporary facilities, phased restoration allowing partial occupancy, and expedited construction schedules. Florida Construction Specialists develops restoration plans that balance thorough repairs with your business continuity needs.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Frequently Asked Questions
              </h2>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                How quickly can you respond to commercial disaster emergencies in Tampa Bay?
              </h3>
              <p className="text-gray-600 mb-6">
                Our emergency response team is available 24/7 and can typically arrive at Tampa Bay commercial properties within 2-4 hours. We maintain local equipment and material resources to begin mitigation immediately, with expanded resources mobilized for major disasters.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                What&apos;s the difference between &quot;repair&quot; and &quot;restoration&quot; in insurance terms?
              </h3>
              <p className="text-gray-600 mb-6">
                Repair addresses specific damaged components. Restoration returns the entire property to its pre-loss condition or better (when code upgrades apply). Commercial policies typically provide for complete restoration, not just minimal repairs—but proper documentation is required to recover full restoration costs.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                Does insurance cover code upgrades required during restoration?
              </h3>
              <p className="text-gray-600 mb-6">
                Most commercial property policies include &quot;Ordinance and Law&quot; coverage that pays for code-required upgrades when restoring damaged portions of a building. The current Florida Building Code (8th Edition, 2023) often requires improvements over older construction standards—these costs should be documented and claimed separately.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                Can I choose my own restoration contractor, or must I use one approved by my insurer?
              </h3>
              <p className="text-gray-600 mb-6">
                You have the right to choose your own licensed contractor in Florida. While some insurers offer &quot;preferred vendor&quot; programs, these are not mandatory. Selecting an experienced commercial restoration contractor who understands insurance claims—rather than simply the cheapest bidder—often results in better claim outcomes and quality restoration.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-heading">
                What if my insurance claim is denied or underpaid?
              </h3>
              <p className="text-gray-600 mb-6">
                Commercial property owners have options when claims are denied or underpaid. These include filing supplemental claims with additional documentation, engaging a public adjuster for negotiation, or pursuing appraisal or legal remedies. Having thorough documentation from an experienced restoration contractor strengthens your position in any dispute.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Trust Tampa Bay&apos;s Commercial Disaster Recovery Experts
              </h2>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists has guided commercial property owners through disaster recovery and insurance restoration for over two decades. From the first emergency call through final certificate of occupancy, our team provides the expertise, documentation, and quality construction your recovery requires.
              </p>
              <p className="text-gray-600 mb-6">
                <Link href="/contact/" className="text-brand-green-dark font-semibold hover:underline">Contact us today</Link> to discuss your commercial disaster recovery needs. For emergencies requiring immediate response, call our 24/7 <Link href="/services/disaster-recovery/" className="text-brand-green-dark font-semibold hover:underline">disaster recovery hotline</Link>.
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
            Need Emergency Disaster Recovery?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team responds 24/7 to commercial property emergencies throughout Tampa Bay. Contact us now.
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
