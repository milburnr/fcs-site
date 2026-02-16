import type { Metadata } from "next";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { InternalLinks } from "@/components/InternalLinks";
import { HighLevelForm } from "@/components/HighLevelForm";
import { BUSINESS_INFO } from "@/lib/constants";
import Link from "next/link";
import { Phone, Flame, Shield, Building2, Wind, Sparkles, Home, AlertTriangle, CheckCircle, Clock, FileText, Hammer, Users, Award, Droplets, Thermometer } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/insurance/fire-restoration/' },
  title: "Fire Restoration Tampa | Commercial & Residential Fire Damage Repair | FCS",
  description: "Fire damage restoration Tampa: structural repairs, smoke remediation, odor removal. Commercial and residential recovery. 40+ years. Call now.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Insurance", href: "/insurance/" },
  { name: "Fire Restoration", href: "/insurance/fire-restoration/" },
];

const faqs = [
  {
    question: "What should I do immediately after a fire?",
    answer: "Safety first: Wait for fire department clearance before entering. Don't touch or move anything until the fire investigator completes their work if arson is suspected. Once cleared: 1) Document everything with photos and video before any cleanup, 2) Notify your insurance company to open a claim, 3) DON'T attempt cleaning—improper soot removal permanently sets stains and drives particles deeper, 4) Secure the property from weather with tarps/board-up if needed, 5) Contact FCS for professional assessment. Time matters—soot becomes harder to remove and more corrosive with each passing day.",
  },
  {
    question: "What types of fire damage do you restore?",
    answer: "We handle all fire damage: structural damage requiring demolition and reconstruction, smoke and soot infiltration throughout the building, water damage from firefighting efforts, content restoration for salvageable personal property, electrical and HVAC system replacement, odor elimination from smoke permeation, and complete rebuilding when total loss occurs. We serve residential fires, commercial/industrial fires, kitchen fires, electrical fires, and large structure fires.",
  },
  {
    question: "How long does fire restoration take?",
    answer: "Timeline depends on severity and scope: Minor fires (kitchen, single room): 2-6 weeks including repairs. Moderate fires (multiple rooms, smoke throughout): 2-4 months. Severe structural fires: 4-8 months. Total loss/rebuild: 8-12+ months. We provide detailed phase timelines during assessment and update you throughout. Commercial properties often benefit from phased approaches that allow partial occupancy during restoration.",
  },
  {
    question: "What's the difference between smoke damage types?",
    answer: "Different fires create different types of soot: Protein residue (kitchen fires): Virtually invisible but produces strong odors; requires specialized cleaning. Dry smoke (fast-burning, high-temperature fires): Powdery residue, easier to clean. Wet smoke (slow-burning, low-temperature fires): Sticky, thick, smeared residue that's difficult to clean. Fuel oil soot: From furnace puff-backs; requires different chemistry. We identify the smoke type and apply appropriate restoration techniques—wrong methods can set stains permanently.",
  },
  {
    question: "Does insurance cover fire damage restoration?",
    answer: "Yes—fire damage is a standard covered peril on virtually all property policies (homeowner's and commercial). Coverage typically includes: dwelling/structure repair or replacement, contents cleaning or replacement at ACV or replacement cost depending on policy, additional living expenses (ALE) or business interruption, debris removal, and code upgrade requirements. We document damage thoroughly and prepare Xactimate estimates that align with policy coverage. For disputed claims, we coordinate with public adjusters when needed.",
  },
  {
    question: "Can fire-damaged items be saved?",
    answer: "Many items can be professionally restored: Hard surfaces (furniture, appliances, countertops) often clean well. Soft goods (some textiles, upholstery) may be restorable depending on smoke type and exposure. Electronics can sometimes be restored with ultrasonic cleaning. Documents and photographs can be freeze-dried and restored. Art and antiques require specialized conservators. The key is rapid assessment—soot becomes corrosive and more difficult to remove over time. We evaluate all contents and provide honest recommendations on restoration vs. replacement based on feasibility and cost-effectiveness.",
  },
  {
    question: "How do you eliminate smoke odor?",
    answer: "We use multiple professional deodorization techniques: Thermal fogging—heated deodorizer penetrates the same paths smoke took. Hydroxyl generators—safe for occupied spaces, breaks down odor molecules. Ozone treatment—powerful oxidizer for unoccupied structures. Sealants—encapsulate residual odors in structural materials. Air scrubbing—HEPA filtration removes particles. We don't mask odors—we eliminate them at the molecular level through comprehensive treatment protocols. Complete odor elimination often requires sealing affected framing and structural materials before reconstruction.",
  },
  {
    question: "Why is water damage also a concern after a fire?",
    answer: "Firefighting efforts typically cause significant water damage. Fire hoses pump thousands of gallons into a structure, which flows down through floors, walls, and into areas not touched by fire. This water must be extracted and affected materials dried properly to prevent mold growth—often within 24-48 hours. We address water damage as an integrated part of fire restoration, not as an afterthought. Proper drying is documented with moisture readings to support your insurance claim.",
  },
  {
    question: "What makes FCS different from other fire restoration companies?",
    answer: "Three key differences: First, we're always the prime contractor—single-point accountability for your entire restoration, not a restoration company subcontracting reconstruction. Second, our owner's background as a licensed Executive General Adjuster means we understand insurance claims from both sides—we document properly and prepare estimates that get paid. Third, we focus on large losses ($250K+ residential, $500K+ commercial) where complexity demands experienced project management and substantial bonding capacity.",
  },
  {
    question: "Do you handle commercial fire restoration?",
    answer: "Commercial properties are our specialty. We understand business interruption concerns and can implement phased restoration approaches that allow partial occupancy during reconstruction. Our capabilities include: multi-story commercial buildings, retail centers, restaurants and hospitality, industrial and warehouse facilities, office buildings, and HOA/condominium common areas. We maintain bonding capacity for multi-million dollar commercial fire losses.",
  },
  {
    question: "What credentials do you have for fire restoration?",
    answer: "FCS holds Florida Certified Building Contractor license CBC1262722 with full commercial and residential authority. Frank Bragano is a licensed Executive General Adjuster with insurance industry experience (Allstate 1982-1989). We maintain IICRC-certified protocols for smoke and soot removal. Our estimators are Xactimate-certified. We carry appropriate liability insurance and maintain $5M+ bonding capacity for large projects.",
  },
  {
    question: "Should I use my insurance company's preferred contractor?",
    answer: "You have the legal right to choose your own contractor—you're not required to use your carrier's preferred vendor. Insurance company preferred contractors may prioritize the carrier's interests (cost containment) over yours (thorough restoration). FCS represents YOUR interests: complete documentation, full-scope estimates, and quality restoration. We work professionally with all carriers while ensuring you receive fair treatment.",
  },
];

