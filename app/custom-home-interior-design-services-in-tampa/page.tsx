import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Palette, Sofa, Lightbulb, PaintBucket } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { FAQWithSchema } from "@/components/FAQ";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Custom Home Interior Design Tampa | Luxury",
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
              Room-by-Room Design Expertise
            </h2>
            <p className="text-gray-600 mb-6">
              Each room in your custom home requires specialized design knowledge. Kitchen design affects daily workflow: island proportions, storage accessibility, appliance integration, and traffic patterns all impact how you cook and entertain. Interior designers collaborate with kitchen specialists to ensure beautiful spaces function flawlessly. They select materials that withstand heavy use while maintaining aesthetic appeal. They position seating and lighting to create comfortable gathering spaces within working kitchens.
            </p>
            <p className="text-gray-600 mb-6">
              Master bedroom and bathroom suites deserve particular attention—these private retreats should reflect your personal preferences more than public spaces. Bedroom design creates peaceful environments with appropriate lighting, storage solutions, and seating areas. Bathroom design balances luxury features with practical function: spacious showers, comfortable vanity seating, adequate storage, and lighting that flatters rather than glares.
            </p>
            <p className="text-gray-600 mb-6">
              Living areas require flexibility for different activities: intimate conversation, large-scale entertaining, quiet reading, television viewing. Furniture arrangements that work for couples may not accommodate extended family gatherings. Lighting scenarios change throughout the day and across different uses. Storage solutions hide everyday clutter while maintaining accessibility. These complex requirements benefit from professional space planning.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Technology Integration in Design
            </h2>
            <p className="text-gray-600 mb-6">
              Modern homes require seamless technology integration that enhances living without dominating aesthetics. Entertainment systems need thoughtful planning: screen sizes appropriate to viewing distances, speaker placement that provides immersive audio without visible components, equipment storage that allows ventilation and access. Control systems should be intuitive for all family members while offering sophisticated capability.
            </p>
            <p className="text-gray-600 mb-6">
              Smart home systems enable personalized environments through scene control: lighting levels, music, temperature, and even artwork (through digital displays) can adjust automatically based on time, activity, or preference. Interior designers specify user interfaces that complement room aesthetics rather than appearing as technological afterthoughts. They plan charging stations, network infrastructure, and future upgrade paths.
            </p>
            <p className="text-gray-600 mb-6">
              Security and communication systems require design coordination to maintain aesthetics while ensuring functionality. Cameras, intercoms, access controls, and alarm components can integrate invisibly when planned during design phases. Window and door sensors become part of architectural details. Central monitoring displays complement room design rather than dominating wall spaces.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Sustainable Design Practices
            </h2>
            <p className="text-gray-600 mb-6">
              Sustainable interior design emphasizes durability, health, and environmental responsibility without sacrificing beauty or comfort. Material selections favor low-emission finishes, renewable resources, and products with recycling content. Natural materials like stone, hardwood, and natural fibers provide beauty while avoiding synthetic chemicals that can affect indoor air quality.
            </p>
            <p className="text-gray-600 mb-6">
              Furniture selections emphasize quality construction that lasts generations rather than disposable pieces requiring frequent replacement. Classic designs age gracefully; trendy styles become dated quickly. Investment in superior upholstery and refinishing capability extends furniture life significantly. Modular and adaptable pieces accommodate changing needs without complete replacement.
            </p>
            <p className="text-gray-600 mb-6">
              Energy efficiency considerations affect interior design through window treatments that manage solar heat gain, lighting systems that minimize energy consumption, and appliance selections that balance performance with efficiency. These practical considerations integrate with aesthetics to create environmentally responsible homes that also reduce operating costs.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Tampa Bay Design Resources</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Local Showrooms and Design Centers</h4>
                  <p className="text-blue-900 text-sm">Tampa Bay offers extensive design resources including major manufacturer showrooms, tile and stone galleries, furniture markets, and specialized trade suppliers. Our design partners maintain relationships with vendors throughout the region, ensuring access to the widest selection of materials and products.</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Artisan and Craftsman Networks</h4>
                  <p className="text-blue-900 text-sm">Local artists, furniture makers, and specialty craftsmen provide custom solutions for unique design challenges. From hand-forged iron work to custom upholstery, Tampa Bay's artisan community contributes authenticity and craftsmanship to luxury interior projects.</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Climate Considerations</h4>
                  <p className="text-blue-900 text-sm">Florida's climate affects material performance and comfort. UV protection, humidity resistance, and cooling efficiency inform selection of fabrics, finishes, and equipment. Outdoor living spaces require materials that withstand year-round exposure while maintaining beauty.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Project Management and Timeline
            </h2>
            <p className="text-gray-600 mb-6">
              Interior design for custom homes requires careful coordination with construction schedules. Selection deadlines ensure materials arrive when needed without delaying construction progress. Early selections—tile, countertops, cabinetry—require longer lead times and affect structural decisions. Later selections—paint, fixtures, furniture—can adjust as design develops but still need coordination for installation.
            </p>
            <p className="text-gray-600 mb-6">
              We maintain detailed selection schedules that align design decisions with construction requirements. Designers receive advance notice of required selections, allowing time for client review and vendor coordination. Change orders are minimized through thorough planning, but we accommodate evolution in client preferences when timing allows.
            </p>
            <p className="text-gray-600 mb-6">
              Installation coordination ensures trades work efficiently without conflicts. Flooring installation precedes furniture delivery. Paint completion allows for final fixture installation. Electronic installations coordinate with furniture placement. Detailed scheduling prevents delays and protects finishes during final phases.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Outdoor Living Integration
            </h2>
            <p className="text-gray-600 mb-6">
              Florida custom homes extend living spaces outdoors through sophisticated patio, pool, and garden areas that require design attention equal to interior spaces. Outdoor furniture must withstand weather while providing comfort comparable to interior seating. Fabric selections balance durability with aesthetic appeal. Storage solutions protect cushions and accessories when not in use.
            </p>
            <p className="text-gray-600 mb-6">
              Outdoor kitchen and entertainment areas require specialized equipment and materials. Appliances designed for outdoor use, surfaces that resist staining and fading, storage that protects contents from moisture. Lighting creates ambiance while providing task illumination for cooking and safety. Heating and cooling solutions extend usability throughout Florida's varied weather conditions.
            </p>
            <p className="text-gray-600 mb-6">
              Transition zones between indoor and outdoor spaces receive particular design attention. Material continuity creates flow between areas while accounting for weather exposure differences. Door systems—sliding, folding, or disappearing—affect spatial connection and furniture arrangement. Covered areas allow year-round use while protecting interior spaces from rain and sun.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Furniture and Accessories
            </h2>
            <p className="text-gray-600 mb-6">
              Furniture procurement often represents a significant investment beyond construction costs—comparable to a luxury vehicle for each major room in higher-end projects. Interior designers access trade pricing, often 30-40% below retail, that can offset their fees while ensuring access to superior products. They navigate extensive options to find pieces that fit your scale, style, and quality expectations.
            </p>
            <p className="text-gray-600 mb-6">
              Scale considerations become critical in custom homes with large rooms and high ceilings. Standard furniture can appear diminutive in generous spaces; oversized pieces may overwhelm smaller rooms. Designers understand proportional relationships and specify furniture sized appropriately for each space. Custom pieces fill gaps when standard options don't provide ideal solutions.
            </p>
            <p className="text-gray-600 mb-6">
              Accessories and art complete the design—table lamps, decorative objects, pillows, throws, and artwork that layer personality into spaces. Designers curate these elements to reflect your interests and experiences rather than applying generic staging. Installation and styling services ensure everything is placed optimally, creating magazine-worthy presentations that also function for daily life.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Budget Planning and Value Engineering
            </h2>
            <p className="text-gray-600 mb-6">
              Interior design budgets require strategic allocation across multiple categories: design fees, furniture and fixtures, accessories and art, installation and styling. Designers help prioritize spending to achieve maximum impact—investing in quality pieces for heavily used areas while finding value options for occasional-use spaces.
            </p>
            <p className="text-gray-600 mb-6">
              Phased implementation allows spreading costs over time. Essential items for move-in functionality take priority: window treatments for privacy, basic seating and dining furniture, bedroom essentials. Decorative elements and specialty pieces can be added gradually as budget allows. This approach also enables living in spaces before finalizing all decorative decisions.
            </p>
            <p className="text-gray-600 mb-6">
              Value engineering identifies cost-saving opportunities without compromising design quality. Generic versions of expensive fixtures, remnant materials for smaller applications, and strategic use of high-impact elements can reduce costs while maintaining aesthetic goals. Experienced designers balance client vision with budget realities to achieve outstanding results at any investment level.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
              <h3 className="text-xl font-bold text-amber-800 mb-3">Design Timeline and Milestones</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Pre-Construction (3-4 months)</h4>
                  <p className="text-amber-900 text-sm">Design concept development, material selections for construction integration, custom millwork designs, electrical and plumbing fixture specifications. Early decisions affect construction and cannot be easily changed later.</p>
                </div>
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">During Construction (8-12 months)</h4>
                  <p className="text-amber-900 text-sm">Lighting fixture delivery, paint color finalization, furniture ordering (12-16 week lead times), accessory procurement, installation scheduling. Continuous coordination with construction progress prevents delays.</p>
                </div>
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Final Installation (2-4 weeks)</h4>
                  <p className="text-amber-900 text-sm">Furniture delivery and placement, art installation, styling and accessorizing, final walk-through, and client orientation. Professional installation ensures damage protection and optimal placement.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Maintenance and Longevity Planning
            </h2>
            <p className="text-gray-600 mb-6">
              Superior design considers long-term maintenance requirements. Fabric and finish selections balance beauty with cleanability, especially important for families with children or pets. Furniture construction quality affects longevity—solid wood and quality upholstery age gracefully while lesser materials require frequent replacement.
            </p>
            <p className="text-gray-600 mb-6">
              Designers provide maintenance guidance for all specified materials and furnishings. Appropriate cleaning products and techniques preserve finishes and extend life. Professional cleaning and restoration services maintain investment value. Replacement planning for items with limited lifespan prevents future budget surprises.
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
              Specialty Design Services
            </h2>
            <p className="text-gray-600 mb-6">
              Luxury custom homes often include specialty spaces requiring specialized design expertise. Home theaters demand acoustic treatment, specialized seating, and lighting that won't interfere with viewing. Wine cellars require climate control, proper storage systems, and ambiance appropriate for tasting and appreciation. Home gyms need durable surfaces, ventilation, equipment storage, and motivating environments.
            </p>
            <p className="text-gray-600 mb-6">
              Home offices and libraries serve working professionals requiring focused environments. Acoustic treatment prevents disruption during calls and meetings. Task lighting supports extended computer work without eye strain. Storage systems accommodate files, books, and equipment. Ergonomic furniture prevents physical stress during long working sessions.
            </p>
            <p className="text-gray-600 mb-6">
              Children's spaces require growth flexibility and safety considerations. Playrooms need durable, cleanable surfaces and storage for toys and games. Bedrooms should adapt as children age from toddlers to teenagers. Study areas support homework and creative activities. Safety features like soft corners, secure storage, and non-toxic materials protect younger family members.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Art and Personal Collections
            </h2>
            <p className="text-gray-600 mb-6">
              Art and personal collections require thoughtful integration into interior design. Lighting must highlight pieces without causing damage from UV exposure or excessive heat. Security systems protect valuable works while maintaining accessibility for enjoyment. Climate control maintains appropriate humidity and temperature. Placement considers viewing angles and traffic patterns.
            </p>
            <p className="text-gray-600 mb-6">
              Collection display systems accommodate changing exhibitions and acquisitions. Track lighting allows repositioning as collections evolve. Wall systems provide flexible mounting options. Storage areas protect pieces not currently displayed while maintaining organization and accessibility. Conservation considerations preserve value for future generations.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <h3 className="text-xl font-bold text-green-800 mb-3">Design Style Expertise</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-900 mb-2">Traditional & Transitional</h4>
                  <ul className="space-y-1 text-green-900 text-sm">
                    <li>• Classic proportions and symmetry</li>
                    <li>• Rich material palettes</li>
                    <li>• Detailed millwork and moldings</li>
                    <li>• Timeless furniture silhouettes</li>
                    <li>• Layered lighting and textures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-900 mb-2">Contemporary & Modern</h4>
                  <ul className="space-y-1 text-green-900 text-sm">
                    <li>• Clean lines and minimal ornamentation</li>
                    <li>• Open space planning</li>
                    <li>• Natural light emphasis</li>
                    <li>• Innovative material applications</li>
                    <li>• Integrated technology solutions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-900 mb-2">Mediterranean & Coastal</h4>
                  <ul className="space-y-1 text-green-900 text-sm">
                    <li>• Natural stone and tile materials</li>
                    <li>• Wrought iron and wood details</li>
                    <li>• Outdoor living integration</li>
                    <li>• Earth-tone color palettes</li>
                    <li>• Casual elegance approach</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-900 mb-2">Eclectic & Custom</h4>
                  <ul className="space-y-1 text-green-900 text-sm">
                    <li>• Personal style expression</li>
                    <li>• Mixed period and style elements</li>
                    <li>• Unique material combinations</li>
                    <li>• Custom furniture and art</li>
                    <li>• Narrative and meaning emphasis</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Client Collaboration Process
            </h2>
            <p className="text-gray-600 mb-6">
              Successful interior design projects begin with thorough discovery: understanding how you live, what you value, and what environments make you comfortable. Design questionnaires, lifestyle interviews, and style preference exercises inform design direction. Family routine assessment identifies peak usage periods and activity patterns that affect space planning.
            </p>
            <p className="text-gray-600 mb-6">
              Design presentation methods help clients visualize proposed solutions. Computer renderings show spatial relationships and material combinations. Physical samples allow tactile evaluation of textures and finishes. Mood boards communicate aesthetic direction and emotional response goals. Regular review sessions ensure design evolution aligns with client vision.
            </p>
            <p className="text-gray-600 mb-6">
              Decision-making support helps navigate the overwhelming array of choices in custom home design. Designers present edited selections that meet criteria rather than infinite options. Priority guidance focuses decision-making on elements with greatest impact. Budget allocation advice ensures resources target areas producing maximum satisfaction and value.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Quality Control and Installation
            </h2>
            <p className="text-gray-600 mb-6">
              Quality control throughout the procurement and installation process protects your investment and ensures satisfaction. Inspection of materials before delivery prevents installation of defective products. Coordination with delivery services schedules arrivals appropriately and protects against damage. Installation supervision ensures proper placement and handling of valuable items.
            </p>
            <p className="text-gray-600 mb-6">
              Final styling and placement optimize the presentation of every element. Furniture arrangement considers traffic flow, conversation groupings, and aesthetic balance. Accessory placement creates visual interest without clutter. Artwork hanging achieves proper height and spacing for maximum impact. Plants and flowers add life and freshness to completed spaces.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Complete Your Vision
            </h2>
            <p className="text-gray-600 mb-6">
              Your custom home deserves interiors as exceptional as its architecture. Florida Construction Specialists coordinates comprehensive interior design services that bring every space to life—from material selections that create lasting beauty to furnishings that make your house a home. Whether you work with our design partners or bring your own team, we ensure seamless integration that produces outstanding results.
            </p>
            <p className="text-gray-600 mb-6">
              Our experience with luxury custom homes throughout Tampa Bay provides deep understanding of local preferences, climate considerations, and design resources. We know which materials perform best in Florida conditions, which vendors provide superior service, and how to coordinate complex projects efficiently. This local expertise, combined with access to national and international resources, ensures your interior design exceeds expectations.
            </p>
            <p className="text-gray-600 mb-6">
              Every custom home is unique, and every interior design project reflects the family it serves. From contemporary minimalism to traditional elegance, from family-friendly functionality to sophisticated entertaining spaces, we create homes that are distinctly yours. Contact us to discuss interior design coordination for your Tampa Bay custom home project. We'll help you assemble the right team and create the home you've always imagined.
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
