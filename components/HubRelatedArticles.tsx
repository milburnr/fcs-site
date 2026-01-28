"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Article {
  title: string;
  href: string;
  excerpt?: string;
  category?: string;
}

interface HubRelatedArticlesProps {
  silo: "commercial" | "residential";
  title?: string;
  articles: Article[];
  showAll?: boolean;
  allArticlesHref?: string;
}

export function HubRelatedArticles({
  silo,
  title,
  articles,
  showAll = true,
  allArticlesHref,
}: HubRelatedArticlesProps) {
  const isCommercial = silo === "commercial";
  const displayTitle =
    title || `${isCommercial ? "Commercial" : "Residential"} Insights`;

  const defaultAllHref = isCommercial ? "/commercial/articles/" : "/residential/articles/";
  const allHref = allArticlesHref || defaultAllHref;

  return (
    <section className="py-12">
      <div className="mb-8 flex items-center justify-between">
        <h2
          className={`text-2xl font-bold font-heading md:text-3xl ${
            isCommercial ? "text-brand-green-dark" : "text-brand-gold-dark"
          }`}
        >
          {displayTitle}
        </h2>
        {showAll && (
          <Link
            href={allHref}
            className={`flex items-center gap-1 text-sm font-semibold transition-colors ${
              isCommercial
                ? "text-brand-green hover:text-brand-green-dark"
                : "text-brand-gold hover:text-brand-gold-dark"
            }`}
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className={`group rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
              isCommercial
                ? "border-brand-green/10 hover:border-brand-green/30"
                : "border-brand-gold/10 hover:border-brand-gold/30"
            }`}
          >
            {article.category && (
              <span
                className={`mb-2 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase tracking-wide ${
                  isCommercial
                    ? "bg-brand-green-bg text-brand-green-dark"
                    : "bg-brand-gold-bg text-brand-gold-dark"
                }`}
              >
                {article.category}
              </span>
            )}
            <h3
              className={`mb-2 font-bold font-heading transition-colors ${
                isCommercial
                  ? "text-brand-green-dark group-hover:text-brand-green"
                  : "text-gray-900 group-hover:text-brand-gold"
              }`}
            >
              {article.title}
            </h3>
            {article.excerpt && (
              <p className="text-sm text-gray-600 line-clamp-2">{article.excerpt}</p>
            )}
            <span
              className={`mt-3 inline-flex items-center gap-1 text-sm font-semibold ${
                isCommercial ? "text-brand-green" : "text-brand-gold"
              }`}
            >
              Read More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default HubRelatedArticles;
