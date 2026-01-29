import { Metadata } from "next";
import { BUSINESS_INFO } from "@/lib/constants";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"

export const metadata: Metadata = {
  title: `Terms of Service | ${BUSINESS_INFO.name}`,
  description: `Terms of Service for ${BUSINESS_INFO.name}. Please read these terms carefully before using our website or services.`,
  robots: "noindex, follow",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Terms", href: "/terms/" },
];

export default function TermsOfServicePage() {
  const lastUpdated = "January 2026";

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Breadcrumb items={[{ name: "Terms of Service", href: "/terms/" }]} />

      <article className="py-12 bg-white">
        <div className="container-custom max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
            Terms of Service
          </h1>
          <p className="text-gray-500 mb-8">Last Updated: {lastUpdated}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Agreement to Terms
              </h2>
              <p className="text-gray-700 mb-4">
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of the website and services
                provided by {BUSINESS_INFO.name} (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing or using
                our website, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-700">
                If you do not agree with any part of these Terms, you may not access the website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Services Description
              </h2>
              <p className="text-gray-700 mb-4">
                {BUSINESS_INFO.name} is a licensed general contractor providing commercial and residential
                construction services throughout the Tampa Bay area. Our services include but are not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Commercial construction and renovation</li>
                <li>Multi-family and residential development</li>
                <li>Historic restoration and preservation</li>
                <li>Insurance restoration and disaster recovery</li>
                <li>Balcony reconstruction and waterproofing</li>
                <li>Custom home construction</li>
              </ul>
              <p className="text-gray-700">
                All construction services are subject to separate written contracts that specify scope, pricing,
                timeline, and other project-specific terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Website Use
              </h2>
              <p className="text-gray-700 mb-4">
                You may use our website for lawful purposes only. You agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to any portion of the website</li>
                <li>Interfere with or disrupt the website or servers</li>
                <li>Transmit any viruses, malware, or harmful code</li>
                <li>Collect or harvest any information from the website without permission</li>
                <li>Impersonate or misrepresent your affiliation with any person or entity</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Intellectual Property
              </h2>
              <p className="text-gray-700 mb-4">
                The website and its entire contents, features, and functionality (including but not limited to all
                information, software, text, displays, images, video, and audio, and the design, selection, and
                arrangement thereof) are owned by {BUSINESS_INFO.name}, its licensors, or other providers of
                such material and are protected by copyright, trademark, patent, trade secret, and other intellectual
                property or proprietary rights laws.
              </p>
              <p className="text-gray-700">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly
                perform, republish, download, store, or transmit any material on our website without our prior
                written consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Construction Services Terms
              </h2>
              <p className="text-gray-700 mb-4">
                The information provided on this website is for general informational purposes only and does not
                constitute a binding offer or contract for construction services. All construction projects require:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>A signed written contract specifying the scope of work</li>
                <li>Agreed-upon pricing and payment terms</li>
                <li>Project timeline and milestones</li>
                <li>Required permits and approvals</li>
                <li>Insurance and bonding requirements</li>
              </ul>
              <p className="text-gray-700">
                Estimates and proposals provided through this website or during consultations are preliminary and
                subject to change based on detailed project assessment, site conditions, and final scope definition.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Licensing and Insurance
              </h2>
              <p className="text-gray-700 mb-4">
                {BUSINESS_INFO.name} maintains all required licenses and insurance for construction services
                in the State of Florida:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Florida State Certified General Contractor License: {BUSINESS_INFO.licenseNumber}</li>
                <li>Experience: {BUSINESS_INFO.yearsInBusiness} years</li>
                <li>Comprehensive general liability insurance</li>
                <li>Workers&apos; compensation insurance</li>
              </ul>
              <p className="text-gray-700">
                Copies of licenses and certificates of insurance are available upon request.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Disclaimer of Warranties
              </h2>
              <p className="text-gray-700 mb-4">
                THE WEBSITE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITHOUT ANY WARRANTIES OF ANY
                KIND, EITHER EXPRESS OR IMPLIED. NEITHER THE COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY
                MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY,
                QUALITY, ACCURACY, OR AVAILABILITY OF THE WEBSITE.
              </p>
              <p className="text-gray-700">
                THE FOREGOING DOES NOT AFFECT ANY WARRANTIES THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Limitation of Liability
              </h2>
              <p className="text-gray-700">
                IN NO EVENT WILL THE COMPANY, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES,
                AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING
                OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT,
                ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL,
                INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES. THIS LIMITATION DOES NOT APPLY TO DAMAGES ARISING
                FROM CONSTRUCTION SERVICES, WHICH ARE GOVERNED BY SEPARATE CONTRACTUAL TERMS.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Indemnification
              </h2>
              <p className="text-gray-700">
                You agree to defend, indemnify, and hold harmless {BUSINESS_INFO.name} and its officers,
                directors, employees, contractors, agents, licensors, and suppliers from and against any claims,
                liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable
                attorneys&apos; fees) arising out of or relating to your violation of these Terms or your use of the website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Governing Law and Dispute Resolution
              </h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of Florida,
                without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-700">
                Any legal suit, action, or proceeding arising out of, or related to, these Terms or the website
                shall be instituted exclusively in the state or federal courts located in Hillsborough County,
                Florida. You waive any and all objections to the exercise of jurisdiction over you by such courts
                and to venue in such courts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Changes to Terms
              </h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. If we make material changes, we will post
                the updated Terms on this page and update the &quot;Last Updated&quot; date. Your continued use of the
                website after any such changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Severability
              </h2>
              <p className="text-gray-700">
                If any provision of these Terms is held to be invalid, illegal, or unenforceable, such provision
                shall be modified to the minimum extent necessary to make it valid, legal, and enforceable. If
                modification is not possible, the provision shall be severed from these Terms, and the remaining
                provisions shall continue in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Contact Information
              </h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us at:
              </p>
              <address className="not-italic text-gray-700">
                <p className="font-semibold">{BUSINESS_INFO.name}</p>
                <p>{BUSINESS_INFO.address.street}</p>
                <p>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}</p>
                <p>Phone: {BUSINESS_INFO.phone}</p>
                <p>Email: {BUSINESS_INFO.email}</p>
              </address>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
