import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award, AlertTriangle, FileText, Wrench, ClipboardCheck, Clock, ThermometerSun, MapPin } from "lucide-react";
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
  alternates: { canonical: 'https://floridaconstructionspecialists.com/insurance-storm-reconstruction/' },
  title: "Storm Damage Reconstruction Tampa | Insurance Work",
  description: "Storm damage reconstruction for Tampa Bay commercial, condo, and multi-family buildings. Documented damage assessment, insurance restoration construction, and hurricane reconstruction rebuilt to current code. Certified Building Contractor CBC1262722, since 1982.",
  openGraph: {
    title: "Storm Damage Reconstruction Tampa | Insurance Work",
    description: "Storm damage reconstruction for Tampa Bay commercial, condo, and multi-family buildings. Documented damage assessment, insurance restoration construction, and hurricane reconstruction rebuilt to current code. Certified Building Contractor since 1982.",
    url: "https://floridaconstructionspecialists.com/insurance-storm-reconstruction/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const firstWeekActions = [
  { action: "Make the building safe and weather-secure", severity: "Immediately" },
  { action: "Photograph damage before anything is moved or cleaned", severity: "Immediately" },
  { action: "Notify the insurer and record the date of loss", severity: "Immediately" },
  { action: "Have the envelope assessed by a contractor, not only by eye", severity: "First week" },
  { action: "Document concealed damage before repairs begin", severity: "First week" },
  { action: "Keep records of emergency work and expenses", severity: "First week" },
  { action: "Establish what the building code will require on the rebuild", severity: "Before scoping" },
  { action: "Watch the filing deadline for the peril involved", severity: "Before scoping" },
];

