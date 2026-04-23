import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export interface FaqItem {
  q: string;
  a: string;
}

export interface ArticleFrontmatter {
  title: string;
  description: string;
  date: string;
  lastmod?: string;
  slug: string;
  tags?: string[];
  topic?: string;
  question_id?: string;
  city?: string;
  type?: string;
  ogImage?: string;
  heroImage?: string;
  heroAlt?: string;
  heroCaption?: string;
  faq?: FaqItem[];
}

export interface Article {
  frontmatter: ArticleFrontmatter;
  content: string;
  readingTimeMinutes: number;
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getArticle(slug: string): Article | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);
  return {
    frontmatter: { ...(data as ArticleFrontmatter), slug },
    content,
    readingTimeMinutes: Math.max(1, Math.round(stats.minutes)),
  };
}

export function getAllArticles(): Article[] {
  return getArticleSlugs()
    .map((slug) => getArticle(slug))
    .filter((a): a is Article => a !== null)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
    );
}
