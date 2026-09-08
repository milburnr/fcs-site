import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award, AlertTriangle, Wrench, ClipboardCheck, HardHat, ThermometerSun, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InternalLinks } from "@/components/InternalLinks";
import { ContentImage, ContentParallax } from "@/components/ContentImage";
import { CodeReference } from "@/components/CodeReference";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/building-envelope-repair/' },
  title: "Building Envelope Repair Tampa | Parapets & Flashing",
  description: "Building envelope repair in Tampa: parapets and copings, roof-to-wall transitions, flashing corrections, wall substrate repair, and opening perimeters. The structural work that has to happen before waterproofing. CBC1262722, since 1982.",
  openGraph: {
    title: "Building Envelope Repair Tampa | Parapets & Flashing",
    description: "Building envelope repair in Tampa: parapets and copings, roof-to-wall transitions, flashing corrections, wall substrate repair, and opening perimeters. The structural work that has to happen before waterproofing.",
    url: "https://floridaconstructionspecialists.com/building-envelope-repair/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const repairScope = [
  "Parapet rebuilds, coping replacement, and through-wall flashing",
  "Roof-to-wall transitions and counterflashing corrections",
  "Delaminated stucco and cladding substrate removal and replacement",
  "Window, door, and louvre perimeter rebuilds",
  "Through-wall penetrations, sleeves, and pipe boots",
  "Sealant joint geometry restored with correct backing",
  "Drip edges, sills, and weep paths reinstated",
  "Planter boxes, curbs, and below-grade wall details",
];

const rootCauses = [
  { sign: "Cracked or displaced coping on a parapet", meaning: "Water entering the top of the wall and travelling down inside it" },
  { sign: "Staining below a window head or sill", meaning: "A perimeter or flashing detail admitting water, not the glass" },
  { sign: "Stucco that sounds hollow on tapping", meaning: "Delamination from the substrate. A coating over it will not hold." },
  { sign: "Rust bleeding from a wall penetration", meaning: "A sleeve or lintel corroding inside the assembly" },
  { sign: "Blocked or absent weeps at the base of a wall", meaning: "Drainage path removed, so the wall stores water" },
  { sign: "Sealant that has hardened and split", meaning: "Joint geometry or backing was wrong, or the joint is beyond its service life" },
];

