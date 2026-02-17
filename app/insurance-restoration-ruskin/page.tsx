import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, Building2, Shield, Award, HardHat, FileCheck, Home, Briefcase } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/insurance-restoration-ruskin/' },
  title: "Insurance Restoration Ruskin FL | Claims, Large Loss | FCS",
  description: "Insurance restoration in Ruskin FL by Florida Construction Specialists — headquartered locally. Large loss claims, Sun City Center property restoration, Apollo Beach waterfront damage. Licensed CBC, direct carrier billing.",
};

const faqs = [
  {
    question: "What advantage does FCS's Ruskin headquarters provide for insurance restoration projects?",
    answer: "Being headquartered at 822 Bayview Dr in Ruskin means faster initial response for damage assessment, lower mobilization costs, and consistent daily oversight throughout the restoration process. When an insurance claim is filed, the speed of initial documentation directly affects claim outcomes. Our local presence means we can begin damage assessment and documentation within hours of notification rather than scheduling a trip from across the bay. For Sun City Center and Apollo Beach properties, we are literally minutes away."
  },
  {
    question: "What size insurance restoration projects does FCS handle in South Hillsborough County?",
    answer: "Florida Construction Specialists specializes in large loss insurance restoration ranging from two hundred fifty thousand to fifty million dollars. We handle the complex, multi-trade restoration projects that require experienced general contracting, in-house engineering assessment, and the bonding capacity that smaller restoration contractors lack. This includes major hurricane damage to commercial properties, multi-building condominium restoration in Sun City Center, waterfront property reconstruction in Apollo Beach, and industrial facility restoration along the I-75 and US 41 corridors."
  },
  {
    question: "How does FCS work with insurance carriers on Ruskin area claims?",
    answer: "Our principal's combined construction and insurance industry experience gives us a unique perspective that benefits property owners. We provide Xactimate estimates in the format carriers require, comprehensive damage documentation including moisture mapping and structural assessment reports, and professional communication with adjusters throughout the claims process. We work with all major carriers active in South Hillsborough including Citizens Property Insurance, Universal Insurance, Heritage, and national carriers."
  },
  {
    question: "Does FCS handle insurance restoration for Sun City Center retirement community properties?",
    answer: "Sun City Center's condominium associations and residential properties represent a significant portion of insurance restoration work in South Hillsborough County. Storm damage to the community's aging building stock often involves both the association's master policy and individual unit owner policies, requiring careful coordination between multiple carriers. We understand these coverage structures and work with both association boards and individual owners to coordinate comprehensive restoration."
  },
  {
    question: "What happens when insurance restoration reveals code upgrade requirements?",
    answer: "When restoration work triggers building code upgrades under Florida's substantial improvement rule, we identify all required upgrades during initial assessment so they can be included in the insurance claim. Hillsborough County requires that buildings damaged beyond fifty percent of their pre-damage value be brought to current code. Many insurance policies include ordinance and law coverage that reimburses code upgrade costs. We document these requirements clearly so property owners can maximize their coverage for these additional expenses."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Insurance Restoration", href: "/insurance/" },
  { name: "Ruskin", href: "/insurance-restoration-ruskin/" },
];

export default function InsuranceRestorationRuskinPage() {
  return (
    <>
      <LocalBusinessSchema city="Ruskin" service="Insurance Restoration" />
      <ServiceSchema
        serviceName="Insurance Restoration"
        serviceDescription="Large loss insurance restoration contractor headquartered in Ruskin, Florida. Hurricane, fire, flood claims for Sun City Center, Apollo Beach, South Hillsborough County. Licensed CBC1262722, direct carrier billing."
        city="Ruskin"
        minPrice="250000"
        serviceCategories={["Large Loss Restoration", "Hurricane Claims", "Flood Damage Claims", "Fire Damage Claims", "Commercial Property Claims"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/tampa-hurricane-damage-restoration/tampa-hurricane-damage-restoration-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <Home className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">FCS Headquarters — Ruskin, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Insurance Restoration in Ruskin, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Florida Construction Specialists is headquartered in Ruskin and specializes in large loss insurance restoration — the complex, high-value claims that require experienced general contracting, in-house engineering, and direct carrier coordination. From hurricane damage in Sun City Center to waterfront property claims in Apollo Beach, we manage the entire restoration process from initial documentation through final closeout.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Home className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Ruskin Headquartered</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Direct Carrier Billing</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">License {BUSINESS_INFO.licenseNumber}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta text-center">
                Request a Claims Consultation
              </Link>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-secondary flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Context */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Large Loss Insurance Restoration from Our Home Base
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Insurance restoration in South Hillsborough County demands a contractor who understands both the construction and the claims process. Ruskin, Apollo Beach, and Sun City Center properties face hurricane wind damage, storm surge flooding along Tampa Bay, and the chronic moisture issues that affect buildings throughout the Gulf Coast. When these events produce insurance claims, the quality of initial documentation, the accuracy of cost estimates, and the professionalism of carrier communication directly affect how much of the loss is covered.
              </p>
              <p className="mb-6">
                Florida Construction Specialists brings a distinctive combination to insurance restoration work: our principal's background spans both the construction and insurance industries, giving us insight into how carriers evaluate claims, what documentation they need, and how to present legitimate damage in the format that facilitates efficient processing. We provide Xactimate estimates, engineering assessments, moisture mapping, and the comprehensive documentation packages that support claims from initial filing through final payment.
              </p>
              <p>
                Our Ruskin headquarters means we begin the documentation process faster than competitors traveling from Tampa or Sarasota. For Sun City Center's retirement community properties, where storm damage often involves both master association policies and individual unit owner coverage, our local presence and experience with these complex multi-party claims is particularly valuable. All permitting goes through <a href="https://www.hillsboroughcounty.org/en/residents/property-owners-and-renters/building-and-renovations/permits-and-inspections" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">Hillsborough County Building Services</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/florida-hurricane-storm/florida-hurricane-storm-display.webp"
        alt="Insurance restoration after storm damage in South Hillsborough County"
        title="Professional Insurance Restoration for South County"
        subtitle="Large loss claims management, carrier coordination, and complete property restoration"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Insurance Restoration Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            From initial damage assessment to final carrier closeout, we manage every phase of the insurance restoration process for South Hillsborough County property owners.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileCheck, title: "Claims Documentation", description: "Xactimate estimates, comprehensive damage photography and videography, moisture mapping reports, structural engineering assessments, and all supporting documentation in the format carriers require for efficient claims processing." },
              { icon: Shield, title: "Carrier Coordination", description: "Direct professional communication with adjusters from all major carriers active in South Hillsborough County. We manage supplemental claims, coordinate field inspections, and handle the documentation that drives claims toward fair resolution." },
              { icon: HardHat, title: "Hurricane Damage Restoration", description: "Complete restoration from roof systems to interior finishes for wind and water damage. Apollo Beach waterfront properties face additional storm surge requirements including flood zone compliance and marine-grade material specifications." },
              { icon: Building2, title: "Multi-Building Claims", description: "Sun City Center condominium associations often face multi-building damage events involving complex claims across master policies and individual unit coverage. We coordinate large-scale restoration with experience in multi-party insurance environments." },
              { icon: Briefcase, title: "Commercial Property Claims", description: "Insurance restoration for commercial properties along US 41, the I-75 corridor, and Sun City Center commercial areas. We minimize business interruption while maximizing insurance recovery for commercial policyholders." },
              { icon: Award, title: "Code Upgrade Documentation", description: "When restoration triggers Florida's substantial improvement rule, we identify all required code upgrades and document them for ordinance and law coverage claims — recovering significant additional insurance proceeds that would otherwise be left on the table." }
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

      <FAQWithSchema items={faqs} title="Ruskin Insurance Restoration FAQ" description="Common questions about insurance restoration and large loss claims in Ruskin, Sun City Center, and Apollo Beach." />

      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <RelatedServices city="Ruskin" currentService="insurance-restoration" />
            <NearbyLocations currentCity="Ruskin" service="insurance-restoration" serviceName="Insurance Restoration" />
          </div>
        </div>
      </section>

      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Discuss Your Insurance Claim with Local Experts</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Contact Florida Construction Specialists at our Ruskin headquarters to discuss your insurance restoration project. We bring construction expertise, insurance industry knowledge, and local accountability to every claim we handle.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">Request a Claims Consultation</Link>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"><Phone className="w-5 h-5 mr-2" />Call {BUSINESS_INFO.phone}</a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-300">
              <span>License {BUSINESS_INFO.licenseNumber}</span><span>Ruskin Headquartered</span><span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span><span>Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
