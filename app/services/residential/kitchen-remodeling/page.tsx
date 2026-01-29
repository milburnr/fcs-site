import Link from "next/link";
import { Metadata } from "next";
import { Phone, ArrowRight, CheckCircle, Home, Shield, Award, ChefHat, Utensils, Layers } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";

import { InternalLinks } from "@/components/InternalLinks";
export const metadata: Metadata = {
  title: "Luxury Kitchen Remodeling Tampa | High-End Kitchen Renovation | FCS",
  description: "Luxury kitchen remodeling in Tampa Bay. Custom cabinetry, premium appliances, designer finishes. Complete kitchen renovations for discerning homeowners. $150K+ projects. Call (813) 420-7561.",
  keywords: ["luxury kitchen remodeling tampa", "high-end kitchen renovation", "custom kitchen construction", "kitchen contractor tampa bay", "designer kitchen remodel"],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Residential Construction", href: "/services/residential/" },
  { name: "Kitchen Remodeling", href: "/services/residential/kitchen-remodeling/" },
];

const features = [
  {
    title: "Custom Cabinetry",
    description: "Handcrafted cabinets built to your specifications. Inset doors, furniture-grade finishes, specialized storage, and quality that lasts generations.",
  },
  {
    title: "Premium Appliances",
    description: "Coordination with high-end appliance packages—Sub-Zero, Wolf, Miele, Thermador. Proper infrastructure for professional-grade cooking equipment.",
  },
  {
    title: "Natural Stone & Surfaces",
    description: "Quartzite, marble, granite, and specialty stone countertops. Full-height backsplashes, waterfall edges, and precision fabrication.",
  },
  {
    title: "Lighting Design",
    description: "Layered lighting with task, ambient, and accent elements. Under-cabinet illumination, pendant fixtures, and sophisticated controls.",
  },
  {
    title: "Layout Optimization",
    description: "Functional designs that enhance cooking workflow. Islands, prep areas, beverage centers, and zones for entertaining and family gathering.",
  },
  {
    title: "Hidden Technology",
    description: "Integrated charging stations, hidden outlets, TV lifts, smart appliance connectivity, and technology that enhances without cluttering.",
  },
];

const faqs = [
  {
    question: "What makes a luxury kitchen remodel different from a standard renovation?",
    answer: "Luxury kitchen remodeling involves premium materials, custom craftsmanship, and attention to details that standard renovations don't include: custom-built cabinetry (vs. stock), professional-grade appliances, natural stone surfaces, designer fixtures and hardware, specialized lighting design, and construction quality that matches the materials. The difference is visible in every detail and felt in daily use.",
  },
  {
    question: "Do you work with kitchen designers?",
    answer: "Yes, we collaborate with kitchen designers and can recommend experienced professionals if you don't have one. Design is critical for luxury kitchens—optimizing workflow, selecting complementary materials, and creating a cohesive aesthetic. We provide construction input during design to ensure your vision is buildable and offer value engineering when appropriate.",
  },
  {
    question: "How long does a luxury kitchen remodel take?",
    answer: "Comprehensive luxury kitchen remodels typically require 4-6 months for construction, plus 2-4 months for design and cabinet lead times. Custom cabinetry requires 8-12 weeks for fabrication after approval. We phase construction to minimize the time you're without a functional kitchen, but expect 6-10 weeks of active construction for major remodels.",
  },
  {
    question: "Can I stay in my home during a kitchen remodel?",
    answer: "Yes, though the kitchen will be non-functional during portions of the project. We set up temporary kitchen areas with microwave, refrigerator, and basic cooking capability. Dust containment systems protect the rest of your home. For extensive remodels, some homeowners prefer to travel during the most disruptive phases.",
  },
  {
    question: "What is the typical investment for a luxury kitchen remodel?",
    answer: "Luxury kitchen remodels in Tampa Bay typically range from $150,000 to $400,000 or more, depending on size, cabinet quality, appliances, and material selections. Custom cabinetry alone may represent $50,000-150,000. Professional-grade appliance packages add $30,000-80,000. Premium countertops run $15,000-40,000. We develop detailed budgets during pre-construction.",
  },
  {
    question: "Do you handle structural changes for kitchen remodels?",
    answer: "Yes, we frequently open walls, add or move islands, expand kitchens into adjacent spaces, and raise ceilings. Structural modifications require engineering and permits, which we manage. We're experienced in reconfiguring homes to create the open, light-filled kitchens that contemporary living demands.",
  },
  {
    question: "How do you coordinate cabinet and appliance installation?",
    answer: "Cabinet installation requires precise planning with appliance packages—especially built-in refrigeration, professional ranges, and integrated dishwashers. We work directly with cabinet makers and appliance suppliers to ensure specifications match, delivery timing aligns, and installation proceeds smoothly. This coordination is critical for custom work.",
  },
  {
    question: "What countertop materials do you recommend?",
    answer: "Material selection depends on aesthetics, durability, and use: quartzite offers natural beauty with exceptional durability; marble provides classic elegance but requires more care; quartz offers consistency and low maintenance; granite remains a durable option with natural variation. We help clients understand trade-offs and make informed selections.",
  },
  {
    question: "Do you provide warranties on kitchen remodels?",
    answer: "We provide one-year construction warranties covering our work. Appliances carry manufacturer warranties (typically 1-2 years, with extended options). Countertop fabricators provide installation warranties. Custom cabinetry has varying warranty terms depending on the maker. We ensure you understand coverage for all components.",
  },
  {
    question: "What areas do you serve for kitchen remodeling?",
    answer: "We provide luxury kitchen remodeling throughout Tampa Bay including Tampa, St. Petersburg, Clearwater, Sarasota, and surrounding communities. Our kitchen projects have included historic homes in Hyde Park, waterfront estates on Davis Islands, and luxury properties throughout Pinellas and Hillsborough counties.",
  },
];

