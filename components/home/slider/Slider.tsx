import { FunctionComponent, useState } from "react";
import Image from "next/legacy/image";
import Marquee from "react-fast-marquee";

const Slider: FunctionComponent = (): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(true);
  const images: string[] = [
    "slider0",
    "slider1",
    "slider2",
    "slider3",
    "slider4",
    "slider5",
    "slider6",
    "slider7",
    "slider8",
    "slider9",
    "slider10",
    "slider11",
    "slider12",
    "slider13",
    "slider14",
    "slider15",
    "slider16",
    "slider17",
    "slider18",
    "slider19",
    "slider20",
    "slider21",
    "slider22",
    "slider23",
    "slider24",
    "slider25",
    "slider26",
    "slider27",
    "slider28",
    "slider29",
    "slider30",
    "slider31",
    "slider32",
    "slider33",
    "slider34",
    "slider35",
    "slider36",
    "slider37",
    "slider38",
    "slider39",
    "slider40",
    "slider41",
    "slider42",
    "slider43",
    "slider44",
    "slider45",
    "slider46",
    "slider47",
    "slider48",
    "slider49",
    "slider50",
    "slider51",
    "slider52",
    "slider53",
  ];

  return (
    <div className="relative grid-flow-row w-full h-auto auto-rows-[auto auto] bg-offBlack pb-10">
      <div className="relative row-start-1 w-full h-full">
        <div className="min-h-60 h-60 flex relative w-full overflow-hidden pt-10 overflow-hidden">
          <Marquee
            className="flex"
            pauseOnHover
            gradient={false}
            pauseOnClick
            direction="right"
          >
            {images.map((image, key) => {
              return (
                <div
                  key={key}
                  className={`min-h-36 min-w-36 h-36 w-36 relative mr-2 ${
                    blur && "blur-sm animate-unblur"
                  }`}
                >
                  <Image
                    src={`/images/slider/${image}.png`}
                    objectFit="cover"
                    layout="fill"
                    priority
                    placeholder="blur"
                    objectPosition={"top"}
                    blurDataURL={`/images/blurred/${image}.png`}
                    onLoadingComplete={() => setBlur(false)}
                  />
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
      <div className="relative row-start-2 w-full h-full">
        <div className="relative place-self-start- w-fit h-fit text-offWhite font-lib pl-3 text-midGreen text-[2.5vw] sm:text-[1.4vw] md:text-[1vw]">
          <span className="text-heat">~/∞/:</span>{" "}
          <span className="text-libGray">dial -in dsm *.lens #</span> load
          process sheets and social threads
        </div>
      </div>
    </div>
  );
};

export default Slider;
