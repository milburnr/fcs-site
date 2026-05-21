import type { Metadata } from "next";
import Image from "next/image";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { InternalLinks } from "@/components/InternalLinks";
import { HighLevelForm } from "@/components/HighLevelForm";
import { BUSINESS_INFO } from "@/lib/constants";
import { BackToHub } from "@/components/BackToHub";
import { AuthorByline } from "@/components/AuthorByline";
import { CodeReference } from "@/components/CodeReference";
import { ProjectGallery, type GalleryPhoto } from "@/components/ProjectGallery";
import Link from "next/link";
import { Phone, Droplets, Shield, Building2, AlertTriangle, Waves, CloudRain, CheckCircle, Clock, FileText, Thermometer, Wind, Home, Award, Users } from "lucide-react";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/insurance/water-restoration/' },
  title: "Water Restoration Tampa",
  description: "Water damage restoration Tampa: flood repair, extraction, structural drying, mold prevention. Commercial and residential. 24/7 emergency. Call us.",
  openGraph: {
    title: "Water Restoration Tampa",
    description: "Water damage restoration Tampa: flood repair, extraction, structural drying, mold prevention. Commercial and residential. 24/7 emergency. Call us.",
    url: "https://floridaconstructionspecialists.com/insurance/water-restoration/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Insurance", href: "/insurance/" },
  { name: "Water Restoration", href: "/insurance/water-restoration/" },
];

const faqs = [
  {
    question: "What types of water damage do you restore?",
    answer: "We restore all categories of water damage: Category 1 (clean water from supply lines, appliances), Category 2 (gray water from dishwashers, washing machines, some HVAC), and Category 3 (black water from sewage, flooding, storm surge). Treatment protocols vary by contamination level—clean water requires extraction and drying, while contaminated water requires additional demolition, antimicrobial treatment, and specialized disposal.",
  },
  {
    question: "How quickly should water damage be addressed?",
    answer: "Immediately—every hour matters. Mold can begin colonizing within 24-48 hours of moisture exposure. Secondary damage (warping, swelling, delamination) begins within hours. Insurance companies expect prompt mitigation; delays can affect claim outcomes. We provide storm response to begin extraction and drying as quickly as possible, minimizing overall damage and restoration costs.",
  },
  {
    question: "Do you handle flood damage from hurricanes and storms?",
    answer: "Yes—storm-related flooding is a specialty. Important note: standard property insurance typically excludes flood damage. You need separate flood insurance (NFIP or private) for storm surge, rising water, or overland flooding. Wind-driven rain damage IS usually covered under standard policies. We work with both policy types and help coordinate when multiple coverages apply to the same loss.",
  },
  {
    question: "What is the water restoration process?",
    answer: "Our comprehensive process: 1) storm response and standing water extraction using truck-mounted and portable extraction equipment, 2) Moisture mapping using thermal imaging and moisture meters to identify hidden moisture, 3) Controlled demolition of irreparably damaged materials, 4) Industrial drying with dehumidifiers, air movers, and HEPA filtration, 5) Antimicrobial treatment and mold prevention, 6) Daily moisture monitoring until reaching dry standard, 7) Structural repairs and reconstruction, 8) Final testing and documentation.",
  },
  {
    question: "What equipment do you use for water damage restoration?",
    answer: "We deploy commercial-grade restoration equipment: truck-mounted water extractors for large volumes, portable extractors for access-limited areas, LGR (low-grain refrigerant) dehumidifiers, axial and centrifugal air movers for evaporation, HEPA air scrubbers for air quality, injectidry systems for wall cavity drying, hardwood floor drying systems, and thermal imaging cameras and moisture meters for monitoring. Our equipment inventory handles anything from a single-room water heater failure to multi-story commercial floods.",
  },
  {
    question: "How do you prevent mold after water damage?",
    answer: "Mold prevention is built into every restoration: rapid water extraction limits moisture exposure, industrial drying reaches proper dry standard (not just 'feels dry'), antimicrobial treatments inhibit mold growth, controlled demolition removes materials that can't be adequately dried, HEPA filtration maintains air quality, and daily moisture monitoring confirms drying progress. If mold has already established, we provide full remediation services following IICRC S520 protocols.",
  },
  {
    question: "Does insurance cover water damage?",
    answer: "Coverage depends on the water source and your policy: Sudden and accidental discharge (burst pipes, appliance failures) is typically covered. Flood damage requires separate flood insurance. Gradual leaks may be excluded if attributed to maintenance failure. Sewage backup requires specific endorsement on many policies. We document damage thoroughly to support your claim and help identify all applicable coverages.",
  },
  {
    question: "What if I discover hidden water damage during restoration?",
    answer: "Hidden damage is common—water travels through wall cavities, under flooring, and into structural components. When we discover additional damage, we: document it with photos and moisture readings, notify you and your adjuster immediately, prepare a supplemental claim with detailed scope, and continue restoration to prevent further damage while the supplement is processed. Our estimates are detailed enough that supplements are processed efficiently.",
  },
  {
    question: "Do you work with all insurance companies?",
    answer: "Yes—we work with all property insurers including national carriers, regional companies, and surplus lines. Our Xactimate estimates use industry-standard line items and pricing that adjusters recognize. We meet with adjusters on-site, respond to their questions promptly, and provide documentation in formats they prefer. Our goal is efficient claims processing so restoration isn't delayed.",
  },
  {
    question: "What areas do you serve for water restoration?",
    answer: "We serve Tampa Bay and surrounding areas including Hillsborough County (Tampa, Brandon, Plant City), Pinellas County (St. Petersburg, Clearwater), Pasco County, Manatee County (Bradenton), and Sarasota County. For large commercial losses, we deploy throughout Florida. Our focus on substantial restoration projects ($500,000+) allows us to respond quickly with full resources.",
  },
];

