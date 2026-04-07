import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, Building2, Shield, Award, HardHat, FileCheck, Home, BookOpen } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/historic-restoration-ruskin/' },
  title: "Historic Restoration Ruskin FL | Agricultural Heritage",
  description: "Historic restoration in Ruskin FL by Florida Construction Specialists — headquartered locally. Agricultural heritage structures.",
  openGraph: {
    title: "Historic Restoration Ruskin FL | Agricultural Heritage",
    description: "Historic restoration in Ruskin FL by Florida Construction Specialists — headquartered locally. Agricultural heritage structures.",
    url: "https://floridaconstructionspecialists.com/historic-restoration-ruskin/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "What kinds of historic structures exist in the Ruskin area?",
    answer: "Ruskin's historic building inventory reflects its agricultural heritage and mid-century development. The community was founded in 1910 as a cooperative agricultural colony, and several structures from that early era survive along the US 41 corridor and near the original town center. Sun City Center, developed primarily in the 1960s through 1990s, contains mid-century modern community buildings, original clubhouses, and institutional structures that are reaching ages where preservation becomes important. Apollo Beach has waterfront structures from its early development as a planned community in the 1950s and 1960s."
  },
  {
    question: "Does FCS have experience with agricultural heritage building restoration?",
    answer: "Ruskin's identity is rooted in tomato farming and agricultural commerce, and several structures from that era remain in use or are candidates for restoration. These buildings present specific challenges: wood frame construction exposed to decades of Gulf Coast humidity, foundations on former agricultural land, roofing systems designed for a different era of building codes, and materials that may contain asbestos or lead paint requiring specialized handling. Our in-house engineering team assesses structural conditions and develops restoration approaches that preserve historic character while meeting current building code requirements."
  },
  {
    question: "How does historic restoration work in an unincorporated area like Ruskin?",
    answer: "Ruskin is unincorporated Hillsborough County, so historic restoration permitting goes through Hillsborough County rather than a municipal historic preservation board. The county's Historic Resources Review process applies to properties listed on or eligible for the National Register of Historic Places. For properties not on the Register, standard Hillsborough County building permits apply, though we still follow preservation best practices. Our Ruskin headquarters gives us direct experience with county permitting processes for restoration work in unincorporated areas."
  },
  {
    question: "Can FCS restore Sun City Center's original community buildings?",
    answer: "Sun City Center's original community buildings, clubhouses, and institutional structures from the 1960s and 1970s are reaching ages where significant restoration or renovation becomes necessary. These projects require balancing modern building code compliance, accessibility requirements, and energy efficiency upgrades with preservation of the architectural character that defines the community. We work with community associations and management companies to develop restoration plans that honor the original design intent while delivering modern functionality and safety."
  },
  {
    question: "What is the difference between historic restoration and renovation in the Ruskin area?",
    answer: "Historic restoration aims to return a building to a specific period of its history, preserving original materials and architectural features wherever possible. Renovation updates a building for modern use without specific regard to historical accuracy. In the Ruskin area, most projects fall somewhere between these extremes — preserving the agricultural heritage character of an older US 41 building while upgrading electrical, plumbing, and structural systems to current code. FCS has the expertise for both approaches and helps property owners determine the right balance for their specific building and goals."
  },
  {
    question: "How does FCS's Ruskin headquarters benefit historic restoration projects in South Hillsborough?",
    answer: "Our headquarters at 822 Bayview Dr in Ruskin means we are intimately familiar with the area's historic building stock, the Hillsborough County permitting requirements for restoration work, and the local environmental conditions that affect preservation decisions. Historic restoration projects often require close daily oversight — monitoring material conditions, making real-time decisions about preservation versus replacement, and coordinating with specialty subcontractors. Our local presence ensures consistent superintendent involvement without the overhead of commuting from distant offices."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Historic Restoration", href: "/historic-restoration/" },
  { name: "Ruskin", href: "/historic-restoration-ruskin/" },
];

