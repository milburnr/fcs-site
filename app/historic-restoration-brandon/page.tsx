import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, Users, FileCheck, BookOpen, Landmark, Hammer, Scale, Home, Leaf, Factory } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Historic Restoration Brandon FL | Citrus Era & Mid-Century Homes | FCS",
  description: "Expert historic restoration contractor in Brandon, Florida. Citrus-era buildings, 1950s-1970s homes, agricultural heritage structures. Hillsborough County preservation. Projects $150K-$5M+. Call (813) 420-7561.",
  keywords: "historic restoration brandon, brandon historic homes, citrus era buildings florida, mid-century home restoration, hillsborough county preservation, brandon florida historic buildings",
};

const serviceTypes = [
  {
    title: "Mid-Century Home Restoration",
    description: "Restoration of Brandon's 1950s-1970s ranch homes, split-levels, and Florida vernacular residences that are now reaching 50+ years and qualifying for historic consideration."
  },
  {
    title: "Agricultural Heritage Preservation",
    description: "Restoration of citrus-era packing houses, farmhouses, barns, and agricultural structures that reflect Brandon's heritage as a major citrus and strawberry farming community."
  },
  {
    title: "Early Commercial Building Restoration",
    description: "Rehabilitation of Brandon's original downtown commercial structures from the early-to-mid 20th century, adapting historic buildings for contemporary business use."
  },
  {
    title: "Period-Accurate Renovations",
    description: "Sensitive renovations that respect original architecture while updating systems for modern living, preserving character-defining features of Brandon's older homes."
  },
  {
    title: "Structural Stabilization",
    description: "Addressing foundation issues, structural deterioration, and load-bearing concerns in older Brandon buildings using methods that preserve original construction character."
  },
  {
    title: "Documentation & Assessment",
    description: "Professional documentation of historic resources, eligibility assessments for National Register listing, and preservation planning for property owners seeking to protect Brandon's heritage."
  }
];

