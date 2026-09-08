import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award, Droplets, Wrench, ClipboardCheck, HardHat, ThermometerSun, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InternalLinks } from "@/components/InternalLinks";
import { ContentImage, ContentParallax } from "@/components/ContentImage";
import { CodeReference } from "@/components/CodeReference";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/building-envelope-waterproofing/' },
  title: "Building Envelope Waterproofing Tampa | Commercial",
  description: "Building envelope waterproofing in Tampa Bay for commercial, condo, and multi-family properties. Wall coatings, balcony membranes, sealant joints, and water intrusion investigation. Certified Building Contractor CBC1262722, since 1982.",
  openGraph: {
    title: "Building Envelope Waterproofing Tampa | Commercial",
    description: "Building envelope waterproofing in Tampa Bay for commercial, condo, and multi-family properties. Wall coatings, balcony membranes, sealant joints, and water intrusion investigation. Certified Building Contractor since 1982.",
    url: "https://floridaconstructionspecialists.com/building-envelope-waterproofing/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const envelopeComponents = [
  "Exterior walls, stucco, and cladding",
  "Balcony and walkway traffic surfaces",
  "Expansion joints and perimeter sealants",
  "Windows, doors, and glazing perimeters",
  "Parapets, copings, and roof-to-wall transitions",
  "Below-grade walls and planter boxes",
  "Through-wall penetrations and flashing details",
  "Drainage paths, scuppers, and weeps",
];

