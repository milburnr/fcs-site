import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import classificationData from "@/seo/article-classification.json";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/insurance/guides/' },
  title: "Tampa Bay Insurance Restoration Guides & Resources",
  description: "Expert insurance restoration guides for Tampa Bay. Browse our library of articles on property claims, disaster recovery, storm damage repair, and more.",
  openGraph: {
    title: "Insurance Restoration Guides",
    description: "Expert insurance restoration guides for Tampa Bay. Browse our library of articles on property claims, disaster recovery, storm damage repair, and more.",
    url: "https://floridaconstructionspecialists.com/insurance/guides/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Insurance", href: "/insurance/" },
  { name: "Guides", href: "/insurance/guides/" },
];

const articles = classificationData.articles
  .filter((a: { targetSilo: string }) => a.targetSilo === "insurance")
  .sort((a: { slug: string }, b: { slug: string }) => a.slug.localeCompare(b.slug));

function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function InsuranceGuidesPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Breadcrumb items={breadcrumbItems} />

      <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 text-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-amber-300" />
            <h1 className="text-3xl md:text-4xl font-bold">Insurance Restoration Guides</h1>
          </div>
          <p className="text-lg text-amber-100 max-w-3xl">
            Expert insights on insurance restoration, property damage claims, disaster recovery,
            and storm damage repair from Florida Construction Specialists.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-gray-600 mb-8">
            Browse {articles.length} guides covering insurance restoration topics including
            hurricane damage, fire restoration, water damage, property claims, and large-loss recovery.
          </p>

          <div className="grid gap-3">
            {articles.map((article: { slug: string; targetPath: string }) => (
              <Link
                key={article.slug}
                href={article.targetPath}
                className="group flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-colors"
              >
                <span className="text-gray-800 group-hover:text-amber-700 font-medium">
                  {slugToTitle(article.slug)}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600 flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Damage? We Can Help.</h2>
          <p className="text-gray-600 mb-6">
            Florida Construction Specialists handles $250K–$25M+ insurance restoration projects with direct carrier negotiation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/insurance/"
              className="inline-flex items-center gap-2 bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors font-semibold"
            >
              <Shield className="w-5 h-5" />
              View Insurance Services
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-white text-amber-700 border-2 border-amber-700 px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors font-semibold"
            >
              <Phone className="w-5 h-5" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