// Brandon-specific historic restoration FAQs
const brandonFaqs = [
  {
    question: "Does Brandon have any designated historic districts?",
    answer: "Brandon does not currently have formally designated historic districts like Tampa's Ybor City or Hyde Park. However, this doesn't mean historic resources are absent. Brandon has significant historic buildings including original commercial structures near the intersection of Highway 60 and Parsons Avenue, citrus-era agricultural buildings, and residential neighborhoods from the 1920s through 1970s. Individual properties can pursue National Register listing or Hillsborough County landmark designation. We help property owners understand their options for recognizing and protecting Brandon's historic resources."
  },
  {
    question: "What qualifies as historic in Brandon?",
    answer: "Generally, buildings 50 years or older may be considered for historic recognition. In Brandon, this includes the original downtown commercial buildings, farmhouses and agricultural structures from the citrus era, and the extensive development of ranch homes, split-levels, and early Florida suburban architecture from the 1950s-1970s. Significance is evaluated based on architectural merit, historical associations, and integrity of original features. Many Brandon homeowners are surprised to learn their mid-century homes may qualify for historic consideration."
  },
  {
    question: "Can I get tax benefits for restoring a historic home in Brandon?",
    answer: "Yes, though the process differs from properties in designated historic districts. Brandon properties can pursue individual National Register listing, which opens eligibility for federal historic tax credits (20% for income-producing properties) and Florida's ad valorem tax exemption for historic properties. The application process requires documentation of the property's significance and rehabilitation plans meeting Secretary of Interior Standards. We coordinate the SHPO application process and ensure restoration work meets certification requirements."
  },
  {
    question: "What's involved in restoring a 1950s-1970s home in Brandon?",
    answer: "Mid-century home restoration in Brandon typically involves preserving original architectural features like terrazzo floors, jalousie windows, decorative concrete blocks, and distinctive rooflines while updating mechanical systems, insulation, and weatherproofing. Common issues include outdated electrical and plumbing, asbestos-containing materials, original windows requiring restoration or sympathetic replacement, and Florida room additions that may not match original construction quality. We balance preservation of period character with modern comfort and safety requirements."
  },
  {
    question: "How do you handle citrus-era agricultural buildings in Brandon?",
    answer: "Brandon's agricultural heritage structures, including packing houses, farmhouses, and barns, present unique preservation challenges. These buildings often use vernacular construction methods and materials specific to Florida's agricultural history. Restoration involves stabilizing original timber framing, addressing decades of deferred maintenance, and often adapting structures for new uses while preserving their agricultural character. We document these buildings thoroughly, understanding their historical significance to Brandon's development as a citrus and farming community."
  },
  {
    question: "What permits are needed for historic restoration in Brandon?",
    answer: "Brandon restoration projects require standard Hillsborough County building permits obtained through the County Building Services Department. Unlike Tampa's historic districts, there's no Historic Preservation Commission review required for most Brandon properties. However, if pursuing National Register listing or tax credits, work must meet Secretary of Interior Standards and receive SHPO approval. We navigate both the local permitting process and any state-level historic preservation requirements for qualifying projects."
  },
  {
    question: "What are typical costs for historic home restoration in Brandon?",
    answer: "Brandon historic restoration costs are generally lower than comparable work in Tampa's designated historic districts because there's typically less regulatory review required. Budget ranges are: exterior restoration $40-100 per square foot; full home restoration $150-300 per square foot; structural stabilization $50-150 per square foot. Agricultural building restoration varies widely based on condition and intended reuse. Mid-century homes often require $150,000-$400,000 for comprehensive restoration. We provide detailed budgeting during pre-construction assessment."
  },
  {
    question: "How long does a typical Brandon restoration project take?",
    answer: "Brandon restoration timelines vary based on scope and property condition. Exterior restoration typically takes 3-6 months; full home restoration 8-14 months; agricultural building rehabilitation 6-12 months. The timeline advantage in Brandon versus Tampa historic districts is reduced regulatory review time, though SHPO coordination for tax credit projects still requires 4-6 months for Part 2 approval. We develop realistic schedules during pre-construction and maintain clear communication throughout the project."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Historic Restoration", href: "/historic-restoration/" },
  { name: "Brandon", href: "/historic-restoration-brandon/" },
];

export default function HistoricRestorationBrandonPage() {
  return (
    <>
      <LocalBusinessSchema city="Brandon" service="Historic Restoration" />
      <ServiceSchema
        serviceName="Historic Restoration"
        serviceDescription="Expert historic restoration contractor serving Brandon, Florida. Citrus-era buildings, 1950s-1970s homes, agricultural heritage structures. Hillsborough County preservation expertise. Projects from $150K to $5M+."
        city="Brandon"
        minPrice="150000"
      />

      <ArticleSchema
        headline="Historic Restoration Brandon FL | Citrus Era & Mid-Century Homes | FCS"
        description="Expert historic restoration contractor in Brandon, Florida. Citrus-era buildings, 1950s-1970s homes, agricultural heritage structures. Hillsborough County preservation."
        datePublished="2024-06-01"
        dateModified="2025-01-18"
        slug="/historic-restoration-brandon/"
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems.slice(1)} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/historic-preservation/historic-preservation-large.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Brandon, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Historic Restoration in Brandon, FL
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists brings expert historic restoration to Brandon, preserving the community's citrus-era heritage, early commercial buildings, and the distinctive mid-century homes that define Tampa Bay's largest suburb.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              While Brandon may lack Tampa's formal historic districts, significant architectural heritage remains from its agricultural past and post-war suburban development. We restore these buildings with the same professional standards we apply to designated historic properties throughout Tampa Bay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule Project Consultation
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
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            <div className="flex items-center gap-2">
              <Home className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Mid-Century Specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Agricultural Heritage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Preserving Brandon's Architectural Heritage
              </h2>
              <p className="text-gray-600 mb-6">
                Brandon's history as a citrus and agricultural community, followed by rapid post-war suburban development, has left a unique architectural legacy. Unlike Tampa's formal historic districts, Brandon's heritage is found in scattered farmhouses, original downtown commercial buildings, and the extensive mid-century residential neighborhoods that transformed the area from farmland to Florida's model suburb.
              </p>
              <p className="text-gray-600 mb-6">
                The community's name honors John Brandon, a cotton farmer who arrived in the 1850s. Through the late 19th and early 20th centuries, Brandon became a center of citrus and strawberry production. Packing houses, farmhouses, and worker housing from this era represent significant local heritage. After World War II, Brandon experienced explosive suburban growth, with thousands of ranch homes, split-levels, and Florida vernacular houses built from the 1950s through 1970s.
              </p>
              <p className="text-gray-600 mb-8">
                Florida Construction Specialists brings the same professional restoration standards we apply to Tampa's designated historic districts to Brandon's older buildings. Whether restoring a citrus-era farmhouse, rehabilitating an original downtown commercial structure, or sensitively updating a 1960s ranch home, we respect original architecture while addressing contemporary needs.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Our Brandon Restoration Capabilities
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {serviceTypes.map((service) => (
                  <div key={service.title} className="border border-gray-200 rounded-lg p-5 hover:border-brand-green transition-colors">
                    <h4 className="font-bold text-brand-green-dark mb-2">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Brandon Historic Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RelatedServices city="Brandon" currentService="historic-restoration" />
              <NearbyLocations currentCity="Brandon" service="historic-restoration" serviceName="Historic Restoration" />

              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark rounded-lg p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Start Your Brandon Project</h3>
                <p className="text-gray-200 mb-4 text-sm">
                  Contact us for a project consultation. Historic restoration in Brandon starting at $150,000.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full bg-brand-gold text-brand-green-dark font-bold py-3 px-4 rounded-full hover:bg-brand-gold-light transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brandon Historic Resources Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Brandon's Historic Building Types
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Citrus-Era Agricultural Buildings</h3>
              <p className="text-gray-600 text-sm">
                Brandon's citrus and strawberry farming heritage left packing houses, farmhouses, barns, and worker housing throughout the area. These vernacular structures, many dating from 1890-1950, represent the community's agricultural foundations. While many have been lost to development, significant examples remain that merit preservation and adaptive reuse.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Original Downtown Commercial</h3>
              <p className="text-gray-600 text-sm">
                The area around Highway 60 and Parsons Avenue contains Brandon's oldest commercial structures, including early 20th-century storefronts and service buildings. These buildings served the agricultural community before suburban development and represent Brandon's commercial origins. Adaptive reuse can give these structures new life while preserving their character.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">1950s-1970s Suburban Homes</h3>
              <p className="text-gray-600 text-sm">
                Brandon's post-war development created thousands of ranch homes, split-levels, and Florida vernacular residences. These homes feature terrazzo floors, jalousie windows, decorative concrete blocks, carports, and distinctive low-slope rooflines. Now 50-70 years old, many qualify for historic consideration and benefit from restoration that preserves their mid-century character.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Early Florida Vernacular Homes</h3>
              <p className="text-gray-600 text-sm">
                Pre-war residential neighborhoods in older parts of Brandon contain Frame Vernacular, Craftsman, and early Florida-style homes from the 1920s-1940s. These homes adapted traditional styles to Florida's climate with wide porches, cross-ventilation, and raised foundations. Their handcrafted details and mature landscaping distinguish them from later development.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Community and Religious Structures</h3>
              <p className="text-gray-600 text-sm">
                Brandon's historic churches, schools, and community buildings anchor neighborhood identity and often represent the community's most significant architecture. These structures, from early 20th-century wood-frame churches to mid-century modern religious buildings, serve as community landmarks worthy of preservation and continued active use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Comparison Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Brandon Historic Restoration: Costs & Timelines
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-green-dark text-white">
                    <th className="text-left p-4 font-semibold">Project Type</th>
                    <th className="text-left p-4 font-semibold">Cost Range</th>
                    <th className="text-left p-4 font-semibold">Typical Timeline</th>
                    <th className="text-left p-4 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Mid-Century Home Restoration</td>
                    <td className="p-4">$150-300/SF</td>
                    <td className="p-4">8-14 months</td>
                    <td className="p-4">May qualify for National Register</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Exterior Restoration</td>
                    <td className="p-4">$40-100/SF (exterior)</td>
                    <td className="p-4">3-6 months</td>
                    <td className="p-4">Siding, windows, trim, roofing</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Agricultural Building Rehab</td>
                    <td className="p-4">$75-200/SF</td>
                    <td className="p-4">6-12 months</td>
                    <td className="p-4">Adaptive reuse opportunities</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Commercial Adaptive Reuse</td>
                    <td className="p-4">$125-250/SF</td>
                    <td className="p-4">8-14 months</td>
                    <td className="p-4">Tax credits available if eligible</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Structural Stabilization</td>
                    <td className="p-4">$50-150/SF</td>
                    <td className="p-4">3-6 months</td>
                    <td className="p-4">Foundation, framing, roof systems</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Costs vary based on building condition and scope. Brandon projects typically cost 15-25% less than comparable Tampa historic district work due to reduced regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Brandon vs Tampa Comparison */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Brandon vs. Tampa Historic District Restoration
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-green-dark text-white">
                    <th className="text-left p-4 font-semibold">Factor</th>
                    <th className="text-left p-4 font-semibold">Brandon</th>
                    <th className="text-left p-4 font-semibold">Tampa Historic Districts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Local Historic Review</td>
                    <td className="p-4">Not required (no HPC)</td>
                    <td className="p-4">Required for exterior work</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Permit Timeline</td>
                    <td className="p-4">4-6 weeks typical</td>
                    <td className="p-4">6-12 weeks with HPC review</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Tax Credit Availability</td>
                    <td className="p-4">Individual listing required</td>
                    <td className="p-4">Contributing structures eligible</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Material Requirements</td>
                    <td className="p-4">Owner preference (best practice)</td>
                    <td className="p-4">Period-appropriate required</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Window Replacement</td>
                    <td className="p-4">More flexibility allowed</td>
                    <td className="p-4">Restoration preferred</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Typical Project Cost</td>
                    <td className="p-4">15-25% lower</td>
                    <td className="p-4">Higher due to requirements</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Preservation Approach Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Our Approach to Brandon Restoration
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Scale className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Secretary of Interior Standards</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Even without mandatory historic review, we apply Secretary of Interior Standards to Brandon restoration projects. These ten principles guide best practices for preservation, ensuring restoration decisions protect a building's historic character. For projects seeking tax credits or National Register listing, standards compliance is required.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Documentation First</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  We thoroughly document Brandon buildings before restoration begins, photographing existing conditions, researching construction history, and identifying character-defining features. This documentation supports National Register applications, guides restoration decisions, and creates a permanent record of the property's evolution.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Hammer className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Preservation Craftsmanship</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Brandon's older buildings require craftsmanship not found in standard construction. Whether restoring terrazzo floors in a 1960s ranch, repairing wood-frame construction in a citrus-era farmhouse, or matching original windows in an early commercial building, we bring appropriate skills and materials to each project.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Adaptive Reuse Expertise</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Brandon's agricultural buildings and early commercial structures often find new life through adaptive reuse. Packing houses become event venues, farmhouses become restaurants, and commercial buildings house creative businesses. We design these conversions to celebrate historic character while meeting contemporary code requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Our Brandon Historic Restoration Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Historic Assessment & Documentation",
                  description: "We begin with thorough assessment of your Brandon property, documenting existing conditions, researching construction history, and identifying character-defining features. For properties potentially eligible for National Register listing, we evaluate significance and integrity. This foundation guides all subsequent restoration decisions."
                },
                {
                  step: "2",
                  title: "Restoration Planning",
                  description: "Based on assessment findings, we develop a restoration approach that addresses deterioration while preserving historic character. For tax credit projects, we prepare SHPO Part 2 applications. For all projects, we identify treatment priorities and develop specifications for appropriate materials and methods, balancing preservation with owner goals."
                },
                {
                  step: "3",
                  title: "Permitting & Approvals",
                  description: "We obtain necessary permits through Hillsborough County Building Services. While Brandon lacks HPC review, projects seeking tax credits require SHPO approval before construction. We coordinate all required approvals and maintain clear communication about requirements and timelines."
                },
                {
                  step: "4",
                  title: "Restoration Execution",
                  description: "Experienced project managers oversee restoration work with attention to preservation standards and quality. We coordinate craftspeople skilled in historic materials and methods, monitor material quality, and document work progress. Brandon's older buildings often reveal hidden conditions requiring adaptive problem-solving."
                },
                {
                  step: "5",
                  title: "Completion & Documentation",
                  description: "We complete all inspections and provide comprehensive documentation of completed work. For tax credit projects, we prepare SHPO Part 3 certification applications. For all projects, we provide final photographs, maintenance recommendations, and records that support the property's continued preservation."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FCS */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Brandon Chooses FCS for Historic Restoration
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                We never work as a subcontractor on Brandon projects. You get direct accountability, single-point contact, and our full commitment to your project's success from start to finish.
              </p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Tampa Bay Expertise</h3>
              <p className="text-gray-600">
                Our 20+ years restoring buildings throughout Tampa Bay gives us deep understanding of the region's construction history, materials, and methods, including Brandon's unique building stock.
              </p>
            </div>
            <div className="card text-center p-6">
              <FileCheck className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Tax Credit Knowledge</h3>
              <p className="text-gray-600">
                We help Brandon property owners pursue National Register listing and tax credits when appropriate, navigating SHPO applications and ensuring work meets certification requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema items={brandonFaqs} title="Historic Restoration in Brandon - Frequently Asked Questions" />

      {/* Internal Links Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Services & Locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Related Services in Brandon</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-brandon/" className="text-brand-green hover:underline">Commercial Construction Brandon</Link></li>
                <li><Link href="/insurance-restoration-brandon/" className="text-brand-green hover:underline">Insurance Restoration Brandon</Link></li>
                <li><Link href="/balcony-reconstruction-brandon/" className="text-brand-green hover:underline">Balcony Reconstruction Brandon</Link></li>
                <li><Link href="/multi-family-construction-brandon/" className="text-brand-green hover:underline">Multi-Family Construction Brandon</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Historic Restoration Nearby</h3>
              <ul className="space-y-2">
                <li><Link href="/historic-restoration-tampa/" className="text-brand-green hover:underline">Historic Restoration Tampa</Link></li>
                <li><Link href="/historic-restoration-lakeland/" className="text-brand-green hover:underline">Historic Restoration Lakeland</Link></li>
                <li><Link href="/historic-restoration-st-petersburg/" className="text-brand-green hover:underline">Historic Restoration St. Petersburg</Link></li>
                <li><Link href="/historic-restoration-clearwater/" className="text-brand-green hover:underline">Historic Restoration Clearwater</Link></li>
                <li><Link href="/historic-restoration-sarasota/" className="text-brand-green hover:underline">Historic Restoration Sarasota</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Learn More</h3>
              <ul className="space-y-2">
                <li><Link href="/historic-restoration/" className="text-brand-green hover:underline">Historic Restoration Services</Link></li>
                <li><Link href="/commercial/historic-restoration/" className="text-brand-green hover:underline">Commercial Historic Restoration</Link></li>
                <li><Link href="/about/" className="text-brand-green hover:underline">About FCS</Link></li>
                <li><Link href="/gallery/" className="text-brand-green hover:underline">Project Gallery</Link></li>
                <li><Link href="/contact/" className="text-brand-green hover:underline">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Start Your Brandon Historic Restoration Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. We bring professional preservation standards to Brandon's citrus-era heritage, mid-century homes, and historic commercial buildings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Consultation
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
    </>
  );
}