const services = [
  { icon: Droplets, title: "Emergency Water Extraction", description: "Truck-mounted and portable extraction equipment removes standing water quickly—before it causes secondary damage." },
  { icon: Thermometer, title: "Structural Drying", description: "Industrial dehumidifiers, air movers, and injectidry systems dry walls, floors, and structural components to dry standard." },
  { icon: Waves, title: "Flood Restoration", description: "Complete flood damage restoration including Category 3 (black water) contamination remediation and reconstruction." },
  { icon: CloudRain, title: "Storm Water Damage", description: "Restoration from hurricane flooding, roof leaks, wind-driven rain intrusion, and storm surge damage." },
  { icon: AlertTriangle, title: "Mold Prevention", description: "Antimicrobial treatment, controlled demolition, and proper drying protocols prevent mold colonization." },
  { icon: Shield, title: "Insurance Coordination", description: "Xactimate estimates, adjuster meetings, supplemental claims, and documentation for fair settlements." },
];

const waterCategories = [
  { 
    category: "Category 1", 
    name: "Clean Water", 
    source: "Supply lines, appliances, rainwater", 
    treatment: "Extraction and drying; contents usually salvageable",
    color: "bg-blue-100 text-blue-800"
  },
  { 
    category: "Category 2", 
    name: "Gray Water", 
    source: "Dishwashers, washing machines, some HVAC", 
    treatment: "Extraction, antimicrobial treatment, selective demolition",
    color: "bg-yellow-100 text-yellow-800"
  },
  { 
    category: "Category 3", 
    name: "Black Water", 
    source: "Sewage, flooding, storm surge", 
    treatment: "Full demolition below flood line, remediation, reconstruction",
    color: "bg-red-100 text-red-800"
  },
];

const processSteps = [
  { step: "2", title: "Moisture Assessment", description: "Thermal imaging and moisture meters identify hidden moisture in walls, floors, ceilings." },
  { step: "3", title: "Controlled Demolition", description: "Remove irreparably damaged materials—wet drywall, saturated insulation, failed flooring." },
  { step: "4", title: "Industrial Drying", description: "Dehumidifiers and air movers run until moisture readings reach dry standard (not just 'feels dry')." },
  { step: "5", title: "Reconstruction", description: "Rebuild with quality materials—drywall, flooring, trim, paint, and finishes restored." },
  { step: "6", title: "Final Documentation", description: "Moisture readings, photos, and completion documentation for your insurance file." },
];

const relatedLinks = [
  { href: "/insurance/", label: "Insurance Services Overview" },
  { href: "/insurance/hurricane-restoration/", label: "Hurricane Restoration" },
  { href: "/insurance/mold-remediation/", label: "Mold Remediation" },
  { href: "/insurance/fire-restoration/", label: "Fire Restoration" },
  { href: "/insurance/certified-estimating/", label: "Certified Estimating" },
  { href: "/water-damage-restoration-insurance-claims-in-tampa/", label: "Water Damage Claims Guide" },
];

// Use storm image showing flooding/water damage
const heroImage = "/images/florida-hurricane-storm/florida-hurricane-storm-11-1920w.webp";

const galleryPhotos: GalleryPhoto[] = [
  { src: "/images/how-to-prevent-your-home-from-flooding/how-to-prevent-your-home-from-flooding", caption: "Flood damage assessment and water extraction planning" },
  { src: "/images/tampa-hurricane-damage-restoration/tampa-hurricane-damage-restoration-display.webp", caption: "Large-scale water damage restoration in Tampa Bay" },
  { src: "/images/mold-inspection/mold-inspection", caption: "Moisture inspection and mold prevention after water loss" },
  { src: "/images/waterproofing/waterproofing", caption: "Structural waterproofing and water intrusion repair" },
];

