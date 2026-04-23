import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";

import { getArticle, getArticleSlugs } from "@/lib/articles";
import { ArticleLayout } from "@/components/ArticleLayout";
import { mdxComponents } from "@/components/mdx-components";

const SITE_URL = "https://fcsflorida.com";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const { title, description, date, lastmod, ogImage, tags } = article.frontmatter;
  const url = `${SITE_URL}/resources/${slug}/`;

  return {
    title: `${title} | Florida Construction Specialists`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Florida Construction Specialists",
      locale: "en_US",
      type: "article",
      publishedTime: date,
      modifiedTime: lastmod || date,
      tags,
      images: ogImage
        ? [{ url: ogImage, width: 1280, height: 720, alt: title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function ResourceArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <ArticleLayout article={article}>
      <MDXRemote source={article.content} components={mdxComponents} />
    </ArticleLayout>
  );
}
