import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../components/layout/Footer";
import { getLanguageTag, normalizeLocale } from "../lib/i18n";
import { getSiteUrl } from "../lib/seo";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const locale = normalizeLocale(router.locale);
  const isPostPage = router.pathname.startsWith("/posts");
  const siteUrl = getSiteUrl();

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DIGITALAX",
    url: siteUrl,
    logo: `${siteUrl}/favicon.ico`,
    sameAs: [
      "https://twitter.com/DIGITALAX_",
      "https://github.com/digitalax",
      "https://www.instagram.com/_digitalax/",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DIGITALAX",
    url: siteUrl,
    inLanguage: getLanguageTag(locale),
  };

  return (
    <div
      lang={getLanguageTag(locale)}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="min-h-fit h-auto min-w-screen w-screen relative selection:bg-offBlue selection:text-midWhite"
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </Head>
      <Component {...pageProps} />
      {!isPostPage && <Footer />}
    </div>
  );
}

export default MyApp;
