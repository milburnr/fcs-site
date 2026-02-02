import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Palette, Sofa, Lightbulb, PaintBucket } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { FAQWithSchema } from "@/components/FAQ";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Custom Home Interior Design Services in Tampa | Luxury Design",
  description: "Complete interior design services for Tampa custom homes. Material selection, space planning, custom furniture, and turnkey design packages. Design services from $50K-$500K+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Custom Home Interior Design Services in Tampa", href: "/custom-home-interior-design-services-in-tampa/" },
];

const internalLinks = [
  { href: "/tampa-luxury-custom-home-building-services/", label: "Luxury Custom Homes" },
  { href: "/creating-unique-bedrooms-in-tampa-custom-homes/", label: "Bedroom Design" },
  { href: "/tampa-custom-homes-with-luxury-bathrooms/", label: "Luxury Bathrooms" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const faqs = [
  {
    question: "When should I engage an interior designer for my custom home?",
    answer: "Ideally during architectural schematic design—before floor plans are finalized. This allows the designer to influence room proportions, ceiling heights, built-in locations, and other decisions that become difficult to change later. At minimum, engage a designer before electrical rough-in so lighting plans can inform outlet and switch placement. Earlier involvement produces better integration and fewer change orders.",
  },
  {
    question: "Do I have to use your recommended interior designers?",
    answer: "No—we work successfully with any qualified interior designer. If you have an established relationship with a designer you love, bring them to the team. We'll coordinate communication and integration just as effectively. We do recommend designers familiar with construction process and custom home scale; residential-focused designers sometimes struggle with the complexity and timeline of new construction.",
  },
  {
    question: "How much should I budget for furniture beyond construction?",
    answer: "Furniture and accessory budgets for complete turnkey presentation typically range from 15-25% of construction cost—$300,000-$500,000 for a $2 million home build is common in our experience. You can furnish for less by being selective about which rooms receive designer furniture versus more modest options. Some clients furnish gradually over time rather than completing everything at move-in.",
  },
  {
    question: "Can I reuse furniture from my current home?",
    answer: "Absolutely—good designers integrate existing pieces you love into new environments. They'll evaluate what works, what might be reupholstered or refinished, and what should be retired. Sentimental pieces and quality antiques often anchor rooms beautifully. The goal is creating cohesive environments, not discarding everything you own. Share your existing inventory early so it informs design direction.",
  },
  {
    question: "How do interior designers charge for their services?",
    answer: "Compensation structures vary: hourly rates ($200-500/hour), flat fees for defined scopes, or percentage of purchases (typically 25-35% of product cost). Some designers combine approaches. Flat fees provide budget predictability; hourly allows flexibility for evolving scope; percentage aligns designer incentive with furnishing quality. Discuss compensation clearly before engaging any designer.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/custom-home-1/custom-home-1-display.webp"
            alt="Custom home interior design in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Custom Home Interior Design Services in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Bring your vision to life with comprehensive interior design services. Material selection, custom millwork, furniture curation, and complete turnkey packages that create cohesive, beautiful living environments.
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

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              The finest custom home deserves interior design that fulfills its architectural promise. Florida Construction Specialists coordinates comprehensive interior design services that transform your Tampa Bay custom home from beautiful construction into a complete living environment. Whether you work with our recommended design partners or bring your own interior designer, we ensure seamless integration between construction and design—creating homes that look and function exactly as you envision.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Integrated Design-Build Approach
            </h2>
            <p className="text-gray-600 mb-6">
              Interior design begun during architectural planning produces far better results than decoration added after construction completes. Early design involvement influences spatial proportions, built-in locations, lighting placement, outlet positioning, and material transitions—decisions that become expensive to modify once construction begins. We encourage clients to engage interior designers during schematic design, ensuring every aspect of the home supports the overall design vision.
            </p>
            <p className="text-gray-600 mb-6">
              Coordination between construction and design teams prevents costly errors and missed opportunities. Designers specify exact dimensions for custom built-ins; we verify constructability and install blocking for mounting. Lighting plans inform electrical rough-in placement. Plumbing fixture selections guide rough-in positions. This integration seems obvious but is frequently overlooked when construction and design operate independently.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-8">
              <h3 className="text-xl font-bold text-purple-800 mb-3 flex items-center gap-2">
                <Palette className="w-6 h-6" />
                Interior Design Services
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-purple-900 mb-2">Design Development</h4>
                  <ul className="space-y-1 text-purple-900">
                    <li>• Space planning and layouts</li>
                    <li>• Material and finish selection</li>
                    <li>• Color palette development</li>
                    <li>• Custom millwork design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-purple-900 mb-2">Furnishing Services</h4>
                  <ul className="space-y-1 text-purple-900">
                    <li>• Furniture selection and procurement</li>
                    <li>• Artwork and accessory curation</li>
                    <li>• Window treatment design</li>
                    <li>• Complete installation/styling</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Material and Finish Selection
            </h2>
            <p className="text-gray-600 mb-6">
              Custom homes offer unlimited material choices—a freedom that can overwhelm without professional guidance. Interior designers curate selections that create cohesive environments, coordinating flooring, countertops, tile, cabinetry, hardware, lighting, and paint into unified palettes. They understand how materials interact, how lighting affects color perception, and how to balance variety with coherence.
            </p>
            <p className="text-gray-600 mb-6">
              Tampa Bay offers extensive resources for material selection: design centers, showrooms, and trade resources that aren't accessible to consumers directly. Designers know where to find unique materials, how to evaluate quality, and how to navigate pricing and lead times. They also understand material performance—which stones stain easily, which fabrics fade, which finishes require more maintenance—guiding selections that will perform well for years.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Custom Millwork and Built-Ins
            </h2>
            <p className="text-gray-600 mb-6">
              Custom millwork transforms spaces with tailored solutions impossible in production housing. Entertainment centers that accommodate specific equipment configurations. Bookshelves scaled to ceiling heights. Kitchen cabinetry designed around your cooking workflow. Bathroom vanities with precisely the storage you need. Window seats with hidden storage. These built-in elements integrate seamlessly with architecture rather than appearing as afterthoughts.
            </p>
            <p className="text-gray-600 mb-6">
              Our millwork partners execute detailed drawings developed by interior designers, achieving the tight tolerances and finish quality that distinguish custom work. Hardware selection—hinges, pulls, latches—receives careful attention as these touch-points significantly affect daily experience. Integration with lighting, technology, and mechanical systems ensures built-ins function as well as they look.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Lighting Design
            </h2>
            <p className="text-gray-600 mb-6">
              Lighting design dramatically impacts how spaces feel and function. Interior designers develop layered lighting plans that combine ambient, task, and accent illumination. They specify fixture styles that complement design direction. They position lights to support activities—reading, cooking, entertaining—while creating appropriate atmosphere. Control systems enable scene-setting that transforms spaces from bright morning energy to intimate evening relaxation.
            </p>
            <p className="text-gray-600 mb-6">
              Natural light integration is equally important. Window treatments balance light control, privacy, and aesthetics. Designers consider sun angles throughout the day and across seasons, selecting treatments that manage glare and heat gain while maintaining views. Motorized systems integrate with automation for convenient adjustment. Interior color selections account for how natural light affects perception in different rooms.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Furniture and Accessories
            </h2>
            <p className="text-gray-600 mb-6">
              Furniture procurement often represents a significant investment beyond construction costs—comparable to a luxury vehicle for each major room in higher-end projects. Interior designers access trade pricing, often 30-40% below retail, that can offset their fees while ensuring access to superior products. They navigate extensive options to find pieces that fit your scale, style, and quality expectations.
            </p>
            <p className="text-gray-600 mb-6">
              Accessories and art complete the design—table lamps, decorative objects, pillows, throws, and artwork that layer personality into spaces. Designers curate these elements to reflect your interests and experiences rather than applying generic staging. Installation and styling services ensure everything is placed optimally, creating magazine-worthy presentations that also function for daily life.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Interior Design Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Service Level</th>
                      <th className="px-6 py-4 text-left">Scope</th>
                      <th className="px-6 py-4 text-left">Design Fee Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Selections Consultation</td>
                      <td className="px-6 py-4">Material/finish guidance only</td>
                      <td className="px-6 py-4">$15,000 - $35,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Full Design Services</td>
                      <td className="px-6 py-4">Complete design, selections, millwork</td>
                      <td className="px-6 py-4">$50,000 - $125,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Turnkey Design</td>
                      <td className="px-6 py-4">Above plus furniture procurement</td>
                      <td className="px-6 py-4">$125,000 - $250,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Complete Estate Package</td>
                      <td className="px-6 py-4">Full services for large luxury homes</td>
                      <td className="px-6 py-4">$250,000 - $500,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Design fees cover professional services—furniture, fixtures, and finish costs are additional. Many designers work on percentage of purchasing; fees shown are typical flat-fee equivalents for Tampa Bay luxury homes. Furniture and accessory budgets typically range from $150,000-$500,000+ for complete turnkey projects. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Design Service Offerings
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Palette className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Design Development</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Concept development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Color and material palettes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Space planning and layouts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>3D visualization</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <PaintBucket className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Selections</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Flooring and tile</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Countertops and surfaces</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Cabinetry and hardware</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Plumbing fixtures</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Lighting & Electrical</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Fixture selection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Lighting layout plans</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Control system programming</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Window treatments</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Sofa className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Furnishing</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Furniture specification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Trade procurement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Art and accessory curation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Installation and styling</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Complete Your Vision
            </h2>
            <p className="text-gray-600 mb-6">
              Your custom home deserves interiors as exceptional as its architecture. Florida Construction Specialists coordinates comprehensive interior design services that bring every space to life—from material selections that create lasting beauty to furnishings that make your house a home. Whether you work with our design partners or bring your own team, we ensure seamless integration that produces outstanding results.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us to discuss interior design coordination for your Tampa Bay custom home project. We'll help you assemble the right team and create the home you've always imagined.
            </p>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema 
        items={faqs} 
        title="Frequently Asked Questions" 
        description="Common questions about interior design services for custom homes in Tampa"
      />

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Related Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Design Your Dream Interior?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on interior design services in Tampa Bay.
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
