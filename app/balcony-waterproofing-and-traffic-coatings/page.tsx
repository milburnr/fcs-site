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

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/balcony-waterproofing-and-traffic-coatings/' },
  title: "Balcony Waterproofing & Traffic Coatings Tampa",
  description: "Balcony waterproofing and traffic coatings in Tampa for condominium, multi-family, and commercial buildings. Traffic-bearing membrane systems, slope to drain, and detailing at thresholds, drains, and railing bases. CBC1262722, since 1982.",
  openGraph: {
    title: "Balcony Waterproofing & Traffic Coatings Tampa",
    description: "Balcony waterproofing and traffic coatings in Tampa for condominium, multi-family, and commercial buildings. Traffic-bearing membrane systems, slope to drain, and detailing at thresholds, drains, and railing bases.",
    url: "https://floridaconstructionspecialists.com/balcony-waterproofing-and-traffic-coatings/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const detailPoints = [
  "Door and slider thresholds",
  "Railing posts and base plates",
  "Perimeter edges, drip edges, and nosings",
  "Deck drains, clamping rings, and scuppers",
  "Wall-to-deck junctions and membrane terminations",
  "Expansion and control joints crossing the deck",
  "Planter, hose bib, and light fixture penetrations",
  "Transitions between adjoining balconies and walkways",
];

const systemTypes = [
  { name: "Cold liquid-applied urethane", note: "Built up in coats with reinforcing fabric at details; conforms to complex shapes and suits occupied buildings" },
  { name: "Hot-applied rubberized asphalt", note: "Monolithic and highly durable, but needs heating plant, space, and tolerance for the process on site" },
  { name: "Sheet membrane with a wear course", note: "Factory-consistent thickness, protected by a separate topping or pedestal pavers rather than taking traffic directly" },
  { name: "Cementitious and polymer-modified toppings", note: "Used where a repaired deck also needs re-profiling to restore slope" },
];

