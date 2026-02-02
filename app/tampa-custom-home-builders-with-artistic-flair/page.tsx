import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Palette, Sparkles, Eye, Brush } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Custom Home Builders with Artistic Flair | Unique Architecture",
  description: "Build an architecturally distinctive custom home in Tampa. Unique designs, artistic details, custom millwork, and statement features. Creative luxury homes from $500K-$5M+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Custom Home Builders with Artistic Flair", href: "/tampa-custom-home-builders-with-artistic-flair/" },
];

const internalLinks = [
  { href: "/tampa-luxury-custom-home-building-services/", label: "Luxury Custom Homes" },
  { href: "/tampa-custom-homes-with-unique-facades/", label: "Unique Facade Design" },
  { href: "/custom-home-interior-design-services-in-tampa/", label: "Interior Design Services" },
  { href: "/services/residential/", label: "Residential Construction" },
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
            src="/images/custom-home-1/custom-home-1-display.webp"
            alt="Artistic custom home construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa Custom Home Builders with Artistic Flair
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Where architecture becomes art. Create a truly unique home with distinctive design, handcrafted details, and custom features that express your individual vision and stand apart from the ordinary.
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
              Not every custom home client wants conventional luxury—some seek homes that make bold artistic statements, push architectural boundaries, and express unique personal visions. Florida Construction Specialists embraces these creative challenges, working with visionary architects and artisan craftspeople to build homes that transcend ordinary expectations. From sculptural modern masterpieces to elaborately detailed Mediterranean estates, we bring artistic ambition to life throughout Tampa Bay.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Building Beyond Convention
            </h2>
            <p className="text-gray-600 mb-6">
              Artistic homes require builders willing to venture beyond standard construction methods. When an architect specifies cantilevered volumes, curved walls, floating staircases, or unconventional materials, we develop the structural and technical solutions that make vision buildable. Our experience with complex geometry, specialty finishes, and integration of art and architecture enables us to execute designs that less experienced builders would struggle to achieve.
            </p>
            <p className="text-gray-600 mb-6">
              We've built homes inspired by mid-century modern masters, tropical modernism, Mediterranean revival, and purely original visions that defy categorization. Each project teaches us something new and expands our capabilities. The common thread is clients who value design excellence and are willing to invest in homes that truly stand apart from their neighbors—homes that will be photographed, admired, and remembered.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-8">
              <h3 className="text-xl font-bold text-purple-800 mb-3 flex items-center gap-2">
                <Palette className="w-6 h-6" />
                Architectural Styles We Excel In
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-purple-900 mb-2">Modern/Contemporary</h4>
                  <ul className="space-y-1 text-purple-900">
                    <li>• Clean geometric forms</li>
                    <li>• Floor-to-ceiling glass walls</li>
                    <li>• Cantilevered elements</li>
                    <li>• Minimal ornamentation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-purple-900 mb-2">Mediterranean/Spanish</h4>
                  <ul className="space-y-1 text-purple-900">
                    <li>• Elaborate tile work</li>
                    <li>• Arched openings and loggias</li>
                    <li>• Wrought iron details</li>
                    <li>• Textured stucco finishes</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Custom Millwork and Craftsmanship
            </h2>
            <p className="text-gray-600 mb-6">
              Artistic homes often feature custom millwork that transforms ordinary elements into focal points. Staircases become sculptural statements with floating treads, glass railings, or elaborately turned balusters. Built-in cabinetry incorporates curves, unusual geometries, or integrated art displays. Ceiling treatments range from simple coffering to complex three-dimensional patterns that create visual drama overhead.
            </p>
            <p className="text-gray-600 mb-6">
              We work with master woodworkers who can execute virtually any design in premium hardwoods, achieving tolerances and finish quality that mass-production can't match. Exotic species—zebrawood, wenge, rift-cut white oak—bring visual interest through natural figure and color. Combination of woods, metals, glass, and stone in single pieces creates contemporary sophistication. These artisan elements distinguish truly custom homes from production luxury.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Specialty Finishes and Materials
            </h2>
            <p className="text-gray-600 mb-6">
              Wall finishes extend far beyond paint in artistic homes. Venetian plaster creates luminous depth with subtle color variations. Metallic and mica finishes catch light dramatically. Grasscloth, silk, and specialty wallcoverings add texture and pattern. Reclaimed wood planking, stone veneer, and living walls bring natural elements indoors. Each finish creates distinct atmosphere appropriate to different spaces.
            </p>
            <p className="text-gray-600 mb-6">
              Flooring becomes art underfoot: intricate marble patterns, wide-plank exotic hardwoods with dramatic grain, polished concrete with embedded aggregates or inlays, terrazzo with custom color blends, even glass floors revealing spaces below. These aren't standard builder selections but carefully specified materials chosen for their contribution to overall design vision.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Art Integration and Display
            </h2>
            <p className="text-gray-600 mb-6">
              For clients with significant art collections, homes become galleries requiring specialized design. We create walls specifically proportioned for important pieces, with lighting integrated during construction for proper illumination. Climate control maintains stable temperature and humidity to protect valuable works. Security systems incorporate art-specific sensors. Some spaces are designed around specific acquisitions, creating purpose-built installations that transform rooms into curated experiences.
            </p>
            <p className="text-gray-600 mb-6">
              Beyond wall-hung art, we integrate sculpture niches, display cases with LED illumination, rotating display pedestals, and water features as artistic elements. Commissioned site-specific art—glass installations, metal sculptures, mosaic murals—becomes permanent architecture rather than decoration. These integrations require coordination between artists, architects, and builders from project inception.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Signature Architectural Elements
            </h2>
            <p className="text-gray-600 mb-6">
              Statement staircases often anchor artistic homes—floating designs that appear to defy gravity, double helixes spiraling through multi-story spaces, or dramatically lit installations that become sculptural centerpieces. We engineer and build these complex structures with hidden steel supports, precisely aligned components, and flawless finishing that conceals the complexity behind apparent simplicity.
            </p>
            <p className="text-gray-600 mb-6">
              Other signature elements might include: dramatic water features flowing through interior spaces; glass walls that blur indoor/outdoor boundaries; ceiling installations with integrated lighting that create artistic atmosphere; custom doors and entry sequences that set tone for entire residences; wine storage that becomes architectural display; or elaborate outdoor rooms that extend artistic vision throughout the property.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Artistic Custom Home Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Design Level</th>
                      <th className="px-6 py-4 text-left">Per Sq Ft Range</th>
                      <th className="px-6 py-4 text-left">Typical Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Design-Forward Custom</td>
                      <td className="px-6 py-4">$350 - $450/sq ft</td>
                      <td className="px-6 py-4">$1.0M - $2.0M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Architecturally Significant</td>
                      <td className="px-6 py-4">$450 - $600/sq ft</td>
                      <td className="px-6 py-4">$1.8M - $3.5M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Artistic Statement</td>
                      <td className="px-6 py-4">$600 - $800/sq ft</td>
                      <td className="px-6 py-4">$3.0M - $5.0M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Signature Estate</td>
                      <td className="px-6 py-4">$800 - $1,200+/sq ft</td>
                      <td className="px-6 py-4">$5.0M - $10M+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Design-Forward includes distinctive architecture and quality custom finishes. Architecturally Significant adds complex geometry and specialty materials. Artistic Statement incorporates extensive custom craftsmanship and integrated art. Signature Estate represents truly exceptional construction with museum-quality execution. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Artistic Home Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Palette className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Architectural Design</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Complex geometric forms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Cantilevered structures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Curved wall construction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Dramatic ceiling heights</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Brush className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Custom Millwork</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Sculptural staircases</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Exotic wood species</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Custom built-in cabinetry</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Integrated metal and glass</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Specialty Finishes</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Venetian plaster walls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Custom terrazzo floors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Metallic and mica finishes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Living wall installations</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Art Integration</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Gallery lighting design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Climate-controlled display</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Commissioned installations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Sculpture and water features</span>
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
                    How do you approach architecturally challenging designs?
                  </h3>
                  <p className="text-gray-600">
                    We begin with thorough constructability review during design development, identifying potential challenges before they become expensive problems. Our structural engineering partners analyze complex geometries and develop elegant solutions. We mock up critical details at full scale when necessary to verify aesthetics and buildability. This front-end investment prevents costly corrections during construction and ensures the finished home matches the architect's vision.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Do artistic homes take longer to build?
                  </h3>
                  <p className="text-gray-600">
                    Often yes—complex designs, custom fabrication, and specialty trades require more time than production approaches. Artistic homes typically take 18-30 months versus 12-18 for conventional custom construction. Material lead times for specialty items can add months; we identify long-lead items early and order during design phases to minimize schedule impact. The result justifies the patience: homes that will bring joy for generations.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Can you recommend architects for distinctive designs?
                  </h3>
                  <p className="text-gray-600">
                    We collaborate with exceptional architects throughout Tampa Bay and beyond, and can recommend partners suited to your aesthetic direction and project scope. Some clients prefer well-known signature architects; others work with talented emerging designers. We also work successfully with architects our clients bring to the table. What matters is shared vision and collaborative working relationships.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How do you maintain quality on complex custom work?
                  </h3>
                  <p className="text-gray-600">
                    Our project managers have extensive experience with high-end custom work and understand the attention to detail these projects demand. We work with specialized subcontractors who have proven themselves on similar projects—not the lowest bidders. Sample approval, mock-up review, and progressive inspection catch issues before they're built permanently. Our clients' investment in quality demands our corresponding commitment to excellence.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Will artistic homes have resale challenges?
                  </h3>
                  <p className="text-gray-600">
                    Distinctive homes appeal to buyers seeking unique properties rather than broad market appeal. While the buyer pool may be smaller, these buyers pay premiums for architectural significance—often more per square foot than conventional luxury homes. Location matters: artistic homes in established luxury neighborhoods like Beach Park, Davis Islands, or Avila find appreciative buyers. Timeless design ages better than trendy features.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Create Something Extraordinary
            </h2>
            <p className="text-gray-600 mb-6">
              If you're dreaming of a home that expresses bold artistic vision rather than conventional luxury, Florida Construction Specialists has the experience, craftsmanship, and creative partnership to bring your vision to life. We embrace the challenges of distinctive architecture because we believe homes can and should be works of art—places that inspire, delight, and express the unique personalities of those who inhabit them.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us to discuss your vision for an architecturally distinctive custom home in Tampa Bay. We're eager to explore the possibilities together.
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
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on artistic and architecturally distinctive custom homes in Tampa Bay.
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
