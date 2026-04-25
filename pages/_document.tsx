import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { getLanguageTag, normalizeLocale } from "../lib/i18n";

class Document extends NextDocument {
  render() {
    const locale = normalizeLocale((this.props as any).__NEXT_DATA__?.locale);

    return (
      <Html lang={getLanguageTag(locale)} dir={locale === "ar" ? "rtl" : "ltr"}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <script>0</script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
