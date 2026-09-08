import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award, Users, Wrench, ClipboardCheck, Layers, Clock, MapPin } from "lucide-react";
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
  alternates: { canonical: 'https://floridaconstructionspecialists.com/apartment-and-condominium-renovation/' },
  title: "Apartment & Condominium Renovation Tampa",
  description: "Building-wide apartment and condominium renovation across Tampa Bay. Common areas, corridors, amenity spaces, building systems, and unit programs phased around residents. Certified Building Contractor CBC1262722, since 1982.",
  openGraph: {
    title: "Apartment & Condominium Renovation Tampa",
    description: "Building-wide apartment and condominium renovation across Tampa Bay. Common areas, corridors, amenity spaces, building systems, and unit programs phased around residents. Certified Building Contractor since 1982.",
    url: "https://floridaconstructionspecialists.com/apartment-and-condominium-renovation/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const scopeItems = [
  "Lobby, corridor, and common-area renovation",
  "Amenity space reconstruction and repositioning",
  "Building systems replacement in occupied buildings",
  "Life-safety and accessibility upgrades",
  "Exterior and site improvements",
  "Repeatable unit renovation programs",
  "Board presentation and owner communication support",
  "Phasing that keeps residents in place",
];

const planningFactors = [
  { sign: "Board approval and owner notice requirements", severity: "Governance" },
  { sign: "Reserve funding and assessment timing", severity: "Governance" },
  { sign: "Life-safety egress maintained at every stage", severity: "Non-negotiable" },
  { sign: "Elevator availability shared with residents", severity: "Logistics" },
  { sign: "Unit access across owner and tenant schedules", severity: "Logistics" },
  { sign: "Seasonal occupancy and unavailable owners", severity: "Logistics" },
  { sign: "Storm season constraints on exterior scope", severity: "Non-negotiable" },
  { sign: "Existing conditions that differ from the as-builts", severity: "Technical" },
];