const faqs = [
  {
    "question": "What is building envelope repair, as distinct from waterproofing?",
    "answer": "Waterproofing is the coating, membrane, and sealant layer that keeps water out. Envelope repair is the work underneath it: rebuilding parapets and copings, correcting flashing that was wrong from the original construction, replacing delaminated stucco and cladding substrate, and restoring drainage paths. Coatings only perform over sound, correctly detailed assemblies, so where investigation finds deterioration behind a wall rather than on it, this is the scope that has to come first."
  },
  {
    "question": "Why do envelope failures start at transitions?",
    "answer": "Because a transition is where two systems, two materials, or two trades meet, and each was designed to shed water rather than to receive it from the other. Parapet tops, roof-to-wall junctions, window and door perimeters, and through-wall penetrations are all places where responsibility for keeping water out changes hands. Add wind-driven rain, which pushes water sideways and upward into laps that would drain harmlessly in a milder climate, and transitions become the entry points."
  },
  {
    "question": "Do you find the leak or just fix what we point at?",
    "answer": "We investigate before specifying. Interior staining is a poor guide to where water entered, because water travels laterally along slab edges and framing before it appears. That investigation work is described on our water intrusion investigation and repair page; envelope repair is what follows once the entry point is confirmed. Repairing what a stain points at, without confirming the source, is how buildings end up paying twice."
  },
  {
    "question": "Do consultants and inspection firms do this work?",
    "answer": "Envelope consultants and enclosure inspection firms produce condition assessments and specifications, and that work is valuable. It is also, by design, where their involvement ends. Most do not hold a license to build the repair they described. Florida Construction Specialists holds Certified Building Contractor license CBC1262722 and performs the repair itself, with an in-house engineer and architectural draftsman turning findings into buildable details. We are happy to build to a consultant's specification or to develop the scope ourselves."
  },
  {
    "question": "How does envelope repair fit with historic buildings?",
    "answer": "Carefully, and with method matched to the original assembly. Older Tampa neighborhoods including Hyde Park, Ybor, and Seminole Heights have facades built to breathe, and applying a modern impermeable system over a wall designed to dry outward traps moisture inside it. Repairs on those buildings restore the original assembly's behavior rather than overriding it, which is a different specification exercise from a modern stucco-over-block wall."
  },
  {
    "question": "What areas do you serve for building envelope repair?",
    "answer": "We work throughout Tampa and the wider Tampa Bay region, including St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, Bradenton, and Ruskin, where our office is located. Our envelope repair work concentrates on commercial, condominium, and multi-family properties across Hillsborough County and the Central Tampa Bay corridor."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Building Envelope Repair", href: "/building-envelope-repair/" },
];

export default function BuildingEnvelopeRepairPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Building Envelope Repair Tampa"
        serviceDescription="Building envelope repair for commercial, condominium, and multi-family properties in Tampa Bay. Parapet and coping rebuilds, roof-to-wall transitions, flashing corrections, delaminated stucco and cladding substrate replacement, opening perimeters, and drainage path restoration."
        serviceCategories={["Building Envelope Repair", "Parapet and Coping Rebuild", "Flashing Correction", "Cladding Substrate Repair", "Opening Perimeter Repair"]}
      />

      <Breadcrumb items={[
        { name: "Services", href: "/commercial/" },
        { name: "Building Envelope Repair", href: "/building-envelope-repair/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2024/01/1111.jpg"
            alt="Building exterior restoration with scaffolding in progress in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">Tampa Bay Commercial &amp; Multi-Family Envelope Repair</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Building Envelope Repair in Tampa
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Coatings and membranes only perform over sound assemblies. Florida Construction Specialists rebuilds the parapets, flashings, substrates, and drainage paths underneath them, the work that has to happen before waterproofing means anything.
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
              The Half of the Envelope You Cannot Coat Your Way Out Of
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Every waterproofing product on the market bonds to something. When that something is a delaminated stucco field, a parapet whose coping has been letting water into the wall for a decade, or a window perimeter that was never properly flashed, the product fails. It was not the wrong product. It was asked to bridge a defect instead of protecting a sound assembly. Building envelope repair is the work that removes the defect.
              </p>
              <p>
                It is also the least visible part of an envelope program. Owners can see a recoated wall; they cannot see the through-wall flashing that was installed behind it, and the temptation to skip that line item is real. It is worth resisting, because the flashing decides whether the coating reaches its full service life or a fraction of it.
              </p>
              <p>
                Search this subject in Tampa and most of what returns is consulting: envelope consultants, enclosure inspection firms, forensic assessment. That work has real value and we frequently build to a consultant's specification. But an assessment is not a repair, and the number of firms that both diagnose an envelope and hold the license to rebuild it is small. Florida Construction Specialists has worked in this market since 1982 under Certified Building Contractor license CBC1262722, always as the prime contractor and never as a subcontractor. Envelope repair is one discipline within our <Link href="/building-envelope-waterproofing/">building envelope waterproofing</Link> practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <ContentParallax
        src="/images/fcs-commercial-exterior-waterproofing/fcs-commercial-exterior-waterproofing-large.webp"
        alt="Exterior restoration work on a commercial building envelope in Tampa Bay"
        title="Rebuild the Assembly, Then Protect It"
        subtitle="Parapets, flashings, substrates, and drainage paths across Tampa Bay"
        overlayOpacity={0.55}
      />

      {/* Where envelopes fail */}
      <section className="section bg-brand-green-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <AlertTriangle className="w-12 h-12 text-brand-gold mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Envelopes Fail at Transitions, Not in the Middle of Walls
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  A wall's field is the most robust part of the envelope. What fails is where something changes: the top of a parapet, the junction where the roof meets the wall, the perimeter of an opening, a pipe passing through. Each of those is a handover point between materials, and in wind-driven rain each is where water is being pushed rather than falling.
                </p>
                <p>
                  Interior symptoms rarely appear beneath the entry point, because water travels along slab edges and framing before it shows itself. That is why we investigate first and repair second. A scope written from the location of a stain will usually miss the detail that is actually admitting water.
                </p>
              </div>
              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors mt-4"
              >
                Discuss Your Building <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">
                Conditions and What They Indicate
              </h3>
              <ul className="space-y-4">
                {rootCauses.map((item) => (
                  <li key={item.sign} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong className="text-brand-green-dark">{item.sign}</strong>
                      <span className="block text-sm text-gray-600">{item.meaning}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Climate */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <ThermometerSun className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                Why Details Fail Faster in Tampa Bay
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                A storm does not test the wall. It tests the lap, the joint, and the termination, because wind-driven rain has enough energy to move water horizontally and upward past details that were built assuming gravity. That is why the buildings that surprised their owners after Hurricane Ian in 2022 and Hurricane Idalia in 2023 mostly had sound walls and failed details.
              </p>
              <p>
                Between storms, humidity finishes the job. An assembly that has taken on water through a failed detail does not dry out before the next event. Persistent dampness inside a wall is what turns a small flashing defect into stucco delamination, corroding lintels and sleeves, and interior finish damage. Where moisture reaches wood framing, the region's high termite pressure turns a moisture problem into a structural one.
              </p>
              <p>
                Historic facades add a further constraint. A wall built to dry outward has to be repaired so that it still can, which is a specification decision made before a product is chosen, not after.
              </p>
            </div>
            <CodeReference
              code="Florida Building Code, 2023 revision"
              section="Wind-borne debris regions"
              description="Florida's 2023 revision mandates impact-resistant glazing in wind-borne debris regions and raises structural standards for coastal construction. Openings are part of the envelope, so glazing and door replacements have to be integrated with wall flashing and waterproofing rather than treated as a separate scope."
            />
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <HardHat className="w-12 h-12 text-brand-green mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                What Envelope Repair Covers
              </h2>
              <p className="text-gray-600 mb-6">
                This scope is the assembly work: rebuilding what has deteriorated and correcting what was detailed wrongly in the first place. Coatings, membranes, and sealant replacement are separate scopes that follow it. Columns, beams, and slabs are handled under <Link href="/structural-concrete-repair/">structural concrete repair</Link>.
              </p>
              <p className="text-gray-600">
                Where the finish material itself is the issue rather than the assembly behind it, the work belongs with <Link href="/resources/florida-stucco-repair-services-tampa/">stucco repair</Link>. Most real projects need some of each, which is the argument for a single contractor holding the whole scope.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">
                Typical Scope Elements:
              </h3>
              <ul className="space-y-3">
                {repairScope.map((item) => (
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

      {/* Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Wrench className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                How Envelope Repair Is Sequenced
              </h2>
              <p className="text-xl text-gray-600">
                Top down, and substrate before surface. Water moves downward, so a repair below an unresolved defect above it is temporary by construction.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Confirm the entry point</h3>
                <p>
                  Visual survey, moisture readings, and targeted water testing isolate one assembly at a time until the source is confirmed. Where an envelope consultant has already produced a report, we build to it and verify the conditions we uncover against it. That investigation work is described on our <Link href="/water-intrusion-investigation-and-repair/">water intrusion investigation and repair</Link> page.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Open up and quantify</h3>
                <p>
                  Deterioration behind a wall is almost always more extensive than what shows on it. Selective openings at representative locations establish the real condition of substrate, flashing, and embedded metals, so the scope reflects what is there rather than what the elevation photographs suggest. Quantities established this way are what make a budget hold.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Detail before rebuilding</h3>
                <p>
                  Our engineer and architectural draftsman draw the corrected details: through-wall flashing at parapets, counterflashing at roof-to-wall junctions, sill pans and head flashings at openings, weeps and drainage paths reinstated. A rebuilt parapet with the original flashing error faithfully reproduced is a common and expensive outcome when nobody drew it.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Rebuild, top down</h3>
                <p>
                  Work proceeds from the highest defect downward so that completed lower elevations are not exposed to water shed from unrepaired work above. Substrates are replaced, flashings installed as drawn, penetrations sleeved and sealed properly, and drainage paths reopened. Openings are addressed with their perimeters, since glazing and wall waterproofing are one detail rather than two trades.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Protect and verify</h3>
                <p>
                  Once the assembly is sound, the protective scopes follow: wall coatings under <Link href="/exterior-waterproofing/">exterior waterproofing</Link>, deck systems under <Link href="/balcony-waterproofing-and-traffic-coatings/">balcony waterproofing and traffic coatings</Link>, and joint work under expansion joint and sealant replacement. Completed assemblies are water-tested where conditions allow, and the work is documented for the owner's records and any warranty that attaches to it.
                </p>
              </div>
            </div>

            <ContentImage
              src="/images/fcs-exterior-waterproofing/fcs-exterior-waterproofing-display.webp"
              alt="Waterproofing applied to a repaired exterior wall assembly"
              caption="Protection goes on last, over an assembly that has been corrected first"
              position="center"
            />
          </div>
        </div>
      </section>

      {/* Occupied buildings */}
      <section className="section bg-brand-green-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <ClipboardCheck className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                Repairing an Envelope Around Occupants
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Envelope repair happens on the outside of a building people are living or working in, which puts most of the constraints on access rather than on the work itself. Swing stages, lifts, and scaffold need routes and staging areas; opened-up assemblies must be made temporarily weathertight at the end of each day; and residents need to know which elevations and which balconies are affected, and for how long.
              </p>
              <p>
                Season matters here more than in most trades. Opening a wall in the middle of a June-through-November storm season means being able to close it again quickly, so phasing is planned in lengths that can be temporarily protected rather than in whatever lengths are efficient. We coordinate that with the property manager, report progress to the board, and photograph each completed assembly before it is closed up. When the work traces back to a consultant's report, those photographs are what show the consultant's detail was actually built.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Assessment and Repair Under One Roof
            </h2>
            <p className="text-gray-600">
              Florida Construction Specialists is always the prime contractor, never a subcontractor. We investigate, detail, and build, and we stand behind the assembly rather than handing a specification to someone else.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Licensed to Build It</h3>
              <p className="text-gray-600">Certified Building Contractor CBC1262722, not an assessment-only firm.</p>
            </div>
            <div className="card text-center p-6">
              <Wrench className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">In-House Engineering</h3>
              <p className="text-gray-600">An engineer and architectural draftsman draw the corrected detail before it is built.</p>
            </div>
            <div className="card text-center p-6">
              <Building2 className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Occupied Buildings</h3>
              <p className="text-gray-600">Phased exterior work with board, manager, and resident coordination.</p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Since 1982</h3>
              <p className="text-gray-600">44 years of Florida envelope work, including historic assemblies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <MapPin className="w-16 h-16 text-brand-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Building Envelope Repair Service Areas
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-center">
              Florida Construction Specialists repairs building envelopes throughout Tampa and the wider Tampa Bay region, including St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, Bradenton, and Ruskin, where our office is located. Our work concentrates on commercial, condominium, and multi-family properties across Hillsborough County and the Central Tampa Bay corridor.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="Building Envelope Repair FAQs" />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Fix the Assembly Before You Pay for the Coating
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a building envelope assessment with Florida Construction Specialists. We confirm where water is entering, open up enough to know the real extent, and give you a scope that corrects the detail rather than covering it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule an Assessment
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

      <RelatedArticles pageSlug="building-envelope-repair" />

      {/* Related Guides — de-orphan internal links */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Envelope &amp; Waterproofing Guides"
            links={[
              { label: "Waterproofing Commercial Contractors", href: "/commercial/guides/waterproofing-commercial-contractors/" },
              { label: "Effective Exterior Waterproofing Methods For Your Property", href: "/commercial/guides/effective-exterior-waterproofing-methods-for-your-property/" },
              { label: "Choosing The Right Waterproofing Solution Your Ultimate Guide", href: "/commercial/guides/choosing-the-right-waterproofing-solution-your-ultimate-guide/" },
              { label: "Discover The Benefits Of Exterior Waterproofing", href: "/commercial/guides/discover-the-benefits-of-exterior-waterproofing/" },
              { label: "Historic Building Structural Assessment In Tampa", href: "/commercial/guides/historic-building-structural-assessment-in-tampa/" }
            ]}
          />
        </div>
      </section>
    </>
  );
}