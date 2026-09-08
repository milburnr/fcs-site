import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award, AlertTriangle, Droplets, Wrench, ClipboardCheck, Layers, ThermometerSun, MapPin } from "lucide-react";
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
  alternates: { canonical: 'https://floridaconstructionspecialists.com/stucco-restoration-and-recoating/' },
  title: "Stucco Restoration & Recoating Tampa | Full Elevation",
  description: "Whole-elevation stucco restoration and recoating for Tampa Bay commercial, condo, and historic buildings. Delamination sounding, texture matching, control joints, and breathable or elastomeric coating systems. Certified Building Contractor CBC1262722, since 1982.",
  openGraph: {
    title: "Stucco Restoration & Recoating Tampa | Full Elevation",
    description: "Whole-elevation stucco restoration and recoating for Tampa Bay commercial, condo, and historic buildings. Delamination sounding, texture matching, control joints, and breathable or elastomeric coating systems. Certified Building Contractor since 1982.",
    url: "https://floridaconstructionspecialists.com/stucco-restoration-and-recoating/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const scopeItems = [
  "Full-elevation sounding for hollow and delaminated stucco",
  "Removal and replacement of unsound render",
  "Lath, flashing, and weep condition verification",
  "Crack routing, patching, and stress-crack treatment",
  "Texture matching across new and retained areas",
  "Control and expansion joint reinstatement",
  "Breathable or elastomeric coating system application",
  "Historic-appropriate finishes on original assemblies",
];

const decisionSigns = [
  { sign: "Hollow areas that keep turning up as the sounding moves away from the visible cracks", severity: "Restoration" },
  { sign: "The same crack pattern repeating on every wall of the same age", severity: "Restoration" },
  { sign: "A previous recoat that has started to release from the render", severity: "Restoration" },
  { sign: "Patches from earlier repairs that no longer match and are cracking at their edges", severity: "Restoration" },
  { sign: "Hollow areas that stop at a defined boundary, with solid wall beyond", severity: "Repair" },
  { sign: "One impact or penetration on an otherwise sound elevation", severity: "Repair" },
  { sign: "Corroded lath or a missing flashing found once the wall is opened", severity: "Investigate" },
  { sign: "Moisture in the wall that persists in dry weather", severity: "Investigate" },
];

