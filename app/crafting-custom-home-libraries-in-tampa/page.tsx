import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, BookOpen, Lamp, Armchair, PanelTop } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Custom Home Libraries in Tampa | Luxury Book Rooms & Studies - Florida Construction Specialists",
  description: "Design your dream custom home library in Tampa. Floor-to-ceiling bookshelves, reading nooks, climate control, and luxury finishes. Library additions from $50K-$250K+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Crafting Custom Home Libraries in Tampa", href: "/crafting-custom-home-libraries-in-tampa/" },
];

const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/building-tampa-homes-with-personalized-office-spaces/", label: "Home Office Spaces" },
  { href: "/tampa-luxury-custom-home-building-services/", label: "Luxury Custom Homes" },
  { href: "/custom-home-interior-design-services-in-tampa/", label: "Interior Design Services" },
  { href: "/contact/", label: "Schedule a Consultation" },
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
            src="/wp-content/uploads/2023/12/custom-home-1.png"
            alt="Custom home library construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Crafting Custom Home Libraries in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Create a sanctuary for your book collection with custom home libraries featuring floor-to-ceiling shelving, rolling ladders, cozy reading nooks, and climate-controlled preservation—all crafted to your unique vision.
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
              In an age of digital everything, a custom home library represents the ultimate statement of refined taste and intellectual appreciation. Florida Construction Specialists has created stunning private libraries throughout Tampa Bay—from intimate reading rooms in Hyde Park bungalows to grand two-story library wings in Avila estates. Whether you're housing a rare book collection, creating a sophisticated home office, or simply carving out a quiet retreat from the world, our craftsmen bring your literary sanctuary to life with meticulous attention to every detail.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The Art of Library Design
            </h2>
            <p className="text-gray-600 mb-6">
              A truly exceptional home library balances aesthetics, functionality, and preservation. The design process begins with understanding your collection—its current size, anticipated growth, format variations (from oversized art books to paperbacks), and any items requiring special protection. We then consider how you'll use the space: solitary reading, research and writing, meetings with colleagues, or entertaining guests who appreciate fine books and conversation.
            </p>
            <p className="text-gray-600 mb-6">
              Architectural style sets the tone for your library experience. Traditional libraries featuring rich wood paneling, coffered ceilings, and leather furnishings evoke the great estates of England and the Gilded Age. Contemporary interpretations might combine floating steel shelves, dramatic lighting, and minimalist seating for a more modern sensibility. Transitional designs bridge both worlds with clean lines and warm materials. Tampa's diverse architectural landscape—from Mediterranean to Modern—accommodates every library aesthetic.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
              <h3 className="text-xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                Library Planning Considerations
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Collection Assessment</h4>
                  <ul className="space-y-1 text-amber-900">
                    <li>• Current volume count and formats</li>
                    <li>• Projected 10-20 year growth</li>
                    <li>• Rare or valuable items requiring protection</li>
                    <li>• Display versus storage priorities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Usage Patterns</h4>
                  <ul className="space-y-1 text-amber-900">
                    <li>• Primary purpose (reading/work/display)</li>
                    <li>• Typical usage hours and duration</li>
                    <li>• Privacy needs and accessibility</li>
                    <li>• Entertainment and hosting functions</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Custom Millwork and Shelving Systems
            </h2>
            <p className="text-gray-600 mb-6">
              The heart of any library is its shelving, and custom millwork elevates storage to art. Our craftsmen build floor-to-ceiling bookcases from premium hardwoods—walnut, cherry, mahogany, and oak are popular choices in Tampa's luxury homes. Adjustable shelving accommodates books of varying heights, while fixed architectural elements create visual rhythm and interest. Integrated lighting within shelving units illuminates spines and creates ambiance during evening reading hours.
            </p>
            <p className="text-gray-600 mb-6">
              Rolling library ladders add both function and romance to tall installations. We source ladders from specialty manufacturers or build custom units that match your millwork precisely. Track systems are engineered for smooth operation and safety, with options for rail-mounted or hook-style attachments. For two-story libraries, we incorporate mezzanine levels with catwalks and secondary ladders, creating dramatic spatial experiences that rival any public library or private club.
            </p>
            <p className="text-gray-600 mb-6">
              Beyond books, library millwork often includes specialized storage: display cases for collectibles, locked cabinets for valuable first editions, pull-out media drawers, map storage, and file systems. Hidden doors within bookcases—whether for powder rooms, closets, or secret passages—add an element of intrigue that delights owners and guests alike. Our millwork team can execute virtually any configuration your imagination and architect devise.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Climate Control and Preservation
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's subtropical humidity presents challenges for book preservation that our library designs specifically address. Ideal conditions for paper and leather maintain 65-70°F temperature with 30-40% relative humidity—significantly drier than Tampa's typical indoor environment. We achieve this through dedicated HVAC zoning with humidity control, often supplemented by portable dehumidifiers for smaller collections or whole-room systems for extensive libraries.
            </p>
            <p className="text-gray-600 mb-6">
              For valuable or rare book collections, we implement museum-grade environmental controls with continuous monitoring. UV-filtering window treatments or interior placement protects bindings and pages from sun damage. Air filtration removes particulates and pollutants that accelerate paper deterioration. These investments pay dividends in preserved collection value and extended book lifespan—critical considerations for collectors of first editions, antique volumes, or irreplaceable family archives.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Lighting for Reading and Ambiance
            </h2>
            <p className="text-gray-600 mb-6">
              Library lighting must accomplish multiple goals simultaneously: adequate illumination for comfortable reading, dramatic accent lighting for architectural features, and gentle ambient light for relaxation. We layer these functions through a combination of overhead fixtures, task lighting, and decorative elements. Chandeliers or statement pendants often anchor traditional library ceilings, while contemporary spaces might feature linear LED systems or recessed downlights.
            </p>
            <p className="text-gray-600 mb-6">
              Task lighting at reading chairs is essential—floor lamps, swing-arm wall fixtures, or integrated reading lights in furniture provide focused illumination without eye strain. LED strip lighting within shelving units creates gentle backlighting that highlights your collection while contributing to overall room brightness. Dimming systems on all circuits allow adjustment from bright working light to intimate evening ambiance at the touch of a button.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Seating and Comfort Features
            </h2>
            <p className="text-gray-600 mb-6">
              No library is complete without comfortable seating that invites hours of reading. Club chairs and ottomans in leather or quality fabric anchor reading areas, positioned near windows or task lighting for optimal illumination. Window seats with cushions and hidden storage create cozy nooks for afternoon reading—especially popular in Tampa homes with garden or water views. Chaise lounges offer full-length comfort for extended reading sessions.
            </p>
            <p className="text-gray-600 mb-6">
              For libraries serving dual purposes as home offices or meeting spaces, we incorporate appropriate work furniture—writing desks, partner desks, or modern workstations depending on style and function. Hidden technology integration keeps screens and devices from disrupting the library aesthetic while maintaining connectivity when needed. Thoughtful furniture placement creates distinct zones for different activities while maintaining visual cohesion.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Custom Home Library Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Library Type</th>
                      <th className="px-6 py-4 text-left">Size Range</th>
                      <th className="px-6 py-4 text-left">Investment Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Reading Nook/Small Study</td>
                      <td className="px-6 py-4">100-200 sq ft</td>
                      <td className="px-6 py-4">$25,000 - $50,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Traditional Home Library</td>
                      <td className="px-6 py-4">200-400 sq ft</td>
                      <td className="px-6 py-4">$50,000 - $100,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Premium Library Suite</td>
                      <td className="px-6 py-4">400-600 sq ft</td>
                      <td className="px-6 py-4">$100,000 - $175,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Two-Story Library Wing</td>
                      <td className="px-6 py-4">600-1,000+ sq ft</td>
                      <td className="px-6 py-4">$175,000 - $350,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Prices include custom millwork, lighting, climate control, and finish work. Does not include furniture, rare book storage systems, or new construction costs if building an addition. Premium millwork in exotic woods and museum-grade environmental controls may increase costs. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Library Features and Amenities
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <PanelTop className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Custom Millwork</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Floor-to-ceiling built-in bookcases</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Rolling library ladders on rails</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Hidden door bookcase entries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Coffered or tray ceilings</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Lamp className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Lighting & Ambiance</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>In-shelf LED illumination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Reading-specific task lighting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Dimmable scene controls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Statement chandeliers/pendants</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Armchair className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Comfort Elements</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Built-in window seats with storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Fireplace with custom surround</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Soundproofing for quiet retreat</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Wet bar or coffee station</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Preservation</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Dedicated HVAC with humidity control</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>UV-filtering window treatments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Display cases for rare volumes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Security systems for valuables</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Can you add a library to my existing Tampa home?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. We regularly convert existing rooms—formal living rooms, large bedrooms, or underutilized dens—into custom libraries. Alternatively, we can design library additions that seamlessly integrate with your home's architecture. The conversion approach typically costs less and moves faster, while additions offer complete design freedom and dedicated space. During consultation, we'll evaluate your home and recommend the best approach for your goals and budget.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What wood species work best for Tampa library millwork?
                  </h3>
                  <p className="text-gray-600">
                    Traditional libraries favor rich, dark woods: mahogany, walnut, and cherry offer classic appeal and excellent workability. White oak provides a more contemporary aesthetic and superior durability. For painted millwork, poplar offers excellent value with a smooth finish surface. We source kiln-dried lumber and condition materials in our climate-controlled shop before installation to prevent warping or gaps in Tampa's humidity. Exotic woods are available for special projects.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How do you protect books from Tampa's humidity?
                  </h3>
                  <p className="text-gray-600">
                    We implement layered humidity management: dedicated HVAC zoning with dehumidification capabilities (maintaining 35-45% relative humidity), vapor barriers in exterior walls, and continuous air circulation. For valuable collections, we add room-specific monitoring systems that alert you to condition changes. UV-filtering window treatments protect against sun damage. These systems add $5,000-15,000 to typical projects but are essential for preserving book collections in Florida's climate.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How long does custom library construction take?
                  </h3>
                  <p className="text-gray-600">
                    A typical room conversion with custom millwork requires 8-12 weeks from design approval through completion. Library additions follow standard construction timelines of 4-6 months depending on size and complexity. Custom millwork is fabricated in our shop concurrent with site preparation, then installed in a coordinated sequence to minimize disruption. We provide detailed schedules during the planning phase.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Can the library also function as a home office?
                  </h3>
                  <p className="text-gray-600">
                    Yes—many clients combine library and office functions successfully. We design dedicated work areas with appropriate technology integration, task lighting, and ergonomic furniture while maintaining the library's aesthetic character. Hidden cable management, motorized TV lifts, and integrated charging keep technology available but unobtrusive. Soundproofing can separate the library/office from household activity, creating a productive work environment surrounded by your books.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Create Your Literary Sanctuary
            </h2>
            <p className="text-gray-600 mb-6">
              A custom home library transforms how you interact with your books and yourself. Whether you're a serious collector preserving rare volumes, an avid reader wanting a dedicated retreat, or someone who appreciates the beauty and atmosphere that books create, Florida Construction Specialists can bring your vision to life. Our craftsmen combine traditional millwork skills with modern preservation techniques to create libraries that will serve your family for generations.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us to schedule a consultation and begin designing your perfect Tampa home library. We'll discuss your collection, your dreams, and the practical details that transform ideas into reality.
            </p>

          </div>
        </div>
      </section>

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
            Ready to Build Your Dream Library?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on custom home library design and construction in Tampa Bay.
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
