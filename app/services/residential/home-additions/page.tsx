import Link from "next/link";
import { Metadata } from "next";
import { Phone, ArrowRight, CheckCircle, Home, Shield, Award, Expand, PlusCircle, Layers } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";

import { InternalLinks } from "@/components/InternalLinks";
export const metadata: Metadata = {
  title: "Home Additions Tampa | Room Additions & Expansions | FCS",
  description: "Home addition construction in Tampa Bay. Room additions, second stories, master suites, in-law suites. Seamless integration with existing homes. $250K+ projects. Call (813) 420-7561.",
  keywords: ["home additions tampa", "room addition contractor florida", "second story addition", "home expansion tampa bay", "in-law suite construction"],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Residential Construction", href: "/services/residential/" },
  { name: "Home Additions", href: "/services/residential/home-additions/" },
];

const additionTypes = [
  {
    title: "Room Additions",
    description: "Expand your home with additional bedrooms, family rooms, home offices, or bonus spaces. Ground-level additions that integrate with your existing floor plan.",
  },
  {
    title: "Second Story Additions",
    description: "Add vertical space when lot constraints limit horizontal expansion. Complete second floors or partial additions over existing first-floor spaces.",
  },
  {
    title: "Master Suite Additions",
    description: "Create the primary suite you've always wanted—spacious bedroom, luxury bathroom, walk-in closets, and sitting areas. Ground-level or second-floor options.",
  },
  {
    title: "In-Law & Guest Suites",
    description: "Separate living quarters for extended family or guests. Complete with bedroom, bathroom, kitchenette, and private entrance options.",
  },
  {
    title: "Sunrooms & Florida Rooms",
    description: "Bright, comfortable spaces that bring the outdoors in. Screened, glass-enclosed, or climate-controlled options for year-round enjoyment.",
  },
  {
    title: "Garage Additions",
    description: "Add garage space for vehicles, workshops, or storage. Attached or detached options with living space above if desired.",
  },
];

const faqs = [
  {
    question: "How do you match an addition to my existing home?",
    answer: "Matching additions to existing homes requires attention to multiple elements: roof pitch and style, exterior materials (siding, brick, stucco), window proportions and styles, interior trim profiles, flooring transitions, and overall architectural vocabulary. We assess your existing home thoroughly and specify materials that integrate seamlessly. The goal is an addition that looks like it was always part of the home.",
  },
  {
    question: "Can you add a second story to my single-story home?",
    answer: "Yes, but second story additions require structural evaluation. We assess your existing foundation and first-floor structure to determine if they can support additional floors. Many homes can accommodate second stories with reinforcement; some may require more extensive structural work. We provide honest assessments during pre-construction—not every home is a good candidate for vertical expansion.",
  },
  {
    question: "Do I need to move out during a home addition?",
    answer: "Most home additions can be completed while you remain in your home, though some disruption is unavoidable. We isolate construction areas, maintain dust barriers, and schedule noisy work during reasonable hours. The connection phase—when new and existing spaces are joined—typically causes the most disruption. For extensive projects or second-story additions, temporary relocation may be more comfortable.",
  },
  {
    question: "What permits are required for home additions?",
    answer: "Home additions require building permits from your local building department (city or county). Permits cover structural, electrical, plumbing, mechanical, and sometimes architectural review. For homes in historic districts or HOA communities, additional approvals may be required. We manage all permitting and coordinate necessary approvals before construction begins.",
  },
  {
    question: "How long does a home addition take?",
    answer: "Addition timelines vary by scope and complexity. Simple room additions: 3-4 months. Master suite additions: 4-6 months. Second story additions: 6-9 months. In-law suites with kitchens: 4-6 months. Weather, permit timing, and material availability all affect schedules. We provide detailed timelines during pre-construction.",
  },
  {
    question: "What about my existing HVAC, electrical, and plumbing?",
    answer: "Additions require extending or upgrading home systems. We evaluate existing HVAC capacity—additions may require new zones or equipment. Electrical panels may need upgrades for additional loads. Plumbing extensions are planned for bathroom and kitchen additions. We assess all systems during pre-construction and include necessary upgrades in project scope.",
  },
  {
    question: "Will an addition affect my property taxes?",
    answer: "Yes, additions that increase your home's square footage typically increase assessed value and property taxes. The specific impact depends on your local assessment practices and the value the addition brings. While taxes will increase, well-designed additions also increase your home's market value and livability—benefits that typically outweigh the tax impact.",
  },
  {
    question: "Can you build an in-law suite with a separate entrance?",
    answer: "Yes, in-law suites and accessory dwelling units (ADUs) can include separate entrances, full kitchens, and complete living accommodations. Local zoning determines what's permitted—some areas restrict ADUs or have specific requirements for size, parking, or owner occupancy. We research local regulations and design additions that comply with your jurisdiction's requirements.",
  },
  {
    question: "What is the cost range for home additions?",
    answer: "Home addition costs in Tampa Bay typically range from $200-400 per square foot, depending on complexity, finishes, and site conditions. Simple room additions: $200-250/SF. Master suites with luxury baths: $275-350/SF. Second story additions: $300-400/SF. In-law suites with kitchens: $275-350/SF. We provide detailed estimates during pre-construction.",
  },
  {
    question: "Do you handle design for home additions?",
    answer: "We work with architects and designers on addition projects, either engaging design professionals for you or collaborating with your selected architect. Design is critical for additions—ensuring the new space functions well, matches existing architecture, and meets code requirements. We provide construction input during design to avoid costly surprises.",
  },
];

