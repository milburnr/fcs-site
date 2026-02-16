import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home as HomeIcon, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import classificationData from "@/seo/article-classification.json";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/residential/guides/' },
  title: "Residential Construction Guides | Florida Construction Specialists",
  description: "Expert residential construction guides for Tampa Bay. Browse our library of articles on custom homes, renovations, smart home technology, and more.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Residential", href: "/residential/" },
  { name: "Guides", href: "/residential/guides/" },
];

const articles = classificationData.articles
  .filter((a: { targetSilo: string }) => a.targetSilo === "residential")
  .sort((a: { slug: string }, b: { slug: string }) => a.slug.localeCompare(b.slug));

function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function ResidentialGuidesPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Breadcrumb items={breadcrumbItems} />

      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-3 mb-4">
            <HomeIcon className="w-8 h-8 text-green-300" />
            <h1 className="text-3xl md:text-4xl font-bold">Residential Construction Guides</h1>
          </div>
          <p className="text-lg text-green-100 max-w-3xl">
            Expert insights on custom home building, renovations, smart home technology,
            and residential best practices from Florida Construction Specialists.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-gray-600 mb-8">
            Browse {articles.length} guides covering residential construction topics including
            luxury custom homes, energy-efficient design, home automation, and more.
          </p>

          <div className="grid gap-3">
            {articles.map((article: { slug: string; targetPath: string }) => (
              <Link
                key={article.slug}
                href={article.targetPath}
                className="group flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors"
              >
                <span className="text-gray-800 group-hover:text-green-700 font-medium">
                  {slugToTitle(article.slug)}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Planning a Custom Home?</h2>
          <p className="text-gray-600 mb-6">
            Florida Construction Specialists builds luxury custom homes across Tampa Bay with 40+ years of experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/residential/"
              className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors font-semibold"
            >
              <HomeIcon className="w-5 h-5" />
              View Residential Services
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-white text-green-700 border-2 border-green-700 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold"
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
