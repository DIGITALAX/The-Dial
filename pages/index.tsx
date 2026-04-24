import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Canvas from "../components/home/canvas/Canvas";
import Claim from "../components/home/claim/Claim";
import Dial from "../components/home/dial/Dial";
import Display from "../components/home/display/Display";
import Posts from "../components/home/posts/Posts";
import Radio from "../components/home/radio/Radio";
import Slider from "../components/home/slider/Slider";
import Social from "../components/home/social/Social";
import Text from "../components/home/text/Text";
import Header from "../components/layout/Header";
import useI18n from "../hooks/useI18n";
import { getLanguageTag, normalizeLocale } from "../lib/i18n";
import { getAllPostSummaries } from "../lib/posts";
import { getLocalePath, getSiteUrl } from "../lib/seo";
import { PostSummary } from "../types/post.types";

type HomeProps = {
  posts: PostSummary[];
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}: HomeProps) => {
  const { messages } = useI18n();
  const router = useRouter();
  const locale = normalizeLocale(router.locale);
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}${getLocalePath(locale)}`;
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: messages.home.title,
    url: pageUrl,
    inLanguage: getLanguageTag(locale),
    publisher: {
      "@type": "Organization",
      name: "DIGITALAX",
      url: siteUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: post.title,
        url: `${siteUrl}${getLocalePath(locale, `/posts/${post.slug}`)}`,
      })),
    },
  };

  return (
    <div>
      <Head>
        <title>{messages.home.title}</title>
        <meta
          name="description"
          content={messages.home.description}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content={messages.home.title} />
        <meta property="og:image" content={`${siteUrl}/card.png`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:locale" content={getLanguageTag(locale)} />
        <link rel="canonical" href={pageUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
        />
      </Head>
      <div
        className={
          "min-h-screen h-auto w-screen min-w-screen grid grid-flow-col auto-cols-[auto auto] relative p-[4vw] pr-[10vw] pl-[10vw]"
        }
      >
        <div
          id="grad"
          className="col-start-1 w-full h-fit relative p-1 overflow-hidden"
        >
          <Header />
          <Canvas />
          <Text />
          <Posts posts={posts} />
          <Slider />
          <Display />
          <Radio />
          <Claim />
          <Dial />
          <Social />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => {
  return {
    props: {
      posts: getAllPostSummaries(locale),
    },
  };
};

export default Home;
