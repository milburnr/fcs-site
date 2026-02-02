import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Historic Restoration Projects in Tampa | FCS Preservation Portfolio & Case Studies",
  description: "Explore FCS's award-winning historic restoration projects in Tampa. Case studies from Ybor City, Hyde Park, and downtown Tampa showcasing expert preservation of theatres, mansions, and commercial buildings using Secretary of Interior standards.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Historic Restoration Projects in Tampa", href: "/historic-restoration-projects-in-tampa/" },
];


const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/services/disaster-recovery/fire-damage/", label: "Fire Damage Restoration" },
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Restoration" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hurricane-ian/hurricane-ian-display.webp"
            alt="Hurricane damage restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Historic Restoration Projects in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Explore FCS's portfolio of award-winning historic restoration projects in Tampa. From Ybor City's historic theaters to Hyde Park's Victorian mansions, discover our expertise in preserving Tampa's architectural heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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

      {/* Portfolio Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-amber-600" />
                Award-Winning Historic Restoration Portfolio
              </h2>
              <p className="text-gray-700 mb-4">
                Florida Construction Specialists has completed over 150 historic restoration projects throughout Tampa's most significant historic districts. Our portfolio includes landmark theaters, Victorian mansions, Art Deco buildings, Mediterranean Revival structures, and industrial heritage sites that define Tampa's unique architectural character and cultural history.
              </p>
              <p className="text-gray-700 mb-4">
                Each project demonstrates our commitment to the Secretary of Interior's Standards for the Treatment of Historic Properties, incorporating authentic materials, traditional techniques, and meticulous attention to historical accuracy. Our restoration work has received recognition from preservation organizations and has contributed to the revitalization of Tampa's historic neighborhoods.
              </p>
              <p className="text-gray-700">
                From the ornate plasterwork of turn-of-the-century mansions to the streamlined facades of mid-century modern buildings, our team combines master craftsmanship with modern engineering to ensure these irreplaceable structures serve future generations while maintaining their historical integrity and architectural significance.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Ybor City Historic District Projects
            </h2>
            
            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Tampa Theatre Restoration (2019-2021)
            </h3>
            <p className="text-gray-600 mb-6">
              Our comprehensive restoration of Tampa Theatre's ornate interior represents one of the most significant historic preservation projects in Tampa's recent history. This 1926 atmospheric theater required extensive structural work, plaster restoration, decorative painting conservation, and mechanical systems upgrades while preserving John Eberson's original design vision and the theater's nationally recognized architectural significance.
            </p>
            <p className="text-gray-600 mb-6">
              The project involved painstaking restoration of the theater's elaborate plaster ceiling with its twinkling star field, hand-painted decorative elements, and intricate moldings throughout the auditorium. We worked with specialized conservators to clean and stabilize original murals while reproducing missing elements using traditional techniques and materials that match the original composition and appearance.
            </p>
            <p className="text-gray-600 mb-6">
              Structural improvements included seismic upgrades, foundation stabilization, and accessibility enhancements designed to be completely invisible to theater patrons while meeting modern safety standards. The project earned recognition from the Florida Trust for Historic Preservation and serves as a model for theater restoration throughout the Southeast.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Ybor City State Museum Complex Rehabilitation
            </h3>
            <p className="text-gray-600 mb-6">
              The rehabilitation of the former Ferlita Bakery building into the Ybor City Museum complex required careful preservation of the building's industrial heritage while adapting spaces for museum use. This 1896 structure represents Tampa's cigar industry boom period and required specialized techniques to preserve original brick masonry, timber framing, and industrial architectural features.
            </p>
            <p className="text-gray-600 mb-6">
              Our restoration work included tuckpointing using period-appropriate mortar mixes, timber frame stabilization using traditional joinery techniques, and window restoration using historically accurate glazing compounds and hardware. The museum's climate control systems were carefully integrated into the historic structure without compromising architectural integrity or visitor experience.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Historic Cigar Factory Adaptive Reuse
            </h3>
            <p className="text-gray-600 mb-6">
              Converting early 20th-century cigar factories into mixed-use developments requires balancing preservation requirements with modern functional needs. Our work on multiple Ybor City factory buildings has demonstrated successful approaches to maintaining historic character while creating viable contemporary spaces for residential, office, and retail use.
            </p>
            <p className="text-gray-600 mb-6">
              These projects typically involve structural reinforcement of timber and masonry construction, window restoration or sensitive replacement, mechanical system integration that respects historic spaces, and preservation of distinctive architectural features including sawtooth rooflines, clerestory windows, and industrial-scale interior volumes that define the buildings' character.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Hyde Park Historic Preservation Projects
            </h2>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Victorian Mansion Restoration on Bayshore Boulevard
            </h3>
            <p className="text-gray-600 mb-6">
              Our restoration of a prominent 1895 Queen Anne style mansion on Bayshore Boulevard exemplifies the comprehensive approach required for high-style Victorian architecture. This project required restoration of elaborate woodwork, decorative plaster, stained glass windows, and period-appropriate color schemes while integrating modern mechanical systems and kitchen/bathroom updates for contemporary living.
            </p>
            <p className="text-gray-600 mb-6">
              The mansion's distinctive turret required structural stabilization and roofing repairs using materials and techniques matching the original construction. Interior work included restoration of original hardwood floors, reproduction of missing decorative elements using historical evidence, and careful preservation of intact original features including marble mantels, etched glass panels, and ornate light fixtures.
            </p>
            <p className="text-gray-600 mb-6">
              Modern amenities were integrated through careful planning that concealed contemporary systems within historic spaces while maintaining period room configurations and architectural flow. The project received Tampa's Outstanding Historic Preservation Award and demonstrates successful approaches to making historic homes function for modern families while preserving their historic character.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Hyde Park Village Commercial Building Restoration
            </h3>
            <p className="text-gray-600 mb-6">
              The restoration of early commercial buildings in Hyde Park Village required addressing decades of inappropriate alterations while recovering original storefronts and architectural details. Our work involved extensive historical research, archaeological investigation to uncover original building configurations, and careful removal of non-historic additions to reveal intact historic fabric beneath.
            </p>
            <p className="text-gray-600 mb-6">
              Storefront reconstruction used historical photographs and physical evidence to guide accurate reproduction of original display windows, entrance configurations, and decorative elements. The project enhanced the district's historic character while creating attractive spaces for contemporary retail and restaurant uses that support the neighborhood's economic vitality.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Downtown Tampa Heritage Buildings
            </h2>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Franklin Street Historic Commercial District
            </h3>
            <p className="text-gray-600 mb-6">
              Our restoration work along Franklin Street has helped revitalize downtown Tampa's historic commercial core through careful rehabilitation of early 20th-century office and retail buildings. These projects demonstrate approaches to preserving historic facades while adapting interior spaces for modern office, residential, and retail uses that attract investment and support urban revitalization.
            </p>
            <p className="text-gray-600 mb-6">
              Typical restoration elements include terra cotta cleaning and repair, window restoration using period-appropriate materials, storefront reconstruction based on historical evidence, and mechanical system integration designed to preserve historic interior spaces. These projects contribute to downtown Tampa's growing reputation as a destination for businesses and residents seeking authentic historic character in urban environments.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Tampa Union Station Restoration Elements
            </h3>
            <p className="text-gray-600 mb-6">
              While not the lead contractor on the full station restoration, FCS contributed specialized historic masonry restoration services for Tampa Union Station's rehabilitation. Our work included terra cotta restoration, brick repointing using period-appropriate mortars, and stone conservation techniques that preserved the station's distinctive Mediterranean Revival architectural features while adapting the building for contemporary transportation and commercial use.
            </p>
            <p className="text-gray-600 mb-6">
              The project required coordination with multiple preservation specialists and strict adherence to National Park Service guidelines for projects involving Federal transportation funding. Our contribution demonstrates our capability to work within complex preservation projects requiring the highest professional standards and coordination with multiple stakeholders and oversight agencies.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              South Tampa Historic Properties
            </h2>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Mediterranean Revival Estate Restoration
            </h3>
            <p className="text-gray-600 mb-6">
              Our restoration of a 1925 Mediterranean Revival estate in South Tampa showcased techniques for preserving and replicating decorative tile work, cast stone elements, and iron work typical of this architectural style. The project required research into period construction techniques, specialized craftsmen capable of matching original materials and methods, and careful integration of modern systems within historic spaces.
            </p>
            <p className="text-gray-600 mb-6">
              Distinctive features included restoration of original Cuban tile roofing, repair and replication of decorative cast stone elements, conservation of original wrought iron work, and landscape restoration using period-appropriate plant materials and hardscape elements. The estate's pool and garden areas required archaeological investigation to ensure that restoration work preserved original design intentions while meeting contemporary safety and accessibility requirements.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Art Deco Apartment Building Rehabilitation
            </h3>
            <p className="text-gray-600 mb-6">
              The rehabilitation of a 1940s Art Deco apartment building required preservation of the building's streamlined facade and distinctive decorative elements while completely updating mechanical systems and apartment layouts for contemporary use. Our approach preserved character-defining features including curved corners, horizontal banding, glass block windows, and neon signage while creating modern living spaces.
            </p>
            <p className="text-gray-600 mb-6">
              Interior work involved reconfiguring original efficiency apartments into contemporary one and two-bedroom units while preserving original hardwood floors, built-in cabinetry, and bathroom tile work where historically significant. The project demonstrates successful approaches to adaptive reuse that maintain historic character while creating economically viable housing options in Tampa's competitive real estate market.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Specialized Restoration Techniques and Innovations
            </h2>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Advanced Diagnostic and Documentation Methods
            </h3>
            <p className="text-gray-600 mb-6">
              Our restoration projects employ advanced diagnostic techniques including infrared thermography to identify hidden structural issues, ground-penetrating radar for archaeological investigation, and 3D laser scanning for precise documentation of complex architectural elements. These technologies enable more accurate restoration planning while minimizing invasive investigation that could damage historic fabric.
            </p>
            <p className="text-gray-600 mb-6">
              Documentation standards include high-resolution photography, measured drawings using CAD and Building Information Modeling (BIM), and detailed material analysis using laboratory testing. This comprehensive documentation supports immediate restoration needs while creating permanent records that guide future maintenance and preservation planning for Tampa's historic building stock.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Sustainable Preservation Practices
            </h3>
            <p className="text-gray-600 mb-6">
              Our restoration approach emphasizes sustainability through material conservation, energy efficiency improvements that respect historic character, and construction practices that minimize environmental impact. We prioritize preservation and rehabilitation of existing materials, source replacement materials from sustainable suppliers, and design building system upgrades that reduce energy consumption while maintaining historic authenticity.
            </p>
            <p className="text-gray-600 mb-6">
              Energy efficiency improvements include window restoration with appropriate weatherization, insulation installation using vapor-permeable materials compatible with historic construction, and mechanical system design that provides contemporary comfort while respecting historic interior spaces and architectural character. These approaches demonstrate that historic preservation and environmental responsibility can be successfully integrated.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Project Management and Regulatory Compliance
            </h2>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Historic Tax Credit Project Management
            </h3>
            <p className="text-gray-600 mb-6">
              FCS has successfully managed historic tax credit projects totaling over $50 million in qualified rehabilitation expenditures, requiring coordination with preservation consultants, tax credit attorneys, and state and federal review agencies. Our project management approach ensures compliance with Historic Tax Credit requirements while maintaining project schedules and budgets essential for development feasibility.
            </p>
            <p className="text-gray-600 mb-6">
              Tax credit compliance requires detailed documentation of existing conditions, careful specification of preservation treatments, and systematic quality control throughout construction. Our experience includes successful completion of Part 2 applications, construction phase coordination with preservation requirements, and Part 3 completion documentation that enables tax credit certification and project closeout.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Regulatory Coordination and Permitting
            </h3>
            <p className="text-gray-600 mb-6">
              Historic preservation projects require coordination with multiple regulatory agencies including local historic preservation commissions, state historic preservation offices, and federal agencies when projects involve federal funding or tax credits. Our experience includes successful navigation of Section 106 review processes, Certificate of Appropriateness applications, and variance requests when necessary to accommodate preservation requirements.
            </p>
            <p className="text-gray-600 mb-6">
              Permitting for historic buildings often requires creative solutions to meet modern building codes while preserving historic character. Our approach involves early coordination with building officials, development of code equivalency proposals when appropriate, and design solutions that satisfy safety requirements while minimizing impact on historic materials and architectural features.
            </p>

            <div className="bg-brand-green-light/10 border border-brand-green rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">
                FCS Historic Restoration Project Statistics
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-brand-green mt-0.5 flex-shrink-0" />
                      <span><strong>150+ completed projects</strong> across Tampa's historic districts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-brand-green mt-0.5 flex-shrink-0" />
                      <span><strong>$50+ million</strong> in historic tax credit projects managed</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-brand-green mt-0.5 flex-shrink-0" />
                      <span><strong>25+ preservation awards</strong> from regional organizations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-brand-green mt-0.5 flex-shrink-0" />
                      <span><strong>100% compliance rate</strong> with Secretary of Interior Standards</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-brand-green mt-0.5 flex-shrink-0" />
                      <span><strong>Ybor City, Hyde Park, South Tampa</strong> district experience</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-brand-green mt-0.5 flex-shrink-0" />
                      <span><strong>Victorian, Art Deco, Mediterranean Revival</strong> specialization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-brand-green mt-0.5 flex-shrink-0" />
                      <span><strong>Theaters, mansions, commercial</strong> building expertise</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-brand-green mt-0.5 flex-shrink-0" />
                      <span><strong>Master craftsmen</strong> in traditional techniques</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

<section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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
