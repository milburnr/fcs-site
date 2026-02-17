import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { BreadcrumbSchema, ServiceSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FadeIn } from "@/components/AnimatedElements";
import { FAQWithSchema } from "@/components/FAQ";
import { HighLevelForm } from "@/components/HighLevelForm";
import { ParallaxSection, ParallaxCardsContainer } from "@/components/ParallaxSection";
import { PARALLAX_IMAGES } from "@/lib/imageMapping";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  alternates: { canonical: "https://floridaconstructionspecialists.com/locations/" },
  title: "Tampa Bay Service Areas | 9 Cities | Florida Construction Specialists",
  description:
    "Florida Construction Specialists serves 9 Tampa Bay cities: Tampa, St. Petersburg, Clearwater, Lakeland, Sarasota, Bradenton, Brandon, Ruskin & Plant City. CBC1262722.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Service Areas", href: "/locations/" },
];

// The 9 services that have city-specific pages
const SERVICE_LOCATION_PAGES = [
  { name: "Commercial Construction", slug: "commercial-construction" },
  { name: "Multi-Family Construction", slug: "multi-family-construction" },
  { name: "Disaster Recovery", slug: "disaster-recovery" },
  { name: "Historic Restoration", slug: "historic-restoration" },
  { name: "Balcony Reconstruction", slug: "balcony-reconstruction" },
  { name: "Exterior Waterproofing", slug: "exterior-waterproofing" },
  { name: "Condo Remediation", slug: "condo-remediation" },
  { name: "Insurance Restoration", slug: "insurance-restoration" },
  { name: "Luxury Custom Homes", slug: "luxury-custom-homes" },
];

// City data with contextual descriptions for the hub page
// 8 cities from LOCATIONS + Plant City added manually
const CITY_DATA: Array<{
  name: string;
  slug: string;
  population: string;
  hubHref: string;
  context: string;
  hasServicePages: boolean;
}> = [
  {
    name: "Tampa",
    slug: "tampa",
    population: "400,000+",
    hubHref: "/locations/tampa-fl/",
    context:
      "As Florida's third-largest city and the economic engine of the Tampa Bay metro, Tampa generates consistent demand for commercial construction, multi-family development, and large-scale disaster recovery. FCS has completed projects across Tampa's diverse neighborhoods—from downtown high-rises and Westshore business district renovations to Channelside waterfront developments and South Tampa custom homes.",
    hasServicePages: true,
  },
  {
    name: "St. Petersburg",
    slug: "st-petersburg",
    population: "260,000+",
    hubHref: "/locations/st-petersburg-fl/",
    context:
      "St. Petersburg's historic waterfront architecture and growing downtown arts district create unique construction requirements. FCS handles historic restoration projects that must comply with SHPO standards, condo remediation for aging Gulf-front buildings, and commercial construction throughout the city's rapidly developing central corridor.",
    hasServicePages: true,
  },
  {
    name: "Clearwater",
    slug: "clearwater",
    population: "117,000+",
    hubHref: "/locations/clearwater-fl/",
    context:
      "Clearwater's tourism-driven economy and coastal location mean construction projects must meet stringent wind resistance codes and flood zone requirements. FCS serves Clearwater's hospitality sector, beachfront condominium associations needing balcony reconstruction and waterproofing, and commercial property owners throughout the city.",
    hasServicePages: true,
  },
  {
    name: "Lakeland",
    slug: "lakeland",
    population: "115,000+",
    hubHref: "/locations/lakeland-fl/",
    context:
      "Positioned between Tampa and Orlando along the I-4 corridor, Lakeland is experiencing rapid commercial and residential growth. FCS provides construction services for Lakeland's expanding industrial sector, new multi-family developments, and historic restoration projects in the city's well-preserved downtown district.",
    hasServicePages: true,
  },
  {
    name: "Sarasota",
    slug: "sarasota",
    population: "57,000+",
    hubHref: "/locations/sarasota-fl/",
    context:
      "Sarasota's affluent Gulf Coast market demands premium construction quality for luxury custom homes, high-end condominium developments, and culturally significant restoration projects. FCS brings specialized expertise to Sarasota's discerning property owners, from waterfront estate construction to commercial projects along the Tamiami Trail corridor.",
    hasServicePages: true,
  },
  {
    name: "Bradenton",
    slug: "bradenton",
    population: "60,000+",
    hubHref: "/locations/bradenton-fl/",
    context:
      "Bradenton's blend of historic character and new development creates diverse construction opportunities. FCS handles projects ranging from commercial construction in the Cortez Road corridor to condo remediation along the Manatee River waterfront and disaster recovery for properties throughout Manatee County.",
    hasServicePages: true,
  },
  {
    name: "Brandon",
    slug: "brandon",
    population: "115,000+",
    hubHref: "/locations/brandon-fl/",
    context:
      "As one of Tampa's largest suburbs, Brandon combines suburban residential development with significant commercial growth along the SR-60 and I-75 corridors. FCS serves Brandon's expanding multi-family construction market, commercial property owners, and homeowners seeking luxury custom home construction.",
    hasServicePages: true,
  },
  {
    name: "Ruskin",
    slug: "ruskin",
    population: "25,000+",
    hubHref: "/locations/ruskin-fl/",
    context:
      "Ruskin is home to FCS headquarters, giving us unmatched knowledge of South Hillsborough County's building landscape. From our base on Bayview Drive, we serve the rapidly growing communities of Ruskin, Sun City Center, Apollo Beach, and Riverview—areas experiencing some of the fastest development in the Tampa Bay region.",
    hasServicePages: true,
  },
  {
    name: "Plant City",
    slug: "plant-city",
    population: "40,000+",
    hubHref: "/locations/plant-city-fl/",
    context:
      "Plant City sits at the crossroads of Hillsborough County's agricultural heritage and modern development. As the city grows with new commercial corridors and residential communities along the I-4 interchange, FCS provides construction services tailored to Plant City's evolving building requirements and local permitting processes.",
    hasServicePages: false,
  },
];

