import { Metadata } from "next";
import { BUSINESS_INFO } from "@/lib/constants";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"

export const metadata: Metadata = {
  title: `Privacy Policy | ${BUSINESS_INFO.name}`,
  description: `Privacy Policy for ${BUSINESS_INFO.name}. Learn how we collect, use, and protect your personal information.`,
  robots: "noindex, follow",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Privacy", href: "/privacy/" },
];

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 2026";

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Breadcrumb items={[{ name: "Privacy Policy", href: "/privacy/" }]} />

      <article className="py-12 bg-white">
        <div className="container-custom max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
            Privacy Policy
          </h1>
          <p className="text-gray-500 mb-8">Last Updated: {lastUpdated}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                {BUSINESS_INFO.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting
                your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website or use our services.
              </p>
              <p className="text-gray-700">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
                please do not access the site or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Information We Collect
              </h2>
              <h3 className="text-xl font-semibold text-brand-green-dark mb-2">Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Fill out a contact form or request a consultation</li>
                <li>Call our office or email us directly</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Engage with us on social media</li>
              </ul>
              <p className="text-gray-700 mb-4">
                This information may include your name, email address, phone number, mailing address, project details,
                and any other information you choose to provide.
              </p>

              <h3 className="text-xl font-semibold text-brand-green-dark mb-2">Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we may automatically collect certain information about your device and
                your visit, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>IP address and geographic location</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website or source</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Process and manage construction project consultations</li>
                <li>Send you project updates and relevant communications</li>
                <li>Improve our website and services</li>
                <li>Analyze usage trends to enhance user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Information Sharing
              </h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your
                information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>With service providers who assist in our operations (e.g., email services, analytics)</li>
                <li>To comply with legal requirements or respond to lawful requests</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to track activity on our website and improve your
                experience. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.
                However, if you do not accept cookies, some portions of our website may not function properly.
              </p>
              <p className="text-gray-700">
                We use Google Analytics to analyze website traffic and usage patterns. Google Analytics may collect
                information such as how often you visit the site, what pages you visit, and what other sites you used
                before coming to our site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Data Security
              </h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. However, no method
                of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Your Rights
              </h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Access and receive a copy of your personal data</li>
                <li>Request correction of inaccurate personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to or restrict processing of your personal data</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-gray-700">
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Third-Party Links
              </h2>
              <p className="text-gray-700">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                or content of these external sites. We encourage you to review the privacy policies of any third-party
                sites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Children&apos;s Privacy
              </h2>
              <p className="text-gray-700">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect
                personal information from children. If we become aware that we have collected personal information
                from a child without parental consent, we will take steps to delete that information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Changes to This Policy
              </h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. You are advised to
                review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
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
