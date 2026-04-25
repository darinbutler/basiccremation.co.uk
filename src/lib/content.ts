import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";

const contentDirectory = path.join(process.cwd(), "src/content");

export interface ContentFrontmatter {
  title: string;
  description: string;
  city?: string;
  region?: string;
  lastUpdated?: string;
}

export interface ContentItem {
  slug: string;
  frontmatter: ContentFrontmatter;
  contentHtml: string;
}

export function getContentSlugs(folder: string): string[] {
  const dir = path.join(contentDirectory, folder);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export async function getContentBySlug(folder: string, slug: string): Promise<ContentItem | null> {
  const fullPath = path.join(contentDirectory, folder, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(remarkGfm).use(remarkHtml).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    frontmatter: data as ContentFrontmatter,
    contentHtml
  };
}

export async function getAllContent(folder: string): Promise<ContentItem[]> {
  const slugs = getContentSlugs(folder);
  const items = await Promise.all(slugs.map((slug) => getContentBySlug(folder, slug)));
  return items.filter((item): item is ContentItem => item !== null);
}
