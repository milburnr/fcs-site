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
  alternates: { canonical: 'https://floridaconstructionspecialists.com/concrete-balcony-restoration/' },
  title: "Concrete Balcony Restoration Tampa | Spalling & Rebar",
  description: "Concrete balcony restoration in Tampa for condominium and multi-family buildings. Delamination mapping, selective concrete removal, rebar treatment, repair mortar, and re-sloping. Certified Building Contractor CBC1262722, since 1982.",
  openGraph: {
    title: "Concrete Balcony Restoration Tampa | Spalling & Rebar",
    description: "Concrete balcony restoration in Tampa for condominium and multi-family buildings. Delamination mapping, selective concrete removal, rebar treatment, repair mortar, and re-sloping. Certified Building Contractor since 1982.",
    url: "https://floridaconstructionspecialists.com/concrete-balcony-restoration/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const restorationScope = [
  "Chain-drag and hammer sounding to map delamination",
  "Saw-cut boundaries and selective concrete removal",
  "Rust removal and corrosion-inhibiting rebar treatment",
  "Supplemental bars where section loss is measurable",
  "Bonded repair mortar placed to the original profile",
  "Re-established slope to drain across the finished surface",
  "Perimeter, threshold, and railing-base detailing",
  "Wet curing and protection through the cure period",
];

const conditionSignals = [
  { sign: "Hollow sound under a chain drag", meaning: "Delamination below an intact-looking surface" },
  { sign: "Rust staining at slab edges and soffits", meaning: "Corrosion already migrating to the surface" },
  { sign: "Flaking or breaking-away concrete", meaning: "Active spalling driven by expanding steel" },
  { sign: "Exposed reinforcing bar", meaning: "Section loss possible. Assess before use continues." },
  { sign: "Water standing hours after rain", meaning: "Lost slope or blocked drainage" },
  { sign: "Efflorescence on the soffit", meaning: "Water moving through the full slab section" },
];