export default function WaterRestorationPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Water and Flood Damage Restoration"
        serviceDescription="Complete water and flood damage restoration for Tampa Bay commercial and residential properties. Emergency extraction, structural drying, mold prevention, and full reconstruction. Licensed CBC with 40+ years experience."
        minPrice="10000"
      serviceCategories={["Water Extraction","Structural Drying","Flood Damage Repair","Moisture Monitoring"]}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section with Image */}
      <section className="relative text-white py-24 md:py-32 min-h-[500px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Storm damage restoration - FCS water and flood damage repair"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/75 to-blue-900/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb items={breadcrumbItems} className="mb-8 text-gray-300" />
          <BackToHub silo="commercial" customHubTitle="Insurance Services" customHubHref="/insurance/" />
          <AuthorByline variant="light" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 px-4 py-2 rounded-full mb-6">
              <Droplets className="w-5 h-5 text-blue-300" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Water & Flood Damage Restoration
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Water damage gets worse every hour. FCS responds rapidly with commercial-grade extraction 
              and drying equipment—preventing mold, minimizing secondary damage, and restoring your property 
              to pre-loss condition.
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
              <div className="text-3xl font-bold text-brand-green-dark">24/7</div>
              <div className="text-gray-600 text-sm">Storm Response</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-green-dark">IICRC</div>
              <div className="text-gray-600 text-sm">Certified Protocols</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-green-dark">CBC</div>
              <div className="text-gray-600 text-sm">Licensed Contractor</div>
            </div>
          </div>
        </div>
      </section>

      {/* Water Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Water Damage Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Not all water damage is equal. Treatment protocols depend on contamination level.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {waterCategories.map((cat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-4 ${cat.color}`}>
                  {cat.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cat.name}</h3>
                <p className="text-gray-600 text-sm mb-3"><strong>Source:</strong> {cat.source}</p>
                <p className="text-gray-600 text-sm"><strong>Treatment:</strong> {cat.treatment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Water Restoration Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency extraction to final reconstruction—we handle every phase of water damage restoration.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Water Restoration Process
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Proper water restoration follows scientific protocols—not shortcuts. Each phase is documented 
                with moisture readings and photos, creating the evidence trail your insurance claim needs.
              </p>

              <div className="space-y-4">
                {processSteps.map((item, index) => (
                  <div key={index} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8 text-red-500" />
                  <h3 className="text-2xl font-bold text-gray-900">Time Is Critical</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-16 text-right font-bold text-red-600">0-4 hrs</div>
                    <div className="text-gray-700">Standing water spreads, saturates materials</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-16 text-right font-bold text-red-600">4-24 hrs</div>
                    <div className="text-gray-700">Drywall wicks moisture, wood swells</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-16 text-right font-bold text-red-600">24-48 hrs</div>
                    <div className="text-gray-700">Mold spores begin colonizing</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-16 text-right font-bold text-red-600">48+ hrs</div>
                    <div className="text-gray-700">Active mold growth, structural degradation</div>
                  </div>
                </div>
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-4 rounded-lg transition-colors">
                  <Phone className="w-5 h-5" />
                  Call Now: {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Tampa Bay Water Damage Restoration Experts</h2>
            <p>
              Water damage is one of the most common—and most underestimated—property losses. What starts as a 
              burst pipe or roof leak quickly becomes a complex restoration project if not addressed immediately 
              and properly. Hidden moisture in wall cavities, under flooring, and within structural components 
              creates conditions for mold, rot, and ongoing deterioration that can take months to fully manifest.
            </p>
            <p>
              Florida Construction Specialists has been restoring water-damaged properties throughout Tampa Bay 
              since 1982. We understand the unique challenges of Florida's humid climate—where moisture never 
              really wants to leave—and deploy the industrial drying capacity needed for thorough restoration.
            </p>

            <h3>Why Proper Drying Matters</h3>
            <p>
              "Looks dry" and "is dry" are very different things. Wood and drywall can appear dry on the surface 
              while retaining dangerous moisture levels internally. Without proper drying to documented dry standard—
              verified with moisture meters, not just touch—you're setting up for mold problems, structural issues, 
              and warranty failures.
            </p>
            <p>
              Our drying protocol uses psychrometric calculations to determine exactly how much dehumidification 
              capacity is needed for each situation. We don't guess—we calculate, deploy, monitor, and document 
              until proper dry standard is achieved.
            </p>

            <h3>Commercial Water Damage</h3>
            <p>
              Commercial properties present unique water damage challenges: larger affected areas, complex HVAC
              systems, specialized flooring, and business interruption concerns. We routinely handle $500,000 to
              $5 million commercial water losses from roof leaks, plumbing failures, and sprinkler system
              malfunctions. In multi-floor commercial buildings, water migrates through elevator shafts, stairwells,
              and interstitial spaces—requiring floor-by-floor assessment and simultaneous drying on every affected
              level. Condominium buildings present a particular challenge: a single pipe burst can produce cascading
              water damage affecting 10 to 50+ units from one source, with restoration costs regularly exceeding
              $1 million when multiple units, common areas, and building systems are involved.
            </p>
            <p>
              FCS maintains the equipment inventory and trained workforce to handle large commercial losses.
              We've restored flooded hotels, office buildings, shopping centers, and industrial facilities—deploying
              dozens of dehumidifiers and air movers simultaneously to achieve rapid dry-out while you focus on
              business continuity. Our dedicated engineering partners provide structural assessments when water
              damage compromises load-bearing elements, and direct access to licensed structural engineers means
              we can evaluate affected framing, concrete, and steel without delays.
            </p>

            <h3>The 24-48 Hour Mold Prevention Window</h3>
            <p>
              What makes water damage fundamentally different from hurricane wind damage or fire damage is the
              biological clock. Mold spores are omnipresent in Florida's humid air—they only need moisture and
              time to colonize. Within 24 to 48 hours of water exposure, what was a straightforward water loss
              becomes a mold remediation project with dramatically expanded scope and cost. This critical timeline
              drives every decision we make: rapid extraction, aggressive drying capacity deployment, and
              antimicrobial treatment before colonization begins. FCS uses infrared thermography and moisture
              meters to map hidden water migration that adjusters and less-equipped contractors miss—moisture
              traveling through wall cavities, wicking up drywall, and pooling in interstitial spaces that
              appear dry on the surface.
            </p>

            <h3>Flood Insurance vs. Water Damage Insurance</h3>
            <p>
              An important distinction that catches many property owners off guard: standard property insurance
              and flood insurance are entirely separate policies with different adjusting processes. NFIP flood
              policies cover rising water from external sources (storm surge, overland flooding, river overflow),
              while standard property policies cover sudden internal water events (burst pipes, appliance failures,
              sprinkler discharge). Wind-driven rain falls into yet another category. When a hurricane produces
              both roof damage (wind policy) and ground-floor flooding (flood policy), two separate claims with
              two separate adjusters are required. FCS documents damage with enough specificity to support both
              claim types and coordinates with multiple carriers when losses span policy boundaries.
            </p>
            <p>
              When water damage results from third-party negligence—an upstairs tenant's overflowing bathtub,
              a contractor's severed water line, or a defective appliance—our detailed documentation supports
              subrogation recovery. Thorough moisture mapping, daily drying logs, and Xactimate line-item
              estimates give your insurer or attorney the evidence needed to pursue responsible parties.
            </p>

            <h3>Insurance Claim Support</h3>
            <p>
              Water damage claims can be contentious. Carriers may dispute the source of water, question whether
              damage is sudden (covered) versus gradual (often excluded), or disagree on appropriate repair scope.
              Our documentation—moisture readings, thermal images, progress photos, and detailed Xactimate estimates—
              provides the evidence needed for fair claim resolution.
            </p>
            <p>
              When water damage results from covered events (pipe bursts, appliance failures, storm damage), we help
              ensure your claim captures the full scope of damage, including hidden moisture and necessary demolition.
              For flood damage requiring separate flood insurance, we coordinate with both policies when applicable.
            </p>
          </div>
        </div>
      </section>

      {/* Code Reference */}
      <CodeReference
        code="IICRC S500 — Standard for Professional Water Damage Restoration"
        description="All water damage restoration follows IICRC S500 standards, which classify water damage into three categories based on contamination level and define specific restoration protocols for each. Category 1 (clean water) allows drying in place; Category 2 (gray water) requires removal of affected porous materials; Category 3 (black water) demands aggressive controlled demolition and antimicrobial treatment. FCS follows these standards on every water loss project."
      />

      {/* Project Gallery */}
      <ProjectGallery photos={galleryPhotos} title="Water Restoration Projects" />

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Water Damage Won't Wait—Neither Should You</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Every hour of delay means more damage, higher costs, and greater mold risk. 
            Contact FCS now for prompt water damage response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-gray-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg">
              <Phone className="w-5 h-5" />
              urgent: {BUSINESS_INFO.phone}
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
    <RelatedArticles pageSlug="water-restoration" />
    </>
  );
}
