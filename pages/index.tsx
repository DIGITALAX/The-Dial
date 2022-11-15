import type { NextPage } from "next";
import Head from "next/head";
import Canvas from "../components/home/canvas/Canvas";
import Claim from "../components/home/claim/Claim";
import Dial from "../components/home/dial/Dial";
import Display from "../components/home/display/Display";
import Radio from "../components/home/radio/Radio";
import Slider from "../components/home/slider/Slider";
import Social from "../components/home/social/Social";
import Text from "../components/home/text/Text";
import Header from "../components/layout/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>The Dial</title>
        <meta
          name="description"
          content="An ever evolving canvas you can use with friends."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content="The Dial" />
        <meta property="og:image" content="https://thedial.xyz/card.png/" />
        <meta property="og:type" content="website" />
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

export default Home;
