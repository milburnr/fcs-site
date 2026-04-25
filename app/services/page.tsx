import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { BUSINESS_INFO, SERVICES, OTHER_SERVICES, COMMERCIAL_SERVICES, RESIDENTIAL_SERVICES, INSURANCE_SERVICES, LOCATIONS } from "@/lib/constants";
import type { Metadata } from "next";
import { BreadcrumbSchema, ServiceSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InternalLinks } from "@/components/InternalLinks";
import { FAQWithSchema } from "@/components/FAQ";
import { HighLevelForm } from "@/components/HighLevelForm";
import { ParallaxSection, ParallaxCardsContainer } from "@/components/ParallaxSection";
import { FadeIn } from "@/components/AnimatedElements";
import { AI_IMAGES, AI_IMAGE_ALT, PARALLAX_IMAGES } from "@/lib/imageMapping";
import { ProjectGallery, type GalleryPhoto } from "@/components/ProjectGallery";
import RelatedArticles from "@/components/RelatedArticles";

const servicesGalleryPhotos: GalleryPhoto[] = [
  { src: "/images/100/100", caption: "Commercial high-rise construction project" },
  { src: "/images/1-8/1-8", caption: "Multi-story commercial formwork installation" },
  { src: "/images/21/21", caption: "Concrete structure construction in Tampa Bay" },
  { src: "/images/custom-home-construction-1/custom-home-construction-1", caption: "New residential construction framing" },
  { src: "/images/2-1-1/2-1-1", caption: "New commercial building construction" },
];

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/services/' },
  title: "Construction Services Tampa Bay",
  description:
    "Tampa Bay general contractor since 1982: commercial construction, multi-family, disaster recovery, historic restoration, and custom homes.",
  openGraph: {
    title: "Construction Services Tampa Bay",
    description: "Tampa Bay general contractor since 1982: commercial construction, multi-family, disaster recovery, historic restoration, and custom homes.",
    url: "https://floridaconstructionspecialists.com/services/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
];

// Commercial service cards with images
const commercialServiceCards = [
  {
    name: "Commercial Construction",
    href: "/commercial-construction/",
    image: AI_IMAGES.commercialHero,
    imageAlt: AI_IMAGE_ALT.commercialHero,
    description: "Office buildings, medical facilities, retail centers, and industrial projects from $500K to $25M+.",
  },
  {
    name: "Multi-Family Construction",
    href: "/multi-family-construction/",
    image: AI_IMAGES.multifamily,
    imageAlt: AI_IMAGE_ALT.multifamily,
    description: "Condominiums, apartment complexes, senior living, and mixed-use residential developments.",
  },
  {
    name: "Disaster Recovery",
    href: "/disaster-recovery/",
    image: AI_IMAGES.hurricane,
    imageAlt: AI_IMAGE_ALT.hurricane,
    description: "Large-loss insurance restoration for commercial and multi-family properties after hurricanes, fires, and floods.",
  },
  {
    name: "Historic Restoration",
    href: "/historic-restoration/",
    image: AI_IMAGES.historic,
    imageAlt: AI_IMAGE_ALT.historic,
    description: "SHPO-compliant restoration, historic tax credits, and adaptive reuse of Tampa Bay's architectural heritage.",
  },
  {
    name: "Balcony Reconstruction",
    href: "/balcony-reconstruction/",
    image: AI_IMAGES.balcony,
    imageAlt: AI_IMAGE_ALT.balcony,
    description: "Structural balcony repair, waterproofing, and railing replacement for condominiums and multi-family buildings.",
  },
  {
    name: "Exterior Waterproofing",
    href: "/exterior-waterproofing/",
    image: AI_IMAGES.condo,
    imageAlt: AI_IMAGE_ALT.condo,
    description: "Building envelope waterproofing, foundation protection, and moisture barrier systems for commercial properties.",
  },
];

