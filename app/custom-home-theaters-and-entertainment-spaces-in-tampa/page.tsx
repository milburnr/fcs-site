import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Tv, Speaker, Film, Gamepad2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Custom Home Theaters and Entertainment Spaces in Tampa",
  description: "Build the ultimate home theater in your Tampa custom home. 4K/8K projection, Dolby Atmos sound, acoustic design, and luxury seating. Theater rooms from $75K-$500K+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Custom Home Theaters and Entertainment Spaces in Tampa", href: "/custom-home-theaters-and-entertainment-spaces-in-tampa/" },
];

const internalLinks = [
  { href: "/smart-home-integration-in-tampa-custom-homes-2/", label: "Smart Home Integration" },
  { href: "/tampa-luxury-custom-home-building-services/", label: "Luxury Custom Homes" },
  { href: "/custom-home-wine-cellars-in-tampa/", label: "Wine Cellar Design" },
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
            alt="Custom home theater construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Custom Home Theaters and Entertainment Spaces in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Experience cinema-quality entertainment at home. 4K/8K laser projection, immersive Dolby Atmos audio, acoustic engineering, and luxury theater seating—all designed for Tampa Bay's most discerning entertainment enthusiasts.
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
              A dedicated home theater elevates movie nights, sports viewing, and gaming into immersive experiences that rival—or exceed—commercial cinemas. Florida Construction Specialists creates custom entertainment spaces throughout Tampa Bay that combine technical excellence with architectural sophistication. From intimate media rooms in Carrollwood homes to full-scale screening rooms in Avila estates, we build theaters that deliver cinema-quality performance in the comfort of your home.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Dedicated Theaters vs. Media Rooms
            </h2>
            <p className="text-gray-600 mb-6">
              Understanding the distinction helps determine the right approach for your lifestyle. Dedicated home theaters are purpose-built rooms optimized exclusively for viewing—complete light control, specialized acoustics, tiered seating, and equipment configured for maximum impact. Media rooms serve multiple purposes, combining entertainment viewing with casual living, gaming, and social activities in flexible, comfortable environments.
            </p>
            <p className="text-gray-600 mb-6">
              Many Tampa luxury homes include both: a formal dedicated theater for serious movie viewing and a more casual media room for everyday entertainment. Dedicated theaters typically occupy 300-600 square feet, while media rooms can be smaller or integrated into larger great rooms. Budget, available space, and usage patterns guide the appropriate approach for each family.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-8">
              <h3 className="text-xl font-bold text-purple-800 mb-3 flex items-center gap-2">
                <Film className="w-6 h-6" />
                Theater Room Specifications
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-purple-900 mb-2">Size Guidelines</h4>
                  <ul className="space-y-1 text-purple-900">
                    <li>• Intimate (4-6 seats): 250-350 sq ft</li>
                    <li>• Standard (8-12 seats): 400-550 sq ft</li>
                    <li>• Premium (12-20 seats): 600-900 sq ft</li>
                    <li>• Screening room (20+): 1,000+ sq ft</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-purple-900 mb-2">Ceiling Heights</h4>
                  <ul className="space-y-1 text-purple-900">
                    <li>• Minimum: 9 feet (10'+ preferred)</li>
                    <li>• Tiered seating: 10-12 feet needed</li>
                    <li>• Projection clearance: 8'+ to screen</li>
                    <li>• Atmos speakers: 9'+ for overhead</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Display Technology Options
            </h2>
            <p className="text-gray-600 mb-6">
              Projection remains the gold standard for dedicated theaters, offering screen sizes impossible with flat panels. Modern 4K laser projectors from Sony, JVC, and Barco deliver exceptional brightness, contrast, and color accuracy—performing beautifully even in rooms with some ambient light. Screen sizes of 120-180 inches create truly cinematic experiences, with acoustically transparent screens allowing speakers to mount directly behind for optimal sound staging.
            </p>
            <p className="text-gray-600 mb-6">
              For media rooms where ambient light is unavoidable, premium flat panels from Samsung, LG, and Sony offer stunning performance. OLED technology provides perfect blacks and infinite contrast. The newest 98-inch and larger panels approach projection territory while requiring less installation complexity. Some clients combine both: projection for serious viewing with supplemental flat panels for casual content or gaming.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Immersive Audio Systems
            </h2>
            <p className="text-gray-600 mb-6">
              Audio quality separates good home theaters from great ones. Dolby Atmos and DTS:X object-based audio create three-dimensional soundscapes with sound elements precisely positioned throughout the room—including overhead. We design speaker layouts for these immersive formats, with height speakers in ceiling or high on walls creating the overhead sound field that brings movie soundtracks to life.
            </p>
            <p className="text-gray-600 mb-6">
              Speaker selection ranges from high-performance in-wall and in-ceiling models that disappear into architecture to freestanding towers that make aesthetic statements. Premium brands like Bowers & Wilkins, Focal, Paradigm, and Triad deliver reference-quality sound. Subwoofers—often multiple units for even bass distribution—provide the low-frequency impact essential for action movies and music. Properly calibrated systems reveal details you've never heard in familiar content.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Acoustic Design and Treatment
            </h2>
            <p className="text-gray-600 mb-6">
              Even the finest equipment performs poorly in acoustically untreated rooms. We engineer theater spaces for optimal sound, beginning with room dimensions that avoid problematic resonances. Absorptive panels control reflections and echo, while diffusion elements break up flutter echo and create natural sound fields. Bass traps in corners manage low-frequency buildup that muddies dialogue and music.
            </p>
            <p className="text-gray-600 mb-6">
              Soundproofing isolates theaters from the rest of your home—and from Tampa's external noise. Decoupled wall and ceiling construction, specialized insulation, solid-core doors with acoustic seals, and isolated HVAC prevent sound from disturbing family members or neighbors. This isolation also keeps external sounds from intruding during quiet film passages. Professional acoustic design achieves both goals invisibly within beautiful interior finishes.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Luxury Theater Seating
            </h2>
            <p className="text-gray-600 mb-6">
              Theater seating has evolved far beyond basic recliners. Premium cinema chairs from brands like Fortress, Salamander, and CinemaTech offer powered recline, heating and cooling, massage functions, and integrated cup holders and storage. Leather or performance fabric upholstery can match any interior aesthetic. Theater risers create stadium seating that ensures unobstructed views from every row.
            </p>
            <p className="text-gray-600 mb-6">
              Seating configurations depend on room size and family needs. Single rows work well for intimate theaters, while larger rooms accommodate multiple tiered rows. Some clients prefer sectional-style seating for more casual viewing with family and guests. We create scaled layouts during design to optimize sight lines and ensure comfortable spacing between seats and from screen.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Home Theater Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Theater Level</th>
                      <th className="px-6 py-4 text-left">Room Size</th>
                      <th className="px-6 py-4 text-left">Investment Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Premium Media Room</td>
                      <td className="px-6 py-4">200-350 sq ft</td>
                      <td className="px-6 py-4">$50,000 - $100,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Dedicated Home Theater</td>
                      <td className="px-6 py-4">350-500 sq ft</td>
                      <td className="px-6 py-4">$100,000 - $200,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Reference Theater</td>
                      <td className="px-6 py-4">500-750 sq ft</td>
                      <td className="px-6 py-4">$200,000 - $350,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Screening Room</td>
                      <td className="px-6 py-4">750+ sq ft</td>
                      <td className="px-6 py-4">$350,000 - $500,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Costs include room construction/finish, acoustic treatment, equipment, seating, and installation. Premium Media Room uses quality 4K projection or large panel. Dedicated Theater adds Atmos audio and theater seating. Reference includes premium projection and comprehensive acoustics. Screening Room features commercial-grade equipment. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Entertainment Space Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Tv className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Video Systems</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>4K/8K laser projection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>120-180" screen sizes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Acoustically transparent screens</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Motorized screen masking</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Speaker className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Audio Systems</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Dolby Atmos/DTS:X immersive</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Reference-quality speakers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Multiple subwoofers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Professional calibration</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Film className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Room Design</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Acoustic treatment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Soundproofing/isolation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Complete light control</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Theater-style lighting</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Gamepad2 className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Gaming/Extras</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Gaming-optimized displays</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Concession/bar areas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Popcorn machines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Themed interior design</span>
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
                    What's the minimum room size for a home theater?
                  </h3>
                  <p className="text-gray-600">
                    Dedicated theaters work well starting at about 250 square feet (for 4-6 seats), though 400+ square feet allows for stadium seating and better acoustic treatment. Ceiling height is equally important—10 feet minimum for tiered seating, 9 feet minimum otherwise. Rooms smaller than 250 square feet can still support excellent media room setups without formal theater seating.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Projection vs. large flat panel—which is better?
                  </h3>
                  <p className="text-gray-600">
                    Projection delivers larger images (120-180+ inches vs. 98" maximum panels) and creates more cinematic impact in dedicated dark rooms. Flat panels offer superior performance in rooms with ambient light, simpler installation, and better gaming performance. Many enthusiasts prefer projection for movie viewing and large panels for sports, gaming, and casual content. Budget, room conditions, and usage patterns guide the best choice.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How important is acoustic treatment?
                  </h3>
                  <p className="text-gray-600">
                    Critically important. Even $50,000 in equipment performs poorly in untreated rooms, while modest equipment in properly treated spaces sounds impressive. Acoustic treatment controls reflections that blur dialogue and imaging, manages bass response for tight and accurate low frequencies, and creates the natural soundfield that makes audio enveloping rather than fatiguing. We consider acoustics fundamental rather than optional.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Will theater sound disturb the rest of the house?
                  </h3>
                  <p className="text-gray-600">
                    Not with proper soundproofing. We construct theaters with isolated wall and ceiling assemblies that prevent sound transmission to adjacent spaces. Double-layer drywall with damping compound, decoupled framing, solid-core doors with acoustic seals, and isolated HVAC systems contain sound effectively. Family members elsewhere in the house shouldn't hear theater audio at reference volumes.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Can home theaters be integrated with whole-home automation?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely—this is standard in our installations. One-touch scenes dim lights, lower shades, power equipment, select sources, and adjust climate for viewing. When you pause or stop content, lights gradually return. Integration with distributed audio allows music throughout the home when the theater isn't in use. Remote monitoring lets you check that equipment powered down after guests used the system.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Build Your Ultimate Entertainment Space
            </h2>
            <p className="text-gray-600 mb-6">
              A custom home theater transforms how your family experiences entertainment—creating shared experiences and lasting memories in the comfort of your own home. Florida Construction Specialists combines technical expertise with architectural design to create entertainment spaces that perform beautifully and integrate seamlessly into your Tampa Bay luxury home.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us to discuss home theater possibilities for your custom home project. We'll help you envision the perfect entertainment space and develop a plan that delivers cinema-quality experiences at home.
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
            Ready to Build Your Dream Home Theater?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on custom home theater design in Tampa Bay.
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
