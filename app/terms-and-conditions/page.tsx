import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "1. Introduction",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Terms and Conditions", href: "/terms-and-conditions/" },
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
            Terms and Conditions
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            1. Introduction
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
                Welcome to floridaconstructionspecialists.com. These terms and conditions outline the rules and regulations for the use of Terrusk, LLC dba Florida Construction Specialists’ Website, located at floridaconstructionspecialists.com.
              </p>

              <p className="text-gray-600 mb-6">
                By accessing this website, we assume you accept these terms and conditions. Do not continue to use floridaconstructionspecialists.com if you do not agree to all of the terms and conditions stated on this page.
              </p>

              <p className="text-gray-600 mb-6">
                Other than the content you own, under these Terms, Terrusk, LLC dba Florida Construction Specialists and/or its licensors own all the intellectual property rights and materials contained in this Website.
              </p>

              <p className="text-gray-600 mb-6">
                In these terms and conditions, “Your Content” shall mean any audio, video, text, images, or other material you choose to display on this website. By displaying Your Content, you grant Terrusk, LLC dba Florida Construction Specialists a non-exclusive, worldwide irrevocable, sublicensable license to use, reproduce, adapt, publish, translate, and distribute it in any and all media.
              </p>

              <p className="text-gray-600 mb-6">
                This website is provided “as is,” with all faults, and Terrusk, LLC dba Florida Construction Specialists express no representations or warranties of any kind related to this website or the materials contained on this website.
              </p>

              <p className="text-gray-600 mb-6">
                In no event shall Terrusk, LLC dba Florida Construction Specialists, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website, whether such liability is under contract, tort, or otherwise.
              </p>

              <p className="text-gray-600 mb-6">
                You hereby indemnify to the fullest extent Terrusk, LLC dba Florida Construction Specialists from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these terms.
              </p>

              <p className="text-gray-600 mb-6">
                If any provision of these terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
              </p>

              <p className="text-gray-600 mb-6">
                Terrusk, LLC dba Florida Construction Specialists is permitted to revise these terms at any time as it sees fit, and by using this website, you are expected to review these terms on a regular basis.
              </p>

              <p className="text-gray-600 mb-6">
                Terrusk, LLC dba Florida Construction Specialists is allowed to assign, transfer, and subcontract its rights and/or obligations under these terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these terms.
              </p>

              <p className="text-gray-600 mb-6">
                These terms constitute the entire agreement between Terrusk, LLC dba Florida Construction Specialists and you in relation to your use of this website, and supersede all prior agreements and understandings.
              </p>

              <p className="text-gray-600 mb-6">
                These terms will be governed by and interpreted in accordance with the laws of the state and/or country where Terrusk, LLC dba Florida Construction Specialists is located, and you submit to the non-exclusive jurisdiction of the state and federal courts located in for the resolution of any disputes.
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
