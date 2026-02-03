import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Clock, DollarSign, Building2, Shield, Zap, Recycle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Commercial Modular Construction Tampa | Prefab",
  description: "Tampa's leading commercial modular construction specialists. Faster timelines, controlled costs, quality prefab buildings for offices, healthcare, education, and more.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Top Commercial Modular Construction in Tampa", href: "/top-commercial-modular-construction-in-tampa/" },
];

const faqs = [
  {
    question: "What types of commercial buildings can be built using modular construction?",
    answer: "Modular construction works for many commercial building types: office buildings, medical and dental facilities, educational facilities, retail structures, hotels, multi-family residential, and industrial offices. The approach works best for buildings with repetitive floor plans or room layouts. Highly custom, unique designs may not benefit as much from modular methods."
  },
  {
    question: "How much faster is modular construction compared to traditional building?",
    answer: "Modular construction typically reduces overall project timelines by 30-50%. The key advantage is concurrent construction—site work proceeds while modules are fabricated, eliminating the sequential delays of traditional construction. A project that might take 12 months conventionally could be completed in 7-9 months with modular methods."
  },
  {
    question: "Is modular construction less expensive than traditional building?",
    answer: "Modular construction offers cost advantages through reduced labor costs (factory efficiency), shorter financing periods, faster time to revenue, and less weather-related delays. However, transportation and crane costs partially offset savings. Overall, modular projects typically cost 5-15% less than equivalent traditional construction when all factors are considered."
  },
  {
    question: "Do modular buildings meet Florida hurricane code requirements?",
    answer: "Absolutely. Modular buildings must meet the same Florida Building Code requirements as traditional construction, including hurricane resistance standards. In fact, modular construction often exceeds code requirements because modules must survive transportation stresses. Our modular projects are engineered specifically for Tampa Bay's wind zone and undergo the same permitting and inspection processes as traditional buildings."
  },
  {
    question: "What's the quality difference between modular and traditional construction?",
    answer: "Quality in modular construction is typically equal to or better than traditional methods. Factory construction provides climate-controlled environments (no rain damage during framing), better quality control and inspection processes, precision manufacturing with tighter tolerances, and consistent workmanship from trained factory crews. The key is working with experienced modular contractors who understand both fabrication and site integration."
  }
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/how-technology-is-revolutionizing-the-construction-process/", label: "Construction Technology" },
  { href: "/services/commercial/medical-construction/", label: "Medical Construction" },
  { href: "/contact/", label: "Discuss Modular Project" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Commercial modular construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Top Commercial Modular Construction in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Faster timelines, controlled costs, and quality construction. Florida Construction Specialists delivers commercial modular and prefabricated building solutions that meet Tampa Bay's demanding requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Explore Modular Options
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
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Commercial modular construction offers Tampa Bay businesses a compelling alternative to traditional building methods. By fabricating building components in controlled factory environments and assembling them on-site, modular construction delivers faster project completion, more predictable costs, and quality that often exceeds conventional construction. For the right projects, modular building represents the future of commercial construction.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists brings comprehensive modular construction expertise to Tampa Bay commercial projects. We help clients evaluate whether modular approaches suit their specific needs, manage the complete process from design through occupancy, and ensure that modular buildings meet all Florida Building Code requirements—including the stringent hurricane resistance standards essential in our market.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Advantages of Commercial Modular Construction
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Clock className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Faster Project Completion</h3>
                <p className="text-gray-600 mb-4">
                  Modular construction's greatest advantage is speed. While site work proceeds—foundations, utilities, site improvements—modules are simultaneously fabricated in the factory. This parallel construction process can reduce overall timelines by 30-50% compared to traditional sequential construction.
                </p>
                <p className="text-sm text-brand-green-dark font-semibold">30-50% faster than traditional construction</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <DollarSign className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Cost Predictability</h3>
                <p className="text-gray-600 mb-4">
                  Factory fabrication provides better cost control than field construction. Material quantities are precise, labor is more efficient, and weather delays are eliminated for the fabrication phase. Shorter project duration also reduces financing costs and accelerates time to revenue.
                </p>
                <p className="text-sm text-brand-green-dark font-semibold">5-15% typical cost savings over conventional</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Quality Control</h3>
                <p className="text-gray-600 mb-4">
                  Factory environments provide better quality control than construction sites. Climate-controlled facilities eliminate weather damage during construction. Trained crews work in optimal conditions with proper supervision. Inspection processes catch issues before modules leave the factory.
                </p>
                <p className="text-sm text-brand-green-dark font-semibold">Consistent quality from controlled environment</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Recycle className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Sustainability Benefits</h3>
                <p className="text-gray-600 mb-4">
                  Modular construction generates 30-50% less waste than traditional building. Factory processes optimize material usage, and scraps can be recycled efficiently. Reduced site activity means less environmental disruption. Tight construction tolerances improve building energy efficiency.
                </p>
                <p className="text-sm text-brand-green-dark font-semibold">30-50% reduction in construction waste</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Modular Construction Applications
            </h2>

            <p className="text-gray-600 mb-6">
              Modular construction works best for buildings with repetitive elements—similar rooms, floor plates, or units. The following commercial applications commonly benefit from modular approaches:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Building2 className="w-10 h-10 text-brand-green flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Office Buildings</h3>
                    <p className="text-gray-600">Multi-story office buildings with repetitive floor plates are excellent modular candidates. Private offices, conference rooms, and common areas can all be prefabricated. The speed advantage helps businesses occupy new space faster, generating revenue sooner.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Zap className="w-10 h-10 text-brand-green flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Healthcare Facilities</h3>
                    <p className="text-gray-600">Medical offices, clinics, and healthcare facilities benefit from modular construction's precision. Exam rooms, procedure rooms, and patient areas can be prefabricated with all mechanical, electrical, and plumbing systems installed. Clean factory conditions support healthcare construction requirements.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Building2 className="w-10 h-10 text-brand-green flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Educational Buildings</h3>
                    <p className="text-gray-600">Schools, training centers, and educational facilities often feature repetitive classroom layouts ideal for modular construction. The ability to construct during summer breaks—when site work proceeds while modules are built—helps minimize disruption to academic schedules.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Building2 className="w-10 h-10 text-brand-green flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Hotels & Multi-Family</h3>
                    <p className="text-gray-600">Hotel guest rooms and apartment units are highly repetitive, making them excellent modular applications. Complete bathroom pods, fully finished guest rooms, and apartment units can be prefabricated and stacked on-site. This approach has delivered some of the most dramatic timeline reductions.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Building2 className="w-10 h-10 text-brand-green flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Industrial & Warehouse Offices</h3>
                    <p className="text-gray-600">Industrial facilities often need office space within larger warehouse structures. Modular construction can deliver complete office buildouts—from single rooms to multi-story structures—while warehouse operations continue. Quick installation minimizes business disruption.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Table */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Modular Construction Cost Comparison
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Building Type</th>
                    <th className="px-6 py-4 text-left">Traditional Cost/SF</th>
                    <th className="px-6 py-4 text-left">Modular Cost/SF</th>
                    <th className="px-6 py-4 text-left">Time Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Office Building</td>
                    <td className="px-6 py-4">$200 - $350</td>
                    <td className="px-6 py-4 text-brand-green font-medium">$175 - $300</td>
                    <td className="px-6 py-4 text-gray-600">30-40%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Medical Office</td>
                    <td className="px-6 py-4">$300 - $500</td>
                    <td className="px-6 py-4 text-brand-green font-medium">$275 - $450</td>
                    <td className="px-6 py-4 text-gray-600">25-35%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Educational</td>
                    <td className="px-6 py-4">$250 - $400</td>
                    <td className="px-6 py-4 text-brand-green font-medium">$220 - $350</td>
                    <td className="px-6 py-4 text-gray-600">35-45%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Hotel (Per Room)</td>
                    <td className="px-6 py-4">$85K - $150K</td>
                    <td className="px-6 py-4 text-brand-green font-medium">$75K - $130K</td>
                    <td className="px-6 py-4 text-gray-600">40-50%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Multi-Family (Per Unit)</td>
                    <td className="px-6 py-4">$125K - $200K</td>
                    <td className="px-6 py-4 text-brand-green font-medium">$110K - $175K</td>
                    <td className="px-6 py-4 text-gray-600">35-45%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Costs reflect 2024 Tampa Bay market estimates. Actual costs depend on project specifics, design complexity, and site conditions. Time savings assume well-coordinated modular execution.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Modular Construction in Florida: Hurricane Considerations
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h3 className="font-bold text-blue-800 mb-2">Meeting Florida Building Code</h3>
              <p className="text-blue-700 mb-4">
                Modular buildings in Florida must meet the same stringent building code requirements as traditional construction—including hurricane resistance standards. All our modular projects are engineered specifically for Tampa Bay's wind zone and undergo the same permitting, inspection, and certification processes as conventional buildings.
              </p>
              <p className="text-blue-700">
                In fact, modular construction often provides superior hurricane performance. Modules must withstand transportation stresses—being lifted, transported, and placed by crane—that can exceed forces experienced in hurricanes. The structural integrity required for transportation translates to robust buildings.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Modular Construction Types and Technologies
            </h2>
            
            <p className="text-gray-600 mb-6">
              Modular construction encompasses several approaches, each optimized for different commercial applications. Understanding these options helps select the right approach for your Tampa Bay project.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Volumetric Modular Construction</h3>
                <p className="text-gray-600 mb-3">
                  Complete three-dimensional modules fabricated in factories and transported to sites. These modules include structural elements, MEP systems, interior finishes, and sometimes even furniture. Office suites, hotel rooms, and apartment units are common volumetric applications.
                </p>
                <p className="text-gray-600">
                  <strong>Best for:</strong> Repetitive spaces with standard ceiling heights. Maximum factory completion means minimal on-site work but requires careful transportation planning for Tampa Bay's bridge and highway constraints.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Panelized Construction</h3>
                <p className="text-gray-600 mb-3">
                  Wall, floor, and roof panels fabricated in factories and assembled on-site. This approach offers more design flexibility than volumetric modules while maintaining quality control and speed advantages. Panels can accommodate custom sizes and configurations.
                </p>
                <p className="text-gray-600">
                  <strong>Best for:</strong> Custom commercial buildings where design flexibility is important but speed and quality advantages are desired. Common in educational and office projects with unique architectural requirements.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Bathroom Pods and MEP Modules</h3>
                <p className="text-gray-600 mb-3">
                  Complete bathroom assemblies or mechanical rooms fabricated off-site and installed in otherwise traditional buildings. These modules handle the most complex and time-consuming building systems, leaving simpler work for on-site completion.
                </p>
                <p className="text-gray-600">
                  <strong>Best for:</strong> Hotels, healthcare facilities, and multi-family buildings where plumbing-intensive spaces are repeated throughout the project. Particularly valuable when speed is important but full modular construction isn't suitable.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Hybrid Modular/Conventional</h3>
                <p className="text-gray-600 mb-3">
                  Combines modular and traditional construction within single projects. Common areas, lobbies, and unique spaces use conventional construction while repetitive areas use modular methods. This approach optimizes each area for its specific requirements.
                </p>
                <p className="text-gray-600">
                  <strong>Best for:</strong> Complex commercial projects with both repetitive and unique spaces. Hotels with custom lobbies but standard guest floors, or office buildings with modular tenant spaces and conventional common areas.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Design Considerations for Tampa Bay Modular Projects
            </h2>
            
            <p className="text-gray-600 mb-6">
              Successful modular construction in Tampa Bay requires understanding both manufacturing constraints and local conditions. Design teams must consider transportation limitations, hurricane resistance requirements, and assembly logistics from the earliest design stages.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-4">Transportation Constraints</h3>
            <p className="text-gray-600 mb-6">
              Florida's transportation infrastructure limits modular sizes. Standard highway transport allows modules up to 16 feet wide and 13 feet 6 inches tall, though oversized permits can accommodate larger modules with route restrictions. Tampa Bay's numerous bridges create additional height constraints that affect module design. Our team evaluates transportation routes early in design to optimize module dimensions.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-4">Hurricane Resistance Engineering</h3>
            <p className="text-gray-600 mb-6">
              Tampa Bay's 140-150 mph wind zone requirements affect modular construction significantly. Modules must be engineered for both transportation stresses and final hurricane resistance. Inter-module connections require special attention—these joints often represent the most critical structural elements. We work with structural engineers experienced in both modular construction and Florida hurricane requirements to ensure code compliance.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-4">Climate Control During Construction</h3>
            <p className="text-gray-600 mb-6">
              Tampa's humidity and heat create unique challenges during modular assembly. Modules arrive with interior finishes that must be protected from weather during construction. Our assembly processes include temporary weather protection and climate control systems that protect completed modules while integration work proceeds. This attention to environmental control prevents moisture damage and finish deterioration common in Florida construction.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Financial Benefits of Tampa Bay Modular Construction
            </h2>
            
            <p className="text-gray-600 mb-6">
              While initial modular construction costs may appear similar to traditional methods, the total project economics often strongly favor modular approaches. Understanding these financial advantages helps evaluate modular options appropriately.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-4">Reduced Financing Costs</h3>
            <p className="text-gray-600 mb-6">
              Shorter project timelines reduce construction financing duration significantly. A project that takes 12 months conventionally but only 8 months with modular construction saves 4 months of construction loan interest. On large projects, these savings can amount to hundreds of thousands of dollars. Additionally, faster completion means earlier revenue generation for income-producing properties.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-4">Weather-Related Savings</h3>
            <p className="text-gray-600 mb-6">
              Florida's weather creates significant risks for traditional construction—thunderstorms, hurricanes, and intense heat all affect project schedules and costs. Modular construction's factory-based fabrication eliminates weather delays for 60-80% of construction work. This reliability is particularly valuable in Tampa Bay, where weather delays can extend projects by months during active hurricane seasons.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-4">Labor Efficiency Advantages</h3>
            <p className="text-gray-600 mb-6">
              Tampa Bay's construction labor shortage drives up wage costs and extends project timelines. Factory construction provides more efficient labor utilization—skilled workers work in optimal conditions without weather delays, travel time between tasks, or setup/teardown inefficiencies common on construction sites. This efficiency translates to lower labor costs per square foot of completed construction.
            </p>

            <div className="my-8 p-6 bg-green-50 rounded-xl border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-2">Case Study: Tampa Office Building</h3>
              <p className="text-green-700 mb-3">
                Recent Tampa Bay office project comparison: 40,000 sq ft, 3-story building
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-green-800">Traditional Construction:</p>
                  <p className="text-green-700">Timeline: 14 months<br />
                  Cost: $9.8M ($245/sf)<br />
                  Weather delays: 3 months<br />
                  Change orders: $380K</p>
                </div>
                <div>
                  <p className="font-semibold text-green-800">Modular Construction:</p>
                  <p className="text-green-700">Timeline: 9 months<br />
                  Cost: $9.2M ($230/sf)<br />
                  Weather delays: 3 weeks<br />
                  Change orders: $95K</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Quality Control in Modular Manufacturing
            </h2>
            
            <p className="text-gray-600 mb-6">
              One of modular construction's greatest advantages is the enhanced quality control possible in factory environments. Tampa Bay projects benefit from this improved quality, which often exceeds what's achievable with traditional site-built construction.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-4">Factory Environment Benefits</h3>
            <p className="text-gray-600 mb-6">
              Climate-controlled manufacturing facilities eliminate the weather-related quality issues that plague Florida construction sites. Workers can maintain consistent quality without dealing with rain, heat, or humidity. Materials aren't exposed to weather during installation, preventing moisture damage, warping, and corrosion that can occur with site construction. Precision manufacturing equipment ensures dimensional accuracy that's difficult to achieve in field conditions.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-4">Multi-Stage Inspection Processes</h3>
            <p className="text-gray-600 mb-6">
              Modular manufacturing includes inspection at multiple stages: raw material inspection, in-process quality checks, pre-delivery final inspection, and on-site final inspection after assembly. This multi-layered approach catches problems early when corrections are less expensive. Third-party inspectors often verify compliance with building codes and specifications before modules leave the factory.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-4">Consistent Workmanship</h3>
            <p className="text-gray-600 mb-6">
              Factory crews work on similar tasks repeatedly, developing expertise and efficiency that's difficult to achieve with site construction where crews move between different projects and building types. This consistency results in higher quality finishes, better fit and finish, and fewer callbacks for defect correction. Quality metrics from modular projects typically show lower defect rates than comparable site-built construction.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Sustainability and Environmental Benefits
            </h2>
            
            <p className="text-gray-600 mb-6">
              Modular construction aligns with Tampa Bay's growing emphasis on sustainable building practices. The approach offers environmental benefits that extend beyond the construction process itself.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-4">Waste Reduction</h3>
            <p className="text-gray-600 mb-6">
              Factory construction generates 30-50% less waste than site construction. Material cutting is optimized using computerized systems, scraps from one module can be used in others, and waste materials are consolidated for efficient recycling. On Tampa Bay construction sites, waste disposal costs are significant—reducing waste volumes provides both environmental and economic benefits.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-4">Energy Efficiency</h3>
            <p className="text-gray-600 mb-6">
              Tight construction tolerances achievable in factory conditions result in better building envelope performance. Reduced air infiltration lowers HVAC loads, improving energy efficiency throughout the building's life. For Tampa Bay's cooling-dominated climate, these envelope improvements can reduce energy costs by 10-20% compared to typical site-built construction.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-4">Site Disturbance Reduction</h3>
            <p className="text-gray-600 mb-6">
              Shorter on-site construction periods reduce environmental disruption. Less truck traffic, reduced construction equipment operation, and shorter construction schedules minimize impacts on surrounding properties and communities. This is particularly valuable for projects in sensitive areas or where minimizing disruption to existing operations is important.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Challenges and Limitations of Modular Construction
            </h2>
            
            <p className="text-gray-600 mb-6">
              While modular construction offers significant advantages, it's not suitable for every project. Understanding limitations helps make informed decisions about when modular approaches make sense.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-4">Design Constraints</h3>
            <p className="text-gray-600 mb-6">
              Modular construction works best with repetitive elements and standardized dimensions. Highly custom, architecturally complex buildings may not benefit from modular approaches. Transportation limitations restrict module sizes, which can constrain design options. Long-span spaces or unusual geometric forms may be difficult to achieve with modular methods.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-4">Transportation and Logistical Challenges</h3>
            <p className="text-gray-600 mb-6">
              Tampa Bay's bridges, urban congestion, and utility lines create transportation challenges for large modules. Route planning must consider clearances, weight limits, and traffic restrictions. Crane access for module placement requires careful site planning—some urban sites may have limited crane access. Scheduling must coordinate module delivery with site readiness, creating logistical complexity.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-4">Market Perception Issues</h3>
            <p className="text-gray-600 mb-6">
              Some clients associate modular construction with temporary or lower-quality buildings, despite evidence to the contrary. Financial institutions may require additional documentation for modular projects. Appraisers may lack experience valuing modular buildings. These perception issues are gradually changing as more high-quality modular projects demonstrate the approach's capabilities.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Modular Construction Process
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-1">Feasibility Assessment</h3>
                  <p className="text-gray-600">We evaluate whether modular construction suits your project. Not every building benefits from modular methods—highly custom designs may be better suited to traditional construction. We provide honest recommendations based on your specific needs, site conditions, and project requirements.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-1">Design & Engineering</h3>
                  <p className="text-gray-600">Modular projects require design for manufacturing—considering module sizes, transportation constraints, and assembly requirements. We work with architects and manufacturers to optimize designs for modular execution while meeting all functional, aesthetic, and code requirements including Florida's hurricane resistance standards.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-1">Permitting & Approvals</h3>
                  <p className="text-gray-600">We navigate Tampa Bay permitting requirements for modular construction. This includes both factory inspection of modules and site permits for foundations and assembly. Our experience with local jurisdictions helps streamline approvals and avoid common delays associated with modular permitting.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-1">Concurrent Construction</h3>
                  <p className="text-gray-600">While site work proceeds—foundations, utilities, site improvements—modules are fabricated in the factory. This parallel approach is where modular construction achieves its timeline advantages. We coordinate both tracks carefully to ensure modules arrive precisely when the site is ready for assembly.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-1">Module Setting & Integration</h3>
                  <p className="text-gray-600">Modules are delivered and set by crane onto prepared foundations. Our crews then integrate modules—connecting structural elements, completing MEP connections, and finishing intermodular joints. This phase transforms individual modules into a cohesive building that meets all code requirements.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">6</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-1">Completion & Inspection</h3>
                  <p className="text-gray-600">Final site work, landscaping, and finishing complete the project. All required inspections verify code compliance and quality standards. The result is a finished building indistinguishable from traditional construction—delivered faster and often at lower total cost with superior quality control.</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mb-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-brand-green-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Explore Modular Construction for Your Project</h3>
              <p className="mb-6 text-gray-200">
                Contact Florida Construction Specialists to discuss whether modular construction makes sense for your commercial project. We'll evaluate your needs, provide realistic comparisons to traditional methods, and help you make an informed decision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Discuss Your Project
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Related Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Tampa Bay's Modular Construction Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists delivers commercial modular solutions with faster timelines, controlled costs, and quality that meets Florida's demanding requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Consultation
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
