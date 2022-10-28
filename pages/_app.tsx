import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/layout/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-fit h-auto min-w-screen w-screen relative selection:bg-offBlue selection:text-midWhite">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
