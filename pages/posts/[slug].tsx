import type {
  GetStaticPaths,
  GetStaticProps,
  NextPage
} from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import useI18n from "../../hooks/useI18n";
import { getLanguageTag, normalizeLocale } from "../../lib/i18n";
import { getAllPostSlugs, getPostBySlug } from "../../lib/posts";
import { getLocalePath, getSiteUrl } from "../../lib/seo";
import { PostBlock, ResolvedPost } from "../../types/post.types";

type PostPageProps = {
  post: ResolvedPost;
};

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  const { messages } = useI18n();
  const router = useRouter();
  const locale = normalizeLocale(router.locale);
  const siteUrl = getSiteUrl();
  const canonicalUrl = `${siteUrl}${getLocalePath(locale, `/posts/${post.slug}`)}`;
  const imageUrls = Array.from(
    new Set(
      post.blocks
        .filter((block): block is Extract<PostBlock, { type: "image" }> => block.type === "image")
        .map((block) => block.src)
    )
  );
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: getLanguageTag(locale),
    image: imageUrls,
    mainEntityOfPage: canonicalUrl,
    publisher: {
      "@type": "Organization",
      name: "DIGITALAX",
      url: siteUrl,
      logo: `${siteUrl}/favicon.ico`,
    },
    author: {
      "@type": "Organization",
      name: "DIGITALAX",
    },
  };

  const renderTextBlock = (block: Extract<PostBlock, { type: "text" }>) => {
    if (block.tag === "h1") {
      return <h1 className="font-coc text-2xl md:text-4xl text-offBlack">{block.value}</h1>;
    }

    if (block.tag === "h2") {
      return <h2 className="font-coc text-xl md:text-3xl text-offBlack">{block.value}</h2>;
    }

    if (block.tag === "h3") {
      return <h3 className="font-coc text-lg md:text-2xl text-offBlack">{block.value}</h3>;
    }

    if (block.tag === "blockquote") {
      return (
        <blockquote className="font-coc text-base md:text-xl italic text-offBlack/90 border-l-2 border-deep pl-4">
          {block.value}
        </blockquote>
      );
    }

    if (block.tag === "li") {
      return <p className="font-fira text-sm md:text-base leading-7 text-offBlack">• {block.value}</p>;
    }

    if (block.tag === "figcaption") {
      return <p className="font-fira text-xs md:text-sm text-deep">{block.value}</p>;
    }

    return <p className="font-fira text-sm md:text-base leading-7 text-offBlack">{block.value}</p>;
  };

  return (
    <div className="min-h-screen w-screen px-[8vw] py-8 bg-offBlack">
      <Head>
        <title>{post.title} | The Dial</title>
        <meta name="description" content={post.title} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.title} />
        <meta property="og:url" content={canonicalUrl} />
        {imageUrls[0] ? <meta property="og:image" content={imageUrls[0]} /> : null}
        <link rel="canonical" href={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      </Head>

      <div
        id="border"
        className="mx-auto max-w-3xl relative w-full h-fit rounded-lg p-0.5"
      >
        <div className="relative w-full h-full rounded-lg bg-midWhite p-6 md:p-10">
          <h1 className="font-coc text-2xl md:text-4xl text-offBlack">{post.title}</h1>

          <div className="mt-2 font-fira text-xs md:text-sm text-deep">
            {messages.post.dateLabel}: {post.date}
          </div>

          <div className="mt-6 grid gap-5">
            {post.blocks.map((block, index) => {
              if (block.type === "image") {
                return (
                  <img
                    key={`${block.src}-${index}`}
                    src={block.src}
                    alt={block.alt}
                    draggable={false}
                    className="w-full h-auto rounded-md"
                  />
                );
              }

              return <div key={`${block.tag}-${index}`}>{renderTextBlock(block)}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const slugs = getAllPostSlugs();
  const activeLocales = locales ?? ["en"];

  return {
    paths: activeLocales.flatMap((locale) =>
      slugs.map((slug) => ({
        params: { slug },
        locale,
      }))
    ),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async ({
  params,
  locale,
}) => {
  const slug = params?.slug;

  if (typeof slug !== "string") {
    return {
      notFound: true,
    };
  }

  const post = getPostBySlug(slug, locale);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
