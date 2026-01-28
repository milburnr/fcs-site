import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Historical Landmarks Restoration in Tampa - Florida Construction Specialists",
  description: "Expert restoration of Tampa's historical landmarks including Ybor City, Tampa Theatre, and Hyde Park. Certified specialists in National Register properties and tax credit projects.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Historical Landmarks Restoration in Tampa", href: "/historical-landmarks-restoration-in-tampa/" },
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
            src="/wp-content/uploads/2023/12/historic-preservation.jpg"
            alt="Historical landmarks restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Historical Landmarks Restoration in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Preserving Tampa's most significant historic structures through expert restoration that honors their heritage while meeting modern requirements and maximizing tax credit benefits.
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
              Tampa's historical landmarks tell the story of a city transformed from a small fishing village into a major metropolitan center through the cigar industry, railroad development, and waves of immigration. These irreplaceable structures—from the magnificent Tampa Theatre to the proud mutual aid societies of Ybor City—require specialized restoration approaches that preserve their cultural significance while enabling continued use. Florida Construction Specialists provides landmark restoration services that meet the highest standards of historic preservation practice.
            </p>

            <p className="text-gray-600 mb-6">
              Landmark designation brings both privileges and responsibilities. Properties listed on the National Register of Historic Places or designated as local landmarks become eligible for significant financial incentives, including the 20% federal historic preservation tax credit and Florida's additional 25% state credit. However, these properties must be restored according to the Secretary of the Interior's Standards for the Treatment of Historic Properties, requiring expertise that general contractors typically lack.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Tampa's Premier Historical Landmarks
            </h2>
            <p className="text-gray-600 mb-6">
              The Tampa Theatre, completed in 1926, stands as one of America's finest remaining examples of atmospheric theater architecture. Its elaborate John Eberson design creates an illusion of watching films beneath a Mediterranean evening sky, complete with twinkling stars, floating clouds, and ornate architectural details suggesting an ancient courtyard. Restoration of this National Historic Landmark requires specialists who understand ornamental plaster, theatrical lighting systems, and the complex mechanical elements that create the atmospheric effects.
            </p>
            
            <p className="text-gray-600 mb-6">
              Ybor City's National Historic Landmark District encompasses numerous significant structures that document the area's cigar industry heritage. The Italian Club (L'Unione Italiana), Cuban Club (Circulo Cubano), and Spanish Club (Centro Español) represent the mutual aid societies that provided healthcare, education, and social activities for immigrant workers. Their grand architecture—featuring ornate facades, elaborate ballrooms, and distinctive towers—requires comprehensive restoration programs that address both structural needs and decorative elements.
            </p>

            <p className="text-gray-600 mb-6">
              Hyde Park's residential district contains Tampa's finest collection of Victorian, Colonial Revival, and Mediterranean Revival architecture. The Peter O. Knight House, B.F. Whitner House, and dozens of other significant residences demonstrate the prosperity of Tampa's early civic leaders. While many are private homes, those converted to commercial or institutional use may qualify for historic tax credits, making landmark-quality restoration economically viable.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The Landmark Restoration Process
            </h2>
            <p className="text-gray-600 mb-6">
              Successful landmark restoration follows a deliberate process that begins with comprehensive documentation. Historic structure reports compile historical research, existing condition surveys, and material analysis into documents that guide restoration planning. For tax credit projects, this documentation also satisfies National Park Service requirements for Part 1 and Part 2 applications.
            </p>

            <p className="text-gray-600 mb-6">
              Treatment approach selection determines how the project will address the building's historic fabric. The Secretary of the Interior recognizes four treatment approaches—Preservation, Rehabilitation, Restoration, and Reconstruction—each appropriate for different circumstances. Most adaptive reuse projects in Tampa utilize Rehabilitation, which allows sensitive alterations for contemporary use while preserving character-defining features. True Restoration, which returns a property to a specific historical period, proves appropriate for museum properties or structures of exceptional significance.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists guides clients through treatment selection, ensuring that chosen approaches align with project goals, budget realities, and tax credit requirements. Our experience with Tampa's historic resources enables realistic planning that achieves preservation objectives while meeting practical needs.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Institutional and Commercial Landmark Projects
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's landmark institutional buildings—courthouses, libraries, churches, and civic structures—present unique restoration challenges. These buildings often require modernization of mechanical, electrical, and life-safety systems while preserving significant public spaces and architectural details. The scale of institutional projects justifies comprehensive approaches that might not be feasible for smaller structures.
            </p>

            <p className="text-gray-600 mb-6">
              Commercial landmarks, including historic office buildings, hotels, and retail structures, frequently undergo adaptive reuse that transforms their function while preserving their character. The conversion of Ybor City's cigar factories into apartments, restaurants, and entertainment venues demonstrates successful commercial landmark rehabilitation. These projects combine historic preservation with economic development, revitalizing neighborhoods while protecting architectural heritage.
            </p>

            <p className="text-gray-600 mb-6">
              Religious landmarks present particular sensitivity due to their ongoing ceremonial function and community significance. Churches, synagogues, and other religious structures often contain irreplaceable artwork, stained glass, and liturgical furnishings that require specialized conservation. Florida Construction Specialists coordinates with art conservators, liturgical consultants, and congregation leadership to ensure that restoration respects both architectural and spiritual significance.
            </p>

            {/* Cost Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Landmark Restoration Cost Ranges by Building Type</h3>
              <table className="min-w-full border border-gray-300">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Building Type</th>
                    <th className="px-4 py-2 text-left">Typical Scope</th>
                    <th className="px-4 py-2 text-left">Cost per SF</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="bg-white">
                    <td className="px-4 py-2">Theater/Entertainment Venue</td>
                    <td className="px-4 py-2">Complete restoration with systems upgrade</td>
                    <td className="px-4 py-2">$350 - $600</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Civic/Institutional Building</td>
                    <td className="px-4 py-2">Full rehabilitation with accessibility</td>
                    <td className="px-4 py-2">$250 - $450</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Historic Hotel</td>
                    <td className="px-4 py-2">Complete renovation to modern standards</td>
                    <td className="px-4 py-2">$300 - $500</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Industrial/Warehouse Conversion</td>
                    <td className="px-4 py-2">Adaptive reuse to residential/commercial</td>
                    <td className="px-4 py-2">$175 - $325</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Religious Structure</td>
                    <td className="px-4 py-2">Comprehensive restoration with conservation</td>
                    <td className="px-4 py-2">$200 - $400</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Commercial Office Building</td>
                    <td className="px-4 py-2">Rehabilitation with modern systems</td>
                    <td className="px-4 py-2">$175 - $350</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Financial Incentives for Landmark Restoration
            </h2>
            <p className="text-gray-600 mb-6">
              The Federal Historic Preservation Tax Incentive Program provides a 20% tax credit on qualified rehabilitation expenditures for income-producing properties. A $5 million landmark restoration project could generate $1 million in federal tax credits, dramatically improving project economics. Florida's additional 25% state historic preservation tax credit further enhances returns, making landmark restoration financially attractive for commercial developers.
            </p>

            <p className="text-gray-600 mb-6">
              Qualification for tax credits requires listing on the National Register of Historic Places (individually or as a contributing property within a historic district) and certification that rehabilitation work meets the Secretary of the Interior's Standards. The three-part application process—Part 1 (historic significance), Part 2 (proposed work description), and Part 3 (completed work certification)—demands careful documentation and adherence to approved plans.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists assists clients throughout the tax credit process, from initial feasibility analysis through final certification. Our familiarity with National Park Service expectations and SHPO review procedures helps clients avoid common pitfalls that delay or deny credit approval. Proper planning ensures that preservation goals align with tax credit requirements from project inception.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Community Engagement and Stakeholder Coordination
            </h2>
            <p className="text-gray-600 mb-6">
              Landmark restoration projects often attract significant community interest and regulatory scrutiny. Neighborhood associations, preservation advocacy groups, and local historic preservation commissions may all have input into project planning. Florida Construction Specialists helps clients navigate these relationships, presenting projects in ways that build community support while meeting regulatory requirements.
            </p>

            <p className="text-gray-600 mb-6">
              Public communication strategies, including community meetings, visualization presentations, and progress updates, maintain positive relationships throughout construction. For beloved community landmarks like the Tampa Theatre or Ybor City's club buildings, transparent communication demonstrates respect for community heritage and builds support for preservation investment.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Specialized Craftsmanship for Landmark Details
            </h2>
            <p className="text-gray-600 mb-6">
              Landmark buildings typically feature craft elements that general contractors cannot properly restore. Ornamental plaster, decorative painting, stained glass, carved woodwork, and custom metalwork require artisans with specialized training and experience. Florida Construction Specialists maintains relationships with master craftspeople throughout the Southeast who provide the skills necessary for authentic landmark restoration.
            </p>

            <p className="text-gray-600 mb-6">
              The Tampa Theatre's atmospheric ceiling exemplifies the specialized craftsmanship required for landmark restoration. Its combination of ornamental plaster, integrated lighting, and painted illusion creates a theatrical effect that cannot be replicated using standard construction techniques. Restoration of such complex decorative assemblies requires understanding of original construction methods, appropriate materials, and artistic intent.
            </p>

            {/* FAQ Section */}
            <div className="my-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">What makes a building a "landmark" versus just "historic"?</h4>
                  <p className="text-gray-600">Landmark designation typically indicates exceptional significance and legal protection beyond basic historic status. National Historic Landmarks represent the highest federal designation, while local landmark designation provides municipal protection. National Register listing, the most common historic designation, makes properties eligible for tax credits but provides limited protection from alteration or demolition.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Can landmark buildings be modified for new uses?</h4>
                  <p className="text-gray-600">Yes, the Secretary of the Interior's Standards for Rehabilitation specifically addresses adaptive reuse that changes building function while preserving historic character. Successful adaptive reuse projects balance new use requirements with protection of character-defining features. The key is distinguishing between essential historic elements that must be preserved and less significant areas where changes may be acceptable.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How long does a typical landmark restoration project take?</h4>
                  <p className="text-gray-600">Timeline varies significantly based on building size, condition, and project scope. Planning and regulatory approval typically requires 6-18 months. Construction for major landmark projects often spans 18-36 months. The historic tax credit process adds additional timeline constraints, as Part 2 approval must precede construction commencement. Overall project duration of 3-5 years is common for significant landmarks.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Are there restrictions on what changes can be made to landmarks?</h4>
                  <p className="text-gray-600">Restrictions depend on designation level and whether the project seeks tax credits. National Historic Landmarks face the strictest standards. Tax credit projects must comply with the Secretary of the Interior's Standards, which generally require preserving character-defining features while allowing appropriate changes. Local landmark designation may impose additional municipal review requirements.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">What happens if inappropriate changes were previously made to a landmark?</h4>
                  <p className="text-gray-600">Previous inappropriate alterations don't necessarily prevent restoration or tax credit eligibility. Part 2 applications often include removal of non-historic alterations as part of the rehabilitation scope. Restoration of previously altered areas can actually strengthen tax credit applications by demonstrating commitment to historic integrity. Professional assessment determines which previous changes are reversible.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Partner with Tampa's Landmark Restoration Specialists
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists brings the specialized expertise, craft resources, and regulatory knowledge essential for successful landmark restoration. Our team has contributed to the preservation of Tampa Bay's most significant historic resources, developing approaches that protect architectural heritage while enabling contemporary use and maximizing financial returns through tax credits.
            </p>

            <p className="text-gray-600 mb-6">
              Whether you're planning restoration of a National Historic Landmark, adaptive reuse of a contributing property within a historic district, or rehabilitation of a local landmark, our experience ensures that your project achieves its preservation objectives while meeting practical requirements. Contact Florida Construction Specialists today to discuss your landmark restoration project.
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
            Contact Florida Construction Specialists today for expert landmark restoration services.
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