const faqs = [
  {
    "question": "Can you put a new coat of stucco over old stucco?",
    "answer": "Sometimes, and the answer decides the whole scope. New render bonds only to sound, clean, adequately profiled existing stucco. Where the original render is still firmly attached to its lath and substrate, a resurfacing coat is a legitimate and durable approach. Where sounding finds hollow areas, the existing coating is delaminating, or the lath behind has corroded, recoating over it simply hides the failure and adds weight to a wall that is already letting go. That is why every restoration we do starts with sounding the elevation rather than with a coating specification."
  },
  {
    "question": "What is the difference between stucco repair and stucco restoration?",
    "answer": "Scale and objective. Stucco repair addresses a defined defect, such as a crack, an impact area, or a failed patch, while the rest of the wall stays as it is. Restoration and recoating treats the elevation as a unit: sounding the whole face, removing everything unsound, reinstating joints and details, and finishing with a continuous coating system so the wall performs and reads as one surface. If your building has cracking on one wall, you likely need a repair. If it has cracking on every wall of the same age, you need restoration."
  },
  {
    "question": "How do you match the existing texture?",
    "answer": "By working from the building rather than from a catalog. We take sample areas from the existing wall, match aggregate size and finishing technique, and produce mockups on the building itself for approval before production work begins. Texture is a function of the finish coat mix and the tool and hand that applied it, so approval on an in-place mockup, viewed at the distance and in the light the wall is actually seen in, matters more than a bench sample. On buildings where a full recoat is planned, matching becomes less critical because the entire elevation receives the same finish."
  },
  {
    "question": "Does a historic building need a different coating?",
    "answer": "Usually yes. Original stucco assemblies in older Tampa neighborhoods such as Hyde Park, Ybor, and Seminole Heights were built to breathe: they absorb moisture and release it back out through the wall face. A modern low-permeability elastomeric coating applied over that kind of wall traps moisture inside the assembly, and the damage shows up as spalling render and deteriorated framing rather than as a coating failure. Historic work requires vapor-permeable materials matched to the original assembly, and it requires knowing which kind of wall you are standing in front of before you specify anything."
  },
  {
    "question": "Will insurance pay for stucco restoration?",
    "answer": "It depends entirely on cause. Insurance responds to sudden damage from a covered peril, such as storm impact or wind-driven water intrusion during a named event, and generally does not respond to deterioration accumulated over years of weathering and deferred maintenance. Because that distinction is decided on evidence, documentation matters. Florida sets a one-year filing window from the date of loss for hurricane claims under Florida Statute 627.70132, so a building with storm-related facade damage should have it assessed and documented promptly rather than after the next budget cycle."
  },
  {
    "question": "Can this be done on an occupied condominium?",
    "answer": "Yes, and most of our facade work is. Elevation-scale restoration on an occupied building means swing stage or lift access, dust and overspray containment, balcony access scheduling unit by unit, and phasing that keeps residents in place. We provide documentation suitable for board presentation and coordinate directly with property managers and building engineers. Florida Construction Specialists is always the prime contractor and never a subcontractor, holds Certified Building Contractor license CBC1262722, and has worked in this market since 1982."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Facade & Stucco", href: "/facade-stucco/" },
  { name: "Stucco Restoration & Recoating", href: "/stucco-restoration-and-recoating/" },
];

export default function StuccoRestorationAndRecoatingPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Stucco Restoration and Recoating Tampa"
        serviceDescription="Whole-elevation stucco restoration and recoating for commercial, condominium, multi-family, and historic buildings throughout Tampa Bay. Delamination sounding, render replacement, joint reinstatement, texture matching, and breathable or elastomeric coating systems."
        serviceCategories={["Stucco Restoration", "Stucco Recoating", "Facade Refinishing", "Historic Stucco Restoration"]}
      />

      <Breadcrumb items={[
        { name: "Services", href: "/commercial/" },
        { name: "Facade & Stucco", href: "/facade-stucco/" },
        { name: "Stucco Restoration & Recoating", href: "/stucco-restoration-and-recoating/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lions-world-vision-institute-building-exterior/lions-world-vision-institute-building-exterior-large.webp"
            alt="Restored building exterior facade on a Tampa Bay commercial property"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">Whole-Elevation Facade Work for Tampa Bay Buildings</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Stucco Restoration &amp; Recoating in Tampa
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              When cracking and delamination have spread across a whole elevation, patching stops being economical. Florida Construction Specialists sounds the full facade, replaces what has let go, and refinishes the wall as one continuous surface.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule a Facade Assessment
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
              When a Wall Stops Being a Patching Problem
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                There is a point at which repairing individual defects in a stucco wall stops making sense. It arrives when the cracking is no longer in one place but distributed across the elevation, when sounding turns up hollow areas well beyond the visible damage, or when a previous coating is releasing from the render underneath. At that point every patch is a stopgap on a wall that is failing as a system, and the finish will never read as continuous again.
              </p>
              <p>
                Stucco restoration and recoating treats the elevation as a single unit of work. We sound the whole face, remove everything that is no longer bonded, verify what is behind it, reinstate the joints and details the wall needs to move, and finish the entire elevation with one coating system so the result is uniform in color, texture, and performance.
              </p>
              <p>
                This is the elevation-scale discipline within our <Link href="/facade-stucco/">facade and stucco</Link> work. If your building has a defined defect on an otherwise sound wall, <Link href="/resources/florida-stucco-repair-services-tampa/">stucco repair</Link> is the correct and less invasive scope. Restoration is for walls where the damage is the rule rather than the exception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual break */}
      <ContentParallax
        src="/images/tampa-historic-building-restoration/tampa-historic-building-restoration-display.webp"
        alt="Historic building facade restoration in Tampa"
        title="One Elevation, One Finish"
        subtitle="Facade restoration for commercial, condominium, multi-family, and historic buildings"
        overlayOpacity={0.55}
      />

      {/* Repair vs restoration */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <ClipboardCheck className="w-12 h-12 text-brand-green mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Where Patching Stops and Restoration Starts
              </h2>
              <p className="text-gray-600 mb-6">
                The threshold is not a percentage. It is the moment the sounding survey stops finding a boundary. A repair has an edge: hollow here, solid there, and the patch can be tied into sound render on every side. When the hollow areas keep going, or the same crack pattern shows up on every elevation of the same age, there is no sound render left to tie into and the elevation has to be treated as one piece of work.
              </p>
              <p className="text-gray-600 mb-6">
                Two findings send the job somewhere else first. Corroded lath or a missing flashing found once the wall is open means the assembly behind the render has failed, and moisture that persists in dry weather means water is coming from somewhere other than rain. A new finish over either buys nothing but time.
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
                What the Sounding Survey Tells Us:
              </h3>
              <ul className="space-y-4">
                {decisionSigns.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className={`px-2 py-1 rounded text-xs font-bold flex-shrink-0 ${
                      item.severity === "Restoration" ? "bg-brand-green text-white" :
                      item.severity === "Investigate" ? "bg-red-600 text-white" :
                      item.severity === "EIFS" ? "bg-orange-500 text-white" :
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

      {/* Why Florida is hard on stucco */}
      <section className="section bg-brand-green-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <ThermometerSun className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                What Tampa Bay Does to a Stucco Facade
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Stucco is a porous, brittle material bonded to a structure that moves. In a dry climate that combination ages slowly. In Tampa Bay it does not. Map cracking is the wall's response to daily movement it was never given joints for, and once the cracks are there, every storm season pushes water into them.
              </p>
              <p>
                Between storms the wall rarely gets a chance to dry. Summer relative humidity in the region averages around 75 percent, so moisture that enters through map cracking stays in the assembly, working at the bond between render and lath and at any embedded metal. That bond is what the sounding hammer is testing. By the time it has let go across an elevation, the cracking that was dismissed as cosmetic is the least of the wall's problems.
              </p>
              <p>
                Older neighborhoods add a further requirement. Historic stucco facades in Hyde Park, Ybor, and Seminole Heights were built as breathable assemblies, and restoring them means matching the original material behavior rather than sealing the wall with the highest-performance modern coating available. Getting that wrong does not show up for several seasons, and by then the damage is behind the finish.
              </p>
            </div>
            <CodeReference
              code="Florida Building Code, 2023 revision"
              section="Wind-borne debris regions"
              description="Florida's 2023 code revision raised structural standards for coastal construction and mandates impact-resistant glazing in wind-borne debris regions. Where opening upgrades accompany a facade restoration, the new window and door perimeters have to be integrated into the wall finish and its flashing rather than sealed as an afterthought."
            />
          </div>
        </div>
      </section>

      {/* Scope of work */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Layers className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                What a Restoration and Recoat Involves
              </h2>
              <p className="text-xl text-gray-600">
                The finish coat gets the attention. Everything that determines how long it lasts happens before it.
              </p>
            </div>

            <ContentImage
              src="/images/articles/what-to-know-about-stucco-repair-tampa.png"
              alt="Well-maintained stucco facade with uniform texture on a Tampa Bay building"
              caption="A uniform finish is the visible result of decisions made three steps earlier"
              position="center"
            />

            <div className="prose prose-lg max-w-none text-gray-600 mt-8 space-y-6">
              <p>
                <strong>Sound the whole elevation.</strong> Hammer or chain sounding maps hollow and delaminated areas across the full face, including areas with no visible cracking. This is what establishes the real extent of the work, and it routinely finds far more area than the visual survey suggested.
              </p>
              <p>
                <strong>Remove and verify.</strong> Unsound render is cut back to bonded material. With the wall open, we verify the condition of the lath, fasteners, flashings, and weeps behind it. Corroded lath or a missing flashing found at this stage changes the scope; found after recoating, it becomes the reason the new finish fails.
              </p>
              <p>
                <strong>Reinstate movement joints.</strong> Many walls we open were built without adequate control joints, or had them filled solid during a previous refinish. Restoring joint locations and geometry is what stops the new render developing the same crack pattern as the old one.
              </p>
              <p>
                <strong>Rebuild and match.</strong> New render is applied in proper coats and cured, then finished to match the retained wall in texture and profile, with in-place mockups approved before production work proceeds.
              </p>
              <p>
                <strong>Coat the elevation as a unit.</strong> The finish system is selected for the assembly: a permeable system where the wall needs to breathe, an elastomeric system with crack-bridging capability where it does not. Applying it across the full elevation rather than only over repaired areas is what makes the result read as one wall.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Droplets className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                Included in a Restoration Scope
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
              Why Tampa Bay Owners Choose FCS for Facade Restoration
            </h2>
            <p className="text-gray-600">
              Florida Construction Specialists is always the prime contractor, never a subcontractor. The team that sounds your facade is the team accountable for the finish.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Prime Contractor</h3>
              <p className="text-gray-600">Direct accountability from facade assessment through the finished elevation.</p>
            </div>
            <div className="card text-center p-6">
              <Wrench className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">In-House Engineering</h3>
              <p className="text-gray-600">An engineer and architectural draftsman on staff turn findings into buildable details.</p>
            </div>
            <div className="card text-center p-6">
              <AlertTriangle className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Historic Assemblies</h3>
              <p className="text-gray-600">Restoration methods matched to walls that were designed to breathe.</p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Since 1982</h3>
              <p className="text-gray-600">44 years finishing walls in the Florida climate, under license CBC1262722.</p>
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
              Stucco Restoration &amp; Recoating Service Areas
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-center">
              Florida Construction Specialists restores and recoats stucco facades throughout Tampa and the wider Tampa Bay region, including St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, Bradenton, and Ruskin, where our office is located. Our work concentrates on commercial, condominium, multi-family, and historic properties across Hillsborough County and the Central Tampa Bay corridor.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="Stucco Restoration and Recoating FAQs" />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Find Out What Is Still Bonded and What Is Not
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a facade assessment with Florida Construction Specialists. We sound the elevation, tell you what is bonded and what is not, and scope the work to match.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Facade Assessment
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
        currentService="stucco-restoration-and-recoating"
        currentServiceName="Stucco Restoration & Recoating"
      />

      <RelatedArticles pageSlug="stucco-restoration-and-recoating" />

      {/* Related Guides — de-orphan internal links */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Facade Guides"
            links={[
              { label: "What To Know About Stucco Repair", href: "/resources/what-to-know-about-stucco-repair-tampa/" },
              { label: "Repairing Stucco Cracks", href: "/resources/repairing-stucco-cracks/" },
              { label: "EIFS Stucco Repair", href: "/resources/eifs-stucco-repair-tampa/" },
              { label: "Exterior Stucco Repair Near Me", href: "/resources/exterior-stucco-repair-near-me-tampa/" }
            ]}
          />
        </div>
      </section>
    </>
  );
}