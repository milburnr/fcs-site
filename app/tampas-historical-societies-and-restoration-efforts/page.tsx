import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa's Historical Societies and Restoration Efforts - Florida Construction Specialists",
  description: "Learn about Tampa's historical societies and their role in preservation. Partner organizations supporting restoration of Ybor City, Hyde Park, and Tampa Bay landmarks.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa's Historical Societies and Restoration Efforts", href: "/tampas-historical-societies-and-restoration-efforts/" },
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
            src="/images/historic-preservation/historic-preservation-large.webp"
            alt="Tampa historical societies"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa's Historical Societies and Restoration Efforts
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Exploring the vital role of Tampa's historical societies in preserving architectural heritage and supporting restoration of the region's most significant structures.
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
              Tampa's historical societies have shaped the region's preservation landscape for over a century, advocating for protection of significant structures, educating the public about architectural heritage, and facilitating restoration of landmark buildings. These organizations—from neighborhood associations to regional preservation advocacy groups—provide essential support for restoration projects and serve as valuable resources for building owners navigating the complexities of historic preservation.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists maintains collaborative relationships with Tampa's historical societies, recognizing that successful preservation requires community engagement alongside technical expertise. These partnerships strengthen restoration projects by connecting building owners with research resources, preservation funding opportunities, and community support that enhances project outcomes.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Tampa Preservation Inc. and Regional Advocacy
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Preservation Inc. stands as the region's leading advocacy organization for historic preservation, working to protect threatened structures, educate the public, and promote preservation-friendly policies. Founded to address the loss of significant buildings to demolition and insensitive development, the organization has become an influential voice in planning decisions affecting Tampa's historic resources.
            </p>
            
            <p className="text-gray-600 mb-6">
              The organization's advocacy efforts have contributed to designation of historic districts, adoption of preservation incentives, and protection of individual landmarks throughout Tampa Bay. For building owners considering restoration projects, Tampa Preservation Inc. provides guidance on navigating local preservation regulations, connecting with qualified contractors, and accessing financial incentives including historic tax credits.
            </p>

            <p className="text-gray-600 mb-6">
              Annual events including walking tours, preservation awards, and educational programs raise public awareness of Tampa's architectural heritage. These activities build community support for preservation that benefits individual restoration projects—when neighborhoods value their historic buildings, property values increase and restoration investments gain community backing.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Ybor City Museum Society and Cultural Heritage
            </h2>
            <p className="text-gray-600 mb-6">
              The Ybor City Museum Society preserves and interprets the history of Tampa's unique immigrant community, operating the Ybor City Museum State Park and maintaining extensive archives documenting the cigar industry era. For restoration projects within the Ybor City National Historic Landmark District, the Museum Society provides invaluable historical research support.
            </p>

            <p className="text-gray-600 mb-6">
              The organization's photographic collections, oral histories, and documentary archives help restoration professionals understand how buildings appeared and functioned during their period of significance. This research supports accurate restoration decisions and strengthens historic tax credit applications by providing documentary evidence for proposed treatments.
            </p>

            <p className="text-gray-600 mb-6">
              Beyond research support, the Museum Society advocates for preservation of Ybor City's character-defining features—the distinctive architecture, streetscape elements, and cultural landscape that distinguish the district. Their expertise on the immigrant mutual aid societies—the Italian Club, Cuban Club, Spanish Club, and others—proves essential for restoration of these landmark buildings.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Hyde Park Preservation and Neighborhood Advocacy
            </h2>
            <p className="text-gray-600 mb-6">
              The Hyde Park Historic District benefits from active neighborhood organizations that advocate for preservation of its Victorian, Colonial Revival, and Mediterranean Revival architecture. These groups work to maintain design standards that protect neighborhood character while supporting appropriate restoration and sensitive new construction.
            </p>

            <p className="text-gray-600 mb-6">
              Neighborhood preservation advocates provide essential community voice in development decisions affecting the historic district. Their participation in review processes ensures that proposed projects receive scrutiny from residents who understand and value the neighborhood's historic character. For restoration projects, this community engagement can provide support that strengthens approval processes.
            </p>

            <p className="text-gray-600 mb-6">
              Walking tours organized by neighborhood groups showcase Hyde Park's architectural diversity and preservation successes. These educational activities build appreciation for historic architecture that benefits all property owners in the district by maintaining demand for historic homes and supporting property values.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Tampa Historical Society and Archival Resources
            </h2>
            <p className="text-gray-600 mb-6">
              The Tampa Historical Society maintains collections documenting Tampa's development from frontier settlement to modern metropolis. Their archives include photographs, maps, documents, and artifacts that support research for restoration projects throughout the region. Access to these materials helps restoration professionals establish building histories and document original appearances.
            </p>

            <p className="text-gray-600 mb-6">
              The Society's programs connect historians, architects, and preservation professionals with building owners seeking to understand their properties' histories. This network facilitates knowledge sharing that improves restoration outcomes across the region. Lectures, publications, and special events disseminate preservation knowledge to broader audiences.
            </p>

            <p className="text-gray-600 mb-6">
              For commercial restoration projects pursuing historic tax credits, the Tampa Historical Society's resources support the historical documentation required for Part 1 applications. Establishing a building's historical significance—its association with important events, persons, or architectural trends—requires research that these archival collections enable.
            </p>

            {/* Cost Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Historical Society Resources for Restoration Projects</h3>
              <table className="min-w-full border border-gray-300">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Organization</th>
                    <th className="px-4 py-2 text-left">Primary Resources</th>
                    <th className="px-4 py-2 text-left">Services for Projects</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="bg-white">
                    <td className="px-4 py-2">Tampa Preservation Inc.</td>
                    <td className="px-4 py-2">Advocacy, education, networking</td>
                    <td className="px-4 py-2">Contractor referrals, policy guidance</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Ybor City Museum Society</td>
                    <td className="px-4 py-2">Photo archives, oral histories</td>
                    <td className="px-4 py-2">Historical research, documentation</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Tampa Historical Society</td>
                    <td className="px-4 py-2">Archives, maps, documents</td>
                    <td className="px-4 py-2">Research support, expert networks</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Hyde Park Civic Association</td>
                    <td className="px-4 py-2">Local knowledge, community connections</td>
                    <td className="px-4 py-2">Neighborhood support, review guidance</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Florida Trust for Historic Preservation</td>
                    <td className="px-4 py-2">Statewide advocacy, technical resources</td>
                    <td className="px-4 py-2">Tax credit guidance, training programs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Ethnic Heritage Organizations and Cultural Preservation
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's diverse ethnic heritage—Cuban, Italian, Spanish, African American, and others—is embodied in buildings that served immigrant and minority communities. The mutual aid society buildings of Ybor City, African American churches and businesses in historic neighborhoods, and other culturally significant structures represent heritage that extends beyond architecture to encompass community identity and cultural traditions.
            </p>

            <p className="text-gray-600 mb-6">
              Organizations maintaining these heritage buildings often possess institutional knowledge essential for accurate restoration. The Italian Club's leadership understands how the building served its community, the Cuban Club preserves traditions associated with their structure, and similar organizations throughout Tampa maintain connections to building histories that documentary sources cannot fully capture.
            </p>

            <p className="text-gray-600 mb-6">
              Restoration of culturally significant buildings requires sensitivity that extends beyond physical preservation to encompass intangible heritage. Florida Construction Specialists engages with ethnic heritage organizations to ensure that restoration work respects cultural significance alongside architectural preservation—an approach that strengthens community support and improves project outcomes.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Government Preservation Programs and Partnerships
            </h2>
            <p className="text-gray-600 mb-6">
              Beyond nonprofit historical societies, government programs provide essential support for Tampa's restoration efforts. The Florida Division of Historical Resources, operating through the State Historic Preservation Office (SHPO), reviews historic tax credit applications, maintains the Florida Master Site File, and administers preservation grant programs.
            </p>

            <p className="text-gray-600 mb-6">
              The City of Tampa's Historic Preservation Program administers local landmark designation, reviews projects within historic districts, and manages the Barrio Latino Commission that oversees Ybor City. Understanding these government programs—their requirements, review processes, and available incentives—proves essential for successful restoration projects.
            </p>

            <p className="text-gray-600 mb-6">
              Hillsborough County's Historic Preservation Board provides additional oversight for properties outside Tampa's city limits. County historic preservation programs may offer incentives including property tax exemptions for qualifying restoration work. Coordinating with all relevant government programs maximizes available benefits for restoration projects.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Collaborative Restoration Success Stories
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's most successful restoration projects demonstrate the value of collaboration between building owners, contractors, historical societies, and government agencies. The Tampa Theatre's ongoing preservation program benefits from partnerships with the City of Tampa, Tampa Preservation Inc., and dedicated volunteers who support the nonprofit operating organization.
            </p>

            <p className="text-gray-600 mb-6">
              Ybor City's revitalization integrated restoration of landmark buildings with economic development initiatives, leveraging historic tax credits, community development funds, and private investment. Historical societies provided research support and advocacy that helped secure public investment, while restoration contractors delivered the technical expertise needed for quality preservation work.
            </p>

            <p className="text-gray-600 mb-6">
              These collaborative models provide templates for future restoration projects. Building owners who engage historical societies early in project planning benefit from research support, community connections, and advocacy that smooths approval processes and builds project support. Florida Construction Specialists facilitates these connections as part of comprehensive restoration services.
            </p>

            {/* FAQ Section */}
            <div className="my-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">How can historical societies help with my restoration project?</h4>
                  <p className="text-gray-600">Historical societies provide research resources (photographs, documents, archives), connect building owners with qualified professionals, offer guidance on preservation regulations and incentives, and can advocate for projects that face regulatory challenges. Their involvement often strengthens tax credit applications by providing documentary support for historical significance claims.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Do I need to be a member to access historical society resources?</h4>
                  <p className="text-gray-600">Most historical societies welcome research inquiries from non-members, though membership often provides enhanced access and supports the organization's preservation mission. Membership fees typically range from $25-$100 annually—a modest investment that supports community preservation efforts while providing research access and networking opportunities.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Can historical societies help me get my building listed on the National Register?</h4>
                  <p className="text-gray-600">Historical societies can assist with research supporting National Register nominations, though the formal nomination process goes through the State Historic Preservation Office. Tampa Preservation Inc. and similar organizations have helped numerous building owners navigate the nomination process, connecting them with consultants who prepare nomination documents and guiding projects through state and federal review.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">What if historical society recommendations conflict with my project plans?</h4>
                  <p className="text-gray-600">Historical societies are advisory; they don't have regulatory authority over private property (unless local landmark designation applies). However, their recommendations often align with the Secretary of the Interior's Standards that govern tax credit eligibility. If conflicts arise, early dialogue usually identifies solutions that meet both project requirements and preservation standards.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How do I find the appropriate historical society for my building?</h4>
                  <p className="text-gray-600">Start with geographic and thematic connections. Buildings in Ybor City benefit from Ybor City Museum Society resources. Hyde Park properties connect with neighborhood preservation groups. Tampa Preservation Inc. provides regional coverage and can refer projects to specialized organizations. Florida Construction Specialists helps clients identify and engage appropriate historical society partners.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Building Partnerships for Preservation Success
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists values the partnerships with historical societies that strengthen our restoration projects. These organizations provide resources, connections, and community support that complement our technical expertise in preservation construction. Together, we protect Tampa's architectural heritage while enabling continued use and enjoyment of historic buildings.
            </p>

            <p className="text-gray-600 mb-6">
              Whether you're planning restoration of a landmark building, considering adaptive reuse of a historic structure, or simply seeking to understand your property's history, engagement with Tampa's historical societies enhances project outcomes. Contact Florida Construction Specialists to learn how we integrate historical society partnerships into comprehensive restoration services.
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
            Contact Florida Construction Specialists today for expert historic restoration services with strong community partnerships.
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
