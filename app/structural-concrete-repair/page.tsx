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
  alternates: { canonical: 'https://floridaconstructionspecialists.com/structural-concrete-repair/' },
  title: "Structural Concrete Repair Tampa | Columns & Beams",
  description: "Structural concrete repair in Tampa for columns, beams, slabs, stem walls, and parking structures. Engineered repairs with shoring, rebar replacement, and formed or sprayed placement. Certified Building Contractor CBC1262722, since 1982.",
  openGraph: {
    title: "Structural Concrete Repair Tampa | Columns & Beams",
    description: "Structural concrete repair in Tampa for columns, beams, slabs, stem walls, and parking structures. Engineered repairs with shoring, rebar replacement, and formed or sprayed placement. Certified Building Contractor since 1982.",
    url: "https://floridaconstructionspecialists.com/structural-concrete-repair/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const structuralElements = [
  "Columns, pilasters, and column bases",
  "Beams, spandrels, and beam-to-column joints",
  "Suspended slabs and slab soffits",
  "Parking structure decks, ramps, and topping slabs",
  "Stem walls and grade beams",
  "Shear walls and structural masonry infill",
  "Slab edges, drip edges, and cantilevered nosings",
  "Equipment pads and structural curbs",
];

const methods = [
  { name: "Form-and-pour", use: "Full-depth column and beam sections where formwork can be built and concrete placed and vibrated" },
  { name: "Dry-pack and hand-applied mortar", use: "Small, deep cavities and confined areas where formwork is impractical" },
  { name: "Sprayed repair mortar", use: "Large vertical and overhead areas, soffits, and irregular surfaces" },
  { name: "Epoxy injection", use: "Structural cracks that must be restored to monolithic behavior rather than sealed" },
  { name: "Supplemental reinforcement", use: "Bars, dowels, or plates added where section loss has reduced capacity" },
];

