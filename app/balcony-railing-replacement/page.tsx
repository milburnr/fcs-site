import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award, AlertTriangle, Wrench, ClipboardCheck, Droplets, HardHat, MapPin } from "lucide-react";
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
  alternates: { canonical: 'https://floridaconstructionspecialists.com/balcony-railing-replacement/' },
  title: "Balcony Railing Replacement Tampa | Condo & Multi-Family",
  description: "Balcony railing replacement in Tampa for condominium and multi-family buildings. Corroded post repair, surface-mounted attachment, waterproofing integration, and code-compliant guards. Certified Building Contractor CBC1262722, since 1982.",
  openGraph: {
    title: "Balcony Railing Replacement Tampa | Condo & Multi-Family",
    description: "Balcony railing replacement in Tampa for condominium and multi-family buildings. Corroded post repair, surface-mounted attachment, waterproofing integration, and code-compliant guards. Certified Building Contractor since 1982.",
    url: "https://floridaconstructionspecialists.com/balcony-railing-replacement/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const railingScope = [
  "Condition survey of every post base, not a sample",
  "Concrete repair at embedded and blown-out post pockets",
  "Guard system selection matched to exposure and maintenance",
  "Surface-mounted base plates with flashed, sealed penetrations",
  "Anchors specified for the substrate actually present",
  "Membrane and sealant integration at every base",
  "Code-compliant heights, infill, and load capacity",
  "Phased installation on occupied buildings",
];

const failureModes = [
  { sign: "A post that moves when pushed", meaning: "Corroded embedment or degraded concrete around it" },
  { sign: "Rust bleeding from the base of a post", meaning: "Water sitting in the pocket and corroding steel inside" },
  { sign: "Cracked or spalled concrete radiating from a post", meaning: "Expanding rust splitting the slab edge apart" },
  { sign: "Pitting and chalking across an aluminum guard", meaning: "Salt-air exposure past the point of refinishing" },
  { sign: "Stained, delaminated coating below the railing line", meaning: "Water tracking down the post and through the deck" },
  { sign: "Infill that a child could pass through", meaning: "A guard that no longer meets current requirements" },
];

