import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award, FileText, Wrench, ClipboardCheck, Scale, HardHat, MapPin } from "lucide-react";
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
  alternates: { canonical: 'https://floridaconstructionspecialists.com/repair-estimating-for-structural-integrity-reserve/' },
  title: "SIRS Repair Estimating Tampa | Reserve Study Support",
  description: "Contractor repair estimating for structural integrity reserve studies in Tampa. Condition-based scopes and construction cost input for condominium boards, reserve specialists, and engineers. Certified Building Contractor CBC1262722, since 1982.",
  openGraph: {
    title: "SIRS Repair Estimating Tampa | Reserve Study Support",
    description: "Contractor repair estimating for structural integrity reserve studies in Tampa. Condition-based scopes and construction cost input for condominium boards, reserve specialists, and engineers. Certified Building Contractor since 1982.",
    url: "https://floridaconstructionspecialists.com/repair-estimating-for-structural-integrity-reserve/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const estimatingInputs = [
  "Repair scopes written per component, not per building",
  "Quantities taken off from surveyed conditions",
  "Current Tampa Bay construction pricing, not national averages",
  "Access, shoring, and phasing costs stated explicitly",
  "Occupied-building constraints priced rather than assumed away",
  "Sequencing notes so components are not opened up twice",
  "Options at different scope levels where a choice genuinely exists",
  "Documentation formatted for board and owner review",
];

const components = [
  { name: "Roof", note: "Remaining service life and the replacement scope that follows from it" },
  { name: "Structure, including load-bearing walls", note: "Load-bearing concrete, slabs, and frame, including anything a milestone inspection flagged" },
  { name: "Fireproofing and fire protection", note: "Systems whose repair scope depends on access through finishes" },
  { name: "Plumbing and electrical", note: "Distribution work that drives access, phasing, and unit entry" },
  { name: "Waterproofing and exterior painting", note: "Coatings, sealants, and envelope work on a recurring cycle" },
  { name: "Windows and exterior doors", note: "Openings that interact with wall waterproofing and code requirements" },
];

const faqs = [
  {
    "question": "What is repair estimating for a structural integrity reserve study?",
    "answer": "A structural integrity reserve study identifies the components an association must fund and estimates what they will cost to repair or replace. The study is prepared by a reserve specialist or engineer; the construction cost side of it is a contractor's discipline. Repair estimating supplies that side: defined repair scopes for the conditions actually present on the building, quantities taken off from those conditions, and current local pricing, so the numbers in the study reflect what the work costs here rather than a national average."
  },
  {
    "question": "Do you prepare the reserve study itself?",
    "answer": "No, and that distinction matters. Florida Construction Specialists is a Certified Building Contractor, license CBC1262722. We do not perform the reserve study or the milestone structural inspection. Those belong to reserve specialists and licensed engineers. What we contribute is the repair scoping and construction cost input that makes those documents usable, and then, when the association is ready, the repair work itself. Many firms in this space assess; comparatively few also hold the license to build the repair they described."
  },
  {
    "question": "Which buildings need a structural integrity reserve study?",
    "answer": "Florida Statute 718.112(2)(g) requires structural integrity reserve studies for condominium associations with buildings three stories or higher. The study covers the roof, the structure including load-bearing walls, fireproofing and fire protection, plumbing, electrical, waterproofing and exterior painting, and windows and exterior doors. The requirement came in under SB 4-D in 2022 and was amended by SB 154 in 2023, so associations should confirm current deadlines with their attorney or reserve specialist rather than relying on what was true when the last study was commissioned."
  },
  {
    "question": "How does this relate to the milestone inspection?",
    "answer": "They are separate requirements that meet in the budget. The milestone structural inspection under Florida Statute 553.899 examines whether the structure is sound. The structural integrity reserve study determines what the association must set aside to maintain and replace its major components. When an inspection identifies deterioration, that condition needs a repair scope and a cost before it can enter the reserve plan. That is the point at which a contractor's estimate becomes necessary."
  },
  {
    "question": "Why do contractor estimates differ so much from generic reserve figures?",
    "answer": "Because generic figures price a component, and a contractor prices a job. On an occupied Tampa Bay building the cost drivers are frequently not the material at all: swing stage or lift access, shoring, phasing around residents, unit entry coordination, and working within a June-through-November storm season. Those are the line items that move a reserve number, and leaving them out is how associations end up with a plan that is short when the work is finally bid."
  },
  {
    "question": "What areas do you serve?",
    "answer": "We work throughout Tampa and the wider Tampa Bay region, including St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, Bradenton, and Ruskin, where our office is located. Our reserve estimating and repair work concentrates on condominium, multi-family, and commercial buildings across Hillsborough County and the Central Tampa Bay corridor."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "SIRS Repair Estimating", href: "/repair-estimating-for-structural-integrity-reserve/" },
];

