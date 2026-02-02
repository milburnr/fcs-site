import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Monitor, Wifi, Lock, Lightbulb } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Building Tampa Homes with Personalized Office Spaces | Home Office Design",
  description: "Design the perfect home office in your Tampa custom home. Executive suites, video conferencing studios, and productive workspaces. Custom home offices from $25K-$150K+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Building Tampa Homes with Personalized Office Spaces", href: "/building-tampa-homes-with-personalized-office-spaces/" },
];

const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/crafting-custom-home-libraries-in-tampa/", label: "Custom Libraries" },
  { href: "/smart-home-integration-in-tampa-custom-homes-2/", label: "Smart Home Integration" },
  { href: "/tampa-luxury-custom-home-building-services/", label: "Luxury Custom Homes" },
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
            alt="Custom home office construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Building Tampa Homes with Personalized Office Spaces
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Work from home in executive style. Custom office suites, video conferencing studios, dual workstations, and professional environments that rival any downtown corner office—all steps from your living room.
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
              The work-from-home revolution has transformed how Tampa Bay families think about home office space. What once meant a desk in a spare bedroom now demands professional-grade environments supporting video conferencing, client meetings, focused work, and separation between professional and personal life. Florida Construction Specialists designs and builds custom home offices that match or exceed traditional workplace quality, enabling productive remote work without sacrificing the comfort of home.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The Professional Home Office Evolution
            </h2>
            <p className="text-gray-600 mb-6">
              Remote work has evolved from temporary accommodation to permanent lifestyle for many Tampa Bay professionals. Executives conducting board meetings, attorneys holding client consultations, and entrepreneurs running growing businesses need home offices that project professionalism while supporting demanding work requirements. These aren't makeshift arrangements—they're purpose-built professional environments that happen to be located at home.
            </p>
            <p className="text-gray-600 mb-6">
              Our custom home offices range from efficient single-person suites to comprehensive work centers with reception areas, multiple workstations, and dedicated meeting spaces. We design for your specific work patterns: whether you need solitary focused time, frequent video calls, or space for employees and clients to visit. The result is a home office tailored precisely to how you work—not a generic spare room with a desk.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                <Monitor className="w-6 h-6" />
                Home Office Considerations
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Work Requirements</h4>
                  <ul className="space-y-1 text-blue-900">
                    <li>• Video conferencing frequency</li>
                    <li>• Client meeting needs</li>
                    <li>• Multi-monitor requirements</li>
                    <li>• Storage and filing needs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Environment</h4>
                  <ul className="space-y-1 text-blue-900">
                    <li>• Acoustic privacy requirements</li>
                    <li>• Natural light preferences</li>
                    <li>• Separation from household</li>
                    <li>• Outdoor access/views</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Video Conferencing Optimization
            </h2>
            <p className="text-gray-600 mb-6">
              Video calls have become the default meeting format, making on-camera appearance and audio quality critical for professional presence. We design offices with video conferencing in mind: proper background aesthetics (built-in shelving, artwork, or textured walls), camera-appropriate lighting (front-facing windows or studio-quality artificial light), and acoustic treatments that prevent echo and background noise transmission.
            </p>
            <p className="text-gray-600 mb-6">
              Technology infrastructure supports professional video quality: dedicated high-speed ethernet connections (not just Wi-Fi), proper webcam mounting positions, professional microphone integration, and lighting control systems that create flattering, consistent illumination. Some clients install studio-quality lighting and green screen backgrounds for maximum flexibility. These investments pay dividends in professional impression with every call.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Acoustic Privacy and Soundproofing
            </h2>
            <p className="text-gray-600 mb-6">
              Home offices require sound isolation that prevents household noise from interrupting work while keeping work conversations private from family. Standard interior walls provide minimal sound blocking—you need serious construction: double-layer drywall with damping compound, insulated wall cavities, solid-core doors with acoustic seals, and careful attention to penetrations that can transmit sound.
            </p>
            <p className="text-gray-600 mb-6">
              HVAC noise requires particular attention. Undersized or improperly installed systems create distracting background noise that microphones amplify. We specify quiet equipment, install duct silencers, and separate supply and return paths to minimize air handling noise. The goal is library-quiet conditions that support concentration and professional audio quality simultaneously.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Ergonomic and Comfort Design
            </h2>
            <p className="text-gray-600 mb-6">
              Long work hours demand ergonomic design that prevents fatigue and injury. We build adjustable-height desks into custom millwork, position monitors at proper heights, and ensure adequate space for ergonomic chairs. Keyboard trays, monitor arms, and footrests integrate into furniture design. Multiple work zones—standing desk, seated desk, comfortable reading chair—allow position changes throughout the day.
            </p>
            <p className="text-gray-600 mb-6">
              Climate comfort in Tampa's environment requires careful HVAC design. Dedicated thermostats let you maintain comfortable working temperatures regardless of settings elsewhere in the house. Windows provide natural light while low-E coatings and motorized shading manage heat gain. Individual comfort controls eliminate negotiations with family over thermostat settings.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Technology Infrastructure
            </h2>
            <p className="text-gray-600 mb-6">
              Professional work demands professional connectivity. We run dedicated fiber or CAT6A connections from the network core to home offices, providing gigabit speeds without the inconsistency of Wi-Fi. Multiple ethernet drops support wired connections for primary computers, VoIP phones, and any network-dependent equipment. Strong Wi-Fi coverage from enterprise-grade access points supplements wired connections for mobile devices.
            </p>
            <p className="text-gray-600 mb-6">
              Power infrastructure matches technology demands: dedicated circuits prevent overloads, whole-room surge protection safeguards equipment, and UPS systems maintain operation during brief outages. Abundant outlets—often floor boxes for island desks—eliminate extension cords. USB charging integrates into desktops and nightstands. These aren't luxuries; they're necessities for serious remote work.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Dual Office Configurations
            </h2>
            <p className="text-gray-600 mb-6">
              Many Tampa Bay households now include two remote workers, requiring separate spaces that accommodate simultaneous work. We design paired offices with individual soundproofing, separate entrances, and independent environmental control. Some clients prefer adjacent offices with shared amenities; others position offices in different areas of the house for maximum separation. Video call schedules can coordinate when sound isolation isn't complete.
            </p>
            <p className="text-gray-600 mb-6">
              Partner desks—traditional executive arrangements with two people facing across a shared surface—work for couples who prefer togetherness while working. These require careful acoustic planning to prevent interference between simultaneous calls but create collaborative environments some couples find more productive than isolation.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Home Office Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Office Type</th>
                      <th className="px-6 py-4 text-left">Size Range</th>
                      <th className="px-6 py-4 text-left">Investment Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Enhanced Home Office</td>
                      <td className="px-6 py-4">120-180 sq ft</td>
                      <td className="px-6 py-4">$25,000 - $50,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Executive Suite</td>
                      <td className="px-6 py-4">180-300 sq ft</td>
                      <td className="px-6 py-4">$50,000 - $85,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Dual Office Suite</td>
                      <td className="px-6 py-4">300-450 sq ft</td>
                      <td className="px-6 py-4">$85,000 - $125,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Professional Office Wing</td>
                      <td className="px-6 py-4">450+ sq ft</td>
                      <td className="px-6 py-4">$125,000 - $200,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Enhanced includes soundproofing, custom built-ins, and technology infrastructure. Executive adds premium finishes and comprehensive acoustic treatment. Dual Office includes two fully-equipped workspaces. Professional Wing includes reception/meeting areas. Costs are premiums for dedicated office space beyond standard room finish. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Home Office Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Monitor className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Workstation Design</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Custom built-in desks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Multi-monitor support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Sit-stand options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Integrated cable management</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Wifi className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Technology</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Dedicated ethernet/fiber</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Video conferencing setup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>UPS/surge protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Smart home integration</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Privacy</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Soundproof construction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Solid-core doors with seals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Private entry option</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Secure document storage</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Environment</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Task and ambient lighting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Video call lighting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Independent climate control</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Natural light optimization</span>
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
                    What's the minimum size for an effective home office?
                  </h3>
                  <p className="text-gray-600">
                    A functional single-person office needs at least 100 square feet—120-150 is more comfortable for executive-level work with guest seating. Dual offices need 250+ square feet for proper separation. Meeting spaces add another 100-150 square feet. Consider how you work: frequent standing? Need a second desk for spreading documents? Want a seating area for calls? These activities drive space requirements beyond minimum desk dimensions.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Where should the home office be located in the floor plan?
                  </h3>
                  <p className="text-gray-600">
                    Ideal locations balance accessibility and separation. Near the front entry allows clients or deliveries without traversing the home. Away from children's spaces reduces interruption. Natural light from north or east windows provides quality illumination without afternoon glare. Some clients prefer detached offices—above garages or in outbuildings—for maximum separation between work and home life.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How much soundproofing is really necessary?
                  </h3>
                  <p className="text-gray-600">
                    It depends on your situation. If you live alone and rarely have video calls, basic construction suffices. If children play loudly nearby and you conduct confidential client calls, comprehensive soundproofing is essential. For most professionals, moderate improvements—double drywall, insulated cavities, solid-core doors—provide adequate privacy. Studios for recording or legal/medical work may need higher specifications.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Can home office construction be deducted as a business expense?
                  </h3>
                  <p className="text-gray-600">
                    Tax treatment depends on your specific situation—consult your accountant or tax advisor. Generally, space used "regularly and exclusively" for business may qualify for home office deductions. Dedicated, separately-entered office spaces have clearer qualification than converted bedrooms. Construction costs may depreciate differently than operating expenses. Document your office's dimensions, features, and exclusive business use carefully.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What if my work-from-home situation changes?
                  </h3>
                  <p className="text-gray-600">
                    Well-designed home offices adapt to changing circumstances. An executive office can become a teenager's homework headquarters, guest suite, or music practice room. Quality built-ins and finishes maintain value regardless of use. Technology infrastructure supports entertainment as easily as work. Design for your current needs while selecting features that provide flexibility—you're building for the long term.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Create Your Perfect Workspace
            </h2>
            <p className="text-gray-600 mb-6">
              Your professional success shouldn't be limited by inadequate workspace. Florida Construction Specialists creates custom home offices throughout Tampa Bay that support demanding careers while maintaining the comfort and convenience of home. From single-person suites to comprehensive work centers, we design and build offices that meet professional standards while enhancing your daily life.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us to discuss home office design for your Tampa Bay custom home project. We'll help you create a workspace that supports your career ambitions while fitting perfectly into your home.
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
            Ready to Build Your Perfect Home Office?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on custom home office design in Tampa Bay.
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