const faqs = [
  {
    "question": "What is the difference between storm damage restoration and reconstruction?",
    "answer": "Restoration returns a damaged building to its prior condition, repairing what the storm broke and replacing what it destroyed. Reconstruction rebuilds elements that no longer exist or that cannot be repaired, and does so to today's code rather than to the code the building was originally built under. Most substantial Tampa Bay storm projects involve both. The line between them matters financially, because the code-required portion of a rebuild is treated differently from a like-for-like repair."
  },
  {
    "question": "How quickly do I need to act after a storm?",
    "answer": "Sooner than most owners expect, and the constraint is legal rather than practical. Florida sets a one-year filing window from the date of loss for hurricane claims under Florida Statute 627.70132, with a two-year window for other perils under the revised rules. Concealed damage is also easiest to document while it is fresh. The mistake that hurts owners most is waiting to see whether an apparently minor problem gets worse, then finding both the evidence and the filing window gone."
  },
  {
    "question": "Do you handle the insurance claim for me?",
    "answer": "We provide the construction side of it: documented damage assessment, a defined scope of work, drawings where the rebuild requires them, and the record an adjuster needs to evaluate what is actually there. We are your contractor, not your claims representative, and we coordinate with your adjuster and your carrier rather than acting in their place. Florida's 2019 Assignment of Benefits reform limited the assignments contractors could once take from policyholders, which makes clean separation between the two roles the normal arrangement now."
  },
  {
    "question": "Why does the rebuild have to meet current code?",
    "answer": "Because rebuilding is new work on an existing structure, and Florida's requirements have moved substantially. The 2023 code revision raised structural standards for coastal construction and mandates impact-resistant glazing in wind-borne debris regions. A building damaged in a storm frequently cannot be put back exactly as it was, and identifying that at the assessment stage rather than at inspection is what keeps a rebuild from stalling halfway through."
  },
  {
    "question": "Do you work with condominium associations after a storm?",
    "answer": "Yes. Multi-family storm work involves board authorization, owner communication, unit access, and phasing that keeps residents in place while the building is rebuilt around them. We provide documentation suitable for board presentation and coordinate directly with property managers and building engineers. Condominium, HOA, and multi-family work is a core part of what Florida Construction Specialists does."
  },
  {
    "question": "What makes storm reconstruction different from ordinary construction?",
    "answer": "Sequence and evidence. An ordinary project starts from a design; a storm project starts from a damaged building that has to be documented before it is touched, made safe before it is scoped, and rebuilt while an insurance process runs alongside the construction. Florida Construction Specialists holds Certified Building Contractor license CBC1262722, has worked in this market since 1982, and is always the prime contractor, never a subcontractor, so one party carries the assessment, the scope, and the rebuild."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Insurance & Storm Reconstruction", href: "/insurance-storm-reconstruction/" },
];

export default function InsuranceStormReconstructionPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Insurance and Storm Reconstruction Tampa"
        serviceDescription="Storm damage reconstruction and insurance restoration construction for commercial, condominium, and multi-family properties throughout Tampa Bay. Documented damage assessment, defined rebuild scope, code-compliant reconstruction, and coordination with owners, boards, and adjusters."
        serviceCategories={["Insurance Restoration Construction", "Hurricane and Storm Damage Reconstruction", "Damage Assessment", "Code-Compliant Rebuild"]}
      />

      <Breadcrumb items={[
        { name: "Services", href: "/commercial/" },
        { name: "Insurance & Storm Reconstruction", href: "/insurance-storm-reconstruction/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hurricane-restoration-construction/hurricane-restoration-construction-large.webp"
            alt="Hurricane damage reconstruction work on a Florida building"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">Tampa Bay Commercial &amp; Multi-Family Storm Reconstruction</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Storm Damage Reconstruction in Tampa
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              After a storm, what gets documented in the first week determines what can be rebuilt in the following year. Florida Construction Specialists assesses the damage properly, defines the scope, and rebuilds to current code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Request a Damage Assessment
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
              The Rebuild Is Decided Before It Starts
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Storm work is unlike ordinary construction in one decisive way: the project has to be documented before it can be scoped, and the window for documenting it is short. Damage that is obvious on day one becomes ambiguous once emergency work has been done, debris has been cleared, and the building has dried out. Concealed damage, such as water that traveled inside a wall assembly or a joint that opened under wind pressure, is harder to establish with every week that passes.
              </p>
              <p>
                That is why our first step after a storm is assessment and documentation rather than mobilization. What the building looked like, what failed, where water reached, and what the rebuild will be required to do under current code. The scope, the schedule, and the conversation with an adjuster all depend on that record being complete.
              </p>
              <p>
                Storm and insurance work is one of several disciplines Florida Construction Specialists brings to Tampa Bay property owners; the full range is on our <Link href="/">commercial construction and restoration homepage</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual break */}
      <ContentParallax
        src="/images/tampa-hurricane-damage-restoration/tampa-hurricane-damage-restoration-display.webp"
        alt="Hurricane damage restoration work in the Tampa Bay area"
        title="Document First, Then Rebuild"
        subtitle="Storm reconstruction for commercial, condominium, and multi-family properties"
        overlayOpacity={0.55}
      />

      {/* First week */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <Clock className="w-12 h-12 text-brand-gold mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                What Matters in the First Week
              </h2>
              <p className="text-gray-600 mb-6">
                Owners and boards are making decisions under pressure in the days after a storm, usually while the building is still partly unusable. The sequence at right is what protects both the building and the record. None of it is complicated; almost all of it is easier now than later.
              </p>
              <p className="text-gray-600 mb-6">
                The one thing worth stating plainly: photograph everything before it is cleaned up or moved. Evidence of what a storm did is remarkably easy to erase while trying to be helpful.
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
                After-Storm Sequence:
              </h3>
              <ul className="space-y-4">
                {firstWeekActions.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className={`px-2 py-1 rounded text-xs font-bold flex-shrink-0 ${
                      item.severity === "Immediately" ? "bg-red-600 text-white" :
                      item.severity === "First week" ? "bg-orange-500 text-white" :
                      "bg-yellow-500 text-gray-900"
                    }`}>
                      {item.severity}
                    </span>
                    <span className="text-gray-700">{item.action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Child services */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Wrench className="w-16 h-16 text-brand-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Insurance &amp; Storm Reconstruction Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two related disciplines. One is defined by the claim, the other by the storm.
            </p>
          </div>

          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4">Insurance Restoration Construction</h2>
              <p>
                This is construction delivered alongside an active insurance claim, on any covered peril rather than storms alone. It means a scope built to match documented damage, drawings where the rebuild requires them, records kept in a form an adjuster can evaluate, and construction sequenced around approvals rather than blocked by them. We work as your contractor and coordinate with your adjuster; we do not act as your claims representative. <Link href="/insurance-restoration-tampa/">See our insurance restoration construction</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4">Hurricane and Storm Damage Reconstruction</h2>
              <p>
                This is the rebuild itself after wind, wind-driven rain, or flood damage: envelope and openings, roof-to-wall transitions, structural repair, and the interior work that follows once the building is dry and secure. Because it is new work on an existing structure, it is built to current Florida code rather than to the standard the building was originally constructed under. On coastal properties that frequently means a materially stronger building than the one the storm hit. <Link href="/insurance/hurricane-restoration/">See our hurricane and storm damage reconstruction</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Florida insurance context */}
      <section className="section bg-brand-green-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <FileText className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                The Florida Context Owners Should Know
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Florida's insurance market has been shaped by hurricane exposure and by reforms enacted between 2022 and 2024. Citizens Property Insurance operates as the insurer of last resort. Florida homeowners typically carry a separate wind or hurricane deductible set as a percentage of dwelling coverage, commonly two to five percent, rather than the flat deductible that applies to other perils. Check how your own policy structures its wind deductible before deciding what is worth claiming, because on a large building it changes the answer.
              </p>
              <p>
                Timing is set in statute. Florida allows one year from the date of loss to file a hurricane claim, and two years for other perils under the revised rules. The 2019 Assignment of Benefits reform also limited the assignments contractors were once able to take from policyholders, which is why the contractor and the claims side of a project are now normally separate roles rather than one.
              </p>
              <p>
                None of this is legal or insurance advice, and your carrier and adjuster remain the authority on your policy. It is context we give owners and boards because the decisions they make in the first week are usually made without it.
              </p>
            </div>
            <CodeReference
              code="Florida Statute 627.70132"
              section="Notice of windstorm or hurricane claim"
              description="Florida sets a one-year window from the date of loss to file a hurricane claim, with a two-year window for other perils under the revised rules. Documented assessment establishes cause and date of loss while the evidence is still available."
            />
          </div>
        </div>
      </section>

      {/* Why Tampa Bay */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <ThermometerSun className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                Why Tampa Bay Buildings Take Storm Damage
              </h2>
            </div>

            <ContentImage
              src="/images/hurricane-insurance-restoration/hurricane-insurance-restoration-display.webp"
              alt="Storm damage restoration work on a Florida property"
              caption="Concealed damage is the part that gets missed and the part that costs the most later"
              position="center"
            />

            <div className="prose prose-lg max-w-none text-gray-600 mt-8">
              <p>
                The region sits in hurricane alley and typically sees two to three tropical systems in a season, with the strong storm season running June through November. Hurricane Ian in 2022 and Hurricane Idalia in 2023 both produced damage across Tampa Bay on buildings owners had believed were sound, and much of that damage was not the dramatic kind. Wind-driven rain forces water horizontally and upward into joints, thresholds, and openings that shed ordinary rainfall without difficulty, and the damage it does happens inside the wall.
              </p>
              <p>
                Summer relative humidity averaging around 75 percent means an assembly that took on water during a storm does not simply dry out afterwards. That is the mechanism behind most of the deterioration we are called to rebuild a year or two after an event, and the reason a documented assessment immediately after a storm is worth more than an inspection later.
              </p>
            </div>
            <CodeReference
              code="Florida Building Code, 2023 revision"
              section="Wind-borne debris regions"
              description="Florida's 2023 revision mandates impact-resistant glazing in wind-borne debris regions and raises structural standards for coastal construction. Storm rebuilds involving openings are therefore wind-resistance work, and have to be integrated with wall waterproofing and flashing rather than replaced like for like."
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <ClipboardCheck className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                How a Storm Project Runs
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Secure", desc: "Make the building safe and weather-tight, with emergency work documented as it is performed." },
                { step: "2", title: "Document", desc: "Full damage assessment including concealed damage, photographed and recorded against date of loss." },
                { step: "3", title: "Scope", desc: "A defined rebuild scope with code requirements identified and details drawn in house." },
                { step: "4", title: "Rebuild", desc: "Construction to current code, phased around occupancy, with close-out documentation and warranty." },
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
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Tampa Bay Owners Choose FCS After a Storm
            </h2>
            <p className="text-gray-600">
              Florida Construction Specialists is always the prime contractor, never a subcontractor. One accountable party assesses the damage, defines the scope, and rebuilds.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Prime Contractor</h3>
              <p className="text-gray-600">Direct accountability from the first assessment through the finished rebuild.</p>
            </div>
            <div className="card text-center p-6">
              <FileText className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Documentation</h3>
              <p className="text-gray-600">Damage recorded in a form an adjuster and a board can both evaluate.</p>
            </div>
            <div className="card text-center p-6">
              <AlertTriangle className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Concealed Damage</h3>
              <p className="text-gray-600">Envelope experience means we look where wind-driven water actually goes.</p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Since 1982</h3>
              <p className="text-gray-600">44 years rebuilding after Florida storms, under license CBC1262722.</p>
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
              Storm Reconstruction Service Areas
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-center">
              Florida Construction Specialists rebuilds storm-damaged buildings throughout Tampa and the wider Tampa Bay region, including St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, Bradenton, and Ruskin, where our office is located. Our work concentrates on commercial, condominium, and multi-family properties across Hillsborough County and the Central Tampa Bay corridor.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="Insurance and Storm Reconstruction FAQs" />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Get the Damage Documented Properly
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Request a storm damage assessment from Florida Construction Specialists. We record what actually failed, including what is behind the wall, and scope the rebuild from evidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request a Damage Assessment
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
        currentService="insurance-storm-reconstruction"
        currentServiceName="Insurance & Storm Reconstruction"
      />

      <RelatedArticles pageSlug="insurance-storm-reconstruction" />

      {/* Related Guides — de-orphan internal links */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Storm and Restoration Guides"
            links={[
              { label: "Commercial Construction vs Remodeling and Renovation in Florida", href: "/commercial/guides/commercial-construction-vs-remodeling-and-renovation-in-florida/" },
              { label: "Waterproofing Commercial Contractors", href: "/commercial/guides/waterproofing-commercial-contractors/" },
              { label: "Effective Exterior Waterproofing Methods For Your Property", href: "/commercial/guides/effective-exterior-waterproofing-methods-for-your-property/" },
              { label: "Balcony Reconstruction Exterior Waterproofing", href: "/commercial/guides/balcony-reconstruction-exterior-waterproofing/" }
            ]}
          />
        </div>
      </section>
    </>
  );
}