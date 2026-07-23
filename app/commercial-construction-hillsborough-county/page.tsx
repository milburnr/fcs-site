import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, ArrowRight, FileCheck, HardHat, Briefcase } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { BUSINESS_INFO } from "@/lib/constants";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/commercial-construction-hillsborough-county/' },
  title: "Commercial Contractor Hillsborough County, FL | FCS",
  description: "Commercial contractor and construction across Hillsborough County — Tampa, Brandon, Riverview, Plant City, and Ruskin. Industrial, medical, retail, and office. Certified Building Contractor CBC1262722, based in Ruskin.",
  openGraph: {
    title: "Commercial Contractor Hillsborough County | FCS",
    description: "Commercial construction across Hillsborough County by Florida Construction Specialists. Tampa, Brandon, Riverview, Plant City, and Ruskin. 40+ years, prime contractor only.",
    url: "https://floridaconstructionspecialists.com/commercial-construction-hillsborough-county/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Hillsborough County Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "Which Hillsborough County cities and areas does FCS serve?",
    answer: "Florida Construction Specialists delivers commercial construction across Hillsborough County, including the City of Tampa, Brandon, Riverview, Plant City, Temple Terrace, Ruskin, and the unincorporated communities of Apollo Beach, Gibsonton, Valrico, Lithia, and Wimauma. Our home office is in Ruskin in South Hillsborough, so the county is our core market, and we coordinate permitting with the City of Tampa, Plant City, Temple Terrace, or Hillsborough County depending on where the project sits."
  },
  {
    question: "Who issues commercial building permits in Hillsborough County?",
    answer: "It depends on jurisdiction. Projects inside the City of Tampa go through the City of Tampa Construction Services Center, and Plant City and Temple Terrace run their own building departments. Everything in unincorporated Hillsborough — which is the majority of the county's land area, including Brandon, Riverview, and Apollo Beach — is permitted through Hillsborough County Development Services. We prepare complete permit packages for whichever authority applies and manage the review process through Certificate of Occupancy."
  },
  {
    question: "What commercial construction is driving demand in Hillsborough County?",
    answer: "Hillsborough is one of Florida's fastest-growing counties, and its commercial demand is broad. The I-4 corridor toward Plant City and the areas near Port Tampa Bay drive heavy industrial and warehouse construction. Tampa's urban core, Westshore business district, and the University area support office, medical, and mixed-use development. Fast-growing suburbs like Brandon, Riverview, and Apollo Beach generate retail centers, medical offices, and restaurant buildouts to serve rapidly expanding residential populations."
  },
  {
    question: "Does FCS handle industrial and warehouse construction in Hillsborough County?",
    answer: "Yes. Hillsborough's position on the I-4 logistics corridor and its proximity to Port Tampa Bay have made industrial and distribution construction one of the county's strongest sectors. We build and renovate warehouses, distribution centers, light-industrial flex space, and manufacturing facilities, handling the tilt-wall construction, heavy-load slabs, dock systems, and fire-protection requirements these buildings demand."
  },
  {
    question: "How do flood zones and wind requirements affect Hillsborough construction?",
    answer: "While much of Hillsborough is inland and less exposed than the Pinellas beaches, the county still sits in a wind-borne debris region under the Florida Building Code, requiring impact-resistant glazing or protection on many commercial buildings. Properties along Tampa Bay, the Alafia River, the Hillsborough River, and the South Shore coastline near Ruskin and Apollo Beach fall within flood zones that require elevation and flood-resistant design. We assess each site's wind and flood exposure and build to the applicable code."
  },
  {
    question: "Is Florida Construction Specialists licensed and local to Hillsborough County?",
    answer: "Yes. FCS holds Florida Certified Building Contractor license CBC1262722 and is headquartered in Ruskin, in South Hillsborough County, serving the greater Tampa Bay region since 1982. Hillsborough is our home county. We are always the prime contractor, never a subcontractor, with direct owner accountability from assessment through project closeout."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/commercial/" },
  { name: "Commercial Construction", href: "/commercial/" },
  { name: "Hillsborough County", href: "/commercial-construction-hillsborough-county/" },
];

const cityLinks = [
  { name: "Tampa", href: "/commercial-construction-tampa/" },
  { name: "Brandon", href: "/commercial-construction-brandon/" },
  { name: "Ruskin", href: "/commercial-construction-ruskin/" },
];

