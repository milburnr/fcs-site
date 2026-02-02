import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Accessibility, Home, Heart, ArrowUpDown } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { FAQWithSchema } from "@/components/FAQ";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Custom Home Accessibility Features in Tampa | Universal Design",
  description: "Build an accessible custom home in Tampa with universal design features. Elevator-ready, wide doorways, accessible bathrooms, and aging-in-place planning from $400K-$2M+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Custom Home Accessibility Features in Tampa", href: "/custom-home-accessibility-features-in-tampa/" },
];

const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/tampas-custom-family-home-builders/", label: "Family Home Builders" },
  { href: "/tampa-luxury-custom-home-building-services/", label: "Luxury Custom Homes" },
  { href: "/tampa-custom-homes-with-luxury-bathrooms/", label: "Luxury Bathrooms" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const faqs = [
  {
    question: "Will accessibility features make my home look institutional?",
    answer: "Absolutely not. Universal design features are inherently attractive and increasingly popular regardless of accessibility needs. Curbless showers are a luxury trend. Wide doorways feel generous. Lever handles are contemporary styling. Designer grab bars double as towel bars. First-floor master suites are highly desirable. When designed thoughtfully, accessibility features enhance rather than detract from luxury aesthetics.",
  },
  {
    question: "How much do accessibility features add to construction costs?",
    answer: "Basic accessibility provisions—wider doors, blocking for grab bars, elevator shaft rough-in—typically add 1-3% to construction costs. More comprehensive features like installed elevators, fully accessible kitchens, and extensive single-level living add 5-10%. Compare this to retrofit costs of 20-40% premium for the same features after construction. The investment is particularly worthwhile given resale appeal to the growing 55+ buyer demographic.",
  },
  {
    question: "What if I don't need accessibility features now?",
    answer: "Planning for accessibility doesn't mean installing everything immediately. We focus on \"future-proofing\"—installing infrastructure that preserves options. Elevator shaft provisions cost minimally during construction but save tens of thousands if ever needed. Grab bar blocking is invisible until bars are installed. Wider doorways require no explanation. These provisions cost little now and protect your future flexibility dramatically.",
  },
  {
    question: "Can accessibility features help with resale value?",
    answer: "Yes—significantly. Baby Boomers represent the largest home-buying demographic for luxury properties, and accessibility features appeal strongly to this age group. First-floor master suites, elevator-ready construction, and accessible bathrooms are increasingly expected in luxury homes. Universal design features expand your buyer pool to include those with current accessibility needs or aging-in-place priorities.",
  },
  {
    question: "What types of residential elevators are available?",
    answer: "Three main types serve residential applications: hydraulic elevators offer smooth rides and larger capacities but require machine rooms; traction elevators use cables and counterweights with smaller footprints; pneumatic (vacuum) elevators require no shaft construction and operate through transparent tubes. Costs range from $35,000 for basic models to $100,000+ for premium installations. We help clients select appropriate types based on space, capacity, and aesthetic requirements.",
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
            alt="Accessible custom home construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Custom Home Accessibility Features in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Build a home that adapts to life's changes with universal design principles. Elevator-ready construction, accessible bathrooms, wide passages, and aging-in-place features that enhance livability for everyone.
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
              The best time to plan for accessibility is during initial construction—when accommodations cost a fraction of retrofit pricing and can be integrated invisibly into beautiful design. Florida Construction Specialists incorporates universal design principles throughout Tampa Bay custom homes, creating spaces that work beautifully for family members of all ages and abilities while maintaining the luxury aesthetics our clients expect. Whether you're planning for aging parents, family members with mobility challenges, or simply want a home that adapts gracefully to life's changes, accessibility features enhance livability for everyone.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Universal Design Philosophy
            </h2>
            <p className="text-gray-600 mb-6">
              Universal design creates environments usable by all people without need for adaptation or specialized design. Unlike clinical accessibility modifications, universal design features are inherently attractive and functional for everyone. A curbless shower isn't just wheelchair accessible—it's easier for young children, safer for anyone, and aesthetically contemporary. A first-floor master suite isn't just for aging in place—it offers convenient single-level living for anyone who prefers it.
            </p>
            <p className="text-gray-600 mb-6">
              This approach adds minimal cost during construction while dramatically increasing adaptability throughout your home's lifetime. Features that would cost $50,000-100,000 to retrofit—elevator shafts, reinforced walls, widened doorways—can be incorporated during initial construction for a fraction of that investment. We help clients identify which features make sense now and which to prepare for future implementation.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                <Accessibility className="w-6 h-6" />
                Universal Design Standards
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Passage Widths</h4>
                  <ul className="space-y-1 text-blue-900">
                    <li>• Doorways: 36" minimum (vs 32" standard)</li>
                    <li>• Hallways: 42-48" width</li>
                    <li>• Turn spaces: 60" diameter circles</li>
                    <li>• Exterior doors: 36-42" clear</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Vertical Access</h4>
                  <ul className="space-y-1 text-blue-900">
                    <li>• Elevator shaft provisions: 5'×6' minimum</li>
                    <li>• Ramp slopes: 1:12 maximum rise</li>
                    <li>• Stair width: 42-48" recommended</li>
                    <li>• Handrails: Both sides, continuous</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Single-Level Living Options
            </h2>
            <p className="text-gray-600 mb-6">
              The most fundamental accessibility feature is eliminating the need for stairs in daily living. We design first-floor master suites that include full-sized bedrooms, accessible bathrooms, and convenient closet access—allowing complete living without climbing stairs. Guest bedrooms, laundry, and essential living spaces on the main level create self-sufficient single-floor homes within larger multi-story residences.
            </p>
            <p className="text-gray-600 mb-6">
              For families with multi-generational needs, we create distinct living zones that provide privacy while remaining accessible. In-law suites with separate entries, kitchenettes, and private outdoor spaces give aging parents independence within your household. These suites can also serve as guest quarters or rental units when not needed for family, providing flexibility as circumstances change.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Elevator and Lift Provisions
            </h2>
            <p className="text-gray-600 mb-6">
              Installing an elevator during construction costs significantly less than retrofitting—and constructing the shaft without the elevator costs almost nothing while preserving the option. We routinely include elevator shaft provisions in multi-story custom homes: a stacked closet footprint (typically 5' × 6') with reinforced floors, electrical rough-in, and sump provisions. When elevator installation becomes necessary, the shaft is ready without demolition or structural modification.
            </p>
            <p className="text-gray-600 mb-6">
              For clients wanting immediate elevator access, residential elevators have become increasingly sophisticated and attractive. Pneumatic vacuum elevators require no shaft construction, operating through transparent tubes that become architectural features. Traditional hydraulic and traction elevators offer larger capacity and can be concealed within traditional millwork. Wheelchair platform lifts provide economical alternatives where full elevators aren't necessary.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Accessible Bathroom Design
            </h2>
            <p className="text-gray-600 mb-6">
              Bathrooms present the greatest accessibility challenges and opportunities. Curbless (zero-threshold) showers eliminate trip hazards while creating sleek, contemporary aesthetics. We install shower floors with proper slope and linear drains that contain water without raised curbs. Shower areas sized at 42" × 60" or larger accommodate wheelchairs while feeling generously proportioned for any user.
            </p>
            <p className="text-gray-600 mb-6">
              Blocking installed within walls during framing allows future grab bar installation without visible modification. We typically install backing throughout shower areas, beside toilets, and at tub edges—even when clients don't want visible bars initially. When needs change, bars can be installed immediately without drywall repair or stud finding. Many clients now choose designer grab bars as standard towel bars, achieving dual function attractively.
            </p>
            <p className="text-gray-600 mb-6">
              Comfort-height toilets (17-19" seat height versus standard 15") are easier for most adults and are now considered luxury standard regardless of accessibility considerations. Vanity heights and knee clearances can accommodate seated users when specified. Non-slip flooring throughout wet areas prevents falls regardless of mobility status.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Kitchen Accessibility
            </h2>
            <p className="text-gray-600 mb-6">
              Accessible kitchens maintain full function regardless of mobility limitations. Varied counter heights create work zones appropriate for standing or seated users—lower sections allow wheelchair access while standard-height areas accommodate other tasks. Pull-out work surfaces extend counter space when needed. Knee clearances beneath sinks and cooktops allow seated approach.
            </p>
            <p className="text-gray-600 mb-6">
              Cabinet and appliance selections significantly impact accessibility. Drawers rather than base cabinets bring contents to accessible heights. Pull-down upper cabinet shelving eliminates reaching. Side-swing or French-door refrigerators are easier than bottom-freezer models. Wall ovens at accessible heights eliminate bending. Touch-control cooktops work better than knobs for users with limited dexterity.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Accessibility Feature Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Feature Category</th>
                      <th className="px-6 py-4 text-left">During Construction</th>
                      <th className="px-6 py-4 text-left">Retrofit Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Wider Doorways (36")</td>
                      <td className="px-6 py-4">$0 - minimal material difference</td>
                      <td className="px-6 py-4">$500 - $1,500 per door</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Elevator Shaft Provision</td>
                      <td className="px-6 py-4">$3,000 - $8,000</td>
                      <td className="px-6 py-4">$25,000 - $50,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Residential Elevator</td>
                      <td className="px-6 py-4">$35,000 - $75,000</td>
                      <td className="px-6 py-4">$60,000 - $120,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Curbless Shower</td>
                      <td className="px-6 py-4">$500 - $2,000 premium</td>
                      <td className="px-6 py-4">$8,000 - $20,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Grab Bar Blocking</td>
                      <td className="px-6 py-4">$200 - $500 per bathroom</td>
                      <td className="px-6 py-4">$1,000 - $3,000 per bathroom</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Construction costs are additional premiums over standard specifications. Retrofit costs include demolition, structural modification, and finishing. Elevator costs vary significantly based on type and capacity. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Comprehensive Accessibility Checklist */}
            <div className="bg-gray-50 p-8 rounded-lg my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Complete Accessibility Planning Checklist
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-4">Structural & Layout</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Single-level master suite</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Open floor plan navigation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Elevator shaft rough-in</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Accessible guest suite</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Wide hallways (42"+ minimum)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-4">Safety & Security</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Medical alert system wiring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Emergency backup power</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Visual alert systems</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Slip-resistant surfaces</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Accessible safe room</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-4">Technology & Comfort</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Voice-activated controls</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Smart home integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Automated lighting systems</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Climate zone controls</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Communication enhancements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Core Accessibility Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Home className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Entry & Circulation</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Zero-step entries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>36" minimum doorways</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Wide hallways (42-48")</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Lever door handles</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <ArrowUpDown className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Vertical Access</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Elevator shaft provisions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Residential elevator installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Stair lift accommodation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Gentle exterior ramps</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Accessibility className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Bathroom Accessibility</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Curbless/roll-in showers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Grab bar blocking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Comfort-height toilets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Wheelchair-accessible vanities</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Aging in Place</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>First-floor master suite</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>In-law suite options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Task lighting throughout</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Non-slip flooring</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Smart Technology Integration
            </h2>
            <p className="text-gray-600 mb-6">
              Modern accessibility extends beyond physical features to include smart home technology that enhances independence and safety. Voice-activated lighting, door locks, and climate controls allow hands-free operation for users with mobility limitations. Motion sensor lighting eliminates fumbling for switches in dark hallways. Automated blinds and curtains operate without reaching or lifting. Smart doorbell systems with video and two-way audio provide security without answering doors physically.
            </p>
            <p className="text-gray-600 mb-6">
              Emergency response systems integrated throughout the home provide peace of mind for aging residents and their families. Medical alert pendants interface with home automation to summon help when needed. Security systems with medical emergency features ensure rapid response. Smart medication dispensers and health monitoring devices help maintain independence while providing safety oversight.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Exterior Accessibility Planning
            </h2>
            <p className="text-gray-600 mb-6">
              Accessible outdoor living begins with thoughtful grading and entrance design. We eliminate or minimize steps wherever possible, using gentle slopes and attractive landscaping to create barrier-free access. Where elevation changes are necessary, we design graceful ramps with proper slopes (maximum 1:12 rise) and integrated handrails that appear as architectural details rather than medical equipment.
            </p>
            <p className="text-gray-600 mb-6">
              Driveway design considers wheelchair and walker access from vehicles to entrances. Covered drop-off areas protect against weather during vehicle transfers. Accessible parking spaces with proper width and slopes ensure safe vehicle access. Path lighting and non-slip surfaces throughout outdoor areas prevent falls and provide confidence for evening use.
            </p>
            <p className="text-gray-600 mb-6">
              Pool and spa areas can incorporate accessibility through zero-entry designs, transfer walls, and pool lifts. These features benefit elderly users and children while maintaining aesthetic appeal. Accessible outdoor kitchens and entertaining areas ensure full participation in Florida's outdoor lifestyle regardless of mobility limitations.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Future-Proofing Strategies
            </h2>
            <p className="text-gray-600 mb-6">
              The most cost-effective accessibility approach involves planning for future needs during initial construction while installing only features needed immediately. This "future-proofing" strategy provides maximum flexibility at minimum cost. Structural preparations done during construction cost significantly less than retrofitting while preserving all future options.
            </p>
            <p className="text-gray-600 mb-6">
              Electrical rough-in for future motorized equipment—stair lifts, ceiling tracks, automated doors—costs minimal during construction but saves thousands in retrofit situations. HVAC provisions for medical equipment, specialized ventilation, or temperature controls prepare for potential health needs. Plumbing stub-outs for future accessible bathroom modifications eliminate demolition when changes become necessary.
            </p>
            <p className="text-gray-600 mb-6">
              Communication infrastructure supports current and future assistive technology. Robust internet throughout the home enables telehealth appointments, remote monitoring, and smart device connectivity. Backup power provisions ensure accessibility equipment continues operating during outages. These invisible preparations protect your investment while maintaining design flexibility.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <h3 className="text-xl font-bold text-green-800 mb-3">Tampa Bay Accessibility Resources</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-green-900 mb-2">Local Support Organizations</h4>
                  <p className="text-green-900 text-sm">Florida Division of Vocational Rehabilitation, Area Agency on Aging, Tampa General Hospital Rehabilitation Services, and University of South Florida Center for Independent Living provide resources and support for accessibility planning and funding assistance.</p>
                </div>
                <div>
                  <h4 className="font-bold text-green-900 mb-2">Building Code Compliance</h4>
                  <p className="text-green-900 text-sm">Florida Building Code incorporates enhanced accessibility standards beyond federal minimums. Our team stays current with evolving standards and helps clients exceed minimum requirements for improved functionality.</p>
                </div>
                <div>
                  <h4 className="font-bold text-green-900 mb-2">Insurance and Funding</h4>
                  <p className="text-green-900 text-sm">Medicare, private insurance, and veteran benefits may cover certain accessibility modifications. Tax credits are available for qualifying improvements. We help clients understand options and coordinate with healthcare providers for medical necessity documentation.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Multi-Generational Living Solutions
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay's growing multi-generational households require thoughtful accessibility planning that accommodates different age groups and abilities. We design homes with distinct but connected living zones: main family areas, accessible in-law suites, and private spaces that provide independence while maintaining family connections. These arrangements work particularly well for sandwich generation families caring for both children and aging parents.
            </p>
            <p className="text-gray-600 mb-6">
              Accessible in-law suites include private entrances, full accessibility features, and optional kitchenettes while connecting to main living areas when desired. Sound insulation between zones provides privacy without isolation. Shared outdoor spaces with accessible features encourage family interaction while respecting individual needs for space.
            </p>
            <p className="text-gray-600 mb-6">
              Guest accommodation planning considers visiting family members with accessibility needs. Ground-floor guest rooms with accessible bathrooms ensure comfortable visits for elderly relatives or family members with disabilities. These spaces can serve multiple functions—home offices, guest rooms, or caregiver quarters—as family circumstances evolve.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Sensory Accessibility Considerations
            </h2>
            <p className="text-gray-600 mb-6">
              Accessibility extends beyond mobility to include sensory considerations for family members with vision, hearing, or cognitive challenges. Lighting design becomes critical for aging eyes and low-vision users. We incorporate task lighting at work surfaces, pathway lighting for safe navigation, and natural light maximization to reduce strain and improve safety.
            </p>
            <p className="text-gray-600 mb-6">
              Acoustic design reduces background noise while enhancing speech clarity—particularly important for family members with hearing loss. Sound-absorbing materials, proper room proportions, and strategic layout minimize echo and noise transmission. Visual alert systems can supplement or replace audible alarms for fire safety and doorbell notifications.
            </p>
            <p className="text-gray-600 mb-6">
              Cognitive accessibility features include clear sight lines throughout the home, simple navigation patterns, and consistent design elements that reduce confusion. Color contrast at transitions and edges improves safety for users with visual or cognitive challenges. These thoughtful details enhance usability for everyone while specifically supporting family members with special needs.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Maintenance and Accessibility
            </h2>
            <p className="text-gray-600 mb-6">
              Accessible design must consider long-term maintenance requirements. Materials and systems should be cleanable and maintainable by users with limited mobility or by caregivers. Lower maintenance finishes reduce burden on aging homeowners while preserving home appearance. Easy-care landscaping minimizes outdoor maintenance requirements while maintaining curb appeal.
            </p>
            <p className="text-gray-600 mb-6">
              Accessible storage throughout the home ensures cleaning supplies, tools, and equipment remain within reach. Utility areas designed for wheelchair or walker access allow homeowners to maintain independence in home care activities. Service access for HVAC, plumbing, and electrical systems considers potential mobility limitations of aging homeowners.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
              <h3 className="text-xl font-bold text-amber-800 mb-3">Planning Timeline for Accessibility</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Phase 1: Design Integration (Now)</h4>
                  <p className="text-amber-900 text-sm">Incorporate structural provisions, wider passages, and universal design elements during initial construction. These have minimal cost impact when built initially but maximum future flexibility.</p>
                </div>
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Phase 2: Basic Installations (Move-In)</h4>
                  <p className="text-amber-900 text-sm">Install comfort-height toilets, lever handles, and curbless showers that benefit everyone immediately while providing accessibility foundation for future needs.</p>
                </div>
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Phase 3: Enhancement (As Needed)</h4>
                  <p className="text-amber-900 text-sm">Add grab bars, install elevators, or modify existing features when circumstances change. Previous structural provisions make these modifications simple and cost-effective.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Economic Benefits of Accessible Design
            </h2>
            <p className="text-gray-600 mb-6">
              Beyond personal benefits, accessible features provide significant economic advantages. The growing 55+ demographic represents a major segment of luxury home buyers—features that support aging in place appeal strongly to this market. Accessible design elements often double as luxury amenities: curbless showers, first-floor master suites, and wide passages are increasingly expected in high-end homes regardless of accessibility needs.
            </p>
            <p className="text-gray-600 mb-6">
              Insurance benefits may apply to certain accessibility modifications when medically necessary. Some features qualify for tax credits or deductions. More importantly, accessible design can delay or eliminate the need for assisted living arrangements—a significant long-term economic benefit for families facing care decisions.
            </p>
            <p className="text-gray-600 mb-6">
              Construction timing provides optimal economics for accessibility features. Elevator shafts during new construction cost $3,000-8,000 versus $25,000-50,000 for retrofit. Wider doorways cost nothing extra during framing versus $500-1,500 per door for retrofit. These economic realities make accessibility planning financially prudent regardless of current needs.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa Bay Climate Considerations
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's climate presents unique accessibility challenges and opportunities. Hurricane preparedness becomes more complex when family members have mobility limitations. We design safe rooms and emergency shelter areas that accommodate wheelchairs and provide accessible emergency supplies storage. Backup power systems for medical equipment and accessibility devices ensure safety during extended outages.
            </p>
            <p className="text-gray-600 mb-6">
              Heat and humidity considerations affect accessibility design. Indoor air quality becomes critical for family members with respiratory conditions. Enhanced ventilation, humidity control, and air filtration systems provide health benefits beyond basic comfort. Covered outdoor areas allow wheelchair and walker use in all weather conditions, extending usable living space year-round.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Build for All of Life's Stages
            </h2>
            <p className="text-gray-600 mb-6">
              Your custom home should serve your family through all of life's changes. Florida Construction Specialists incorporates accessibility and universal design principles that enhance livability for everyone while preparing for future needs. Whether you're planning for aging parents, family members with current accessibility needs, or simply want a home that adapts gracefully to changing circumstances, we create spaces that work beautifully for all abilities.
            </p>
            <p className="text-gray-600 mb-6">
              Our team understands that accessibility is about independence, dignity, and quality of life—not medical accommodation. Every feature we recommend enhances your home's function and beauty while ensuring it serves your family for generations. From initial consultation through final construction, we work closely with clients to identify priorities, understand options, and create homes that adapt to changing needs without compromising aesthetics or function.
            </p>
            <p className="text-gray-600 mb-6">
              Contact Florida Construction Specialists to discuss accessibility features for your Tampa Bay custom home project. We'll help you identify priorities, understand options, and create a home that serves your family for generations while maintaining the luxury standards you expect.
            </p>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema 
        items={faqs} 
        title="Frequently Asked Questions" 
        description="Common questions about custom home accessibility features in Tampa"
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
            Ready to Build an Accessible Custom Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on universal design and accessibility features in Tampa Bay.
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
