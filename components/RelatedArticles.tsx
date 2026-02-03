"use client";

import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export interface RelatedArticle {
  title: string;
  href: string;
  description: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
  title?: string;
  variant?: "commercial" | "residential" | "neutral";
}

export function RelatedArticles({
  articles,
  title = "Related Articles",
  variant = "commercial",
}: RelatedArticlesProps) {
  const colors = {
    commercial: {
      title: "text-brand-green-dark",
      border: "border-brand-green/10 hover:border-brand-green/30",
      tag: "bg-brand-green-bg text-brand-green-dark",
      link: "text-brand-green",
      icon: "text-brand-green",
    },
    residential: {
      title: "text-brand-gold-dark",
      border: "border-brand-gold/10 hover:border-brand-gold/30",
      tag: "bg-brand-gold-bg text-brand-gold-dark",
      link: "text-brand-gold",
      icon: "text-brand-gold",
    },
    neutral: {
      title: "text-gray-900",
      border: "border-gray-200 hover:border-gray-300",
      tag: "bg-gray-100 text-gray-700",
      link: "text-brand-green",
      icon: "text-brand-green",
    },
  };

  const c = colors[variant];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FileText className={`w-6 h-6 ${c.icon}`} />
            <h2 className={`text-2xl font-bold font-heading ${c.title}`}>
              {title}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-1">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className={`group block rounded-xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${c.border}`}
              >
                <h3 className={`font-bold font-heading text-lg mb-2 transition-colors group-hover:${c.link}`}>
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {article.description}
                </p>
                <span className={`inline-flex items-center gap-1 text-sm font-semibold ${c.link}`}>
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RelatedArticles;