const faqs = [
  {
    "question": "Why do balcony railings fail in Tampa Bay?",
    "answer": "Almost always at the base rather than in the rail itself. A post embedded directly into the concrete slab creates a permanent path for water into the deck. Once water sits in that pocket, the embedded steel corrodes, expanding rust cracks the surrounding concrete, and the post loosens. Our climate speeds up every stage of it. Summer relative humidity in the region averages around 75 percent, and the June-through-November storm season drives rain sideways at exactly the height where balcony guards sit."
  },
  {
    "question": "What do Florida's requirements say about balcony railings?",
    "answer": "Guards on balconies and elevated walkways have to meet the Florida Building Code for height, infill spacing, and the lateral load they can resist. Older railings frequently fall short on one or more of those points, either because requirements have changed since installation or because corrosion has reduced what the connection can actually carry. Replacement is the point at which a building brings its guards up to current requirements, so the specification is written against the code in force rather than matching what was there."
  },
  {
    "question": "Should railing posts be embedded in the concrete or surface-mounted?",
    "answer": "Surface-mounted base plates are generally the better detail on a waterproofed balcony. An embedded post penetrates the deck permanently and is difficult to flash reliably; a base plate sits on top of the finished waterproofing with its anchors flashed and sealed, which keeps the penetration inspectable and repairable. Embedded posts remain appropriate in some conditions, but on a restored balcony the surface-mounted detail is usually what protects the work underneath it."
  },
  {
    "question": "Can railings be replaced without doing concrete work?",
    "answer": "Sometimes, but it is worth checking before assuming so. Where posts have been corroding, the concrete at each base has usually deteriorated with them, and setting new railings into damaged concrete simply relocates the problem. We survey the post bases first. If the slab edge is sound, replacement proceeds on its own; if not, the concrete repair is scoped alongside it under our concrete balcony restoration service so the new guard is anchored into something that will hold."
  },
  {
    "question": "How disruptive is a building-wide railing replacement?",
    "answer": "Each balcony is out of service while its guard is off, and an unguarded opening several floors up is a hazard in its own right, so temporary protection goes up the moment a guard comes down. We work in groups of units so residents lose their balcony for a defined window instead of the whole project. Access, notice, work hours, and daily cleanup are agreed with the property manager before mobilization, and progress is reported to the board on a fixed schedule."
  },
  {
    "question": "What areas do you serve for balcony railing replacement?",
    "answer": "We work throughout Tampa and the wider Tampa Bay region, including St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, Bradenton, and Ruskin, where our office is located. Railing replacement work concentrates on condominium, multi-family, and commercial buildings across Hillsborough County and the Central Tampa Bay corridor."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Balcony Railing Replacement", href: "/balcony-railing-replacement/" },
];

export default function BalconyRailingReplacementPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Balcony Railing Replacement Tampa"
        serviceDescription="Balcony railing and guard replacement for condominium, multi-family, and commercial buildings in Tampa Bay. Post base condition survey, concrete repair at post locations, surface-mounted attachment, waterproofing integration, and code-compliant guard systems."
        serviceCategories={["Railing Replacement", "Guard Systems", "Post Base Repair", "Balcony Restoration", "Milestone Inspection Remediation"]}
      />

      <Breadcrumb items={[
        { name: "Services", href: "/commercial/" },
        { name: "Balcony Railing Replacement", href: "/balcony-railing-replacement/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/railing-replacement-best-practices-condos/railing-replacement-best-practices-condos-large.webp"
            alt="Balcony railings on a Tampa Bay condominium building"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">Tampa Bay Condominium &amp; Multi-Family Guard Replacement</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Balcony Railing Replacement in Tampa
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              A loose railing is rarely a railing problem. It is usually a post base that has been corroding inside the slab for years. Florida Construction Specialists replaces the guard and repairs what it is anchored to, as one scope.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule a Railing Survey
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
              The Railing Is a Structural Connection, Not a Fixture
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Search for railing work in Tampa and most of what comes back is fabrication: ornamental ironwork, handrails, deck railings for houses. A condominium guard is a different job. It has to resist a defined lateral load with people leaning on it several stories up, it is anchored into a concrete slab that has been weathering for decades, and every anchor is a hole through a waterproofing system that is protecting the units below. The metal is the easy part.
              </p>
              <p>
                That is why railing replacement on a multi-family building starts at the base rather than at the top rail. A post cast directly into the slab gives water a permanent route in; the embedded steel corrodes, expanding rust cracks the concrete around it, and eventually the post is being held by concrete that has already failed. Bolt a new guard into that same damaged pocket and you get a railing that is loose again within a few seasons.
              </p>
              <p>
                Three trades touch a railing base: concrete, metal, and waterproofing. When they belong to three companies, each one blames the other when the post moves. Florida Construction Specialists is always the prime contractor and never a subcontractor, so the base repair, the guard, and the membrane detail are one scope with one name on it. We have worked in this market since 1982 under Certified Building Contractor license CBC1262722. Railing replacement sits within our <Link href="/condo-multi-family-structural/">condominium and multi-family structural restoration</Link> practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <ContentParallax
        src="/images/tampa-condo-balcony-restoration/tampa-condo-balcony-restoration-small.webp"
        alt="Condominium balcony restoration work underway in Tampa Bay"
        title="Replace the Guard, Repair What Holds It"
        subtitle="Railing replacement for condominium and multi-family buildings across Tampa Bay"
        overlayOpacity={0.55}
      />

      {/* Failure modes */}
      <section className="section bg-brand-green-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <AlertTriangle className="w-12 h-12 text-brand-gold mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                What a Failing Guard Looks Like
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  Residents notice movement. What we look for is the evidence around the base: rust bleeding onto the deck, hairline cracks radiating from a post, coating that has lifted in a ring around the penetration. Those are the signs that water has been inside the connection for a long time, and they usually appear on many balconies at once because every post on the building shares the same detail and the same age.
                </p>
                <p>
                  Guards themselves fail more slowly. Aluminum systems chalk and pit under salt-air exposure, welds crack where movement was never accommodated, and infill that was acceptable when the building went up may no longer meet current requirements. Replacement is the moment those get corrected rather than carried forward.
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
                {failureModes.map((item) => (
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

      {/* Code */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <ClipboardCheck className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                Replacing to Current Requirements
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                A replacement guard is specified against the Florida Building Code in force, not against the railing being removed. That covers guard height, the spacing of infill, and the lateral load the assembly and its anchorage have to resist. Where the original railing predates current requirements, replacement is the point at which the building catches up. Doing it deliberately, with the specification written down, is what gives an association a defensible record afterwards.
              </p>
              <p>
                Anchorage is where specifications most often go wrong in practice. The capacity of a base plate is only as good as what it is bolted into, so anchor type, embedment, and edge distance are selected for the substrate actually present at the slab edge, which on an older building may be thinner or more deteriorated than the drawings suggest. That is a determination made from the condition survey, and it is why we survey every post base rather than a representative sample.
              </p>
            </div>
            <CodeReference
              code="Florida Building Code, 2023 revision"
              section="Guards and wind-borne debris regions"
              description="The Florida Building Code governs guard height, infill spacing, and load resistance, and the 2023 revision raised structural standards for coastal construction. Balcony guards are exterior assemblies in a high-exposure environment, so replacement specifications address corrosion resistance and anchorage as well as geometry."
            />
          </div>
        </div>
      </section>

      {/* The waterproofing interface */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Droplets className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                Every Anchor Is a Hole in the Waterproofing
              </h2>
              <p className="text-xl text-gray-600">
                A guard installed without regard for the membrane it penetrates undoes the deck repair beneath it.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Surface-mounted rather than embedded</h3>
                <p>
                  Embedded posts penetrate the slab permanently and are almost impossible to reliably flash. Surface-mounted base plates sit on top of the finished waterproofing, so the penetration is limited to the anchors, and those can be flashed, sealed, and inspected later. On a balcony that has just been restored, that difference decides whether the new membrane keeps working.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Sequencing with the deck</h3>
                <p>
                  Railing replacement, concrete repair, and waterproofing want to happen in a specific order: repair the slab edge, install the membrane and detail the perimeter, then set the guards into flashed penetrations. Doing them as separate projects months apart means the deck gets opened up twice and the second trade takes responsibility for the first one's work. Running them as one scope is both cheaper for the association and clearer when something needs to be put right.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Repairing the base before setting the post</h3>
                <p>
                  Where the survey finds spalled or cracked concrete at a post location, that concrete is removed to sound material, the reinforcement treated, and the edge rebuilt before any anchor goes in. Anchoring into damaged concrete gives a connection that tests fine on the day and loosens under the first real wind load. That repair work is covered by our <Link href="/concrete-balcony-restoration/">concrete balcony restoration</Link> scope and is normally run in the same mobilization.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Protecting the finished deck</h3>
                <p>
                  Once guards are set, the deck coating and perimeter sealants are completed around them so water is shed away from every base rather than collecting at it. That work is covered under <Link href="/balcony-waterproofing-and-traffic-coatings/">balcony waterproofing and traffic coatings</Link>, and it is what determines how long the new railings stay tight.
                </p>
              </div>
            </div>

            <ContentImage
              src="/images/fcs-tiles-on-balcony/fcs-tiles-on-balcony-display.webp"
              alt="Finished balcony deck surface at a Tampa Bay building"
              caption="The finished deck and the guard are one detail, not two trades"
              position="center"
            />
          </div>
        </div>
      </section>

      {/* Scope list */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <HardHat className="w-12 h-12 text-brand-green mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                What a Railing Scope Includes
              </h2>
              <p className="text-gray-600 mb-6">
                Guards are surveyed and priced per balcony, because condition varies with elevation and exposure even on a single building. The result is a scope that tells the board which balconies need concrete work at the base, which need the guard alone, and what the whole program looks like if it is phased across more than one budget year.
              </p>
              <p className="text-gray-600">
                Railings are a life-safety item, so when a milestone inspection flags them the association needs more than an invoice to show the finding was closed. The per-balcony survey, the guard specification, and the anchorage detail are the record. See our <Link href="/sb4d-compliance/">SB 4-D compliance</Link> work for how those programs are run.
              </p>
            </div>

            <div className="bg-brand-green-bg rounded-2xl p-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">
                Typical Scope Elements
              </h3>
              <ul className="space-y-3">
                {railingScope.map((item) => (
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

      {/* Why Choose Us */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Associations Bring Railing Work to FCS
            </h2>
            <p className="text-gray-600">
              Florida Construction Specialists is always the prime contractor, never a subcontractor. Concrete, guards, and waterproofing come from one accountable party instead of three who each blame the other.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Prime Contractor</h3>
              <p className="text-gray-600">One contract covering the base repair, the guard, and the membrane detail.</p>
            </div>
            <div className="card text-center p-6">
              <Wrench className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">In-House Engineering</h3>
              <p className="text-gray-600">An engineer and architectural draftsman on staff detail the anchorage before it is built.</p>
            </div>
            <div className="card text-center p-6">
              <Building2 className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Occupied Buildings</h3>
              <p className="text-gray-600">Phased balcony-by-balcony work with board and property manager coordination.</p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Since 1982</h3>
              <p className="text-gray-600">44 years working on Florida balconies under license CBC1262722.</p>
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
              Balcony Railing Replacement Service Areas
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-center">
              Florida Construction Specialists replaces balcony guards throughout Tampa and the wider Tampa Bay region, including St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, Bradenton, and Ruskin, where our office is located. Our railing work concentrates on condominium, multi-family, and commercial buildings across Hillsborough County and the Central Tampa Bay corridor.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="Balcony Railing Replacement FAQs" />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Have the Post Bases Surveyed Before You Buy Railings
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a railing survey with Florida Construction Specialists. We check every base, tell you which balconies need concrete work first, and price the program so it can be phased.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Survey
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

      <RelatedArticles pageSlug="balcony-railing-replacement" />

      {/* Related Guides — de-orphan internal links */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Balcony &amp; Safety Guides"
            links={[
              { label: "Balcony Safety Measures", href: "/commercial/guides/balcony-safety-measures/" },
              { label: "Stylish Balcony Railing Designs For Your Outdoor Space", href: "/commercial/guides/stylish-balcony-railing-designs-for-your-outdoor-space/" },
              { label: "Condo Balcony Inspection Requirements", href: "/commercial/guides/condo-balcony-inspection-requirements/" },
              { label: "Expert Balcony Construction Guidelines For Optimal Results", href: "/commercial/guides/expert-balcony-construction-guidelines-for-optimal-results/" },
              { label: "Effective Balcony Maintenance Tips", href: "/commercial/guides/effective-balcony-maintenance-tips/" },
              { label: "Balcony Restoration Services", href: "/commercial/guides/balcony-restoration-services/" }
            ]}
          />
        </div>
      </section>
    </>
  );
}