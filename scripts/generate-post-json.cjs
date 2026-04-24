const fs = require("fs");
const path = require("path");

const SOURCE_DIR = path.join(process.cwd(), "posts");
const OUTPUT_DIR = path.join(process.cwd(), "content", "posts");

const decodeHtmlEntities = (value) => {
  return value
    .replace(/&#(\d+);/g, (_, dec) =>
      String.fromCharCode(Number.parseInt(dec, 10))
    )
    .replace(/&#x([\da-f]+);/gi, (_, hex) =>
      String.fromCharCode(Number.parseInt(hex, 16))
    )
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
};

const stripHtml = (value) => {
  return decodeHtmlEntities(value.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
};

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const parseDateFromFileName = (fileName) => {
  const matched = fileName.match(/^(\d{4}-\d{2}-\d{2})_/);
  return matched ? matched[1] : "";
};

const parseTitleFromHtml = (html) => {
  const matched = html.match(/<title>([\s\S]*?)<\/title>/i);
  return matched ? stripHtml(matched[1]) : "Untitled Post";
};

const parseBlocksFromHtml = (html) => {
  const bodyMatch = html.match(
    /<section data-field="body" class="e-content">([\s\S]*?)<\/section>\s*<footer>/i
  );
  const rawBody = bodyMatch ? bodyMatch[1] : "";

  const normalizedBody = rawBody
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<figure[^>]*graf--iframe[\s\S]*?<\/figure>/gi, "");

  const pattern =
    /<img\b[^>]*src=['"]([^'"]+)['"][^>]*>|<(h1|h2|h3|p|blockquote|figcaption|li)\b[^>]*>([\s\S]*?)<\/\2>/gi;

  const blocks = [];
  let match = null;

  while ((match = pattern.exec(normalizedBody)) !== null) {
    const imageSrc = match[1];
    const tag = match[2];
    const textContent = match[3];

    if (imageSrc) {
      blocks.push({
        type: "image",
        src: imageSrc,
        alt: "DIGITALAX post image",
      });
      continue;
    }

    if (!tag || !textContent) {
      continue;
    }

    const cleaned = stripHtml(textContent);

    if (!cleaned) {
      continue;
    }

    blocks.push({
      type: "text",
      tag,
      value: cleaned,
    });
  }

  return blocks;
};

const PHRASES_ES = [
  ["A Weekly Community Thread", "Un hilo comunitario semanal"],
  ["Community Updates", "Actualizaciones de la comunidad"],
  ["Top Questions", "Preguntas principales"],
  ["Common Repeat Questions", "Preguntas repetidas"],
  ["Top Industry Controversies", "Controversias principales"],
  ["Join our Community", "Unete a nuestra comunidad"],
  ["The All In One Creative Editor", "El editor creativo todo en uno"],
];

const PHRASES_AR = [
  ["A Weekly Community Thread", "ثريد مجتمعي اسبوعي"],
  ["Community Updates", "تحديثات المجتمع"],
  ["Top Questions", "اهم الاسئلة"],
  ["Common Repeat Questions", "الاسئلة المتكررة"],
  ["Top Industry Controversies", "اهم جدالات المجال"],
  ["Join our Community", "انضم لمجتمعنا"],
  ["The All In One Creative Editor", "محرر الابداع الكل في واحد"],
];

const WORDS_ES = {
  the: "el",
  and: "y",
  of: "de",
  to: "a",
  in: "en",
  for: "para",
  with: "con",
  on: "en",
  from: "de",
  new: "nuevo",
  week: "semana",
  community: "comunidad",
  thread: "hilo",
  update: "actualizacion",
  updates: "actualizaciones",
  social: "social",
  fashion: "moda",
  ecosystem: "ecosistema",
  questions: "preguntas",
  question: "pregunta",
  introducing: "introduciendo",
  why: "por que",
  how: "como",
  creative: "creativo",
  editor: "editor",
  digital: "digital",
  protocol: "protocolo",
  governance: "gobernanza",
  web3: "web3",
  ai: "ia",
  posts: "publicaciones",
  post: "publicacion",
  lens: "lens",
  profile: "perfil",
  date: "fecha",
};

const WORDS_AR = {
  the: "ال",
  and: "و",
  of: "من",
  to: "الى",
  in: "في",
  for: "لـ",
  with: "مع",
  on: "على",
  from: "من",
  new: "جديد",
  week: "اسبوع",
  community: "المجتمع",
  thread: "ثريد",
  update: "تحديث",
  updates: "تحديثات",
  social: "سوشيال",
  fashion: "فاشون",
  ecosystem: "النظام",
  questions: "اسئلة",
  question: "سؤال",
  introducing: "تقديم",
  why: "ليه",
  how: "ازاي",
  creative: "ابداعي",
  editor: "محرر",
  digital: "ديجيتال",
  protocol: "بروتوكول",
  governance: "حوكمة",
  web3: "ويب3",
  ai: "ذكاء اصطناعي",
  posts: "بوستات",
  post: "بوست",
  lens: "لينز",
  profile: "بروفايل",
  date: "تاريخ",
};

const replacePhrases = (text, phrases) => {
  let output = text;

  for (const [source, target] of phrases) {
    output = output.replace(new RegExp(escapeRegExp(source), "gi"), target);
  }

  return output;
};

const replaceWords = (text, words) => {
  return text.replace(/[A-Za-z']+/g, (token) => {
    const translated = words[token.toLowerCase()];

    if (!translated) {
      return token;
    }

    return translated;
  });
};

const translateText = (text, locale) => {
  if (locale === "en") {
    return text;
  }

  if (locale === "es") {
    return replaceWords(replacePhrases(text, PHRASES_ES), WORDS_ES);
  }

  return replaceWords(replacePhrases(text, PHRASES_AR), WORDS_AR);
};

const translateBlocks = (blocks, locale) => {
  return blocks.map((block) => {
    if (block.type === "image") {
      return {
        ...block,
        alt:
          locale === "es"
            ? "DIGITALAX imagen de publicacion"
            : locale === "ar"
            ? "DIGITALAX صورة بوست"
            : block.alt,
      };
    }

    return {
      ...block,
      value: translateText(block.value, locale),
    };
  });
};

const buildPostJson = (fileName) => {
  const fullPath = path.join(SOURCE_DIR, fileName);
  const html = fs.readFileSync(fullPath, "utf8");
  const slug = fileName.replace(/\.html$/, "");
  const title = parseTitleFromHtml(html);
  const date = parseDateFromFileName(fileName);
  const blocks = parseBlocksFromHtml(html);

  return {
    slug,
    date,
    translations: {
      en: {
        title,
        blocks,
      },
      es: {
        title: translateText(title, "es"),
        blocks: translateBlocks(blocks, "es"),
      },
      ar: {
        title: translateText(title, "ar"),
        blocks: translateBlocks(blocks, "ar"),
      },
    },
  };
};

const run = () => {
  if (!fs.existsSync(SOURCE_DIR)) {
    throw new Error("Missing source directory: posts");
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const files = fs
    .readdirSync(SOURCE_DIR)
    .filter((file) => file.endsWith(".html"))
    .sort((a, b) => b.localeCompare(a));

  for (const file of files) {
    const post = buildPostJson(file);
    const targetPath = path.join(OUTPUT_DIR, `${post.slug}.json`);
    fs.writeFileSync(targetPath, JSON.stringify(post, null, 2), "utf8");
  }

  console.log(`Generated ${files.length} JSON posts in content/posts`);
};

run();
