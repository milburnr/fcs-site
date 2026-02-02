import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Historic Restoration Workshops and Training",
  description: "Professional development and training opportunities for historic restoration in Tampa. Workshops on preservation techniques, tax credits, and traditional craftsmanship.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Historic Restoration Workshops and Training", href: "/tampa-historic-restoration-workshops-and-training/" },
];

const internalLinks = [
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
  { href: "/services/historic-restoration/shpo-compliance/", label: "SHPO Compliance" },
  { href: "/services/historic-restoration/historic-tax-credits/", label: "Historic Tax Credits" },
  { href: "/services/historic-restoration/material-sourcing/", label: "Historic Material Sourcing" },
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
            src="/images/historic-preservation/historic-preservation-display.webp"
            alt="Historic restoration training"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa Historic Restoration Workshops and Training
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Professional development opportunities for building owners, contractors, and preservation professionals seeking to master historic restoration principles and practices.
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

      {/* Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <p className="text-gray-600 mb-6">
              Quality historic restoration requires specialized knowledge that general construction training doesn't provide. From understanding the Secretary of the Interior's Standards to mastering traditional craft techniques, preservation professionals need ongoing education to maintain competency in this demanding field. Tampa and the broader Florida region offer various training opportunities for those seeking to develop or enhance historic restoration expertise.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists invests in continuous professional development for our team, recognizing that excellence in historic restoration demands current knowledge of preservation standards, emerging technologies, and traditional techniques. We also support industry education by sharing our expertise with building owners, fellow contractors, and preservation advocates throughout Tampa Bay.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Understanding Preservation Principles and Standards
            </h2>
            <p className="text-gray-600 mb-6">
              The Secretary of the Interior's Standards for the Treatment of Historic Properties provide the foundation for all federally-assisted preservation work and guide best practices throughout the industry. Understanding these Standards—and how they apply to specific project situations—represents essential knowledge for preservation professionals.
            </p>
            
            <p className="text-gray-600 mb-6">
              The National Park Service, through its Technical Preservation Services division, offers training and technical guidance on applying the Standards. NPS publications, including Preservation Briefs and Tech Notes, address specific topics from window repair to accessibility accommodations. These freely available resources provide authoritative guidance for both professionals and building owners.
            </p>

            <p className="text-gray-600 mb-6">
              The Florida Division of Historical Resources provides state-specific training on preservation standards, tax credit procedures, and regulatory requirements. SHPO-sponsored workshops help preservation professionals understand Florida's historic preservation framework and build relationships with review staff who evaluate tax credit applications.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Historic Tax Credit Training
            </h2>
            <p className="text-gray-600 mb-6">
              Historic tax credits offer powerful financial incentives for preservation, but navigating the application process requires specialized knowledge. Understanding what qualifies, how to document projects, and how to avoid common pitfalls determines whether projects capture available benefits or leave money on the table.
            </p>

            <p className="text-gray-600 mb-6">
              Professional organizations including the National Trust for Historic Preservation and state historic preservation conferences offer tax credit workshops and seminars. These programs cover application procedures, qualified rehabilitation expenditures, documentation requirements, and case studies from successful (and unsuccessful) projects.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists provides tax credit guidance as part of our comprehensive restoration services. We share our application experience with clients and colleagues, helping the Tampa preservation community capture available incentives that make restoration economically viable.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Traditional Craft Skills Training
            </h2>
            <p className="text-gray-600 mb-6">
              Historic buildings often incorporate craft elements—ornamental plaster, decorative painting, traditional joinery, blacksmithing—that require skills modern construction workers typically don't possess. Preserving these traditional crafts ensures that expertise exists for future restoration needs.
            </p>

            <p className="text-gray-600 mb-6">
              Organizations dedicated to craft preservation offer training programs that perpetuate traditional skills. The Traditional Building Skills Institute, Preservation Trades Network, and various regional programs provide hands-on instruction in historic building crafts. These programs range from introductory workshops to intensive apprenticeships.
            </p>

            <p className="text-gray-600 mb-6">
              Lime mortar workshops address one of the most common restoration needs—proper repointing of historic masonry. Understanding lime chemistry, mortar formulation, and application techniques enables appropriate treatment of historic brick and stone that Portland cement mortars would damage. Several organizations offer lime mortar training in the Southeast.
            </p>

            {/* Training Resources Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Historic Restoration Training Resources</h3>
              <table className="min-w-full border border-gray-300">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Training Area</th>
                    <th className="px-4 py-2 text-left">Resources</th>
                    <th className="px-4 py-2 text-left">Format</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="bg-white">
                    <td className="px-4 py-2">Secretary of Interior Standards</td>
                    <td className="px-4 py-2">NPS Technical Preservation Services</td>
                    <td className="px-4 py-2">Online publications, workshops</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Historic Tax Credits</td>
                    <td className="px-4 py-2">NTHP, state conferences, SHPO</td>
                    <td className="px-4 py-2">Workshops, seminars, webinars</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Lime Mortar/Masonry</td>
                    <td className="px-4 py-2">Lime Works, regional workshops</td>
                    <td className="px-4 py-2">Hands-on workshops (2-5 days)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Window Restoration</td>
                    <td className="px-4 py-2">Window Preservation Alliance, regional</td>
                    <td className="px-4 py-2">Workshops, online courses</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Ornamental Plaster</td>
                    <td className="px-4 py-2">Specialty contractors, trade groups</td>
                    <td className="px-4 py-2">Apprenticeships, workshops</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">General Preservation</td>
                    <td className="px-4 py-2">Florida Trust, Tampa Preservation Inc.</td>
                    <td className="px-4 py-2">Conferences, tours, seminars</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Regional and National Conferences
            </h2>
            <p className="text-gray-600 mb-6">
              Preservation conferences provide concentrated learning opportunities alongside networking with fellow professionals. The Florida Trust for Historic Preservation annual conference brings together preservationists from throughout the state for sessions on preservation techniques, regulatory updates, and case studies from successful projects.
            </p>

            <p className="text-gray-600 mb-6">
              National conferences offered by the National Trust for Historic Preservation, Association for Preservation Technology, and similar organizations provide broader perspectives and access to national experts. While requiring travel, these events offer unmatched professional development opportunities for serious preservation practitioners.
            </p>

            <p className="text-gray-600 mb-6">
              Tampa Preservation Inc. and other local organizations host periodic workshops, tours, and educational events focused on Tampa-specific preservation topics. These events provide accessible learning opportunities while building connections within Tampa's preservation community.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Training for Building Owners
            </h2>
            <p className="text-gray-600 mb-6">
              Building owners benefit from understanding preservation principles even when they rely on professional contractors for execution. Knowledge of basic maintenance techniques, regulatory requirements, and available incentives enables informed decisions about historic property stewardship.
            </p>

            <p className="text-gray-600 mb-6">
              Historic homeowner workshops address topics including appropriate maintenance techniques, working with contractors on historic properties, understanding local historic district requirements, and accessing financial incentives. Tampa's historic districts periodically offer such programs for their residents.
            </p>

            <p className="text-gray-600 mb-6">
              Commercial building owners seeking to understand tax credit opportunities, regulatory requirements, and restoration best practices can find resources through preservation conferences, SHPO programs, and professional development offerings. Florida Construction Specialists provides educational consultations that help commercial clients understand their options before committing to major restoration investments.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Certification Programs
            </h2>
            <p className="text-gray-600 mb-6">
              Various certification programs recognize professional competency in preservation fields. While not universally required, certifications demonstrate commitment to professional standards and may be specified by project owners seeking qualified contractors.
            </p>

            <p className="text-gray-600 mb-6">
              Historic preservation degree programs at universities provide comprehensive academic preparation for preservation careers. Graduate programs in historic preservation combine history, architecture, planning, and construction knowledge. While primarily targeting future professionals, these programs sometimes offer continuing education courses accessible to practitioners.
            </p>

            <p className="text-gray-600 mb-6">
              Trade-specific certifications—window restoration technician, ornamental plasterer, heritage mason—recognize craft competency in specific disciplines. These certifications may be offered by trade associations, training institutions, or manufacturers of specialty preservation products.
            </p>

            {/* FAQ Section */}
            <div className="my-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">What training should I look for in a historic restoration contractor?</h4>
                  <p className="text-gray-600">Look for contractors whose personnel have participated in preservation-specific training beyond standard construction education. Experience working on tax credit projects demonstrates familiarity with preservation standards. Membership in preservation organizations like the Association for Preservation Technology suggests commitment to professional development. Ask about specific training relevant to your project type.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Are there free historic preservation training resources?</h4>
                  <p className="text-gray-600">Yes, the National Park Service provides extensive free resources through its Technical Preservation Services website, including Preservation Briefs and Technical Notes covering numerous restoration topics. SHPO offices offer periodic free workshops and guidance documents. Local historical societies often provide educational programs at low or no cost to the public.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How do I learn lime mortar techniques?</h4>
                  <p className="text-gray-600">Several organizations offer hands-on lime mortar workshops, typically lasting 2-5 days and combining classroom instruction with practical application. Lime mortar manufacturers and suppliers sometimes offer training as well. Florida Construction Specialists can recommend appropriate training programs for contractors seeking to develop this essential skill.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">What credentials should preservation architects have?</h4>
                  <p className="text-gray-600">Look for architects with demonstrated preservation experience and, ideally, graduate education in historic preservation. Membership in organizations like the Association for Preservation Technology indicates engagement with the preservation community. Experience with similar building types and successful tax credit projects demonstrates practical competency. State architectural licensing is, of course, required.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Does Florida Construction Specialists provide training?</h4>
                  <p className="text-gray-600">We invest significantly in training our own personnel and periodically share our expertise through presentations, workshops, and educational consultations. Building owners considering restoration projects benefit from our project-specific guidance, which includes education on preservation standards, regulatory requirements, and available incentives as they apply to specific situations.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Commitment to Excellence Through Continuous Learning
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists maintains our position as Tampa's leading historic restoration contractor through continuous investment in professional development. Our team participates in industry conferences, craft workshops, and specialized training that keeps our capabilities current with evolving preservation standards and emerging technologies.
            </p>

            <p className="text-gray-600 mb-6">
              This commitment to excellence benefits every client we serve. When you work with Florida Construction Specialists, you access the accumulated knowledge of a team dedicated to mastering historic restoration. Contact us today to discuss your project—we'll bring our expertise and ongoing commitment to professional development to your historic building.
            </p>

          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Historic Restoration Services"
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
            Contact Florida Construction Specialists today to work with Tampa's most knowledgeable historic restoration team.
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
