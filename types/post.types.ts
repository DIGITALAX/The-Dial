export type PostLocale = "en" | "es" | "ar";

export type PostSummary = {
  slug: string;
  title: string;
  date: string;
};

export type PostBlock =
  | {
      type: "text";
      tag: "h1" | "h2" | "h3" | "p" | "blockquote" | "li" | "figcaption";
      value: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
    };

export type LocalizedPost = {
  title: string;
  blocks: PostBlock[];
};

export type Post = {
  slug: string;
  date: string;
  translations: Record<PostLocale, LocalizedPost>;
};

export type ResolvedPost = PostSummary & {
  blocks: PostBlock[];
};
