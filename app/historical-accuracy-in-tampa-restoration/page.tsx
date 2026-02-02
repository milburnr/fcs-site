import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Historical Accuracy in Tampa Restoration",
  description: "Achieving historical accuracy in Tampa restoration projects through research, documentation, and traditional craftsmanship. Essential for tax credit approval and authentic preservation.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Historical Accuracy in Tampa Restoration", href: "/historical-accuracy-in-tampa-restoration/" },
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
            alt="Historical accuracy in restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Historical Accuracy in Tampa Restoration
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Achieving authentic restoration through rigorous research, material analysis, and traditional craftsmanship—essential for preserving Tampa's heritage and qualifying for historic tax credits.
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
              Historical accuracy distinguishes genuine preservation from well-intentioned but ultimately damaging restoration work. When Tampa's historic buildings—from the grand theaters and civic structures of downtown to the industrial heritage of Ybor City—undergo restoration, the accuracy of materials, techniques, and design details determines whether the work preserves or compromises their historic integrity. Florida Construction Specialists applies rigorous research methodologies and traditional craftsmanship to achieve the accuracy that authentic preservation demands.
            </p>

            <p className="text-gray-600 mb-6">
              Beyond cultural considerations, historical accuracy carries significant financial implications. The Federal Historic Preservation Tax Incentive Program requires that rehabilitation work conform to the Secretary of the Interior's Standards for the Treatment of Historic Properties. Inaccurate restoration—wrong colors, inappropriate materials, insensitive modifications—can result in tax credit denial, potentially costing building owners hundreds of thousands of dollars in foregone benefits.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Historical Research as Foundation for Accurate Restoration
            </h2>
            <p className="text-gray-600 mb-6">
              Accurate restoration begins with thorough historical research that establishes what a building looked like at its period of significance. This research draws on multiple source types: original architectural drawings and specifications, historic photographs and postcards, contemporary newspaper accounts and advertisements, building permits and inspection records, insurance surveys (particularly Sanborn fire insurance maps), and oral histories from longtime occupants or employees.
            </p>
            
            <p className="text-gray-600 mb-6">
              The Tampa-Hillsborough County Public Library's Burgert Brothers Photographic Collection provides invaluable documentation of Tampa's historic buildings. These photographs, spanning from the 1890s through the 1960s, capture architectural details that may have been lost or obscured by later alterations. For Ybor City's cigar factories and club buildings, this collection often provides the primary evidence for understanding original appearances.
            </p>

            <p className="text-gray-600 mb-6">
              Research must also establish the building's period of significance—the time span when it acquired the characteristics that make it historically important. For a building significant for its architecture, this typically means the original construction date. For a building associated with important events or persons, significance may relate to a specific later period. Understanding period of significance guides decisions about which features to preserve and which later additions might be appropriately removed.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Material Analysis for Accurate Matching
            </h2>
            <p className="text-gray-600 mb-6">
              When original materials require repair or replacement, accuracy demands matching based on scientific analysis rather than visual approximation. Paint analysis reveals original colors that may have faded or been covered by subsequent layers. Mortar analysis identifies binder types, aggregate characteristics, and proportions that guide compatible replacement formulations. Wood species identification ensures that replacement lumber matches original character.
            </p>

            <p className="text-gray-600 mb-6">
              The Italian Club in Ybor City demonstrates the importance of material analysis. Its distinctive exterior colors have changed over the decades through repainting, sun fading, and accumulated grime. Paint analysis through microscopic examination of cross-sections taken from protected areas revealed the original color scheme specified by the building's architects—information essential for authentic restoration and tax credit approval.
            </p>

            <p className="text-gray-600 mb-6">
              Modern analytical techniques including X-ray fluorescence spectroscopy, infrared spectroscopy, and scanning electron microscopy provide detailed information about material composition. These analyses cost relatively little compared to overall project budgets but provide documentation that satisfies National Park Service reviewers and ensures historically accurate restoration.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Traditional Craftsmanship and Period Techniques
            </h2>
            <p className="text-gray-600 mb-6">
              Historical accuracy requires not only correct materials but also appropriate construction techniques. Historic buildings often incorporate craft elements—ornamental plaster, decorative painting, custom millwork, hand-wrought metalwork—that cannot be accurately replicated using modern production methods. Authentic restoration requires artisans trained in traditional techniques.
            </p>

            <p className="text-gray-600 mb-6">
              The Tampa Theatre's atmospheric interior exemplifies the challenge of maintaining craft accuracy. Its ornamental plasterwork was created using techniques that differ from modern plaster installation. Running moldings, casting ornaments, and creating the textured surfaces that simulate antiquity require skills passed down through generations of ornamental plasterers. Florida Construction Specialists maintains relationships with master craftspeople who possess these increasingly rare capabilities.
            </p>

            <p className="text-gray-600 mb-6">
              Decorative painting—including faux finishes, stenciling, and trompe l'oeil effects—appears throughout Tampa's historic buildings. Replicating these finishes requires understanding of period pigments, binding media, and application techniques. Modern latex paints cannot achieve the appearance of traditional oil-based finishes, and spray application cannot replicate hand-brushed textures. Accurate restoration specifies appropriate materials and methods.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Documenting Accuracy for Tax Credit Approval
            </h2>
            <p className="text-gray-600 mb-6">
              The federal historic tax credit application process requires extensive documentation demonstrating that proposed and completed work meets the Secretary of the Interior's Standards. This documentation must show how research informed restoration decisions, why selected materials and techniques are appropriate, and how finished work achieves historical accuracy.
            </p>

            <p className="text-gray-600 mb-6">
              Part 2 applications (Description of Rehabilitation) must describe each proposed treatment and explain its conformance with the Standards. National Park Service reviewers evaluate whether proposed colors match original specifications (based on paint analysis), whether replacement materials match original materials in composition and appearance, whether craft elements replicate period techniques, and whether modifications respect the building's historic character.
            </p>

            <p className="text-gray-600 mb-6">
              Part 3 applications (Request for Certification of Completed Work) require photographic documentation showing finished conditions alongside historic photographs. Reviewers compare completed work to approved Part 2 descriptions, verifying that execution matched approved plans. Changes made during construction without SHPO approval may result in credit denial.
            </p>

            {/* Cost Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Research and Analysis Costs for Accurate Restoration</h3>
              <table className="min-w-full border border-gray-300">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Service</th>
                    <th className="px-4 py-2 text-left">Purpose</th>
                    <th className="px-4 py-2 text-left">Cost Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="bg-white">
                    <td className="px-4 py-2">Historic Structure Report</td>
                    <td className="px-4 py-2">Comprehensive documentation</td>
                    <td className="px-4 py-2">$15,000 - $75,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Paint Analysis (per sample)</td>
                    <td className="px-4 py-2">Original color identification</td>
                    <td className="px-4 py-2">$300 - $600</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Mortar Analysis (per sample)</td>
                    <td className="px-4 py-2">Compatible mortar formulation</td>
                    <td className="px-4 py-2">$400 - $800</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Archival Research</td>
                    <td className="px-4 py-2">Historical documentation gathering</td>
                    <td className="px-4 py-2">$2,500 - $15,000</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Photographic Documentation</td>
                    <td className="px-4 py-2">Existing conditions recording</td>
                    <td className="px-4 py-2">$3,000 - $10,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Wood Species Analysis</td>
                    <td className="px-4 py-2">Matching replacement lumber</td>
                    <td className="px-4 py-2">$200 - $400 per sample</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Common Accuracy Mistakes and How to Avoid Them
            </h2>
            <p className="text-gray-600 mb-6">
              Well-intentioned restoration projects frequently make accuracy mistakes that compromise historic integrity and jeopardize tax credit eligibility. Understanding common errors helps project teams avoid costly problems.
            </p>

            <p className="text-gray-600 mb-6">
              Color selection without paint analysis represents perhaps the most frequent accuracy failure. Building owners often choose colors they find attractive or assume are "period appropriate" without scientific verification. Modern color matching systems cannot accurately identify historic colors from weathered surfaces. Paint analysis from protected areas reveals original specifications that may differ dramatically from assumptions.
            </p>

            <p className="text-gray-600 mb-6">
              Using modern materials because they're "better" undermines historical accuracy and can cause long-term damage. Portland cement mortars, though stronger than historic lime mortars, damage historic brick. Modern aluminum windows, though more energy-efficient than historic wood windows, eliminate character-defining features. Synthetic stucco systems, though easier to apply than traditional lime stucco, compromise historic appearance and may trap moisture.
            </p>

            <p className="text-gray-600 mb-6">
              Removing later additions without research may eliminate historically significant elements. Not all changes to historic buildings detract from their significance—some additions may have acquired historic importance themselves. Research must evaluate each element's significance before decisions about retention or removal.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Balancing Accuracy with Practical Considerations
            </h2>
            <p className="text-gray-600 mb-6">
              The Secretary of the Interior's Standards recognize that absolute accuracy is not always achievable or necessary. Standard 9 acknowledges that "new additions, exterior alterations, or related new construction shall not destroy historic materials that characterize the property" but also allows changes that are "compatible with the massing, size, scale, and architectural features." This flexibility enables practical compromises when complete accuracy proves impossible.
            </p>

            <p className="text-gray-600 mb-6">
              Life safety requirements often mandate changes that affect accuracy. Modern fire codes may require exit stairs, sprinkler systems, or emergency lighting that didn't exist historically. ADA accessibility standards may require ramps, elevators, or accessible restrooms. These necessary modifications can be designed to minimize visual impact while meeting code requirements—but they represent accepted deviations from absolute accuracy.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists helps clients identify where accuracy is essential and where practical compromises are appropriate. Character-defining features that establish a building's historic identity require accurate treatment. Less significant areas may accommodate necessary changes without compromising overall integrity or tax credit eligibility.
            </p>

            {/* FAQ Section */}
            <div className="my-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">How do I know if my building's original features are still intact?</h4>
                  <p className="text-gray-600">Physical investigation by preservation professionals can identify original features beneath later modifications. Paint layers, covered surfaces, and architectural details often survive hidden beneath more recent work. Archival research using historic photographs helps identify what features existed originally, guiding investigation to find surviving elements.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">What if I can't find documentation of my building's original appearance?</h4>
                  <p className="text-gray-600">When documentary evidence is limited, physical evidence becomes primary. Paint analysis, mortar analysis, and careful examination of surviving details can reveal original characteristics. Comparison with similar buildings of the same era and style provides context for informed decisions. In some cases, a range of appropriate treatments may be acceptable when specific original details cannot be determined.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Will the National Park Service reject my tax credit application if I can't achieve perfect accuracy?</h4>
                  <p className="text-gray-600">NPS reviewers understand that absolute accuracy is not always achievable. They evaluate whether the overall rehabilitation conforms to the Secretary of the Interior's Standards and preserves character-defining features. Well-documented decisions based on available evidence, even when complete information is unavailable, generally receive favorable review. The key is demonstrating good-faith effort to achieve accuracy.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Can I use modern materials if they look like historic materials?</h4>
                  <p className="text-gray-600">Appearance alone doesn't satisfy accuracy requirements for significant elements. Character-defining features should be repaired or replaced with matching materials—historic wood windows with wood windows, lime mortar with lime mortar, etc. However, less prominent areas may accommodate compatible modern materials when they don't compromise overall historic character. Each decision requires evaluation of the specific element's significance.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How much does research add to project costs?</h4>
                  <p className="text-gray-600">Research typically represents 2-5% of total project costs but can prevent much larger expenses from inaccurate work requiring correction. For a $2 million restoration, $40,000-$100,000 in research costs protects $400,000+ in potential tax credits. The research investment also improves construction efficiency by providing clear direction, reducing change orders and delays from uncertainty about appropriate treatments.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Achieving Accuracy with Florida Construction Specialists
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists combines rigorous research methodology with traditional craftsmanship to achieve the historical accuracy that authentic preservation requires. Our team includes preservation professionals who understand archival research, material scientists who provide accurate analysis, and craftspeople who execute traditional techniques.
            </p>

            <p className="text-gray-600 mb-6">
              From Ybor City's immigrant heritage buildings to Hyde Park's elegant residences, our commitment to accuracy has earned recognition from preservation commissions, SHPO reviewers, and building owners who understand that authentic restoration protects both cultural heritage and financial investment. Contact us today to discuss how accurate restoration can preserve your historic building and maximize tax credit benefits.
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
            Contact Florida Construction Specialists today for historically accurate restoration services.
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
