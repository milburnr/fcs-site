import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award, AlertTriangle, Droplets, Wrench, ClipboardCheck, FileText, ThermometerSun, MapPin } from "lucide-react";
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
  alternates: { canonical: 'https://floridaconstructionspecialists.com/water-intrusion-investigation-and-repair/' },
  title: "Water Intrusion Investigation & Repair Tampa",
  description: "Building envelope water intrusion investigation and repair in Tampa Bay. Moisture survey, thermal imaging, and targeted water testing to isolate the entry point before repair. Certified Building Contractor CBC1262722, since 1982.",
  openGraph: {
    title: "Water Intrusion Investigation & Repair Tampa",
    description: "Building envelope water intrusion investigation and repair in Tampa Bay. Moisture survey, thermal imaging, and targeted water testing to isolate the entry point before repair. Certified Building Contractor since 1982.",
    url: "https://floridaconstructionspecialists.com/water-intrusion-investigation-and-repair/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const investigationTools = [
  "Systematic visual survey of every elevation",
  "Non-destructive moisture meter readings",
  "Infrared thermal imaging of wall and ceiling assemblies",
  "Targeted spray-rack water testing, one assembly at a time",
  "Selective probe openings at suspected entry points",
  "Interior finish and cavity inspection where access allows",
  "Photographic documentation tied to unit and elevation",
  "Written findings report with a defined repair scope",
];

const commonEntryPoints = [
  { sign: "Window and door perimeter sealant", severity: "Very common" },
  { sign: "Failed expansion and control joints", severity: "Very common" },
  { sign: "Balcony thresholds and railing post penetrations", severity: "Very common" },
  { sign: "Parapet caps, copings, and roof-to-wall transitions", severity: "Common" },
  { sign: "Stucco cracks and delaminated wall areas", severity: "Common" },
  { sign: "Through-wall penetrations for conduit and vents", severity: "Common" },
  { sign: "Blocked scuppers, weeps, and drainage paths", severity: "Common" },
  { sign: "Original flashing details never built correctly", severity: "Underdiagnosed" },
];

