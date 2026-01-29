import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Historic Window Restoration Services - Florida Construction Specialists",
  description: "Expert historic window restoration in Tampa. Preserve original wood windows with repair, weatherstripping, and storm panels that meet Secretary of Interior Standards.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Historic Window Restoration Services", href: "/tampa-historic-window-restoration-services/" },
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
            src="/images/historic-preservation/historic-preservation-large.webp"
            alt="Historic window restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa Historic Window Restoration Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Preserving Tampa's original wood windows through expert restoration that maintains historic character while improving energy efficiency and hurricane resistance.
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
              Historic windows represent one of the most character-defining features of Tampa's landmark buildings. The elegant double-hung wood windows of Hyde Park's Victorian homes, the steel casement windows of Ybor City's industrial buildings, and the arched openings of Mediterranean Revival structures all contribute to the distinctive appearance that makes these buildings historically significant. Florida Construction Specialists provides comprehensive window restoration services that preserve these irreplaceable elements while addressing practical concerns about energy efficiency and weather protection.
            </p>

            <p className="text-gray-600 mb-6">
              Window replacement represents one of the most common—and most damaging—mistakes made in historic building rehabilitation. Modern replacement windows rarely match the proportions, profiles, and materials of historic windows, fundamentally altering building appearance and potentially disqualifying projects from historic tax credits. The Secretary of the Interior's Standards emphasize repair over replacement (Standard 6), making window restoration the preferred approach for preservation projects.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Understanding Historic Window Construction
            </h2>
            <p className="text-gray-600 mb-6">
              Historic wood windows were constructed from old-growth lumber with tight grain structure that resists rot and decay far better than modern lumber. The longevity of well-maintained historic windows—often exceeding 100 years—demonstrates the quality of original materials. Understanding these construction characteristics guides appropriate restoration approaches.
            </p>
            
            <p className="text-gray-600 mb-6">
              Tampa's historic buildings feature various window types reflecting their periods and architectural styles. Double-hung windows with rope-and-pulley weight systems appear in residential and commercial buildings from the Victorian era through the 1940s. Casement windows—hinged at the side—characterize industrial buildings and some Mediterranean Revival structures. Fixed windows, transoms, and specialty shapes add variety to historic fenestration patterns.
            </p>

            <p className="text-gray-600 mb-6">
              The Italian Club, Cuban Club, and other Ybor City landmarks feature large industrial steel windows that flood interior spaces with natural light. These steel windows require different restoration techniques than wood windows but share the preservation imperative—replacement destroys historic character while restoration preserves it.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Window Restoration Process
            </h2>
            <p className="text-gray-600 mb-6">
              Comprehensive window restoration addresses all components: sash, frame, hardware, glazing, and weatherstripping. The process begins with careful removal of sash for shop work, followed by repair of frames in place. This systematic approach ensures that each element receives appropriate treatment.
            </p>

            <p className="text-gray-600 mb-6">
              Sash restoration involves removal of old paint (often using steam or infrared systems that avoid lead paint hazards), repair of deteriorated wood using epoxy consolidants and Dutchman patches, replacement of failed glazing compound, and application of primer and finish paint. Weight pockets are cleaned, ropes or chains replaced, and hardware repaired or replicated.
            </p>

            <p className="text-gray-600 mb-6">
              Frame restoration addresses the window opening itself—sills, jambs, and head. Water damage typically concentrates at sills, which may require partial replacement using materials that match original species and profile. Proper repair maintains weathertight construction that prevents future deterioration.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Improving Energy Efficiency While Preserving Character
            </h2>
            <p className="text-gray-600 mb-6">
              Modern weatherstripping dramatically improves the energy performance of restored historic windows. Interlocking bronze, spring bronze, or compression weatherstrip systems reduce air infiltration to levels approaching modern windows while remaining invisible when windows are closed.
            </p>

            <p className="text-gray-600 mb-6">
              Interior storm windows provide additional thermal and acoustic performance without altering exterior appearance—a solution that satisfies both preservation requirements and energy efficiency goals. Custom-fabricated storm panels with low-E glass can reduce heat gain in Tampa's climate while preserving original window operation.
            </p>

            <p className="text-gray-600 mb-6">
              Studies consistently demonstrate that restored historic windows with weatherstripping and storm panels perform comparably to replacement windows at lower cost and with preservation of historic materials. The embodied energy in existing windows—the resources consumed in their original manufacture—provides environmental benefit that new manufacturing cannot replicate.
            </p>

            {/* Cost Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Historic Window Restoration Cost Comparison</h3>
              <table className="min-w-full border border-gray-300">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Service</th>
                    <th className="px-4 py-2 text-left">Scope</th>
                    <th className="px-4 py-2 text-left">Cost per Window</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="bg-white">
                    <td className="px-4 py-2">Basic Restoration</td>
                    <td className="px-4 py-2">Paint, glazing, weatherstrip</td>
                    <td className="px-4 py-2">$400 - $800</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Moderate Restoration</td>
                    <td className="px-4 py-2">Above + wood repairs, hardware</td>
                    <td className="px-4 py-2">$800 - $1,500</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Extensive Restoration</td>
                    <td className="px-4 py-2">Major wood repair, sill replacement</td>
                    <td className="px-4 py-2">$1,500 - $3,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Interior Storm Windows</td>
                    <td className="px-4 py-2">Custom low-E storm panels</td>
                    <td className="px-4 py-2">$250 - $500</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Steel Window Restoration</td>
                    <td className="px-4 py-2">Rust treatment, glazing, paint</td>
                    <td className="px-4 py-2">$800 - $2,500</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Sash Reproduction</td>
                    <td className="px-4 py-2">Complete replacement (when needed)</td>
                    <td className="px-4 py-2">$2,000 - $5,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Hurricane Protection for Historic Windows
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's location in hurricane territory raises legitimate concerns about window vulnerability. Historic windows can be protected through removable storm shutters, interior storm panels with impact-resistant glazing, or exterior storm windows designed to complement building architecture.
            </p>

            <p className="text-gray-600 mb-6">
              The Secretary of the Interior's Standards allow addition of storm protection when sensitively designed and reversibly installed. Bahama shutters, colonial shutters, and accordion shutters can provide code-compliant protection while maintaining period-appropriate appearance. Selection should consider both protection requirements and architectural compatibility.
            </p>

            <p className="text-gray-600 mb-6">
              For institutional and commercial buildings where appearance during normal conditions matters most, removable panels that install only before threatening weather may be appropriate. These systems require storage space and installation labor but preserve unobstructed views during fair weather.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Window Restoration and Tax Credit Compliance
            </h2>
            <p className="text-gray-600 mb-6">
              The National Park Service, which administers the federal historic tax credit program, strongly favors window restoration over replacement. Projects that replace historic windows often face credit denial unless replacements exactly match original materials, profiles, and configurations—a requirement that effectively mandates custom wood windows costing more than restoration.
            </p>

            <p className="text-gray-600 mb-6">
              Documentation requirements for tax credit projects include photographs of existing window conditions, descriptions of deterioration requiring treatment, specifications for restoration methods and materials, and photographs of completed work. Florida Construction Specialists provides comprehensive documentation that supports successful credit certification.
            </p>

            <p className="text-gray-600 mb-6">
              When windows are deteriorated beyond repair—typically less than 20% of windows in any given building—replacement with exact replicas may be acceptable. Replacement windows must match originals in material (wood for wood, steel for steel), operation type, profile dimensions, muntin patterns, and glazing characteristics. Modern aluminum or vinyl windows are never acceptable for tax credit projects.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Specialty Window Restoration
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's historic buildings include specialty windows that require particular expertise: stained glass and leaded glass in churches and significant secular buildings, curved glass in bay windows and turrets, art glass and beveled glass in doors and transoms, and industrial steel sash in commercial and institutional buildings.
            </p>

            <p className="text-gray-600 mb-6">
              Stained glass restoration involves careful documentation, removal of panels, cleaning, releading where needed, and proper reinstallation with appropriate support and weather protection. The Tampa Theatre's decorative glass and Ybor City's church windows represent significant cultural assets requiring conservation-level treatment.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists coordinates with specialty craftspeople for these unique elements, ensuring that restoration meets both preservation standards and practical performance requirements. Our project management ensures that specialty restoration integrates seamlessly with overall building restoration.
            </p>

            {/* FAQ Section */}
            <div className="my-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">Are historic windows really worth saving rather than replacing?</h4>
                  <p className="text-gray-600">Yes, for multiple reasons. Historic windows made from old-growth wood last longer than modern replacements. Restored windows with weatherstripping perform comparably to replacement windows. Replacement often costs more than restoration, especially when considering tax credit implications. And windows are character-defining features whose loss diminishes historic significance.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Can historic windows meet Florida's hurricane code requirements?</h4>
                  <p className="text-gray-600">While historic windows themselves may not meet current wind-borne debris impact requirements, code-compliant protection can be added through shutters, storm panels, or exterior storm windows. These additions protect windows during storms while preserving historic character during normal conditions. Building officials typically accept properly engineered protection systems for historic buildings.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How do I deal with lead paint on historic windows?</h4>
                  <p className="text-gray-600">Lead paint requires proper handling but doesn't preclude restoration. EPA RRP (Renovation, Repair, and Painting) rules establish protocols for lead-safe work practices. Steam stripping and infrared paint removal minimize lead dust generation. Encapsulation with new paint may be appropriate when complete removal isn't necessary. Professional restoration includes proper lead paint management.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Will window restoration disrupt building occupancy?</h4>
                  <p className="text-gray-600">Restoration typically removes sash for shop work while leaving frames in place with temporary glazing. Most spaces remain usable during restoration. Scheduling can phase work across multiple windows to minimize impact. For occupied commercial buildings, weekend or after-hours installation reduces disruption. Project planning addresses occupancy requirements.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How long does window restoration take?</h4>
                  <p className="text-gray-600">Individual window restoration typically requires 2-4 weeks from removal through reinstallation, with actual shop time of 3-5 days per window. For buildings with many windows, multiple units can be in process simultaneously. A 50-window project might span 3-4 months overall but would not require continuous building access. Timeline depends on deterioration extent and crew capacity.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Partner with Tampa's Window Restoration Specialists
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists provides complete historic window restoration services for Tampa's landmark buildings. Our craftspeople understand the traditional construction techniques required for authentic restoration, and our project managers ensure that work meets both preservation standards and practical requirements.
            </p>

            <p className="text-gray-600 mb-6">
              From the elegant residential windows of Hyde Park to the industrial steel sash of Ybor City, our window restoration work preserves Tampa's architectural heritage while improving building performance. Contact us today to discuss how proper window restoration can enhance your historic building while protecting tax credit eligibility.
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
            Contact Florida Construction Specialists today for expert historic window restoration services.
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