const faqs = [
  {
    "question": "What is concrete balcony restoration?",
    "answer": "Concrete balcony restoration repairs the balcony's concrete slab and its embedded reinforcing steel while keeping the existing structure in place. The work follows a fixed sequence: map where the concrete has delaminated, saw-cut and remove the unsound material, clean and treat or supplement the corroded rebar, place a bonded repair mortar back to the original profile, restore slope to drain, and cure the repair properly. It is the right scope when deterioration is real but has not spread through the whole slab."
  },
  {
    "question": "How is restoration different from balcony reconstruction?",
    "answer": "Restoration keeps the existing slab and repairs the damaged portions of it. Reconstruction removes concrete down to the structural slab, or replaces the balcony outright, and rebuilds it. The deciding factor is how far contamination and delamination have traveled. Where sound concrete still surrounds the damage, restoration lasts. Where chlorides have penetrated the full section, patch repairs fail at their edges within a few years, and reconstruction is the honest recommendation. Florida Construction Specialists also handles that scope; see our balcony reconstruction services."
  },
  {
    "question": "Why do Tampa Bay balconies spall in the first place?",
    "answer": "Reinforcing steel inside concrete is protected by the surrounding alkaline environment. Moisture and airborne chlorides break that protection down, the steel corrodes, and rust occupies more volume than the steel it replaced. That expansion pushes the concrete apart from the inside. Tampa Bay's conditions accelerate every step of it: summer relative humidity averages around 75 percent, so slabs rarely dry out, and the June-through-November storm season delivers repeated wind-driven wetting."
  },
  {
    "question": "Can you restore balconies while residents stay in their units?",
    "answer": "Yes, and that is how most condominium and multi-family projects run. Work is phased across groups of units so residents keep their homes while their balcony is temporarily out of service. We coordinate access, notice, dust control, and work hours with the property manager and the board, and provide documentation the board can use in owner communications and meeting packets."
  },
  {
    "question": "How does a milestone inspection lead to concrete balcony restoration?",
    "answer": "Milestone structural inspections under Florida Statute 553.899 apply to condominium and cooperative buildings three stories or higher at 30 years of age, or 25 years if within three miles of the coastline, then every 10 years. Balcony spalling and delamination are among the conditions those inspections most commonly identify, and the report describes the condition rather than the repair. Turning those findings into a buildable, priced scope is contractor work. Florida Construction Specialists performs the repair itself under Certified Building Contractor license CBC1262722."
  },
  {
    "question": "What areas do you serve for concrete balcony restoration?",
    "answer": "We work throughout Tampa and the surrounding Tampa Bay region, including St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, Bradenton, and Ruskin, where our office is located. Our concrete restoration work concentrates on condominium, multi-family, and commercial buildings across Hillsborough County and the Central Tampa Bay corridor."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Concrete Balcony Restoration", href: "/concrete-balcony-restoration/" },
];

export default function ConcreteBalconyRestorationPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Concrete Balcony Restoration Tampa"
        serviceDescription="Concrete balcony restoration for condominium, multi-family, and commercial buildings in Tampa Bay. Delamination mapping, selective concrete removal, reinforcing steel treatment, bonded repair mortar placement, and slope-to-drain restoration."
        serviceCategories={["Concrete Restoration", "Spalling Repair", "Reinforcing Steel Treatment", "Balcony Slab Repair", "Milestone Inspection Remediation"]}
      />

      <Breadcrumb items={[
        { name: "Services", href: "/commercial/" },
        { name: "Concrete Balcony Restoration", href: "/concrete-balcony-restoration/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-concrete-restoration.webp"
            alt="Concrete restoration work on a Tampa Bay multi-family building"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">Tampa Bay Condominium &amp; Multi-Family Concrete Restoration</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Concrete Balcony Restoration in Tampa
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Spalling concrete and corroding rebar are one problem, not two. Florida Construction Specialists maps the damage, removes what is unsound, treats the steel, and rebuilds the slab surface so the repair holds instead of returning at its edges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule a Balcony Concrete Assessment
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
              Repairing the Slab, Not Just the Surface
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Concrete balcony restoration is a specific scope of work: repair the existing balcony slab and the reinforcing steel inside it, and leave the structure in place. It sits between a cosmetic recoat, which hides deterioration without touching it, and full reconstruction, which removes the balcony and rebuilds it. Most Tampa Bay condominium balconies that have started to spall fall in that middle band. Restoring them properly is the difference between a repair that lasts and one that reappears two winters later around the edge of the patch.
              </p>
              <p>
                Patches fail for one reason. Concrete protects embedded steel chemically, not just physically. When moisture and chlorides reach the bar, that protection breaks down and the steel starts to corrode. Rust takes up far more room than the steel it consumed, and that expansion cracks the slab from the inside out. Patch over the broken concrete without dealing with the corroding bar and the mechanism keeps running. The new mortar just becomes the next thing pushed off the slab.
              </p>
              <p>
                The crew opening up your slab reports to the same people who assessed it and who will stand behind the finished work, because Florida Construction Specialists is always the prime contractor and never a subcontractor. An in-house engineer and architectural draftsman mean the repair detail gets drawn, not improvised on the balcony. We have worked in this market since 1982 under Certified Building Contractor license CBC1262722. Concrete balcony restoration is one part of our broader <Link href="/condo-multi-family-structural/">condominium and multi-family structural restoration</Link> practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <ContentParallax
        src="/images/tampa-condo-balcony-restoration/tampa-condo-balcony-restoration-small.webp"
        alt="Condominium balcony restoration work underway in Tampa Bay"
        title="Restore the Slab Before It Becomes a Rebuild"
        subtitle="Concrete restoration for condominium, multi-family, and commercial balconies"
        overlayOpacity={0.55}
      />

      {/* Why Tampa Bay */}
      <section className="section bg-brand-green-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <ThermometerSun className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                Why Balcony Concrete Deteriorates Faster Here
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Corrosion needs moisture, oxygen, and time. Tampa Bay supplies the first in quantity and never withholds the third. Summer relative humidity in the region averages around 75 percent, which means a balcony slab that takes on water does not fully dry between rain events. A wet slab is a conductive slab, and conductive concrete lets the corrosion cell keep working around the clock rather than only during a storm.
              </p>
              <p>
                The June-through-November storm season adds the loading. Wind-driven rain does not fall onto a balcony so much as get pushed across it, under thresholds, railing bases, and any lifted membrane edge. Those are exactly the details that are supposed to keep water off the concrete.
              </p>
              <p>
                None of this is visible from a resident's chair. The first symptoms show on the soffit below, as rust staining or efflorescence, or underfoot as a section that sounds different when tapped. By then the mechanism has usually been running for years, which is why sounding the whole balcony matters more than examining the one spot somebody reported.
              </p>
            </div>
            <CodeReference
              code="Florida Statute 553.899"
              section="Milestone Inspections"
              description="Requires milestone structural inspections for condominium and cooperative buildings three stories or higher at 30 years of age, or 25 years if within three miles of the coastline, then every 10 years thereafter. Balcony concrete deterioration is one of the conditions these inspections most frequently identify, and the finding has to be converted into a repair scope before anything gets fixed."
              link="https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.899.html"
            />
          </div>
        </div>
      </section>

      {/* Condition signals */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <AlertTriangle className="w-12 h-12 text-brand-gold mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                What We Look For Before Specifying Anything
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Visible damage is the smallest part of the picture. Delamination, a horizontal separation inside the slab that usually runs along the top mat of steel, is invisible until the concrete finally breaks away, and it is routinely much larger than the area anyone reported. A chain drag across the whole balcony finds it. Sound concrete rings. Delaminated concrete answers with a dull, hollow tone.
                </p>
                <p>
                  Where sounding shows widespread separation, or where exposed steel has lost measurable section, restoration may no longer be the right call. That is a judgment that should be made before a scope is written, not discovered halfway through demolition. We would rather tell a board up front that a building needs <Link href="/balcony-reconstruction/">balcony reconstruction</Link> than sell it a restoration that will not hold.
                </p>
              </div>
              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors mt-4"
              >
                Discuss Your Building <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">
                Conditions and What They Indicate
              </h3>
              <ul className="space-y-4">
                {conditionSignals.map((item) => (
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

      {/* The restoration sequence */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Wrench className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                The Restoration Sequence
              </h2>
              <p className="text-xl text-gray-600">
                Concrete repair is unforgiving about order. Each step exists because skipping it causes a specific, predictable failure.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Removal to sound concrete</h3>
                <p>
                  Repair boundaries are saw-cut rather than feathered, because a thin tapered edge of new mortar has nothing to hold onto and breaks off first. Removal continues past the visible damage until only sound concrete remains, and where the bar is corroded it continues behind the bar as well. Leaving rusted steel bonded to fresh mortar on one side traps the corrosion cell inside the repair.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Treating the reinforcing steel</h3>
                <p>
                  Exposed bar is cleaned back to bright metal and coated with a corrosion-inhibiting or zinc-rich primer that restores the protection the concrete used to provide. Where a bar has lost meaningful cross-section, supplemental steel is placed alongside it and lapped into sound reinforcement so the slab regains its capacity rather than just its appearance. That decision belongs to an engineer, which is part of why we keep one in house.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Placing the repair mortar</h3>
                <p>
                  The prepared cavity is saturated, a bonding agent applied per the manufacturer's window, and a repair mortar selected for the depth and orientation of the cavity is placed and consolidated around the steel. Overhead soffit repairs and horizontal deck repairs need different products; using a deck mortar overhead is how repairs end up on the ground below. Cover depth over the new bar is checked, because inadequate cover is what let the original slab fail on this schedule.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Profile, slope, and cure</h3>
                <p>
                  The finished surface is brought back to the original profile and, where the original slope was inadequate or has been lost, re-established toward the drainage point so water leaves rather than sits. Curing follows immediately. Florida heat pulls moisture out of fresh mortar fast enough to leave a weak, permeable surface layer if the repair is left to dry rather than cure. The balcony stays out of service until the repair has reached the strength its next step depends on.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Protecting what was repaired</h3>
                <p>
                  Restored concrete lasts as long as water is kept off it. A restoration project therefore ends where a waterproofing scope begins: a traffic-bearing coating over the repaired deck, sealant at thresholds and perimeters, and correct detailing at railing bases. Those are handled under our <Link href="/balcony-waterproofing-and-traffic-coatings/">balcony waterproofing and traffic coatings</Link> scope, and on most buildings the two are sequenced into one mobilization.
                </p>
              </div>
            </div>

            <ContentImage
              src="/images/fcs-exterior-waterproofing/fcs-exterior-waterproofing-display.webp"
              alt="Protective coating applied over a repaired concrete surface"
              caption="Restored concrete lasts as long as the system that keeps water off it"
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
                What a Restoration Scope Includes
              </h2>
              <p className="text-gray-600 mb-6">
                Every balcony on the building gets sounded, not only the ones with complaints. The scope that comes out of it is per balcony, ranked, and tied to the sounding map, so the board can see which units are urgent, which can be grouped into the same phase, and which are sound enough to leave alone this cycle.
              </p>
              <p className="text-gray-600">
                For associations, that scope also has to survive a board meeting. We document conditions per unit and present findings in language owners can follow, so the decision is made on evidence rather than on the loudest opinion in the room.
              </p>
            </div>

            <div className="bg-brand-green-bg rounded-2xl p-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">
                Typical Scope Elements
              </h3>
              <ul className="space-y-3">
                {restorationScope.map((item) => (
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

      {/* Occupied buildings */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <ClipboardCheck className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                Restoring Balconies on an Occupied Building
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Concrete removal is the loudest, dustiest work in the trade, and on a condominium it happens a few feet from where people live. Phasing is what makes that tolerable. Work moves through the building in groups of units so that residents lose their balcony for a defined window rather than the whole project duration, and so that curing on completed balconies proceeds while demolition continues elsewhere.
              </p>
              <p>
                The parts owners actually notice are logistics: advance notice before crews arrive, work hours everyone agreed to in advance, containment that keeps dust out of open sliders, and common areas cleaned at the end of each day rather than at the end of the job. We coordinate all of it with the property manager and report progress to the board on a schedule, with photographs that go into the association's records.
              </p>
              <p>
                Where a milestone inspection is what put the balconies on the agenda, those photographs do double duty. They show owners what they paid for, and they show the next inspector that the finding was addressed. Buildings working through inspection findings can also see our <Link href="/sb4d-compliance/">SB 4-D compliance</Link> work.
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
              Why Tampa Bay Associations Choose FCS for Concrete Work
            </h2>
            <p className="text-gray-600">
              Florida Construction Specialists is always the prime contractor, never a subcontractor. The team that sounds your balconies is the team that repairs them and stands behind the result.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Prime Contractor</h3>
              <p className="text-gray-600">One accountable party from assessment through warranty on every balcony.</p>
            </div>
            <div className="card text-center p-6">
              <Wrench className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">In-House Engineering</h3>
              <p className="text-gray-600">An engineer and architectural draftsman on staff detail the repair before it is built.</p>
            </div>
            <div className="card text-center p-6">
              <Building2 className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Occupied Buildings</h3>
              <p className="text-gray-600">Phased condominium and multi-family work with board and manager coordination.</p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Since 1982</h3>
              <p className="text-gray-600">44 years repairing concrete in the Florida climate, under license CBC1262722.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-brand-green-bg">
        <div className="container-custom">
          <div className="text-center mb-8">
            <MapPin className="w-16 h-16 text-brand-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Concrete Balcony Restoration Service Areas
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-center">
              Florida Construction Specialists restores balcony concrete throughout Tampa and the wider Tampa Bay region, including St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, Bradenton, and Ruskin, where our office is located. Our concrete restoration work concentrates on condominium, multi-family, and commercial buildings across Hillsborough County and the Central Tampa Bay corridor.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="Concrete Balcony Restoration FAQs" />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Find Out How Far the Damage Actually Goes
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a balcony concrete assessment with Florida Construction Specialists. We sound the building, map the delamination, and give you a scope you can budget and defend.
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

      <RelatedArticles pageSlug="concrete-balcony-restoration" />

      {/* Related Guides — de-orphan internal links */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Balcony &amp; Concrete Guides"
            links={[
              { label: "Balcony Restoration Services", href: "/commercial/guides/balcony-restoration-services/" },
              { label: "Balcony Restoration And Exterior Waterproofing For Longevity", href: "/commercial/guides/balcony-restoration-and-exterior-waterproofing-for-longevity/" },
              { label: "Condo Balcony Inspection Requirements", href: "/commercial/guides/condo-balcony-inspection-requirements/" },
              { label: "Condo Milestone Inspection Remediation Tampa", href: "/commercial/guides/condo-milestone-inspection-remediation-tampa/" },
              { label: "Balcony Safety Measures", href: "/commercial/guides/balcony-safety-measures/" },
              { label: "Effective Balcony Maintenance Tips", href: "/commercial/guides/effective-balcony-maintenance-tips/" }
            ]}
          />
        </div>
      </section>
    </>
  );
}