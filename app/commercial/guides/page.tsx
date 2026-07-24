import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import classificationData from "@/seo/article-classification.json";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/commercial/guides/' },
  title: "Commercial Construction Guides",
  description: "Expert commercial construction guides for Tampa Bay. Browse our library of 140+ articles on building, renovation, design-build, and project management.",
  openGraph: {
    title: "Commercial Construction Guides",
    description: "Expert commercial construction guides for Tampa Bay. Browse our library of 140+ articles on building, renovation, design-build, and project management.",
    url: "https://floridaconstructionspecialists.com/commercial/guides/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial", href: "/commercial/" },
  { name: "Guides", href: "/commercial/guides/" },
];

const articles = classificationData.articles
  .filter((a: { targetSilo: string }) => a.targetSilo === "commercial")
  .sort((a: { slug: string }, b: { slug: string }) => a.slug.localeCompare(b.slug));

function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Topic buckets — group the guide library so every guide is reachable under a
// relevant heading (topical hub-and-spoke). Order defines display order.
const TOPIC_ORDER = [
  "Historic Restoration",
  "Commercial Construction",
  "Project Management",
  "Renovation & Remodeling",
  "Balcony & Waterproofing",
  "Costs & Budgeting",
  "Safety & Compliance",
  "Sustainable Construction",
  "Condo & SB4-D Compliance",
  "Materials & Technology",
] as const;

function guideTopic(slug: string): string {
  const s = slug.toLowerCase();
  if (/historic|restoration|preservation|heritage|landmark|plaster|adaptive-reuse|architectural-styles|hyde-park|ybor|cultural/.test(s)) return "Historic Restoration";
  if (/condo|milestone|sb4|sirs|structural-integrity/.test(s)) return "Condo & SB4-D Compliance";
  if (/balcony|waterproof/.test(s)) return "Balcony & Waterproofing";
  if (/cost|budget|pricing|estimat|financ|tariff/.test(s)) return "Costs & Budgeting";
  if (/delay|timeline|schedul|project-manag|management|blueprint|bidding|value-engineering|site-planning|process|stages|manager/.test(s)) return "Project Management";
  if (/renovat|remodel|facade|retrofit|retail|office|church|restaurant|tenant|convert/.test(s)) return "Renovation & Remodeling";
  if (/sustainab|eco|green|energy|leed|solar/.test(s)) return "Sustainable Construction";
  if (/material|steel|technolog|advanced-building/.test(s)) return "Materials & Technology";
  if (/safety|accident|security|sprinkler|regulation|law|permit|code|insurance|disaster/.test(s)) return "Safety & Compliance";
  return "Commercial Construction";
}

const groupedArticles = TOPIC_ORDER.map((topic) => ({
  topic,
  items: articles.filter((a: { slug: string }) => guideTopic(a.slug) === topic),
})).filter((g) => g.items.length > 0);

export default function CommercialGuidesPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Breadcrumb items={breadcrumbItems} />

      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-8 h-8 text-blue-300" />
            <h1 className="text-3xl md:text-4xl font-bold">Commercial Construction Guides</h1>
          </div>
          <p className="text-lg text-blue-100 max-w-3xl">
            Expert insights on commercial building, renovation, design-build delivery, project management,
            and industry best practices from Florida Construction Specialists.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-gray-600 mb-8">
            Browse {articles.length} guides covering commercial construction topics including
            multi-family development, industrial facilities, historic restoration, tenant improvements,
            and more.
          </p>

          {groupedArticles.map((group) => (
            <div key={group.topic} className="mb-10">
              <h2
                id={group.topic.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200"
              >
                {group.topic}
              </h2>
              <div className="grid gap-3">
                {group.items.map((article: { slug: string; targetPath: string }) => (
                  <Link
                    key={article.slug}
                    href={article.targetPath}
                    className="group flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                  >
                    <span className="text-gray-800 group-hover:text-blue-700 font-medium">
                      {slugToTitle(article.slug)}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Expert Commercial Construction Guidance?</h2>
          <p className="text-gray-600 mb-6">
            Florida Construction Specialists has delivered $500K–$25M+ commercial projects across Tampa Bay since 1982.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/commercial/"
              className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
            >
              <Building2 className="w-5 h-5" />
              View Commercial Services
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-white text-blue-700 border-2 border-blue-700 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
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
