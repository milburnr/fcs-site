import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, Building2, Shield, Award, HardHat, Users, FileCheck, Home, AlertTriangle } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/condo-remediation-ruskin/' },
  title: "Condo Remediation Ruskin FL | Sun City Center SB4-D | FCS",
  description: "Condo remediation and SB4-D compliance in Ruskin FL by Florida Construction Specialists — headquartered locally. Sun City Center milestone inspections, Apollo Beach coastal condos, structural repairs. Licensed CBC.",
};

const faqs = [
  {
    question: "How does SB 4-D affect Sun City Center condominiums specifically?",
    answer: "Sun City Center has one of the largest concentrations of condominium buildings in South Hillsborough County, and many were built during the community's rapid growth in the 1970s through 1990s. Buildings three stories or taller that are 30 years old or older must complete milestone structural inspections. Because Sun City Center is more than three miles from the coast, the 30-year threshold applies rather than the stricter 25-year coastal requirement. However, many Sun City Center buildings have already passed this age, making compliance urgent. FCS helps associations navigate the inspection, engineering assessment, and remediation process from our Ruskin headquarters just minutes away."
  },
  {
    question: "Are Apollo Beach condos subject to the stricter coastal SB 4-D timeline?",
    answer: "Many Apollo Beach properties fall within the three-mile coastal zone defined by SB 4-D, which triggers the 25-year milestone inspection requirement rather than the 30-year inland standard. Properties in Bahia Beach, Little Harbor, and along the Apollo Beach waterfront should verify their coastal zone status. The coastal location also means Apollo Beach condos face accelerated deterioration from salt air exposure, often resulting in more extensive remediation needs when inspections are completed. FCS has direct experience with coastal construction requirements for Tampa Bay waterfront properties."
  },
  {
    question: "Why does FCS being headquartered in Ruskin matter for our condo remediation project?",
    answer: "Our Ruskin headquarters at 822 Bayview Dr means your condo association gets faster response times than any other licensed general contractor in the region. We can have an engineer on-site within 24 to 48 hours for urgent situations. Our proximity means lower mobilization costs, consistent superintendent oversight with daily site visits, and genuine accountability as your neighbors. For Sun City Center associations, we are literally minutes away. This local presence translates to smoother projects, faster issue resolution, and a contractor genuinely invested in the community."
  },
  {
    question: "What structural issues are most common in South Hillsborough condominiums?",
    answer: "Sun City Center's inland buildings commonly show concrete carbonation, rebar corrosion from humidity exposure, waterproofing breakdown on balconies and walkways, and roof system failures on older buildings. Apollo Beach and waterfront properties face accelerated salt-induced corrosion, more severe concrete spalling, and chloride contamination of reinforcing steel due to the Tampa Bay marine environment. Throughout the area, parking structures show expansion joint failures and traffic surface deterioration. FCS has addressed every common failure mode found in South Hillsborough building stock."
  },
  {
    question: "How does FCS work with retirement community condo associations?",
    answer: "We have decades of experience working with Sun City Center's 55-plus community associations and understand the unique dynamics. Our approach emphasizes clear communication with residents who may be directly impacted by construction disruption, sensitivity to fixed-income budgeting when structuring special assessments, phased project approaches that minimize disruption to daily life, and accessibility considerations during active construction. We present information clearly at board meetings and offer flexible phasing options that have worked well for similar retirement community associations."
  },
  {
    question: "What is the typical cost range for condo remediation in the Ruskin area?",
    answer: "Costs vary significantly based on building size, condition, and deficiency severity. Milestone inspections typically run three thousand to fifteen thousand dollars for Phase 1, with Phase 2 adding fifteen thousand to seventy-five thousand or more if triggered. SIRS studies range from five thousand to thirty thousand dollars. Remediation construction depends on findings: concrete restoration runs fifteen to fifty dollars per square foot, balcony reconstruction three hundred to six hundred per square foot, and comprehensive rehabilitation fifty to one hundred fifty per square foot of affected area. FCS provides detailed estimates after engineering assessment."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Services", href: "/commercial/" },
  { name: "Condo Remediation", href: "/commercial/condo-remediation/" },
  { name: "Ruskin", href: "/condo-remediation-ruskin/" },
];

export default function CondoRemediationRuskinPage() {
  return (
    <>
      <LocalBusinessSchema city="Ruskin" service="Condo Remediation & SB4-D Compliance" />
      <ServiceSchema
        serviceName="Condo Remediation & SB4-D Compliance"
        serviceDescription="SB4-D compliance and condo remediation contractor headquartered in Ruskin, Florida. Sun City Center milestone inspections, Apollo Beach coastal condo repairs, structural remediation. Licensed CBC1262722."
        city="Ruskin"
        minPrice="100000"
        serviceCategories={["Concrete Restoration", "Rebar Repair", "Structural Waterproofing", "Milestone Inspections", "Common Area Renovation"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/tampa-condo-balcony-restoration/tampa-condo-balcony-restoration-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <Home className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">FCS Headquarters — Ruskin, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Condo Remediation and SB 4-D Compliance in Ruskin
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Florida Construction Specialists is headquartered right here in Ruskin — your local experts for SB 4-D compliance, milestone inspections, and structural remediation serving Sun City Center's retirement community condos, Apollo Beach waterfront properties, and all of South Hillsborough County.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Home className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Ruskin Headquartered</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <AlertTriangle className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">SB 4-D Compliance</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">License {BUSINESS_INFO.licenseNumber}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta text-center">
                Request Compliance Assessment
              </Link>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-secondary flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ruskin Market Context */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              South Hillsborough's Condo Compliance Challenge
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Sun City Center is one of Florida's largest concentrations of condominium buildings, and many were built during the community's rapid expansion in the 1970s through 1990s. These buildings — now 30 to 50 years old — face mandatory milestone structural inspections under Florida's SB 4-D legislation. For associations with fixed-income retiree populations, the compliance process requires a contractor who understands both the structural engineering and the human dynamics of senior community construction.
              </p>
              <p className="mb-6">
                Apollo Beach adds a coastal dimension to South Hillsborough's condo remediation needs. Waterfront properties within three miles of Tampa Bay face the stricter 25-year inspection threshold and accelerated deterioration from salt air exposure. Properties in Bahia Beach, Little Harbor, and along the Apollo Beach waterfront often discover more extensive structural damage during inspections due to the marine environment's aggressive effect on concrete and reinforcing steel.
              </p>
              <p>
                Florida Construction Specialists is headquartered at 822 Bayview Dr in Ruskin, making us the closest licensed general contractor to both Sun City Center and Apollo Beach. All condo remediation permitting goes through <a href="https://www.hillsboroughcounty.org/en/residents/property-owners-and-renters/building-and-renovations/permits-and-inspections" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">Hillsborough County Building Services</a>, and our long-standing relationships with county inspectors help keep compliance projects moving efficiently through the approval process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/fcs-tiles-on-balcony/fcs-tiles-on-balcony-display.webp"
        alt="Condo balcony remediation work in South Hillsborough County"
        title="Protecting South County's Condominium Communities"
        subtitle="SB 4-D compliance and structural remediation for Sun City Center and Apollo Beach"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Condo Remediation Services for South Hillsborough
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            From milestone inspection coordination to complete structural remediation, we handle every phase of SB 4-D compliance for condo associations across the SouthShore area.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileCheck,
                title: "Milestone Inspection Support",
                description: "Coordination of Phase 1 and Phase 2 structural inspections with licensed engineers for Sun City Center, Apollo Beach, and South Hillsborough condominiums at or past their inspection deadlines."
              },
              {
                icon: Shield,
                title: "SIRS Compliance",
                description: "Structural Integrity Reserve Study support including component assessment, repair cost projections, and funding strategy development for condo associations preparing for mandatory reserve requirements under SB 4-D."
              },
              {
                icon: HardHat,
                title: "Structural Remediation",
                description: "Repair of all structural deficiencies identified in milestone inspections — concrete restoration, rebar treatment, post-tension cable repair, and load-bearing element rehabilitation with engineering certification."
              },
              {
                icon: Building2,
                title: "Balcony Reconstruction",
                description: "Complete balcony restoration including structural repair, waterproofing systems, railing replacement, and deck coatings. Sun City Center condos and Apollo Beach waterfront buildings are primary candidates for this work."
              },
              {
                icon: Award,
                title: "Concrete Restoration",
                description: "Spall repair, crack injection, carbonation treatment, and protective coatings using materials engineered for South Hillsborough's conditions — coastal salt exposure at Apollo Beach and humidity-driven deterioration at Sun City Center."
              },
              {
                icon: Users,
                title: "HOA and Board Coordination",
                description: "Board presentations, phased project planning, and documentation for special assessment funding. We understand the governance structures and budget sensitivities of retirement community associations throughout Sun City Center."
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

      {/* FAQ Section */}
      <FAQWithSchema
        items={faqs}
        title="Ruskin Condo Remediation FAQ"
        description="Common questions about condo remediation and SB 4-D compliance in Ruskin, Sun City Center, and Apollo Beach."
      />

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <RelatedServices city="Ruskin" currentService="condo-remediation" />
            <NearbyLocations currentCity="Ruskin" service="condo-remediation" serviceName="Condo Remediation" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Your Local SB 4-D Compliance Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists at our Ruskin headquarters for a compliance assessment. We are minutes from Sun City Center and Apollo Beach, and we bring four decades of structural construction experience to every condo remediation project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Compliance Assessment
            </Link>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all">
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-300">
              <span>License {BUSINESS_INFO.licenseNumber}</span>
              <span>Ruskin Headquartered</span>
              <span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
              <span>Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
