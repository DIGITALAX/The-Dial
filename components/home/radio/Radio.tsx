import Image from "next/legacy/image";
import { FunctionComponent } from "react";

const Radio: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-full flex bg-offBlack p-10">
      <div className="relative w-full h-full grid grid-col-flow auto-cols-[auto auto] gap-3">
        <div
          id="turn"
          className="col-start-1 relative w-full h-full grid grid-flow-col auto-cols-[auto auto] place-self-center p-0.5 rounded-xl"
        >
          <Image
            height={150}
            width={800}
            src="/images/radio.png"
            alt="radio dashboard"
          />
        </div>

        <div className="relative h-fit w-fit col-start-2 place-self-center">
          <div
            id="border"
            className="relative w-full h-full p-1 rounded-full grid grid-flow-col auto-cols-[auto auto]"
          >
            <div
              id="turn"
              className="w-fit h-fit p-1 rounded-full col-start-1 place-self-center grid grid-flow-col auto-cols-[auto auto]"
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
