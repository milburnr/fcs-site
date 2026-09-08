import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award, AlertTriangle, HardHat, Wrench, ClipboardCheck, Scale, ThermometerSun, MapPin } from "lucide-react";
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
  alternates: { canonical: 'https://floridaconstructionspecialists.com/condo-multi-family-structural/' },
  title: "Condo & Multi-Family Structural Restoration Tampa",
  description: "Structural restoration for Tampa Bay condominium and multi-family buildings. Balcony reconstruction, concrete spalling and slab repair, railings, milestone inspection and SB4-D remediation, and common-area work. Certified Building Contractor CBC1262722, since 1982.",
  openGraph: {
    title: "Condo & Multi-Family Structural Restoration Tampa",
    description: "Structural restoration for Tampa Bay condominium and multi-family buildings. Balcony reconstruction, concrete spalling and slab repair, railings, milestone inspection and SB4-D remediation, and common-area work. Certified Building Contractor since 1982.",
    url: "https://floridaconstructionspecialists.com/condo-multi-family-structural/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const assessedElements = [
  "Balcony and walkway slabs, tops and soffits",
  "Structural slabs, beams, and columns",
  "Reinforcing steel condition and concrete cover",
  "Post-tension tendons and anchorages",
  "Railings, guards, and embedded posts",
  "Waterproofing and slope to drain",
  "Common-area stairs, landings, and decks",
  "Original construction and flashing details",
];