const services = [
  { icon: Flame, title: "Structural Fire Restoration", description: "Complete structural assessment, demolition of damaged materials, framing repair, and full reconstruction to pre-loss condition." },
  { icon: Wind, title: "Smoke & Soot Removal", description: "Professional cleaning of all surfaces using appropriate methods for each smoke type. Includes hidden areas and HVAC systems." },
  { icon: Sparkles, title: "Odor Elimination", description: "Multi-treatment deodorization: thermal fogging, hydroxyl generators, ozone, sealants, and air scrubbing for complete odor removal." },
  { icon: Home, title: "Content Restoration", description: "On-site and off-site content cleaning, pack-out services, inventory documentation, and storage coordination." },
  { icon: Droplets, title: "Water Damage Mitigation", description: "Extraction and drying of firefighting water damage—critical for mold prevention within 24-48 hours." },
];

const processSteps = [
  { step: "1", title: "storm response", description: "Property securing, board-up, tarping. Begin water extraction if needed." },
  { step: "2", title: "Assessment & Documentation", description: "Complete damage evaluation, photo/video documentation, scope development." },
  { step: "3", title: "Insurance Coordination", description: "Claim filing support, Xactimate estimates, adjuster meetings." },
  { step: "4", title: "Content Handling", description: "Inventory, pack-out, content cleaning, or disposal as appropriate." },
  { step: "5", title: "Smoke & Water Mitigation", description: "Professional soot removal, water extraction, structural drying." },
  { step: "6", title: "Demolition", description: "Remove irreparable materials, prep for reconstruction." },
  { step: "7", title: "Deodorization", description: "Multi-phase odor elimination before sealing and rebuilding." },
  { step: "8", title: "Reconstruction", description: "Structural repairs, systems, finishes, final inspection." },
];

