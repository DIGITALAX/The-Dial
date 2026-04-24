import { GetServerSideProps } from "next";
import { LOCALES, AppLocale } from "../lib/i18n";
import { getLocalePath, getSiteUrl, toAbsoluteUrl } from "../lib/seo";

type SitemapUrlEntry = {
  loc: string;
  lastmod?: string;
  changefreq?: "daily" | "weekly" | "monthly";
  priority?: string;
  images?: string[];
};

const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"];
const POSTS_DIR = ["content", "posts"];
const PUBLIC_IMAGES_DIR = ["public", "images"];

const escapeXml = (value: string): string => {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
};

const toImageUrl = (src: string): string => {
  if (/^https?:\/\//i.test(src)) {
    return src;
  }

  return toAbsoluteUrl(src);
};

const collectPublicImages = (
  fs: typeof import("fs"),
  path: typeof import("path"),
  dir: string,
  prefix = "/images"
): string[] => {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const images: string[] = [];

  for (const entry of entries) {
    const absolutePath = path.join(dir, entry.name);
    const relativePath = `${prefix}/${entry.name}`;

    if (entry.isDirectory()) {
      images.push(...collectPublicImages(fs, path, absolutePath, relativePath));
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();
    if (!IMAGE_EXTENSIONS.includes(extension)) {
      continue;
    }

    images.push(toAbsoluteUrl(relativePath));
  }

  return images;
};

const renderUrlEntry = (entry: SitemapUrlEntry): string => {
  const images = (entry.images ?? [])
    .map(
      (imageUrl) =>
        `<image:image><image:loc>${escapeXml(imageUrl)}</image:loc></image:image>`
    )
    .join("");

  return [
    "<url>",
    `<loc>${escapeXml(entry.loc)}</loc>`,
    entry.lastmod ? `<lastmod>${escapeXml(entry.lastmod)}</lastmod>` : "",
    entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : "",
    entry.priority ? `<priority>${entry.priority}</priority>` : "",
    images,
    "</url>",
  ].join("");
};

const buildSitemapXml = (): string => {
  // This route runs server-side only.
  const fs = require("fs") as typeof import("fs");
  const path = require("path") as typeof import("path");
  const siteUrl = getSiteUrl();
  const locales = [...LOCALES] as AppLocale[];
  const postsDir = path.join(process.cwd(), ...POSTS_DIR);
  const imageDir = path.join(process.cwd(), ...PUBLIC_IMAGES_DIR);

  const allPosts = fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".json"))
    .map((file) =>
      JSON.parse(fs.readFileSync(path.join(postsDir, file), "utf8")) as {
        slug: string;
        date: string;
        translations: {
          en: {
            blocks: Array<{ type: string; src?: string }>;
          };
        };
      }
    );

  const homepageImages = collectPublicImages(fs, path, imageDir);
  const entries: SitemapUrlEntry[] = [];

  const today = new Date().toISOString().split("T")[0];

  for (const locale of locales) {
    entries.push({
      loc: `${siteUrl}${getLocalePath(locale)}`,
      lastmod: today,
      changefreq: "weekly",
      priority: "1.0",
      images: homepageImages,
    });
  }

  for (const post of allPosts) {
    const postImages = Array.from(
      new Set(
        post.translations.en.blocks
          .filter((block) => block.type === "image" && typeof block.src === "string")
          .map((block) => toImageUrl(block.src as string))
      )
    );

    for (const locale of locales) {
      entries.push({
        loc: `${siteUrl}${getLocalePath(locale, `/posts/${post.slug}`)}`,
        lastmod: post.date,
        changefreq: "monthly",
        priority: "0.8",
        images: postImages,
      });
    }
  }

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...entries.map(renderUrlEntry),
    "</urlset>",
  ].join("");
};

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = buildSitemapXml();

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