export default function RepairEstimatingForStructuralIntegrityReservePage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Repair Estimating for Structural Integrity Reserve Studies Tampa"
        serviceDescription="Contractor repair scoping and construction cost estimating to support structural integrity reserve studies for condominium and multi-family buildings in Tampa Bay. Condition-based scopes, local pricing, phasing and access costs, and documentation for board review."
        serviceCategories={["Reserve Study Support", "Repair Estimating", "Construction Cost Consulting", "Condominium Capital Planning", "Milestone Inspection Remediation"]}
      />

      <Breadcrumb items={[
        { name: "Services", href: "/commercial/" },
        { name: "SIRS Repair Estimating", href: "/repair-estimating-for-structural-integrity-reserve/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-concrete-restoration.webp"
            alt="Condominium structural restoration work in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">Tampa Bay Condominium Reserve Planning Support</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Repair Estimating for Structural Integrity Reserve Studies
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              A reserve study is only as good as the construction numbers inside it. Florida Construction Specialists scopes the repairs your building actually needs and prices them at Tampa Bay rates, as the contractor who can then build them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Request Repair Estimating Support
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
              The Study Says What. A Contractor Says What It Costs to Fix.
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Structural integrity reserve studies are prepared by reserve specialists and engineers, and that is the right place for them to sit. But the study's usefulness to a board depends on a number that is not an engineering question at all: what the repair will actually cost to build, on this building, in this market, with residents living in it. That is contractor work, and it is what Florida Construction Specialists contributes to the process.
              </p>
              <p>
                Search this subject and almost everything that comes back is an assessment firm: engineers, reserve study providers, inspection consultants. Their work is necessary. It is also, by design, where their involvement ends. Florida Construction Specialists holds Certified Building Contractor license CBC1262722, which means the same company that scopes and prices the repair is licensed to perform it. An estimate written by the party who will have to build it tends to be a more honest estimate.
              </p>
              <p>
                We have been building and restoring in this market since 1982 and are always the prime contractor, never a subcontractor. An in-house engineer and architectural draftsman mean a repair scope arrives as a defined detail rather than a paragraph. This service supports our wider <Link href="/condo-multi-family-structural/">condominium and multi-family structural restoration</Link> practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <ContentParallax
        src="/images/tampa-condo-balcony-restoration/tampa-condo-balcony-restoration-small.webp"
        alt="Condominium structural restoration in progress in Tampa Bay"
        title="Numbers a Board Can Actually Budget Against"
        subtitle="Repair scoping and construction cost input for Tampa Bay associations"
        overlayOpacity={0.55}
      />

      {/* What we provide */}
      <section className="section bg-brand-green-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <FileText className="w-12 h-12 text-brand-green mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                What We Provide
              </h2>
              <p className="text-gray-700 mb-6">
                We survey the components in question, write a repair scope for the conditions actually present, take off quantities from that scope, and price it at current Tampa Bay rates. Where a real choice exists, such as repair now versus replace later, or phased over two budget years versus done at once, we price both rather than picking for the board.
              </p>
              <p className="text-gray-700">
                The output is written to be read by people who are not builders. Directors change, and a scope that only makes sense to whoever commissioned it stops being useful the following year.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">
                What Goes Into an Estimate:
              </h3>
              <ul className="space-y-3">
                {estimatingInputs.map((item) => (
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

      {/* Components */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Scale className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                The Components a SIRS Has to Cover
              </h2>
              <p className="text-xl text-gray-600">
                Florida Statute 718.112(2)(g) names them. Each one carries a different cost driver, and treating them as a single line is how reserve plans end up short.
              </p>
            </div>
            <div className="space-y-4">
              {components.map((c) => (
                <div key={c.name} className="bg-gray-50 rounded-xl p-6 flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="sm:w-72 flex-shrink-0">
                    <span className="font-bold text-brand-green-dark text-lg">{c.name}</span>
                  </div>
                  <p className="text-gray-600">{c.note}</p>
                </div>
              ))}
            </div>
            <div className="prose prose-lg max-w-none text-gray-600 mt-10">
              <p>
                Structure and waterproofing are where our estimates carry the most weight, because those are the components we repair every week. Deteriorated concrete in particular resists desktop pricing: what a repair costs depends on how far delamination extends beyond the visible damage, and that is only known once the elements have been sounded. Where a study is being prepared for a building with known concrete issues, having the extent mapped before the number is written changes the number materially. That survey work is described under <Link href="/structural-concrete-repair/">structural concrete repair</Link> and <Link href="/concrete-balcony-restoration/">concrete balcony restoration</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statutory context */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <ClipboardCheck className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                Two Requirements That Meet in the Budget
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Florida's milestone structural inspection and its structural integrity reserve study are separate obligations that arrive at the same board table. The inspection asks whether the structure is sound. The reserve study asks whether the association has set aside enough to maintain and replace its major components. Neither produces a repair, and neither on its own tells a board what next year's assessment needs to be.
              </p>
              <p>
                The link between them is a repair scope with a defensible cost. When an inspection reports deterioration in a slab, a balcony, or a facade, that finding has to become a described, quantified, priced piece of work before it can enter a funding plan or go out to bid. Associations that skip that step end up either reserving against a guess or discovering the gap when bids come in.
              </p>
              <p>
                Timing is the other practical constraint. Requirements in this area have been amended more than once since they were introduced, so associations should confirm current deadlines with their attorney or reserve specialist rather than relying on what was true when the last study was commissioned. Buildings already working through inspection findings can see how we run those programs on our <Link href="/sb4d-compliance/">SB 4-D compliance</Link> page.
              </p>
            </div>
            <CodeReference
              code="Florida Statute 553.899"
              section="Milestone Inspections"
              description="Requires milestone structural inspections for condominium and cooperative buildings three stories or higher at 30 years of age, or 25 years if within three miles of the coastline, then every 10 years thereafter. Findings from these inspections routinely become the largest line items in a structural integrity reserve study, which is why they need a contractor's scope and cost rather than a placeholder figure."
              link="https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.899.html"
            />
          </div>
        </div>
      </section>

      {/* Why local pricing */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <HardHat className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                Why Local Conditions Change the Number
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Tampa Bay does not price like a national average. The region typically sees two to three tropical systems in a season across a June-through-November window, which compresses exterior work into a schedule and puts a premium on getting an elevation closed up before the next system. Hurricane Ian in 2022 and Hurricane Idalia in 2023 both demonstrated what happens to regional contractor availability after a significant storm.
              </p>
              <p>
                Climate also shapes what deteriorates and how fast. With summer relative humidity in the region averaging around 75 percent, concrete and coatings rarely get a chance to dry out, and service lives that would be defensible in a drier market are optimistic here. A reserve plan built on generic replacement cycles will tend to under-fund waterproofing, coatings, and exposed concrete, which are exactly the components our climate consumes fastest.
              </p>
              <p>
                Then there is the building itself. Access is a real cost: what can be reached from a lift is a different job from what needs a swing stage, and both are different from work that requires entry into occupied units. Phasing costs money too, and it is usually worth spending, but only if it was priced rather than assumed.
              </p>
            </div>

            <ContentImage
              src="/images/fcs-commercial-exterior-waterproofing/fcs-commercial-exterior-waterproofing-display.webp"
              alt="Exterior restoration work on a Tampa Bay commercial building"
              caption="Access, phasing, and season are line items, not footnotes"
              position="center"
            />
          </div>
        </div>
      </section>

      {/* Working with boards */}
      <section className="section bg-brand-green-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading text-center">
              Working With Boards, Managers, and Reserve Specialists
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Most of this work is collaborative. A reserve specialist or engineer holds the study; we supply the repair scoping and construction pricing for the components we can speak to credibly, and we say plainly where we cannot. Where a board is weighing options, we present them as options with costs attached rather than as a recommendation dressed up as a requirement.
              </p>
              <p>
                Documentation is written for the people who have to live with it: directors, owners, and whoever holds the seat in three years. That means plain descriptions of the condition, what is proposed, what it costs, and what happens if it is deferred. Estimating support of this kind also sits alongside the formal cost documentation described on our <Link href="/certified-estimates/">certified estimates</Link> page.
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
              An Estimate From the Party Who Would Build It
            </h2>
            <p className="text-gray-600">
              Florida Construction Specialists is always the prime contractor, never a subcontractor. We scope, we price, and if the association proceeds, we perform the work under the same license.
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
              <p className="text-gray-600">An engineer and architectural draftsman turn conditions into buildable scopes.</p>
            </div>
            <div className="card text-center p-6">
              <Building2 className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Association Experience</h3>
              <p className="text-gray-600">Board presentations, owner communication, and phased occupied-building work.</p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Since 1982</h3>
              <p className="text-gray-600">44 years of Tampa Bay pricing history behind every number.</p>
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
              Reserve Estimating Service Areas
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-center">
              Florida Construction Specialists supports associations throughout Tampa and the wider Tampa Bay region, including St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, Bradenton, and Ruskin, where our office is located. Our reserve estimating and repair work concentrates on condominium, multi-family, and commercial buildings across Hillsborough County and the Central Tampa Bay corridor.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="Reserve Study Repair Estimating FAQs" />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Put a Real Number in the Reserve Plan
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Talk to Florida Construction Specialists about repair scoping and construction cost input for your building's reserve study, from the contractor who can carry out the work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request Estimating Support
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

      <RelatedArticles pageSlug="structural-integrity-reserve-study-repair-estimating" />

      {/* Related Guides — de-orphan internal links */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Reserve &amp; Inspection Guides"
            links={[
              { label: "Condo Structural Reserve Study Repairs", href: "/commercial/guides/condo-structural-reserve-study-repairs/" },
              { label: "Condo Milestone Inspection Remediation Tampa", href: "/commercial/guides/condo-milestone-inspection-remediation-tampa/" },
              { label: "Condo Balcony Inspection Requirements", href: "/commercial/guides/condo-balcony-inspection-requirements/" },
              { label: "Historic Building Structural Assessment In Tampa", href: "/commercial/guides/historic-building-structural-assessment-in-tampa/" }
            ]}
          />
        </div>
      </section>
    </>
  );
}