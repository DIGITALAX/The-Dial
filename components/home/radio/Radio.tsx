import Image from "next/legacy/image";
import { FunctionComponent } from "react";

const Radio: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-full flex bg-offBlack p-4 pt-8 pb-8 md:pt-10 md:pb-10 md:p-10">
      <div className="relative w-full h-full grid grid-col-flow auto-cols-[auto auto] gap-3">
        <div
          id="turn"
          className="col-start-1 row-start-1 relative w-full h-full grid grid-flow-col auto-cols-[auto auto] place-self-center p-0.5 rounded-xl"
        >
          <Image
            height={150}
            width={800}
            src="/images/radio.png"
            alt="radio dashboard"
            className="rounded-xl"
          />
        </div>

        <div className="relative h-fit w-fit col-start-1 row-start-2 md:row-start-1 md:col-start-2 place-self-center md:pt-0 pt-4">
          <div
            id="border"
            className="relative w-full h-full p-1 rounded-full grid grid-flow-col auto-cols-[auto auto]"
          >
            <div
              id="turn"
              className="h-12 w-12 sm:w-14 sm:h-14 lg:w-fit lg:h-fit p-1 rounded-full col-start-1 place-self-center grid grid-flow-col auto-cols-[auto auto]"
            >
              <Image
                width={90}
                height={90}
                src="/images/turn.png"
                alt="radio turn"
                className="col-start-1 place-self-center hover:rotate-90 active:rotate-180 cursor-pointer active:mix-blend-color-dodge"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radio;