const faqs = [
  {
    "question": "What counts as structural concrete repair?",
    "answer": "Structural concrete repair restores load-carrying capacity to elements the building depends on: columns, beams, suspended slabs, parking decks, stem walls, and shear walls. It is a different discipline from concrete resurfacing, slab lifting, or crack sealing, which improve a surface without addressing capacity. The distinction matters practically, because a structural repair has to be designed around what the element carries, sequenced with temporary support, and inspected before the load returns to it."
  },
  {
    "question": "Does structural concrete repair require an engineer?",
    "answer": "Any repair that involves removing concrete from a load-carrying element needs engineering input, both to determine whether temporary shoring is required and to specify how much reinforcement must be restored. Florida Construction Specialists keeps an engineer and an architectural draftsman in house, so assessment findings become drawn repair details rather than field decisions made with a hammer in hand."
  },
  {
    "question": "Do you need to shore the structure during repair?",
    "answer": "Often, yes. Removing deteriorated concrete from a column or beam temporarily reduces the section available to carry load, and the element has to be relieved before that happens rather than after something moves. Shoring design depends on the element, the tributary load above it, and how much material is coming out. Where repairs can be staged so that capacity is never meaningfully reduced, shoring can sometimes be avoided. That determination is made in advance, not improvised."
  },
  {
    "question": "Why does structural concrete deteriorate so quickly in Tampa Bay?",
    "answer": "The mechanism is corrosion of the reinforcing steel inside the concrete. Moisture and airborne chlorides break down the protection the concrete provides, the steel corrodes, and expanding rust cracks the element from within. Parking structures and exposed frames take the worst of it, because they get wet from every direction and, with summer humidity in the region averaging around 75 percent, they never really dry out."
  },
  {
    "question": "How does structural concrete repair relate to milestone inspections?",
    "answer": "Milestone structural inspections under Florida Statute 553.899 apply to condominium and cooperative buildings three stories or higher at 30 years of age, or 25 years if within three miles of the coastline, then every 10 years. Where an inspection identifies deterioration in columns, beams, or slabs, the finding describes a condition. Turning it into a repair that can be built, budgeted, and inspected is contractor work, and Florida Construction Specialists performs that repair under Certified Building Contractor license CBC1262722."
  },
  {
    "question": "What areas do you serve for structural concrete repair?",
    "answer": "We work throughout Tampa and the wider Tampa Bay region, including St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, Bradenton, and Ruskin, where our office is located. Our structural concrete work concentrates on commercial, condominium, and multi-family buildings across Hillsborough County and the Central Tampa Bay corridor."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Structural Concrete Repair", href: "/structural-concrete-repair/" },
];

export default function StructuralConcreteRepairPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Structural Concrete Repair Tampa"
        serviceDescription="Engineered structural concrete repair for commercial, condominium, and multi-family buildings in Tampa Bay. Column, beam, slab, parking deck, and stem wall repair with shoring, reinforcement restoration, and formed or sprayed placement."
        serviceCategories={["Structural Concrete Repair", "Column and Beam Repair", "Parking Structure Repair", "Reinforcement Restoration", "Milestone Inspection Remediation"]}
      />

      <Breadcrumb items={[
        { name: "Services", href: "/commercial/" },
        { name: "Structural Concrete Repair", href: "/structural-concrete-repair/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-concrete-restoration.webp"
            alt="Structural concrete repair on a Tampa Bay commercial building"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">Tampa Bay Commercial &amp; Multi-Family Structural Repair</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Structural Concrete Repair in Tampa
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Columns, beams, slabs, and parking decks carry the building. Repairing them is an engineered scope with shoring, reinforcement, and inspection, not a resurfacing job. Florida Construction Specialists does that work as prime contractor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule a Structural Assessment
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
              Repairing Capacity, Not Appearance
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Search for concrete repair in Tampa and most of what comes back is flatwork: driveways, patios, slab lifting, crack sealing. That work is real, but it is a different trade from what a condominium tower or a commercial frame needs when a column base is spalling or a parking deck soffit is dropping material onto cars. Structural concrete repair restores the capacity of an element the building is standing on. Shoring, removal limits, reinforcement, placement, and inspection all follow from that.
              </p>
              <p>
                The practical difference shows up on the first day. A resurfacing scope starts by preparing a surface. A structural scope starts by asking what the element carries, whether it can lose section temporarily, and what has to be supported before anything is removed. Get that order wrong on a loaded column and the consequences are not cosmetic.
              </p>
              <p>
                On this kind of work the engineer who reviews the element and the crew who repair it need to answer to the same people. At Florida Construction Specialists they do. We keep an engineer and an architectural draftsman on staff, so the repair is drawn before it is built, and we are always the prime contractor, never a subcontractor. We have been building and repairing in this market since 1982 under Certified Building Contractor license CBC1262722. Structural concrete repair is one discipline within our <Link href="/condo-multi-family-structural/">condominium and multi-family structural restoration</Link> practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <ContentParallax
        src="/images/construction/construction-large.webp"
        alt="Structural concrete and reinforcement detail on a commercial building"
        title="Engineered Repairs to Load-Bearing Elements"
        subtitle="Columns, beams, slabs, parking structures, and stem walls across Tampa Bay"
        overlayOpacity={0.6}
      />

      {/* Elements */}
      <section className="section bg-brand-green-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <Layers className="w-12 h-12 text-brand-green mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                The Elements We Repair
              </h2>
              <p className="text-gray-600 mb-6">
                Deterioration rarely stays where it is first noticed. Corrosion follows reinforcement, and reinforcement runs continuously through the frame, so a spalling column base and a cracked beam end on the floor above are frequently the same problem showing up twice. We assess the frame, not the complaint.
              </p>
              <p className="text-gray-600">
                Balcony slabs are the exception we treat separately, because they carry their own repair sequence, waterproofing interface, and resident-access constraints. Those are handled under <Link href="/concrete-balcony-restoration/">concrete balcony restoration</Link>.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">
                Structural Elements We Work On:
              </h3>
              <ul className="space-y-3">
                {structuralElements.map((item) => (
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

      {/* Why it deteriorates */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <AlertTriangle className="w-16 h-16 text-brand-gold mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                What Actually Fails, and Why It Fails Here
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Reinforced concrete is a partnership: concrete resists compression, steel resists tension, and the concrete keeps the steel chemically protected. Corrosion breaks the partnership from the inside. Once moisture and chlorides reach the bar, rust forms, and because rust occupies more volume than the steel it came from, it exerts enough internal pressure to crack and delaminate the surrounding concrete. Cracked concrete admits more water, which accelerates the corrosion, which cracks more concrete.
              </p>
              <p>
                Tampa Bay hands that cycle everything it needs. Concrete here rarely dries out between wettings, salt-laden air reaches anything near the coast, and the storm season keeps the exposure coming. Exposed frames and parking structures deteriorate on a faster clock than the same structure would inland, because nothing shelters them.
              </p>
              <p>
                By the time material is falling, the condition is well advanced. Earlier and more reliable indicators are hollow-sounding areas found by chain drag or hammer sounding, rust staining that traces the line of a bar, cracks that run parallel to reinforcement rather than randomly, and efflorescence on soffits. Any of those on a load-bearing element warrants assessment before the next storm season, not after it.
              </p>
            </div>
            <CodeReference
              code="Florida Statute 553.899"
              section="Milestone Inspections"
              description="Requires milestone structural inspections for condominium and cooperative buildings three stories or higher at 30 years of age, or 25 years if within three miles of the coastline, then every 10 years thereafter. Findings on columns, beams, and slabs have to be converted into an engineered, buildable repair scope."
              link="https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.899.html"
            />
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Wrench className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                How a Structural Repair Is Built
              </h2>
              <p className="text-xl text-gray-600">
                Five steps, in this order, every time. The order is what separates a structural repair from a patch.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Assess and quantify</h3>
                <p>
                  Sounding maps delamination across the element and its neighbors. Where reinforcement is exposed, remaining bar diameter is measured rather than estimated, because the repair design depends on how much steel is actually left. Cover depth is checked, since inadequate original cover explains why an element failed on the schedule it did and dictates what the repair has to provide.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Design the repair and the support</h3>
                <p>
                  Our engineer determines how much section can safely come out at once, whether shoring is required, and what supplemental reinforcement restores capacity. Those decisions are drawn as a repair detail, with removal limits, bar sizes and laps, cover, and materials, so the crew builds a design rather than interpreting a photograph. Where shoring is required, its layout and load path are part of the same package.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Remove to sound concrete</h3>
                <p>
                  Boundaries are saw-cut square rather than feathered, and removal continues behind corroded bar so the steel can be cleaned on all sides. Leaving rusted steel bonded on its back face traps the corrosion cell inside the finished repair, which is why so many older patches fail from behind. Removal proceeds in the sequence the design specifies, not element by element in whatever order is convenient.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Restore steel, then concrete</h3>
                <p>
                  Exposed bar is cleaned to bright metal and coated with a corrosion-inhibiting or zinc-rich primer. Where section loss is significant, supplemental bars are placed and lapped into sound reinforcement. Concrete is then placed by whichever method suits the geometry, whether formed and poured, hand-applied, or sprayed, and consolidated fully around the steel. A void behind a bar is where the next failure starts.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Cure, inspect, and return to load</h3>
                <p>
                  Florida heat pulls water out of fresh material fast enough to leave a weak, permeable outer layer, so repairs are wet-cured or cured under compound and protected for the specified period. Shoring stays until the repair has reached the strength the design requires, verified rather than assumed. Finished repairs are documented for the owner's records and, where applicable, for the inspection findings they answer.
                </p>
              </div>
            </div>

            <ContentImage
              src="/images/fcs-commercial-exterior-waterproofing/fcs-commercial-exterior-waterproofing-display.webp"
              alt="Protective coating applied to a repaired commercial concrete structure"
              caption="Repairs are protected afterwards, because water is what started the deterioration"
              position="center"
            />
          </div>
        </div>
      </section>

      {/* Methods table */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <HardHat className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                Placement Methods and When Each One Applies
              </h2>
              <p className="text-xl text-gray-600">
                Geometry decides the method. Using the wrong one is how repairs end up on the ground.
              </p>
            </div>
            <div className="space-y-4">
              {methods.map((m) => (
                <div key={m.name} className="bg-gray-50 rounded-xl p-6 flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="sm:w-64 flex-shrink-0">
                    <span className="font-bold text-brand-green-dark text-lg">{m.name}</span>
                  </div>
                  <p className="text-gray-600">{m.use}</p>
                </div>
              ))}
            </div>
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
                Working Inside an Occupied Building
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Structural repairs happen where people park, walk, and live. On a parking structure that means keeping enough of the deck in service to hold the building's cars while work rotates through it, with traffic routing and barricades planned before the first saw cut. In residential buildings it means access to garage levels, corridors, and unit interiors is coordinated with notice, not requested on the morning of.
              </p>
              <p>
                Shoring adds its own constraint, since shored areas are out of use for the duration of the repair and the cure. Sequencing therefore has to satisfy the engineering and the building's operations at the same time. We plan phases against both and share the schedule with the property manager and board before anything is barricaded.
              </p>
              <p>
                Each completed element is photographed before it is closed up, with the reinforcement visible, because on a structural repair that is the only moment the work can be seen. Where the repair answers an inspection finding, that photo record is what goes on file. Buildings working through structural inspection requirements can see our <Link href="/sb4d-compliance/">SB 4-D compliance</Link> work.
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
              Why Owners Bring Structural Work to FCS
            </h2>
            <p className="text-gray-600">
              Florida Construction Specialists is always the prime contractor, never a subcontractor. Shoring, reinforcement, placement, and sign-off sit with one company for the life of the repair.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Prime Contractor</h3>
              <p className="text-gray-600">One accountable party from assessment through inspection sign-off.</p>
            </div>
            <div className="card text-center p-6">
              <Wrench className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">In-House Engineering</h3>
              <p className="text-gray-600">Repair details and shoring layouts drawn on staff, not outsourced and delayed.</p>
            </div>
            <div className="card text-center p-6">
              <Building2 className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Occupied Structures</h3>
              <p className="text-gray-600">Phased work on live parking decks and residential buildings across Tampa Bay.</p>
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
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <MapPin className="w-16 h-16 text-brand-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Structural Concrete Repair Service Areas
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-center">
              Florida Construction Specialists performs structural concrete repair throughout Tampa and the wider Tampa Bay region, including St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, Bradenton, and Ruskin, where our office is located. Our work concentrates on commercial, condominium, and multi-family buildings across Hillsborough County and the Central Tampa Bay corridor.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="Structural Concrete Repair FAQs" />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Get the Structure Assessed Before the Next Season
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a structural concrete assessment with Florida Construction Specialists. We sound the elements, measure what is left, and give you an engineered scope you can build from.
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

      <RelatedArticles pageSlug="structural-concrete-repair" />

      {/* Related Guides — de-orphan internal links */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Structural &amp; Restoration Guides"
            links={[
              { label: "Historic Building Structural Assessment In Tampa", href: "/commercial/guides/historic-building-structural-assessment-in-tampa/" },
              { label: "Condo Milestone Inspection Remediation Tampa", href: "/commercial/guides/condo-milestone-inspection-remediation-tampa/" },
              { label: "Condo Structural Reserve Study Repairs", href: "/commercial/guides/condo-structural-reserve-study-repairs/" },
              { label: "Condo Balcony Inspection Requirements", href: "/commercial/guides/condo-balcony-inspection-requirements/" },
              { label: "Waterproofing Commercial Contractors", href: "/commercial/guides/waterproofing-commercial-contractors/" }
            ]}
          />
        </div>
      </section>
    </>
  );
}