const locationFAQs = [
  {
    question: "What areas does Florida Construction Specialists serve?",
    answer:
      "FCS serves the entire Tampa Bay metropolitan area including Tampa, St. Petersburg, Clearwater, Lakeland, Sarasota, Bradenton, Brandon, Ruskin, and Plant City. We also accept select projects throughout Florida for the right opportunities. Our headquarters in Ruskin places us centrally within our primary service territory.",
  },
  {
    question: "Does FCS handle projects outside the Tampa Bay area?",
    answer:
      "Yes, for qualified projects we work throughout Florida and have completed projects across the Southeast United States and the Bahamas. Our core service area is Tampa Bay, but our experience with large-scale commercial construction, disaster recovery, and historic restoration means we regularly take on projects statewide when the scope and scale align with our expertise.",
  },
  {
    question: "How does local building code knowledge help my project?",
    answer:
      "Florida's building codes are among the most stringent in the nation, particularly for wind resistance, flood zone compliance, and hurricane protection. Each municipality within Tampa Bay has its own permitting processes and inspection requirements. With 40+ years of experience across Hillsborough, Pinellas, Pasco, Manatee, and Sarasota counties, FCS has established relationships with local building departments that accelerate permit approvals and prevent costly compliance delays.",
  },
  {
    question: "Can FCS manage projects across multiple Tampa Bay cities simultaneously?",
    answer:
      "Absolutely. We routinely manage concurrent projects across different Tampa Bay jurisdictions. Our project management team understands the specific permitting timelines, inspection requirements, and subcontractor networks in each city. This multi-market capability is especially valuable for property developers and insurance carriers who need a single general contractor across their Tampa Bay portfolio.",
  },
  {
    question: "How long has FCS been serving the Tampa Bay area?",
    answer:
      "Florida Construction Specialists is a merging of Florida Restoration Team and Shamblin Construction, large-scale general contractors that have operated in Florida since 1982. With over 40 years serving Tampa Bay, our leadership team has built or restored hundreds of large-scale projects across the region, establishing deep relationships with local building officials, subcontractors, and material suppliers.",
  },
  {
    question: "Which counties does FCS cover?",
    answer:
      "FCS serves all municipalities within five Tampa Bay counties: Hillsborough County (Tampa, Brandon, Plant City, Ruskin), Pinellas County (St. Petersburg, Clearwater), Polk County (Lakeland), Manatee County (Bradenton), and Sarasota County (Sarasota). We maintain active contractor relationships with building departments in each of these jurisdictions.",
  },
];

