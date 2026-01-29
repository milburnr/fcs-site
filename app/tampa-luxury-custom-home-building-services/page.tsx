import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Star, Crown, Gem, Award } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { FAQWithSchema } from "@/components/FAQ";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Luxury Custom Home Building Services | Premier Builder - Florida Construction Specialists",
  description: "Premier luxury custom home building services in Tampa. Bespoke designs, premium materials, white-glove service. Award-winning craftsmanship from $600K-$10M+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Luxury Custom Home Building Services", href: "/tampa-luxury-custom-home-building-services/" },
];

const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/waterfront-custom-homes-in-tampa/", label: "Waterfront Custom Homes" },
  { href: "/custom-home-interior-design-services-in-tampa/", label: "Interior Design Services" },
  { href: "/tampa-custom-home-builders-with-artistic-flair/", label: "Artistic Custom Homes" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const faqs = [
  {
    question: "How long does it take to build a luxury custom home in Tampa?",
    answer: "Luxury custom home construction typically requires 14-24 months from groundbreaking to completion, depending on size, complexity, and material lead times. Design and permitting add 6-12 months prior to construction. We provide detailed schedules during pre-construction and maintain transparent communication throughout the process. Some specialized materials—Italian stone, custom fixtures, artisan millwork—require ordering 6-9 months before installation, which we plan for during design development.",
  },
  {
    question: "Do you work with my architect, or do I need to use yours?",
    answer: "We work successfully with both approaches. Many clients have established relationships with architects they want to continue—we collaborate closely during design development to ensure constructability and budget alignment. We also maintain relationships with several outstanding Tampa Bay architects who specialize in luxury residential and can recommend partners suited to your style and vision. Either approach produces excellent results when communication flows freely between design and construction teams.",
  },
  {
    question: "How do you handle budget management for luxury projects?",
    answer: "We develop detailed budgets at multiple design stages—conceptual, schematic, and construction documents—allowing informed decisions before committing to final plans. Our cost-plus contracts provide complete transparency into actual costs with defined fees. We maintain contingency allowances for unforeseen conditions and track expenses in real-time through our project management system. Weekly financial updates and monthly detailed reporting keep you informed throughout construction.",
  },
  {
    question: "What warranty coverage do you provide on luxury homes?",
    answer: "Our comprehensive warranty includes one year on workmanship and materials, two years on mechanical systems (HVAC, plumbing, electrical), and ten years on structural elements. Individual product warranties often extend longer—many premium fixtures and appliances carry manufacturer warranties of 5-10 years. We maintain dedicated warranty service personnel who respond promptly to any concerns during the warranty period and remain available for service needs long after.",
  },
  {
    question: "Can you help with interior design and furnishing?",
    answer: "While we focus on construction, we partner with leading Tampa Bay interior designers who can begin working with you during the architectural phase—ensuring that spatial planning, lighting design, and finish selections all align with your furnishing vision. Early interior design involvement often improves outcomes by identifying built-in opportunities, optimal outlet placement, and lighting control zones. We can provide designer recommendations suited to your style and budget.",
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
            src="/images/custom-home-1/custom-home-1-large.webp"
            alt="Luxury custom home construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa Luxury Custom Home Building Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Experience the pinnacle of custom home construction in Tampa Bay. Bespoke architectural design, premium materials, master craftsmanship, and white-glove service from concept to completion.
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
              In Tampa Bay's most prestigious neighborhoods—from the historic estates of Beach Park to the waterfront compounds of Davis Islands—discerning homeowners choose Florida Construction Specialists for luxury custom home construction that exceeds every expectation. Our white-glove building experience combines award-winning design, meticulous craftsmanship, and personalized service to create residences that stand as testaments to refined living. Every detail matters when you're building your forever home, and we treat your vision with the dedication it deserves.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The Definition of Luxury Custom Building
            </h2>
            <p className="text-gray-600 mb-6">
              Luxury custom home construction transcends mere square footage and premium finishes—it's about creating spaces that elevate daily life while reflecting your unique personality and aspirations. Our luxury division approaches each project as a singular work of architecture, collaborating with you and your design team to translate vision into reality. From the initial concept sketches through final punch list completion, we maintain the exacting standards that distinguish truly exceptional homes from merely expensive ones.
            </p>
            <p className="text-gray-600 mb-6">
              The Tampa Bay luxury market demands builders who understand both timeless elegance and contemporary innovation. Our portfolio includes Mediterranean estates in Avila, modern masterpieces in South Tampa, coastal contemporary compounds in Clearwater Beach, and transitional gems throughout Tampa Palms and Cheval. This architectural diversity reflects our commitment to serving your vision rather than imposing a signature style—your home should be unmistakably yours.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
              <h3 className="text-xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                <Crown className="w-6 h-6" />
                Tampa Bay Luxury Home Market Overview
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Premium Neighborhoods</h4>
                  <ul className="space-y-1 text-amber-900">
                    <li>• Beach Park / Bayshore: $2M - $8M+</li>
                    <li>• Davis Islands: $1.5M - $10M+</li>
                    <li>• Avila: $1.5M - $6M+</li>
                    <li>• Clearwater Beach: $3M - $15M+</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Market Statistics</h4>
                  <ul className="space-y-1 text-amber-900">
                    <li>• Luxury sales ($2M+): 850+ annually</li>
                    <li>• Custom build share: ~25% of luxury</li>
                    <li>• Average build time: 14-24 months</li>
                    <li>• Land value: 20-40% of total investment</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Luxury Building Process
            </h2>
            <p className="text-gray-600 mb-6">
              Creating a luxury custom home requires a deliberate process that leaves nothing to chance. We begin with an in-depth discovery phase—understanding not just your architectural preferences, but how you live, entertain, and envision your future in this home. Do you host formal dinner parties or prefer casual gatherings around the outdoor kitchen? Do you need a home office that rivals any executive suite, or a yoga studio with morning light? Every answer shapes our approach.
            </p>
            <p className="text-gray-600 mb-6">
              Design collaboration follows, whether you bring your own architect or work with one of our preferred design partners who specialize in Tampa Bay luxury residential. We provide constructability input throughout design development, ensuring that ambitious architectural concepts can be built efficiently without cost surprises. Our pre-construction team develops comprehensive budgets at multiple design stages, allowing informed decisions about where to invest for maximum impact.
            </p>
            <p className="text-gray-600 mb-6">
              Construction execution reflects our commitment to excellence. A dedicated project manager serves as your single point of contact, providing weekly progress reports, coordinating your selections appointments, and ensuring every subcontractor understands and meets our standards. We employ specialized craftsmen for fine carpentry, custom millwork, decorative plaster, and other artisan trades that distinguish luxury construction from standard building.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Premium Materials and Finishes
            </h2>
            <p className="text-gray-600 mb-6">
              Luxury begins with materials, and we source the finest available from around the world. Natural stone from Italy, Spain, and Brazil graces our floors, countertops, and feature walls. Hardwood flooring includes exotic species alongside premium American walnut and white oak. Custom cabinetry comes from boutique workshops that still employ old-world joinery techniques, finished to perfection in our clients' chosen palette.
            </p>
            <p className="text-gray-600 mb-6">
              Hardware and fixtures receive equal attention—we partner with brands like Waterworks, Lefroy Brooks, and Kallista for bathrooms, Sub-Zero/Wolf and Gaggenau for kitchens, and specialty lighting from firms like Visual Comfort and Urban Electric. These aren't merely expensive brands—they're manufacturers whose quality and design justify their prices through decades of reliable performance and timeless aesthetics.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Smart Home Technology Integration
            </h2>
            <p className="text-gray-600 mb-6">
              Modern luxury demands seamless technology integration that enhances comfort without cluttering spaces with visible devices. Our homes include comprehensive structured wiring for current and future systems, with home automation platforms from Savant, Crestron, or Control4 unifying lighting, climate, security, and entertainment into intuitive interfaces. Invisible speakers from brands like Sonance and Stealth Acoustics deliver exceptional audio without compromising interior design.
            </p>
            <p className="text-gray-600 mb-6">
              Lighting control transforms environments at the touch of a button—morning scenes for waking, evening scenes for entertaining, movie scenes for the home theater. Motorized shading adjusts automatically based on time and sun angle, protecting furnishings while maintaining views. Security systems incorporate high-definition cameras, sophisticated access control, and integration with monitoring services that provide true peace of mind.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Outdoor Living Excellence
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay's climate makes outdoor living spaces essential rather than optional, and our luxury projects treat exterior environments with the same attention as interior rooms. Pool designs range from classic geometric shapes with automatic covers to naturalistic lagoons with grottos, waterfalls, and fire features. Summer kitchens include professional-grade equipment from Lynx, Kalamazoo, or custom stainless fabrication, supporting everything from casual family dinners to catered parties for hundreds.
            </p>
            <p className="text-gray-600 mb-6">
              Landscape architecture complements architectural design, with specimen trees, sculptural plantings, and outdoor lighting that extends living hours into the evening. Sports courts accommodate tennis, basketball, or pickleball depending on your interests. Putting greens, bocce courts, and children's play areas create destinations throughout the property. Our landscape construction partners maintain the same quality standards we demand inside the home.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Luxury Custom Home Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Home Size</th>
                      <th className="px-6 py-4 text-left">Premium Custom</th>
                      <th className="px-6 py-4 text-left">Luxury Build</th>
                      <th className="px-6 py-4 text-left">Estate Class</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">4,000 sq ft</td>
                      <td className="px-6 py-4">$1.2M - $1.6M</td>
                      <td className="px-6 py-4">$1.6M - $2.2M</td>
                      <td className="px-6 py-4">$2.2M - $3.0M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">6,000 sq ft</td>
                      <td className="px-6 py-4">$1.8M - $2.4M</td>
                      <td className="px-6 py-4">$2.4M - $3.3M</td>
                      <td className="px-6 py-4">$3.3M - $4.5M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">8,000 sq ft</td>
                      <td className="px-6 py-4">$2.4M - $3.2M</td>
                      <td className="px-6 py-4">$3.2M - $4.4M</td>
                      <td className="px-6 py-4">$4.4M - $6.0M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">10,000+ sq ft</td>
                      <td className="px-6 py-4">$3.0M - $4.0M</td>
                      <td className="px-6 py-4">$4.0M - $5.5M</td>
                      <td className="px-6 py-4">$5.5M - $10M+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Construction costs only—does not include land or soft costs. Premium Custom ($300-400/sf) includes high-end standard finishes. Luxury Build ($400-550/sf) features designer finishes and comprehensive technology. Estate Class ($550-750+/sf) represents ultra-premium materials and bespoke craftsmanship. Prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Luxury Home Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Gem className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Premium Interiors</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Custom millwork and built-ins</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Imported natural stone surfaces</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Designer lighting fixtures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Premium hardwood flooring</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Kitchen Excellence</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Sub-Zero/Wolf or Gaggenau appliances</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Custom cabinetry with soft-close</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Butler's pantry with prep kitchen</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Wine storage and bar areas</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Crown className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Spa Bathrooms</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Freestanding soaking tubs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Rain showers with body sprays</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Heated floors throughout</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Designer fixtures and hardware</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Technology & Comfort</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Whole-home automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Distributed audio/video</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Elevator or lift-ready</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Whole-home generator</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa's Premier Luxury Neighborhoods
            </h2>
            <p className="text-gray-600 mb-6">
              Our luxury custom home experience extends throughout Tampa Bay's most prestigious communities. In Beach Park and along Bayshore Boulevard, we create residences that honor the area's architectural heritage while incorporating modern comfort and technology. Davis Islands waterfront properties showcase our expertise in elevated coastal construction with panoramic bay views. Avila's gated privacy allows for expansive estates with resort-style amenities, while Cheval and Tampa Palms offer generous lots for families seeking space within reach of top schools.
            </p>
            <p className="text-gray-600 mb-6">
              On the beaches, from Clearwater to Pass-a-Grille, we build Gulf-front masterpieces designed to maximize views while withstanding coastal conditions. Each neighborhood presents unique opportunities and challenges that our experience helps navigate—from historic district design review in Hyde Park to flood zone engineering in waterfront locations.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Begin Your Luxury Home Journey
            </h2>
            <p className="text-gray-600 mb-6">
              Building a luxury custom home represents one of life's most significant undertakings—a chance to create the perfect environment for your family's next chapter. Florida Construction Specialists brings decades of experience, unwavering commitment to quality, and genuine passion for fine homebuilding to every project. From your first consultation through years of enjoyment in your completed home, we're here to ensure the experience matches the exceptional result.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us to schedule a private consultation at our office or your property. We'll discuss your vision, answer your questions, and explore how we can bring your dream home to life in Tampa Bay's most desirable locations.
            </p>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema 
        items={faqs} 
        title="Frequently Asked Questions" 
        description="Common questions about luxury custom home building in Tampa"
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
            Ready to Build Your Luxury Dream Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a private consultation on luxury custom home construction in Tampa Bay.
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
