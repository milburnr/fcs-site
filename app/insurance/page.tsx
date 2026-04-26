import type { Metadata } from "next";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { InsurancePageClient } from "./InsurancePageClient";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";

export const metadata: Metadata = {
  title: "Insurance Restoration Tampa | Licensed GC & Claims Support",
  description: "Florida Construction Specialists — licensed CBC with 40+ years handling large-loss insurance claims in Tampa Bay. Fire, water, hurricane restoration.",
  alternates: {
    canonical: "https://floridaconstructionspecialists.com/insurance/",
  },
  openGraph: {
    title: "Insurance Restoration Tampa | Licensed GC & Claims Support",
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
      <RelatedServiceLocations
        currentCity="Tampa"
        currentService="insurance-restoration"
        currentServiceName="Insurance Restoration"
      />
    </>
  );
}