export default function LocationsHubPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Construction Services - Tampa Bay Service Areas"
        serviceDescription="Full-service general contractor serving 9 Tampa Bay cities with commercial construction, multi-family development, disaster recovery, historic restoration, and luxury custom homes. Licensed CBC1262722."
        serviceCategories={[
          "Commercial Construction",
          "Multi-Family Construction",
          "Disaster Recovery",
          "Historic Restoration",
          "Balcony Reconstruction",
          "Exterior Waterproofing",
          "Condo Remediation",
          "Insurance Restoration",
          "Luxury Custom Homes",
        ]}
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${PARALLAX_IMAGES.construction}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/20" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block bg-brand-green/30 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              Serving Tampa Bay Since 1982
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Construction Services Across Tampa Bay
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              Florida Construction Specialists provides commercial construction, multi-family
              development, disaster recovery, and specialty services across nine Tampa Bay
              cities and five counties. Headquartered in Ruskin with {BUSINESS_INFO.yearsInBusiness} years
              of regional experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-dark transition-all"
              >
                Discuss Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-brand-green-dark">{BUSINESS_INFO.yearsInBusiness}</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block" />
            <div>
              <p className="text-3xl font-bold text-brand-green-dark">9 Cities</p>
              <p className="text-sm text-gray-600">Served</p>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block" />
            <div>
              <p className="text-3xl font-bold text-brand-green-dark">{BUSINESS_INFO.licenseNumber}</p>
              <p className="text-sm text-gray-600">Licensed</p>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block" />
            <div>
              <p className="text-3xl font-bold text-brand-green-dark">In-House</p>
              <p className="text-sm text-gray-600">Engineering & Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-8 text-center">
                Tampa Bay&apos;s Full-Service General Contractor
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Florida Construction Specialists has served the Tampa Bay metropolitan area since 1982, completing over 300 commercial, residential, and restoration projects across the region. Headquartered in Ruskin on the southern shore of Tampa Bay, FCS operates as a prime general contractor throughout Hillsborough, Pinellas, Polk, Manatee, and Sarasota counties—providing construction services to property owners, developers, insurance carriers, and government entities across nine distinct cities.
                </p>

                <p>
                  What makes local knowledge essential in Tampa Bay construction is the region&apos;s complex regulatory landscape. Each municipality maintains its own building department with specific permitting processes, inspection cadences, and code interpretations. Hillsborough County&apos;s requirements differ from Pinellas County&apos;s, which differ from Sarasota County&apos;s. A general contractor without deep experience in each jurisdiction will face permit delays, failed inspections, and costly re-submittals that push project timelines and budgets beyond acceptable limits.
                </p>

                <p>
                  FCS has built relationships with building officials in every Tampa Bay jurisdiction we serve. Our team understands each city&apos;s plan review timelines, preferred documentation formats, and the specific code provisions that local inspectors prioritize. This institutional knowledge translates directly into faster permit approvals, smoother inspections, and fewer field-level surprises for our clients. When a project requires coordination across multiple jurisdictions—common for property developers and insurance carriers with regional portfolios—FCS provides single-point accountability across every city involved.
                </p>

                <p>
                  The types of construction projects vary considerably across Tampa Bay&apos;s diverse communities. Tampa&apos;s urban core drives demand for large-scale commercial construction and multi-family development. Coastal cities like St. Petersburg, Clearwater, and Sarasota require specialized expertise in hurricane-resistant construction, waterproofing, and condo remediation for aging beachfront properties. Growing inland communities such as Lakeland, Brandon, and Plant City generate opportunities in commercial expansion and residential development. And throughout the region, Florida&apos;s unpredictable hurricane seasons create ongoing demand for disaster recovery and insurance restoration services.
                </p>

                <p>
                  FCS brings the same capabilities to every city we serve: in-house engineering and architectural drafting, Critical Path Method (CPM) scheduling for timeline control, certified estimating for insurance claims, and the bonding capacity required for projects from $500K to $25M+. Whether your project is a single-building restoration in Bradenton or a multi-site commercial program spanning Tampa, St. Petersburg, and Lakeland, Florida Construction Specialists has the local knowledge, technical resources, and project management infrastructure to deliver results.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* City Sections - THE CORE CONTENT */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-4">
                Service Areas by City
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Select your city to explore our construction services in your area.
                Each city links to a dedicated hub page and individual service pages
                with location-specific project details.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-12">
            {CITY_DATA.map((city, index) => (
              <FadeIn key={city.slug}>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  {/* City Header */}
                  <div className="bg-brand-green-dark px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-brand-gold" />
                      <h3 className="text-xl md:text-2xl font-bold text-white font-heading">
                        {city.name}, FL
                      </h3>
                      <span className="text-white/60 text-sm hidden sm:inline">
                        Pop. {city.population}
                      </span>
                    </div>
                    <Link
                      href={city.hubHref}
                      className="inline-flex items-center gap-1 text-brand-gold hover:text-white text-sm font-semibold transition-colors"
                    >
                      City Hub
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* City Content */}
                  <div className="p-6">
                    <p className="text-gray-700 mb-5">
                      {city.context}
                    </p>

                    {city.hasServicePages ? (
                      <>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                          Construction Services in {city.name}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                          {SERVICE_LOCATION_PAGES.map((service) => (
                            <Link
                              key={`${service.slug}-${city.slug}`}
                              href={`/${service.slug}-${city.slug}/`}
                              className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-brand-green-bg rounded-lg text-sm font-medium text-brand-green-dark hover:text-brand-green transition-colors group"
                            >
                              <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-green transition-colors flex-shrink-0" />
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center gap-3">
                        <Link
                          href={city.hubHref}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-green text-white font-semibold rounded-lg hover:bg-brand-green-dark transition-colors text-sm"
                        >
                          <MapPin className="w-4 h-4" />
                          View All {city.name} Services
                        </Link>
                        <span className="text-sm text-gray-500">
                          See our full service offering for {city.name}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Counties Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-6 text-center">
                Counties We Serve
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 text-center">
                <p>
                  Florida Construction Specialists maintains active contractor relationships and project experience across five Tampa Bay counties: <strong>Hillsborough County</strong> (Tampa, Brandon, Plant City, Ruskin, Temple Terrace, Riverview), <strong>Pinellas County</strong> (St. Petersburg, Clearwater, Largo, Dunedin), <strong>Polk County</strong> (Lakeland, Winter Haven, Bartow), <strong>Manatee County</strong> (Bradenton, Palmetto, Anna Maria Island), and <strong>Sarasota County</strong> (Sarasota, Venice, North Port). We serve all incorporated and unincorporated areas within these counties and accept select projects statewide.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { county: "Hillsborough", cities: "Tampa, Brandon, Plant City, Ruskin" },
                  { county: "Pinellas", cities: "St. Petersburg, Clearwater" },
                  { county: "Polk", cities: "Lakeland, Winter Haven" },
                  { county: "Manatee", cities: "Bradenton, Palmetto" },
                  { county: "Sarasota", cities: "Sarasota, Venice" },
                ].map((item) => (
                  <div key={item.county} className="bg-gray-50 rounded-lg p-4 text-center">
                    <p className="font-bold text-brand-green-dark">{item.county}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.cities}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Parallax + Form */}
      <ParallaxSection
        backgroundImage={PARALLAX_IMAGES.sunset}
        title="Discuss Your Tampa Bay Project"
        subtitle="From initial consultation through project completion, FCS provides experienced project management across every city we serve"
        overlayOpacity={0.6}
        cardOverlap={200}
        minHeight="400px"
      />
      <ParallaxCardsContainer overlap={200} className="pb-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-brand-green-dark font-heading mb-6">
              Why Location Matters in Florida Construction
            </h3>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Florida&apos;s building environment is uniquely demanding. The Florida Building Code—updated on a three-year cycle—incorporates hurricane resistance standards, flood zone elevation requirements, and energy efficiency mandates that vary by jurisdiction. Each county and municipality layer their own amendments on top of the statewide code, creating a patchwork of requirements that only experienced local contractors can navigate efficiently.
              </p>
              <p>
                FCS&apos;s four-decade presence across Tampa Bay means our team knows which jurisdictions require structural engineering peer review, which counties mandate specific inspection sequences, and which building departments offer expedited permitting for qualified contractors. This knowledge eliminates the trial-and-error approach that costs property owners time and money when working with contractors unfamiliar with local processes.
              </p>
              <p>
                Our established relationships extend beyond building departments. FCS maintains a vetted network of subcontractors, material suppliers, and specialty consultants in every city we serve. When your project requires a certified welder in Lakeland, a historic masonry specialist in St. Petersburg, or a marine construction subcontractor in Sarasota, we have existing relationships that ensure quality work, competitive pricing, and schedule reliability.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 shadow-xl overflow-hidden">
            <HighLevelForm variant="commercial" />
          </div>
        </div>
      </ParallaxCardsContainer>

      {/* FAQ Section */}
      <FAQWithSchema
        items={locationFAQs}
        title="Service Area FAQs"
        description="Common questions about our Tampa Bay coverage, local expertise, and multi-city project capabilities"
      />

      {/* Final CTA */}
      <section className="py-16 bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether your project is in Tampa, St. Petersburg, Lakeland, or anywhere across Tampa Bay,
            Florida Construction Specialists has the local expertise and construction capabilities
            to deliver results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-dark transition-all"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={[
              { href: "/services/", label: "All Construction Services" },
              { href: "/commercial/", label: "Commercial Construction" },
              { href: "/residential/", label: "Residential Construction" },
              { href: "/insurance/", label: "Insurance Restoration" },
              { href: "/contact/", label: "Schedule a Consultation" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
