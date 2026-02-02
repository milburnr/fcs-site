import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Sparkles, Compass, PenTool, Users, ClipboardList } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Designing Your Dream Home in Tampa | Custom Home Design",
  description: "Turn your dream home vision into reality in Tampa Bay. Custom architectural design, personalized planning, and expert guidance from concept to completion. Dream homes from $400K-$5M+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Designing Your Dream Home in Tampa", href: "/designing-your-dream-home-in-tampa/" },
];

const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/bespoke-architectural-design-in-tampa/", label: "Bespoke Architectural Design" },
  { href: "/tampa-luxury-custom-home-building-services/", label: "Luxury Custom Home Building" },
  { href: "/tampas-custom-family-home-builders/", label: "Custom Family Homes" },
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
            alt="Dream home design in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Designing Your Dream Home in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Transform your vision into your forever home. From first inspiration through move-in day, we guide you through creating a custom residence that reflects your lifestyle, preferences, and aspirations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Start Your Journey
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
              Everyone has a dream home—that perfect residence tailored exactly to your life, your tastes, your family's unique needs. For most, this dream remains hypothetical, a collection of Pinterest boards and magazine clippings never translated into reality. Florida Construction Specialists helps Tampa Bay families turn those dreams into addresses. From articulating your vision through expert design to executing flawless construction, we guide you through creating the home you've always imagined.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Discovering Your Dream
            </h2>
            <p className="text-gray-600 mb-6">
              Dream home design begins with discovery—understanding not just what you think you want, but what you actually need. How does your family truly live? What activities do you love that your current home doesn't support? What frustrations would the perfect home eliminate? What beauty speaks to your soul? These questions probe deeper than style preferences, revealing the functional and emotional requirements your dream home must satisfy.
            </p>
            <p className="text-gray-600 mb-6">
              We encourage clients to dream without initial constraints. What if budget weren't an issue? What if the lot could be anything? What would your perfect day at home look like from morning coffee to evening relaxation? This unconstrained exploration often reveals surprising priorities—features clients didn't know they wanted until they imagined living without limitations. Later, we'll align dreams with reality, but first we must understand what your heart truly desires.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-8">
              <h3 className="text-xl font-bold text-purple-800 mb-3 flex items-center gap-2">
                <Sparkles className="w-6 h-6" />
                Dream Home Discovery Questions
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-purple-900 mb-2">Lifestyle Questions</h4>
                  <ul className="space-y-1 text-purple-900">
                    <li>• How does your family spend weekends?</li>
                    <li>• What hobbies need dedicated space?</li>
                    <li>• How often do you entertain?</li>
                    <li>• What's your ideal morning routine?</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-purple-900 mb-2">Emotional Questions</h4>
                  <ul className="space-y-1 text-purple-900">
                    <li>• What feeling should home evoke?</li>
                    <li>• What spaces bring you peace?</li>
                    <li>• What design elements inspire you?</li>
                    <li>• What would make home perfect?</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Translating Vision to Design
            </h2>
            <p className="text-gray-600 mb-6">
              Once we understand your dream, skilled architects translate vision into buildable plans. This process involves multiple iterations, each refining concepts based on your feedback. Initial sketches establish spatial relationships and flow. Floor plans develop room sizes, adjacencies, and circulation. Elevations reveal exterior character. 3D renderings let you virtually walk through spaces before construction begins.
            </p>
            <p className="text-gray-600 mb-6">
              Good design balances competing priorities. The open floor plan you love might conflict with the quiet home office you need. The dramatic two-story great room might challenge your budget. The architectural style you've always admired might not suit Tampa's climate or your lot's orientation. Architects navigate these tensions, finding creative solutions that honor your vision while addressing practical realities.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Site Selection and Analysis
            </h2>
            <p className="text-gray-600 mb-6">
              Your dream home needs the right setting. If you haven't yet purchased land, we can help evaluate potential sites for your vision—considering lot size and shape, orientation for light and views, zoning restrictions, utility access, neighborhood character, and future development potential. Sometimes dream homes require specific site characteristics; other times, design adapts beautifully to available properties.
            </p>
            <p className="text-gray-600 mb-6">
              Existing lot ownership shapes design differently. We analyze what your property offers and constrains: setbacks and buildable area, views worth capturing, privacy concerns with neighbors, drainage patterns, existing trees worth preserving, and any deed restrictions. Your dream home design responds to these specific conditions, creating a residence that belongs on its particular site rather than a generic plan awkwardly placed.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The Design Process
            </h2>
            <p className="text-gray-600 mb-6">
              Custom home design unfolds through distinct phases. Schematic design establishes overall concept, size, and character. Design development refines every aspect—window placements, ceiling heights, material concepts. Construction documents provide the detailed instructions builders need. Throughout, your input shapes decisions while our expertise guides options.
            </p>
            <p className="text-gray-600 mb-6">
              Interior design integrates with architectural design. Kitchen layouts, bathroom configurations, closet systems, built-in furniture, and finish selections all require decisions that affect construction. We coordinate these elements so mechanical, electrical, and structural systems accommodate your specific requirements. This integration produces homes where everything works together seamlessly rather than feeling assembled from unrelated pieces.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Budget and Timeline Realities
            </h2>
            <p className="text-gray-600 mb-6">
              Dream homes must align with real-world resources. Early in our process, we establish realistic budget ranges based on your vision's scope and quality level. This prevents heartbreak later—falling in love with designs you can't afford. Instead, we design within appropriate parameters, maximizing impact within your means. Sometimes clients discover they can achieve more than expected; other times, prioritization focuses resources on what matters most.
            </p>
            <p className="text-gray-600 mb-6">
              Timeline expectations also need grounding in reality. Design development typically takes 3-6 months for custom homes. Construction ranges from 12-24+ months depending on size and complexity. Weather, material availability, and permitting timelines affect schedules. Understanding these realities from the start prevents frustration and helps you plan around construction duration.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Dream Home Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Dream Home Level</th>
                      <th className="px-6 py-4 text-left">Typical Size</th>
                      <th className="px-6 py-4 text-left">Investment Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Quality Custom Home</td>
                      <td className="px-6 py-4">2,500-3,500 sq ft</td>
                      <td className="px-6 py-4">$400,000 - $700,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Premium Custom Home</td>
                      <td className="px-6 py-4">3,500-5,000 sq ft</td>
                      <td className="px-6 py-4">$700,000 - $1.3M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Luxury Dream Home</td>
                      <td className="px-6 py-4">5,000-7,000 sq ft</td>
                      <td className="px-6 py-4">$1.3M - $2.5M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Ultimate Dream Estate</td>
                      <td className="px-6 py-4">7,000+ sq ft</td>
                      <td className="px-6 py-4">$2.5M - $5M+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Costs include design and construction but not land. Quality level, material selections, and site conditions significantly affect pricing. Design fees typically range from 5-10% of construction budget. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Dream Home Design Process
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Compass className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Discovery Phase</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Lifestyle assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Vision development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Priority identification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Budget establishment</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <PenTool className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Design Phase</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Schematic concepts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Floor plan development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>3D visualization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Material selections</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <ClipboardList className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Documentation Phase</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Construction drawings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Engineering coordination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Permit applications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Specification writing</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Construction Phase</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Quality construction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Regular progress updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Selection assistance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Move-in preparation</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa Bay Dream Home Opportunities
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay offers diverse settings for dream homes. Waterfront properties along Tampa Bay and Gulf beaches provide extraordinary views and direct water access. Established neighborhoods like South Tampa offer mature landscaping and convenient locations. Newer areas like Wesley Chapel and Lithia provide larger lots at lower costs. Golf course communities offer borrowed views and recreational amenities. We help you identify locations that match your dream home vision.
            </p>
            <p className="text-gray-600 mb-6">
              Climate considerations shape Tampa dream homes. Indoor-outdoor living, hurricane resistance, and cooling efficiency require different approaches than northern homes. Local architecture traditions—Mediterranean, tropical modern, coastal—respond to these conditions while creating regional character. Your dream home should embrace Tampa Bay's unique qualities rather than fighting them.
            </p>

            {/* FAQ Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How do I start if I don't know exactly what I want?
                  </h3>
                  <p className="text-gray-600">
                    That's actually ideal—starting with uncertainty means you're open to discovery. Our process helps you clarify what you want through structured exploration. We'll look at inspiration images, discuss lifestyle patterns, visit completed homes for reference, and iterate through concepts until your vision crystallizes. Many clients are surprised by what they discover they truly want when given expert guidance.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Should I hire an architect separately or use your design-build process?
                  </h3>
                  <p className="text-gray-600">
                    Design-build integration typically delivers better results at lower cost. When architects and builders work together from the start, designs incorporate constructability and cost awareness from the beginning. Separate architect engagement can work well with experienced residential architects, but designs sometimes exceed budgets or include details that complicate construction. We're happy to work either way but generally recommend integrated design-build.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What if my spouse and I have different visions?
                  </h3>
                  <p className="text-gray-600">
                    This is incredibly common—and resolvable. Different visions often reflect different priorities rather than incompatible tastes. One partner prioritizes kitchen function while another focuses on outdoor entertaining. One prefers traditional aesthetics while another leans contemporary. Good design synthesizes these perspectives into homes that satisfy both partners. Our process includes techniques for identifying common ground and resolving differences constructively.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How involved will I need to be during design and construction?
                  </h3>
                  <p className="text-gray-600">
                    Design phases require meaningful involvement—your input shapes the home you'll live in. Expect several meetings during design development and numerous decisions about materials and finishes. During construction, involvement can be tailored to your preferences: some clients visit weekly, others monthly. We require participation at key milestones but can manage many details independently if you prefer.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Can I make changes during construction?
                  </h3>
                  <p className="text-gray-600">
                    Yes, though changes become more expensive and disruptive as construction progresses. Early-stage changes cost little; later changes may require demolition and reconstruction. We build thorough decision processes into design phases specifically to minimize construction-phase changes. When changes do occur, we provide clear cost and schedule impacts before proceeding. Our goal is getting design right before construction, not managing changes afterward.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Make Your Dream Home Real
            </h2>
            <p className="text-gray-600 mb-6">
              Your dream home doesn't have to remain a dream. Florida Construction Specialists has helped hundreds of Tampa Bay families transform visions into addresses—homes perfectly tailored to how they live, what they love, and who they are. Whether your dream is a cozy cottage or a grand estate, we have the expertise to make it real.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us to begin your dream home journey. The first conversation costs nothing but may change everything.
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
            Ready to Design Your Dream Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to begin your custom home design journey in Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Start Your Journey
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