export default function HomeAdditionsPage() {
  return (
    <>
      <LocalBusinessSchema service="Home Additions" />
      <ServiceSchema
        serviceName="Home Addition Construction"
        serviceDescription="Home addition construction in Tampa Bay. Room additions, second stories, master suites, in-law suites. Seamless integration with existing homes. Projects starting at $250K+."
        minPrice="250000"
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
              <Expand className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Home Expansions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Home Additions in Tampa Bay
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists expands your home without the disruption of moving. Whether you need another bedroom, a master suite retreat, or space for extended family, we build additions that integrate seamlessly with your existing home—matching architecture, materials, and quality.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              Room additions, second stories, in-law suites, and more. Seamless integration with existing homes. Projects starting at $250K. Prime contractor accountability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Your Addition Project
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
              <Layers className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Seamless Integration</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">$10M+ Bonding</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Home className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">All Addition Types</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div >
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Expand Your Home, Not Your Address
            </h2>
            <p className="text-gray-600 mb-6">
              When your home no longer fits your life—whether due to a growing family, aging parents, work-from-home needs, or simply wanting more space—you face a choice: move or improve. For families who love their neighborhood, their schools, and their community, a well-designed addition often makes more sense than relocating.
            </p>
            <p className="text-gray-600 mb-6">
              At Florida Construction Specialists, we build home additions that feel like they've always been part of your house. We match rooflines, materials, and architectural details so the addition integrates seamlessly. Inside, we ensure smooth transitions between existing and new spaces—matching flooring, trim, and finish levels.
            </p>
            <p className="text-gray-600 mb-8">
              Our addition experience spans simple room additions to complex second-story expansions. We've added master suites, in-law apartments, home offices, and family rooms throughout Tampa Bay—always with attention to how the addition serves your life and enhances your home's value.
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

      {/* Addition Types */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Types of Home Additions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionTypes.map((type) => (
              <div key={type.title} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-brand-green-dark text-lg mb-3">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
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
              Our Addition Process
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Planning & Design</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Existing home assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Design development with architect</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Systems evaluation (HVAC, electrical)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Permitting and approvals</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Construction</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Site preparation and foundation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Framing and exterior matching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Systems integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Interior finishes and connection</span>
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
            Home Addition FAQs
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
                <li><Link href="/services/residential/kitchen-remodeling/" className="text-brand-green hover:underline">Kitchen Remodeling</Link></li>
                <li><Link href="/services/residential/waterfront-homes/" className="text-brand-green hover:underline">Waterfront Homes</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Commercial</h3>
              <ul className="space-y-2">
                <li><Link href="/services/commercial/commercial-additions/" className="text-brand-green hover:underline">Commercial Additions</Link></li>
                <li><Link href="/services/commercial/" className="text-brand-green hover:underline">Commercial Construction</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">By Location</h3>
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
            Expand Your Home
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss adding space to your home. We build additions that integrate seamlessly and serve your life for years to come.
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
