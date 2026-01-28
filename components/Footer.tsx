import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS_INFO, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-green">
              {BUSINESS_INFO.name}
            </h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-brand-green" />
                <span>
                  {BUSINESS_INFO.address.street}<br />
                  {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}{" "}
                  {BUSINESS_INFO.address.zip}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-green" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="hover:text-brand-green transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-green" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-brand-green transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-brand-green" />
                <div>
                  <p>Mon-Fri: {BUSINESS_INFO.hours.weekdays}</p>
                  <p>Sat-Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-green">
              Our Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}/`}
                    className="text-gray-300 hover:text-brand-green transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-green">
              Service Areas
            </h3>
            <ul className="space-y-2 text-gray-300">
              {[
                ...BUSINESS_INFO.serviceAreas.primary,
                ...BUSINESS_INFO.serviceAreas.central,
                ...BUSINESS_INFO.serviceAreas.coastal,
              ].map((area) => (
                <li key={area}>{area}, FL</li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-green">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-brand-green transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about/"
                  className="text-gray-300 hover:text-brand-green transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services/"
                  className="text-gray-300 hover:text-brand-green transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/"
                  className="text-gray-300 hover:text-brand-green transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights
            reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Tampa Commercial Construction Experts
          </p>
        </div>
      </div>
    </footer>
  );
}