const faqs = [
  {
    "question": "Do you renovate individual condominium units?",
    "answer": "Our work is building-scale rather than unit-scale. We are engaged by associations, property owners, and multi-family operators for common areas, corridors, amenity spaces, building systems, envelope, and repeatable unit programs across a whole property, not for a single owner's kitchen or bath remodel. Where a project does involve unit interiors, it is typically a standardized program across many units, which is a different exercise from a custom renovation of one home and calls for different sequencing and logistics."
  },
  {
    "question": "How do you plan work around residents who cannot move out?",
    "answer": "By treating occupancy as a design constraint rather than an inconvenience. Phasing is built so that residents keep an entrance, an elevator, and a code-compliant egress path at every stage of the work. Loud and disruptive activities are scheduled into agreed hours, containment and daily cleanup keep common areas usable, and each phase is closed out and returned to service before the next one opens. It lengthens the schedule and it is what makes the project livable for the people who stay."
  },
  {
    "question": "What is the difference between this and common-area remediation?",
    "answer": "Objective. Remediation restores something that has deteriorated, whether concrete, structure, or envelope, and is driven by condition and often by inspection findings. Renovation improves and repositions the building: new finishes, reconfigured amenity space, updated systems, better accessibility. The two often run in the same mobilization because access is already in place, and combining them is usually the better use of an association's money. But they are scoped, justified, and funded differently."
  },
  {
    "question": "How do you work with a condominium board?",
    "answer": "With documentation built for the way boards actually decide. Boards carry fiduciary responsibility for major expenditures and often include members without a construction background, so we present findings and options in plain terms, with drawings produced in house, in a form a board can put in front of owners. During construction, regular written reporting keeps the board and property manager ahead of the work rather than reacting to it. Condominium, HOA, and multi-family work is a core part of what Florida Construction Specialists does."
  },
  {
    "question": "Does renovation trigger code upgrades in an older building?",
    "answer": "It can, depending on what the work touches. Alterations to an existing multi-family building can bring accessibility, life-safety, structural, and energy requirements into play, and the threshold is set by the nature and extent of the alteration rather than by the building's age alone. Florida's 2023 code revision also raised structural standards for coastal construction and mandates impact-resistant glazing in wind-borne debris regions, which affects any Tampa Bay project replacing windows or sliding doors. We establish that position during pre-construction."
  },
  {
    "question": "Why does storm season affect the schedule?",
    "answer": "Because exterior scope on a multi-family building has to be weather-secure at the end of every working day, and Tampa Bay's strong storm season runs June through November with typically two to three tropical systems in a season. Openings, envelope work, and any scope that leaves an assembly temporarily exposed get sequenced with that in mind. Hurricane Ian in 2022 and Hurricane Idalia in 2023 are the reason experienced owners in this region ask about weather contingency before they ask about the finish schedule."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Multi-Family & Historic Restoration", href: "/historic-restoration/" },
  { name: "Apartment & Condominium Renovation", href: "/apartment-and-condominium-renovation/" },
];

export default function ApartmentAndCondominiumRenovationPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Apartment and Condominium Renovation Tampa"
        serviceDescription="Building-wide apartment and condominium renovation throughout Tampa Bay. Common areas, corridors, amenity spaces, building systems, accessibility and life-safety upgrades, and repeatable unit programs, phased around residents in occupied buildings."
        serviceCategories={["Condominium Renovation", "Apartment Renovation", "Common Area Renovation", "Occupied Multi-Family Construction"]}
      />

      <Breadcrumb items={[
        { name: "Services", href: "/commercial/" },
        { name: "Multi-Family & Historic Restoration", href: "/historic-restoration/" },
        { name: "Apartment & Condominium Renovation", href: "/apartment-and-condominium-renovation/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/tampa-apartment-complex-construction/tampa-apartment-complex-construction-display.webp"
            alt="Apartment community construction and renovation in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">Building-Wide Work for Tampa Bay Associations &amp; Operators</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Apartment &amp; Condominium Renovation in Tampa
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Renovating a building people live in is a logistics discipline as much as a construction one. Florida Construction Specialists renovates common areas, amenities, systems, and units across occupied Tampa Bay properties without moving residents out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule a Property Assessment
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
              A Building Full of People Is a Different Project
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Most renovation advice assumes an empty building. Multi-family renovation almost never gets one. Residents are living behind the containment wall, the elevator the crew needs is the elevator a resident needs, and every phase has to end with the building safe, secure, and usable overnight. That constraint shapes the sequencing, the crew size, the material staging, and the schedule far more than the finishes do.
              </p>
              <p>
                Our work here is building-scale and owner-side: lobbies, corridors, and amenity spaces; building systems that have reached the end of their service life; accessibility and life-safety upgrades; exterior and site improvements; and repeatable unit programs delivered across many units to a consistent standard. Associations, property owners, and multi-family operators engage us for it, not individual unit owners.
              </p>
              <p>
                This is the improvement-side discipline within our <Link href="/historic-restoration/">multi-family and historic restoration</Link> work. Where a building's deterioration is structural rather than cosmetic, condition-driven restoration comes first and renovation follows it, often in the same mobilization because the access is already up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual break */}
      <ContentParallax
        src="/images/southwinds-condo-front/southwinds-condo-front-large.webp"
        alt="Condominium building exterior in the Tampa Bay region"
        title="Renovation Without Relocation"
        subtitle="Occupied apartment and condominium work across Tampa Bay"
        overlayOpacity={0.55}
      />

      {/* Planning */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <ClipboardCheck className="w-12 h-12 text-brand-green mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                What Actually Drives the Schedule
              </h2>
              <p className="text-gray-600 mb-6">
                On a multi-family renovation, the critical path is rarely the construction work itself. It is governance, access, and weather. A phase cannot start before the board has authorized it and owners have been noticed; a floor cannot be worked before access has been arranged with every unit on it; and exterior scope has to respect a storm season that does not negotiate.
              </p>
              <p className="text-gray-600 mb-6">
                We plan against those constraints from the outset rather than discovering them in month two. That is what allows a realistic schedule to be presented to a board, one that survives contact with an occupied building.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Property <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">
                Constraints We Plan Around:
              </h3>
              <ul className="space-y-4">
                {planningFactors.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className={`px-2 py-1 rounded text-xs font-bold flex-shrink-0 ${
                      item.severity === "Non-negotiable" ? "bg-red-600 text-white" :
                      item.severity === "Governance" ? "bg-brand-green text-white" :
                      item.severity === "Logistics" ? "bg-orange-500 text-white" :
                      "bg-yellow-500 text-gray-900"
                    }`}>
                      {item.severity}
                    </span>
                    <span className="text-gray-700">{item.sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Working with boards */}
      <section className="section bg-brand-green-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Users className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                Working With Boards, Managers, and Owners
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                A condominium renovation has to be decided before it can be built, and the deciding is done by people who are volunteers, who answer to their neighbors, and who are spending money that was collected from those same neighbors. That is a real constraint on how a project should be presented. Options need to be legible without a construction background, trade-offs need to be stated plainly, and the reasoning needs to survive being repeated second-hand at an owners' meeting.
              </p>
              <p>
                Once the work is under way, the same principle applies in reverse. Written progress reporting to the board and property manager, advance notice to residents before work reaches their floor, and a documented record of what was done where. Most of the friction on multi-family projects is informational rather than technical, and it is preventable.
              </p>
              <p>
                Many of the boards we work with arrive having been through a project where nobody would own the outcome. Florida Construction Specialists is always the prime contractor and never a subcontractor, which for an association means one accountable party rather than a chain of finger-pointing. We have worked in the Tampa Bay market since 1982 under Certified Building Contractor license CBC1262722.
              </p>
            </div>
            <CodeReference
              code="Florida Building Code, 2023 revision"
              section="Wind-borne debris regions"
              description="Florida's 2023 revision mandates impact-resistant glazing in wind-borne debris regions and raises structural standards for coastal construction. Window and sliding-door replacement on a multi-family renovation is therefore a wind-resistance scope, and has to be integrated with wall waterproofing and flashing rather than treated as a finish item."
            />
          </div>
        </div>
      </section>

      {/* How it runs */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Layers className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                How a Multi-Family Renovation Runs
              </h2>
              <p className="text-xl text-gray-600">
                Assess the property, present something a board can act on, then build in phases that each return to service.
              </p>
            </div>

            <ContentImage
              src="/images/tampa-condo-building-construction/tampa-condo-building-construction-display.webp"
              alt="Condominium building construction work in Tampa"
              caption="Each phase is closed out and handed back before the next one opens"
              position="center"
            />

            <div className="grid md:grid-cols-4 gap-8 mt-12">
              {[
                { step: "1", title: "Assess", desc: "Property-wide survey of common areas, systems, envelope, and existing conditions against the as-builts." },
                { step: "2", title: "Present", desc: "Scope and options documented for board review, with details drawn in house and a realistic phased schedule." },
                { step: "3", title: "Phase", desc: "Work delivered in sequence with egress, access, and building services maintained throughout." },
                { step: "4", title: "Hand Back", desc: "Each phase closed out, inspected, and returned to residents, with a record of what was built where." },
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

      {/* Scope */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Clock className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                Scope We Deliver
              </h2>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <ul className="grid sm:grid-cols-2 gap-4">
                {scopeItems.map((item) => (
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

      {/* Why FCS */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Tampa Bay Associations Choose FCS
            </h2>
            <p className="text-gray-600">
              Florida Construction Specialists is always the prime contractor, never a subcontractor. One accountable party assesses the property, presents the scope, and delivers it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Prime Contractor</h3>
              <p className="text-gray-600">Direct accountability from property assessment through the final phase hand-back.</p>
            </div>
            <div className="card text-center p-6">
              <Users className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Board Experience</h3>
              <p className="text-gray-600">Documentation and presentations built for how associations actually decide.</p>
            </div>
            <div className="card text-center p-6">
              <Wrench className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">In-House Engineering</h3>
              <p className="text-gray-600">An engineer and architectural draftsman on staff turn findings into buildable details.</p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Since 1982</h3>
              <p className="text-gray-600">44 years building for Florida multi-family properties, under license CBC1262722.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="section bg-brand-green-bg">
        <div className="container-custom">
          <div className="text-center mb-8">
            <MapPin className="w-16 h-16 text-brand-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Apartment &amp; Condominium Renovation Service Areas
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-center">
              Florida Construction Specialists renovates apartment communities and condominium buildings throughout Tampa and the wider Tampa Bay region, including St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, Bradenton, and Ruskin, where our office is located. Our work concentrates on commercial, condominium, and multi-family properties across Hillsborough County and the Central Tampa Bay corridor.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="Apartment and Condominium Renovation FAQs" />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Plan the Work Around the People Living In It
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a property assessment with Florida Construction Specialists. We survey the building, present a scope your board can act on, and phase the work so residents stay put.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Property Assessment
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
        currentService="apartment-and-condominium-renovation"
        currentServiceName="Apartment & Condominium Renovation"
      />

      <RelatedArticles pageSlug="apartment-and-condominium-renovation" />

      {/* Related Guides — de-orphan internal links */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Multi-Family Guides"
            links={[
              { label: "Commercial Renovation Secrets From Florida's Top Contractors", href: "/commercial/guides/commercial-renovation-secrets-from-floridas-top-contractors/" },
              { label: "Commercial Construction vs Remodeling and Renovation in Florida", href: "/commercial/guides/commercial-construction-vs-remodeling-and-renovation-in-florida/" },
              { label: "Balcony Reconstruction Exterior Waterproofing", href: "/commercial/guides/balcony-reconstruction-exterior-waterproofing/" },
              { label: "Inspiring Balcony Renovation Transform Your Outdoor Space", href: "/commercial/guides/inspiring-balcony-renovation-transform-your-outdoor-space/" }
            ]}
          />
        </div>
      </section>
    </>
  );
}