import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award, AlertTriangle, Droplets, Wrench, ClipboardCheck, ThermometerSun, MapPin } from "lucide-react";
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
  alternates: { canonical: 'https://floridaconstructionspecialists.com/expansion-joint-and-sealant-replacement/' },
  title: "Expansion Joint & Sealant Replacement Tampa",
  description: "Expansion joint and sealant replacement for Tampa Bay commercial, condo, and multi-family buildings. Full joint removal, backer rod, correct joint geometry, and movement-rated sealants. Certified Building Contractor CBC1262722, since 1982.",
  openGraph: {
    title: "Expansion Joint & Sealant Replacement Tampa",
    description: "Expansion joint and sealant replacement for Tampa Bay commercial, condo, and multi-family buildings. Full joint removal, backer rod, correct joint geometry, and movement-rated sealants. Certified Building Contractor since 1982.",
    url: "https://floridaconstructionspecialists.com/expansion-joint-and-sealant-replacement/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const jointTypes = [
  "Structural expansion joints between building sections",
  "Precast and tilt-wall panel joints",
  "Control joints in stucco and masonry",
  "Window, door, and storefront perimeter sealants",
  "Balcony-to-wall and threshold joints",
  "Parapet, coping, and roof-to-wall joints",
  "Deck-to-planter and horizontal traffic joints",
  "Penetration seals at pipes, conduit, and rail posts",
];

const failureSigns = [
  { sign: "Sealant that has hardened and lost its rubbery feel", severity: "High" },
  { sign: "Cohesive splitting down the middle of the joint bead", severity: "High" },
  { sign: "Adhesive failure, with the bead pulling away from one face", severity: "Critical" },
  { sign: "Chalking, crazing, or a powdery surface on the bead", severity: "Moderate" },
  { sign: "Sealant applied over the top of older sealant", severity: "High" },
  { sign: "A joint filled solid with no backer rod behind it", severity: "High" },
  { sign: "Interior staining directly inboard of a vertical joint", severity: "Critical" },
  { sign: "Bulging or wrinkled bead at a moving joint", severity: "Moderate" },
];

