import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Florida Construction Specialists' privacy policy. Learn how we collect, protect, and use your personal information when you visit our Tampa Bay construction company website.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Privacy Policy", href: "/privacy-policy/" },
];


const internalLinks = [
  { href: "/services/", label: "Our Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/about/", label: "About Florida Construction Specialists" },
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
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Construction services in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Privacy Policy
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Effective Date: 12/1/2023
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
                Welcome to Florida Construction Specialists. Your privacy is important to us.
              </p>

              <p className="text-gray-600 mb-6">
                This Privacy Policy explains how Terrusk, LLC dba Florida Construction Specialists (referred to as “we”, “our”, or “us”) collects, uses, and protects any personal information that you give us when you use this website .
              </p>

              <p className="text-gray-600 mb-6">
                The only personal information we collect is what you voluntarily provide to us. This may include:
              </p>

              <p className="text-gray-600 mb-6">
                We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
              </p>

              <p className="text-gray-600 mb-6">
                We do not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so.
              </p>

              <p className="text-gray-600 mb-6">
                You may choose to restrict the collection or use of your personal information in the following ways:
              </p>

              <p className="text-gray-600 mb-6">
                Our website may use cookies to enhance your experience. Cookies are small files which ask permission to be placed on your computer’s hard drive. Once you agree, the file is added, and the cookie helps analyze web traffic or lets you know when you visit a particular site. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer.
              </p>

              <p className="text-gray-600 mb-6">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>

              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy, please contact us at frankbragano.fcs@gmail.com.
              </p>
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