// Insurance & restoration service cards
const insuranceServiceCards = [
  {
    name: "Insurance Restoration",
    href: "/insurance-restoration/",
    image: AI_IMAGES.hurricane,
    imageAlt: "Insurance restoration services Tampa Bay",
    description: "Large-loss insurance claim management and complete property restoration. We work directly with adjusters and carriers.",
  },
  {
    name: "Certified Estimates",
    href: "/certified-estimates/",
    image: AI_IMAGES.office,
    imageAlt: "Certified construction estimates Tampa Bay",
    description: "Accurate certified construction estimates for insurance claims, legal proceedings, and project planning.",
  },
  {
    name: "Expert Witness",
    href: "/expert-witness/",
    image: AI_IMAGES.office,
    imageAlt: "Construction expert witness Tampa Bay",
    description: "Construction expert witness testimony for litigation, arbitration, and dispute resolution.",
  },
  {
    name: "Building Consultants",
    href: "/building-consultants/",
    image: AI_IMAGES.office,
    imageAlt: "Building consultants Tampa Bay",
    description: "Expert construction consulting for project planning, feasibility studies, and owner representation.",
  },
];

// FAQ items for services hub
const servicesFAQs = [
  {
    question: "What types of construction projects does Florida Construction Specialists handle?",
    answer: "FCS handles a comprehensive range of construction projects across three main divisions: commercial construction ($500K-$25M+ including office buildings, medical facilities, retail centers, and industrial projects), residential construction (luxury custom homes, waterfront estates, and hurricane-resistant residences), and insurance restoration (large-loss disaster recovery, certified estimates, expert witness services, and building consulting). Our team has completed over 300 projects throughout Tampa Bay and the Southeast.",
  },
  {
    question: "How do I know if my project qualifies for FCS services?",
    answer: "FCS specializes in large-scale construction projects typically valued at $250,000 and above. If you are a property developer, facility manager, HOA board member, insurance professional, or homeowner planning a significant construction project, we are well-suited to handle your needs. We provide complimentary project consultations for qualified projects to assess scope, timeline, and budget.",
  },
  {
    question: "What is the typical timeline for a commercial construction project?",
    answer: "Commercial project timelines vary based on scope and complexity. Tenant improvements typically take 2-4 months, while ground-up commercial construction ranges from 8-18 months. We use Critical Path Method (CPM) scheduling on all commercial projects to prevent delays and keep your project on track. Detailed schedules are developed during pre-construction planning.",
  },
  {
    question: "Does FCS handle insurance restoration claims?",
    answer: "Yes, insurance restoration is one of our core specialties. FCS has over 40 years of experience working directly with insurance companies, adjusters, and claims professionals. We handle large-loss commercial and residential claims, provide certified estimates that withstand adjuster scrutiny, and manage the entire restoration process from damage assessment through final completion.",
  },
  {
    question: "What makes FCS different from other Tampa Bay contractors?",
    answer: "Several factors distinguish FCS from competitors: we always serve as the prime general contractor (never a subcontractor), we maintain an in-house licensed engineer and architectural draftsman on staff, we have 40+ years of experience with 300+ completed projects, and we handle the full spectrum from commercial construction to insurance restoration. Our integrated capabilities allow us to resolve issues faster and maintain tighter project control than firms that rely on outside consultants.",
  },
  {
    question: "What areas does Florida Construction Specialists serve?",
    answer: "FCS serves the greater Tampa Bay region including Tampa, St. Petersburg, Clearwater, Lakeland, Sarasota, Bradenton, Brandon, and Ruskin. We cover Hillsborough, Pinellas, Pasco, Manatee, and Sarasota counties. We also take on select projects throughout Florida and the Southeast for the right opportunities.",
  },
  {
    question: "Do you provide in-house engineering services?",
    answer: "Yes, FCS maintains a licensed engineer and architectural draftsman on staff. This in-house capability allows us to evaluate structural conditions, resolve field conflicts, generate solutions without waiting for outside consultants, and produce shop drawings and permit sets in-house. This integration significantly reduces project delays and improves quality control.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Construction Services"
        serviceDescription="Full-service general contractor serving Tampa Bay since 1982. Commercial construction, multi-family, disaster recovery, historic restoration, custom homes, and insurance restoration. $500K-$25M+ projects."
        serviceCategories={[
          "Commercial Construction",
          "Multi-Family Construction",
          "Disaster Recovery",
          "Historic Restoration",
          "Luxury Custom Homes",
          "Balcony Reconstruction",
          "Exterior Waterproofing",
          "Insurance Restoration",
          "Certified Estimates",
          "Expert Witness",
          "Building Consultants",
        ]}
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${AI_IMAGES.skyline}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/20" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block bg-brand-green/30 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              FULL-SERVICE GENERAL CONTRACTOR
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Construction Services Across Tampa Bay
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              From $500K commercial builds to $25M+ developments, Florida Construction Specialists
              delivers large-scale construction, disaster recovery, and insurance restoration
              with {BUSINESS_INFO.yearsInBusiness} years of proven experience.
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

      {/* Trust Indicators Strip */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-brand-green-dark">{BUSINESS_INFO.yearsInBusiness}</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block" />
            <div>
              <p className="text-3xl font-bold text-brand-green-dark">{BUSINESS_INFO.projectValueRange}</p>
              <p className="text-sm text-gray-600">Project Range</p>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block" />
            <div>
              <p className="text-3xl font-bold text-brand-green-dark">{BUSINESS_INFO.licenseNumber}</p>
              <p className="text-sm text-gray-600">Licensed CBC</p>
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
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-8 text-center">
                Tampa Bay's Full-Service General Contractor Since 1982
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Florida Construction Specialists is a merging of Florida Restoration Team and Shamblin Construction, large-scale general contractors that have operated in Florida since 1982. With over four decades of experience and more than 300 completed projects, our leadership team has built or restored hundreds of large-scale projects across the Southeast United States and the Bahamas. Today, FCS operates as one of Tampa Bay's most capable prime contractors, handling projects that range from $500,000 tenant improvements to $25 million ground-up developments.
                </p>

                <p>
                  What distinguishes Florida Construction Specialists from other Tampa Bay general contractors is the depth and breadth of our capabilities under one roof. FCS always serves as the prime general contractor on our projects -- we never subcontract the management of your project to another firm. This means you work directly with our project managers and leadership team, with complete accountability for results. Our in-house licensed engineer and architectural draftsman allow us to evaluate structural conditions, resolve field conflicts, and generate solutions without waiting for outside consultants, maintaining schedule continuity that competitors simply cannot match.
                </p>

                <p>
                  Our service portfolio spans three distinct divisions, each targeting different client needs. Our commercial construction division serves property developers, facility managers, and business owners with everything from office buildings and medical facilities to industrial warehouses and retail centers. Our residential division focuses on luxury custom homes, waterfront estates, and hurricane-resistant residences for discerning homeowners throughout Tampa Bay. And our insurance restoration division brings over 40 years of claims expertise to large-loss disaster recovery, certified estimating, expert witness testimony, and building consulting for insurance professionals and property owners alike.
                </p>

                <p>
                  The Florida construction landscape presents unique challenges that require specialized knowledge. Stringent building codes designed for hurricane resistance, complex regulatory requirements across multiple agencies including AHCA, SHPO, and FEMA, and a climate that demands superior waterproofing and moisture management -- these factors make experience in the Florida market essential. FCS has built lasting relationships with building departments throughout Tampa Bay, streamlining permit approvals and inspections to keep your project moving forward.
                </p>

                <p>
                  Whether you are a property developer planning a multi-family community, a condo association facing balcony remediation, an insurance adjuster managing a large-loss claim, or a homeowner envisioning a waterfront estate, Florida Construction Specialists brings the experience, resources, and accountability that significant construction projects demand. We invite you to explore our service divisions below and contact us to discuss how we can deliver your project on time and on budget.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Commercial Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-4">
                Commercial Construction Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Large-scale commercial construction focused on risk mitigation, regulatory compliance,
                and return on investment. FCS handles projects from $500K to $25M+ across every
                commercial sector in Tampa Bay.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialServiceCards.map((service) => (
              <FadeIn key={service.name}>
                <Link
                  href={service.href}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-brand-green/30 block h-full"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-brand-green-dark mb-2 group-hover:text-brand-green transition-colors font-heading">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                    <span className="inline-flex items-center text-brand-green font-semibold text-sm">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/commercial/"
              className="inline-flex items-center gap-2 text-brand-green-dark font-bold hover:text-brand-green transition-colors"
            >
              View All Commercial Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Residential Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-4">
                Residential Construction Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Luxury custom home construction for discerning homeowners throughout Tampa Bay.
                From waterfront estates to hurricane-resistant residences, FCS builds homes
                designed to last a lifetime.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <FadeIn>
              <Link
                href="/luxury-custom-homes/"
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-brand-green/30 block h-full"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={AI_IMAGES.luxury}
                    alt={AI_IMAGE_ALT.luxury}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2 group-hover:text-brand-green transition-colors font-heading">
                    Lifetime Custom Homes
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Design/build custom home construction for waterfront estates and luxury residences. Starting at $1M+.
                  </p>
                  <span className="inline-flex items-center text-brand-green font-semibold text-sm">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Link
                href="/residential/"
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-brand-green/30 block h-full"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={AI_IMAGES.waterfront}
                    alt={AI_IMAGE_ALT.waterfront}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2 group-hover:text-brand-green transition-colors font-heading">
                    Waterfront Estates
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Specialized waterfront construction with seawall coordination, flood zone compliance, and marine-grade materials.
                  </p>
                  <span className="inline-flex items-center text-brand-green font-semibold text-sm">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Link
                href="/residential/"
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-brand-green/30 block h-full"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={AI_IMAGES.luxury}
                    alt="Hurricane-resistant custom home construction Tampa Bay"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2 group-hover:text-brand-green transition-colors font-heading">
                    Hurricane-Resistant Homes
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Homes built to exceed Florida Building Code wind resistance requirements with impact-rated windows and reinforced construction.
                  </p>
                  <span className="inline-flex items-center text-brand-green font-semibold text-sm">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/residential/"
              className="inline-flex items-center gap-2 text-brand-green-dark font-bold hover:text-brand-green transition-colors"
            >
              Explore Residential Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance & Restoration Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-4">
                Insurance Restoration Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                With over 40 years of insurance restoration experience, FCS provides certified estimates
                that withstand adjuster scrutiny, expert witness testimony, and complete large-loss
                property restoration. We advocate for property owners while maintaining professional
                relationships with carriers.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {insuranceServiceCards.map((service, index) => (
              <FadeIn key={service.name} delay={index * 0.1}>
                <Link
                  href={service.href}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-brand-green/30 block h-full"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-brand-green-dark mb-2 group-hover:text-brand-green transition-colors font-heading">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                    <span className="inline-flex items-center text-brand-green font-semibold text-sm">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/insurance/"
              className="inline-flex items-center gap-2 text-brand-green-dark font-bold hover:text-brand-green transition-colors"
            >
              View All Insurance Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Parallax Section with HighLevelForm */}
      <ParallaxSection
        backgroundImage={PARALLAX_IMAGES.construction}
        title="Discuss Your Construction Project"
        subtitle="From initial consultation through project completion, FCS manages every detail"
        overlayOpacity={0.6}
        cardOverlap={200}
        minHeight="400px"
      />
      <ParallaxCardsContainer overlap={200} className="pb-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-brand-green-dark font-heading mb-6">
              Why Clients Choose FCS
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-brand-green-dark">Always the Prime Contractor</p>
                  <p className="text-sm text-gray-600">FCS never subcontracts project management. You work directly with our team, with full accountability for results.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-brand-green-dark">In-House Engineering</p>
                  <p className="text-sm text-gray-600">Licensed engineer and architectural draftsman on staff for faster problem-solving and tighter project control.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-brand-green-dark">40+ Years of Experience</p>
                  <p className="text-sm text-gray-600">Over 300 completed projects across commercial, residential, and insurance restoration since 1982.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-brand-green-dark">Insurance Claims Expertise</p>
                  <p className="text-sm text-gray-600">Certified estimates that withstand adjuster scrutiny, with deep knowledge of the claims process from assessment through settlement.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-brand-green-dark">Regulatory Navigation</p>
                  <p className="text-sm text-gray-600">Established relationships with building departments, AHCA, SHPO, FEMA, and local municipalities across Tampa Bay.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 shadow-xl overflow-hidden">
            <HighLevelForm variant="commercial" />
          </div>
        </div>
      </ParallaxCardsContainer>

      {/* Project Gallery */}
      <ProjectGallery
        title="Our Project Portfolio"
        subtitle="Commercial, residential, and restoration projects completed across Tampa Bay"
        photos={servicesGalleryPhotos}
      />

      {/* FAQ Section */}
      <FAQWithSchema
        items={servicesFAQs}
        title="Construction Services FAQs"
        description="Common questions about our construction services, capabilities, and project process across Tampa Bay"
      />

      {/* Final CTA Section */}
      <section className="py-16 bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From $500K improvements to $25M+ developments, Florida Construction Specialists
            has the experience and capability to deliver your project on time and on budget.
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
              { label: "Commercial Construction", href: "/commercial/" },
              { label: "Residential Construction", href: "/residential/" },
              { label: "Insurance Restoration", href: "/insurance/" },
              { label: "Service Areas", href: "/locations/" },
              { label: "About FCS", href: "/about/" },
            ]}
          />
        </div>
      </section>
    <RelatedArticles pageSlug="services" />
    </>
  );
}
