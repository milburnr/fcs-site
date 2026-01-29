import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Building2, Layers, Palette, Award } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Custom Homes with Unique Facades | Distinctive Exteriors - Florida Construction Specialists",
  description: "Create a distinctive facade for your Tampa custom home. Unique materials, architectural details, and curb appeal that sets your home apart. Premium exteriors from $100K-$500K+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Custom Homes with Unique Facades", href: "/tampa-custom-homes-with-unique-facades/" },
];

const internalLinks = [
  { href: "/tampa-luxury-custom-home-building-services/", label: "Luxury Custom Homes" },
  { href: "/tampa-custom-home-builders-with-artistic-flair/", label: "Artistic Custom Homes" },
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
            src="/images/custom-home-1/custom-home-1-large.webp"
            alt="Custom home facade design in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa Custom Homes with Unique Facades
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Make your statement from the street. Distinctive facade designs, premium materials, and architectural details that create unforgettable first impressions and set your home apart from the ordinary.
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
              Your home's facade is its public face—the first impression that greets visitors, frames neighborhood presence, and expresses your personal aesthetic to the world. Florida Construction Specialists creates distinctive exterior designs throughout Tampa Bay that elevate custom homes beyond ordinary luxury into truly memorable architecture. From dramatic contemporary compositions to richly detailed traditional expressions, we craft facades that stand out while remaining timeless.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Architectural Style and Expression
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay's diverse architectural heritage provides inspiration for distinctive facades. Mediterranean and Spanish Colonial influences remain popular, with their textured stucco walls, clay tile roofs, decorative ironwork, and arched openings. Contemporary designs feature clean geometric forms, expansive glass, mixed materials, and horizontal emphasis. Coastal and tropical modern styles bridge indoor and outdoor living with generous windows and natural materials that reference Florida's environment.
            </p>
            <p className="text-gray-600 mb-6">
              The most distinctive homes often synthesize multiple influences into unique expressions. A contemporary volume might incorporate Mediterranean courtyard traditions. Traditional proportions might be executed in modern materials. Regional materials like coral stone or native cypress connect to Florida's heritage while supporting contemporary design. Your facade can honor architectural traditions while expressing distinctly personal vision.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
              <h3 className="text-xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                <Building2 className="w-6 h-6" />
                Popular Tampa Bay Facade Styles
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Traditional Styles</h4>
                  <ul className="space-y-1 text-amber-900">
                    <li>• Mediterranean Revival</li>
                    <li>• Spanish Colonial</li>
                    <li>• Tuscan Villa</li>
                    <li>• British West Indies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Contemporary Styles</h4>
                  <ul className="space-y-1 text-amber-900">
                    <li>• Coastal Modern</li>
                    <li>• Tropical Modernism</li>
                    <li>• Contemporary Minimalist</li>
                    <li>• Transitional/Fusion</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Premium Facade Materials
            </h2>
            <p className="text-gray-600 mb-6">
              Distinctive facades demand distinctive materials—beyond the painted stucco and vinyl that dominate production housing. Natural stone brings timeless presence: limestone for Mediterranean elegance, coral stone for tropical authenticity, slate for contemporary edges. Stone can clad entire facades or accent entry features, creating visual interest and tactile richness that synthetic materials can't replicate.
            </p>
            <p className="text-gray-600 mb-6">
              Wood elements add warmth and texture. Cypress, ipe, and thermally modified woods resist Florida's humidity while developing beautiful patinas. Wood cladding might wrap volumes, screen outdoor living, or frame entry sequences. Contemporary designs increasingly incorporate wood soffits and siding in strategic locations. Proper species selection and detailing ensure longevity in Tampa's demanding climate.
            </p>
            <p className="text-gray-600 mb-6">
              Metal accents create contemporary statements—corten steel develops protective rust patinas, zinc and copper age gracefully, aluminum panels provide crisp modern surfaces. Glass and glazing systems push boundaries with floor-to-ceiling windows, corner glass, and curtain wall systems that dissolve traditional separation between inside and outside. These premium materials justify their costs through visual impact and long-term durability.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Entry Sequences and Approaches
            </h2>
            <p className="text-gray-600 mb-6">
              The approach to your front door creates anticipation and sets tone for the entire home experience. Thoughtful entry design includes the driveway approach, motor court or parking area, walkway materials and routing, entry threshold details, and the door itself. Each element contributes to a choreographed sequence that builds toward the moment of entry.
            </p>
            <p className="text-gray-600 mb-6">
              Grand entries might feature columned porticos, dramatic covered approaches, or sculptural canopies that shelter visitors while making architectural statements. Minimalist approaches might use simple recessed entries with carefully detailed surrounds. Courtyards create outdoor rooms that mediate between public and private realms. Custom entry doors—whether ornate carved wood, contemporary steel and glass, or pivot designs—anchor these sequences with appropriate drama.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Architectural Details and Ornamentation
            </h2>
            <p className="text-gray-600 mb-6">
              Details distinguish refined architecture from mere construction. Traditional styles might incorporate carved stone surrounds, decorative corbels, ornate balcony railings, specialty roof tiles, and elaborate chimney treatments. Contemporary designs achieve similar distinction through precise reveals, shadow lines, expressed structure, and careful material transitions. Both approaches require skilled craftspeople who understand how details contribute to overall composition.
            </p>
            <p className="text-gray-600 mb-6">
              Custom ironwork—gates, railings, window grilles, light fixtures—provides opportunity for artistic expression unique to your home. Artisan blacksmiths create pieces that reference historical patterns or develop completely original designs. Specialty plasterwork, tile murals, sculptural elements, and integrated water features further distinguish exceptional facades from ordinary ones.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Lighting for Drama
            </h2>
            <p className="text-gray-600 mb-6">
              Facade lighting extends curb appeal into evening hours while enhancing security and safety. Uplighting from landscape positions grazes textured walls and highlights architectural features. Downlighting from eaves creates intimate glow along walls. Path lighting guides visitors while illuminating entry sequences. Accent lighting draws attention to special elements: sculpture, water features, specimen trees.
            </p>
            <p className="text-gray-600 mb-6">
              Contemporary designs increasingly incorporate integrated lighting—LED strips hidden in reveals, illuminated address numerals, backlit panels, and interior light that spills through glass walls to become part of the nighttime composition. Professional lighting design ensures balance between drama and subtlety, highlighting your home's best features while maintaining elegant restraint.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Unique Facade Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Facade Level</th>
                      <th className="px-6 py-4 text-left">Features</th>
                      <th className="px-6 py-4 text-left">Premium Over Standard</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Enhanced Custom</td>
                      <td className="px-6 py-4">Premium stucco, accent stone, custom entry</td>
                      <td className="px-6 py-4">$50,000 - $100,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Distinctive Design</td>
                      <td className="px-6 py-4">Mixed materials, custom ironwork, specialty details</td>
                      <td className="px-6 py-4">$100,000 - $200,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Architectural Statement</td>
                      <td className="px-6 py-4">Premium stone, wood cladding, elaborate entries</td>
                      <td className="px-6 py-4">$200,000 - $350,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Signature Facade</td>
                      <td className="px-6 py-4">Museum-quality materials and craftsmanship</td>
                      <td className="px-6 py-4">$350,000 - $500,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Premiums shown are additional costs above standard custom home facade finishes. Base custom home pricing already includes quality stucco, impact windows, and standard entry doors. These premiums reflect upgrades to premium materials, elaborate details, and custom craftsmanship. Actual costs vary based on home size and design complexity. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Unique Facade Elements
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Layers className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Premium Materials</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Natural stone cladding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Exotic wood siding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Metal accent panels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Specialty glass systems</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Entry Design</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Custom entry doors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Covered approach designs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Entry courtyards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Motor court design</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Palette className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Architectural Details</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Custom ironwork</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Stone surrounds and carvings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Specialty roof tiles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Decorative plasterwork</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Special Features</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Facade water features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Architectural lighting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Integrated art installations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Living wall elements</span>
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
                    How do HOA restrictions affect unique facade designs?
                  </h3>
                  <p className="text-gray-600">
                    Most Tampa Bay HOAs have architectural guidelines that govern exterior design—covering everything from color palettes to material specifications to roof pitches. We navigate these requirements during design, working within guidelines while maximizing design distinction. Some communities welcome contemporary designs; others require traditional expressions. Understanding your neighborhood's requirements early avoids costly redesign.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Which facade materials perform best in Tampa's climate?
                  </h3>
                  <p className="text-gray-600">
                    Materials must withstand heat, humidity, salt air (in coastal areas), and hurricane-force winds. Stone, stucco, and fiber cement perform excellently. Wood species like ipe and thermally modified woods resist rot if properly detailed. Metals require coatings or inherent corrosion resistance. We select materials appropriate to each project's location and exposure, prioritizing durability alongside aesthetics.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Can unique facades comply with hurricane code requirements?
                  </h3>
                  <p className="text-gray-600">
                    Yes—distinctive design and storm resistance aren't mutually exclusive. Impact-rated windows and doors are available in numerous configurations including oversized units and corner glass. Stone and stucco facades exceed wind-borne debris requirements. Metal panels and cladding systems can be engineered for high wind loads. We achieve both architectural distinction and Florida Building Code compliance in every project.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How do you ensure facade quality during construction?
                  </h3>
                  <p className="text-gray-600">
                    Facade quality depends on skilled craftspeople and proper sequencing. We work with specialized stone masons, stucco artisans, and wood installers who understand the precision luxury facades demand. Mock-ups of critical details verify appearance before full installation. Progressive inspections catch issues early. Our project managers dedicate particular attention to visible facade work that defines your home's first impression.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Do distinctive facades affect resale value?
                  </h3>
                  <p className="text-gray-600">
                    Quality facade design generally enhances resale value—curb appeal strongly influences buyer perception and willingness to pay premium prices. However, extremely unusual designs may limit buyer pool to those who share your aesthetic. Timeless design executed with quality materials ages gracefully and appeals broadly. We help clients balance personal expression with lasting value.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Make Your Statement
            </h2>
            <p className="text-gray-600 mb-6">
              Your home's facade is its signature—the public expression of your taste, values, and aspirations. Florida Construction Specialists creates distinctive exteriors throughout Tampa Bay that make memorable impressions while standing the test of time. From material selection through final detailing, we ensure your facade achieves the distinction you envision.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us to discuss facade design possibilities for your Tampa Bay custom home project. We'll help you develop an exterior that sets your home apart and welcomes you home with pride every day.
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
            Ready to Create a Distinctive Facade?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on unique facade design in Tampa Bay.
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