const faqs = [
  {
    "question": "What makes a traffic coating different from ordinary waterproofing?",
    "answer": "A balcony is a horizontal surface that has to be watertight and walked on at the same time. Roof membranes are protected by ballast, pavers, or simply by nobody standing on them; a balcony membrane takes furniture, foot traffic, dropped objects, and full Florida sun directly. Traffic-bearing systems are therefore built up in layers, with primer, membrane, reinforcement at details, and an aggregate-filled wear coat, so the waterproofing element survives use rather than being worn through in the first few years."
  },
  {
    "question": "How long does a traffic coating last?",
    "answer": "Longer than most owners expect if it is maintained, and much shorter if it is not. Service life is governed less by the product than by three things: whether the deck drains completely, whether the detail work at thresholds, drains, and railing bases was executed properly, and whether the wear coat is recoated before it is worn through to the membrane. A deck that ponds water and has never been recoated will fail early regardless of what was originally specified."
  },
  {
    "question": "Can a coating be applied over deteriorated concrete?",
    "answer": "No, and this is the most common reason balcony coatings fail. A membrane bonds to the substrate, so it can only be as sound as what is underneath it. If the slab is delaminated, spalling, or has corroding reinforcement, the coating will lift with the concrete beneath it. The concrete has to be repaired first, which is the scope described on our concrete balcony restoration page, and the coating applied to a sound, correctly profiled deck."
  },
  {
    "question": "Why does slope to drain matter so much?",
    "answer": "Standing water is the single hardest condition to place a membrane under. It keeps the surface saturated, accelerates ultraviolet and biological degradation of the wear coat, and adds continuous pressure at every seam and termination. Florida delivers intense, short-duration rainfall, so a deck that cannot clear water within a reasonable time after a storm holds it for hours. Where the original slope was inadequate or has been lost, re-establishing it is part of the scope rather than an upgrade."
  },
  {
    "question": "Do you coordinate this with concrete repairs and railings?",
    "answer": "Yes, and it is normally the cheaper way to do it. Concrete repair, waterproofing, and guard replacement all touch the same deck, and running them as separate projects means opening the balcony three times and leaving each trade to inherit the previous one's work. Florida Construction Specialists is always the prime contractor, so the sequence of repairing the slab, waterproofing it, and then setting guards into flashed penetrations is planned once and carried out under one contract."
  },
  {
    "question": "What areas do you serve for balcony waterproofing?",
    "answer": "We work throughout Tampa and the wider Tampa Bay region, including St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, Bradenton, and Ruskin, where our office is located. Balcony waterproofing and traffic coating work concentrates on condominium, multi-family, and commercial properties across Hillsborough County and the Central Tampa Bay corridor."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Balcony Waterproofing & Traffic Coatings", href: "/balcony-waterproofing-and-traffic-coatings/" },
];

export default function BalconyWaterproofingAndTrafficCoatingsPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Balcony Waterproofing and Traffic Coatings Tampa"
        serviceDescription="Traffic-bearing balcony and walkway waterproofing for condominium, multi-family, and commercial buildings in Tampa Bay. Membrane system selection, slope-to-drain restoration, detailing at thresholds, drains and railing bases, and coordination with concrete repair."
        serviceCategories={["Balcony Waterproofing", "Traffic Coatings", "Walkway Coatings", "Deck Membrane Systems", "Slope to Drain Restoration"]}
      />

      <Breadcrumb items={[
        { name: "Services", href: "/commercial/" },
        { name: "Balcony Waterproofing & Traffic Coatings", href: "/balcony-waterproofing-and-traffic-coatings/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
            alt="Balcony deck surface on a Tampa Bay multi-family building"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">Tampa Bay Balcony &amp; Walkway Coating Systems</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Balcony Waterproofing &amp; Traffic Coatings in Tampa
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              A balcony has to be watertight and walked on at once. Florida Construction Specialists specifies traffic-bearing systems for the deck you actually have, restores the slope, and details the edges where these systems really fail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule a Deck Assessment
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
              The Only Envelope Surface People Stand On
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Most of a building's water barrier is left alone once it is installed. Balconies and elevated walkways are the exception: they are horizontal, they are fully exposed, and residents walk on them, put furniture on them, and drag things across them. A traffic-bearing system has to do the waterproofing job and the flooring job at the same time, which is why it is built in layers. Primer for adhesion, a membrane that does the waterproofing, reinforcement at every detail, and an aggregate-filled wear coat that takes the abuse so the membrane does not.
              </p>
              <p>
                What actually fails is almost never the middle of the deck. It is the threshold where the slider meets the slab, the base of a railing post, the ring around a drain, the termination where the membrane runs up a wall. Those are the places water is pushed into by wind-driven rain, and they are the places where a coating job is either detailed properly or quietly compromised on the day it is installed.
              </p>
              <p>
                A coating warranty is only worth something if the same party owns the concrete under it and the guards set into it, which is why Florida Construction Specialists runs all three as one scope and is always the prime contractor, never a subcontractor. We have worked in this market since 1982 under Certified Building Contractor license CBC1262722. Balcony waterproofing is one discipline within our <Link href="/building-envelope-waterproofing/">building envelope waterproofing</Link> practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <ContentParallax
        src="/images/fcs-commercial-exterior-waterproofing/fcs-commercial-exterior-waterproofing-large.webp"
        alt="Waterproofing membrane installation on a Tampa Bay commercial building"
        title="Watertight and Walkable"
        subtitle="Traffic-bearing systems for balconies and elevated walkways across Tampa Bay"
        overlayOpacity={0.55}
      />

      {/* Why Tampa Bay */}
      <section className="section bg-brand-green-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <ThermometerSun className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                What Tampa Bay Does to a Balcony Deck
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Three forces work on these surfaces at once. Ultraviolet exposure attacks the wear coat continuously, because a balcony deck faces the sky with nothing shading it. Thermal cycling expands and contracts the deck daily, which is felt hardest at joints and terminations rather than in the field. And water arrives sideways. Wind-driven rain during the June-through-November storm season pushes water up under thresholds and lifted edges that would shed a vertical rainfall without difficulty.
              </p>
              <p>
                Between events the climate refuses to let anything dry. A deck that has taken on water through a failed detail stays damp underneath the coating, and the concrete below keeps corroding out of sight. Hurricane Ian in 2022 and Hurricane Idalia in 2023 exposed decks across the region with one thing in common: the coating looked serviceable and the detailing was not.
              </p>
              <p>
                This is why we assess a deck before quoting a coating. A membrane over a deck with lost slope, a failed threshold, or delaminating concrete underneath is money spent on the symptom.
              </p>
            </div>
            <CodeReference
              code="Florida Building Code, 2023 revision"
              section="Coastal construction and wind-borne debris regions"
              description="Florida's 2023 code revision raises structural standards for coastal construction and governs the openings and assemblies that meet a balcony deck. Thresholds, doors, and guards all intersect the waterproofing, so a coating scope has to be coordinated with those elements rather than applied around them."
            />
          </div>
        </div>
      </section>

      {/* System types */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Droplets className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                Choosing a System for the Deck You Have
              </h2>
              <p className="text-xl text-gray-600">
                Geometry, access, and whether people are living there usually decide this. Product preference comes a distant fourth.
              </p>
            </div>
            <div className="space-y-4">
              {systemTypes.map((s) => (
                <div key={s.name} className="bg-gray-50 rounded-xl p-6 flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="sm:w-72 flex-shrink-0">
                    <span className="font-bold text-brand-green-dark text-lg">{s.name}</span>
                  </div>
                  <p className="text-gray-600">{s.note}</p>
                </div>
              ))}
            </div>
            <div className="prose prose-lg max-w-none text-gray-600 mt-10">
              <p>
                On occupied condominium buildings the practical answer is usually a cold liquid-applied system: no heating plant on a residential site, no odor and heat near open sliders, and enough flexibility to detail around the awkward geometry that older balconies always turn out to have. Where a deck is large, simple, and accessible, other systems become competitive. Manufacturer system warranties are available on most of these where the work is done by an applicator that manufacturer approves and the specified build-up is achieved. Confirm that in writing before the work, not after it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <HardHat className="w-12 h-12 text-brand-green mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Where These Systems Actually Fail
              </h2>
              <p className="text-gray-600 mb-6">
                The field of a deck is the easy part. Every failure we are called to investigate traces back to a transition: a termination that stops below where water reaches, a threshold with no upturn, a drain whose clamping ring never compressed the membrane, a railing base sealed with caulk instead of flashed.
              </p>
              <p className="text-gray-600">
                So the specification is written detail by detail, and each one is executed with reinforcement embedded in the membrane rather than relying on sealant to hold a corner. Where a threshold or drain is in the wrong place, we say so. Moving a drain is cheaper than coating around it twice.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors mt-4"
              >
                Discuss Your Building <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">
                Details We Specify and Execute:
              </h3>
              <ul className="space-y-3">
                {detailPoints.map((item) => (
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

      {/* Sequence */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Wrench className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                How a Deck Project Runs
              </h2>
              <p className="text-xl text-gray-600">
                Substrate first, slope second, membrane third. Reversing that order is the most expensive mistake available on a balcony.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Assess the substrate</h3>
                <p>
                  The deck is sounded for delamination and inspected at every detail before any product is specified. A membrane can only be as sound as the concrete it bonds to, so deteriorated slabs are repaired first under our <Link href="/concrete-balcony-restoration/">concrete balcony restoration</Link> scope. Moisture in the slab is checked as well. Applying over a wet substrate is how blisters appear a month later.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Re-establish slope and drainage</h3>
                <p>
                  Where the deck ponds, slope is restored with a topping or by re-profiling during the concrete repair, and drains and scuppers are cleared or replaced so water has somewhere to go. This step is skipped surprisingly often, and it is the difference between a coating that ages normally and one that is under standing water for hours after every storm.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Prepare, prime, and detail</h3>
                <p>
                  Surface preparation is mechanical, to the profile the system requires, and the details are treated before the field: upturns at walls, reinforcement at thresholds and railing bases, membrane clamped properly at drains. Detail work done ahead of the field coats is what gives a deck continuity rather than a series of patched-in corners.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Build up the system and wear coat</h3>
                <p>
                  Coats are applied to the specified thickness and cure times observed rather than compressed to make a schedule. The aggregate-filled wear coat provides traction and takes the abrasion. Color is chosen with the building's other exterior work in mind, since balconies read as a continuous band from the street.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Test, hand over, and maintain</h3>
                <p>
                  Completed decks are water-tested where conditions allow, documented for the association's records, and handed over with a maintenance schedule: keep drains clear, address damage before it spreads, and recoat the wear surface before it is worn through to the membrane. That last item is what determines whether the system reaches its potential service life or half of it.
                </p>
              </div>
            </div>

            <ContentImage
              src="/images/fcs-exterior-waterproofing/fcs-exterior-waterproofing-display.webp"
              alt="Waterproofing membrane being applied to a prepared surface"
              caption="Details are treated before the field coats, not patched in afterwards"
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
                Coating Decks on an Occupied Building
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                A balcony under coating is out of use through application and cure, and residents need to know exactly how long that is before it starts. We phase the work across groups of units, give notice through the property manager, and agree work hours in advance. Sliders on the affected units stay closed during application. In this climate that is a real imposition, and it is worth scheduling honestly rather than optimistically.
              </p>
              <p>
                Weather governs everything. Coatings need a dry substrate and a window without rain, which in a June-through-November storm season means planning around forecasts and being willing to stop. We would rather lose a day than apply into a shower and be back the following year.
              </p>
              <p>
                Where coating work follows concrete repair or accompanies guard replacement, all of it is sequenced under one contract so the deck is opened once. Guard work is described on our <Link href="/balcony-railing-replacement/">balcony railing replacement</Link> page.
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
              Why Tampa Bay Owners Choose FCS for Deck Work
            </h2>
            <p className="text-gray-600">
              Florida Construction Specialists is always the prime contractor, never a subcontractor. The concrete under the coating, the coating, and the guards set into it are one scope with one accountable party.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Prime Contractor</h3>
              <p className="text-gray-600">Substrate, membrane, and guards under a single contract and a single warranty conversation.</p>
            </div>
            <div className="card text-center p-6">
              <Wrench className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">In-House Engineering</h3>
              <p className="text-gray-600">An engineer and architectural draftsman detail transitions before the crew reaches them.</p>
            </div>
            <div className="card text-center p-6">
              <Building2 className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Occupied Buildings</h3>
              <p className="text-gray-600">Phased balcony work with board coordination and honest out-of-service windows.</p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Since 1982</h3>
              <p className="text-gray-600">44 years waterproofing in the Florida climate, under license CBC1262722.</p>
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
              Balcony Waterproofing Service Areas
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-center">
              Florida Construction Specialists waterproofs balconies and elevated walkways throughout Tampa and the wider Tampa Bay region, including St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, Bradenton, and Ruskin, where our office is located. Our deck work concentrates on condominium, multi-family, and commercial properties across Hillsborough County and the Central Tampa Bay corridor.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="Balcony Waterproofing & Traffic Coating FAQs" />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Have the Deck Assessed Before You Buy a Coating
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a balcony deck assessment with Florida Construction Specialists. We check the substrate, the slope, and every detail, then specify a system that has something sound to bond to.
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

      <RelatedArticles pageSlug="balcony-waterproofing-traffic-coatings" />

      {/* Related Guides — de-orphan internal links */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Waterproofing Guides"
            links={[
              { label: "Balcony Waterproofing For Long Lasting Protection", href: "/commercial/guides/balcony-waterproofing-for-long-lasting-protection/" },
              { label: "Balcony Restoration And Exterior Waterproofing For Longevity", href: "/commercial/guides/balcony-restoration-and-exterior-waterproofing-for-longevity/" },
              { label: "Top Balcony Flooring Materials For Style Durability", href: "/commercial/guides/top-balcony-flooring-materials-for-style-durability/" },
              { label: "Discover The Best Balcony Decking Options For Outdoor Spaces", href: "/commercial/guides/discover-the-best-balcony-decking-options-for-outdoor-spaces/" },
              { label: "Choosing The Right Waterproofing Solution Your Ultimate Guide", href: "/commercial/guides/choosing-the-right-waterproofing-solution-your-ultimate-guide/" },
              { label: "Effective Balcony Maintenance Tips", href: "/commercial/guides/effective-balcony-maintenance-tips/" }
            ]}
          />
        </div>
      </section>
    </>
  );
}