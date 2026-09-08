import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award, Layers, Wrench, ClipboardCheck, ThermometerSun, MapPin } from "lucide-react";
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
  alternates: { canonical: 'https://floridaconstructionspecialists.com/facade-stucco/' },
  title: "Stucco Contractor Tampa | Facade & Stucco Services",
  description: "Facade and stucco services for Tampa Bay commercial, condo, and historic buildings: stucco repair, whole-elevation restoration and recoating, and EIFS repair. Certified Building Contractor CBC1262722, since 1982.",
  openGraph: {
    title: "Stucco Contractor Tampa | Facade & Stucco Services",
    description: "Facade and stucco services for Tampa Bay commercial, condo, and historic buildings: stucco repair, whole-elevation restoration and recoating, and EIFS repair. Certified Building Contractor since 1982.",
    url: "https://floridaconstructionspecialists.com/facade-stucco/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const triage = [
  { finding: "A crack, an impact area, or one failed patch on a sound wall", route: "Repair" },
  { finding: "Hollow sound or map cracking across a whole elevation", route: "Restoration" },
  { finding: "A previous coating peeling or blistering off the wall", route: "Restoration" },
  { finding: "Synthetic finish over foam board rather than cement render", route: "EIFS" },
  { finding: "Soft or damaged board behind a synthetic finish", route: "EIFS" },
  { finding: "Interior staining behind a cracked elevation", route: "Investigate first" },
  { finding: "Rust bleeding through the finish", route: "Investigate first" },
];