export default function CommercialConstructionHillsboroughCountyPage() {
  return (
    <>
      <LocalBusinessSchema city="Hillsborough County" service="Commercial Construction" />
      <ServiceSchema
        serviceName="Commercial Construction"
        serviceDescription="Full-service commercial construction across Hillsborough County, FL. Industrial and warehouse, medical facilities, retail, office buildings, and tenant improvements. Certified Building Contractor CBC1262722, headquartered in Ruskin, 40+ years experience."
        city="Hillsborough County"
        minPrice="500000"
        serviceCategories={["Design-Build Construction", "Industrial & Warehouse Construction", "Medical Facility Construction", "Retail Construction", "Tenant Improvements"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/commercial-construction-in-tampa/commercial-construction-in-tampa-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving All of Hillsborough County, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Commercial Contractor for Hillsborough County, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              From Tampa's urban core and the Westshore business district to the industrial corridors near Port Tampa Bay and the fast-growing suburbs of Brandon, Riverview, and Apollo Beach, Florida Construction Specialists delivers commercial construction across all of Hillsborough County. Headquartered in Ruskin, in South Hillsborough, this is our home county, and we bring over four decades of experience, in-house engineering, and prime-contractor accountability to every project.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Based in Ruskin Since 1982</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Certified Building Contractor {BUSINESS_INFO.licenseNumber}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Building2 className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">{BUSINESS_INFO.projectsCompleted}+ Projects</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta text-center">
                Schedule Project Consultation
              </Link>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-secondary flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* County Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Home County — And One of Florida's Fastest-Growing Markets
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Hillsborough County is the economic engine of Tampa Bay and one of the fastest-growing counties in Florida. It stretches from the urban density of Tampa west toward the bay, north to Temple Terrace and the University area, east through Brandon and Plant City along the I-4 corridor, and south through Riverview, Apollo Beach, Ruskin, and Wimauma. That range produces one of the most diverse commercial construction markets in the state, spanning downtown office towers, suburban retail, industrial logistics, healthcare, and agriculture-adjacent commercial work.
              </p>
              <p className="mb-6">
                Tampa anchors the county with its central business district, the Westshore business district — one of Florida's largest office markets — and major institutional employers including the University of South Florida, Tampa General Hospital, and Port Tampa Bay. These drive steady demand for office construction, medical facility buildouts, and mixed-use development, much of it renovation and tenant improvement within an established urban fabric.
              </p>
              <p className="mb-6">
                The I-4 corridor between Tampa and Plant City, together with the areas around Port Tampa Bay, has become one of the Southeast's most active industrial and distribution markets. Warehouses, distribution centers, and light-industrial flex buildings are rising to serve a logistics network that reaches across Florida. This is tilt-wall, heavy-slab, dock-and-door construction, and it represents one of Hillsborough's strongest and most durable commercial sectors.
              </p>
              <p>
                Meanwhile the county's booming suburbs — Brandon, Riverview, Apollo Beach, and the South Shore communities near our Ruskin headquarters — generate continuous retail, restaurant, and medical-office construction to serve fast-expanding residential populations. Florida Construction Specialists has built across every one of these markets from a home base in the heart of the county, and we bring genuine local knowledge to each jurisdiction and site condition Hillsborough presents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/commercial-construction-design/commercial-construction-design-display.webp"
        alt="Commercial construction project in Hillsborough County"
        title="Building Across Hillsborough County"
        subtitle="From Tampa's core and Westshore to the I-4 industrial corridor and South Shore suburbs"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Commercial Construction Expertise Across Hillsborough County
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Industrial logistics, urban office, suburban retail, and healthcare — we deliver specialized capability across every Hillsborough sector.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: HardHat,
                title: "Industrial and Warehouse Construction",
                description: "Distribution centers, warehouses, light-industrial flex space, and manufacturing facilities along the I-4 corridor and near Port Tampa Bay. Tilt-wall construction, heavy-load slabs, dock systems, and fire protection for the county's booming logistics sector."
              },
              {
                icon: Building2,
                title: "Office and Mixed-Use Construction",
                description: "Office construction and tenant improvements across Tampa's central business district, the Westshore business district, and the University area. From ground-up buildings to interior buildouts that minimize disruption to neighboring tenants."
              },
              {
                icon: Shield,
                title: "Medical Facility Construction",
                description: "AHCA-compliant healthcare construction serving the Tampa General, USF Health, and suburban medical corridors. Surgical centers, specialty clinics, imaging facilities, and medical office buildouts across Tampa, Brandon, and Riverview."
              },
              {
                icon: Briefcase,
                title: "Retail and Restaurant Construction",
                description: "Retail center construction, restaurant buildouts, and commercial renovations serving the fast-growing suburbs of Brandon, Riverview, Apollo Beach, and Plant City, as well as Tampa's established commercial districts."
              },
              {
                icon: FileCheck,
                title: "Design-Build Construction",
                description: "Single-source design-build delivery for Hillsborough commercial projects. We coordinate architecture, engineering, and construction under one contract for faster delivery and single-point accountability."
              },
              {
                icon: Award,
                title: "Commercial Renovations and Additions",
                description: "Major renovations, additions, and adaptive reuse across Hillsborough. Modernizing aging retail and office buildings and repurposing existing structures to current use and current Florida Building Code."
              }
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-brand-green-dark" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Expertise Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Local Knowledge Across Every Hillsborough Jurisdiction
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Hillsborough is a large county with several permitting authorities, and knowing which one governs a given site is the first step on any project. Work inside the City of Tampa goes through the City of Tampa Construction Services Center, while Plant City and Temple Terrace operate their own building departments. The majority of the county's land, including Brandon, Riverview, Apollo Beach, and our home community of Ruskin, is unincorporated and permitted through Hillsborough County Development Services. We manage the full submittal and review process for whichever authority applies.
              </p>
              <p className="mb-6">
                Site conditions vary widely across the county. Much of Hillsborough is inland and less wind-exposed than the Pinellas beaches, but the entire county sits within a wind-borne debris region under the Florida Building Code, so commercial buildings commonly require impact-resistant glazing or opening protection. Properties along Tampa Bay, the Hillsborough and Alafia Rivers, and the South Shore coastline near Ruskin and Apollo Beach fall within flood zones that require elevation and flood-resistant design. We evaluate each site's specific wind and flood exposure before design.
              </p>
              <p className="mb-6">
                The county's soils and terrain also shape construction. Central and eastern Hillsborough include areas of clay and phosphate-mining history around Plant City that call for careful geotechnical work, while the coastal south county has the sandy soils and high water table typical of Tampa Bay. Our in-house engineering and long experience across these conditions let us anticipate the foundation and site-work challenges specific to each part of the county.
              </p>
              <p>
                Above all, Hillsborough is our home. Florida Construction Specialists has operated from Ruskin, in South Hillsborough County, since 1982, and we have built and restored projects across Tampa, Brandon, Plant City, Riverview, and the South Shore for more than four decades. That local presence means faster response, established relationships with county and city inspectors, and a subcontractor network that understands local conditions and expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Commercial Construction in Hillsborough County Cities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Explore our dedicated commercial construction pages for the major Hillsborough County markets.
          </p>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
            {cityLinks.map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:border-brand-green hover:shadow-md transition-all group"
              >
                <ArrowRight className="w-4 h-4 text-brand-gold flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                <span className="text-gray-700 group-hover:text-brand-green-dark font-medium">
                  Commercial Construction in {city.name}
                </span>
              </Link>
            ))}
            <Link
              href="/multi-family-construction/"
              className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:border-brand-green hover:shadow-md transition-all group"
            >
              <ArrowRight className="w-4 h-4 text-brand-gold flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              <span className="text-gray-700 group-hover:text-brand-green-dark font-medium">
                Multi-Family Construction
              </span>
            </Link>
            <Link
              href="/commercial/"
              className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:border-brand-green hover:shadow-md transition-all group"
            >
              <ArrowRight className="w-4 h-4 text-brand-gold flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              <span className="text-gray-700 group-hover:text-brand-green-dark font-medium">
                All Commercial Construction Services
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={faqs}
        title="Hillsborough County Commercial Construction FAQ"
        description="Common questions about commercial construction projects across Hillsborough County, Florida."
      />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Start Your Hillsborough County Commercial Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on your commercial project anywhere in Hillsborough County. From a Westshore office buildout to an I-4 distribution center or a Brandon retail project, we will outline a clear path to delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request a Project Consultation
            </Link>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all">
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-300">
              <span>Certified Building Contractor {BUSINESS_INFO.licenseNumber}</span>
              <span>In-House Engineering</span>
              <span>{BUSINESS_INFO.yearsInBusiness} Years Experience</span>
              <span>Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>
    <RelatedArticles pageSlug="commercial-construction-hillsborough-county" />
    </>
  );
}
