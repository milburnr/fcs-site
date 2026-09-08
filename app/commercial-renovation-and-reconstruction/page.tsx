import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award, AlertTriangle, Wrench, ClipboardCheck, Layers, Clock, MapPin } from "lucide-react";
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
  alternates: { canonical: 'https://floridaconstructionspecialists.com/commercial-renovation-and-reconstruction/' },
  title: "Commercial Renovation & Reconstruction Tampa",
  description: "Whole-building commercial renovation and reconstruction in Tampa Bay. Existing-conditions survey, structural reconstruction, envelope and systems modernization, and phasing around operating tenants. Certified Building Contractor CBC1262722, since 1982.",
  openGraph: {
    title: "Commercial Renovation & Reconstruction Tampa",
    description: "Whole-building commercial renovation and reconstruction in Tampa Bay. Existing-conditions survey, structural reconstruction, envelope and systems modernization, and phasing around operating tenants. Certified Building Contractor since 1982.",
    url: "https://floridaconstructionspecialists.com/commercial-renovation-and-reconstruction/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const scopeItems = [
  "Existing-conditions survey and as-built verification",
  "Structural reconstruction and framing modification",
  "Envelope replacement, waterproofing, and openings",
  "Interior demolition and full reconfiguration",
  "MEP system replacement and capacity upgrades",
  "Accessibility and life-safety code upgrades",
  "Permitting and inspection coordination",
  "Phased delivery around occupied and operating areas",
];

const surpriseSources = [
  { sign: "As-builts that do not match what is behind the wall", severity: "Very common" },
  { sign: "Undocumented modifications by previous tenants", severity: "Very common" },
  { sign: "Envelope deterioration hidden behind interior finishes", severity: "Common" },
  { sign: "Structural capacity below current loading requirements", severity: "Common" },
  { sign: "Systems at or past the end of service life", severity: "Common" },
  { sign: "Life-safety and accessibility items triggered by the work", severity: "Common" },
  { sign: "Prior repairs done without permit or inspection", severity: "Common" },
  { sign: "Concealed moisture damage in framing or slab edges", severity: "Underdiagnosed" },
];