const faqs = [
  {
    "question": "Do expansion joints need to be sealed?",
    "answer": "Yes. An expansion joint exists so that two parts of a building can move independently. Thermal expansion, structural drift, and differential settlement all have to go somewhere. Left open, that same gap is a direct, unobstructed path from the exterior face to the interior of the wall assembly. The sealant is what allows the joint to keep moving while staying watertight. It is the only component of the building envelope whose job is to be flexible, which is also why it is the component with the shortest service life."
  },
  {
    "question": "Can expansion joints be replaced, or do they have to be repaired in place?",
    "answer": "Sealant joints are replaced, not patched. The failed material is cut and removed completely from both joint faces, the substrate is cleaned back to sound material, new backer rod is installed at the correct depth, and fresh sealant is tooled against clean faces. Applying new sealant over old is the single most common shortcut we find on Tampa Bay buildings, and it fails quickly. The new bead is only ever as good as its bond to the old material underneath, which has already lost adhesion once."
  },
  {
    "question": "What is the best sealant for expansion joints in Florida?",
    "answer": "There is no single best product; there is a correct product for each joint. Selection depends on how much the joint actually moves, whether the substrate is concrete, stucco, precast, or metal, whether the joint is horizontal and takes traffic, and whether it will be painted or exposed. High-movement structural joints need a sealant rated for the movement they see, and horizontal traffic joints need a system that resists abrasion and ponding. Substrate compatibility and primer requirements matter as much as the sealant chemistry, which is why joint specification is part of our envelope assessment rather than a field decision."
  },
  {
    "question": "How often does sealant need to be replaced on a Tampa Bay building?",
    "answer": "Sealant is a maintenance item with a finite service life, unlike the walls around it. Florida's conditions shorten that life: constant UV, daily thermal cycling, and wind-driven rain through a storm season that runs June through November. Rather than guessing at a replacement interval, we recommend a documented joint survey on a regular cycle so an association or owner can budget replacement before joints start admitting water rather than after."
  },
  {
    "question": "Is sealant replacement enough, or does my building need more work?",
    "answer": "Sealant replacement is worth doing on its own only when the joint faces are sound. If the concrete at the joint edge is spalled, the stucco is delaminated, or a coping is failing, new sealant has nothing durable to bond to and the joint will open again. That is why we investigate before specifying. Where substrate deterioration is present, the repair sequence has to run substrate first, joints second, coatings last, which is exactly how a full building envelope waterproofing program is put together."
  },
  {
    "question": "Do you work with condominium associations on joint replacement?",
    "answer": "Yes. Joint and sealant replacement across an occupied condominium or multi-family building is routine work for us. It involves swing stage or lift access on every elevation, unit-by-unit notice where balcony and window joints are involved, and phasing that keeps residents in place. We provide documentation suitable for board presentation and coordinate directly with property managers and building engineers. Florida Construction Specialists holds Certified Building Contractor license CBC1262722 and has worked in this market since 1982."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Building Envelope Waterproofing", href: "/building-envelope-waterproofing/" },
  { name: "Expansion Joint & Sealant Replacement", href: "/expansion-joint-and-sealant-replacement/" },
];

export default function ExpansionJointAndSealantReplacementPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Expansion Joint and Sealant Replacement Tampa"
        serviceDescription="Expansion joint and sealant replacement for commercial, condominium, and multi-family buildings throughout Tampa Bay. Complete removal of failed sealant, joint preparation, backer rod and joint geometry correction, and installation of movement-rated sealant systems."
        serviceCategories={["Expansion Joint Replacement", "Perimeter Sealant Replacement", "Joint Waterproofing", "Building Envelope Maintenance"]}
      />

      <Breadcrumb items={[
        { name: "Services", href: "/commercial/" },
        { name: "Building Envelope Waterproofing", href: "/building-envelope-waterproofing/" },
        { name: "Expansion Joint & Sealant Replacement", href: "/expansion-joint-and-sealant-replacement/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Exterior-Waterproofing.png"
            alt="Sealant joint work on a Tampa Bay commercial building exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">Tampa Bay Commercial &amp; Multi-Family Joint Sealant Work</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Expansion Joint &amp; Sealant Replacement in Tampa
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Sealant is the shortest-lived component of your building envelope and the one that fails first. Florida Construction Specialists removes failed joints completely, restores correct joint geometry, and installs sealants rated for the movement each joint actually sees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule a Joint Survey
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
              The Envelope Component With the Shortest Service Life
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Every other part of a building envelope is designed to stay still. Sealant joints are designed to move. That single difference is why sealant wears out long before the walls, balconies, and copings around it, and why a building that has never had its joints replaced almost always has water entering somewhere.
              </p>
              <p>
                An expansion joint is a deliberate gap that lets two parts of a structure move independently under thermal expansion, wind load, and settlement. The sealant bridging that gap has to stretch and compress through every cycle of that movement, for years, while sitting in direct Florida sun. When it can no longer do that, because it has hardened, split down the middle, or peeled away from one joint face, the gap it was covering becomes an open channel into the wall assembly.
              </p>
              <p>
                Replacement is narrow, well-defined work, and it is frequently the highest-value repair available to a Tampa Bay property owner because it addresses active water entry without touching the surrounding construction. It is one discipline within a complete <Link href="/building-envelope-waterproofing/">building envelope waterproofing</Link> program, and on buildings where the walls and balconies are still sound, it is often the only scope needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual break */}
      <ContentParallax
        src="/images/fcs-commercial-exterior-waterproofing/fcs-commercial-exterior-waterproofing-large.webp"
        alt="Commercial building exterior joint and waterproofing work in Tampa Bay"
        title="Joints Are Where Envelopes Fail First"
        subtitle="Expansion joint and sealant replacement for commercial, condominium, and multi-family properties"
        overlayOpacity={0.55}
      />

      {/* Why joints fail here */}
      <section className="section bg-brand-green-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <ThermometerSun className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                Why Sealant Joints Fail Faster in Tampa Bay
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                A sealant bead in this region works harder than the same bead installed almost anywhere else in the country. It absorbs a daily thermal cycle, sits under year-round ultraviolet exposure, and then has to hold watertight against wind-driven rain during a storm season that runs June through November. After Hurricane Ian in 2022 and Hurricane Idalia in 2023, a lot of the water that got into Tampa Bay buildings came through joints that had looked serviceable from the ground.
              </p>
              <p>
                Wind-driven rain is the specific mechanism. Rain falling vertically runs harmlessly down a wall face; rain driven horizontally is pushed directly into any joint that has opened, and pressure differences across the wall can draw it further in. A joint only has to fail along a short run to admit a significant volume of water during a single storm.
              </p>
              <p>
                The daily thermal cycle is the part owners underestimate. A joint on a west-facing elevation opens and closes every single day, and a bead that has hardened under UV can no longer follow it. That is how a maintenance item becomes a structural problem: once the joint stays open, moisture at the joint edge leads to stucco delamination, spalling concrete, and corroding reinforcement, and anywhere water reaches wood framing the region's high termite pressure becomes a genuine concern.
              </p>
            </div>
            <CodeReference
              code="Florida Building Code, 2023 revision"
              section="Wind-borne debris regions"
              description="Florida's 2023 code revision raised structural standards for coastal construction and mandates impact-resistant glazing in wind-borne debris regions. Glazing and door replacements create new perimeter joints, so opening upgrades have to be integrated with sealant and flashing detailing rather than treated as a separate scope."
            />
          </div>
        </div>
      </section>

      {/* Failure signs */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <AlertTriangle className="w-16 h-16 text-brand-gold mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              How to Tell a Joint Has Failed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sealant failure is visible from a lift or a balcony long before it produces an interior stain. Knowing which failure you are looking at also tells you what caused it.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div className="prose prose-lg text-gray-600">
              <p>
                <strong>Cohesive failure</strong> is a split running down the middle of the bead, with sealant still bonded to both joint faces. The material itself has reached the end of its elastic life, or the joint was asked to move further than the sealant was rated for. Either way the fix is replacement with a product matched to the movement the joint actually sees.
              </p>
              <p>
                <strong>Adhesive failure</strong> is the bead pulling cleanly away from one face while remaining attached to the other. This almost always means the joint face was not properly prepared or primed at installation, with dust, curing compound, or old sealant residue left in place. It is the most common failure we find, and it is the one most likely to have been caused by a previous re-caulk applied over old material.
              </p>
              <p>
                <strong>Three-sided adhesion</strong> is a design failure rather than a material one. When sealant is packed solid into a joint with no backer rod, it bonds to the back of the joint as well as both faces. It can no longer stretch, so the first significant movement tears it. A joint filled solid is a joint that will fail regardless of the quality of the sealant used.
              </p>
              <p>
                <strong>Hardening and chalking</strong> indicate ultraviolet degradation. A bead that feels rigid rather than rubbery, or leaves powder on your hand, has lost the flexibility that made it a joint sealant. It may still be watertight today, but it has no capacity left for the next thermal cycle.
              </p>
            </div>

            <div>
              <div className="bg-red-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-red-800 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  What We Look For on a Joint Survey
                </h3>
                <ul className="space-y-4">
                  {failureSigns.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className={`px-2 py-1 rounded text-xs font-bold flex-shrink-0 ${
                        item.severity === "Critical" ? "bg-red-600 text-white" :
                        item.severity === "High" ? "bg-orange-500 text-white" :
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
        </div>
      </section>

      {/* Joints we replace */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Droplets className="w-12 h-12 text-brand-green mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Joints We Replace
              </h2>
              <p className="text-gray-600 mb-6">
                A building has more sealed joints than most owners expect, and they do not all behave the same way. A structural expansion joint between two building sections moves in a different plane, at a different magnitude, than a window perimeter or a stucco control joint. Each needs its own joint geometry and its own product selection.
              </p>
              <p className="text-gray-600 mb-6">
                Sealant installed at the same time on the same building tends to reach the end of its life at the same time, so one failed joint is usually a preview of the rest. The survey covers every elevation for that reason, with linear footage recorded run by run so the board is pricing the building, not the complaint.
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
                Joint Types We Survey and Replace:
              </h3>
              <ul className="space-y-3">
                {jointTypes.map((item) => (
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

      {/* How replacement is done */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Wrench className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                What Correct Replacement Involves
              </h2>
              <p className="text-xl text-gray-600">
                The difference between a joint that lasts and a joint that fails again is almost entirely in the preparation, not the product.
              </p>
            </div>

            <ContentImage
              src="/images/fcs-exterior-waterproofing/fcs-exterior-waterproofing-display.webp"
              alt="Exterior wall assembly waterproofing detail on a Tampa Bay building"
              caption="New sealant performs only against clean, sound, correctly shaped joint faces"
              position="center"
            />

            <div className="prose prose-lg max-w-none text-gray-600 mt-8 space-y-6">
              <p>
                <strong>Complete removal.</strong> Old sealant is cut out of the joint in full, from both faces and from the back of the joint. Nothing is left to bond to. Where a previous contractor has applied sealant over sealant, which we find often, every layer comes out.
              </p>
              <p>
                <strong>Substrate preparation.</strong> Joint faces are cleaned back to sound material by grinding, wire wheel, or solvent wipe depending on substrate. Where the concrete or stucco edge is spalled or delaminated, it is repaired before the joint is re-sealed. Sealant cannot bridge a substrate that is coming apart.
              </p>
              <p>
                <strong>Joint geometry.</strong> Closed-cell backer rod is installed to set both the depth of the sealant bead and the two-sided bond that lets it stretch. Sealant depth is proportioned to joint width rather than filled to whatever depth the joint happens to be, which is what gives the bead the elongation capacity it needs.
              </p>
              <p>
                <strong>Priming and installation.</strong> Where the substrate and product require it, joint faces are primed. Sealant is gunned in one continuous pass and tooled to force it against both faces and form the correct profile. Tooling is not cosmetic. An untooled bead has not made full contact with the joint faces.
              </p>
              <p>
                <strong>Verification.</strong> Adhesion is checked on installed work, and on envelope projects we water test completed assemblies before demobilizing. Owners and associations receive documentation of what was replaced on which elevation, so the next survey cycle has a baseline to work from.
              </p>
            </div>
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
                How a Joint Replacement Project Runs
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Survey", desc: "Every elevation reviewed by joint type, with failure mode and linear footage documented run by run." },
                { step: "2", title: "Specify", desc: "Product selection matched to movement, substrate, and exposure, with details drawn in house." },
                { step: "3", title: "Replace", desc: "Full removal, substrate repair, backer rod, priming, and tooled installation, phased around occupied units." },
                { step: "4", title: "Verify", desc: "Adhesion checks, water testing where appropriate, and an elevation-by-elevation record for the next cycle." },
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
              Why Tampa Bay Owners Choose FCS for Joint Work
            </h2>
            <p className="text-gray-600">
              Florida Construction Specialists is always the prime contractor, never a subcontractor. The team that surveys your joints is the team accountable for the finished work.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Prime Contractor</h3>
              <p className="text-gray-600">Direct accountability from survey through warranty on every joint replacement project.</p>
            </div>
            <div className="card text-center p-6">
              <Wrench className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">In-House Engineering</h3>
              <p className="text-gray-600">An engineer and architectural draftsman on staff turn joint findings into buildable details.</p>
            </div>
            <div className="card text-center p-6">
              <Building2 className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Occupied Buildings</h3>
              <p className="text-gray-600">Condominium, HOA, and multi-family work with board and property manager coordination.</p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Since 1982</h3>
              <p className="text-gray-600">44 years working in the Florida climate, under license CBC1262722.</p>
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
              Expansion Joint &amp; Sealant Replacement Service Areas
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-center">
              Florida Construction Specialists replaces expansion joints and perimeter sealants throughout Tampa and the wider Tampa Bay region, including St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, Bradenton, and Ruskin, where our office is located. Our work concentrates on commercial, condominium, and multi-family properties across Hillsborough County and the Central Tampa Bay corridor.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="Expansion Joint & Sealant Replacement FAQs" />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Get Your Joints Surveyed Before Storm Season
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a joint and sealant survey with Florida Construction Specialists. We document every elevation and give you a scope you can budget and defend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Joint Survey
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
        currentService="expansion-joint-and-sealant-replacement"
        currentServiceName="Expansion Joint & Sealant Replacement"
      />

      <RelatedArticles pageSlug="expansion-joint-and-sealant-replacement" />

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