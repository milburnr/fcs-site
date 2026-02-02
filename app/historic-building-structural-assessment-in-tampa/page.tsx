import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Historic Building Structural Assessment in Tampa",
  description: "Expert structural assessment for Tampa's historic buildings. Comprehensive evaluation of load-bearing systems, foundation conditions, and structural integrity for preservation projects.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Historic Building Structural Assessment in Tampa", href: "/historic-building-structural-assessment-in-tampa/" },
];

const internalLinks = [
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
  { href: "/services/historic-restoration/shpo-compliance/", label: "SHPO Compliance" },
  { href: "/services/historic-restoration/historic-tax-credits/", label: "Historic Tax Credits" },
  { href: "/services/historic-restoration/material-sourcing/", label: "Historic Material Sourcing" },
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
            alt="Historic building structural assessment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Historic Building Structural Assessment in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Comprehensive structural evaluation of Tampa's historic commercial and institutional buildings, identifying conditions that affect safety, restoration planning, and tax credit eligibility.
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
              Structural assessment forms the foundation of responsible historic building restoration. Before investing in rehabilitation, building owners need accurate understanding of structural conditions that affect safety, restoration scope, and project economics. Tampa's historic buildings—many constructed before modern engineering codes—require assessment by professionals who understand both structural engineering and historic construction methods.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists coordinates comprehensive structural assessments that inform restoration planning, identify required repairs, and support applications for historic tax credits. Our collaborative approach brings together structural engineers experienced with historic buildings, preservation professionals, and construction expertise to deliver actionable recommendations.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Understanding Historic Structural Systems
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's historic buildings employ structural systems that differ significantly from modern construction. Understanding these systems—their original design logic, typical deterioration patterns, and appropriate repair approaches—requires specialized knowledge that general structural engineering doesn't provide.
            </p>
            
            <p className="text-gray-600 mb-6">
              Load-bearing masonry construction characterizes most of Tampa's pre-1920s commercial buildings, including Ybor City's cigar factories. These buildings rely on thick brick or stone walls to carry both vertical loads and lateral forces from wind. The walls themselves, not internal framing, provide structural stability. Assessment must evaluate wall thickness, mortar condition, and connections between walls and floor/roof systems.
            </p>

            <p className="text-gray-600 mb-6">
              Wood-frame construction predominates in Tampa's historic residential architecture and some commercial buildings. These structures use dimensional lumber for posts, beams, joists, and rafters in systems that evolved over time. Assessment identifies wood species, connection types, spans, and deterioration from moisture, insects, or age-related degradation.
            </p>

            <p className="text-gray-600 mb-6">
              Early reinforced concrete and structural steel appeared in Tampa's larger buildings after 1900. These materials introduced new possibilities but also specific vulnerabilities—reinforcing steel corrosion in concrete, connection deterioration in steel frames. Assessment requires understanding of period construction practices that differ from modern standards.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Foundation Assessment in Tampa's Conditions
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's geology presents specific challenges for historic building foundations. Sandy soils, high water tables, and limestone formations create conditions that may have caused settlement, erosion, or deterioration over a building's lifetime. Foundation assessment must consider both original design adequacy and subsequent changes in soil or water conditions.
            </p>

            <p className="text-gray-600 mb-6">
              Historic foundation types in Tampa include continuous brick or stone walls, individual brick or concrete piers, and various forms of spread footings. Some buildings were constructed without foundations meeting modern definitions—wood sills resting on grade were common in early Tampa construction. Assessment identifies foundation type, condition, and capacity relative to current and proposed loading.
            </p>

            <p className="text-gray-600 mb-6">
              Water-related damage represents the most common foundation problem in Tampa's historic buildings. Rising damp, surface water intrusion, and subsurface water movement can all affect foundation integrity. Assessment includes evaluation of current moisture conditions and recommendations for remediation that protects foundations from continued damage.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Wall and Facade Assessment
            </h2>
            <p className="text-gray-600 mb-6">
              Exterior walls of historic buildings serve multiple functions: structure, weather barrier, and architectural expression. Assessment must evaluate each function independently and in relation to others. A wall may be structurally sound but failing as a weather barrier, or vice versa.
            </p>

            <p className="text-gray-600 mb-6">
              Masonry wall assessment examines brick or stone condition, mortar integrity, crack patterns, bulging or bowing, and anchorage to floor and roof systems. Non-destructive techniques including visual inspection, hammer sounding, and infrared thermography identify many conditions. Selective probes provide additional information when visual methods prove insufficient.
            </p>

            <p className="text-gray-600 mb-6">
              Terra cotta, cast stone, and decorative masonry elements common on Tampa's commercial buildings require specialized assessment. These materials may exhibit deterioration patterns different from structural masonry—glaze spalling, reinforcement corrosion, or attachment failure. Assessment identifies elements requiring repair, conservation, or replacement.
            </p>

            {/* Assessment Components Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Structural Assessment Components and Costs</h3>
              <table className="min-w-full border border-gray-300">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Assessment Type</th>
                    <th className="px-4 py-2 text-left">Methods</th>
                    <th className="px-4 py-2 text-left">Cost Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="bg-white">
                    <td className="px-4 py-2">Visual Inspection</td>
                    <td className="px-4 py-2">Walk-through, crack mapping, condition notes</td>
                    <td className="px-4 py-2">$2,500 - $7,500</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Foundation Investigation</td>
                    <td className="px-4 py-2">Test pits, probes, soil evaluation</td>
                    <td className="px-4 py-2">$5,000 - $20,000</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Masonry Analysis</td>
                    <td className="px-4 py-2">Mortar testing, unit evaluation, probe openings</td>
                    <td className="px-4 py-2">$3,000 - $12,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Wood Frame Assessment</td>
                    <td className="px-4 py-2">Moisture testing, species ID, connection review</td>
                    <td className="px-4 py-2">$3,000 - $10,000</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Concrete/Steel Evaluation</td>
                    <td className="px-4 py-2">Core sampling, rebar detection, connection testing</td>
                    <td className="px-4 py-2">$5,000 - $25,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Comprehensive Assessment</td>
                    <td className="px-4 py-2">Full building evaluation, all systems</td>
                    <td className="px-4 py-2">$15,000 - $75,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Floor and Roof System Evaluation
            </h2>
            <p className="text-gray-600 mb-6">
              Floor and roof systems in historic buildings vary widely based on construction period, building type, and original use. Assessment must identify system type, evaluate capacity for intended use, and determine repair needs. Changes in building use—warehouse to office, for example—may require structural upgrades beyond simple repair.
            </p>

            <p className="text-gray-600 mb-6">
              Wood floor and roof systems common in Tampa's historic buildings present specific concerns including moisture damage, insect activity, fire cuts at masonry walls, and connection adequacy. Assessment evaluates member sizes, species, spans, and conditions to determine load capacity and repair requirements.
            </p>

            <p className="text-gray-600 mb-6">
              Concrete and steel systems in larger historic buildings may have deterioration from corrosion, particularly in Tampa's humid, salt-air environment. Assessment using ground-penetrating radar, half-cell potential testing, and selective probing identifies corrosion extent and repair requirements. Early intervention prevents deterioration progression that would require more extensive repair.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Lateral Force Resistance Assessment
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's location in hurricane territory makes lateral force resistance—a building's ability to withstand wind loads—critically important. Historic buildings were typically designed for lower wind loads than current codes require. Assessment evaluates existing lateral force resisting systems and identifies potential strengthening needs.
            </p>

            <p className="text-gray-600 mb-6">
              Unreinforced masonry buildings present particular challenges for lateral resistance. Their mass provides some stability, but lack of reinforcement limits capacity for high wind or seismic forces. Assessment identifies whether strengthening is required and what approaches might be compatible with historic character.
            </p>

            <p className="text-gray-600 mb-6">
              The Secretary of the Interior's Standards allow structural strengthening when designed to minimize impact on historic fabric. Concealed bracing, supplemental frames, and tie systems can increase lateral capacity without visible changes. Assessment recommendations should identify strengthening approaches appropriate for both structural need and preservation requirements.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Assessment Documentation for Tax Credits
            </h2>
            <p className="text-gray-600 mb-6">
              Historic tax credit applications require documentation of existing conditions and proposed work. Structural assessment reports provide essential evidence supporting Part 2 applications by documenting conditions that justify proposed structural repairs and demonstrating that repair approaches meet preservation standards.
            </p>

            <p className="text-gray-600 mb-6">
              Assessment documentation should include photographs of representative conditions and specific deficiencies, drawings showing structural system configuration and identified problems, narrative descriptions explaining deterioration mechanisms and proposed remediation, and recommendations that prioritize repair over replacement consistent with the Secretary of the Interior's Standards.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists coordinates assessment documentation with tax credit application requirements, ensuring that structural reports support successful credit certification. Our experience with NPS review expectations guides assessment scope and documentation to address anticipated reviewer questions.
            </p>

            {/* FAQ Section */}
            <div className="my-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">How do I know if my historic building needs structural assessment?</h4>
                  <p className="text-gray-600">Any historic building should receive structural assessment before significant restoration investment. Visible indicators requiring immediate assessment include cracks in masonry, bulging walls, sagging floors or roofs, evidence of settlement, and water damage. Even without visible problems, assessment before purchase or major rehabilitation protects against costly surprises.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Will structural assessment damage historic fabric?</h4>
                  <p className="text-gray-600">Professional assessment minimizes physical investigation using non-destructive techniques where possible. When probes, cores, or test pits are necessary, locations are selected to minimize impact on significant features. Investigation openings can often be located in areas scheduled for modification, and all openings are repaired following investigation.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Can historic buildings be strengthened to meet modern codes?</h4>
                  <p className="text-gray-600">Most historic buildings can be strengthened to improve safety, though achieving full modern code compliance may not be required or appropriate. Building codes often provide flexibility for historic structures, allowing compliance paths that preserve historic character. Assessment identifies minimum required strengthening and options for enhanced performance.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How does structural work affect historic tax credit eligibility?</h4>
                  <p className="text-gray-600">Structural repairs qualify as rehabilitation expenditures for tax credit purposes when performed according to the Secretary of the Interior's Standards. Work that preserves historic structural systems typically receives credit approval. Replacement of structural elements may require justification demonstrating that repair is not feasible and that replacement matches original character.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Who should perform structural assessment of historic buildings?</h4>
                  <p className="text-gray-600">Assessment should be performed by structural engineers with specific experience in historic buildings. General structural engineers may not understand historic construction methods, typical deterioration patterns, or preservation-appropriate repair approaches. Florida Construction Specialists works with engineers who specialize in historic structures and understand both engineering requirements and preservation standards.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Comprehensive Structural Assessment from Florida Construction Specialists
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists coordinates structural assessments that provide the foundation for successful historic restoration projects. Our team brings together engineers experienced with Tampa's historic building types, preservation professionals who understand regulatory requirements, and construction expertise that translates assessment findings into practical repair recommendations.
            </p>

            <p className="text-gray-600 mb-6">
              From Ybor City's massive brick factories to Hyde Park's wood-frame residences, we've assessed structures across Tampa's diverse historic building inventory. Contact us today to discuss structural assessment for your historic building—we'll help you understand your building's condition and develop appropriate restoration strategies.
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
            Contact Florida Construction Specialists today for expert structural assessment of your historic building.
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
