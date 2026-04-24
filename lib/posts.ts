import fs from "fs";
import path from "path";
import {
  Post,
  PostBlock,
  PostLocale,
  PostSummary,
  ResolvedPost,
} from "../types/post.types";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

const getPostFiles = (): string[] => {
  if (!fs.existsSync(POSTS_DIR)) {
    return [];
  }

  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".json"))
    .sort((a, b) => b.localeCompare(a));
};

const readPostFile = (fileName: string): Post => {
  const fullPath = path.join(POSTS_DIR, fileName);
  const raw = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(raw) as Post;
};

const resolveLocale = (locale?: string): PostLocale => {
  if (locale?.startsWith("es")) {
    return "es";
  }

  if (locale?.startsWith("ar")) {
    return "ar";
  }

  return "en";
};

const ensureDigitalaxAlt = (alt: string): string => {
  const trimmed = alt.trim();

  if (!trimmed) {
    return "DIGITALAX image";
  }

  if (/digitalax/i.test(trimmed)) {
    return trimmed;
  }

  return `DIGITALAX ${trimmed}`;
};

const normalizeImageAlts = (blocks: PostBlock[]): PostBlock[] => {
  return blocks.map((block) => {
    if (block.type !== "image") {
      return block;
    }

    return {
      ...block,
      alt: ensureDigitalaxAlt(block.alt),
    };
  });
};

export const getAllPostSummaries = (locale?: string): PostSummary[] => {
  const activeLocale = resolveLocale(locale);

  return getPostFiles().map((fileName) => {
    const post = readPostFile(fileName);
    const localized = post.translations[activeLocale] ?? post.translations.en;

    return {
      slug: post.slug,
      title: localized.title,
      date: post.date,
    };
  });
};

export const getAllPostSlugs = (): string[] => {
  return getPostFiles().map((fileName) => fileName.replace(/\.json$/, ""));
};

export const getAllPosts = (): Post[] => {
  return getPostFiles().map((fileName) => readPostFile(fileName));
};

export const getPostBySlug = (
  slug: string,
  locale?: string
): ResolvedPost | null => {
  const safeSlug = slug.replace(/[^a-zA-Z0-9\-_]/g, "");
  const fileName = `${safeSlug}.json`;
  const fullPath = path.join(POSTS_DIR, fileName);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const post = readPostFile(fileName);
  const activeLocale = resolveLocale(locale);
  const localized = post.translations[activeLocale] ?? post.translations.en;

  return {
    slug: post.slug,
    date: post.date,
    title: localized.title,
    blocks: normalizeImageAlts(localized.blocks),
  };
};
