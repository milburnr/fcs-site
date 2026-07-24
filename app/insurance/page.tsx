import type { Metadata } from "next";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { InsurancePageClient } from "./InsurancePageClient";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Insurance Restoration Tampa | Licensed GC",
  description: "Florida Construction Specialists — licensed CBC with 40+ years handling large-loss insurance claims in Tampa Bay. Fire, water, hurricane restoration.",
  alternates: {
    canonical: "https://floridaconstructionspecialists.com/insurance/",
  },
  openGraph: {
    title: "Insurance Restoration Tampa | Licensed GC",
    description: "Florida Construction Specialists — licensed CBC with 40+ years handling large-loss insurance claims in Tampa Bay. Fire, water, hurricane restoration.",
    url: "https://floridaconstructionspecialists.com/insurance/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Insurance Restoration Tampa" }],
  },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Insurance Services", href: "/insurance/" },
];

export default function InsurancePage() {
  return (
    <>
      {/* Schema lives in server component = present in static HTML, no JS execution required */}
      <LocalBusinessSchema city="Tampa" service="Insurance Restoration" />
      <ServiceSchema
        serviceName="Insurance Restoration Services"
        serviceDescription="Comprehensive insurance restoration: hurricane, fire, water, and mold damage repair with certified estimating and claims support across Tampa Bay."
        city="Tampa"
        serviceCategories={["Hurricane Restoration", "Fire Restoration", "Water Restoration", "Mold Remediation", "Certified Estimating"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <InsurancePageClient />
      <section className="py-16">
        <div className="container-custom">
          <InternalLinks
            title="Hurricane Restoration Resources"
            links={[
              { label: "Hurricane Insurance Restoration Contractor in Tampa", href: "/resources/hurricane-insurance-restoration-contractor-tampa/" },
            ]}
          />
        </div>
      </section>
      <RelatedServiceLocations
        currentCity="Tampa"
        currentService="insurance-restoration"
        currentServiceName="Insurance Restoration"
      />

      {/* Related Guides — de-orphan internal links */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Restoration & Safety Guides"
            links={[
              { label: "Commercial Construction Regulations In Tampa", href: "/commercial/guides/commercial-construction-regulations-in-tampa/" },
              { label: "Tampas Commercial Construction Laws", href: "/commercial/guides/tampas-commercial-construction-laws/" },
              { label: "Commercial Construction Insurance Coverage", href: "/commercial/guides/commercial-construction-insurance-coverage/" },
              { label: "Ensuring Construction Site Safety A Top Priority", href: "/commercial/guides/ensuring-construction-site-safety-a-top-priority/" },
              { label: "Summer Construction Safety Tips From Top Contractors", href: "/commercial/guides/summer-construction-safety-tips-from-top-contractors/" },
              { label: "Safety First In Florida Commercial Construction Projects", href: "/commercial/guides/safety-first-in-florida-commercial-construction-projects/" },
              { label: "Commercial Buildings Facade Renovations", href: "/commercial/guides/commercial-buildings-facade-renovations/" },
              { label: "Office Building Renovation In Tampa", href: "/commercial/guides/office-building-renovation-in-tampa/" },
              { label: "Converting Retail Building Into Multi Tenant Space", href: "/commercial/guides/converting-retail-building-into-multi-tenant-space/" },
              { label: "Renovating Your Commercial Space In Florida", href: "/commercial/guides/renovating-your-commercial-space-in-florida/" }
            ]}
          />
        </div>
      </section>
    </>
  );
}
