import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { ContactFormSwitcher } from "@/components/ContactFormSwitcher";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"

import { InternalLinks } from "@/components/InternalLinks";
export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Florida Construction Specialists for a free consultation on your commercial or residential construction project in Tampa Bay.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact/" },
];

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-brand-green-dark to-brand-green-forest">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Contact Us
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Get in touch with Florida Construction Specialists for a free consultation
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Ready to start your construction project? Contact us today for a free
                consultation and estimate. Our team is here to answer your questions
                and discuss your needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark mb-1">Phone</h3>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-gray-600 hover:text-brand-green transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark mb-1">Email</h3>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-gray-600 hover:text-brand-green transition-colors"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark mb-1">Location</h3>
                    <p className="text-gray-600">
                      {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}{" "}
                      {BUSINESS_INFO.address.zip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark mb-1">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: {BUSINESS_INFO.hours.weekdays}
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading text-center">
                Request a Consultation
              </h2>
              <ContactFormSwitcher />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
            Service Areas
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We serve clients throughout the Tampa Bay area and Central Florida, including:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Tampa", "St. Petersburg", "Clearwater", "Lakeland", "Sarasota", "Bradenton", "Brandon", "Ruskin"].map(
              (city) => (
                <span
                  key={city}
                  className="px-4 py-2 bg-white rounded-full text-brand-green-dark font-medium shadow"
                >
                  {city}, FL
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            links={[{"href":"/services/commercial/","label":"Commercial Construction"},{"href":"/services/residential/","label":"Residential Construction"},{"href":"/services/disaster-recovery/","label":"Disaster Recovery"},{"href":"/services/historic-restoration/","label":"Historic Restoration"},{"href":"/locations/tampa/","label":"Tampa Construction Services"}]}
            title="Related Resources"
            
          />
        </div>
      </section>

    </>
  );
}