export default function KitchenRemodelingPage() {
  return (
    <>
      <LocalBusinessSchema service="Kitchen Remodeling" />
      <ServiceSchema
        serviceName="Luxury Kitchen Remodeling"
        serviceDescription="Luxury kitchen remodeling in Tampa Bay. Custom cabinetry, premium appliances, designer finishes. Complete kitchen renovations for discerning homeowners. Projects starting at $150K+."
        minPrice="150000"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems.slice(1)} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/luxury-custom-homes.jpg')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <ChefHat className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Luxury Kitchen Specialist</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Luxury Kitchen Remodeling in Tampa Bay
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists creates extraordinary kitchens for discerning homeowners. From custom cabinetry to professional-grade appliances, from natural stone surfaces to designer lighting—we craft kitchens that elevate both daily cooking and memorable entertaining.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              Custom cabinetry, premium appliances, designer finishes. Complete transformations for luxury homes. Projects starting at $150K+. Prime contractor accountability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Your Dream Kitchen
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
              <Utensils className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Custom Cabinetry</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Premium Materials</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">20+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div >
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Kitchens for How You Live
            </h2>
            <p className="text-gray-600 mb-6">
              The kitchen is the heart of your home—where meals are prepared, families gather, and memories are made. A luxury kitchen renovation transforms not just the space but how you experience your home. Whether you're an avid cook who demands professional-grade performance or an entertainer who wants guests gathered around an expansive island, we create kitchens designed for your life.
            </p>
            <p className="text-gray-600 mb-6">
              At Florida Construction Specialists, we approach luxury kitchen remodeling with the same attention we bring to our largest projects. Every cabinet joint, every stone seam, every fixture placement matters. We work with talented designers, skilled craftspeople, and premium suppliers to deliver kitchens that satisfy both aesthetically and functionally.
            </p>
            <p className="text-gray-600 mb-8">
              Our kitchen experience spans historic home renovations requiring period sensitivity to contemporary builds demanding cutting-edge design. We understand how to work in occupied homes, how to phase construction for minimal disruption, and how to coordinate complex installations involving multiple trades and suppliers.
            </p>

            <Link
              href="/services/residential/"
              className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Back to Residential Construction Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Luxury Kitchen Elements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-brand-green-dark text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <div >
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Our Kitchen Remodeling Process
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Design & Planning</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Kitchen design consultation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Material and appliance selection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Custom cabinet design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Detailed budgeting</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Construction</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Careful demolition and protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Structural modifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Precision installation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Final details and reveal</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Luxury Kitchen Remodeling FAQs
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Residential Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services/residential/" className="text-brand-green hover:underline">Residential Construction</Link></li>
                <li><Link href="/services/residential/home-additions/" className="text-brand-green hover:underline">Home Additions</Link></li>
                <li><Link href="/services/residential/waterfront-homes/" className="text-brand-green hover:underline">Waterfront Homes</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Historic</h3>
              <ul className="space-y-2">
                <li><Link href="/services/historic-restoration/" className="text-brand-green hover:underline">Historic Restoration</Link></li>
                <li><Link href="/historic-restoration-tampa/" className="text-brand-green hover:underline">Tampa Historic Districts</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Locations</h3>
              <ul className="space-y-2">
                <li><Link href="/locations/tampa-fl/" className="text-brand-green hover:underline">Tampa</Link></li>
                <li><Link href="/locations/st-petersburg-fl/" className="text-brand-green hover:underline">St. Petersburg</Link></li>
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
            Create Your Dream Kitchen
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your luxury kitchen remodel. We craft extraordinary kitchens for discerning homeowners throughout Tampa Bay.
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

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            links={[{"href":"/services/residential/","label":"Residential Construction Services"},{"href":"/luxury-custom-homes/","label":"Luxury Custom Homes"},{"href":"/balcony-reconstruction/","label":"Balcony Reconstruction"},{"href":"/exterior-waterproofing/","label":"Exterior Waterproofing"},{"href":"/services/residential/waterfront-homes/","label":"Waterfront Home Construction"}]}
            title="Related Resources"
            
          />
        </div>
      </section>

    </>
  );
}