const faqs = [
  {
    "question": "What counts as commercial reconstruction rather than renovation?",
    "answer": "Renovation changes finishes, layout, and systems inside a structure that stays as it is. Reconstruction changes the structure itself by modifying or replacing framing, slabs, load paths, or the building envelope. Most substantial projects on older Tampa Bay commercial buildings turn out to involve both, which is why we survey existing conditions before scoping rather than working from a floor plan alone. A project scoped as a renovation that runs into structural work mid-construction is the hardest way to discover the distinction."
  },
  {
    "question": "How is this different from a tenant improvement project?",
    "answer": "Scope and ownership of the problem. Tenant improvement work fits out a leased space to a tenant's requirements within a building that is otherwise staying put, and it is usually bounded by the demise walls. Renovation and reconstruction is a building-owner scope: it touches structure, envelope, base building systems, and code compliance for the property as a whole. If the work stops at the suite, it is tenant improvement. If it changes what the building is, it is reconstruction."
  },
  {
    "question": "Can you work while the building stays open?",
    "answer": "Usually, and it is a large part of how these projects are planned. Occupied renovation means temporary partitions and dust control, maintaining life-safety egress at all times, keeping systems live for the areas still operating, scheduling noisy and disruptive work around business hours, and sequencing so no tenant loses access to what they need. It extends duration compared with an empty building, and it is frequently the difference between a project that is viable for the owner and one that is not."
  },
  {
    "question": "What triggers code upgrades on an existing building?",
    "answer": "The nature and extent of the alteration. Work on an existing structure can bring accessibility, life-safety, structural, and energy requirements into play, and the threshold depends on what is being altered rather than on the age of the building alone. Florida's 2023 code revision also raised structural standards for coastal construction and mandates impact-resistant glazing in wind-borne debris regions, which matters on any Tampa Bay project replacing windows or storefront. We identify the applicable triggers during pre-construction rather than during inspection."
  },
  {
    "question": "How do you handle unknowns behind existing walls?",
    "answer": "By finding as many as possible before they become change orders. Existing-conditions survey, selective demolition at representative locations, verification of as-built drawings against what is actually there, and structural review of anything load-bearing that the project touches. Some conditions only appear once demolition is under way; the goal is that they are exceptions rather than the norm. An in-house engineer and architectural draftsman mean we can resolve a discovered condition and issue a detail without waiting on an outside design cycle."
  },
  {
    "question": "Who is accountable for the project?",
    "answer": "We are, directly. Florida Construction Specialists is always the prime contractor and never a subcontractor, so one party surveys the building, scopes the work, holds the trades, and stands behind the finished result. We hold Certified Building Contractor license CBC1262722 and have worked in the Tampa Bay market since 1982. Our clients are commercial property owners, associations, and multi-family developers."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Construction & Renovation", href: "/commercial-construction-tampa/" },
  { name: "Commercial Renovation & Reconstruction", href: "/commercial-renovation-and-reconstruction/" },
];

export default function CommercialRenovationAndReconstructionPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Commercial Renovation and Reconstruction Tampa"
        serviceDescription="Whole-building commercial renovation and reconstruction throughout Tampa Bay. Existing-conditions survey, structural reconstruction, envelope and systems modernization, code upgrade coordination, and phased delivery around occupied buildings."
        serviceCategories={["Commercial Renovation", "Building Reconstruction", "Structural Modification", "Occupied Building Construction"]}
      />

      <Breadcrumb items={[
        { name: "Services", href: "/commercial/" },
        { name: "Commercial Construction & Renovation", href: "/commercial-construction-tampa/" },
        { name: "Commercial Renovation & Reconstruction", href: "/commercial-renovation-and-reconstruction/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/building-renovation-and-reconstruction/building-renovation-and-reconstruction-display.webp"
            alt="Commercial building renovation and reconstruction work in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">Whole-Building Work on Existing Tampa Bay Properties</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Commercial Renovation &amp; Reconstruction in Tampa
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Working on a building that already exists is a different discipline from building a new one. Florida Construction Specialists surveys what is actually there, resolves the structure and envelope, and phases the work so the property keeps operating.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule a Building Assessment
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
              The Building Is the Design Constraint
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                New construction starts from a drawing. Renovation and reconstruction starts from a building that was drawn once, built slightly differently, altered several times by tenants nobody kept records of, and weathered for decades in a subtropical climate. The drawings are a hypothesis. The building is the fact.
              </p>
              <p>
                That is why our first move on this work is an existing-conditions survey rather than an estimate. We verify as-builts against what is physically there, identify what is load-bearing and what only appears to be, check the envelope from the outside rather than trusting the interior finishes, and establish which code requirements the intended scope will trigger. The schedule, the budget, and the phasing all depend on that being accurate.
              </p>
              <p>
                This is one discipline within our broader <Link href="/commercial-construction-tampa/">commercial construction and renovation</Link> work. It is specifically the owner-side, whole-building scope: structure, envelope, base systems, and code position. Interior fit-out within a leased suite is a different scope with different economics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual break */}
      <ContentParallax
        src="/images/commercial-remodeling-contractors/commercial-remodeling-contractors-display.webp"
        alt="Commercial building interior undergoing renovation in Tampa Bay"
        title="Existing Buildings, Verified Before Scoped"
        subtitle="Renovation and reconstruction for Tampa Bay commercial property owners"
        overlayOpacity={0.55}
      />

      {/* What we find */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <AlertTriangle className="w-12 h-12 text-brand-gold mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Where the Surprises Come From
              </h2>
              <p className="text-gray-600 mb-6">
                Almost every difficult moment on a renovation traces back to a condition that existed before the contract was signed and was not found until demolition. The list at right is what we go looking for during pre-construction, ordered by how often it turns up on Tampa Bay commercial buildings.
              </p>
              <p className="text-gray-600 mb-6">
                None of these are exotic. They are the ordinary consequence of a building having a history. What separates a controlled project from a chaotic one is whether that history was investigated deliberately or discovered by a demolition crew.
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
                What Pre-Construction Looks For:
              </h3>
              <ul className="space-y-4">
                {surpriseSources.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className={`px-2 py-1 rounded text-xs font-bold flex-shrink-0 ${
                      item.severity === "Very common" ? "bg-red-600 text-white" :
                      item.severity === "Common" ? "bg-orange-500 text-white" :
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

      {/* Code position */}
      <section className="section bg-brand-green-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Layers className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                Renovating Into Florida's Current Code
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                An existing building is compliant with the code it was built under. The moment you alter it substantially, parts of the current code come into play, and which parts depends on what the alteration touches. Structural modification, changes to egress, changes of occupancy, and envelope replacement each pull in different requirements. Owners are rarely told this at the concept stage, and it is one of the most common reasons a renovation budget moves after design.
              </p>
              <p>
                Tampa Bay adds a specific dimension. Florida's 2023 code revision raised structural standards for coastal construction and mandates impact-resistant glazing in wind-borne debris regions, so any renovation replacing windows or storefront on a coastal property is also a wind-resistance project whether the owner planned it that way or not.
              </p>
              <p>
                We resolve code position during pre-construction, with drawings produced in house, so the scope presented to an owner already reflects what the building will actually be required to do.
              </p>
            </div>
            <CodeReference
              code="Florida Building Code, 2023 revision"
              section="Wind-borne debris regions"
              description="Florida's 2023 revision mandates impact-resistant glazing in wind-borne debris regions and raises structural standards for coastal construction. On renovation work, opening replacements have to be integrated with wall waterproofing and flashing rather than treated as a separate trade item."
            />
          </div>
        </div>
      </section>

      {/* How it runs */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <ClipboardCheck className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                How a Renovation Project Runs
              </h2>
              <p className="text-xl text-gray-600">
                Survey first, then a scope the owner can budget against, then work sequenced around a building that has to keep functioning.
              </p>
            </div>

            <ContentImage
              src="/images/tampa-commercial-office-construction/tampa-commercial-office-construction-display.webp"
              alt="Commercial office construction and renovation work in Tampa"
              caption="Occupied renovation is a logistics problem as much as a construction problem"
              position="center"
            />

            <div className="grid md:grid-cols-4 gap-8 mt-12">
              {[
                { step: "1", title: "Survey", desc: "Existing conditions verified against as-builts, with structure, envelope, and systems assessed on site." },
                { step: "2", title: "Scope", desc: "A defined scope with code triggers identified and details drawn in house, suitable for budgeting." },
                { step: "3", title: "Build", desc: "Structure and envelope first, then systems and finishes, phased around occupied and operating areas." },
                { step: "4", title: "Close Out", desc: "Inspections, commissioning, warranty documentation, and an as-built record of what was actually built." },
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

      {/* Occupied buildings */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <Clock className="w-12 h-12 text-brand-green mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Working Around an Operating Property
              </h2>
              <p className="text-gray-600 mb-6">
                Very few owners can empty a building for the duration of a renovation, and the ones who can rarely want to. Occupied work means temporary partitions and dust control at every boundary, egress maintained without exception, base systems kept live for the areas still in use, and the loud work scheduled where it does the least damage to a tenant's day.
              </p>
              <p className="text-gray-600 mb-6">
                It also means communication that is planned rather than reactive: tenants told what is happening before it happens, and an owner who is never learning about a disruption from a complaint. This adds duration to a schedule, and it is what makes the schedule survivable.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">
                Scope We Deliver:
              </h3>
              <ul className="space-y-3">
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
              Why Tampa Bay Owners Choose FCS for Renovation Work
            </h2>
            <p className="text-gray-600">
              Florida Construction Specialists is always the prime contractor, never a subcontractor. One accountable party surveys the building, scopes the work, and stands behind the result.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Prime Contractor</h3>
              <p className="text-gray-600">Direct accountability from existing-conditions survey through close out.</p>
            </div>
            <div className="card text-center p-6">
              <Wrench className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">In-House Engineering</h3>
              <p className="text-gray-600">An engineer and architectural draftsman on staff resolve discovered conditions without a design delay.</p>
            </div>
            <div className="card text-center p-6">
              <Building2 className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Occupied Projects</h3>
              <p className="text-gray-600">Phasing, containment, and tenant coordination on buildings that stay open.</p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Since 1982</h3>
              <p className="text-gray-600">44 years working on Florida buildings, under license CBC1262722.</p>
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
              Commercial Renovation Service Areas
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-center">
              Florida Construction Specialists renovates and reconstructs commercial buildings throughout Tampa and the wider Tampa Bay region, including St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, Bradenton, and Ruskin, where our office is located. Our work concentrates on commercial, condominium, and multi-family properties across Hillsborough County and the Central Tampa Bay corridor.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="Commercial Renovation and Reconstruction FAQs" />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Start With What the Building Actually Is
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule an existing-conditions assessment with Florida Construction Specialists. We verify the building before we scope the work, so the plan you approve is the plan you get.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Building Assessment
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
        currentService="commercial-renovation-and-reconstruction"
        currentServiceName="Commercial Renovation & Reconstruction"
      />

      <RelatedArticles pageSlug="commercial-renovation-and-reconstruction" />

      {/* Related Guides — de-orphan internal links */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Commercial Construction Guides"
            links={[
              { label: "Commercial Construction vs Remodeling and Renovation in Florida", href: "/commercial/guides/commercial-construction-vs-remodeling-and-renovation-in-florida/" },
              { label: "Commercial Renovation Secrets From Florida's Top Contractors", href: "/commercial/guides/commercial-renovation-secrets-from-floridas-top-contractors/" },
              { label: "Commercial Buildings Facade Renovations", href: "/commercial/guides/commercial-buildings-facade-renovations/" },
              { label: "Value Engineering In Commercial Construction", href: "/commercial/guides/value-engineering-in-commercial-construction/" }
            ]}
          />
        </div>
      </section>
    </>
  );
}