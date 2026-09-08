import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award, AlertTriangle, Wrench, ClipboardCheck, HardHat, Layers, MapPin } from "lucide-react";
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
  alternates: { canonical: 'https://floridaconstructionspecialists.com/post-tension-and-structural-slab-repair/' },
  title: "Post-Tension & Structural Slab Repair Tampa",
  description: "Post-tension and structural slab repair in Tampa for condominium, multi-family, and commercial buildings. Tendon locating, anchorage repair, slab soffit restoration, and engineered scopes delivered as prime contractor. CBC1262722, since 1982.",
  openGraph: {
    title: "Post-Tension & Structural Slab Repair Tampa",
    description: "Post-tension and structural slab repair in Tampa for condominium, multi-family, and commercial buildings. Tendon locating, anchorage repair, slab soffit restoration, and engineered scopes delivered as prime contractor.",
    url: "https://floridaconstructionspecialists.com/post-tension-and-structural-slab-repair/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const slabScope = [
  "Non-destructive tendon and reinforcement locating before any cutting",
  "Slab soffit and topside delamination mapping",
  "Anchorage and slab-edge investigation at pocket locations",
  "Engineered repair details and shoring layouts",
  "Selective removal with tendons identified and protected",
  "Supplemental mild reinforcement where the design calls for it",
  "Specialty tendon work performed under our contract",
  "Repair, re-profile, cure, and protect the finished slab",
];

const failurePoints = [
  { sign: "Rust staining or blowout at a slab edge pocket", meaning: "Anchorage corrosion, the most common post-tension failure point" },
  { sign: "A longitudinal crack tracing a tendon line", meaning: "Corrosion along the sheathing rather than random shrinkage" },
  { sign: "Hollow-sounding soffit under a suspended slab", meaning: "Delamination above the bottom reinforcement mat" },
  { sign: "Water ponding on a deck or topping slab", meaning: "Standing water feeding the mechanism from above" },
  { sign: "Efflorescence on the underside of a slab", meaning: "Water passing through the full slab section" },
  { sign: "A snapped or slipped tendon reported after coring", meaning: "Cutting done without locating first. Stop and assess." },
];