const faqs = [
  {
    "question": "What is condominium structural restoration?",
    "answer": "It is the repair of the load-bearing and life-safety elements of a multi-family building: balcony and walkway slabs, structural concrete and reinforcement, post-tension systems, railings, and the common-area structures residents use every day. It is distinct from renovation, which improves finishes and layout. Structural restoration is driven by condition rather than preference, and on many Tampa Bay buildings it is now also driven by inspection findings the association is required to address."
  },
  {
    "question": "How do I know which of these services my building needs?",
    "answer": "You start with an assessment, not a scope. Visual survey, sounding for delamination, and where warranted core sampling and chloride testing establish how far deterioration has actually progressed. It is routinely further than the surface damage suggests. That evidence decides whether a balcony needs localized repair, full restoration, or reconstruction, and whether the problem stops at the balconies or runs into the structural frame."
  },
  {
    "question": "Why do Florida condominium buildings deteriorate faster?",
    "answer": "Because the climate attacks reinforced concrete from several directions at once. Tampa Bay sits in hurricane alley, with two to three tropical systems in a typical season and a storm season that runs June through November. Summer relative humidity averages around 75 percent, so assemblies rarely dry fully, and airborne chlorides near the coast speed up corrosion of embedded steel. Once reinforcement corrodes it expands and forces the surrounding concrete apart from the inside."
  },
  {
    "question": "Can this work be done while residents stay in the building?",
    "answer": "Yes, and on almost every project it has to be. Structural work on an occupied condominium is phased so residents keep an entrance, an elevator, and a compliant egress path throughout. Balcony access is scheduled unit by unit, and each phase goes back into service before the next opens. It lengthens the schedule. It is also the only way a building-wide program is possible for an association at all."
  },
  {
    "question": "Who do you work with on these projects?",
    "answer": "Condominium and HOA boards, property managers, building engineers, and multi-family owners and operators. Boards carry fiduciary responsibility for major expenditures, so we document findings and options in a form a board can present to owners, and we report in writing through construction. Florida Construction Specialists holds Certified Building Contractor license CBC1262722, has worked in this market since 1982, and is always the prime contractor, never a subcontractor."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Condo & Multi-Family Structural Restoration", href: "/condo-multi-family-structural/" },
];

export default function CondoMultiFamilyStructuralPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Condo and Multi-Family Structural Restoration Tampa"
        serviceDescription="Structural restoration for condominium and multi-family buildings throughout Tampa Bay. Balcony reconstruction and concrete balcony restoration, spalling and structural concrete repair, post-tension and slab repair, railing replacement, milestone inspection and SB4-D remediation, common-area remediation, and repair estimating for structural integrity reserve studies."
        serviceCategories={["Balcony Reconstruction", "Concrete Restoration", "Structural Concrete Repair", "SB4-D and Milestone Inspection Remediation", "Common Area Remediation"]}
      />

      <Breadcrumb items={[
        { name: "Services", href: "/commercial/" },
        { name: "Condo & Multi-Family Structural Restoration", href: "/condo-multi-family-structural/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/southwinds-condo-rear/southwinds-condo-rear-large.webp"
            alt="Condominium building exterior in the Tampa Bay region"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">Tampa Bay Condominium &amp; Multi-Family Structural Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Condo &amp; Multi-Family Structural Restoration in Tampa
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Balconies, slabs, railings, and the concrete frame behind them are the elements an association cannot defer indefinitely. Florida Construction Specialists assesses them honestly and restores them in phases a building can live through.
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
              One Building, One Deterioration Problem
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Associations usually meet this work as a list of separate problems: a spalling balcony on the fourth floor, a loose railing on the second, a stain in a common corridor, and an inspection report full of items nobody on the board can rank. They are rarely separate. On a reinforced concrete building in Tampa Bay they are almost always the same process, water reaching embedded steel, showing up in different places at different speeds.
              </p>
              <p>
                Treating them as one problem is what makes a program affordable. The access, the mobilization, the engineering, and the resident disruption are the expensive parts, and they only have to happen once if the scope is defined properly at the outset. Treat them as ten unrelated repairs and you pay for that ten times.
              </p>
              <p>
                Structural restoration is one of several disciplines Florida Construction Specialists brings to Tampa Bay property owners; the full range is on our <Link href="/">commercial construction and restoration homepage</Link>. Below are the services within this category and what separates each one from its neighbors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual break */}
      <ContentParallax
        src="/images/tampa-condo-balcony-restoration/tampa-condo-balcony-restoration-small.webp"
        alt="Condominium balcony restoration work in Tampa Bay"
        title="Assess Once, Scope Once, Mobilize Once"
        subtitle="Structural restoration for condominium and multi-family buildings"
        overlayOpacity={0.55}
      />

      {/* Why Florida */}
      <section className="section bg-brand-green-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <ThermometerSun className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                Why Tampa Bay Buildings Reach This Point
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Reinforced concrete relies on the alkalinity of the surrounding concrete to keep its steel passive. Anything that lets water and chlorides reach the reinforcement starts a corrosion cycle that expands the steel and cracks the concrete outward from the inside, which admits more water. In Tampa Bay several conditions push that cycle along at once.
              </p>
              <p>
                The region sits in hurricane alley and typically sees two to three tropical systems in a season, with the strong storm season running June through November. Wind-driven rain during those events forces water into joints, thresholds, and railing penetrations that shed ordinary rainfall without difficulty. Between events, summer relative humidity averaging around 75 percent means the assemblies rarely dry out fully. Hurricane Ian in 2022 and Hurricane Idalia in 2023 both exposed deterioration on buildings across the region that had appeared sound.
              </p>
            </div>
            <CodeReference
              code="Florida Statute 553.899"
              section="Milestone Inspections"
              description="Requires milestone structural inspections for condominium and cooperative buildings three stories or higher at 30 years of age, or 25 years if within three miles of the coastline, then every 10 years thereafter. Phase one is a visual inspection by a licensed architect or engineer; phase two follows if substantial structural deterioration is found. Findings frequently identify balcony, slab, and railing deficiencies that the association is then required to address."
              link="https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.899.html"
            />
          </div>
        </div>
      </section>

      {/* Child services */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <HardHat className="w-16 h-16 text-brand-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Condo &amp; Multi-Family Structural Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ten disciplines that overlap on most buildings. The assessment decides which ones your building actually needs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4">Balcony Reconstruction</h2>
              <p>
                Reconstruction is the answer when deterioration has compromised a balcony's structural capacity rather than only its surface: chlorides throughout the slab, extensive delamination, or corroded tendons. The balcony is removed to the structural slab, reinforcement is replaced or supplemented, and it is rebuilt to current code with new waterproofing and railings. It resets the service life instead of buying a few more seasons. <Link href="/balcony-reconstruction/">See our balcony reconstruction services</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4">Concrete Balcony Restoration</h2>
              <p>
                Restoration is the step below reconstruction, and on buildings caught early it is the right one. Where the structure itself still has capacity, it brings a deteriorated balcony back to sound, code-compliant condition across its full surface: damaged concrete removed and replaced, reinforcement treated, slope to drain re-established, and a new traffic-bearing membrane installed. <Link href="/concrete-balcony-restoration/">See our concrete balcony restoration</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4">Concrete Spalling Repair</h2>
              <p>
                Spalling is concrete breaking away in flakes or chunks as corroding reinforcement expands behind it, and it is the most visible symptom of a problem that started years earlier. Repair means removing concrete back to sound material, treating or replacing the steel, and rebuilding the section with a compatible repair mortar. Where spalling is localized, this is a contained scope; where it repeats across elevations, it points somewhere larger. <Link href="/resources/concrete-restore/">See our concrete spalling repair</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4">Structural Concrete Repair</h2>
              <p>
                Some deterioration reaches past balconies into the frame itself: columns, beams, structural slabs, and the connections between them. Structural concrete repair addresses those elements, where the work has to restore load-carrying capacity rather than just surface integrity, and where engineering involvement is not optional. This is the scope that determines whether a building's problem is a maintenance program or a structural one. <Link href="/structural-concrete-repair/">See our structural concrete repair</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4">SB4-D Compliance Repair Work</h2>
              <p>
                Florida's post-Surfside legislation, SB 4-D in 2022 as amended by SB 154 in 2023, created obligations that many associations are meeting for the first time. SB4-D compliance repair work is the construction that follows: taking the deficiencies identified in a milestone inspection or structural integrity reserve study and remediating them to a documented standard the association can put on file. It is scoped around what the report requires, not around what looks worst. <Link href="/sb4d-compliance/">See our SB4-D compliance repair work</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4">Milestone Inspection Repair Work</h2>
              <p>
                A milestone inspection produces findings, not a scope of work. Turning a phase one or phase two report into a buildable, budgetable, ranked program is its own exercise, and it is what this service does. Some items must be corrected now. Some belong in the same mobilization because the access is already up. Some can wait for a later budget cycle without risk, and the report will not tell you which is which. <Link href="/sb4d-compliance/inspection-process/">See our milestone inspection repair work</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4">Post-Tension and Structural Slab Repair</h2>
              <p>
                Many Florida condominium slabs are post-tensioned, with high-strength tendons stressed after the concrete was placed. Repairing them is a specialized discipline: tendons must be located and protected during demolition, because damaging one releases stored energy suddenly and dangerously. Corroded or damaged tendons require de-tensioning, splice repair, or replacement designed by a structural engineer. <Link href="/post-tension-and-structural-slab-repair/">See our post-tension and structural slab repair</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4">Balcony Railing Replacement</h2>
              <p>
                Railings are a life-safety element and frequently the first thing an inspection flags. Posts embedded in concrete corrode from the inside, taking the surrounding concrete with them, and older railings often no longer meet current height and load requirements. Replacement addresses both, and the mounting detail matters as much as the railing: surface-mounted posts with proper base flashing avoid penetrating a new membrane. <Link href="/balcony-railing-replacement/">See our balcony railing replacement</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4">Condominium Common-Area Remediation</h2>
              <p>
                Balconies get the attention; the shared structures residents walk on every day often get less. Common-area remediation covers breezeways, stairs and landings, elevated walkways, parking decks, and pool deck structures. They carry the same reinforcement and the same exposure as the balconies, and they carry every resident in the building rather than one unit's occupants. <Link href="/commercial/condo-remediation/">See our condominium common-area remediation</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4">Repair Estimating for Structural Integrity Reserve Studies</h2>
              <p>
                A reserve study is only as good as the repair figures inside it. This service provides contractor-side estimating for structural elements, so an association's reserve planning is grounded in what the work would actually take to build on their specific building rather than in a generic allowance. It is the input boards most often lack when they are asked to fund a long-term structural program. <Link href="/repair-estimating-for-structural-integrity-reserve/">See our repair estimating for reserve studies</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we assess */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ClipboardCheck className="w-12 h-12 text-brand-green mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                What a Structural Assessment Covers
              </h2>
              <p className="text-gray-600 mb-6">
                We document conditions across the whole building rather than only where distress was reported, because a single failing balcony almost always reflects a detail that repeats on every floor. Sounding routinely finds far more deteriorated area than a visual survey suggests.
              </p>
              <p className="text-gray-600 mb-6">
                The result is a ranked scope, written so a board can put it in front of owners: what must be corrected now, what belongs in the same mobilization while access is already in place, and what can be scheduled into a future budget cycle.
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
                Elements We Evaluate:
              </h3>
              <ul className="space-y-3">
                {assessedElements.map((item) => (
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
              <Scale className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                How a Structural Program Runs
              </h2>
            </div>

            <ContentImage
              src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
              alt="Balcony surface and waterproofing work on a Tampa Bay condominium"
              caption="Substrate first, then waterproofing. The sequence is what makes the repair last."
              position="center"
            />

            <div className="grid md:grid-cols-4 gap-8 mt-12">
              {[
                { step: "1", title: "Assess", desc: "Visual survey, sounding, and where warranted core sampling and chloride profiling across the building." },
                { step: "2", title: "Prioritize", desc: "A ranked scope with details drawn in house, suitable for board presentation and reserve planning." },
                { step: "3", title: "Build", desc: "Structural repairs first, then waterproofing and railings, phased around occupied units and access." },
                { step: "4", title: "Document", desc: "Inspections, warranty documentation, and a record the association can file against its inspection obligations." },
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

      {/* Why FCS */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Tampa Bay Associations Choose FCS
            </h2>
            <p className="text-gray-600">
              Florida Construction Specialists is always the prime contractor, never a subcontractor. One accountable team assesses the building, specifies the scope, and stands behind the finished work.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Prime Contractor</h3>
              <p className="text-gray-600">Direct accountability from assessment through warranty on every structural project.</p>
            </div>
            <div className="card text-center p-6">
              <Wrench className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">In-House Engineering</h3>
              <p className="text-gray-600">An engineer and architectural draftsman on staff turn findings into buildable details.</p>
            </div>
            <div className="card text-center p-6">
              <AlertTriangle className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Inspection Remediation</h3>
              <p className="text-gray-600">Milestone and SB4-D findings translated into a documented, buildable program.</p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Since 1982</h3>
              <p className="text-gray-600">44 years restoring Florida structures, under license CBC1262722.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <MapPin className="w-16 h-16 text-brand-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Structural Restoration Service Areas
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-center">
              Florida Construction Specialists restores condominium and multi-family structures throughout Tampa and the wider Tampa Bay region, including St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, Bradenton, and Ruskin, where our office is located. Our work concentrates on commercial, condominium, and multi-family properties across Hillsborough County and the Central Tampa Bay corridor.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="Condo and Multi-Family Structural Restoration FAQs" />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Find Out What Your Building Actually Needs
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a structural assessment with Florida Construction Specialists. We assess the whole building, rank the findings, and give your board a scope it can act on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Structural Assessment
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
        currentService="condo-multi-family-structural"
        currentServiceName="Condo & Multi-Family Structural Restoration"
      />

      <RelatedArticles pageSlug="condo-multi-family-structural" />

      {/* Related Guides — de-orphan internal links */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Structural Restoration Guides"
            links={[
              { label: "Balcony Reconstruction Exterior Waterproofing", href: "/commercial/guides/balcony-reconstruction-exterior-waterproofing/" },
              { label: "Balcony Waterproofing For Long Lasting Protection", href: "/commercial/guides/balcony-waterproofing-for-long-lasting-protection/" },
              { label: "Inspiring Balcony Renovation Transform Your Outdoor Space", href: "/commercial/guides/inspiring-balcony-renovation-transform-your-outdoor-space/" },
              { label: "Waterproofing Commercial Contractors", href: "/commercial/guides/waterproofing-commercial-contractors/" }
            ]}
          />
        </div>
      </section>
    </>
  );
}