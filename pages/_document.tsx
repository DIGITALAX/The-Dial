import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
        <meta name="og:url" content="https://thedial.xyz/" />
          <meta name="og:title" content="The Dial" />
          <meta name="og:description" content="We write prompts, design styles & build code for protocol-ecosystems where web3 fashion & latent machines draw distances between ideas & reality closer each day." />
          <meta name="og:image" content="https://thedial.xyz/card.png/" />
          <meta name="twitter:card" content="summary" />
          <meta name="og:url" content="https://thedial.xyz/" />
          <meta name="og:image" content="https://thedial.xyz/card.png/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@igitalax_" />
          <meta name="twitter:creator" content="@digitalax_" />
          <meta
            name="twitter:image"
            content="https://thedial.xyz/card.png/"
          />
          <meta name="twitter:url" content="https://thedial.xyz/" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="canonical" href="https://thedial.xyz/" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                @font-face {
                    font-family: "Valencia";
                    font-weight: 400;
                    src: url("./fonts/De-Valencia.otf");
                }

                @font-face {
                  font-family: "Cochin";
                  font-weight: 400;
                  src: url("./fonts/Cochin.ttc");
                }

                @font-face {
                  font-family: "Fira Medium";
                  font-weight: 400;
                  src: url("./fonts/FiraCode-Medium.ttf");
                }

                @font-face {
                  font-family: "Fira Regular";
                  font-weight: 400;
                  src: url("./fonts/FiraCode-Regular.ttf");
                }

                @font-face {
                  font-family: "Nexus";
                  font-weight: 400;
                  src: url("./fonts/Nexus-ZV54m.ttf");
                }

                @font-face {
                  font-family: "Odachi";
                  font-weight: 400;
                  src: url("./fonts/Odachi.otf");
                }

                @font-face {
                  font-family: "Liberation Mono Bold";
                  font-weight: 400;
                  src: url("./fonts/LiberationMono-Bold.ttf");
                }

                @font-face {
                  font-family: "Liberation Mono";
                  font-weight: 400;
                  src: url("./fonts/LiberationMono-Regular.ttf");
                }

                @font-face {
                  font-family: "ALVA Regular";
                  font-weight: 400;
                  src: url("./fonts/ALVA-Regular.ttf");
                }
            `,
            }}
          ></style>
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