const faqs = [
  {
    "question": "What is the difference between stucco repair, restoration, and EIFS repair?",
    "answer": "They are three different problems. Repair fixes a defined defect on a wall that is otherwise sound. Restoration and recoating treats a whole elevation as one unit when the deterioration is general rather than local. EIFS repair addresses an entirely different wall type, a synthetic finish over insulation board, which behaves nothing like traditional cement render and fails in different ways. Choosing among them is the first decision on any facade project, and it is decided by assessment rather than by preference."
  },
  {
    "question": "How do I tell traditional stucco from EIFS?",
    "answer": "The clearest field test is sound and feel. Traditional stucco is cement render over lath, hard and dense, and taps with a solid sound. EIFS is a thin synthetic finish over foam insulation board, and taps hollow and slightly soft. Getting this wrong matters: repairing EIFS with cement materials, or repairing traditional render as though it were EIFS, produces a repair that fails and often traps water in the wall. If you are not certain which you have, that is a reason to have the wall assessed before any work is scoped."
  },
  {
    "question": "Do you work on historic buildings?",
    "answer": "Yes. Historic stucco facades in older Tampa neighborhoods such as Hyde Park, Ybor, and Seminole Heights almost always route to the restoration service rather than to repair, because the original assembly has to be matched across the whole elevation rather than patched in one spot. The one thing we will not do on those walls is seal them with a modern low-permeability coating. Our stucco restoration and recoating page explains why."
  },
  {
    "question": "Is facade work only cosmetic?",
    "answer": "Rarely. A stucco facade is a weather barrier as much as a finish, and in this climate a cracked or delaminated wall is an active water entry path. Water that gets behind the render corrodes lath and fasteners, deteriorates framing, and in the region's high termite pressure creates a structural concern wherever it reaches wood. Facades are among the easiest parts of a building to keep in good condition and among the hardest to recover once they have been neglected."
  },
  {
    "question": "Who do you work for on facade projects?",
    "answer": "Commercial property owners, condominium and HOA boards, property managers, and multi-family owners across Tampa Bay. Elevation-scale work on occupied buildings needs swing stage or lift access, containment, unit-by-unit balcony scheduling, and board-ready documentation. Florida Construction Specialists holds Certified Building Contractor license CBC1262722, has worked in this market since 1982, and is always the prime contractor, never a subcontractor."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Facade & Stucco", href: "/facade-stucco/" },
];

export default function FacadeStuccoPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Facade and Stucco Services Tampa"
        serviceDescription="Facade and stucco services for commercial, condominium, multi-family, and historic buildings throughout Tampa Bay: stucco repair, whole-elevation stucco restoration and recoating, and EIFS repair."
        serviceCategories={["Stucco Repair", "Stucco Restoration and Recoating", "EIFS Repair", "Facade Assessment"]}
      />

      <Breadcrumb items={[
        { name: "Services", href: "/commercial/" },
        { name: "Facade & Stucco", href: "/facade-stucco/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/articles/what-to-know-about-stucco-repair-tampa.png"
            alt="Well-maintained stucco facade on a Tampa Bay building"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">Tampa Bay Facade &amp; Stucco Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Facade &amp; Stucco Services in Tampa
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Three different facade problems get called &ldquo;stucco damage,&rdquo; and each one needs a different answer. This page is where you work out which one you have, then go to the service that addresses it.
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
              Start by Naming the Problem Correctly
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Almost every facade project that goes badly went wrong at the first decision. A wall that needed a full-elevation restoration was patched; a wall that needed nothing more than a patch was recoated; an EIFS wall was repaired with cement materials that could never bond to it. In each case the work was competent and the diagnosis was not.
              </p>
              <p>
                That is what this page is for. Below are the three facade disciplines we deliver, what separates each one, and which findings send you to which. Where the finding points to water already inside the wall, the answer is not a facade scope at all. It is an investigation first.
              </p>
              <p>
                Facade work is one of several disciplines Florida Construction Specialists brings to Tampa Bay property owners; the full range is on our <Link href="/">commercial construction and restoration homepage</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Triage */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <ClipboardCheck className="w-12 h-12 text-brand-green mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Which Service Does Your Building Need?
              </h2>
              <p className="text-gray-600 mb-6">
                The routing below reflects how we scope facade work in practice. Two questions decide it: what kind of wall is it, and how much of it is still bonded. Neither can be answered from the ground. A facade can look uniformly weathered and be sound, or look serviceable and be hollow behind half its area.
              </p>
              <p className="text-gray-600 mb-6">
                Two of these findings do not route to a facade service at all. Rust bleeding through a finish means corroding metal behind the wall; interior staining behind a cracked elevation means water is already inside the assembly. Both need diagnosis before any finish is specified.
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
                Finding to Service:
              </h3>
              <ul className="space-y-4">
                {triage.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className={`px-2 py-1 rounded text-xs font-bold flex-shrink-0 ${
                      item.route === "Investigate first" ? "bg-red-600 text-white" :
                      item.route === "Restoration" ? "bg-brand-green text-white" :
                      item.route === "EIFS" ? "bg-orange-500 text-white" :
                      "bg-yellow-500 text-gray-900"
                    }`}>
                      {item.route}
                    </span>
                    <span className="text-gray-700">{item.finding}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visual break */}
      <ContentParallax
        src="/images/lions-world-vision-institute-building-exterior/lions-world-vision-institute-building-exterior-large.webp"
        alt="Commercial building exterior facade in the Tampa Bay region"
        title="One Facade, Three Different Answers"
        subtitle="Stucco and facade work for commercial, condominium, multi-family, and historic buildings"
        overlayOpacity={0.55}
      />

      {/* Child services */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Layers className="w-16 h-16 text-brand-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Facade &amp; Stucco Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three disciplines. Most buildings need exactly one of them, and knowing which is most of the value.
            </p>
          </div>

          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4">Stucco Repair</h2>
              <p>
                Repair is the correct scope when the wall around the defect is sound: a crack, an impact area, a failed previous patch, or damage at a penetration. The defect is opened back to bonded material, rebuilt in compatible layers, and finished to match the surrounding texture. It is the least invasive facade scope available and, caught early, it is what keeps a wall from ever becoming a restoration project. <Link href="/resources/florida-stucco-repair-services-tampa/">See our stucco repair services</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4">Stucco Restoration and Recoating</h2>
              <p>
                Restoration is for elevations where the damage is the rule rather than the exception: hollow areas found well beyond the visible cracking, map cracking across a full wall, or a previous coating releasing from the render. The whole elevation is sounded, unsound material is removed and rebuilt, movement joints are reinstated, and the wall is finished with one coating system so it performs and reads as a single surface. <Link href="/stucco-restoration-and-recoating/">See our stucco restoration and recoating</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4">EIFS Repair</h2>
              <p>
                EIFS is a synthetic finish over foam insulation board, not cement render, and it fails differently: at terminations, penetrations, and anywhere water gets behind the board and has no way out. Repair requires materials and details built for that assembly, including drainage provisions where the original system had none. Repairing EIFS with traditional stucco materials is one of the most common and most damaging facade mistakes we are called in to correct. <Link href="/resources/eifs-stucco-repair-tampa/">See our EIFS repair services</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Florida */}
      <section className="section bg-brand-green-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <ThermometerSun className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                What This Climate Does to a Facade
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                A facade in Tampa Bay is a brittle, porous surface bonded to a structure that moves, exposed to a storm season running June through November in a region that typically sees two to three tropical systems a year. Wind-driven rain during those events pushes water into every crack the wall has developed since the last one, and summer relative humidity averaging around 75 percent means it rarely dries out in between.
              </p>
              <p>
                Hurricane Ian in 2022 and Hurricane Idalia in 2023 both produced facade damage on Tampa Bay buildings whose cracking had been treated as cosmetic for years. That is the practical reason the triage above matters: a crack that is only a crack this year can be a delaminated elevation after the next storm season.
              </p>
            </div>
            <CodeReference
              code="Florida Building Code, 2023 revision"
              section="Wind-borne debris regions"
              description="Florida's 2023 revision mandates impact-resistant glazing in wind-borne debris regions and raises structural standards for coastal construction. Where a facade project includes window or storefront replacement, the new opening perimeters have to be integrated into the wall finish and its flashing rather than sealed afterwards."
            />
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Wrench className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                What a Facade Assessment Establishes
              </h2>
            </div>

            <ContentImage
              src="/images/articles/eifs-stucco-repair-tampa.webp"
              alt="Exterior wall finish detail with visible control joint on a Florida building"
              caption="Wall type, bond condition, and joint layout decide the scope before any product does"
              position="center"
            />

            <div className="bg-gray-50 rounded-2xl p-8 mt-8">
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Which wall assembly you actually have",
                  "Extent of hollow and delaminated area by elevation",
                  "Crack pattern and whether it is structural or surface",
                  "Condition of lath, fasteners, and flashings",
                  "Whether control joints exist and function",
                  "Any evidence of water already inside the assembly",
                  "Historic assembly requirements where applicable",
                  "A prioritized scope suitable for board budgeting",
                ].map((item) => (
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

      {/* Service areas */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <MapPin className="w-16 h-16 text-brand-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Facade &amp; Stucco Service Areas
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-center">
              Florida Construction Specialists works on facades throughout Tampa and the wider Tampa Bay region, including St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, Bradenton, and Ruskin, where our office is located. Our work concentrates on commercial, condominium, multi-family, and historic properties across Hillsborough County and the Central Tampa Bay corridor.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="Facade and Stucco FAQs" />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Get the Diagnosis Before the Scope
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a facade assessment with Florida Construction Specialists. We establish what kind of wall you have and what is actually bonded, then scope the work to match.
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
        currentService="facade-stucco"
        currentServiceName="Facade & Stucco"
      />

      <RelatedArticles pageSlug="facade-stucco" />

      {/* Related Guides — de-orphan internal links */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Stucco Resources Library"
            links={[
              { label: "What To Know About Stucco Repair", href: "/resources/what-to-know-about-stucco-repair-tampa/" },
              { label: "Repairing Stucco Cracks", href: "/resources/repairing-stucco-cracks/" },
              { label: "EIFS Stucco Repair", href: "/resources/eifs-stucco-repair-tampa/" },
              { label: "How To Repair Large Stucco Holes", href: "/resources/how-to-repair-large-stucco-holes-tampa/" },
              { label: "Florida Stucco Repair Services", href: "/resources/florida-stucco-repair-services-tampa/" },
              { label: "Commercial Buildings Facade Renovations", href: "/commercial/guides/commercial-buildings-facade-renovations/" }
            ]}
          />
        </div>
      </section>
    </>
  );
}