const relatedLinks = [
  { href: "/insurance/", label: "Insurance Services Overview" },
  { href: "/insurance/water-restoration/", label: "Water Restoration" },
  { href: "/insurance/hurricane-restoration/", label: "Hurricane Restoration" },
  { href: "/insurance/mold-remediation/", label: "Mold Remediation" },
  { href: "/insurance/certified-estimating/", label: "Certified Estimating" },
  { href: "/insurance/appraisal-arbitration/", label: "Appraisal & Arbitration" },
];

export default function FireRestorationPage() {
  return (
    <>
      <LocalBusinessSchema service="Fire Restoration" />
      <ServiceSchema
        serviceName="Fire Damage Restoration Services"
        serviceDescription="Complete fire damage restoration for Tampa Bay commercial and residential properties. Structural repair, smoke remediation, content restoration, and full reconstruction. Licensed CBC with 40+ years experience."
        minPrice="25000"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section with Enhanced Gradient */}
      <section className="relative text-white py-24 md:py-32 min-h-[500px] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-orange-900/80 to-gray-900" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/30 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb items={breadcrumbItems} className="mb-8 text-gray-300" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/50 px-4 py-2 rounded-full mb-6">
              <Flame className="w-5 h-5 text-orange-400" />
              <span className="text-orange-200 font-medium">Large Loss Specialists Since 1982</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Fire Damage Restoration
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Fire devastates in minutes. Rebuilding takes expertise. FCS provides complete fire restoration—
              from board-up through full reconstruction—with the insurance knowledge to ensure 
              your claim covers proper repair.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-gray-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                <Phone className="w-5 h-5" />
                urgent: {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact/" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 border border-white/30">
                Request Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-green-dark">40+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-green-dark">$5M+</div>
              <div className="text-gray-600 text-sm">Bonding Capacity</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-green-dark">100%</div>
              <div className="text-gray-600 text-sm">Prime Contractor</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-green-dark">CBC</div>
              <div className="text-gray-600 text-sm">Licensed & Insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Action Alert */}
      <section className="py-8 bg-red-50 border-b border-red-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <AlertTriangle className="w-10 h-10 text-red-600 flex-shrink-0" />
            <div>
              <p className="font-bold text-red-800">Don't attempt to clean fire damage yourself.</p>
              <p className="text-red-700">Improper cleaning permanently sets soot stains and drives particles deeper into materials. Professional restoration is essential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Fire Restoration Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From storm response to final reconstruction—we handle every phase of fire damage restoration.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FCS Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose FCS for Fire Restoration
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                After a fire, you're facing simultaneous challenges: dealing with your insurance company, 
                navigating a complex restoration process, and trying to return to normalcy. You need a 
                contractor who handles all of it expertly.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Insurance Industry Expertise</h3>
                    <p className="text-gray-600">
                      Frank Bragano is a licensed Executive General Adjuster with experience at Allstate. 
                      We understand how insurance companies evaluate claims—and document yours accordingly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Complete Restoration Capability</h3>
                    <p className="text-gray-600">
                      Unlike restoration companies that subcontract reconstruction, we're a licensed 
                      general contractor handling the entire project—from storm response through 
                      final construction and certificate of occupancy.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Hammer className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Large Loss Focus</h3>
                    <p className="text-gray-600">
                      We specialize in substantial fire losses—$250K+ residential, $500K+ commercial. 
                      These complex projects require experienced project management, proper documentation, 
                      and the bonding capacity to carry large receivables.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Your Advocate, Not the Carrier's</h3>
                    <p className="text-gray-600">
                      We represent YOUR interests. Our goal is complete, proper restoration—not 
                      cutting corners to satisfy insurance company cost containment. When needed, 
                      we work with VIP Public Adjusters for policyholder representation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-8">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Restoration Process</h3>
                <div className="space-y-3">
                  {processSteps.map((item, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                        <p className="text-xs text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Understanding Fire Damage Restoration</h2>
            <p>
              Fire damage restoration is one of the most complex types of property restoration. A fire doesn't 
              just burn—it creates multiple, interacting types of damage that must all be addressed for 
              successful restoration:
            </p>
            <ul>
              <li><strong>Structural damage</strong> from the fire itself—burned framing, compromised load paths, heat-weakened materials</li>
              <li><strong>Smoke damage</strong> throughout the building—often in areas untouched by fire</li>
              <li><strong>Water damage</strong> from firefighting efforts—sometimes more extensive than fire damage</li>
              <li><strong>Secondary damage</strong> including mold if water isn't dried quickly</li>
              <li><strong>Content damage</strong> requiring cleaning, restoration, or replacement</li>
              <li><strong>System damage</strong> to electrical, HVAC, and plumbing that may not be visible</li>
            </ul>

            <h3>Why Smoke Damage Is So Challenging</h3>
            <p>
              Smoke doesn't stop at the room where the fire occurred. Pressure differentials during a fire 
              push smoke through every opening—into walls, HVAC ducts, attics, and adjacent spaces. This is 
              why you can have extensive smoke damage in areas with no visible fire or heat damage.
            </p>
            <p>
              Different fires create different types of soot requiring different cleaning methods:
            </p>
            <ul>
              <li><strong>Protein residue</strong> from kitchen fires is nearly invisible but produces intense odors</li>
              <li><strong>Dry smoke</strong> from fast, hot fires leaves powdery residue that's relatively easy to clean</li>
              <li><strong>Wet smoke</strong> from slow, smoldering fires leaves thick, sticky residue that smears when cleaned improperly</li>
              <li><strong>Fuel oil soot</strong> from furnace puff-backs requires different chemistry than fire soot</li>
            </ul>
            <p>
              Using the wrong cleaning method can permanently set stains and drive particles deeper into 
              materials. This is why professional assessment BEFORE any cleaning is essential.
            </p>

            <h3>The Insurance Claim Challenge</h3>
            <p>
              Fire claims are typically large and complex, attracting significant scrutiny from insurance 
              carriers. Common challenges include:
            </p>
            <ul>
              <li>Disputes over what's actually fire-damaged vs. pre-existing condition</li>
              <li>Disagreements on repair vs. replace decisions</li>
              <li>Code upgrade coverage questions</li>
              <li>Content valuation disputes</li>
              <li>Smoke damage extent and cleaning costs</li>
              <li>Matching material availability</li>
            </ul>
            <p>
              Our documentation—detailed photos, moisture readings, Xactimate estimates with industry-standard 
              line items—provides the evidence base for fair claim resolution. When claims are disputed, 
              we have the expertise to support supplemental claims and, if necessary, the appraisal process.
            </p>

            <h3>Commercial Fire Restoration</h3>
            <p>
              Commercial fires present unique challenges beyond the restoration itself:
            </p>
            <ul>
              <li><strong>Business interruption:</strong> Every day closed is lost revenue</li>
              <li><strong>Tenant concerns:</strong> Multi-tenant buildings need coordination</li>
              <li><strong>Code requirements:</strong> Commercial rebuilds often trigger upgrades</li>
              <li><strong>ADA compliance:</strong> Substantial renovations may require accessibility upgrades</li>
              <li><strong>Specialty systems:</strong> Commercial kitchens, computer rooms, manufacturing equipment</li>
            </ul>
            <p>
              FCS has the project management expertise and construction capability to handle complex 
              commercial fire losses. We can implement phased restoration approaches that allow partial 
              occupancy during reconstruction, minimizing business interruption while ensuring quality restoration.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-green-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Fire Damage? Time Is Critical.</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Soot becomes more corrosive and harder to remove with each passing day. 
            Contact FCS now for professional assessment and restoration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-gray-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg">
              <Phone className="w-5 h-5" />
              Call {BUSINESS_INFO.phone}
            </a>
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 border border-white/30">
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <HighLevelForm variant="commercial" />
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <InternalLinks title="Related Services" links={relatedLinks} />
        </div>
      </section>
    </>
  );
}