const faqs = [
  {
    "question": "Is this the same as leak detection?",
    "answer": "No, and the distinction matters when you are choosing who to call. Plumbing leak detection locates a failure in a pressurized supply line, a drain, or a pool shell, a source inside the building that leaks continuously regardless of the weather. Water intrusion investigation deals with the building envelope: water entering from outside through walls, joints, openings, balconies, or transitions. The clearest diagnostic is timing. If the water appears during or shortly after rain and wind and stops in dry weather, it is an envelope problem, and no amount of plumbing work will resolve it."
  },
  {
    "question": "Why can't you just repair where the stain is?",
    "answer": "Because water almost never enters directly above where it appears. Once inside the assembly it travels laterally along framing members, slab edges, furring, and the back face of the wall until it finds a path to daylight. A stain on a top-floor ceiling can originate at a parapet joint, a window head two units over, or a balcony threshold on the floor above. Repairing at the stain treats the exit, not the entry, and the leak returns with the next storm, usually after the owner has paid for interior finishes twice."
  },
  {
    "question": "How does water testing actually isolate the entry point?",
    "answer": "By eliminating variables. We start at the lowest suspected element and apply controlled water to one assembly at a time, a window sill, then the jambs, then the head, then the wall above it, while an observer monitors the interior for moisture. Masking off adjacent elements means that when water appears inside, it can only have come through the specific component under test. It is slower than guessing, and it is the only method that produces a defensible answer rather than an opinion."
  },
  {
    "question": "Will an investigation help with an insurance claim?",
    "answer": "It gives you evidence rather than an assertion. A documented investigation establishes what failed, where, and how water is moving through the assembly, which is the difference between a claim narrative and a photograph of a stain. Florida sets a one-year filing window from the date of loss for hurricane claims under Florida Statute 627.70132, so timing matters. A building that waits to investigate until deterioration is obvious may find the filing window has already closed. We provide findings suitable for submission alongside your adjuster's file."
  },
  {
    "question": "Do I need an investigation if the leak only happens in heavy storms?",
    "answer": "That pattern is exactly what an envelope investigation is designed to diagnose. Water that only appears during wind-driven rain indicates a joint, opening, or transition that stays watertight under gravity flow but not under pressure, which is the failure mode Tampa Bay produces every storm season. Waiting for the leak to become continuous means waiting for the assembly behind the wall to deteriorate first. In this climate, with summer relative humidity averaging around 75 percent, assemblies that get wet intermittently rarely dry fully between events."
  },
  {
    "question": "Do you repair what you find, or only investigate?",
    "answer": "Both, and that is deliberate. Florida Construction Specialists is always the prime contractor and never a subcontractor, so the team that isolates the entry point is the team accountable for the repair and for the water test that proves it worked. We hold Certified Building Contractor license CBC1262722 and have worked in this market since 1982. An in-house engineer and architectural draftsman mean investigation findings become buildable details rather than a report that sits on a shelf."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Building Envelope Waterproofing", href: "/building-envelope-waterproofing/" },
  { name: "Water Intrusion Investigation & Repair", href: "/water-intrusion-investigation-and-repair/" },
];

export default function WaterIntrusionInvestigationAndRepairPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Water Intrusion Investigation and Repair Tampa"
        serviceDescription="Building envelope water intrusion investigation and repair for commercial, condominium, and multi-family properties throughout Tampa Bay. Visual survey, moisture readings, thermal imaging, and targeted water testing to isolate the entry point, followed by a defined repair scope."
        serviceCategories={["Water Intrusion Investigation", "Moisture Survey", "Water Testing", "Envelope Leak Repair"]}
      />

      <Breadcrumb items={[
        { name: "Services", href: "/commercial/" },
        { name: "Building Envelope Waterproofing", href: "/building-envelope-waterproofing/" },
        { name: "Water Intrusion Investigation & Repair", href: "/water-intrusion-investigation-and-repair/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Exterior-Waterproofing.png"
            alt="Exterior wall investigation on a Tampa Bay commercial building"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">Find the Entry Point Before You Pay for the Repair</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Water Intrusion Investigation &amp; Repair in Tampa
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              A stain tells you where water came out, not where it went in. Florida Construction Specialists isolates the actual entry point through survey, moisture readings, and targeted water testing, then repairs it and proves the repair holds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Request an Investigation
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
              Investigation Is a Discipline, Not a Walkthrough
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Most envelope repairs that fail were not built badly. They were aimed badly. An owner reports a ceiling stain, a contractor recoats the wall directly above it, and the leak returns with the next storm because the water was entering forty feet away at a parapet joint and travelling along the slab edge. The repair was competent; the diagnosis was a guess.
              </p>
              <p>
                Water intrusion investigation replaces the guess. It is a structured process of narrowing: survey the elevations to find candidate entry points, read moisture through the assembly to map where water is actually sitting, then test one component at a time under controlled water until the interior responds. When the entry point is confirmed rather than assumed, the repair scope writes itself and the budget stops being a range.
              </p>
              <p>
                This is the diagnostic discipline within a full <Link href="/building-envelope-waterproofing/">building envelope waterproofing</Link> program. On some buildings it confirms a single failed detail. On others it reveals that a detail repeated on every elevation was wrong from the original construction, which changes the conversation from a repair to a program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual break */}
      <ContentParallax
        src="/images/waterproofing/waterproofing-large.webp"
        alt="Waterproofing assessment on a Tampa Bay building exterior"
        title="Evidence, Not Opinion"
        subtitle="Isolating the entry point on commercial, condominium, and multi-family buildings"
        overlayOpacity={0.55}
      />

      {/* Envelope vs plumbing */}
      <section className="section bg-brand-green-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Droplets className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                Envelope Intrusion or a Plumbing Leak?
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                These are different problems with different specialists, and buildings lose months calling the wrong one. A plumbing leak originates inside the building at a pressurized line, a drain, or a pool shell. It leaks in dry weather, it leaks at night, and its volume has nothing to do with what the sky is doing.
              </p>
              <p>
                Envelope water intrusion originates outside. It appears during or shortly after rain, it correlates with wind direction, and it may go quiet for weeks between events. The clearest early diagnostic an owner can run costs nothing: note the weather every time the water appears. A leak that only shows up when rain arrives from one particular direction is telling you which elevation to investigate.
              </p>
              <p>
                Envelope intrusion is also what Tampa Bay's climate produces in volume. Hurricane Ian in 2022 and Hurricane Idalia in 2023 both drove water into buildings that had been dry through years of ordinary rainfall, because wind-driven rain forces water sideways and upward into joints and laps that shed a vertical rainfall without difficulty. A building that has never leaked is not a building that has been tested.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we investigate */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <ClipboardCheck className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                How We Isolate the Entry Point
              </h2>
              <p className="text-xl text-gray-600">
                Each step narrows the field. Nothing gets repaired on the strength of the previous step alone.
              </p>
            </div>

            <ContentImage
              src="/images/fcs-exterior-waterproofing/fcs-exterior-waterproofing-display.webp"
              alt="Exterior wall assembly inspection and waterproofing detail"
              caption="Confirmation before specification. The entry point is proven, not inferred."
              position="center"
            />

            <div className="prose prose-lg max-w-none text-gray-600 mt-8 space-y-6">
              <p>
                <strong>Visual survey.</strong> We walk every elevation, not only the one nearest the reported leak, documenting joint condition, sealant failure, stucco cracking, flashing, drainage paths, and any detail that repeats across the building. A single reported leak usually indicates a detail that exists on every floor.
              </p>
              <p>
                <strong>Moisture mapping.</strong> Non-destructive moisture readings across interior finishes and, where accessible, within the assembly show the extent and shape of wetting. The pattern is diagnostic: moisture that fans downward and outward from a point usually indicates a single entry, while a uniform band along a slab edge points to lateral travel from somewhere else entirely.
              </p>
              <p>
                <strong>Thermal imaging.</strong> Infrared surveys identify temperature differentials that indicate wet material behind finishes, which lets us focus destructive investigation where it will actually tell us something. Thermal imaging narrows the search; it does not by itself prove water is present, which is why it is used alongside moisture readings rather than instead of them.
              </p>
              <p>
                <strong>Controlled water testing.</strong> The decisive step. Water is applied to one isolated assembly at a time, with adjacent components masked off, while the interior is monitored. Testing begins low and works upward so that a positive result cannot be attributed to anything above it. This is what converts a strong suspicion into a confirmed entry point.
              </p>
              <p>
                <strong>Selective openings.</strong> Where testing confirms an entry but the mechanism is unclear, small probe openings expose the flashing, membrane, or framing behind the finish. Openings are made where the evidence points, kept minimal, and closed as part of the repair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where water gets in */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <AlertTriangle className="w-12 h-12 text-brand-gold mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Where Water Actually Gets In
              </h2>
              <p className="text-gray-600 mb-6">
                In our experience across Tampa Bay commercial and multi-family buildings, envelope intrusion begins at a transition far more often than in the middle of a wall. Transitions are where two materials, two trades, and two sets of tolerances meet, and they are where original construction most often left something incomplete.
              </p>
              <p className="text-gray-600 mb-6">
                The list at right is ordered by how often each turns out to be the confirmed source once testing is complete, not by how often it is blamed. Roofs, for instance, are blamed constantly and confirmed comparatively rarely on top-floor leaks.
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
                Confirmed Entry Points, by Frequency:
              </h3>
              <ul className="space-y-4">
                {commonEntryPoints.map((item, index) => (
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

      {/* Documentation + insurance */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <FileText className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                Findings You Can Put in Front of a Board or an Adjuster
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                An investigation is only as useful as the record it produces. Ours ties every observation to a unit, an elevation, and a photograph, states what was tested and what the test produced, and ends in a defined repair scope rather than a recommendation to monitor. Condominium and HOA boards need that level of documentation to authorize spending; owners pursuing an insurance claim need it to establish cause.
              </p>
              <p>
                Timing is a real constraint in Florida. The state sets a one-year filing window from the date of loss for hurricane claims. A building that postpones investigation after a storm because the interior damage looked minor can find both the filing window and the evidence trail have closed.
              </p>
            </div>
            <CodeReference
              code="Florida Statute 627.70132"
              section="Notice of windstorm or hurricane claim"
              description="Florida sets a one-year window from the date of loss to file a hurricane claim, with a two-year window for other perils under the revised rules. Documented investigation findings establish the cause and date of loss while the evidence is still available."
            />
          </div>
        </div>
      </section>

      {/* What we assess */}
      <section className="section bg-brand-green-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Wrench className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                What an Investigation Includes
              </h2>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <ul className="grid sm:grid-cols-2 gap-4">
                {investigationTools.map((item) => (
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
              Why Tampa Bay Owners Choose FCS to Investigate
            </h2>
            <p className="text-gray-600">
              We are always the prime contractor, never a subcontractor. The team that finds the leak is the team that fixes it and the team that water tests the fix.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Prime Contractor</h3>
              <p className="text-gray-600">One accountable party from investigation through the verified repair.</p>
            </div>
            <div className="card text-center p-6">
              <ThermometerSun className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Florida Conditions</h3>
              <p className="text-gray-600">Diagnosis built around wind-driven rain, not textbook gravity leaks.</p>
            </div>
            <div className="card text-center p-6">
              <Building2 className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Occupied Buildings</h3>
              <p className="text-gray-600">Unit access coordination and board-ready reporting on condominium projects.</p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Since 1982</h3>
              <p className="text-gray-600">44 years diagnosing Florida buildings, under license CBC1262722.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <MapPin className="w-16 h-16 text-brand-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Water Intrusion Investigation Service Areas
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-center">
              Florida Construction Specialists investigates and repairs building envelope water intrusion throughout Tampa and the wider Tampa Bay region, including St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, Bradenton, and Ruskin, where our office is located. Our work concentrates on commercial, condominium, and multi-family properties across Hillsborough County and the Central Tampa Bay corridor.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="Water Intrusion Investigation FAQs" />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Stop Repairing the Symptom
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a water intrusion investigation with Florida Construction Specialists. We confirm the entry point, document it, and repair it, then test the repair before we leave.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request an Investigation
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
        currentService="water-intrusion-investigation-and-repair"
        currentServiceName="Water Intrusion Investigation & Repair"
      />

      <RelatedArticles pageSlug="water-intrusion-investigation-and-repair" />

      {/* Related Guides — de-orphan internal links */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Waterproofing Guides"
            links={[
              { label: "Waterproofing Commercial Contractors", href: "/commercial/guides/waterproofing-commercial-contractors/" },
              { label: "Effective Exterior Waterproofing Methods For Your Property", href: "/commercial/guides/effective-exterior-waterproofing-methods-for-your-property/" },
              { label: "Choosing The Right Waterproofing Solution Your Ultimate Guide", href: "/commercial/guides/choosing-the-right-waterproofing-solution-your-ultimate-guide/" },
              { label: "Discover The Benefits Of Exterior Waterproofing", href: "/commercial/guides/discover-the-benefits-of-exterior-waterproofing/" }
            ]}
          />
        </div>
      </section>
    </>
  );
}