const faqs = [
  {
    "question": "What is building envelope waterproofing?",
    "answer": "The building envelope is every surface that separates conditioned interior space from the outdoors: exterior walls and cladding, balconies and walkways, windows and doors, expansion joints and sealants, parapets, and roof-to-wall transitions. Building envelope waterproofing treats those elements as one connected system rather than a list of unrelated repairs. In practice that means coating and sealing the assemblies that keep water out, restoring the drainage paths that move water away, and detailing the transitions between materials. In Tampa Bay, envelope failures almost always start at a transition rather than in the middle of a wall."
  },
  {
    "question": "How do I know whether my building has an envelope problem or a roof problem?",
    "answer": "Interior water staining is a poor guide to where water is entering. Water travels laterally along framing, slab edges, and furring before it appears on a ceiling or wall, so a stain on a top-floor ceiling can just as easily originate at a parapet joint or a window head as at the roof. That is why we investigate before we specify. Water intrusion investigation isolates the actual entry point through visual survey, moisture readings, and targeted water testing, so the repair addresses the source rather than the symptom."
  },
  {
    "question": "Why does Florida's climate make waterproofing so demanding?",
    "answer": "Tampa Bay sits in hurricane alley and sees roughly two to three tropical systems per season during the June-through-November storm season, on top of summer relative humidity averaging around 75 percent. Wind-driven rain forces water uphill and sideways into joints that would drain harmlessly in a milder climate, and near-constant humidity means wall assemblies rarely dry out fully between events. Storms including Hurricane Ian in 2022 and Hurricane Idalia in 2023 exposed envelope weaknesses on buildings across the region that had appeared sound for years."
  },
  {
    "question": "Do you work with condominium associations and property managers?",
    "answer": "Yes. Condominium, HOA, and multi-family work is a core part of what Florida Construction Specialists does. Envelope projects on occupied buildings require board approval processes, owner communication, unit access scheduling, and phasing that keeps residents in place while work proceeds. We provide documentation suitable for board presentations and coordinate directly with property managers and building engineers throughout the project."
  },
  {
    "question": "Is Florida Construction Specialists licensed for this work?",
    "answer": "Florida Construction Specialists holds Certified Building Contractor license CBC1262722 and has operated in Florida since 1982. We are always the prime contractor and never a subcontractor, which means one accountable party assesses the envelope, specifies the scope, and stands behind the completed work. We also keep an in-house engineer and architectural draftsman, so investigation findings translate directly into buildable details."
  },
  {
    "question": "What areas do you serve for building envelope waterproofing?",
    "answer": "We serve Tampa and the surrounding Tampa Bay region, including St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, Bradenton, and Ruskin, where our office is located. Our focus is commercial, condominium, and multi-family properties across Hillsborough County and the Central Tampa Bay corridor."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Building Envelope Waterproofing", href: "/building-envelope-waterproofing/" },
];

export default function BuildingEnvelopeWaterproofingPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Building Envelope Waterproofing Tampa"
        serviceDescription="Building envelope waterproofing for commercial, condominium, and multi-family properties throughout Tampa Bay. Exterior wall waterproofing, balcony traffic coatings, expansion joint and sealant replacement, envelope repair, and water intrusion investigation."
        serviceCategories={["Exterior Waterproofing", "Balcony Waterproofing and Traffic Coatings", "Building Envelope Repair", "Expansion Joint and Sealant Replacement", "Water Intrusion Investigation and Repair"]}
      />

      <Breadcrumb items={[
        { name: "Services", href: "/commercial/" },
        { name: "Building Envelope Waterproofing", href: "/building-envelope-waterproofing/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Exterior-Waterproofing.png"
            alt="Exterior waterproofing on a Tampa Bay commercial building envelope"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">Tampa Bay Commercial &amp; Multi-Family Envelope Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Building Envelope Waterproofing in Tampa
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Walls, balconies, joints, and openings are one connected water barrier, and water finds the weakest link. Florida Construction Specialists waterproofs the whole envelope for commercial, condominium, and multi-family buildings across Tampa Bay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule an Envelope Assessment
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
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering Review</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Building in Florida Since 1982</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Certified Building Contractor CBC1262722</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              One Envelope, Not a List of Separate Repairs
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                A building envelope is everything that stands between conditioned interior space and a Tampa afternoon thunderstorm: exterior walls and stucco, balcony and walkway surfaces, expansion joints and perimeter sealants, window and door openings, parapets and copings, and the transitions where all of those meet. Water does not respect the boundaries between those trades. It enters at whichever detail has degraded first, then travels along slab edges and framing until it shows up somewhere else entirely.
              </p>
              <p>
                That is why envelope work handled as a series of disconnected repairs so often disappoints. A recoated wall does not help if the sealant joint above it has hardened and split. A new balcony membrane does not help if the railing post penetrating it was never properly flashed. Florida Construction Specialists approaches the envelope as one system, identifies where water is actually entering, and sequences the repairs so each one protects the next.
              </p>
              <p>
                We have worked in this market since 1982 under Certified Building Contractor license CBC1262722, always as the prime contractor and never as a subcontractor, so the team that investigates your envelope is the same team accountable for the finished work. An in-house engineer and architectural draftsman mean findings become buildable details rather than a report that sits on a shelf. Envelope waterproofing is one of several disciplines we bring to Tampa Bay property owners; you can see the full range of our work on our <Link href="/">commercial construction and restoration homepage</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <ContentParallax
        src="/images/fcs-commercial-exterior-waterproofing/fcs-commercial-exterior-waterproofing-large.webp"
        alt="Commercial exterior waterproofing membrane installation in Tampa Bay"
        title="Sealing the Whole Building, Not Just the Symptom"
        subtitle="Envelope waterproofing for commercial, condominium, and multi-family properties"
        overlayOpacity={0.55}
      />

      {/* Why Tampa Bay */}
      <section className="section bg-brand-green-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <ThermometerSun className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                Why Tampa Bay Is Hard on Building Envelopes
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Tampa Bay sits in hurricane alley. The region typically sees two to three tropical systems in a season, with the strong storm season running June through November, and Hurricane Ian in 2022 and Hurricane Idalia in 2023 both left envelope damage on buildings across the area that owners had believed were watertight. Wind-driven rain is the specific problem: it drives water horizontally and even upward into joints and laps that would shed a vertical rainfall without difficulty.
              </p>
              <p>
                Between storms, the climate keeps working on the envelope. Summer relative humidity in the region averages around 75 percent, so wall assemblies that take on moisture rarely dry out completely. Persistent dampness is what turns a minor detail failure into stucco delamination, corroding reinforcement, and interior finish damage. It is also what makes the region's high termite pressure a structural concern wherever moisture reaches wood framing.
              </p>
              <p>
                Older Tampa neighborhoods add their own requirements. Historic stucco facades in Hyde Park, Ybor, and Seminole Heights need restoration methods matched to the original assembly, not a modern coating applied over a wall that was designed to breathe.
              </p>
            </div>
            <CodeReference
              code="Florida Building Code, 2023 revision"
              section="Wind-borne debris regions"
              description="Florida's 2023 code revision mandates impact-resistant glazing in wind-borne debris regions and raises structural standards for coastal construction. Openings are part of the envelope, so glazing and door replacements have to be integrated with wall waterproofing and flashing rather than treated as a separate scope."
            />
          </div>
        </div>
      </section>

      {/* Child services */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Droplets className="w-16 h-16 text-brand-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Building Envelope Waterproofing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five disciplines that make up a complete envelope program. Most buildings need two or three of them; a few need all five.
            </p>
          </div>

          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4">Exterior Waterproofing</h2>
              <p>
                Exterior walls are the largest single surface on the envelope and the one most exposed to wind-driven rain and UV. Exterior waterproofing covers surface preparation, crack and joint treatment, and the application of elastomeric or breathable coating systems matched to the wall assembly underneath, a distinction that matters on historic stucco. Done correctly it stops bulk water at the face of the building instead of relying on interior finishes to absorb what gets through. <Link href="/exterior-waterproofing/">See our exterior waterproofing services</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4">Balcony Waterproofing and Traffic Coatings</h2>
              <p>
                Balconies and elevated walkways are horizontal envelope surfaces that also carry foot traffic, furniture, and standing water after a storm. They need traffic-bearing membrane systems that waterproof and resist abrasion at the same time, installed with genuine slope to drain and properly detailed at thresholds, railing posts, and perimeter edges. On condominium buildings this is frequently where envelope failure shows up first, and where it does the most visible damage to the units below. <Link href="/balcony-waterproofing-and-traffic-coatings/">See our balcony waterproofing and traffic coatings</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4">Building Envelope Repair</h2>
              <p>
                Coatings and membranes only perform over sound substrate. Building envelope repair is the structural half of the work: replacing delaminated stucco, repairing spalled concrete and corroded reinforcement, rebuilding failed parapets and copings, and correcting flashing details that were wrong from the original construction. Where investigation shows deterioration behind a wall rather than on it, this is the scope that has to come before any waterproofing system is applied. <Link href="/building-envelope-repair/">See our building envelope repair services</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4">Expansion Joint and Sealant Replacement</h2>
              <p>
                Sealant joints are the shortest-lived component of the envelope and the most commonly neglected. Florida's thermal cycling and UV exposure harden and split sealants years before the surrounding walls need attention, opening a direct path for wind-driven rain at exactly the movement points the building depends on. Replacement means removing old material completely, restoring proper joint geometry and backer rod, and installing sealants rated for the movement each joint actually sees. <Link href="/expansion-joint-and-sealant-replacement/">See our expansion joint and sealant replacement</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4">Water Intrusion Investigation and Repair</h2>
              <p>
                When water is already inside, the first job is finding out where it entered, which is rarely directly above the stain. Investigation combines visual survey of the envelope, moisture readings, and targeted water testing that isolates one assembly at a time until the entry point is confirmed. That evidence turns a guess into a defined scope, which matters for owners and associations who need a repair that is documented and defensible. <Link href="/water-intrusion-investigation-and-repair/">See our water intrusion investigation and repair</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Envelope Components */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <HardHat className="w-12 h-12 text-brand-green mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                What We Assess on Every Envelope
              </h2>
              <p className="text-gray-600 mb-6">
                An envelope assessment looks at every element that can admit water and every path water takes once it is inside. We walk every elevation, not just the one below the reported leak, because the same window head or parapet detail usually appears on all four sides of the building and has been failing on all four.
              </p>
              <p className="text-gray-600 mb-6">
                The scope that comes out of it is split three ways: active intrusion that has to stop now, work worth doing while the swing stage is already up, and items that can wait for a later budget without letting water in.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Building <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">
                Envelope Elements We Evaluate:
              </h3>
              <ul className="space-y-3">
                {envelopeComponents.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inline image + process */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <ClipboardCheck className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                How an Envelope Project Runs
              </h2>
              <p className="text-xl text-gray-600">
                Investigation first, then a scope you can budget against, then work sequenced so each repair protects the one after it.
              </p>
            </div>

            <ContentImage
              src="/images/fcs-exterior-waterproofing/fcs-exterior-waterproofing-display.webp"
              alt="Waterproofing membrane applied to an exterior wall assembly"
              caption="Coatings and membranes only perform over a sound, properly detailed substrate"
              position="center"
            />

            <div className="grid md:grid-cols-4 gap-8 mt-12">
              {[
                { step: "1", title: "Investigate", desc: "Envelope survey, moisture readings, and targeted water testing to confirm where water is actually entering." },
                { step: "2", title: "Specify", desc: "A prioritized scope with details drawn in house, suitable for board presentation and competitive budgeting." },
                { step: "3", title: "Build", desc: "Substrate repairs first, then joints and membranes, phased around occupied units and building access." },
                { step: "4", title: "Verify", desc: "Water testing on completed assemblies, warranty documentation, and a maintenance schedule for sealants and coatings." },
              ].map((phase) => (
                <div key={phase.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-green text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-3">{phase.title}</h3>
                  <p className="text-gray-600">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Tampa Bay Owners Choose FCS for Envelope Work
            </h2>
            <p className="text-gray-600">
              Florida Construction Specialists is always the prime contractor, never a subcontractor. One accountable team investigates, specifies, builds, and stands behind the result.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Prime Contractor</h3>
              <p className="text-gray-600">Direct accountability from investigation through warranty on every envelope project.</p>
            </div>
            <div className="card text-center p-6">
              <Wrench className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">In-House Engineering</h3>
              <p className="text-gray-600">An engineer and architectural draftsman on staff turn findings into buildable details.</p>
            </div>
            <div className="card text-center p-6">
              <Building2 className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Multi-Family Experience</h3>
              <p className="text-gray-600">Condominium, HOA, and occupied-building work with board and property manager coordination.</p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Since 1982</h3>
              <p className="text-gray-600">44 years building and restoring in the Florida climate, under license CBC1262722.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <MapPin className="w-16 h-16 text-brand-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Building Envelope Waterproofing Service Areas
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-center">
              Florida Construction Specialists provides building envelope waterproofing throughout Tampa and the wider Tampa Bay region, including St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, Bradenton, and Ruskin, where our office is located. Our work concentrates on commercial, condominium, and multi-family properties across Hillsborough County and the Central Tampa Bay corridor.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="Building Envelope Waterproofing FAQs" />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Find Out Where the Water Is Getting In
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a building envelope assessment with Florida Construction Specialists. We investigate first, then give you a scope you can budget and defend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule an Envelope Assessment
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

      <RelatedServiceLocations
        currentCity="Tampa"
        currentService="building-envelope-waterproofing"
        currentServiceName="Building Envelope Waterproofing"
      />

      <RelatedArticles pageSlug="building-envelope-waterproofing" />

      {/* Related Guides — de-orphan internal links */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Waterproofing Guides"
            links={[
              { label: "Waterproofing Commercial Contractors", href: "/commercial/guides/waterproofing-commercial-contractors/" },
              { label: "Effective Exterior Waterproofing Methods For Your Property", href: "/commercial/guides/effective-exterior-waterproofing-methods-for-your-property/" },
              { label: "Choosing The Right Waterproofing Solution Your Ultimate Guide", href: "/commercial/guides/choosing-the-right-waterproofing-solution-your-ultimate-guide/" },
              { label: "Discover The Benefits Of Exterior Waterproofing", href: "/commercial/guides/discover-the-benefits-of-exterior-waterproofing/" },
              { label: "Balcony Waterproofing For Long Lasting Protection", href: "/commercial/guides/balcony-waterproofing-for-long-lasting-protection/" },
              { label: "Balcony Reconstruction Exterior Waterproofing", href: "/commercial/guides/balcony-reconstruction-exterior-waterproofing/" }
            ]}
          />
        </div>
      </section>
    </>
  );
}