const faqs = [
  {
    "question": "Can a post-tension slab be repaired?",
    "answer": "Yes. Post-tension slabs are repaired routinely, and the scope depends on what has actually deteriorated. Anchorage corrosion at a slab edge can often be addressed by exposing the pocket, repairing or re-anchoring the tendon end, and rebuilding the edge. Localized corrosion along a strand may call for splicing or replacing a length of tendon. Where several tendons in one area are compromised, the design may add external post-tensioning or supplemental mild reinforcement instead. What is never appropriate is patching the concrete over a corroded tendon and treating the problem as cosmetic."
  },
  {
    "question": "Why is coring or saw-cutting a post-tension slab dangerous?",
    "answer": "Tendons in a post-tension slab are held under high tension permanently, and a strand cut without warning releases that energy suddenly. That is a serious safety hazard to anyone nearby and can also cost the slab structural capacity across the full length of the tendon, not just at the cut. Every penetration, core, or removal in a post-tension slab is therefore preceded by non-destructive locating so the tendon layout is known before any blade touches concrete."
  },
  {
    "question": "Where do post-tension slabs usually fail first in Florida?",
    "answer": "At the anchorages, along the slab edge. The anchorage pocket is a penetration through the slab perimeter that was patched after stressing, and if that patch was poorly executed or has since cracked, water reaches the tendon end directly. Corrosion at an anchorage can progress a long way before anything is visible other than a rust stain or a small spall at the edge. Our climate keeps concrete damp year-round, so that path never closes."
  },
  {
    "question": "Do you perform the tendon work yourselves?",
    "answer": "Florida Construction Specialists is always the prime contractor and never a subcontractor. We hold the repair contract, coordinate the investigation and the engineered design, and carry out the concrete restoration around the tendon work. Where specialty post-tension operations are required, they are performed under our contract to the engineer's design, with our team responsible for sequencing, shoring, protection of adjacent tendons, and the finished result. The owner deals with one accountable party rather than refereeing between trades."
  },
  {
    "question": "How does slab repair fit into a milestone inspection?",
    "answer": "Milestone structural inspections under Florida Statute 553.899 apply to condominium and cooperative buildings three stories or higher at 30 years of age, or 25 years if within three miles of the coastline, then every 10 years. Suspended slabs, parking decks, and slab edges are among the elements those inspections examine most closely. The report identifies conditions; it does not produce a repair. Florida Construction Specialists converts those findings into an engineered scope and performs the work under Certified Building Contractor license CBC1262722."
  },
  {
    "question": "What areas do you serve for post-tension and structural slab repair?",
    "answer": "We work throughout Tampa and the wider Tampa Bay region, including St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, Bradenton, and Ruskin, where our office is located. Slab and post-tension work concentrates on condominium, multi-family, and commercial buildings across Hillsborough County and the Central Tampa Bay corridor."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Post-Tension & Structural Slab Repair", href: "/post-tension-and-structural-slab-repair/" },
];

export default function PostTensionAndStructuralSlabRepairPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Post-Tension and Structural Slab Repair Tampa"
        serviceDescription="Post-tension and structural slab repair for condominium, multi-family, and commercial buildings in Tampa Bay. Tendon locating, anchorage investigation and repair, slab soffit restoration, shoring, and engineered repair scopes delivered as prime contractor."
        serviceCategories={["Post-Tension Repair", "Structural Slab Repair", "Anchorage Repair", "Parking Deck Restoration", "Milestone Inspection Remediation"]}
      />

      <Breadcrumb items={[
        { name: "Services", href: "/commercial/" },
        { name: "Post-Tension & Structural Slab Repair", href: "/post-tension-and-structural-slab-repair/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-concrete-restoration.webp"
            alt="Structural slab repair on a Tampa Bay multi-family building"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">Tampa Bay Condominium &amp; Commercial Slab Repair</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Post-Tension &amp; Structural Slab Repair in Tampa
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              In a post-tension slab, nothing gets cut until the tendons have been located. Florida Construction Specialists investigates first, builds to an engineered detail, and carries the whole slab scope as prime contractor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule a Slab Assessment
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
              A Slab That Is Holding Itself in Compression
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                A post-tension slab is more than a concrete slab with steel in it. High-strength strands run through the slab and are stressed after the concrete has cured, permanently squeezing the slab into compression so it can span further and sit thinner than conventional reinforcement would allow. That compression is doing structural work every second of the building's life, and it is anchored at pockets along the slab edge. Once you understand that, everything about how the slab is investigated, cut, and repaired changes.
              </p>
              <p>
                It also changes what failure looks like. Conventional reinforcement corrodes gradually and announces itself with spalling. A post-tension tendon can lose section inside its sheathing with very little showing on the surface, and losing one affects its whole length rather than one square foot. This is why post-tension slab repair is investigation-led work: find the tendons, find what has corroded, and only then decide what to remove.
              </p>
              <p>
                On a slab project that means one party has to own the investigation, the engineered detail, the concrete work, the specialty tendon operations, and the protection that goes back over the finished slab. Florida Construction Specialists is always the prime contractor and never a subcontractor, so all of that runs under our contract. We have worked in this market since 1982 under Certified Building Contractor license CBC1262722. Slab and post-tension work sits within our <Link href="/condo-multi-family-structural/">condominium and multi-family structural restoration</Link> practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <ContentParallax
        src="/images/construction/construction-large.webp"
        alt="Reinforced concrete structure and formwork on a commercial project"
        title="Locate First, Cut Second"
        subtitle="Post-tension and structural slab repair for Tampa Bay buildings"
        overlayOpacity={0.6}
      />

      {/* Failure points */}
      <section className="section bg-brand-green-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <AlertTriangle className="w-12 h-12 text-brand-gold mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Where These Slabs Actually Fail
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  Anchorages come first, and by a wide margin. The pocket at the slab edge where a tendon was stressed is a hole through the perimeter that was patched afterwards, and any weakness in that patch gives water a direct route to the end of the strand. Slab edges are exactly where a storm season drives rain sideways against a building, and with summer humidity in the region averaging around 75 percent, that route stays wet.
                </p>
                <p>
                  The second place is anywhere the sheathing was damaged during original construction, letting water travel along the strand. The third is not the tendon at all. It is ordinary corrosion of the mild reinforcement in the same slab, which produces the same soffit staining and demands its own scope. Telling those three apart is the point of the investigation.
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
                {failurePoints.map((item) => (
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

      {/* Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Wrench className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                How the Work Is Sequenced
              </h2>
              <p className="text-xl text-gray-600">
                On a post-tension slab, the sequence is the safety plan as much as it is the method statement.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Locate before anything is opened</h3>
                <p>
                  Non-destructive scanning maps tendon and reinforcement layout across the work area, and the layout is marked on the slab itself. Original drawings help but are not enough on their own. As-built tendon positions drift from the drawings, and later renovations add penetrations nobody recorded. Every core, anchor, and saw cut is planned against the marked layout, not against the drawing.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Investigate the anchorages and the slab</h3>
                <p>
                  Selected anchorage pockets are opened to examine the strand end and the condition of the original patch, and the slab is sounded above and below to map delamination. The aim is to establish whether deterioration is anchorage-specific, tendon-specific, or general corrosion of mild steel. Each of those is a different problem with a different scope and a different budget.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Engineer the repair</h3>
                <p>
                  Findings go to our engineer, who determines what capacity has been lost, how it will be restored, and what temporary support is needed while the slab is opened. The output is a drawn detail: removal limits, tendon treatment, supplemental reinforcement, materials, and the shoring layout. This is the step that keeps repairs from being invented on the deck.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Remove, repair, and restore capacity</h3>
                <p>
                  Concrete is removed within the marked limits with tendons identified and protected throughout. Corroded mild steel is cleaned and treated or supplemented. Where the design calls for tendon repair, whether re-anchoring, splicing, replacement, or external post-tensioning, that specialty work is carried out under our contract to the engineer's detail. Concrete is then placed, consolidated around the steel, and finished back to profile and slope.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Cure, verify, and protect</h3>
                <p>
                  Repairs are cured properly rather than left to dry in the Florida heat, and shoring stays until verified strength is reached. Because water is what started the deterioration, exposed decks and slab edges get a protection scope afterwards: traffic coatings, joint sealants, and corrected drainage, coordinated so it is not a second mobilization months later. Related surface work is covered under our <Link href="/balcony-waterproofing-and-traffic-coatings/">balcony waterproofing and traffic coatings</Link> scope.
                </p>
              </div>
            </div>

            <ContentImage
              src="/images/fcs-commercial-exterior-waterproofing/fcs-commercial-exterior-waterproofing-display.webp"
              alt="Protective coating applied over a repaired concrete deck"
              caption="A repaired slab stays repaired only if water is kept out of it"
              position="center"
            />
          </div>
        </div>
      </section>

      {/* Scope list */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <Layers className="w-12 h-12 text-brand-green mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                What a Slab Scope Covers
              </h2>
              <p className="text-gray-600 mb-6">
                Not every structural slab is post-tensioned, and not every problem in a post-tension slab involves a tendon. Conventionally reinforced suspended slabs, topping slabs, and parking decks are repaired under the same engineered approach without the tendon-specific steps. Columns, beams, and stem walls are covered under <Link href="/structural-concrete-repair/">structural concrete repair</Link>.
              </p>
              <p className="text-gray-600">
                Where the slab in question is a balcony, its repair carries additional constraints around resident access and the waterproofing interface, and is handled as <Link href="/concrete-balcony-restoration/">concrete balcony restoration</Link>.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">
                Typical Scope Elements
              </h3>
              <ul className="space-y-3">
                {slabScope.map((item) => (
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

      {/* Occupied buildings + code */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <ClipboardCheck className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                Slab Repair on a Building That Stays in Use
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Structural slabs are floors, decks, and ceilings, so repairing them takes space out of service. Shored areas cannot be occupied or parked on, and they stay shored through the cure. A parking deck is the usual test case: enough of it has to stay usable to hold the building's cars while the work rotates through, which means the phase plan is drawn around the tendon layout and the parking layout at the same time.
              </p>
              <p>
                Notice, work hours, dust containment, and daily cleanup are agreed with the property manager before mobilization rather than negotiated during it. The tendon scan, the opened anchorages, and the finished repairs are all recorded, so the owner ends up with an as-built map of the slab that did not exist before. Buildings working through inspection requirements can see our <Link href="/sb4d-compliance/">SB 4-D compliance</Link> work.
              </p>
            </div>
            <CodeReference
              code="Florida Statute 553.899"
              section="Milestone Inspections"
              description="Requires milestone structural inspections for condominium and cooperative buildings three stories or higher at 30 years of age, or 25 years if within three miles of the coastline, then every 10 years thereafter. Suspended slabs, parking decks, and slab edges are examined closely, and findings must be converted into an engineered repair scope before any work is bid."
              link="https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.899.html"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-brand-green-bg">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              One Accountable Party for the Whole Slab
            </h2>
            <p className="text-gray-600">
              Florida Construction Specialists is always the prime contractor, never a subcontractor. Investigation, engineering, concrete, specialty tendon work, and protection are coordinated under one contract instead of split across four.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Prime Contractor</h3>
              <p className="text-gray-600">Single accountability across investigation, repair, and protection.</p>
            </div>
            <div className="card text-center p-6">
              <Wrench className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">In-House Engineering</h3>
              <p className="text-gray-600">Repair details and shoring layouts drawn on staff before work starts.</p>
            </div>
            <div className="card text-center p-6">
              <Building2 className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Occupied Buildings</h3>
              <p className="text-gray-600">Phased work on live decks and residential structures across Tampa Bay.</p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Since 1982</h3>
              <p className="text-gray-600">44 years of Florida structural work under license CBC1262722.</p>
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
              Post-Tension &amp; Slab Repair Service Areas
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-center">
              Florida Construction Specialists performs post-tension and structural slab repair throughout Tampa and the wider Tampa Bay region, including St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, Bradenton, and Ruskin, where our office is located. Our work concentrates on condominium, multi-family, and commercial buildings across Hillsborough County and the Central Tampa Bay corridor.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="Post-Tension & Structural Slab Repair FAQs" />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Find Out What Is Happening Inside the Slab
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a slab assessment with Florida Construction Specialists. We locate the tendons, open the anchorages that matter, and give you an engineered scope you can budget and defend.
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

      <RelatedArticles pageSlug="post-tension-structural-slab-repair" />

      {/* Related Guides — de-orphan internal links */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Structural &amp; Inspection Guides"
            links={[
              { label: "Condo Milestone Inspection Remediation Tampa", href: "/commercial/guides/condo-milestone-inspection-remediation-tampa/" },
              { label: "Condo Structural Reserve Study Repairs", href: "/commercial/guides/condo-structural-reserve-study-repairs/" },
              { label: "Condo Balcony Inspection Requirements", href: "/commercial/guides/condo-balcony-inspection-requirements/" },
              { label: "Historic Building Structural Assessment In Tampa", href: "/commercial/guides/historic-building-structural-assessment-in-tampa/" },
              { label: "Balcony Safety Measures", href: "/commercial/guides/balcony-safety-measures/" }
            ]}
          />
        </div>
      </section>
    </>
  );
}