export default function HistoricRestorationRuskinPage() {
  return (
    <>
      <LocalBusinessSchema city="Ruskin" service="Historic Restoration" />
      <ServiceSchema serviceName="Historic Restoration" serviceDescription="Historic restoration contractor headquartered in Ruskin, Florida. Agricultural heritage structures, Sun City Center mid-century buildings, sensitive preservation. Licensed CBC1262722." city="Ruskin" minPrice="100000" serviceCategories={["Heritage Building Restoration", "Mid-Century Renovation", "Structural Preservation", "Adaptive Reuse", "Community Building Restoration"]} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/historic-preservation/historic-preservation-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6"><Home className="w-4 h-4 text-brand-gold" /><span className="text-brand-gold font-semibold">FCS Headquarters — Ruskin, Florida</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">Historic Restoration in Ruskin, Florida</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">Florida Construction Specialists is headquartered in Ruskin and restores historic and heritage structures throughout the SouthShore area. From Ruskin's agricultural-era buildings along US 41 to Sun City Center's mid-century community structures, we preserve the architectural character that defines South Hillsborough County while bringing buildings to modern safety and performance standards.</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"><Home className="w-4 h-4 text-brand-gold" /><span className="text-white text-sm font-medium">Ruskin Headquartered</span></div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"><Award className="w-4 h-4 text-brand-gold" /><span className="text-white text-sm font-medium">License {BUSINESS_INFO.licenseNumber}</span></div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"><Building2 className="w-4 h-4 text-brand-gold" /><span className="text-white text-sm font-medium">{BUSINESS_INFO.projectsCompleted}+ Projects</span></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta text-center">Schedule Restoration Consultation</Link>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-secondary flex items-center justify-center gap-2"><Phone className="w-5 h-5" />{BUSINESS_INFO.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom"><div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">Preserving Ruskin's Agricultural Heritage and Mid-Century Character</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl mb-6">Ruskin was founded in 1910 as a cooperative agricultural colony by Dr. George McA. Miller, and the community's identity remains rooted in its farming heritage — particularly the tomato industry that defined the area for decades. While Ruskin is not a historic district on the scale of Ybor City or downtown St. Petersburg, it contains structures worth preserving: early twentieth-century commercial buildings along US 41, agricultural processing facilities, the original Ruskin community buildings, and the infrastructure of what was once one of Florida's most productive agricultural communities.</p>
            <p className="mb-6">Sun City Center adds a different layer to South Hillsborough's preservation needs. Developed beginning in the 1960s, the community's original clubhouses, recreational buildings, and institutional structures represent mid-century modern architecture that is increasingly recognized as historically significant. As these buildings reach 50 to 60 years of age, they require restoration that addresses structural aging, code compliance, and accessibility while preserving the design character that defines the community.</p>
            <p>As the only prime general contractor headquartered in this part of Hillsborough County, Florida Construction Specialists brings both local knowledge and construction expertise to preservation projects. All permitting goes through <a href="https://www.hillsboroughcounty.org/en/residents/property-owners-and-renters/building-and-renovations/permits-and-inspections" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">Hillsborough County Building Services</a>, and we navigate the county's historic resources review process when applicable.</p>
          </div>
        </div></div>
      </section>

      <ContentParallax src="/images/historic-preservation-home/historic-preservation-home-display.webp" alt="Historic building restoration in South Hillsborough County" title="Preserving South County's Architectural Heritage" subtitle="Agricultural heritage structures, mid-century community buildings, and sensitive adaptive reuse" overlayOpacity={0.55} />

      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">Historic Restoration Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">From agricultural-era buildings to mid-century community structures, we provide sensitive restoration that preserves character while delivering modern performance.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Agricultural Heritage Structures", description: "Restoration of early twentieth-century commercial buildings, agricultural processing facilities, and community structures that reflect Ruskin's farming heritage. We preserve original materials and architectural details while addressing structural deterioration and code compliance." },
              { icon: Building2, title: "Mid-Century Community Buildings", description: "Sun City Center's original clubhouses, recreational facilities, and institutional buildings from the 1960s and 1970s. We restore these mid-century structures with attention to their architectural character while upgrading mechanical, electrical, and accessibility systems." },
              { icon: HardHat, title: "Structural Assessment and Repair", description: "In-house engineering assessment of historic building structural conditions, with repair approaches that preserve original structural systems wherever possible. Wood frame, masonry, and early concrete construction each require specialized knowledge and techniques." },
              { icon: Shield, title: "Adaptive Reuse", description: "Converting historic buildings to new uses while preserving their architectural character. Former agricultural buildings, early commercial structures, and community buildings can find new life as offices, retail, restaurants, or cultural spaces with sensitive renovation." },
              { icon: FileCheck, title: "Code Compliance Integration", description: "Bringing historic buildings to current Florida Building Code compliance without destroying their character. We work with Hillsborough County to develop code compliance strategies that respect the building's historic integrity while ensuring occupant safety." },
              { icon: Award, title: "Environmental Remediation", description: "Safe handling and removal of asbestos, lead paint, and other hazardous materials commonly found in historic buildings. We coordinate environmental remediation with restoration work to minimize project duration and protect building integrity during the process." }
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-brand-green-bg flex items-center justify-center mb-4"><service.icon className="w-7 h-7 text-brand-green-dark" /></div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQWithSchema items={faqs} title="Ruskin Historic Restoration FAQ" description="Common questions about historic restoration in Ruskin, Sun City Center, and South Hillsborough County." />

      <RelatedServiceLocations currentCity="Ruskin" currentService="historic-restoration" currentServiceName="Historic Restoration" />

      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Preserve South County's Architectural Heritage</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Contact Florida Construction Specialists at our Ruskin headquarters to discuss your historic restoration project. We bring local knowledge, in-house engineering, and four decades of construction experience to every preservation project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">Schedule Restoration Consultation</Link>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"><Phone className="w-5 h-5 mr-2" />Call {BUSINESS_INFO.phone}</a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20"><div className="flex flex-wrap gap-6 justify-center text-sm text-gray-300"><span>License {BUSINESS_INFO.licenseNumber}</span><span>Ruskin Headquartered</span><span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span><span>Prime Contractor Only</span></div></div>
        </div>
      </section>
    </>
  );
}
